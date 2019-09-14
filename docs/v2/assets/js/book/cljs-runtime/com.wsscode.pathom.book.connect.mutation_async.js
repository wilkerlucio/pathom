goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__52901){
var vec__52905 = p__52901;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52905,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__52937,user){
var map__52944 = p__52937;
var map__52944__$1 = (((((!((map__52944 == null))))?(((((map__52944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52944):map__52944);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52944__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__52944,map__52944__$1,db){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__52944,map__52944__$1,db){
return (function (state_53015){
var state_val_53016 = (state_53015[(1)]);
if((state_val_53016 === (1))){
var state_53015__$1 = state_53015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53015__$1,(2),db);
} else {
if((state_val_53016 === (2))){
var inst_52952 = (state_53015[(2)]);
var inst_52953 = com.wsscode.common.async_cljs.throw_err(inst_52952);
var inst_52976 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_52977 = [inst_52953,"users"];
var inst_52978 = cljs.core.PersistentHashMap.fromArrays(inst_52976,inst_52977);
var inst_52981 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52982 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_52983 = (new cljs.core.PersistentVector(null,2,(5),inst_52981,inst_52982,null));
var inst_52984 = cljs.core.select_keys(user,inst_52983);
var inst_52985 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_52995 = (new Date());
var inst_52996 = [inst_52995];
var inst_52997 = cljs.core.PersistentHashMap.fromArrays(inst_52985,inst_52996);
var inst_52998 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52984,inst_52997], 0));
var inst_52999 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_52978,inst_52998);
var state_53015__$1 = state_53015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53015__$1,(3),inst_52999);
} else {
if((state_val_53016 === (3))){
var inst_53001 = (state_53015[(2)]);
var inst_53002 = com.wsscode.common.async_cljs.throw_err(inst_53001);
var inst_53007 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_53008 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_53009 = [inst_53008];
var inst_53010 = [inst_53002];
var inst_53011 = cljs.core.PersistentHashMap.fromArrays(inst_53009,inst_53010);
var inst_53012 = [inst_53002,inst_53011];
var inst_53013 = cljs.core.PersistentHashMap.fromArrays(inst_53007,inst_53012);
var state_53015__$1 = state_53015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53015__$1,inst_53013);
} else {
return null;
}
}
}
});})(c__38971__auto__,map__52944,map__52944__$1,db))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__52944,map__52944__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto____0 = (function (){
var statearr_53032 = [null,null,null,null,null,null,null];
(statearr_53032[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto__);

(statearr_53032[(1)] = (1));

return statearr_53032;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto____1 = (function (state_53015){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53015);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53033){if((e53033 instanceof Object)){
var ex__38928__auto__ = e53033;
var statearr_53035_53184 = state_53015;
(statearr_53035_53184[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53185 = state_53015;
state_53015 = G__53185;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto__ = function(state_53015){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto____1.call(this,state_53015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__52944,map__52944__$1,db))
})();
var state__38973__auto__ = (function (){var statearr_53037 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53037[(6)] = c__38971__auto__);

return statearr_53037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__52944,map__52944__$1,db))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__53056,p__53057){
var map__53058 = p__53056;
var map__53058__$1 = (((((!((map__53058 == null))))?(((((map__53058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53058):map__53058);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53058__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__53059 = p__53057;
var map__53059__$1 = (((((!((map__53059 == null))))?(((((map__53059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53059):map__53059);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53059__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__53058,map__53058__$1,db,map__53059,map__53059__$1,id){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__53058,map__53058__$1,db,map__53059,map__53059__$1,id){
return (function (state_53077){
var state_val_53078 = (state_53077[(1)]);
if((state_val_53078 === (1))){
var state_53077__$1 = state_53077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53077__$1,(2),db);
} else {
if((state_val_53078 === (2))){
var inst_53066 = (state_53077[(2)]);
var inst_53067 = com.wsscode.common.async_cljs.throw_err(inst_53066);
var inst_53068 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53069 = [inst_53067,"users"];
var inst_53070 = cljs.core.PersistentHashMap.fromArrays(inst_53068,inst_53069);
var inst_53071 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_53070,id);
var state_53077__$1 = state_53077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53077__$1,(3),inst_53071);
} else {
if((state_val_53078 === (3))){
var inst_53073 = (state_53077[(2)]);
var inst_53074 = com.wsscode.common.async_cljs.throw_err(inst_53073);
var inst_53075 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_53074);
var state_53077__$1 = state_53077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53077__$1,inst_53075);
} else {
return null;
}
}
}
});})(c__38971__auto__,map__53058,map__53058__$1,db,map__53059,map__53059__$1,id))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__53058,map__53058__$1,db,map__53059,map__53059__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto____0 = (function (){
var statearr_53090 = [null,null,null,null,null,null,null];
(statearr_53090[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto__);

(statearr_53090[(1)] = (1));

return statearr_53090;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto____1 = (function (state_53077){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53077);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53107){if((e53107 instanceof Object)){
var ex__38928__auto__ = e53107;
var statearr_53108_53193 = state_53077;
(statearr_53108_53193[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53202 = state_53077;
state_53077 = G__53202;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto__ = function(state_53077){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto____1.call(this,state_53077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__53058,map__53058__$1,db,map__53059,map__53059__$1,id))
})();
var state__38973__auto__ = (function (){var statearr_53111 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53111[(6)] = c__38971__auto__);

return statearr_53111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__53058,map__53058__$1,db,map__53059,map__53059__$1,id))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__53115,_){
var map__53116 = p__53115;
var map__53116__$1 = (((((!((map__53116 == null))))?(((((map__53116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53116):map__53116);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53116__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__53116,map__53116__$1,db){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__53116,map__53116__$1,db){
return (function (state_53139){
var state_val_53140 = (state_53139[(1)]);
if((state_val_53140 === (1))){
var state_53139__$1 = state_53139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53139__$1,(2),db);
} else {
if((state_val_53140 === (2))){
var inst_53120 = (state_53139[(2)]);
var inst_53121 = com.wsscode.common.async_cljs.throw_err(inst_53120);
var inst_53122 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_53125 = cljs.core.PersistentVector.EMPTY;
var inst_53126 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_53127 = [inst_53121,"users"];
var inst_53128 = cljs.core.PersistentHashMap.fromArrays(inst_53126,inst_53127);
var inst_53129 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_53128);
var inst_53130 = cljs.core.async.into(inst_53125,inst_53129);
var state_53139__$1 = (function (){var statearr_53151 = state_53139;
(statearr_53151[(7)] = inst_53122);

return statearr_53151;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53139__$1,(3),inst_53130);
} else {
if((state_val_53140 === (3))){
var inst_53122 = (state_53139[(7)]);
var inst_53132 = (state_53139[(2)]);
var inst_53134 = com.wsscode.common.async_cljs.throw_err(inst_53132);
var inst_53135 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_53134);
var inst_53136 = [inst_53135];
var inst_53137 = cljs.core.PersistentHashMap.fromArrays(inst_53122,inst_53136);
var state_53139__$1 = state_53139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53139__$1,inst_53137);
} else {
return null;
}
}
}
});})(c__38971__auto__,map__53116,map__53116__$1,db))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__53116,map__53116__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto____0 = (function (){
var statearr_53155 = [null,null,null,null,null,null,null,null];
(statearr_53155[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto__);

(statearr_53155[(1)] = (1));

return statearr_53155;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto____1 = (function (state_53139){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53139);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53156){if((e53156 instanceof Object)){
var ex__38928__auto__ = e53156;
var statearr_53157_53237 = state_53139;
(statearr_53157_53237[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53238 = state_53139;
state_53139 = G__53238;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto__ = function(state_53139){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto____1.call(this,state_53139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__53116,map__53116__$1,db))
})();
var state__38973__auto__ = (function (){var statearr_53158 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53158[(6)] = c__38971__auto__);

return statearr_53158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__53116,map__53116__$1,db))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
