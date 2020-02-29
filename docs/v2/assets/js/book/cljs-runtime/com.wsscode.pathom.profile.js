goog.provide('com.wsscode.pathom.profile');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.profile.append_at = (function com$wsscode$pathom$profile$append_at(cur,v){
if(cljs.core.map_QMARK_(cur)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur,new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),v);
} else {
return v;

}
});
com.wsscode.pathom.profile.current_time_ms = (function com$wsscode$pathom$profile$current_time_ms(){
return (new Date()).getTime();
});
com.wsscode.pathom.profile.profile_plugin = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","wrap-parser","com.wsscode.pathom.core/wrap-parser",131527793),(function com$wsscode$pathom$profile$profile_plugin_wrap_parser(parser){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_parser_$_profile_plugin_wrap_parser_internal(env,tx){
var G__68118 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__68119 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__68118,G__68119) : parser.call(null,G__68118,G__68119));
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__68124){
var map__68125 = p__68124;
var map__68125__$1 = (((((!((map__68125 == null))))?(((((map__68125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68125):map__68125);
var env = map__68125__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68125__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68125__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res__61936__auto__ = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__61936__auto__)){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,res__61936__auto__,start_time,map__68125,map__68125__$1,env,profile_STAR_,path){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,res__61936__auto__,start_time,map__68125,map__68125__$1,env,profile_STAR_,path){
return (function (state_68164){
var state_val_68165 = (state_68164[(1)]);
if((state_val_68165 === (1))){
var state_68164__$1 = state_68164;
var statearr_68172_68371 = state_68164__$1;
(statearr_68172_68371[(2)] = null);

(statearr_68172_68371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68165 === (2))){
var inst_68161 = (state_68164[(2)]);
var state_68164__$1 = state_68164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68164__$1,inst_68161);
} else {
if((state_val_68165 === (3))){
var inst_68139 = (state_68164[(2)]);
var state_68164__$1 = state_68164;
var statearr_68176_68375 = state_68164__$1;
(statearr_68176_68375[(2)] = inst_68139);


cljs.core.async.impl.ioc_helpers.process_exception(state_68164__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68165 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68164,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_68164__$1 = state_68164;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68164__$1,(5),res__61936__auto__);
} else {
if((state_val_68165 === (5))){
var inst_68144 = (state_68164[(2)]);
var inst_68145 = com.wsscode.common.async_cljs.throw_err(inst_68144);
var state_68164__$1 = (function (){var statearr_68184 = state_68164;
(statearr_68184[(7)] = inst_68145);

return statearr_68184;
})();
var statearr_68188_68383 = state_68164__$1;
(statearr_68188_68383[(2)] = null);

(statearr_68188_68383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68165 === (6))){
var inst_68145 = (state_68164[(7)]);
var inst_68158 = (state_68164[(2)]);
var state_68164__$1 = (function (){var statearr_68193 = state_68164;
(statearr_68193[(8)] = inst_68158);

return statearr_68193;
})();
var statearr_68194_68386 = state_68164__$1;
(statearr_68194_68386[(2)] = inst_68145);


cljs.core.async.impl.ioc_helpers.process_exception(state_68164__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68165 === (7))){
var inst_68147 = (state_68164[(2)]);
var state_68164__$1 = (function (){var statearr_68199 = state_68164;
(statearr_68199[(9)] = inst_68147);

return statearr_68199;
})();
var statearr_68205_68389 = state_68164__$1;
(statearr_68205_68389[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception(state_68164__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68165 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68164,(7),new cljs.core.Keyword(null,"default","default",-1987822328),null,(6));
var inst_68154 = com.wsscode.pathom.profile.current_time_ms();
var inst_68155 = (inst_68154 - start_time);
var inst_68156 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_68155], 0));
var state_68164__$1 = state_68164;
var statearr_68231_68392 = state_68164__$1;
(statearr_68231_68392[(2)] = inst_68156);


cljs.core.async.impl.ioc_helpers.process_exception(state_68164__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__45808__auto__,res__61936__auto__,start_time,map__68125,map__68125__$1,env,profile_STAR_,path))
;
return ((function (switch__45525__auto__,c__45808__auto__,res__61936__auto__,start_time,map__68125,map__68125__$1,env,profile_STAR_,path){
return (function() {
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto____0 = (function (){
var statearr_68243 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68243[(0)] = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto__);

(statearr_68243[(1)] = (1));

return statearr_68243;
});
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto____1 = (function (state_68164){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_68164);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68256){if((e68256 instanceof Object)){
var ex__45529__auto__ = e68256;
var statearr_68258_68401 = state_68164;
(statearr_68258_68401[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68402 = state_68164;
state_68164 = G__68402;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto__ = function(state_68164){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto____1.call(this,state_68164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto____0;
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto____1;
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,res__61936__auto__,start_time,map__68125,map__68125__$1,env,profile_STAR_,path))
})();
var state__45810__auto__ = (function (){var statearr_68284 = f__45809__auto__();
(statearr_68284[(6)] = c__45808__auto__);

return statearr_68284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,res__61936__auto__,start_time,map__68125,map__68125__$1,env,profile_STAR_,path))
);

return c__45808__auto__;
} else {
var res = res__61936__auto__;
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));
}catch (e68301){var __68407 = e68301;
}
return res;
}
}
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__68304,k,params){
var map__68305 = p__68304;
var map__68305__$1 = (((((!((map__68305 == null))))?(((((map__68305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68305):map__68305);
var env = map__68305__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68305__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__68316 = out;
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__68316,new cljs.core.Keyword(null,"action","action",-811238024),((function (G__68316,out,map__68305,map__68305__$1,env,profile_STAR_){
return (function (action){
return ((function (G__68316,out,map__68305,map__68305__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__68316,out,map__68305,map__68305__$1,env,profile_STAR_))
});})(G__68316,out,map__68305,map__68305__$1,env,profile_STAR_))
);
} else {
return G__68316;
}
});
})], null);
com.wsscode.pathom.profile.node_name = (function com$wsscode$pathom$profile$node_name(x){
if(cljs.core.vector_QMARK_(x)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_name,x));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);

}
});
com.wsscode.pathom.profile.node_value = (function com$wsscode$pathom$profile$node_value(x){
if(cljs.core.map_QMARK_(x)){
var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_value,cljs.core.vals(x)));
}
} else {
return x;
}
});
com.wsscode.pathom.profile.profile__GT_nvc_STAR_ = (function com$wsscode$pathom$profile$profile__GT_nvc_STAR_(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__68331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),cljs.core.first(p1__68331_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__68342){
var vec__68344 = p__68342;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68344,(1),null);
var G__68348 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),com.wsscode.pathom.profile.node_name(k),new cljs.core.Keyword(null,"value","value",305978217),com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68348,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__68348;
}
}))),m);
});
/**
 * Convert data into format of maps containg the keys:
 *  name: the current attribute name
 *  value: the total time spent on the node + children
 *  children: the children elements (recursive)
 * 
 * This for is suitable for some d3 flamegraph plugins on the browser
 */
com.wsscode.pathom.profile.profile__GT_nvc = (function com$wsscode$pathom$profile$profile__GT_nvc(data){
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.profile.node_value,cljs.core.vals(data)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Root",new cljs.core.Keyword(null,"value","value",305978217),total,new cljs.core.Keyword(null,"children","children",-940561982),com.wsscode.pathom.profile.profile__GT_nvc_STAR_(data)], null);
});
com.wsscode.pathom.profile.profile__GT_flame_graph = com.wsscode.pathom.profile.profile__GT_nvc;

//# sourceMappingURL=com.wsscode.pathom.profile.js.map
