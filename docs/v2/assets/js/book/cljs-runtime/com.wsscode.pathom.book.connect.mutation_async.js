goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__93307){
var vec__93322 = p__93307;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93322,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__93371,user){
var map__93375 = p__93371;
var map__93375__$1 = (((((!((map__93375 == null))))?(((((map__93375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93375):map__93375);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93375__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93375,map__93375__$1,db){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93375,map__93375__$1,db){
return (function (state_93475){
var state_val_93477 = (state_93475[(1)]);
if((state_val_93477 === (1))){
var state_93475__$1 = state_93475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93475__$1,(2),db);
} else {
if((state_val_93477 === (2))){
var inst_93423 = (state_93475[(2)]);
var inst_93424 = com.wsscode.common.async_cljs.throw_err(inst_93423);
var inst_93428 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_93431 = [inst_93424,"users"];
var inst_93433 = cljs.core.PersistentHashMap.fromArrays(inst_93428,inst_93431);
var inst_93440 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_93442 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_93443 = (new cljs.core.PersistentVector(null,2,(5),inst_93440,inst_93442,null));
var inst_93445 = cljs.core.select_keys(user,inst_93443);
var inst_93452 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_93455 = (new Date());
var inst_93456 = [inst_93455];
var inst_93457 = cljs.core.PersistentHashMap.fromArrays(inst_93452,inst_93456);
var inst_93458 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_93445,inst_93457], 0));
var inst_93459 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_93433,inst_93458);
var state_93475__$1 = state_93475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93475__$1,(3),inst_93459);
} else {
if((state_val_93477 === (3))){
var inst_93461 = (state_93475[(2)]);
var inst_93462 = com.wsscode.common.async_cljs.throw_err(inst_93461);
var inst_93463 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_93464 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_93465 = [inst_93464];
var inst_93467 = [inst_93462];
var inst_93468 = cljs.core.PersistentHashMap.fromArrays(inst_93465,inst_93467);
var inst_93469 = [inst_93462,inst_93468];
var inst_93470 = cljs.core.PersistentHashMap.fromArrays(inst_93463,inst_93469);
var state_93475__$1 = state_93475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93475__$1,inst_93470);
} else {
return null;
}
}
}
});})(c__47946__auto__,map__93375,map__93375__$1,db))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93375,map__93375__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____0 = (function (){
var statearr_93536 = [null,null,null,null,null,null,null];
(statearr_93536[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__);

(statearr_93536[(1)] = (1));

return statearr_93536;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____1 = (function (state_93475){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93475);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93553){if((e93553 instanceof Object)){
var ex__47667__auto__ = e93553;
var statearr_93555_93692 = state_93475;
(statearr_93555_93692[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93693 = state_93475;
state_93475 = G__93693;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__ = function(state_93475){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____1.call(this,state_93475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93375,map__93375__$1,db))
})();
var state__47948__auto__ = (function (){var statearr_93563 = f__47947__auto__();
(statearr_93563[(6)] = c__47946__auto__);

return statearr_93563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93375,map__93375__$1,db))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),(function (){var G__93570 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null);
return G__93570;

})(),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__93573,p__93574){
var map__93577 = p__93573;
var map__93577__$1 = (((((!((map__93577 == null))))?(((((map__93577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93577):map__93577);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93577__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__93578 = p__93574;
var map__93578__$1 = (((((!((map__93578 == null))))?(((((map__93578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93578):map__93578);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93578__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93577,map__93577__$1,db,map__93578,map__93578__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93577,map__93577__$1,db,map__93578,map__93578__$1,id){
return (function (state_93602){
var state_val_93603 = (state_93602[(1)]);
if((state_val_93603 === (1))){
var state_93602__$1 = state_93602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93602__$1,(2),db);
} else {
if((state_val_93603 === (2))){
var inst_93591 = (state_93602[(2)]);
var inst_93592 = com.wsscode.common.async_cljs.throw_err(inst_93591);
var inst_93593 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_93594 = [inst_93592,"users"];
var inst_93595 = cljs.core.PersistentHashMap.fromArrays(inst_93593,inst_93594);
var inst_93596 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_93595,id);
var state_93602__$1 = state_93602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93602__$1,(3),inst_93596);
} else {
if((state_val_93603 === (3))){
var inst_93598 = (state_93602[(2)]);
var inst_93599 = com.wsscode.common.async_cljs.throw_err(inst_93598);
var inst_93600 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_93599);
var state_93602__$1 = state_93602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93602__$1,inst_93600);
} else {
return null;
}
}
}
});})(c__47946__auto__,map__93577,map__93577__$1,db,map__93578,map__93578__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93577,map__93577__$1,db,map__93578,map__93578__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____0 = (function (){
var statearr_93612 = [null,null,null,null,null,null,null];
(statearr_93612[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__);

(statearr_93612[(1)] = (1));

return statearr_93612;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____1 = (function (state_93602){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93602);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93615){if((e93615 instanceof Object)){
var ex__47667__auto__ = e93615;
var statearr_93616_93716 = state_93602;
(statearr_93616_93716[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93718 = state_93602;
state_93602 = G__93718;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__ = function(state_93602){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____1.call(this,state_93602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93577,map__93577__$1,db,map__93578,map__93578__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_93621 = f__47947__auto__();
(statearr_93621[(6)] = c__47946__auto__);

return statearr_93621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93577,map__93577__$1,db,map__93578,map__93578__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),(function (){var G__93626 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null);
return G__93626;

})(),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__93629,_){
var map__93630 = p__93629;
var map__93630__$1 = (((((!((map__93630 == null))))?(((((map__93630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93630):map__93630);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93630__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93630,map__93630__$1,db){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93630,map__93630__$1,db){
return (function (state_93652){
var state_val_93653 = (state_93652[(1)]);
if((state_val_93653 === (1))){
var state_93652__$1 = state_93652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93652__$1,(2),db);
} else {
if((state_val_93653 === (2))){
var inst_93635 = (state_93652[(2)]);
var inst_93636 = com.wsscode.common.async_cljs.throw_err(inst_93635);
var inst_93637 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_93638 = cljs.core.PersistentVector.EMPTY;
var inst_93639 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_93640 = [inst_93636,"users"];
var inst_93641 = cljs.core.PersistentHashMap.fromArrays(inst_93639,inst_93640);
var inst_93643 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_93641);
var inst_93644 = cljs.core.async.into(inst_93638,inst_93643);
var state_93652__$1 = (function (){var statearr_93658 = state_93652;
(statearr_93658[(7)] = inst_93637);

return statearr_93658;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93652__$1,(3),inst_93644);
} else {
if((state_val_93653 === (3))){
var inst_93637 = (state_93652[(7)]);
var inst_93646 = (state_93652[(2)]);
var inst_93647 = com.wsscode.common.async_cljs.throw_err(inst_93646);
var inst_93648 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_93647);
var inst_93649 = [inst_93648];
var inst_93650 = cljs.core.PersistentHashMap.fromArrays(inst_93637,inst_93649);
var state_93652__$1 = state_93652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93652__$1,inst_93650);
} else {
return null;
}
}
}
});})(c__47946__auto__,map__93630,map__93630__$1,db))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93630,map__93630__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____0 = (function (){
var statearr_93661 = [null,null,null,null,null,null,null,null];
(statearr_93661[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__);

(statearr_93661[(1)] = (1));

return statearr_93661;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____1 = (function (state_93652){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93652);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93662){if((e93662 instanceof Object)){
var ex__47667__auto__ = e93662;
var statearr_93663_93725 = state_93652;
(statearr_93663_93725[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93727 = state_93652;
state_93652 = G__93727;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__ = function(state_93652){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____1.call(this,state_93652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93630,map__93630__$1,db))
})();
var state__47948__auto__ = (function (){var statearr_93665 = f__47947__auto__();
(statearr_93665[(6)] = c__47946__auto__);

return statearr_93665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93630,map__93630__$1,db))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
