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
var G__48831 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__48832 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__48831,G__48832) : parser.call(null,G__48831,G__48832));
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__48838){
var map__48839 = p__48838;
var map__48839__$1 = (((((!((map__48839 == null))))?(((((map__48839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48839):map__48839);
var env = map__48839__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48839__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48839__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res__44659__auto__ = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44659__auto__)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,res__44659__auto__,start_time,map__48839,map__48839__$1,env,profile_STAR_,path){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,res__44659__auto__,start_time,map__48839,map__48839__$1,env,profile_STAR_,path){
return (function (state_48870){
var state_val_48871 = (state_48870[(1)]);
if((state_val_48871 === (1))){
var state_48870__$1 = state_48870;
var statearr_48876_48990 = state_48870__$1;
(statearr_48876_48990[(2)] = null);

(statearr_48876_48990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48871 === (2))){
var inst_48868 = (state_48870[(2)]);
var state_48870__$1 = state_48870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48870__$1,inst_48868);
} else {
if((state_val_48871 === (3))){
var inst_48844 = (state_48870[(2)]);
var state_48870__$1 = state_48870;
var statearr_48886_48992 = state_48870__$1;
(statearr_48886_48992[(2)] = inst_48844);


cljs.core.async.impl.ioc_helpers.process_exception(state_48870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48871 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48870,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_48870__$1 = state_48870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48870__$1,(5),res__44659__auto__);
} else {
if((state_val_48871 === (5))){
var inst_48850 = (state_48870[(2)]);
var inst_48852 = com.wsscode.common.async_cljs.throw_err(inst_48850);
var state_48870__$1 = (function (){var statearr_48896 = state_48870;
(statearr_48896[(7)] = inst_48852);

return statearr_48896;
})();
var statearr_48897_48993 = state_48870__$1;
(statearr_48897_48993[(2)] = null);

(statearr_48897_48993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48871 === (6))){
var inst_48852 = (state_48870[(7)]);
var inst_48865 = (state_48870[(2)]);
var state_48870__$1 = (function (){var statearr_48898 = state_48870;
(statearr_48898[(8)] = inst_48865);

return statearr_48898;
})();
var statearr_48899_48995 = state_48870__$1;
(statearr_48899_48995[(2)] = inst_48852);


cljs.core.async.impl.ioc_helpers.process_exception(state_48870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48871 === (7))){
var inst_48853 = (state_48870[(2)]);
var state_48870__$1 = (function (){var statearr_48900 = state_48870;
(statearr_48900[(9)] = inst_48853);

return statearr_48900;
})();
var statearr_48901_48996 = state_48870__$1;
(statearr_48901_48996[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception(state_48870__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48871 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48870,(7),new cljs.core.Keyword(null,"default","default",-1987822328),null,(6));
var inst_48861 = com.wsscode.pathom.profile.current_time_ms();
var inst_48862 = (inst_48861 - start_time);
var inst_48863 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48862], 0));
var state_48870__$1 = state_48870;
var statearr_48903_48999 = state_48870__$1;
(statearr_48903_48999[(2)] = inst_48863);


cljs.core.async.impl.ioc_helpers.process_exception(state_48870__$1);

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
});})(c__39084__auto__,res__44659__auto__,start_time,map__48839,map__48839__$1,env,profile_STAR_,path))
;
return ((function (switch__38786__auto__,c__39084__auto__,res__44659__auto__,start_time,map__48839,map__48839__$1,env,profile_STAR_,path){
return (function() {
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto____0 = (function (){
var statearr_48912 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48912[(0)] = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto__);

(statearr_48912[(1)] = (1));

return statearr_48912;
});
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto____1 = (function (state_48870){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_48870);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e48916){if((e48916 instanceof Object)){
var ex__38790__auto__ = e48916;
var statearr_48917_49002 = state_48870;
(statearr_48917_49002[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49003 = state_48870;
state_48870 = G__49003;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto__ = function(state_48870){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto____1.call(this,state_48870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto____0;
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto____1;
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,res__44659__auto__,start_time,map__48839,map__48839__$1,env,profile_STAR_,path))
})();
var state__39086__auto__ = (function (){var statearr_48918 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_48918[(6)] = c__39084__auto__);

return statearr_48918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,res__44659__auto__,start_time,map__48839,map__48839__$1,env,profile_STAR_,path))
);

return c__39084__auto__;
} else {
var res = res__44659__auto__;
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));
}catch (e48922){var __49033 = e48922;
}
return res;
}
}
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__48925,k,params){
var map__48927 = p__48925;
var map__48927__$1 = (((((!((map__48927 == null))))?(((((map__48927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48927):map__48927);
var env = map__48927__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48927__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__48932 = out;
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48932,new cljs.core.Keyword(null,"action","action",-811238024),((function (G__48932,out,map__48927,map__48927__$1,env,profile_STAR_){
return (function (action){
return ((function (G__48932,out,map__48927,map__48927__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__48932,out,map__48927,map__48927__$1,env,profile_STAR_))
});})(G__48932,out,map__48927,map__48927__$1,env,profile_STAR_))
);
} else {
return G__48932;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__48956_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),cljs.core.first(p1__48956_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48967){
var vec__48970 = p__48967;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48970,(1),null);
var G__48973 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),com.wsscode.pathom.profile.node_name(k),new cljs.core.Keyword(null,"value","value",305978217),com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48973,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__48973;
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
