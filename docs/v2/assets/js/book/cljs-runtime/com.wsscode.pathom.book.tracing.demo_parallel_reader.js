goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),(function (){var G__61470 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null);
return G__61470;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__61472){
var map__61473 = p__61472;
var map__61473__$1 = (((((!((map__61473 == null))))?(((((map__61473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61473):map__61473);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61473__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__61473,map__61473__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__61473,map__61473__$1,id){
return (function (state_61490){
var state_val_61491 = (state_61490[(1)]);
if((state_val_61491 === (1))){
var state_61490__$1 = state_61490;
var statearr_61495_61665 = state_61490__$1;
(statearr_61495_61665[(2)] = null);

(statearr_61495_61665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61491 === (2))){
var inst_61488 = (state_61490[(2)]);
var state_61490__$1 = state_61490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61490__$1,inst_61488);
} else {
if((state_val_61491 === (3))){
var inst_61475 = (state_61490[(2)]);
var state_61490__$1 = state_61490;
var statearr_61496_61666 = state_61490__$1;
(statearr_61496_61666[(2)] = inst_61475);


cljs.core.async.impl.ioc_helpers.process_exception(state_61490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61491 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61490,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61479 = cljs.core.async.timeout((100));
var state_61490__$1 = state_61490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61490__$1,(5),inst_61479);
} else {
if((state_val_61491 === (5))){
var inst_61481 = (state_61490[(2)]);
var inst_61482 = com.wsscode.common.async_cljs.throw_err(inst_61481);
var inst_61484 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_61485 = [id,"Title",new Date(1540857600000)];
var inst_61486 = cljs.core.PersistentHashMap.fromArrays(inst_61484,inst_61485);
var state_61490__$1 = (function (){var statearr_61500 = state_61490;
(statearr_61500[(7)] = inst_61482);

return statearr_61500;
})();
var statearr_61501_61671 = state_61490__$1;
(statearr_61501_61671[(2)] = inst_61486);


cljs.core.async.impl.ioc_helpers.process_exception(state_61490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__61473,map__61473__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__61473,map__61473__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____0 = (function (){
var statearr_61505 = [null,null,null,null,null,null,null,null];
(statearr_61505[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__);

(statearr_61505[(1)] = (1));

return statearr_61505;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____1 = (function (state_61490){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61490);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61508){if((e61508 instanceof Object)){
var ex__47667__auto__ = e61508;
var statearr_61511_61673 = state_61490;
(statearr_61511_61673[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61677 = state_61490;
state_61490 = G__61677;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__ = function(state_61490){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____1.call(this,state_61490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__61473,map__61473__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_61516 = f__47947__auto__();
(statearr_61516[(6)] = c__47946__auto__);

return statearr_61516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__61473,map__61473__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),(function (){var G__61522 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null);
return G__61522;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_61545){
var state_val_61546 = (state_61545[(1)]);
if((state_val_61546 === (1))){
var state_61545__$1 = state_61545;
var statearr_61551_61687 = state_61545__$1;
(statearr_61551_61687[(2)] = null);

(statearr_61551_61687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (2))){
var inst_61541 = (state_61545[(2)]);
var state_61545__$1 = state_61545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61545__$1,inst_61541);
} else {
if((state_val_61546 === (3))){
var inst_61529 = (state_61545[(2)]);
var state_61545__$1 = state_61545;
var statearr_61557_61691 = state_61545__$1;
(statearr_61557_61691[(2)] = inst_61529);


cljs.core.async.impl.ioc_helpers.process_exception(state_61545__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61546 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61545,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61533 = cljs.core.async.timeout((100));
var state_61545__$1 = state_61545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61545__$1,(5),inst_61533);
} else {
if((state_val_61546 === (5))){
var inst_61535 = (state_61545[(2)]);
var inst_61536 = com.wsscode.common.async_cljs.throw_err(inst_61535);
var inst_61537 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_61538 = ["PG"];
var inst_61539 = cljs.core.PersistentHashMap.fromArrays(inst_61537,inst_61538);
var state_61545__$1 = (function (){var statearr_61561 = state_61545;
(statearr_61561[(7)] = inst_61536);

return statearr_61561;
})();
var statearr_61562_61694 = state_61545__$1;
(statearr_61562_61694[(2)] = inst_61539);


cljs.core.async.impl.ioc_helpers.process_exception(state_61545__$1);

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
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____0 = (function (){
var statearr_61568 = [null,null,null,null,null,null,null,null];
(statearr_61568[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__);

(statearr_61568[(1)] = (1));

return statearr_61568;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____1 = (function (state_61545){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61545);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61571){if((e61571 instanceof Object)){
var ex__47667__auto__ = e61571;
var statearr_61573_61710 = state_61545;
(statearr_61573_61710[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61571;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61711 = state_61545;
state_61545 = G__61711;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__ = function(state_61545){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____1.call(this,state_61545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_61576 = f__47947__auto__();
(statearr_61576[(6)] = c__47946__auto__);

return statearr_61576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),(function (){var G__61581 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null);
return G__61581;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__61585){
var map__61586 = p__61585;
var map__61586__$1 = (((((!((map__61586 == null))))?(((((map__61586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61586):map__61586);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61586__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__61586,map__61586__$1,title){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__61586,map__61586__$1,title){
return (function (state_61608){
var state_val_61609 = (state_61608[(1)]);
if((state_val_61609 === (1))){
var state_61608__$1 = state_61608;
var statearr_61617_61718 = state_61608__$1;
(statearr_61617_61718[(2)] = null);

(statearr_61617_61718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61609 === (2))){
var inst_61606 = (state_61608[(2)]);
var state_61608__$1 = state_61608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61608__$1,inst_61606);
} else {
if((state_val_61609 === (3))){
var inst_61590 = (state_61608[(2)]);
var state_61608__$1 = state_61608;
var statearr_61622_61719 = state_61608__$1;
(statearr_61622_61719[(2)] = inst_61590);


cljs.core.async.impl.ioc_helpers.process_exception(state_61608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61609 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_61608,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_61596 = cljs.core.async.timeout((100));
var state_61608__$1 = state_61608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61608__$1,(5),inst_61596);
} else {
if((state_val_61609 === (5))){
var inst_61598 = (state_61608[(2)]);
var inst_61599 = com.wsscode.common.async_cljs.throw_err(inst_61598);
var inst_61600 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_61601 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_61602 = [inst_61601];
var inst_61604 = cljs.core.PersistentHashMap.fromArrays(inst_61600,inst_61602);
var state_61608__$1 = (function (){var statearr_61626 = state_61608;
(statearr_61626[(7)] = inst_61599);

return statearr_61626;
})();
var statearr_61628_61725 = state_61608__$1;
(statearr_61628_61725[(2)] = inst_61604);


cljs.core.async.impl.ioc_helpers.process_exception(state_61608__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__61586,map__61586__$1,title))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__61586,map__61586__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____0 = (function (){
var statearr_61636 = [null,null,null,null,null,null,null,null];
(statearr_61636[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__);

(statearr_61636[(1)] = (1));

return statearr_61636;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____1 = (function (state_61608){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_61608);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e61639){if((e61639 instanceof Object)){
var ex__47667__auto__ = e61639;
var statearr_61640_61732 = state_61608;
(statearr_61640_61732[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_61608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61733 = state_61608;
state_61608 = G__61733;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__ = function(state_61608){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____1.call(this,state_61608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__61586,map__61586__$1,title))
})();
var state__47948__auto__ = (function (){var statearr_61645 = f__47947__auto__();
(statearr_61645[(6)] = c__47946__auto__);

return statearr_61645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__61586,map__61586__$1,title))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
