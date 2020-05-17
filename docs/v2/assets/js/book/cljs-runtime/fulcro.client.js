goog.provide('fulcro.client');
goog.require('cljs.core');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.impl.application');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.network');
goog.require('fulcro.logging');
goog.require('cljs.core.async');
goog.require('fulcro.client.impl.protocols');
goog.require('fulcro.util');
goog.require('fulcro.client.util');
goog.require('clojure.set');
goog.require('goog.dom');
goog.require('cljs.spec.alpha');
goog.require('fulcro.history');
goog.require('goog.Uri');




if((typeof fulcro !== 'undefined') && (typeof fulcro.client !== 'undefined') && (typeof fulcro.client.fulcro_tools !== 'undefined')){
} else {
fulcro.client.fulcro_tools = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null)),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,cljs.core.namespace], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx-info","tx-info",74571515),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx-info","tx-info",74571515),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"tx-info","tx-info",74571515)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"tx-info","tx-info",74571515),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"networks","networks",1319553937)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"networks","networks",1319553937),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_,null,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"fulcro-app","fulcro-app",1931237579),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","lifecycle-event","fulcro.client/lifecycle-event",-1809991546),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mounted","mounted",-111042616),"null",new cljs.core.Keyword(null,"unmounted","unmounted",-84871913),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mounted","mounted",-111042616),null,new cljs.core.Keyword(null,"unmounted","unmounted",-84871913),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","props","fulcro.client/props",-193833067),new cljs.core.Keyword("fulcro.client","children","fulcro.client/children",-825967848),new cljs.core.Keyword("fulcro.client","class","fulcro.client/class",1034283914),new cljs.core.Keyword("fulcro.client","factory","fulcro.client/factory",285523468)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","props","fulcro.client/props",-193833067),new cljs.core.Keyword("fulcro.client","children","fulcro.client/children",-825967848),new cljs.core.Keyword("fulcro.client","class","fulcro.client/class",1034283914),new cljs.core.Keyword("fulcro.client","factory","fulcro.client/factory",285523468)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","props","fulcro.client/props",-193833067),new cljs.core.Keyword("fulcro.client","children","fulcro.client/children",-825967848),new cljs.core.Keyword("fulcro.client","class","fulcro.client/class",1034283914),new cljs.core.Keyword("fulcro.client","factory","fulcro.client/factory",285523468)], null),null,null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68805){
return cljs.core.map_QMARK_(G__68805);
}),(function (G__68805){
return cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"props","props",453281727));
}),(function (G__68805){
return cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"children","children",-940561982));
}),(function (G__68805){
return cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"class","class",-2030961996));
}),(function (G__68805){
return cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"factory","factory",63933746));
})], null),(function (G__68805){
return ((cljs.core.map_QMARK_(G__68805)) && (cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"props","props",453281727))) && (cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"children","children",-940561982))) && (cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"class","class",-2030961996))) && (cljs.core.contains_QMARK_(G__68805,new cljs.core.Keyword(null,"factory","factory",63933746))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","props","fulcro.client/props",-193833067),new cljs.core.Keyword("fulcro.client","children","fulcro.client/children",-825967848),new cljs.core.Keyword("fulcro.client","class","fulcro.client/class",1034283914),new cljs.core.Keyword("fulcro.client","factory","fulcro.client/factory",285523468)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"factory","factory",63933746)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"props","props",453281727))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"children","children",-940561982))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"class","class",-2030961996))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"factory","factory",63933746)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","props","fulcro.client/props",-193833067),new cljs.core.Keyword("fulcro.client","children","fulcro.client/children",-825967848),new cljs.core.Keyword("fulcro.client","class","fulcro.client/class",1034283914),new cljs.core.Keyword("fulcro.client","factory","fulcro.client/factory",285523468)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","props","fulcro.client/props",-193833067),new cljs.core.Keyword("fulcro.client","children","fulcro.client/children",-825967848),new cljs.core.Keyword("fulcro.client","class","fulcro.client/class",1034283914),new cljs.core.Keyword("fulcro.client","factory","fulcro.client/factory",285523468)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","component-lifecycle","fulcro.client/component-lifecycle",1855890964),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"react-component","react-component",-1880013598),new cljs.core.Symbol("fulcro.client.primitives","component?","fulcro.client.primitives/component?",-1611256591,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("fulcro.client","lifecycle-event","fulcro.client/lifecycle-event",-1809991546)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"react-component","react-component",-1880013598),new cljs.core.Symbol("fulcro.client.primitives","component?","fulcro.client.primitives/component?",-1611256591,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("fulcro.client","lifecycle-event","fulcro.client/lifecycle-event",-1809991546)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"react-component","react-component",-1880013598),new cljs.core.Keyword(null,"event","event",301435442)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.primitives.component_QMARK_,new cljs.core.Keyword("fulcro.client","lifecycle-event","fulcro.client/lifecycle-event",-1809991546)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("fulcro.client.primitives","component?","fulcro.client.primitives/component?",-1611256591,null),new cljs.core.Keyword("fulcro.client","lifecycle-event","fulcro.client/lifecycle-event",-1809991546)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"react-component","react-component",-1880013598),new cljs.core.Symbol("fulcro.client.primitives","component?","fulcro.client.primitives/component?",-1611256591,null),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword("fulcro.client","lifecycle-event","fulcro.client/lifecycle-event",-1809991546)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","instrument-wrapper","fulcro.client/instrument-wrapper",-649421918),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"existing-instrument","existing-instrument",-760726145),new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"existing-instrument","existing-instrument",-760726145),new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"existing-instrument","existing-instrument",-760726145)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"existing-instrument","existing-instrument",-760726145),new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430),new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430),null,null),new cljs.core.Keyword("fulcro.client","instrument","fulcro.client/instrument",1644680430),null,null,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("fulcro.client","tool-registry","fulcro.client/tool-registry",-1958742535),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),new cljs.core.Keyword("fulcro.client","component-lifecycle","fulcro.client/component-lifecycle",1855890964),new cljs.core.Keyword("fulcro.client","instrument-wrapper","fulcro.client/instrument-wrapper",-649421918)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__69115){
return cljs.core.map_QMARK_(G__69115);
}),(function (G__69115){
return cljs.core.contains_QMARK_(G__69115,new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184));
})], null),(function (G__69115){
return ((cljs.core.map_QMARK_(G__69115)) && (cljs.core.contains_QMARK_(G__69115,new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184))));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),new cljs.core.Keyword("fulcro.client","component-lifecycle","fulcro.client/component-lifecycle",1855890964),new cljs.core.Keyword("fulcro.client","instrument-wrapper","fulcro.client/instrument-wrapper",-649421918)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),new cljs.core.Keyword("fulcro.client","component-lifecycle","fulcro.client/component-lifecycle",1855890964),new cljs.core.Keyword("fulcro.client","instrument-wrapper","fulcro.client/instrument-wrapper",-649421918)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069),new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985),new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305),new cljs.core.Keyword("fulcro.client","component-lifecycle","fulcro.client/component-lifecycle",1855890964),new cljs.core.Keyword("fulcro.client","instrument-wrapper","fulcro.client/instrument-wrapper",-649421918)], null)])));
/**
 * Register a debug tool. When an app starts, the debug tool can have several hooks that are notified:
 * 
 *   ::tool-id some identifier to place the tool into the tool map
 *   ::tx-listen is a (fn [tx info] ...) that will be called on every `transact!` of the app. Return value is ignored.
 *   ::network-wrapper is (fn [network-map] network-map') that will be given the networking config BEFORE it is initialized. You can wrap
 *   them, but you MUST return a compatible map out or you'll disable networking.
 *   ::component-lifecycle is (fn [component evt]) that is called with evt of :mounted and :unmounted to tell you when the given component mounts/unmounts.
 *   ::instrument-wrapper is a (fn [instrument] instrument') that allows you to wrap your own instrumentation (for rendering) around any existing (which may be nil)
 *   ::app-started (fn [app] ...) that will be called once the app is mounted, just like started-callback/client-did-mount. Return value is ignored.
 */
