goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__54096){
var map__54098 = p__54096;
var map__54098__$1 = (((((!((map__54098 == null))))?(((((map__54098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54098):map__54098);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54098__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__54098,map__54098__$1,id){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__54098,map__54098__$1,id){
return (function (state_54127){
var state_val_54128 = (state_54127[(1)]);
if((state_val_54128 === (1))){
var state_54127__$1 = state_54127;
var statearr_54162_54329 = state_54127__$1;
(statearr_54162_54329[(2)] = null);

(statearr_54162_54329[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54128 === (2))){
var inst_54124 = (state_54127[(2)]);
var state_54127__$1 = state_54127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54127__$1,inst_54124);
} else {
if((state_val_54128 === (3))){
var inst_54108 = (state_54127[(2)]);
var state_54127__$1 = state_54127;
var statearr_54177_54330 = state_54127__$1;
(statearr_54177_54330[(2)] = inst_54108);


cljs.core.async.impl.ioc_helpers.process_exception(state_54127__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54128 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54127,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54112 = cljs.core.async.timeout((100));
var state_54127__$1 = state_54127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54127__$1,(5),inst_54112);
} else {
if((state_val_54128 === (5))){
var inst_54114 = (state_54127[(2)]);
var inst_54115 = com.wsscode.common.async_cljs.throw_err(inst_54114);
var inst_54117 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_54120 = [id,"Title",new Date(1540857600000)];
var inst_54121 = cljs.core.PersistentHashMap.fromArrays(inst_54117,inst_54120);
var state_54127__$1 = (function (){var statearr_54182 = state_54127;
(statearr_54182[(7)] = inst_54115);

return statearr_54182;
})();
var statearr_54184_54333 = state_54127__$1;
(statearr_54184_54333[(2)] = inst_54121);


cljs.core.async.impl.ioc_helpers.process_exception(state_54127__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,map__54098,map__54098__$1,id))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__54098,map__54098__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto____0 = (function (){
var statearr_54187 = [null,null,null,null,null,null,null,null];
(statearr_54187[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto__);

(statearr_54187[(1)] = (1));

return statearr_54187;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto____1 = (function (state_54127){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54127);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54190){if((e54190 instanceof Object)){
var ex__38933__auto__ = e54190;
var statearr_54192_54336 = state_54127;
(statearr_54192_54336[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54338 = state_54127;
state_54127 = G__54338;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto__ = function(state_54127){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto____1.call(this,state_54127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__54098,map__54098__$1,id))
})();
var state__39005__auto__ = (function (){var statearr_54198 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54198[(6)] = c__39003__auto__);

return statearr_54198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__54098,map__54098__$1,id))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_54219){
var state_val_54220 = (state_54219[(1)]);
if((state_val_54220 === (1))){
var state_54219__$1 = state_54219;
var statearr_54223_54341 = state_54219__$1;
(statearr_54223_54341[(2)] = null);

(statearr_54223_54341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54220 === (2))){
var inst_54217 = (state_54219[(2)]);
var state_54219__$1 = state_54219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54219__$1,inst_54217);
} else {
if((state_val_54220 === (3))){
var inst_54203 = (state_54219[(2)]);
var state_54219__$1 = state_54219;
var statearr_54240_54342 = state_54219__$1;
(statearr_54240_54342[(2)] = inst_54203);


cljs.core.async.impl.ioc_helpers.process_exception(state_54219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54220 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54219,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54209 = cljs.core.async.timeout((100));
var state_54219__$1 = state_54219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54219__$1,(5),inst_54209);
} else {
if((state_val_54220 === (5))){
var inst_54211 = (state_54219[(2)]);
var inst_54212 = com.wsscode.common.async_cljs.throw_err(inst_54211);
var inst_54213 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_54214 = ["PG"];
var inst_54215 = cljs.core.PersistentHashMap.fromArrays(inst_54213,inst_54214);
var state_54219__$1 = (function (){var statearr_54262 = state_54219;
(statearr_54262[(7)] = inst_54212);

return statearr_54262;
})();
var statearr_54263_54345 = state_54219__$1;
(statearr_54263_54345[(2)] = inst_54215);


cljs.core.async.impl.ioc_helpers.process_exception(state_54219__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto____0 = (function (){
var statearr_54266 = [null,null,null,null,null,null,null,null];
(statearr_54266[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto__);

(statearr_54266[(1)] = (1));

return statearr_54266;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto____1 = (function (state_54219){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54219);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54269){if((e54269 instanceof Object)){
var ex__38933__auto__ = e54269;
var statearr_54270_54349 = state_54219;
(statearr_54270_54349[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54269;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54351 = state_54219;
state_54219 = G__54351;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto__ = function(state_54219){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto____1.call(this,state_54219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_54273 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54273[(6)] = c__39003__auto__);

return statearr_54273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__54275){
var map__54277 = p__54275;
var map__54277__$1 = (((((!((map__54277 == null))))?(((((map__54277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54277):map__54277);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54277__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__54277,map__54277__$1,title){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__54277,map__54277__$1,title){
return (function (state_54297){
var state_val_54298 = (state_54297[(1)]);
if((state_val_54298 === (1))){
var state_54297__$1 = state_54297;
var statearr_54301_54355 = state_54297__$1;
(statearr_54301_54355[(2)] = null);

(statearr_54301_54355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (2))){
var inst_54295 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54297__$1,inst_54295);
} else {
if((state_val_54298 === (3))){
var inst_54282 = (state_54297[(2)]);
var state_54297__$1 = state_54297;
var statearr_54307_54360 = state_54297__$1;
(statearr_54307_54360[(2)] = inst_54282);


cljs.core.async.impl.ioc_helpers.process_exception(state_54297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54298 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_54297,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_54286 = cljs.core.async.timeout((100));
var state_54297__$1 = state_54297;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54297__$1,(5),inst_54286);
} else {
if((state_val_54298 === (5))){
var inst_54288 = (state_54297[(2)]);
var inst_54289 = com.wsscode.common.async_cljs.throw_err(inst_54288);
var inst_54290 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_54291 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_54292 = [inst_54291];
var inst_54293 = cljs.core.PersistentHashMap.fromArrays(inst_54290,inst_54292);
var state_54297__$1 = (function (){var statearr_54312 = state_54297;
(statearr_54312[(7)] = inst_54289);

return statearr_54312;
})();
var statearr_54313_54365 = state_54297__$1;
(statearr_54313_54365[(2)] = inst_54293);


cljs.core.async.impl.ioc_helpers.process_exception(state_54297__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,map__54277,map__54277__$1,title))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__54277,map__54277__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto____0 = (function (){
var statearr_54314 = [null,null,null,null,null,null,null,null];
(statearr_54314[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto__);

(statearr_54314[(1)] = (1));

return statearr_54314;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto____1 = (function (state_54297){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_54297);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e54317){if((e54317 instanceof Object)){
var ex__38933__auto__ = e54317;
var statearr_54318_54372 = state_54297;
(statearr_54318_54372[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54377 = state_54297;
state_54297 = G__54377;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto__ = function(state_54297){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto____1.call(this,state_54297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__54277,map__54277__$1,title))
})();
var state__39005__auto__ = (function (){var statearr_54319 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_54319[(6)] = c__39003__auto__);

return statearr_54319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__54277,map__54277__$1,title))
);

return c__39003__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
