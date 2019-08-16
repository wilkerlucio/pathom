goog.provide('com.wsscode.pathom.book.util.indexeddb');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49632){
return cljs.core.map_QMARK_(G__49632);
}),(function (G__49632){
return cljs.core.contains_QMARK_(G__49632,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
})], null),(function (G__49632){
return ((cljs.core.map_QMARK_(G__49632)) && (cljs.core.contains_QMARK_(G__49632,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49642){
return cljs.core.map_QMARK_(G__49642);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49650){
return cljs.core.map_QMARK_(G__49650);
}),(function (G__49650){
return cljs.core.contains_QMARK_(G__49650,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
})], null),(function (G__49650){
return ((cljs.core.map_QMARK_(G__49650)) && (cljs.core.contains_QMARK_(G__49650,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49752){
return cljs.core.coll_QMARK_(G__49752);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),null], null), null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__49762){
return cljs.core.map_QMARK_(G__49762);
})], null),(function (G__49762){
return cljs.core.map_QMARK_(G__49762);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__49770){
return cljs.core.map_QMARK_(G__49770);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__12838__auto__,v__12839__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__12839__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167))], null),null));
com.wsscode.pathom.book.util.indexeddb.indexeddb = (function com$wsscode$pathom$book$util$indexeddb$indexeddb(){
return indexedDB;
});
com.wsscode.pathom.book.util.indexeddb.event_result = (function com$wsscode$pathom$book$util$indexeddb$event_result(e){
var G__49790 = e;
var G__49791 = ["target","result"];
return goog.object.getValueByKeys(G__49790,G__49791);
});
com.wsscode.pathom.book.util.indexeddb.setup_db = (function com$wsscode$pathom$book$util$indexeddb$setup_db(p__49796){
var map__49797 = p__49796;
var map__49797__$1 = (((((!((map__49797 == null))))?(((((map__49797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49797):map__49797);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49797__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
var migrations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49797__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var open_req = com.wsscode.pathom.book.util.indexeddb.indexeddb().open(db_name,cljs.core.count(migrations));
var G__49807_51000 = open_req;
var G__49821_51001 = G__49807_51000;
var G__49822_51002 = "onerror";
var G__49823_51003 = ((function (G__49821_51001,G__49822_51002,G__49807_51000,c,open_req,map__49797,map__49797__$1,db_name,migrations){
return (function (p1__49794_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__49794_SHARP_);
});})(G__49821_51001,G__49822_51002,G__49807_51000,c,open_req,map__49797,map__49797__$1,db_name,migrations))
;
goog.object.set(G__49821_51001,G__49822_51002,G__49823_51003);

var G__49831_51005 = G__49807_51000;
var G__49832_51006 = "onsuccess";
var G__49833_51007 = ((function (G__49831_51005,G__49832_51006,G__49807_51000,c,open_req,map__49797,map__49797__$1,db_name,migrations){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,goog.object.get(open_req,"result"));
});})(G__49831_51005,G__49832_51006,G__49807_51000,c,open_req,map__49797,map__49797__$1,db_name,migrations))
;
goog.object.set(G__49831_51005,G__49832_51006,G__49833_51007);

var G__49858_51010 = G__49807_51000;
var G__49859_51011 = "onupgradeneeded";
var G__49860_51012 = ((function (G__49858_51010,G__49859_51011,G__49807_51000,c,open_req,map__49797,map__49797__$1,db_name,migrations){
return (function (e){
var db = com.wsscode.pathom.book.util.indexeddb.event_result(e);
var seq__49872 = cljs.core.seq(migrations);
var chunk__49873 = null;
var count__49874 = (0);
var i__49875 = (0);
while(true){
if((i__49875 < count__49874)){
var map__50461 = chunk__49873.cljs$core$IIndexed$_nth$arity$2(null,i__49875);
var map__50461__$1 = (((((!((map__50461 == null))))?(((((map__50461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50461):map__50461);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50461__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__50466_51019 = cljs.core.seq(stores);
var chunk__50468_51020 = null;
var count__50469_51021 = (0);
var i__50470_51022 = (0);
while(true){
if((i__50470_51022 < count__50469_51021)){
var vec__50619_51023 = chunk__50468_51020.cljs$core$IIndexed$_nth$arity$2(null,i__50470_51022);
var store_name_51024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50619_51023,(0),null);
var map__50622_51025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50619_51023,(1),null);
var map__50622_51026__$1 = (((((!((map__50622_51025 == null))))?(((((map__50622_51025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50622_51025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50622_51025):map__50622_51025);
var key_51027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50622_51026__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50622_51026__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50630_51031 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51027);
var map__50630_51032__$1 = (((((!((map__50630_51031 == null))))?(((((map__50630_51031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50630_51031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50630_51031):map__50630_51031);
var path_51033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50630_51032__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51034 = db.createObjectStore(store_name_51024,(cljs.core.truth_(path_51033)?({"keyPath": path_51033}):({"autoIncrement": true})
));
var seq__50633_51063 = cljs.core.seq(indexes_51028);
var chunk__50634_51064 = null;
var count__50635_51065 = (0);
var i__50636_51066 = (0);
while(true){
if((i__50636_51066 < count__50635_51065)){
var vec__50654_51071 = chunk__50634_51064.cljs$core$IIndexed$_nth$arity$2(null,i__50636_51066);
var index_name_51072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50654_51071,(0),null);
var options_51073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50654_51071,(1),null);
store_51034.createIndex(index_name_51072,index_name_51072,cljs.core.clj__GT_js(options_51073));


var G__51074 = seq__50633_51063;
var G__51075 = chunk__50634_51064;
var G__51076 = count__50635_51065;
var G__51077 = (i__50636_51066 + (1));
seq__50633_51063 = G__51074;
chunk__50634_51064 = G__51075;
count__50635_51065 = G__51076;
i__50636_51066 = G__51077;
continue;
} else {
var temp__5720__auto___51078 = cljs.core.seq(seq__50633_51063);
if(temp__5720__auto___51078){
var seq__50633_51080__$1 = temp__5720__auto___51078;
if(cljs.core.chunked_seq_QMARK_(seq__50633_51080__$1)){
var c__4550__auto___51081 = cljs.core.chunk_first(seq__50633_51080__$1);
var G__51082 = cljs.core.chunk_rest(seq__50633_51080__$1);
var G__51083 = c__4550__auto___51081;
var G__51084 = cljs.core.count(c__4550__auto___51081);
var G__51085 = (0);
seq__50633_51063 = G__51082;
chunk__50634_51064 = G__51083;
count__50635_51065 = G__51084;
i__50636_51066 = G__51085;
continue;
} else {
var vec__50660_51090 = cljs.core.first(seq__50633_51080__$1);
var index_name_51091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50660_51090,(0),null);
var options_51092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50660_51090,(1),null);
store_51034.createIndex(index_name_51091,index_name_51091,cljs.core.clj__GT_js(options_51092));


var G__51095 = cljs.core.next(seq__50633_51080__$1);
var G__51096 = null;
var G__51097 = (0);
var G__51098 = (0);
seq__50633_51063 = G__51095;
chunk__50634_51064 = G__51096;
count__50635_51065 = G__51097;
i__50636_51066 = G__51098;
continue;
}
} else {
}
}
break;
}


var G__51102 = seq__50466_51019;
var G__51103 = chunk__50468_51020;
var G__51104 = count__50469_51021;
var G__51105 = (i__50470_51022 + (1));
seq__50466_51019 = G__51102;
chunk__50468_51020 = G__51103;
count__50469_51021 = G__51104;
i__50470_51022 = G__51105;
continue;
} else {
var temp__5720__auto___51106 = cljs.core.seq(seq__50466_51019);
if(temp__5720__auto___51106){
var seq__50466_51108__$1 = temp__5720__auto___51106;
if(cljs.core.chunked_seq_QMARK_(seq__50466_51108__$1)){
var c__4550__auto___51110 = cljs.core.chunk_first(seq__50466_51108__$1);
var G__51111 = cljs.core.chunk_rest(seq__50466_51108__$1);
var G__51112 = c__4550__auto___51110;
var G__51113 = cljs.core.count(c__4550__auto___51110);
var G__51114 = (0);
seq__50466_51019 = G__51111;
chunk__50468_51020 = G__51112;
count__50469_51021 = G__51113;
i__50470_51022 = G__51114;
continue;
} else {
var vec__50666_51116 = cljs.core.first(seq__50466_51108__$1);
var store_name_51117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50666_51116,(0),null);
var map__50669_51118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50666_51116,(1),null);
var map__50669_51119__$1 = (((((!((map__50669_51118 == null))))?(((((map__50669_51118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50669_51118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50669_51118):map__50669_51118);
var key_51120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50669_51119__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50669_51119__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50671_51125 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51120);
var map__50671_51126__$1 = (((((!((map__50671_51125 == null))))?(((((map__50671_51125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50671_51125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50671_51125):map__50671_51125);
var path_51127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50671_51126__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51128 = db.createObjectStore(store_name_51117,(cljs.core.truth_(path_51127)?({"keyPath": path_51127}):({"autoIncrement": true})
));
var seq__50673_51132 = cljs.core.seq(indexes_51121);
var chunk__50674_51133 = null;
var count__50675_51134 = (0);
var i__50676_51135 = (0);
while(true){
if((i__50676_51135 < count__50675_51134)){
var vec__50685_51138 = chunk__50674_51133.cljs$core$IIndexed$_nth$arity$2(null,i__50676_51135);
var index_name_51139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50685_51138,(0),null);
var options_51140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50685_51138,(1),null);
store_51128.createIndex(index_name_51139,index_name_51139,cljs.core.clj__GT_js(options_51140));


var G__51142 = seq__50673_51132;
var G__51143 = chunk__50674_51133;
var G__51144 = count__50675_51134;
var G__51145 = (i__50676_51135 + (1));
seq__50673_51132 = G__51142;
chunk__50674_51133 = G__51143;
count__50675_51134 = G__51144;
i__50676_51135 = G__51145;
continue;
} else {
var temp__5720__auto___51150__$1 = cljs.core.seq(seq__50673_51132);
if(temp__5720__auto___51150__$1){
var seq__50673_51151__$1 = temp__5720__auto___51150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50673_51151__$1)){
var c__4550__auto___51152 = cljs.core.chunk_first(seq__50673_51151__$1);
var G__51154 = cljs.core.chunk_rest(seq__50673_51151__$1);
var G__51155 = c__4550__auto___51152;
var G__51156 = cljs.core.count(c__4550__auto___51152);
var G__51157 = (0);
seq__50673_51132 = G__51154;
chunk__50674_51133 = G__51155;
count__50675_51134 = G__51156;
i__50676_51135 = G__51157;
continue;
} else {
var vec__50690_51159 = cljs.core.first(seq__50673_51151__$1);
var index_name_51160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50690_51159,(0),null);
var options_51161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50690_51159,(1),null);
store_51128.createIndex(index_name_51160,index_name_51160,cljs.core.clj__GT_js(options_51161));


var G__51164 = cljs.core.next(seq__50673_51151__$1);
var G__51165 = null;
var G__51166 = (0);
var G__51167 = (0);
seq__50673_51132 = G__51164;
chunk__50674_51133 = G__51165;
count__50675_51134 = G__51166;
i__50676_51135 = G__51167;
continue;
}
} else {
}
}
break;
}


var G__51168 = cljs.core.next(seq__50466_51108__$1);
var G__51169 = null;
var G__51170 = (0);
var G__51171 = (0);
seq__50466_51019 = G__51168;
chunk__50468_51020 = G__51169;
count__50469_51021 = G__51170;
i__50470_51022 = G__51171;
continue;
}
} else {
}
}
break;
}


var G__51174 = seq__49872;
var G__51175 = chunk__49873;
var G__51176 = count__49874;
var G__51177 = (i__49875 + (1));
seq__49872 = G__51174;
chunk__49873 = G__51175;
count__49874 = G__51176;
i__49875 = G__51177;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__49872);
if(temp__5720__auto__){
var seq__49872__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49872__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49872__$1);
var G__51181 = cljs.core.chunk_rest(seq__49872__$1);
var G__51182 = c__4550__auto__;
var G__51183 = cljs.core.count(c__4550__auto__);
var G__51184 = (0);
seq__49872 = G__51181;
chunk__49873 = G__51182;
count__49874 = G__51183;
i__49875 = G__51184;
continue;
} else {
var map__50694 = cljs.core.first(seq__49872__$1);
var map__50694__$1 = (((((!((map__50694 == null))))?(((((map__50694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50694):map__50694);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50694__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__50701_51188 = cljs.core.seq(stores);
var chunk__50703_51189 = null;
var count__50704_51190 = (0);
var i__50705_51191 = (0);
while(true){
if((i__50705_51191 < count__50704_51190)){
var vec__50801_51193 = chunk__50703_51189.cljs$core$IIndexed$_nth$arity$2(null,i__50705_51191);
var store_name_51194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50801_51193,(0),null);
var map__50804_51195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50801_51193,(1),null);
var map__50804_51196__$1 = (((((!((map__50804_51195 == null))))?(((((map__50804_51195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50804_51195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50804_51195):map__50804_51195);
var key_51197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50804_51196__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50804_51196__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50810_51202 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51197);
var map__50810_51203__$1 = (((((!((map__50810_51202 == null))))?(((((map__50810_51202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50810_51202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50810_51202):map__50810_51202);
var path_51204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50810_51203__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51205 = db.createObjectStore(store_name_51194,(cljs.core.truth_(path_51204)?({"keyPath": path_51204}):({"autoIncrement": true})
));
var seq__50815_51210 = cljs.core.seq(indexes_51198);
var chunk__50816_51211 = null;
var count__50817_51212 = (0);
var i__50818_51213 = (0);
while(true){
if((i__50818_51213 < count__50817_51212)){
var vec__50827_51214 = chunk__50816_51211.cljs$core$IIndexed$_nth$arity$2(null,i__50818_51213);
var index_name_51215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50827_51214,(0),null);
var options_51216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50827_51214,(1),null);
store_51205.createIndex(index_name_51215,index_name_51215,cljs.core.clj__GT_js(options_51216));


var G__51228 = seq__50815_51210;
var G__51229 = chunk__50816_51211;
var G__51230 = count__50817_51212;
var G__51231 = (i__50818_51213 + (1));
seq__50815_51210 = G__51228;
chunk__50816_51211 = G__51229;
count__50817_51212 = G__51230;
i__50818_51213 = G__51231;
continue;
} else {
var temp__5720__auto___51235__$1 = cljs.core.seq(seq__50815_51210);
if(temp__5720__auto___51235__$1){
var seq__50815_51243__$1 = temp__5720__auto___51235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50815_51243__$1)){
var c__4550__auto___51252 = cljs.core.chunk_first(seq__50815_51243__$1);
var G__51256 = cljs.core.chunk_rest(seq__50815_51243__$1);
var G__51257 = c__4550__auto___51252;
var G__51258 = cljs.core.count(c__4550__auto___51252);
var G__51259 = (0);
seq__50815_51210 = G__51256;
chunk__50816_51211 = G__51257;
count__50817_51212 = G__51258;
i__50818_51213 = G__51259;
continue;
} else {
var vec__50838_51264 = cljs.core.first(seq__50815_51243__$1);
var index_name_51265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50838_51264,(0),null);
var options_51266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50838_51264,(1),null);
store_51205.createIndex(index_name_51265,index_name_51265,cljs.core.clj__GT_js(options_51266));


var G__51270 = cljs.core.next(seq__50815_51243__$1);
var G__51271 = null;
var G__51272 = (0);
var G__51273 = (0);
seq__50815_51210 = G__51270;
chunk__50816_51211 = G__51271;
count__50817_51212 = G__51272;
i__50818_51213 = G__51273;
continue;
}
} else {
}
}
break;
}


var G__51286 = seq__50701_51188;
var G__51288 = chunk__50703_51189;
var G__51289 = count__50704_51190;
var G__51290 = (i__50705_51191 + (1));
seq__50701_51188 = G__51286;
chunk__50703_51189 = G__51288;
count__50704_51190 = G__51289;
i__50705_51191 = G__51290;
continue;
} else {
var temp__5720__auto___51295__$1 = cljs.core.seq(seq__50701_51188);
if(temp__5720__auto___51295__$1){
var seq__50701_51298__$1 = temp__5720__auto___51295__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50701_51298__$1)){
var c__4550__auto___51302 = cljs.core.chunk_first(seq__50701_51298__$1);
var G__51304 = cljs.core.chunk_rest(seq__50701_51298__$1);
var G__51305 = c__4550__auto___51302;
var G__51306 = cljs.core.count(c__4550__auto___51302);
var G__51307 = (0);
seq__50701_51188 = G__51304;
chunk__50703_51189 = G__51305;
count__50704_51190 = G__51306;
i__50705_51191 = G__51307;
continue;
} else {
var vec__50845_51308 = cljs.core.first(seq__50701_51298__$1);
var store_name_51309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50845_51308,(0),null);
var map__50848_51310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50845_51308,(1),null);
var map__50848_51311__$1 = (((((!((map__50848_51310 == null))))?(((((map__50848_51310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50848_51310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50848_51310):map__50848_51310);
var key_51312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50848_51311__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_51313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50848_51311__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__50851_51342 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_51312);
var map__50851_51343__$1 = (((((!((map__50851_51342 == null))))?(((((map__50851_51342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50851_51342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50851_51342):map__50851_51342);
var path_51344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50851_51343__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_51345 = db.createObjectStore(store_name_51309,(cljs.core.truth_(path_51344)?({"keyPath": path_51344}):({"autoIncrement": true})
));
var seq__50857_51352 = cljs.core.seq(indexes_51313);
var chunk__50858_51353 = null;
var count__50859_51354 = (0);
var i__50860_51355 = (0);
while(true){
if((i__50860_51355 < count__50859_51354)){
var vec__50870_51367 = chunk__50858_51353.cljs$core$IIndexed$_nth$arity$2(null,i__50860_51355);
var index_name_51368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50870_51367,(0),null);
var options_51369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50870_51367,(1),null);
store_51345.createIndex(index_name_51368,index_name_51368,cljs.core.clj__GT_js(options_51369));


var G__51380 = seq__50857_51352;
var G__51381 = chunk__50858_51353;
var G__51384 = count__50859_51354;
var G__51385 = (i__50860_51355 + (1));
seq__50857_51352 = G__51380;
chunk__50858_51353 = G__51381;
count__50859_51354 = G__51384;
i__50860_51355 = G__51385;
continue;
} else {
var temp__5720__auto___51392__$2 = cljs.core.seq(seq__50857_51352);
if(temp__5720__auto___51392__$2){
var seq__50857_51397__$1 = temp__5720__auto___51392__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50857_51397__$1)){
var c__4550__auto___51398 = cljs.core.chunk_first(seq__50857_51397__$1);
var G__51403 = cljs.core.chunk_rest(seq__50857_51397__$1);
var G__51404 = c__4550__auto___51398;
var G__51405 = cljs.core.count(c__4550__auto___51398);
var G__51406 = (0);
seq__50857_51352 = G__51403;
chunk__50858_51353 = G__51404;
count__50859_51354 = G__51405;
i__50860_51355 = G__51406;
continue;
} else {
var vec__50878_51426 = cljs.core.first(seq__50857_51397__$1);
var index_name_51427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50878_51426,(0),null);
var options_51428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50878_51426,(1),null);
store_51345.createIndex(index_name_51427,index_name_51427,cljs.core.clj__GT_js(options_51428));


var G__51430 = cljs.core.next(seq__50857_51397__$1);
var G__51431 = null;
var G__51432 = (0);
var G__51433 = (0);
seq__50857_51352 = G__51430;
chunk__50858_51353 = G__51431;
count__50859_51354 = G__51432;
i__50860_51355 = G__51433;
continue;
}
} else {
}
}
break;
}


var G__51436 = cljs.core.next(seq__50701_51298__$1);
var G__51437 = null;
var G__51438 = (0);
var G__51439 = (0);
seq__50701_51188 = G__51436;
chunk__50703_51189 = G__51437;
count__50704_51190 = G__51438;
i__50705_51191 = G__51439;
continue;
}
} else {
}
}
break;
}


var G__51440 = cljs.core.next(seq__49872__$1);
var G__51441 = null;
var G__51442 = (0);
var G__51443 = (0);
seq__49872 = G__51440;
chunk__49873 = G__51441;
count__49874 = G__51442;
i__49875 = G__51443;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__49858_51010,G__49859_51011,G__49807_51000,c,open_req,map__49797,map__49797__$1,db_name,migrations))
;
goog.object.set(G__49858_51010,G__49859_51011,G__49860_51012);


return c;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.book.util.indexeddb","setup-db","com.wsscode.pathom.book.util.indexeddb/setup-db",-961925766,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__50887){
return cljs.core.map_QMARK_(G__50887);
}),(function (G__50887){
return cljs.core.contains_QMARK_(G__50887,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
}),(function (G__50887){
return cljs.core.contains_QMARK_(G__50887,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
})], null),(function (G__50887){
return ((cljs.core.map_QMARK_(G__50887)) && (cljs.core.contains_QMARK_(G__50887,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))) && (cljs.core.contains_QMARK_(G__50887,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null,null));
com.wsscode.pathom.book.util.indexeddb.create_BANG_ = (function com$wsscode$pathom$book$util$indexeddb$create_BANG_(p__50918,entity){
var map__50919 = p__50918;
var map__50919__$1 = (((((!((map__50919 == null))))?(((((map__50919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50919):map__50919);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50919__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readwrite");
var store = tx.objectStore(store_name);
var req = store.add(cljs.core.clj__GT_js(entity));
var G__50924_51512 = req;
var G__50925_51513 = "onsuccess";
var G__50926_51514 = ((function (G__50924_51512,G__50925_51513,c,tx,store,req,map__50919,map__50919__$1,db,store_name){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,com.wsscode.pathom.book.util.indexeddb.event_result(e));
});})(G__50924_51512,G__50925_51513,c,tx,store,req,map__50919,map__50919__$1,db,store_name))
;
goog.object.set(G__50924_51512,G__50925_51513,G__50926_51514);

return c;
});
com.wsscode.pathom.book.util.indexeddb.convert_back = (function com$wsscode$pathom$book$util$indexeddb$convert_back(x){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
com.wsscode.pathom.book.util.indexeddb.scan_store = (function com$wsscode$pathom$book$util$indexeddb$scan_store(p__50930){
var map__50931 = p__50930;
var map__50931__$1 = (((((!((map__50931 == null))))?(((((map__50931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50931):map__50931);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((50));
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__50936_51522 = store.openCursor();
var G__50937_51523 = G__50936_51522;
var G__50938_51524 = "onsuccess";
var G__50939_51525 = ((function (G__50937_51523,G__50938_51524,G__50936_51522,c,tx,store,map__50931,map__50931__$1,db,store_name){
return (function (e){
var temp__5718__auto__ = com.wsscode.pathom.book.util.indexeddb.event_result(e);
if(cljs.core.truth_(temp__5718__auto__)){
var cursor = temp__5718__auto__;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.book.util.indexeddb.convert_back(goog.object.get(cursor,"value")),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),goog.object.get(cursor,"key")));

return cursor.continue();
} else {
return cljs.core.async.close_BANG_(c);
}
});})(G__50937_51523,G__50938_51524,G__50936_51522,c,tx,store,map__50931,map__50931__$1,db,store_name))
;
goog.object.set(G__50937_51523,G__50938_51524,G__50939_51525);


return c;
});
com.wsscode.pathom.book.util.indexeddb.read_object = (function com$wsscode$pathom$book$util$indexeddb$read_object(p__50955,id){
var map__50958 = p__50955;
var map__50958__$1 = (((((!((map__50958 == null))))?(((((map__50958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50958):map__50958);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50958__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50958__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__50969_51538 = store.get(id);
var G__50970_51539 = "onsuccess";
var G__50971_51540 = ((function (G__50969_51538,G__50970_51539,c,tx,store,map__50958,map__50958__$1,db,store_name){
return (function (p1__50947_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__4131__auto__ = (function (){var G__50973 = com.wsscode.pathom.book.util.indexeddb.convert_back(com.wsscode.pathom.book.util.indexeddb.event_result(p1__50947_SHARP_));
if((G__50973 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50973,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),id);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","not-found","com.wsscode.pathom.book.util.indexeddb/not-found",-1009867320);
}
})());
});})(G__50969_51538,G__50970_51539,c,tx,store,map__50958,map__50958__$1,db,store_name))
;
goog.object.set(G__50969_51538,G__50970_51539,G__50971_51540);

return c;
});

//# sourceMappingURL=com.wsscode.pathom.book.util.indexeddb.js.map