fulcro.client.register_tool = (function fulcro$client$register_tool(p__69222){
var map__69223 = p__69222;
var map__69223__$1 = (((((!((map__69223 == null))))?(((((map__69223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69223):map__69223);
var tool_registry = map__69223__$1;
var tool_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69223__$1,new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fulcro.client.fulcro_tools,cljs.core.assoc,tool_id,tool_registry);
});
fulcro.client.normalize_network = (function fulcro$client$normalize_network(networking){
if((function (){var or__4131__auto__ = (((!((networking == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === networking.fulcro$client$network$FulcroRemoteI$))))?true:false):false);
if(or__4131__auto__){
return or__4131__auto__;
} else {
if((!((networking == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === networking.fulcro$client$network$FulcroNetwork$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),networking], null);
} else {
return networking;
}
});
fulcro.client.add_tools = (function fulcro$client$add_tools(original_start,original_net,original_tx_listen,original_instrument){
var net = fulcro.client.normalize_network(original_net);
var listen = (function (){var or__4131__auto__ = original_tx_listen;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(null);
}
})();
var started = (function (){var or__4131__auto__ = original_start;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(null);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (net,listen,started){
return (function (p__69313,p__69314){
var vec__69316 = p__69313;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69316,(0),null);
var net__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69316,(1),null);
var listen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69316,(2),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69316,(3),null);
var lifecycle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69316,(4),null);
var map__69319 = p__69314;
var map__69319__$1 = (((((!((map__69319 == null))))?(((((map__69319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69319):map__69319);
var tool_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("fulcro.client","tool-id","fulcro.client/tool-id",92631184));
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("fulcro.client","tx-listen","fulcro.client/tx-listen",267162069));
var network_wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("fulcro.client","network-wrapper","fulcro.client/network-wrapper",-982819985));
var app_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("fulcro.client","app-started","fulcro.client/app-started",1807137305));
var instrument_wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("fulcro.client","instrument-wrapper","fulcro.client/instrument-wrapper",-649421918));
var component_lifecycle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69319__$1,new cljs.core.Keyword("fulcro.client","component-lifecycle","fulcro.client/component-lifecycle",1855890964));
var start__$1 = (cljs.core.truth_(app_started)?((function (vec__69316,start,net__$1,listen__$1,instrument,lifecycle,map__69319,map__69319__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started){
return (function (app){
(app_started.cljs$core$IFn$_invoke$arity$1 ? app_started.cljs$core$IFn$_invoke$arity$1(app) : app_started.call(null,app));

return (start.cljs$core$IFn$_invoke$arity$1 ? start.cljs$core$IFn$_invoke$arity$1(app) : start.call(null,app));
});})(vec__69316,start,net__$1,listen__$1,instrument,lifecycle,map__69319,map__69319__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started))
:start);
var net__$2 = (cljs.core.truth_(network_wrapper)?(network_wrapper.cljs$core$IFn$_invoke$arity$1 ? network_wrapper.cljs$core$IFn$_invoke$arity$1(net__$1) : network_wrapper.call(null,net__$1)):net__$1);
var listen__$2 = (cljs.core.truth_(tx_listen)?((function (start__$1,net__$2,vec__69316,start,net__$1,listen__$1,instrument,lifecycle,map__69319,map__69319__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started){
return (function (env,info){
return (tx_listen.cljs$core$IFn$_invoke$arity$2 ? tx_listen.cljs$core$IFn$_invoke$arity$2(env,info) : tx_listen.call(null,env,info));
});})(start__$1,net__$2,vec__69316,start,net__$1,listen__$1,instrument,lifecycle,map__69319,map__69319__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started))
:listen__$1);
var instrument__$1 = (cljs.core.truth_(instrument_wrapper)?(instrument_wrapper.cljs$core$IFn$_invoke$arity$1 ? instrument_wrapper.cljs$core$IFn$_invoke$arity$1(instrument) : instrument_wrapper.call(null,instrument)):instrument);
var lifecycle__$1 = (cljs.core.truth_(component_lifecycle)?((function (start__$1,net__$2,listen__$2,instrument__$1,vec__69316,start,net__$1,listen__$1,instrument,lifecycle,map__69319,map__69319__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started){
return (function (c,e){
(component_lifecycle.cljs$core$IFn$_invoke$arity$2 ? component_lifecycle.cljs$core$IFn$_invoke$arity$2(c,e) : component_lifecycle.call(null,c,e));

if(cljs.core.truth_(lifecycle)){
return (lifecycle.cljs$core$IFn$_invoke$arity$2 ? lifecycle.cljs$core$IFn$_invoke$arity$2(c,e) : lifecycle.call(null,c,e));
} else {
return null;
}
});})(start__$1,net__$2,listen__$2,instrument__$1,vec__69316,start,net__$1,listen__$1,instrument,lifecycle,map__69319,map__69319__$1,tool_id,tx_listen,network_wrapper,app_started,instrument_wrapper,component_lifecycle,net,listen,started))
:lifecycle);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,net__$2,listen__$2,instrument__$1,lifecycle__$1], null);
});})(net,listen,started))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [started,net,listen,null,null], null),cljs.core.vals(cljs.core.deref(fulcro.client.fulcro_tools)));
});
fulcro.client.mutate = fulcro.client.impl.application.write_entry_point;
/**
 * Entry point for creating a new fulcro client. Instantiates an Application with default values, unless
 *   overridden by the parameters. If you do not supply a networking object, one will be provided that connects to the
 *   same server the application was served from, at `/api`.
 * 
 *   `:request-transform` DEPRECATED. ONLY WORKS WITH DEFAULT REMOTE. Use a custom remote with client middleware instead.
 *   If supplied it must be a function:
 * 
 *   ```
 *  (fn [{:keys [body headers]}] {:body body' :headers headers'})
 *   ```
 * 
 *   it can replace the outgoing EDN of body or headers (returning both as a vector). NOTE: Both of these are clojurescript types.
 *   The edn will be encoded with transit, and the headers will be converted to a js map. IMPORTANT: Only supported
 *   when using the default built-in single-remote networking.
 * 
 *   `:initial-state` is your applications initial state. If it is an atom, it *must* be normalized. Fulcro databases
 *   always have normalization turned on (for server data merging). If it is not an atom, it will be auto-normalized.
 * 
 *   `:client-did-mount` is an optional function that will receive the intialized fulcro application after it is
 *   mounted in the DOM, and is useful for triggering initial loads, routing mutations, etc. The reconciler is available
 *   under the `:reconciler` key (and you can access the app state, root node, etc from there.). The legacy name of
 *   this option (:started-callback) is still supported, but is deprecated.
 * 
 *   `:network-error-callback`. DEPRECATED. Use a custom remote with middleware instead.
 *   This is a function of three arguments, the app state atom, status code, and the error, which will be invoked for
 *   every network error (status code >= 400, or no network found). Only works if you choose to use the default built-in
 *   networking (ignored if you specify :networking).
 * 
 *   `:transit-handlers` (optional). DEPRECATED: Use a custom client network with middleware instead.
 * 
 *   `:shared` (optional). A map of arbitrary values to be shared across all components, accessible to them via (prim/shared this)
 * 
 *   `:load-marker-default` (optional) A default value to use for the `:marker` option of loads (default is false which means
 *   no markers).
 * 
 *   `:query-transform-default` (optional) A (fn [query] query) that is used as the default `:update-query` for data-detch/load parameters.
 *   This can be used to customize things like preventing certain keywords from ever appearing in the remote version of a
 *   component's query. See `fulcro.client.elide-query-nodes` for an idea of a common helper.
 * 
 *   `:read-local` (optional). DEPRECATED. DO NOT USE.
 * 
 *   `:query-interpreter` (optional). A custom query engine (parser and interpreter) that will be used to satisfy all
 *   local client queries from the local state database. Cannot be used with `:read-local`.
 *   It must be a `(fn [env query] )` that returns the result for the given query. It will not be given mutations.
 *   The `env` will contain the `:state` atom, `:shared`, and `:parser`. It may also contain the `:reconciler`.
 * 
 *   `:networking` (optional). An instance of FulcroNetwork that will act as the default remote (named :remote). If
 *   you want to support multiple remotes, then this should be a map whose keys are the keyword names of the remotes
 *   and whose values are FulcroNetwork instances.
 * 
 *   `:mutation-merge (optional). DEPRECATED. Use mutation joins or network middleware instead.
 * 
 *   `:reconciler-options (optional). A map that will be merged into the reconciler options. Currently it's mostly
 *   useful to override things like :root-render and :root-unmount for React Native Apps.`
 *   
 */
