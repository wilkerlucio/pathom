goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__72919){
var vec__72932 = p__72919;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__72983,user){
var map__72985 = p__72983;
var map__72985__$1 = (((((!((map__72985 == null))))?(((((map__72985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72985):map__72985);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72985__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__72985,map__72985__$1,db){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__72985,map__72985__$1,db){
return (function (state_73036){
var state_val_73037 = (state_73036[(1)]);
if((state_val_73037 === (1))){
var state_73036__$1 = state_73036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73036__$1,(2),db);
} else {
if((state_val_73037 === (2))){
var inst_72996 = (state_73036[(2)]);
var inst_72997 = com.wsscode.common.async_cljs.throw_err(inst_72996);
var inst_73001 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_73002 = [inst_72997,"users"];
var inst_73003 = cljs.core.PersistentHashMap.fromArrays(inst_73001,inst_73002);
var inst_73005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73006 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_73007 = (new cljs.core.PersistentVector(null,2,(5),inst_73005,inst_73006,null));
var inst_73008 = cljs.core.select_keys(user,inst_73007);
var inst_73012 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_73013 = (new Date());
var inst_73014 = [inst_73013];
var inst_73015 = cljs.core.PersistentHashMap.fromArrays(inst_73012,inst_73014);
var inst_73016 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_73008,inst_73015], 0));
var inst_73017 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_73003,inst_73016);
var state_73036__$1 = state_73036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73036__$1,(3),inst_73017);
} else {
if((state_val_73037 === (3))){
var inst_73019 = (state_73036[(2)]);
var inst_73020 = com.wsscode.common.async_cljs.throw_err(inst_73019);
var inst_73023 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_73025 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_73026 = [inst_73025];
var inst_73028 = [inst_73020];
var inst_73030 = cljs.core.PersistentHashMap.fromArrays(inst_73026,inst_73028);
var inst_73031 = [inst_73020,inst_73030];
var inst_73032 = cljs.core.PersistentHashMap.fromArrays(inst_73023,inst_73031);
var state_73036__$1 = state_73036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73036__$1,inst_73032);
} else {
return null;
}
}
}
});})(c__45808__auto__,map__72985,map__72985__$1,db))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__72985,map__72985__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto____0 = (function (){
var statearr_73065 = [null,null,null,null,null,null,null];
(statearr_73065[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto__);

(statearr_73065[(1)] = (1));

return statearr_73065;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto____1 = (function (state_73036){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73036);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73067){if((e73067 instanceof Object)){
var ex__45529__auto__ = e73067;
var statearr_73068_73156 = state_73036;
(statearr_73068_73156[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73157 = state_73036;
state_73036 = G__73157;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto__ = function(state_73036){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto____1.call(this,state_73036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__72985,map__72985__$1,db))
})();
var state__45810__auto__ = (function (){var statearr_73073 = f__45809__auto__();
(statearr_73073[(6)] = c__45808__auto__);

return statearr_73073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__72985,map__72985__$1,db))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),(function (){var G__73079 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null);
return G__73079;

})(),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__73083,p__73084){
var map__73085 = p__73083;
var map__73085__$1 = (((((!((map__73085 == null))))?(((((map__73085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73085):map__73085);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73085__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__73086 = p__73084;
var map__73086__$1 = (((((!((map__73086 == null))))?(((((map__73086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73086):map__73086);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73086__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__73085,map__73085__$1,db,map__73086,map__73086__$1,id){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__73085,map__73085__$1,db,map__73086,map__73086__$1,id){
return (function (state_73110){
var state_val_73112 = (state_73110[(1)]);
if((state_val_73112 === (1))){
var state_73110__$1 = state_73110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73110__$1,(2),db);
} else {
if((state_val_73112 === (2))){
var inst_73099 = (state_73110[(2)]);
var inst_73100 = com.wsscode.common.async_cljs.throw_err(inst_73099);
var inst_73101 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_73102 = [inst_73100,"users"];
var inst_73103 = cljs.core.PersistentHashMap.fromArrays(inst_73101,inst_73102);
var inst_73104 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_73103,id);
var state_73110__$1 = state_73110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73110__$1,(3),inst_73104);
} else {
if((state_val_73112 === (3))){
var inst_73106 = (state_73110[(2)]);
var inst_73107 = com.wsscode.common.async_cljs.throw_err(inst_73106);
var inst_73108 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_73107);
var state_73110__$1 = state_73110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73110__$1,inst_73108);
} else {
return null;
}
}
}
});})(c__45808__auto__,map__73085,map__73085__$1,db,map__73086,map__73086__$1,id))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__73085,map__73085__$1,db,map__73086,map__73086__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto____0 = (function (){
var statearr_73115 = [null,null,null,null,null,null,null];
(statearr_73115[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto__);

(statearr_73115[(1)] = (1));

return statearr_73115;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto____1 = (function (state_73110){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73110);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73116){if((e73116 instanceof Object)){
var ex__45529__auto__ = e73116;
var statearr_73117_73181 = state_73110;
(statearr_73117_73181[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73116;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73182 = state_73110;
state_73110 = G__73182;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto__ = function(state_73110){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto____1.call(this,state_73110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__73085,map__73085__$1,db,map__73086,map__73086__$1,id))
})();
var state__45810__auto__ = (function (){var statearr_73119 = f__45809__auto__();
(statearr_73119[(6)] = c__45808__auto__);

return statearr_73119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__73085,map__73085__$1,db,map__73086,map__73086__$1,id))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),(function (){var G__73121 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null);
return G__73121;

})(),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__73122,_){
var map__73123 = p__73122;
var map__73123__$1 = (((((!((map__73123 == null))))?(((((map__73123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73123):map__73123);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73123__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__73123,map__73123__$1,db){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__73123,map__73123__$1,db){
return (function (state_73144){
var state_val_73145 = (state_73144[(1)]);
if((state_val_73145 === (1))){
var state_73144__$1 = state_73144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73144__$1,(2),db);
} else {
if((state_val_73145 === (2))){
var inst_73128 = (state_73144[(2)]);
var inst_73129 = com.wsscode.common.async_cljs.throw_err(inst_73128);
var inst_73130 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_73131 = cljs.core.PersistentVector.EMPTY;
var inst_73132 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_73133 = [inst_73129,"users"];
var inst_73134 = cljs.core.PersistentHashMap.fromArrays(inst_73132,inst_73133);
var inst_73135 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_73134);
var inst_73136 = cljs.core.async.into(inst_73131,inst_73135);
var state_73144__$1 = (function (){var statearr_73148 = state_73144;
(statearr_73148[(7)] = inst_73130);

return statearr_73148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73144__$1,(3),inst_73136);
} else {
if((state_val_73145 === (3))){
var inst_73130 = (state_73144[(7)]);
var inst_73138 = (state_73144[(2)]);
var inst_73139 = com.wsscode.common.async_cljs.throw_err(inst_73138);
var inst_73140 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_73139);
var inst_73141 = [inst_73140];
var inst_73142 = cljs.core.PersistentHashMap.fromArrays(inst_73130,inst_73141);
var state_73144__$1 = state_73144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73144__$1,inst_73142);
} else {
return null;
}
}
}
});})(c__45808__auto__,map__73123,map__73123__$1,db))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__73123,map__73123__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto____0 = (function (){
var statearr_73150 = [null,null,null,null,null,null,null,null];
(statearr_73150[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto__);

(statearr_73150[(1)] = (1));

return statearr_73150;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto____1 = (function (state_73144){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73144);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73152){if((e73152 instanceof Object)){
var ex__45529__auto__ = e73152;
var statearr_73154_73190 = state_73144;
(statearr_73154_73190[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73204 = state_73144;
state_73144 = G__73204;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto__ = function(state_73144){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto____1.call(this,state_73144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__73123,map__73123__$1,db))
})();
var state__45810__auto__ = (function (){var statearr_73155 = f__45809__auto__();
(statearr_73155[(6)] = c__45808__auto__);

return statearr_73155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__73123,map__73123__$1,db))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
