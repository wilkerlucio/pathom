goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),(function (){var G__66152 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null);
return G__66152;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__66154){
var map__66155 = p__66154;
var map__66155__$1 = (((((!((map__66155 == null))))?(((((map__66155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66155):map__66155);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66155__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__66155,map__66155__$1,id){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__66155,map__66155__$1,id){
return (function (state_66178){
var state_val_66179 = (state_66178[(1)]);
if((state_val_66179 === (1))){
var state_66178__$1 = state_66178;
var statearr_66184_66481 = state_66178__$1;
(statearr_66184_66481[(2)] = null);

(statearr_66184_66481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66179 === (2))){
var _ = (function (){var statearr_66186 = state_66178;
(statearr_66186[(4)] = cljs.core.cons((5),(state_66178[(4)])));

return statearr_66186;
})();
var inst_66167 = cljs.core.async.timeout((100));
var state_66178__$1 = state_66178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66178__$1,(6),inst_66167);
} else {
if((state_val_66179 === (3))){
var inst_66176 = (state_66178[(2)]);
var state_66178__$1 = state_66178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66178__$1,inst_66176);
} else {
if((state_val_66179 === (4))){
var inst_66160 = (state_66178[(2)]);
var state_66178__$1 = state_66178;
var statearr_66194_66486 = state_66178__$1;
(statearr_66194_66486[(2)] = inst_66160);

(statearr_66194_66486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66179 === (5))){
var _ = (function (){var statearr_66197 = state_66178;
(statearr_66197[(4)] = cljs.core.rest((state_66178[(4)])));

return statearr_66197;
})();
var state_66178__$1 = state_66178;
var ex66190 = (state_66178__$1[(2)]);
var statearr_66202_66489 = state_66178__$1;
(statearr_66202_66489[(5)] = ex66190);


var statearr_66204_66491 = state_66178__$1;
(statearr_66204_66491[(1)] = (4));

(statearr_66204_66491[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66179 === (6))){
var inst_66169 = (state_66178[(2)]);
var inst_66170 = com.wsscode.common.async_cljs.throw_err(inst_66169);
var inst_66171 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_66172 = [id,"Title",new Date(1540857600000)];
var inst_66173 = cljs.core.PersistentHashMap.fromArrays(inst_66171,inst_66172);
var _ = (function (){var statearr_66206 = state_66178;
(statearr_66206[(4)] = cljs.core.rest((state_66178[(4)])));

return statearr_66206;
})();
var state_66178__$1 = (function (){var statearr_66207 = state_66178;
(statearr_66207[(7)] = inst_66170);

return statearr_66207;
})();
var statearr_66210_66493 = state_66178__$1;
(statearr_66210_66493[(2)] = inst_66173);

(statearr_66210_66493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,map__66155,map__66155__$1,id))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__66155,map__66155__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto____0 = (function (){
var statearr_66212 = [null,null,null,null,null,null,null,null];
(statearr_66212[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto__);

(statearr_66212[(1)] = (1));

return statearr_66212;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto____1 = (function (state_66178){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_66178);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e66214){var ex__48143__auto__ = e66214;
var statearr_66216_66510 = state_66178;
(statearr_66216_66510[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_66178[(4)]))){
var statearr_66219_66511 = state_66178;
(statearr_66219_66511[(1)] = cljs.core.first((state_66178[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66512 = state_66178;
state_66178 = G__66512;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto__ = function(state_66178){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto____1.call(this,state_66178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__66155,map__66155__$1,id))
})();
var state__48841__auto__ = (function (){var statearr_66230 = f__48840__auto__();
(statearr_66230[(6)] = c__48839__auto__);

return statearr_66230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__66155,map__66155__$1,id))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),(function (){var G__66260 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null);
return G__66260;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_66279){
var state_val_66280 = (state_66279[(1)]);
if((state_val_66280 === (1))){
var state_66279__$1 = state_66279;
var statearr_66284_66522 = state_66279__$1;
(statearr_66284_66522[(2)] = null);

(statearr_66284_66522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66280 === (2))){
var _ = (function (){var statearr_66287 = state_66279;
(statearr_66287[(4)] = cljs.core.cons((5),(state_66279[(4)])));

return statearr_66287;
})();
var inst_66268 = cljs.core.async.timeout((100));
var state_66279__$1 = state_66279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66279__$1,(6),inst_66268);
} else {
if((state_val_66280 === (3))){
var inst_66277 = (state_66279[(2)]);
var state_66279__$1 = state_66279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66279__$1,inst_66277);
} else {
if((state_val_66280 === (4))){
var inst_66262 = (state_66279[(2)]);
var state_66279__$1 = state_66279;
var statearr_66294_66528 = state_66279__$1;
(statearr_66294_66528[(2)] = inst_66262);

(statearr_66294_66528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66280 === (5))){
var _ = (function (){var statearr_66297 = state_66279;
(statearr_66297[(4)] = cljs.core.rest((state_66279[(4)])));

return statearr_66297;
})();
var state_66279__$1 = state_66279;
var ex66290 = (state_66279__$1[(2)]);
var statearr_66298_66530 = state_66279__$1;
(statearr_66298_66530[(5)] = ex66290);


var statearr_66300_66531 = state_66279__$1;
(statearr_66300_66531[(1)] = (4));

(statearr_66300_66531[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66280 === (6))){
var inst_66270 = (state_66279[(2)]);
var inst_66271 = com.wsscode.common.async_cljs.throw_err(inst_66270);
var inst_66272 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_66273 = ["PG"];
var inst_66274 = cljs.core.PersistentHashMap.fromArrays(inst_66272,inst_66273);
var _ = (function (){var statearr_66305 = state_66279;
(statearr_66305[(4)] = cljs.core.rest((state_66279[(4)])));

return statearr_66305;
})();
var state_66279__$1 = (function (){var statearr_66308 = state_66279;
(statearr_66308[(7)] = inst_66271);

return statearr_66308;
})();
var statearr_66310_66540 = state_66279__$1;
(statearr_66310_66540[(2)] = inst_66274);

(statearr_66310_66540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto____0 = (function (){
var statearr_66315 = [null,null,null,null,null,null,null,null];
(statearr_66315[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto__);

(statearr_66315[(1)] = (1));

return statearr_66315;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto____1 = (function (state_66279){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_66279);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e66320){var ex__48143__auto__ = e66320;
var statearr_66321_66547 = state_66279;
(statearr_66321_66547[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_66279[(4)]))){
var statearr_66322_66549 = state_66279;
(statearr_66322_66549[(1)] = cljs.core.first((state_66279[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66550 = state_66279;
state_66279 = G__66550;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto__ = function(state_66279){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto____1.call(this,state_66279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_66327 = f__48840__auto__();
(statearr_66327[(6)] = c__48839__auto__);

return statearr_66327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),(function (){var G__66336 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null);
return G__66336;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__66338){
var map__66339 = p__66338;
var map__66339__$1 = (((((!((map__66339 == null))))?(((((map__66339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66339):map__66339);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66339__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__66339,map__66339__$1,title){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__66339,map__66339__$1,title){
return (function (state_66389){
var state_val_66391 = (state_66389[(1)]);
if((state_val_66391 === (1))){
var state_66389__$1 = state_66389;
var statearr_66422_66560 = state_66389__$1;
(statearr_66422_66560[(2)] = null);

(statearr_66422_66560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66391 === (2))){
var _ = (function (){var statearr_66424 = state_66389;
(statearr_66424[(4)] = cljs.core.cons((5),(state_66389[(4)])));

return statearr_66424;
})();
var inst_66363 = cljs.core.async.timeout((100));
var state_66389__$1 = state_66389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66389__$1,(6),inst_66363);
} else {
if((state_val_66391 === (3))){
var inst_66380 = (state_66389[(2)]);
var state_66389__$1 = state_66389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66389__$1,inst_66380);
} else {
if((state_val_66391 === (4))){
var inst_66350 = (state_66389[(2)]);
var state_66389__$1 = state_66389;
var statearr_66427_66569 = state_66389__$1;
(statearr_66427_66569[(2)] = inst_66350);

(statearr_66427_66569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66391 === (5))){
var _ = (function (){var statearr_66434 = state_66389;
(statearr_66434[(4)] = cljs.core.rest((state_66389[(4)])));

return statearr_66434;
})();
var state_66389__$1 = state_66389;
var ex66425 = (state_66389__$1[(2)]);
var statearr_66438_66571 = state_66389__$1;
(statearr_66438_66571[(5)] = ex66425);


var statearr_66439_66572 = state_66389__$1;
(statearr_66439_66572[(1)] = (4));

(statearr_66439_66572[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66391 === (6))){
var inst_66365 = (state_66389[(2)]);
var inst_66366 = com.wsscode.common.async_cljs.throw_err(inst_66365);
var inst_66368 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_66375 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_66376 = [inst_66375];
var inst_66377 = cljs.core.PersistentHashMap.fromArrays(inst_66368,inst_66376);
var _ = (function (){var statearr_66441 = state_66389;
(statearr_66441[(4)] = cljs.core.rest((state_66389[(4)])));

return statearr_66441;
})();
var state_66389__$1 = (function (){var statearr_66444 = state_66389;
(statearr_66444[(7)] = inst_66366);

return statearr_66444;
})();
var statearr_66445_66577 = state_66389__$1;
(statearr_66445_66577[(2)] = inst_66377);

(statearr_66445_66577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__48839__auto__,map__66339,map__66339__$1,title))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__66339,map__66339__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto____0 = (function (){
var statearr_66448 = [null,null,null,null,null,null,null,null];
(statearr_66448[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto__);

(statearr_66448[(1)] = (1));

return statearr_66448;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto____1 = (function (state_66389){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_66389);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e66450){var ex__48143__auto__ = e66450;
var statearr_66452_66584 = state_66389;
(statearr_66452_66584[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_66389[(4)]))){
var statearr_66453_66585 = state_66389;
(statearr_66453_66585[(1)] = cljs.core.first((state_66389[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66590 = state_66389;
state_66389 = G__66590;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto__ = function(state_66389){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto____1.call(this,state_66389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__66339,map__66339__$1,title))
})();
var state__48841__auto__ = (function (){var statearr_66459 = f__48840__auto__();
(statearr_66459[(6)] = c__48839__auto__);

return statearr_66459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__66339,map__66339__$1,title))
);

return c__48839__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
