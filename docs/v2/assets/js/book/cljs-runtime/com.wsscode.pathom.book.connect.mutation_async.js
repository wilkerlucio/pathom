goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53575){
var vec__53576 = p__53575;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53576,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__53593,user){
var map__53596 = p__53593;
var map__53596__$1 = (((((!((map__53596 == null))))?(((((map__53596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53596):map__53596);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53596__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53596,map__53596__$1,db){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53596,map__53596__$1,db){
return (function (state_53631){
var state_val_53632 = (state_53631[(1)]);
if((state_val_53632 === (1))){
var state_53631__$1 = state_53631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53631__$1,(2),db);
} else {
if((state_val_53632 === (2))){
var inst_53601 = (state_53631[(2)]);
var inst_53602 = com.wsscode.common.async_cljs.throw_err(inst_53601);
var inst_53605 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53606 = [inst_53602,"users"];
var inst_53607 = cljs.core.PersistentHashMap.fromArrays(inst_53605,inst_53606);
var inst_53608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53609 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_53610 = (new cljs.core.PersistentVector(null,2,(5),inst_53608,inst_53609,null));
var inst_53611 = cljs.core.select_keys(user,inst_53610);
var inst_53612 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_53613 = (new Date());
var inst_53614 = [inst_53613];
var inst_53615 = cljs.core.PersistentHashMap.fromArrays(inst_53612,inst_53614);
var inst_53616 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53611,inst_53615], 0));
var inst_53617 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_53607,inst_53616);
var state_53631__$1 = state_53631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53631__$1,(3),inst_53617);
} else {
if((state_val_53632 === (3))){
var inst_53619 = (state_53631[(2)]);
var inst_53620 = com.wsscode.common.async_cljs.throw_err(inst_53619);
var inst_53621 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_53624 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_53625 = [inst_53624];
var inst_53626 = [inst_53620];
var inst_53627 = cljs.core.PersistentHashMap.fromArrays(inst_53625,inst_53626);
var inst_53628 = [inst_53620,inst_53627];
var inst_53629 = cljs.core.PersistentHashMap.fromArrays(inst_53621,inst_53628);
var state_53631__$1 = state_53631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53631__$1,inst_53629);
} else {
return null;
}
}
}
});})(c__39084__auto__,map__53596,map__53596__$1,db))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53596,map__53596__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto____0 = (function (){
var statearr_53650 = [null,null,null,null,null,null,null];
(statearr_53650[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto__);

(statearr_53650[(1)] = (1));

return statearr_53650;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto____1 = (function (state_53631){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53631);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53653){if((e53653 instanceof Object)){
var ex__38790__auto__ = e53653;
var statearr_53654_53795 = state_53631;
(statearr_53654_53795[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53797 = state_53631;
state_53631 = G__53797;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto__ = function(state_53631){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto____1.call(this,state_53631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53596,map__53596__$1,db))
})();
var state__39086__auto__ = (function (){var statearr_53656 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53656[(6)] = c__39084__auto__);

return statearr_53656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53596,map__53596__$1,db))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__53658,p__53659){
var map__53660 = p__53658;
var map__53660__$1 = (((((!((map__53660 == null))))?(((((map__53660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53660):map__53660);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53660__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__53661 = p__53659;
var map__53661__$1 = (((((!((map__53661 == null))))?(((((map__53661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53661):map__53661);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53661__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53660,map__53660__$1,db,map__53661,map__53661__$1,id){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53660,map__53660__$1,db,map__53661,map__53661__$1,id){
return (function (state_53679){
var state_val_53680 = (state_53679[(1)]);
if((state_val_53680 === (1))){
var state_53679__$1 = state_53679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53679__$1,(2),db);
} else {
if((state_val_53680 === (2))){
var inst_53667 = (state_53679[(2)]);
var inst_53668 = com.wsscode.common.async_cljs.throw_err(inst_53667);
var inst_53669 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53670 = [inst_53668,"users"];
var inst_53671 = cljs.core.PersistentHashMap.fromArrays(inst_53669,inst_53670);
var inst_53672 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_53671,id);
var state_53679__$1 = state_53679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53679__$1,(3),inst_53672);
} else {
if((state_val_53680 === (3))){
var inst_53674 = (state_53679[(2)]);
var inst_53675 = com.wsscode.common.async_cljs.throw_err(inst_53674);
var inst_53676 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_53675);
var state_53679__$1 = state_53679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53679__$1,inst_53676);
} else {
return null;
}
}
}
});})(c__39084__auto__,map__53660,map__53660__$1,db,map__53661,map__53661__$1,id))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53660,map__53660__$1,db,map__53661,map__53661__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto____0 = (function (){
var statearr_53704 = [null,null,null,null,null,null,null];
(statearr_53704[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto__);

(statearr_53704[(1)] = (1));

return statearr_53704;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto____1 = (function (state_53679){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53679);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53705){if((e53705 instanceof Object)){
var ex__38790__auto__ = e53705;
var statearr_53706_53821 = state_53679;
(statearr_53706_53821[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53823 = state_53679;
state_53679 = G__53823;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto__ = function(state_53679){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto____1.call(this,state_53679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53660,map__53660__$1,db,map__53661,map__53661__$1,id))
})();
var state__39086__auto__ = (function (){var statearr_53708 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53708[(6)] = c__39084__auto__);

return statearr_53708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53660,map__53660__$1,db,map__53661,map__53661__$1,id))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__53710,_){
var map__53711 = p__53710;
var map__53711__$1 = (((((!((map__53711 == null))))?(((((map__53711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53711):map__53711);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53711__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53711,map__53711__$1,db){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53711,map__53711__$1,db){
return (function (state_53732){
var state_val_53733 = (state_53732[(1)]);
if((state_val_53733 === (1))){
var state_53732__$1 = state_53732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53732__$1,(2),db);
} else {
if((state_val_53733 === (2))){
var inst_53715 = (state_53732[(2)]);
var inst_53716 = com.wsscode.common.async_cljs.throw_err(inst_53715);
var inst_53717 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_53719 = cljs.core.PersistentVector.EMPTY;
var inst_53720 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53721 = [inst_53716,"users"];
var inst_53722 = cljs.core.PersistentHashMap.fromArrays(inst_53720,inst_53721);
var inst_53723 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_53722);
var inst_53724 = cljs.core.async.into(inst_53719,inst_53723);
var state_53732__$1 = (function (){var statearr_53740 = state_53732;
(statearr_53740[(7)] = inst_53717);

return statearr_53740;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53732__$1,(3),inst_53724);
} else {
if((state_val_53733 === (3))){
var inst_53717 = (state_53732[(7)]);
var inst_53726 = (state_53732[(2)]);
var inst_53727 = com.wsscode.common.async_cljs.throw_err(inst_53726);
var inst_53728 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_53727);
var inst_53729 = [inst_53728];
var inst_53730 = cljs.core.PersistentHashMap.fromArrays(inst_53717,inst_53729);
var state_53732__$1 = state_53732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53732__$1,inst_53730);
} else {
return null;
}
}
}
});})(c__39084__auto__,map__53711,map__53711__$1,db))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53711,map__53711__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto____0 = (function (){
var statearr_53760 = [null,null,null,null,null,null,null,null];
(statearr_53760[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto__);

(statearr_53760[(1)] = (1));

return statearr_53760;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto____1 = (function (state_53732){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53732);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53763){if((e53763 instanceof Object)){
var ex__38790__auto__ = e53763;
var statearr_53764_53930 = state_53732;
(statearr_53764_53930[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53763;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53944 = state_53732;
state_53732 = G__53944;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto__ = function(state_53732){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto____1.call(this,state_53732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53711,map__53711__$1,db))
})();
var state__39086__auto__ = (function (){var statearr_53765 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53765[(6)] = c__39084__auto__);

return statearr_53765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53711,map__53711__$1,db))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