fulcro.client.make_fulcro_client = (function fulcro$client$make_fulcro_client(var_args){
var G__69355 = arguments.length;
switch (G__69355) {
case 0:
return fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1 = (function (p__69367){
var map__69368 = p__69367;
var map__69368__$1 = (((((!((map__69368 == null))))?(((((map__69368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69368):map__69368);
var options = map__69368__$1;
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035));
var client_did_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"client-did-mount","client-did-mount",-958324226),cljs.core.constantly(null));
var query_transform_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273));
var read_local = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"read-local","read-local",811906273),cljs.core.constantly(false));
var network_error_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"network-error-callback","network-error-callback",93849635),cljs.core.constantly(null));
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var mutation_merge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322));
var transit_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),null);
var query_interpreter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805));
var request_transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69368__$1,new cljs.core.Keyword(null,"request-transform","request-transform",170337297));
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),false);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69368__$1,new cljs.core.Keyword(null,"shared","shared",-384145993),null);
var client_did_mount__$1 = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951)))?new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(options):client_did_mount);
var networking__$1 = (function (){var or__4131__auto__ = networking;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return fulcro.client.network.make_fulcro_network.cljs$core$IFn$_invoke$arity$variadic("/api",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request-transform","request-transform",170337297),request_transform,new cljs.core.Keyword(null,"transit-handlers","transit-handlers",-1206080791),transit_handlers,new cljs.core.Keyword(null,"global-error-callback","global-error-callback",901427631),network_error_callback], 0));
}
})();
var vec__69378 = fulcro.client.add_tools(client_did_mount__$1,networking__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367).cljs$core$IFn$_invoke$arity$1(reconciler_options),new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(reconciler_options));
var client_did_mount__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(0),null);
var networking__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(1),null);
var tx_listen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(2),null);
var instrument = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(3),null);
var lifecycle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69378,(4),null);
var G__69395 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"read-local","read-local",811906273),read_local,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),mutation_merge,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),client_did_mount__$2,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),lifecycle,new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),query_interpreter,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__69399 = cljs.core.PersistentArrayMap.EMPTY;
var G__69399__$1 = (cljs.core.truth_(tx_listen)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69399,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),tx_listen):G__69399);
var G__69399__$2 = (cljs.core.truth_(instrument)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69399__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844),instrument):G__69399__$1);
var G__69399__$3 = (cljs.core.truth_(lifecycle)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69399__$2,new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205),lifecycle):G__69399__$2);
var G__69399__$4 = (cljs.core.truth_(migrate)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69399__$3,new cljs.core.Keyword(null,"migrate","migrate",-207110743),migrate):G__69399__$3);
if(cljs.core.truth_(shared)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69399__$4,new cljs.core.Keyword(null,"shared","shared",-384145993),shared);
} else {
return G__69399__$4;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),load_marker_default,new cljs.core.Keyword(null,"query-transform-default","query-transform-default",-1684574273),query_transform_default], null),reconciler_options], 0)),new cljs.core.Keyword(null,"networking","networking",586110628),networking__$2], null);
return (fulcro.client.map__GT_Application.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.map__GT_Application.cljs$core$IFn$_invoke$arity$1(G__69395) : fulcro.client.map__GT_Application.call(null,G__69395));
});

fulcro.client.make_fulcro_client.cljs$lang$maxFixedArity = 1;

/**
 * Deprecated: use make-fulcro-client instead.
 */
fulcro.client.new_fulcro_client = (function fulcro$client$new_fulcro_client(var_args){
var args__4736__auto__ = [];
var len__4730__auto___69914 = arguments.length;
var i__4731__auto___69915 = (0);
while(true){
if((i__4731__auto___69915 < len__4730__auto___69914)){
args__4736__auto__.push((arguments[i__4731__auto___69915]));

var G__69916 = (i__4731__auto___69915 + (1));
i__4731__auto___69915 = G__69916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.new_fulcro_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__69429){
var map__69430 = p__69429;
var map__69430__$1 = (((((!((map__69430 == null))))?(((((map__69430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69430):map__69430);
var options = map__69430__$1;
var load_marker_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),true);
var client_will_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951));
var options_with_marker_default = (function (){var G__69440 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),load_marker_default);
if(cljs.core.truth_(client_will_mount)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69440,new cljs.core.Keyword(null,"client-will-mount","client-will-mount",-2138714037),client_will_mount);
} else {
return G__69440;
}
})();
return fulcro.client.make_fulcro_client.cljs$core$IFn$_invoke$arity$1(options_with_marker_default);
});

fulcro.client.new_fulcro_client.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.new_fulcro_client.cljs$lang$applyTo = (function (seq69410){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69410));
});


/**
 * @interface
 */
fulcro.client.FulcroApplication = function(){};

/**
 * Start/replace the webapp on the given DOM ID or DOM Node.
 */
fulcro.client.mount = (function fulcro$client$mount(this$,root_component,target_dom_id){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$mount$arity$3 == null)))))){
return this$.fulcro$client$FulcroApplication$mount$arity$3(this$,root_component,target_dom_id);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.mount[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__4434__auto__.call(null,this$,root_component,target_dom_id));
} else {
var m__4431__auto__ = (fulcro.client.mount["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,target_dom_id) : m__4431__auto__.call(null,this$,root_component,target_dom_id));
} else {
throw cljs.core.missing_protocol("FulcroApplication.mount",this$);
}
}
}
});

/**
 * Replace the entire app state with the given (pre-normalized) state.
 */
fulcro.client.reset_state_BANG_ = (function fulcro$client$reset_state_BANG_(this$,new_state){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$reset_state_BANG_$arity$2 == null)))))){
return this$.fulcro$client$FulcroApplication$reset_state_BANG_$arity$2(this$,new_state);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.reset_state_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__4434__auto__.call(null,this$,new_state));
} else {
var m__4431__auto__ = (fulcro.client.reset_state_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__4431__auto__.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-state!",this$);
}
}
}
});

/**
 * Replace the entire app state with the initial app state defined on the root component (includes auto-merging of unions). callback can be nil, a function, or :original (to call original started-callback).
 */
