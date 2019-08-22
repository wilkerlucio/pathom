goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__53713){
var vec__53722 = p__53713;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53722,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__53742,user){
var map__53744 = p__53742;
var map__53744__$1 = (((((!((map__53744 == null))))?(((((map__53744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53744):map__53744);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53744__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__53744,map__53744__$1,db){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__53744,map__53744__$1,db){
return (function (state_53793){
var state_val_53794 = (state_53793[(1)]);
if((state_val_53794 === (1))){
var state_53793__$1 = state_53793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53793__$1,(2),db);
} else {
if((state_val_53794 === (2))){
var inst_53751 = (state_53793[(2)]);
var inst_53752 = com.wsscode.common.async_cljs.throw_err(inst_53751);
var inst_53754 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53757 = [inst_53752,"users"];
var inst_53759 = cljs.core.PersistentHashMap.fromArrays(inst_53754,inst_53757);
var inst_53763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53766 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_53767 = (new cljs.core.PersistentVector(null,2,(5),inst_53763,inst_53766,null));
var inst_53768 = cljs.core.select_keys(user,inst_53767);
var inst_53770 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_53773 = (new Date());
var inst_53774 = [inst_53773];
var inst_53775 = cljs.core.PersistentHashMap.fromArrays(inst_53770,inst_53774);
var inst_53776 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53768,inst_53775], 0));
var inst_53777 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_53759,inst_53776);
var state_53793__$1 = state_53793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53793__$1,(3),inst_53777);
} else {
if((state_val_53794 === (3))){
var inst_53779 = (state_53793[(2)]);
var inst_53780 = com.wsscode.common.async_cljs.throw_err(inst_53779);
var inst_53782 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_53785 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_53786 = [inst_53785];
var inst_53787 = [inst_53780];
var inst_53788 = cljs.core.PersistentHashMap.fromArrays(inst_53786,inst_53787);
var inst_53789 = [inst_53780,inst_53788];
var inst_53790 = cljs.core.PersistentHashMap.fromArrays(inst_53782,inst_53789);
var state_53793__$1 = state_53793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53793__$1,inst_53790);
} else {
return null;
}
}
}
});})(c__39003__auto__,map__53744,map__53744__$1,db))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__53744,map__53744__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto____0 = (function (){
var statearr_53856 = [null,null,null,null,null,null,null];
(statearr_53856[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto__);

(statearr_53856[(1)] = (1));

return statearr_53856;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto____1 = (function (state_53793){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53793);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53865){if((e53865 instanceof Object)){
var ex__38933__auto__ = e53865;
var statearr_53866_53998 = state_53793;
(statearr_53866_53998[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53999 = state_53793;
state_53793 = G__53999;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto__ = function(state_53793){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto____1.call(this,state_53793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__53744,map__53744__$1,db))
})();
var state__39005__auto__ = (function (){var statearr_53867 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53867[(6)] = c__39003__auto__);

return statearr_53867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__53744,map__53744__$1,db))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__53868,p__53869){
var map__53870 = p__53868;
var map__53870__$1 = (((((!((map__53870 == null))))?(((((map__53870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53870):map__53870);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53870__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__53871 = p__53869;
var map__53871__$1 = (((((!((map__53871 == null))))?(((((map__53871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53871):map__53871);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53871__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__53870,map__53870__$1,db,map__53871,map__53871__$1,id){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__53870,map__53870__$1,db,map__53871,map__53871__$1,id){
return (function (state_53886){
var state_val_53887 = (state_53886[(1)]);
if((state_val_53887 === (1))){
var state_53886__$1 = state_53886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53886__$1,(2),db);
} else {
if((state_val_53887 === (2))){
var inst_53875 = (state_53886[(2)]);
var inst_53876 = com.wsscode.common.async_cljs.throw_err(inst_53875);
var inst_53877 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53878 = [inst_53876,"users"];
var inst_53879 = cljs.core.PersistentHashMap.fromArrays(inst_53877,inst_53878);
var inst_53880 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_53879,id);
var state_53886__$1 = state_53886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53886__$1,(3),inst_53880);
} else {
if((state_val_53887 === (3))){
var inst_53882 = (state_53886[(2)]);
var inst_53883 = com.wsscode.common.async_cljs.throw_err(inst_53882);
var inst_53884 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_53883);
var state_53886__$1 = state_53886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53886__$1,inst_53884);
} else {
return null;
}
}
}
});})(c__39003__auto__,map__53870,map__53870__$1,db,map__53871,map__53871__$1,id))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__53870,map__53870__$1,db,map__53871,map__53871__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto____0 = (function (){
var statearr_53888 = [null,null,null,null,null,null,null];
(statearr_53888[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto__);

(statearr_53888[(1)] = (1));

return statearr_53888;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto____1 = (function (state_53886){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53886);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53889){if((e53889 instanceof Object)){
var ex__38933__auto__ = e53889;
var statearr_53890_54036 = state_53886;
(statearr_53890_54036[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54059 = state_53886;
state_53886 = G__54059;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto__ = function(state_53886){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto____1.call(this,state_53886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__53870,map__53870__$1,db,map__53871,map__53871__$1,id))
})();
var state__39005__auto__ = (function (){var statearr_53891 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53891[(6)] = c__39003__auto__);

return statearr_53891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__53870,map__53870__$1,db,map__53871,map__53871__$1,id))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__53893,_){
var map__53894 = p__53893;
var map__53894__$1 = (((((!((map__53894 == null))))?(((((map__53894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53894):map__53894);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53894__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__53894,map__53894__$1,db){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__53894,map__53894__$1,db){
return (function (state_53933){
var state_val_53934 = (state_53933[(1)]);
if((state_val_53934 === (1))){
var state_53933__$1 = state_53933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53933__$1,(2),db);
} else {
if((state_val_53934 === (2))){
var inst_53901 = (state_53933[(2)]);
var inst_53902 = com.wsscode.common.async_cljs.throw_err(inst_53901);
var inst_53903 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_53920 = cljs.core.PersistentVector.EMPTY;
var inst_53921 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53922 = [inst_53902,"users"];
var inst_53923 = cljs.core.PersistentHashMap.fromArrays(inst_53921,inst_53922);
var inst_53924 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_53923);
var inst_53925 = cljs.core.async.into(inst_53920,inst_53924);
var state_53933__$1 = (function (){var statearr_53937 = state_53933;
(statearr_53937[(7)] = inst_53903);

return statearr_53937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53933__$1,(3),inst_53925);
} else {
if((state_val_53934 === (3))){
var inst_53903 = (state_53933[(7)]);
var inst_53927 = (state_53933[(2)]);
var inst_53928 = com.wsscode.common.async_cljs.throw_err(inst_53927);
var inst_53929 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_53928);
var inst_53930 = [inst_53929];
var inst_53931 = cljs.core.PersistentHashMap.fromArrays(inst_53903,inst_53930);
var state_53933__$1 = state_53933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53933__$1,inst_53931);
} else {
return null;
}
}
}
});})(c__39003__auto__,map__53894,map__53894__$1,db))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__53894,map__53894__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto____0 = (function (){
var statearr_53938 = [null,null,null,null,null,null,null,null];
(statearr_53938[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto__);

(statearr_53938[(1)] = (1));

return statearr_53938;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto____1 = (function (state_53933){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_53933);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e53939){if((e53939 instanceof Object)){
var ex__38933__auto__ = e53939;
var statearr_53940_54090 = state_53933;
(statearr_53940_54090[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54091 = state_53933;
state_53933 = G__54091;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto__ = function(state_53933){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto____1.call(this,state_53933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__53894,map__53894__$1,db))
})();
var state__39005__auto__ = (function (){var statearr_53941 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_53941[(6)] = c__39003__auto__);

return statearr_53941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__53894,map__53894__$1,db))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
