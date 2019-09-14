goog.provide('com.wsscode.pathom.book.async.demos');
goog.require('cljs.core');
goog.require('com.wsscode.pathom.book.app_types');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.common.async_cljs');
goog.require('goog.object');
goog.require('fulcro.client');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.primitives');
goog.require('fulcro.client.localized_dom');
goog.require('com.wsscode.pathom.book.async.intro');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.connect');
com.wsscode.pathom.book.async.demos.indexes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.resolver_con !== 'undefined')){
} else {
com.wsscode.pathom.book.async.demos.resolver_con = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48157 = cljs.core.get_global_hierarchy;
return (fexpr__48157.cljs$core$IFn$_invoke$arity$0 ? fexpr__48157.cljs$core$IFn$_invoke$arity$0() : fexpr__48157.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__){
return (function (state_48176){
var state_val_48177 = (state_48176[(1)]);
if((state_val_48177 === (1))){
var state_48176__$1 = state_48176;
var statearr_48178_48374 = state_48176__$1;
(statearr_48178_48374[(2)] = null);

(statearr_48178_48374[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48177 === (2))){
var inst_48174 = (state_48176[(2)]);
var state_48176__$1 = state_48176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48176__$1,inst_48174);
} else {
if((state_val_48177 === (3))){
var inst_48158 = (state_48176[(2)]);
var state_48176__$1 = state_48176;
var statearr_48179_48375 = state_48176__$1;
(statearr_48179_48375[(2)] = inst_48158);


cljs.core.async.impl.ioc_helpers.process_exception(state_48176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48177 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48176,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48162 = fetch(url);
var inst_48163 = com.wsscode.common.async_cljs.promise__GT_chan(inst_48162);
var state_48176__$1 = state_48176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48176__$1,(6),inst_48163);
} else {
if((state_val_48177 === (5))){
var inst_48170 = (state_48176[(2)]);
var inst_48171 = com.wsscode.common.async_cljs.consumer_pair(inst_48170);
var inst_48172 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_48171,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_48176__$1 = state_48176;
var statearr_48180_48376 = state_48176__$1;
(statearr_48180_48376[(2)] = inst_48172);


cljs.core.async.impl.ioc_helpers.process_exception(state_48176__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48177 === (6))){
var inst_48165 = (state_48176[(2)]);
var inst_48166 = com.wsscode.common.async_cljs.consumer_pair(inst_48165);
var inst_48167 = inst_48166.json();
var inst_48168 = com.wsscode.common.async_cljs.promise__GT_chan(inst_48167);
var state_48176__$1 = state_48176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48176__$1,(5),inst_48168);
} else {
return null;
}
}
}
}
}
}
});})(c__38998__auto__))
;
return ((function (switch__38924__auto__,c__38998__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto____0 = (function (){
var statearr_48186 = [null,null,null,null,null,null,null];
(statearr_48186[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto__);

(statearr_48186[(1)] = (1));

return statearr_48186;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto____1 = (function (state_48176){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48176);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48188){if((e48188 instanceof Object)){
var ex__38928__auto__ = e48188;
var statearr_48199_48377 = state_48176;
(statearr_48199_48377[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48378 = state_48176;
state_48176 = G__48378;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto__ = function(state_48176){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto____1.call(this,state_48176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__))
})();
var state__39000__auto__ = (function (){var statearr_48201 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_48201[(6)] = c__38998__auto__);

return statearr_48201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__))
);

return c__38998__auto__;
});
var G__48205_48379 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null);
var G__48206_48380 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null);
var G__48207_48381 = ((function (G__48205_48379,G__48206_48380){
return (function (_,___$1){
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__,G__48205_48379,G__48206_48380){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__,G__48205_48379,G__48206_48380){
return (function (state_48224){
var state_val_48225 = (state_48224[(1)]);
if((state_val_48225 === (1))){
var state_48224__$1 = state_48224;
var statearr_48226_48382 = state_48224__$1;
(statearr_48226_48382[(2)] = null);

(statearr_48226_48382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (2))){
var inst_48222 = (state_48224[(2)]);
var state_48224__$1 = state_48224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48224__$1,inst_48222);
} else {
if((state_val_48225 === (3))){
var inst_48209 = (state_48224[(2)]);
var state_48224__$1 = state_48224;
var statearr_48228_48383 = state_48224__$1;
(statearr_48228_48383[(2)] = inst_48209);


cljs.core.async.impl.ioc_helpers.process_exception(state_48224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48225 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48224,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48213 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_48214 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_48224__$1 = (function (){var statearr_48229 = state_48224;
(statearr_48229[(7)] = inst_48213);

return statearr_48229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48224__$1,(5),inst_48214);
} else {
if((state_val_48225 === (5))){
var inst_48213 = (state_48224[(7)]);
var inst_48216 = (state_48224[(2)]);
var inst_48217 = com.wsscode.common.async_cljs.throw_err(inst_48216);
var inst_48218 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_48217);
var inst_48219 = [inst_48218];
var inst_48220 = cljs.core.PersistentHashMap.fromArrays(inst_48213,inst_48219);
var state_48224__$1 = state_48224;
var statearr_48230_48384 = state_48224__$1;
(statearr_48230_48384[(2)] = inst_48220);


cljs.core.async.impl.ioc_helpers.process_exception(state_48224__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38998__auto__,G__48205_48379,G__48206_48380))
;
return ((function (switch__38924__auto__,c__38998__auto__,G__48205_48379,G__48206_48380){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0 = (function (){
var statearr_48231 = [null,null,null,null,null,null,null,null];
(statearr_48231[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38925__auto__);

(statearr_48231[(1)] = (1));

return statearr_48231;
});
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1 = (function (state_48224){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48224);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48232){if((e48232 instanceof Object)){
var ex__38928__auto__ = e48232;
var statearr_48233_48385 = state_48224;
(statearr_48233_48385[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48386 = state_48224;
state_48224 = G__48386;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__ = function(state_48224){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1.call(this,state_48224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__,G__48205_48379,G__48206_48380))
})();
var state__39000__auto__ = (function (){var statearr_48234 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_48234[(6)] = c__38998__auto__);

return statearr_48234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__,G__48205_48379,G__48206_48380))
);

return c__38998__auto__;
});})(G__48205_48379,G__48206_48380))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__48205_48379,G__48206_48380,G__48207_48381) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__48205_48379,G__48206_48380,G__48207_48381));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48240){
var vec__48241 = p__48240;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48246){
var vec__48247 = p__48246;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48247,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__48267){
var map__48268 = p__48267;
var map__48268__$1 = (((((!((map__48268 == null))))?(((((map__48268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48268):map__48268);
var show = map__48268__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48268__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
var G__48272_48387 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null);
var G__48273_48388 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null);
var G__48274_48389 = ((function (G__48272_48387,G__48273_48388){
return (function (_,p__48275){
var map__48276 = p__48275;
var map__48276__$1 = (((((!((map__48276 == null))))?(((((map__48276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48276):map__48276);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48276__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__,map__48276,map__48276__$1,id,G__48272_48387,G__48273_48388){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__,map__48276,map__48276__$1,id,G__48272_48387,G__48273_48388){
return (function (state_48292){
var state_val_48293 = (state_48292[(1)]);
if((state_val_48293 === (1))){
var state_48292__$1 = state_48292;
var statearr_48297_48390 = state_48292__$1;
(statearr_48297_48390[(2)] = null);

(statearr_48297_48390[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48293 === (2))){
var inst_48290 = (state_48292[(2)]);
var state_48292__$1 = state_48292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48292__$1,inst_48290);
} else {
if((state_val_48293 === (3))){
var inst_48279 = (state_48292[(2)]);
var state_48292__$1 = state_48292;
var statearr_48299_48391 = state_48292__$1;
(statearr_48299_48391[(2)] = inst_48279);


cljs.core.async.impl.ioc_helpers.process_exception(state_48292__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48293 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48292,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48283 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_48284 = com.wsscode.pathom.book.async.demos.fetch_json(inst_48283);
var state_48292__$1 = state_48292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48292__$1,(5),inst_48284);
} else {
if((state_val_48293 === (5))){
var inst_48286 = (state_48292[(2)]);
var inst_48287 = com.wsscode.common.async_cljs.throw_err(inst_48286);
var inst_48288 = com.wsscode.pathom.book.async.demos.adapt_show(inst_48287);
var state_48292__$1 = state_48292;
var statearr_48300_48392 = state_48292__$1;
(statearr_48300_48392[(2)] = inst_48288);


cljs.core.async.impl.ioc_helpers.process_exception(state_48292__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38998__auto__,map__48276,map__48276__$1,id,G__48272_48387,G__48273_48388))
;
return ((function (switch__38924__auto__,c__38998__auto__,map__48276,map__48276__$1,id,G__48272_48387,G__48273_48388){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0 = (function (){
var statearr_48301 = [null,null,null,null,null,null,null];
(statearr_48301[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38925__auto__);

(statearr_48301[(1)] = (1));

return statearr_48301;
});
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1 = (function (state_48292){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48292);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48302){if((e48302 instanceof Object)){
var ex__38928__auto__ = e48302;
var statearr_48303_48393 = state_48292;
(statearr_48303_48393[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48394 = state_48292;
state_48292 = G__48394;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__ = function(state_48292){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1.call(this,state_48292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__,map__48276,map__48276__$1,id,G__48272_48387,G__48273_48388))
})();
var state__39000__auto__ = (function (){var statearr_48304 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_48304[(6)] = c__38998__auto__);

return statearr_48304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__,map__48276,map__48276__$1,id,G__48272_48387,G__48273_48388))
);

return c__38998__auto__;
});})(G__48272_48387,G__48273_48388))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__48272_48387,G__48273_48388,G__48274_48389) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__48272_48387,G__48273_48388,G__48274_48389));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
var G__48305_48395 = new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null);
var G__48306_48396 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null);
var G__48307_48397 = ((function (G__48305_48395,G__48306_48396){
return (function (_,p__48308){
var map__48312 = p__48308;
var map__48312__$1 = (((((!((map__48312 == null))))?(((((map__48312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48312):map__48312);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48312__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__38998__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38998__auto__,map__48312,map__48312__$1,id,G__48305_48395,G__48306_48396){
return (function (){
var f__38999__auto__ = (function (){var switch__38924__auto__ = ((function (c__38998__auto__,map__48312,map__48312__$1,id,G__48305_48395,G__48306_48396){
return (function (state_48331){
var state_val_48332 = (state_48331[(1)]);
if((state_val_48332 === (1))){
var state_48331__$1 = state_48331;
var statearr_48333_48398 = state_48331__$1;
(statearr_48333_48398[(2)] = null);

(statearr_48333_48398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (2))){
var inst_48329 = (state_48331[(2)]);
var state_48331__$1 = state_48331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48331__$1,inst_48329);
} else {
if((state_val_48332 === (3))){
var inst_48315 = (state_48331[(2)]);
var state_48331__$1 = state_48331;
var statearr_48335_48399 = state_48331__$1;
(statearr_48335_48399[(2)] = inst_48315);


cljs.core.async.impl.ioc_helpers.process_exception(state_48331__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48332 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_48331,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_48319 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_48320 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_48321 = com.wsscode.pathom.book.async.demos.fetch_json(inst_48320);
var state_48331__$1 = (function (){var statearr_48337 = state_48331;
(statearr_48337[(7)] = inst_48319);

return statearr_48337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48331__$1,(5),inst_48321);
} else {
if((state_val_48332 === (5))){
var inst_48319 = (state_48331[(7)]);
var inst_48323 = (state_48331[(2)]);
var inst_48324 = com.wsscode.common.async_cljs.throw_err(inst_48323);
var inst_48325 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_48324);
var inst_48326 = [inst_48325];
var inst_48327 = cljs.core.PersistentHashMap.fromArrays(inst_48319,inst_48326);
var state_48331__$1 = state_48331;
var statearr_48338_48400 = state_48331__$1;
(statearr_48338_48400[(2)] = inst_48327);


cljs.core.async.impl.ioc_helpers.process_exception(state_48331__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38998__auto__,map__48312,map__48312__$1,id,G__48305_48395,G__48306_48396))
;
return ((function (switch__38924__auto__,c__38998__auto__,map__48312,map__48312__$1,id,G__48305_48395,G__48306_48396){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0 = (function (){
var statearr_48339 = [null,null,null,null,null,null,null,null];
(statearr_48339[(0)] = com$wsscode$pathom$book$async$demos$state_machine__38925__auto__);

(statearr_48339[(1)] = (1));

return statearr_48339;
});
var com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1 = (function (state_48331){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_48331);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e48340){if((e48340 instanceof Object)){
var ex__38928__auto__ = e48340;
var statearr_48341_48401 = state_48331;
(statearr_48341_48401[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48402 = state_48331;
state_48331 = G__48402;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__ = function(state_48331){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1.call(this,state_48331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__38925__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__38925__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38998__auto__,map__48312,map__48312__$1,id,G__48305_48395,G__48306_48396))
})();
var state__39000__auto__ = (function (){var statearr_48342 = (f__38999__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38999__auto__.cljs$core$IFn$_invoke$arity$0() : f__38999__auto__.call(null));
(statearr_48342[(6)] = c__38998__auto__);

return statearr_48342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39000__auto__);
});})(c__38998__auto__,map__48312,map__48312__$1,id,G__48305_48395,G__48306_48396))
);

return c__38998__auto__;
});})(G__48305_48395,G__48306_48396))
;
(com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3 ? com.wsscode.pathom.book.async.demos.defresolver.cljs$core$IFn$_invoke$arity$3(G__48305_48395,G__48306_48396,G__48307_48397) : com.wsscode.pathom.book.async.demos.defresolver.call(null,G__48305_48395,G__48306_48396,G__48307_48397));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__44526__auto__ = this;
React.Component.apply(this__44526__auto__,arguments);

if((!((this__44526__auto__.initLocalState == null)))){
this__44526__auto__.state = this__44526__auto__.initLocalState();
} else {
this__44526__auto__.state = ({});
}

return this__44526__auto__;
});

var G__48347_48403 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
var G__48348_48404 = React.Component.prototype;
var G__48349_48405 = fulcro.client.primitives.default_component_prototype;
goog.object.extend(G__48347_48403,G__48348_48404,G__48349_48405);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x48350_48406 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x48350_48406.render = ((function (x48350_48406){
return (function (){
var this__43444__auto__ = this;
var this$ = this__43444__auto__;
var _STAR_reconciler_STAR__orig_val__48352 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__48353 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__48354 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__48355 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__48356 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__48357 = fulcro.client.primitives.get_reconciler(this__43444__auto__);
var _STAR_depth_STAR__temp_val__48358 = (fulcro.client.primitives.depth(this__43444__auto__) + (1));
var _STAR_shared_STAR__temp_val__48359 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43444__auto__);
var _STAR_instrument_STAR__temp_val__48360 = fulcro.client.primitives.instrument(this__43444__auto__);
var _STAR_parent_STAR__temp_val__48361 = this__43444__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__48357;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__48358;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__48359;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__48360;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__48361;

try{var map__48363 = fulcro.client.primitives.props(this$);
var map__48363__$1 = (((((!((map__48363 == null))))?(((((map__48363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48363):map__48363);
var props = map__48363__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48363__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__48363,map__48363__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__48352,_STAR_depth_STAR__orig_val__48353,_STAR_shared_STAR__orig_val__48354,_STAR_instrument_STAR__orig_val__48355,_STAR_parent_STAR__orig_val__48356,_STAR_reconciler_STAR__temp_val__48357,_STAR_depth_STAR__temp_val__48358,_STAR_shared_STAR__temp_val__48359,_STAR_instrument_STAR__temp_val__48360,_STAR_parent_STAR__temp_val__48361,this$,this__43444__auto__,x48350_48406){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__48363,map__48363__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__48352,_STAR_depth_STAR__orig_val__48353,_STAR_shared_STAR__orig_val__48354,_STAR_instrument_STAR__orig_val__48355,_STAR_parent_STAR__orig_val__48356,_STAR_reconciler_STAR__temp_val__48357,_STAR_depth_STAR__temp_val__48358,_STAR_shared_STAR__temp_val__48359,_STAR_instrument_STAR__temp_val__48360,_STAR_parent_STAR__temp_val__48361,this$,this__43444__auto__,x48350_48406))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__48356;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__48355;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__48354;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__48353;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__48352;
}});})(x48350_48406))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x48366_48407 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x48366_48407.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48366_48407.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48366_48407){
return (function (this$,p__48367){
var map__48368 = p__48367;
var map__48368__$1 = (((((!((map__48368 == null))))?(((((map__48368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48368):map__48368);
var props = map__48368__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x48366_48407))
;

x48366_48407.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48366_48407.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48366_48407){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x48366_48407))
;


var x48370_48408 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x48370_48408.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x48370_48408.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x48370_48408){
return (function (this$,p__48371){
var map__48372 = p__48371;
var map__48372__$1 = (((((!((map__48372 == null))))?(((((map__48372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48372):map__48372);
var props = map__48372__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48372__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x48370_48408))
;

x48370_48408.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x48370_48408.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x48370_48408){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x48370_48408))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__44529__auto__,writer__44530__auto__,opt__44531__auto__){
return cljs.core._write(writer__44530__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