fulcro.client.reset_app_BANG_ = (function fulcro$client$reset_app_BANG_(this$,root_component,callback){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$reset_app_BANG_$arity$3 == null)))))){
return this$.fulcro$client$FulcroApplication$reset_app_BANG_$arity$3(this$,root_component,callback);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.reset_app_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__4434__auto__.call(null,this$,root_component,callback));
} else {
var m__4431__auto__ = (fulcro.client.reset_app_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,root_component,callback) : m__4431__auto__.call(null,this$,root_component,callback));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-app!",this$);
}
}
}
});

/**
 * Remove all pending network requests on the given remote(s). Useful on failures to eliminate cascading failures. Remote can be a keyword, set, or nil. `nil` means all remotes.
 */
fulcro.client.clear_pending_remote_requests_BANG_ = (function fulcro$client$clear_pending_remote_requests_BANG_(this$,remotes){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2 == null)))))){
return this$.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2(this$,remotes);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.clear_pending_remote_requests_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__4434__auto__.call(null,this$,remotes));
} else {
var m__4431__auto__ = (fulcro.client.clear_pending_remote_requests_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,remotes) : m__4431__auto__.call(null,this$,remotes));
} else {
throw cljs.core.missing_protocol("FulcroApplication.clear-pending-remote-requests!",this$);
}
}
}
});

/**
 * Refresh the UI (force re-render).
 */
fulcro.client.refresh = (function fulcro$client$refresh(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$refresh$arity$1 == null)))))){
return this$.fulcro$client$FulcroApplication$refresh$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.refresh[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.refresh["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.refresh",this$);
}
}
}
});

/**
 * Return the current UI history of the application, suitable for network transfer
 */
fulcro.client.history = (function fulcro$client$history(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$history$arity$1 == null)))))){
return this$.fulcro$client$FulcroApplication$history$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.history[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.history["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.history",this$);
}
}
}
});

/**
 * Abort the given request on all remotes. abort-id is a self-assigned ID for the remote interaction.
 */
fulcro.client.abort_request_BANG_ = (function fulcro$client$abort_request_BANG_(this$,abort_id){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$abort_request_BANG_$arity$2 == null)))))){
return this$.fulcro$client$FulcroApplication$abort_request_BANG_$arity$2(this$,abort_id);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.abort_request_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,abort_id) : m__4434__auto__.call(null,this$,abort_id));
} else {
var m__4431__auto__ = (fulcro.client.abort_request_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,abort_id) : m__4431__auto__.call(null,this$,abort_id));
} else {
throw cljs.core.missing_protocol("FulcroApplication.abort-request!",this$);
}
}
}
});

/**
 * Returns the application with history reset to its initial, empty state. Resets application history to its initial, empty state. Suitable for resetting the app for situations such as user log out.
 */
fulcro.client.reset_history_BANG_ = (function fulcro$client$reset_history_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1 == null)))))){
return this$.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro.client.reset_history_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro.client.reset_history_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("FulcroApplication.reset-history!",this$);
}
}
}
});

/**
 * Starts all remotes in a map. If a remote's `start` returns something that implements `FulcroNetwork`,
 *   update the network map with this value. Returns possibly updated `network-map`.
 */
fulcro.client.start_networking = (function fulcro$client$start_networking(network_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function fulcro$client$start_networking_$_iter__69549(s__69550){
return (new cljs.core.LazySeq(null,(function (){
var s__69550__$1 = s__69550;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69550__$1);
if(temp__5720__auto__){
var s__69550__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69550__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69550__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69552 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69551 = (0);
while(true){
if((i__69551 < size__4522__auto__)){
var vec__69565 = cljs.core._nth(c__4521__auto__,i__69551);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69565,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69565,(1),null);
var started = (((((!((remote == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote.fulcro$client$network$FulcroNetwork$))))?true:false):false))?fulcro.client.network.start(remote):null);
var valid = (((((!((started == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === started.fulcro$client$network$FulcroNetwork$))))?true:false):false))?started:remote);
cljs.core.chunk_append(b__69552,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,valid], null));

var G__69959 = (i__69551 + (1));
i__69551 = G__69959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69552),fulcro$client$start_networking_$_iter__69549(cljs.core.chunk_rest(s__69550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69552),null);
}
} else {
var vec__69576 = cljs.core.first(s__69550__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69576,(0),null);
var remote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69576,(1),null);
var started = (((((!((remote == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote.fulcro$client$network$FulcroNetwork$))))?true:false):false))?fulcro.client.network.start(remote):null);
var valid = (((((!((started == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === started.fulcro$client$network$FulcroNetwork$))))?true:false):false))?started:remote);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,valid], null),fulcro$client$start_networking_$_iter__69549(cljs.core.rest(s__69550__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(network_map);
})());
});
/**
 * PRIVATE
 */
fulcro.client._mutation_query_QMARK_ = (function fulcro$client$_mutation_query_QMARK_(tx){
return cljs.core.boolean$(cljs.core.some((function (p1__69585_SHARP_){
return fulcro.util.mutation_QMARK_(p1__69585_SHARP_);
}),tx));
});
/**
 * Generate a parser that splits reads and writes across two parsers: the supplied query parser for queries, and the built-in
 *   parser for mutations.
 */
fulcro.client.split_parser = (function fulcro$client$split_parser(query_parser){
var mutation_parser = fulcro.client.primitives.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cljs.core.constantly(null),new cljs.core.Keyword(null,"mutate","mutate",1422419038),fulcro.client.impl.application.write_entry_point], null));
return ((function (mutation_parser){
return (function() {
var fulcro$client$split_parser_$_split_parser_STAR_ = null;
var fulcro$client$split_parser_$_split_parser_STAR___2 = (function (env,query){
return fulcro$client$split_parser_$_split_parser_STAR_.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var fulcro$client$split_parser_$_split_parser_STAR___3 = (function (env,query,target){
if(fulcro.client._mutation_query_QMARK_(query)){
return mutation_parser(env,query,target);
} else {
return (query_parser.cljs$core$IFn$_invoke$arity$2 ? query_parser.cljs$core$IFn$_invoke$arity$2(env,query) : query_parser.call(null,env,query));
}
});
fulcro$client$split_parser_$_split_parser_STAR_ = function(env,query,target){
switch(arguments.length){
case 2:
return fulcro$client$split_parser_$_split_parser_STAR___2.call(this,env,query);
case 3:
return fulcro$client$split_parser_$_split_parser_STAR___3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$client$split_parser_$_split_parser_STAR_.cljs$core$IFn$_invoke$arity$2 = fulcro$client$split_parser_$_split_parser_STAR___2;
fulcro$client$split_parser_$_split_parser_STAR_.cljs$core$IFn$_invoke$arity$3 = fulcro$client$split_parser_$_split_parser_STAR___3;
return fulcro$client$split_parser_$_split_parser_STAR_;
})()
;})(mutation_parser))
});
/**
 * PRIVATE.
 * 
 *   Initialize the fulcro Application. Creates network queue, sets up i18n, creates reconciler, mounts it, and returns
 *   the initialized app
 */
fulcro.client._initialize = (function fulcro$client$_initialize(p__69616,initial_state,root_component,dom_id_or_node,reconciler_options){
var map__69621 = p__69616;
var map__69621__$1 = (((((!((map__69621 == null))))?(((((map__69621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69621):map__69621);
var app = map__69621__$1;
var networking = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69621__$1,new cljs.core.Keyword(null,"networking","networking",586110628));
var read_local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69621__$1,new cljs.core.Keyword(null,"read-local","read-local",811906273));
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69621__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951));
var query_interpreter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69621__$1,new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805));
var network_map = fulcro.client.normalize_network(networking);
var reconciler_options__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(reconciler_options)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reconciler_options,new cljs.core.Keyword(null,"id","id",-1388402092),((typeof dom_id_or_node === 'string')?dom_id_or_node:fulcro.util.unique_key())):reconciler_options);
var remotes = cljs.core.keys(network_map);
var send_queues = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,reconciler_options__$1,remotes,map__69621,map__69621__$1,app,networking,read_local,started_callback,query_interpreter){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1024));
});})(network_map,reconciler_options__$1,remotes,map__69621,map__69621__$1,app,networking,read_local,started_callback,query_interpreter))
,remotes));
var response_channels = cljs.core.zipmap(remotes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (network_map,reconciler_options__$1,remotes,send_queues,map__69621,map__69621__$1,app,networking,read_local,started_callback,query_interpreter){
return (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});})(network_map,reconciler_options__$1,remotes,send_queues,map__69621,map__69621__$1,app,networking,read_local,started_callback,query_interpreter))
,remotes));
var parser = (cljs.core.truth_(query_interpreter)?fulcro.client.split_parser(query_interpreter):fulcro.client.primitives.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fulcro.client.impl.application.read_local,read_local),new cljs.core.Keyword(null,"mutate","mutate",1422419038),fulcro.client.impl.application.write_entry_point], null)));
var initial_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),send_queues,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),response_channels,new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),true], 0));
var app_with_networking = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_app,new cljs.core.Keyword(null,"networking","networking",586110628),fulcro.client.start_networking(network_map));
var rec = fulcro.client.impl.application.generate_reconciler(app_with_networking,initial_state,parser,reconciler_options__$1);
var completed_app = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_with_networking,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),rec);
var node = ((typeof dom_id_or_node === 'string')?goog.dom.getElement(dom_id_or_node):dom_id_or_node);
fulcro.client.impl.application.initialize_global_error_callbacks(completed_app);

