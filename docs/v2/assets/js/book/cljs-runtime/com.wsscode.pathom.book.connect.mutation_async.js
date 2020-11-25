goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__65109){
var vec__65118 = p__65109;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65118,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__65200,user){
var map__65208 = p__65200;
var map__65208__$1 = (((((!((map__65208 == null))))?(((((map__65208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65208):map__65208);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65208__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65208,map__65208__$1,db){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65208,map__65208__$1,db){
return (function (state_65292){
var state_val_65293 = (state_65292[(1)]);
if((state_val_65293 === (1))){
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65292__$1,(2),db);
} else {
if((state_val_65293 === (2))){
var inst_65238 = (state_65292[(2)]);
var inst_65239 = com.wsscode.common.async_cljs.throw_err(inst_65238);
var inst_65240 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_65241 = [inst_65239,"users"];
var inst_65242 = cljs.core.PersistentHashMap.fromArrays(inst_65240,inst_65241);
var inst_65249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65251 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_65252 = (new cljs.core.PersistentVector(null,2,(5),inst_65249,inst_65251,null));
var inst_65253 = cljs.core.select_keys(user,inst_65252);
var inst_65257 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_65261 = (new Date());
var inst_65262 = [inst_65261];
var inst_65264 = cljs.core.PersistentHashMap.fromArrays(inst_65257,inst_65262);
var inst_65265 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65253,inst_65264], 0));
var inst_65266 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_65242,inst_65265);
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65292__$1,(3),inst_65266);
} else {
if((state_val_65293 === (3))){
var inst_65268 = (state_65292[(2)]);
var inst_65269 = com.wsscode.common.async_cljs.throw_err(inst_65268);
var inst_65273 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_65274 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_65275 = [inst_65274];
var inst_65276 = [inst_65269];
var inst_65278 = cljs.core.PersistentHashMap.fromArrays(inst_65275,inst_65276);
var inst_65279 = [inst_65269,inst_65278];
var inst_65280 = cljs.core.PersistentHashMap.fromArrays(inst_65273,inst_65279);
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65292__$1,inst_65280);
} else {
return null;
}
}
}
});})(c__48839__auto__,map__65208,map__65208__$1,db))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65208,map__65208__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto____0 = (function (){
var statearr_65345 = [null,null,null,null,null,null,null];
(statearr_65345[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto__);

(statearr_65345[(1)] = (1));

return statearr_65345;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto____1 = (function (state_65292){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65292);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65349){var ex__48143__auto__ = e65349;
var statearr_65351_65488 = state_65292;
(statearr_65351_65488[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65292[(4)]))){
var statearr_65352_65495 = state_65292;
(statearr_65352_65495[(1)] = cljs.core.first((state_65292[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65513 = state_65292;
state_65292 = G__65513;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto__ = function(state_65292){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto____1.call(this,state_65292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65208,map__65208__$1,db))
})();
var state__48841__auto__ = (function (){var statearr_65373 = f__48840__auto__();
(statearr_65373[(6)] = c__48839__auto__);

return statearr_65373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65208,map__65208__$1,db))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),(function (){var G__65377 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null);
return G__65377;

})(),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__65380,p__65381){
var map__65383 = p__65380;
var map__65383__$1 = (((((!((map__65383 == null))))?(((((map__65383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65383):map__65383);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65383__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__65384 = p__65381;
var map__65384__$1 = (((((!((map__65384 == null))))?(((((map__65384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65384):map__65384);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65384__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65383,map__65383__$1,db,map__65384,map__65384__$1,id){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65383,map__65383__$1,db,map__65384,map__65384__$1,id){
return (function (state_65417){
var state_val_65419 = (state_65417[(1)]);
if((state_val_65419 === (1))){
var state_65417__$1 = state_65417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65417__$1,(2),db);
} else {
if((state_val_65419 === (2))){
var inst_65402 = (state_65417[(2)]);
var inst_65403 = com.wsscode.common.async_cljs.throw_err(inst_65402);
var inst_65407 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_65409 = [inst_65403,"users"];
var inst_65410 = cljs.core.PersistentHashMap.fromArrays(inst_65407,inst_65409);
var inst_65411 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_65410,id);
var state_65417__$1 = state_65417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65417__$1,(3),inst_65411);
} else {
if((state_val_65419 === (3))){
var inst_65413 = (state_65417[(2)]);
var inst_65414 = com.wsscode.common.async_cljs.throw_err(inst_65413);
var inst_65415 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_65414);
var state_65417__$1 = state_65417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65417__$1,inst_65415);
} else {
return null;
}
}
}
});})(c__48839__auto__,map__65383,map__65383__$1,db,map__65384,map__65384__$1,id))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65383,map__65383__$1,db,map__65384,map__65384__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto____0 = (function (){
var statearr_65433 = [null,null,null,null,null,null,null];
(statearr_65433[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto__);

(statearr_65433[(1)] = (1));

return statearr_65433;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto____1 = (function (state_65417){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65417);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65435){var ex__48143__auto__ = e65435;
var statearr_65437_65526 = state_65417;
(statearr_65437_65526[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65417[(4)]))){
var statearr_65438_65528 = state_65417;
(statearr_65438_65528[(1)] = cljs.core.first((state_65417[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65532 = state_65417;
state_65417 = G__65532;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto__ = function(state_65417){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto____1.call(this,state_65417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65383,map__65383__$1,db,map__65384,map__65384__$1,id))
})();
var state__48841__auto__ = (function (){var statearr_65439 = f__48840__auto__();
(statearr_65439[(6)] = c__48839__auto__);

return statearr_65439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65383,map__65383__$1,db,map__65384,map__65384__$1,id))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),(function (){var G__65443 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null);
return G__65443;

})(),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__65446,_){
var map__65447 = p__65446;
var map__65447__$1 = (((((!((map__65447 == null))))?(((((map__65447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65447):map__65447);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65447__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__65447,map__65447__$1,db){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__65447,map__65447__$1,db){
return (function (state_65466){
var state_val_65467 = (state_65466[(1)]);
if((state_val_65467 === (1))){
var state_65466__$1 = state_65466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65466__$1,(2),db);
} else {
if((state_val_65467 === (2))){
var inst_65450 = (state_65466[(2)]);
var inst_65451 = com.wsscode.common.async_cljs.throw_err(inst_65450);
var inst_65452 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_65453 = cljs.core.PersistentVector.EMPTY;
var inst_65454 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_65455 = [inst_65451,"users"];
var inst_65456 = cljs.core.PersistentHashMap.fromArrays(inst_65454,inst_65455);
var inst_65457 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_65456);
var inst_65458 = cljs.core.async.into(inst_65453,inst_65457);
var state_65466__$1 = (function (){var statearr_65470 = state_65466;
(statearr_65470[(7)] = inst_65452);

return statearr_65470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65466__$1,(3),inst_65458);
} else {
if((state_val_65467 === (3))){
var inst_65452 = (state_65466[(7)]);
var inst_65460 = (state_65466[(2)]);
var inst_65461 = com.wsscode.common.async_cljs.throw_err(inst_65460);
var inst_65462 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_65461);
var inst_65463 = [inst_65462];
var inst_65464 = cljs.core.PersistentHashMap.fromArrays(inst_65452,inst_65463);
var state_65466__$1 = state_65466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65466__$1,inst_65464);
} else {
return null;
}
}
}
});})(c__48839__auto__,map__65447,map__65447__$1,db))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__65447,map__65447__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto____0 = (function (){
var statearr_65474 = [null,null,null,null,null,null,null,null];
(statearr_65474[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto__);

(statearr_65474[(1)] = (1));

return statearr_65474;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto____1 = (function (state_65466){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_65466);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e65475){var ex__48143__auto__ = e65475;
var statearr_65476_65562 = state_65466;
(statearr_65476_65562[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_65466[(4)]))){
var statearr_65477_65563 = state_65466;
(statearr_65477_65563[(1)] = cljs.core.first((state_65466[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65565 = state_65466;
state_65466 = G__65565;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto__ = function(state_65466){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto____1.call(this,state_65466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__65447,map__65447__$1,db))
})();
var state__48841__auto__ = (function (){var statearr_65479 = f__48840__auto__();
(statearr_65479[(6)] = c__48839__auto__);

return statearr_65479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__65447,map__65447__$1,db))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
