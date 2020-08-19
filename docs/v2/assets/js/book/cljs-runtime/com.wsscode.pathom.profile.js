goog.provide('com.wsscode.pathom.profile');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('com.wsscode.async.async_cljs');
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
var G__87798 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__87799 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__87798,G__87799) : parser.call(null,G__87798,G__87799));
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__87805){
var map__87806 = p__87805;
var map__87806__$1 = (((((!((map__87806 == null))))?(((((map__87806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__87806):map__87806);
var env = map__87806__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87806__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__87806__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res__53554__auto__ = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__53554__auto__)){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,res__53554__auto__,start_time,map__87806,map__87806__$1,env,profile_STAR_,path){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,res__53554__auto__,start_time,map__87806,map__87806__$1,env,profile_STAR_,path){
return (function (state_87842){
var state_val_87843 = (state_87842[(1)]);
if((state_val_87843 === (1))){
var state_87842__$1 = state_87842;
var statearr_87851_88081 = state_87842__$1;
(statearr_87851_88081[(2)] = null);

(statearr_87851_88081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87843 === (2))){
var inst_87840 = (state_87842[(2)]);
var state_87842__$1 = state_87842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87842__$1,inst_87840);
} else {
if((state_val_87843 === (3))){
var inst_87814 = (state_87842[(2)]);
var state_87842__$1 = state_87842;
var statearr_87858_88084 = state_87842__$1;
(statearr_87858_88084[(2)] = inst_87814);


cljs.core.async.impl.ioc_helpers.process_exception(state_87842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87843 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87842,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_87842__$1 = state_87842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87842__$1,(5),res__53554__auto__);
} else {
if((state_val_87843 === (5))){
var inst_87827 = (state_87842[(2)]);
var inst_87828 = com.wsscode.async.async_cljs.throw_err(inst_87827);
var state_87842__$1 = (function (){var statearr_87862 = state_87842;
(statearr_87862[(7)] = inst_87828);

return statearr_87862;
})();
var statearr_87864_88089 = state_87842__$1;
(statearr_87864_88089[(2)] = null);

(statearr_87864_88089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87843 === (6))){
var inst_87828 = (state_87842[(7)]);
var inst_87838 = (state_87842[(2)]);
var state_87842__$1 = (function (){var statearr_87871 = state_87842;
(statearr_87871[(8)] = inst_87838);

return statearr_87871;
})();
var statearr_87873_88093 = state_87842__$1;
(statearr_87873_88093[(2)] = inst_87828);


cljs.core.async.impl.ioc_helpers.process_exception(state_87842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87843 === (7))){
var inst_87829 = (state_87842[(2)]);
var state_87842__$1 = (function (){var statearr_87885 = state_87842;
(statearr_87885[(9)] = inst_87829);

return statearr_87885;
})();
var statearr_87889_88096 = state_87842__$1;
(statearr_87889_88096[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception(state_87842__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87843 === (8))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_87842,(7),new cljs.core.Keyword(null,"default","default",-1987822328),null,(6));
var inst_87834 = com.wsscode.pathom.profile.current_time_ms();
var inst_87835 = (inst_87834 - start_time);
var inst_87836 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_87835], 0));
var state_87842__$1 = state_87842;
var statearr_87915_88099 = state_87842__$1;
(statearr_87915_88099[(2)] = inst_87836);


cljs.core.async.impl.ioc_helpers.process_exception(state_87842__$1);

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
});})(c__47946__auto__,res__53554__auto__,start_time,map__87806,map__87806__$1,env,profile_STAR_,path))
;
return ((function (switch__47663__auto__,c__47946__auto__,res__53554__auto__,start_time,map__87806,map__87806__$1,env,profile_STAR_,path){
return (function() {
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto____0 = (function (){
var statearr_87952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_87952[(0)] = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto__);

(statearr_87952[(1)] = (1));

return statearr_87952;
});
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto____1 = (function (state_87842){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_87842);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e87965){if((e87965 instanceof Object)){
var ex__47667__auto__ = e87965;
var statearr_87978_88102 = state_87842;
(statearr_87978_88102[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_87842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87965;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88103 = state_87842;
state_87842 = G__88103;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto__ = function(state_87842){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto____1.call(this,state_87842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto____0;
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto____1;
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,res__53554__auto__,start_time,map__87806,map__87806__$1,env,profile_STAR_,path))
})();
var state__47948__auto__ = (function (){var statearr_87982 = f__47947__auto__();
(statearr_87982[(6)] = c__47946__auto__);

return statearr_87982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,res__53554__auto__,start_time,map__87806,map__87806__$1,env,profile_STAR_,path))
);

return c__47946__auto__;
} else {
var res = res__53554__auto__;
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));
}catch (e87992){var __88107 = e87992;
}
return res;
}
}
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__87998,k,params){
var map__88000 = p__87998;
var map__88000__$1 = (((((!((map__88000 == null))))?(((((map__88000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88000):map__88000);
var env = map__88000__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88000__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__88011 = out;
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__88011,new cljs.core.Keyword(null,"action","action",-811238024),((function (G__88011,out,map__88000,map__88000__$1,env,profile_STAR_){
return (function (action){
return ((function (G__88011,out,map__88000,map__88000__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__88011,out,map__88000,map__88000__$1,env,profile_STAR_))
});})(G__88011,out,map__88000,map__88000__$1,env,profile_STAR_))
);
} else {
return G__88011;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__88032_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),cljs.core.first(p1__88032_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__88039){
var vec__88041 = p__88039;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88041,(1),null);
var G__88046 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),com.wsscode.pathom.profile.node_name(k),new cljs.core.Keyword(null,"value","value",305978217),com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__88046,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__88046;
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
