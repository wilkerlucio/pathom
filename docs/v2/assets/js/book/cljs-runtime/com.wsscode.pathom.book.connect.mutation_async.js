goog.provide('com.wsscode.pathom.book.connect.mutation_async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.book.util.indexeddb');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.connect.mutation_async.adapt_user = (function com$wsscode$pathom$book$connect$mutation_async$adapt_user(user){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__60892){
var vec__60893 = p__60892;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60893,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("user",cljs.core.name(k)),v], null);
})),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(user,new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599))),new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","key","com.wsscode.pathom.book.util.indexeddb/key",-1385115599).cljs$core$IFn$_invoke$arity$1(user));
});
com.wsscode.pathom.book.connect.mutation_async.user_create = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-create","com.wsscode.pathom.book.connect.mutation-async/user-create",-1799648545,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Symbol("user","create","user/create",343682052,null),new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663)], null)], null),(function com$wsscode$pathom$book$connect$mutation_async$user_create(p__60918,user){
var map__60924 = p__60918;
var map__60924__$1 = (((((!((map__60924 == null))))?(((((map__60924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60924):map__60924);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60924__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__60924,map__60924__$1,db){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__60924,map__60924__$1,db){
return (function (state_61067){
var state_val_61069 = (state_61067[(1)]);
if((state_val_61069 === (1))){
var state_61067__$1 = state_61067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61067__$1,(2),db);
} else {
if((state_val_61069 === (2))){
var inst_60972 = (state_61067[(2)]);
var inst_60973 = com.wsscode.common.async_cljs.throw_err(inst_60972);
var inst_61004 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_61008 = [inst_60973,"users"];
var inst_61009 = cljs.core.PersistentHashMap.fromArrays(inst_61004,inst_61008);
var inst_61027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61029 = [new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391)];
var inst_61031 = (new cljs.core.PersistentVector(null,2,(5),inst_61027,inst_61029,null));
var inst_61032 = cljs.core.select_keys(user,inst_61031);
var inst_61033 = [new cljs.core.Keyword("user","created-at","user/created-at",-84598831)];
var inst_61035 = (new Date());
var inst_61036 = [inst_61035];
var inst_61038 = cljs.core.PersistentHashMap.fromArrays(inst_61033,inst_61036);
var inst_61039 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_61032,inst_61038], 0));
var inst_61040 = com.wsscode.pathom.book.util.indexeddb.create_BANG_(inst_61009,inst_61039);
var state_61067__$1 = state_61067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61067__$1,(3),inst_61040);
} else {
if((state_val_61069 === (3))){
var inst_61043 = (state_61067[(2)]);
var inst_61044 = com.wsscode.common.async_cljs.throw_err(inst_61043);
var inst_61048 = [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)];
var inst_61051 = new cljs.core.Keyword("user","id","user/id",-1375756663).cljs$core$IFn$_invoke$arity$1(user);
var inst_61052 = [inst_61051];
var inst_61055 = [inst_61044];
var inst_61056 = cljs.core.PersistentHashMap.fromArrays(inst_61052,inst_61055);
var inst_61058 = [inst_61044,inst_61056];
var inst_61059 = cljs.core.PersistentHashMap.fromArrays(inst_61048,inst_61058);
var state_61067__$1 = state_61067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61067__$1,inst_61059);
} else {
return null;
}
}
}
});})(c__47946__auto__,map__60924,map__60924__$1,db))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__60924,map__60924__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____0 = (function (){
var statearr_61115 = [null,null,null,null,null,null,null];
(statearr_61115[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__);

(statearr_61115[(1)] = (1));

return statearr_61115;
});
var com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____1 = (function (state_61067){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61067);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61121){if((e61121 instanceof Object)){
var ex__47667__auto__ = e61121;
var statearr_61123_61244 = state_61067;
(statearr_61123_61244[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61245 = state_61067;
state_61067 = G__61245;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__ = function(state_61067){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____1.call(this,state_61067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_create_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__60924,map__60924__$1,db))
})();
var state__47948__auto__ = (function (){var statearr_61126 = f__47947__auto__();
(statearr_61126[(6)] = c__47946__auto__);

return statearr_61126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__60924,map__60924__$1,db))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.user_by_id = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","user-by-id","com.wsscode.pathom.book.connect.mutation-async/user-by-id",1799432549,null),(function (){var G__61147 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","id","user/id",-1375756663),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null);
return G__61147;

})(),(function com$wsscode$pathom$book$connect$mutation_async$user_by_id(p__61152,p__61153){
var map__61154 = p__61152;
var map__61154__$1 = (((((!((map__61154 == null))))?(((((map__61154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61154):map__61154);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61154__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var map__61155 = p__61153;
var map__61155__$1 = (((((!((map__61155 == null))))?(((((map__61155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61155):map__61155);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword("user","id","user/id",-1375756663));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__61154,map__61154__$1,db,map__61155,map__61155__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__61154,map__61154__$1,db,map__61155,map__61155__$1,id){
return (function (state_61180){
var state_val_61181 = (state_61180[(1)]);
if((state_val_61181 === (1))){
var state_61180__$1 = state_61180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61180__$1,(2),db);
} else {
if((state_val_61181 === (2))){
var inst_61167 = (state_61180[(2)]);
var inst_61168 = com.wsscode.common.async_cljs.throw_err(inst_61167);
var inst_61169 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_61170 = [inst_61168,"users"];
var inst_61171 = cljs.core.PersistentHashMap.fromArrays(inst_61169,inst_61170);
var inst_61173 = com.wsscode.pathom.book.util.indexeddb.read_object(inst_61171,id);
var state_61180__$1 = state_61180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61180__$1,(3),inst_61173);
} else {
if((state_val_61181 === (3))){
var inst_61175 = (state_61180[(2)]);
var inst_61176 = com.wsscode.common.async_cljs.throw_err(inst_61175);
var inst_61177 = com.wsscode.pathom.book.connect.mutation_async.adapt_user(inst_61176);
var state_61180__$1 = state_61180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61180__$1,inst_61177);
} else {
return null;
}
}
}
});})(c__47946__auto__,map__61154,map__61154__$1,db,map__61155,map__61155__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__61154,map__61154__$1,db,map__61155,map__61155__$1,id){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____0 = (function (){
var statearr_61187 = [null,null,null,null,null,null,null];
(statearr_61187[(0)] = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__);

(statearr_61187[(1)] = (1));

return statearr_61187;
});
var com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____1 = (function (state_61180){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61180);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61190){if((e61190 instanceof Object)){
var ex__47667__auto__ = e61190;
var statearr_61192_61277 = state_61180;
(statearr_61192_61277[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61278 = state_61180;
state_61180 = G__61278;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__ = function(state_61180){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____1.call(this,state_61180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$user_by_id_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__61154,map__61154__$1,db,map__61155,map__61155__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_61196 = f__47947__auto__();
(statearr_61196[(6)] = c__47946__auto__);

return statearr_61196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__61154,map__61154__$1,db,map__61155,map__61155__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.all_users = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.connect.mutation-async","all-users","com.wsscode.pathom.book.connect.mutation-async/all-users",577792344,null),(function (){var G__61199 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("user","all","user/all",885376633),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("user","id","user/id",-1375756663),new cljs.core.Keyword("user","name","user/name",1848814598),new cljs.core.Keyword("user","email","user/email",1419686391),new cljs.core.Keyword("user","created-at","user/created-at",-84598831)], null)], null)], null)], null);
return G__61199;

})(),(function com$wsscode$pathom$book$connect$mutation_async$all_users(p__61202,_){
var map__61203 = p__61202;
var map__61203__$1 = (((((!((map__61203 == null))))?(((((map__61203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61203):map__61203);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61203__$1,new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__61203,map__61203__$1,db){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__61203,map__61203__$1,db){
return (function (state_61224){
var state_val_61225 = (state_61224[(1)]);
if((state_val_61225 === (1))){
var state_61224__$1 = state_61224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61224__$1,(2),db);
} else {
if((state_val_61225 === (2))){
var inst_61206 = (state_61224[(2)]);
var inst_61207 = com.wsscode.common.async_cljs.throw_err(inst_61206);
var inst_61208 = [new cljs.core.Keyword("user","all","user/all",885376633)];
var inst_61210 = cljs.core.PersistentVector.EMPTY;
var inst_61211 = [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db","com.wsscode.pathom.book.util.indexeddb/db",585787475),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","store-name","com.wsscode.pathom.book.util.indexeddb/store-name",1561142318)];
var inst_61212 = [inst_61207,"users"];
var inst_61213 = cljs.core.PersistentHashMap.fromArrays(inst_61211,inst_61212);
var inst_61214 = com.wsscode.pathom.book.util.indexeddb.scan_store(inst_61213);
var inst_61215 = cljs.core.async.into(inst_61210,inst_61214);
var state_61224__$1 = (function (){var statearr_61226 = state_61224;
(statearr_61226[(7)] = inst_61208);

return statearr_61226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61224__$1,(3),inst_61215);
} else {
if((state_val_61225 === (3))){
var inst_61208 = (state_61224[(7)]);
var inst_61217 = (state_61224[(2)]);
var inst_61218 = com.wsscode.common.async_cljs.throw_err(inst_61217);
var inst_61219 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.connect.mutation_async.adapt_user,inst_61218);
var inst_61220 = [inst_61219];
var inst_61221 = cljs.core.PersistentHashMap.fromArrays(inst_61208,inst_61220);
var state_61224__$1 = state_61224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61224__$1,inst_61221);
} else {
return null;
}
}
}
});})(c__47946__auto__,map__61203,map__61203__$1,db))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__61203,map__61203__$1,db){
return (function() {
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____0 = (function (){
var statearr_61229 = [null,null,null,null,null,null,null,null];
(statearr_61229[(0)] = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__);

(statearr_61229[(1)] = (1));

return statearr_61229;
});
var com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____1 = (function (state_61224){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61224);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61231){if((e61231 instanceof Object)){
var ex__47667__auto__ = e61231;
var statearr_61232_61304 = state_61224;
(statearr_61232_61304[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61231;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61305 = state_61224;
state_61224 = G__61305;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__ = function(state_61224){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____1.call(this,state_61224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$connect$mutation_async$all_users_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__61203,map__61203__$1,db))
})();
var state__47948__auto__ = (function (){var statearr_61233 = f__47947__auto__();
(statearr_61233[(6)] = c__47946__auto__);

return statearr_61233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__61203,map__61203__$1,db))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.connect.mutation_async.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.connect.mutation_async.user_create,com.wsscode.pathom.book.connect.mutation_async.user_by_id,com.wsscode.pathom.book.connect.mutation_async.all_users], null);
com.wsscode.pathom.book.connect.mutation_async.db_settings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","db-name","com.wsscode.pathom.book.util.indexeddb/db-name",2084204957),"connectAsyncDemo",new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","migrations","com.wsscode.pathom.book.util.indexeddb/migrations",1817984654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","stores","com.wsscode.pathom.book.util.indexeddb/stores",804442115),new cljs.core.PersistentArrayMap(null, 1, ["users",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","keys","com.wsscode.pathom.book.util.indexeddb/keys",1199378310),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","auto-increment","com.wsscode.pathom.book.util.indexeddb/auto-increment",-1029909912),new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","indexes","com.wsscode.pathom.book.util.indexeddb/indexes",551522357),new cljs.core.PersistentArrayMap(null, 1, ["name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.book.util.indexeddb","unique","com.wsscode.pathom.book.util.indexeddb/unique",462589526),false], null)], null)], null)], null)], null)], null)], null);
com.wsscode.pathom.book.connect.mutation_async.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","mutation-join-globals","com.wsscode.pathom.connect/mutation-join-globals",526656997),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","id-remaps","app/id-remaps",-1924040245)], null),new cljs.core.Keyword("com.wsscode.pathom.book.connect.mutation-async","db","com.wsscode.pathom.book.connect.mutation-async/db",-2026652484),com.wsscode.pathom.book.util.indexeddb.setup_db(com.wsscode.pathom.book.connect.mutation_async.db_settings)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.connect.mutation_async.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.connect.mutation_async.js.map
