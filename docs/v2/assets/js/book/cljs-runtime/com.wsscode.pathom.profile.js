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
var G__59178 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var G__59179 = tx;
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__59178,G__59179) : parser.call(null,G__59178,G__59179));
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-read","com.wsscode.pathom.core/wrap-read",-904142261),(function com$wsscode$pathom$profile$profile_plugin_wrap_read(reader){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal(p__59181){
var map__59182 = p__59181;
var map__59182__$1 = (((((!((map__59182 == null))))?(((((map__59182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59182):map__59182);
var env = map__59182__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59182__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59182__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),com.wsscode.pathom.core.key_dispatch(env))){
return cljs.core.deref(profile_STAR_);
} else {
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res__54030__auto__ = (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(env) : reader.call(null,env));
if(com.wsscode.async.async_cljs.chan_QMARK_(res__54030__auto__)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,res__54030__auto__,start_time,map__59182,map__59182__$1,env,profile_STAR_,path){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,res__54030__auto__,start_time,map__59182,map__59182__$1,env,profile_STAR_,path){
return (function (state_59223){
var state_val_59224 = (state_59223[(1)]);
if((state_val_59224 === (7))){
var _ = (function (){var statearr_59231 = state_59223;
(statearr_59231[(4)] = cljs.core.cons((10),(state_59223[(4)])));

return statearr_59231;
})();
var inst_59213 = com.wsscode.pathom.profile.current_time_ms();
var inst_59214 = (inst_59213 - start_time);
var inst_59215 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_59214], 0));
var ___$1 = (function (){var statearr_59239 = state_59223;
(statearr_59239[(4)] = cljs.core.rest((state_59223[(4)])));

return statearr_59239;
})();
var state_59223__$1 = state_59223;
var statearr_59241_59473 = state_59223__$1;
(statearr_59241_59473[(2)] = inst_59215);

(statearr_59241_59473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (1))){
var state_59223__$1 = state_59223;
var statearr_59242_59476 = state_59223__$1;
(statearr_59242_59476[(2)] = null);

(statearr_59242_59476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (4))){
var inst_59194 = (state_59223[(2)]);
var state_59223__$1 = state_59223;
var statearr_59244_59479 = state_59223__$1;
(statearr_59244_59479[(2)] = inst_59194);

(statearr_59244_59479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (6))){
var inst_59203 = (state_59223[(2)]);
var inst_59204 = com.wsscode.async.async_cljs.throw_err(inst_59203);
var state_59223__$1 = (function (){var statearr_59246 = state_59223;
(statearr_59246[(7)] = inst_59204);

return statearr_59246;
})();
var statearr_59248_59486 = state_59223__$1;
(statearr_59248_59486[(2)] = null);

(statearr_59248_59486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (3))){
var inst_59221 = (state_59223[(2)]);
var state_59223__$1 = state_59223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59223__$1,inst_59221);
} else {
if((state_val_59224 === (2))){
var _ = (function (){var statearr_59254 = state_59223;
(statearr_59254[(4)] = cljs.core.cons((5),(state_59223[(4)])));

return statearr_59254;
})();
var state_59223__$1 = state_59223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59223__$1,(6),res__54030__auto__);
} else {
if((state_val_59224 === (9))){
var inst_59206 = (state_59223[(2)]);
var state_59223__$1 = (function (){var statearr_59261 = state_59223;
(statearr_59261[(8)] = inst_59206);

return statearr_59261;
})();
var statearr_59263_59491 = state_59223__$1;
(statearr_59263_59491[(2)] = null);

(statearr_59263_59491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (5))){
var _ = (function (){var statearr_59267 = state_59223;
(statearr_59267[(4)] = cljs.core.rest((state_59223[(4)])));

return statearr_59267;
})();
var state_59223__$1 = state_59223;
var ex59251 = (state_59223__$1[(2)]);
var statearr_59268_59493 = state_59223__$1;
(statearr_59268_59493[(5)] = ex59251);


var statearr_59269_59495 = state_59223__$1;
(statearr_59269_59495[(1)] = (4));

(statearr_59269_59495[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (10))){
var _ = (function (){var statearr_59276 = state_59223;
(statearr_59276[(4)] = cljs.core.rest((state_59223[(4)])));

return statearr_59276;
})();
var state_59223__$1 = state_59223;
var ex59259 = (state_59223__$1[(2)]);
var statearr_59277_59499 = state_59223__$1;
(statearr_59277_59499[(5)] = ex59259);


var statearr_59288_59502 = state_59223__$1;
(statearr_59288_59502[(1)] = (9));

(statearr_59288_59502[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (8))){
var inst_59204 = (state_59223[(7)]);
var inst_59218 = (state_59223[(2)]);
var _ = (function (){var statearr_59297 = state_59223;
(statearr_59297[(4)] = cljs.core.rest((state_59223[(4)])));

return statearr_59297;
})();
var state_59223__$1 = (function (){var statearr_59317 = state_59223;
(statearr_59317[(9)] = inst_59218);

return statearr_59317;
})();
var statearr_59323_59505 = state_59223__$1;
(statearr_59323_59505[(2)] = inst_59204);

(statearr_59323_59505[(1)] = (3));


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
}
}
});})(c__48839__auto__,res__54030__auto__,start_time,map__59182,map__59182__$1,env,profile_STAR_,path))
;
return ((function (switch__48139__auto__,c__48839__auto__,res__54030__auto__,start_time,map__59182,map__59182__$1,env,profile_STAR_,path){
return (function() {
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto____0 = (function (){
var statearr_59330 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59330[(0)] = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto__);

(statearr_59330[(1)] = (1));

return statearr_59330;
});
var com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto____1 = (function (state_59223){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_59223);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59340){var ex__48143__auto__ = e59340;
var statearr_59341_59513 = state_59223;
(statearr_59341_59513[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_59223[(4)]))){
var statearr_59362_59515 = state_59223;
(statearr_59362_59515[(1)] = cljs.core.first((state_59223[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59516 = state_59223;
state_59223 = G__59516;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto__ = function(state_59223){
switch(arguments.length){
case 0:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto____1.call(this,state_59223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto____0;
com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto____1;
return com$wsscode$pathom$profile$profile_plugin_wrap_read_$_profile_plugin_wrap_read_internal_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,res__54030__auto__,start_time,map__59182,map__59182__$1,env,profile_STAR_,path))
})();
var state__48841__auto__ = (function (){var statearr_59381 = f__48840__auto__();
(statearr_59381[(6)] = c__48839__auto__);

return statearr_59381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,res__54030__auto__,start_time,map__59182,map__59182__$1,env,profile_STAR_,path))
);

return c__48839__auto__;
} else {
var res = res__54030__auto__;
try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(profile_STAR_,cljs.core.update_in,path,com.wsscode.pathom.profile.append_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(com.wsscode.pathom.profile.current_time_ms() - start_time)], 0));
}catch (e59389){var __59522 = e59389;
}
return res;
}
}
});
}),new cljs.core.Keyword("com.wsscode.pathom.core","wrap-mutate","com.wsscode.pathom.core/wrap-mutate",989863202),(function com$wsscode$pathom$profile$profile_plugin_wrap_mutate(mutate){
return (function com$wsscode$pathom$profile$profile_plugin_wrap_mutate_$_profile_plugin_wrap_mutate_internal(p__59402,k,params){
var map__59403 = p__59402;
var map__59403__$1 = (((((!((map__59403 == null))))?(((((map__59403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59403):map__59403);
var env = map__59403__$1;
var profile_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59403__$1,new cljs.core.Keyword("com.wsscode.pathom.profile","profile*","com.wsscode.pathom.profile/profile*",806887345));
var out = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env,k,params) : mutate.call(null,env,k,params));
var G__59411 = out;
if(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(out))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__59411,new cljs.core.Keyword(null,"action","action",-811238024),((function (G__59411,out,map__59403,map__59403__$1,env,profile_STAR_){
return (function (action){
return ((function (G__59411,out,map__59403,map__59403__$1,env,profile_STAR_){
return (function (){
var start_time = com.wsscode.pathom.profile.current_time_ms();
var res = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(profile_STAR_,cljs.core.assoc,k,(com.wsscode.pathom.profile.current_time_ms() - start_time));

return res;
});
;})(G__59411,out,map__59403,map__59403__$1,env,profile_STAR_))
});})(G__59411,out,map__59403,map__59403__$1,env,profile_STAR_))
);
} else {
return G__59411;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__59439_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.profile","self","com.wsscode.pathom.profile/self",-1038764364),cljs.core.first(p1__59439_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__59447){
var vec__59448 = p__59447;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59448,(1),null);
var G__59452 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),com.wsscode.pathom.profile.node_name(k),new cljs.core.Keyword(null,"value","value",305978217),com.wsscode.pathom.profile.node_value(v)], null);
if(cljs.core.map_QMARK_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59452,new cljs.core.Keyword(null,"children","children",-940561982),(com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.profile.profile__GT_nvc_STAR_.cljs$core$IFn$_invoke$arity$1(v) : com.wsscode.pathom.profile.profile__GT_nvc_STAR_.call(null,v)));
} else {
return G__59452;
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