fulcro.client.impl.application.start_network_sequential_processing(completed_app);

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(rec,root_component,node);

(fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2(completed_app,root_component) : fulcro.client.merge_alternate_union_elements_BANG_.call(null,completed_app,root_component));

if(cljs.core.truth_(started_callback)){
(started_callback.cljs$core$IFn$_invoke$arity$1 ? started_callback.cljs$core$IFn$_invoke$arity$1(completed_app) : started_callback.call(null,completed_app));
} else {
}

return completed_app;
});
/**
 * Needed for mocking in tests. Do not use directly. Use FulcroApplication protocol methods instead.
 */
fulcro.client.clear_queue = (function fulcro$client$clear_queue(queue){
var element = cljs.core.async.poll_BANG_(queue);
while(true){
if(cljs.core.truth_(element)){
var G__69979 = cljs.core.async.poll_BANG_(queue);
element = G__69979;
continue;
} else {
return null;
}
break;
}
});
/**
 * PRIVATE
 */
fulcro.client._abort_items_on_queue = (function fulcro$client$_abort_items_on_queue(queue,abort_id){
var elements = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var element_69981 = cljs.core.async.poll_BANG_(queue);
while(true){
if(cljs.core.truth_(element_69981)){
if(cljs.core.truth_((function (){var G__69647 = element_69981;
var G__69647__$1 = (((G__69647 == null))?null:new cljs.core.Keyword("fulcro.client.network","abort-id","fulcro.client.network/abort-id",-22430267).cljs$core$IFn$_invoke$arity$1(G__69647));
if((G__69647__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__69647__$1,abort_id);
}
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(elements,cljs.core.conj,element_69981);
}

var G__69982 = cljs.core.async.poll_BANG_(queue);
element_69981 = G__69982;
continue;
} else {
}
break;
}

var seq__69650 = cljs.core.seq(cljs.core.deref(elements));
var chunk__69651 = null;
var count__69652 = (0);
var i__69653 = (0);
while(true){
if((i__69653 < count__69652)){
var e = chunk__69651.cljs$core$IIndexed$_nth$arity$2(null,i__69653);
cljs.core.async.offer_BANG_(queue,e);


var G__69984 = seq__69650;
var G__69985 = chunk__69651;
var G__69986 = count__69652;
var G__69987 = (i__69653 + (1));
seq__69650 = G__69984;
chunk__69651 = G__69985;
count__69652 = G__69986;
i__69653 = G__69987;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69650);
if(temp__5720__auto__){
var seq__69650__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69650__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69650__$1);
var G__69989 = cljs.core.chunk_rest(seq__69650__$1);
var G__69990 = c__4550__auto__;
var G__69991 = cljs.core.count(c__4550__auto__);
var G__69992 = (0);
seq__69650 = G__69989;
chunk__69651 = G__69990;
count__69652 = G__69991;
i__69653 = G__69992;
continue;
} else {
var e = cljs.core.first(seq__69650__$1);
cljs.core.async.offer_BANG_(queue,e);


var G__69994 = cljs.core.next(seq__69650__$1);
var G__69995 = null;
var G__69996 = (0);
var G__69997 = (0);
seq__69650 = G__69994;
chunk__69651 = G__69995;
count__69652 = G__69996;
i__69653 = G__69997;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Needed for mocking in tests. Use FulcroApplication protocol methods instead.
 */
fulcro.client.reset_history_impl = (function fulcro$client$reset_history_impl(p__69659){
var map__69660 = p__69659;
var map__69660__$1 = (((((!((map__69660 == null))))?(((((map__69660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69660):map__69660);
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69660__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var temp__5720__auto__ = fulcro.client.primitives.get_history(reconciler);
if(cljs.core.truth_(temp__5720__auto__)){
var hist_atom = temp__5720__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hist_atom,((function (hist_atom,temp__5720__auto__,map__69660,map__69660__$1,reconciler){
return (function (p__69662){
var map__69663 = p__69662;
var map__69663__$1 = (((((!((map__69663 == null))))?(((((map__69663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69663):map__69663);
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69663__$1,new cljs.core.Keyword("fulcro.history","max-size","fulcro.history/max-size",338795187));
return fulcro.history.new_history(max_size);
});})(hist_atom,temp__5720__auto__,map__69660,map__69660__$1,reconciler))
);
} else {
return null;
}
});
fulcro.client.refresh_STAR_ = (function fulcro$client$refresh_STAR_(p__69668,root,target){
var map__69669 = p__69668;
var map__69669__$1 = (((((!((map__69669 == null))))?(((((map__69669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69669):map__69669);
var app = map__69669__$1;
var reconciler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69669__$1,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966));
var old_target_70007 = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
var target_70008__$1 = ((typeof target === 'string')?goog.dom.getElement(target):target);
if(cljs.core.truth_((function (){var and__4120__auto__ = old_target_70007;
if(cljs.core.truth_(and__4120__auto__)){
return (!((old_target_70007 === target_70008__$1)));
} else {
return and__4120__auto__;
}
})())){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),281], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Mounting on newly supplied target."], 0));
}catch (e69678){if((e69678 instanceof Error)){
var e__55143__auto___70012 = e69678;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),281], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___70012], 0));
} else {
throw e69678;

}
}
fulcro.client.primitives.remove_root_BANG_(reconciler,old_target_70007);

fulcro.client.primitives.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,root,target_70008__$1);
} else {
}

return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(reconciler);
});
fulcro.client.mount_STAR_ = (function fulcro$client$mount_STAR_(p__69679,root_component,dom_id_or_node){
var map__69680 = p__69679;
var map__69680__$1 = (((((!((map__69680 == null))))?(((((map__69680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69680):map__69680);
var app = map__69680__$1;
var mounted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69680__$1,new cljs.core.Keyword(null,"mounted?","mounted?",712114760));
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69680__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806));
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69680__$1,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035));
if(cljs.core.truth_(mounted_QMARK_)){
fulcro.client.refresh_STAR_(app,root_component,dom_id_or_node);

return app;
} else {
var uses_initial_app_state_QMARK_ = fulcro.client.primitives.has_initial_app_state_QMARK_(root_component);
var ui_declared_state = (function (){var and__4120__auto__ = uses_initial_app_state_QMARK_;
if(and__4120__auto__){
return fulcro.client.primitives.initial_state(root_component,null);
} else {
return and__4120__auto__;
}
})();
var explicit_state_QMARK_ = ((fulcro.util.atom_QMARK_(initial_state)) || (((cljs.core.seq(initial_state)) && (cljs.core.map_QMARK_(initial_state)))));
var state = ((explicit_state_QMARK_)?(cljs.core.truth_(initial_state)?initial_state:cljs.core.PersistentArrayMap.EMPTY):(cljs.core.truth_(ui_declared_state)?ui_declared_state:cljs.core.PersistentArrayMap.EMPTY
));
return fulcro.client._initialize(app,state,root_component,dom_id_or_node,reconciler_options);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {fulcro.client.FulcroApplication}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
fulcro.client.Application = (function (initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,query_interpreter,mounted_QMARK_,reconciler_options,__meta,__extmap,__hash){
this.initial_state = initial_state;
this.mutation_merge = mutation_merge;
this.started_callback = started_callback;
this.remotes = remotes;
this.networking = networking;
this.send_queues = send_queues;
this.response_channels = response_channels;
this.reconciler = reconciler;
this.read_local = read_local;
this.query_interpreter = query_interpreter;
this.mounted_QMARK_ = mounted_QMARK_;
this.reconciler_options = reconciler_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
fulcro.client.Application.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

fulcro.client.Application.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k69688,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__69697 = k69688;
var G__69697__$1 = (((G__69697 instanceof cljs.core.Keyword))?G__69697.fqn:null);
switch (G__69697__$1) {
case "initial-state":
return self__.initial_state;

break;
case "mutation-merge":
return self__.mutation_merge;

break;
case "started-callback":
return self__.started_callback;

break;
case "remotes":
return self__.remotes;

break;
case "networking":
return self__.networking;

break;
case "send-queues":
return self__.send_queues;

break;
case "response-channels":
return self__.response_channels;

break;
case "reconciler":
return self__.reconciler;

break;
case "read-local":
return self__.read_local;

break;
case "query-interpreter":
return self__.query_interpreter;

break;
case "mounted?":
return self__.mounted_QMARK_;

break;
case "reconciler-options":
return self__.reconciler_options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69688,else__4388__auto__);

}
});

fulcro.client.Application.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__69698){
var vec__69699 = p__69698;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69699,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69699,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

fulcro.client.Application.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#fulcro.client.Application{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),self__.mutation_merge],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remotes","remotes",1132366312),self__.remotes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),self__.send_queues],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),self__.response_channels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read-local","read-local",811906273),self__.read_local],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),self__.query_interpreter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options],null))], null),self__.__extmap));
});

fulcro.client.Application.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69687){
var self__ = this;
var G__69687__$1 = this;
return (new cljs.core.RecordIter((0),G__69687__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"read-local","read-local",811906273),new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

fulcro.client.Application.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

fulcro.client.Application.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,self__.__hash));
});

fulcro.client.Application.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
});

fulcro.client.Application.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1995471013 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

fulcro.client.Application.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69689,other69690){
var self__ = this;
var this69689__$1 = this;
return (((!((other69690 == null)))) && ((this69689__$1.constructor === other69690.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.initial_state,other69690.initial_state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.mutation_merge,other69690.mutation_merge)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.started_callback,other69690.started_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.remotes,other69690.remotes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.networking,other69690.networking)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.send_queues,other69690.send_queues)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.response_channels,other69690.response_channels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.reconciler,other69690.reconciler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.read_local,other69690.read_local)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.query_interpreter,other69690.query_interpreter)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.mounted_QMARK_,other69690.mounted_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.reconciler_options,other69690.reconciler_options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69689__$1.__extmap,other69690.__extmap)));
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$ = cljs.core.PROTOCOL_SENTINEL;

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$mount$arity$3 = (function (this$,root_component,dom_id_or_node){
var self__ = this;
var this$__$1 = this;
return fulcro.client.mount_STAR_(this$__$1,root_component,dom_id_or_node);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$reset_state_BANG_$arity$2 = (function (this$,new_state){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(fulcro.client.primitives.app_state(self__.reconciler),new_state);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$reset_app_BANG_$arity$3 = (function (this$,root_component,callback){
var self__ = this;
var this$__$1 = this;
if((!(fulcro.client.primitives.has_initial_app_state_QMARK_(root_component)))){
try{return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),309], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The specified root component does not implement InitialAppState!"], 0));
}catch (e69728){if((e69728 instanceof Error)){
var e__55143__auto__ = e69728;
return fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),309], null),new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto__], 0));
} else {
throw e69728;

}
}} else {
var initial_state__$1 = fulcro.client.primitives.initial_state(root_component,null);
var base_state = fulcro.client.primitives.tree__GT_db.cljs$core$IFn$_invoke$arity$4(root_component,initial_state__$1,true,fulcro.client.primitives.pre_merge_transform(initial_state__$1));
this$__$1.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2(null,null);

cljs.core.reset_BANG_(fulcro.client.primitives.app_state(self__.reconciler),base_state);

this$__$1.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1(null);

(fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2 ? fulcro.client.merge_alternate_union_elements_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,root_component) : fulcro.client.merge_alternate_union_elements_BANG_.call(null,this$__$1,root_component));

