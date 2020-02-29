goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),(function (){var G__73507 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null);
return G__73507;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__73509){
var map__73510 = p__73509;
var map__73510__$1 = (((((!((map__73510 == null))))?(((((map__73510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73510):map__73510);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73510__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__73510,map__73510__$1,id){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__73510,map__73510__$1,id){
return (function (state_73531){
var state_val_73532 = (state_73531[(1)]);
if((state_val_73532 === (1))){
var state_73531__$1 = state_73531;
var statearr_73540_73763 = state_73531__$1;
(statearr_73540_73763[(2)] = null);

(statearr_73540_73763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73532 === (2))){
var inst_73529 = (state_73531[(2)]);
var state_73531__$1 = state_73531;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73531__$1,inst_73529);
} else {
if((state_val_73532 === (3))){
var inst_73517 = (state_73531[(2)]);
var state_73531__$1 = state_73531;
var statearr_73547_73765 = state_73531__$1;
(statearr_73547_73765[(2)] = inst_73517);


cljs.core.async.impl.ioc_helpers.process_exception(state_73531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73532 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73531,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73521 = cljs.core.async.timeout((100));
var state_73531__$1 = state_73531;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73531__$1,(5),inst_73521);
} else {
if((state_val_73532 === (5))){
var inst_73523 = (state_73531[(2)]);
var inst_73524 = com.wsscode.common.async_cljs.throw_err(inst_73523);
var inst_73525 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_73526 = [id,"Title",new Date(1540857600000)];
var inst_73527 = cljs.core.PersistentHashMap.fromArrays(inst_73525,inst_73526);
var state_73531__$1 = (function (){var statearr_73580 = state_73531;
(statearr_73580[(7)] = inst_73524);

return statearr_73580;
})();
var statearr_73583_73768 = state_73531__$1;
(statearr_73583_73768[(2)] = inst_73527);


cljs.core.async.impl.ioc_helpers.process_exception(state_73531__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,map__73510,map__73510__$1,id))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__73510,map__73510__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto____0 = (function (){
var statearr_73586 = [null,null,null,null,null,null,null,null];
(statearr_73586[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto__);

(statearr_73586[(1)] = (1));

return statearr_73586;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto____1 = (function (state_73531){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73531);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73589){if((e73589 instanceof Object)){
var ex__45529__auto__ = e73589;
var statearr_73590_73771 = state_73531;
(statearr_73590_73771[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73774 = state_73531;
state_73531 = G__73774;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto__ = function(state_73531){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto____1.call(this,state_73531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__73510,map__73510__$1,id))
})();
var state__45810__auto__ = (function (){var statearr_73594 = f__45809__auto__();
(statearr_73594[(6)] = c__45808__auto__);

return statearr_73594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__73510,map__73510__$1,id))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),(function (){var G__73599 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null);
return G__73599;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_73618){
var state_val_73619 = (state_73618[(1)]);
if((state_val_73619 === (1))){
var state_73618__$1 = state_73618;
var statearr_73622_73782 = state_73618__$1;
(statearr_73622_73782[(2)] = null);

(statearr_73622_73782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73619 === (2))){
var inst_73616 = (state_73618[(2)]);
var state_73618__$1 = state_73618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73618__$1,inst_73616);
} else {
if((state_val_73619 === (3))){
var inst_73603 = (state_73618[(2)]);
var state_73618__$1 = state_73618;
var statearr_73624_73785 = state_73618__$1;
(statearr_73624_73785[(2)] = inst_73603);


cljs.core.async.impl.ioc_helpers.process_exception(state_73618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73619 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73618,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73607 = cljs.core.async.timeout((100));
var state_73618__$1 = state_73618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73618__$1,(5),inst_73607);
} else {
if((state_val_73619 === (5))){
var inst_73610 = (state_73618[(2)]);
var inst_73611 = com.wsscode.common.async_cljs.throw_err(inst_73610);
var inst_73612 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_73613 = ["PG"];
var inst_73614 = cljs.core.PersistentHashMap.fromArrays(inst_73612,inst_73613);
var state_73618__$1 = (function (){var statearr_73632 = state_73618;
(statearr_73632[(7)] = inst_73611);

return statearr_73632;
})();
var statearr_73634_73789 = state_73618__$1;
(statearr_73634_73789[(2)] = inst_73614);


cljs.core.async.impl.ioc_helpers.process_exception(state_73618__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto____0 = (function (){
var statearr_73638 = [null,null,null,null,null,null,null,null];
(statearr_73638[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto__);

(statearr_73638[(1)] = (1));

return statearr_73638;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto____1 = (function (state_73618){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73618);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73640){if((e73640 instanceof Object)){
var ex__45529__auto__ = e73640;
var statearr_73644_73792 = state_73618;
(statearr_73644_73792[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73793 = state_73618;
state_73618 = G__73793;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto__ = function(state_73618){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto____1.call(this,state_73618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_73648 = f__45809__auto__();
(statearr_73648[(6)] = c__45808__auto__);

return statearr_73648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),(function (){var G__73656 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null);
return G__73656;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__73658){
var map__73659 = p__73658;
var map__73659__$1 = (((((!((map__73659 == null))))?(((((map__73659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73659):map__73659);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73659__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__73659,map__73659__$1,title){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__73659,map__73659__$1,title){
return (function (state_73714){
var state_val_73715 = (state_73714[(1)]);
if((state_val_73715 === (1))){
var state_73714__$1 = state_73714;
var statearr_73718_73799 = state_73714__$1;
(statearr_73718_73799[(2)] = null);

(statearr_73718_73799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73715 === (2))){
var inst_73710 = (state_73714[(2)]);
var state_73714__$1 = state_73714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73714__$1,inst_73710);
} else {
if((state_val_73715 === (3))){
var inst_73680 = (state_73714[(2)]);
var state_73714__$1 = state_73714;
var statearr_73723_73801 = state_73714__$1;
(statearr_73723_73801[(2)] = inst_73680);


cljs.core.async.impl.ioc_helpers.process_exception(state_73714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73715 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73714,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73691 = cljs.core.async.timeout((100));
var state_73714__$1 = state_73714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73714__$1,(5),inst_73691);
} else {
if((state_val_73715 === (5))){
var inst_73693 = (state_73714[(2)]);
var inst_73694 = com.wsscode.common.async_cljs.throw_err(inst_73693);
var inst_73701 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_73702 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_73704 = [inst_73702];
var inst_73705 = cljs.core.PersistentHashMap.fromArrays(inst_73701,inst_73704);
var state_73714__$1 = (function (){var statearr_73729 = state_73714;
(statearr_73729[(7)] = inst_73694);

return statearr_73729;
})();
var statearr_73730_73807 = state_73714__$1;
(statearr_73730_73807[(2)] = inst_73705);


cljs.core.async.impl.ioc_helpers.process_exception(state_73714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__45808__auto__,map__73659,map__73659__$1,title))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__73659,map__73659__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto____0 = (function (){
var statearr_73736 = [null,null,null,null,null,null,null,null];
(statearr_73736[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto__);

(statearr_73736[(1)] = (1));

return statearr_73736;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto____1 = (function (state_73714){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_73714);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e73738){if((e73738 instanceof Object)){
var ex__45529__auto__ = e73738;
var statearr_73741_73811 = state_73714;
(statearr_73741_73811[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73814 = state_73714;
state_73714 = G__73814;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto__ = function(state_73714){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto____1.call(this,state_73714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__73659,map__73659__$1,title))
})();
var state__45810__auto__ = (function (){var statearr_73745 = f__45809__auto__();
(statearr_73745[(6)] = c__45808__auto__);

return statearr_73745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__73659,map__73659__$1,title))
);

return c__45808__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
