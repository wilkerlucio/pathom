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
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__93668 = cljs.core.get_global_hierarchy;
return (fexpr__93668.cljs$core$IFn$_invoke$arity$0 ? fexpr__93668.cljs$core$IFn$_invoke$arity$0() : fexpr__93668.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("com.wsscode.pathom.book.async.demos","resolver-con"),com.wsscode.pathom.connect.resolver_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
com.wsscode.pathom.book.async.demos.defresolver = com.wsscode.pathom.connect.resolver_factory(com.wsscode.pathom.book.async.demos.resolver_con,com.wsscode.pathom.book.async.demos.indexes);
com.wsscode.pathom.book.async.demos.fetch_json = (function com$wsscode$pathom$book$async$demos$fetch_json(url){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93687){
var state_val_93688 = (state_93687[(1)]);
if((state_val_93688 === (1))){
var state_93687__$1 = state_93687;
var statearr_93689_93820 = state_93687__$1;
(statearr_93689_93820[(2)] = null);

(statearr_93689_93820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93688 === (2))){
var inst_93685 = (state_93687[(2)]);
var state_93687__$1 = state_93687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93687__$1,inst_93685);
} else {
if((state_val_93688 === (3))){
var inst_93669 = (state_93687[(2)]);
var state_93687__$1 = state_93687;
var statearr_93690_93821 = state_93687__$1;
(statearr_93690_93821[(2)] = inst_93669);


cljs.core.async.impl.ioc_helpers.process_exception(state_93687__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93688 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93687,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93673 = fetch(url);
var inst_93674 = com.wsscode.common.async_cljs.promise__GT_chan(inst_93673);
var state_93687__$1 = state_93687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93687__$1,(6),inst_93674);
} else {
if((state_val_93688 === (5))){
var inst_93681 = (state_93687[(2)]);
var inst_93682 = com.wsscode.common.async_cljs.consumer_pair(inst_93681);
var inst_93683 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(inst_93682,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var state_93687__$1 = state_93687;
var statearr_93691_93822 = state_93687__$1;
(statearr_93691_93822[(2)] = inst_93683);


cljs.core.async.impl.ioc_helpers.process_exception(state_93687__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93688 === (6))){
var inst_93676 = (state_93687[(2)]);
var inst_93677 = com.wsscode.common.async_cljs.consumer_pair(inst_93676);
var inst_93678 = inst_93677.json();
var inst_93679 = com.wsscode.common.async_cljs.promise__GT_chan(inst_93678);
var state_93687__$1 = state_93687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93687__$1,(5),inst_93679);
} else {
return null;
}
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____0 = (function (){
var statearr_93694 = [null,null,null,null,null,null,null];
(statearr_93694[(0)] = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__);

(statearr_93694[(1)] = (1));

return statearr_93694;
});
var com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____1 = (function (state_93687){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93687);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93695){if((e93695 instanceof Object)){
var ex__47667__auto__ = e93695;
var statearr_93696_93823 = state_93687;
(statearr_93696_93823[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93695;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93824 = state_93687;
state_93687 = G__93824;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__ = function(state_93687){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____1.call(this,state_93687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$fetch_json_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93697 = f__47947__auto__();
(statearr_93697[(6)] = c__47946__auto__);

return statearr_93697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","random-dog","com.wsscode.pathom.book.async.demos/random-dog",-327443551,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","cache?","com.wsscode.pathom.connect/cache?",900636117),false], null),(function (_,___$1){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93713){
var state_val_93714 = (state_93713[(1)]);
if((state_val_93714 === (1))){
var state_93713__$1 = state_93713;
var statearr_93715_93825 = state_93713__$1;
(statearr_93715_93825[(2)] = null);

(statearr_93715_93825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93714 === (2))){
var inst_93711 = (state_93713[(2)]);
var state_93713__$1 = state_93713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93713__$1,inst_93711);
} else {
if((state_val_93714 === (3))){
var inst_93698 = (state_93713[(2)]);
var state_93713__$1 = state_93713;
var statearr_93717_93826 = state_93713__$1;
(statearr_93717_93826[(2)] = inst_93698);


cljs.core.async.impl.ioc_helpers.process_exception(state_93713__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93714 === (4))){
var ___$2 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93713,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93702 = [new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324)];
var inst_93703 = com.wsscode.pathom.book.async.demos.fetch_json("https://dog.ceo/api/breeds/image/random");
var state_93713__$1 = (function (){var statearr_93719 = state_93713;
(statearr_93719[(7)] = inst_93702);

return statearr_93719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93713__$1,(5),inst_93703);
} else {
if((state_val_93714 === (5))){
var inst_93702 = (state_93713[(7)]);
var inst_93705 = (state_93713[(2)]);
var inst_93706 = com.wsscode.common.async_cljs.throw_err(inst_93705);
var inst_93707 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_93706);
var inst_93708 = [inst_93707];
var inst_93709 = cljs.core.PersistentHashMap.fromArrays(inst_93702,inst_93708);
var state_93713__$1 = state_93713;
var statearr_93720_93827 = state_93713__$1;
(statearr_93720_93827[(2)] = inst_93709);


cljs.core.async.impl.ioc_helpers.process_exception(state_93713__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0 = (function (){
var statearr_93721 = [null,null,null,null,null,null,null,null];
(statearr_93721[(0)] = com$wsscode$pathom$book$async$demos$state_machine__47664__auto__);

(statearr_93721[(1)] = (1));

return statearr_93721;
});
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1 = (function (state_93713){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93713);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93722){if((e93722 instanceof Object)){
var ex__47667__auto__ = e93722;
var statearr_93723_93828 = state_93713;
(statearr_93723_93828[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93829 = state_93713;
state_93713 = G__93829;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = function(state_93713){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1.call(this,state_93713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_93724 = f__47947__auto__();
(statearr_93724[(6)] = c__47946__auto__);

return statearr_93724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.demos.namespace_keys = (function com$wsscode$pathom$book$async$demos$namespace_keys(x,ns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__93726){
var vec__93728 = p__93726;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93728,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.name(k)),v], null);
})),x);
});
com.wsscode.pathom.book.async.demos.adapt_schedule = (function com$wsscode$pathom$book$async$demos$adapt_schedule(schedule){
return com.wsscode.pathom.book.async.demos.namespace_keys(schedule,"tvmaze.schedule");
});
com.wsscode.pathom.book.async.demos.adapt_externals = (function com$wsscode$pathom$book$async$demos$adapt_externals(externals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__93731){
var vec__93732 = p__93731;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__93732,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),"id"),v], null);
})),externals);
});
com.wsscode.pathom.book.async.demos.adapt_show = (function com$wsscode$pathom$book$async$demos$adapt_show(p__93735){
var map__93736 = p__93735;
var map__93736__$1 = (((((!((map__93736 == null))))?(((((map__93736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93736):map__93736);
var show = map__93736__$1;
var externals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93736__$1,new cljs.core.Keyword(null,"externals","externals",-1256019925));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(show,new cljs.core.Keyword(null,"externals","externals",-1256019925),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"_links","_links",-1764230981)], 0)),new cljs.core.Keyword(null,"schedule","schedule",349275266),com.wsscode.pathom.book.async.demos.adapt_schedule),"tvmaze.show"),com.wsscode.pathom.book.async.demos.adapt_externals(externals)], 0));
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-by-id","com.wsscode.pathom.book.async.demos/tvmaze-show-by-id",1540496513,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.show","url","tvmaze.show/url",-1942518592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","schedule","tvmaze.show/schedule",-1718496512),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.schedule","time","tvmaze.schedule/time",802197486),new cljs.core.Keyword("tvmaze.schedule","days","tvmaze.schedule/days",-918360656)], null)], null),new cljs.core.Keyword("thetvdb","id","thetvdb/id",449796035),new cljs.core.Keyword("tvrage","id","tvrage/id",-235863707),new cljs.core.Keyword("tvmaze.show","weight","tvmaze.show/weight",553349573),new cljs.core.Keyword("tvmaze.show","type","tvmaze.show/type",-247594970),new cljs.core.Keyword("tvmaze.show","name","tvmaze.show/name",-89886777),new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","webChannel","tvmaze.show/webChannel",1466870059),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"country","country",312965309)], null)], null),new cljs.core.Keyword("tvmaze.show","status","tvmaze.show/status",355218797),new cljs.core.Keyword("tvmaze.show","language","tvmaze.show/language",-1804963698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","image","tvmaze.show/image",1908475534),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.show","runtime","tvmaze.show/runtime",-2073961586),new cljs.core.Keyword("tvmaze.show","updated","tvmaze.show/updated",1380136306),new cljs.core.Keyword("imdb","id","imdb/id",-1385293390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","network","tvmaze.show/network",-302880909),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"country","country",312965309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"timezone","timezone",1831928099)], null)], null)], null)], null),new cljs.core.Keyword("tvmaze.show","officialSite","tvmaze.show/officialSite",1325720278),new cljs.core.Keyword("tvmaze.show","summary","tvmaze.show/summary",-1569507370),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","rating","tvmaze.show/rating",-1135011368),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168)], null)], null),new cljs.core.Keyword("tvmaze.show","premiered","tvmaze.show/premiered",1517198014),new cljs.core.Keyword("tvmaze.show","genres","tvmaze.show/genres",1518905183)], null)], null),(function (_,p__93738){
var map__93739 = p__93738;
var map__93739__$1 = (((((!((map__93739 == null))))?(((((map__93739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93739):map__93739);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93739__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93739,map__93739__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93739,map__93739__$1,id){
return (function (state_93754){
var state_val_93755 = (state_93754[(1)]);
if((state_val_93755 === (1))){
var state_93754__$1 = state_93754;
var statearr_93756_93941 = state_93754__$1;
(statearr_93756_93941[(2)] = null);

(statearr_93756_93941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93755 === (2))){
var inst_93752 = (state_93754[(2)]);
var state_93754__$1 = state_93754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93754__$1,inst_93752);
} else {
if((state_val_93755 === (3))){
var inst_93741 = (state_93754[(2)]);
var state_93754__$1 = state_93754;
var statearr_93757_93945 = state_93754__$1;
(statearr_93757_93945[(2)] = inst_93741);


cljs.core.async.impl.ioc_helpers.process_exception(state_93754__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93755 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93754,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93745 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_93746 = com.wsscode.pathom.book.async.demos.fetch_json(inst_93745);
var state_93754__$1 = state_93754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93754__$1,(5),inst_93746);
} else {
if((state_val_93755 === (5))){
var inst_93748 = (state_93754[(2)]);
var inst_93749 = com.wsscode.common.async_cljs.throw_err(inst_93748);
var inst_93750 = com.wsscode.pathom.book.async.demos.adapt_show(inst_93749);
var state_93754__$1 = state_93754;
var statearr_93758_93950 = state_93754__$1;
(statearr_93758_93950[(2)] = inst_93750);


cljs.core.async.impl.ioc_helpers.process_exception(state_93754__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__93739,map__93739__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93739,map__93739__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0 = (function (){
var statearr_93759 = [null,null,null,null,null,null,null];
(statearr_93759[(0)] = com$wsscode$pathom$book$async$demos$state_machine__47664__auto__);

(statearr_93759[(1)] = (1));

return statearr_93759;
});
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1 = (function (state_93754){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93754);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93760){if((e93760 instanceof Object)){
var ex__47667__auto__ = e93760;
var statearr_93761_93954 = state_93754;
(statearr_93761_93954[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93760;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__93957 = state_93754;
state_93754 = G__93957;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = function(state_93754){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1.call(this,state_93754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93739,map__93739__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_93762 = f__47947__auto__();
(statearr_93762[(6)] = c__47946__auto__);

return statearr_93762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93739,map__93739__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.demos.adapt_episode = (function com$wsscode$pathom$book$async$demos$adapt_episode(episode){
return com.wsscode.pathom.book.async.demos.namespace_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(episode,new cljs.core.Keyword(null,"_links","_links",-1764230981)),"tvmaze.episode");
});
com.wsscode.pathom.book.async.demos.defresolver(new cljs.core.Symbol("com.wsscode.pathom.book.async.demos","tvmaze-show-episodes","com.wsscode.pathom.book.async.demos/tvmaze-show-episodes",1735213976,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tvmaze.episode","runtime","tvmaze.episode/runtime",-1090727774),new cljs.core.Keyword("tvmaze.episode","season","tvmaze.episode/season",-2123196477),new cljs.core.Keyword("tvmaze.episode","url","tvmaze.episode/url",-1087178748),new cljs.core.Keyword("tvmaze.episode","id","tvmaze.episode/id",-1746946074),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tvmaze.episode","image","tvmaze.episode/image",-1361384630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"medium","medium",-1864319384),new cljs.core.Keyword(null,"original","original",-445386197)], null)], null),new cljs.core.Keyword("tvmaze.episode","airstamp","tvmaze.episode/airstamp",833726231),new cljs.core.Keyword("tvmaze.episode","airtime","tvmaze.episode/airtime",-2046164552),new cljs.core.Keyword("tvmaze.episode","summary","tvmaze.episode/summary",-469088902),new cljs.core.Keyword("tvmaze.episode","name","tvmaze.episode/name",-1147972997),new cljs.core.Keyword("tvmaze.episode","number","tvmaze.episode/number",202108),new cljs.core.Keyword("tvmaze.episode","airdate","tvmaze.episode/airdate",575526911)], null)], null)], null)], null),(function (_,p__93764){
var map__93765 = p__93764;
var map__93765__$1 = (((((!((map__93765 == null))))?(((((map__93765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93765):map__93765);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93765__$1,new cljs.core.Keyword("tvmaze.show","id","tvmaze.show/id",1501485770));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93765,map__93765__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93765,map__93765__$1,id){
return (function (state_93783){
var state_val_93784 = (state_93783[(1)]);
if((state_val_93784 === (1))){
var state_93783__$1 = state_93783;
var statearr_93786_93963 = state_93783__$1;
(statearr_93786_93963[(2)] = null);

(statearr_93786_93963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93784 === (2))){
var inst_93781 = (state_93783[(2)]);
var state_93783__$1 = state_93783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93783__$1,inst_93781);
} else {
if((state_val_93784 === (3))){
var inst_93767 = (state_93783[(2)]);
var state_93783__$1 = state_93783;
var statearr_93789_93970 = state_93783__$1;
(statearr_93789_93970[(2)] = inst_93767);


cljs.core.async.impl.ioc_helpers.process_exception(state_93783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93784 === (4))){
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93783,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93771 = [new cljs.core.Keyword("tvmaze.show","episodes","tvmaze.show/episodes",-57025717)];
var inst_93772 = ["http://api.tvmaze.com/shows/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/episodes"].join('');
var inst_93773 = com.wsscode.pathom.book.async.demos.fetch_json(inst_93772);
var state_93783__$1 = (function (){var statearr_93791 = state_93783;
(statearr_93791[(7)] = inst_93771);

return statearr_93791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93783__$1,(5),inst_93773);
} else {
if((state_val_93784 === (5))){
var inst_93771 = (state_93783[(7)]);
var inst_93775 = (state_93783[(2)]);
var inst_93776 = com.wsscode.common.async_cljs.throw_err(inst_93775);
var inst_93777 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.book.async.demos.adapt_episode,inst_93776);
var inst_93778 = [inst_93777];
var inst_93779 = cljs.core.PersistentHashMap.fromArrays(inst_93771,inst_93778);
var state_93783__$1 = state_93783;
var statearr_93792_93984 = state_93783__$1;
(statearr_93792_93984[(2)] = inst_93779);


cljs.core.async.impl.ioc_helpers.process_exception(state_93783__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__93765,map__93765__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93765,map__93765__$1,id){
return (function() {
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0 = (function (){
var statearr_93793 = [null,null,null,null,null,null,null,null];
(statearr_93793[(0)] = com$wsscode$pathom$book$async$demos$state_machine__47664__auto__);

(statearr_93793[(1)] = (1));

return statearr_93793;
});
var com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1 = (function (state_93783){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93783);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93794){if((e93794 instanceof Object)){
var ex__47667__auto__ = e93794;
var statearr_93795_94017 = state_93783;
(statearr_93795_94017[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94021 = state_93783;
state_93783 = G__94021;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__ = function(state_93783){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1.call(this,state_93783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____0;
com$wsscode$pathom$book$async$demos$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$async$demos$state_machine__47664__auto____1;
return com$wsscode$pathom$book$async$demos$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93765,map__93765__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_93796 = f__47947__auto__();
(statearr_93796[(6)] = c__47946__auto__);

return statearr_93796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93765,map__93765__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.async.demos.parser = com.wsscode.pathom.core.async_parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.all_async_readers,com.wsscode.pathom.core.ident_join_reader,com.wsscode.pathom.core.placeholder_reader.cljs$core$IFn$_invoke$arity$0()], null),new cljs.core.Keyword("com.wsscode.pathom.connect","resolver-dispatch","com.wsscode.pathom.connect/resolver-dispatch",497281311),com.wsscode.pathom.book.async.demos.resolver_con,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),cljs.core.deref(com.wsscode.pathom.book.async.demos.indexes)], null),new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin], null)], null));
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.book !== 'undefined') && (typeof com.wsscode.pathom.book.async !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos !== 'undefined') && (typeof com.wsscode.pathom.book.async.demos.AsyncParserDemo !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.book.async.demos.AsyncParserDemo = (function com$wsscode$pathom$book$async$demos$AsyncParserDemo(){
var this__51967__auto__ = this;
React.Component.apply(this__51967__auto__,arguments);

if((!((this__51967__auto__.initLocalState == null)))){
this__51967__auto__.state = this__51967__auto__.initLocalState();
} else {
this__51967__auto__.state = ({});
}

return this__51967__auto__;
});

goog.object.extend(com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","AsyncParserDemo","com.wsscode.pathom.book.async.demos/AsyncParserDemo",1707225919),com.wsscode.pathom.book.async.demos.AsyncParserDemo);

var x93799_94031 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x93799_94031.render = ((function (x93799_94031){
return (function (){
var this__50885__auto__ = this;
var this$ = this__50885__auto__;
var _STAR_reconciler_STAR__orig_val__93800 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__93801 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__93802 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__93803 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__93804 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__93805 = fulcro.client.primitives.get_reconciler(this__50885__auto__);
var _STAR_depth_STAR__temp_val__93806 = (fulcro.client.primitives.depth(this__50885__auto__) + (1));
var _STAR_shared_STAR__temp_val__93807 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__50885__auto__);
var _STAR_instrument_STAR__temp_val__93808 = fulcro.client.primitives.instrument(this__50885__auto__);
var _STAR_parent_STAR__temp_val__93809 = this__50885__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__93805;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__93806;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__93807;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__93808;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__93809;

try{var map__93810 = fulcro.client.primitives.props(this$);
var map__93810__$1 = (((((!((map__93810 == null))))?(((((map__93810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93810):map__93810);
var props = map__93810__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93810__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var marker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(fulcro.client.data_fetch.loading_QMARK_(marker))?fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Loading..."], 0)):fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (marker,map__93810,map__93810__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__93800,_STAR_depth_STAR__orig_val__93801,_STAR_shared_STAR__orig_val__93802,_STAR_instrument_STAR__orig_val__93803,_STAR_parent_STAR__orig_val__93804,_STAR_reconciler_STAR__temp_val__93805,_STAR_depth_STAR__temp_val__93806,_STAR_shared_STAR__temp_val__93807,_STAR_instrument_STAR__temp_val__93808,_STAR_parent_STAR__temp_val__93809,this$,this__50885__auto__,x93799_94031){
return (function (){
return fulcro.client.data_fetch.load_field.cljs$core$IFn$_invoke$arity$variadic(this$,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], 0));
});})(marker,map__93810,map__93810__$1,props,random_dog_url,_STAR_reconciler_STAR__orig_val__93800,_STAR_depth_STAR__orig_val__93801,_STAR_shared_STAR__orig_val__93802,_STAR_instrument_STAR__orig_val__93803,_STAR_parent_STAR__orig_val__93804,_STAR_reconciler_STAR__temp_val__93805,_STAR_depth_STAR__temp_val__93806,_STAR_shared_STAR__temp_val__93807,_STAR_instrument_STAR__temp_val__93808,_STAR_parent_STAR__temp_val__93809,this$,this__50885__auto__,x93799_94031))
], null),"Load"], 0)))], 0)),(cljs.core.truth_(random_dog_url)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),random_dog_url], null)], 0))], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__93804;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__93803;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__93802;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__93801;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__93800;
}});})(x93799_94031))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor = com.wsscode.pathom.book.async.demos.AsyncParserDemo;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.constructor.displayName = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype.fulcro$isComponent = true;

var x93812_94062 = com.wsscode.pathom.book.async.demos.AsyncParserDemo;
x93812_94062.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x93812_94062.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x93812_94062){
return (function (this$,p__93813){
var map__93814 = p__93813;
var map__93814__$1 = (((((!((map__93814 == null))))?(((((map__93814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93814):map__93814);
var props = map__93814__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93814__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x93812_94062))
;

x93812_94062.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x93812_94062.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x93812_94062){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x93812_94062))
;


var x93816_94066 = com.wsscode.pathom.book.async.demos.AsyncParserDemo.prototype;
x93816_94066.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x93816_94066.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x93816_94066){
return (function (this$,p__93817){
var map__93818 = p__93817;
var map__93818__$1 = (((((!((map__93818 == null))))?(((((map__93818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93818):map__93818);
var props = map__93818__$1;
var random_dog_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93818__$1,new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),"singleton"], null);
});})(x93816_94066))
;

x93816_94066.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x93816_94066.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x93816_94066){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","id","com.wsscode.pathom.book.async.demos/id",209995719),new cljs.core.Keyword(null,"random-dog-url","random-dog-url",-574308324),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fulcro.client.data_fetch.marker_table,new cljs.core.Keyword("com.wsscode.pathom.book.async.demos","dog-load","com.wsscode.pathom.book.async.demos/dog-load",-785225058)], null)], null);
});})(x93816_94066))
;


com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$type = true;

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorStr = "com.wsscode.pathom.book.async.demos/AsyncParserDemo";

com.wsscode.pathom.book.async.demos.AsyncParserDemo.cljs$lang$ctorPrWriter = (function (this__51970__auto__,writer__51971__auto__,opt__51972__auto__){
return cljs.core._write(writer__51971__auto__,"com.wsscode.pathom.book.async.demos/AsyncParserDemo");
});
com.wsscode.pathom.book.async.demos.async_parser_demo = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.book.async.demos.AsyncParserDemo);

//# sourceMappingURL=com.wsscode.pathom.book.async.demos.js.map