try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),317], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["updated app state to original ",fulcro.client.primitives.app_state(self__.reconciler)], 0));
}catch (e69732){if((e69732 instanceof Error)){
var e__55143__auto___70048 = e69732;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),317], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___70048], 0));
} else {
throw e69732;

}
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.Keyword(null,"original","original",-445386197))){
(self__.started_callback.cljs$core$IFn$_invoke$arity$1 ? self__.started_callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.started_callback.call(null,this$__$1));
} else {
if(cljs.core.truth_(callback)){
(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(this$__$1) : callback.call(null,this$__$1));
} else {
}
}

return this$__$1.fulcro$client$FulcroApplication$refresh$arity$1(null);
}
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$clear_pending_remote_requests_BANG_$arity$2 = (function (this$,remotes__$1){
var self__ = this;
var this$__$1 = this;
var remotes__$2 = (((remotes__$1 == null))?cljs.core.keys(self__.send_queues):(((remotes__$1 instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [remotes__$1], null):remotes__$1
));
var seq__69739 = cljs.core.seq(remotes__$2);
var chunk__69740 = null;
var count__69741 = (0);
var i__69742 = (0);
while(true){
if((i__69742 < count__69741)){
var r = chunk__69740.cljs$core$IIndexed$_nth$arity$2(null,i__69742);
fulcro.client.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));


var G__70052 = seq__69739;
var G__70053 = chunk__69740;
var G__70054 = count__69741;
var G__70055 = (i__69742 + (1));
seq__69739 = G__70052;
chunk__69740 = G__70053;
count__69741 = G__70054;
i__69742 = G__70055;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69739);
if(temp__5720__auto__){
var seq__69739__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69739__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69739__$1);
var G__70059 = cljs.core.chunk_rest(seq__69739__$1);
var G__70060 = c__4550__auto__;
var G__70061 = cljs.core.count(c__4550__auto__);
var G__70062 = (0);
seq__69739 = G__70059;
chunk__69740 = G__70060;
count__69741 = G__70061;
i__69742 = G__70062;
continue;
} else {
var r = cljs.core.first(seq__69739__$1);
fulcro.client.clear_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r));


