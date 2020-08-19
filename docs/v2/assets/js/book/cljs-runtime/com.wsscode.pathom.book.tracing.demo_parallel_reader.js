goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),(function (){var G__93912 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null);
return G__93912;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__93916){
var map__93917 = p__93916;
var map__93917__$1 = (((((!((map__93917 == null))))?(((((map__93917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__93917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__93917):map__93917);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__93917__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__93917,map__93917__$1,id){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__93917,map__93917__$1,id){
return (function (state_93936){
var state_val_93937 = (state_93936[(1)]);
if((state_val_93937 === (1))){
var state_93936__$1 = state_93936;
var statearr_93940_94141 = state_93936__$1;
(statearr_93940_94141[(2)] = null);

(statearr_93940_94141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93937 === (2))){
var inst_93934 = (state_93936[(2)]);
var state_93936__$1 = state_93936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93936__$1,inst_93934);
} else {
if((state_val_93937 === (3))){
var inst_93921 = (state_93936[(2)]);
var state_93936__$1 = state_93936;
var statearr_93943_94144 = state_93936__$1;
(statearr_93943_94144[(2)] = inst_93921);


cljs.core.async.impl.ioc_helpers.process_exception(state_93936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93937 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93936,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93925 = cljs.core.async.timeout((100));
var state_93936__$1 = state_93936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93936__$1,(5),inst_93925);
} else {
if((state_val_93937 === (5))){
var inst_93928 = (state_93936[(2)]);
var inst_93929 = com.wsscode.common.async_cljs.throw_err(inst_93928);
var inst_93930 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_93931 = [id,"Title",new Date(1540857600000)];
var inst_93932 = cljs.core.PersistentHashMap.fromArrays(inst_93930,inst_93931);
var state_93936__$1 = (function (){var statearr_93948 = state_93936;
(statearr_93948[(7)] = inst_93929);

return statearr_93948;
})();
var statearr_93949_94151 = state_93936__$1;
(statearr_93949_94151[(2)] = inst_93932);


cljs.core.async.impl.ioc_helpers.process_exception(state_93936__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__93917,map__93917__$1,id))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__93917,map__93917__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____0 = (function (){
var statearr_93951 = [null,null,null,null,null,null,null,null];
(statearr_93951[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__);

(statearr_93951[(1)] = (1));

return statearr_93951;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____1 = (function (state_93936){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93936);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e93952){if((e93952 instanceof Object)){
var ex__47667__auto__ = e93952;
var statearr_93953_94156 = state_93936;
(statearr_93953_94156[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e93952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94157 = state_93936;
state_93936 = G__94157;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__ = function(state_93936){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____1.call(this,state_93936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__93917,map__93917__$1,id))
})();
var state__47948__auto__ = (function (){var statearr_93958 = f__47947__auto__();
(statearr_93958[(6)] = c__47946__auto__);

return statearr_93958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__93917,map__93917__$1,id))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),(function (){var G__93960 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null);
return G__93960;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_93980){
var state_val_93981 = (state_93980[(1)]);
if((state_val_93981 === (1))){
var state_93980__$1 = state_93980;
var statearr_93983_94158 = state_93980__$1;
(statearr_93983_94158[(2)] = null);

(statearr_93983_94158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93981 === (2))){
var inst_93977 = (state_93980[(2)]);
var state_93980__$1 = state_93980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_93980__$1,inst_93977);
} else {
if((state_val_93981 === (3))){
var inst_93964 = (state_93980[(2)]);
var state_93980__$1 = state_93980;
var statearr_93991_94159 = state_93980__$1;
(statearr_93991_94159[(2)] = inst_93964);


cljs.core.async.impl.ioc_helpers.process_exception(state_93980__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_93981 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_93980,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_93968 = cljs.core.async.timeout((100));
var state_93980__$1 = state_93980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_93980__$1,(5),inst_93968);
} else {
if((state_val_93981 === (5))){
var inst_93971 = (state_93980[(2)]);
var inst_93972 = com.wsscode.common.async_cljs.throw_err(inst_93971);
var inst_93973 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_93974 = ["PG"];
var inst_93975 = cljs.core.PersistentHashMap.fromArrays(inst_93973,inst_93974);
var state_93980__$1 = (function (){var statearr_94020 = state_93980;
(statearr_94020[(7)] = inst_93972);

return statearr_94020;
})();
var statearr_94022_94163 = state_93980__$1;
(statearr_94022_94163[(2)] = inst_93975);


cljs.core.async.impl.ioc_helpers.process_exception(state_93980__$1);

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
var statearr_94023 = [null,null,null,null,null,null,null,null];
(statearr_94023[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__);

(statearr_94023[(1)] = (1));

return statearr_94023;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____1 = (function (state_93980){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_93980);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e94025){if((e94025 instanceof Object)){
var ex__47667__auto__ = e94025;
var statearr_94028_94173 = state_93980;
(statearr_94028_94173[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_93980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94174 = state_93980;
state_93980 = G__94174;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__ = function(state_93980){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____1.call(this,state_93980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_94034 = f__47947__auto__();
(statearr_94034[(6)] = c__47946__auto__);

return statearr_94034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),(function (){var G__94036 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null);
return G__94036;

})(),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__94037){
var map__94038 = p__94037;
var map__94038__$1 = (((((!((map__94038 == null))))?(((((map__94038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__94038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__94038):map__94038);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__94038__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__94038,map__94038__$1,title){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__94038,map__94038__$1,title){
return (function (state_94058){
var state_val_94061 = (state_94058[(1)]);
if((state_val_94061 === (1))){
var state_94058__$1 = state_94058;
var statearr_94065_94183 = state_94058__$1;
(statearr_94065_94183[(2)] = null);

(statearr_94065_94183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94061 === (2))){
var inst_94053 = (state_94058[(2)]);
var state_94058__$1 = state_94058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_94058__$1,inst_94053);
} else {
if((state_val_94061 === (3))){
var inst_94040 = (state_94058[(2)]);
var state_94058__$1 = state_94058;
var statearr_94071_94184 = state_94058__$1;
(statearr_94071_94184[(2)] = inst_94040);


cljs.core.async.impl.ioc_helpers.process_exception(state_94058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94061 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_94058,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_94044 = cljs.core.async.timeout((100));
var state_94058__$1 = state_94058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_94058__$1,(5),inst_94044);
} else {
if((state_val_94061 === (5))){
var inst_94046 = (state_94058[(2)]);
var inst_94047 = com.wsscode.common.async_cljs.throw_err(inst_94046);
var inst_94048 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_94049 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_94050 = [inst_94049];
var inst_94051 = cljs.core.PersistentHashMap.fromArrays(inst_94048,inst_94050);
var state_94058__$1 = (function (){var statearr_94075 = state_94058;
(statearr_94075[(7)] = inst_94047);

return statearr_94075;
})();
var statearr_94076_94185 = state_94058__$1;
(statearr_94076_94185[(2)] = inst_94051);


cljs.core.async.impl.ioc_helpers.process_exception(state_94058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__47946__auto__,map__94038,map__94038__$1,title))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__94038,map__94038__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____0 = (function (){
var statearr_94117 = [null,null,null,null,null,null,null,null];
(statearr_94117[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__);

(statearr_94117[(1)] = (1));

return statearr_94117;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____1 = (function (state_94058){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_94058);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e94122){if((e94122 instanceof Object)){
var ex__47667__auto__ = e94122;
var statearr_94123_94191 = state_94058;
(statearr_94123_94191[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_94058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94122;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94193 = state_94058;
state_94058 = G__94193;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__ = function(state_94058){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____1.call(this,state_94058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__94038,map__94038__$1,title))
})();
var state__47948__auto__ = (function (){var statearr_94126 = f__47947__auto__();
(statearr_94126[(6)] = c__47946__auto__);

return statearr_94126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__94038,map__94038__$1,title))
);

return c__47946__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
