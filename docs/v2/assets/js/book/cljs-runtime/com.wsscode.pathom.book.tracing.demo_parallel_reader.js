goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__53351){
var map__53352 = p__53351;
var map__53352__$1 = (((((!((map__53352 == null))))?(((((map__53352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53352):map__53352);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53352__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__53352,map__53352__$1,id){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__53352,map__53352__$1,id){
return (function (state_53369){
var state_val_53370 = (state_53369[(1)]);
if((state_val_53370 === (1))){
var state_53369__$1 = state_53369;
var statearr_53371_53566 = state_53369__$1;
(statearr_53371_53566[(2)] = null);

(statearr_53371_53566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53370 === (2))){
var inst_53367 = (state_53369[(2)]);
var state_53369__$1 = state_53369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53369__$1,inst_53367);
} else {
if((state_val_53370 === (3))){
var inst_53354 = (state_53369[(2)]);
var state_53369__$1 = state_53369;
var statearr_53395_53567 = state_53369__$1;
(statearr_53395_53567[(2)] = inst_53354);


cljs.core.async.impl.ioc_helpers.process_exception(state_53369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53370 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53369,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53358 = cljs.core.async.timeout((100));
var state_53369__$1 = state_53369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53369__$1,(5),inst_53358);
} else {
if((state_val_53370 === (5))){
var inst_53360 = (state_53369[(2)]);
var inst_53361 = com.wsscode.common.async_cljs.throw_err(inst_53360);
var inst_53363 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_53364 = [id,"Title",new Date(1540857600000)];
var inst_53365 = cljs.core.PersistentHashMap.fromArrays(inst_53363,inst_53364);
var state_53369__$1 = (function (){var statearr_53396 = state_53369;
(statearr_53396[(7)] = inst_53361);

return statearr_53396;
})();
var statearr_53397_53576 = state_53369__$1;
(statearr_53397_53576[(2)] = inst_53365);


cljs.core.async.impl.ioc_helpers.process_exception(state_53369__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,map__53352,map__53352__$1,id))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__53352,map__53352__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto____0 = (function (){
var statearr_53398 = [null,null,null,null,null,null,null,null];
(statearr_53398[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto__);

(statearr_53398[(1)] = (1));

return statearr_53398;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto____1 = (function (state_53369){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53369);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53399){if((e53399 instanceof Object)){
var ex__38928__auto__ = e53399;
var statearr_53400_53581 = state_53369;
(statearr_53400_53581[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53584 = state_53369;
state_53369 = G__53584;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto__ = function(state_53369){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto____1.call(this,state_53369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__53352,map__53352__$1,id))
})();
var state__38973__auto__ = (function (){var statearr_53401 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53401[(6)] = c__38971__auto__);

return statearr_53401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__53352,map__53352__$1,id))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_53426){
var state_val_53427 = (state_53426[(1)]);
if((state_val_53427 === (1))){
var state_53426__$1 = state_53426;
var statearr_53431_53589 = state_53426__$1;
(statearr_53431_53589[(2)] = null);

(statearr_53431_53589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53427 === (2))){
var inst_53424 = (state_53426[(2)]);
var state_53426__$1 = state_53426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53426__$1,inst_53424);
} else {
if((state_val_53427 === (3))){
var inst_53412 = (state_53426[(2)]);
var state_53426__$1 = state_53426;
var statearr_53434_53592 = state_53426__$1;
(statearr_53434_53592[(2)] = inst_53412);


cljs.core.async.impl.ioc_helpers.process_exception(state_53426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53427 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53426,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53416 = cljs.core.async.timeout((100));
var state_53426__$1 = state_53426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53426__$1,(5),inst_53416);
} else {
if((state_val_53427 === (5))){
var inst_53418 = (state_53426[(2)]);
var inst_53419 = com.wsscode.common.async_cljs.throw_err(inst_53418);
var inst_53420 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_53421 = ["PG"];
var inst_53422 = cljs.core.PersistentHashMap.fromArrays(inst_53420,inst_53421);
var state_53426__$1 = (function (){var statearr_53436 = state_53426;
(statearr_53436[(7)] = inst_53419);

return statearr_53436;
})();
var statearr_53437_53599 = state_53426__$1;
(statearr_53437_53599[(2)] = inst_53422);


cljs.core.async.impl.ioc_helpers.process_exception(state_53426__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto____0 = (function (){
var statearr_53438 = [null,null,null,null,null,null,null,null];
(statearr_53438[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto__);

(statearr_53438[(1)] = (1));

return statearr_53438;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto____1 = (function (state_53426){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53426);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53440){if((e53440 instanceof Object)){
var ex__38928__auto__ = e53440;
var statearr_53441_53603 = state_53426;
(statearr_53441_53603[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53605 = state_53426;
state_53426 = G__53605;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto__ = function(state_53426){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto____1.call(this,state_53426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_53445 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53445[(6)] = c__38971__auto__);

return statearr_53445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__53457){
var map__53459 = p__53457;
var map__53459__$1 = (((((!((map__53459 == null))))?(((((map__53459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53459):map__53459);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53459__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__53459,map__53459__$1,title){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__53459,map__53459__$1,title){
return (function (state_53490){
var state_val_53491 = (state_53490[(1)]);
if((state_val_53491 === (1))){
var state_53490__$1 = state_53490;
var statearr_53495_53617 = state_53490__$1;
(statearr_53495_53617[(2)] = null);

(statearr_53495_53617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (2))){
var inst_53488 = (state_53490[(2)]);
var state_53490__$1 = state_53490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53490__$1,inst_53488);
} else {
if((state_val_53491 === (3))){
var inst_53474 = (state_53490[(2)]);
var state_53490__$1 = state_53490;
var statearr_53505_53620 = state_53490__$1;
(statearr_53505_53620[(2)] = inst_53474);


cljs.core.async.impl.ioc_helpers.process_exception(state_53490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53491 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53490,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53479 = cljs.core.async.timeout((100));
var state_53490__$1 = state_53490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53490__$1,(5),inst_53479);
} else {
if((state_val_53491 === (5))){
var inst_53481 = (state_53490[(2)]);
var inst_53482 = com.wsscode.common.async_cljs.throw_err(inst_53481);
var inst_53483 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_53484 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_53485 = [inst_53484];
var inst_53486 = cljs.core.PersistentHashMap.fromArrays(inst_53483,inst_53485);
var state_53490__$1 = (function (){var statearr_53542 = state_53490;
(statearr_53542[(7)] = inst_53482);

return statearr_53542;
})();
var statearr_53544_53629 = state_53490__$1;
(statearr_53544_53629[(2)] = inst_53486);


cljs.core.async.impl.ioc_helpers.process_exception(state_53490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,map__53459,map__53459__$1,title))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__53459,map__53459__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto____0 = (function (){
var statearr_53546 = [null,null,null,null,null,null,null,null];
(statearr_53546[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto__);

(statearr_53546[(1)] = (1));

return statearr_53546;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto____1 = (function (state_53490){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_53490);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e53547){if((e53547 instanceof Object)){
var ex__38928__auto__ = e53547;
var statearr_53548_53630 = state_53490;
(statearr_53548_53630[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53635 = state_53490;
state_53490 = G__53635;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto__ = function(state_53490){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto____1.call(this,state_53490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__53459,map__53459__$1,title))
})();
var state__38973__auto__ = (function (){var statearr_53551 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_53551[(6)] = c__38971__auto__);

return statearr_53551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__53459,map__53459__$1,title))
);

return c__38971__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
