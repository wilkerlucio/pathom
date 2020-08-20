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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86278){
return cljs.core.map_QMARK_(G__86278);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86279){
return cljs.core.vector_QMARK_(G__86279);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","optional?","com.wsscode.pathom.core/optional?",910087942),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"list","list",765357683)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-fn","com.wsscode.pathom.core/reader-fn",1718614315),new cljs.core.Keyword("com.wsscode.pathom.core","reader-map","com.wsscode.pathom.core/reader-map",456673075),new cljs.core.Keyword("com.wsscode.pathom.core","reader-seq","com.wsscode.pathom.core/reader-seq",6913016)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null),cljs.core.fn_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","error","com.wsscode.pathom.core/error",1967516491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.list(new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),"Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null)),"null"], null), null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,(function (){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Generated sample error",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"some","some",-1951079573),"data"], null))]));
}),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.any_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86280){
return cljs.core.map_QMARK_(G__86280);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("com.wsscode.pathom.core","atom?","com.wsscode.pathom.core/atom?",332525267,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__86281_SHARP_){
return (com.wsscode.pathom.core.atom_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.atom_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__86281_SHARP_) : com.wsscode.pathom.core.atom_QMARK_.call(null,p1__86281_SHARP_));
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
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","plugin","com.wsscode.pathom.core/plugin",-881556304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__86282){
return cljs.core.map_QMARK_(G__86282);
})], null),(function (G__86282){
return cljs.core.map_QMARK_(G__86282);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"call","call",-519999866)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword("edn-query-language.core","mutation-key","edn-query-language.core/mutation-key",422562651)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761),new cljs.core.Keyword("edn-query-language.core","join-query","edn-query-language.core/join-query",587629761));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("edn-query-language.core","property","edn-query-language.core/property",-1479624874),cljs.core.fn_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch-size","com.wsscode.pathom.core/async-request-cache-ch-size",-437531159),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","async-parser?","com.wsscode.pathom.core/async-parser?",920199905),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"coll","coll",1647737163),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"map","map",1371690461),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coll","coll",1647737163),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86283){
return cljs.core.coll_QMARK_(G__86283);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,cljs.core.map_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86284){
return cljs.core.map_QMARK_(G__86284);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),cljs.core.nat_int_QMARK_], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86285){
return cljs.core.vector_QMARK_(G__86285);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.vector_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.core","attribute","com.wsscode.pathom.core/attribute",1954645846),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",-164364171,null)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_,new cljs.core.Keyword("com.wsscode.pathom.core","shape-descriptor","com.wsscode.pathom.core/shape-descriptor",-1569907681)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__86286){
return cljs.core.map_QMARK_(G__86286);
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
com.wsscode.pathom.core.ast_properties = (function com$wsscode$pathom$core$ast_properties(p__86287){
var map__86288 = p__86287;
var map__86288__$1 = (((((!((map__86288 == null))))?(((((map__86288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86288):map__86288);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86288__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__86288,map__86288__$1,children){
return (function (attrs,p__86290){
var map__86291 = p__86290;
var map__86291__$1 = (((((!((map__86291 == null))))?(((((map__86291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86291):map__86291);
var node = map__86291__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86291__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__86293 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,key);
if(cljs.core.truth_(children__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__86293,(com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.ast_properties.cljs$core$IFn$_invoke$arity$1(node) : com.wsscode.pathom.core.ast_properties.call(null,node)));
} else {
return G__86293;
}
});})(map__86288,map__86288__$1,children))
,cljs.core.PersistentHashSet.EMPTY,children);
});
/**
 * Merges nested maps without overwriting existing keys.
 */
com.wsscode.pathom.core.deep_merge = (function com$wsscode$pathom$core$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___88025 = arguments.length;
var i__4731__auto___88026 = (0);
while(true){
if((i__4731__auto___88026 < len__4730__auto___88025)){
args__4736__auto__.push((arguments[i__4731__auto___88026]));

var G__88027 = (i__4731__auto___88026 + (1));
i__4731__auto___88026 = G__88027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

com.wsscode.pathom.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
if(cljs.core.every_QMARK_((function (p1__86294_SHARP_){
return ((cljs.core.map_QMARK_(p1__86294_SHARP_)) || ((p1__86294_SHARP_ == null)));
}),xs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,com.wsscode.pathom.core.deep_merge,xs);
} else {
return cljs.core.last(xs);
}
});

com.wsscode.pathom.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
com.wsscode.pathom.core.deep_merge.cljs$lang$applyTo = (function (seq86295){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq86295));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__86296_SHARP_){
return cljs.core.filterv(f,p1__86296_SHARP_);
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
var len__4730__auto___88058 = arguments.length;
var i__4731__auto___88059 = (0);
while(true){
if((i__4731__auto___88059 < len__4730__auto___88058)){
args__4736__auto__.push((arguments[i__4731__auto___88059]));

var G__88061 = (i__4731__auto___88059 + (1));
i__4731__auto___88059 = G__88061;
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
var vec__86300 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86300,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86300,(1),null);
return (new cljs.core.List(null,k,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p,args),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,x,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.PersistentArrayMap.EMPTY,args),null,(1),null)),(2),null));
}
});

com.wsscode.pathom.core.update_attribute_param.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
com.wsscode.pathom.core.update_attribute_param.cljs$lang$applyTo = (function (seq86297){
var G__86298 = cljs.core.first(seq86297);
var seq86297__$1 = cljs.core.next(seq86297);
var G__86299 = cljs.core.first(seq86297__$1);
var seq86297__$2 = cljs.core.next(seq86297__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86298,G__86299,seq86297__$2);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),(function (){var G__86303 = ast;
var G__86303__$1 = (((G__86303 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__86303));
var G__86303__$2 = (((G__86303__$1 == null))?null:cljs.core.first(G__86303__$1));
if((G__86303__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__86303__$2);
}
})());
});
com.wsscode.pathom.core.maybe_merge_union_ast = (function com$wsscode$pathom$core$maybe_merge_union_ast(ast){
if(com.wsscode.pathom.core.union_children_QMARK_(ast)){
var merged_children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"children","children",-940561982)),(function (){var G__86304 = ast;
var G__86304__$1 = (((G__86304 == null))?null:new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__86304));
var G__86304__$2 = (((G__86304__$1 == null))?null:cljs.core.first(G__86304__$1));
if((G__86304__$2 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__86304__$2);
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,new cljs.core.Keyword(null,"children","children",-940561982),merged_children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510),edn_query_language.core.ast__GT_query(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),merged_children], null))], 0));
} else {
return ast;
}
});
com.wsscode.pathom.core.merge_shapes = (function com$wsscode$pathom$core$merge_shapes(var_args){
var G__86306 = arguments.length;
switch (G__86306) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__86307){
var map__86308 = p__86307;
var map__86308__$1 = (((((!((map__86308 == null))))?(((((map__86308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86308):map__86308);
var node = map__86308__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86308__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86308__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
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
com.wsscode.pathom.core.read_from_STAR_ = (function com$wsscode$pathom$core$read_from_STAR_(p__86312,reader){
var map__86313 = p__86312;
var map__86313__$1 = (((((!((map__86313 == null))))?(((((map__86313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86313):map__86313);
var env = map__86313__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86313__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
if(cljs.core.map_QMARK_(reader)){
var k = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var temp__5718__auto__ = cljs.core.find(reader,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__86315 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86315,(1),null);
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,v) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,v));
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
} else {
if(cljs.core.vector_QMARK_(reader)){
var res = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__86313,map__86313__$1,env,ast){
return (function (p1__86310_SHARP_){
return (com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.read_from_STAR_.cljs$core$IFn$_invoke$arity$2(env,p1__86310_SHARP_) : com.wsscode.pathom.core.read_from_STAR_.call(null,env,p1__86310_SHARP_));
});})(map__86313,map__86313__$1,env,ast))
),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1(((function (map__86313,map__86313__$1,env,ast){
return (function (p1__86311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__86311_SHARP_,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
});})(map__86313,map__86313__$1,env,ast))
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
return (function (state_86333){
var state_val_86334 = (state_86333[(1)]);
if((state_val_86334 === (1))){
var state_86333__$1 = state_86333;
var statearr_86335_88127 = state_86333__$1;
(statearr_86335_88127[(2)] = null);

(statearr_86335_88127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86334 === (2))){
var inst_86331 = (state_86333[(2)]);
var state_86333__$1 = state_86333;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86333__$1,inst_86331);
} else {
if((state_val_86334 === (3))){
var inst_86318 = (state_86333[(2)]);
var state_86333__$1 = state_86333;
var statearr_86336_88129 = state_86333__$1;
(statearr_86336_88129[(2)] = inst_86318);


cljs.core.async.impl.ioc_helpers.process_exception(state_86333__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86334 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86333,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86333__$1 = state_86333;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86333__$1,(5),res__53554__auto__);
} else {
if((state_val_86334 === (5))){
var inst_86324 = (state_86333[(7)]);
var inst_86323 = (state_86333[(2)]);
var inst_86324__$1 = com.wsscode.async.async_cljs.throw_err(inst_86323);
var inst_86325 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_86324__$1,new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194));
var state_86333__$1 = (function (){var statearr_86337 = state_86333;
(statearr_86337[(7)] = inst_86324__$1);

return statearr_86337;
})();
if(inst_86325){
var statearr_86338_88135 = state_86333__$1;
(statearr_86338_88135[(1)] = (6));

} else {
var statearr_86339_88137 = state_86333__$1;
(statearr_86339_88137[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86334 === (6))){
var state_86333__$1 = state_86333;
var statearr_86340_88138 = state_86333__$1;
(statearr_86340_88138[(2)] = new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));

(statearr_86340_88138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86334 === (7))){
var inst_86324 = (state_86333[(7)]);
var state_86333__$1 = state_86333;
var statearr_86341_88139 = state_86333__$1;
(statearr_86341_88139[(2)] = inst_86324);

(statearr_86341_88139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86334 === (8))){
var inst_86329 = (state_86333[(2)]);
var state_86333__$1 = state_86333;
var statearr_86342_88140 = state_86333__$1;
(statearr_86342_88140[(2)] = inst_86329);


cljs.core.async.impl.ioc_helpers.process_exception(state_86333__$1);

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
var statearr_86343 = [null,null,null,null,null,null,null,null];
(statearr_86343[(0)] = com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__);

(statearr_86343[(1)] = (1));

return statearr_86343;
});
var com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____1 = (function (state_86333){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86333);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86344){if((e86344 instanceof Object)){
var ex__47667__auto__ = e86344;
var statearr_86345_88149 = state_86333;
(statearr_86345_88149[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88151 = state_86333;
state_86333 = G__88151;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__ = function(state_86333){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____1.call(this,state_86333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$read_from_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$read_from_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_86346 = f__47947__auto__();
(statearr_86346[(6)] = c__47946__auto__);

return statearr_86346;
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
com.wsscode.pathom.core.transduce_children = (function com$wsscode$pathom$core$transduce_children(xform,p__86348){
var map__86349 = p__86348;
var map__86349__$1 = (((((!((map__86349 == null))))?(((((map__86349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86349):map__86349);
var node = map__86349__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var G__86351 = node;
if(cljs.core.seq(children)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__86351,new cljs.core.Keyword(null,"children","children",-940561982),((function (G__86351,map__86349,map__86349__$1,node,children){
return (function (children__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__86351,map__86349,map__86349__$1,node,children){
return (function (p1__86347_SHARP_){
return (com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.transduce_children.cljs$core$IFn$_invoke$arity$2(xform,p1__86347_SHARP_) : com.wsscode.pathom.core.transduce_children.call(null,xform,p1__86347_SHARP_));
});})(G__86351,map__86349,map__86349__$1,node,children))
)),children__$1);
});})(G__86351,map__86349,map__86349__$1,node,children))
);
} else {
return G__86351;
}
});
com.wsscode.pathom.core.special_outputs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),null], null), null);
/**
 * Removes any item on set item-set from the input
 */
com.wsscode.pathom.core.elide_items = (function com$wsscode$pathom$core$elide_items(item_set,input){
return cljs.core.with_meta(com.wsscode.pathom.core.transduce_maps(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__86352){
var vec__86353 = p__86352;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86353,(1),null);
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
com.wsscode.pathom.core.raw_entity = (function com$wsscode$pathom$core$raw_entity(p__86357){
var map__86358 = p__86357;
var map__86358__$1 = (((((!((map__86358 == null))))?(((((map__86358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86358):map__86358);
var env = map__86358__$1;
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86358__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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
var G__86361 = arguments.length;
switch (G__86361) {
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

com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2 = (function (p__86362,attributes){
var map__86363 = p__86362;
var map__86363__$1 = (((((!((map__86363 == null))))?(((((map__86363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86363):map__86363);
var env = map__86363__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86363__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var res__53554__auto__ = (function (){var G__86365 = env;
var G__86366 = cljs.core.filterv(cljs.core.complement(cljs.core.set(cljs.core.keys(e))),attributes);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__86365,G__86366) : parser.call(null,G__86365,G__86366));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,e,map__86363,map__86363__$1,env,parser){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,e,map__86363,map__86363__$1,env,parser){
return (function (state_86383){
var state_val_86384 = (state_86383[(1)]);
if((state_val_86384 === (1))){
var state_86383__$1 = state_86383;
var statearr_86385_88182 = state_86383__$1;
(statearr_86385_88182[(2)] = null);

(statearr_86385_88182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86384 === (2))){
var inst_86381 = (state_86383[(2)]);
var state_86383__$1 = state_86383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86383__$1,inst_86381);
} else {
if((state_val_86384 === (3))){
var inst_86367 = (state_86383[(2)]);
var state_86383__$1 = state_86383;
var statearr_86386_88190 = state_86383__$1;
(statearr_86386_88190[(2)] = inst_86367);


cljs.core.async.impl.ioc_helpers.process_exception(state_86383__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86384 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86383,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86383__$1 = state_86383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86383__$1,(5),res__53554__auto__);
} else {
if((state_val_86384 === (5))){
var inst_86373 = (state_86383[(7)]);
var inst_86372 = (state_86383[(2)]);
var inst_86373__$1 = com.wsscode.async.async_cljs.throw_err(inst_86372);
var inst_86374 = cljs.core.map_QMARK_(inst_86373__$1);
var state_86383__$1 = (function (){var statearr_86387 = state_86383;
(statearr_86387[(7)] = inst_86373__$1);

return statearr_86387;
})();
if(inst_86374){
var statearr_86388_88196 = state_86383__$1;
(statearr_86388_88196[(1)] = (6));

} else {
var statearr_86389_88197 = state_86383__$1;
(statearr_86389_88197[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86384 === (6))){
var inst_86373 = (state_86383[(7)]);
var inst_86376 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.core.entity_value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,inst_86373], 0));
var state_86383__$1 = state_86383;
var statearr_86390_88199 = state_86383__$1;
(statearr_86390_88199[(2)] = inst_86376);

(statearr_86390_88199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86384 === (7))){
var state_86383__$1 = state_86383;
var statearr_86391_88200 = state_86383__$1;
(statearr_86391_88200[(2)] = e);

(statearr_86391_88200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86384 === (8))){
var inst_86379 = (state_86383[(2)]);
var state_86383__$1 = state_86383;
var statearr_86392_88205 = state_86383__$1;
(statearr_86392_88205[(2)] = inst_86379);


cljs.core.async.impl.ioc_helpers.process_exception(state_86383__$1);

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
});})(c__47946__auto__,res__53554__auto__,e,map__86363,map__86363__$1,env,parser))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,map__86363,map__86363__$1,env,parser){
return (function() {
var com$wsscode$pathom$core$state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$state_machine__47664__auto____0 = (function (){
var statearr_86393 = [null,null,null,null,null,null,null,null];
(statearr_86393[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_86393[(1)] = (1));

return statearr_86393;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_86383){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86383);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86394){if((e86394 instanceof Object)){
var ex__47667__auto__ = e86394;
var statearr_86395_88208 = state_86383;
(statearr_86395_88208[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88209 = state_86383;
state_86383 = G__88209;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_86383){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_86383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,map__86363,map__86363__$1,env,parser))
})();
var state__47948__auto__ = (function (){var statearr_86396 = f__47947__auto__();
(statearr_86396[(6)] = c__47946__auto__);

return statearr_86396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,e,map__86363,map__86363__$1,env,parser))
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
var G__86398 = arguments.length;
switch (G__86398) {
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
return (function (state_86410){
var state_val_86411 = (state_86410[(1)]);
if((state_val_86411 === (1))){
var state_86410__$1 = state_86410;
var statearr_86412_88211 = state_86410__$1;
(statearr_86412_88211[(2)] = null);

(statearr_86412_88211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86411 === (2))){
var inst_86408 = (state_86410[(2)]);
var state_86410__$1 = state_86410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86410__$1,inst_86408);
} else {
if((state_val_86411 === (3))){
var inst_86399 = (state_86410[(2)]);
var state_86410__$1 = state_86410;
var statearr_86413_88212 = state_86410__$1;
(statearr_86413_88212[(2)] = inst_86399);


cljs.core.async.impl.ioc_helpers.process_exception(state_86410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86411 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86410,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86410__$1 = state_86410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86410__$1,(5),res__53554__auto__);
} else {
if((state_val_86411 === (5))){
var inst_86404 = (state_86410[(2)]);
var inst_86405 = com.wsscode.async.async_cljs.throw_err(inst_86404);
var inst_86406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_86405,attr);
var state_86410__$1 = state_86410;
var statearr_86414_88213 = state_86410__$1;
(statearr_86414_88213[(2)] = inst_86406);


cljs.core.async.impl.ioc_helpers.process_exception(state_86410__$1);

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
var statearr_86415 = [null,null,null,null,null,null,null];
(statearr_86415[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_86415[(1)] = (1));

return statearr_86415;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_86410){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86410);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86416){if((e86416 instanceof Object)){
var ex__47667__auto__ = e86416;
var statearr_86417_88214 = state_86410;
(statearr_86417_88214[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86416;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88215 = state_86410;
state_86410 = G__88215;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_86410){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_86410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_86418 = f__47947__auto__();
(statearr_86418[(6)] = c__47946__auto__);

return statearr_86418;
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
return (function (state_86438){
var state_val_86439 = (state_86438[(1)]);
if((state_val_86439 === (1))){
var state_86438__$1 = state_86438;
var statearr_86440_88216 = state_86438__$1;
(statearr_86440_88216[(2)] = null);

(statearr_86440_88216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86439 === (2))){
var inst_86436 = (state_86438[(2)]);
var state_86438__$1 = state_86438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86438__$1,inst_86436);
} else {
if((state_val_86439 === (3))){
var inst_86419 = (state_86438[(2)]);
var state_86438__$1 = state_86438;
var statearr_86441_88217 = state_86438__$1;
(statearr_86441_88217[(2)] = inst_86419);


cljs.core.async.impl.ioc_helpers.process_exception(state_86438__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86439 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86438,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86438__$1 = state_86438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86438__$1,(5),res__53554__auto__);
} else {
if((state_val_86439 === (5))){
var inst_86426 = (state_86438[(7)]);
var inst_86424 = (state_86438[(2)]);
var inst_86425 = com.wsscode.async.async_cljs.throw_err(inst_86424);
var inst_86426__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_86425,attr);
var inst_86427 = [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null];
var inst_86428 = (new cljs.core.PersistentArrayMap(null,2,inst_86427,null));
var inst_86429 = (new cljs.core.PersistentHashSet(null,inst_86428,null));
var inst_86430 = (inst_86429.cljs$core$IFn$_invoke$arity$1 ? inst_86429.cljs$core$IFn$_invoke$arity$1(inst_86426__$1) : inst_86429.call(null,inst_86426__$1));
var state_86438__$1 = (function (){var statearr_86442 = state_86438;
(statearr_86442[(7)] = inst_86426__$1);

return statearr_86442;
})();
if(cljs.core.truth_(inst_86430)){
var statearr_86443_88218 = state_86438__$1;
(statearr_86443_88218[(1)] = (6));

} else {
var statearr_86444_88219 = state_86438__$1;
(statearr_86444_88219[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86439 === (6))){
var state_86438__$1 = state_86438;
var statearr_86445_88220 = state_86438__$1;
(statearr_86445_88220[(2)] = default$);

(statearr_86445_88220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86439 === (7))){
var inst_86426 = (state_86438[(7)]);
var state_86438__$1 = state_86438;
var statearr_86446_88221 = state_86438__$1;
(statearr_86446_88221[(2)] = inst_86426);

(statearr_86446_88221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86439 === (8))){
var inst_86434 = (state_86438[(2)]);
var state_86438__$1 = state_86438;
var statearr_86447_88222 = state_86438__$1;
(statearr_86447_88222[(2)] = inst_86434);


cljs.core.async.impl.ioc_helpers.process_exception(state_86438__$1);

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
var statearr_86448 = [null,null,null,null,null,null,null,null];
(statearr_86448[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_86448[(1)] = (1));

return statearr_86448;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_86438){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86438);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86449){if((e86449 instanceof Object)){
var ex__47667__auto__ = e86449;
var statearr_86450_88224 = state_86438;
(statearr_86450_88224[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88225 = state_86438;
state_86438 = G__88225;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_86438){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_86438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_86451 = f__47947__auto__();
(statearr_86451[(6)] = c__47946__auto__);

return statearr_86451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__))
);

return c__47946__auto__;
} else {
var e = res__53554__auto__;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,attr);
if(cljs.core.truth_((function (){var fexpr__86452 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137),null], null), null);
return (fexpr__86452.cljs$core$IFn$_invoke$arity$1 ? fexpr__86452.cljs$core$IFn$_invoke$arity$1(x) : fexpr__86452.call(null,x));
})())){
return default$;
} else {
return x;
}
}
});

com.wsscode.pathom.core.entity_attr.cljs$lang$maxFixedArity = 3;

com.wsscode.pathom.core.entity_BANG_ = (function com$wsscode$pathom$core$entity_BANG_(p__86453,attributes){
var map__86454 = p__86453;
var map__86454__$1 = (((((!((map__86454 == null))))?(((((map__86454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86454):map__86454);
var env = map__86454__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86454__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var res__53554__auto__ = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$2(env,attributes);
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,map__86454,map__86454__$1,env,path){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,map__86454,map__86454__$1,env,path){
return (function (state_86483){
var state_val_86484 = (state_86483[(1)]);
if((state_val_86484 === (1))){
var state_86483__$1 = state_86483;
var statearr_86485_88228 = state_86483__$1;
(statearr_86485_88228[(2)] = null);

(statearr_86485_88228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86484 === (2))){
var inst_86481 = (state_86483[(2)]);
var state_86483__$1 = state_86483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86483__$1,inst_86481);
} else {
if((state_val_86484 === (3))){
var inst_86456 = (state_86483[(2)]);
var state_86483__$1 = state_86483;
var statearr_86486_88231 = state_86483__$1;
(statearr_86486_88231[(2)] = inst_86456);


cljs.core.async.impl.ioc_helpers.process_exception(state_86483__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86484 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86483,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86483__$1 = state_86483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86483__$1,(5),res__53554__auto__);
} else {
if((state_val_86484 === (5))){
var inst_86467 = (state_86483[(7)]);
var inst_86462 = (state_86483[(8)]);
var inst_86461 = (state_86483[(2)]);
var inst_86462__$1 = com.wsscode.async.async_cljs.throw_err(inst_86461);
var inst_86463 = cljs.core.set(attributes);
var inst_86464 = com.wsscode.pathom.core.elide_not_found(inst_86462__$1);
var inst_86465 = cljs.core.keys(inst_86464);
var inst_86466 = cljs.core.set(inst_86465);
var inst_86467__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_86463,inst_86466);
var inst_86468 = cljs.core.seq(inst_86467__$1);
var state_86483__$1 = (function (){var statearr_86487 = state_86483;
(statearr_86487[(7)] = inst_86467__$1);

(statearr_86487[(8)] = inst_86462__$1);

return statearr_86487;
})();
if(inst_86468){
var statearr_86488_88237 = state_86483__$1;
(statearr_86488_88237[(1)] = (6));

} else {
var statearr_86489_88238 = state_86483__$1;
(statearr_86489_88238[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86484 === (6))){
var inst_86467 = (state_86483[(7)]);
var inst_86462 = (state_86483[(8)]);
var inst_86470 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_86467], 0));
var inst_86471 = ["Entity attributes ",inst_86470," could not be realized"].join('');
var inst_86472 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),new cljs.core.Keyword("com.wsscode.pathom.core","missing-attributes","com.wsscode.pathom.core/missing-attributes",1114260849)];
var inst_86473 = [inst_86462,path,inst_86467];
var inst_86474 = cljs.core.PersistentHashMap.fromArrays(inst_86472,inst_86473);
var inst_86475 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(inst_86471,inst_86474);
var inst_86476 = (function(){throw inst_86475})();
var state_86483__$1 = state_86483;
var statearr_86490_88239 = state_86483__$1;
(statearr_86490_88239[(2)] = inst_86476);

(statearr_86490_88239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86484 === (7))){
var state_86483__$1 = state_86483;
var statearr_86491_88240 = state_86483__$1;
(statearr_86491_88240[(2)] = null);

(statearr_86491_88240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86484 === (8))){
var inst_86462 = (state_86483[(8)]);
var inst_86479 = (state_86483[(2)]);
var state_86483__$1 = (function (){var statearr_86492 = state_86483;
(statearr_86492[(9)] = inst_86479);

return statearr_86492;
})();
var statearr_86493_88242 = state_86483__$1;
(statearr_86493_88242[(2)] = inst_86462);


cljs.core.async.impl.ioc_helpers.process_exception(state_86483__$1);

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
});})(c__47946__auto__,res__53554__auto__,map__86454,map__86454__$1,env,path))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,map__86454,map__86454__$1,env,path){
return (function() {
var com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____0 = (function (){
var statearr_86494 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86494[(0)] = com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__);

(statearr_86494[(1)] = (1));

return statearr_86494;
});
var com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____1 = (function (state_86483){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86483);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86495){if((e86495 instanceof Object)){
var ex__47667__auto__ = e86495;
var statearr_86496_88247 = state_86483;
(statearr_86496_88247[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88248 = state_86483;
state_86483 = G__88248;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__ = function(state_86483){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____1.call(this,state_86483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$entity_BANG__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,map__86454,map__86454__$1,env,path))
})();
var state__47948__auto__ = (function (){var statearr_86497 = f__47947__auto__();
(statearr_86497[(6)] = c__47946__auto__);

return statearr_86497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,map__86454,map__86454__$1,env,path))
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
return (function (state_86509){
var state_val_86510 = (state_86509[(1)]);
if((state_val_86510 === (1))){
var state_86509__$1 = state_86509;
var statearr_86511_88249 = state_86509__$1;
(statearr_86511_88249[(2)] = null);

(statearr_86511_88249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86510 === (2))){
var inst_86507 = (state_86509[(2)]);
var state_86509__$1 = state_86509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86509__$1,inst_86507);
} else {
if((state_val_86510 === (3))){
var inst_86498 = (state_86509[(2)]);
var state_86509__$1 = state_86509;
var statearr_86512_88250 = state_86509__$1;
(statearr_86512_88250[(2)] = inst_86498);


cljs.core.async.impl.ioc_helpers.process_exception(state_86509__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86510 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86509,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86509__$1 = state_86509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86509__$1,(5),res__53554__auto__);
} else {
if((state_val_86510 === (5))){
var inst_86503 = (state_86509[(2)]);
var inst_86504 = com.wsscode.async.async_cljs.throw_err(inst_86503);
var inst_86505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_86504,attr);
var state_86509__$1 = state_86509;
var statearr_86513_88251 = state_86509__$1;
(statearr_86513_88251[(2)] = inst_86505);


cljs.core.async.impl.ioc_helpers.process_exception(state_86509__$1);

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
var statearr_86514 = [null,null,null,null,null,null,null];
(statearr_86514[(0)] = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__);

(statearr_86514[(1)] = (1));

return statearr_86514;
});
var com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____1 = (function (state_86509){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86509);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86515){if((e86515 instanceof Object)){
var ex__47667__auto__ = e86515;
var statearr_86516_88253 = state_86509;
(statearr_86516_88253[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86515;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88254 = state_86509;
state_86509 = G__88254;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__ = function(state_86509){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____1.call(this,state_86509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$entity_attr_BANG__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_86517 = f__47947__auto__();
(statearr_86517[(6)] = c__47946__auto__);

return statearr_86517;
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
var len__4730__auto___88255 = arguments.length;
var i__4731__auto___88256 = (0);
while(true){
if((i__4731__auto___88256 < len__4730__auto___88255)){
args__4736__auto__.push((arguments[i__4731__auto___88256]));

var G__88260 = (i__4731__auto___88256 + (1));
i__4731__auto___88256 = G__88260;
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
com.wsscode.pathom.core.swap_entity_BANG_.cljs$lang$applyTo = (function (seq86518){
var G__86519 = cljs.core.first(seq86518);
var seq86518__$1 = cljs.core.next(seq86518);
var G__86520 = cljs.core.first(seq86518__$1);
var seq86518__$2 = cljs.core.next(seq86518__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86519,G__86520,seq86518__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_child = (function com$wsscode$pathom$core$update_child(var_args){
var args__4736__auto__ = [];
var len__4730__auto___88261 = arguments.length;
var i__4731__auto___88262 = (0);
while(true){
if((i__4731__auto___88262 < len__4730__auto___88261)){
args__4736__auto__.push((arguments[i__4731__auto___88262]));

var G__88263 = (i__4731__auto___88262 + (1));
i__4731__auto___88262 = G__88263;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_child.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__86524 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__86524__$1 = (((G__86524 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__86524));
var G__86524__$2 = (((G__86524__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([key]),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.second),G__86524__$1));
if((G__86524__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__86524__$2);
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
com.wsscode.pathom.core.update_child.cljs$lang$applyTo = (function (seq86521){
var G__86522 = cljs.core.first(seq86521);
var seq86521__$1 = cljs.core.next(seq86521);
var G__86523 = cljs.core.first(seq86521__$1);
var seq86521__$2 = cljs.core.next(seq86521__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86522,G__86523,seq86521__$2);
});

/**
 * Given an AST, find the child with a given key and run update against it.
 */
com.wsscode.pathom.core.update_recursive_depth = (function com$wsscode$pathom$core$update_recursive_depth(var_args){
var args__4736__auto__ = [];
var len__4730__auto___88309 = arguments.length;
var i__4731__auto___88310 = (0);
while(true){
if((i__4731__auto___88310 < len__4730__auto___88309)){
args__4736__auto__.push((arguments[i__4731__auto___88310]));

var G__88313 = (i__4731__auto___88310 + (1));
i__4731__auto___88310 = G__88313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

com.wsscode.pathom.core.update_recursive_depth.cljs$core$IFn$_invoke$arity$variadic = (function (ast,key,args){
var temp__5718__auto__ = (function (){var G__86529 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
var G__86529__$1 = (((G__86529 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__86529));
var G__86529__$2 = (((G__86529__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (G__86529,G__86529__$1){
return (function (p1__86525_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__86525_SHARP_))) && (cljs.core.pos_int_QMARK_(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__86525_SHARP_))));
});})(G__86529,G__86529__$1))
,cljs.core.second),G__86529__$1));
if((G__86529__$2 == null)){
return null;
} else {
return cljs.core.ffirst(G__86529__$2);
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
com.wsscode.pathom.core.update_recursive_depth.cljs$lang$applyTo = (function (seq86526){
var G__86527 = cljs.core.first(seq86526);
var seq86526__$1 = cljs.core.next(seq86526);
var G__86528 = cljs.core.first(seq86526__$1);
var seq86526__$2 = cljs.core.next(seq86526__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86527,G__86528,seq86526__$2);
});

com.wsscode.pathom.core.remove_query_wildcard = (function com$wsscode$pathom$core$remove_query_wildcard(query){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(query)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null)),query);
});
com.wsscode.pathom.core.default_union_path = (function com$wsscode$pathom$core$default_union_path(p__86531){
var map__86532 = p__86531;
var map__86532__$1 = (((((!((map__86532 == null))))?(((((map__86532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86532):map__86532);
var env = map__86532__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86532__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var e = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var temp__5718__auto__ = (function (){var G__86534 = cljs.core.keys(query);
var G__86534__$1 = (((G__86534 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__86534,e,map__86532,map__86532__$1,env,query){
return (function (p1__86530_SHARP_){
return ((cljs.core.contains_QMARK_(e,p1__86530_SHARP_)) && (cljs.core.not((function (){var G__86536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(e,p1__86530_SHARP_);
return (com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.core.break_values.cljs$core$IFn$_invoke$arity$1(G__86536) : com.wsscode.pathom.core.break_values.call(null,G__86536));
})())));
});})(G__86534,e,map__86532,map__86532__$1,env,query))
,G__86534));
if((G__86534__$1 == null)){
return null;
} else {
return cljs.core.first(G__86534__$1);
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return path;
} else {
return null;
}
});
com.wsscode.pathom.core.placeholder_key_QMARK_ = (function com$wsscode$pathom$core$placeholder_key_QMARK_(p__86537,k){
var map__86538 = p__86537;
var map__86538__$1 = (((((!((map__86538 == null))))?(((((map__86538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86538):map__86538);
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86538__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
var placeholder_prefixes__$1 = (function (){var or__4131__auto__ = placeholder_prefixes;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null);
}
})();
return (((k instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(placeholder_prefixes__$1,cljs.core.namespace(k))));
});
com.wsscode.pathom.core.path_without_placeholders = (function com$wsscode$pathom$core$path_without_placeholders(p__86541){
var map__86542 = p__86541;
var map__86542__$1 = (((((!((map__86542 == null))))?(((((map__86542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86542):map__86542);
var env = map__86542__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86542__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (map__86542,map__86542__$1,env,path){
return (function (p1__86540_SHARP_){
return com.wsscode.pathom.core.placeholder_key_QMARK_(env,p1__86540_SHARP_);
});})(map__86542,map__86542__$1,env,path))
),path);
});
/**
 * Find the closest parent key that's not a placeholder key.
 */
com.wsscode.pathom.core.find_closest_non_placeholder_parent_join_key = (function com$wsscode$pathom$core$find_closest_non_placeholder_parent_join_key(p__86545){
var map__86546 = p__86545;
var map__86546__$1 = (((((!((map__86546 == null))))?(((((map__86546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86546):map__86546);
var env = map__86546__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86546__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__86546,map__86546__$1,env,path){
return (function (p1__86544_SHARP_){
return com.wsscode.pathom.core.placeholder_key_QMARK_(env,p1__86544_SHARP_);
});})(map__86546,map__86546__$1,env,path))
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
var G__86549 = arguments.length;
switch (G__86549) {
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2 = (function (entity,p__86550){
var map__86551 = p__86550;
var map__86551__$1 = (((((!((map__86551 == null))))?(((((map__86551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86551):map__86551);
var env = map__86551__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86551__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86551__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86551__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
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

com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$1 = (function (p__86553){
var map__86554 = p__86553;
var map__86554__$1 = (((((!((map__86554 == null))))?(((((map__86554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86554):map__86554);
var env = map__86554__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86554__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86554__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86554__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var union_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86554__$1,new cljs.core.Keyword("com.wsscode.pathom.core","union-path","com.wsscode.pathom.core/union-path",-2083478095));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86554__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var processing_sequence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86554__$1,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637));
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
var env_SINGLEQUOTE_ = (function (){var G__86556 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__86557 = env;
if(cljs.core.truth_(union_path__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__86557,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,union_path__$1);
} else {
return G__86557;
}
})(),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),query__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-join-key","com.wsscode.pathom.core/parent-join-key",-289005491),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast)], 0));
if((!(placeholder_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__86556,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404)], 0));
} else {
return G__86556;
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
var G__86558 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env_SINGLEQUOTE___$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),parent_query_SINGLEQUOTE_);
var G__86559 = com.wsscode.pathom.core.remove_query_wildcard(parent_query_SINGLEQUOTE_);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__86558,G__86559) : parser.call(null,G__86558,G__86559));
}
} else {
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"*","*",345799209,null),null], null), null),query__$1))){
var res__53554__auto__ = (function (){var G__86560 = env_SINGLEQUOTE___$1;
var G__86561 = com.wsscode.pathom.core.remove_query_wildcard(query__$1);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__86560,G__86561) : parser.call(null,G__86560,G__86561));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__86554,map__86554__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__86554,map__86554__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function (state_86574){
var state_val_86575 = (state_86574[(1)]);
if((state_val_86575 === (1))){
var state_86574__$1 = state_86574;
var statearr_86576_88367 = state_86574__$1;
(statearr_86576_88367[(2)] = null);

(statearr_86576_88367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86575 === (2))){
var inst_86572 = (state_86574[(2)]);
var state_86574__$1 = state_86574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86574__$1,inst_86572);
} else {
if((state_val_86575 === (3))){
var inst_86562 = (state_86574[(2)]);
var state_86574__$1 = state_86574;
var statearr_86577_88368 = state_86574__$1;
(statearr_86577_88368[(2)] = inst_86562);


cljs.core.async.impl.ioc_helpers.process_exception(state_86574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86575 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86574,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_86574__$1 = state_86574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86574__$1,(5),res__53554__auto__);
} else {
if((state_val_86575 === (5))){
var inst_86567 = (state_86574[(2)]);
var inst_86568 = com.wsscode.async.async_cljs.throw_err(inst_86567);
var inst_86569 = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env_SINGLEQUOTE___$1);
var inst_86570 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_86569,inst_86568], 0));
var state_86574__$1 = state_86574;
var statearr_86578_88369 = state_86574__$1;
(statearr_86578_88369[(2)] = inst_86570);


cljs.core.async.impl.ioc_helpers.process_exception(state_86574__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__86554,map__86554__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__86554,map__86554__$1,env,parser,ast,query,union_path,parent_query,processing_sequence){
return (function() {
var com$wsscode$pathom$core$state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$state_machine__47664__auto____0 = (function (){
var statearr_86579 = [null,null,null,null,null,null,null];
(statearr_86579[(0)] = com$wsscode$pathom$core$state_machine__47664__auto__);

(statearr_86579[(1)] = (1));

return statearr_86579;
});
var com$wsscode$pathom$core$state_machine__47664__auto____1 = (function (state_86574){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86574);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86580){if((e86580 instanceof Object)){
var ex__47667__auto__ = e86580;
var statearr_86581_88370 = state_86574;
(statearr_86581_88370[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88371 = state_86574;
state_86574 = G__88371;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$state_machine__47664__auto__ = function(state_86574){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$state_machine__47664__auto____1.call(this,state_86574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$state_machine__47664__auto____0;
com$wsscode$pathom$core$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$state_machine__47664__auto____1;
return com$wsscode$pathom$core$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__86554,map__86554__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
})();
var state__47948__auto__ = (function (){var statearr_86582 = f__47947__auto__();
(statearr_86582[(6)] = c__47946__auto__);

return statearr_86582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,e,placeholder_QMARK_,union_path__$1,query__$1,env_SINGLEQUOTE_,env_SINGLEQUOTE___$1,map__86554,map__86554__$1,env,parser,ast,query,union_path,parent_query,processing_sequence))
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

com.wsscode.pathom.core.join_seq_parallel = (function com$wsscode$pathom$core$join_seq_parallel(p__86584,coll){
var map__86585 = p__86584;
var map__86585__$1 = (((((!((map__86585 == null))))?(((((map__86585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86585):map__86585);
var env = map__86585__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86585__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86585__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var parent_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86585__$1,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594));
var query_SINGLEQUOTE_ = ((cljs.core.nat_int_QMARK_(query))?parent_query:query);
if(((cljs.core.seq(coll)) && (((cljs.core.vector_QMARK_(query)) || (cljs.core.pos_int_QMARK_(query)) || (cljs.core.map_QMARK_(query)))))){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___88372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (state_86716){
var state_val_86717 = (state_86716[(1)]);
if((state_val_86717 === (7))){
var inst_86705 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86718_88373 = state_86716__$1;
(statearr_86718_88373[(2)] = inst_86705);


cljs.core.async.impl.ioc_helpers.process_exception(state_86716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (20))){
var inst_86669 = (state_86716[(7)]);
var state_86716__$1 = state_86716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86716__$1,(23),inst_86669);
} else {
if((state_val_86717 === (27))){
var inst_86680 = (state_86716[(2)]);
var inst_86681 = com.wsscode.async.async_cljs.consumer_pair(inst_86680);
var state_86716__$1 = state_86716;
var statearr_86719_88374 = state_86716__$1;
(statearr_86719_88374[(2)] = inst_86681);

(statearr_86719_88374[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (1))){
var state_86716__$1 = state_86716;
var statearr_86720_88375 = state_86716__$1;
(statearr_86720_88375[(2)] = null);

(statearr_86720_88375[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (24))){
var inst_86669 = (state_86716[(7)]);
var inst_86678 = com.wsscode.async.async_cljs.promise__GT_chan(inst_86669);
var state_86716__$1 = state_86716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86716__$1,(27),inst_86678);
} else {
if((state_val_86717 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_86716,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_86591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_86716__$1 = state_86716;
if(cljs.core.truth_(inst_86591)){
var statearr_86721_88380 = state_86716__$1;
(statearr_86721_88380[(1)] = (5));

} else {
var statearr_86722_88381 = state_86716__$1;
(statearr_86722_88381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (15))){
var inst_86624 = (state_86716[(2)]);
var inst_86625 = com.wsscode.async.async_cljs.consumer_pair(inst_86624);
var state_86716__$1 = state_86716;
var statearr_86723_88382 = state_86716__$1;
(statearr_86723_88382[(2)] = inst_86625);

(statearr_86723_88382[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (21))){
var inst_86669 = (state_86716[(7)]);
var inst_86676 = com.wsscode.async.async_cljs.promise_QMARK_(inst_86669);
var state_86716__$1 = state_86716;
if(cljs.core.truth_(inst_86676)){
var statearr_86724_88383 = state_86716__$1;
(statearr_86724_88383[(1)] = (24));

} else {
var statearr_86725_88384 = state_86716__$1;
(statearr_86725_88384[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (31))){
var inst_86703 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86726_88385 = state_86716__$1;
(statearr_86726_88385[(2)] = inst_86703);

(statearr_86726_88385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (32))){
var inst_86710 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_86716__$1 = state_86716;
var statearr_86727_88386 = state_86716__$1;
(statearr_86727_88386[(2)] = inst_86710);

(statearr_86727_88386[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (33))){
var inst_86707 = (state_86716[(8)]);
var inst_86712 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_86707);
var state_86716__$1 = state_86716;
var statearr_86728_88389 = state_86716__$1;
(statearr_86728_88389[(2)] = inst_86712);

(statearr_86728_88389[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (13))){
var state_86716__$1 = state_86716;
var statearr_86729_88390 = state_86716__$1;
(statearr_86729_88390[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (22))){
var inst_86663 = (state_86716[(9)]);
var inst_86667 = (state_86716[(10)]);
var inst_86664 = (state_86716[(11)]);
var inst_86666 = (state_86716[(12)]);
var inst_86659 = (state_86716[(13)]);
var inst_86662 = (state_86716[(14)]);
var inst_86690 = (state_86716[(2)]);
var inst_86691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_86692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_86693 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_86694 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_86667,inst_86693);
var inst_86695 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_86691,inst_86694);
var inst_86696 = (function (){var from_chan = inst_86691;
var join_item = inst_86663;
var first_res = inst_86690;
var seq__86657 = inst_86667;
var check_ast_opt_QMARK_ = inst_86662;
var vec__86656 = coll;
var out_chan = inst_86692;
var ast = inst_86659;
var env__$1 = inst_86664;
var first__86658 = inst_86666;
var head = inst_86666;
var tail = inst_86667;
return ((function (from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__86731,res_ch){
var vec__86732 = p__86731;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86732,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86732,(1),null);
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,vec__86732,ent,i,from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,vec__86732,ent,i,from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (state_86776){
var state_val_86777 = (state_86776[(1)]);
if((state_val_86777 === (7))){
var inst_86750 = (state_86776[(2)]);
var state_86776__$1 = state_86776;
var statearr_86778_88395 = state_86776__$1;
(statearr_86778_88395[(2)] = inst_86750);

(statearr_86778_88395[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (1))){
var inst_86737 = (state_86776[(7)]);
var inst_86736 = (i + (1));
var inst_86737__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_86736);
var inst_86739 = (inst_86737__$1 == null);
var inst_86740 = cljs.core.not(inst_86739);
var state_86776__$1 = (function (){var statearr_86779 = state_86776;
(statearr_86779[(7)] = inst_86737__$1);

return statearr_86779;
})();
if(inst_86740){
var statearr_86780_88407 = state_86776__$1;
(statearr_86780_88407[(1)] = (2));

} else {
var statearr_86781_88408 = state_86776__$1;
(statearr_86781_88408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (4))){
var inst_86753 = (state_86776[(2)]);
var state_86776__$1 = state_86776;
if(cljs.core.truth_(inst_86753)){
var statearr_86782_88410 = state_86776__$1;
(statearr_86782_88410[(1)] = (8));

} else {
var statearr_86783_88412 = state_86776__$1;
(statearr_86783_88412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (15))){
var inst_86773 = (state_86776[(2)]);
var inst_86774 = cljs.core.async.close_BANG_(res_ch);
var state_86776__$1 = (function (){var statearr_86784 = state_86776;
(statearr_86784[(8)] = inst_86773);

return statearr_86784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_86776__$1,inst_86774);
} else {
if((state_val_86777 === (13))){
var inst_86771 = (state_86776[(2)]);
var state_86776__$1 = state_86776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_86776__$1,(15),res_ch,inst_86771);
} else {
if((state_val_86777 === (6))){
var state_86776__$1 = state_86776;
var statearr_86785_88416 = state_86776__$1;
(statearr_86785_88416[(2)] = false);

(statearr_86785_88416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (3))){
var state_86776__$1 = state_86776;
var statearr_86786_88417 = state_86776__$1;
(statearr_86786_88417[(2)] = false);

(statearr_86786_88417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (12))){
var inst_86764 = (state_86776[(9)]);
var state_86776__$1 = state_86776;
var statearr_86787_88418 = state_86776__$1;
(statearr_86787_88418[(2)] = inst_86764);

(statearr_86787_88418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (2))){
var inst_86737 = (state_86776[(7)]);
var inst_86742 = inst_86737.cljs$lang$protocol_mask$partition0$;
var inst_86743 = (inst_86742 & (64));
var inst_86744 = inst_86737.cljs$core$ISeq$;
var inst_86745 = (cljs.core.PROTOCOL_SENTINEL === inst_86744);
var inst_86746 = ((inst_86743) || (inst_86745));
var state_86776__$1 = state_86776;
if(cljs.core.truth_(inst_86746)){
var statearr_86788_88420 = state_86776__$1;
(statearr_86788_88420[(1)] = (5));

} else {
var statearr_86789_88421 = state_86776__$1;
(statearr_86789_88421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (11))){
var inst_86764 = (state_86776[(9)]);
var state_86776__$1 = state_86776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86776__$1,(14),inst_86764);
} else {
if((state_val_86777 === (9))){
var inst_86737 = (state_86776[(7)]);
var state_86776__$1 = state_86776;
var statearr_86790_88422 = state_86776__$1;
(statearr_86790_88422[(2)] = inst_86737);

(statearr_86790_88422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (5))){
var state_86776__$1 = state_86776;
var statearr_86791_88423 = state_86776__$1;
(statearr_86791_88423[(2)] = true);

(statearr_86791_88423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (14))){
var inst_86768 = (state_86776[(2)]);
var state_86776__$1 = state_86776;
var statearr_86792_88425 = state_86776__$1;
(statearr_86792_88425[(2)] = inst_86768);

(statearr_86792_88425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (10))){
var inst_86764 = (state_86776[(9)]);
var inst_86758 = (state_86776[(2)]);
var inst_86759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_86758,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_86760 = cljs.core.deref(entity_path_cache);
var inst_86761 = cljs.core.PersistentHashMap.EMPTY;
var inst_86762 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_86760,inst_86759,inst_86761);
var inst_86763 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_86762,ent], 0));
var inst_86764__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_86758,inst_86763) : join_item.call(null,inst_86758,inst_86763));
var inst_86765 = com.wsscode.async.async_cljs.chan_QMARK_(inst_86764__$1);
var state_86776__$1 = (function (){var statearr_86793 = state_86776;
(statearr_86793[(9)] = inst_86764__$1);

return statearr_86793;
})();
if(inst_86765){
var statearr_86794_88432 = state_86776__$1;
(statearr_86794_88432[(1)] = (11));

} else {
var statearr_86795_88433 = state_86776__$1;
(statearr_86795_88433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86777 === (8))){
var inst_86737 = (state_86776[(7)]);
var inst_86755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_86737);
var state_86776__$1 = state_86776;
var statearr_86796_88434 = state_86776__$1;
(statearr_86796_88434[(2)] = inst_86755);

(statearr_86796_88434[(1)] = (10));


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
});})(c__47946__auto____$1,vec__86732,ent,i,from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,vec__86732,ent,i,from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_86797 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86797[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__);

(statearr_86797[(1)] = (1));

return statearr_86797;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1 = (function (state_86776){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86776);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86798){if((e86798 instanceof Object)){
var ex__47667__auto__ = e86798;
var statearr_86799_88438 = state_86776;
(statearr_86799_88438[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88439 = state_86776;
state_86776 = G__88439;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = function(state_86776){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1.call(this,state_86776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,vec__86732,ent,i,from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var state__47948__auto__ = (function (){var statearr_86800 = f__47947__auto__();
(statearr_86800[(6)] = c__47946__auto____$1);

return statearr_86800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,vec__86732,ent,i,from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
);

return c__47946__auto____$1;
});
;})(from_chan,join_item,first_res,seq__86657,check_ast_opt_QMARK_,vec__86656,out_chan,ast,env__$1,first__86658,head,tail,inst_86663,inst_86667,inst_86664,inst_86666,inst_86659,inst_86662,inst_86690,inst_86691,inst_86692,inst_86693,inst_86694,inst_86695,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var inst_86697 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_86692,inst_86696,inst_86691);
var inst_86698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86699 = [inst_86690];
var inst_86700 = (new cljs.core.PersistentVector(null,1,(5),inst_86698,inst_86699,null));
var inst_86701 = cljs.core.async.into(inst_86700,inst_86692);
var state_86716__$1 = (function (){var statearr_86801 = state_86716;
(statearr_86801[(15)] = inst_86695);

(statearr_86801[(16)] = inst_86697);

return statearr_86801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86716__$1,(31),inst_86701);
} else {
if((state_val_86717 === (29))){
var state_86716__$1 = state_86716;
var statearr_86802_88444 = state_86716__$1;
(statearr_86802_88444[(2)] = null);

(statearr_86802_88444[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (6))){
var inst_86663 = (state_86716[(9)]);
var inst_86664 = (state_86716[(11)]);
var inst_86666 = (state_86716[(12)]);
var inst_86659 = (state_86716[(13)]);
var inst_86669 = (state_86716[(7)]);
var inst_86662 = (state_86716[(14)]);
var inst_86659__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_86660 = (function (){var ast = inst_86659__$1;
return ((function (ast,inst_86663,inst_86664,inst_86666,inst_86659,inst_86669,inst_86662,inst_86659__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (p1__86583_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__86583_SHARP_));
});
;})(ast,inst_86663,inst_86664,inst_86666,inst_86659,inst_86669,inst_86662,inst_86659__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var inst_86661 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_86659__$1);
var inst_86662__$1 = cljs.core.every_QMARK_(inst_86660,inst_86661);
var inst_86663__$1 = (function (){var ast = inst_86659__$1;
var check_ast_opt_QMARK_ = inst_86662__$1;
return ((function (ast,check_ast_opt_QMARK_,inst_86663,inst_86664,inst_86666,inst_86659,inst_86669,inst_86662,inst_86659__$1,inst_86660,inst_86661,inst_86662__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,ast,check_ast_opt_QMARK_,inst_86663,inst_86664,inst_86666,inst_86659,inst_86669,inst_86662,inst_86659__$1,inst_86660,inst_86661,inst_86662__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__86821){
var map__86822 = p__86821;
var map__86822__$1 = (((((!((map__86822 == null))))?(((((map__86822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86822):map__86822);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86822__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86822__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__86824 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86824,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86824,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,ast,check_ast_opt_QMARK_,inst_86663,inst_86664,inst_86666,inst_86659,inst_86669,inst_86662,inst_86659__$1,inst_86660,inst_86661,inst_86662__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
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
;})(ast,check_ast_opt_QMARK_,inst_86663,inst_86664,inst_86666,inst_86659,inst_86669,inst_86662,inst_86659__$1,inst_86660,inst_86661,inst_86662__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var inst_86664__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_86665 = cljs.core.seq(coll);
var inst_86666__$1 = cljs.core.first(inst_86665);
var inst_86667 = cljs.core.next(inst_86665);
var inst_86668 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_86664__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_86669__$1 = inst_86663__$1(inst_86668,inst_86666__$1);
var inst_86670 = com.wsscode.async.async_cljs.chan_QMARK_(inst_86669__$1);
var state_86716__$1 = (function (){var statearr_86827 = state_86716;
(statearr_86827[(9)] = inst_86663__$1);

(statearr_86827[(10)] = inst_86667);

(statearr_86827[(11)] = inst_86664__$1);

(statearr_86827[(12)] = inst_86666__$1);

(statearr_86827[(13)] = inst_86659__$1);

(statearr_86827[(7)] = inst_86669__$1);

(statearr_86827[(14)] = inst_86662__$1);

return statearr_86827;
})();
if(inst_86670){
var statearr_86828_88463 = state_86716__$1;
(statearr_86828_88463[(1)] = (20));

} else {
var statearr_86829_88464 = state_86716__$1;
(statearr_86829_88464[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (28))){
var inst_86669 = (state_86716[(7)]);
var state_86716__$1 = state_86716;
var statearr_86830_88465 = state_86716__$1;
(statearr_86830_88465[(2)] = inst_86669);

(statearr_86830_88465[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (25))){
var state_86716__$1 = state_86716;
var statearr_86831_88466 = state_86716__$1;
(statearr_86831_88466[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (34))){
var inst_86714 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
return cljs.core.async.impl.ioc_helpers.return_chan(state_86716__$1,inst_86714);
} else {
if((state_val_86717 === (17))){
var state_86716__$1 = state_86716;
var statearr_86833_88470 = state_86716__$1;
(statearr_86833_88470[(2)] = null);

(statearr_86833_88470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (3))){
var inst_86587 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86834_88471 = state_86716__$1;
(statearr_86834_88471[(2)] = inst_86587);


cljs.core.async.impl.ioc_helpers.process_exception(state_86716__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (12))){
var inst_86613 = (state_86716[(17)]);
var inst_86622 = com.wsscode.async.async_cljs.promise__GT_chan(inst_86613);
var state_86716__$1 = state_86716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86716__$1,(15),inst_86622);
} else {
if((state_val_86717 === (2))){
var inst_86707 = (state_86716[(8)]);
var inst_86707__$1 = (state_86716[(2)]);
var inst_86708 = (inst_86707__$1 == null);
var state_86716__$1 = (function (){var statearr_86835 = state_86716;
(statearr_86835[(8)] = inst_86707__$1);

return statearr_86835;
})();
if(cljs.core.truth_(inst_86708)){
var statearr_86836_88472 = state_86716__$1;
(statearr_86836_88472[(1)] = (32));

} else {
var statearr_86837_88473 = state_86716__$1;
(statearr_86837_88473[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (23))){
var inst_86673 = (state_86716[(2)]);
var inst_86674 = com.wsscode.async.async_cljs.throw_err(inst_86673);
var state_86716__$1 = state_86716;
var statearr_86838_88474 = state_86716__$1;
(statearr_86838_88474[(2)] = inst_86674);

(statearr_86838_88474[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (19))){
var inst_86599 = (state_86716[(18)]);
var inst_86647 = (state_86716[(2)]);
var inst_86648 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_86649 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_86650 = ["#e0e3a4","0.8"];
var inst_86651 = cljs.core.PersistentHashMap.fromArrays(inst_86649,inst_86650);
var inst_86652 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_86651];
var inst_86653 = cljs.core.PersistentHashMap.fromArrays(inst_86648,inst_86652);
var inst_86654 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_86599,inst_86653);
var state_86716__$1 = (function (){var statearr_86839 = state_86716;
(statearr_86839[(19)] = inst_86654);

return statearr_86839;
})();
var statearr_86840_88475 = state_86716__$1;
(statearr_86840_88475[(2)] = inst_86647);

(statearr_86840_88475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (11))){
var inst_86617 = (state_86716[(2)]);
var inst_86618 = com.wsscode.async.async_cljs.throw_err(inst_86617);
var state_86716__$1 = state_86716;
var statearr_86841_88476 = state_86716__$1;
(statearr_86841_88476[(2)] = inst_86618);

(statearr_86841_88476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (9))){
var inst_86613 = (state_86716[(17)]);
var inst_86620 = com.wsscode.async.async_cljs.promise_QMARK_(inst_86613);
var state_86716__$1 = state_86716;
if(cljs.core.truth_(inst_86620)){
var statearr_86842_88477 = state_86716__$1;
(statearr_86842_88477[(1)] = (12));

} else {
var statearr_86843_88479 = state_86716__$1;
(statearr_86843_88479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (5))){
var inst_86613 = (state_86716[(17)]);
var inst_86603 = (state_86716[(20)]);
var inst_86599 = (state_86716[(18)]);
var inst_86608 = (state_86716[(21)]);
var inst_86607 = (state_86716[(22)]);
var inst_86610 = (state_86716[(23)]);
var inst_86606 = (state_86716[(24)]);
var inst_86593 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.trace","style","com.wsscode.pathom.trace/style",496837297)];
var inst_86594 = [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_86595 = ["#e0e3a4","0.8"];
var inst_86596 = cljs.core.PersistentHashMap.fromArrays(inst_86594,inst_86595);
var inst_86597 = [new cljs.core.Keyword("com.wsscode.pathom.core","parallel-sequence-loop","com.wsscode.pathom.core/parallel-sequence-loop",1692546245),inst_86596];
var inst_86598 = cljs.core.PersistentHashMap.fromArrays(inst_86593,inst_86597);
var inst_86599__$1 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_86598);
var inst_86603__$1 = edn_query_language.core.query__GT_ast(query_SINGLEQUOTE_);
var inst_86604 = (function (){var trace_id__27094__auto__ = inst_86599__$1;
var ast = inst_86603__$1;
return ((function (trace_id__27094__auto__,ast,inst_86613,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86593,inst_86594,inst_86595,inst_86596,inst_86597,inst_86598,inst_86599__$1,inst_86603__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (p1__86583_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__86583_SHARP_));
});
;})(trace_id__27094__auto__,ast,inst_86613,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86593,inst_86594,inst_86595,inst_86596,inst_86597,inst_86598,inst_86599__$1,inst_86603__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var inst_86605 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_86603__$1);
var inst_86606__$1 = cljs.core.every_QMARK_(inst_86604,inst_86605);
var inst_86607__$1 = (function (){var trace_id__27094__auto__ = inst_86599__$1;
var ast = inst_86603__$1;
var check_ast_opt_QMARK_ = inst_86606__$1;
return ((function (trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_86613,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86593,inst_86594,inst_86595,inst_86596,inst_86597,inst_86598,inst_86599__$1,inst_86603__$1,inst_86604,inst_86605,inst_86606__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_item(env__$1,entity){
var or__4131__auto__ = (function (){var and__4120__auto__ = check_ast_opt_QMARK_;
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_86613,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86593,inst_86594,inst_86595,inst_86596,inst_86597,inst_86598,inst_86599__$1,inst_86603__$1,inst_86604,inst_86605,inst_86606__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (ent,p__86862){
var map__86863 = p__86862;
var map__86863__$1 = (((((!((map__86863 == null))))?(((((map__86863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86863):map__86863);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86863__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86863__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.find(entity,key);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__86865 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86865,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent,cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450),key),v);
} else {
return cljs.core.reduced(null);
}
});})(and__4120__auto__,trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_86613,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86593,inst_86594,inst_86595,inst_86596,inst_86597,inst_86598,inst_86599__$1,inst_86603__$1,inst_86604,inst_86605,inst_86606__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
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
;})(trace_id__27094__auto__,ast,check_ast_opt_QMARK_,inst_86613,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86593,inst_86594,inst_86595,inst_86596,inst_86597,inst_86598,inst_86599__$1,inst_86603__$1,inst_86604,inst_86605,inst_86606__$1,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var inst_86608__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll);
var inst_86609 = cljs.core.seq(coll);
var inst_86610__$1 = cljs.core.first(inst_86609);
var inst_86611 = cljs.core.next(inst_86609);
var inst_86612 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(inst_86608__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,(0));
var inst_86613__$1 = inst_86607__$1(inst_86612,inst_86610__$1);
var inst_86614 = com.wsscode.async.async_cljs.chan_QMARK_(inst_86613__$1);
var state_86716__$1 = (function (){var statearr_86868 = state_86716;
(statearr_86868[(25)] = inst_86611);

(statearr_86868[(17)] = inst_86613__$1);

(statearr_86868[(20)] = inst_86603__$1);

(statearr_86868[(18)] = inst_86599__$1);

(statearr_86868[(21)] = inst_86608__$1);

(statearr_86868[(22)] = inst_86607__$1);

(statearr_86868[(23)] = inst_86610__$1);

(statearr_86868[(24)] = inst_86606__$1);

return statearr_86868;
})();
if(inst_86614){
var statearr_86869_88499 = state_86716__$1;
(statearr_86869_88499[(1)] = (8));

} else {
var statearr_86870_88501 = state_86716__$1;
(statearr_86870_88501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (14))){
var inst_86632 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86871_88502 = state_86716__$1;
(statearr_86871_88502[(2)] = inst_86632);

(statearr_86871_88502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (26))){
var inst_86688 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86872_88503 = state_86716__$1;
(statearr_86872_88503[(2)] = inst_86688);

(statearr_86872_88503[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (16))){
var inst_86613 = (state_86716[(17)]);
var state_86716__$1 = state_86716;
var statearr_86873_88505 = state_86716__$1;
(statearr_86873_88505[(2)] = inst_86613);

(statearr_86873_88505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (30))){
var inst_86686 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86874_88508 = state_86716__$1;
(statearr_86874_88508[(2)] = inst_86686);

(statearr_86874_88508[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (10))){
var inst_86611 = (state_86716[(25)]);
var inst_86603 = (state_86716[(20)]);
var inst_86599 = (state_86716[(18)]);
var inst_86608 = (state_86716[(21)]);
var inst_86607 = (state_86716[(22)]);
var inst_86610 = (state_86716[(23)]);
var inst_86606 = (state_86716[(24)]);
var inst_86634 = (state_86716[(2)]);
var inst_86635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_86636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((10));
var inst_86637 = cljs.core.range.cljs$core$IFn$_invoke$arity$0();
var inst_86638 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,inst_86611,inst_86637);
var inst_86639 = cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(inst_86635,inst_86638);
var inst_86640 = (function (){var from_chan = inst_86635;
var join_item = inst_86607;
var first_res = inst_86634;
var check_ast_opt_QMARK_ = inst_86606;
var out_chan = inst_86636;
var seq__86601 = inst_86611;
var ast = inst_86603;
var env__$1 = inst_86608;
var head = inst_86610;
var trace_id__27094__auto__ = inst_86599;
var first__86602 = inst_86610;
var vec__86600 = coll;
var tail = inst_86611;
return ((function (from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline(p__86875,res_ch){
var vec__86876 = p__86875;
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86876,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86876,(1),null);
var c__47946__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto____$1,vec__86876,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto____$1,vec__86876,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function (state_86920){
var state_val_86921 = (state_86920[(1)]);
if((state_val_86921 === (7))){
var inst_86894 = (state_86920[(2)]);
var state_86920__$1 = state_86920;
var statearr_86922_88513 = state_86920__$1;
(statearr_86922_88513[(2)] = inst_86894);

(statearr_86922_88513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (1))){
var inst_86881 = (state_86920[(7)]);
var inst_86880 = (i + (1));
var inst_86881__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,inst_86880);
var inst_86883 = (inst_86881__$1 == null);
var inst_86884 = cljs.core.not(inst_86883);
var state_86920__$1 = (function (){var statearr_86923 = state_86920;
(statearr_86923[(7)] = inst_86881__$1);

return statearr_86923;
})();
if(inst_86884){
var statearr_86924_88518 = state_86920__$1;
(statearr_86924_88518[(1)] = (2));

} else {
var statearr_86925_88519 = state_86920__$1;
(statearr_86925_88519[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (4))){
var inst_86897 = (state_86920[(2)]);
var state_86920__$1 = state_86920;
if(cljs.core.truth_(inst_86897)){
var statearr_86926_88520 = state_86920__$1;
(statearr_86926_88520[(1)] = (8));

} else {
var statearr_86927_88521 = state_86920__$1;
(statearr_86927_88521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (15))){
var inst_86917 = (state_86920[(2)]);
var inst_86918 = cljs.core.async.close_BANG_(res_ch);
var state_86920__$1 = (function (){var statearr_86928 = state_86920;
(statearr_86928[(8)] = inst_86917);

return statearr_86928;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_86920__$1,inst_86918);
} else {
if((state_val_86921 === (13))){
var inst_86915 = (state_86920[(2)]);
var state_86920__$1 = state_86920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_86920__$1,(15),res_ch,inst_86915);
} else {
if((state_val_86921 === (6))){
var state_86920__$1 = state_86920;
var statearr_86929_88524 = state_86920__$1;
(statearr_86929_88524[(2)] = false);

(statearr_86929_88524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (3))){
var state_86920__$1 = state_86920;
var statearr_86930_88526 = state_86920__$1;
(statearr_86930_88526[(2)] = false);

(statearr_86930_88526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (12))){
var inst_86908 = (state_86920[(9)]);
var state_86920__$1 = state_86920;
var statearr_86931_88530 = state_86920__$1;
(statearr_86931_88530[(2)] = inst_86908);

(statearr_86931_88530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (2))){
var inst_86881 = (state_86920[(7)]);
var inst_86886 = inst_86881.cljs$lang$protocol_mask$partition0$;
var inst_86887 = (inst_86886 & (64));
var inst_86888 = inst_86881.cljs$core$ISeq$;
var inst_86889 = (cljs.core.PROTOCOL_SENTINEL === inst_86888);
var inst_86890 = ((inst_86887) || (inst_86889));
var state_86920__$1 = state_86920;
if(cljs.core.truth_(inst_86890)){
var statearr_86932_88532 = state_86920__$1;
(statearr_86932_88532[(1)] = (5));

} else {
var statearr_86933_88534 = state_86920__$1;
(statearr_86933_88534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (11))){
var inst_86908 = (state_86920[(9)]);
var state_86920__$1 = state_86920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86920__$1,(14),inst_86908);
} else {
if((state_val_86921 === (9))){
var inst_86881 = (state_86920[(7)]);
var state_86920__$1 = state_86920;
var statearr_86934_88539 = state_86920__$1;
(statearr_86934_88539[(2)] = inst_86881);

(statearr_86934_88539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (5))){
var state_86920__$1 = state_86920;
var statearr_86935_88540 = state_86920__$1;
(statearr_86935_88540[(2)] = true);

(statearr_86935_88540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (14))){
var inst_86912 = (state_86920[(2)]);
var state_86920__$1 = state_86920;
var statearr_86936_88541 = state_86920__$1;
(statearr_86936_88541[(2)] = inst_86912);

(statearr_86936_88541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (10))){
var inst_86908 = (state_86920[(9)]);
var inst_86902 = (state_86920[(2)]);
var inst_86903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_86902,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var inst_86904 = cljs.core.deref(entity_path_cache);
var inst_86905 = cljs.core.PersistentHashMap.EMPTY;
var inst_86906 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_86904,inst_86903,inst_86905);
var inst_86907 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_86906,ent], 0));
var inst_86908__$1 = (join_item.cljs$core$IFn$_invoke$arity$2 ? join_item.cljs$core$IFn$_invoke$arity$2(inst_86902,inst_86907) : join_item.call(null,inst_86902,inst_86907));
var inst_86909 = com.wsscode.async.async_cljs.chan_QMARK_(inst_86908__$1);
var state_86920__$1 = (function (){var statearr_86937 = state_86920;
(statearr_86937[(9)] = inst_86908__$1);

return statearr_86937;
})();
if(inst_86909){
var statearr_86938_88551 = state_86920__$1;
(statearr_86938_88551[(1)] = (11));

} else {
var statearr_86939_88552 = state_86920__$1;
(statearr_86939_88552[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86921 === (8))){
var inst_86881 = (state_86920[(7)]);
var inst_86899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_86881);
var state_86920__$1 = state_86920;
var statearr_86940_88554 = state_86920__$1;
(statearr_86940_88554[(2)] = inst_86899);

(statearr_86940_88554[(1)] = (10));


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
});})(c__47946__auto____$1,vec__86876,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__47663__auto__,c__47946__auto____$1,vec__86876,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0 = (function (){
var statearr_86941 = [null,null,null,null,null,null,null,null,null,null];
(statearr_86941[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__);

(statearr_86941[(1)] = (1));

return statearr_86941;
});
var com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1 = (function (state_86920){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86920);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86942){if((e86942 instanceof Object)){
var ex__47667__auto__ = e86942;
var statearr_86943_88565 = state_86920;
(statearr_86943_88565[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88568 = state_86920;
state_86920 = G__88568;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__ = function(state_86920){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1.call(this,state_86920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_join_seq_pipeline_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto____$1,vec__86876,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var state__47948__auto__ = (function (){var statearr_86944 = f__47947__auto__();
(statearr_86944[(6)] = c__47946__auto____$1);

return statearr_86944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto____$1,vec__86876,ent,i,from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
);

return c__47946__auto____$1;
});
;})(from_chan,join_item,first_res,check_ast_opt_QMARK_,out_chan,seq__86601,ast,env__$1,head,trace_id__27094__auto__,first__86602,vec__86600,tail,inst_86611,inst_86603,inst_86599,inst_86608,inst_86607,inst_86610,inst_86606,inst_86634,inst_86635,inst_86636,inst_86637,inst_86638,inst_86639,state_val_86717,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var inst_86641 = cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((10),inst_86636,inst_86640,inst_86635);
var inst_86642 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86643 = [inst_86634];
var inst_86644 = (new cljs.core.PersistentVector(null,1,(5),inst_86642,inst_86643,null));
var inst_86645 = cljs.core.async.into(inst_86644,inst_86636);
var state_86716__$1 = (function (){var statearr_86945 = state_86716;
(statearr_86945[(26)] = inst_86641);

(statearr_86945[(27)] = inst_86639);

return statearr_86945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86716__$1,(19),inst_86645);
} else {
if((state_val_86717 === (18))){
var inst_86630 = (state_86716[(2)]);
var state_86716__$1 = state_86716;
var statearr_86946_88576 = state_86716__$1;
(statearr_86946_88576[(2)] = inst_86630);

(statearr_86946_88576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86717 === (8))){
var inst_86613 = (state_86716[(17)]);
var state_86716__$1 = state_86716;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_86716__$1,(11),inst_86613);
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
});})(c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
;
return ((function (switch__47663__auto__,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query){
return (function() {
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____0 = (function (){
var statearr_86947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86947[(0)] = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__);

(statearr_86947[(1)] = (1));

return statearr_86947;
});
var com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____1 = (function (state_86716){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_86716);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e86948){if((e86948 instanceof Object)){
var ex__47667__auto__ = e86948;
var statearr_86949_88578 = state_86716;
(statearr_86949_88578[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_86716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88580 = state_86716;
state_86716 = G__88580;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__ = function(state_86716){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____1.call(this,state_86716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_parallel_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
})();
var state__47948__auto__ = (function (){var statearr_86950 = f__47947__auto__();
(statearr_86950[(6)] = c__47946__auto___88372);

return statearr_86950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___88372,ch__53519__auto__,query_SINGLEQUOTE_,map__86585,map__86585__$1,env,query,entity_path_cache,parent_query))
);


return ch__53519__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Runs the current subquery against the items of the given collection.
 */
com.wsscode.pathom.core.join_seq = (function com$wsscode$pathom$core$join_seq(p__86951,coll){
var map__86952 = p__86951;
var map__86952__$1 = (((((!((map__86952 == null))))?(((((map__86952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__86952):map__86952);
var env = map__86952__$1;
var parallel_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__86952__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","join-seq","com.wsscode.pathom.core/join-seq",523699901),new cljs.core.Keyword("com.wsscode.pathom.core","seq-count","com.wsscode.pathom.core/seq-count",-1671473836),cljs.core.count(coll)], null));

if(cljs.core.truth_(parallel_QMARK_)){
return com.wsscode.pathom.core.join_seq_parallel(env,coll);
} else {
var join_item = ((function (map__86952,map__86952__$1,env,parallel_QMARK_){
return (function com$wsscode$pathom$core$join_seq_$_join_item(ent,out){
return com.wsscode.pathom.core.join.cljs$core$IFn$_invoke$arity$2(ent,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","processing-sequence","com.wsscode.pathom.core/processing-sequence",1929448637),coll),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.conj,cljs.core.count(out)));
});})(map__86952,map__86952__$1,env,parallel_QMARK_))
;
var out = cljs.core.PersistentVector.EMPTY;
var G__86957 = coll;
var vec__86958 = G__86957;
var seq__86959 = cljs.core.seq(vec__86958);
var first__86960 = cljs.core.first(seq__86959);
var seq__86959__$1 = cljs.core.next(seq__86959);
var ent = first__86960;
var tail = seq__86959__$1;
var out__$1 = out;
var G__86957__$1 = G__86957;
while(true){
var out__$2 = out__$1;
var vec__87039 = G__86957__$1;
var seq__87040 = cljs.core.seq(vec__87039);
var first__87041 = cljs.core.first(seq__87040);
var seq__87040__$1 = cljs.core.next(seq__87040);
var ent__$1 = first__87041;
var tail__$1 = seq__87040__$1;
if(cljs.core.truth_(ent__$1)){
var res = join_item(ent__$1,out__$2);
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___88585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__86957__$1,c__47946__auto___88585,ch__53519__auto__,res,out__$2,vec__87039,seq__87040,first__87041,seq__87040__$1,ent__$1,tail__$1,out,G__86957,vec__86958,seq__86959,first__86960,seq__86959__$1,ent,tail,map__86952,map__86952__$1,env,parallel_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (out__$1,G__86957__$1,c__47946__auto___88585,ch__53519__auto__,res,out__$2,vec__87039,seq__87040,first__87041,seq__87040__$1,ent__$1,tail__$1,out,G__86957,vec__86958,seq__86959,first__86960,seq__86959__$1,ent,tail,map__86952,map__86952__$1,env,parallel_QMARK_){
return (function (state_87093){
var state_val_87094 = (state_87093[(1)]);
if((state_val_87094 === (7))){
var inst_87082 = (state_87093[(2)]);
var state_87093__$1 = state_87093;
var statearr_87095_88591 = state_87093__$1;
(statearr_87095_88591[(2)] = inst_87082);


cljs.core.async.impl.ioc_helpers.process_exception(state_87093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (1))){
var state_87093__$1 = state_87093;
var statearr_87096_88592 = state_87093__$1;
(statearr_87096_88592[(2)] = null);

(statearr_87096_88592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87093,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_87053 = cljs.core.PersistentVector.EMPTY_NODE;
var state_87093__$1 = (function (){var statearr_87097 = state_87093;
(statearr_87097[(7)] = inst_87053);

return statearr_87097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87093__$1,(5),res);
} else {
if((state_val_87094 === (13))){
var inst_87084 = (state_87093[(8)]);
var inst_87089 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_87084);
var state_87093__$1 = state_87093;
var statearr_87098_88596 = state_87093__$1;
(statearr_87098_88596[(2)] = inst_87089);

(statearr_87098_88596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (6))){
var inst_87069 = (state_87093[(9)]);
var inst_87063 = (state_87093[(10)]);
var inst_87068 = cljs.core.seq(inst_87063);
var inst_87069__$1 = cljs.core.first(inst_87068);
var inst_87070 = cljs.core.next(inst_87068);
var state_87093__$1 = (function (){var statearr_87099 = state_87093;
(statearr_87099[(11)] = inst_87070);

(statearr_87099[(9)] = inst_87069__$1);

return statearr_87099;
})();
if(cljs.core.truth_(inst_87069__$1)){
var statearr_87100_88599 = state_87093__$1;
(statearr_87100_88599[(1)] = (8));

} else {
var statearr_87101_88600 = state_87093__$1;
(statearr_87101_88600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (3))){
var inst_87042 = (state_87093[(2)]);
var state_87093__$1 = state_87093;
var statearr_87102_88601 = state_87093__$1;
(statearr_87102_88601[(2)] = inst_87042);


cljs.core.async.impl.ioc_helpers.process_exception(state_87093__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (12))){
var inst_87087 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_87093__$1 = state_87093;
var statearr_87103_88606 = state_87093__$1;
(statearr_87103_88606[(2)] = inst_87087);

(statearr_87103_88606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (2))){
var inst_87084 = (state_87093[(8)]);
var inst_87084__$1 = (state_87093[(2)]);
var inst_87085 = (inst_87084__$1 == null);
var state_87093__$1 = (function (){var statearr_87104 = state_87093;
(statearr_87104[(8)] = inst_87084__$1);

return statearr_87104;
})();
if(cljs.core.truth_(inst_87085)){
var statearr_87105_88610 = state_87093__$1;
(statearr_87105_88610[(1)] = (12));

} else {
var statearr_87106_88611 = state_87093__$1;
(statearr_87106_88611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (11))){
var inst_87070 = (state_87093[(11)]);
var inst_87062 = (state_87093[(12)]);
var inst_87074 = (state_87093[(2)]);
var inst_87075 = com.wsscode.async.async_cljs.throw_err(inst_87074);
var inst_87076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_87062,inst_87075);
var inst_87062__$1 = inst_87076;
var inst_87063 = inst_87070;
var state_87093__$1 = (function (){var statearr_87107 = state_87093;
(statearr_87107[(12)] = inst_87062__$1);

(statearr_87107[(10)] = inst_87063);

return statearr_87107;
})();
var statearr_87108_88618 = state_87093__$1;
(statearr_87108_88618[(2)] = null);

(statearr_87108_88618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (9))){
var inst_87062 = (state_87093[(12)]);
var state_87093__$1 = state_87093;
var statearr_87109_88628 = state_87093__$1;
(statearr_87109_88628[(2)] = inst_87062);

(statearr_87109_88628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (5))){
var inst_87053 = (state_87093[(7)]);
var inst_87055 = (state_87093[(2)]);
var inst_87056 = com.wsscode.async.async_cljs.throw_err(inst_87055);
var inst_87057 = [inst_87056];
var inst_87058 = (new cljs.core.PersistentVector(null,1,(5),inst_87053,inst_87057,null));
var inst_87059 = cljs.core.seq(tail__$1);
var inst_87060 = cljs.core.first(inst_87059);
var inst_87061 = cljs.core.next(inst_87059);
var inst_87062 = inst_87058;
var inst_87063 = tail__$1;
var state_87093__$1 = (function (){var statearr_87110 = state_87093;
(statearr_87110[(13)] = inst_87060);

(statearr_87110[(14)] = inst_87061);

(statearr_87110[(12)] = inst_87062);

(statearr_87110[(10)] = inst_87063);

return statearr_87110;
})();
var statearr_87111_88670 = state_87093__$1;
(statearr_87111_88670[(2)] = null);

(statearr_87111_88670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (14))){
var inst_87091 = (state_87093[(2)]);
var state_87093__$1 = state_87093;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87093__$1,inst_87091);
} else {
if((state_val_87094 === (10))){
var inst_87080 = (state_87093[(2)]);
var state_87093__$1 = state_87093;
var statearr_87112_88684 = state_87093__$1;
(statearr_87112_88684[(2)] = inst_87080);

(statearr_87112_88684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87094 === (8))){
var inst_87062 = (state_87093[(12)]);
var inst_87069 = (state_87093[(9)]);
var inst_87072 = join_item(inst_87069,inst_87062);
var state_87093__$1 = state_87093;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87093__$1,(11),inst_87072);
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
});})(out__$1,G__86957__$1,c__47946__auto___88585,ch__53519__auto__,res,out__$2,vec__87039,seq__87040,first__87041,seq__87040__$1,ent__$1,tail__$1,out,G__86957,vec__86958,seq__86959,first__86960,seq__86959__$1,ent,tail,map__86952,map__86952__$1,env,parallel_QMARK_))
;
return ((function (out__$1,G__86957__$1,switch__47663__auto__,c__47946__auto___88585,ch__53519__auto__,res,out__$2,vec__87039,seq__87040,first__87041,seq__87040__$1,ent__$1,tail__$1,out,G__86957,vec__86958,seq__86959,first__86960,seq__86959__$1,ent,tail,map__86952,map__86952__$1,env,parallel_QMARK_){
return (function() {
var com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____0 = (function (){
var statearr_87113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87113[(0)] = com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__);

(statearr_87113[(1)] = (1));

return statearr_87113;
});
var com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____1 = (function (state_87093){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87093);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87114){if((e87114 instanceof Object)){
var ex__47667__auto__ = e87114;
var statearr_87115_88689 = state_87093;
(statearr_87115_88689[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88690 = state_87093;
state_87093 = G__88690;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__ = function(state_87093){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____1.call(this,state_87093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_seq_$_state_machine__47664__auto__;
})()
;})(out__$1,G__86957__$1,switch__47663__auto__,c__47946__auto___88585,ch__53519__auto__,res,out__$2,vec__87039,seq__87040,first__87041,seq__87040__$1,ent__$1,tail__$1,out,G__86957,vec__86958,seq__86959,first__86960,seq__86959__$1,ent,tail,map__86952,map__86952__$1,env,parallel_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_87116 = f__47947__auto__();
(statearr_87116[(6)] = c__47946__auto___88585);

return statearr_87116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(out__$1,G__86957__$1,c__47946__auto___88585,ch__53519__auto__,res,out__$2,vec__87039,seq__87040,first__87041,seq__87040__$1,ent__$1,tail__$1,out,G__86957,vec__86958,seq__86959,first__86960,seq__86959__$1,ent,tail,map__86952,map__86952__$1,env,parallel_QMARK_))
);


return ch__53519__auto__;
} else {
var G__88691 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out__$2,res);
var G__88692 = tail__$1;
out__$1 = G__88691;
G__86957__$1 = G__88692;
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
var G__87120 = m;
var vec__87121 = G__87120;
var seq__87122 = cljs.core.seq(vec__87121);
var first__87123 = cljs.core.first(seq__87122);
var seq__87122__$1 = cljs.core.next(seq__87122);
var pair = first__87123;
var tail = seq__87122__$1;
var out__$1 = out;
var G__87120__$1 = G__87120;
while(true){
var out__$2 = out__$1;
var vec__87211 = G__87120__$1;
var seq__87212 = cljs.core.seq(vec__87211);
var first__87213 = cljs.core.first(seq__87212);
var seq__87212__$1 = cljs.core.next(seq__87212);
var pair__$1 = first__87213;
var tail__$1 = seq__87212__$1;
if(cljs.core.truth_(pair__$1)){
var vec__87214 = pair__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87214,(0),null);
var ent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87214,(1),null);
var res = join_item(k,ent);
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___88701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (out__$1,G__87120__$1,c__47946__auto___88701,ch__53519__auto__,vec__87214,k,ent,res,out__$2,vec__87211,seq__87212,first__87213,seq__87212__$1,pair__$1,tail__$1,out,G__87120,vec__87121,seq__87122,first__87123,seq__87122__$1,pair,tail){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (out__$1,G__87120__$1,c__47946__auto___88701,ch__53519__auto__,vec__87214,k,ent,res,out__$2,vec__87211,seq__87212,first__87213,seq__87212__$1,pair__$1,tail__$1,out,G__87120,vec__87121,seq__87122,first__87123,seq__87122__$1,pair,tail){
return (function (state_87273){
var state_val_87274 = (state_87273[(1)]);
if((state_val_87274 === (7))){
var inst_87262 = (state_87273[(2)]);
var state_87273__$1 = state_87273;
var statearr_87275_88703 = state_87273__$1;
(statearr_87275_88703[(2)] = inst_87262);


cljs.core.async.impl.ioc_helpers.process_exception(state_87273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (1))){
var state_87273__$1 = state_87273;
var statearr_87276_88705 = state_87273__$1;
(statearr_87276_88705[(2)] = null);

(statearr_87276_88705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87273,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_87228 = [k];
var state_87273__$1 = (function (){var statearr_87277 = state_87273;
(statearr_87277[(7)] = inst_87228);

return statearr_87277;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87273__$1,(5),res);
} else {
if((state_val_87274 === (13))){
var inst_87264 = (state_87273[(8)]);
var inst_87269 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_87264);
var state_87273__$1 = state_87273;
var statearr_87278_88714 = state_87273__$1;
(statearr_87278_88714[(2)] = inst_87269);

(statearr_87278_88714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (6))){
var inst_87238 = (state_87273[(9)]);
var inst_87244 = (state_87273[(10)]);
var inst_87243 = cljs.core.seq(inst_87238);
var inst_87244__$1 = cljs.core.first(inst_87243);
var inst_87245 = cljs.core.next(inst_87243);
var state_87273__$1 = (function (){var statearr_87279 = state_87273;
(statearr_87279[(11)] = inst_87245);

(statearr_87279[(10)] = inst_87244__$1);

return statearr_87279;
})();
if(cljs.core.truth_(inst_87244__$1)){
var statearr_87280_88720 = state_87273__$1;
(statearr_87280_88720[(1)] = (8));

} else {
var statearr_87281_88721 = state_87273__$1;
(statearr_87281_88721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (3))){
var inst_87217 = (state_87273[(2)]);
var state_87273__$1 = state_87273;
var statearr_87282_88723 = state_87273__$1;
(statearr_87282_88723[(2)] = inst_87217);


cljs.core.async.impl.ioc_helpers.process_exception(state_87273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (12))){
var inst_87267 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_87273__$1 = state_87273;
var statearr_87283_88726 = state_87273__$1;
(statearr_87283_88726[(2)] = inst_87267);

(statearr_87283_88726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (2))){
var inst_87264 = (state_87273[(8)]);
var inst_87264__$1 = (state_87273[(2)]);
var inst_87265 = (inst_87264__$1 == null);
var state_87273__$1 = (function (){var statearr_87284 = state_87273;
(statearr_87284[(8)] = inst_87264__$1);

return statearr_87284;
})();
if(cljs.core.truth_(inst_87265)){
var statearr_87285_88729 = state_87273__$1;
(statearr_87285_88729[(1)] = (12));

} else {
var statearr_87286_88730 = state_87273__$1;
(statearr_87286_88730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (11))){
var inst_87250 = (state_87273[(12)]);
var inst_87237 = (state_87273[(13)]);
var inst_87245 = (state_87273[(11)]);
var inst_87254 = (state_87273[(2)]);
var inst_87255 = com.wsscode.async.async_cljs.throw_err(inst_87254);
var inst_87256 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_87237,inst_87250,inst_87255);
var inst_87237__$1 = inst_87256;
var inst_87238 = inst_87245;
var state_87273__$1 = (function (){var statearr_87287 = state_87273;
(statearr_87287[(13)] = inst_87237__$1);

(statearr_87287[(9)] = inst_87238);

return statearr_87287;
})();
var statearr_87288_88733 = state_87273__$1;
(statearr_87288_88733[(2)] = null);

(statearr_87288_88733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (9))){
var inst_87237 = (state_87273[(13)]);
var state_87273__$1 = state_87273;
var statearr_87289_88734 = state_87273__$1;
(statearr_87289_88734[(2)] = inst_87237);

(statearr_87289_88734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (5))){
var inst_87228 = (state_87273[(7)]);
var inst_87230 = (state_87273[(2)]);
var inst_87231 = com.wsscode.async.async_cljs.throw_err(inst_87230);
var inst_87232 = [inst_87231];
var inst_87233 = cljs.core.PersistentHashMap.fromArrays(inst_87228,inst_87232);
var inst_87234 = cljs.core.seq(tail__$1);
var inst_87235 = cljs.core.first(inst_87234);
var inst_87236 = cljs.core.next(inst_87234);
var inst_87237 = inst_87233;
var inst_87238 = tail__$1;
var state_87273__$1 = (function (){var statearr_87290 = state_87273;
(statearr_87290[(14)] = inst_87236);

(statearr_87290[(13)] = inst_87237);

(statearr_87290[(9)] = inst_87238);

(statearr_87290[(15)] = inst_87235);

return statearr_87290;
})();
var statearr_87291_88738 = state_87273__$1;
(statearr_87291_88738[(2)] = null);

(statearr_87291_88738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (14))){
var inst_87271 = (state_87273[(2)]);
var state_87273__$1 = state_87273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87273__$1,inst_87271);
} else {
if((state_val_87274 === (10))){
var inst_87260 = (state_87273[(2)]);
var state_87273__$1 = state_87273;
var statearr_87292_88747 = state_87273__$1;
(statearr_87292_88747[(2)] = inst_87260);

(statearr_87292_88747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87274 === (8))){
var inst_87250 = (state_87273[(12)]);
var inst_87244 = (state_87273[(10)]);
var inst_87250__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_87244,(0),null);
var inst_87251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_87244,(1),null);
var inst_87252 = join_item(inst_87250__$1,inst_87251);
var state_87273__$1 = (function (){var statearr_87293 = state_87273;
(statearr_87293[(12)] = inst_87250__$1);

return statearr_87293;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87273__$1,(11),inst_87252);
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
});})(out__$1,G__87120__$1,c__47946__auto___88701,ch__53519__auto__,vec__87214,k,ent,res,out__$2,vec__87211,seq__87212,first__87213,seq__87212__$1,pair__$1,tail__$1,out,G__87120,vec__87121,seq__87122,first__87123,seq__87122__$1,pair,tail))
;
return ((function (out__$1,G__87120__$1,switch__47663__auto__,c__47946__auto___88701,ch__53519__auto__,vec__87214,k,ent,res,out__$2,vec__87211,seq__87212,first__87213,seq__87212__$1,pair__$1,tail__$1,out,G__87120,vec__87121,seq__87122,first__87123,seq__87122__$1,pair,tail){
return (function() {
var com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____0 = (function (){
var statearr_87294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87294[(0)] = com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__);

(statearr_87294[(1)] = (1));

return statearr_87294;
});
var com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____1 = (function (state_87273){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87273);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87295){if((e87295 instanceof Object)){
var ex__47667__auto__ = e87295;
var statearr_87296_88751 = state_87273;
(statearr_87296_88751[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88752 = state_87273;
state_87273 = G__88752;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__ = function(state_87273){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____1.call(this,state_87273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$join_map_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$join_map_$_state_machine__47664__auto__;
})()
;})(out__$1,G__87120__$1,switch__47663__auto__,c__47946__auto___88701,ch__53519__auto__,vec__87214,k,ent,res,out__$2,vec__87211,seq__87212,first__87213,seq__87212__$1,pair__$1,tail__$1,out,G__87120,vec__87121,seq__87122,first__87123,seq__87122__$1,pair,tail))
})();
var state__47948__auto__ = (function (){var statearr_87297 = f__47947__auto__();
(statearr_87297[(6)] = c__47946__auto___88701);

return statearr_87297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(out__$1,G__87120__$1,c__47946__auto___88701,ch__53519__auto__,vec__87214,k,ent,res,out__$2,vec__87211,seq__87212,first__87213,seq__87212__$1,pair__$1,tail__$1,out,G__87120,vec__87121,seq__87122,first__87123,seq__87122__$1,pair,tail))
);


return ch__53519__auto__;
} else {
var G__88756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out__$2,k,res);
var G__88757 = tail__$1;
out__$1 = G__88756;
G__87120__$1 = G__88757;
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
com.wsscode.pathom.core.ident_key = (function com$wsscode$pathom$core$ident_key(p__87298){
var map__87299 = p__87298;
var map__87299__$1 = (((((!((map__87299 == null))))?(((((map__87299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87299):map__87299);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87299__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__87301 = ast;
if((G__87301 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__87301);
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
com.wsscode.pathom.core.ident_value = (function com$wsscode$pathom$core$ident_value(p__87302){
var map__87303 = p__87302;
var map__87303__$1 = (((((!((map__87303 == null))))?(((((map__87303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87303):map__87303);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87303__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var key = (function (){var G__87305 = ast;
if((G__87305 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__87305);
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
com.wsscode.pathom.core.elide_ast_nodes = (function com$wsscode$pathom$core$elide_ast_nodes(p__87307,elision_set){
var map__87308 = p__87307;
var map__87308__$1 = (((((!((map__87308 == null))))?(((((map__87308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87308):map__87308);
var ast = map__87308__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87308__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87308__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var union_elision_QMARK_ = cljs.core.contains_QMARK_(elision_set,union_key);
if(((union_elision_QMARK_) || (cljs.core.contains_QMARK_(elision_set,key)))){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"children","children",-940561982),((function (union_elision_QMARK_,map__87308,map__87308__$1,ast,key,union_key){
return (function (c){
if(cljs.core.truth_(c)){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (union_elision_QMARK_,map__87308,map__87308__$1,ast,key,union_key){
return (function (p1__87306_SHARP_){
return (com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.core.elide_ast_nodes.cljs$core$IFn$_invoke$arity$2(p1__87306_SHARP_,elision_set) : com.wsscode.pathom.core.elide_ast_nodes.call(null,p1__87306_SHARP_,elision_set));
});})(union_elision_QMARK_,map__87308,map__87308__$1,ast,key,union_key))
,c));
} else {
return null;
}
});})(union_elision_QMARK_,map__87308,map__87308__$1,ast,key,union_key))
);
}
});
com.wsscode.pathom.core.normalize_env = (function com$wsscode$pathom$core$normalize_env(p__87310){
var map__87311 = p__87310;
var map__87311__$1 = (((((!((map__87311 == null))))?(((((map__87311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87311):map__87311);
var env = map__87311__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87311__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__87313 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
if((new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249).cljs$core$IFn$_invoke$arity$1(env) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87313,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
} else {
return G__87313;
}
});
com.wsscode.pathom.core.merge_queries_STAR_ = (function com$wsscode$pathom$core$merge_queries_STAR_(qa,qb){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ast,p__87316){
var map__87317 = p__87316;
var map__87317__$1 = (((((!((map__87317 == null))))?(((((map__87317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87317):map__87317);
var item_b = map__87317__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87317__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87317__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87317__$1,new cljs.core.Keyword(null,"params","params",710516235));
var temp__5718__auto__ = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__87317,map__87317__$1,item_b,key,type,params){
return (function (p1__87315_SHARP_,p2__87314_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p2__87314_SHARP_),key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__87315_SHARP_,p2__87314_SHARP_], null);
} else {
return null;
}
});})(map__87317,map__87317__$1,item_b,key,type,params))
,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__87319 = temp__5718__auto__;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87319,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87319,(1),null);
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
var G__87322 = com.wsscode.pathom.core.merge_queries_STAR_(com.wsscode.pathom.core.query__GT_ast(qa),com.wsscode.pathom.core.query__GT_ast(qb));
if((G__87322 == null)){
return null;
} else {
return com.wsscode.pathom.core.ast__GT_query(G__87322);
}
});
/**
 * Converts ident values and param values to ::p/var.
 */
com.wsscode.pathom.core.normalize_query_variables = (function com$wsscode$pathom$core$normalize_query_variables(query){
return com.wsscode.pathom.core.ast__GT_query(com.wsscode.pathom.core.transduce_children(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
var G__87324 = x;
var G__87324__$1 = ((com.wsscode.pathom.core.ident_QMARK_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87324,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null)):G__87324);
if(cljs.core.truth_(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__87324__$1,new cljs.core.Keyword(null,"params","params",710516235),((function (G__87324,G__87324__$1){
return (function (p1__87323_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__87324,G__87324__$1){
return (function (p__87325){
var vec__87326 = p__87325;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87326,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87326,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("com.wsscode.pathom.core","var","com.wsscode.pathom.core/var",-2126559442)], null);
});})(G__87324,G__87324__$1))
),p1__87323_SHARP_);
});})(G__87324,G__87324__$1))
);
} else {
return G__87324__$1;
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
com.wsscode.pathom.core.key_dispatch = (function com$wsscode$pathom$core$key_dispatch(p__87329){
var map__87330 = p__87329;
var map__87330__$1 = (((((!((map__87330 == null))))?(((((map__87330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87330):map__87330);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87330__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
});
/**
 * Dispatch on the first element (type) of an incoming ident.
 */
com.wsscode.pathom.core.entity_dispatch = (function com$wsscode$pathom$core$entity_dispatch(p__87332){
var map__87333 = p__87332;
var map__87333__$1 = (((((!((map__87333 == null))))?(((((map__87333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87333):map__87333);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87333__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.env_placeholder_reader = (function com$wsscode$pathom$core$env_placeholder_reader(p__87335){
var map__87336 = p__87335;
var map__87336__$1 = (((((!((map__87336 == null))))?(((((map__87336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87336):map__87336);
var env = map__87336__$1;
var placeholder_prefixes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87336__$1,new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644));
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
var map__87339 = cljs.core.group_by(((function (children,temp__5718__auto__){
return (function (p1__87338_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__87338_SHARP_))) && (com.wsscode.pathom.core.placeholder_key_QMARK_(env,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(p1__87338_SHARP_))));
});})(children,temp__5718__auto__))
,children);
var map__87339__$1 = (((((!((map__87339 == null))))?(((((map__87339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87339):map__87339);
var placeholders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87339__$1,true);
var regular = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87339__$1,false);
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
com.wsscode.pathom.core.join_children_QMARK_ = (function com$wsscode$pathom$core$join_children_QMARK_(p__87341,v){
var map__87342 = p__87341;
var map__87342__$1 = (((((!((map__87342 == null))))?(((((map__87342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87342):map__87342);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87342__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.core.map_reader = (function com$wsscode$pathom$core$map_reader(p__87344){
var map__87345 = p__87344;
var map__87345__$1 = (((((!((map__87345 == null))))?(((((map__87345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87345):map__87345);
var env = map__87345__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87345__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87345__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
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
com.wsscode.pathom.core.map_reader_STAR_ = (function com$wsscode$pathom$core$map_reader_STAR_(p__87347){
var map__87348 = p__87347;
var map__87348__$1 = (((((!((map__87348 == null))))?(((((map__87348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87348):map__87348);
var map_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87348__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800));
var map_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87348__$1,new cljs.core.Keyword("com.wsscode.pathom.core","map-value-transform","com.wsscode.pathom.core/map-value-transform",1252006952));
return ((function (map__87348,map__87348__$1,map_key_transform,map_value_transform){
return (function (p__87350){
var map__87351 = p__87350;
var map__87351__$1 = (((((!((map__87351 == null))))?(((((map__87351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87351):map__87351);
var env = map__87351__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87351__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87351__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87351__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var key = (function (){var G__87353 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(map_key_transform)){
return (map_key_transform.cljs$core$IFn$_invoke$arity$1 ? map_key_transform.cljs$core$IFn$_invoke$arity$1(G__87353) : map_key_transform.call(null,G__87353));
} else {
return G__87353;
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
var G__87354 = v;
if(cljs.core.truth_(map_value_transform)){
var G__87355 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__87356 = G__87354;
return (map_value_transform.cljs$core$IFn$_invoke$arity$2 ? map_value_transform.cljs$core$IFn$_invoke$arity$2(G__87355,G__87356) : map_value_transform.call(null,G__87355,G__87356));
} else {
return G__87354;
}
}

}
}
} else {
return new cljs.core.Keyword("com.wsscode.pathom.core","continue","com.wsscode.pathom.core/continue",591698194);
}
});
;})(map__87348,map__87348__$1,map_key_transform,map_value_transform))
});
/**
 * Like map-reader*, but handles plain Javascript objects instead of Clojure maps.
 */
com.wsscode.pathom.core.js_obj_reader = (function com$wsscode$pathom$core$js_obj_reader(p__87357){
var map__87358 = p__87357;
var map__87358__$1 = (((((!((map__87358 == null))))?(((((map__87358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87358):map__87358);
var env = map__87358__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87358__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87358__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var js_key_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__87358__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-key-transform","com.wsscode.pathom.core/js-key-transform",-1588372758),cljs.core.name);
var js_value_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__87358__$1,new cljs.core.Keyword("com.wsscode.pathom.core","js-value-transform","com.wsscode.pathom.core/js-value-transform",1418749137),((function (map__87358,map__87358__$1,env,query,ast,js_key_transform){
return (function (_,v){
return v;
});})(map__87358,map__87358__$1,env,query,ast,js_key_transform))
);
var entity_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87358__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249));
var js_key = (function (){var G__87360 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
return (js_key_transform.cljs$core$IFn$_invoke$arity$1 ? js_key_transform.cljs$core$IFn$_invoke$arity$1(G__87360) : js_key_transform.call(null,G__87360));
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
var G__87361 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var G__87362 = v;
return (js_value_transform.cljs$core$IFn$_invoke$arity$2 ? js_value_transform.cljs$core$IFn$_invoke$arity$2(G__87361,G__87362) : js_value_transform.call(null,G__87361,G__87362));
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
var map__87363 = (function (){var G__87364 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"tx","tx",466630418),tx], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__87364) : f.call(null,G__87364));
})();
var map__87363__$1 = (((((!((map__87363 == null))))?(((((map__87363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87363):map__87363);
var env__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87363__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var tx__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87363__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
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
return (function (state_87377){
var state_val_87378 = (state_87377[(1)]);
if((state_val_87378 === (1))){
var state_87377__$1 = state_87377;
var statearr_87379_88909 = state_87377__$1;
(statearr_87379_88909[(2)] = null);

(statearr_87379_88909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87378 === (2))){
var inst_87375 = (state_87377[(2)]);
var state_87377__$1 = state_87377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87377__$1,inst_87375);
} else {
if((state_val_87378 === (3))){
var inst_87366 = (state_87377[(2)]);
var state_87377__$1 = state_87377;
var statearr_87380_88913 = state_87377__$1;
(statearr_87380_88913[(2)] = inst_87366);


cljs.core.async.impl.ioc_helpers.process_exception(state_87377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87378 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87377,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87377__$1 = state_87377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87377__$1,(5),res__53554__auto__);
} else {
if((state_val_87378 === (5))){
var inst_87371 = (state_87377[(2)]);
var inst_87372 = com.wsscode.async.async_cljs.throw_err(inst_87371);
var inst_87373 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_87372) : f.call(null,inst_87372));
var state_87377__$1 = state_87377;
var statearr_87381_88915 = state_87377__$1;
(statearr_87381_88915[(2)] = inst_87373);


cljs.core.async.impl.ioc_helpers.process_exception(state_87377__$1);

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
var statearr_87382 = [null,null,null,null,null,null,null];
(statearr_87382[(0)] = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__);

(statearr_87382[(1)] = (1));

return statearr_87382;
});
var com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____1 = (function (state_87377){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87377);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87383){if((e87383 instanceof Object)){
var ex__47667__auto__ = e87383;
var statearr_87384_88920 = state_87377;
(statearr_87384_88920[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88921 = state_87377;
state_87377 = G__88921;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__ = function(state_87377){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____1.call(this,state_87377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$post_process_parser_plugin_$_transform_parser_out_plugin_external_$_transform_parser_out_plugin_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__))
})();
var state__47948__auto__ = (function (){var statearr_87385 = f__47947__auto__();
(statearr_87385[(6)] = c__47946__auto__);

return statearr_87385;
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
var G__87386 = msg;
if(cljs.core.truth_(data)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87386)," - ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))].join('');
} else {
return G__87386;
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
com.wsscode.pathom.core.process_error = (function com$wsscode$pathom$core$process_error(p__87387,e){
var map__87388 = p__87387;
var map__87388__$1 = (((((!((map__87388 == null))))?(((((map__87388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87388):map__87388);
var env = map__87388__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87388__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return com.wsscode.pathom.core.error_str(e);
}
});
com.wsscode.pathom.core.add_error = (function com$wsscode$pathom$core$add_error(p__87390,e){
var map__87391 = p__87390;
var map__87391__$1 = (((((!((map__87391 == null))))?(((((map__87391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87391):map__87391);
var env = map__87391__$1;
var errors_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87391__$1,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87391__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core.truth_(errors_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(errors_STAR_,cljs.core.assoc,path,com.wsscode.pathom.core.process_error(env,e));
} else {
}

return new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882);
});
com.wsscode.pathom.core.wrap_handle_exception = (function com$wsscode$pathom$core$wrap_handle_exception(reader){
return (function com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal(p__87393){
var map__87394 = p__87393;
var map__87394__$1 = (((((!((map__87394 == null))))?(((((map__87394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87394):map__87394);
var env = map__87394__$1;
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87394__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
} else {
try{var x = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.async.async_cljs.chan_QMARK_(x)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,x,map__87394,map__87394__$1,env,fail_fast_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,x,map__87394,map__87394__$1,env,fail_fast_QMARK_){
return (function (state_87408){
var state_val_87409 = (state_87408[(1)]);
if((state_val_87409 === (1))){
var state_87408__$1 = state_87408;
var statearr_87410_88931 = state_87408__$1;
(statearr_87410_88931[(2)] = null);

(statearr_87410_88931[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87409 === (2))){
var inst_87406 = (state_87408[(2)]);
var state_87408__$1 = state_87408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87408__$1,inst_87406);
} else {
if((state_val_87409 === (3))){
var inst_87397 = (state_87408[(2)]);
var inst_87398 = com.wsscode.pathom.core.add_error(env,inst_87397);
var state_87408__$1 = state_87408;
var statearr_87411_88932 = state_87408__$1;
(statearr_87411_88932[(2)] = inst_87398);


cljs.core.async.impl.ioc_helpers.process_exception(state_87408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87409 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87408,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87408__$1 = state_87408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87408__$1,(5),x);
} else {
if((state_val_87409 === (5))){
var inst_87403 = (state_87408[(2)]);
var inst_87404 = com.wsscode.async.async_cljs.throw_err(inst_87403);
var state_87408__$1 = state_87408;
var statearr_87412_88935 = state_87408__$1;
(statearr_87412_88935[(2)] = inst_87404);


cljs.core.async.impl.ioc_helpers.process_exception(state_87408__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,x,map__87394,map__87394__$1,env,fail_fast_QMARK_))
;
return ((function (switch__47663__auto__,c__47946__auto__,x,map__87394,map__87394__$1,env,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_87413 = [null,null,null,null,null,null,null];
(statearr_87413[(0)] = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__);

(statearr_87413[(1)] = (1));

return statearr_87413;
});
var com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____1 = (function (state_87408){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87408);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87414){if((e87414 instanceof Object)){
var ex__47667__auto__ = e87414;
var statearr_87415_88940 = state_87408;
(statearr_87415_88940[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87414;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88942 = state_87408;
state_87408 = G__88942;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__ = function(state_87408){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____1.call(this,state_87408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_handle_exception_$_wrap_handle_exception_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,x,map__87394,map__87394__$1,env,fail_fast_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_87416 = f__47947__auto__();
(statearr_87416[(6)] = c__47946__auto__);

return statearr_87416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,x,map__87394,map__87394__$1,env,fail_fast_QMARK_))
);

return c__47946__auto__;
} else {
return x;
}
}catch (e87396){var e = e87396;
return com.wsscode.pathom.core.add_error(env,e);
}}
});
});
com.wsscode.pathom.core.wrap_mutate_handle_exception = (function com$wsscode$pathom$core$wrap_mutate_handle_exception(mutate){
return (function com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal(p__87417,k,p){
var map__87418 = p__87417;
var map__87418__$1 = (((((!((map__87418 == null))))?(((((map__87418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87418):map__87418);
var env = map__87418__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87418__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
var fail_fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87418__$1,new cljs.core.Keyword("com.wsscode.pathom.core","fail-fast?","com.wsscode.pathom.core/fail-fast?",-272943465));
if(cljs.core.truth_(fail_fast_QMARK_)){
return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p));
} else {
try{return com.wsscode.pathom.core.update_action((mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,p) : mutate.call(null,env,k,p)),((function (map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_){
return (function (action){
return ((function (map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_){
return (function (){
try{var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
if(com.wsscode.async.async_cljs.chan_QMARK_(res)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_){
return (function (state_87441){
var state_val_87442 = (state_87441[(1)]);
if((state_val_87442 === (1))){
var state_87441__$1 = state_87441;
var statearr_87443_88946 = state_87441__$1;
(statearr_87443_88946[(2)] = null);

(statearr_87443_88946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87442 === (2))){
var inst_87439 = (state_87441[(2)]);
var state_87441__$1 = state_87441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87441__$1,inst_87439);
} else {
if((state_val_87442 === (3))){
var inst_87422 = (state_87441[(2)]);
var state_87441__$1 = (function (){var statearr_87444 = state_87441;
(statearr_87444[(7)] = inst_87422);

return statearr_87444;
})();
if(cljs.core.truth_(process_error)){
var statearr_87445_88949 = state_87441__$1;
(statearr_87445_88949[(1)] = (4));

} else {
var statearr_87446_88950 = state_87441__$1;
(statearr_87446_88950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87442 === (4))){
var inst_87422 = (state_87441[(7)]);
var inst_87424 = (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,inst_87422) : process_error.call(null,env,inst_87422));
var state_87441__$1 = state_87441;
var statearr_87447_88952 = state_87441__$1;
(statearr_87447_88952[(2)] = inst_87424);

(statearr_87447_88952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87442 === (5))){
var inst_87422 = (state_87441[(7)]);
var inst_87426 = [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882)];
var inst_87427 = com.wsscode.pathom.core.error_str(inst_87422);
var inst_87428 = [inst_87427];
var inst_87429 = cljs.core.PersistentHashMap.fromArrays(inst_87426,inst_87428);
var state_87441__$1 = state_87441;
var statearr_87448_88954 = state_87441__$1;
(statearr_87448_88954[(2)] = inst_87429);

(statearr_87448_88954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87442 === (6))){
var inst_87431 = (state_87441[(2)]);
var state_87441__$1 = state_87441;
var statearr_87449_88955 = state_87441__$1;
(statearr_87449_88955[(2)] = inst_87431);


cljs.core.async.impl.ioc_helpers.process_exception(state_87441__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87442 === (7))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87441,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87441__$1 = state_87441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87441__$1,(8),res);
} else {
if((state_val_87442 === (8))){
var inst_87436 = (state_87441[(2)]);
var inst_87437 = com.wsscode.async.async_cljs.throw_err(inst_87436);
var state_87441__$1 = state_87441;
var statearr_87450_88961 = state_87441__$1;
(statearr_87450_88961[(2)] = inst_87437);


cljs.core.async.impl.ioc_helpers.process_exception(state_87441__$1);

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
});})(c__47946__auto__,res,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_))
;
return ((function (switch__47663__auto__,c__47946__auto__,res,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_){
return (function() {
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_87451 = [null,null,null,null,null,null,null,null];
(statearr_87451[(0)] = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__);

(statearr_87451[(1)] = (1));

return statearr_87451;
});
var com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____1 = (function (state_87441){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87441);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87452){if((e87452 instanceof Object)){
var ex__47667__auto__ = e87452;
var statearr_87453_88972 = state_87441;
(statearr_87453_88972[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88975 = state_87441;
state_87441 = G__88975;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__ = function(state_87441){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____1.call(this,state_87441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_mutate_handle_exception_$_wrap_mutate_handle_exception_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_))
})();
var state__47948__auto__ = (function (){var statearr_87454 = f__47947__auto__();
(statearr_87454[(6)] = c__47946__auto__);

return statearr_87454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_))
);

return c__47946__auto__;
} else {
return res;
}
}catch (e87421){var e = e87421;
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
}});
;})(map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_))
});})(map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_))
);
}catch (e87420){var e = e87420;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (e,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_){
return (function (){
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),com.wsscode.pathom.core.error_str(e)], null);
}
});})(e,map__87418,map__87418__$1,env,process_error,fail_fast_QMARK_))
], null);
}}
});
});
com.wsscode.pathom.core.wrap_parser_exception = (function com$wsscode$pathom$core$wrap_parser_exception(parser){
return (function com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal(env,tx){
var errors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var res__53554__auto__ = (function (){var G__87455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","errors*","com.wsscode.pathom.core/errors*",337011276),errors);
var G__87456 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87455,G__87456) : parser.call(null,G__87455,G__87456));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,errors){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,errors){
return (function (state_87476){
var state_val_87477 = (state_87476[(1)]);
if((state_val_87477 === (1))){
var state_87476__$1 = state_87476;
var statearr_87478_88984 = state_87476__$1;
(statearr_87478_88984[(2)] = null);

(statearr_87478_88984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87477 === (2))){
var inst_87474 = (state_87476[(2)]);
var state_87476__$1 = state_87476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87476__$1,inst_87474);
} else {
if((state_val_87477 === (3))){
var inst_87457 = (state_87476[(2)]);
var state_87476__$1 = state_87476;
var statearr_87479_88988 = state_87476__$1;
(statearr_87479_88988[(2)] = inst_87457);


cljs.core.async.impl.ioc_helpers.process_exception(state_87476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87477 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87476,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87476__$1 = state_87476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87476__$1,(5),res__53554__auto__);
} else {
if((state_val_87477 === (5))){
var inst_87462 = (state_87476[(2)]);
var inst_87463 = com.wsscode.async.async_cljs.throw_err(inst_87462);
var inst_87465 = cljs.core.deref(errors);
var inst_87466 = cljs.core.seq(inst_87465);
var state_87476__$1 = (function (){var statearr_87480 = state_87476;
(statearr_87480[(7)] = inst_87463);

return statearr_87480;
})();
if(inst_87466){
var statearr_87481_88991 = state_87476__$1;
(statearr_87481_88991[(1)] = (6));

} else {
var statearr_87482_88992 = state_87476__$1;
(statearr_87482_88992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87477 === (6))){
var inst_87463 = (state_87476[(7)]);
var inst_87468 = cljs.core.deref(errors);
var inst_87469 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_87463,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),inst_87468);
var state_87476__$1 = state_87476;
var statearr_87483_88997 = state_87476__$1;
(statearr_87483_88997[(2)] = inst_87469);

(statearr_87483_88997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87477 === (7))){
var inst_87463 = (state_87476[(7)]);
var state_87476__$1 = state_87476;
var statearr_87484_89001 = state_87476__$1;
(statearr_87484_89001[(2)] = inst_87463);

(statearr_87484_89001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87477 === (8))){
var inst_87472 = (state_87476[(2)]);
var state_87476__$1 = state_87476;
var statearr_87485_89002 = state_87476__$1;
(statearr_87485_89002[(2)] = inst_87472);


cljs.core.async.impl.ioc_helpers.process_exception(state_87476__$1);

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
var statearr_87486 = [null,null,null,null,null,null,null,null];
(statearr_87486[(0)] = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__);

(statearr_87486[(1)] = (1));

return statearr_87486;
});
var com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____1 = (function (state_87476){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87476);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87487){if((e87487 instanceof Object)){
var ex__47667__auto__ = e87487;
var statearr_87488_89005 = state_87476;
(statearr_87488_89005[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89008 = state_87476;
state_87476 = G__89008;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__ = function(state_87476){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____1.call(this,state_87476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_parser_exception_$_wrap_parser_exception_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,errors))
})();
var state__47948__auto__ = (function (){var statearr_87489 = f__47947__auto__();
(statearr_87489[(6)] = c__47946__auto__);

return statearr_87489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,errors))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
var G__87490 = res;
if(cljs.core.seq(cljs.core.deref(errors))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__87490,new cljs.core.Keyword("com.wsscode.pathom.core","errors","com.wsscode.pathom.core/errors",-1179549217),cljs.core.deref(errors));
} else {
return G__87490;
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
var G__89014 = cljs.core.butlast(path_SINGLEQUOTE_);
path_SINGLEQUOTE_ = G__89014;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__87491){
var vec__87492 = p__87491;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87492,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87492,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__87495){
var vec__87496 = p__87495;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87496,(1),null);
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
var G__87499 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extra_env,env], 0));
var G__87500 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87499,G__87500) : parser.call(null,G__87499,G__87500));
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
var G__87501 = (extra_env_wrapper.cljs$core$IFn$_invoke$arity$1 ? extra_env_wrapper.cljs$core$IFn$_invoke$arity$1(env) : extra_env_wrapper.call(null,env));
var G__87502 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87501,G__87502) : parser.call(null,G__87501,G__87502));
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
var vec__87503 = temp__5718__auto____$1;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87503,(0),null);
var hit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87503,(1),null);
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-hit","com.wsscode.pathom.core/cache-hit",1851998374),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

return com.wsscode.async.async_cljs.throw_err(hit);
} else {
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

var res__53554__auto__ = (function (){try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}catch (e87506){var e = e87506;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,e);

throw e;
}})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__){
return (function (state_87518){
var state_val_87519 = (state_87518[(1)]);
if((state_val_87519 === (1))){
var state_87518__$1 = state_87518;
var statearr_87520_89035 = state_87518__$1;
(statearr_87520_89035[(2)] = null);

(statearr_87520_89035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87519 === (2))){
var inst_87516 = (state_87518[(2)]);
var state_87518__$1 = state_87518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87518__$1,inst_87516);
} else {
if((state_val_87519 === (3))){
var inst_87507 = (state_87518[(2)]);
var state_87518__$1 = state_87518;
var statearr_87521_89036 = state_87518__$1;
(statearr_87521_89036[(2)] = inst_87507);


cljs.core.async.impl.ioc_helpers.process_exception(state_87518__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87519 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87518,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87518__$1 = state_87518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87518__$1,(5),res__53554__auto__);
} else {
if((state_val_87519 === (5))){
var inst_87512 = (state_87518[(2)]);
var inst_87513 = com.wsscode.async.async_cljs.throw_err(inst_87512);
var inst_87514 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,key,inst_87513);
var state_87518__$1 = (function (){var statearr_87522 = state_87518;
(statearr_87522[(7)] = inst_87514);

return statearr_87522;
})();
var statearr_87523_89041 = state_87518__$1;
(statearr_87523_89041[(2)] = inst_87513);


cljs.core.async.impl.ioc_helpers.process_exception(state_87518__$1);

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
var statearr_87524 = [null,null,null,null,null,null,null,null];
(statearr_87524[(0)] = com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__);

(statearr_87524[(1)] = (1));

return statearr_87524;
});
var com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____1 = (function (state_87518){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87518);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87525){if((e87525 instanceof Object)){
var ex__47667__auto__ = e87525;
var statearr_87526_89048 = state_87518;
(statearr_87526_89048[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89049 = state_87518;
state_87518 = G__89049;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__ = function(state_87518){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____1.call(this,state_87518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,temp__5718__auto____$1,cache,temp__5718__auto__))
})();
var state__47948__auto__ = (function (){var statearr_87527 = f__47947__auto__();
(statearr_87527[(6)] = c__47946__auto__);

return statearr_87527;
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
var c__47946__auto___89056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___89056,ch__53519__auto__,cache,temp__5718__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___89056,ch__53519__auto__,cache,temp__5718__auto__){
return (function (state_87550){
var state_val_87551 = (state_87550[(1)]);
if((state_val_87551 === (7))){
var inst_87539 = (state_87550[(2)]);
var state_87550__$1 = state_87550;
var statearr_87552_89059 = state_87550__$1;
(statearr_87552_89059[(2)] = inst_87539);


cljs.core.async.impl.ioc_helpers.process_exception(state_87550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (1))){
var state_87550__$1 = state_87550;
var statearr_87553_89063 = state_87550__$1;
(statearr_87553_89063[(2)] = null);

(statearr_87553_89063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (4))){
var inst_87532 = (state_87550[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87550,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_87532__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_87533 = com.wsscode.async.async_cljs.chan_QMARK_(inst_87532__$1);
var state_87550__$1 = (function (){var statearr_87554 = state_87550;
(statearr_87554[(7)] = inst_87532__$1);

return statearr_87554;
})();
if(inst_87533){
var statearr_87555_89065 = state_87550__$1;
(statearr_87555_89065[(1)] = (5));

} else {
var statearr_87556_89066 = state_87550__$1;
(statearr_87556_89066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (6))){
var inst_87532 = (state_87550[(7)]);
var state_87550__$1 = state_87550;
var statearr_87557_89067 = state_87550__$1;
(statearr_87557_89067[(2)] = inst_87532);

(statearr_87557_89067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (3))){
var inst_87528 = (state_87550[(2)]);
var state_87550__$1 = state_87550;
var statearr_87558_89071 = state_87550__$1;
(statearr_87558_89071[(2)] = inst_87528);


cljs.core.async.impl.ioc_helpers.process_exception(state_87550__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (2))){
var inst_87541 = (state_87550[(8)]);
var inst_87541__$1 = (state_87550[(2)]);
var inst_87542 = (inst_87541__$1 == null);
var state_87550__$1 = (function (){var statearr_87559 = state_87550;
(statearr_87559[(8)] = inst_87541__$1);

return statearr_87559;
})();
if(cljs.core.truth_(inst_87542)){
var statearr_87560_89075 = state_87550__$1;
(statearr_87560_89075[(1)] = (9));

} else {
var statearr_87561_89076 = state_87550__$1;
(statearr_87561_89076[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (11))){
var inst_87548 = (state_87550[(2)]);
var state_87550__$1 = state_87550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87550__$1,inst_87548);
} else {
if((state_val_87551 === (9))){
var inst_87544 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_87550__$1 = state_87550;
var statearr_87562_89083 = state_87550__$1;
(statearr_87562_89083[(2)] = inst_87544);

(statearr_87562_89083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (5))){
var inst_87532 = (state_87550[(7)]);
var state_87550__$1 = state_87550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87550__$1,(8),inst_87532);
} else {
if((state_val_87551 === (10))){
var inst_87541 = (state_87550[(8)]);
var inst_87546 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_87541);
var state_87550__$1 = state_87550;
var statearr_87563_89085 = state_87550__$1;
(statearr_87563_89085[(2)] = inst_87546);

(statearr_87563_89085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87551 === (8))){
var inst_87536 = (state_87550[(2)]);
var state_87550__$1 = state_87550;
var statearr_87564_89086 = state_87550__$1;
(statearr_87564_89086[(2)] = inst_87536);

(statearr_87564_89086[(1)] = (7));


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
});})(c__47946__auto___89056,ch__53519__auto__,cache,temp__5718__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto___89056,ch__53519__auto__,cache,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_87565 = [null,null,null,null,null,null,null,null,null];
(statearr_87565[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__);

(statearr_87565[(1)] = (1));

return statearr_87565;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1 = (function (state_87550){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87550);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87566){if((e87566 instanceof Object)){
var ex__47667__auto__ = e87566;
var statearr_87567_89088 = state_87550;
(statearr_87567_89088[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87566;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89089 = state_87550;
state_87550 = G__89089;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = function(state_87550){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1.call(this,state_87550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___89056,ch__53519__auto__,cache,temp__5718__auto__))
})();
var state__47948__auto__ = (function (){var statearr_87568 = f__47947__auto__();
(statearr_87568[(6)] = c__47946__auto___89056);

return statearr_87568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___89056,ch__53519__auto__,cache,temp__5718__auto__))
);


return ch__53519__auto__;
}
});})(cache,temp__5718__auto__))
);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),key);
} else {
var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___89090 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___89090,ch__53519__auto__,temp__5718__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___89090,ch__53519__auto__,temp__5718__auto__){
return (function (state_87591){
var state_val_87592 = (state_87591[(1)]);
if((state_val_87592 === (7))){
var inst_87580 = (state_87591[(2)]);
var state_87591__$1 = state_87591;
var statearr_87593_89092 = state_87591__$1;
(statearr_87593_89092[(2)] = inst_87580);


cljs.core.async.impl.ioc_helpers.process_exception(state_87591__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (1))){
var state_87591__$1 = state_87591;
var statearr_87594_89093 = state_87591__$1;
(statearr_87594_89093[(2)] = null);

(statearr_87594_89093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (4))){
var inst_87573 = (state_87591[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87591,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_87573__$1 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var inst_87574 = com.wsscode.async.async_cljs.chan_QMARK_(inst_87573__$1);
var state_87591__$1 = (function (){var statearr_87595 = state_87591;
(statearr_87595[(7)] = inst_87573__$1);

return statearr_87595;
})();
if(inst_87574){
var statearr_87596_89094 = state_87591__$1;
(statearr_87596_89094[(1)] = (5));

} else {
var statearr_87597_89095 = state_87591__$1;
(statearr_87597_89095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (6))){
var inst_87573 = (state_87591[(7)]);
var state_87591__$1 = state_87591;
var statearr_87598_89097 = state_87591__$1;
(statearr_87598_89097[(2)] = inst_87573);

(statearr_87598_89097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (3))){
var inst_87569 = (state_87591[(2)]);
var state_87591__$1 = state_87591;
var statearr_87599_89099 = state_87591__$1;
(statearr_87599_89099[(2)] = inst_87569);


cljs.core.async.impl.ioc_helpers.process_exception(state_87591__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (2))){
var inst_87582 = (state_87591[(8)]);
var inst_87582__$1 = (state_87591[(2)]);
var inst_87583 = (inst_87582__$1 == null);
var state_87591__$1 = (function (){var statearr_87600 = state_87591;
(statearr_87600[(8)] = inst_87582__$1);

return statearr_87600;
})();
if(cljs.core.truth_(inst_87583)){
var statearr_87601_89100 = state_87591__$1;
(statearr_87601_89100[(1)] = (9));

} else {
var statearr_87602_89101 = state_87591__$1;
(statearr_87602_89101[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (11))){
var inst_87589 = (state_87591[(2)]);
var state_87591__$1 = state_87591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87591__$1,inst_87589);
} else {
if((state_val_87592 === (9))){
var inst_87585 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_87591__$1 = state_87591;
var statearr_87603_89102 = state_87591__$1;
(statearr_87603_89102[(2)] = inst_87585);

(statearr_87603_89102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (5))){
var inst_87573 = (state_87591[(7)]);
var state_87591__$1 = state_87591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87591__$1,(8),inst_87573);
} else {
if((state_val_87592 === (10))){
var inst_87582 = (state_87591[(8)]);
var inst_87587 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_87582);
var state_87591__$1 = state_87591;
var statearr_87604_89104 = state_87591__$1;
(statearr_87604_89104[(2)] = inst_87587);

(statearr_87604_89104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87592 === (8))){
var inst_87577 = (state_87591[(2)]);
var state_87591__$1 = state_87591;
var statearr_87605_89105 = state_87591__$1;
(statearr_87605_89105[(2)] = inst_87577);

(statearr_87605_89105[(1)] = (7));


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
});})(c__47946__auto___89090,ch__53519__auto__,temp__5718__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto___89090,ch__53519__auto__,temp__5718__auto__){
return (function() {
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0 = (function (){
var statearr_87606 = [null,null,null,null,null,null,null,null,null];
(statearr_87606[(0)] = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__);

(statearr_87606[(1)] = (1));

return statearr_87606;
});
var com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1 = (function (state_87591){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87591);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87607){if((e87607 instanceof Object)){
var ex__47667__auto__ = e87607;
var statearr_87608_89106 = state_87591;
(statearr_87608_89106[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89107 = state_87591;
state_87591 = G__89107;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__ = function(state_87591){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1.call(this,state_87591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_async_STAR__$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___89090,ch__53519__auto__,temp__5718__auto__))
})();
var state__47948__auto__ = (function (){var statearr_87609 = f__47947__auto__();
(statearr_87609[(6)] = c__47946__auto___89090);

return statearr_87609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___89090,ch__53519__auto__,temp__5718__auto__))
);


return ch__53519__auto__;
}
});
com.wsscode.pathom.core.cached_async = (function com$wsscode$pathom$core$cached_async(p__87610,key,f){
var map__87611 = p__87610;
var map__87611__$1 = (((((!((map__87611 == null))))?(((((map__87611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87611):map__87611);
var env = map__87611__$1;
var async_request_cache_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87611__$1,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369));
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87611__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
if(cljs.core.truth_(async_request_cache_ch)){
if(cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
} else {
var out = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(async_request_cache_ch,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,key,f,out], null));

var ch__53519__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__47946__auto___89113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto___89113,ch__53519__auto__,out,map__87611,map__87611__$1,env,async_request_cache_ch,request_cache){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto___89113,ch__53519__auto__,out,map__87611,map__87611__$1,env,async_request_cache_ch,request_cache){
return (function (state_87631){
var state_val_87632 = (state_87631[(1)]);
if((state_val_87632 === (7))){
var inst_87625 = cljs.core.async.close_BANG_(ch__53519__auto__);
var state_87631__$1 = state_87631;
var statearr_87633_89114 = state_87631__$1;
(statearr_87633_89114[(2)] = inst_87625);

(statearr_87633_89114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87632 === (1))){
var state_87631__$1 = state_87631;
var statearr_87634_89115 = state_87631__$1;
(statearr_87634_89115[(2)] = null);

(statearr_87634_89115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87632 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87631,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87631__$1 = state_87631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87631__$1,(6),out);
} else {
if((state_val_87632 === (6))){
var inst_87618 = (state_87631[(2)]);
var state_87631__$1 = state_87631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87631__$1,(5),inst_87618);
} else {
if((state_val_87632 === (3))){
var inst_87613 = (state_87631[(2)]);
var state_87631__$1 = state_87631;
var statearr_87635_89119 = state_87631__$1;
(statearr_87635_89119[(2)] = inst_87613);


cljs.core.async.impl.ioc_helpers.process_exception(state_87631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87632 === (2))){
var inst_87622 = (state_87631[(7)]);
var inst_87622__$1 = (state_87631[(2)]);
var inst_87623 = (inst_87622__$1 == null);
var state_87631__$1 = (function (){var statearr_87636 = state_87631;
(statearr_87636[(7)] = inst_87622__$1);

return statearr_87636;
})();
if(cljs.core.truth_(inst_87623)){
var statearr_87637_89121 = state_87631__$1;
(statearr_87637_89121[(1)] = (7));

} else {
var statearr_87638_89122 = state_87631__$1;
(statearr_87638_89122[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87632 === (9))){
var inst_87629 = (state_87631[(2)]);
var state_87631__$1 = state_87631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87631__$1,inst_87629);
} else {
if((state_val_87632 === (5))){
var inst_87620 = (state_87631[(2)]);
var state_87631__$1 = state_87631;
var statearr_87639_89124 = state_87631__$1;
(statearr_87639_89124[(2)] = inst_87620);


cljs.core.async.impl.ioc_helpers.process_exception(state_87631__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87632 === (8))){
var inst_87622 = (state_87631[(7)]);
var inst_87627 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53519__auto__,inst_87622);
var state_87631__$1 = state_87631;
var statearr_87640_89126 = state_87631__$1;
(statearr_87640_89126[(2)] = inst_87627);

(statearr_87640_89126[(1)] = (9));


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
});})(c__47946__auto___89113,ch__53519__auto__,out,map__87611,map__87611__$1,env,async_request_cache_ch,request_cache))
;
return ((function (switch__47663__auto__,c__47946__auto___89113,ch__53519__auto__,out,map__87611,map__87611__$1,env,async_request_cache_ch,request_cache){
return (function() {
var com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____0 = (function (){
var statearr_87641 = [null,null,null,null,null,null,null,null];
(statearr_87641[(0)] = com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__);

(statearr_87641[(1)] = (1));

return statearr_87641;
});
var com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____1 = (function (state_87631){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87631);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87642){if((e87642 instanceof Object)){
var ex__47667__auto__ = e87642;
var statearr_87643_89128 = state_87631;
(statearr_87643_89128[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89129 = state_87631;
state_87631 = G__89129;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__ = function(state_87631){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____1.call(this,state_87631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$cached_async_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto___89113,ch__53519__auto__,out,map__87611,map__87611__$1,env,async_request_cache_ch,request_cache))
})();
var state__47948__auto__ = (function (){var statearr_87644 = f__47947__auto__();
(statearr_87644[(6)] = c__47946__auto___89113);

return statearr_87644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto___89113,ch__53519__auto__,out,map__87611,map__87611__$1,env,async_request_cache_ch,request_cache))
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
return (function (state_87666){
var state_val_87667 = (state_87666[(1)]);
if((state_val_87667 === (1))){
var state_87666__$1 = state_87666;
var statearr_87668_89133 = state_87666__$1;
(statearr_87668_89133[(2)] = null);

(statearr_87668_89133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87667 === (2))){
var state_87666__$1 = state_87666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87666__$1,(4),ch);
} else {
if((state_val_87667 === (3))){
var inst_87664 = (state_87666[(2)]);
var state_87666__$1 = state_87666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87666__$1,inst_87664);
} else {
if((state_val_87667 === (4))){
var inst_87647 = (state_87666[(7)]);
var inst_87647__$1 = (state_87666[(2)]);
var state_87666__$1 = (function (){var statearr_87669 = state_87666;
(statearr_87669[(7)] = inst_87647__$1);

return statearr_87669;
})();
if(cljs.core.truth_(inst_87647__$1)){
var statearr_87670_89136 = state_87666__$1;
(statearr_87670_89136[(1)] = (5));

} else {
var statearr_87671_89137 = state_87666__$1;
(statearr_87671_89137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87667 === (5))){
var inst_87647 = (state_87666[(7)]);
var inst_87652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_87647,(0),null);
var inst_87653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_87647,(1),null);
var inst_87654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_87647,(2),null);
var inst_87655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_87647,(3),null);
var inst_87656 = com.wsscode.pathom.core.cached_async_STAR_(inst_87652,inst_87653,inst_87654);
var state_87666__$1 = state_87666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_87666__$1,(8),inst_87655,inst_87656);
} else {
if((state_val_87667 === (6))){
var state_87666__$1 = state_87666;
var statearr_87672_89140 = state_87666__$1;
(statearr_87672_89140[(2)] = null);

(statearr_87672_89140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87667 === (7))){
var inst_87662 = (state_87666[(2)]);
var state_87666__$1 = state_87666;
var statearr_87673_89142 = state_87666__$1;
(statearr_87673_89142[(2)] = inst_87662);

(statearr_87673_89142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87667 === (8))){
var inst_87658 = (state_87666[(2)]);
var state_87666__$1 = (function (){var statearr_87674 = state_87666;
(statearr_87674[(8)] = inst_87658);

return statearr_87674;
})();
var statearr_87675_89144 = state_87666__$1;
(statearr_87675_89144[(2)] = null);

(statearr_87675_89144[(1)] = (2));


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
var statearr_87676 = [null,null,null,null,null,null,null,null,null];
(statearr_87676[(0)] = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__);

(statearr_87676[(1)] = (1));

return statearr_87676;
});
var com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____1 = (function (state_87666){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87666);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87677){if((e87677 instanceof Object)){
var ex__47667__auto__ = e87677;
var statearr_87678_89145 = state_87666;
(statearr_87678_89145[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89146 = state_87666;
state_87666 = G__89146;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__ = function(state_87666){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____1.call(this,state_87666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$request_cache_async_loop_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_87679 = f__47947__auto__();
(statearr_87679[(6)] = c__47946__auto__);

return statearr_87679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});
com.wsscode.pathom.core.cache_hit = (function com$wsscode$pathom$core$cache_hit(p__87680,key,value){
var map__87681 = p__87680;
var map__87681__$1 = (((((!((map__87681 == null))))?(((((map__87681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87681):map__87681);
var env = map__87681__$1;
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87681__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.core","cache-miss","com.wsscode.pathom.core/cache-miss",1311426337),new cljs.core.Keyword("com.wsscode.pathom.core","cache-key","com.wsscode.pathom.core/cache-key",246159991),key], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(request_cache,cljs.core.assoc,key,value);

return value;
});
com.wsscode.pathom.core.cache_contains_QMARK_ = (function com$wsscode$pathom$core$cache_contains_QMARK_(p__87683,key){
var map__87684 = p__87683;
var map__87684__$1 = (((((!((map__87684 == null))))?(((((map__87684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87684):map__87684);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87684__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.contains_QMARK_(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.cache_read = (function com$wsscode$pathom$core$cache_read(p__87686,key){
var map__87687 = p__87686;
var map__87687__$1 = (((((!((map__87687 == null))))?(((((map__87687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87687):map__87687);
var request_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87687__$1,new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(request_cache),key);
});
com.wsscode.pathom.core.wrap_add_path = (function com$wsscode$pathom$core$wrap_add_path(reader){
return (function (p__87689){
var map__87690 = p__87689;
var map__87690__$1 = (((((!((map__87690 == null))))?(((((map__87690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87690):map__87690);
var env = map__87690__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87690__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var G__87692 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__87692) : reader.call(null,G__87692));
});
});
com.wsscode.pathom.core.group_plugins_by_action = (function com$wsscode$pathom$core$group_plugins_by_action(plugins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,p){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$1,p__87693){
var vec__87694 = p__87693;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87694,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87694,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(g__$1,k,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
}),g,p);
}),cljs.core.PersistentArrayMap.EMPTY,plugins);
});
com.wsscode.pathom.core.wrap_normalize_env = (function com$wsscode$pathom$core$wrap_normalize_env(var_args){
var G__87698 = arguments.length;
switch (G__87698) {
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
var G__87699 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","request-cache","com.wsscode.pathom.core/request-cache",1469884617),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","entity-key","com.wsscode.pathom.core/entity-key",1494103249),new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx,new cljs.core.Keyword("com.wsscode.pathom.core","root-query","com.wsscode.pathom.core/root-query",-100266682),tx], null),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","plugin-actions","com.wsscode.pathom.core/plugin-actions",-876552970),com.wsscode.pathom.core.group_plugins_by_action(plugins),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),plugins,new cljs.core.Keyword(null,"target","target",253001721),target], null)], 0));
var G__87700 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87699,G__87700) : parser.call(null,G__87699,G__87700));
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
var res__53554__auto__ = (function (){var G__87701 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538),signal,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661),cljs.core.PersistentVector.EMPTY], 0));
var G__87702 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87701,G__87702) : parser.call(null,G__87701,G__87702));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,signal){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,signal){
return (function (state_87714){
var state_val_87715 = (state_87714[(1)]);
if((state_val_87715 === (1))){
var state_87714__$1 = state_87714;
var statearr_87716_89150 = state_87714__$1;
(statearr_87716_89150[(2)] = null);

(statearr_87716_89150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87715 === (2))){
var inst_87712 = (state_87714[(2)]);
var state_87714__$1 = state_87714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87714__$1,inst_87712);
} else {
if((state_val_87715 === (3))){
var inst_87703 = (state_87714[(2)]);
var state_87714__$1 = state_87714;
var statearr_87717_89152 = state_87714__$1;
(statearr_87717_89152[(2)] = inst_87703);


cljs.core.async.impl.ioc_helpers.process_exception(state_87714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87715 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87714,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87714__$1 = state_87714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87714__$1,(5),res__53554__auto__);
} else {
if((state_val_87715 === (5))){
var inst_87708 = (state_87714[(2)]);
var inst_87709 = com.wsscode.async.async_cljs.throw_err(inst_87708);
var inst_87710 = cljs.core.reset_BANG_(signal,true);
var state_87714__$1 = (function (){var statearr_87718 = state_87714;
(statearr_87718[(7)] = inst_87710);

return statearr_87718;
})();
var statearr_87719_89153 = state_87714__$1;
(statearr_87719_89153[(2)] = inst_87709);


cljs.core.async.impl.ioc_helpers.process_exception(state_87714__$1);

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
var statearr_87720 = [null,null,null,null,null,null,null,null];
(statearr_87720[(0)] = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__);

(statearr_87720[(1)] = (1));

return statearr_87720;
});
var com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____1 = (function (state_87714){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87714);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87721){if((e87721 instanceof Object)){
var ex__47667__auto__ = e87721;
var statearr_87722_89155 = state_87714;
(statearr_87722_89155[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89156 = state_87714;
state_87714 = G__89156;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__ = function(state_87714){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____1.call(this,state_87714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_parallel_setup_$_wrap_async_done_signal_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,signal))
})();
var state__47948__auto__ = (function (){var statearr_87723 = f__47947__auto__();
(statearr_87723[(6)] = c__47946__auto__);

return statearr_87723;
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

var res__53554__auto__ = (function (){var G__87724 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.core","async-request-cache-ch","com.wsscode.pathom.core/async-request-cache-ch",-1864666369),async_cache_ch);
var G__87725 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87724,G__87725) : parser.call(null,G__87724,G__87725));
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,async_cache_ch){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,async_cache_ch){
return (function (state_87737){
var state_val_87738 = (state_87737[(1)]);
if((state_val_87738 === (1))){
var state_87737__$1 = state_87737;
var statearr_87739_89160 = state_87737__$1;
(statearr_87739_89160[(2)] = null);

(statearr_87739_89160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87738 === (2))){
var inst_87735 = (state_87737[(2)]);
var state_87737__$1 = state_87737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87737__$1,inst_87735);
} else {
if((state_val_87738 === (3))){
var inst_87726 = (state_87737[(2)]);
var state_87737__$1 = state_87737;
var statearr_87740_89161 = state_87737__$1;
(statearr_87740_89161[(2)] = inst_87726);


cljs.core.async.impl.ioc_helpers.process_exception(state_87737__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87738 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87737,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87737__$1 = state_87737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87737__$1,(5),res__53554__auto__);
} else {
if((state_val_87738 === (5))){
var inst_87731 = (state_87737[(2)]);
var inst_87732 = com.wsscode.async.async_cljs.throw_err(inst_87731);
var inst_87733 = cljs.core.async.close_BANG_(async_cache_ch);
var state_87737__$1 = (function (){var statearr_87741 = state_87737;
(statearr_87741[(7)] = inst_87733);

return statearr_87741;
})();
var statearr_87742_89164 = state_87737__$1;
(statearr_87742_89164[(2)] = inst_87732);


cljs.core.async.impl.ioc_helpers.process_exception(state_87737__$1);

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
var statearr_87743 = [null,null,null,null,null,null,null,null];
(statearr_87743[(0)] = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__);

(statearr_87743[(1)] = (1));

return statearr_87743;
});
var com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____1 = (function (state_87737){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87737);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87744){if((e87744 instanceof Object)){
var ex__47667__auto__ = e87744;
var statearr_87745_89169 = state_87737;
(statearr_87745_89169[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89170 = state_87737;
state_87737 = G__89170;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__ = function(state_87737){
switch(arguments.length){
case 0:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____1.call(this,state_87737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$core$wrap_setup_async_cache_$_wrap_setup_async_cache_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,async_cache_ch))
})();
var state__47948__auto__ = (function (){var statearr_87746 = f__47947__auto__();
(statearr_87746[(6)] = c__47946__auto__);

return statearr_87746;
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
var G__89171 = null;
var G__89171__1 = (function (env){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
var G__89171__3 = (function (env,_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env))], null);
});
G__89171 = function(env,_,___$1){
switch(arguments.length){
case 1:
return G__89171__1.call(this,env);
case 3:
return G__89171__3.call(this,env,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__89171.cljs$core$IFn$_invoke$arity$1 = G__89171__1;
G__89171.cljs$core$IFn$_invoke$arity$3 = G__89171__3;
return G__89171;
})()
});
com.wsscode.pathom.core.pathom_read_SINGLEQUOTE_ = (function com$wsscode$pathom$core$pathom_read_SINGLEQUOTE_(p__87747){
var map__87748 = p__87747;
var map__87748__$1 = (((((!((map__87748 == null))))?(((((map__87748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87748):map__87748);
var env = map__87748__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87748__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
return com.wsscode.pathom.core.read_from(env,reader);
});
com.wsscode.pathom.core.apply_plugins = (function com$wsscode$pathom$core$apply_plugins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___89172 = arguments.length;
var i__4731__auto___89173 = (0);
while(true){
if((i__4731__auto___89173 < len__4730__auto___89172)){
args__4736__auto__.push((arguments[i__4731__auto___89173]));

var G__89174 = (i__4731__auto___89173 + (1));
i__4731__auto___89173 = G__89174;
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
com.wsscode.pathom.core.apply_plugins.cljs$lang$applyTo = (function (seq87750){
var G__87751 = cljs.core.first(seq87750);
var seq87750__$1 = cljs.core.next(seq87750);
var G__87752 = cljs.core.first(seq87750__$1);
var seq87750__$2 = cljs.core.next(seq87750__$1);
var G__87753 = cljs.core.first(seq87750__$2);
var seq87750__$3 = cljs.core.next(seq87750__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87751,G__87752,G__87753,seq87750__$3);
});

com.wsscode.pathom.core.exec_plugin_actions = (function com$wsscode$pathom$core$exec_plugin_actions(var_args){
var args__4736__auto__ = [];
var len__4730__auto___89175 = arguments.length;
var i__4731__auto___89176 = (0);
while(true){
if((i__4731__auto___89176 < len__4730__auto___89175)){
args__4736__auto__.push((arguments[i__4731__auto___89176]));

var G__89177 = (i__4731__auto___89176 + (1));
i__4731__auto___89176 = G__89177;
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
com.wsscode.pathom.core.exec_plugin_actions.cljs$lang$applyTo = (function (seq87754){
var G__87755 = cljs.core.first(seq87754);
var seq87754__$1 = cljs.core.next(seq87754);
var G__87756 = cljs.core.first(seq87754__$1);
var seq87754__$2 = cljs.core.next(seq87754__$1);
var G__87757 = cljs.core.first(seq87754__$2);
var seq87754__$3 = cljs.core.next(seq87754__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87755,G__87756,G__87757,seq87754__$3);
});

com.wsscode.pathom.core.easy_plugins = (function com$wsscode$pathom$core$easy_plugins(p__87758){
var map__87759 = p__87758;
var map__87759__$1 = (((((!((map__87759 == null))))?(((((map__87759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87759):map__87759);
var plugins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87759__$1,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87759__$1,new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378));
var G__87761 = plugins;
var G__87761__$1 = ((cljs.core.fn_QMARK_(env))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_wrap_plugin(env)], null),G__87761):G__87761);
if(cljs.core.map_QMARK_(env)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.env_plugin(env)], null),G__87761__$1);
} else {
return G__87761__$1;
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
var G__87762 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,env_SINGLEQUOTE_], 0));
var G__87763 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87762,G__87763) : parser.call(null,G__87762,G__87763));
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
var G__87765 = arguments.length;
switch (G__87765) {
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
return (function (p__87766){
var map__87767 = p__87766;
var map__87767__$1 = (((((!((map__87767 == null))))?(((((map__87767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87767):map__87767);
var env = map__87767__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87767__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
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
com.wsscode.pathom.core.pathom_read = (function com$wsscode$pathom$core$pathom_read(p__87769,_,___$1){
var map__87770 = p__87769;
var map__87770__$1 = (((((!((map__87770 == null))))?(((((map__87770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87770):map__87770);
var env = map__87770__$1;
var reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87770__$1,new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410));
var process_reader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87770__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-reader","com.wsscode.pathom.core/process-reader",348867871));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var env__$1 = com.wsscode.pathom.core.normalize_env(env);
return com.wsscode.pathom.core.read_from(env__$1,(cljs.core.truth_(process_reader)?(process_reader.cljs$core$IFn$_invoke$arity$1 ? process_reader.cljs$core$IFn$_invoke$arity$1(reader) : process_reader.call(null,reader)):reader));
})()], null);
});
/**
 * DEPRECATED: use ident-value instead
 */
com.wsscode.pathom.core.ast_key_id = (function com$wsscode$pathom$core$ast_key_id(ast){
var key = (function (){var G__87772 = ast;
if((G__87772 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__87772);
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