var G__70064 = cljs.core.next(seq__69739__$1);
var G__70065 = null;
var G__70066 = (0);
var G__70067 = (0);
seq__69739 = G__70064;
chunk__69740 = G__70065;
count__69741 = G__70066;
i__69742 = G__70067;
continue;
}
} else {
return null;
}
}
break;
}
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$abort_request_BANG_$arity$2 = (function (this$,abort_id){
var self__ = this;
var this$__$1 = this;
var seq__69746 = cljs.core.seq(cljs.core.keys(self__.networking));
var chunk__69747 = null;
var count__69748 = (0);
var i__69749 = (0);
while(true){
if((i__69749 < count__69748)){
var r = chunk__69747.cljs$core$IIndexed$_nth$arity$2(null,i__69749);
var remote_net_70070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.networking,r);
if((((!((remote_net_70070 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote_net_70070.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
fulcro.client.network.abort(remote_net_70070,abort_id);

fulcro.client._abort_items_on_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r),abort_id);
} else {
}


var G__70071 = seq__69746;
var G__70072 = chunk__69747;
var G__70073 = count__69748;
var G__70074 = (i__69749 + (1));
seq__69746 = G__70071;
chunk__69747 = G__70072;
count__69748 = G__70073;
i__69749 = G__70074;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69746);
if(temp__5720__auto__){
var seq__69746__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69746__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69746__$1);
var G__70078 = cljs.core.chunk_rest(seq__69746__$1);
var G__70079 = c__4550__auto__;
var G__70080 = cljs.core.count(c__4550__auto__);
var G__70081 = (0);
seq__69746 = G__70078;
chunk__69747 = G__70079;
count__69748 = G__70080;
i__69749 = G__70081;
continue;
} else {
var r = cljs.core.first(seq__69746__$1);
var remote_net_70089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.networking,r);
if((((!((remote_net_70089 == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote_net_70089.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
fulcro.client.network.abort(remote_net_70089,abort_id);

fulcro.client._abort_items_on_queue(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.send_queues,r),abort_id);
} else {
}


var G__70090 = cljs.core.next(seq__69746__$1);
var G__70091 = null;
var G__70092 = (0);
var G__70093 = (0);
seq__69746 = G__70090;
chunk__69747 = G__70091;
count__69748 = G__70092;
i__69749 = G__70093;
continue;
}
} else {
return null;
}
}
break;
}
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$history$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.primitives.get_history(self__.reconciler);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$reset_history_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.reset_history_impl(this$__$1);
});

fulcro.client.Application.prototype.fulcro$client$FulcroApplication$refresh$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return fulcro.client.util.force_render.cljs$core$IFn$_invoke$arity$1(self__.reconciler);
});

fulcro.client.Application.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"read-local","read-local",811906273),null,new cljs.core.Keyword(null,"networking","networking",586110628),null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),null,new cljs.core.Keyword(null,"remotes","remotes",1132366312),null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),null,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),null,new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),null,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

fulcro.client.Application.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__69687){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__69767 = cljs.core.keyword_identical_QMARK_;
var expr__69768 = k__4393__auto__;
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),expr__69768)))){
return (new fulcro.client.Application(G__69687,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,G__69687,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,G__69687,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remotes","remotes",1132366312),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"remotes","remotes",1132366312),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,G__69687,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"networking","networking",586110628),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"networking","networking",586110628),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,G__69687,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,G__69687,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,G__69687,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,G__69687,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"read-local","read-local",811906273),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"read-local","read-local",811906273),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,G__69687,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,G__69687,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mounted?","mounted?",712114760),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"mounted?","mounted?",712114760),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,G__69687,self__.reconciler_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__69767.cljs$core$IFn$_invoke$arity$2 ? pred__69767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),expr__69768) : pred__69767.call(null,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),expr__69768)))){
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,G__69687,self__.__meta,self__.__extmap,null));
} else {
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__69687),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

fulcro.client.Application.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),self__.initial_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),self__.mutation_merge,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),self__.started_callback,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remotes","remotes",1132366312),self__.remotes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"networking","networking",586110628),self__.networking,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),self__.send_queues,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),self__.response_channels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),self__.reconciler,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read-local","read-local",811906273),self__.read_local,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),self__.query_interpreter,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"mounted?","mounted?",712114760),self__.mounted_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),self__.reconciler_options,null))], null),self__.__extmap));
});

fulcro.client.Application.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__69687){
var self__ = this;
var this__4384__auto____$1 = this;
return (new fulcro.client.Application(self__.initial_state,self__.mutation_merge,self__.started_callback,self__.remotes,self__.networking,self__.send_queues,self__.response_channels,self__.reconciler,self__.read_local,self__.query_interpreter,self__.mounted_QMARK_,self__.reconciler_options,G__69687,self__.__extmap,self__.__hash));
});

fulcro.client.Application.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

fulcro.client.Application.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-state","initial-state",-381085279,null),new cljs.core.Symbol(null,"mutation-merge","mutation-merge",-491211795,null),new cljs.core.Symbol(null,"started-callback","started-callback",-158055424,null),new cljs.core.Symbol(null,"remotes","remotes",-1522069457,null),new cljs.core.Symbol(null,"networking","networking",-2068325141,null),new cljs.core.Symbol(null,"send-queues","send-queues",1428195197,null),new cljs.core.Symbol(null,"response-channels","response-channels",-230527601,null),new cljs.core.Symbol(null,"reconciler","reconciler",-192295439,null),new cljs.core.Symbol(null,"read-local","read-local",-1842529496,null),new cljs.core.Symbol(null,"query-interpreter","query-interpreter",658832722,null),new cljs.core.Symbol(null,"mounted?","mounted?",-1942321009,null),new cljs.core.Symbol(null,"reconciler-options","reconciler-options",-1005320734,null)], null);
});

fulcro.client.Application.cljs$lang$type = true;

fulcro.client.Application.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"fulcro.client/Application",null,(1),null));
});

fulcro.client.Application.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"fulcro.client/Application");
});

/**
 * Positional factory function for fulcro.client/Application.
 */
fulcro.client.__GT_Application = (function fulcro$client$__GT_Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,query_interpreter,mounted_QMARK_,reconciler_options){
return (new fulcro.client.Application(initial_state,mutation_merge,started_callback,remotes,networking,send_queues,response_channels,reconciler,read_local,query_interpreter,mounted_QMARK_,reconciler_options,null,null,null));
});

/**
 * Factory function for fulcro.client/Application, taking a map of keywords to field values.
 */
fulcro.client.map__GT_Application = (function fulcro$client$map__GT_Application(G__69691){
var extmap__4424__auto__ = (function (){var G__69777 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__69691,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"networking","networking",586110628),new cljs.core.Keyword(null,"send-queues","send-queues",-212336330),new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),new cljs.core.Keyword(null,"read-local","read-local",811906273),new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805),new cljs.core.Keyword(null,"mounted?","mounted?",712114760),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035)], 0));
if(cljs.core.record_QMARK_(G__69691)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69777);
} else {
return G__69777;
}
})();
return (new fulcro.client.Application(new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"mutation-merge","mutation-merge",-2131743322).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"networking","networking",586110628).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"send-queues","send-queues",-212336330).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"response-channels","response-channels",-1871059128).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"read-local","read-local",811906273).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"query-interpreter","query-interpreter",-981698805).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"mounted?","mounted?",712114760).cljs$core$IFn$_invoke$arity$1(G__69691),new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035).cljs$core$IFn$_invoke$arity$1(G__69691),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * DEPRECATED: use make-fulcro-test-client instead
 */
