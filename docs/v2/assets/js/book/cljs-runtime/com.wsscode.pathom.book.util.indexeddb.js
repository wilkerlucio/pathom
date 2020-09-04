goog.provide('com.wsscode.pathom.book.util.indexeddb');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__67003){
return cljs.core.map_QMARK_(G__67003);
}),(function (G__67003){
return cljs.core.contains_QMARK_(G__67003,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
})], null),(function (G__67003){
return ((cljs.core.map_QMARK_(G__67003)) && (cljs.core.contains_QMARK_(G__67003,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__67049){
return cljs.core.map_QMARK_(G__67049);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__67059){
return cljs.core.map_QMARK_(G__67059);
}),(function (G__67059){
return cljs.core.contains_QMARK_(G__67059,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
})], null),(function (G__67059){
return ((cljs.core.map_QMARK_(G__67059)) && (cljs.core.contains_QMARK_(G__67059,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__67094){
return cljs.core.coll_QMARK_(G__67094);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),null], null), null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__67102){
return cljs.core.map_QMARK_(G__67102);
})], null),(function (G__67102){
return cljs.core.map_QMARK_(G__67102);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__67192){
return cljs.core.map_QMARK_(G__67192);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13301__auto__,v__13302__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13302__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167))], null),null));
com.wsscode.pathom.book.util.indexeddb.indexeddb = (function com$wsscode$pathom$book$util$indexeddb$indexeddb(){
return indexedDB;
});
com.wsscode.pathom.book.util.indexeddb.event_result = (function com$wsscode$pathom$book$util$indexeddb$event_result(e){
return goog.object.getValueByKeys(e,["target","result"]);
});
com.wsscode.pathom.book.util.indexeddb.setup_db = (function com$wsscode$pathom$book$util$indexeddb$setup_db(p__67198){
var map__67200 = p__67198;
var map__67200__$1 = (((((!((map__67200 == null))))?(((((map__67200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67200):map__67200);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67200__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
var migrations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67200__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var open_req = com.wsscode.pathom.book.util.indexeddb.indexeddb().open(db_name,cljs.core.count(migrations));
var G__67205_68138 = open_req;
goog.object.set(G__67205_68138,"onerror",((function (G__67205_68138,c,open_req,map__67200,map__67200__$1,db_name,migrations){
return (function (p1__67196_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__67196_SHARP_);
});})(G__67205_68138,c,open_req,map__67200,map__67200__$1,db_name,migrations))
);

goog.object.set(G__67205_68138,"onsuccess",((function (G__67205_68138,c,open_req,map__67200,map__67200__$1,db_name,migrations){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,goog.object.get(open_req,"result"));
});})(G__67205_68138,c,open_req,map__67200,map__67200__$1,db_name,migrations))
);

goog.object.set(G__67205_68138,"onupgradeneeded",((function (G__67205_68138,c,open_req,map__67200,map__67200__$1,db_name,migrations){
return (function (e){
var db = com.wsscode.pathom.book.util.indexeddb.event_result(e);
var seq__67209 = cljs.core.seq(migrations);
var chunk__67210 = null;
var count__67211 = (0);
var i__67212 = (0);
while(true){
if((i__67212 < count__67211)){
var map__67683 = chunk__67210.cljs$core$IIndexed$_nth$arity$2(null,i__67212);
var map__67683__$1 = (((((!((map__67683 == null))))?(((((map__67683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67683):map__67683);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__67685_68139 = cljs.core.seq(stores);
var chunk__67687_68140 = null;
var count__67688_68141 = (0);
var i__67689_68142 = (0);
while(true){
if((i__67689_68142 < count__67688_68141)){
var vec__67801_68143 = chunk__67687_68140.cljs$core$IIndexed$_nth$arity$2(null,i__67689_68142);
var store_name_68144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67801_68143,(0),null);
var map__67804_68145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67801_68143,(1),null);
var map__67804_68146__$1 = (((((!((map__67804_68145 == null))))?(((((map__67804_68145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67804_68145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67804_68145):map__67804_68145);
var key_68147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804_68146__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_68148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67804_68146__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__67808_68149 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_68147);
var map__67808_68150__$1 = (((((!((map__67808_68149 == null))))?(((((map__67808_68149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67808_68149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67808_68149):map__67808_68149);
var path_68151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67808_68150__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_68152 = db.createObjectStore(store_name_68144,(cljs.core.truth_(path_68151)?({"keyPath": path_68151}):({"autoIncrement": true})
));
var seq__67811_68153 = cljs.core.seq(indexes_68148);
var chunk__67812_68154 = null;
var count__67813_68155 = (0);
var i__67814_68156 = (0);
while(true){
if((i__67814_68156 < count__67813_68155)){
var vec__67838_68157 = chunk__67812_68154.cljs$core$IIndexed$_nth$arity$2(null,i__67814_68156);
var index_name_68158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67838_68157,(0),null);
var options_68159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67838_68157,(1),null);
store_68152.createIndex(index_name_68158,index_name_68158,cljs.core.clj__GT_js(options_68159));


var G__68160 = seq__67811_68153;
var G__68161 = chunk__67812_68154;
var G__68162 = count__67813_68155;
var G__68163 = (i__67814_68156 + (1));
seq__67811_68153 = G__68160;
chunk__67812_68154 = G__68161;
count__67813_68155 = G__68162;
i__67814_68156 = G__68163;
continue;
} else {
var temp__5720__auto___68164 = cljs.core.seq(seq__67811_68153);
if(temp__5720__auto___68164){
var seq__67811_68165__$1 = temp__5720__auto___68164;
if(cljs.core.chunked_seq_QMARK_(seq__67811_68165__$1)){
var c__4550__auto___68166 = cljs.core.chunk_first(seq__67811_68165__$1);
var G__68167 = cljs.core.chunk_rest(seq__67811_68165__$1);
var G__68168 = c__4550__auto___68166;
var G__68169 = cljs.core.count(c__4550__auto___68166);
var G__68170 = (0);
seq__67811_68153 = G__68167;
chunk__67812_68154 = G__68168;
count__67813_68155 = G__68169;
i__67814_68156 = G__68170;
continue;
} else {
var vec__67845_68172 = cljs.core.first(seq__67811_68165__$1);
var index_name_68173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67845_68172,(0),null);
var options_68174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67845_68172,(1),null);
store_68152.createIndex(index_name_68173,index_name_68173,cljs.core.clj__GT_js(options_68174));


var G__68175 = cljs.core.next(seq__67811_68165__$1);
var G__68176 = null;
var G__68177 = (0);
var G__68178 = (0);
seq__67811_68153 = G__68175;
chunk__67812_68154 = G__68176;
count__67813_68155 = G__68177;
i__67814_68156 = G__68178;
continue;
}
} else {
}
}
break;
}


var G__68179 = seq__67685_68139;
var G__68180 = chunk__67687_68140;
var G__68181 = count__67688_68141;
var G__68182 = (i__67689_68142 + (1));
seq__67685_68139 = G__68179;
chunk__67687_68140 = G__68180;
count__67688_68141 = G__68181;
i__67689_68142 = G__68182;
continue;
} else {
var temp__5720__auto___68183 = cljs.core.seq(seq__67685_68139);
if(temp__5720__auto___68183){
var seq__67685_68184__$1 = temp__5720__auto___68183;
if(cljs.core.chunked_seq_QMARK_(seq__67685_68184__$1)){
var c__4550__auto___68185 = cljs.core.chunk_first(seq__67685_68184__$1);
var G__68186 = cljs.core.chunk_rest(seq__67685_68184__$1);
var G__68187 = c__4550__auto___68185;
var G__68188 = cljs.core.count(c__4550__auto___68185);
var G__68189 = (0);
seq__67685_68139 = G__68186;
chunk__67687_68140 = G__68187;
count__67688_68141 = G__68188;
i__67689_68142 = G__68189;
continue;
} else {
var vec__67857_68190 = cljs.core.first(seq__67685_68184__$1);
var store_name_68191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67857_68190,(0),null);
var map__67860_68192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67857_68190,(1),null);
var map__67860_68193__$1 = (((((!((map__67860_68192 == null))))?(((((map__67860_68192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67860_68192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67860_68192):map__67860_68192);
var key_68194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860_68193__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_68195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860_68193__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__67866_68197 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_68194);
var map__67866_68198__$1 = (((((!((map__67866_68197 == null))))?(((((map__67866_68197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67866_68197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67866_68197):map__67866_68197);
var path_68199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67866_68198__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_68200 = db.createObjectStore(store_name_68191,(cljs.core.truth_(path_68199)?({"keyPath": path_68199}):({"autoIncrement": true})
));
var seq__67870_68202 = cljs.core.seq(indexes_68195);
var chunk__67871_68203 = null;
var count__67872_68204 = (0);
var i__67873_68205 = (0);
while(true){
if((i__67873_68205 < count__67872_68204)){
var vec__67891_68206 = chunk__67871_68203.cljs$core$IIndexed$_nth$arity$2(null,i__67873_68205);
var index_name_68207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67891_68206,(0),null);
var options_68208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67891_68206,(1),null);
store_68200.createIndex(index_name_68207,index_name_68207,cljs.core.clj__GT_js(options_68208));


var G__68209 = seq__67870_68202;
var G__68210 = chunk__67871_68203;
var G__68211 = count__67872_68204;
var G__68212 = (i__67873_68205 + (1));
seq__67870_68202 = G__68209;
chunk__67871_68203 = G__68210;
count__67872_68204 = G__68211;
i__67873_68205 = G__68212;
continue;
} else {
var temp__5720__auto___68213__$1 = cljs.core.seq(seq__67870_68202);
if(temp__5720__auto___68213__$1){
var seq__67870_68215__$1 = temp__5720__auto___68213__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67870_68215__$1)){
var c__4550__auto___68216 = cljs.core.chunk_first(seq__67870_68215__$1);
var G__68217 = cljs.core.chunk_rest(seq__67870_68215__$1);
var G__68218 = c__4550__auto___68216;
var G__68219 = cljs.core.count(c__4550__auto___68216);
var G__68220 = (0);
seq__67870_68202 = G__68217;
chunk__67871_68203 = G__68218;
count__67872_68204 = G__68219;
i__67873_68205 = G__68220;
continue;
} else {
var vec__67897_68221 = cljs.core.first(seq__67870_68215__$1);
var index_name_68222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67897_68221,(0),null);
var options_68223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67897_68221,(1),null);
store_68200.createIndex(index_name_68222,index_name_68222,cljs.core.clj__GT_js(options_68223));


var G__68224 = cljs.core.next(seq__67870_68215__$1);
var G__68225 = null;
var G__68226 = (0);
var G__68227 = (0);
seq__67870_68202 = G__68224;
chunk__67871_68203 = G__68225;
count__67872_68204 = G__68226;
i__67873_68205 = G__68227;
continue;
}
} else {
}
}
break;
}


var G__68228 = cljs.core.next(seq__67685_68184__$1);
var G__68229 = null;
var G__68230 = (0);
var G__68231 = (0);
seq__67685_68139 = G__68228;
chunk__67687_68140 = G__68229;
count__67688_68141 = G__68230;
i__67689_68142 = G__68231;
continue;
}
} else {
}
}
break;
}


var G__68232 = seq__67209;
var G__68233 = chunk__67210;
var G__68234 = count__67211;
var G__68235 = (i__67212 + (1));
seq__67209 = G__68232;
chunk__67210 = G__68233;
count__67211 = G__68234;
i__67212 = G__68235;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__67209);
if(temp__5720__auto__){
var seq__67209__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67209__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__67209__$1);
var G__68236 = cljs.core.chunk_rest(seq__67209__$1);
var G__68237 = c__4550__auto__;
var G__68238 = cljs.core.count(c__4550__auto__);
var G__68239 = (0);
seq__67209 = G__68236;
chunk__67210 = G__68237;
count__67211 = G__68238;
i__67212 = G__68239;
continue;
} else {
var map__67909 = cljs.core.first(seq__67209__$1);
var map__67909__$1 = (((((!((map__67909 == null))))?(((((map__67909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67909):map__67909);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67909__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__67913_68242 = cljs.core.seq(stores);
var chunk__67915_68243 = null;
var count__67916_68244 = (0);
var i__67917_68245 = (0);
while(true){
if((i__67917_68245 < count__67916_68244)){
var vec__68013_68246 = chunk__67915_68243.cljs$core$IIndexed$_nth$arity$2(null,i__67917_68245);
var store_name_68247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013_68246,(0),null);
var map__68016_68248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013_68246,(1),null);
var map__68016_68249__$1 = (((((!((map__68016_68248 == null))))?(((((map__68016_68248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68016_68248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68016_68248):map__68016_68248);
var key_68250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68016_68249__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_68251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68016_68249__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__68018_68254 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_68250);
var map__68018_68255__$1 = (((((!((map__68018_68254 == null))))?(((((map__68018_68254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68018_68254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68018_68254):map__68018_68254);
var path_68256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68018_68255__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_68257 = db.createObjectStore(store_name_68247,(cljs.core.truth_(path_68256)?({"keyPath": path_68256}):({"autoIncrement": true})
));
var seq__68022_68259 = cljs.core.seq(indexes_68251);
var chunk__68023_68260 = null;
var count__68024_68261 = (0);
var i__68025_68262 = (0);
while(true){
if((i__68025_68262 < count__68024_68261)){
var vec__68033_68264 = chunk__68023_68260.cljs$core$IIndexed$_nth$arity$2(null,i__68025_68262);
var index_name_68265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68033_68264,(0),null);
var options_68266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68033_68264,(1),null);
store_68257.createIndex(index_name_68265,index_name_68265,cljs.core.clj__GT_js(options_68266));


var G__68269 = seq__68022_68259;
var G__68270 = chunk__68023_68260;
var G__68271 = count__68024_68261;
var G__68272 = (i__68025_68262 + (1));
seq__68022_68259 = G__68269;
chunk__68023_68260 = G__68270;
count__68024_68261 = G__68271;
i__68025_68262 = G__68272;
continue;
} else {
var temp__5720__auto___68273__$1 = cljs.core.seq(seq__68022_68259);
if(temp__5720__auto___68273__$1){
var seq__68022_68274__$1 = temp__5720__auto___68273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68022_68274__$1)){
var c__4550__auto___68275 = cljs.core.chunk_first(seq__68022_68274__$1);
var G__68276 = cljs.core.chunk_rest(seq__68022_68274__$1);
var G__68277 = c__4550__auto___68275;
var G__68278 = cljs.core.count(c__4550__auto___68275);
var G__68279 = (0);
seq__68022_68259 = G__68276;
chunk__68023_68260 = G__68277;
count__68024_68261 = G__68278;
i__68025_68262 = G__68279;
continue;
} else {
var vec__68039_68281 = cljs.core.first(seq__68022_68274__$1);
var index_name_68282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68039_68281,(0),null);
var options_68283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68039_68281,(1),null);
store_68257.createIndex(index_name_68282,index_name_68282,cljs.core.clj__GT_js(options_68283));


var G__68285 = cljs.core.next(seq__68022_68274__$1);
var G__68286 = null;
var G__68287 = (0);
var G__68288 = (0);
seq__68022_68259 = G__68285;
chunk__68023_68260 = G__68286;
count__68024_68261 = G__68287;
i__68025_68262 = G__68288;
continue;
}
} else {
}
}
break;
}


var G__68289 = seq__67913_68242;
var G__68290 = chunk__67915_68243;
var G__68291 = count__67916_68244;
var G__68292 = (i__67917_68245 + (1));
seq__67913_68242 = G__68289;
chunk__67915_68243 = G__68290;
count__67916_68244 = G__68291;
i__67917_68245 = G__68292;
continue;
} else {
var temp__5720__auto___68293__$1 = cljs.core.seq(seq__67913_68242);
if(temp__5720__auto___68293__$1){
var seq__67913_68294__$1 = temp__5720__auto___68293__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67913_68294__$1)){
var c__4550__auto___68295 = cljs.core.chunk_first(seq__67913_68294__$1);
var G__68296 = cljs.core.chunk_rest(seq__67913_68294__$1);
var G__68297 = c__4550__auto___68295;
var G__68298 = cljs.core.count(c__4550__auto___68295);
var G__68299 = (0);
seq__67913_68242 = G__68296;
chunk__67915_68243 = G__68297;
count__67916_68244 = G__68298;
i__67917_68245 = G__68299;
continue;
} else {
var vec__68043_68300 = cljs.core.first(seq__67913_68294__$1);
var store_name_68301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68043_68300,(0),null);
var map__68046_68302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68043_68300,(1),null);
var map__68046_68303__$1 = (((((!((map__68046_68302 == null))))?(((((map__68046_68302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68046_68302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68046_68302):map__68046_68302);
var key_68304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046_68303__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_68305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68046_68303__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__68049_68306 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_68304);
var map__68049_68307__$1 = (((((!((map__68049_68306 == null))))?(((((map__68049_68306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68049_68306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68049_68306):map__68049_68306);
var path_68308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049_68307__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_68309 = db.createObjectStore(store_name_68301,(cljs.core.truth_(path_68308)?({"keyPath": path_68308}):({"autoIncrement": true})
));
var seq__68053_68313 = cljs.core.seq(indexes_68305);
var chunk__68054_68314 = null;
var count__68055_68315 = (0);
var i__68056_68316 = (0);
while(true){
if((i__68056_68316 < count__68055_68315)){
var vec__68072_68317 = chunk__68054_68314.cljs$core$IIndexed$_nth$arity$2(null,i__68056_68316);
var index_name_68318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68072_68317,(0),null);
var options_68319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68072_68317,(1),null);
store_68309.createIndex(index_name_68318,index_name_68318,cljs.core.clj__GT_js(options_68319));


var G__68320 = seq__68053_68313;
var G__68321 = chunk__68054_68314;
var G__68322 = count__68055_68315;
var G__68323 = (i__68056_68316 + (1));
seq__68053_68313 = G__68320;
chunk__68054_68314 = G__68321;
count__68055_68315 = G__68322;
i__68056_68316 = G__68323;
continue;
} else {
var temp__5720__auto___68326__$2 = cljs.core.seq(seq__68053_68313);
if(temp__5720__auto___68326__$2){
var seq__68053_68327__$1 = temp__5720__auto___68326__$2;
if(cljs.core.chunked_seq_QMARK_(seq__68053_68327__$1)){
var c__4550__auto___68328 = cljs.core.chunk_first(seq__68053_68327__$1);
var G__68329 = cljs.core.chunk_rest(seq__68053_68327__$1);
var G__68330 = c__4550__auto___68328;
var G__68331 = cljs.core.count(c__4550__auto___68328);
var G__68332 = (0);
seq__68053_68313 = G__68329;
chunk__68054_68314 = G__68330;
count__68055_68315 = G__68331;
i__68056_68316 = G__68332;
continue;
} else {
var vec__68077_68334 = cljs.core.first(seq__68053_68327__$1);
var index_name_68335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68077_68334,(0),null);
var options_68336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68077_68334,(1),null);
store_68309.createIndex(index_name_68335,index_name_68335,cljs.core.clj__GT_js(options_68336));


var G__68339 = cljs.core.next(seq__68053_68327__$1);
var G__68340 = null;
var G__68341 = (0);
var G__68342 = (0);
seq__68053_68313 = G__68339;
chunk__68054_68314 = G__68340;
count__68055_68315 = G__68341;
i__68056_68316 = G__68342;
continue;
}
} else {
}
}
break;
}


var G__68343 = cljs.core.next(seq__67913_68294__$1);
var G__68344 = null;
var G__68345 = (0);
var G__68346 = (0);
seq__67913_68242 = G__68343;
chunk__67915_68243 = G__68344;
count__67916_68244 = G__68345;
i__67917_68245 = G__68346;
continue;
}
} else {
}
}
break;
}


var G__68347 = cljs.core.next(seq__67209__$1);
var G__68348 = null;
var G__68349 = (0);
var G__68350 = (0);
seq__67209 = G__68347;
chunk__67210 = G__68348;
count__67211 = G__68349;
i__67212 = G__68350;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__67205_68138,c,open_req,map__67200,map__67200__$1,db_name,migrations))
);


return c;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.book.util.indexeddb","setup-db","com.wsscode.pathom.book.util.indexeddb/setup-db",-961925766,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__68094){
return cljs.core.map_QMARK_(G__68094);
}),(function (G__68094){
return cljs.core.contains_QMARK_(G__68094,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
}),(function (G__68094){
return cljs.core.contains_QMARK_(G__68094,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
})], null),(function (G__68094){
return ((cljs.core.map_QMARK_(G__68094)) && (cljs.core.contains_QMARK_(G__68094,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))) && (cljs.core.contains_QMARK_(G__68094,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null,null));
com.wsscode.pathom.book.util.indexeddb.create_BANG_ = (function com$wsscode$pathom$book$util$indexeddb$create_BANG_(p__68119,entity){
var map__68120 = p__68119;
var map__68120__$1 = (((((!((map__68120 == null))))?(((((map__68120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68120):map__68120);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68120__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68120__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readwrite");
var store = tx.objectStore(store_name);
var req = store.add(cljs.core.clj__GT_js(entity));
goog.object.set(req,"onsuccess",((function (c,tx,store,req,map__68120,map__68120__$1,db,store_name){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,com.wsscode.pathom.book.util.indexeddb.event_result(e));
});})(c,tx,store,req,map__68120,map__68120__$1,db,store_name))
);

return c;
});
com.wsscode.pathom.book.util.indexeddb.convert_back = (function com$wsscode$pathom$book$util$indexeddb$convert_back(x){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
com.wsscode.pathom.book.util.indexeddb.scan_store = (function com$wsscode$pathom$book$util$indexeddb$scan_store(p__68123){
var map__68124 = p__68123;
var map__68124__$1 = (((((!((map__68124 == null))))?(((((map__68124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68124):map__68124);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68124__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68124__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((50));
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__68127_68363 = store.openCursor();
goog.object.set(G__68127_68363,"onsuccess",((function (G__68127_68363,c,tx,store,map__68124,map__68124__$1,db,store_name){
return (function (e){
var temp__5718__auto__ = com.wsscode.pathom.book.util.indexeddb.event_result(e);
if(cljs.core.truth_(temp__5718__auto__)){
var cursor = temp__5718__auto__;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.book.util.indexeddb.convert_back(goog.object.get(cursor,"value")),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),goog.object.get(cursor,"key")));

return cursor.continue();
} else {
return cljs.core.async.close_BANG_(c);
}
});})(G__68127_68363,c,tx,store,map__68124,map__68124__$1,db,store_name))
);


return c;
});
com.wsscode.pathom.book.util.indexeddb.read_object = (function com$wsscode$pathom$book$util$indexeddb$read_object(p__68129,id){
var map__68130 = p__68129;
var map__68130__$1 = (((((!((map__68130 == null))))?(((((map__68130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68130):map__68130);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68130__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68130__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
goog.object.set(store.get(id),"onsuccess",((function (c,tx,store,map__68130,map__68130__$1,db,store_name){
return (function (p1__68128_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__4131__auto__ = (function (){var G__68134 = com.wsscode.pathom.book.util.indexeddb.convert_back(com.wsscode.pathom.book.util.indexeddb.event_result(p1__68128_SHARP_));
if((G__68134 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68134,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),id);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","not-found","com.wsscode.pathom.book.util.indexeddb/not-found",-1009867320);
}
})());
});})(c,tx,store,map__68130,map__68130__$1,db,store_name))
);

return c;
});

//# sourceMappingURL=com.wsscode.pathom.book.util.indexeddb.js.map
