goog.provide('com.wsscode.pathom.book.tracing.demo_parallel_reader');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-details","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-details",-1255464545,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details(env,p__53828){
var map__53829 = p__53828;
var map__53829__$1 = (((((!((map__53829 == null))))?(((((map__53829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53829):map__53829);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53829__$1,new cljs.core.Keyword("movie","id","movie/id",-1274877180));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53829,map__53829__$1,id){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53829,map__53829__$1,id){
return (function (state_53886){
var state_val_53887 = (state_53886[(1)]);
if((state_val_53887 === (1))){
var state_53886__$1 = state_53886;
var statearr_53893_54151 = state_53886__$1;
(statearr_53893_54151[(2)] = null);

(statearr_53893_54151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53887 === (2))){
var inst_53881 = (state_53886[(2)]);
var state_53886__$1 = state_53886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53886__$1,inst_53881);
} else {
if((state_val_53887 === (3))){
var inst_53849 = (state_53886[(2)]);
var state_53886__$1 = state_53886;
var statearr_53915_54159 = state_53886__$1;
(statearr_53915_54159[(2)] = inst_53849);


cljs.core.async.impl.ioc_helpers.process_exception(state_53886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53887 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53886,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53867 = cljs.core.async.timeout((100));
var state_53886__$1 = state_53886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53886__$1,(5),inst_53867);
} else {
if((state_val_53887 === (5))){
var inst_53869 = (state_53886[(2)]);
var inst_53870 = com.wsscode.common.async_cljs.throw_err(inst_53869);
var inst_53872 = [new cljs.core.Keyword("movie","id","movie/id",-1274877180),new cljs.core.Keyword("movie","title","movie/title",729551263),new cljs.core.Keyword("movie","release-date","movie/release-date",1077056214)];
var inst_53873 = [id,"Title",new Date(1540857600000)];
var inst_53874 = cljs.core.PersistentHashMap.fromArrays(inst_53872,inst_53873);
var state_53886__$1 = (function (){var statearr_53922 = state_53886;
(statearr_53922[(7)] = inst_53870);

return statearr_53922;
})();
var statearr_53923_54178 = state_53886__$1;
(statearr_53923_54178[(2)] = inst_53874);


cljs.core.async.impl.ioc_helpers.process_exception(state_53886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,map__53829,map__53829__$1,id))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53829,map__53829__$1,id){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto____0 = (function (){
var statearr_53927 = [null,null,null,null,null,null,null,null];
(statearr_53927[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto__);

(statearr_53927[(1)] = (1));

return statearr_53927;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto____1 = (function (state_53886){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53886);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53928){if((e53928 instanceof Object)){
var ex__38790__auto__ = e53928;
var statearr_53929_54188 = state_53886;
(statearr_53929_54188[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54189 = state_53886;
state_53886 = G__54189;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto__ = function(state_53886){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto____1.call(this,state_53886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_details_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53829,map__53829__$1,id))
})();
var state__39086__auto__ = (function (){var statearr_53933 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53933[(6)] = c__39084__auto__);

return statearr_53933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53829,map__53829__$1,id))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-rating","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-rating",-352048517,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","id","movie/id",-1274877180),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","rating","movie/rating",177023534)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating(env,input){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_53956){
var state_val_53957 = (state_53956[(1)]);
if((state_val_53957 === (1))){
var state_53956__$1 = state_53956;
var statearr_53958_54195 = state_53956__$1;
(statearr_53958_54195[(2)] = null);

(statearr_53958_54195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (2))){
var inst_53954 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53956__$1,inst_53954);
} else {
if((state_val_53957 === (3))){
var inst_53936 = (state_53956[(2)]);
var state_53956__$1 = state_53956;
var statearr_53959_54199 = state_53956__$1;
(statearr_53959_54199[(2)] = inst_53936);


cljs.core.async.impl.ioc_helpers.process_exception(state_53956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53957 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53956,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53940 = cljs.core.async.timeout((100));
var state_53956__$1 = state_53956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53956__$1,(5),inst_53940);
} else {
if((state_val_53957 === (5))){
var inst_53942 = (state_53956[(2)]);
var inst_53943 = com.wsscode.common.async_cljs.throw_err(inst_53942);
var inst_53949 = [new cljs.core.Keyword("movie","rating","movie/rating",177023534)];
var inst_53950 = ["PG"];
var inst_53951 = cljs.core.PersistentHashMap.fromArrays(inst_53949,inst_53950);
var state_53956__$1 = (function (){var statearr_53961 = state_53956;
(statearr_53961[(7)] = inst_53943);

return statearr_53961;
})();
var statearr_53962_54210 = state_53956__$1;
(statearr_53962_54210[(2)] = inst_53951);


cljs.core.async.impl.ioc_helpers.process_exception(state_53956__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto____0 = (function (){
var statearr_53963 = [null,null,null,null,null,null,null,null];
(statearr_53963[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto__);

(statearr_53963[(1)] = (1));

return statearr_53963;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto____1 = (function (state_53956){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53956);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e53964){if((e53964 instanceof Object)){
var ex__38790__auto__ = e53964;
var statearr_53965_54214 = state_53956;
(statearr_53965_54214[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54217 = state_53956;
state_53956 = G__54217;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto__ = function(state_53956){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto____1.call(this,state_53956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_rating_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_53966 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_53966[(6)] = c__39084__auto__);

return statearr_53966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.book.tracing.demo-parallel-reader","movie-title-prefixed","com.wsscode.pathom.book.tracing.demo-parallel-reader/movie-title-prefixed",1507202070,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","input","com.wsscode.pathom.connect/input",-1274439121),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("movie","title","movie/title",729551263),null], null), null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)], null)], null),(function com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed(env,p__53970){
var map__53972 = p__53970;
var map__53972__$1 = (((((!((map__53972 == null))))?(((((map__53972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53972):map__53972);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53972__$1,new cljs.core.Keyword("movie","title","movie/title",729551263));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__53972,map__53972__$1,title){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__53972,map__53972__$1,title){
return (function (state_53995){
var state_val_53996 = (state_53995[(1)]);
if((state_val_53996 === (1))){
var state_53995__$1 = state_53995;
var statearr_54000_54241 = state_53995__$1;
(statearr_54000_54241[(2)] = null);

(statearr_54000_54241[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (2))){
var inst_53992 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53995__$1,inst_53992);
} else {
if((state_val_53996 === (3))){
var inst_53979 = (state_53995[(2)]);
var state_53995__$1 = state_53995;
var statearr_54026_54246 = state_53995__$1;
(statearr_54026_54246[(2)] = inst_53979);


cljs.core.async.impl.ioc_helpers.process_exception(state_53995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53996 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53995,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_53983 = cljs.core.async.timeout((100));
var state_53995__$1 = state_53995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53995__$1,(5),inst_53983);
} else {
if((state_val_53996 === (5))){
var inst_53985 = (state_53995[(2)]);
var inst_53986 = com.wsscode.common.async_cljs.throw_err(inst_53985);
var inst_53987 = [new cljs.core.Keyword("movie","title-prefixed","movie/title-prefixed",-1766948654)];
var inst_53988 = ["Prefix ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('');
var inst_53989 = [inst_53988];
var inst_53990 = cljs.core.PersistentHashMap.fromArrays(inst_53987,inst_53989);
var state_53995__$1 = (function (){var statearr_54042 = state_53995;
(statearr_54042[(7)] = inst_53986);

return statearr_54042;
})();
var statearr_54043_54254 = state_53995__$1;
(statearr_54043_54254[(2)] = inst_53990);


cljs.core.async.impl.ioc_helpers.process_exception(state_53995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto__,map__53972,map__53972__$1,title))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__53972,map__53972__$1,title){
return (function() {
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto____0 = (function (){
var statearr_54051 = [null,null,null,null,null,null,null,null];
(statearr_54051[(0)] = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto__);

(statearr_54051[(1)] = (1));

return statearr_54051;
});
var com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto____1 = (function (state_53995){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_53995);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e54054){if((e54054 instanceof Object)){
var ex__38790__auto__ = e54054;
var statearr_54057_54257 = state_53995;
(statearr_54057_54257[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54259 = state_53995;
state_53995 = G__54259;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto__ = function(state_53995){
switch(arguments.length){
case 0:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto____1.call(this,state_53995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto____0;
com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto____1;
return com$wsscode$pathom$book$tracing$demo_parallel_reader$movie_title_prefixed_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__53972,map__53972__$1,title))
})();
var state__39086__auto__ = (function (){var statearr_54060 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_54060[(6)] = c__39084__auto__);

return statearr_54060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__53972,map__53972__$1,title))
);

return c__39084__auto__;
}));
com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_details,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_rating,com.wsscode.pathom.book.tracing.demo_parallel_reader.movie_title_prefixed], null);
com.wsscode.pathom.book.tracing.demo_parallel_reader.parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader,com.wsscode.pathom.core.env_placeholder_reader], null),new cljs.core.Keyword("com.wsscode.pathom.core","placeholder-prefixes","com.wsscode.pathom.core/placeholder-prefixes",-1362240644),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [">",null], null), null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),com.wsscode.pathom.book.tracing.demo_parallel_reader.app_registry], null)),com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.trace_plugin], null)], null));

//# sourceMappingURL=com.wsscode.pathom.book.tracing.demo_parallel_reader.js.map
