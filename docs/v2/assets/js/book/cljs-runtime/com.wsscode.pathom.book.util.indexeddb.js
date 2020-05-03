goog.provide('com.wsscode.pathom.book.util.indexeddb');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70645){
return cljs.core.map_QMARK_(G__70645);
}),(function (G__70645){
return cljs.core.contains_QMARK_(G__70645,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
})], null),(function (G__70645){
return ((cljs.core.map_QMARK_(G__70645)) && (cljs.core.contains_QMARK_(G__70645,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70657){
return cljs.core.map_QMARK_(G__70657);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70661){
return cljs.core.map_QMARK_(G__70661);
}),(function (G__70661){
return cljs.core.contains_QMARK_(G__70661,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
})], null),(function (G__70661){
return ((cljs.core.map_QMARK_(G__70661)) && (cljs.core.contains_QMARK_(G__70661,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70676){
return cljs.core.coll_QMARK_(G__70676);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),null], null), null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__70681){
return cljs.core.map_QMARK_(G__70681);
})], null),(function (G__70681){
return cljs.core.map_QMARK_(G__70681);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__70695){
return cljs.core.map_QMARK_(G__70695);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13080__auto__,v__13081__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13081__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167))], null),null));
com.wsscode.pathom.book.util.indexeddb.indexeddb = (function com$wsscode$pathom$book$util$indexeddb$indexeddb(){
return indexedDB;
});
com.wsscode.pathom.book.util.indexeddb.event_result = (function com$wsscode$pathom$book$util$indexeddb$event_result(e){
return goog.object.getValueByKeys(e,["target","result"]);
});
com.wsscode.pathom.book.util.indexeddb.setup_db = (function com$wsscode$pathom$book$util$indexeddb$setup_db(p__70697){
var map__70698 = p__70697;
var map__70698__$1 = (((((!((map__70698 == null))))?(((((map__70698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70698):map__70698);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70698__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
var migrations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70698__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var open_req = com.wsscode.pathom.book.util.indexeddb.indexeddb().open(db_name,cljs.core.count(migrations));
var G__70700_71914 = open_req;
goog.object.set(G__70700_71914,"onerror",((function (G__70700_71914,c,open_req,map__70698,map__70698__$1,db_name,migrations){
return (function (p1__70696_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__70696_SHARP_);
});})(G__70700_71914,c,open_req,map__70698,map__70698__$1,db_name,migrations))
);

goog.object.set(G__70700_71914,"onsuccess",((function (G__70700_71914,c,open_req,map__70698,map__70698__$1,db_name,migrations){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,goog.object.get(open_req,"result"));
});})(G__70700_71914,c,open_req,map__70698,map__70698__$1,db_name,migrations))
);

goog.object.set(G__70700_71914,"onupgradeneeded",((function (G__70700_71914,c,open_req,map__70698,map__70698__$1,db_name,migrations){
return (function (e){
var db = com.wsscode.pathom.book.util.indexeddb.event_result(e);
var seq__70701 = cljs.core.seq(migrations);
var chunk__70702 = null;
var count__70703 = (0);
var i__70704 = (0);
while(true){
if((i__70704 < count__70703)){
var map__71400 = chunk__70702.cljs$core$IIndexed$_nth$arity$2(null,i__70704);
var map__71400__$1 = (((((!((map__71400 == null))))?(((((map__71400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71400):map__71400);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71400__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__71402_71957 = cljs.core.seq(stores);
var chunk__71404_71958 = null;
var count__71405_71959 = (0);
var i__71406_71960 = (0);
while(true){
if((i__71406_71960 < count__71405_71959)){
var vec__71477_71969 = chunk__71404_71958.cljs$core$IIndexed$_nth$arity$2(null,i__71406_71960);
var store_name_71970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71477_71969,(0),null);
var map__71480_71971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71477_71969,(1),null);
var map__71480_71972__$1 = (((((!((map__71480_71971 == null))))?(((((map__71480_71971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71480_71971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71480_71971):map__71480_71971);
var key_71973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71480_71972__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_71974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71480_71972__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__71486_71987 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_71973);
var map__71486_71988__$1 = (((((!((map__71486_71987 == null))))?(((((map__71486_71987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71486_71987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71486_71987):map__71486_71987);
var path_71989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71486_71988__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_71990 = db.createObjectStore(store_name_71970,(cljs.core.truth_(path_71989)?({"keyPath": path_71989}):({"autoIncrement": true})
));
var seq__71489_72009 = cljs.core.seq(indexes_71974);
var chunk__71490_72010 = null;
var count__71491_72011 = (0);
var i__71492_72012 = (0);
while(true){
if((i__71492_72012 < count__71491_72011)){
var vec__71503_72013 = chunk__71490_72010.cljs$core$IIndexed$_nth$arity$2(null,i__71492_72012);
var index_name_72014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71503_72013,(0),null);
var options_72015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71503_72013,(1),null);
store_71990.createIndex(index_name_72014,index_name_72014,cljs.core.clj__GT_js(options_72015));


var G__72023 = seq__71489_72009;
var G__72024 = chunk__71490_72010;
var G__72025 = count__71491_72011;
var G__72026 = (i__71492_72012 + (1));
seq__71489_72009 = G__72023;
chunk__71490_72010 = G__72024;
count__71491_72011 = G__72025;
i__71492_72012 = G__72026;
continue;
} else {
var temp__5720__auto___72031 = cljs.core.seq(seq__71489_72009);
if(temp__5720__auto___72031){
var seq__71489_72032__$1 = temp__5720__auto___72031;
if(cljs.core.chunked_seq_QMARK_(seq__71489_72032__$1)){
var c__4550__auto___72038 = cljs.core.chunk_first(seq__71489_72032__$1);
var G__72042 = cljs.core.chunk_rest(seq__71489_72032__$1);
var G__72043 = c__4550__auto___72038;
var G__72044 = cljs.core.count(c__4550__auto___72038);
var G__72045 = (0);
seq__71489_72009 = G__72042;
chunk__71490_72010 = G__72043;
count__71491_72011 = G__72044;
i__71492_72012 = G__72045;
continue;
} else {
var vec__71506_72046 = cljs.core.first(seq__71489_72032__$1);
var index_name_72047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71506_72046,(0),null);
var options_72048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71506_72046,(1),null);
store_71990.createIndex(index_name_72047,index_name_72047,cljs.core.clj__GT_js(options_72048));


var G__72056 = cljs.core.next(seq__71489_72032__$1);
var G__72058 = null;
var G__72059 = (0);
var G__72060 = (0);
seq__71489_72009 = G__72056;
chunk__71490_72010 = G__72058;
count__71491_72011 = G__72059;
i__71492_72012 = G__72060;
continue;
}
} else {
}
}
break;
}


var G__72064 = seq__71402_71957;
var G__72065 = chunk__71404_71958;
var G__72066 = count__71405_71959;
var G__72067 = (i__71406_71960 + (1));
seq__71402_71957 = G__72064;
chunk__71404_71958 = G__72065;
count__71405_71959 = G__72066;
i__71406_71960 = G__72067;
continue;
} else {
var temp__5720__auto___72073 = cljs.core.seq(seq__71402_71957);
if(temp__5720__auto___72073){
var seq__71402_72074__$1 = temp__5720__auto___72073;
if(cljs.core.chunked_seq_QMARK_(seq__71402_72074__$1)){
var c__4550__auto___72075 = cljs.core.chunk_first(seq__71402_72074__$1);
var G__72077 = cljs.core.chunk_rest(seq__71402_72074__$1);
var G__72078 = c__4550__auto___72075;
var G__72079 = cljs.core.count(c__4550__auto___72075);
var G__72080 = (0);
seq__71402_71957 = G__72077;
chunk__71404_71958 = G__72078;
count__71405_71959 = G__72079;
i__71406_71960 = G__72080;
continue;
} else {
var vec__71512_72091 = cljs.core.first(seq__71402_72074__$1);
var store_name_72092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71512_72091,(0),null);
var map__71515_72093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71512_72091,(1),null);
var map__71515_72094__$1 = (((((!((map__71515_72093 == null))))?(((((map__71515_72093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71515_72093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71515_72093):map__71515_72093);
var key_72096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71515_72094__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_72097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71515_72094__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__71518_72120 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_72096);
var map__71518_72121__$1 = (((((!((map__71518_72120 == null))))?(((((map__71518_72120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71518_72120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71518_72120):map__71518_72120);
var path_72122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71518_72121__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_72123 = db.createObjectStore(store_name_72092,(cljs.core.truth_(path_72122)?({"keyPath": path_72122}):({"autoIncrement": true})
));
var seq__71522_72134 = cljs.core.seq(indexes_72097);
var chunk__71523_72135 = null;
var count__71524_72136 = (0);
var i__71525_72137 = (0);
while(true){
if((i__71525_72137 < count__71524_72136)){
var vec__71538_72146 = chunk__71523_72135.cljs$core$IIndexed$_nth$arity$2(null,i__71525_72137);
var index_name_72147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71538_72146,(0),null);
var options_72148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71538_72146,(1),null);
store_72123.createIndex(index_name_72147,index_name_72147,cljs.core.clj__GT_js(options_72148));


var G__72154 = seq__71522_72134;
var G__72155 = chunk__71523_72135;
var G__72156 = count__71524_72136;
var G__72157 = (i__71525_72137 + (1));
seq__71522_72134 = G__72154;
chunk__71523_72135 = G__72155;
count__71524_72136 = G__72156;
i__71525_72137 = G__72157;
continue;
} else {
var temp__5720__auto___72161__$1 = cljs.core.seq(seq__71522_72134);
if(temp__5720__auto___72161__$1){
var seq__71522_72166__$1 = temp__5720__auto___72161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71522_72166__$1)){
var c__4550__auto___72175 = cljs.core.chunk_first(seq__71522_72166__$1);
var G__72180 = cljs.core.chunk_rest(seq__71522_72166__$1);
var G__72181 = c__4550__auto___72175;
var G__72182 = cljs.core.count(c__4550__auto___72175);
var G__72183 = (0);
seq__71522_72134 = G__72180;
chunk__71523_72135 = G__72181;
count__71524_72136 = G__72182;
i__71525_72137 = G__72183;
continue;
} else {
var vec__71545_72185 = cljs.core.first(seq__71522_72166__$1);
var index_name_72186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71545_72185,(0),null);
var options_72187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71545_72185,(1),null);
store_72123.createIndex(index_name_72186,index_name_72186,cljs.core.clj__GT_js(options_72187));


var G__72190 = cljs.core.next(seq__71522_72166__$1);
var G__72191 = null;
var G__72192 = (0);
var G__72193 = (0);
seq__71522_72134 = G__72190;
chunk__71523_72135 = G__72191;
count__71524_72136 = G__72192;
i__71525_72137 = G__72193;
continue;
}
} else {
}
}
break;
}


var G__72201 = cljs.core.next(seq__71402_72074__$1);
var G__72202 = null;
var G__72203 = (0);
var G__72204 = (0);
seq__71402_71957 = G__72201;
chunk__71404_71958 = G__72202;
count__71405_71959 = G__72203;
i__71406_71960 = G__72204;
continue;
}
} else {
}
}
break;
}


var G__72210 = seq__70701;
var G__72211 = chunk__70702;
var G__72212 = count__70703;
var G__72213 = (i__70704 + (1));
seq__70701 = G__72210;
chunk__70702 = G__72211;
count__70703 = G__72212;
i__70704 = G__72213;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__70701);
if(temp__5720__auto__){
var seq__70701__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70701__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__70701__$1);
var G__72221 = cljs.core.chunk_rest(seq__70701__$1);
var G__72222 = c__4550__auto__;
var G__72223 = cljs.core.count(c__4550__auto__);
var G__72224 = (0);
seq__70701 = G__72221;
chunk__70702 = G__72222;
count__70703 = G__72223;
i__70704 = G__72224;
continue;
} else {
var map__71548 = cljs.core.first(seq__70701__$1);
var map__71548__$1 = (((((!((map__71548 == null))))?(((((map__71548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71548):map__71548);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71548__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__71550_72242 = cljs.core.seq(stores);
var chunk__71552_72243 = null;
var count__71553_72244 = (0);
var i__71554_72245 = (0);
while(true){
if((i__71554_72245 < count__71553_72244)){
var vec__71634_72263 = chunk__71552_72243.cljs$core$IIndexed$_nth$arity$2(null,i__71554_72245);
var store_name_72264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71634_72263,(0),null);
var map__71637_72265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71634_72263,(1),null);
var map__71637_72266__$1 = (((((!((map__71637_72265 == null))))?(((((map__71637_72265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71637_72265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71637_72265):map__71637_72265);
var key_72267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71637_72266__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_72268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71637_72266__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__71640_72269 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_72267);
var map__71640_72270__$1 = (((((!((map__71640_72269 == null))))?(((((map__71640_72269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71640_72269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71640_72269):map__71640_72269);
var path_72271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71640_72270__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_72272 = db.createObjectStore(store_name_72264,(cljs.core.truth_(path_72271)?({"keyPath": path_72271}):({"autoIncrement": true})
));
var seq__71643_72273 = cljs.core.seq(indexes_72268);
var chunk__71644_72274 = null;
var count__71645_72275 = (0);
var i__71646_72276 = (0);
while(true){
if((i__71646_72276 < count__71645_72275)){
var vec__71659_72278 = chunk__71644_72274.cljs$core$IIndexed$_nth$arity$2(null,i__71646_72276);
var index_name_72279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71659_72278,(0),null);
var options_72280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71659_72278,(1),null);
store_72272.createIndex(index_name_72279,index_name_72279,cljs.core.clj__GT_js(options_72280));


var G__72281 = seq__71643_72273;
var G__72282 = chunk__71644_72274;
var G__72283 = count__71645_72275;
var G__72284 = (i__71646_72276 + (1));
seq__71643_72273 = G__72281;
chunk__71644_72274 = G__72282;
count__71645_72275 = G__72283;
i__71646_72276 = G__72284;
continue;
} else {
var temp__5720__auto___72288__$1 = cljs.core.seq(seq__71643_72273);
if(temp__5720__auto___72288__$1){
var seq__71643_72289__$1 = temp__5720__auto___72288__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71643_72289__$1)){
var c__4550__auto___72290 = cljs.core.chunk_first(seq__71643_72289__$1);
var G__72291 = cljs.core.chunk_rest(seq__71643_72289__$1);
var G__72292 = c__4550__auto___72290;
var G__72293 = cljs.core.count(c__4550__auto___72290);
var G__72294 = (0);
seq__71643_72273 = G__72291;
chunk__71644_72274 = G__72292;
count__71645_72275 = G__72293;
i__71646_72276 = G__72294;
continue;
} else {
var vec__71664_72295 = cljs.core.first(seq__71643_72289__$1);
var index_name_72296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71664_72295,(0),null);
var options_72297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71664_72295,(1),null);
store_72272.createIndex(index_name_72296,index_name_72296,cljs.core.clj__GT_js(options_72297));


var G__72298 = cljs.core.next(seq__71643_72289__$1);
var G__72299 = null;
var G__72300 = (0);
var G__72301 = (0);
seq__71643_72273 = G__72298;
chunk__71644_72274 = G__72299;
count__71645_72275 = G__72300;
i__71646_72276 = G__72301;
continue;
}
} else {
}
}
break;
}


var G__72302 = seq__71550_72242;
var G__72303 = chunk__71552_72243;
var G__72304 = count__71553_72244;
var G__72305 = (i__71554_72245 + (1));
seq__71550_72242 = G__72302;
chunk__71552_72243 = G__72303;
count__71553_72244 = G__72304;
i__71554_72245 = G__72305;
continue;
} else {
var temp__5720__auto___72306__$1 = cljs.core.seq(seq__71550_72242);
if(temp__5720__auto___72306__$1){
var seq__71550_72307__$1 = temp__5720__auto___72306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71550_72307__$1)){
var c__4550__auto___72309 = cljs.core.chunk_first(seq__71550_72307__$1);
var G__72310 = cljs.core.chunk_rest(seq__71550_72307__$1);
var G__72311 = c__4550__auto___72309;
var G__72312 = cljs.core.count(c__4550__auto___72309);
var G__72313 = (0);
seq__71550_72242 = G__72310;
chunk__71552_72243 = G__72311;
count__71553_72244 = G__72312;
i__71554_72245 = G__72313;
continue;
} else {
var vec__71670_72315 = cljs.core.first(seq__71550_72307__$1);
var store_name_72316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71670_72315,(0),null);
var map__71673_72317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71670_72315,(1),null);
var map__71673_72318__$1 = (((((!((map__71673_72317 == null))))?(((((map__71673_72317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71673_72317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71673_72317):map__71673_72317);
var key_72319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71673_72318__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_72320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71673_72318__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__71676_72321 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_72319);
var map__71676_72322__$1 = (((((!((map__71676_72321 == null))))?(((((map__71676_72321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71676_72321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71676_72321):map__71676_72321);
var path_72323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71676_72322__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_72324 = db.createObjectStore(store_name_72316,(cljs.core.truth_(path_72323)?({"keyPath": path_72323}):({"autoIncrement": true})
));
var seq__71681_72325 = cljs.core.seq(indexes_72320);
var chunk__71682_72326 = null;
var count__71683_72327 = (0);
var i__71684_72328 = (0);
while(true){
if((i__71684_72328 < count__71683_72327)){
var vec__71695_72330 = chunk__71682_72326.cljs$core$IIndexed$_nth$arity$2(null,i__71684_72328);
var index_name_72331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71695_72330,(0),null);
var options_72332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71695_72330,(1),null);
store_72324.createIndex(index_name_72331,index_name_72331,cljs.core.clj__GT_js(options_72332));


var G__72335 = seq__71681_72325;
var G__72336 = chunk__71682_72326;
var G__72337 = count__71683_72327;
var G__72338 = (i__71684_72328 + (1));
seq__71681_72325 = G__72335;
chunk__71682_72326 = G__72336;
count__71683_72327 = G__72337;
i__71684_72328 = G__72338;
continue;
} else {
var temp__5720__auto___72339__$2 = cljs.core.seq(seq__71681_72325);
if(temp__5720__auto___72339__$2){
var seq__71681_72340__$1 = temp__5720__auto___72339__$2;
if(cljs.core.chunked_seq_QMARK_(seq__71681_72340__$1)){
var c__4550__auto___72342 = cljs.core.chunk_first(seq__71681_72340__$1);
var G__72343 = cljs.core.chunk_rest(seq__71681_72340__$1);
var G__72344 = c__4550__auto___72342;
var G__72345 = cljs.core.count(c__4550__auto___72342);
var G__72346 = (0);
seq__71681_72325 = G__72343;
chunk__71682_72326 = G__72344;
count__71683_72327 = G__72345;
i__71684_72328 = G__72346;
continue;
} else {
var vec__71701_72348 = cljs.core.first(seq__71681_72340__$1);
var index_name_72349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71701_72348,(0),null);
var options_72350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71701_72348,(1),null);
store_72324.createIndex(index_name_72349,index_name_72349,cljs.core.clj__GT_js(options_72350));


var G__72353 = cljs.core.next(seq__71681_72340__$1);
var G__72354 = null;
var G__72355 = (0);
var G__72356 = (0);
seq__71681_72325 = G__72353;
chunk__71682_72326 = G__72354;
count__71683_72327 = G__72355;
i__71684_72328 = G__72356;
continue;
}
} else {
}
}
break;
}


var G__72357 = cljs.core.next(seq__71550_72307__$1);
var G__72358 = null;
var G__72359 = (0);
var G__72360 = (0);
seq__71550_72242 = G__72357;
chunk__71552_72243 = G__72358;
count__71553_72244 = G__72359;
i__71554_72245 = G__72360;
continue;
}
} else {
}
}
break;
}


var G__72361 = cljs.core.next(seq__70701__$1);
var G__72362 = null;
var G__72363 = (0);
var G__72364 = (0);
seq__70701 = G__72361;
chunk__70702 = G__72362;
count__70703 = G__72363;
i__70704 = G__72364;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__70700_71914,c,open_req,map__70698,map__70698__$1,db_name,migrations))
);


return c;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.book.util.indexeddb","setup-db","com.wsscode.pathom.book.util.indexeddb/setup-db",-961925766,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__71714){
return cljs.core.map_QMARK_(G__71714);
}),(function (G__71714){
return cljs.core.contains_QMARK_(G__71714,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
}),(function (G__71714){
return cljs.core.contains_QMARK_(G__71714,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
})], null),(function (G__71714){
return ((cljs.core.map_QMARK_(G__71714)) && (cljs.core.contains_QMARK_(G__71714,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))) && (cljs.core.contains_QMARK_(G__71714,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null,null));
com.wsscode.pathom.book.util.indexeddb.create_BANG_ = (function com$wsscode$pathom$book$util$indexeddb$create_BANG_(p__71745,entity){
var map__71746 = p__71745;
var map__71746__$1 = (((((!((map__71746 == null))))?(((((map__71746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71746):map__71746);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71746__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71746__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readwrite");
var store = tx.objectStore(store_name);
var req = store.add(cljs.core.clj__GT_js(entity));
goog.object.set(req,"onsuccess",((function (c,tx,store,req,map__71746,map__71746__$1,db,store_name){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,com.wsscode.pathom.book.util.indexeddb.event_result(e));
});})(c,tx,store,req,map__71746,map__71746__$1,db,store_name))
);

return c;
});
com.wsscode.pathom.book.util.indexeddb.convert_back = (function com$wsscode$pathom$book$util$indexeddb$convert_back(x){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
com.wsscode.pathom.book.util.indexeddb.scan_store = (function com$wsscode$pathom$book$util$indexeddb$scan_store(p__71754){
var map__71756 = p__71754;
var map__71756__$1 = (((((!((map__71756 == null))))?(((((map__71756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71756):map__71756);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71756__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71756__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((50));
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__71758_72381 = store.openCursor();
goog.object.set(G__71758_72381,"onsuccess",((function (G__71758_72381,c,tx,store,map__71756,map__71756__$1,db,store_name){
return (function (e){
var temp__5718__auto__ = com.wsscode.pathom.book.util.indexeddb.event_result(e);
if(cljs.core.truth_(temp__5718__auto__)){
var cursor = temp__5718__auto__;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.book.util.indexeddb.convert_back(goog.object.get(cursor,"value")),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),goog.object.get(cursor,"key")));

return cursor.continue();
} else {
return cljs.core.async.close_BANG_(c);
}
});})(G__71758_72381,c,tx,store,map__71756,map__71756__$1,db,store_name))
);


return c;
});
com.wsscode.pathom.book.util.indexeddb.read_object = (function com$wsscode$pathom$book$util$indexeddb$read_object(p__71763,id){
var map__71764 = p__71763;
var map__71764__$1 = (((((!((map__71764 == null))))?(((((map__71764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71764):map__71764);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71764__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
goog.object.set(store.get(id),"onsuccess",((function (c,tx,store,map__71764,map__71764__$1,db,store_name){
return (function (p1__71760_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__4131__auto__ = (function (){var G__71768 = com.wsscode.pathom.book.util.indexeddb.convert_back(com.wsscode.pathom.book.util.indexeddb.event_result(p1__71760_SHARP_));
if((G__71768 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71768,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),id);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","not-found","com.wsscode.pathom.book.util.indexeddb/not-found",-1009867320);
}
})());
});})(c,tx,store,map__71764,map__71764__$1,db,store_name))
);

return c;
});

//# sourceMappingURL=com.wsscode.pathom.book.util.indexeddb.js.map
