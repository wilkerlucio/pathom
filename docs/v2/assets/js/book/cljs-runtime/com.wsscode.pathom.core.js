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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53859){
return cljs.core.map_QMARK_(G__53859);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53860){
return cljs.core.vector_QMARK_(G__53860);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53861){
return cljs.core.map_QMARK_(G__53861);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.core","atom?","com.wsscode.pathom.core/atom?",332525267,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__53862_SHARP_){
return (com.wsscode.pathom.core.atom_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.atom_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__53862_SHARP_) : com.wsscode.pathom.core.atom_QMARK_.call(null,p1__53862_SHARP_));
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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__53863){
return cljs.core.map_QMARK_(G__53863);
})], null),(function (G__53863){
return cljs.core.map_QMARK_(G__53863);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.fn_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53864){
return cljs.core.coll_QMARK_(G__53864);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.map_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53865){
return cljs.core.map_QMARK_(G__53865);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.nat_int_QMARK_], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53866){
return cljs.core.vector_QMARK_(G__53866);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__53867){
return cljs.core.map_QMARK_(G__53867);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
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
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__53868){
var map__53869 = p__53868;
var map__53869__$1 = (((((!((map__53869 == null))))?(((((map__53869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53869):map__53869);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__53869,map__53869__$1,children){
return (function (attrs,p__53871){
var map__53872 = p__53871;
var map__53872__$1 = (((((!((map__53872 == null))))?(((((map__53872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53872):map__53872);
var node = map__53872__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__53874 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__53874,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__53874;
}
});})(map__53869,map__53869__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
/**
 * Merges nested maps without overwriting existing keys.
 */
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55691 = arguments.length;
var i__4731__auto___55692 = (0);
while(true){
if((i__4731__auto___55692 < len__4730__auto___55691)){
args__4736__auto__.push((arguments[i__4731__auto___55692]));

var G__55693 = (i__4731__auto___55692 + (1));
i__4731__auto___55692 = G__55693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.every_QMARK_((function (p1__53875_SHARP_){
return ((cljs.core.map_QMARK_(p1__53875_SHARP_)) || ((p1__53875_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq53876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53876));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__53877_SHARP_){
return cljs.core.filterv(f,p1__53877_SHARP_);
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
var len__4730__auto___55695 = arguments.length;
var i__4731__auto___55696 = (0);
while(true){
if((i__4731__auto___55696 < len__4730__auto___55695)){
args__4736__auto__.push((arguments[i__4731__auto___55696]));

var G__55698 = (i__4731__auto___55696 + (1));
i__4731__auto___55696 = G__55698;
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
var vec__53881 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53881,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53881,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq53878){
var G__53879 = cljs.core.first(seq53878);
var seq53878__$1 = cljs.core.next(seq53878);
var G__53880 = cljs.core.first(seq53878__$1);
var seq53878__$2 = cljs.core.next(seq53878__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53879,G__53880,seq53878__$2);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__53884 = ast;
var G__53884__$1 = (((G__53884 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__53884));
var G__53884__$2 = (((G__53884__$1 == null))?null:cljs.core.first(G__53884__$1));
if((G__53884__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__53884__$2);
}
})());
});
com.wsscode.pathom.core.maybe_merge_union_ast = (function com$wsscode$pathom$core$maybe_merge_union_ast(ast){
if(com.wsscode.pathom.core.union_children_QMARK_(ast)){
var merged_children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"children","children",-940561982)),(function (){var G__53885 = ast;
var G__53885__$1 = (((G__53885 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__53885));
var G__53885__$2 = (((G__53885__$1 == null))?null:cljs.core.first(G__53885__$1));
if((G__53885__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__53885__$2);
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,new cljs.core.Keyword(null,"children","children",-940561982),merged_children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),merged_children], null))], 0));
} else {
return ast;
}
});
com.wsscode.pathom.core.merge_shapes = (function com$wsscode$pathom$core$merge_shapes(var_args){
var G__53887 = arguments.length;
switch (G__53887) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__53888){
var map__53889 = p__53888;
var map__53889__$1 = (((((!((map__53889 == null))))?(((((map__53889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53889):map__53889);
var node = map__53889__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53889__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__53893,reader){
var map__53894 = p__53893;
var map__53894__$1 = (((((!((map__53894 == null))))?(((((map__53894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53894):map__53894);
var env = map__53894__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__53896 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53896,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__53894,map__53894__$1,env,ast){
return (function (p1__53891_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__53891_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__53891_SHARP_));
});})(map__53894,map__53894__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__53894,map__53894__$1,env,ast){
return (function (p1__53892_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__53892_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__53894,map__53894__$1,env,ast))
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
var res__53554__auto__ = com.wsscode.pathom.core.read_from_STAR_(env,reader);
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_53914){
var state_val_53915 = (state_53914[(1)]);
if((state_val_53915 === (1))){
var state_53914__$1 = state_53914;
var statearr_53916_55756 = state_53914__$1;
(statearr_53916_55756[(2)] = null);

(statearr_53916_55756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53915 === (2))){
var inst_53912 = (state_53914[(2)]);
var state_53914__$1 = state_53914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53914__$1,inst_53912);
} else {
if((state_val_53915 === (3))){
var inst_53899 = (state_53914[(2)]);
var state_53914__$1 = state_53914;
var statearr_53917_55758 = state_53914__$1;
(statearr_53917_55758[(2)] = inst_53899);


cljs.core.async.impl.ioc_helpers.process_exception(state_53914__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53915 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53914,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_53914__$1 = state_53914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53914__$1,(5),res__53554__auto__);
} else {
if((state_val_53915 === (5))){
var inst_53905 = (state_53914[(7)]);
var inst_53904 = (state_53914[(2)]);
var inst_53905__$1 = com.wsscode.async.async_cljs.throw_err(inst_53904);
var inst_53906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53905__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_53914__$1 = (function (){var statearr_53918 = state_53914;
(statearr_53918[(7)] = inst_53905__$1);

return statearr_53918;
})();
if(inst_53906){
var statearr_53919_55761 = state_53914__$1;
(statearr_53919_55761[(1)] = (6));

} else {
var statearr_53920_55762 = state_53914__$1;
(statearr_53920_55762[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53915 === (6))){
var state_53914__$1 = state_53914;
var statearr_53921_55763 = state_53914__$1;
(statearr_53921_55763[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_53921_55763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53915 === (7))){
var inst_53905 = (state_53914[(7)]);
var state_53914__$1 = state_53914;
var statearr_53922_55766 = state_53914__$1;
(statearr_53922_55766[(2)] = inst_53905);

(statearr_53922_55766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53915 === (8))){
var inst_53910 = (state_53914[(2)]);
var state_53914__$1 = state_53914;
var statearr_53923_55767 = state_53914__$1;
(statearr_53923_55767[(2)] = inst_53910);


cljs.core.async.impl.ioc_helpers.process_exception(state_53914__$1);

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
});})(c__47946__auto__,res__53554__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__){
return (function() {
var com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____0 = (function (){
var statearr_53924 = [null,null,null,null,null,null,null,null];
(statearr_53924[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__);

(statearr_53924[(1)] = (1));

return statearr_53924;
});
var com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____1 = (function (state_53914){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_53914);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e53925){if((e53925 instanceof Object)){
var ex__47667__auto__ = e53925;
var statearr_53926_55768 = state_53914;
(statearr_53926_55768[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55770 = state_53914;
state_53914 = G__55770;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__ = function(state_53914){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____1.call(this,state_53914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_53927 = f__47947__auto__();
(statearr_53927[(6)] = c__47946__auto__);

return statearr_53927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
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
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__53929){
var map__53930 = p__53929;
var map__53930__$1 = (((((!((map__53930 == null))))?(((((map__53930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53930):map__53930);
var node = map__53930__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53930__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__53932 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53932,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__53932,map__53930,map__53930__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__53932,map__53930,map__53930__$1,node,children){
return (function (p1__53928_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__53928_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__53928_SHARP_));
});})(G__53932,map__53930,map__53930__$1,node,children))
)),children__$1);
});})(G__53932,map__53930,map__53930__$1,node,children))
);
} else {
return G__53932;
}
});
com.wsscode.pathom.core.special_outputs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__53933){
var vec__53934 = p__53933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53934,(1),null);
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
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__53938){
var map__53939 = p__53938;
var map__53939__$1 = (((((!((map__53939 == null))))?(((((map__53939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53939):map__53939);
var env = map__53939__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53939__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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
var G__53942 = arguments.length;
switch (G__53942) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__53943,attributes){
var map__53944 = p__53943;
var map__53944__$1 = (((((!((map__53944 == null))))?(((((map__53944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53944):map__53944);
var env = map__53944__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__53554__auto__ = (function (){var G__53946 = env;
var G__53947 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__53946,G__53947) : parser.call(null,G__53946,G__53947));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,e,map__53944,map__53944__$1,env,parser){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,e,map__53944,map__53944__$1,env,parser){
return (function (state_53964){
var state_val_53965 = (state_53964[(1)]);
if((state_val_53965 === (1))){
var state_53964__$1 = state_53964;
var statearr_53966_55798 = state_53964__$1;
(statearr_53966_55798[(2)] = null);

(statearr_53966_55798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (2))){
var inst_53962 = (state_53964[(2)]);
var state_53964__$1 = state_53964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53964__$1,inst_53962);
} else {
if((state_val_53965 === (3))){
var inst_53948 = (state_53964[(2)]);
var state_53964__$1 = state_53964;
var statearr_53967_55799 = state_53964__$1;
(statearr_53967_55799[(2)] = inst_53948);


cljs.core.async.impl.ioc_helpers.process_exception(state_53964__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53964,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_53964__$1 = state_53964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53964__$1,(5),res__53554__auto__);
} else {
if((state_val_53965 === (5))){
var inst_53954 = (state_53964[(7)]);
var inst_53953 = (state_53964[(2)]);
var inst_53954__$1 = com.wsscode.async.async_cljs.throw_err(inst_53953);
var inst_53955 = cljs.core.map_QMARK_(inst_53954__$1);
var state_53964__$1 = (function (){var statearr_53968 = state_53964;
(statearr_53968[(7)] = inst_53954__$1);

return statearr_53968;
})();
if(inst_53955){
var statearr_53969_55805 = state_53964__$1;
(statearr_53969_55805[(1)] = (6));

} else {
var statearr_53970_55806 = state_53964__$1;
(statearr_53970_55806[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (6))){
var inst_53954 = (state_53964[(7)]);
var inst_53957 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_53954], 0));
var state_53964__$1 = state_53964;
var statearr_53971_55808 = state_53964__$1;
(statearr_53971_55808[(2)] = inst_53957);

(statearr_53971_55808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (7))){
var state_53964__$1 = state_53964;
var statearr_53972_55809 = state_53964__$1;
(statearr_53972_55809[(2)] = e);

(statearr_53972_55809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53965 === (8))){
var inst_53960 = (state_53964[(2)]);
var state_53964__$1 = state_53964;
var statearr_53973_55811 = state_53964__$1;
(statearr_53973_55811[(2)] = inst_53960);


cljs.core.async.impl.ioc_helpers.process_exception(state_53964__$1);

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
});})(c__47946__auto__,res__53554__auto__,e,map__53944,map__53944__$1,env,parser))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,map__53944,map__53944__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$state_machine__47664__auto____0 = (function (){
var statearr_53974 = [null,null,null,null,null,null,null,null];
(statearr_53974[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_53974[(1)] = (1));

return statearr_53974;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_53964){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_53964);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e53975){if((e53975 instanceof Object)){
var ex__47667__auto__ = e53975;
var statearr_53976_55841 = state_53964;
(statearr_53976_55841[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55858 = state_53964;
state_53964 = G__55858;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_53964){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_53964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,map__53944,map__53944__$1,env,parser))
})();
var state__47948__auto__ = (function (){var statearr_53977 = f__47947__auto__();
(statearr_53977[(6)] = c__47946__auto__);

return statearr_53977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,e,map__53944,map__53944__$1,env,parser))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
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
var G__53979 = arguments.length;
switch (G__53979) {
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
var res__53554__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_53991){
var state_val_53992 = (state_53991[(1)]);
if((state_val_53992 === (1))){
var state_53991__$1 = state_53991;
var statearr_53993_55880 = state_53991__$1;
(statearr_53993_55880[(2)] = null);

(statearr_53993_55880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53992 === (2))){
var inst_53989 = (state_53991[(2)]);
var state_53991__$1 = state_53991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53991__$1,inst_53989);
} else {
if((state_val_53992 === (3))){
var inst_53980 = (state_53991[(2)]);
var state_53991__$1 = state_53991;
var statearr_53994_55883 = state_53991__$1;
(statearr_53994_55883[(2)] = inst_53980);


cljs.core.async.impl.ioc_helpers.process_exception(state_53991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53992 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53991,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_53991__$1 = state_53991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53991__$1,(5),res__53554__auto__);
} else {
if((state_val_53992 === (5))){
var inst_53985 = (state_53991[(2)]);
var inst_53986 = com.wsscode.async.async_cljs.throw_err(inst_53985);
var inst_53987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53986,attr);
var state_53991__$1 = state_53991;
var statearr_53995_55888 = state_53991__$1;
(statearr_53995_55888[(2)] = inst_53987);


cljs.core.async.impl.ioc_helpers.process_exception(state_53991__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$state_machine__47664__auto____0 = (function (){
var statearr_53996 = [null,null,null,null,null,null,null];
(statearr_53996[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_53996[(1)] = (1));

return statearr_53996;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_53991){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_53991);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e53997){if((e53997 instanceof Object)){
var ex__47667__auto__ = e53997;
var statearr_53998_55894 = state_53991;
(statearr_53998_55894[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55900 = state_53991;
state_53991 = G__55900;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_53991){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_53991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_53999 = f__47947__auto__();
(statearr_53999[(6)] = c__47946__auto__);

return statearr_53999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var e = res__53554__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});

com.wsscode.pathom.core.entity_attr.cljs$core$IFn$_invoke$arity$3 = (function (env,attr,default$){
var res__53554__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_54019){
var state_val_54020 = (state_54019[(1)]);
if((state_val_54020 === (1))){
var state_54019__$1 = state_54019;
var statearr_54021_55905 = state_54019__$1;
(statearr_54021_55905[(2)] = null);

(statearr_54021_55905[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54020 === (2))){
var inst_54017 = (state_54019[(2)]);
var state_54019__$1 = state_54019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54019__$1,inst_54017);
} else {
if((state_val_54020 === (3))){
var inst_54000 = (state_54019[(2)]);
var state_54019__$1 = state_54019;
var statearr_54022_55910 = state_54019__$1;
(statearr_54022_55910[(2)] = inst_54000);


cljs.core.async.impl.ioc_helpers.process_exception(state_54019__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54020 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54019,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_54019__$1 = state_54019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54019__$1,(5),res__53554__auto__);
} else {
if((state_val_54020 === (5))){
var inst_54007 = (state_54019[(7)]);
var inst_54005 = (state_54019[(2)]);
var inst_54006 = com.wsscode.async.async_cljs.throw_err(inst_54005);
var inst_54007__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54006,attr);
var inst_54008 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_54009 = (new cljs.core.PersistentArrayMap(null,2,inst_54008,null));
var inst_54010 = (new cljs.core.PersistentHashSet(null,inst_54009,null));
var inst_54011 = (inst_54010.cljs$core$IFn$_invoke$arity$1 ? inst_54010.cljs$core$IFn$_invoke$arity$1(inst_54007__$1) : inst_54010.call(null,inst_54007__$1));
var state_54019__$1 = (function (){var statearr_54023 = state_54019;
(statearr_54023[(7)] = inst_54007__$1);

return statearr_54023;
})();
if(cljs.core.truth_(inst_54011)){
var statearr_54024_55917 = state_54019__$1;
(statearr_54024_55917[(1)] = (6));

} else {
var statearr_54025_55918 = state_54019__$1;
(statearr_54025_55918[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54020 === (6))){
var state_54019__$1 = state_54019;
var statearr_54026_55919 = state_54019__$1;
(statearr_54026_55919[(2)] = default$);

(statearr_54026_55919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54020 === (7))){
var inst_54007 = (state_54019[(7)]);
var state_54019__$1 = state_54019;
var statearr_54027_55920 = state_54019__$1;
(statearr_54027_55920[(2)] = inst_54007);

(statearr_54027_55920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54020 === (8))){
var inst_54015 = (state_54019[(2)]);
var state_54019__$1 = state_54019;
var statearr_54028_55921 = state_54019__$1;
(statearr_54028_55921[(2)] = inst_54015);


cljs.core.async.impl.ioc_helpers.process_exception(state_54019__$1);

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
});})(c__47946__auto__,res__53554__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__){
return (function() {
var com$wsscode$pathom$core$state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$state_machine__47664__auto____0 = (function (){
var statearr_54029 = [null,null,null,null,null,null,null,null];
(statearr_54029[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_54029[(1)] = (1));

return statearr_54029;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_54019){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54019);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54030){if((e54030 instanceof Object)){
var ex__47667__auto__ = e54030;
var statearr_54031_55923 = state_54019;
(statearr_54031_55923[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54030;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55924 = state_54019;
state_54019 = G__55924;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_54019){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_54019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_54032 = f__47947__auto__();
(statearr_54032[(6)] = c__47946__auto__);

return statearr_54032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var e = res__53554__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__54033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__54033.cljs$core$IFn$_invoke$arity$1 ? fexpr__54033.cljs$core$IFn$_invoke$arity$1(x) : fexpr__54033.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__54034,attributes){
var map__54035 = p__54034;
var map__54035__$1 = (((((!((map__54035 == null))))?(((((map__54035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54035):map__54035);
var env = map__54035__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54035__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__53554__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,map__54035,map__54035__$1,env,path){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,map__54035,map__54035__$1,env,path){
return (function (state_54064){
var state_val_54065 = (state_54064[(1)]);
if((state_val_54065 === (1))){
var state_54064__$1 = state_54064;
var statearr_54066_55931 = state_54064__$1;
(statearr_54066_55931[(2)] = null);

(statearr_54066_55931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54065 === (2))){
var inst_54062 = (state_54064[(2)]);
var state_54064__$1 = state_54064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54064__$1,inst_54062);
} else {
if((state_val_54065 === (3))){
var inst_54037 = (state_54064[(2)]);
var state_54064__$1 = state_54064;
var statearr_54067_55932 = state_54064__$1;
(statearr_54067_55932[(2)] = inst_54037);


cljs.core.async.impl.ioc_helpers.process_exception(state_54064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54065 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54064,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_54064__$1 = state_54064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54064__$1,(5),res__53554__auto__);
} else {
if((state_val_54065 === (5))){
var inst_54048 = (state_54064[(7)]);
var inst_54043 = (state_54064[(8)]);
var inst_54042 = (state_54064[(2)]);
var inst_54043__$1 = com.wsscode.async.async_cljs.throw_err(inst_54042);
var inst_54044 = cljs.core.set(attributes);
var inst_54045 = com.wsscode.pathom.core.elide_not_found(inst_54043__$1);
var inst_54046 = cljs.core.keys(inst_54045);
var inst_54047 = cljs.core.set(inst_54046);
var inst_54048__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_54044,inst_54047);
var inst_54049 = cljs.core.seq(inst_54048__$1);
var state_54064__$1 = (function (){var statearr_54068 = state_54064;
(statearr_54068[(7)] = inst_54048__$1);

(statearr_54068[(8)] = inst_54043__$1);

return statearr_54068;
})();
if(inst_54049){
var statearr_54069_55934 = state_54064__$1;
(statearr_54069_55934[(1)] = (6));

} else {
var statearr_54070_55936 = state_54064__$1;
(statearr_54070_55936[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54065 === (6))){
var inst_54048 = (state_54064[(7)]);
var inst_54043 = (state_54064[(8)]);
var inst_54051 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54048], 0));
var inst_54052 = ["Entity attributes ",inst_54051," could not be realized"].join('');
var inst_54053 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_54054 = [inst_54043,path,inst_54048];
var inst_54055 = cljs.core.PersistentHashMap.fromArrays(inst_54053,inst_54054);
var inst_54056 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_54052,inst_54055);
var inst_54057 = (function(){throw inst_54056})();
var state_54064__$1 = state_54064;
var statearr_54071_55942 = state_54064__$1;
(statearr_54071_55942[(2)] = inst_54057);

(statearr_54071_55942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54065 === (7))){
var state_54064__$1 = state_54064;
var statearr_54072_55944 = state_54064__$1;
(statearr_54072_55944[(2)] = null);

(statearr_54072_55944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54065 === (8))){
var inst_54043 = (state_54064[(8)]);
var inst_54060 = (state_54064[(2)]);
var state_54064__$1 = (function (){var statearr_54073 = state_54064;
(statearr_54073[(9)] = inst_54060);

return statearr_54073;
})();
var statearr_54074_55955 = state_54064__$1;
(statearr_54074_55955[(2)] = inst_54043);


cljs.core.async.impl.ioc_helpers.process_exception(state_54064__$1);

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
});})(c__47946__auto__,res__53554__auto__,map__54035,map__54035__$1,env,path))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,map__54035,map__54035__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____0 = (function (){
var statearr_54075 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54075[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__);

(statearr_54075[(1)] = (1));

return statearr_54075;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____1 = (function (state_54064){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54064);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54076){if((e54076 instanceof Object)){
var ex__47667__auto__ = e54076;
var statearr_54077_55957 = state_54064;
(statearr_54077_55957[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55958 = state_54064;
state_54064 = G__55958;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__ = function(state_54064){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____1.call(this,state_54064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,map__54035,map__54035__$1,env,path))
})();
var state__47948__auto__ = (function (){var statearr_54078 = f__47947__auto__();
(statearr_54078[(6)] = c__47946__auto__);

return statearr_54078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,map__54035,map__54035__$1,env,path))
);

return c__47946__auto__;
} else {
var e = res__53554__auto__;
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
var res__53554__auto__ = com.wsscode.pathom.core.entity_BANG_(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_54090){
var state_val_54091 = (state_54090[(1)]);
if((state_val_54091 === (1))){
var state_54090__$1 = state_54090;
var statearr_54092_55967 = state_54090__$1;
(statearr_54092_55967[(2)] = null);

(statearr_54092_55967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54091 === (2))){
var inst_54088 = (state_54090[(2)]);
var state_54090__$1 = state_54090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54090__$1,inst_54088);
} else {
if((state_val_54091 === (3))){
var inst_54079 = (state_54090[(2)]);
var state_54090__$1 = state_54090;
var statearr_54093_55971 = state_54090__$1;
(statearr_54093_55971[(2)] = inst_54079);


cljs.core.async.impl.ioc_helpers.process_exception(state_54090__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54091 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54090,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_54090__$1 = state_54090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54090__$1,(5),res__53554__auto__);
} else {
if((state_val_54091 === (5))){
var inst_54084 = (state_54090[(2)]);
var inst_54085 = com.wsscode.async.async_cljs.throw_err(inst_54084);
var inst_54086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54085,attr);
var state_54090__$1 = state_54090;
var statearr_54094_55972 = state_54090__$1;
(statearr_54094_55972[(2)] = inst_54086);


cljs.core.async.impl.ioc_helpers.process_exception(state_54090__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__){
return (function() {
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____0 = (function (){
var statearr_54095 = [null,null,null,null,null,null,null];
(statearr_54095[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__);

(statearr_54095[(1)] = (1));

return statearr_54095;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____1 = (function (state_54090){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54090);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54096){if((e54096 instanceof Object)){
var ex__47667__auto__ = e54096;
var statearr_54097_55976 = state_54090;
(statearr_54097_55976[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55979 = state_54090;
state_54090 = G__55979;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__ = function(state_54090){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____1.call(this,state_54090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_54098 = f__47947__auto__();
(statearr_54098[(6)] = c__47946__auto__);

return statearr_54098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var e = res__53554__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
}
});
/**
 * Helper to swap the current entity value.
 */
com.wsscode.pathom.core.swap_entity_BANG_ = (function com$wsscode$pathom$core$swap_entity_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55988 = arguments.length;
var i__4731__auto___55989 = (0);
while(true){
if((i__4731__auto___55989 < len__4730__auto___55988)){
args__4736__auto__.push((arguments[i__4731__auto___55989]));

var G__55990 = (i__4731__auto___55989 + (1));
i__4731__auto___55989 = G__55990;
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
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq54099){
var G__54100 = cljs.core.first(seq54099);
var seq54099__$1 = cljs.core.next(seq54099);
var G__54101 = cljs.core.first(seq54099__$1);
var seq54099__$2 = cljs.core.next(seq54099__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54100,G__54101,seq54099__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___55998 = arguments.length;
var i__4731__auto___55999 = (0);
while(true){
if((i__4731__auto___55999 < len__4730__auto___55998)){
args__4736__auto__.push((arguments[i__4731__auto___55999]));

var G__56001 = (i__4731__auto___55999 + (1));
i__4731__auto___55999 = G__56001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__54105 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__54105__$1 = (((G__54105 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__54105));
var G__54105__$2 = (((G__54105__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__54105__$1));
if((G__54105__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__54105__$2);
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
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq54102){
var G__54103 = cljs.core.first(seq54102);
var seq54102__$1 = cljs.core.next(seq54102);
var G__54104 = cljs.core.first(seq54102__$1);
var seq54102__$2 = cljs.core.next(seq54102__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54103,G__54104,seq54102__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56006 = arguments.length;
var i__4731__auto___56007 = (0);
while(true){
if((i__4731__auto___56007 < len__4730__auto___56006)){
args__4736__auto__.push((arguments[i__4731__auto___56007]));

var G__56008 = (i__4731__auto___56007 + (1));
i__4731__auto___56007 = G__56008;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__54110 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__54110__$1 = (((G__54110 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__54110));
var G__54110__$2 = (((G__54110__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__54110,G__54110__$1){
return (function (p1__54106_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__54106_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__54106_SHARP_))));
});})(G__54110,G__54110__$1))
,cljs.core.second),G__54110__$1));
if((G__54110__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__54110__$2);
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
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq54107){
var G__54108 = cljs.core.first(seq54107);
var seq54107__$1 = cljs.core.next(seq54107);
var G__54109 = cljs.core.first(seq54107__$1);
var seq54107__$2 = cljs.core.next(seq54107__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54108,G__54109,seq54107__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__54112){
var map__54113 = p__54112;
var map__54113__$1 = (((((!((map__54113 == null))))?(((((map__54113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54113):map__54113);
var env = map__54113__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54113__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__54115 = cljs.core.keys(query);
var G__54115__$1 = (((G__54115 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__54115,e,map__54113,map__54113__$1,env,query){
return (function (p1__54111_SHARP_){
return ((cljs.core.contains_QMARK_(e,p1__54111_SHARP_)) && (cljs.core.not((function (){var G__54117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,p1__54111_SHARP_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__54117) : com.wsscode.pathom.core.break_values.call(null,G__54117));
})())));
});})(G__54115,e,map__54113,map__54113__$1,env,query))
,G__54115));
if((G__54115__$1 == null)){
return null;
} else {
return cljs.core.first(G__54115__$1);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return path;
} else {
return null;
}
});
com.wsscode.pathom.core.placeholder_key_QMARK_ = (function com$wsscode$pathom$core$placeholder_key_QMARK_(p__54118,k){
var map__54119 = p__54118;
var map__54119__$1 = (((((!((map__54119 == null))))?(((((map__54119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54119):map__54119);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54119__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var placeholder_prefixes__$1 = (function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null);
}
})();
return (((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(placeholder_prefixes__$1,cljs.core.namespace(k))));
});
com.wsscode.pathom.core.path_without_placeholders = (function com$wsscode$pathom$core$path_without_placeholders(p__54122){
var map__54123 = p__54122;
var map__54123__$1 = (((((!((map__54123 == null))))?(((((map__54123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54123):map__54123);
var env = map__54123__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (map__54123,map__54123__$1,env,path){
return (function (p1__54121_SHARP_){
return com.wsscode.pathom.core.placeholder_key_QMARK_(env,p1__54121_SHARP_);
});})(map__54123,map__54123__$1,env,path))
),path);
});
/**
 * Find the closest parent key that's not a placeholder key.
 */
com.wsscode.pathom.core.find_closest_non_placeholder_parent_join_key = (function com$wsscode$pathom$core$find_closest_non_placeholder_parent_join_key(p__54126){
var map__54127 = p__54126;
var map__54127__$1 = (((((!((map__54127 == null))))?(((((map__54127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54127):map__54127);
var env = map__54127__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54127__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__54127,map__54127__$1,env,path){
return (function (p1__54125_SHARP_){
return com.wsscode.pathom.core.placeholder_key_QMARK_(env,p1__54125_SHARP_);
});})(map__54127,map__54127__$1,env,path))
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
var G__54130 = arguments.length;
switch (G__54130) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__54131){
var map__54132 = p__54131;
var map__54132__$1 = (((((!((map__54132 == null))))?(((((map__54132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54132):map__54132);
var env = map__54132__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54132__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54132__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54132__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__54134){
var map__54135 = p__54134;
var map__54135__$1 = (((((!((map__54135 == null))))?(((((map__54135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54135):map__54135);
var env = map__54135__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54135__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
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
var env_SINGLEQUOTE_ = (function (){var G__54137 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__54138 = env;
if(cljs.core.truth_(union_path__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__54138,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,union_path__$1);
} else {
return G__54138;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__54137,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__54137;
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
var G__54139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__54140 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__54139,G__54140) : parser.call(null,G__54139,G__54140));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__53554__auto__ = (function (){var G__54141 = env_SINGLEQUOTE___$1;
var G__54142 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__54141,G__54142) : parser.call(null,G__54141,G__54142));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__54135,map__54135__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__54135,map__54135__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function (state_54155){
var state_val_54156 = (state_54155[(1)]);
if((state_val_54156 === (1))){
var state_54155__$1 = state_54155;
var statearr_54157_56059 = state_54155__$1;
(statearr_54157_56059[(2)] = null);

(statearr_54157_56059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54156 === (2))){
var inst_54153 = (state_54155[(2)]);
var state_54155__$1 = state_54155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54155__$1,inst_54153);
} else {
if((state_val_54156 === (3))){
var inst_54143 = (state_54155[(2)]);
var state_54155__$1 = state_54155;
var statearr_54158_56062 = state_54155__$1;
(statearr_54158_56062[(2)] = inst_54143);


cljs.core.async.impl.ioc_helpers.process_exception(state_54155__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54156 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54155,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_54155__$1 = state_54155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54155__$1,(5),res__53554__auto__);
} else {
if((state_val_54156 === (5))){
var inst_54148 = (state_54155[(2)]);
var inst_54149 = com.wsscode.async.async_cljs.throw_err(inst_54148);
var inst_54150 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_54151 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54150,inst_54149], 0));
var state_54155__$1 = state_54155;
var statearr_54159_56070 = state_54155__$1;
(statearr_54159_56070[(2)] = inst_54151);


cljs.core.async.impl.ioc_helpers.process_exception(state_54155__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__54135,map__54135__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__54135,map__54135__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function() {
var com$wsscode$pathom$core$state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$state_machine__47664__auto____0 = (function (){
var statearr_54160 = [null,null,null,null,null,null,null];
(statearr_54160[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_54160[(1)] = (1));

return statearr_54160;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_54155){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54155);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54161){if((e54161 instanceof Object)){
var ex__47667__auto__ = e54161;
var statearr_54162_56075 = state_54155;
(statearr_54162_56075[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56079 = state_54155;
state_54155 = G__56079;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_54155){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_54155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__54135,map__54135__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_54163 = f__47947__auto__();
(statearr_54163[(6)] = c__47946__auto__);

return statearr_54163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__54135,map__54135__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
);

return c__47946__auto__;
} else {
var computed_e = res__53554__auto__;
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

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__54165,coll){
var map__54166 = p__54165;
var map__54166__$1 = (((((!((map__54166 == null))))?(((((map__54166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54166):map__54166);
var env = map__54166__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var query_SINGLEQUOTE_ = ((cljs.core.nat_int_QMARK_(query))?parent_query:query);
if(((cljs.core.seq(coll)) && (((cljs.core.vector_QMARK_(query)) || (cljs.core.pos_int_QMARK_(query)) || (cljs.core.map_QMARK_(query)))))){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___56090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (state_54297){
var state_val_54298 = (state_54297[(1)]);
if((state_val_54298 === (7))){
var inst_54286 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54299_56092 = state_54297__$1;
(statearr_54299_56092[(2)] = inst_54286);


cljs.core.async.impl.ioc_helpers.process_exception(state_54297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (20))){
var inst_54250 = (state_54297[(7)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(23),inst_54250);
} else {
if((state_val_54298 === (27))){
var inst_54261 = (state_54297[(2)]);
var inst_54262 = com.wsscode.async.async_cljs.consumer_pair(inst_54261);
var state_54297__$1 = state_54297;
var statearr_54300_56093 = state_54297__$1;
(statearr_54300_56093[(2)] = inst_54262);

(statearr_54300_56093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (1))){
var state_54297__$1 = state_54297;
var statearr_54301_56094 = state_54297__$1;
(statearr_54301_56094[(2)] = null);

(statearr_54301_56094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (24))){
var inst_54250 = (state_54297[(7)]);
var inst_54259 = com.wsscode.async.async_cljs.promise__GT_chan(inst_54250);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(27),inst_54259);
} else {
if((state_val_54298 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54297,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_54297__$1 = state_54297;
if(cljs.core.truth_(inst_54172)){
var statearr_54302_56095 = state_54297__$1;
(statearr_54302_56095[(1)] = (5));

} else {
var statearr_54303_56096 = state_54297__$1;
(statearr_54303_56096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (15))){
var inst_54205 = (state_54297[(2)]);
var inst_54206 = com.wsscode.async.async_cljs.consumer_pair(inst_54205);
var state_54297__$1 = state_54297;
var statearr_54304_56097 = state_54297__$1;
(statearr_54304_56097[(2)] = inst_54206);

(statearr_54304_56097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (21))){
var inst_54250 = (state_54297[(7)]);
var inst_54257 = com.wsscode.async.async_cljs.promise_QMARK_(inst_54250);
var state_54297__$1 = state_54297;
if(cljs.core.truth_(inst_54257)){
var statearr_54305_56099 = state_54297__$1;
(statearr_54305_56099[(1)] = (24));

} else {
var statearr_54306_56100 = state_54297__$1;
(statearr_54306_56100[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (31))){
var inst_54284 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54307_56101 = state_54297__$1;
(statearr_54307_56101[(2)] = inst_54284);

(statearr_54307_56101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (32))){
var inst_54291 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_54297__$1 = state_54297;
var statearr_54308_56102 = state_54297__$1;
(statearr_54308_56102[(2)] = inst_54291);

(statearr_54308_56102[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (33))){
var inst_54288 = (state_54297[(8)]);
var inst_54293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_54288);
var state_54297__$1 = state_54297;
var statearr_54309_56112 = state_54297__$1;
(statearr_54309_56112[(2)] = inst_54293);

(statearr_54309_56112[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (13))){
var state_54297__$1 = state_54297;
var statearr_54310_56114 = state_54297__$1;
(statearr_54310_56114[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (22))){
var inst_54245 = (state_54297[(9)]);
var inst_54247 = (state_54297[(10)]);
var inst_54243 = (state_54297[(11)]);
var inst_54244 = (state_54297[(12)]);
var inst_54240 = (state_54297[(13)]);
var inst_54248 = (state_54297[(14)]);
var inst_54271 = (state_54297[(2)]);
var inst_54272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_54273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_54274 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_54275 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_54248,inst_54274);
var inst_54276 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_54272,inst_54275);
var inst_54277 = (function (){var from_chan = inst_54272;
var join_item = inst_54244;
var seq__54238 = inst_54248;
var first_res = inst_54271;
var check_ast_opt_QMARK_ = inst_54243;
var first__54239 = inst_54247;
var vec__54237 = coll;
var out_chan = inst_54273;
var ast = inst_54240;
var env__$1 = inst_54245;
var head = inst_54247;
var tail = inst_54248;
return ((function (from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__54312,res_ch){
var vec__54313 = p__54312;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54313,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54313,(1),null);
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,vec__54313,ent,i,from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,vec__54313,ent,i,from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (state_54357){
var state_val_54358 = (state_54357[(1)]);
if((state_val_54358 === (7))){
var inst_54331 = (state_54357[(2)]);
var state_54357__$1 = state_54357;
var statearr_54359_56190 = state_54357__$1;
(statearr_54359_56190[(2)] = inst_54331);

(statearr_54359_56190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (1))){
var inst_54318 = (state_54357[(7)]);
var inst_54317 = (i + (1));
var inst_54318__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_54317);
var inst_54320 = (inst_54318__$1 == null);
var inst_54321 = cljs.core.not(inst_54320);
var state_54357__$1 = (function (){var statearr_54360 = state_54357;
(statearr_54360[(7)] = inst_54318__$1);

return statearr_54360;
})();
if(inst_54321){
var statearr_54361_56196 = state_54357__$1;
(statearr_54361_56196[(1)] = (2));

} else {
var statearr_54362_56197 = state_54357__$1;
(statearr_54362_56197[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (4))){
var inst_54334 = (state_54357[(2)]);
var state_54357__$1 = state_54357;
if(cljs.core.truth_(inst_54334)){
var statearr_54363_56200 = state_54357__$1;
(statearr_54363_56200[(1)] = (8));

} else {
var statearr_54364_56201 = state_54357__$1;
(statearr_54364_56201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (15))){
var inst_54354 = (state_54357[(2)]);
var inst_54355 = cljs.core.async.close_BANG_(res_ch);
var state_54357__$1 = (function (){var statearr_54365 = state_54357;
(statearr_54365[(8)] = inst_54354);

return statearr_54365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54357__$1,inst_54355);
} else {
if((state_val_54358 === (13))){
var inst_54352 = (state_54357[(2)]);
var state_54357__$1 = state_54357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54357__$1,(15),res_ch,inst_54352);
} else {
if((state_val_54358 === (6))){
var state_54357__$1 = state_54357;
var statearr_54366_56203 = state_54357__$1;
(statearr_54366_56203[(2)] = false);

(statearr_54366_56203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (3))){
var state_54357__$1 = state_54357;
var statearr_54367_56205 = state_54357__$1;
(statearr_54367_56205[(2)] = false);

(statearr_54367_56205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (12))){
var inst_54345 = (state_54357[(9)]);
var state_54357__$1 = state_54357;
var statearr_54368_56207 = state_54357__$1;
(statearr_54368_56207[(2)] = inst_54345);

(statearr_54368_56207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (2))){
var inst_54318 = (state_54357[(7)]);
var inst_54323 = inst_54318.cljs$lang$protocol_mask$partition0$;
var inst_54324 = (inst_54323 & (64));
var inst_54325 = inst_54318.cljs$core$ISeq$;
var inst_54326 = (cljs.core.PROTOCOL_SENTINEL === inst_54325);
var inst_54327 = ((inst_54324) || (inst_54326));
var state_54357__$1 = state_54357;
if(cljs.core.truth_(inst_54327)){
var statearr_54369_56210 = state_54357__$1;
(statearr_54369_56210[(1)] = (5));

} else {
var statearr_54370_56211 = state_54357__$1;
(statearr_54370_56211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (11))){
var inst_54345 = (state_54357[(9)]);
var state_54357__$1 = state_54357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54357__$1,(14),inst_54345);
} else {
if((state_val_54358 === (9))){
var inst_54318 = (state_54357[(7)]);
var state_54357__$1 = state_54357;
var statearr_54371_56213 = state_54357__$1;
(statearr_54371_56213[(2)] = inst_54318);

(statearr_54371_56213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (5))){
var state_54357__$1 = state_54357;
var statearr_54372_56217 = state_54357__$1;
(statearr_54372_56217[(2)] = true);

(statearr_54372_56217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (14))){
var inst_54349 = (state_54357[(2)]);
var state_54357__$1 = state_54357;
var statearr_54373_56218 = state_54357__$1;
(statearr_54373_56218[(2)] = inst_54349);

(statearr_54373_56218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (10))){
var inst_54345 = (state_54357[(9)]);
var inst_54339 = (state_54357[(2)]);
var inst_54340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54339,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_54341 = cljs.core.deref(entity_path_cache);
var inst_54342 = cljs.core.PersistentHashMap.EMPTY;
var inst_54343 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_54341,inst_54340,inst_54342);
var inst_54344 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54343,ent], 0));
var inst_54345__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_54339,inst_54344) : join_item.call(null,inst_54339,inst_54344));
var inst_54346 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54345__$1);
var state_54357__$1 = (function (){var statearr_54374 = state_54357;
(statearr_54374[(9)] = inst_54345__$1);

return statearr_54374;
})();
if(inst_54346){
var statearr_54375_56221 = state_54357__$1;
(statearr_54375_56221[(1)] = (11));

} else {
var statearr_54376_56222 = state_54357__$1;
(statearr_54376_56222[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54358 === (8))){
var inst_54318 = (state_54357[(7)]);
var inst_54336 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54318);
var state_54357__$1 = state_54357;
var statearr_54377_56225 = state_54357__$1;
(statearr_54377_56225[(2)] = inst_54336);

(statearr_54377_56225[(1)] = (10));


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
});})(c__47946__auto____$1,vec__54313,ent,i,from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,vec__54313,ent,i,from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_54378 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54378[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__);

(statearr_54378[(1)] = (1));

return statearr_54378;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1 = (function (state_54357){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54357);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54379){if((e54379 instanceof Object)){
var ex__47667__auto__ = e54379;
var statearr_54380_56241 = state_54357;
(statearr_54380_56241[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56244 = state_54357;
state_54357 = G__56244;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = function(state_54357){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1.call(this,state_54357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,vec__54313,ent,i,from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var state__47948__auto__ = (function (){var statearr_54381 = f__47947__auto__();
(statearr_54381[(6)] = c__47946__auto____$1);

return statearr_54381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,vec__54313,ent,i,from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
);

return c__47946__auto____$1;
});
;})(from_chan,join_item,seq__54238,first_res,check_ast_opt_QMARK_,first__54239,vec__54237,out_chan,ast,env__$1,head,tail,inst_54245,inst_54247,inst_54243,inst_54244,inst_54240,inst_54248,inst_54271,inst_54272,inst_54273,inst_54274,inst_54275,inst_54276,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var inst_54278 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_54273,inst_54277,inst_54272);
var inst_54279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54280 = [inst_54271];
var inst_54281 = (new cljs.core.PersistentVector(null,1,(5),inst_54279,inst_54280,null));
var inst_54282 = cljs.core.async.into(inst_54281,inst_54273);
var state_54297__$1 = (function (){var statearr_54382 = state_54297;
(statearr_54382[(15)] = inst_54278);

(statearr_54382[(16)] = inst_54276);

return statearr_54382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(31),inst_54282);
} else {
if((state_val_54298 === (29))){
var state_54297__$1 = state_54297;
var statearr_54383_56249 = state_54297__$1;
(statearr_54383_56249[(2)] = null);

(statearr_54383_56249[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (6))){
var inst_54245 = (state_54297[(9)]);
var inst_54247 = (state_54297[(10)]);
var inst_54243 = (state_54297[(11)]);
var inst_54250 = (state_54297[(7)]);
var inst_54244 = (state_54297[(12)]);
var inst_54240 = (state_54297[(13)]);
var inst_54240__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_54241 = (function (){var ast = inst_54240__$1;
return ((function (ast,inst_54245,inst_54247,inst_54243,inst_54250,inst_54244,inst_54240,inst_54240__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (p1__54164_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__54164_SHARP_));
});
;})(ast,inst_54245,inst_54247,inst_54243,inst_54250,inst_54244,inst_54240,inst_54240__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var inst_54242 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_54240__$1);
var inst_54243__$1 = cljs.core.every_QMARK_(inst_54241,inst_54242);
var inst_54244__$1 = (function (){var ast = inst_54240__$1;
var check_ast_opt_QMARK_ = inst_54243__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_54245,inst_54247,inst_54243,inst_54250,inst_54244,inst_54240,inst_54240__$1,inst_54241,inst_54242,inst_54243__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_54245,inst_54247,inst_54243,inst_54250,inst_54244,inst_54240,inst_54240__$1,inst_54241,inst_54242,inst_54243__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__54402){
var map__54403 = p__54402;
var map__54403__$1 = (((((!((map__54403 == null))))?(((((map__54403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54403):map__54403);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54403__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54403__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__54405 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54405,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54405,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_54245,inst_54247,inst_54243,inst_54250,inst_54244,inst_54240,inst_54240__$1,inst_54241,inst_54242,inst_54243__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
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
;})(ast,check_ast_opt_QMARK_,inst_54245,inst_54247,inst_54243,inst_54250,inst_54244,inst_54240,inst_54240__$1,inst_54241,inst_54242,inst_54243__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var inst_54245__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_54246 = cljs.core.seq(coll);
var inst_54247__$1 = cljs.core.first(inst_54246);
var inst_54248 = cljs.core.next(inst_54246);
var inst_54249 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_54245__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_54250__$1 = inst_54244__$1(inst_54249,inst_54247__$1);
var inst_54251 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54250__$1);
var state_54297__$1 = (function (){var statearr_54408 = state_54297;
(statearr_54408[(9)] = inst_54245__$1);

(statearr_54408[(10)] = inst_54247__$1);

(statearr_54408[(11)] = inst_54243__$1);

(statearr_54408[(7)] = inst_54250__$1);

(statearr_54408[(12)] = inst_54244__$1);

(statearr_54408[(13)] = inst_54240__$1);

(statearr_54408[(14)] = inst_54248);

return statearr_54408;
})();
if(inst_54251){
var statearr_54409_56317 = state_54297__$1;
(statearr_54409_56317[(1)] = (20));

} else {
var statearr_54410_56319 = state_54297__$1;
(statearr_54410_56319[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (28))){
var inst_54250 = (state_54297[(7)]);
var state_54297__$1 = state_54297;
var statearr_54411_56330 = state_54297__$1;
(statearr_54411_56330[(2)] = inst_54250);

(statearr_54411_56330[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (25))){
var state_54297__$1 = state_54297;
var statearr_54412_56333 = state_54297__$1;
(statearr_54412_56333[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (34))){
var inst_54295 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54297__$1,inst_54295);
} else {
if((state_val_54298 === (17))){
var state_54297__$1 = state_54297;
var statearr_54414_56335 = state_54297__$1;
(statearr_54414_56335[(2)] = null);

(statearr_54414_56335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (3))){
var inst_54168 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54415_56337 = state_54297__$1;
(statearr_54415_56337[(2)] = inst_54168);


cljs.core.async.impl.ioc_helpers.process_exception(state_54297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (12))){
var inst_54194 = (state_54297[(17)]);
var inst_54203 = com.wsscode.async.async_cljs.promise__GT_chan(inst_54194);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(15),inst_54203);
} else {
if((state_val_54298 === (2))){
var inst_54288 = (state_54297[(8)]);
var inst_54288__$1 = (state_54297[(2)]);
var inst_54289 = (inst_54288__$1 == null);
var state_54297__$1 = (function (){var statearr_54416 = state_54297;
(statearr_54416[(8)] = inst_54288__$1);

return statearr_54416;
})();
if(cljs.core.truth_(inst_54289)){
var statearr_54417_56342 = state_54297__$1;
(statearr_54417_56342[(1)] = (32));

} else {
var statearr_54418_56343 = state_54297__$1;
(statearr_54418_56343[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (23))){
var inst_54254 = (state_54297[(2)]);
var inst_54255 = com.wsscode.async.async_cljs.throw_err(inst_54254);
var state_54297__$1 = state_54297;
var statearr_54419_56345 = state_54297__$1;
(statearr_54419_56345[(2)] = inst_54255);

(statearr_54419_56345[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (19))){
var inst_54180 = (state_54297[(18)]);
var inst_54228 = (state_54297[(2)]);
var inst_54229 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_54230 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54231 = ["#e0e3a4","0.8"];
var inst_54232 = cljs.core.PersistentHashMap.fromArrays(inst_54230,inst_54231);
var inst_54233 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_54232];
var inst_54234 = cljs.core.PersistentHashMap.fromArrays(inst_54229,inst_54233);
var inst_54235 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54180,inst_54234);
var state_54297__$1 = (function (){var statearr_54420 = state_54297;
(statearr_54420[(19)] = inst_54235);

return statearr_54420;
})();
var statearr_54421_56350 = state_54297__$1;
(statearr_54421_56350[(2)] = inst_54228);

(statearr_54421_56350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (11))){
var inst_54198 = (state_54297[(2)]);
var inst_54199 = com.wsscode.async.async_cljs.throw_err(inst_54198);
var state_54297__$1 = state_54297;
var statearr_54422_56351 = state_54297__$1;
(statearr_54422_56351[(2)] = inst_54199);

(statearr_54422_56351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (9))){
var inst_54194 = (state_54297[(17)]);
var inst_54201 = com.wsscode.async.async_cljs.promise_QMARK_(inst_54194);
var state_54297__$1 = state_54297;
if(cljs.core.truth_(inst_54201)){
var statearr_54423_56355 = state_54297__$1;
(statearr_54423_56355[(1)] = (12));

} else {
var statearr_54424_56356 = state_54297__$1;
(statearr_54424_56356[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (5))){
var inst_54188 = (state_54297[(20)]);
var inst_54180 = (state_54297[(18)]);
var inst_54194 = (state_54297[(17)]);
var inst_54184 = (state_54297[(21)]);
var inst_54187 = (state_54297[(22)]);
var inst_54191 = (state_54297[(23)]);
var inst_54189 = (state_54297[(24)]);
var inst_54174 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_54175 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_54176 = ["#e0e3a4","0.8"];
var inst_54177 = cljs.core.PersistentHashMap.fromArrays(inst_54175,inst_54176);
var inst_54178 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_54177];
var inst_54179 = cljs.core.PersistentHashMap.fromArrays(inst_54174,inst_54178);
var inst_54180__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54179);
var inst_54184__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_54185 = (function (){var trace_id__27094__auto__ = inst_54180__$1;
var ast = inst_54184__$1;
return ((function (trace_id__27094__auto__,ast,inst_54188,inst_54180,inst_54194,inst_54184,inst_54187,inst_54191,inst_54189,inst_54174,inst_54175,inst_54176,inst_54177,inst_54178,inst_54179,inst_54180__$1,inst_54184__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (p1__54164_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__54164_SHARP_));
});
;})(trace_id__27094__auto__,ast,inst_54188,inst_54180,inst_54194,inst_54184,inst_54187,inst_54191,inst_54189,inst_54174,inst_54175,inst_54176,inst_54177,inst_54178,inst_54179,inst_54180__$1,inst_54184__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var inst_54186 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_54184__$1);
var inst_54187__$1 = cljs.core.every_QMARK_(inst_54185,inst_54186);
var inst_54188__$1 = (function (){var trace_id__27094__auto__ = inst_54180__$1;
var ast = inst_54184__$1;
var check_ast_opt_QMARK_ = inst_54187__$1;
return ((function (trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_54188,inst_54180,inst_54194,inst_54184,inst_54187,inst_54191,inst_54189,inst_54174,inst_54175,inst_54176,inst_54177,inst_54178,inst_54179,inst_54180__$1,inst_54184__$1,inst_54185,inst_54186,inst_54187__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_54188,inst_54180,inst_54194,inst_54184,inst_54187,inst_54191,inst_54189,inst_54174,inst_54175,inst_54176,inst_54177,inst_54178,inst_54179,inst_54180__$1,inst_54184__$1,inst_54185,inst_54186,inst_54187__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__54443){
var map__54444 = p__54443;
var map__54444__$1 = (((((!((map__54444 == null))))?(((((map__54444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54444):map__54444);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54444__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54444__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__54446 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54446,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_54188,inst_54180,inst_54194,inst_54184,inst_54187,inst_54191,inst_54189,inst_54174,inst_54175,inst_54176,inst_54177,inst_54178,inst_54179,inst_54180__$1,inst_54184__$1,inst_54185,inst_54186,inst_54187__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
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
;})(trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_54188,inst_54180,inst_54194,inst_54184,inst_54187,inst_54191,inst_54189,inst_54174,inst_54175,inst_54176,inst_54177,inst_54178,inst_54179,inst_54180__$1,inst_54184__$1,inst_54185,inst_54186,inst_54187__$1,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var inst_54189__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_54190 = cljs.core.seq(coll);
var inst_54191__$1 = cljs.core.first(inst_54190);
var inst_54192 = cljs.core.next(inst_54190);
var inst_54193 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_54189__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_54194__$1 = inst_54188__$1(inst_54193,inst_54191__$1);
var inst_54195 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54194__$1);
var state_54297__$1 = (function (){var statearr_54449 = state_54297;
(statearr_54449[(20)] = inst_54188__$1);

(statearr_54449[(18)] = inst_54180__$1);

(statearr_54449[(17)] = inst_54194__$1);

(statearr_54449[(21)] = inst_54184__$1);

(statearr_54449[(25)] = inst_54192);

(statearr_54449[(22)] = inst_54187__$1);

(statearr_54449[(23)] = inst_54191__$1);

(statearr_54449[(24)] = inst_54189__$1);

return statearr_54449;
})();
if(inst_54195){
var statearr_54450_56387 = state_54297__$1;
(statearr_54450_56387[(1)] = (8));

} else {
var statearr_54451_56388 = state_54297__$1;
(statearr_54451_56388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (14))){
var inst_54213 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54452_56389 = state_54297__$1;
(statearr_54452_56389[(2)] = inst_54213);

(statearr_54452_56389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (26))){
var inst_54269 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54453_56393 = state_54297__$1;
(statearr_54453_56393[(2)] = inst_54269);

(statearr_54453_56393[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (16))){
var inst_54194 = (state_54297[(17)]);
var state_54297__$1 = state_54297;
var statearr_54454_56394 = state_54297__$1;
(statearr_54454_56394[(2)] = inst_54194);

(statearr_54454_56394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (30))){
var inst_54267 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54455_56402 = state_54297__$1;
(statearr_54455_56402[(2)] = inst_54267);

(statearr_54455_56402[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (10))){
var inst_54188 = (state_54297[(20)]);
var inst_54180 = (state_54297[(18)]);
var inst_54184 = (state_54297[(21)]);
var inst_54192 = (state_54297[(25)]);
var inst_54187 = (state_54297[(22)]);
var inst_54191 = (state_54297[(23)]);
var inst_54189 = (state_54297[(24)]);
var inst_54215 = (state_54297[(2)]);
var inst_54216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_54217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_54218 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_54219 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_54192,inst_54218);
var inst_54220 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_54216,inst_54219);
var inst_54221 = (function (){var from_chan = inst_54216;
var join_item = inst_54188;
var vec__54181 = coll;
var first_res = inst_54215;
var check_ast_opt_QMARK_ = inst_54187;
var seq__54182 = inst_54192;
var out_chan = inst_54217;
var ast = inst_54184;
var env__$1 = inst_54189;
var head = inst_54191;
var trace_id__27094__auto__ = inst_54180;
var tail = inst_54192;
var first__54183 = inst_54191;
return ((function (from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__54456,res_ch){
var vec__54457 = p__54456;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54457,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54457,(1),null);
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,vec__54457,ent,i,from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,vec__54457,ent,i,from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function (state_54501){
var state_val_54502 = (state_54501[(1)]);
if((state_val_54502 === (7))){
var inst_54475 = (state_54501[(2)]);
var state_54501__$1 = state_54501;
var statearr_54503_56426 = state_54501__$1;
(statearr_54503_56426[(2)] = inst_54475);

(statearr_54503_56426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (1))){
var inst_54462 = (state_54501[(7)]);
var inst_54461 = (i + (1));
var inst_54462__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_54461);
var inst_54464 = (inst_54462__$1 == null);
var inst_54465 = cljs.core.not(inst_54464);
var state_54501__$1 = (function (){var statearr_54504 = state_54501;
(statearr_54504[(7)] = inst_54462__$1);

return statearr_54504;
})();
if(inst_54465){
var statearr_54505_56430 = state_54501__$1;
(statearr_54505_56430[(1)] = (2));

} else {
var statearr_54506_56432 = state_54501__$1;
(statearr_54506_56432[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (4))){
var inst_54478 = (state_54501[(2)]);
var state_54501__$1 = state_54501;
if(cljs.core.truth_(inst_54478)){
var statearr_54507_56433 = state_54501__$1;
(statearr_54507_56433[(1)] = (8));

} else {
var statearr_54508_56434 = state_54501__$1;
(statearr_54508_56434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (15))){
var inst_54498 = (state_54501[(2)]);
var inst_54499 = cljs.core.async.close_BANG_(res_ch);
var state_54501__$1 = (function (){var statearr_54509 = state_54501;
(statearr_54509[(8)] = inst_54498);

return statearr_54509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54501__$1,inst_54499);
} else {
if((state_val_54502 === (13))){
var inst_54496 = (state_54501[(2)]);
var state_54501__$1 = state_54501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54501__$1,(15),res_ch,inst_54496);
} else {
if((state_val_54502 === (6))){
var state_54501__$1 = state_54501;
var statearr_54510_56439 = state_54501__$1;
(statearr_54510_56439[(2)] = false);

(statearr_54510_56439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (3))){
var state_54501__$1 = state_54501;
var statearr_54511_56440 = state_54501__$1;
(statearr_54511_56440[(2)] = false);

(statearr_54511_56440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (12))){
var inst_54489 = (state_54501[(9)]);
var state_54501__$1 = state_54501;
var statearr_54512_56442 = state_54501__$1;
(statearr_54512_56442[(2)] = inst_54489);

(statearr_54512_56442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (2))){
var inst_54462 = (state_54501[(7)]);
var inst_54467 = inst_54462.cljs$lang$protocol_mask$partition0$;
var inst_54468 = (inst_54467 & (64));
var inst_54469 = inst_54462.cljs$core$ISeq$;
var inst_54470 = (cljs.core.PROTOCOL_SENTINEL === inst_54469);
var inst_54471 = ((inst_54468) || (inst_54470));
var state_54501__$1 = state_54501;
if(cljs.core.truth_(inst_54471)){
var statearr_54513_56449 = state_54501__$1;
(statearr_54513_56449[(1)] = (5));

} else {
var statearr_54514_56450 = state_54501__$1;
(statearr_54514_56450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (11))){
var inst_54489 = (state_54501[(9)]);
var state_54501__$1 = state_54501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54501__$1,(14),inst_54489);
} else {
if((state_val_54502 === (9))){
var inst_54462 = (state_54501[(7)]);
var state_54501__$1 = state_54501;
var statearr_54515_56451 = state_54501__$1;
(statearr_54515_56451[(2)] = inst_54462);

(statearr_54515_56451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (5))){
var state_54501__$1 = state_54501;
var statearr_54516_56452 = state_54501__$1;
(statearr_54516_56452[(2)] = true);

(statearr_54516_56452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (14))){
var inst_54493 = (state_54501[(2)]);
var state_54501__$1 = state_54501;
var statearr_54517_56454 = state_54501__$1;
(statearr_54517_56454[(2)] = inst_54493);

(statearr_54517_56454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (10))){
var inst_54489 = (state_54501[(9)]);
var inst_54483 = (state_54501[(2)]);
var inst_54484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54483,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_54485 = cljs.core.deref(entity_path_cache);
var inst_54486 = cljs.core.PersistentHashMap.EMPTY;
var inst_54487 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_54485,inst_54484,inst_54486);
var inst_54488 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54487,ent], 0));
var inst_54489__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_54483,inst_54488) : join_item.call(null,inst_54483,inst_54488));
var inst_54490 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54489__$1);
var state_54501__$1 = (function (){var statearr_54518 = state_54501;
(statearr_54518[(9)] = inst_54489__$1);

return statearr_54518;
})();
if(inst_54490){
var statearr_54519_56458 = state_54501__$1;
(statearr_54519_56458[(1)] = (11));

} else {
var statearr_54520_56459 = state_54501__$1;
(statearr_54520_56459[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54502 === (8))){
var inst_54462 = (state_54501[(7)]);
var inst_54480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54462);
var state_54501__$1 = state_54501;
var statearr_54521_56460 = state_54501__$1;
(statearr_54521_56460[(2)] = inst_54480);

(statearr_54521_56460[(1)] = (10));


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
});})(c__47946__auto____$1,vec__54457,ent,i,from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,vec__54457,ent,i,from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_54522 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54522[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__);

(statearr_54522[(1)] = (1));

return statearr_54522;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1 = (function (state_54501){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54501);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54523){if((e54523 instanceof Object)){
var ex__47667__auto__ = e54523;
var statearr_54524_56463 = state_54501;
(statearr_54524_56463[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56467 = state_54501;
state_54501 = G__56467;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = function(state_54501){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1.call(this,state_54501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,vec__54457,ent,i,from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var state__47948__auto__ = (function (){var statearr_54525 = f__47947__auto__();
(statearr_54525[(6)] = c__47946__auto____$1);

return statearr_54525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,vec__54457,ent,i,from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
);

return c__47946__auto____$1;
});
;})(from_chan,join_item,vec__54181,first_res,check_ast_opt_QMARK_,seq__54182,out_chan,ast,env__$1,head,trace_id__27094__auto__,tail,first__54183,inst_54188,inst_54180,inst_54184,inst_54192,inst_54187,inst_54191,inst_54189,inst_54215,inst_54216,inst_54217,inst_54218,inst_54219,inst_54220,state_val_54298,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var inst_54222 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_54217,inst_54221,inst_54216);
var inst_54223 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54224 = [inst_54215];
var inst_54225 = (new cljs.core.PersistentVector(null,1,(5),inst_54223,inst_54224,null));
var inst_54226 = cljs.core.async.into(inst_54225,inst_54217);
var state_54297__$1 = (function (){var statearr_54526 = state_54297;
(statearr_54526[(26)] = inst_54220);

(statearr_54526[(27)] = inst_54222);

return statearr_54526;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(19),inst_54226);
} else {
if((state_val_54298 === (18))){
var inst_54211 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54527_56471 = state_54297__$1;
(statearr_54527_56471[(2)] = inst_54211);

(statearr_54527_56471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (8))){
var inst_54194 = (state_54297[(17)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(11),inst_54194);
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
});})(c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__47663__auto__,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____0 = (function (){
var statearr_54528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54528[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__);

(statearr_54528[(1)] = (1));

return statearr_54528;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____1 = (function (state_54297){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54297);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54529){if((e54529 instanceof Object)){
var ex__47667__auto__ = e54529;
var statearr_54530_56476 = state_54297;
(statearr_54530_56476[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56481 = state_54297;
state_54297 = G__56481;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__ = function(state_54297){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____1.call(this,state_54297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
})();
var state__47948__auto__ = (function (){var statearr_54531 = f__47947__auto__();
(statearr_54531[(6)] = c__47946__auto___56090);

return statearr_54531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___56090,ch__53519__auto__,query_SINGLEQUOTE_,map__54166,map__54166__$1,env,query,entity_path_cache,parent_query))
);


return ch__53519__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__54532,coll){
var map__54533 = p__54532;
var map__54533__$1 = (((((!((map__54533 == null))))?(((((map__54533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54533):map__54533);
var env = map__54533__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54533__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__54533,map__54533__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__54533,map__54533__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__54538 = coll;
var vec__54539 = G__54538;
var seq__54540 = cljs.core.seq(vec__54539);
var first__54541 = cljs.core.first(seq__54540);
var seq__54540__$1 = cljs.core.next(seq__54540);
var ent = first__54541;
var tail = seq__54540__$1;
var out__$1 = out;
var G__54538__$1 = G__54538;
while(true){
var out__$2 = out__$1;
var vec__54620 = G__54538__$1;
var seq__54621 = cljs.core.seq(vec__54620);
var first__54622 = cljs.core.first(seq__54621);
var seq__54621__$1 = cljs.core.next(seq__54621);
var ent__$1 = first__54622;
var tail__$1 = seq__54621__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___56495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__54538__$1,c__47946__auto___56495,ch__53519__auto__,res,out__$2,vec__54620,seq__54621,first__54622,seq__54621__$1,ent__$1,tail__$1,out,G__54538,vec__54539,seq__54540,first__54541,seq__54540__$1,ent,tail,map__54533,map__54533__$1,env,parallel_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (out__$1,G__54538__$1,c__47946__auto___56495,ch__53519__auto__,res,out__$2,vec__54620,seq__54621,first__54622,seq__54621__$1,ent__$1,tail__$1,out,G__54538,vec__54539,seq__54540,first__54541,seq__54540__$1,ent,tail,map__54533,map__54533__$1,env,parallel_QMARK_){
return (function (state_54674){
var state_val_54675 = (state_54674[(1)]);
if((state_val_54675 === (7))){
var inst_54663 = (state_54674[(2)]);
var state_54674__$1 = state_54674;
var statearr_54676_56500 = state_54674__$1;
(statearr_54676_56500[(2)] = inst_54663);


cljs.core.async.impl.ioc_helpers.process_exception(state_54674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (1))){
var state_54674__$1 = state_54674;
var statearr_54677_56501 = state_54674__$1;
(statearr_54677_56501[(2)] = null);

(statearr_54677_56501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54674,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54634 = cljs.core.PersistentVector.EMPTY_NODE;
var state_54674__$1 = (function (){var statearr_54678 = state_54674;
(statearr_54678[(7)] = inst_54634);

return statearr_54678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54674__$1,(5),res);
} else {
if((state_val_54675 === (13))){
var inst_54665 = (state_54674[(8)]);
var inst_54670 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_54665);
var state_54674__$1 = state_54674;
var statearr_54679_56502 = state_54674__$1;
(statearr_54679_56502[(2)] = inst_54670);

(statearr_54679_56502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (6))){
var inst_54650 = (state_54674[(9)]);
var inst_54644 = (state_54674[(10)]);
var inst_54649 = cljs.core.seq(inst_54644);
var inst_54650__$1 = cljs.core.first(inst_54649);
var inst_54651 = cljs.core.next(inst_54649);
var state_54674__$1 = (function (){var statearr_54680 = state_54674;
(statearr_54680[(9)] = inst_54650__$1);

(statearr_54680[(11)] = inst_54651);

return statearr_54680;
})();
if(cljs.core.truth_(inst_54650__$1)){
var statearr_54681_56507 = state_54674__$1;
(statearr_54681_56507[(1)] = (8));

} else {
var statearr_54682_56510 = state_54674__$1;
(statearr_54682_56510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (3))){
var inst_54623 = (state_54674[(2)]);
var state_54674__$1 = state_54674;
var statearr_54683_56515 = state_54674__$1;
(statearr_54683_56515[(2)] = inst_54623);


cljs.core.async.impl.ioc_helpers.process_exception(state_54674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (12))){
var inst_54668 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_54674__$1 = state_54674;
var statearr_54684_56519 = state_54674__$1;
(statearr_54684_56519[(2)] = inst_54668);

(statearr_54684_56519[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (2))){
var inst_54665 = (state_54674[(8)]);
var inst_54665__$1 = (state_54674[(2)]);
var inst_54666 = (inst_54665__$1 == null);
var state_54674__$1 = (function (){var statearr_54685 = state_54674;
(statearr_54685[(8)] = inst_54665__$1);

return statearr_54685;
})();
if(cljs.core.truth_(inst_54666)){
var statearr_54686_56521 = state_54674__$1;
(statearr_54686_56521[(1)] = (12));

} else {
var statearr_54687_56522 = state_54674__$1;
(statearr_54687_56522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (11))){
var inst_54643 = (state_54674[(12)]);
var inst_54651 = (state_54674[(11)]);
var inst_54655 = (state_54674[(2)]);
var inst_54656 = com.wsscode.async.async_cljs.throw_err(inst_54655);
var inst_54657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_54643,inst_54656);
var inst_54643__$1 = inst_54657;
var inst_54644 = inst_54651;
var state_54674__$1 = (function (){var statearr_54688 = state_54674;
(statearr_54688[(12)] = inst_54643__$1);

(statearr_54688[(10)] = inst_54644);

return statearr_54688;
})();
var statearr_54689_56527 = state_54674__$1;
(statearr_54689_56527[(2)] = null);

(statearr_54689_56527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (9))){
var inst_54643 = (state_54674[(12)]);
var state_54674__$1 = state_54674;
var statearr_54690_56529 = state_54674__$1;
(statearr_54690_56529[(2)] = inst_54643);

(statearr_54690_56529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (5))){
var inst_54634 = (state_54674[(7)]);
var inst_54636 = (state_54674[(2)]);
var inst_54637 = com.wsscode.async.async_cljs.throw_err(inst_54636);
var inst_54638 = [inst_54637];
var inst_54639 = (new cljs.core.PersistentVector(null,1,(5),inst_54634,inst_54638,null));
var inst_54640 = cljs.core.seq(tail__$1);
var inst_54641 = cljs.core.first(inst_54640);
var inst_54642 = cljs.core.next(inst_54640);
var inst_54643 = inst_54639;
var inst_54644 = tail__$1;
var state_54674__$1 = (function (){var statearr_54691 = state_54674;
(statearr_54691[(13)] = inst_54641);

(statearr_54691[(12)] = inst_54643);

(statearr_54691[(10)] = inst_54644);

(statearr_54691[(14)] = inst_54642);

return statearr_54691;
})();
var statearr_54692_56532 = state_54674__$1;
(statearr_54692_56532[(2)] = null);

(statearr_54692_56532[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (14))){
var inst_54672 = (state_54674[(2)]);
var state_54674__$1 = state_54674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54674__$1,inst_54672);
} else {
if((state_val_54675 === (10))){
var inst_54661 = (state_54674[(2)]);
var state_54674__$1 = state_54674;
var statearr_54693_56535 = state_54674__$1;
(statearr_54693_56535[(2)] = inst_54661);

(statearr_54693_56535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54675 === (8))){
var inst_54650 = (state_54674[(9)]);
var inst_54643 = (state_54674[(12)]);
var inst_54653 = join_item(inst_54650,inst_54643);
var state_54674__$1 = state_54674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54674__$1,(11),inst_54653);
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
});})(out__$1,G__54538__$1,c__47946__auto___56495,ch__53519__auto__,res,out__$2,vec__54620,seq__54621,first__54622,seq__54621__$1,ent__$1,tail__$1,out,G__54538,vec__54539,seq__54540,first__54541,seq__54540__$1,ent,tail,map__54533,map__54533__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__54538__$1,switch__47663__auto__,c__47946__auto___56495,ch__53519__auto__,res,out__$2,vec__54620,seq__54621,first__54622,seq__54621__$1,ent__$1,tail__$1,out,G__54538,vec__54539,seq__54540,first__54541,seq__54540__$1,ent,tail,map__54533,map__54533__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____0 = (function (){
var statearr_54694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54694[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__);

(statearr_54694[(1)] = (1));

return statearr_54694;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____1 = (function (state_54674){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54674);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54695){if((e54695 instanceof Object)){
var ex__47667__auto__ = e54695;
var statearr_54696_56543 = state_54674;
(statearr_54696_56543[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56544 = state_54674;
state_54674 = G__56544;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__ = function(state_54674){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____1.call(this,state_54674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__;
})()
;})(out__$1,G__54538__$1,switch__47663__auto__,c__47946__auto___56495,ch__53519__auto__,res,out__$2,vec__54620,seq__54621,first__54622,seq__54621__$1,ent__$1,tail__$1,out,G__54538,vec__54539,seq__54540,first__54541,seq__54540__$1,ent,tail,map__54533,map__54533__$1,env,parallel_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_54697 = f__47947__auto__();
(statearr_54697[(6)] = c__47946__auto___56495);

return statearr_54697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(out__$1,G__54538__$1,c__47946__auto___56495,ch__53519__auto__,res,out__$2,vec__54620,seq__54621,first__54622,seq__54621__$1,ent__$1,tail__$1,out,G__54538,vec__54539,seq__54540,first__54541,seq__54540__$1,ent,tail,map__54533,map__54533__$1,env,parallel_QMARK_))
);


return ch__53519__auto__;
} else {
var G__56549 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__56550 = tail__$1;
out__$1 = G__56549;
G__54538__$1 = G__56550;
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
var G__54701 = m;
var vec__54702 = G__54701;
var seq__54703 = cljs.core.seq(vec__54702);
var first__54704 = cljs.core.first(seq__54703);
var seq__54703__$1 = cljs.core.next(seq__54703);
var pair = first__54704;
var tail = seq__54703__$1;
var out__$1 = out;
var G__54701__$1 = G__54701;
while(true){
var out__$2 = out__$1;
var vec__54792 = G__54701__$1;
var seq__54793 = cljs.core.seq(vec__54792);
var first__54794 = cljs.core.first(seq__54793);
var seq__54793__$1 = cljs.core.next(seq__54793);
var pair__$1 = first__54794;
var tail__$1 = seq__54793__$1;
if(cljs.core.truth_(pair__$1)){
var vec__54795 = pair__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54795,(0),null);
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54795,(1),null);
var res = join_item(k,ent);
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___56553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__54701__$1,c__47946__auto___56553,ch__53519__auto__,vec__54795,k,ent,res,out__$2,vec__54792,seq__54793,first__54794,seq__54793__$1,pair__$1,tail__$1,out,G__54701,vec__54702,seq__54703,first__54704,seq__54703__$1,pair,tail){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (out__$1,G__54701__$1,c__47946__auto___56553,ch__53519__auto__,vec__54795,k,ent,res,out__$2,vec__54792,seq__54793,first__54794,seq__54793__$1,pair__$1,tail__$1,out,G__54701,vec__54702,seq__54703,first__54704,seq__54703__$1,pair,tail){
return (function (state_54854){
var state_val_54855 = (state_54854[(1)]);
if((state_val_54855 === (7))){
var inst_54843 = (state_54854[(2)]);
var state_54854__$1 = state_54854;
var statearr_54856_56561 = state_54854__$1;
(statearr_54856_56561[(2)] = inst_54843);


cljs.core.async.impl.ioc_helpers.process_exception(state_54854__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (1))){
var state_54854__$1 = state_54854;
var statearr_54857_56562 = state_54854__$1;
(statearr_54857_56562[(2)] = null);

(statearr_54857_56562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54854,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54809 = [k];
var state_54854__$1 = (function (){var statearr_54858 = state_54854;
(statearr_54858[(7)] = inst_54809);

return statearr_54858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54854__$1,(5),res);
} else {
if((state_val_54855 === (13))){
var inst_54845 = (state_54854[(8)]);
var inst_54850 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_54845);
var state_54854__$1 = state_54854;
var statearr_54859_56569 = state_54854__$1;
(statearr_54859_56569[(2)] = inst_54850);

(statearr_54859_56569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (6))){
var inst_54819 = (state_54854[(9)]);
var inst_54825 = (state_54854[(10)]);
var inst_54824 = cljs.core.seq(inst_54819);
var inst_54825__$1 = cljs.core.first(inst_54824);
var inst_54826 = cljs.core.next(inst_54824);
var state_54854__$1 = (function (){var statearr_54860 = state_54854;
(statearr_54860[(10)] = inst_54825__$1);

(statearr_54860[(11)] = inst_54826);

return statearr_54860;
})();
if(cljs.core.truth_(inst_54825__$1)){
var statearr_54861_56573 = state_54854__$1;
(statearr_54861_56573[(1)] = (8));

} else {
var statearr_54862_56574 = state_54854__$1;
(statearr_54862_56574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (3))){
var inst_54798 = (state_54854[(2)]);
var state_54854__$1 = state_54854;
var statearr_54863_56575 = state_54854__$1;
(statearr_54863_56575[(2)] = inst_54798);


cljs.core.async.impl.ioc_helpers.process_exception(state_54854__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (12))){
var inst_54848 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_54854__$1 = state_54854;
var statearr_54864_56576 = state_54854__$1;
(statearr_54864_56576[(2)] = inst_54848);

(statearr_54864_56576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (2))){
var inst_54845 = (state_54854[(8)]);
var inst_54845__$1 = (state_54854[(2)]);
var inst_54846 = (inst_54845__$1 == null);
var state_54854__$1 = (function (){var statearr_54865 = state_54854;
(statearr_54865[(8)] = inst_54845__$1);

return statearr_54865;
})();
if(cljs.core.truth_(inst_54846)){
var statearr_54866_56577 = state_54854__$1;
(statearr_54866_56577[(1)] = (12));

} else {
var statearr_54867_56578 = state_54854__$1;
(statearr_54867_56578[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (11))){
var inst_54831 = (state_54854[(12)]);
var inst_54818 = (state_54854[(13)]);
var inst_54826 = (state_54854[(11)]);
var inst_54835 = (state_54854[(2)]);
var inst_54836 = com.wsscode.async.async_cljs.throw_err(inst_54835);
var inst_54837 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54818,inst_54831,inst_54836);
var inst_54818__$1 = inst_54837;
var inst_54819 = inst_54826;
var state_54854__$1 = (function (){var statearr_54868 = state_54854;
(statearr_54868[(13)] = inst_54818__$1);

(statearr_54868[(9)] = inst_54819);

return statearr_54868;
})();
var statearr_54869_56579 = state_54854__$1;
(statearr_54869_56579[(2)] = null);

(statearr_54869_56579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (9))){
var inst_54818 = (state_54854[(13)]);
var state_54854__$1 = state_54854;
var statearr_54870_56582 = state_54854__$1;
(statearr_54870_56582[(2)] = inst_54818);

(statearr_54870_56582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (5))){
var inst_54809 = (state_54854[(7)]);
var inst_54811 = (state_54854[(2)]);
var inst_54812 = com.wsscode.async.async_cljs.throw_err(inst_54811);
var inst_54813 = [inst_54812];
var inst_54814 = cljs.core.PersistentHashMap.fromArrays(inst_54809,inst_54813);
var inst_54815 = cljs.core.seq(tail__$1);
var inst_54816 = cljs.core.first(inst_54815);
var inst_54817 = cljs.core.next(inst_54815);
var inst_54818 = inst_54814;
var inst_54819 = tail__$1;
var state_54854__$1 = (function (){var statearr_54871 = state_54854;
(statearr_54871[(14)] = inst_54817);

(statearr_54871[(13)] = inst_54818);

(statearr_54871[(15)] = inst_54816);

(statearr_54871[(9)] = inst_54819);

return statearr_54871;
})();
var statearr_54872_56591 = state_54854__$1;
(statearr_54872_56591[(2)] = null);

(statearr_54872_56591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (14))){
var inst_54852 = (state_54854[(2)]);
var state_54854__$1 = state_54854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54854__$1,inst_54852);
} else {
if((state_val_54855 === (10))){
var inst_54841 = (state_54854[(2)]);
var state_54854__$1 = state_54854;
var statearr_54873_56594 = state_54854__$1;
(statearr_54873_56594[(2)] = inst_54841);

(statearr_54873_56594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54855 === (8))){
var inst_54831 = (state_54854[(12)]);
var inst_54825 = (state_54854[(10)]);
var inst_54831__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54825,(0),null);
var inst_54832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54825,(1),null);
var inst_54833 = join_item(inst_54831__$1,inst_54832);
var state_54854__$1 = (function (){var statearr_54874 = state_54854;
(statearr_54874[(12)] = inst_54831__$1);

return statearr_54874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54854__$1,(11),inst_54833);
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
});})(out__$1,G__54701__$1,c__47946__auto___56553,ch__53519__auto__,vec__54795,k,ent,res,out__$2,vec__54792,seq__54793,first__54794,seq__54793__$1,pair__$1,tail__$1,out,G__54701,vec__54702,seq__54703,first__54704,seq__54703__$1,pair,tail))
;
return ((function (out__$1,G__54701__$1,switch__47663__auto__,c__47946__auto___56553,ch__53519__auto__,vec__54795,k,ent,res,out__$2,vec__54792,seq__54793,first__54794,seq__54793__$1,pair__$1,tail__$1,out,G__54701,vec__54702,seq__54703,first__54704,seq__54703__$1,pair,tail){
return (function() {
var com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____0 = (function (){
var statearr_54875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54875[(0)] = com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__);

(statearr_54875[(1)] = (1));

return statearr_54875;
});
var com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____1 = (function (state_54854){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54854);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54876){if((e54876 instanceof Object)){
var ex__47667__auto__ = e54876;
var statearr_54877_56599 = state_54854;
(statearr_54877_56599[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56601 = state_54854;
state_54854 = G__56601;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__ = function(state_54854){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____1.call(this,state_54854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__;
})()
;})(out__$1,G__54701__$1,switch__47663__auto__,c__47946__auto___56553,ch__53519__auto__,vec__54795,k,ent,res,out__$2,vec__54792,seq__54793,first__54794,seq__54793__$1,pair__$1,tail__$1,out,G__54701,vec__54702,seq__54703,first__54704,seq__54703__$1,pair,tail))
})();
var state__47948__auto__ = (function (){var statearr_54878 = f__47947__auto__();
(statearr_54878[(6)] = c__47946__auto___56553);

return statearr_54878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(out__$1,G__54701__$1,c__47946__auto___56553,ch__53519__auto__,vec__54795,k,ent,res,out__$2,vec__54792,seq__54793,first__54794,seq__54793__$1,pair__$1,tail__$1,out,G__54701,vec__54702,seq__54703,first__54704,seq__54703__$1,pair,tail))
);


return ch__53519__auto__;
} else {
var G__56602 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out__$2,k,res);
var G__56603 = tail__$1;
out__$1 = G__56602;
G__54701__$1 = G__56603;
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
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__54879){
var map__54880 = p__54879;
var map__54880__$1 = (((((!((map__54880 == null))))?(((((map__54880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54880):map__54880);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54880__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__54882 = ast;
if((G__54882 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__54882);
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
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__54883){
var map__54884 = p__54883;
var map__54884__$1 = (((((!((map__54884 == null))))?(((((map__54884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54884):map__54884);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54884__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__54886 = ast;
if((G__54886 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__54886);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__54888,elision_set){
var map__54889 = p__54888;
var map__54889__$1 = (((((!((map__54889 == null))))?(((((map__54889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54889):map__54889);
var ast = map__54889__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54889__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54889__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__54889,map__54889__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__54889,map__54889__$1,ast,key,union_key){
return (function (p1__54887_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__54887_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__54887_SHARP_,elision_set));
});})(union_elision_QMARK_,map__54889,map__54889__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__54889,map__54889__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__54891){
var map__54892 = p__54891;
var map__54892__$1 = (((((!((map__54892 == null))))?(((((map__54892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54892):map__54892);
var env = map__54892__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54892__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__54894 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54894,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__54894;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__54897){
var map__54898 = p__54897;
var map__54898__$1 = (((((!((map__54898 == null))))?(((((map__54898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54898):map__54898);
var item_b = map__54898__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54898__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54898__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54898__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__54898,map__54898__$1,item_b,key,type,params){
return (function (p1__54896_SHARP_,p2__54895_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__54895_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54896_SHARP_,p2__54895_SHARP_], null);
} else {
return null;
}
});})(map__54898,map__54898__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__54900 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54900,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54900,(1),null);
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
var G__54903 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__54903 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__54903);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__54905 = x;
var G__54905__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54905,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__54905);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__54905__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__54905,G__54905__$1){
return (function (p1__54904_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__54905,G__54905__$1){
return (function (p__54906){
var vec__54907 = p__54906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54907,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54907,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__54905,G__54905__$1))
),p1__54904_SHARP_);
});})(G__54905,G__54905__$1))
);
} else {
return G__54905__$1;
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
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__54910){
var map__54911 = p__54910;
var map__54911__$1 = (((((!((map__54911 == null))))?(((((map__54911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54911):map__54911);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54911__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__54913){
var map__54914 = p__54913;
var map__54914__$1 = (((((!((map__54914 == null))))?(((((map__54914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54914):map__54914);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54914__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__54916){
var map__54917 = p__54916;
var map__54917__$1 = (((((!((map__54917 == null))))?(((((map__54917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54917):map__54917);
var env = map__54917__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54917__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
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
var map__54920 = cljs.core.group_by(((function (children,temp__5718__auto__){
return (function (p1__54919_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54919_SHARP_))) && (com.wsscode.pathom.core.placeholder_key_QMARK_(env,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__54919_SHARP_))));
});})(children,temp__5718__auto__))
,children);
var map__54920__$1 = (((((!((map__54920 == null))))?(((((map__54920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54920):map__54920);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54920__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54920__$1,false);
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
com.wsscode.pathom.core.join_children_QMARK_ = (function com$wsscode$pathom$core$join_children_QMARK_(p__54922,v){
var map__54923 = p__54922;
var map__54923__$1 = (((((!((map__54923 == null))))?(((((map__54923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54923):map__54923);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54923__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__54925){
var map__54926 = p__54925;
var map__54926__$1 = (((((!((map__54926 == null))))?(((((map__54926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54926):map__54926);
var env = map__54926__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54926__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__54928){
var map__54929 = p__54928;
var map__54929__$1 = (((((!((map__54929 == null))))?(((((map__54929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54929):map__54929);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54929__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54929__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__54929,map__54929__$1,map_key_transform,map_value_transform){
return (function (p__54931){
var map__54932 = p__54931;
var map__54932__$1 = (((((!((map__54932 == null))))?(((((map__54932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54932):map__54932);
var env = map__54932__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54932__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__54934 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__54934) : map_key_transform.call(null,G__54934));
} else {
return G__54934;
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
var G__54935 = v;
if(cljs.core.truth_(map_value_transform)){
var G__54936 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__54937 = G__54935;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__54936,G__54937) : map_value_transform.call(null,G__54936,G__54937));
} else {
return G__54935;
}
}

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__54929,map__54929__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__54938){
var map__54939 = p__54938;
var map__54939__$1 = (((((!((map__54939 == null))))?(((((map__54939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54939):map__54939);
var env = map__54939__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54939__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54939__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__54939,map__54939__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__54939,map__54939__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54939__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__54941 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__54941) : js_key_transform.call(null,G__54941));
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
var G__54942 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__54943 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__54942,G__54943) : js_value_transform.call(null,G__54942,G__54943));
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
var map__54944 = (function (){var G__54945 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54945) : f.call(null,G__54945));
})();
var map__54944__$1 = (((((!((map__54944 == null))))?(((((map__54944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54944):map__54944);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54944__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54944__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
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
var res__53554__auto__ = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,tx) : parser.call(null,env,tx));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__){
return (function (state_54958){
var state_val_54959 = (state_54958[(1)]);
if((state_val_54959 === (1))){
var state_54958__$1 = state_54958;
var statearr_54960_56649 = state_54958__$1;
(statearr_54960_56649[(2)] = null);

(statearr_54960_56649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (2))){
var inst_54956 = (state_54958[(2)]);
var state_54958__$1 = state_54958;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54958__$1,inst_54956);
} else {
if((state_val_54959 === (3))){
var inst_54947 = (state_54958[(2)]);
var state_54958__$1 = state_54958;
var statearr_54961_56650 = state_54958__$1;
(statearr_54961_56650[(2)] = inst_54947);


cljs.core.async.impl.ioc_helpers.process_exception(state_54958__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54959 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54958,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_54958__$1 = state_54958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54958__$1,(5),res__53554__auto__);
} else {
if((state_val_54959 === (5))){
var inst_54952 = (state_54958[(2)]);
var inst_54953 = com.wsscode.async.async_cljs.throw_err(inst_54952);
var inst_54954 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54953) : f.call(null,inst_54953));
var state_54958__$1 = state_54958;
var statearr_54962_56651 = state_54958__$1;
(statearr_54962_56651[(2)] = inst_54954);


cljs.core.async.impl.ioc_helpers.process_exception(state_54958__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__){
return (function() {
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_54963 = [null,null,null,null,null,null,null];
(statearr_54963[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__);

(statearr_54963[(1)] = (1));

return statearr_54963;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____1 = (function (state_54958){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54958);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54964){if((e54964 instanceof Object)){
var ex__47667__auto__ = e54964;
var statearr_54965_56652 = state_54958;
(statearr_54965_56652[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56653 = state_54958;
state_54958 = G__56653;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__ = function(state_54958){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____1.call(this,state_54958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_54966 = f__47947__auto__();
(statearr_54966[(6)] = c__47946__auto__);

return statearr_54966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
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
var G__54967 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54967)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__54967;
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
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__54968,e){
var map__54969 = p__54968;
var map__54969__$1 = (((((!((map__54969 == null))))?(((((map__54969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54969):map__54969);
var env = map__54969__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54969__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__54971,e){
var map__54972 = p__54971;
var map__54972__$1 = (((((!((map__54972 == null))))?(((((map__54972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54972):map__54972);
var env = map__54972__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54972__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54972__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__54974){
var map__54975 = p__54974;
var map__54975__$1 = (((((!((map__54975 == null))))?(((((map__54975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54975):map__54975);
var env = map__54975__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54975__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.async.async_cljs.chan_QMARK_(x)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,x,map__54975,map__54975__$1,env,fail_fast_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,x,map__54975,map__54975__$1,env,fail_fast_QMARK_){
return (function (state_54989){
var state_val_54990 = (state_54989[(1)]);
if((state_val_54990 === (1))){
var state_54989__$1 = state_54989;
var statearr_54991_56657 = state_54989__$1;
(statearr_54991_56657[(2)] = null);

(statearr_54991_56657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54990 === (2))){
var inst_54987 = (state_54989[(2)]);
var state_54989__$1 = state_54989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54989__$1,inst_54987);
} else {
if((state_val_54990 === (3))){
var inst_54978 = (state_54989[(2)]);
var inst_54979 = com.wsscode.pathom.core.add_error(env,inst_54978);
var state_54989__$1 = state_54989;
var statearr_54992_56658 = state_54989__$1;
(statearr_54992_56658[(2)] = inst_54979);


cljs.core.async.impl.ioc_helpers.process_exception(state_54989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54990 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54989,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_54989__$1 = state_54989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54989__$1,(5),x);
} else {
if((state_val_54990 === (5))){
var inst_54984 = (state_54989[(2)]);
var inst_54985 = com.wsscode.async.async_cljs.throw_err(inst_54984);
var state_54989__$1 = state_54989;
var statearr_54993_56659 = state_54989__$1;
(statearr_54993_56659[(2)] = inst_54985);


cljs.core.async.impl.ioc_helpers.process_exception(state_54989__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,x,map__54975,map__54975__$1,env,fail_fast_QMARK_))
;
return ((function (switch__47663__auto__,c__47946__auto__,x,map__54975,map__54975__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_54994 = [null,null,null,null,null,null,null];
(statearr_54994[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__);

(statearr_54994[(1)] = (1));

return statearr_54994;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____1 = (function (state_54989){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_54989);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e54995){if((e54995 instanceof Object)){
var ex__47667__auto__ = e54995;
var statearr_54996_56661 = state_54989;
(statearr_54996_56661[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56662 = state_54989;
state_54989 = G__56662;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__ = function(state_54989){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____1.call(this,state_54989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,x,map__54975,map__54975__$1,env,fail_fast_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_54997 = f__47947__auto__();
(statearr_54997[(6)] = c__47946__auto__);

return statearr_54997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,x,map__54975,map__54975__$1,env,fail_fast_QMARK_))
);

return c__47946__auto__;
} else {
return x;
}
}catch (e54977){var e = e54977;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__54998,k,p){
var map__54999 = p__54998;
var map__54999__$1 = (((((!((map__54999 == null))))?(((((map__54999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54999):map__54999);
var env = map__54999__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_){
return (function (state_55022){
var state_val_55023 = (state_55022[(1)]);
if((state_val_55023 === (1))){
var state_55022__$1 = state_55022;
var statearr_55024_56665 = state_55022__$1;
(statearr_55024_56665[(2)] = null);

(statearr_55024_56665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55023 === (2))){
var inst_55020 = (state_55022[(2)]);
var state_55022__$1 = state_55022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55022__$1,inst_55020);
} else {
if((state_val_55023 === (3))){
var inst_55003 = (state_55022[(2)]);
var state_55022__$1 = (function (){var statearr_55025 = state_55022;
(statearr_55025[(7)] = inst_55003);

return statearr_55025;
})();
if(cljs.core.truth_(process_error)){
var statearr_55026_56666 = state_55022__$1;
(statearr_55026_56666[(1)] = (4));

} else {
var statearr_55027_56667 = state_55022__$1;
(statearr_55027_56667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55023 === (4))){
var inst_55003 = (state_55022[(7)]);
var inst_55005 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_55003) : process_error.call(null,env,inst_55003));
var state_55022__$1 = state_55022;
var statearr_55028_56672 = state_55022__$1;
(statearr_55028_56672[(2)] = inst_55005);

(statearr_55028_56672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55023 === (5))){
var inst_55003 = (state_55022[(7)]);
var inst_55007 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_55008 = com.wsscode.pathom.core.error_str(inst_55003);
var inst_55009 = [inst_55008];
var inst_55010 = cljs.core.PersistentHashMap.fromArrays(inst_55007,inst_55009);
var state_55022__$1 = state_55022;
var statearr_55029_56673 = state_55022__$1;
(statearr_55029_56673[(2)] = inst_55010);

(statearr_55029_56673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55023 === (6))){
var inst_55012 = (state_55022[(2)]);
var state_55022__$1 = state_55022;
var statearr_55030_56674 = state_55022__$1;
(statearr_55030_56674[(2)] = inst_55012);


cljs.core.async.impl.ioc_helpers.process_exception(state_55022__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55023 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55022,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_55022__$1 = state_55022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55022__$1,(8),res);
} else {
if((state_val_55023 === (8))){
var inst_55017 = (state_55022[(2)]);
var inst_55018 = com.wsscode.async.async_cljs.throw_err(inst_55017);
var state_55022__$1 = state_55022;
var statearr_55031_56676 = state_55022__$1;
(statearr_55031_56676[(2)] = inst_55018);


cljs.core.async.impl.ioc_helpers.process_exception(state_55022__$1);

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
});})(c__47946__auto__,res,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__47663__auto__,c__47946__auto__,res,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_55032 = [null,null,null,null,null,null,null,null];
(statearr_55032[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__);

(statearr_55032[(1)] = (1));

return statearr_55032;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____1 = (function (state_55022){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55022);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55033){if((e55033 instanceof Object)){
var ex__47667__auto__ = e55033;
var statearr_55034_56677 = state_55022;
(statearr_55034_56677[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56679 = state_55022;
state_55022 = G__56679;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__ = function(state_55022){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____1.call(this,state_55022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_55035 = f__47947__auto__();
(statearr_55035[(6)] = c__47946__auto__);

return statearr_55035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_))
);

return c__47946__auto__;
} else {
return res;
}
}catch (e55002){var e = e55002;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_))
});})(map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e55001){var e = e55001;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__54999,map__54999__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__53554__auto__ = (function (){var G__55036 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__55037 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55036,G__55037) : parser.call(null,G__55036,G__55037));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,errors){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,errors){
return (function (state_55057){
var state_val_55058 = (state_55057[(1)]);
if((state_val_55058 === (1))){
var state_55057__$1 = state_55057;
var statearr_55059_56681 = state_55057__$1;
(statearr_55059_56681[(2)] = null);

(statearr_55059_56681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (2))){
var inst_55055 = (state_55057[(2)]);
var state_55057__$1 = state_55057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55057__$1,inst_55055);
} else {
if((state_val_55058 === (3))){
var inst_55038 = (state_55057[(2)]);
var state_55057__$1 = state_55057;
var statearr_55060_56682 = state_55057__$1;
(statearr_55060_56682[(2)] = inst_55038);


cljs.core.async.impl.ioc_helpers.process_exception(state_55057__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55057,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_55057__$1 = state_55057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55057__$1,(5),res__53554__auto__);
} else {
if((state_val_55058 === (5))){
var inst_55043 = (state_55057[(2)]);
var inst_55044 = com.wsscode.async.async_cljs.throw_err(inst_55043);
var inst_55046 = cljs.core.deref(errors);
var inst_55047 = cljs.core.seq(inst_55046);
var state_55057__$1 = (function (){var statearr_55061 = state_55057;
(statearr_55061[(7)] = inst_55044);

return statearr_55061;
})();
if(inst_55047){
var statearr_55062_56683 = state_55057__$1;
(statearr_55062_56683[(1)] = (6));

} else {
var statearr_55063_56684 = state_55057__$1;
(statearr_55063_56684[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (6))){
var inst_55044 = (state_55057[(7)]);
var inst_55049 = cljs.core.deref(errors);
var inst_55050 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55044,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_55049);
var state_55057__$1 = state_55057;
var statearr_55064_56685 = state_55057__$1;
(statearr_55064_56685[(2)] = inst_55050);

(statearr_55064_56685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (7))){
var inst_55044 = (state_55057[(7)]);
var state_55057__$1 = state_55057;
var statearr_55065_56686 = state_55057__$1;
(statearr_55065_56686[(2)] = inst_55044);

(statearr_55065_56686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55058 === (8))){
var inst_55053 = (state_55057[(2)]);
var state_55057__$1 = state_55057;
var statearr_55066_56687 = state_55057__$1;
(statearr_55066_56687[(2)] = inst_55053);


cljs.core.async.impl.ioc_helpers.process_exception(state_55057__$1);

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
});})(c__47946__auto__,res__53554__auto__,errors))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,errors){
return (function() {
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_55067 = [null,null,null,null,null,null,null,null];
(statearr_55067[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__);

(statearr_55067[(1)] = (1));

return statearr_55067;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____1 = (function (state_55057){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55057);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55068){if((e55068 instanceof Object)){
var ex__47667__auto__ = e55068;
var statearr_55069_56688 = state_55057;
(statearr_55069_56688[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56689 = state_55057;
state_55057 = G__56689;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__ = function(state_55057){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____1.call(this,state_55057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,errors))
})();
var state__47948__auto__ = (function (){var statearr_55070 = f__47947__auto__();
(statearr_55070[(6)] = c__47946__auto__);

return statearr_55070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,errors))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
var G__55071 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55071,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__55071;
}
}
});
});
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
var G__56691 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__56691;
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
 */
com.wsscode.pathom.core.raise_errors = (function com$wsscode$pathom$core$raise_errors(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__55072){
var vec__55073 = p__55072;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55073,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55073,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__55076){
var vec__55077 = p__55076;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55077,(1),null);
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
var G__55080 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__55081 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55080,G__55081) : parser.call(null,G__55080,G__55081));
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
var G__55082 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__55083 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55082,G__55083) : parser.call(null,G__55082,G__55083));
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
var vec__55084 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55084,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55084,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.async.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__53554__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e55087){var e = e55087;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_55099){
var state_val_55100 = (state_55099[(1)]);
if((state_val_55100 === (1))){
var state_55099__$1 = state_55099;
var statearr_55101_56702 = state_55099__$1;
(statearr_55101_56702[(2)] = null);

(statearr_55101_56702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55100 === (2))){
var inst_55097 = (state_55099[(2)]);
var state_55099__$1 = state_55099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55099__$1,inst_55097);
} else {
if((state_val_55100 === (3))){
var inst_55088 = (state_55099[(2)]);
var state_55099__$1 = state_55099;
var statearr_55102_56705 = state_55099__$1;
(statearr_55102_56705[(2)] = inst_55088);


cljs.core.async.impl.ioc_helpers.process_exception(state_55099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55100 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55099,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_55099__$1 = state_55099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55099__$1,(5),res__53554__auto__);
} else {
if((state_val_55100 === (5))){
var inst_55093 = (state_55099[(2)]);
var inst_55094 = com.wsscode.async.async_cljs.throw_err(inst_55093);
var inst_55095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_55094);
var state_55099__$1 = (function (){var statearr_55103 = state_55099;
(statearr_55103[(7)] = inst_55095);

return statearr_55103;
})();
var statearr_55104_56710 = state_55099__$1;
(statearr_55104_56710[(2)] = inst_55094);


cljs.core.async.impl.ioc_helpers.process_exception(state_55099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_55105 = [null,null,null,null,null,null,null,null];
(statearr_55105[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__);

(statearr_55105[(1)] = (1));

return statearr_55105;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____1 = (function (state_55099){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55099);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55106){if((e55106 instanceof Object)){
var ex__47667__auto__ = e55106;
var statearr_55107_56713 = state_55099;
(statearr_55107_56713[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55106;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56716 = state_55099;
state_55099 = G__56716;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__ = function(state_55099){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____1.call(this,state_55099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__47948__auto__ = (function (){var statearr_55108 = f__47947__auto__();
(statearr_55108[(6)] = c__47946__auto__);

return statearr_55108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
);

return c__47946__auto__;
} else {
var hit = res__53554__auto__;
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

var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___56724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___56724,ch__53519__auto__,cache,temp__5718__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___56724,ch__53519__auto__,cache,temp__5718__auto__){
return (function (state_55131){
var state_val_55132 = (state_55131[(1)]);
if((state_val_55132 === (7))){
var inst_55120 = (state_55131[(2)]);
var state_55131__$1 = state_55131;
var statearr_55133_56726 = state_55131__$1;
(statearr_55133_56726[(2)] = inst_55120);


cljs.core.async.impl.ioc_helpers.process_exception(state_55131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (1))){
var state_55131__$1 = state_55131;
var statearr_55134_56727 = state_55131__$1;
(statearr_55134_56727[(2)] = null);

(statearr_55134_56727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (4))){
var inst_55113 = (state_55131[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55131,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_55113__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_55114 = com.wsscode.async.async_cljs.chan_QMARK_(inst_55113__$1);
var state_55131__$1 = (function (){var statearr_55135 = state_55131;
(statearr_55135[(7)] = inst_55113__$1);

return statearr_55135;
})();
if(inst_55114){
var statearr_55136_56730 = state_55131__$1;
(statearr_55136_56730[(1)] = (5));

} else {
var statearr_55137_56731 = state_55131__$1;
(statearr_55137_56731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (6))){
var inst_55113 = (state_55131[(7)]);
var state_55131__$1 = state_55131;
var statearr_55138_56732 = state_55131__$1;
(statearr_55138_56732[(2)] = inst_55113);

(statearr_55138_56732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (3))){
var inst_55109 = (state_55131[(2)]);
var state_55131__$1 = state_55131;
var statearr_55139_56734 = state_55131__$1;
(statearr_55139_56734[(2)] = inst_55109);


cljs.core.async.impl.ioc_helpers.process_exception(state_55131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (2))){
var inst_55122 = (state_55131[(8)]);
var inst_55122__$1 = (state_55131[(2)]);
var inst_55123 = (inst_55122__$1 == null);
var state_55131__$1 = (function (){var statearr_55140 = state_55131;
(statearr_55140[(8)] = inst_55122__$1);

return statearr_55140;
})();
if(cljs.core.truth_(inst_55123)){
var statearr_55141_56737 = state_55131__$1;
(statearr_55141_56737[(1)] = (9));

} else {
var statearr_55142_56738 = state_55131__$1;
(statearr_55142_56738[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (11))){
var inst_55129 = (state_55131[(2)]);
var state_55131__$1 = state_55131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55131__$1,inst_55129);
} else {
if((state_val_55132 === (9))){
var inst_55125 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_55131__$1 = state_55131;
var statearr_55143_56739 = state_55131__$1;
(statearr_55143_56739[(2)] = inst_55125);

(statearr_55143_56739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (5))){
var inst_55113 = (state_55131[(7)]);
var state_55131__$1 = state_55131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55131__$1,(8),inst_55113);
} else {
if((state_val_55132 === (10))){
var inst_55122 = (state_55131[(8)]);
var inst_55127 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_55122);
var state_55131__$1 = state_55131;
var statearr_55144_56740 = state_55131__$1;
(statearr_55144_56740[(2)] = inst_55127);

(statearr_55144_56740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55132 === (8))){
var inst_55117 = (state_55131[(2)]);
var state_55131__$1 = state_55131;
var statearr_55145_56741 = state_55131__$1;
(statearr_55145_56741[(2)] = inst_55117);

(statearr_55145_56741[(1)] = (7));


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
});})(c__47946__auto___56724,ch__53519__auto__,cache,temp__5718__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto___56724,ch__53519__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_55146 = [null,null,null,null,null,null,null,null,null];
(statearr_55146[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__);

(statearr_55146[(1)] = (1));

return statearr_55146;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1 = (function (state_55131){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55131);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55147){if((e55147 instanceof Object)){
var ex__47667__auto__ = e55147;
var statearr_55148_56746 = state_55131;
(statearr_55148_56746[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55147;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56749 = state_55131;
state_55131 = G__56749;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = function(state_55131){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1.call(this,state_55131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___56724,ch__53519__auto__,cache,temp__5718__auto__))
})();
var state__47948__auto__ = (function (){var statearr_55149 = f__47947__auto__();
(statearr_55149[(6)] = c__47946__auto___56724);

return statearr_55149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___56724,ch__53519__auto__,cache,temp__5718__auto__))
);


return ch__53519__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___56752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___56752,ch__53519__auto__,temp__5718__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___56752,ch__53519__auto__,temp__5718__auto__){
return (function (state_55172){
var state_val_55173 = (state_55172[(1)]);
if((state_val_55173 === (7))){
var inst_55161 = (state_55172[(2)]);
var state_55172__$1 = state_55172;
var statearr_55174_56756 = state_55172__$1;
(statearr_55174_56756[(2)] = inst_55161);


cljs.core.async.impl.ioc_helpers.process_exception(state_55172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (1))){
var state_55172__$1 = state_55172;
var statearr_55175_56757 = state_55172__$1;
(statearr_55175_56757[(2)] = null);

(statearr_55175_56757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (4))){
var inst_55154 = (state_55172[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55172,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_55154__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_55155 = com.wsscode.async.async_cljs.chan_QMARK_(inst_55154__$1);
var state_55172__$1 = (function (){var statearr_55176 = state_55172;
(statearr_55176[(7)] = inst_55154__$1);

return statearr_55176;
})();
if(inst_55155){
var statearr_55177_56762 = state_55172__$1;
(statearr_55177_56762[(1)] = (5));

} else {
var statearr_55178_56763 = state_55172__$1;
(statearr_55178_56763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (6))){
var inst_55154 = (state_55172[(7)]);
var state_55172__$1 = state_55172;
var statearr_55179_56764 = state_55172__$1;
(statearr_55179_56764[(2)] = inst_55154);

(statearr_55179_56764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (3))){
var inst_55150 = (state_55172[(2)]);
var state_55172__$1 = state_55172;
var statearr_55180_56765 = state_55172__$1;
(statearr_55180_56765[(2)] = inst_55150);


cljs.core.async.impl.ioc_helpers.process_exception(state_55172__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (2))){
var inst_55163 = (state_55172[(8)]);
var inst_55163__$1 = (state_55172[(2)]);
var inst_55164 = (inst_55163__$1 == null);
var state_55172__$1 = (function (){var statearr_55181 = state_55172;
(statearr_55181[(8)] = inst_55163__$1);

return statearr_55181;
})();
if(cljs.core.truth_(inst_55164)){
var statearr_55182_56769 = state_55172__$1;
(statearr_55182_56769[(1)] = (9));

} else {
var statearr_55183_56770 = state_55172__$1;
(statearr_55183_56770[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (11))){
var inst_55170 = (state_55172[(2)]);
var state_55172__$1 = state_55172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55172__$1,inst_55170);
} else {
if((state_val_55173 === (9))){
var inst_55166 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_55172__$1 = state_55172;
var statearr_55184_56772 = state_55172__$1;
(statearr_55184_56772[(2)] = inst_55166);

(statearr_55184_56772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (5))){
var inst_55154 = (state_55172[(7)]);
var state_55172__$1 = state_55172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55172__$1,(8),inst_55154);
} else {
if((state_val_55173 === (10))){
var inst_55163 = (state_55172[(8)]);
var inst_55168 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_55163);
var state_55172__$1 = state_55172;
var statearr_55185_56776 = state_55172__$1;
(statearr_55185_56776[(2)] = inst_55168);

(statearr_55185_56776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55173 === (8))){
var inst_55158 = (state_55172[(2)]);
var state_55172__$1 = state_55172;
var statearr_55186_56778 = state_55172__$1;
(statearr_55186_56778[(2)] = inst_55158);

(statearr_55186_56778[(1)] = (7));


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
});})(c__47946__auto___56752,ch__53519__auto__,temp__5718__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto___56752,ch__53519__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_55187 = [null,null,null,null,null,null,null,null,null];
(statearr_55187[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__);

(statearr_55187[(1)] = (1));

return statearr_55187;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1 = (function (state_55172){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55172);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55188){if((e55188 instanceof Object)){
var ex__47667__auto__ = e55188;
var statearr_55189_56779 = state_55172;
(statearr_55189_56779[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56780 = state_55172;
state_55172 = G__56780;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = function(state_55172){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1.call(this,state_55172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___56752,ch__53519__auto__,temp__5718__auto__))
})();
var state__47948__auto__ = (function (){var statearr_55190 = f__47947__auto__();
(statearr_55190[(6)] = c__47946__auto___56752);

return statearr_55190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___56752,ch__53519__auto__,temp__5718__auto__))
);


return ch__53519__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__55191,key,f){
var map__55192 = p__55191;
var map__55192__$1 = (((((!((map__55192 == null))))?(((((map__55192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55192):map__55192);
var env = map__55192__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55192__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55192__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___56794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___56794,ch__53519__auto__,out,map__55192,map__55192__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___56794,ch__53519__auto__,out,map__55192,map__55192__$1,env,async_request_cache_ch,request_cache){
return (function (state_55212){
var state_val_55213 = (state_55212[(1)]);
if((state_val_55213 === (7))){
var inst_55206 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_55212__$1 = state_55212;
var statearr_55214_56796 = state_55212__$1;
(statearr_55214_56796[(2)] = inst_55206);

(statearr_55214_56796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55213 === (1))){
var state_55212__$1 = state_55212;
var statearr_55215_56798 = state_55212__$1;
(statearr_55215_56798[(2)] = null);

(statearr_55215_56798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55213 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55212,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_55212__$1 = state_55212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55212__$1,(6),out);
} else {
if((state_val_55213 === (6))){
var inst_55199 = (state_55212[(2)]);
var state_55212__$1 = state_55212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55212__$1,(5),inst_55199);
} else {
if((state_val_55213 === (3))){
var inst_55194 = (state_55212[(2)]);
var state_55212__$1 = state_55212;
var statearr_55216_56800 = state_55212__$1;
(statearr_55216_56800[(2)] = inst_55194);


cljs.core.async.impl.ioc_helpers.process_exception(state_55212__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55213 === (2))){
var inst_55203 = (state_55212[(7)]);
var inst_55203__$1 = (state_55212[(2)]);
var inst_55204 = (inst_55203__$1 == null);
var state_55212__$1 = (function (){var statearr_55217 = state_55212;
(statearr_55217[(7)] = inst_55203__$1);

return statearr_55217;
})();
if(cljs.core.truth_(inst_55204)){
var statearr_55218_56801 = state_55212__$1;
(statearr_55218_56801[(1)] = (7));

} else {
var statearr_55219_56802 = state_55212__$1;
(statearr_55219_56802[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55213 === (9))){
var inst_55210 = (state_55212[(2)]);
var state_55212__$1 = state_55212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55212__$1,inst_55210);
} else {
if((state_val_55213 === (5))){
var inst_55201 = (state_55212[(2)]);
var state_55212__$1 = state_55212;
var statearr_55220_56803 = state_55212__$1;
(statearr_55220_56803[(2)] = inst_55201);


cljs.core.async.impl.ioc_helpers.process_exception(state_55212__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55213 === (8))){
var inst_55203 = (state_55212[(7)]);
var inst_55208 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_55203);
var state_55212__$1 = state_55212;
var statearr_55221_56804 = state_55212__$1;
(statearr_55221_56804[(2)] = inst_55208);

(statearr_55221_56804[(1)] = (9));


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
});})(c__47946__auto___56794,ch__53519__auto__,out,map__55192,map__55192__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__47663__auto__,c__47946__auto___56794,ch__53519__auto__,out,map__55192,map__55192__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____0 = (function (){
var statearr_55222 = [null,null,null,null,null,null,null,null];
(statearr_55222[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__);

(statearr_55222[(1)] = (1));

return statearr_55222;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____1 = (function (state_55212){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55212);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55223){if((e55223 instanceof Object)){
var ex__47667__auto__ = e55223;
var statearr_55224_56806 = state_55212;
(statearr_55224_56806[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56807 = state_55212;
state_55212 = G__56807;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__ = function(state_55212){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____1.call(this,state_55212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___56794,ch__53519__auto__,out,map__55192,map__55192__$1,env,async_request_cache_ch,request_cache))
})();
var state__47948__auto__ = (function (){var statearr_55225 = f__47947__auto__();
(statearr_55225[(6)] = c__47946__auto___56794);

return statearr_55225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___56794,ch__53519__auto__,out,map__55192,map__55192__$1,env,async_request_cache_ch,request_cache))
);


return ch__53519__auto__;
}
} else {
return com.wsscode.pathom.core.cached_async_STAR_(env,key,f);
}
});
com.wsscode.pathom.core.request_cache_async_loop = (function com$wsscode$pathom$core$request_cache_async_loop(ch){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_55247){
var state_val_55248 = (state_55247[(1)]);
if((state_val_55248 === (1))){
var state_55247__$1 = state_55247;
var statearr_55249_56809 = state_55247__$1;
(statearr_55249_56809[(2)] = null);

(statearr_55249_56809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55248 === (2))){
var state_55247__$1 = state_55247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55247__$1,(4),ch);
} else {
if((state_val_55248 === (3))){
var inst_55245 = (state_55247[(2)]);
var state_55247__$1 = state_55247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55247__$1,inst_55245);
} else {
if((state_val_55248 === (4))){
var inst_55228 = (state_55247[(7)]);
var inst_55228__$1 = (state_55247[(2)]);
var state_55247__$1 = (function (){var statearr_55250 = state_55247;
(statearr_55250[(7)] = inst_55228__$1);

return statearr_55250;
})();
if(cljs.core.truth_(inst_55228__$1)){
var statearr_55251_56810 = state_55247__$1;
(statearr_55251_56810[(1)] = (5));

} else {
var statearr_55252_56811 = state_55247__$1;
(statearr_55252_56811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55248 === (5))){
var inst_55228 = (state_55247[(7)]);
var inst_55233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55228,(0),null);
var inst_55234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55228,(1),null);
var inst_55235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55228,(2),null);
var inst_55236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55228,(3),null);
var inst_55237 = com.wsscode.pathom.core.cached_async_STAR_(inst_55233,inst_55234,inst_55235);
var state_55247__$1 = state_55247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55247__$1,(8),inst_55236,inst_55237);
} else {
if((state_val_55248 === (6))){
var state_55247__$1 = state_55247;
var statearr_55253_56814 = state_55247__$1;
(statearr_55253_56814[(2)] = null);

(statearr_55253_56814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55248 === (7))){
var inst_55243 = (state_55247[(2)]);
var state_55247__$1 = state_55247;
var statearr_55254_56815 = state_55247__$1;
(statearr_55254_56815[(2)] = inst_55243);

(statearr_55254_56815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55248 === (8))){
var inst_55239 = (state_55247[(2)]);
var state_55247__$1 = (function (){var statearr_55255 = state_55247;
(statearr_55255[(8)] = inst_55239);

return statearr_55255;
})();
var statearr_55256_56816 = state_55247__$1;
(statearr_55256_56816[(2)] = null);

(statearr_55256_56816[(1)] = (2));


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
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____0 = (function (){
var statearr_55257 = [null,null,null,null,null,null,null,null,null];
(statearr_55257[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__);

(statearr_55257[(1)] = (1));

return statearr_55257;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____1 = (function (state_55247){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55247);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55258){if((e55258 instanceof Object)){
var ex__47667__auto__ = e55258;
var statearr_55259_56817 = state_55247;
(statearr_55259_56817[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56822 = state_55247;
state_55247 = G__56822;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__ = function(state_55247){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____1.call(this,state_55247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_55260 = f__47947__auto__();
(statearr_55260[(6)] = c__47946__auto__);

return statearr_55260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__55261,key,value){
var map__55262 = p__55261;
var map__55262__$1 = (((((!((map__55262 == null))))?(((((map__55262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55262):map__55262);
var env = map__55262__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55262__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__55264,key){
var map__55265 = p__55264;
var map__55265__$1 = (((((!((map__55265 == null))))?(((((map__55265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55265):map__55265);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55265__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__55267,key){
var map__55268 = p__55267;
var map__55268__$1 = (((((!((map__55268 == null))))?(((((map__55268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55268):map__55268);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55268__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__55270){
var map__55271 = p__55270;
var map__55271__$1 = (((((!((map__55271 == null))))?(((((map__55271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55271):map__55271);
var env = map__55271__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55271__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__55273 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__55273) : reader.call(null,G__55273));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__55274){
var vec__55275 = p__55274;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55275,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__55279 = arguments.length;
switch (G__55279) {
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
var G__55280 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx,new cljs.core.Keyword("com.wsscode.pathom.core","root-query","com.wsscode.pathom.core/root-query",-100266682),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__55281 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55280,G__55281) : parser.call(null,G__55280,G__55281));
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
var res__53554__auto__ = (function (){var G__55282 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__55283 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55282,G__55283) : parser.call(null,G__55282,G__55283));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,signal){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,signal){
return (function (state_55295){
var state_val_55296 = (state_55295[(1)]);
if((state_val_55296 === (1))){
var state_55295__$1 = state_55295;
var statearr_55297_56880 = state_55295__$1;
(statearr_55297_56880[(2)] = null);

(statearr_55297_56880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55296 === (2))){
var inst_55293 = (state_55295[(2)]);
var state_55295__$1 = state_55295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55295__$1,inst_55293);
} else {
if((state_val_55296 === (3))){
var inst_55284 = (state_55295[(2)]);
var state_55295__$1 = state_55295;
var statearr_55298_56881 = state_55295__$1;
(statearr_55298_56881[(2)] = inst_55284);


cljs.core.async.impl.ioc_helpers.process_exception(state_55295__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55296 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55295,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_55295__$1 = state_55295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55295__$1,(5),res__53554__auto__);
} else {
if((state_val_55296 === (5))){
var inst_55289 = (state_55295[(2)]);
var inst_55290 = com.wsscode.async.async_cljs.throw_err(inst_55289);
var inst_55291 = cljs.core.reset_BANG_(signal,true);
var state_55295__$1 = (function (){var statearr_55299 = state_55295;
(statearr_55299[(7)] = inst_55291);

return statearr_55299;
})();
var statearr_55300_56883 = state_55295__$1;
(statearr_55300_56883[(2)] = inst_55290);


cljs.core.async.impl.ioc_helpers.process_exception(state_55295__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__,signal))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,signal){
return (function() {
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_55301 = [null,null,null,null,null,null,null,null];
(statearr_55301[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__);

(statearr_55301[(1)] = (1));

return statearr_55301;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____1 = (function (state_55295){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55295);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55302){if((e55302 instanceof Object)){
var ex__47667__auto__ = e55302;
var statearr_55303_56884 = state_55295;
(statearr_55303_56884[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56885 = state_55295;
state_55295 = G__56885;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__ = function(state_55295){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____1.call(this,state_55295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,signal))
})();
var state__47948__auto__ = (function (){var statearr_55304 = f__47947__auto__();
(statearr_55304[(6)] = c__47946__auto__);

return statearr_55304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,signal))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
cljs.core.reset_BANG_(signal,true);

return res;
}
});
});
com.wsscode.pathom.core.wrap_setup_async_cache = (function com$wsscode$pathom$core$wrap_setup_async_cache(parser){
return (function com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal(env,tx){
var async_cache_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),(1024)));
com.wsscode.pathom.core.request_cache_async_loop(async_cache_ch);

var res__53554__auto__ = (function (){var G__55305 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__55306 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55305,G__55306) : parser.call(null,G__55305,G__55306));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,async_cache_ch){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,async_cache_ch){
return (function (state_55318){
var state_val_55319 = (state_55318[(1)]);
if((state_val_55319 === (1))){
var state_55318__$1 = state_55318;
var statearr_55320_56886 = state_55318__$1;
(statearr_55320_56886[(2)] = null);

(statearr_55320_56886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55319 === (2))){
var inst_55316 = (state_55318[(2)]);
var state_55318__$1 = state_55318;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55318__$1,inst_55316);
} else {
if((state_val_55319 === (3))){
var inst_55307 = (state_55318[(2)]);
var state_55318__$1 = state_55318;
var statearr_55321_56887 = state_55318__$1;
(statearr_55321_56887[(2)] = inst_55307);


cljs.core.async.impl.ioc_helpers.process_exception(state_55318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55319 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55318,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_55318__$1 = state_55318;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55318__$1,(5),res__53554__auto__);
} else {
if((state_val_55319 === (5))){
var inst_55312 = (state_55318[(2)]);
var inst_55313 = com.wsscode.async.async_cljs.throw_err(inst_55312);
var inst_55314 = cljs.core.async.close_BANG_(async_cache_ch);
var state_55318__$1 = (function (){var statearr_55322 = state_55318;
(statearr_55322[(7)] = inst_55314);

return statearr_55322;
})();
var statearr_55323_56888 = state_55318__$1;
(statearr_55323_56888[(2)] = inst_55313);


cljs.core.async.impl.ioc_helpers.process_exception(state_55318__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__,async_cache_ch))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,async_cache_ch){
return (function() {
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_55324 = [null,null,null,null,null,null,null,null];
(statearr_55324[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__);

(statearr_55324[(1)] = (1));

return statearr_55324;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____1 = (function (state_55318){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55318);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55325){if((e55325 instanceof Object)){
var ex__47667__auto__ = e55325;
var statearr_55326_56889 = state_55318;
(statearr_55326_56889[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56890 = state_55318;
state_55318 = G__56890;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__ = function(state_55318){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____1.call(this,state_55318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,async_cache_ch))
})();
var state__47948__auto__ = (function (){var statearr_55327 = f__47947__auto__();
(statearr_55327[(6)] = c__47946__auto__);

return statearr_55327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,async_cache_ch))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
cljs.core.async.close_BANG_(async_cache_ch);

return res;
}
});
});
com.wsscode.pathom.core.wrap_reduce_params = (function com$wsscode$pathom$core$wrap_reduce_params(reader){
return (function() {
var G__56891 = null;
var G__56891__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__56891__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__56891 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__56891__1.call(this,env);
case 3:
return G__56891__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56891.cljs$core$IFn$_invoke$arity$1 = G__56891__1;
G__56891.cljs$core$IFn$_invoke$arity$3 = G__56891__3;
return G__56891;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__55328){
var map__55329 = p__55328;
var map__55329__$1 = (((((!((map__55329 == null))))?(((((map__55329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55329):map__55329);
var env = map__55329__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55329__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56892 = arguments.length;
var i__4731__auto___56893 = (0);
while(true){
if((i__4731__auto___56893 < len__4730__auto___56892)){
args__4736__auto__.push((arguments[i__4731__auto___56893]));

var G__56895 = (i__4731__auto___56893 + (1));
i__4731__auto___56893 = G__56895;
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
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq55331){
var G__55332 = cljs.core.first(seq55331);
var seq55331__$1 = cljs.core.next(seq55331);
var G__55333 = cljs.core.first(seq55331__$1);
var seq55331__$2 = cljs.core.next(seq55331__$1);
var G__55334 = cljs.core.first(seq55331__$2);
var seq55331__$3 = cljs.core.next(seq55331__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55332,G__55333,G__55334,seq55331__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56897 = arguments.length;
var i__4731__auto___56898 = (0);
while(true){
if((i__4731__auto___56898 < len__4730__auto___56897)){
args__4736__auto__.push((arguments[i__4731__auto___56898]));

var G__56899 = (i__4731__auto___56898 + (1));
i__4731__auto___56898 = G__56899;
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
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq55335){
var G__55336 = cljs.core.first(seq55335);
var seq55335__$1 = cljs.core.next(seq55335);
var G__55337 = cljs.core.first(seq55335__$1);
var seq55335__$2 = cljs.core.next(seq55335__$1);
var G__55338 = cljs.core.first(seq55335__$2);
var seq55335__$3 = cljs.core.next(seq55335__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55336,G__55337,G__55338,seq55335__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__55339){
var map__55340 = p__55339;
var map__55340__$1 = (((((!((map__55340 == null))))?(((((map__55340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55340):map__55340);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55340__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55340__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__55342 = plugins;
var G__55342__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__55342):G__55342);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__55342__$1);
} else {
return G__55342__$1;
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
var G__55343 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,env_SINGLEQUOTE_], 0));
var G__55344 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__55343,G__55344) : parser.call(null,G__55343,G__55344));
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
var G__55346 = arguments.length;
switch (G__55346) {
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
return (function (p__55347){
var map__55348 = p__55347;
var map__55348__$1 = (((((!((map__55348 == null))))?(((((map__55348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55348):map__55348);
var env = map__55348__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55348__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__55350,_,___$1){
var map__55351 = p__55350;
var map__55351__$1 = (((((!((map__55351 == null))))?(((((map__55351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55351):map__55351);
var env = map__55351__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55351__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__55353 = ast;
if((G__55353 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__55353);
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
