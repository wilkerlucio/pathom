goog.provide('com.wsscode.pathom.book.util.indexeddb');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),new cljs.core.Symbol("cljs.core","boolean?","cljs.core/boolean?",1400713761,null),cljs.core.boolean_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__77871){
return cljs.core.map_QMARK_(G__77871);
}),(function (G__77871){
return cljs.core.contains_QMARK_(G__77871,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
})], null),(function (G__77871){
return ((cljs.core.map_QMARK_(G__77871)) && (cljs.core.contains_QMARK_(G__77871,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__77909){
return cljs.core.map_QMARK_(G__77909);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store","com.wsscode.pathom.book.util.indexeddb/store",1366294130))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__77915){
return cljs.core.map_QMARK_(G__77915);
}),(function (G__77915){
return cljs.core.contains_QMARK_(G__77915,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
})], null),(function (G__77915){
return ((cljs.core.map_QMARK_(G__77915)) && (cljs.core.contains_QMARK_(G__77915,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__77969){
return cljs.core.coll_QMARK_(G__77969);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","schema","com.wsscode.pathom.book.util.indexeddb/schema",-1461262475))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),null], null), null)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__78017){
return cljs.core.map_QMARK_(G__78017);
})], null),(function (G__78017){
return cljs.core.map_QMARK_(G__78017);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526)], null)])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__78043){
return cljs.core.map_QMARK_(G__78043);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__13227__auto__,v__13228__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__13228__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index-name","com.wsscode.pathom.book.util.indexeddb/index-name",-161998671),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","index","com.wsscode.pathom.book.util.indexeddb/index",-1377696167))], null),null));
com.wsscode.pathom.book.util.indexeddb.indexeddb = (function com$wsscode$pathom$book$util$indexeddb$indexeddb(){
return indexedDB;
});
com.wsscode.pathom.book.util.indexeddb.event_result = (function com$wsscode$pathom$book$util$indexeddb$event_result(e){
return goog.object.getValueByKeys(e,["target","result"]);
});
com.wsscode.pathom.book.util.indexeddb.setup_db = (function com$wsscode$pathom$book$util$indexeddb$setup_db(p__78058){
var map__78060 = p__78058;
var map__78060__$1 = (((((!((map__78060 == null))))?(((((map__78060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78060):map__78060);
var db_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78060__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
var migrations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78060__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var open_req = com.wsscode.pathom.book.util.indexeddb.indexeddb().open(db_name,cljs.core.count(migrations));
var G__78068_78943 = open_req;
goog.object.set(G__78068_78943,"onerror",((function (G__78068_78943,c,open_req,map__78060,map__78060__$1,db_name,migrations){
return (function (p1__78050_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,p1__78050_SHARP_);
});})(G__78068_78943,c,open_req,map__78060,map__78060__$1,db_name,migrations))
);

goog.object.set(G__78068_78943,"onsuccess",((function (G__78068_78943,c,open_req,map__78060,map__78060__$1,db_name,migrations){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,goog.object.get(open_req,"result"));
});})(G__78068_78943,c,open_req,map__78060,map__78060__$1,db_name,migrations))
);

goog.object.set(G__78068_78943,"onupgradeneeded",((function (G__78068_78943,c,open_req,map__78060,map__78060__$1,db_name,migrations){
return (function (e){
var db = com.wsscode.pathom.book.util.indexeddb.event_result(e);
var seq__78075 = cljs.core.seq(migrations);
var chunk__78076 = null;
var count__78077 = (0);
var i__78078 = (0);
while(true){
if((i__78078 < count__78077)){
var map__78521 = chunk__78076.cljs$core$IIndexed$_nth$arity$2(null,i__78078);
var map__78521__$1 = (((((!((map__78521 == null))))?(((((map__78521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78521):map__78521);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78521__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__78526_78947 = cljs.core.seq(stores);
var chunk__78528_78948 = null;
var count__78529_78949 = (0);
var i__78530_78950 = (0);
while(true){
if((i__78530_78950 < count__78529_78949)){
var vec__78625_78951 = chunk__78528_78948.cljs$core$IIndexed$_nth$arity$2(null,i__78530_78950);
var store_name_78952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78625_78951,(0),null);
var map__78628_78953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78625_78951,(1),null);
var map__78628_78954__$1 = (((((!((map__78628_78953 == null))))?(((((map__78628_78953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78628_78953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78628_78953):map__78628_78953);
var key_78955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78628_78954__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_78956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78628_78954__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__78637_78958 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_78955);
var map__78637_78959__$1 = (((((!((map__78637_78958 == null))))?(((((map__78637_78958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78637_78958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78637_78958):map__78637_78958);
var path_78960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78637_78959__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_78961 = db.createObjectStore(store_name_78952,(cljs.core.truth_(path_78960)?({"keyPath": path_78960}):({"autoIncrement": true})
));
var seq__78643_78964 = cljs.core.seq(indexes_78956);
var chunk__78644_78965 = null;
var count__78645_78966 = (0);
var i__78646_78967 = (0);
while(true){
if((i__78646_78967 < count__78645_78966)){
var vec__78664_78969 = chunk__78644_78965.cljs$core$IIndexed$_nth$arity$2(null,i__78646_78967);
var index_name_78970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78664_78969,(0),null);
var options_78971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78664_78969,(1),null);
store_78961.createIndex(index_name_78970,index_name_78970,cljs.core.clj__GT_js(options_78971));


var G__78973 = seq__78643_78964;
var G__78974 = chunk__78644_78965;
var G__78975 = count__78645_78966;
var G__78976 = (i__78646_78967 + (1));
seq__78643_78964 = G__78973;
chunk__78644_78965 = G__78974;
count__78645_78966 = G__78975;
i__78646_78967 = G__78976;
continue;
} else {
var temp__5720__auto___78977 = cljs.core.seq(seq__78643_78964);
if(temp__5720__auto___78977){
var seq__78643_78978__$1 = temp__5720__auto___78977;
if(cljs.core.chunked_seq_QMARK_(seq__78643_78978__$1)){
var c__4550__auto___78980 = cljs.core.chunk_first(seq__78643_78978__$1);
var G__78981 = cljs.core.chunk_rest(seq__78643_78978__$1);
var G__78982 = c__4550__auto___78980;
var G__78983 = cljs.core.count(c__4550__auto___78980);
var G__78984 = (0);
seq__78643_78964 = G__78981;
chunk__78644_78965 = G__78982;
count__78645_78966 = G__78983;
i__78646_78967 = G__78984;
continue;
} else {
var vec__78669_78985 = cljs.core.first(seq__78643_78978__$1);
var index_name_78986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78669_78985,(0),null);
var options_78987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78669_78985,(1),null);
store_78961.createIndex(index_name_78986,index_name_78986,cljs.core.clj__GT_js(options_78987));


var G__78988 = cljs.core.next(seq__78643_78978__$1);
var G__78989 = null;
var G__78990 = (0);
var G__78991 = (0);
seq__78643_78964 = G__78988;
chunk__78644_78965 = G__78989;
count__78645_78966 = G__78990;
i__78646_78967 = G__78991;
continue;
}
} else {
}
}
break;
}


var G__78993 = seq__78526_78947;
var G__78994 = chunk__78528_78948;
var G__78995 = count__78529_78949;
var G__78996 = (i__78530_78950 + (1));
seq__78526_78947 = G__78993;
chunk__78528_78948 = G__78994;
count__78529_78949 = G__78995;
i__78530_78950 = G__78996;
continue;
} else {
var temp__5720__auto___78997 = cljs.core.seq(seq__78526_78947);
if(temp__5720__auto___78997){
var seq__78526_78998__$1 = temp__5720__auto___78997;
if(cljs.core.chunked_seq_QMARK_(seq__78526_78998__$1)){
var c__4550__auto___79000 = cljs.core.chunk_first(seq__78526_78998__$1);
var G__79001 = cljs.core.chunk_rest(seq__78526_78998__$1);
var G__79002 = c__4550__auto___79000;
var G__79003 = cljs.core.count(c__4550__auto___79000);
var G__79004 = (0);
seq__78526_78947 = G__79001;
chunk__78528_78948 = G__79002;
count__78529_78949 = G__79003;
i__78530_78950 = G__79004;
continue;
} else {
var vec__78682_79006 = cljs.core.first(seq__78526_78998__$1);
var store_name_79007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78682_79006,(0),null);
var map__78685_79008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78682_79006,(1),null);
var map__78685_79009__$1 = (((((!((map__78685_79008 == null))))?(((((map__78685_79008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78685_79008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78685_79008):map__78685_79008);
var key_79010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78685_79009__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_79011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78685_79009__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__78689_79014 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_79010);
var map__78689_79015__$1 = (((((!((map__78689_79014 == null))))?(((((map__78689_79014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78689_79014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78689_79014):map__78689_79014);
var path_79016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78689_79015__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_79017 = db.createObjectStore(store_name_79007,(cljs.core.truth_(path_79016)?({"keyPath": path_79016}):({"autoIncrement": true})
));
var seq__78696_79020 = cljs.core.seq(indexes_79011);
var chunk__78697_79021 = null;
var count__78698_79022 = (0);
var i__78699_79023 = (0);
while(true){
if((i__78699_79023 < count__78698_79022)){
var vec__78717_79024 = chunk__78697_79021.cljs$core$IIndexed$_nth$arity$2(null,i__78699_79023);
var index_name_79025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78717_79024,(0),null);
var options_79026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78717_79024,(1),null);
store_79017.createIndex(index_name_79025,index_name_79025,cljs.core.clj__GT_js(options_79026));


var G__79028 = seq__78696_79020;
var G__79029 = chunk__78697_79021;
var G__79030 = count__78698_79022;
var G__79031 = (i__78699_79023 + (1));
seq__78696_79020 = G__79028;
chunk__78697_79021 = G__79029;
count__78698_79022 = G__79030;
i__78699_79023 = G__79031;
continue;
} else {
var temp__5720__auto___79033__$1 = cljs.core.seq(seq__78696_79020);
if(temp__5720__auto___79033__$1){
var seq__78696_79036__$1 = temp__5720__auto___79033__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78696_79036__$1)){
var c__4550__auto___79037 = cljs.core.chunk_first(seq__78696_79036__$1);
var G__79038 = cljs.core.chunk_rest(seq__78696_79036__$1);
var G__79039 = c__4550__auto___79037;
var G__79040 = cljs.core.count(c__4550__auto___79037);
var G__79041 = (0);
seq__78696_79020 = G__79038;
chunk__78697_79021 = G__79039;
count__78698_79022 = G__79040;
i__78699_79023 = G__79041;
continue;
} else {
var vec__78720_79043 = cljs.core.first(seq__78696_79036__$1);
var index_name_79044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78720_79043,(0),null);
var options_79045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78720_79043,(1),null);
store_79017.createIndex(index_name_79044,index_name_79044,cljs.core.clj__GT_js(options_79045));


var G__79047 = cljs.core.next(seq__78696_79036__$1);
var G__79048 = null;
var G__79049 = (0);
var G__79050 = (0);
seq__78696_79020 = G__79047;
chunk__78697_79021 = G__79048;
count__78698_79022 = G__79049;
i__78699_79023 = G__79050;
continue;
}
} else {
}
}
break;
}


var G__79051 = cljs.core.next(seq__78526_78998__$1);
var G__79052 = null;
var G__79053 = (0);
var G__79054 = (0);
seq__78526_78947 = G__79051;
chunk__78528_78948 = G__79052;
count__78529_78949 = G__79053;
i__78530_78950 = G__79054;
continue;
}
} else {
}
}
break;
}


var G__79055 = seq__78075;
var G__79056 = chunk__78076;
var G__79057 = count__78077;
var G__79058 = (i__78078 + (1));
seq__78075 = G__79055;
chunk__78076 = G__79056;
count__78077 = G__79057;
i__78078 = G__79058;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__78075);
if(temp__5720__auto__){
var seq__78075__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__78075__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__78075__$1);
var G__79060 = cljs.core.chunk_rest(seq__78075__$1);
var G__79061 = c__4550__auto__;
var G__79062 = cljs.core.count(c__4550__auto__);
var G__79063 = (0);
seq__78075 = G__79060;
chunk__78076 = G__79061;
count__78077 = G__79062;
i__78078 = G__79063;
continue;
} else {
var map__78734 = cljs.core.first(seq__78075__$1);
var map__78734__$1 = (((((!((map__78734 == null))))?(((((map__78734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78734):map__78734);
var stores = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78734__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115));
var seq__78739_79066 = cljs.core.seq(stores);
var chunk__78741_79067 = null;
var count__78742_79068 = (0);
var i__78743_79069 = (0);
while(true){
if((i__78743_79069 < count__78742_79068)){
var vec__78822_79070 = chunk__78741_79067.cljs$core$IIndexed$_nth$arity$2(null,i__78743_79069);
var store_name_79071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78822_79070,(0),null);
var map__78825_79072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78822_79070,(1),null);
var map__78825_79073__$1 = (((((!((map__78825_79072 == null))))?(((((map__78825_79072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78825_79072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78825_79072):map__78825_79072);
var key_79074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78825_79073__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_79075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78825_79073__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__78831_79076 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_79074);
var map__78831_79077__$1 = (((((!((map__78831_79076 == null))))?(((((map__78831_79076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78831_79076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78831_79076):map__78831_79076);
var path_79078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78831_79077__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_79079 = db.createObjectStore(store_name_79071,(cljs.core.truth_(path_79078)?({"keyPath": path_79078}):({"autoIncrement": true})
));
var seq__78836_79080 = cljs.core.seq(indexes_79075);
var chunk__78837_79081 = null;
var count__78838_79082 = (0);
var i__78839_79083 = (0);
while(true){
if((i__78839_79083 < count__78838_79082)){
var vec__78851_79084 = chunk__78837_79081.cljs$core$IIndexed$_nth$arity$2(null,i__78839_79083);
var index_name_79085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78851_79084,(0),null);
var options_79086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78851_79084,(1),null);
store_79079.createIndex(index_name_79085,index_name_79085,cljs.core.clj__GT_js(options_79086));


var G__79089 = seq__78836_79080;
var G__79090 = chunk__78837_79081;
var G__79091 = count__78838_79082;
var G__79092 = (i__78839_79083 + (1));
seq__78836_79080 = G__79089;
chunk__78837_79081 = G__79090;
count__78838_79082 = G__79091;
i__78839_79083 = G__79092;
continue;
} else {
var temp__5720__auto___79093__$1 = cljs.core.seq(seq__78836_79080);
if(temp__5720__auto___79093__$1){
var seq__78836_79094__$1 = temp__5720__auto___79093__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78836_79094__$1)){
var c__4550__auto___79095 = cljs.core.chunk_first(seq__78836_79094__$1);
var G__79096 = cljs.core.chunk_rest(seq__78836_79094__$1);
var G__79097 = c__4550__auto___79095;
var G__79098 = cljs.core.count(c__4550__auto___79095);
var G__79099 = (0);
seq__78836_79080 = G__79096;
chunk__78837_79081 = G__79097;
count__78838_79082 = G__79098;
i__78839_79083 = G__79099;
continue;
} else {
var vec__78856_79100 = cljs.core.first(seq__78836_79094__$1);
var index_name_79101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78856_79100,(0),null);
var options_79102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78856_79100,(1),null);
store_79079.createIndex(index_name_79101,index_name_79101,cljs.core.clj__GT_js(options_79102));


var G__79103 = cljs.core.next(seq__78836_79094__$1);
var G__79104 = null;
var G__79105 = (0);
var G__79106 = (0);
seq__78836_79080 = G__79103;
chunk__78837_79081 = G__79104;
count__78838_79082 = G__79105;
i__78839_79083 = G__79106;
continue;
}
} else {
}
}
break;
}


var G__79108 = seq__78739_79066;
var G__79109 = chunk__78741_79067;
var G__79110 = count__78742_79068;
var G__79111 = (i__78743_79069 + (1));
seq__78739_79066 = G__79108;
chunk__78741_79067 = G__79109;
count__78742_79068 = G__79110;
i__78743_79069 = G__79111;
continue;
} else {
var temp__5720__auto___79112__$1 = cljs.core.seq(seq__78739_79066);
if(temp__5720__auto___79112__$1){
var seq__78739_79114__$1 = temp__5720__auto___79112__$1;
if(cljs.core.chunked_seq_QMARK_(seq__78739_79114__$1)){
var c__4550__auto___79115 = cljs.core.chunk_first(seq__78739_79114__$1);
var G__79116 = cljs.core.chunk_rest(seq__78739_79114__$1);
var G__79117 = c__4550__auto___79115;
var G__79118 = cljs.core.count(c__4550__auto___79115);
var G__79119 = (0);
seq__78739_79066 = G__79116;
chunk__78741_79067 = G__79117;
count__78742_79068 = G__79118;
i__78743_79069 = G__79119;
continue;
} else {
var vec__78862_79120 = cljs.core.first(seq__78739_79114__$1);
var store_name_79121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78862_79120,(0),null);
var map__78865_79122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78862_79120,(1),null);
var map__78865_79123__$1 = (((((!((map__78865_79122 == null))))?(((((map__78865_79122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78865_79122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78865_79122):map__78865_79122);
var key_79124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78865_79123__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599));
var indexes_79125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78865_79123__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357));
var map__78868_79127 = cljs.spec.alpha.conform(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),key_79124);
var map__78868_79128__$1 = (((((!((map__78868_79127 == null))))?(((((map__78868_79127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78868_79127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78868_79127):map__78868_79127);
var path_79129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78868_79128__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var store_79130 = db.createObjectStore(store_name_79121,(cljs.core.truth_(path_79129)?({"keyPath": path_79129}):({"autoIncrement": true})
));
var seq__78871_79131 = cljs.core.seq(indexes_79125);
var chunk__78872_79132 = null;
var count__78873_79133 = (0);
var i__78874_79134 = (0);
while(true){
if((i__78874_79134 < count__78873_79133)){
var vec__78884_79135 = chunk__78872_79132.cljs$core$IIndexed$_nth$arity$2(null,i__78874_79134);
var index_name_79136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78884_79135,(0),null);
var options_79137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78884_79135,(1),null);
store_79130.createIndex(index_name_79136,index_name_79136,cljs.core.clj__GT_js(options_79137));


var G__79139 = seq__78871_79131;
var G__79140 = chunk__78872_79132;
var G__79141 = count__78873_79133;
var G__79142 = (i__78874_79134 + (1));
seq__78871_79131 = G__79139;
chunk__78872_79132 = G__79140;
count__78873_79133 = G__79141;
i__78874_79134 = G__79142;
continue;
} else {
var temp__5720__auto___79143__$2 = cljs.core.seq(seq__78871_79131);
if(temp__5720__auto___79143__$2){
var seq__78871_79144__$1 = temp__5720__auto___79143__$2;
if(cljs.core.chunked_seq_QMARK_(seq__78871_79144__$1)){
var c__4550__auto___79146 = cljs.core.chunk_first(seq__78871_79144__$1);
var G__79148 = cljs.core.chunk_rest(seq__78871_79144__$1);
var G__79149 = c__4550__auto___79146;
var G__79150 = cljs.core.count(c__4550__auto___79146);
var G__79151 = (0);
seq__78871_79131 = G__79148;
chunk__78872_79132 = G__79149;
count__78873_79133 = G__79150;
i__78874_79134 = G__79151;
continue;
} else {
var vec__78889_79152 = cljs.core.first(seq__78871_79144__$1);
var index_name_79153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78889_79152,(0),null);
var options_79154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78889_79152,(1),null);
store_79130.createIndex(index_name_79153,index_name_79153,cljs.core.clj__GT_js(options_79154));


var G__79156 = cljs.core.next(seq__78871_79144__$1);
var G__79157 = null;
var G__79158 = (0);
var G__79159 = (0);
seq__78871_79131 = G__79156;
chunk__78872_79132 = G__79157;
count__78873_79133 = G__79158;
i__78874_79134 = G__79159;
continue;
}
} else {
}
}
break;
}


var G__79160 = cljs.core.next(seq__78739_79114__$1);
var G__79161 = null;
var G__79162 = (0);
var G__79163 = (0);
seq__78739_79066 = G__79160;
chunk__78741_79067 = G__79161;
count__78742_79068 = G__79162;
i__78743_79069 = G__79163;
continue;
}
} else {
}
}
break;
}


var G__79166 = cljs.core.next(seq__78075__$1);
var G__79167 = null;
var G__79168 = (0);
var G__79169 = (0);
seq__78075 = G__79166;
chunk__78076 = G__79167;
count__78077 = G__79168;
i__78078 = G__79169;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__78068_78943,c,open_req,map__78060,map__78060__$1,db_name,migrations))
);


return c;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.pathom.book.util.indexeddb","setup-db","com.wsscode.pathom.book.util.indexeddb/setup-db",-961925766,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__78898){
return cljs.core.map_QMARK_(G__78898);
}),(function (G__78898){
return cljs.core.contains_QMARK_(G__78898,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957));
}),(function (G__78898){
return cljs.core.contains_QMARK_(G__78898,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654));
})], null),(function (G__78898){
return ((cljs.core.map_QMARK_(G__78898)) && (cljs.core.contains_QMARK_(G__78898,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))) && (cljs.core.contains_QMARK_(G__78898,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)))], null),null]))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"settings","settings",1556144875),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654)], null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),null,null,null));
com.wsscode.pathom.book.util.indexeddb.create_BANG_ = (function com$wsscode$pathom$book$util$indexeddb$create_BANG_(p__78922,entity){
var map__78923 = p__78922;
var map__78923__$1 = (((((!((map__78923 == null))))?(((((map__78923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78923):map__78923);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78923__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78923__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readwrite");
var store = tx.objectStore(store_name);
var req = store.add(cljs.core.clj__GT_js(entity));
goog.object.set(req,"onsuccess",((function (c,tx,store,req,map__78923,map__78923__$1,db,store_name){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,com.wsscode.pathom.book.util.indexeddb.event_result(e));
});})(c,tx,store,req,map__78923,map__78923__$1,db,store_name))
);

return c;
});
com.wsscode.pathom.book.util.indexeddb.convert_back = (function com$wsscode$pathom$book$util$indexeddb$convert_back(x){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
com.wsscode.pathom.book.util.indexeddb.scan_store = (function com$wsscode$pathom$book$util$indexeddb$scan_store(p__78925){
var map__78926 = p__78925;
var map__78926__$1 = (((((!((map__78926 == null))))?(((((map__78926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78926):map__78926);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78926__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78926__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((50));
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
var G__78929_79186 = store.openCursor();
goog.object.set(G__78929_79186,"onsuccess",((function (G__78929_79186,c,tx,store,map__78926,map__78926__$1,db,store_name){
return (function (e){
var temp__5718__auto__ = com.wsscode.pathom.book.util.indexeddb.event_result(e);
if(cljs.core.truth_(temp__5718__auto__)){
var cursor = temp__5718__auto__;
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(com.wsscode.pathom.book.util.indexeddb.convert_back(goog.object.get(cursor,"value")),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),goog.object.get(cursor,"key")));

return cursor.continue();
} else {
return cljs.core.async.close_BANG_(c);
}
});})(G__78929_79186,c,tx,store,map__78926,map__78926__$1,db,store_name))
);


return c;
});
com.wsscode.pathom.book.util.indexeddb.read_object = (function com$wsscode$pathom$book$util$indexeddb$read_object(p__78932,id){
var map__78933 = p__78932;
var map__78933__$1 = (((((!((map__78933 == null))))?(((((map__78933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78933):map__78933);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78933__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475));
var store_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78933__$1,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318));
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var tx = db.transaction([store_name],"readonly");
var store = tx.objectStore(store_name);
goog.object.set(store.get(id),"onsuccess",((function (c,tx,store,map__78933,map__78933__$1,db,store_name){
return (function (p1__78931_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,(function (){var or__4131__auto__ = (function (){var G__78937 = com.wsscode.pathom.book.util.indexeddb.convert_back(com.wsscode.pathom.book.util.indexeddb.event_result(p1__78931_SHARP_));
if((G__78937 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78937,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599),id);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","not-found","com.wsscode.pathom.book.util.indexeddb/not-found",-1009867320);
}
})());
});})(c,tx,store,map__78933,map__78933__$1,db,store_name))
);

return c;
});

//# sourceMappingURL=com.wsscode.pathom.book.util.indexeddb.js.map
