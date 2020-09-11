goog.provide('com.wsscode.pathom.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('clojure.walk');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.pathom.parser');
goog.require('com.wsscode.pathom.trace');
goog.require('edn_query_language.core');
goog.require('goog.object');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56829){
return cljs.core.map_QMARK_(G__56829);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56830){
return cljs.core.vector_QMARK_(G__56830);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56831){
return cljs.core.map_QMARK_(G__56831);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.core","atom?","com.wsscode.pathom.core/atom?",332525267,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__56832_SHARP_){
return (com.wsscode.pathom.core.atom_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.atom_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__56832_SHARP_) : com.wsscode.pathom.core.atom_QMARK_.call(null,p1__56832_SHARP_));
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),cljs.core.set_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952),new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader","reader",169660853)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"reader","reader",169660853),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null),new cljs.core.Keyword("com.wsscode.pathom.core","parser","com.wsscode.pathom.core/parser",-740326395),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__56836){
return cljs.core.map_QMARK_(G__56836);
})], null),(function (G__56836){
return cljs.core.map_QMARK_(G__56836);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.fn_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56841){
return cljs.core.coll_QMARK_(G__56841);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.map_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56843){
return cljs.core.map_QMARK_(G__56843);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.nat_int_QMARK_], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56852){
return cljs.core.vector_QMARK_(G__56852);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__56856){
return cljs.core.map_QMARK_(G__56856);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681))], null),null));
com.wsscode.pathom.core.break_values = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Takes an AST and return a single set with all properties that appear in a query.
 * 
 *   Example:
 * 
 *   (-> [:foo {:bar [:baz]}] eql/query->ast pc/all-out-attributes)
 *   ; => #{:foo :bar :baz}
 */
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__56862){
var map__56863 = p__56862;
var map__56863__$1 = (((((!((map__56863 == null))))?(((((map__56863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56863):map__56863);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__56863,map__56863__$1,children){
return (function (attrs,p__56868){
var map__56870 = p__56868;
var map__56870__$1 = (((((!((map__56870 == null))))?(((((map__56870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56870):map__56870);
var node = map__56870__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__56873 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__56873,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__56873;
}
});})(map__56863,map__56863__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
/**
 * Merges nested maps without overwriting existing keys.
 */
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59343 = arguments.length;
var i__4731__auto___59350 = (0);
while(true){
if((i__4731__auto___59350 < len__4730__auto___59343)){
args__4736__auto__.push((arguments[i__4731__auto___59350]));

var G__59361 = (i__4731__auto___59350 + (1));
i__4731__auto___59350 = G__59361;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.every_QMARK_((function (p1__56875_SHARP_){
return ((cljs.core.map_QMARK_(p1__56875_SHARP_)) || ((p1__56875_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq56879){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56879));
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
/**
 * Given an AST convert it back into a query expression.
 */
com.wsscode.pathom.core.ast__GT_query = (function com$wsscode$pathom$core$ast__GT_query(query_ast){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
com.wsscode.pathom.core.filter_ast = (function com$wsscode$pathom$core$filter_ast(f,ast){
return clojure.walk.prewalk((function com$wsscode$pathom$core$filter_ast_$_filter_ast_walk(x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"children","children",-940561982))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__56895_SHARP_){
return cljs.core.filterv(f,p1__56895_SHARP_);
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
var len__4730__auto___59408 = arguments.length;
var i__4731__auto___59409 = (0);
while(true){
if((i__4731__auto___59409 < len__4730__auto___59408)){
args__4736__auto__.push((arguments[i__4731__auto___59409]));

var G__59415 = (i__4731__auto___59409 + (1));
i__4731__auto___59409 = G__59415;
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
var vec__56914 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56914,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq56906){
var G__56907 = cljs.core.first(seq56906);
var seq56906__$1 = cljs.core.next(seq56906);
var G__56908 = cljs.core.first(seq56906__$1);
var seq56906__$2 = cljs.core.next(seq56906__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56907,G__56908,seq56906__$2);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__56930 = ast;
var G__56930__$1 = (((G__56930 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__56930));
var G__56930__$2 = (((G__56930__$1 == null))?null:cljs.core.first(G__56930__$1));
if((G__56930__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__56930__$2);
}
})());
});
com.wsscode.pathom.core.maybe_merge_union_ast = (function com$wsscode$pathom$core$maybe_merge_union_ast(ast){
if(com.wsscode.pathom.core.union_children_QMARK_(ast)){
var merged_children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"children","children",-940561982)),(function (){var G__56934 = ast;
var G__56934__$1 = (((G__56934 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__56934));
var G__56934__$2 = (((G__56934__$1 == null))?null:cljs.core.first(G__56934__$1));
if((G__56934__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__56934__$2);
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,new cljs.core.Keyword(null,"children","children",-940561982),merged_children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),merged_children], null))], 0));
} else {
return ast;
}
});
com.wsscode.pathom.core.merge_shapes = (function com$wsscode$pathom$core$merge_shapes(var_args){
var G__56941 = arguments.length;
switch (G__56941) {
case 1:
return com.wsscode.pathom.core.merge_shapes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.core.merge_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.core.merge_shapes.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

com.wsscode.pathom.core.merge_shapes.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.merge_shapes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
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

com.wsscode.pathom.core.merge_shapes.cljs$lang$maxFixedArity = 2;

/**
 * Convert AST to shape descriptor format
 */
com.wsscode.pathom.core.ast__GT_shape_descriptor = (function com$wsscode$pathom$core$ast__GT_shape_descriptor(ast){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__56950){
var map__56951 = p__56950;
var map__56951__$1 = (((((!((map__56951 == null))))?(((((map__56951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56951):map__56951);
var node = map__56951__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),type)){
var unions = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.ast__GT_shape_descriptor),children);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.core.merge_shapes,m,unions);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,(com.wsscode.pathom.core.ast__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast__GT_shape_descriptor.call(null,node)));
}
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
});
/**
 * Convert Map to shape descriptor format
 */
com.wsscode.pathom.core.map__GT_shape_descriptor = (function com$wsscode$pathom$core$map__GT_shape_descriptor(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,((cljs.core.map_QMARK_(v))?(com.wsscode.pathom.core.map__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.map__GT_shape_descriptor.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.core.map__GT_shape_descriptor.call(null,v)):((cljs.core.sequential_QMARK_(v))?cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.map_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.core.map__GT_shape_descriptor)),com.wsscode.pathom.core.merge_shapes,cljs.core.PersistentArrayMap.EMPTY,v):cljs.core.PersistentArrayMap.EMPTY
)));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__56965,reader){
var map__56966 = p__56965;
var map__56966__$1 = (((((!((map__56966 == null))))?(((((map__56966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56966):map__56966);
var env = map__56966__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56966__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__56970 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56970,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__56966,map__56966__$1,env,ast){
return (function (p1__56961_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__56961_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__56961_SHARP_));
});})(map__56966,map__56966__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__56966,map__56966__$1,env,ast){
return (function (p1__56962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56962_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__56966,map__56966__$1,env,ast))
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
var res__54030__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__){
return (function (state_56998){
var state_val_56999 = (state_56998[(1)]);
if((state_val_56999 === (7))){
var state_56998__$1 = state_56998;
var statearr_57002_59475 = state_56998__$1;
(statearr_57002_59475[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_57002_59475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (1))){
var state_56998__$1 = state_56998;
var statearr_57004_59478 = state_56998__$1;
(statearr_57004_59478[(2)] = null);

(statearr_57004_59478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (4))){
var inst_56980 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
var statearr_57006_59484 = state_56998__$1;
(statearr_57006_59484[(2)] = inst_56980);

(statearr_57006_59484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (6))){
var inst_56988 = (state_56998[(7)]);
var inst_56987 = (state_56998[(2)]);
var inst_56988__$1 = com.wsscode.async.async_cljs.throw_err(inst_56987);
var inst_56989 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56988__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_56998__$1 = (function (){var statearr_57008 = state_56998;
(statearr_57008[(7)] = inst_56988__$1);

return statearr_57008;
})();
if(inst_56989){
var statearr_57009_59488 = state_56998__$1;
(statearr_57009_59488[(1)] = (7));

} else {
var statearr_57010_59489 = state_56998__$1;
(statearr_57010_59489[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (3))){
var inst_56996 = (state_56998[(2)]);
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56998__$1,inst_56996);
} else {
if((state_val_56999 === (2))){
var _ = (function (){var statearr_57012 = state_56998;
(statearr_57012[(4)] = cljs.core.cons((5),(state_56998[(4)])));

return statearr_57012;
})();
var state_56998__$1 = state_56998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56998__$1,(6),res__54030__auto__);
} else {
if((state_val_56999 === (9))){
var inst_56993 = (state_56998[(2)]);
var _ = (function (){var statearr_57013 = state_56998;
(statearr_57013[(4)] = cljs.core.rest((state_56998[(4)])));

return statearr_57013;
})();
var state_56998__$1 = state_56998;
var statearr_57016_59494 = state_56998__$1;
(statearr_57016_59494[(2)] = inst_56993);

(statearr_57016_59494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (5))){
var _ = (function (){var statearr_57017 = state_56998;
(statearr_57017[(4)] = cljs.core.rest((state_56998[(4)])));

return statearr_57017;
})();
var state_56998__$1 = state_56998;
var ex57011 = (state_56998__$1[(2)]);
var statearr_57019_59497 = state_56998__$1;
(statearr_57019_59497[(5)] = ex57011);


var statearr_57020_59500 = state_56998__$1;
(statearr_57020_59500[(1)] = (4));

(statearr_57020_59500[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56999 === (8))){
var inst_56988 = (state_56998[(7)]);
var state_56998__$1 = state_56998;
var statearr_57022_59503 = state_56998__$1;
(statearr_57022_59503[(2)] = inst_56988);

(statearr_57022_59503[(1)] = (9));


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
});})(c__48839__auto__,res__54030__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__48140__auto____0 = (function (){
var statearr_57025 = [null,null,null,null,null,null,null,null];
(statearr_57025[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__48140__auto__);

(statearr_57025[(1)] = (1));

return statearr_57025;
});
var com$wsscode$pathom$core$read_from_$_state_machine__48140__auto____1 = (function (state_56998){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_56998);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57026){var ex__48143__auto__ = e57026;
var statearr_57027_59507 = state_56998;
(statearr_57027_59507[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_56998[(4)]))){
var statearr_57029_59509 = state_56998;
(statearr_57029_59509[(1)] = cljs.core.first((state_56998[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59512 = state_56998;
state_56998 = G__59512;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__48140__auto__ = function(state_56998){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__48140__auto____1.call(this,state_56998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__))
})();
var state__48841__auto__ = (function (){var statearr_57032 = f__48840__auto__();
(statearr_57032[(6)] = c__48839__auto__);

return statearr_57032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194))){
return new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137);
} else {
return res;
}
}
});
/**
 * Like read-from, pulling reader from environment.
 */
com.wsscode.pathom.core.reader = (function com$wsscode$pathom$core$reader(env){
return com.wsscode.pathom.core.read_from(env,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410).cljs$core$IFn$_invoke$arity$1(env));
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
 * Recursively transduce children on the AST, you can use this to apply filter/transformations
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
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__57047){
var map__57049 = p__57047;
var map__57049__$1 = (((((!((map__57049 == null))))?(((((map__57049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57049):map__57049);
var node = map__57049__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__57053 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__57053,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__57053,map__57049,map__57049__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__57053,map__57049,map__57049__$1,node,children){
return (function (p1__57046_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__57046_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__57046_SHARP_));
});})(G__57053,map__57049,map__57049__$1,node,children))
)),children__$1);
});})(G__57053,map__57049,map__57049__$1,node,children))
);
} else {
return G__57053;
}
});
com.wsscode.pathom.core.special_outputs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__57062){
var vec__57064 = p__57062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57064,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57064,(1),null);
return cljs.core.contains_QMARK_(item_set,v);
})),input),cljs.core.meta(input));
});
/**
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_not_found = (function com$wsscode$pathom$core$elide_not_found(input){
return com.wsscode.pathom.core.elide_items(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null),input);
});
/**
 * Convert all ::p/not-found values of maps to nil
 */
com.wsscode.pathom.core.elide_special_outputs = (function com$wsscode$pathom$core$elide_special_outputs(input){
return com.wsscode.pathom.core.elide_items(com.wsscode.pathom.core.special_outputs,input);
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
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__57075){
var map__57077 = p__57075;
var map__57077__$1 = (((((!((map__57077 == null))))?(((((map__57077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57077):map__57077);
var env = map__57077__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57077__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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
var G__57089 = arguments.length;
switch (G__57089) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__57094,attributes){
var map__57095 = p__57094;
var map__57095__$1 = (((((!((map__57095 == null))))?(((((map__57095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57095):map__57095);
var env = map__57095__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57095__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__54030__auto__ = (function (){var G__57100 = env;
var G__57101 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__57100,G__57101) : parser.call(null,G__57100,G__57101));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,e,map__57095,map__57095__$1,env,parser){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,e,map__57095,map__57095__$1,env,parser){
return (function (state_57123){
var state_val_57124 = (state_57123[(1)]);
if((state_val_57124 === (7))){
var inst_57112 = (state_57123[(7)]);
var inst_57115 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_57112], 0));
var state_57123__$1 = state_57123;
var statearr_57127_59537 = state_57123__$1;
(statearr_57127_59537[(2)] = inst_57115);

(statearr_57127_59537[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (1))){
var state_57123__$1 = state_57123;
var statearr_57128_59538 = state_57123__$1;
(statearr_57128_59538[(2)] = null);

(statearr_57128_59538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (4))){
var inst_57104 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
var statearr_57130_59540 = state_57123__$1;
(statearr_57130_59540[(2)] = inst_57104);

(statearr_57130_59540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (6))){
var inst_57112 = (state_57123[(7)]);
var inst_57111 = (state_57123[(2)]);
var inst_57112__$1 = com.wsscode.async.async_cljs.throw_err(inst_57111);
var inst_57113 = cljs.core.map_QMARK_(inst_57112__$1);
var state_57123__$1 = (function (){var statearr_57132 = state_57123;
(statearr_57132[(7)] = inst_57112__$1);

return statearr_57132;
})();
if(inst_57113){
var statearr_57134_59541 = state_57123__$1;
(statearr_57134_59541[(1)] = (7));

} else {
var statearr_57135_59542 = state_57123__$1;
(statearr_57135_59542[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (3))){
var inst_57121 = (state_57123[(2)]);
var state_57123__$1 = state_57123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57123__$1,inst_57121);
} else {
if((state_val_57124 === (2))){
var _ = (function (){var statearr_57137 = state_57123;
(statearr_57137[(4)] = cljs.core.cons((5),(state_57123[(4)])));

return statearr_57137;
})();
var state_57123__$1 = state_57123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57123__$1,(6),res__54030__auto__);
} else {
if((state_val_57124 === (9))){
var inst_57118 = (state_57123[(2)]);
var _ = (function (){var statearr_57138 = state_57123;
(statearr_57138[(4)] = cljs.core.rest((state_57123[(4)])));

return statearr_57138;
})();
var state_57123__$1 = state_57123;
var statearr_57141_59545 = state_57123__$1;
(statearr_57141_59545[(2)] = inst_57118);

(statearr_57141_59545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (5))){
var _ = (function (){var statearr_57143 = state_57123;
(statearr_57143[(4)] = cljs.core.rest((state_57123[(4)])));

return statearr_57143;
})();
var state_57123__$1 = state_57123;
var ex57136 = (state_57123__$1[(2)]);
var statearr_57144_59546 = state_57123__$1;
(statearr_57144_59546[(5)] = ex57136);


var statearr_57146_59549 = state_57123__$1;
(statearr_57146_59549[(1)] = (4));

(statearr_57146_59549[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57124 === (8))){
var state_57123__$1 = state_57123;
var statearr_57147_59550 = state_57123__$1;
(statearr_57147_59550[(2)] = e);

(statearr_57147_59550[(1)] = (9));


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
});})(c__48839__auto__,res__54030__auto__,e,map__57095,map__57095__$1,env,parser))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,e,map__57095,map__57095__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$state_machine__48140__auto____0 = (function (){
var statearr_57150 = [null,null,null,null,null,null,null,null];
(statearr_57150[(0)] = com$wsscode$pathom$core$state_machine__48140__auto__);

(statearr_57150[(1)] = (1));

return statearr_57150;
});
var com$wsscode$pathom$core$state_machine__48140__auto____1 = (function (state_57123){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57123);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57153){var ex__48143__auto__ = e57153;
var statearr_57154_59552 = state_57123;
(statearr_57154_59552[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57123[(4)]))){
var statearr_57155_59553 = state_57123;
(statearr_57155_59553[(1)] = cljs.core.first((state_57123[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59554 = state_57123;
state_57123 = G__59554;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__48140__auto__ = function(state_57123){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__48140__auto____1.call(this,state_57123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__48140__auto____0;
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__48140__auto____1;
return com$wsscode$pathom$core$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,e,map__57095,map__57095__$1,env,parser))
})();
var state__48841__auto__ = (function (){var statearr_57156 = f__48840__auto__();
(statearr_57156[(6)] = c__48839__auto__);

return statearr_57156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,e,map__57095,map__57095__$1,env,parser))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
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
var G__57161 = arguments.length;
switch (G__57161) {
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
var res__54030__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__){
return (function (state_57176){
var state_val_57177 = (state_57176[(1)]);
if((state_val_57177 === (1))){
var state_57176__$1 = state_57176;
var statearr_57179_59562 = state_57176__$1;
(statearr_57179_59562[(2)] = null);

(statearr_57179_59562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57177 === (2))){
var _ = (function (){var statearr_57180 = state_57176;
(statearr_57180[(4)] = cljs.core.cons((5),(state_57176[(4)])));

return statearr_57180;
})();
var state_57176__$1 = state_57176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57176__$1,(6),res__54030__auto__);
} else {
if((state_val_57177 === (3))){
var inst_57174 = (state_57176[(2)]);
var state_57176__$1 = state_57176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57176__$1,inst_57174);
} else {
if((state_val_57177 === (4))){
var inst_57162 = (state_57176[(2)]);
var state_57176__$1 = state_57176;
var statearr_57184_59578 = state_57176__$1;
(statearr_57184_59578[(2)] = inst_57162);

(statearr_57184_59578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57177 === (5))){
var _ = (function (){var statearr_57185 = state_57176;
(statearr_57185[(4)] = cljs.core.rest((state_57176[(4)])));

return statearr_57185;
})();
var state_57176__$1 = state_57176;
var ex57183 = (state_57176__$1[(2)]);
var statearr_57186_59580 = state_57176__$1;
(statearr_57186_59580[(5)] = ex57183);


var statearr_57187_59581 = state_57176__$1;
(statearr_57187_59581[(1)] = (4));

(statearr_57187_59581[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57177 === (6))){
var inst_57169 = (state_57176[(2)]);
var inst_57170 = com.wsscode.async.async_cljs.throw_err(inst_57169);
var inst_57171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57170,attr);
var _ = (function (){var statearr_57190 = state_57176;
(statearr_57190[(4)] = cljs.core.rest((state_57176[(4)])));

return statearr_57190;
})();
var state_57176__$1 = state_57176;
var statearr_57191_59583 = state_57176__$1;
(statearr_57191_59583[(2)] = inst_57171);

(statearr_57191_59583[(1)] = (3));


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
var com$wsscode$pathom$core$state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$state_machine__48140__auto____0 = (function (){
var statearr_57192 = [null,null,null,null,null,null,null];
(statearr_57192[(0)] = com$wsscode$pathom$core$state_machine__48140__auto__);

(statearr_57192[(1)] = (1));

return statearr_57192;
});
var com$wsscode$pathom$core$state_machine__48140__auto____1 = (function (state_57176){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57176);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57194){var ex__48143__auto__ = e57194;
var statearr_57195_59588 = state_57176;
(statearr_57195_59588[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57176[(4)]))){
var statearr_57197_59589 = state_57176;
(statearr_57197_59589[(1)] = cljs.core.first((state_57176[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59591 = state_57176;
state_57176 = G__59591;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__48140__auto__ = function(state_57176){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__48140__auto____1.call(this,state_57176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__48140__auto____0;
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__48140__auto____1;
return com$wsscode$pathom$core$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__))
})();
var state__48841__auto__ = (function (){var statearr_57199 = f__48840__auto__();
(statearr_57199[(6)] = c__48839__auto__);

return statearr_57199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__))
);

return c__48839__auto__;
} else {
var e = res__54030__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__54030__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__){
return (function (state_57223){
var state_val_57224 = (state_57223[(1)]);
if((state_val_57224 === (7))){
var state_57223__$1 = state_57223;
var statearr_57226_59596 = state_57223__$1;
(statearr_57226_59596[(2)] = default$);

(statearr_57226_59596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57224 === (1))){
var state_57223__$1 = state_57223;
var statearr_57228_59598 = state_57223__$1;
(statearr_57228_59598[(2)] = null);

(statearr_57228_59598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57224 === (4))){
var inst_57200 = (state_57223[(2)]);
var state_57223__$1 = state_57223;
var statearr_57230_59600 = state_57223__$1;
(statearr_57230_59600[(2)] = inst_57200);

(statearr_57230_59600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57224 === (6))){
var inst_57209 = (state_57223[(7)]);
var inst_57207 = (state_57223[(2)]);
var inst_57208 = com.wsscode.async.async_cljs.throw_err(inst_57207);
var inst_57209__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57208,attr);
var inst_57210 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_57211 = (new cljs.core.PersistentArrayMap(null,2,inst_57210,null));
var inst_57212 = (new cljs.core.PersistentHashSet(null,inst_57211,null));
var inst_57213 = (inst_57212.cljs$core$IFn$_invoke$arity$1 ? inst_57212.cljs$core$IFn$_invoke$arity$1(inst_57209__$1) : inst_57212.call(null,inst_57209__$1));
var state_57223__$1 = (function (){var statearr_57231 = state_57223;
(statearr_57231[(7)] = inst_57209__$1);

return statearr_57231;
})();
if(cljs.core.truth_(inst_57213)){
var statearr_57233_59603 = state_57223__$1;
(statearr_57233_59603[(1)] = (7));

} else {
var statearr_57234_59604 = state_57223__$1;
(statearr_57234_59604[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57224 === (3))){
var inst_57220 = (state_57223[(2)]);
var state_57223__$1 = state_57223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57223__$1,inst_57220);
} else {
if((state_val_57224 === (2))){
var _ = (function (){var statearr_57238 = state_57223;
(statearr_57238[(4)] = cljs.core.cons((5),(state_57223[(4)])));

return statearr_57238;
})();
var state_57223__$1 = state_57223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57223__$1,(6),res__54030__auto__);
} else {
if((state_val_57224 === (9))){
var inst_57217 = (state_57223[(2)]);
var _ = (function (){var statearr_57239 = state_57223;
(statearr_57239[(4)] = cljs.core.rest((state_57223[(4)])));

return statearr_57239;
})();
var state_57223__$1 = state_57223;
var statearr_57240_59608 = state_57223__$1;
(statearr_57240_59608[(2)] = inst_57217);

(statearr_57240_59608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57224 === (5))){
var _ = (function (){var statearr_57241 = state_57223;
(statearr_57241[(4)] = cljs.core.rest((state_57223[(4)])));

return statearr_57241;
})();
var state_57223__$1 = state_57223;
var ex57237 = (state_57223__$1[(2)]);
var statearr_57242_59610 = state_57223__$1;
(statearr_57242_59610[(5)] = ex57237);


var statearr_57243_59611 = state_57223__$1;
(statearr_57243_59611[(1)] = (4));

(statearr_57243_59611[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57224 === (8))){
var inst_57209 = (state_57223[(7)]);
var state_57223__$1 = state_57223;
var statearr_57244_59612 = state_57223__$1;
(statearr_57244_59612[(2)] = inst_57209);

(statearr_57244_59612[(1)] = (9));


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
});})(c__48839__auto__,res__54030__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$state_machine__48140__auto____0 = (function (){
var statearr_57245 = [null,null,null,null,null,null,null,null];
(statearr_57245[(0)] = com$wsscode$pathom$core$state_machine__48140__auto__);

(statearr_57245[(1)] = (1));

return statearr_57245;
});
var com$wsscode$pathom$core$state_machine__48140__auto____1 = (function (state_57223){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57223);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57246){var ex__48143__auto__ = e57246;
var statearr_57247_59616 = state_57223;
(statearr_57247_59616[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57223[(4)]))){
var statearr_57248_59617 = state_57223;
(statearr_57248_59617[(1)] = cljs.core.first((state_57223[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59619 = state_57223;
state_57223 = G__59619;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__48140__auto__ = function(state_57223){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__48140__auto____1.call(this,state_57223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__48140__auto____0;
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__48140__auto____1;
return com$wsscode$pathom$core$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__))
})();
var state__48841__auto__ = (function (){var statearr_57250 = f__48840__auto__();
(statearr_57250[(6)] = c__48839__auto__);

return statearr_57250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__))
);

return c__48839__auto__;
} else {
var e = res__54030__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__57251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__57251.cljs$core$IFn$_invoke$arity$1 ? fexpr__57251.cljs$core$IFn$_invoke$arity$1(x) : fexpr__57251.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__57255,attributes){
var map__57256 = p__57255;
var map__57256__$1 = (((((!((map__57256 == null))))?(((((map__57256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57256):map__57256);
var env = map__57256__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57256__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__54030__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,map__57256,map__57256__$1,env,path){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,map__57256,map__57256__$1,env,path){
return (function (state_57292){
var state_val_57293 = (state_57292[(1)]);
if((state_val_57293 === (7))){
var inst_57274 = (state_57292[(7)]);
var inst_57269 = (state_57292[(8)]);
var inst_57278 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57274], 0));
var inst_57279 = ["Entity attributes ",inst_57278," could not be realized"].join('');
var inst_57280 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_57281 = [inst_57269,path,inst_57274];
var inst_57282 = cljs.core.PersistentHashMap.fromArrays(inst_57280,inst_57281);
var inst_57283 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_57279,inst_57282);
var inst_57284 = (function(){throw inst_57283})();
var state_57292__$1 = state_57292;
var statearr_57298_59630 = state_57292__$1;
(statearr_57298_59630[(2)] = inst_57284);

(statearr_57298_59630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57293 === (1))){
var state_57292__$1 = state_57292;
var statearr_57301_59634 = state_57292__$1;
(statearr_57301_59634[(2)] = null);

(statearr_57301_59634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57293 === (4))){
var inst_57261 = (state_57292[(2)]);
var state_57292__$1 = state_57292;
var statearr_57303_59637 = state_57292__$1;
(statearr_57303_59637[(2)] = inst_57261);

(statearr_57303_59637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57293 === (6))){
var inst_57274 = (state_57292[(7)]);
var inst_57269 = (state_57292[(8)]);
var inst_57268 = (state_57292[(2)]);
var inst_57269__$1 = com.wsscode.async.async_cljs.throw_err(inst_57268);
var inst_57270 = cljs.core.set(attributes);
var inst_57271 = com.wsscode.pathom.core.elide_not_found(inst_57269__$1);
var inst_57272 = cljs.core.keys(inst_57271);
var inst_57273 = cljs.core.set(inst_57272);
var inst_57274__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_57270,inst_57273);
var inst_57275 = cljs.core.seq(inst_57274__$1);
var state_57292__$1 = (function (){var statearr_57305 = state_57292;
(statearr_57305[(7)] = inst_57274__$1);

(statearr_57305[(8)] = inst_57269__$1);

return statearr_57305;
})();
if(inst_57275){
var statearr_57307_59638 = state_57292__$1;
(statearr_57307_59638[(1)] = (7));

} else {
var statearr_57308_59640 = state_57292__$1;
(statearr_57308_59640[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57293 === (3))){
var inst_57290 = (state_57292[(2)]);
var state_57292__$1 = state_57292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57292__$1,inst_57290);
} else {
if((state_val_57293 === (2))){
var _ = (function (){var statearr_57310 = state_57292;
(statearr_57310[(4)] = cljs.core.cons((5),(state_57292[(4)])));

return statearr_57310;
})();
var state_57292__$1 = state_57292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57292__$1,(6),res__54030__auto__);
} else {
if((state_val_57293 === (9))){
var inst_57269 = (state_57292[(8)]);
var inst_57287 = (state_57292[(2)]);
var _ = (function (){var statearr_57312 = state_57292;
(statearr_57312[(4)] = cljs.core.rest((state_57292[(4)])));

return statearr_57312;
})();
var state_57292__$1 = (function (){var statearr_57314 = state_57292;
(statearr_57314[(9)] = inst_57287);

return statearr_57314;
})();
var statearr_57315_59647 = state_57292__$1;
(statearr_57315_59647[(2)] = inst_57269);

(statearr_57315_59647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57293 === (5))){
var _ = (function (){var statearr_57317 = state_57292;
(statearr_57317[(4)] = cljs.core.rest((state_57292[(4)])));

return statearr_57317;
})();
var state_57292__$1 = state_57292;
var ex57309 = (state_57292__$1[(2)]);
var statearr_57318_59648 = state_57292__$1;
(statearr_57318_59648[(5)] = ex57309);


var statearr_57319_59649 = state_57292__$1;
(statearr_57319_59649[(1)] = (4));

(statearr_57319_59649[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57293 === (8))){
var state_57292__$1 = state_57292;
var statearr_57320_59654 = state_57292__$1;
(statearr_57320_59654[(2)] = null);

(statearr_57320_59654[(1)] = (9));


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
});})(c__48839__auto__,res__54030__auto__,map__57256,map__57256__$1,env,path))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,map__57256,map__57256__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto____0 = (function (){
var statearr_57321 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57321[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto__);

(statearr_57321[(1)] = (1));

return statearr_57321;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto____1 = (function (state_57292){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57292);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57322){var ex__48143__auto__ = e57322;
var statearr_57323_59656 = state_57292;
(statearr_57323_59656[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57292[(4)]))){
var statearr_57324_59657 = state_57292;
(statearr_57324_59657[(1)] = cljs.core.first((state_57292[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59658 = state_57292;
state_57292 = G__59658;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto__ = function(state_57292){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto____1.call(this,state_57292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,map__57256,map__57256__$1,env,path))
})();
var state__48841__auto__ = (function (){var statearr_57325 = f__48840__auto__();
(statearr_57325[(6)] = c__48839__auto__);

return statearr_57325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,map__57256,map__57256__$1,env,path))
);

return c__48839__auto__;
} else {
var e = res__54030__auto__;
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
var res__54030__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__){
return (function (state_57343){
var state_val_57344 = (state_57343[(1)]);
if((state_val_57344 === (1))){
var state_57343__$1 = state_57343;
var statearr_57345_59664 = state_57343__$1;
(statearr_57345_59664[(2)] = null);

(statearr_57345_59664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57344 === (2))){
var _ = (function (){var statearr_57346 = state_57343;
(statearr_57346[(4)] = cljs.core.cons((5),(state_57343[(4)])));

return statearr_57346;
})();
var state_57343__$1 = state_57343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57343__$1,(6),res__54030__auto__);
} else {
if((state_val_57344 === (3))){
var inst_57341 = (state_57343[(2)]);
var state_57343__$1 = state_57343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57343__$1,inst_57341);
} else {
if((state_val_57344 === (4))){
var inst_57328 = (state_57343[(2)]);
var state_57343__$1 = state_57343;
var statearr_57348_59665 = state_57343__$1;
(statearr_57348_59665[(2)] = inst_57328);

(statearr_57348_59665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57344 === (5))){
var _ = (function (){var statearr_57349 = state_57343;
(statearr_57349[(4)] = cljs.core.rest((state_57343[(4)])));

return statearr_57349;
})();
var state_57343__$1 = state_57343;
var ex57347 = (state_57343__$1[(2)]);
var statearr_57350_59667 = state_57343__$1;
(statearr_57350_59667[(5)] = ex57347);


var statearr_57351_59668 = state_57343__$1;
(statearr_57351_59668[(1)] = (4));

(statearr_57351_59668[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57344 === (6))){
var inst_57336 = (state_57343[(2)]);
var inst_57337 = com.wsscode.async.async_cljs.throw_err(inst_57336);
var inst_57338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57337,attr);
var _ = (function (){var statearr_57352 = state_57343;
(statearr_57352[(4)] = cljs.core.rest((state_57343[(4)])));

return statearr_57352;
})();
var state_57343__$1 = state_57343;
var statearr_57353_59672 = state_57343__$1;
(statearr_57353_59672[(2)] = inst_57338);

(statearr_57353_59672[(1)] = (3));


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
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto____0 = (function (){
var statearr_57354 = [null,null,null,null,null,null,null];
(statearr_57354[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto__);

(statearr_57354[(1)] = (1));

return statearr_57354;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto____1 = (function (state_57343){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57343);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57355){var ex__48143__auto__ = e57355;
var statearr_57356_59673 = state_57343;
(statearr_57356_59673[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57343[(4)]))){
var statearr_57357_59674 = state_57343;
(statearr_57357_59674[(1)] = cljs.core.first((state_57343[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59675 = state_57343;
state_57343 = G__59675;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto__ = function(state_57343){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto____1.call(this,state_57343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__))
})();
var state__48841__auto__ = (function (){var statearr_57358 = f__48840__auto__();
(statearr_57358[(6)] = c__48839__auto__);

return statearr_57358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__))
);

return c__48839__auto__;
} else {
var e = res__54030__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59677 = arguments.length;
var i__4731__auto___59678 = (0);
while(true){
if((i__4731__auto___59678 < len__4730__auto___59677)){
args__4736__auto__.push((arguments[i__4731__auto___59678]));

var G__59679 = (i__4731__auto___59678 + (1));
i__4731__auto___59678 = G__59679;
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
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq57359){
var G__57360 = cljs.core.first(seq57359);
var seq57359__$1 = cljs.core.next(seq57359);
var G__57361 = cljs.core.first(seq57359__$1);
var seq57359__$2 = cljs.core.next(seq57359__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57360,G__57361,seq57359__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59682 = arguments.length;
var i__4731__auto___59683 = (0);
while(true){
if((i__4731__auto___59683 < len__4730__auto___59682)){
args__4736__auto__.push((arguments[i__4731__auto___59683]));

var G__59685 = (i__4731__auto___59683 + (1));
i__4731__auto___59683 = G__59685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__57411 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__57411__$1 = (((G__57411 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__57411));
var G__57411__$2 = (((G__57411__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__57411__$1));
if((G__57411__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__57411__$2);
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
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq57391){
var G__57392 = cljs.core.first(seq57391);
var seq57391__$1 = cljs.core.next(seq57391);
var G__57393 = cljs.core.first(seq57391__$1);
var seq57391__$2 = cljs.core.next(seq57391__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57392,G__57393,seq57391__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59687 = arguments.length;
var i__4731__auto___59688 = (0);
while(true){
if((i__4731__auto___59688 < len__4730__auto___59687)){
args__4736__auto__.push((arguments[i__4731__auto___59688]));

var G__59689 = (i__4731__auto___59688 + (1));
i__4731__auto___59688 = G__59689;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__57445 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__57445__$1 = (((G__57445 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__57445));
var G__57445__$2 = (((G__57445__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__57445,G__57445__$1){
return (function (p1__57420_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__57420_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__57420_SHARP_))));
});})(G__57445,G__57445__$1))
,cljs.core.second),G__57445__$1));
if((G__57445__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__57445__$2);
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
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq57421){
var G__57426 = cljs.core.first(seq57421);
var seq57421__$1 = cljs.core.next(seq57421);
var G__57427 = cljs.core.first(seq57421__$1);
var seq57421__$2 = cljs.core.next(seq57421__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57426,G__57427,seq57421__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__57480){
var map__57481 = p__57480;
var map__57481__$1 = (((((!((map__57481 == null))))?(((((map__57481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57481):map__57481);
var env = map__57481__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57481__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__57483 = cljs.core.keys(query);
var G__57483__$1 = (((G__57483 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__57483,e,map__57481,map__57481__$1,env,query){
return (function (p1__57479_SHARP_){
return ((cljs.core.contains_QMARK_(e,p1__57479_SHARP_)) && (cljs.core.not((function (){var G__57485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,p1__57479_SHARP_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__57485) : com.wsscode.pathom.core.break_values.call(null,G__57485));
})())));
});})(G__57483,e,map__57481,map__57481__$1,env,query))
,G__57483));
if((G__57483__$1 == null)){
return null;
} else {
return cljs.core.first(G__57483__$1);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return path;
} else {
return null;
}
});
com.wsscode.pathom.core.placeholder_key_QMARK_ = (function com$wsscode$pathom$core$placeholder_key_QMARK_(p__57486,k){
var map__57487 = p__57486;
var map__57487__$1 = (((((!((map__57487 == null))))?(((((map__57487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57487):map__57487);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57487__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var placeholder_prefixes__$1 = (function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null);
}
})();
return (((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(placeholder_prefixes__$1,cljs.core.namespace(k))));
});
com.wsscode.pathom.core.path_without_placeholders = (function com$wsscode$pathom$core$path_without_placeholders(p__57494){
var map__57495 = p__57494;
var map__57495__$1 = (((((!((map__57495 == null))))?(((((map__57495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57495):map__57495);
var env = map__57495__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57495__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (map__57495,map__57495__$1,env,path){
return (function (p1__57492_SHARP_){
return com.wsscode.pathom.core.placeholder_key_QMARK_(env,p1__57492_SHARP_);
});})(map__57495,map__57495__$1,env,path))
),path);
});
/**
 * Find the closest parent key that's not a placeholder key.
 */
com.wsscode.pathom.core.find_closest_non_placeholder_parent_join_key = (function com$wsscode$pathom$core$find_closest_non_placeholder_parent_join_key(p__57502){
var map__57503 = p__57502;
var map__57503__$1 = (((((!((map__57503 == null))))?(((((map__57503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57503):map__57503);
var env = map__57503__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57503__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__57503,map__57503__$1,env,path){
return (function (p1__57499_SHARP_){
return com.wsscode.pathom.core.placeholder_key_QMARK_(env,p1__57499_SHARP_);
});})(map__57503,map__57503__$1,env,path))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.rseq((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()))));
});
/**
 * Runs a parser with current sub-query. When run with an `entity` argument, that entity is set as the new environment
 * value of `::entity`, and the subquery is parsed with that new environment. When run without an `entity` it
 * parses the current subquery in the context of whatever entity was already in `::entity` of the env.
 */
com.wsscode.pathom.core.join = (function com$wsscode$pathom$core$join(var_args){
var G__57514 = arguments.length;
switch (G__57514) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__57519){
var map__57520 = p__57519;
var map__57520__$1 = (((((!((map__57520 == null))))?(((((map__57520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57520):map__57520);
var env = map__57520__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57520__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57520__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57520__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__57526){
var map__57528 = p__57526;
var map__57528__$1 = (((((!((map__57528 == null))))?(((((map__57528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57528):map__57528);
var env = map__57528__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var placeholder_QMARK_ = com.wsscode.pathom.core.placeholder_key_QMARK_(env,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast));
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
var env_SINGLEQUOTE_ = (function (){var G__57536 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__57538 = env;
if(cljs.core.truth_(union_path__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__57538,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,union_path__$1);
} else {
return G__57538;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__57536,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__57536;
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
var G__57539 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__57540 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__57539,G__57540) : parser.call(null,G__57539,G__57540));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__54030__auto__ = (function (){var G__57541 = env_SINGLEQUOTE___$1;
var G__57542 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__57541,G__57542) : parser.call(null,G__57541,G__57542));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__57528,map__57528__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__57528,map__57528__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function (state_57560){
var state_val_57561 = (state_57560[(1)]);
if((state_val_57561 === (1))){
var state_57560__$1 = state_57560;
var statearr_57565_59717 = state_57560__$1;
(statearr_57565_59717[(2)] = null);

(statearr_57565_59717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57561 === (2))){
var _ = (function (){var statearr_57566 = state_57560;
(statearr_57566[(4)] = cljs.core.cons((5),(state_57560[(4)])));

return statearr_57566;
})();
var state_57560__$1 = state_57560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57560__$1,(6),res__54030__auto__);
} else {
if((state_val_57561 === (3))){
var inst_57558 = (state_57560[(2)]);
var state_57560__$1 = state_57560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57560__$1,inst_57558);
} else {
if((state_val_57561 === (4))){
var inst_57545 = (state_57560[(2)]);
var state_57560__$1 = state_57560;
var statearr_57571_59718 = state_57560__$1;
(statearr_57571_59718[(2)] = inst_57545);

(statearr_57571_59718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57561 === (5))){
var _ = (function (){var statearr_57572 = state_57560;
(statearr_57572[(4)] = cljs.core.rest((state_57560[(4)])));

return statearr_57572;
})();
var state_57560__$1 = state_57560;
var ex57569 = (state_57560__$1[(2)]);
var statearr_57573_59719 = state_57560__$1;
(statearr_57573_59719[(5)] = ex57569);


var statearr_57575_59720 = state_57560__$1;
(statearr_57575_59720[(1)] = (4));

(statearr_57575_59720[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57561 === (6))){
var inst_57552 = (state_57560[(2)]);
var inst_57553 = com.wsscode.async.async_cljs.throw_err(inst_57552);
var inst_57554 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_57555 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57554,inst_57553], 0));
var _ = (function (){var statearr_57578 = state_57560;
(statearr_57578[(4)] = cljs.core.rest((state_57560[(4)])));

return statearr_57578;
})();
var state_57560__$1 = state_57560;
var statearr_57580_59724 = state_57560__$1;
(statearr_57580_59724[(2)] = inst_57555);

(statearr_57580_59724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__57528,map__57528__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__57528,map__57528__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function() {
var com$wsscode$pathom$core$state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$state_machine__48140__auto____0 = (function (){
var statearr_57583 = [null,null,null,null,null,null,null];
(statearr_57583[(0)] = com$wsscode$pathom$core$state_machine__48140__auto__);

(statearr_57583[(1)] = (1));

return statearr_57583;
});
var com$wsscode$pathom$core$state_machine__48140__auto____1 = (function (state_57560){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57560);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57584){var ex__48143__auto__ = e57584;
var statearr_57585_59725 = state_57560;
(statearr_57585_59725[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57560[(4)]))){
var statearr_57588_59726 = state_57560;
(statearr_57588_59726[(1)] = cljs.core.first((state_57560[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59727 = state_57560;
state_57560 = G__59727;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__48140__auto__ = function(state_57560){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__48140__auto____1.call(this,state_57560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__48140__auto____0;
com$wsscode$pathom$core$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__48140__auto____1;
return com$wsscode$pathom$core$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__57528,map__57528__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
})();
var state__48841__auto__ = (function (){var statearr_57591 = f__48840__auto__();
(statearr_57591[(6)] = c__48839__auto__);

return statearr_57591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__57528,map__57528__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
);

return c__48839__auto__;
} else {
var computed_e = res__54030__auto__;
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

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__57596,coll){
var map__57597 = p__57596;
var map__57597__$1 = (((((!((map__57597 == null))))?(((((map__57597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57597):map__57597);
var env = map__57597__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57597__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57597__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57597__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var query_SINGLEQUOTE_ = ((cljs.core.nat_int_QMARK_(query))?parent_query:query);
if(((cljs.core.seq(coll)) && (((cljs.core.vector_QMARK_(query)) || (cljs.core.pos_int_QMARK_(query)) || (cljs.core.map_QMARK_(query)))))){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___59731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (state_57749){
var state_val_57752 = (state_57749[(1)]);
if((state_val_57752 === (7))){
var inst_57687 = (state_57749[(7)]);
var inst_57696 = (state_57749[(8)]);
var inst_57688 = (state_57749[(9)]);
var inst_57689 = (state_57749[(10)]);
var inst_57692 = (state_57749[(11)]);
var inst_57684 = (state_57749[(12)]);
var inst_57690 = (state_57749[(13)]);
var inst_57684__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_57685 = (function (){var ast = inst_57684__$1;
return ((function (ast,inst_57687,inst_57696,inst_57688,inst_57689,inst_57692,inst_57684,inst_57690,inst_57684__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (p1__57593_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__57593_SHARP_));
});
;})(ast,inst_57687,inst_57696,inst_57688,inst_57689,inst_57692,inst_57684,inst_57690,inst_57684__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var inst_57686 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_57684__$1);
var inst_57687__$1 = cljs.core.every_QMARK_(inst_57685,inst_57686);
var inst_57688__$1 = (function (){var ast = inst_57684__$1;
var check_ast_opt_QMARK_ = inst_57687__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_57687,inst_57696,inst_57688,inst_57689,inst_57692,inst_57684,inst_57690,inst_57684__$1,inst_57685,inst_57686,inst_57687__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_57687,inst_57696,inst_57688,inst_57689,inst_57692,inst_57684,inst_57690,inst_57684__$1,inst_57685,inst_57686,inst_57687__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__57787){
var map__57788 = p__57787;
var map__57788__$1 = (((((!((map__57788 == null))))?(((((map__57788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57788):map__57788);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57788__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57788__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__57792 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57792,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_57687,inst_57696,inst_57688,inst_57689,inst_57692,inst_57684,inst_57690,inst_57684__$1,inst_57685,inst_57686,inst_57687__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
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
;})(ast,check_ast_opt_QMARK_,inst_57687,inst_57696,inst_57688,inst_57689,inst_57692,inst_57684,inst_57690,inst_57684__$1,inst_57685,inst_57686,inst_57687__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var inst_57689__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_57690__$1 = coll;
var inst_57691 = cljs.core.seq(inst_57690__$1);
var inst_57692__$1 = cljs.core.first(inst_57691);
var inst_57693 = cljs.core.next(inst_57691);
var inst_57695 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_57689__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_57696__$1 = inst_57688__$1(inst_57695,inst_57692__$1);
var inst_57697 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57696__$1);
var state_57749__$1 = (function (){var statearr_57796 = state_57749;
(statearr_57796[(7)] = inst_57687__$1);

(statearr_57796[(8)] = inst_57696__$1);

(statearr_57796[(9)] = inst_57688__$1);

(statearr_57796[(10)] = inst_57689__$1);

(statearr_57796[(14)] = inst_57693);

(statearr_57796[(11)] = inst_57692__$1);

(statearr_57796[(12)] = inst_57684__$1);

(statearr_57796[(13)] = inst_57690__$1);

return statearr_57796;
})();
if(inst_57697){
var statearr_57797_59786 = state_57749__$1;
(statearr_57797_59786[(1)] = (21));

} else {
var statearr_57798_59791 = state_57749__$1;
(statearr_57798_59791[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (20))){
var inst_57616 = (state_57749[(15)]);
var inst_57670 = (state_57749[(2)]);
var inst_57672 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_57673 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_57675 = ["#e0e3a4","0.8"];
var inst_57676 = cljs.core.PersistentHashMap.fromArrays(inst_57673,inst_57675);
var inst_57677 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_57676];
var inst_57678 = cljs.core.PersistentHashMap.fromArrays(inst_57672,inst_57677);
var inst_57679 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_57616,inst_57678);
var state_57749__$1 = (function (){var statearr_57799 = state_57749;
(statearr_57799[(16)] = inst_57679);

return statearr_57799;
})();
var statearr_57800_59796 = state_57749__$1;
(statearr_57800_59796[(2)] = inst_57670);

(statearr_57800_59796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (27))){
var inst_57715 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
var statearr_57801_59797 = state_57749__$1;
(statearr_57801_59797[(2)] = inst_57715);

(statearr_57801_59797[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (1))){
var state_57749__$1 = state_57749;
var statearr_57802_59800 = state_57749__$1;
(statearr_57802_59800[(2)] = null);

(statearr_57802_59800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (24))){
var inst_57700 = (state_57749[(2)]);
var inst_57701 = com.wsscode.async.async_cljs.throw_err(inst_57700);
var state_57749__$1 = state_57749;
var statearr_57804_59801 = state_57749__$1;
(statearr_57804_59801[(2)] = inst_57701);

(statearr_57804_59801[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (4))){
var inst_57601 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
var statearr_57805_59803 = state_57749__$1;
(statearr_57805_59803[(2)] = inst_57601);

(statearr_57805_59803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (15))){
var inst_57653 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
var statearr_57806_59804 = state_57749__$1;
(statearr_57806_59804[(2)] = inst_57653);

(statearr_57806_59804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (21))){
var inst_57696 = (state_57749[(8)]);
var state_57749__$1 = state_57749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57749__$1,(24),inst_57696);
} else {
if((state_val_57752 === (31))){
var inst_57713 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
var statearr_57807_59806 = state_57749__$1;
(statearr_57807_59806[(2)] = inst_57713);

(statearr_57807_59806[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (32))){
var inst_57732 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
var statearr_57808_59807 = state_57749__$1;
(statearr_57808_59807[(2)] = inst_57732);

(statearr_57808_59807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (33))){
var inst_57742 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_57749__$1 = state_57749;
var statearr_57809_59808 = state_57749__$1;
(statearr_57809_59808[(2)] = inst_57742);

(statearr_57809_59808[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (13))){
var inst_57632 = (state_57749[(17)]);
var inst_57642 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57632);
var state_57749__$1 = state_57749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57749__$1,(16),inst_57642);
} else {
if((state_val_57752 === (22))){
var inst_57696 = (state_57749[(8)]);
var inst_57703 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57696);
var state_57749__$1 = state_57749;
if(cljs.core.truth_(inst_57703)){
var statearr_57813_59812 = state_57749__$1;
(statearr_57813_59812[(1)] = (25));

} else {
var statearr_57814_59813 = state_57749__$1;
(statearr_57814_59813[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (29))){
var inst_57696 = (state_57749[(8)]);
var state_57749__$1 = state_57749;
var statearr_57815_59816 = state_57749__$1;
(statearr_57815_59816[(2)] = inst_57696);

(statearr_57815_59816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (6))){
var inst_57632 = (state_57749[(17)]);
var inst_57616 = (state_57749[(15)]);
var inst_57624 = (state_57749[(18)]);
var inst_57627 = (state_57749[(19)]);
var inst_57626 = (state_57749[(20)]);
var inst_57629 = (state_57749[(21)]);
var inst_57621 = (state_57749[(22)]);
var inst_57625 = (state_57749[(23)]);
var inst_57610 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_57611 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_57612 = ["#e0e3a4","0.8"];
var inst_57613 = cljs.core.PersistentHashMap.fromArrays(inst_57611,inst_57612);
var inst_57614 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_57613];
var inst_57615 = cljs.core.PersistentHashMap.fromArrays(inst_57610,inst_57614);
var inst_57616__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_57615);
var inst_57621__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_57622 = (function (){var trace_id__27500__auto__ = inst_57616__$1;
var ast = inst_57621__$1;
return ((function (trace_id__27500__auto__,ast,inst_57632,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57610,inst_57611,inst_57612,inst_57613,inst_57614,inst_57615,inst_57616__$1,inst_57621__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (p1__57593_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__57593_SHARP_));
});
;})(trace_id__27500__auto__,ast,inst_57632,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57610,inst_57611,inst_57612,inst_57613,inst_57614,inst_57615,inst_57616__$1,inst_57621__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var inst_57623 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_57621__$1);
var inst_57624__$1 = cljs.core.every_QMARK_(inst_57622,inst_57623);
var inst_57625__$1 = (function (){var trace_id__27500__auto__ = inst_57616__$1;
var ast = inst_57621__$1;
var check_ast_opt_QMARK_ = inst_57624__$1;
return ((function (trace_id__27500__auto__,ast,check_ast_opt_QMARK_,inst_57632,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57610,inst_57611,inst_57612,inst_57613,inst_57614,inst_57615,inst_57616__$1,inst_57621__$1,inst_57622,inst_57623,inst_57624__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__27500__auto__,ast,check_ast_opt_QMARK_,inst_57632,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57610,inst_57611,inst_57612,inst_57613,inst_57614,inst_57615,inst_57616__$1,inst_57621__$1,inst_57622,inst_57623,inst_57624__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__57850){
var map__57851 = p__57850;
var map__57851__$1 = (((((!((map__57851 == null))))?(((((map__57851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57851):map__57851);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57851__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57851__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__57856 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57856,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__27500__auto__,ast,check_ast_opt_QMARK_,inst_57632,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57610,inst_57611,inst_57612,inst_57613,inst_57614,inst_57615,inst_57616__$1,inst_57621__$1,inst_57622,inst_57623,inst_57624__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
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
;})(trace_id__27500__auto__,ast,check_ast_opt_QMARK_,inst_57632,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57610,inst_57611,inst_57612,inst_57613,inst_57614,inst_57615,inst_57616__$1,inst_57621__$1,inst_57622,inst_57623,inst_57624__$1,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var inst_57626__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_57627__$1 = coll;
var inst_57628 = cljs.core.seq(inst_57627__$1);
var inst_57629__$1 = cljs.core.first(inst_57628);
var inst_57630 = cljs.core.next(inst_57628);
var inst_57631 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_57626__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_57632__$1 = inst_57625__$1(inst_57631,inst_57629__$1);
var inst_57634 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57632__$1);
var state_57749__$1 = (function (){var statearr_57861 = state_57749;
(statearr_57861[(17)] = inst_57632__$1);

(statearr_57861[(24)] = inst_57630);

(statearr_57861[(15)] = inst_57616__$1);

(statearr_57861[(18)] = inst_57624__$1);

(statearr_57861[(19)] = inst_57627__$1);

(statearr_57861[(20)] = inst_57626__$1);

(statearr_57861[(21)] = inst_57629__$1);

(statearr_57861[(22)] = inst_57621__$1);

(statearr_57861[(23)] = inst_57625__$1);

return statearr_57861;
})();
if(inst_57634){
var statearr_57863_59835 = state_57749__$1;
(statearr_57863_59835[(1)] = (9));

} else {
var statearr_57865_59837 = state_57749__$1;
(statearr_57865_59837[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (28))){
var inst_57707 = (state_57749[(2)]);
var inst_57708 = com.wsscode.async.async_cljs.consumer_pair(inst_57707);
var state_57749__$1 = state_57749;
var statearr_57867_59839 = state_57749__$1;
(statearr_57867_59839[(2)] = inst_57708);

(statearr_57867_59839[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (25))){
var inst_57696 = (state_57749[(8)]);
var inst_57705 = com.wsscode.async.async_cljs.promise__GT_chan(inst_57696);
var state_57749__$1 = state_57749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57749__$1,(28),inst_57705);
} else {
if((state_val_57752 === (34))){
var inst_57737 = (state_57749[(25)]);
var inst_57744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_57737);
var state_57749__$1 = state_57749;
var statearr_57870_59840 = state_57749__$1;
(statearr_57870_59840[(2)] = inst_57744);

(statearr_57870_59840[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (17))){
var inst_57632 = (state_57749[(17)]);
var state_57749__$1 = state_57749;
var statearr_57871_59843 = state_57749__$1;
(statearr_57871_59843[(2)] = inst_57632);

(statearr_57871_59843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (3))){
var inst_57737 = (state_57749[(25)]);
var inst_57737__$1 = (state_57749[(2)]);
var inst_57739 = (inst_57737__$1 == null);
var state_57749__$1 = (function (){var statearr_57872 = state_57749;
(statearr_57872[(25)] = inst_57737__$1);

return statearr_57872;
})();
if(cljs.core.truth_(inst_57739)){
var statearr_57874_59846 = state_57749__$1;
(statearr_57874_59846[(1)] = (33));

} else {
var statearr_57875_59847 = state_57749__$1;
(statearr_57875_59847[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (12))){
var inst_57637 = (state_57749[(2)]);
var inst_57638 = com.wsscode.async.async_cljs.throw_err(inst_57637);
var state_57749__$1 = state_57749;
var statearr_57877_59848 = state_57749__$1;
(statearr_57877_59848[(2)] = inst_57638);

(statearr_57877_59848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (2))){
var _ = (function (){var statearr_57878 = state_57749;
(statearr_57878[(4)] = cljs.core.cons((5),(state_57749[(4)])));

return statearr_57878;
})();
var inst_57607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_57749__$1 = state_57749;
if(cljs.core.truth_(inst_57607)){
var statearr_57879_59853 = state_57749__$1;
(statearr_57879_59853[(1)] = (6));

} else {
var statearr_57880_59854 = state_57749__$1;
(statearr_57880_59854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (23))){
var inst_57687 = (state_57749[(7)]);
var inst_57688 = (state_57749[(9)]);
var inst_57689 = (state_57749[(10)]);
var inst_57693 = (state_57749[(14)]);
var inst_57692 = (state_57749[(11)]);
var inst_57684 = (state_57749[(12)]);
var inst_57690 = (state_57749[(13)]);
var inst_57717 = (state_57749[(2)]);
var inst_57718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_57719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_57721 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_57722 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_57693,inst_57721);
var inst_57723 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57718,inst_57722);
var inst_57725 = (function (){var from_chan = inst_57718;
var join_item = inst_57688;
var first__57683 = inst_57692;
var first_res = inst_57717;
var check_ast_opt_QMARK_ = inst_57687;
var seq__57682 = inst_57693;
var vec__57681 = inst_57690;
var out_chan = inst_57719;
var ast = inst_57684;
var env__$1 = inst_57689;
var head = inst_57692;
var tail = inst_57693;
return ((function (from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__57882,res_ch){
var vec__57883 = p__57882;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57883,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57883,(1),null);
var c__48839__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto____$1,vec__57883,ent,i,from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto____$1,vec__57883,ent,i,from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (state_57931){
var state_val_57932 = (state_57931[(1)]);
if((state_val_57932 === (7))){
var inst_57903 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57934_59856 = state_57931__$1;
(statearr_57934_59856[(2)] = inst_57903);

(statearr_57934_59856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (1))){
var inst_57890 = (state_57931[(7)]);
var inst_57889 = (i + (1));
var inst_57890__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_57889);
var inst_57892 = (inst_57890__$1 == null);
var inst_57893 = cljs.core.not(inst_57892);
var state_57931__$1 = (function (){var statearr_57935 = state_57931;
(statearr_57935[(7)] = inst_57890__$1);

return statearr_57935;
})();
if(inst_57893){
var statearr_57937_59858 = state_57931__$1;
(statearr_57937_59858[(1)] = (2));

} else {
var statearr_57939_59859 = state_57931__$1;
(statearr_57939_59859[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (4))){
var inst_57906 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
if(cljs.core.truth_(inst_57906)){
var statearr_57941_59860 = state_57931__$1;
(statearr_57941_59860[(1)] = (8));

} else {
var statearr_57943_59861 = state_57931__$1;
(statearr_57943_59861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (15))){
var inst_57928 = (state_57931[(2)]);
var inst_57929 = cljs.core.async.close_BANG_(res_ch);
var state_57931__$1 = (function (){var statearr_57944 = state_57931;
(statearr_57944[(8)] = inst_57928);

return statearr_57944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57931__$1,inst_57929);
} else {
if((state_val_57932 === (13))){
var inst_57926 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57931__$1,(15),res_ch,inst_57926);
} else {
if((state_val_57932 === (6))){
var state_57931__$1 = state_57931;
var statearr_57945_59866 = state_57931__$1;
(statearr_57945_59866[(2)] = false);

(statearr_57945_59866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (3))){
var state_57931__$1 = state_57931;
var statearr_57947_59867 = state_57931__$1;
(statearr_57947_59867[(2)] = false);

(statearr_57947_59867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (12))){
var inst_57919 = (state_57931[(9)]);
var state_57931__$1 = state_57931;
var statearr_57949_59868 = state_57931__$1;
(statearr_57949_59868[(2)] = inst_57919);

(statearr_57949_59868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (2))){
var inst_57890 = (state_57931[(7)]);
var inst_57895 = inst_57890.cljs$lang$protocol_mask$partition0$;
var inst_57896 = (inst_57895 & (64));
var inst_57897 = inst_57890.cljs$core$ISeq$;
var inst_57898 = (cljs.core.PROTOCOL_SENTINEL === inst_57897);
var inst_57899 = ((inst_57896) || (inst_57898));
var state_57931__$1 = state_57931;
if(cljs.core.truth_(inst_57899)){
var statearr_57952_59869 = state_57931__$1;
(statearr_57952_59869[(1)] = (5));

} else {
var statearr_57954_59870 = state_57931__$1;
(statearr_57954_59870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (11))){
var inst_57919 = (state_57931[(9)]);
var state_57931__$1 = state_57931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57931__$1,(14),inst_57919);
} else {
if((state_val_57932 === (9))){
var inst_57890 = (state_57931[(7)]);
var state_57931__$1 = state_57931;
var statearr_57956_59871 = state_57931__$1;
(statearr_57956_59871[(2)] = inst_57890);

(statearr_57956_59871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (5))){
var state_57931__$1 = state_57931;
var statearr_57958_59872 = state_57931__$1;
(statearr_57958_59872[(2)] = true);

(statearr_57958_59872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (14))){
var inst_57923 = (state_57931[(2)]);
var state_57931__$1 = state_57931;
var statearr_57959_59873 = state_57931__$1;
(statearr_57959_59873[(2)] = inst_57923);

(statearr_57959_59873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (10))){
var inst_57919 = (state_57931[(9)]);
var inst_57912 = (state_57931[(2)]);
var inst_57913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57912,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_57914 = cljs.core.deref(entity_path_cache);
var inst_57916 = cljs.core.PersistentHashMap.EMPTY;
var inst_57917 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_57914,inst_57913,inst_57916);
var inst_57918 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_57917,ent], 0));
var inst_57919__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_57912,inst_57918) : join_item.call(null,inst_57912,inst_57918));
var inst_57920 = com.wsscode.async.async_cljs.chan_QMARK_(inst_57919__$1);
var state_57931__$1 = (function (){var statearr_57960 = state_57931;
(statearr_57960[(9)] = inst_57919__$1);

return statearr_57960;
})();
if(inst_57920){
var statearr_57962_59875 = state_57931__$1;
(statearr_57962_59875[(1)] = (11));

} else {
var statearr_57963_59876 = state_57931__$1;
(statearr_57963_59876[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57932 === (8))){
var inst_57890 = (state_57931[(7)]);
var inst_57908 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57890);
var state_57931__$1 = state_57931;
var statearr_57966_59877 = state_57931__$1;
(statearr_57966_59877[(2)] = inst_57908);

(statearr_57966_59877[(1)] = (10));


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
});})(c__48839__auto____$1,vec__57883,ent,i,from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__48139__auto__,c__48839__auto____$1,vec__57883,ent,i,from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____0 = (function (){
var statearr_57967 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57967[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__);

(statearr_57967[(1)] = (1));

return statearr_57967;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____1 = (function (state_57931){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57931);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e57968){var ex__48143__auto__ = e57968;
var statearr_57970_59878 = state_57931;
(statearr_57970_59878[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57931[(4)]))){
var statearr_57971_59879 = state_57931;
(statearr_57971_59879[(1)] = cljs.core.first((state_57931[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59880 = state_57931;
state_57931 = G__59880;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__ = function(state_57931){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____1.call(this,state_57931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto____$1,vec__57883,ent,i,from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var state__48841__auto__ = (function (){var statearr_57974 = f__48840__auto__();
(statearr_57974[(6)] = c__48839__auto____$1);

return statearr_57974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto____$1,vec__57883,ent,i,from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
);

return c__48839__auto____$1;
});
;})(from_chan,join_item,first__57683,first_res,check_ast_opt_QMARK_,seq__57682,vec__57681,out_chan,ast,env__$1,head,tail,inst_57687,inst_57688,inst_57689,inst_57693,inst_57692,inst_57684,inst_57690,inst_57717,inst_57718,inst_57719,inst_57721,inst_57722,inst_57723,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var inst_57726 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_57719,inst_57725,inst_57718);
var inst_57727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57728 = [inst_57717];
var inst_57729 = (new cljs.core.PersistentVector(null,1,(5),inst_57727,inst_57728,null));
var inst_57730 = cljs.core.async.into(inst_57729,inst_57719);
var state_57749__$1 = (function (){var statearr_57976 = state_57749;
(statearr_57976[(26)] = inst_57726);

(statearr_57976[(27)] = inst_57723);

return statearr_57976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57749__$1,(32),inst_57730);
} else {
if((state_val_57752 === (35))){
var inst_57746 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57749__$1,inst_57746);
} else {
if((state_val_57752 === (19))){
var inst_57651 = (state_57749[(2)]);
var state_57749__$1 = state_57749;
var statearr_57980_59886 = state_57749__$1;
(statearr_57980_59886[(2)] = inst_57651);

(statearr_57980_59886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (11))){
var inst_57630 = (state_57749[(24)]);
var inst_57616 = (state_57749[(15)]);
var inst_57624 = (state_57749[(18)]);
var inst_57627 = (state_57749[(19)]);
var inst_57626 = (state_57749[(20)]);
var inst_57629 = (state_57749[(21)]);
var inst_57621 = (state_57749[(22)]);
var inst_57625 = (state_57749[(23)]);
var inst_57655 = (state_57749[(2)]);
var inst_57656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_57657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_57658 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_57659 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_57630,inst_57658);
var inst_57660 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57656,inst_57659);
var inst_57663 = (function (){var from_chan = inst_57656;
var join_item = inst_57625;
var first_res = inst_57655;
var check_ast_opt_QMARK_ = inst_57624;
var seq__57619 = inst_57630;
var vec__57618 = inst_57627;
var out_chan = inst_57657;
var ast = inst_57621;
var trace_id__27500__auto__ = inst_57616;
var env__$1 = inst_57626;
var first__57620 = inst_57629;
var head = inst_57629;
var tail = inst_57630;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__57987,res_ch){
var vec__57988 = p__57987;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57988,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57988,(1),null);
var c__48839__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto____$1,vec__57988,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto____$1,vec__57988,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function (state_58038){
var state_val_58039 = (state_58038[(1)]);
if((state_val_58039 === (7))){
var inst_58009 = (state_58038[(2)]);
var state_58038__$1 = state_58038;
var statearr_58041_59891 = state_58038__$1;
(statearr_58041_59891[(2)] = inst_58009);

(statearr_58041_59891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (1))){
var inst_57994 = (state_58038[(7)]);
var inst_57993 = (i + (1));
var inst_57994__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_57993);
var inst_57996 = (inst_57994__$1 == null);
var inst_57997 = cljs.core.not(inst_57996);
var state_58038__$1 = (function (){var statearr_58043 = state_58038;
(statearr_58043[(7)] = inst_57994__$1);

return statearr_58043;
})();
if(inst_57997){
var statearr_58044_59895 = state_58038__$1;
(statearr_58044_59895[(1)] = (2));

} else {
var statearr_58045_59896 = state_58038__$1;
(statearr_58045_59896[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (4))){
var inst_58012 = (state_58038[(2)]);
var state_58038__$1 = state_58038;
if(cljs.core.truth_(inst_58012)){
var statearr_58046_59898 = state_58038__$1;
(statearr_58046_59898[(1)] = (8));

} else {
var statearr_58047_59899 = state_58038__$1;
(statearr_58047_59899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (15))){
var inst_58035 = (state_58038[(2)]);
var inst_58036 = cljs.core.async.close_BANG_(res_ch);
var state_58038__$1 = (function (){var statearr_58048 = state_58038;
(statearr_58048[(8)] = inst_58035);

return statearr_58048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58038__$1,inst_58036);
} else {
if((state_val_58039 === (13))){
var inst_58032 = (state_58038[(2)]);
var state_58038__$1 = state_58038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58038__$1,(15),res_ch,inst_58032);
} else {
if((state_val_58039 === (6))){
var state_58038__$1 = state_58038;
var statearr_58052_59909 = state_58038__$1;
(statearr_58052_59909[(2)] = false);

(statearr_58052_59909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (3))){
var state_58038__$1 = state_58038;
var statearr_58054_59911 = state_58038__$1;
(statearr_58054_59911[(2)] = false);

(statearr_58054_59911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (12))){
var inst_58025 = (state_58038[(9)]);
var state_58038__$1 = state_58038;
var statearr_58055_59914 = state_58038__$1;
(statearr_58055_59914[(2)] = inst_58025);

(statearr_58055_59914[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (2))){
var inst_57994 = (state_58038[(7)]);
var inst_58001 = inst_57994.cljs$lang$protocol_mask$partition0$;
var inst_58002 = (inst_58001 & (64));
var inst_58003 = inst_57994.cljs$core$ISeq$;
var inst_58004 = (cljs.core.PROTOCOL_SENTINEL === inst_58003);
var inst_58005 = ((inst_58002) || (inst_58004));
var state_58038__$1 = state_58038;
if(cljs.core.truth_(inst_58005)){
var statearr_58056_59915 = state_58038__$1;
(statearr_58056_59915[(1)] = (5));

} else {
var statearr_58058_59916 = state_58038__$1;
(statearr_58058_59916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (11))){
var inst_58025 = (state_58038[(9)]);
var state_58038__$1 = state_58038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58038__$1,(14),inst_58025);
} else {
if((state_val_58039 === (9))){
var inst_57994 = (state_58038[(7)]);
var state_58038__$1 = state_58038;
var statearr_58061_59918 = state_58038__$1;
(statearr_58061_59918[(2)] = inst_57994);

(statearr_58061_59918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (5))){
var state_58038__$1 = state_58038;
var statearr_58062_59919 = state_58038__$1;
(statearr_58062_59919[(2)] = true);

(statearr_58062_59919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (14))){
var inst_58029 = (state_58038[(2)]);
var state_58038__$1 = state_58038;
var statearr_58065_59921 = state_58038__$1;
(statearr_58065_59921[(2)] = inst_58029);

(statearr_58065_59921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (10))){
var inst_58025 = (state_58038[(9)]);
var inst_58018 = (state_58038[(2)]);
var inst_58019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58018,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_58020 = cljs.core.deref(entity_path_cache);
var inst_58022 = cljs.core.PersistentHashMap.EMPTY;
var inst_58023 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_58020,inst_58019,inst_58022);
var inst_58024 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58023,ent], 0));
var inst_58025__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_58018,inst_58024) : join_item.call(null,inst_58018,inst_58024));
var inst_58026 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58025__$1);
var state_58038__$1 = (function (){var statearr_58070 = state_58038;
(statearr_58070[(9)] = inst_58025__$1);

return statearr_58070;
})();
if(inst_58026){
var statearr_58072_59925 = state_58038__$1;
(statearr_58072_59925[(1)] = (11));

} else {
var statearr_58074_59926 = state_58038__$1;
(statearr_58074_59926[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58039 === (8))){
var inst_57994 = (state_58038[(7)]);
var inst_58014 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57994);
var state_58038__$1 = state_58038;
var statearr_58075_59929 = state_58038__$1;
(statearr_58075_59929[(2)] = inst_58014);

(statearr_58075_59929[(1)] = (10));


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
});})(c__48839__auto____$1,vec__57988,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__48139__auto__,c__48839__auto____$1,vec__57988,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____0 = (function (){
var statearr_58080 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58080[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__);

(statearr_58080[(1)] = (1));

return statearr_58080;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____1 = (function (state_58038){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58038);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58082){var ex__48143__auto__ = e58082;
var statearr_58084_59931 = state_58038;
(statearr_58084_59931[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58038[(4)]))){
var statearr_58086_59932 = state_58038;
(statearr_58086_59932[(1)] = cljs.core.first((state_58038[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59933 = state_58038;
state_58038 = G__59933;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__ = function(state_58038){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____1.call(this,state_58038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto____$1,vec__57988,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var state__48841__auto__ = (function (){var statearr_58087 = f__48840__auto__();
(statearr_58087[(6)] = c__48839__auto____$1);

return statearr_58087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto____$1,vec__57988,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
);

return c__48839__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,seq__57619,vec__57618,out_chan,ast,trace_id__27500__auto__,env__$1,first__57620,head,tail,inst_57630,inst_57616,inst_57624,inst_57627,inst_57626,inst_57629,inst_57621,inst_57625,inst_57655,inst_57656,inst_57657,inst_57658,inst_57659,inst_57660,state_val_57752,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var inst_57664 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_57657,inst_57663,inst_57656);
var inst_57665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57666 = [inst_57655];
var inst_57667 = (new cljs.core.PersistentVector(null,1,(5),inst_57665,inst_57666,null));
var inst_57668 = cljs.core.async.into(inst_57667,inst_57657);
var state_57749__$1 = (function (){var statearr_58088 = state_57749;
(statearr_58088[(28)] = inst_57664);

(statearr_58088[(29)] = inst_57660);

return statearr_58088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57749__$1,(20),inst_57668);
} else {
if((state_val_57752 === (9))){
var inst_57632 = (state_57749[(17)]);
var state_57749__$1 = state_57749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57749__$1,(12),inst_57632);
} else {
if((state_val_57752 === (5))){
var _ = (function (){var statearr_58091 = state_57749;
(statearr_58091[(4)] = cljs.core.rest((state_57749[(4)])));

return statearr_58091;
})();
var state_57749__$1 = state_57749;
var ex57982 = (state_57749__$1[(2)]);
var statearr_58092_59939 = state_57749__$1;
(statearr_58092_59939[(5)] = ex57982);


var statearr_58093_59940 = state_57749__$1;
(statearr_58093_59940[(1)] = (4));

(statearr_58093_59940[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (14))){
var state_57749__$1 = state_57749;
var statearr_58096_59941 = state_57749__$1;
(statearr_58096_59941[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (26))){
var state_57749__$1 = state_57749;
var statearr_58098_59943 = state_57749__$1;
(statearr_58098_59943[(1)] = (29));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (16))){
var inst_57644 = (state_57749[(2)]);
var inst_57646 = com.wsscode.async.async_cljs.consumer_pair(inst_57644);
var state_57749__$1 = state_57749;
var statearr_58102_59946 = state_57749__$1;
(statearr_58102_59946[(2)] = inst_57646);

(statearr_58102_59946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (30))){
var state_57749__$1 = state_57749;
var statearr_58105_59947 = state_57749__$1;
(statearr_58105_59947[(2)] = null);

(statearr_58105_59947[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (10))){
var inst_57632 = (state_57749[(17)]);
var inst_57640 = com.wsscode.async.async_cljs.promise_QMARK_(inst_57632);
var state_57749__$1 = state_57749;
if(cljs.core.truth_(inst_57640)){
var statearr_58106_59950 = state_57749__$1;
(statearr_58106_59950[(1)] = (13));

} else {
var statearr_58107_59951 = state_57749__$1;
(statearr_58107_59951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (18))){
var state_57749__$1 = state_57749;
var statearr_58109_59952 = state_57749__$1;
(statearr_58109_59952[(2)] = null);

(statearr_58109_59952[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57752 === (8))){
var inst_57734 = (state_57749[(2)]);
var _ = (function (){var statearr_58111 = state_57749;
(statearr_58111[(4)] = cljs.core.rest((state_57749[(4)])));

return statearr_58111;
})();
var state_57749__$1 = state_57749;
var statearr_58112_59956 = state_57749__$1;
(statearr_58112_59956[(2)] = inst_57734);

(statearr_58112_59956[(1)] = (3));


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
});})(c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__48139__auto__,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto____0 = (function (){
var statearr_58113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58113[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto__);

(statearr_58113[(1)] = (1));

return statearr_58113;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto____1 = (function (state_57749){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_57749);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58114){var ex__48143__auto__ = e58114;
var statearr_58115_59966 = state_57749;
(statearr_58115_59966[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_57749[(4)]))){
var statearr_58116_59967 = state_57749;
(statearr_58116_59967[(1)] = cljs.core.first((state_57749[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59968 = state_57749;
state_57749 = G__59968;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto__ = function(state_57749){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto____1.call(this,state_57749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
})();
var state__48841__auto__ = (function (){var statearr_58117 = f__48840__auto__();
(statearr_58117[(6)] = c__48839__auto___59731);

return statearr_58117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___59731,ch__53995__auto__,query_SINGLEQUOTE_,map__57597,map__57597__$1,env,query,entity_path_cache,parent_query))
);


return ch__53995__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__58121,coll){
var map__58122 = p__58121;
var map__58122__$1 = (((((!((map__58122 == null))))?(((((map__58122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58122):map__58122);
var env = map__58122__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58122__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__58122,map__58122__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__58122,map__58122__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__58139 = coll;
var vec__58140 = G__58139;
var seq__58141 = cljs.core.seq(vec__58140);
var first__58142 = cljs.core.first(seq__58141);
var seq__58141__$1 = cljs.core.next(seq__58141);
var ent = first__58142;
var tail = seq__58141__$1;
var out__$1 = out;
var G__58139__$1 = G__58139;
while(true){
var out__$2 = out__$1;
var vec__58276 = G__58139__$1;
var seq__58277 = cljs.core.seq(vec__58276);
var first__58278 = cljs.core.first(seq__58277);
var seq__58277__$1 = cljs.core.next(seq__58277);
var ent__$1 = first__58278;
var tail__$1 = seq__58277__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___59975 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__58139__$1,c__48839__auto___59975,ch__53995__auto__,res,out__$2,vec__58276,seq__58277,first__58278,seq__58277__$1,ent__$1,tail__$1,out,G__58139,vec__58140,seq__58141,first__58142,seq__58141__$1,ent,tail,map__58122,map__58122__$1,env,parallel_QMARK_){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (out__$1,G__58139__$1,c__48839__auto___59975,ch__53995__auto__,res,out__$2,vec__58276,seq__58277,first__58278,seq__58277__$1,ent__$1,tail__$1,out,G__58139,vec__58140,seq__58141,first__58142,seq__58141__$1,ent,tail,map__58122,map__58122__$1,env,parallel_QMARK_){
return (function (state_58340){
var state_val_58341 = (state_58340[(1)]);
if((state_val_58341 === (7))){
var inst_58309 = (state_58340[(7)]);
var inst_58315 = (state_58340[(8)]);
var inst_58314 = cljs.core.seq(inst_58309);
var inst_58315__$1 = cljs.core.first(inst_58314);
var inst_58316 = cljs.core.next(inst_58314);
var state_58340__$1 = (function (){var statearr_58345 = state_58340;
(statearr_58345[(8)] = inst_58315__$1);

(statearr_58345[(9)] = inst_58316);

return statearr_58345;
})();
if(cljs.core.truth_(inst_58315__$1)){
var statearr_58346_59976 = state_58340__$1;
(statearr_58346_59976[(1)] = (9));

} else {
var statearr_58347_59977 = state_58340__$1;
(statearr_58347_59977[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (1))){
var state_58340__$1 = state_58340;
var statearr_58348_59978 = state_58340__$1;
(statearr_58348_59978[(2)] = null);

(statearr_58348_59978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (4))){
var inst_58283 = (state_58340[(2)]);
var state_58340__$1 = state_58340;
var statearr_58349_59980 = state_58340__$1;
(statearr_58349_59980[(2)] = inst_58283);

(statearr_58349_59980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (15))){
var inst_58338 = (state_58340[(2)]);
var state_58340__$1 = state_58340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58340__$1,inst_58338);
} else {
if((state_val_58341 === (13))){
var inst_58334 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_58340__$1 = state_58340;
var statearr_58350_59981 = state_58340__$1;
(statearr_58350_59981[(2)] = inst_58334);

(statearr_58350_59981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (6))){
var inst_58297 = (state_58340[(10)]);
var inst_58300 = (state_58340[(2)]);
var inst_58301 = com.wsscode.async.async_cljs.throw_err(inst_58300);
var inst_58302 = [inst_58301];
var inst_58303 = (new cljs.core.PersistentVector(null,1,(5),inst_58297,inst_58302,null));
var inst_58304 = tail__$1;
var inst_58305 = cljs.core.seq(inst_58304);
var inst_58306 = cljs.core.first(inst_58305);
var inst_58307 = cljs.core.next(inst_58305);
var inst_58308 = inst_58303;
var inst_58309 = inst_58304;
var state_58340__$1 = (function (){var statearr_58352 = state_58340;
(statearr_58352[(7)] = inst_58309);

(statearr_58352[(11)] = inst_58306);

(statearr_58352[(12)] = inst_58308);

(statearr_58352[(13)] = inst_58307);

return statearr_58352;
})();
var statearr_58354_59990 = state_58340__$1;
(statearr_58354_59990[(2)] = null);

(statearr_58354_59990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (3))){
var inst_58331 = (state_58340[(14)]);
var inst_58331__$1 = (state_58340[(2)]);
var inst_58332 = (inst_58331__$1 == null);
var state_58340__$1 = (function (){var statearr_58356 = state_58340;
(statearr_58356[(14)] = inst_58331__$1);

return statearr_58356;
})();
if(cljs.core.truth_(inst_58332)){
var statearr_58357_59992 = state_58340__$1;
(statearr_58357_59992[(1)] = (13));

} else {
var statearr_58359_59993 = state_58340__$1;
(statearr_58359_59993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (12))){
var inst_58316 = (state_58340[(9)]);
var inst_58308 = (state_58340[(12)]);
var inst_58320 = (state_58340[(2)]);
var inst_58321 = com.wsscode.async.async_cljs.throw_err(inst_58320);
var inst_58322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_58308,inst_58321);
var inst_58308__$1 = inst_58322;
var inst_58309 = inst_58316;
var state_58340__$1 = (function (){var statearr_58361 = state_58340;
(statearr_58361[(7)] = inst_58309);

(statearr_58361[(12)] = inst_58308__$1);

return statearr_58361;
})();
var statearr_58362_59994 = state_58340__$1;
(statearr_58362_59994[(2)] = null);

(statearr_58362_59994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (2))){
var _ = (function (){var statearr_58363 = state_58340;
(statearr_58363[(4)] = cljs.core.cons((5),(state_58340[(4)])));

return statearr_58363;
})();
var inst_58297 = cljs.core.PersistentVector.EMPTY_NODE;
var state_58340__$1 = (function (){var statearr_58364 = state_58340;
(statearr_58364[(10)] = inst_58297);

return statearr_58364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58340__$1,(6),res);
} else {
if((state_val_58341 === (11))){
var inst_58326 = (state_58340[(2)]);
var state_58340__$1 = state_58340;
var statearr_58366_59997 = state_58340__$1;
(statearr_58366_59997[(2)] = inst_58326);

(statearr_58366_59997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (9))){
var inst_58315 = (state_58340[(8)]);
var inst_58308 = (state_58340[(12)]);
var inst_58318 = join_item(inst_58315,inst_58308);
var state_58340__$1 = state_58340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58340__$1,(12),inst_58318);
} else {
if((state_val_58341 === (5))){
var _ = (function (){var statearr_58369 = state_58340;
(statearr_58369[(4)] = cljs.core.rest((state_58340[(4)])));

return statearr_58369;
})();
var state_58340__$1 = state_58340;
var ex58365 = (state_58340__$1[(2)]);
var statearr_58370_60003 = state_58340__$1;
(statearr_58370_60003[(5)] = ex58365);


var statearr_58371_60004 = state_58340__$1;
(statearr_58371_60004[(1)] = (4));

(statearr_58371_60004[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (14))){
var inst_58331 = (state_58340[(14)]);
var inst_58336 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_58331);
var state_58340__$1 = state_58340;
var statearr_58373_60005 = state_58340__$1;
(statearr_58373_60005[(2)] = inst_58336);

(statearr_58373_60005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (10))){
var inst_58308 = (state_58340[(12)]);
var state_58340__$1 = state_58340;
var statearr_58374_60006 = state_58340__$1;
(statearr_58374_60006[(2)] = inst_58308);

(statearr_58374_60006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58341 === (8))){
var inst_58328 = (state_58340[(2)]);
var _ = (function (){var statearr_58377 = state_58340;
(statearr_58377[(4)] = cljs.core.rest((state_58340[(4)])));

return statearr_58377;
})();
var state_58340__$1 = state_58340;
var statearr_58378_60007 = state_58340__$1;
(statearr_58378_60007[(2)] = inst_58328);

(statearr_58378_60007[(1)] = (3));


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
});})(out__$1,G__58139__$1,c__48839__auto___59975,ch__53995__auto__,res,out__$2,vec__58276,seq__58277,first__58278,seq__58277__$1,ent__$1,tail__$1,out,G__58139,vec__58140,seq__58141,first__58142,seq__58141__$1,ent,tail,map__58122,map__58122__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__58139__$1,switch__48139__auto__,c__48839__auto___59975,ch__53995__auto__,res,out__$2,vec__58276,seq__58277,first__58278,seq__58277__$1,ent__$1,tail__$1,out,G__58139,vec__58140,seq__58141,first__58142,seq__58141__$1,ent,tail,map__58122,map__58122__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto____0 = (function (){
var statearr_58381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58381[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto__);

(statearr_58381[(1)] = (1));

return statearr_58381;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto____1 = (function (state_58340){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58340);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58383){var ex__48143__auto__ = e58383;
var statearr_58384_60008 = state_58340;
(statearr_58384_60008[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58340[(4)]))){
var statearr_58385_60009 = state_58340;
(statearr_58385_60009[(1)] = cljs.core.first((state_58340[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60011 = state_58340;
state_58340 = G__60011;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto__ = function(state_58340){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto____1.call(this,state_58340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__48140__auto__;
})()
;})(out__$1,G__58139__$1,switch__48139__auto__,c__48839__auto___59975,ch__53995__auto__,res,out__$2,vec__58276,seq__58277,first__58278,seq__58277__$1,ent__$1,tail__$1,out,G__58139,vec__58140,seq__58141,first__58142,seq__58141__$1,ent,tail,map__58122,map__58122__$1,env,parallel_QMARK_))
})();
var state__48841__auto__ = (function (){var statearr_58386 = f__48840__auto__();
(statearr_58386[(6)] = c__48839__auto___59975);

return statearr_58386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(out__$1,G__58139__$1,c__48839__auto___59975,ch__53995__auto__,res,out__$2,vec__58276,seq__58277,first__58278,seq__58277__$1,ent__$1,tail__$1,out,G__58139,vec__58140,seq__58141,first__58142,seq__58141__$1,ent,tail,map__58122,map__58122__$1,env,parallel_QMARK_))
);


return ch__53995__auto__;
} else {
var G__60013 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__60014 = tail__$1;
out__$1 = G__60013;
G__58139__$1 = G__60014;
continue;
}
} else {
return out__$2;
}
break;
}
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_map = (function com$wsscode$pathom$core$join_map(env,m){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-map","com.wsscode.pathom.core/join-map",-1495105359),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(m)], null));

var join_item = (function com$wsscode$pathom$core$join_map_$_join_item(k,ent){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),m),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,k));
});
var out = cljs.core.PersistentArrayMap.EMPTY;
var G__58393 = m;
var vec__58394 = G__58393;
var seq__58395 = cljs.core.seq(vec__58394);
var first__58396 = cljs.core.first(seq__58395);
var seq__58395__$1 = cljs.core.next(seq__58395);
var pair = first__58396;
var tail = seq__58395__$1;
var out__$1 = out;
var G__58393__$1 = G__58393;
while(true){
var out__$2 = out__$1;
var vec__58495 = G__58393__$1;
var seq__58496 = cljs.core.seq(vec__58495);
var first__58497 = cljs.core.first(seq__58496);
var seq__58496__$1 = cljs.core.next(seq__58496);
var pair__$1 = first__58497;
var tail__$1 = seq__58496__$1;
if(cljs.core.truth_(pair__$1)){
var vec__58498 = pair__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58498,(0),null);
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58498,(1),null);
var res = join_item(k,ent);
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___60018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__58393__$1,c__48839__auto___60018,ch__53995__auto__,vec__58498,k,ent,res,out__$2,vec__58495,seq__58496,first__58497,seq__58496__$1,pair__$1,tail__$1,out,G__58393,vec__58394,seq__58395,first__58396,seq__58395__$1,pair,tail){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (out__$1,G__58393__$1,c__48839__auto___60018,ch__53995__auto__,vec__58498,k,ent,res,out__$2,vec__58495,seq__58496,first__58497,seq__58496__$1,pair__$1,tail__$1,out,G__58393,vec__58394,seq__58395,first__58396,seq__58395__$1,pair,tail){
return (function (state_58561){
var state_val_58562 = (state_58561[(1)]);
if((state_val_58562 === (7))){
var inst_58525 = (state_58561[(7)]);
var inst_58531 = (state_58561[(8)]);
var inst_58530 = cljs.core.seq(inst_58525);
var inst_58531__$1 = cljs.core.first(inst_58530);
var inst_58532 = cljs.core.next(inst_58530);
var state_58561__$1 = (function (){var statearr_58563 = state_58561;
(statearr_58563[(9)] = inst_58532);

(statearr_58563[(8)] = inst_58531__$1);

return statearr_58563;
})();
if(cljs.core.truth_(inst_58531__$1)){
var statearr_58564_60024 = state_58561__$1;
(statearr_58564_60024[(1)] = (9));

} else {
var statearr_58565_60026 = state_58561__$1;
(statearr_58565_60026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (1))){
var state_58561__$1 = state_58561;
var statearr_58566_60027 = state_58561__$1;
(statearr_58566_60027[(2)] = null);

(statearr_58566_60027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (4))){
var inst_58501 = (state_58561[(2)]);
var state_58561__$1 = state_58561;
var statearr_58567_60028 = state_58561__$1;
(statearr_58567_60028[(2)] = inst_58501);

(statearr_58567_60028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (15))){
var inst_58559 = (state_58561[(2)]);
var state_58561__$1 = state_58561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58561__$1,inst_58559);
} else {
if((state_val_58562 === (13))){
var inst_58555 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_58561__$1 = state_58561;
var statearr_58568_60029 = state_58561__$1;
(statearr_58568_60029[(2)] = inst_58555);

(statearr_58568_60029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (6))){
var inst_58514 = (state_58561[(10)]);
var inst_58516 = (state_58561[(2)]);
var inst_58517 = com.wsscode.async.async_cljs.throw_err(inst_58516);
var inst_58518 = [inst_58517];
var inst_58519 = cljs.core.PersistentHashMap.fromArrays(inst_58514,inst_58518);
var inst_58520 = tail__$1;
var inst_58521 = cljs.core.seq(inst_58520);
var inst_58522 = cljs.core.first(inst_58521);
var inst_58523 = cljs.core.next(inst_58521);
var inst_58524 = inst_58519;
var inst_58525 = inst_58520;
var state_58561__$1 = (function (){var statearr_58569 = state_58561;
(statearr_58569[(11)] = inst_58523);

(statearr_58569[(12)] = inst_58522);

(statearr_58569[(7)] = inst_58525);

(statearr_58569[(13)] = inst_58524);

return statearr_58569;
})();
var statearr_58570_60036 = state_58561__$1;
(statearr_58570_60036[(2)] = null);

(statearr_58570_60036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (3))){
var inst_58552 = (state_58561[(14)]);
var inst_58552__$1 = (state_58561[(2)]);
var inst_58553 = (inst_58552__$1 == null);
var state_58561__$1 = (function (){var statearr_58571 = state_58561;
(statearr_58571[(14)] = inst_58552__$1);

return statearr_58571;
})();
if(cljs.core.truth_(inst_58553)){
var statearr_58572_60039 = state_58561__$1;
(statearr_58572_60039[(1)] = (13));

} else {
var statearr_58573_60040 = state_58561__$1;
(statearr_58573_60040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (12))){
var inst_58532 = (state_58561[(9)]);
var inst_58524 = (state_58561[(13)]);
var inst_58537 = (state_58561[(15)]);
var inst_58541 = (state_58561[(2)]);
var inst_58542 = com.wsscode.async.async_cljs.throw_err(inst_58541);
var inst_58543 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_58524,inst_58537,inst_58542);
var inst_58524__$1 = inst_58543;
var inst_58525 = inst_58532;
var state_58561__$1 = (function (){var statearr_58574 = state_58561;
(statearr_58574[(7)] = inst_58525);

(statearr_58574[(13)] = inst_58524__$1);

return statearr_58574;
})();
var statearr_58575_60041 = state_58561__$1;
(statearr_58575_60041[(2)] = null);

(statearr_58575_60041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (2))){
var _ = (function (){var statearr_58576 = state_58561;
(statearr_58576[(4)] = cljs.core.cons((5),(state_58561[(4)])));

return statearr_58576;
})();
var inst_58514 = [k];
var state_58561__$1 = (function (){var statearr_58577 = state_58561;
(statearr_58577[(10)] = inst_58514);

return statearr_58577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58561__$1,(6),res);
} else {
if((state_val_58562 === (11))){
var inst_58547 = (state_58561[(2)]);
var state_58561__$1 = state_58561;
var statearr_58579_60043 = state_58561__$1;
(statearr_58579_60043[(2)] = inst_58547);

(statearr_58579_60043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (9))){
var inst_58531 = (state_58561[(8)]);
var inst_58537 = (state_58561[(15)]);
var inst_58537__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58531,(0),null);
var inst_58538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58531,(1),null);
var inst_58539 = join_item(inst_58537__$1,inst_58538);
var state_58561__$1 = (function (){var statearr_58580 = state_58561;
(statearr_58580[(15)] = inst_58537__$1);

return statearr_58580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58561__$1,(12),inst_58539);
} else {
if((state_val_58562 === (5))){
var _ = (function (){var statearr_58581 = state_58561;
(statearr_58581[(4)] = cljs.core.rest((state_58561[(4)])));

return statearr_58581;
})();
var state_58561__$1 = state_58561;
var ex58578 = (state_58561__$1[(2)]);
var statearr_58582_60048 = state_58561__$1;
(statearr_58582_60048[(5)] = ex58578);


var statearr_58583_60049 = state_58561__$1;
(statearr_58583_60049[(1)] = (4));

(statearr_58583_60049[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (14))){
var inst_58552 = (state_58561[(14)]);
var inst_58557 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_58552);
var state_58561__$1 = state_58561;
var statearr_58584_60051 = state_58561__$1;
(statearr_58584_60051[(2)] = inst_58557);

(statearr_58584_60051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (10))){
var inst_58524 = (state_58561[(13)]);
var state_58561__$1 = state_58561;
var statearr_58585_60052 = state_58561__$1;
(statearr_58585_60052[(2)] = inst_58524);

(statearr_58585_60052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58562 === (8))){
var inst_58549 = (state_58561[(2)]);
var _ = (function (){var statearr_58586 = state_58561;
(statearr_58586[(4)] = cljs.core.rest((state_58561[(4)])));

return statearr_58586;
})();
var state_58561__$1 = state_58561;
var statearr_58587_60054 = state_58561__$1;
(statearr_58587_60054[(2)] = inst_58549);

(statearr_58587_60054[(1)] = (3));


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
});})(out__$1,G__58393__$1,c__48839__auto___60018,ch__53995__auto__,vec__58498,k,ent,res,out__$2,vec__58495,seq__58496,first__58497,seq__58496__$1,pair__$1,tail__$1,out,G__58393,vec__58394,seq__58395,first__58396,seq__58395__$1,pair,tail))
;
return ((function (out__$1,G__58393__$1,switch__48139__auto__,c__48839__auto___60018,ch__53995__auto__,vec__58498,k,ent,res,out__$2,vec__58495,seq__58496,first__58497,seq__58496__$1,pair__$1,tail__$1,out,G__58393,vec__58394,seq__58395,first__58396,seq__58395__$1,pair,tail){
return (function() {
var com$wsscode$pathom$core$join_map_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$join_map_$_state_machine__48140__auto____0 = (function (){
var statearr_58588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58588[(0)] = com$wsscode$pathom$core$join_map_$_state_machine__48140__auto__);

(statearr_58588[(1)] = (1));

return statearr_58588;
});
var com$wsscode$pathom$core$join_map_$_state_machine__48140__auto____1 = (function (state_58561){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58561);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58589){var ex__48143__auto__ = e58589;
var statearr_58590_60058 = state_58561;
(statearr_58590_60058[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58561[(4)]))){
var statearr_58591_60059 = state_58561;
(statearr_58591_60059[(1)] = cljs.core.first((state_58561[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60060 = state_58561;
state_58561 = G__60060;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_map_$_state_machine__48140__auto__ = function(state_58561){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_map_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_map_$_state_machine__48140__auto____1.call(this,state_58561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_map_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_map_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$join_map_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_map_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$join_map_$_state_machine__48140__auto__;
})()
;})(out__$1,G__58393__$1,switch__48139__auto__,c__48839__auto___60018,ch__53995__auto__,vec__58498,k,ent,res,out__$2,vec__58495,seq__58496,first__58497,seq__58496__$1,pair__$1,tail__$1,out,G__58393,vec__58394,seq__58395,first__58396,seq__58395__$1,pair,tail))
})();
var state__48841__auto__ = (function (){var statearr_58592 = f__48840__auto__();
(statearr_58592[(6)] = c__48839__auto___60018);

return statearr_58592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(out__$1,G__58393__$1,c__48839__auto___60018,ch__53995__auto__,vec__58498,k,ent,res,out__$2,vec__58495,seq__58496,first__58497,seq__58496__$1,pair__$1,tail__$1,out,G__58393,vec__58394,seq__58395,first__58396,seq__58395__$1,pair,tail))
);


return ch__53995__auto__;
} else {
var G__60061 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out__$2,k,res);
var G__60062 = tail__$1;
out__$1 = G__60061;
G__58393__$1 = G__60062;
continue;
}
} else {
return out__$2;
}
break;
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
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__58593){
var map__58594 = p__58593;
var map__58594__$1 = (((((!((map__58594 == null))))?(((((map__58594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58594):map__58594);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58594__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__58596 = ast;
if((G__58596 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__58596);
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
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__58597){
var map__58598 = p__58597;
var map__58598__$1 = (((((!((map__58598 == null))))?(((((map__58598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58598):map__58598);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58598__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__58600 = ast;
if((G__58600 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__58600);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__58602,elision_set){
var map__58603 = p__58602;
var map__58603__$1 = (((((!((map__58603 == null))))?(((((map__58603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58603):map__58603);
var ast = map__58603__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__58603,map__58603__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__58603,map__58603__$1,ast,key,union_key){
return (function (p1__58601_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__58601_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__58601_SHARP_,elision_set));
});})(union_elision_QMARK_,map__58603,map__58603__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__58603,map__58603__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__58605){
var map__58606 = p__58605;
var map__58606__$1 = (((((!((map__58606 == null))))?(((((map__58606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58606):map__58606);
var env = map__58606__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58606__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__58608 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58608,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__58608;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__58611){
var map__58612 = p__58611;
var map__58612__$1 = (((((!((map__58612 == null))))?(((((map__58612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58612):map__58612);
var item_b = map__58612__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58612__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__58612,map__58612__$1,item_b,key,type,params){
return (function (p1__58610_SHARP_,p2__58609_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__58609_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58610_SHARP_,p2__58609_SHARP_], null);
} else {
return null;
}
});})(map__58612,map__58612__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__58614 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58614,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58614,(1),null);
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
var G__58617 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__58617 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__58617);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__58619 = x;
var G__58619__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58619,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__58619);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__58619__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__58619,G__58619__$1){
return (function (p1__58618_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__58619,G__58619__$1){
return (function (p__58620){
var vec__58621 = p__58620;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58621,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58621,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__58619,G__58619__$1))
),p1__58618_SHARP_);
});})(G__58619,G__58619__$1))
);
} else {
return G__58619__$1;
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
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__58624){
var map__58625 = p__58624;
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__58627){
var map__58628 = p__58627;
var map__58628__$1 = (((((!((map__58628 == null))))?(((((map__58628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58628):map__58628);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58628__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__58630){
var map__58631 = p__58630;
var map__58631__$1 = (((((!((map__58631 == null))))?(((((map__58631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58631):map__58631);
var env = map__58631__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
if(cljs.core.truth_(placeholder_prefixes)){
} else {
throw (new Error(["Assert failed: ","To use env-placeholder-reader please add ::p/placeholder-prefixes to your environment.","\n","placeholder-prefixes"].join('')));
}

if(com.wsscode.pathom.core.placeholder_key_QMARK_(env,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ast","ast",-860334068).cljs$core$IFn$_invoke$arity$1(env)))){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(env);
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
/**
 * This will lift the AST from placeholders to the same level of the query, as if there was not placeholders in it.
 */
com.wsscode.pathom.core.lift_placeholders_ast = (function com$wsscode$pathom$core$lift_placeholders_ast(env,ast){
return clojure.walk.postwalk((function (x){
var temp__5718__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5718__auto__)){
var children = temp__5718__auto__;
var map__58634 = cljs.core.group_by(((function (children,temp__5718__auto__){
return (function (p1__58633_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__58633_SHARP_))) && (com.wsscode.pathom.core.placeholder_key_QMARK_(env,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__58633_SHARP_))));
});})(children,temp__5718__auto__))
,children);
var map__58634__$1 = (((((!((map__58634 == null))))?(((((map__58634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58634):map__58634);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58634__$1,false);
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
}),ast);
});
/**
 * This will lift the queries from placeholders to the same level of the query, as if there was not placeholders in it.
 */
com.wsscode.pathom.core.lift_placeholders = (function com$wsscode$pathom$core$lift_placeholders(env,query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.lift_placeholders_ast(env,com.wsscode.pathom.core.query__GT_ast(query)));
});
/**
 * Children should join when there is a query, unless the value is marked as final.
 */
com.wsscode.pathom.core.join_children_QMARK_ = (function com$wsscode$pathom$core$join_children_QMARK_(p__58636,v){
var map__58637 = p__58636;
var map__58637__$1 = (((((!((map__58637 == null))))?(((((map__58637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58637):map__58637);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58637__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var and__4120__auto__ = query;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(new cljs.core.Keyword("com.wsscode.pathom.core","final","com.wsscode.pathom.core/final",891454300).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)));
} else {
return and__4120__auto__;
}
});
/**
 * Map reader will try to find the ast key on the current entity and output it. When the value is a map and a
 *   sub query is present, it will apply the sub query on that value (recursively). When the value is a sequence,
 *   map-reader will do a join on each of the items (and apply sub queries if it's present and values are maps.
 * 
 *   Map-reader will defer the read when the key is not present at entity.
 */
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__58639){
var map__58640 = p__58639;
var map__58640__$1 = (((((!((map__58640 == null))))?(((((map__58640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58640):map__58640);
var env = map__58640__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58640__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.contains_QMARK_(entity,key)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(com.wsscode.pathom.core.join_children_QMARK_(env,v))){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","map-of-maps","com.wsscode.pathom.core/map-of-maps",-1598019706).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","map-of-maps","com.wsscode.pathom.core/map-of-maps",-1598019706).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(com.wsscode.pathom.core.join_children_QMARK_(env,v))){
return com.wsscode.pathom.core.join_map(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return com.wsscode.pathom.core.join_children_QMARK_(env,v);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(v,env);
} else {
return v;
}

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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__58642){
var map__58643 = p__58642;
var map__58643__$1 = (((((!((map__58643 == null))))?(((((map__58643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58643):map__58643);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58643__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__58643,map__58643__$1,map_key_transform,map_value_transform){
return (function (p__58645){
var map__58646 = p__58645;
var map__58646__$1 = (((((!((map__58646 == null))))?(((((map__58646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58646):map__58646);
var env = map__58646__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58646__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__58648 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__58648) : map_key_transform.call(null,G__58648));
} else {
return G__58648;
}
})();
var entity = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.contains_QMARK_(entity,key)){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
if(cljs.core.sequential_QMARK_(v)){
if(cljs.core.truth_(com.wsscode.pathom.core.join_children_QMARK_(env,v))){
return com.wsscode.pathom.core.join_seq(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.core","map-of-maps","com.wsscode.pathom.core/map-of-maps",-1598019706).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","map-of-maps","com.wsscode.pathom.core/map-of-maps",-1598019706).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(com.wsscode.pathom.core.join_children_QMARK_(env,v))){
return com.wsscode.pathom.core.join_map(env,v);
} else {
return v;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(v);
if(and__4120__auto__){
return com.wsscode.pathom.core.join_children_QMARK_(env,v);
} else {
return and__4120__auto__;
}
})())){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,entity_key,v));
} else {
var G__58649 = v;
if(cljs.core.truth_(map_value_transform)){
var G__58650 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__58651 = G__58649;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__58650,G__58651) : map_value_transform.call(null,G__58650,G__58651));
} else {
return G__58649;
}
}

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__58643,map__58643__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__58652){
var map__58653 = p__58652;
var map__58653__$1 = (((((!((map__58653 == null))))?(((((map__58653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58653):map__58653);
var env = map__58653__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58653__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58653__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__58653,map__58653__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__58653,map__58653__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58653__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__58655 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__58655) : js_key_transform.call(null,G__58655));
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
var G__58656 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__58657 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__58656,G__58657) : js_value_transform.call(null,G__58656,G__58657));
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
var map__58658 = (function (){var G__58659 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58659) : f.call(null,G__58659));
})();
var map__58658__$1 = (((((!((map__58658 == null))))?(((((map__58658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58658):map__58658);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58658__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
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
var res__54030__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__){
return (function (state_58675){
var state_val_58676 = (state_58675[(1)]);
if((state_val_58676 === (1))){
var state_58675__$1 = state_58675;
var statearr_58677_60204 = state_58675__$1;
(statearr_58677_60204[(2)] = null);

(statearr_58677_60204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58676 === (2))){
var _ = (function (){var statearr_58678 = state_58675;
(statearr_58678[(4)] = cljs.core.cons((5),(state_58675[(4)])));

return statearr_58678;
})();
var state_58675__$1 = state_58675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58675__$1,(6),res__54030__auto__);
} else {
if((state_val_58676 === (3))){
var inst_58673 = (state_58675[(2)]);
var state_58675__$1 = state_58675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58675__$1,inst_58673);
} else {
if((state_val_58676 === (4))){
var inst_58661 = (state_58675[(2)]);
var state_58675__$1 = state_58675;
var statearr_58680_60207 = state_58675__$1;
(statearr_58680_60207[(2)] = inst_58661);

(statearr_58680_60207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58676 === (5))){
var _ = (function (){var statearr_58681 = state_58675;
(statearr_58681[(4)] = cljs.core.rest((state_58675[(4)])));

return statearr_58681;
})();
var state_58675__$1 = state_58675;
var ex58679 = (state_58675__$1[(2)]);
var statearr_58682_60213 = state_58675__$1;
(statearr_58682_60213[(5)] = ex58679);


var statearr_58683_60214 = state_58675__$1;
(statearr_58683_60214[(1)] = (4));

(statearr_58683_60214[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58676 === (6))){
var inst_58668 = (state_58675[(2)]);
var inst_58669 = com.wsscode.async.async_cljs.throw_err(inst_58668);
var inst_58670 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58669) : f.call(null,inst_58669));
var _ = (function (){var statearr_58684 = state_58675;
(statearr_58684[(4)] = cljs.core.rest((state_58675[(4)])));

return statearr_58684;
})();
var state_58675__$1 = state_58675;
var statearr_58685_60218 = state_58675__$1;
(statearr_58685_60218[(2)] = inst_58670);

(statearr_58685_60218[(1)] = (3));


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
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_58686 = [null,null,null,null,null,null,null];
(statearr_58686[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto__);

(statearr_58686[(1)] = (1));

return statearr_58686;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto____1 = (function (state_58675){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58675);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58687){var ex__48143__auto__ = e58687;
var statearr_58688_60224 = state_58675;
(statearr_58688_60224[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58675[(4)]))){
var statearr_58689_60225 = state_58675;
(statearr_58689_60225[(1)] = cljs.core.first((state_58675[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60226 = state_58675;
state_58675 = G__60226;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto__ = function(state_58675){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto____1.call(this,state_58675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__))
})();
var state__48841__auto__ = (function (){var statearr_58690 = f__48840__auto__();
(statearr_58690[(6)] = c__48839__auto__);

return statearr_58690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(res) : f.call(null,res));
}
});
})], null);
});
com.wsscode.pathom.core.elide_special_outputs_plugin = com.wsscode.pathom.core.post_process_parser_plugin(com.wsscode.pathom.core.elide_special_outputs);
com.wsscode.pathom.core.error_message = (function com$wsscode$pathom$core$error_message(err){
return err.message;
});
com.wsscode.pathom.core.error_str = (function com$wsscode$pathom$core$error_str(err){
var msg = err.message;
var data = cljs.core.ex_data(err);
var G__58691 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58691)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__58691;
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
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__58692,e){
var map__58693 = p__58692;
var map__58693__$1 = (((((!((map__58693 == null))))?(((((map__58693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58693):map__58693);
var env = map__58693__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__58695,e){
var map__58696 = p__58695;
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var env = map__58696__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__58698){
var map__58699 = p__58698;
var map__58699__$1 = (((((!((map__58699 == null))))?(((((map__58699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58699):map__58699);
var env = map__58699__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58699__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.async.async_cljs.chan_QMARK_(x)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,x,map__58699,map__58699__$1,env,fail_fast_QMARK_){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,x,map__58699,map__58699__$1,env,fail_fast_QMARK_){
return (function (state_58716){
var state_val_58717 = (state_58716[(1)]);
if((state_val_58717 === (1))){
var state_58716__$1 = state_58716;
var statearr_58718_60284 = state_58716__$1;
(statearr_58718_60284[(2)] = null);

(statearr_58718_60284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58717 === (2))){
var _ = (function (){var statearr_58719 = state_58716;
(statearr_58719[(4)] = cljs.core.cons((5),(state_58716[(4)])));

return statearr_58719;
})();
var state_58716__$1 = state_58716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58716__$1,(6),x);
} else {
if((state_val_58717 === (3))){
var inst_58714 = (state_58716[(2)]);
var state_58716__$1 = state_58716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58716__$1,inst_58714);
} else {
if((state_val_58717 === (4))){
var inst_58702 = (state_58716[(2)]);
var inst_58703 = com.wsscode.pathom.core.add_error(env,inst_58702);
var state_58716__$1 = state_58716;
var statearr_58721_60296 = state_58716__$1;
(statearr_58721_60296[(2)] = inst_58703);

(statearr_58721_60296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58717 === (5))){
var _ = (function (){var statearr_58722 = state_58716;
(statearr_58722[(4)] = cljs.core.rest((state_58716[(4)])));

return statearr_58722;
})();
var state_58716__$1 = state_58716;
var ex58720 = (state_58716__$1[(2)]);
var statearr_58723_60297 = state_58716__$1;
(statearr_58723_60297[(5)] = ex58720);


var statearr_58724_60298 = state_58716__$1;
(statearr_58724_60298[(1)] = (4));

(statearr_58724_60298[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58717 === (6))){
var inst_58710 = (state_58716[(2)]);
var inst_58711 = com.wsscode.async.async_cljs.throw_err(inst_58710);
var _ = (function (){var statearr_58725 = state_58716;
(statearr_58725[(4)] = cljs.core.rest((state_58716[(4)])));

return statearr_58725;
})();
var state_58716__$1 = state_58716;
var statearr_58726_60308 = state_58716__$1;
(statearr_58726_60308[(2)] = inst_58711);

(statearr_58726_60308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,x,map__58699,map__58699__$1,env,fail_fast_QMARK_))
;
return ((function (switch__48139__auto__,c__48839__auto__,x,map__58699,map__58699__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_58727 = [null,null,null,null,null,null,null];
(statearr_58727[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto__);

(statearr_58727[(1)] = (1));

return statearr_58727;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto____1 = (function (state_58716){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58716);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58728){var ex__48143__auto__ = e58728;
var statearr_58729_60312 = state_58716;
(statearr_58729_60312[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58716[(4)]))){
var statearr_58730_60314 = state_58716;
(statearr_58730_60314[(1)] = cljs.core.first((state_58716[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60316 = state_58716;
state_58716 = G__60316;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto__ = function(state_58716){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto____1.call(this,state_58716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,x,map__58699,map__58699__$1,env,fail_fast_QMARK_))
})();
var state__48841__auto__ = (function (){var statearr_58731 = f__48840__auto__();
(statearr_58731[(6)] = c__48839__auto__);

return statearr_58731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,x,map__58699,map__58699__$1,env,fail_fast_QMARK_))
);

return c__48839__auto__;
} else {
return x;
}
}catch (e58701){var e = e58701;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__58732,k,p){
var map__58733 = p__58732;
var map__58733__$1 = (((((!((map__58733 == null))))?(((((map__58733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58733):map__58733);
var env = map__58733__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58733__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_){
return (function (state_58759){
var state_val_58760 = (state_58759[(1)]);
if((state_val_58760 === (7))){
var inst_58746 = (state_58759[(2)]);
var state_58759__$1 = state_58759;
var statearr_58761_60325 = state_58759__$1;
(statearr_58761_60325[(2)] = inst_58746);

(statearr_58761_60325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58760 === (1))){
var state_58759__$1 = state_58759;
var statearr_58762_60328 = state_58759__$1;
(statearr_58762_60328[(2)] = null);

(statearr_58762_60328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58760 === (4))){
var inst_58737 = (state_58759[(2)]);
var state_58759__$1 = (function (){var statearr_58763 = state_58759;
(statearr_58763[(7)] = inst_58737);

return statearr_58763;
})();
if(cljs.core.truth_(process_error)){
var statearr_58764_60331 = state_58759__$1;
(statearr_58764_60331[(1)] = (5));

} else {
var statearr_58765_60333 = state_58759__$1;
(statearr_58765_60333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58760 === (6))){
var inst_58737 = (state_58759[(7)]);
var inst_58741 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_58742 = com.wsscode.pathom.core.error_str(inst_58737);
var inst_58743 = [inst_58742];
var inst_58744 = cljs.core.PersistentHashMap.fromArrays(inst_58741,inst_58743);
var state_58759__$1 = state_58759;
var statearr_58766_60342 = state_58759__$1;
(statearr_58766_60342[(2)] = inst_58744);

(statearr_58766_60342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58760 === (3))){
var inst_58757 = (state_58759[(2)]);
var state_58759__$1 = state_58759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58759__$1,inst_58757);
} else {
if((state_val_58760 === (2))){
var _ = (function (){var statearr_58767 = state_58759;
(statearr_58767[(4)] = cljs.core.cons((8),(state_58759[(4)])));

return statearr_58767;
})();
var state_58759__$1 = state_58759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58759__$1,(9),res);
} else {
if((state_val_58760 === (9))){
var inst_58753 = (state_58759[(2)]);
var inst_58754 = com.wsscode.async.async_cljs.throw_err(inst_58753);
var _ = (function (){var statearr_58769 = state_58759;
(statearr_58769[(4)] = cljs.core.rest((state_58759[(4)])));

return statearr_58769;
})();
var state_58759__$1 = state_58759;
var statearr_58770_60348 = state_58759__$1;
(statearr_58770_60348[(2)] = inst_58754);

(statearr_58770_60348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58760 === (5))){
var inst_58737 = (state_58759[(7)]);
var inst_58739 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_58737) : process_error.call(null,env,inst_58737));
var state_58759__$1 = state_58759;
var statearr_58771_60351 = state_58759__$1;
(statearr_58771_60351[(2)] = inst_58739);

(statearr_58771_60351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58760 === (8))){
var _ = (function (){var statearr_58772 = state_58759;
(statearr_58772[(4)] = cljs.core.rest((state_58759[(4)])));

return statearr_58772;
})();
var state_58759__$1 = state_58759;
var ex58768 = (state_58759__$1[(2)]);
var statearr_58773_60355 = state_58759__$1;
(statearr_58773_60355[(5)] = ex58768);


var statearr_58774_60356 = state_58759__$1;
(statearr_58774_60356[(1)] = (4));

(statearr_58774_60356[(5)] = null);



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
});})(c__48839__auto__,res,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__48139__auto__,c__48839__auto__,res,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_58775 = [null,null,null,null,null,null,null,null];
(statearr_58775[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto__);

(statearr_58775[(1)] = (1));

return statearr_58775;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto____1 = (function (state_58759){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58759);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58776){var ex__48143__auto__ = e58776;
var statearr_58777_60358 = state_58759;
(statearr_58777_60358[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58759[(4)]))){
var statearr_58778_60361 = state_58759;
(statearr_58778_60361[(1)] = cljs.core.first((state_58759[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60365 = state_58759;
state_58759 = G__60365;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto__ = function(state_58759){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto____1.call(this,state_58759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_))
})();
var state__48841__auto__ = (function (){var statearr_58779 = f__48840__auto__();
(statearr_58779[(6)] = c__48839__auto__);

return statearr_58779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_))
);

return c__48839__auto__;
} else {
return res;
}
}catch (e58736){var e = e58736;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_))
});})(map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e58735){var e = e58735;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__58733,map__58733__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__54030__auto__ = (function (){var G__58780 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__58781 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__58780,G__58781) : parser.call(null,G__58780,G__58781));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,errors){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,errors){
return (function (state_58804){
var state_val_58805 = (state_58804[(1)]);
if((state_val_58805 === (7))){
var inst_58790 = (state_58804[(7)]);
var inst_58795 = cljs.core.deref(errors);
var inst_58796 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_58790,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_58795);
var state_58804__$1 = state_58804;
var statearr_58806_60376 = state_58804__$1;
(statearr_58806_60376[(2)] = inst_58796);

(statearr_58806_60376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58805 === (1))){
var state_58804__$1 = state_58804;
var statearr_58807_60377 = state_58804__$1;
(statearr_58807_60377[(2)] = null);

(statearr_58807_60377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58805 === (4))){
var inst_58782 = (state_58804[(2)]);
var state_58804__$1 = state_58804;
var statearr_58808_60381 = state_58804__$1;
(statearr_58808_60381[(2)] = inst_58782);

(statearr_58808_60381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58805 === (6))){
var inst_58789 = (state_58804[(2)]);
var inst_58790 = com.wsscode.async.async_cljs.throw_err(inst_58789);
var inst_58792 = cljs.core.deref(errors);
var inst_58793 = cljs.core.seq(inst_58792);
var state_58804__$1 = (function (){var statearr_58809 = state_58804;
(statearr_58809[(7)] = inst_58790);

return statearr_58809;
})();
if(inst_58793){
var statearr_58810_60385 = state_58804__$1;
(statearr_58810_60385[(1)] = (7));

} else {
var statearr_58811_60386 = state_58804__$1;
(statearr_58811_60386[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58805 === (3))){
var inst_58802 = (state_58804[(2)]);
var state_58804__$1 = state_58804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58804__$1,inst_58802);
} else {
if((state_val_58805 === (2))){
var _ = (function (){var statearr_58813 = state_58804;
(statearr_58813[(4)] = cljs.core.cons((5),(state_58804[(4)])));

return statearr_58813;
})();
var state_58804__$1 = state_58804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58804__$1,(6),res__54030__auto__);
} else {
if((state_val_58805 === (9))){
var inst_58799 = (state_58804[(2)]);
var _ = (function (){var statearr_58814 = state_58804;
(statearr_58814[(4)] = cljs.core.rest((state_58804[(4)])));

return statearr_58814;
})();
var state_58804__$1 = state_58804;
var statearr_58815_60393 = state_58804__$1;
(statearr_58815_60393[(2)] = inst_58799);

(statearr_58815_60393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58805 === (5))){
var _ = (function (){var statearr_58816 = state_58804;
(statearr_58816[(4)] = cljs.core.rest((state_58804[(4)])));

return statearr_58816;
})();
var state_58804__$1 = state_58804;
var ex58812 = (state_58804__$1[(2)]);
var statearr_58817_60397 = state_58804__$1;
(statearr_58817_60397[(5)] = ex58812);


var statearr_58818_60398 = state_58804__$1;
(statearr_58818_60398[(1)] = (4));

(statearr_58818_60398[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58805 === (8))){
var inst_58790 = (state_58804[(7)]);
var state_58804__$1 = state_58804;
var statearr_58819_60400 = state_58804__$1;
(statearr_58819_60400[(2)] = inst_58790);

(statearr_58819_60400[(1)] = (9));


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
});})(c__48839__auto__,res__54030__auto__,errors))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_58820 = [null,null,null,null,null,null,null,null];
(statearr_58820[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto__);

(statearr_58820[(1)] = (1));

return statearr_58820;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto____1 = (function (state_58804){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58804);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58821){var ex__48143__auto__ = e58821;
var statearr_58822_60407 = state_58804;
(statearr_58822_60407[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58804[(4)]))){
var statearr_58823_60408 = state_58804;
(statearr_58823_60408[(1)] = cljs.core.first((state_58804[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60409 = state_58804;
state_58804 = G__60409;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto__ = function(state_58804){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto____1.call(this,state_58804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,errors))
})();
var state__48841__auto__ = (function (){var statearr_58824 = f__48840__auto__();
(statearr_58824[(6)] = c__48839__auto__);

return statearr_58824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,errors))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
var G__58825 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58825,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__58825;
}
}
});
});
/**
 * Wrap reads with try-catch and put any errors under `::p/errors` (including the path),
 * setting the value of the errored node to `::p/reader-error`.
 * 
 *   You can customize how the error is exported into the `::p/errors` map by setting the key
 *   `::p/process-error` in your environment to a function of [env, err] -> data.
 */
com.wsscode.pathom.core.error_handler_plugin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),com.wsscode.pathom.core.wrap_handle_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),com.wsscode.pathom.core.wrap_parser_exception,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),com.wsscode.pathom.core.wrap_mutate_handle_exception], null);
com.wsscode.pathom.core.trace_plugin = com.wsscode.pathom.trace.trace_plugin;
/**
 * Reduces the error path to the last available nesting on the map m.
 */
com.wsscode.pathom.core.collapse_error_path = (function com$wsscode$pathom$core$collapse_error_path(m,path){
return cljs.core.vec((function (){var path_SINGLEQUOTE_ = path;
while(true){
if((cljs.core.count(path_SINGLEQUOTE_) === (0))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),path);
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,path_SINGLEQUOTE_))){
return path_SINGLEQUOTE_;
} else {
var G__60423 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__60423;
continue;
}
}
break;
}
})());
});
/**
 * Extract errors from the data root and inject those in the same level where
 * the error item is present. For example:
 * 
 * {:query {:item :com.wsscode.pathom/reader-error}
 *  :com.wsscode.pathom.core/errors
 *  {[:query :item] {:error "some error"}}}
 * 
 * Is turned into:
 * 
 * {:query {:item :com.wsscode.pathom/reader-error
 *          :com.wsscode.pathom.core/errors {:item {:error "some error"}}}
 * 
 * This makes easier to reach for the error when rendering the UI.
 * 
 * Use it e.g. via [[p/post-process-parser-plugin]], after the [[p/error-handler-plugin]].
 */
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__58826){
var vec__58827 = p__58826;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58827,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58827,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__58830){
var vec__58831 = p__58830;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58831,(1),null);
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
var G__58834 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__58835 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__58834,G__58835) : parser.call(null,G__58834,G__58835));
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
var G__58836 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__58837 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__58836,G__58837) : parser.call(null,G__58836,G__58837));
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
var vec__58838 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58838,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58838,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.async.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__54030__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e58841){var e = e58841;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_58856){
var state_val_58857 = (state_58856[(1)]);
if((state_val_58857 === (1))){
var state_58856__$1 = state_58856;
var statearr_58858_60436 = state_58856__$1;
(statearr_58858_60436[(2)] = null);

(statearr_58858_60436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58857 === (2))){
var _ = (function (){var statearr_58859 = state_58856;
(statearr_58859[(4)] = cljs.core.cons((5),(state_58856[(4)])));

return statearr_58859;
})();
var state_58856__$1 = state_58856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58856__$1,(6),res__54030__auto__);
} else {
if((state_val_58857 === (3))){
var inst_58854 = (state_58856[(2)]);
var state_58856__$1 = state_58856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58856__$1,inst_58854);
} else {
if((state_val_58857 === (4))){
var inst_58842 = (state_58856[(2)]);
var state_58856__$1 = state_58856;
var statearr_58861_60437 = state_58856__$1;
(statearr_58861_60437[(2)] = inst_58842);

(statearr_58861_60437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58857 === (5))){
var _ = (function (){var statearr_58862 = state_58856;
(statearr_58862[(4)] = cljs.core.rest((state_58856[(4)])));

return statearr_58862;
})();
var state_58856__$1 = state_58856;
var ex58860 = (state_58856__$1[(2)]);
var statearr_58863_60438 = state_58856__$1;
(statearr_58863_60438[(5)] = ex58860);


var statearr_58864_60440 = state_58856__$1;
(statearr_58864_60440[(1)] = (4));

(statearr_58864_60440[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58857 === (6))){
var inst_58849 = (state_58856[(2)]);
var inst_58850 = com.wsscode.async.async_cljs.throw_err(inst_58849);
var inst_58851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_58850);
var _ = (function (){var statearr_58865 = state_58856;
(statearr_58865[(4)] = cljs.core.rest((state_58856[(4)])));

return statearr_58865;
})();
var state_58856__$1 = (function (){var statearr_58866 = state_58856;
(statearr_58866[(7)] = inst_58851);

return statearr_58866;
})();
var statearr_58867_60443 = state_58856__$1;
(statearr_58867_60443[(2)] = inst_58850);

(statearr_58867_60443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto____0 = (function (){
var statearr_58868 = [null,null,null,null,null,null,null,null];
(statearr_58868[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto__);

(statearr_58868[(1)] = (1));

return statearr_58868;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto____1 = (function (state_58856){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58856);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58869){var ex__48143__auto__ = e58869;
var statearr_58870_60448 = state_58856;
(statearr_58870_60448[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58856[(4)]))){
var statearr_58871_60449 = state_58856;
(statearr_58871_60449[(1)] = cljs.core.first((state_58856[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60450 = state_58856;
state_58856 = G__60450;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto__ = function(state_58856){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto____1.call(this,state_58856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__48841__auto__ = (function (){var statearr_58872 = f__48840__auto__();
(statearr_58872[(6)] = c__48839__auto__);

return statearr_58872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
);

return c__48839__auto__;
} else {
var hit = res__54030__auto__;
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

var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___60455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___60455,ch__53995__auto__,cache,temp__5718__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___60455,ch__53995__auto__,cache,temp__5718__auto__){
return (function (state_58898){
var state_val_58899 = (state_58898[(1)]);
if((state_val_58899 === (7))){
var inst_58879 = (state_58898[(7)]);
var state_58898__$1 = state_58898;
var statearr_58900_60457 = state_58898__$1;
(statearr_58900_60457[(2)] = inst_58879);

(statearr_58900_60457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (1))){
var state_58898__$1 = state_58898;
var statearr_58901_60459 = state_58898__$1;
(statearr_58901_60459[(2)] = null);

(statearr_58901_60459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (4))){
var inst_58873 = (state_58898[(2)]);
var state_58898__$1 = state_58898;
var statearr_58902_60461 = state_58898__$1;
(statearr_58902_60461[(2)] = inst_58873);

(statearr_58902_60461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (6))){
var inst_58879 = (state_58898[(7)]);
var state_58898__$1 = state_58898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58898__$1,(9),inst_58879);
} else {
if((state_val_58899 === (3))){
var inst_58889 = (state_58898[(8)]);
var inst_58889__$1 = (state_58898[(2)]);
var inst_58890 = (inst_58889__$1 == null);
var state_58898__$1 = (function (){var statearr_58903 = state_58898;
(statearr_58903[(8)] = inst_58889__$1);

return statearr_58903;
})();
if(cljs.core.truth_(inst_58890)){
var statearr_58904_60463 = state_58898__$1;
(statearr_58904_60463[(1)] = (10));

} else {
var statearr_58905_60464 = state_58898__$1;
(statearr_58905_60464[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (12))){
var inst_58896 = (state_58898[(2)]);
var state_58898__$1 = state_58898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58898__$1,inst_58896);
} else {
if((state_val_58899 === (2))){
var inst_58879 = (state_58898[(7)]);
var _ = (function (){var statearr_58906 = state_58898;
(statearr_58906[(4)] = cljs.core.cons((5),(state_58898[(4)])));

return statearr_58906;
})();
var inst_58879__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_58880 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58879__$1);
var state_58898__$1 = (function (){var statearr_58907 = state_58898;
(statearr_58907[(7)] = inst_58879__$1);

return statearr_58907;
})();
if(inst_58880){
var statearr_58908_60472 = state_58898__$1;
(statearr_58908_60472[(1)] = (6));

} else {
var statearr_58909_60473 = state_58898__$1;
(statearr_58909_60473[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (11))){
var inst_58889 = (state_58898[(8)]);
var inst_58894 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_58889);
var state_58898__$1 = state_58898;
var statearr_58911_60474 = state_58898__$1;
(statearr_58911_60474[(2)] = inst_58894);

(statearr_58911_60474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (9))){
var inst_58883 = (state_58898[(2)]);
var state_58898__$1 = state_58898;
var statearr_58912_60475 = state_58898__$1;
(statearr_58912_60475[(2)] = inst_58883);

(statearr_58912_60475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (5))){
var _ = (function (){var statearr_58913 = state_58898;
(statearr_58913[(4)] = cljs.core.rest((state_58898[(4)])));

return statearr_58913;
})();
var state_58898__$1 = state_58898;
var ex58910 = (state_58898__$1[(2)]);
var statearr_58914_60482 = state_58898__$1;
(statearr_58914_60482[(5)] = ex58910);


var statearr_58915_60483 = state_58898__$1;
(statearr_58915_60483[(1)] = (4));

(statearr_58915_60483[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (10))){
var inst_58892 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_58898__$1 = state_58898;
var statearr_58916_60491 = state_58898__$1;
(statearr_58916_60491[(2)] = inst_58892);

(statearr_58916_60491[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58899 === (8))){
var inst_58886 = (state_58898[(2)]);
var _ = (function (){var statearr_58917 = state_58898;
(statearr_58917[(4)] = cljs.core.rest((state_58898[(4)])));

return statearr_58917;
})();
var state_58898__$1 = state_58898;
var statearr_58918_60492 = state_58898__$1;
(statearr_58918_60492[(2)] = inst_58886);

(statearr_58918_60492[(1)] = (3));


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
});})(c__48839__auto___60455,ch__53995__auto__,cache,temp__5718__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto___60455,ch__53995__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____0 = (function (){
var statearr_58919 = [null,null,null,null,null,null,null,null,null];
(statearr_58919[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__);

(statearr_58919[(1)] = (1));

return statearr_58919;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____1 = (function (state_58898){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58898);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58920){var ex__48143__auto__ = e58920;
var statearr_58921_60493 = state_58898;
(statearr_58921_60493[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58898[(4)]))){
var statearr_58922_60494 = state_58898;
(statearr_58922_60494[(1)] = cljs.core.first((state_58898[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60498 = state_58898;
state_58898 = G__60498;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__ = function(state_58898){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____1.call(this,state_58898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___60455,ch__53995__auto__,cache,temp__5718__auto__))
})();
var state__48841__auto__ = (function (){var statearr_58923 = f__48840__auto__();
(statearr_58923[(6)] = c__48839__auto___60455);

return statearr_58923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___60455,ch__53995__auto__,cache,temp__5718__auto__))
);


return ch__53995__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___60503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___60503,ch__53995__auto__,temp__5718__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___60503,ch__53995__auto__,temp__5718__auto__){
return (function (state_58949){
var state_val_58950 = (state_58949[(1)]);
if((state_val_58950 === (7))){
var inst_58930 = (state_58949[(7)]);
var state_58949__$1 = state_58949;
var statearr_58951_60505 = state_58949__$1;
(statearr_58951_60505[(2)] = inst_58930);

(statearr_58951_60505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (1))){
var state_58949__$1 = state_58949;
var statearr_58952_60506 = state_58949__$1;
(statearr_58952_60506[(2)] = null);

(statearr_58952_60506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (4))){
var inst_58924 = (state_58949[(2)]);
var state_58949__$1 = state_58949;
var statearr_58953_60507 = state_58949__$1;
(statearr_58953_60507[(2)] = inst_58924);

(statearr_58953_60507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (6))){
var inst_58930 = (state_58949[(7)]);
var state_58949__$1 = state_58949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58949__$1,(9),inst_58930);
} else {
if((state_val_58950 === (3))){
var inst_58940 = (state_58949[(8)]);
var inst_58940__$1 = (state_58949[(2)]);
var inst_58941 = (inst_58940__$1 == null);
var state_58949__$1 = (function (){var statearr_58954 = state_58949;
(statearr_58954[(8)] = inst_58940__$1);

return statearr_58954;
})();
if(cljs.core.truth_(inst_58941)){
var statearr_58955_60508 = state_58949__$1;
(statearr_58955_60508[(1)] = (10));

} else {
var statearr_58956_60509 = state_58949__$1;
(statearr_58956_60509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (12))){
var inst_58947 = (state_58949[(2)]);
var state_58949__$1 = state_58949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58949__$1,inst_58947);
} else {
if((state_val_58950 === (2))){
var inst_58930 = (state_58949[(7)]);
var _ = (function (){var statearr_58957 = state_58949;
(statearr_58957[(4)] = cljs.core.cons((5),(state_58949[(4)])));

return statearr_58957;
})();
var inst_58930__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_58931 = com.wsscode.async.async_cljs.chan_QMARK_(inst_58930__$1);
var state_58949__$1 = (function (){var statearr_58958 = state_58949;
(statearr_58958[(7)] = inst_58930__$1);

return statearr_58958;
})();
if(inst_58931){
var statearr_58959_60513 = state_58949__$1;
(statearr_58959_60513[(1)] = (6));

} else {
var statearr_58960_60515 = state_58949__$1;
(statearr_58960_60515[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (11))){
var inst_58940 = (state_58949[(8)]);
var inst_58945 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_58940);
var state_58949__$1 = state_58949;
var statearr_58962_60516 = state_58949__$1;
(statearr_58962_60516[(2)] = inst_58945);

(statearr_58962_60516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (9))){
var inst_58934 = (state_58949[(2)]);
var state_58949__$1 = state_58949;
var statearr_58963_60517 = state_58949__$1;
(statearr_58963_60517[(2)] = inst_58934);

(statearr_58963_60517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (5))){
var _ = (function (){var statearr_58964 = state_58949;
(statearr_58964[(4)] = cljs.core.rest((state_58949[(4)])));

return statearr_58964;
})();
var state_58949__$1 = state_58949;
var ex58961 = (state_58949__$1[(2)]);
var statearr_58965_60523 = state_58949__$1;
(statearr_58965_60523[(5)] = ex58961);


var statearr_58966_60524 = state_58949__$1;
(statearr_58966_60524[(1)] = (4));

(statearr_58966_60524[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (10))){
var inst_58943 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_58949__$1 = state_58949;
var statearr_58967_60526 = state_58949__$1;
(statearr_58967_60526[(2)] = inst_58943);

(statearr_58967_60526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58950 === (8))){
var inst_58937 = (state_58949[(2)]);
var _ = (function (){var statearr_58968 = state_58949;
(statearr_58968[(4)] = cljs.core.rest((state_58949[(4)])));

return statearr_58968;
})();
var state_58949__$1 = state_58949;
var statearr_58969_60527 = state_58949__$1;
(statearr_58969_60527[(2)] = inst_58937);

(statearr_58969_60527[(1)] = (3));


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
});})(c__48839__auto___60503,ch__53995__auto__,temp__5718__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto___60503,ch__53995__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____0 = (function (){
var statearr_58970 = [null,null,null,null,null,null,null,null,null];
(statearr_58970[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__);

(statearr_58970[(1)] = (1));

return statearr_58970;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____1 = (function (state_58949){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58949);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e58971){var ex__48143__auto__ = e58971;
var statearr_58972_60529 = state_58949;
(statearr_58972_60529[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58949[(4)]))){
var statearr_58973_60530 = state_58949;
(statearr_58973_60530[(1)] = cljs.core.first((state_58949[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60535 = state_58949;
state_58949 = G__60535;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__ = function(state_58949){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____1.call(this,state_58949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___60503,ch__53995__auto__,temp__5718__auto__))
})();
var state__48841__auto__ = (function (){var statearr_58974 = f__48840__auto__();
(statearr_58974[(6)] = c__48839__auto___60503);

return statearr_58974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___60503,ch__53995__auto__,temp__5718__auto__))
);


return ch__53995__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__58975,key,f){
var map__58976 = p__58975;
var map__58976__$1 = (((((!((map__58976 == null))))?(((((map__58976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58976):map__58976);
var env = map__58976__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58976__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48839__auto___60536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___60536,ch__53995__auto__,out,map__58976,map__58976__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___60536,ch__53995__auto__,out,map__58976,map__58976__$1,env,async_request_cache_ch,request_cache){
return (function (state_58999){
var state_val_59000 = (state_58999[(1)]);
if((state_val_59000 === (7))){
var inst_58985 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58999__$1,(6),inst_58985);
} else {
if((state_val_59000 === (1))){
var state_58999__$1 = state_58999;
var statearr_59001_60537 = state_58999__$1;
(statearr_59001_60537[(2)] = null);

(statearr_59001_60537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (4))){
var inst_58978 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
var statearr_59002_60538 = state_58999__$1;
(statearr_59002_60538[(2)] = inst_58978);

(statearr_59002_60538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (6))){
var inst_58987 = (state_58999[(2)]);
var _ = (function (){var statearr_59003 = state_58999;
(statearr_59003[(4)] = cljs.core.rest((state_58999[(4)])));

return statearr_59003;
})();
var state_58999__$1 = state_58999;
var statearr_59004_60544 = state_58999__$1;
(statearr_59004_60544[(2)] = inst_58987);

(statearr_59004_60544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (3))){
var inst_58990 = (state_58999[(7)]);
var inst_58990__$1 = (state_58999[(2)]);
var inst_58991 = (inst_58990__$1 == null);
var state_58999__$1 = (function (){var statearr_59005 = state_58999;
(statearr_59005[(7)] = inst_58990__$1);

return statearr_59005;
})();
if(cljs.core.truth_(inst_58991)){
var statearr_59006_60549 = state_58999__$1;
(statearr_59006_60549[(1)] = (8));

} else {
var statearr_59007_60550 = state_58999__$1;
(statearr_59007_60550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (2))){
var _ = (function (){var statearr_59009 = state_58999;
(statearr_59009[(4)] = cljs.core.cons((5),(state_58999[(4)])));

return statearr_59009;
})();
var state_58999__$1 = state_58999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58999__$1,(7),out);
} else {
if((state_val_59000 === (9))){
var inst_58990 = (state_58999[(7)]);
var inst_58995 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_58990);
var state_58999__$1 = state_58999;
var statearr_59010_60552 = state_58999__$1;
(statearr_59010_60552[(2)] = inst_58995);

(statearr_59010_60552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (5))){
var _ = (function (){var statearr_59011 = state_58999;
(statearr_59011[(4)] = cljs.core.rest((state_58999[(4)])));

return statearr_59011;
})();
var state_58999__$1 = state_58999;
var ex59008 = (state_58999__$1[(2)]);
var statearr_59012_60553 = state_58999__$1;
(statearr_59012_60553[(5)] = ex59008);


var statearr_59013_60554 = state_58999__$1;
(statearr_59013_60554[(1)] = (4));

(statearr_59013_60554[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59000 === (10))){
var inst_58997 = (state_58999[(2)]);
var state_58999__$1 = state_58999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58999__$1,inst_58997);
} else {
if((state_val_59000 === (8))){
var inst_58993 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_58999__$1 = state_58999;
var statearr_59014_60557 = state_58999__$1;
(statearr_59014_60557[(2)] = inst_58993);

(statearr_59014_60557[(1)] = (10));


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
});})(c__48839__auto___60536,ch__53995__auto__,out,map__58976,map__58976__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__48139__auto__,c__48839__auto___60536,ch__53995__auto__,out,map__58976,map__58976__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto____0 = (function (){
var statearr_59015 = [null,null,null,null,null,null,null,null];
(statearr_59015[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto__);

(statearr_59015[(1)] = (1));

return statearr_59015;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto____1 = (function (state_58999){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_58999);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59016){var ex__48143__auto__ = e59016;
var statearr_59017_60562 = state_58999;
(statearr_59017_60562[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_58999[(4)]))){
var statearr_59018_60563 = state_58999;
(statearr_59018_60563[(1)] = cljs.core.first((state_58999[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60564 = state_58999;
state_58999 = G__60564;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto__ = function(state_58999){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto____1.call(this,state_58999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___60536,ch__53995__auto__,out,map__58976,map__58976__$1,env,async_request_cache_ch,request_cache))
})();
var state__48841__auto__ = (function (){var statearr_59019 = f__48840__auto__();
(statearr_59019[(6)] = c__48839__auto___60536);

return statearr_59019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___60536,ch__53995__auto__,out,map__58976,map__58976__$1,env,async_request_cache_ch,request_cache))
);


return ch__53995__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_59041){
var state_val_59042 = (state_59041[(1)]);
if((state_val_59042 === (1))){
var state_59041__$1 = state_59041;
var statearr_59043_60565 = state_59041__$1;
(statearr_59043_60565[(2)] = null);

(statearr_59043_60565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59042 === (2))){
var state_59041__$1 = state_59041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59041__$1,(4),ch);
} else {
if((state_val_59042 === (3))){
var inst_59039 = (state_59041[(2)]);
var state_59041__$1 = state_59041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59041__$1,inst_59039);
} else {
if((state_val_59042 === (4))){
var inst_59022 = (state_59041[(7)]);
var inst_59022__$1 = (state_59041[(2)]);
var state_59041__$1 = (function (){var statearr_59044 = state_59041;
(statearr_59044[(7)] = inst_59022__$1);

return statearr_59044;
})();
if(cljs.core.truth_(inst_59022__$1)){
var statearr_59045_60566 = state_59041__$1;
(statearr_59045_60566[(1)] = (5));

} else {
var statearr_59046_60568 = state_59041__$1;
(statearr_59046_60568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59042 === (5))){
var inst_59022 = (state_59041[(7)]);
var inst_59027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59022,(0),null);
var inst_59028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59022,(1),null);
var inst_59029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59022,(2),null);
var inst_59030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59022,(3),null);
var inst_59031 = com.wsscode.pathom.core.cached_async_STAR_(inst_59027,inst_59028,inst_59029);
var state_59041__$1 = state_59041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59041__$1,(8),inst_59030,inst_59031);
} else {
if((state_val_59042 === (6))){
var state_59041__$1 = state_59041;
var statearr_59047_60574 = state_59041__$1;
(statearr_59047_60574[(2)] = null);

(statearr_59047_60574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59042 === (7))){
var inst_59037 = (state_59041[(2)]);
var state_59041__$1 = state_59041;
var statearr_59048_60576 = state_59041__$1;
(statearr_59048_60576[(2)] = inst_59037);

(statearr_59048_60576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59042 === (8))){
var inst_59033 = (state_59041[(2)]);
var state_59041__$1 = (function (){var statearr_59049 = state_59041;
(statearr_59049[(8)] = inst_59033);

return statearr_59049;
})();
var statearr_59050_60578 = state_59041__$1;
(statearr_59050_60578[(2)] = null);

(statearr_59050_60578[(1)] = (2));


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
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto____0 = (function (){
var statearr_59051 = [null,null,null,null,null,null,null,null,null];
(statearr_59051[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto__);

(statearr_59051[(1)] = (1));

return statearr_59051;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto____1 = (function (state_59041){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_59041);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59052){var ex__48143__auto__ = e59052;
var statearr_59053_60582 = state_59041;
(statearr_59053_60582[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_59041[(4)]))){
var statearr_59054_60585 = state_59041;
(statearr_59054_60585[(1)] = cljs.core.first((state_59041[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60590 = state_59041;
state_59041 = G__60590;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto__ = function(state_59041){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto____1.call(this,state_59041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_59055 = f__48840__auto__();
(statearr_59055[(6)] = c__48839__auto__);

return statearr_59055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__59056,key,value){
var map__59057 = p__59056;
var map__59057__$1 = (((((!((map__59057 == null))))?(((((map__59057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59057):map__59057);
var env = map__59057__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59057__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__59059,key){
var map__59060 = p__59059;
var map__59060__$1 = (((((!((map__59060 == null))))?(((((map__59060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59060):map__59060);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59060__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__59062,key){
var map__59063 = p__59062;
var map__59063__$1 = (((((!((map__59063 == null))))?(((((map__59063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59063):map__59063);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59063__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__59065){
var map__59066 = p__59065;
var map__59066__$1 = (((((!((map__59066 == null))))?(((((map__59066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59066):map__59066);
var env = map__59066__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59066__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__59068 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__59068) : reader.call(null,G__59068));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__59069){
var vec__59070 = p__59069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59070,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__59074 = arguments.length;
switch (G__59074) {
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
var G__59075 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx,new cljs.core.Keyword("com.wsscode.pathom.core","root-query","com.wsscode.pathom.core/root-query",-100266682),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__59076 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__59075,G__59076) : parser.call(null,G__59075,G__59076));
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
var res__54030__auto__ = (function (){var G__59077 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__59078 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__59077,G__59078) : parser.call(null,G__59077,G__59078));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,signal){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,signal){
return (function (state_59093){
var state_val_59094 = (state_59093[(1)]);
if((state_val_59094 === (1))){
var state_59093__$1 = state_59093;
var statearr_59095_60609 = state_59093__$1;
(statearr_59095_60609[(2)] = null);

(statearr_59095_60609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (2))){
var _ = (function (){var statearr_59096 = state_59093;
(statearr_59096[(4)] = cljs.core.cons((5),(state_59093[(4)])));

return statearr_59096;
})();
var state_59093__$1 = state_59093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59093__$1,(6),res__54030__auto__);
} else {
if((state_val_59094 === (3))){
var inst_59091 = (state_59093[(2)]);
var state_59093__$1 = state_59093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59093__$1,inst_59091);
} else {
if((state_val_59094 === (4))){
var inst_59079 = (state_59093[(2)]);
var state_59093__$1 = state_59093;
var statearr_59098_60612 = state_59093__$1;
(statearr_59098_60612[(2)] = inst_59079);

(statearr_59098_60612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (5))){
var _ = (function (){var statearr_59099 = state_59093;
(statearr_59099[(4)] = cljs.core.rest((state_59093[(4)])));

return statearr_59099;
})();
var state_59093__$1 = state_59093;
var ex59097 = (state_59093__$1[(2)]);
var statearr_59100_60615 = state_59093__$1;
(statearr_59100_60615[(5)] = ex59097);


var statearr_59101_60617 = state_59093__$1;
(statearr_59101_60617[(1)] = (4));

(statearr_59101_60617[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59094 === (6))){
var inst_59086 = (state_59093[(2)]);
var inst_59087 = com.wsscode.async.async_cljs.throw_err(inst_59086);
var inst_59088 = cljs.core.reset_BANG_(signal,true);
var _ = (function (){var statearr_59102 = state_59093;
(statearr_59102[(4)] = cljs.core.rest((state_59093[(4)])));

return statearr_59102;
})();
var state_59093__$1 = (function (){var statearr_59103 = state_59093;
(statearr_59103[(7)] = inst_59088);

return statearr_59103;
})();
var statearr_59104_60618 = state_59093__$1;
(statearr_59104_60618[(2)] = inst_59087);

(statearr_59104_60618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__,signal))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,signal){
return (function() {
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_59105 = [null,null,null,null,null,null,null,null];
(statearr_59105[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto__);

(statearr_59105[(1)] = (1));

return statearr_59105;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto____1 = (function (state_59093){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_59093);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59106){var ex__48143__auto__ = e59106;
var statearr_59107_60619 = state_59093;
(statearr_59107_60619[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_59093[(4)]))){
var statearr_59108_60620 = state_59093;
(statearr_59108_60620[(1)] = cljs.core.first((state_59093[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60622 = state_59093;
state_59093 = G__60622;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto__ = function(state_59093){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto____1.call(this,state_59093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,signal))
})();
var state__48841__auto__ = (function (){var statearr_59109 = f__48840__auto__();
(statearr_59109[(6)] = c__48839__auto__);

return statearr_59109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,signal))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
cljs.core.reset_BANG_(signal,true);

return res;
}
});
});
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__54030__auto__ = (function (){var G__59110 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__59111 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__59110,G__59111) : parser.call(null,G__59110,G__59111));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,async_cache_ch){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,async_cache_ch){
return (function (state_59126){
var state_val_59127 = (state_59126[(1)]);
if((state_val_59127 === (1))){
var state_59126__$1 = state_59126;
var statearr_59128_60628 = state_59126__$1;
(statearr_59128_60628[(2)] = null);

(statearr_59128_60628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59127 === (2))){
var _ = (function (){var statearr_59129 = state_59126;
(statearr_59129[(4)] = cljs.core.cons((5),(state_59126[(4)])));

return statearr_59129;
})();
var state_59126__$1 = state_59126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59126__$1,(6),res__54030__auto__);
} else {
if((state_val_59127 === (3))){
var inst_59124 = (state_59126[(2)]);
var state_59126__$1 = state_59126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59126__$1,inst_59124);
} else {
if((state_val_59127 === (4))){
var inst_59112 = (state_59126[(2)]);
var state_59126__$1 = state_59126;
var statearr_59131_60633 = state_59126__$1;
(statearr_59131_60633[(2)] = inst_59112);

(statearr_59131_60633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59127 === (5))){
var _ = (function (){var statearr_59132 = state_59126;
(statearr_59132[(4)] = cljs.core.rest((state_59126[(4)])));

return statearr_59132;
})();
var state_59126__$1 = state_59126;
var ex59130 = (state_59126__$1[(2)]);
var statearr_59133_60634 = state_59126__$1;
(statearr_59133_60634[(5)] = ex59130);


var statearr_59134_60636 = state_59126__$1;
(statearr_59134_60636[(1)] = (4));

(statearr_59134_60636[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59127 === (6))){
var inst_59119 = (state_59126[(2)]);
var inst_59120 = com.wsscode.async.async_cljs.throw_err(inst_59119);
var inst_59121 = cljs.core.async.close_BANG_(async_cache_ch);
var _ = (function (){var statearr_59135 = state_59126;
(statearr_59135[(4)] = cljs.core.rest((state_59126[(4)])));

return statearr_59135;
})();
var state_59126__$1 = (function (){var statearr_59136 = state_59126;
(statearr_59136[(7)] = inst_59121);

return statearr_59136;
})();
var statearr_59137_60641 = state_59126__$1;
(statearr_59137_60641[(2)] = inst_59120);

(statearr_59137_60641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,res__54030__auto__,async_cache_ch))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_59138 = [null,null,null,null,null,null,null,null];
(statearr_59138[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto__);

(statearr_59138[(1)] = (1));

return statearr_59138;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto____1 = (function (state_59126){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_59126);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59139){var ex__48143__auto__ = e59139;
var statearr_59140_60644 = state_59126;
(statearr_59140_60644[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_59126[(4)]))){
var statearr_59141_60645 = state_59126;
(statearr_59141_60645[(1)] = cljs.core.first((state_59126[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60647 = state_59126;
state_59126 = G__60647;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto__ = function(state_59126){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto____1.call(this,state_59126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,async_cache_ch))
})();
var state__48841__auto__ = (function (){var statearr_59142 = f__48840__auto__();
(statearr_59142[(6)] = c__48839__auto__);

return statearr_59142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,async_cache_ch))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__60651 = null;
var G__60651__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__60651__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__60651 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__60651__1.call(this,env);
case 3:
return G__60651__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60651.cljs$core$IFn$_invoke$arity$1 = G__60651__1;
G__60651.cljs$core$IFn$_invoke$arity$3 = G__60651__3;
return G__60651;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__59143){
var map__59144 = p__59143;
var map__59144__$1 = (((((!((map__59144 == null))))?(((((map__59144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59144):map__59144);
var env = map__59144__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60658 = arguments.length;
var i__4731__auto___60659 = (0);
while(true){
if((i__4731__auto___60659 < len__4730__auto___60658)){
args__4736__auto__.push((arguments[i__4731__auto___60659]));

var G__60660 = (i__4731__auto___60659 + (1));
i__4731__auto___60659 = G__60660;
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
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq59146){
var G__59147 = cljs.core.first(seq59146);
var seq59146__$1 = cljs.core.next(seq59146);
var G__59148 = cljs.core.first(seq59146__$1);
var seq59146__$2 = cljs.core.next(seq59146__$1);
var G__59149 = cljs.core.first(seq59146__$2);
var seq59146__$3 = cljs.core.next(seq59146__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59147,G__59148,G__59149,seq59146__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60669 = arguments.length;
var i__4731__auto___60670 = (0);
while(true){
if((i__4731__auto___60670 < len__4730__auto___60669)){
args__4736__auto__.push((arguments[i__4731__auto___60670]));

var G__60671 = (i__4731__auto___60670 + (1));
i__4731__auto___60670 = G__60671;
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
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq59150){
var G__59151 = cljs.core.first(seq59150);
var seq59150__$1 = cljs.core.next(seq59150);
var G__59152 = cljs.core.first(seq59150__$1);
var seq59150__$2 = cljs.core.next(seq59150__$1);
var G__59153 = cljs.core.first(seq59150__$2);
var seq59150__$3 = cljs.core.next(seq59150__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59151,G__59152,G__59153,seq59150__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__59154){
var map__59155 = p__59154;
var map__59155__$1 = (((((!((map__59155 == null))))?(((((map__59155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59155):map__59155);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59155__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59155__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__59157 = plugins;
var G__59157__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__59157):G__59157);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__59157__$1);
} else {
return G__59157__$1;
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
com.wsscode.pathom.core.wrap_setup_env = (function com$wsscode$pathom$core$wrap_setup_env(parser,env_SINGLEQUOTE_){
return (function com$wsscode$pathom$core$wrap_setup_env_$_wrap_setup_env_internal(env,tx){
var G__59158 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,env_SINGLEQUOTE_], 0));
var G__59159 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__59158,G__59159) : parser.call(null,G__59158,G__59159));
});
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
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_env(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905),false], null)),plugins);
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
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.wrap_setup_env(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null)], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905),true], null))),plugins);
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
return com.wsscode.pathom.core.wrap_normalize_env.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.wrap_setup_async_cache(com.wsscode.pathom.core.wrap_parallel_setup(com.wsscode.pathom.core.wrap_setup_env(com.wsscode.pathom.core.apply_plugins.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.parser.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),com.wsscode.pathom.core.wrap_add_path(com.wsscode.pathom.core.apply_plugins(com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261))),new cljs.core.Keyword(null,"mutate","mutate",1422419038),(cljs.core.truth_(mutate)?com.wsscode.pathom.core.apply_plugins(mutate,plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202)):null),new cljs.core.Keyword(null,"add-error","add-error",-1195330235),com.wsscode.pathom.core.add_error], null)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)),plugins,new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser2","com.wsscode.pathom.core/wrap-parser2",776559497),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([settings], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905),true], null)))),plugins);
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
var G__59161 = arguments.length;
switch (G__59161) {
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
return (function (p__59162){
var map__59163 = p__59162;
var map__59163__$1 = (((((!((map__59163 == null))))?(((((map__59163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59163):map__59163);
var env = map__59163__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59163__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__59165,_,___$1){
var map__59166 = p__59165;
var map__59166__$1 = (((((!((map__59166 == null))))?(((((map__59166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59166):map__59166);
var env = map__59166__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59166__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59166__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__59168 = ast;
if((G__59168 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__59168);
}
})();
if(cljs.core.sequential_QMARK_(key)){
return cljs.core.second(key);
} else {
return null;
}
});
/**
 * DEPRECATED: use p/entity
 *   Runs the parser against current element to garantee that some fields are loaded.
 *   This is useful when you need to ensure some values are loaded in order to fetch some
 *   more complex data.
 */
com.wsscode.pathom.core.ensure_attrs = (function com$wsscode$pathom$core$ensure_attrs(env,attributes){
return com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
});

//# sourceMappingURL=com.wsscode.pathom.core.js.map
