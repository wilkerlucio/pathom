goog.provide('com.wsscode.pathom.book.util.indexeddb');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49691){
return cljs.core.map_QMARK_(G__49691);
}),(function (G__49691){
return cljs.core.contains_QMARK_(G__49691,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
})], null),(function (G__49691){
return ((cljs.core.map_QMARK_(G__49691)) && (cljs.core.contains_QMARK_(G__49691,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49709){
return cljs.core.map_QMARK_(G__49709);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49715){
return cljs.core.map_QMARK_(G__49715);
}),(function (G__49715){
return cljs.core.contains_QMARK_(G__49715,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
})], null),(function (G__49715){
return ((cljs.core.map_QMARK_(G__49715)) && (cljs.core.contains_QMARK_(G__49715,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49734){
return cljs.core.coll_QMARK_(G__49734);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),null], null), null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49747){
return cljs.core.map_QMARK_(G__49747);
})], null),(function (G__49747){
return cljs.core.map_QMARK_(G__49747);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49762){
return cljs.core.map_QMARK_(G__49762);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167))], null),null));
com.wsscode.pathom.book.util.indexeddb.indexeddb = (function com$wsscode$pathom$book$util$indexeddb$indexeddb(){
return indexedDB;
});
com.wsscode.pathom.book.util.indexeddb.event_result = (function com$wsscode$pathom$book$util$indexeddb$event_result(e){
var G__49768 = e;
var G__49769 = ["target","result"];
return goog.object.getValueByKeys(G__49768,G__49769);
});
com.wsscode.pathom.book.util.indexeddb.setup_db = (function com$wsscode$pathom$book$util$indexeddb$setup_db(p__49779){
var map__49780 = p__49779;
var map__49780__$1 = (((((!((map__49780 == null))))?(((((map__49780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49780):map__49780);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
var migrations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49780__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var open_req = com.wsscode.pathom.book.util.indexeddb.indexeddb().open(db_name,cljs.core.count(migrations));
var G__49786_51075 = open_req;
var G__49792_51076 = G__49786_51075;
var G__49793_51077 = "onerror";
var G__49794_51078 = ((function (G__49792_51076,G__49793_51077,G__49786_51075,c,open_req,map__49780,map__49780__$1,db_name,migrations){
return (function (p1__49775_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__49775_SHARP_);
});})(G__49792_51076,G__49793_51077,G__49786_51075,c,open_req,map__49780,map__49780__$1,db_name,migrations))
;
goog.object.set(G__49792_51076,G__49793_51077,G__49794_51078);

var G__49795_51079 = G__49786_51075;
var G__49796_51080 = "onsuccess";
var G__49797_51081 = ((function (G__49795_51079,G__49796_51080,G__49786_51075,c,open_req,map__49780,map__49780__$1,db_name,migrations){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,goog.object.get(open_req,"result"));
});})(G__49795_51079,G__49796_51080,G__49786_51075,c,open_req,map__49780,map__49780__$1,db_name,migrations))
;
goog.object.set(G__49795_51079,G__49796_51080,G__49797_51081);

var G__49798_51085 = G__49786_51075;
var G__49799_51086 = "onupgradeneeded";
var G__49800_51087 = ((function (G__49798_51085,G__49799_51086,G__49786_51075,c,open_req,map__49780,map__49780__$1,db_name,migrations){
return (function (e){
var db = com.wsscode.pathom.book.util.indexeddb.event_result(e);
var seq__49803 = cljs.core.seq(migrations);
var chunk__49804 = null;
var count__49805 = (0);
var i__49806 = (0);
while(true){
if((i__49806 < count__49805)){
var map__50372 = chunk__49804.cljs$core$IIndexed$_nth$arity$2(null,i__49806);
var map__50372__$1 = (((((!((map__50372 == null))))?(((((map__50372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50372):map__50372);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50372__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__50374_51098 = cljs.core.seq(stores);
var chunk__50376_51099 = null;
var count__50377_51100 = (0);
var i__50378_51101 = (0);
while(true){
if((i__50378_51101 < count__50377_51100)){
var vec__50486_51102 = chunk__50376_51099.cljs$core$IIndexed$_nth$arity$2(null,i__50378_51101);
var store_name_51103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486_51102,(0),null);
var map__50489_51104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50486_51102,(1),null);
var map__50489_51105__$1 = (((((!((map__50489_51104 == null))))?(((((map__50489_51104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50489_51104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50489_51104):map__50489_51104);
var key_51106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489_51105__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50489_51105__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50493_51108 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51106);
var map__50493_51109__$1 = (((((!((map__50493_51108 == null))))?(((((map__50493_51108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50493_51108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50493_51108):map__50493_51108);
var path_51110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50493_51109__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51111 = db.createObjectStore(store_name_51103,(cljs.core.truth_(path_51110)?({"keyPath": path_51110}):({"autoIncrement": true})
));
var seq__50499_51115 = cljs.core.seq(indexes_51107);
var chunk__50500_51116 = null;
var count__50501_51117 = (0);
var i__50502_51118 = (0);
while(true){
if((i__50502_51118 < count__50501_51117)){
var vec__50520_51119 = chunk__50500_51116.cljs$core$IIndexed$_nth$arity$2(null,i__50502_51118);
var index_name_51120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520_51119,(0),null);
var options_51121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50520_51119,(1),null);
store_51111.createIndex(index_name_51120,index_name_51120,cljs.core.clj__GT_js(options_51121));


var G__51123 = seq__50499_51115;
var G__51124 = chunk__50500_51116;
var G__51125 = count__50501_51117;
var G__51126 = (i__50502_51118 + (1));
seq__50499_51115 = G__51123;
chunk__50500_51116 = G__51124;
count__50501_51117 = G__51125;
i__50502_51118 = G__51126;
continue;
} else {
var temp__5720__auto___51128 = cljs.core.seq(seq__50499_51115);
if(temp__5720__auto___51128){
var seq__50499_51129__$1 = temp__5720__auto___51128;
if(cljs.core.chunked_seq_QMARK_(seq__50499_51129__$1)){
var c__4550__auto___51130 = cljs.core.chunk_first(seq__50499_51129__$1);
var G__51131 = cljs.core.chunk_rest(seq__50499_51129__$1);
var G__51132 = c__4550__auto___51130;
var G__51133 = cljs.core.count(c__4550__auto___51130);
var G__51134 = (0);
seq__50499_51115 = G__51131;
chunk__50500_51116 = G__51132;
count__50501_51117 = G__51133;
i__50502_51118 = G__51134;
continue;
} else {
var vec__50553_51136 = cljs.core.first(seq__50499_51129__$1);
var index_name_51137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50553_51136,(0),null);
var options_51138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50553_51136,(1),null);
store_51111.createIndex(index_name_51137,index_name_51137,cljs.core.clj__GT_js(options_51138));


var G__51141 = cljs.core.next(seq__50499_51129__$1);
var G__51142 = null;
var G__51143 = (0);
var G__51144 = (0);
seq__50499_51115 = G__51141;
chunk__50500_51116 = G__51142;
count__50501_51117 = G__51143;
i__50502_51118 = G__51144;
continue;
}
} else {
}
}
break;
}


var G__51145 = seq__50374_51098;
var G__51146 = chunk__50376_51099;
var G__51147 = count__50377_51100;
var G__51148 = (i__50378_51101 + (1));
seq__50374_51098 = G__51145;
chunk__50376_51099 = G__51146;
count__50377_51100 = G__51147;
i__50378_51101 = G__51148;
continue;
} else {
var temp__5720__auto___51149 = cljs.core.seq(seq__50374_51098);
if(temp__5720__auto___51149){
var seq__50374_51150__$1 = temp__5720__auto___51149;
if(cljs.core.chunked_seq_QMARK_(seq__50374_51150__$1)){
var c__4550__auto___51151 = cljs.core.chunk_first(seq__50374_51150__$1);
var G__51152 = cljs.core.chunk_rest(seq__50374_51150__$1);
var G__51153 = c__4550__auto___51151;
var G__51154 = cljs.core.count(c__4550__auto___51151);
var G__51155 = (0);
seq__50374_51098 = G__51152;
chunk__50376_51099 = G__51153;
count__50377_51100 = G__51154;
i__50378_51101 = G__51155;
continue;
} else {
var vec__50587_51156 = cljs.core.first(seq__50374_51150__$1);
var store_name_51157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50587_51156,(0),null);
var map__50590_51158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50587_51156,(1),null);
var map__50590_51159__$1 = (((((!((map__50590_51158 == null))))?(((((map__50590_51158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50590_51158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50590_51158):map__50590_51158);
var key_51160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50590_51159__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50590_51159__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50595_51165 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51160);
var map__50595_51166__$1 = (((((!((map__50595_51165 == null))))?(((((map__50595_51165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50595_51165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50595_51165):map__50595_51165);
var path_51167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595_51166__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51168 = db.createObjectStore(store_name_51157,(cljs.core.truth_(path_51167)?({"keyPath": path_51167}):({"autoIncrement": true})
));
var seq__50599_51171 = cljs.core.seq(indexes_51161);
var chunk__50600_51172 = null;
var count__50601_51173 = (0);
var i__50602_51174 = (0);
while(true){
if((i__50602_51174 < count__50601_51173)){
var vec__50624_51175 = chunk__50600_51172.cljs$core$IIndexed$_nth$arity$2(null,i__50602_51174);
var index_name_51176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624_51175,(0),null);
var options_51177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624_51175,(1),null);
store_51168.createIndex(index_name_51176,index_name_51176,cljs.core.clj__GT_js(options_51177));


var G__51179 = seq__50599_51171;
var G__51180 = chunk__50600_51172;
var G__51181 = count__50601_51173;
var G__51182 = (i__50602_51174 + (1));
seq__50599_51171 = G__51179;
chunk__50600_51172 = G__51180;
count__50601_51173 = G__51181;
i__50602_51174 = G__51182;
continue;
} else {
var temp__5720__auto___51183__$1 = cljs.core.seq(seq__50599_51171);
if(temp__5720__auto___51183__$1){
var seq__50599_51184__$1 = temp__5720__auto___51183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50599_51184__$1)){
var c__4550__auto___51185 = cljs.core.chunk_first(seq__50599_51184__$1);
var G__51186 = cljs.core.chunk_rest(seq__50599_51184__$1);
var G__51187 = c__4550__auto___51185;
var G__51188 = cljs.core.count(c__4550__auto___51185);
var G__51189 = (0);
seq__50599_51171 = G__51186;
chunk__50600_51172 = G__51187;
count__50601_51173 = G__51188;
i__50602_51174 = G__51189;
continue;
} else {
var vec__50630_51190 = cljs.core.first(seq__50599_51184__$1);
var index_name_51191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630_51190,(0),null);
var options_51192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630_51190,(1),null);
store_51168.createIndex(index_name_51191,index_name_51191,cljs.core.clj__GT_js(options_51192));


var G__51195 = cljs.core.next(seq__50599_51184__$1);
var G__51196 = null;
var G__51197 = (0);
var G__51198 = (0);
seq__50599_51171 = G__51195;
chunk__50600_51172 = G__51196;
count__50601_51173 = G__51197;
i__50602_51174 = G__51198;
continue;
}
} else {
}
}
break;
}


var G__51199 = cljs.core.next(seq__50374_51150__$1);
var G__51200 = null;
var G__51201 = (0);
var G__51202 = (0);
seq__50374_51098 = G__51199;
chunk__50376_51099 = G__51200;
count__50377_51100 = G__51201;
i__50378_51101 = G__51202;
continue;
}
} else {
}
}
break;
}


var G__51203 = seq__49803;
var G__51204 = chunk__49804;
var G__51205 = count__49805;
var G__51206 = (i__49806 + (1));
seq__49803 = G__51203;
chunk__49804 = G__51204;
count__49805 = G__51205;
i__49806 = G__51206;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49803);
if(temp__5720__auto__){
var seq__49803__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49803__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49803__$1);
var G__51208 = cljs.core.chunk_rest(seq__49803__$1);
var G__51209 = c__4550__auto__;
var G__51210 = cljs.core.count(c__4550__auto__);
var G__51211 = (0);
seq__49803 = G__51208;
chunk__49804 = G__51209;
count__49805 = G__51210;
i__49806 = G__51211;
continue;
} else {
var map__50636 = cljs.core.first(seq__49803__$1);
var map__50636__$1 = (((((!((map__50636 == null))))?(((((map__50636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50636):map__50636);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50636__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__50642_51218 = cljs.core.seq(stores);
var chunk__50644_51219 = null;
var count__50645_51220 = (0);
var i__50646_51221 = (0);
while(true){
if((i__50646_51221 < count__50645_51220)){
var vec__50782_51223 = chunk__50644_51219.cljs$core$IIndexed$_nth$arity$2(null,i__50646_51221);
var store_name_51224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50782_51223,(0),null);
var map__50785_51225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50782_51223,(1),null);
var map__50785_51226__$1 = (((((!((map__50785_51225 == null))))?(((((map__50785_51225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50785_51225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50785_51225):map__50785_51225);
var key_51227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785_51226__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50785_51226__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50796_51230 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51227);
var map__50796_51231__$1 = (((((!((map__50796_51230 == null))))?(((((map__50796_51230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50796_51230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50796_51230):map__50796_51230);
var path_51232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50796_51231__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51233 = db.createObjectStore(store_name_51224,(cljs.core.truth_(path_51232)?({"keyPath": path_51232}):({"autoIncrement": true})
));
var seq__50805_51237 = cljs.core.seq(indexes_51228);
var chunk__50806_51238 = null;
var count__50807_51239 = (0);
var i__50808_51240 = (0);
while(true){
if((i__50808_51240 < count__50807_51239)){
var vec__50823_51241 = chunk__50806_51238.cljs$core$IIndexed$_nth$arity$2(null,i__50808_51240);
var index_name_51242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50823_51241,(0),null);
var options_51243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50823_51241,(1),null);
store_51233.createIndex(index_name_51242,index_name_51242,cljs.core.clj__GT_js(options_51243));


var G__51246 = seq__50805_51237;
var G__51247 = chunk__50806_51238;
var G__51248 = count__50807_51239;
var G__51249 = (i__50808_51240 + (1));
seq__50805_51237 = G__51246;
chunk__50806_51238 = G__51247;
count__50807_51239 = G__51248;
i__50808_51240 = G__51249;
continue;
} else {
var temp__5720__auto___51251__$1 = cljs.core.seq(seq__50805_51237);
if(temp__5720__auto___51251__$1){
var seq__50805_51252__$1 = temp__5720__auto___51251__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50805_51252__$1)){
var c__4550__auto___51253 = cljs.core.chunk_first(seq__50805_51252__$1);
var G__51254 = cljs.core.chunk_rest(seq__50805_51252__$1);
var G__51255 = c__4550__auto___51253;
var G__51256 = cljs.core.count(c__4550__auto___51253);
var G__51257 = (0);
seq__50805_51237 = G__51254;
chunk__50806_51238 = G__51255;
count__50807_51239 = G__51256;
i__50808_51240 = G__51257;
continue;
} else {
var vec__50833_51258 = cljs.core.first(seq__50805_51252__$1);
var index_name_51259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50833_51258,(0),null);
var options_51260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50833_51258,(1),null);
store_51233.createIndex(index_name_51259,index_name_51259,cljs.core.clj__GT_js(options_51260));


var G__51264 = cljs.core.next(seq__50805_51252__$1);
var G__51265 = null;
var G__51266 = (0);
var G__51267 = (0);
seq__50805_51237 = G__51264;
chunk__50806_51238 = G__51265;
count__50807_51239 = G__51266;
i__50808_51240 = G__51267;
continue;
}
} else {
}
}
break;
}


var G__51268 = seq__50642_51218;
var G__51269 = chunk__50644_51219;
var G__51270 = count__50645_51220;
var G__51271 = (i__50646_51221 + (1));
seq__50642_51218 = G__51268;
chunk__50644_51219 = G__51269;
count__50645_51220 = G__51270;
i__50646_51221 = G__51271;
continue;
} else {
var temp__5720__auto___51272__$1 = cljs.core.seq(seq__50642_51218);
if(temp__5720__auto___51272__$1){
var seq__50642_51273__$1 = temp__5720__auto___51272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50642_51273__$1)){
var c__4550__auto___51275 = cljs.core.chunk_first(seq__50642_51273__$1);
var G__51276 = cljs.core.chunk_rest(seq__50642_51273__$1);
var G__51277 = c__4550__auto___51275;
var G__51278 = cljs.core.count(c__4550__auto___51275);
var G__51279 = (0);
seq__50642_51218 = G__51276;
chunk__50644_51219 = G__51277;
count__50645_51220 = G__51278;
i__50646_51221 = G__51279;
continue;
} else {
var vec__50852_51281 = cljs.core.first(seq__50642_51273__$1);
var store_name_51282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50852_51281,(0),null);
var map__50857_51283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50852_51281,(1),null);
var map__50857_51284__$1 = (((((!((map__50857_51283 == null))))?(((((map__50857_51283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50857_51283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50857_51283):map__50857_51283);
var key_51285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857_51284__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50857_51284__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50867_51290 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51285);
var map__50867_51291__$1 = (((((!((map__50867_51290 == null))))?(((((map__50867_51290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50867_51290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50867_51290):map__50867_51290);
var path_51292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50867_51291__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51293 = db.createObjectStore(store_name_51282,(cljs.core.truth_(path_51292)?({"keyPath": path_51292}):({"autoIncrement": true})
));
var seq__50869_51295 = cljs.core.seq(indexes_51286);
var chunk__50870_51296 = null;
var count__50871_51297 = (0);
var i__50872_51298 = (0);
while(true){
if((i__50872_51298 < count__50871_51297)){
var vec__50884_51300 = chunk__50870_51296.cljs$core$IIndexed$_nth$arity$2(null,i__50872_51298);
var index_name_51301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50884_51300,(0),null);
var options_51302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50884_51300,(1),null);
store_51293.createIndex(index_name_51301,index_name_51301,cljs.core.clj__GT_js(options_51302));


var G__51303 = seq__50869_51295;
var G__51304 = chunk__50870_51296;
var G__51305 = count__50871_51297;
var G__51306 = (i__50872_51298 + (1));
seq__50869_51295 = G__51303;
chunk__50870_51296 = G__51304;
count__50871_51297 = G__51305;
i__50872_51298 = G__51306;
continue;
} else {
var temp__5720__auto___51307__$2 = cljs.core.seq(seq__50869_51295);
if(temp__5720__auto___51307__$2){
var seq__50869_51308__$1 = temp__5720__auto___51307__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50869_51308__$1)){
var c__4550__auto___51310 = cljs.core.chunk_first(seq__50869_51308__$1);
var G__51311 = cljs.core.chunk_rest(seq__50869_51308__$1);
var G__51312 = c__4550__auto___51310;
var G__51313 = cljs.core.count(c__4550__auto___51310);
var G__51314 = (0);
seq__50869_51295 = G__51311;
chunk__50870_51296 = G__51312;
count__50871_51297 = G__51313;
i__50872_51298 = G__51314;
continue;
} else {
var vec__50889_51316 = cljs.core.first(seq__50869_51308__$1);
var index_name_51317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889_51316,(0),null);
var options_51318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50889_51316,(1),null);
store_51293.createIndex(index_name_51317,index_name_51317,cljs.core.clj__GT_js(options_51318));


var G__51319 = cljs.core.next(seq__50869_51308__$1);
var G__51320 = null;
var G__51321 = (0);
var G__51322 = (0);
seq__50869_51295 = G__51319;
chunk__50870_51296 = G__51320;
count__50871_51297 = G__51321;
i__50872_51298 = G__51322;
continue;
}
} else {
}
}
break;
}


var G__51323 = cljs.core.next(seq__50642_51273__$1);
var G__51324 = null;
var G__51325 = (0);
var G__51326 = (0);
seq__50642_51218 = G__51323;
chunk__50644_51219 = G__51324;
count__50645_51220 = G__51325;
i__50646_51221 = G__51326;
continue;
}
} else {
}
}
break;
}


var G__51327 = cljs.core.next(seq__49803__$1);
var G__51328 = null;
var G__51329 = (0);
var G__51330 = (0);
seq__49803 = G__51327;
chunk__49804 = G__51328;
count__49805 = G__51329;
i__49806 = G__51330;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__49798_51085,G__49799_51086,G__49786_51075,c,open_req,map__49780,map__49780__$1,db_name,migrations))
;
goog.object.set(G__49798_51085,G__49799_51086,G__49800_51087);


return c;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.book.util.indexeddb","setup-db","com.wsscode.pathom.book.util.indexeddb/setup-db",-961925766,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50915){
return cljs.core.map_QMARK_(G__50915);
}),(function (G__50915){
return cljs.core.contains_QMARK_(G__50915,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
}),(function (G__50915){
return cljs.core.contains_QMARK_(G__50915,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
})], null),(function (G__50915){
return ((cljs.core.map_QMARK_(G__50915)) && (cljs.core.contains_QMARK_(G__50915,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))) && (cljs.core.contains_QMARK_(G__50915,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null,null));
com.wsscode.pathom.book.util.indexeddb.create_BANG_ = (function com$wsscode$pathom$book$util$indexeddb$create_BANG_(p__50985,entity){
var map__50986 = p__50985;
var map__50986__$1 = (((((!((map__50986 == null))))?(((((map__50986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50986):map__50986);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50986__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50986__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readwrite");
var store = tx.objectStore(store_name);
var req = store.add(cljs.core.clj__GT_js(entity));
var G__50992_51334 = req;
var G__50993_51335 = "onsuccess";
var G__50994_51336 = ((function (G__50992_51334,G__50993_51335,c,tx,store,req,map__50986,map__50986__$1,db,store_name){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,com.wsscode.pathom.book.util.indexeddb.event_result(e));
});})(G__50992_51334,G__50993_51335,c,tx,store,req,map__50986,map__50986__$1,db,store_name))
;
goog.object.set(G__50992_51334,G__50993_51335,G__50994_51336);

return c;
});
com.wsscode.pathom.book.util.indexeddb.convert_back = (function com$wsscode$pathom$book$util$indexeddb$convert_back(x){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
com.wsscode.pathom.book.util.indexeddb.scan_store = (function com$wsscode$pathom$book$util$indexeddb$scan_store(p__51001){
var map__51003 = p__51001;
var map__51003__$1 = (((((!((map__51003 == null))))?(((((map__51003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51003):map__51003);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51003__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((50));
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__51014_51338 = store.openCursor();
var G__51015_51339 = G__51014_51338;
var G__51016_51340 = "onsuccess";
var G__51017_51341 = ((function (G__51015_51339,G__51016_51340,G__51014_51338,c,tx,store,map__51003,map__51003__$1,db,store_name){
return (function (e){
var temp__5718__auto__ = com.wsscode.pathom.book.util.indexeddb.event_result(e);
if(cljs.core.truth_(temp__5718__auto__)){
var cursor = temp__5718__auto__;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.book.util.indexeddb.convert_back(goog.object.get(cursor,"value")),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),goog.object.get(cursor,"key")));

return cursor.continue();
} else {
return cljs.core.async.close_BANG_(c);
}
});})(G__51015_51339,G__51016_51340,G__51014_51338,c,tx,store,map__51003,map__51003__$1,db,store_name))
;
goog.object.set(G__51015_51339,G__51016_51340,G__51017_51341);


return c;
});
com.wsscode.pathom.book.util.indexeddb.read_object = (function com$wsscode$pathom$book$util$indexeddb$read_object(p__51020,id){
var map__51021 = p__51020;
var map__51021__$1 = (((((!((map__51021 == null))))?(((((map__51021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51021):map__51021);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__51031_51350 = store.get(id);
var G__51032_51351 = "onsuccess";
var G__51033_51352 = ((function (G__51031_51350,G__51032_51351,c,tx,store,map__51021,map__51021__$1,db,store_name){
return (function (p1__51019_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__4131__auto__ = (function (){var G__51035 = com.wsscode.pathom.book.util.indexeddb.convert_back(com.wsscode.pathom.book.util.indexeddb.event_result(p1__51019_SHARP_));
if((G__51035 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51035,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),id);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","not-found","com.wsscode.pathom.book.util.indexeddb/not-found",-1009867320);
}
})());
});})(G__51031_51350,G__51032_51351,c,tx,store,map__51021,map__51021__$1,db,store_name))
;
goog.object.set(G__51031_51350,G__51032_51351,G__51033_51352);

return c;
});

//# sourceMappingURL=com.wsscode.pathom.book.util.indexeddb.js.map
