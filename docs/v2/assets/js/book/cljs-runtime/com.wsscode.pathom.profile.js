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
var G__49008 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__49009 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__49008,G__49009) : parser.call(null,G__49008,G__49009));
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__49016){
var map__49017 = p__49016;
var map__49017__$1 = (((((!((map__49017 == null))))?(((((map__49017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49017):map__49017);
var env = map__49017__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49017__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49017__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res__44802__auto__ = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.common.async_cljs.chan_QMARK_(res__44802__auto__)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,res__44802__auto__,start_time,map__49017,map__49017__$1,env,profile_STAR_,path){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,res__44802__auto__,start_time,map__49017,map__49017__$1,env,profile_STAR_,path){
return (function (state_49052){
var state_val_49053 = (state_49052[(1)]);
if((state_val_49053 === (1))){
var state_49052__$1 = state_49052;
var statearr_49058_49260 = state_49052__$1;
(statearr_49058_49260[(2)] = null);

(statearr_49058_49260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (2))){
var inst_49050 = (state_49052[(2)]);
var state_49052__$1 = state_49052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49052__$1,inst_49050);
} else {
if((state_val_49053 === (3))){
var inst_49033 = (state_49052[(2)]);
var state_49052__$1 = state_49052;
var statearr_49068_49263 = state_49052__$1;
(statearr_49068_49263[(2)] = inst_49033);


cljs.core.async.impl.ioc_helpers.process_exception(state_49052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49052,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_49052__$1 = state_49052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49052__$1,(5),res__44802__auto__);
} else {
if((state_val_49053 === (5))){
var inst_49038 = (state_49052[(2)]);
var inst_49039 = com.wsscode.common.async_cljs.throw_err(inst_49038);
var state_49052__$1 = (function (){var statearr_49072 = state_49052;
(statearr_49072[(7)] = inst_49039);

return statearr_49072;
})();
var statearr_49073_49267 = state_49052__$1;
(statearr_49073_49267[(2)] = null);

(statearr_49073_49267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (6))){
var inst_49039 = (state_49052[(7)]);
var inst_49048 = (state_49052[(2)]);
var state_49052__$1 = (function (){var statearr_49075 = state_49052;
(statearr_49075[(8)] = inst_49048);

return statearr_49075;
})();
var statearr_49079_49270 = state_49052__$1;
(statearr_49079_49270[(2)] = inst_49039);


cljs.core.async.impl.ioc_helpers.process_exception(state_49052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (7))){
var inst_49040 = (state_49052[(2)]);
var state_49052__$1 = (function (){var statearr_49080 = state_49052;
(statearr_49080[(9)] = inst_49040);

return statearr_49080;
})();
var statearr_49082_49273 = state_49052__$1;
(statearr_49082_49273[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception(state_49052__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49053 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49052,(7),new cljs.core.Keyword(null,"default","default",-1987822328),null,(6));
var inst_49044 = com.wsscode.pathom.profile.current_time_ms();
var inst_49045 = (inst_49044 - start_time);
var inst_49046 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49045], 0));
var state_49052__$1 = state_49052;
var statearr_49094_49279 = state_49052__$1;
(statearr_49094_49279[(2)] = inst_49046);


cljs.core.async.impl.ioc_helpers.process_exception(state_49052__$1);

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
});})(c__39003__auto__,res__44802__auto__,start_time,map__49017,map__49017__$1,env,profile_STAR_,path))
;
return ((function (switch__38929__auto__,c__39003__auto__,res__44802__auto__,start_time,map__49017,map__49017__$1,env,profile_STAR_,path){
return (function() {
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto____0 = (function (){
var statearr_49120 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49120[(0)] = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto__);

(statearr_49120[(1)] = (1));

return statearr_49120;
});
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto____1 = (function (state_49052){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49052);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49127){if((e49127 instanceof Object)){
var ex__38933__auto__ = e49127;
var statearr_49128_49284 = state_49052;
(statearr_49128_49284[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49127;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49286 = state_49052;
state_49052 = G__49286;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto__ = function(state_49052){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto____1.call(this,state_49052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto____0;
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto____1;
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,res__44802__auto__,start_time,map__49017,map__49017__$1,env,profile_STAR_,path))
})();
var state__39005__auto__ = (function (){var statearr_49147 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49147[(6)] = c__39003__auto__);

return statearr_49147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,res__44802__auto__,start_time,map__49017,map__49017__$1,env,profile_STAR_,path))
);

return c__39003__auto__;
} else {
var res = res__44802__auto__;
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));
}catch (e49161){var __49289 = e49161;
}
return res;
}
}
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__49179,k,params){
var map__49191 = p__49179;
var map__49191__$1 = (((((!((map__49191 == null))))?(((((map__49191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49191):map__49191);
var env = map__49191__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49191__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__49202 = out;
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49202,new cljs.core.Keyword(null,"action","action",-811238024),((function (G__49202,out,map__49191,map__49191__$1,env,profile_STAR_){
return (function (action){
return ((function (G__49202,out,map__49191,map__49191__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__49202,out,map__49191,map__49191__$1,env,profile_STAR_))
});})(G__49202,out,map__49191,map__49191__$1,env,profile_STAR_))
);
} else {
return G__49202;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__49223_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),cljs.core.first(p1__49223_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__49228){
var vec__49231 = p__49228;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49231,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49231,(1),null);
var G__49235 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),com.wsscode.pathom.profile.node_name(k),new cljs.core.Keyword(null,"value","value",305978217),com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49235,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__49235;
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