fulcro.client.new_fulcro_test_client = (function fulcro$client$new_fulcro_test_client(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70145 = arguments.length;
var i__4731__auto___70146 = (0);
while(true){
if((i__4731__auto___70146 < len__4730__auto___70145)){
args__4736__auto__.push((arguments[i__4731__auto___70146]));

var G__70148 = (i__4731__auto___70146 + (1));
i__4731__auto___70146 = G__70148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.new_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__69783){
var map__69784 = p__69783;
var map__69784__$1 = (((((!((map__69784 == null))))?(((((map__69784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69784):map__69784);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69784__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69784__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69784__$1,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035));
return fulcro.client.map__GT_Application(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),reconciler_options,new cljs.core.Keyword(null,"networking","networking",586110628),fulcro.client.network.mock_network()], null));
});

fulcro.client.new_fulcro_test_client.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.new_fulcro_test_client.cljs$lang$applyTo = (function (seq69781){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69781));
});

/**
 * Create a test client that has no networking. Useful for UI testing with a real Fulcro app container.
 */
fulcro.client.make_fulcro_test_client = (function fulcro$client$make_fulcro_test_client(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70161 = arguments.length;
var i__4731__auto___70162 = (0);
while(true){
if((i__4731__auto___70162 < len__4730__auto___70161)){
args__4736__auto__.push((arguments[i__4731__auto___70162]));

var G__70163 = (i__4731__auto___70162 + (1));
i__4731__auto___70162 = G__70163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.make_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.make_fulcro_test_client.cljs$core$IFn$_invoke$arity$variadic = (function (p__69792){
var map__69793 = p__69792;
var map__69793__$1 = (((((!((map__69793 == null))))?(((((map__69793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69793):map__69793);
var initial_state = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69793__$1,new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),cljs.core.PersistentArrayMap.EMPTY);
var started_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69793__$1,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),null);
var reconciler_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69793__$1,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035));
return fulcro.client.map__GT_Application(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial-state","initial-state",-2021616806),initial_state,new cljs.core.Keyword(null,"started-callback","started-callback",-1798586951),started_callback,new cljs.core.Keyword(null,"reconciler-options","reconciler-options",1649115035),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reconciler_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"load-marker-default","load-marker-default",335781105),false], null)], 0)),new cljs.core.Keyword(null,"networking","networking",586110628),fulcro.client.network.mock_network()], null));
});

fulcro.client.make_fulcro_test_client.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.make_fulcro_test_client.cljs$lang$applyTo = (function (seq69789){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69789));
});

/**
 * Get the current window location from the browser
 */
fulcro.client.get_url = (function fulcro$client$get_url(){
return window.location.href;
});
/**
 * Get the current URI parameters from the browser url or one you supply
 */
fulcro.client.uri_params = (function fulcro$client$uri_params(var_args){
var G__69800 = arguments.length;
switch (G__69800) {
case 0:
return fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1(fulcro.client.get_url());
});

fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1 = (function (url){
var query_data = (new goog.Uri(url)).getQueryData();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (query_data){
return (function fulcro$client$iter__69806(s__69807){
return (new cljs.core.LazySeq(null,((function (query_data){
return (function (){
var s__69807__$1 = s__69807;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__69807__$1);
if(temp__5720__auto__){
var s__69807__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69807__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__69807__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__69809 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__69808 = (0);
while(true){
if((i__69808 < size__4522__auto__)){
var k = cljs.core._nth(c__4521__auto__,i__69808);
cljs.core.chunk_append(b__69809,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null));

var G__70176 = (i__69808 + (1));
i__69808 = G__70176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69809),fulcro$client$iter__69806(cljs.core.chunk_rest(s__69807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69809),null);
}
} else {
var k = cljs.core.first(s__69807__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,query_data.get(k)], null),fulcro$client$iter__69806(cljs.core.rest(s__69807__$2)));
}
} else {
return null;
}
break;
}
});})(query_data))
,null,null));
});})(query_data))
;
return iter__4523__auto__(query_data.getKeys());
})());
});

fulcro.client.uri_params.cljs$lang$maxFixedArity = 1;

/**
 * Get the value of the named parameter from the browser URL (or an explicit one)
 */
fulcro.client.get_url_param = (function fulcro$client$get_url_param(var_args){
var G__69822 = arguments.length;
switch (G__69822) {
case 1:
return fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$1 = (function (param_name){
return fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$2(fulcro.client.get_url(),param_name);
});

fulcro.client.get_url_param.cljs$core$IFn$_invoke$arity$2 = (function (url,param_name){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(fulcro.client.uri_params.cljs$core$IFn$_invoke$arity$1(url),param_name);
});

fulcro.client.get_url_param.cljs$lang$maxFixedArity = 2;

/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_component = fulcro.client.primitives.merge_component;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_alternate_unions = fulcro.client.primitives.merge_alternate_unions;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_alternate_union_elements_BANG_ = fulcro.client.primitives.merge_alternate_union_elements_BANG_;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.merge_alternate_union_elements = fulcro.client.primitives.merge_alternate_union_elements;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.integrate_ident = fulcro.client.primitives.integrate_ident;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.integrate_ident_BANG_ = fulcro.client.primitives.integrate_ident_BANG_;
/**
 * See primitives/merge-component!
 */
fulcro.client.merge_state_BANG_ = (function fulcro$client$merge_state_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70183 = arguments.length;
var i__4731__auto___70184 = (0);
while(true){
if((i__4731__auto___70184 < len__4730__auto___70183)){
args__4736__auto__.push((arguments[i__4731__auto___70184]));

var G__70185 = (i__4731__auto___70184 + (1));
i__4731__auto___70184 = G__70185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return fulcro.client.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

fulcro.client.merge_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (app_or_reconciler,component,object_data,named_params){
try{fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),392], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app_or_reconciler], 0));
}catch (e69835){if((e69835 instanceof Error)){
var e__55143__auto___70188 = e69835;
fulcro.logging._log.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"fulcro.client",new cljs.core.Keyword(null,"line","line",212345235),392], null),new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Log statement failed (arguments did not evaluate).",e__55143__auto___70188], 0));
} else {
throw e69835;

}
}
var reconciler = (((((!((app_or_reconciler == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === app_or_reconciler.fulcro$client$FulcroApplication$))))?true:false):false))?new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_or_reconciler):app_or_reconciler);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(fulcro.client.primitives.merge_component_BANG_,reconciler,component,object_data,named_params);
});

fulcro.client.merge_state_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
fulcro.client.merge_state_BANG_.cljs$lang$applyTo = (function (seq69830){
var G__69831 = cljs.core.first(seq69830);
var seq69830__$1 = cljs.core.next(seq69830);
var G__69832 = cljs.core.first(seq69830__$1);
var seq69830__$2 = cljs.core.next(seq69830__$1);
var G__69833 = cljs.core.first(seq69830__$2);
var seq69830__$3 = cljs.core.next(seq69830__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69831,G__69832,G__69833,seq69830__$3);
});

/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.iinitial_app_state_QMARK_ = fulcro.client.primitives.has_initial_app_state_QMARK_;
/**
 * DEPRECATED: Now defined in fulcro.client.primitives
 */
fulcro.client.iident_QMARK_ = fulcro.client.primitives.has_ident_QMARK_;

//# sourceMappingURL=fulcro.client.js.map
