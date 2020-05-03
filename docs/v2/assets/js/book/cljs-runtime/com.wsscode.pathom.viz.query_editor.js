goog.provide('com.wsscode.pathom.viz.query_editor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.pathom.connect');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.fulcro.network');
goog.require('com.wsscode.pathom.viz.codemirror');
goog.require('com.wsscode.pathom.viz.helpers');
goog.require('com.wsscode.pathom.viz.trace');
goog.require('fulcro.client.data_fetch');
goog.require('fulcro.client.localized_dom');
goog.require('fulcro.client.mutations');
goog.require('fulcro.client.primitives');

com.wsscode.pathom.viz.query_editor.remote_key = new cljs.core.Keyword(null,"pathom-query-editor-remote","pathom-query-editor-remote",-1506466221);
com.wsscode.pathom.viz.query_editor.safe_read = (function com$wsscode$pathom$viz$query_editor$safe_read(s){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}catch (e51132){var _ = e51132;
return null;
}});
com.wsscode.pathom.viz.query_editor.indexes = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","indexes","com.wsscode.pathom.viz.query-editor/indexes",-1925947531,null),(function (){var G__51149 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null)], null);
return G__51149;

})(),(function com$wsscode$pathom$viz$query_editor$indexes(p__51152,_){
var map__51153 = p__51152;
var map__51153__$1 = (((((!((map__51153 == null))))?(((((map__51153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51153):map__51153);
var client_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51153__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659));
var G__51156 = cljs.core.PersistentArrayMap.EMPTY;
var G__51157 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401)], null)], null)], null);
return (client_parser.cljs$core$IFn$_invoke$arity$2 ? client_parser.cljs$core$IFn$_invoke$arity$2(G__51156,G__51157) : client_parser.call(null,G__51156,G__51157));
}));
com.wsscode.pathom.viz.query_editor.run_query = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798)], null)], null),(function com$wsscode$pathom$viz$query_editor$run_query(p__51161,p__51162){
var map__51163 = p__51161;
var map__51163__$1 = (((((!((map__51163 == null))))?(((((map__51163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51163):map__51163);
var client_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51163__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659));
var map__51164 = p__51162;
var map__51164__$1 = (((((!((map__51164 == null))))?(((((map__51164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51164):map__51164);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347));
var request_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51164__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
var ch__46599__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__40572__auto___51435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__40572__auto___51435,ch__46599__auto__,map__51163,map__51163__$1,client_parser,map__51164,map__51164__$1,id,query,request_trace_QMARK_){
return (function (){
var f__40573__auto__ = (function (){var switch__40498__auto__ = ((function (c__40572__auto___51435,ch__46599__auto__,map__51163,map__51163__$1,client_parser,map__51164,map__51164__$1,id,query,request_trace_QMARK_){
return (function (state_51276){
var state_val_51279 = (state_51276[(1)]);
if((state_val_51279 === (7))){
var inst_51222 = (state_51276[(7)]);
var inst_51217 = (state_51276[(2)]);
var inst_51221 = cljs.core.PersistentHashMap.EMPTY;
var inst_51222__$1 = (client_parser.cljs$core$IFn$_invoke$arity$2 ? client_parser.cljs$core$IFn$_invoke$arity$2(inst_51221,inst_51217) : client_parser.call(null,inst_51221,inst_51217));
var inst_51223 = com.wsscode.async.async_cljs.chan_QMARK_(inst_51222__$1);
var state_51276__$1 = (function (){var statearr_51295 = state_51276;
(statearr_51295[(7)] = inst_51222__$1);

return statearr_51295;
})();
if(inst_51223){
var statearr_51296_51436 = state_51276__$1;
(statearr_51296_51436[(1)] = (8));

} else {
var statearr_51297_51437 = state_51276__$1;
(statearr_51297_51437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (20))){
var inst_51271 = cljs.core.async.close_BANG_(ch__46599__auto__);
var state_51276__$1 = state_51276;
var statearr_51299_51438 = state_51276__$1;
(statearr_51299_51438[(2)] = inst_51271);

(statearr_51299_51438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (1))){
var state_51276__$1 = state_51276;
var statearr_51300_51439 = state_51276__$1;
(statearr_51300_51439[(2)] = null);

(statearr_51300_51439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51276,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_51207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51208 = [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)];
var inst_51209 = (new cljs.core.PersistentVector(null,1,(5),inst_51207,inst_51208,null));
var inst_51211 = com.wsscode.pathom.viz.query_editor.safe_read(query);
var state_51276__$1 = (function (){var statearr_51301 = state_51276;
(statearr_51301[(8)] = inst_51209);

(statearr_51301[(9)] = inst_51211);

return statearr_51301;
})();
if(cljs.core.truth_(request_trace_QMARK_)){
var statearr_51302_51441 = state_51276__$1;
(statearr_51302_51441[(1)] = (5));

} else {
var statearr_51303_51442 = state_51276__$1;
(statearr_51303_51442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (15))){
var inst_51244 = (state_51276[(2)]);
var inst_51245 = com.wsscode.async.async_cljs.consumer_pair(inst_51244);
var state_51276__$1 = state_51276;
var statearr_51304_51443 = state_51276__$1;
(statearr_51304_51443[(2)] = inst_51245);

(statearr_51304_51443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (21))){
var inst_51273 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51276__$1,inst_51273);
} else {
if((state_val_51279 === (13))){
var state_51276__$1 = state_51276;
var statearr_51305_51444 = state_51276__$1;
(statearr_51305_51444[(1)] = (16));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (6))){
var inst_51211 = (state_51276[(9)]);
var state_51276__$1 = state_51276;
var statearr_51308_51445 = state_51276__$1;
(statearr_51308_51445[(2)] = inst_51211);

(statearr_51308_51445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (17))){
var state_51276__$1 = state_51276;
var statearr_51309_51446 = state_51276__$1;
(statearr_51309_51446[(2)] = null);

(statearr_51309_51446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (3))){
var inst_51194 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
var statearr_51310_51447 = state_51276__$1;
(statearr_51310_51447[(2)] = inst_51194);


cljs.core.async.impl.ioc_helpers.process_exception(state_51276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (12))){
var inst_51222 = (state_51276[(7)]);
var inst_51242 = com.wsscode.async.async_cljs.promise__GT_chan(inst_51222);
var state_51276__$1 = state_51276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51276__$1,(15),inst_51242);
} else {
if((state_val_51279 === (2))){
var inst_51264 = (state_51276[(10)]);
var inst_51264__$1 = (state_51276[(2)]);
var inst_51266 = (inst_51264__$1 == null);
var inst_51267 = cljs.core.not(inst_51266);
var state_51276__$1 = (function (){var statearr_51311 = state_51276;
(statearr_51311[(10)] = inst_51264__$1);

return statearr_51311;
})();
if(inst_51267){
var statearr_51313_51448 = state_51276__$1;
(statearr_51313_51448[(1)] = (19));

} else {
var statearr_51314_51449 = state_51276__$1;
(statearr_51314_51449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (19))){
var inst_51264 = (state_51276[(10)]);
var inst_51269 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__46599__auto__,inst_51264);
var state_51276__$1 = state_51276;
var statearr_51315_51450 = state_51276__$1;
(statearr_51315_51450[(2)] = inst_51269);

(statearr_51315_51450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (11))){
var inst_51237 = (state_51276[(2)]);
var inst_51238 = com.wsscode.async.async_cljs.throw_err(inst_51237);
var state_51276__$1 = state_51276;
var statearr_51317_51451 = state_51276__$1;
(statearr_51317_51451[(2)] = inst_51238);

(statearr_51317_51451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (9))){
var inst_51222 = (state_51276[(7)]);
var inst_51240 = com.wsscode.async.async_cljs.promise_QMARK_(inst_51222);
var state_51276__$1 = state_51276;
if(cljs.core.truth_(inst_51240)){
var statearr_51320_51452 = state_51276__$1;
(statearr_51320_51452[(1)] = (12));

} else {
var statearr_51321_51453 = state_51276__$1;
(statearr_51321_51453[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (5))){
var inst_51211 = (state_51276[(9)]);
var inst_51214 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51211,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
var state_51276__$1 = state_51276;
var statearr_51322_51455 = state_51276__$1;
(statearr_51322_51455[(2)] = inst_51214);

(statearr_51322_51455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (14))){
var inst_51252 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
var statearr_51324_51457 = state_51276__$1;
(statearr_51324_51457[(2)] = inst_51252);

(statearr_51324_51457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (16))){
var inst_51222 = (state_51276[(7)]);
var state_51276__$1 = state_51276;
var statearr_51326_51459 = state_51276__$1;
(statearr_51326_51459[(2)] = inst_51222);

(statearr_51326_51459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (10))){
var inst_51209 = (state_51276[(8)]);
var inst_51254 = (state_51276[(2)]);
var inst_51255 = [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)];
var inst_51256 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,inst_51254,inst_51209);
var inst_51257 = com.wsscode.pathom.viz.helpers.pprint(inst_51256);
var inst_51258 = [id,inst_51257,null];
var inst_51259 = cljs.core.PersistentHashMap.fromArrays(inst_51255,inst_51258);
var inst_51260 = cljs.core.select_keys(inst_51254,inst_51209);
var inst_51261 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51259,inst_51260], 0));
var state_51276__$1 = state_51276;
var statearr_51327_51461 = state_51276__$1;
(statearr_51327_51461[(2)] = inst_51261);


cljs.core.async.impl.ioc_helpers.process_exception(state_51276__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (18))){
var inst_51250 = (state_51276[(2)]);
var state_51276__$1 = state_51276;
var statearr_51328_51462 = state_51276__$1;
(statearr_51328_51462[(2)] = inst_51250);

(statearr_51328_51462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51279 === (8))){
var inst_51222 = (state_51276[(7)]);
var state_51276__$1 = state_51276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51276__$1,(11),inst_51222);
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
}
});})(c__40572__auto___51435,ch__46599__auto__,map__51163,map__51163__$1,client_parser,map__51164,map__51164__$1,id,query,request_trace_QMARK_))
;
return ((function (switch__40498__auto__,c__40572__auto___51435,ch__46599__auto__,map__51163,map__51163__$1,client_parser,map__51164,map__51164__$1,id,query,request_trace_QMARK_){
return (function() {
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto__ = null;
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto____0 = (function (){
var statearr_51329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51329[(0)] = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto__);

(statearr_51329[(1)] = (1));

return statearr_51329;
});
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto____1 = (function (state_51276){
while(true){
var ret_value__40500__auto__ = (function (){try{while(true){
var result__40501__auto__ = switch__40498__auto__(state_51276);
if(cljs.core.keyword_identical_QMARK_(result__40501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40501__auto__;
}
break;
}
}catch (e51330){if((e51330 instanceof Object)){
var ex__40502__auto__ = e51330;
var statearr_51331_51465 = state_51276;
(statearr_51331_51465[(5)] = ex__40502__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40500__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51466 = state_51276;
state_51276 = G__51466;
continue;
} else {
return ret_value__40500__auto__;
}
break;
}
});
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto__ = function(state_51276){
switch(arguments.length){
case 0:
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto____0.call(this);
case 1:
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto____1.call(this,state_51276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto____0;
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto____1;
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__40499__auto__;
})()
;})(switch__40498__auto__,c__40572__auto___51435,ch__46599__auto__,map__51163,map__51163__$1,client_parser,map__51164,map__51164__$1,id,query,request_trace_QMARK_))
})();
var state__40574__auto__ = (function (){var statearr_51332 = f__40573__auto__();
(statearr_51332[(6)] = c__40572__auto___51435);

return statearr_51332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__40574__auto__);
});})(c__40572__auto___51435,ch__46599__auto__,map__51163,map__51163__$1,client_parser,map__51164,map__51164__$1,id,query,request_trace_QMARK_))
);


return ch__46599__auto__;
}));
/**
 * Returns a new parser that will use the card-parser setting the client
 *   parser to be `client-parser`.
 */
com.wsscode.pathom.viz.query_editor.client_card_parser = (function com$wsscode$pathom$viz$query_editor$client_card_parser(var_args){
var G__51334 = arguments.length;
switch (G__51334) {
case 1:
return com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$1 = (function (client_parser){
return com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2(client_parser,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2 = (function (client_parser,p__51335){
var map__51336 = p__51335;
var map__51336__$1 = (((((!((map__51336 == null))))?(((((map__51336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51336):map__51336);
var wrap_run_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51336__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","wrap-run-query","com.wsscode.pathom.viz.query-editor/wrap-run-query",1107576422));
var card_parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.request_cache_plugin,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.indexes,(function (){var G__51339 = com.wsscode.pathom.viz.query_editor.run_query;
if(cljs.core.truth_(wrap_run_query)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__51339,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),wrap_run_query);
} else {
return G__51339;
}
})()], null)], null)),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),com.wsscode.pathom.core.trace_plugin], null)], null));
return ((function (card_parser,map__51336,map__51336__$1,wrap_run_query){
return (function (env,tx){
return card_parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659),client_parser),tx);
});
;})(card_parser,map__51336,map__51336__$1,wrap_run_query))
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$lang$maxFixedArity = 2;

fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__51341 = fulcro_incoming_env;
var map__51341__$1 = (((((!((map__51341 == null))))?(((((map__51341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51341):map__51341);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51341__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51341__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pathom-query-editor-remote","pathom-query-editor-remote",-1506466221),fulcro.client.mutations.returning(ast,state,com.wsscode.pathom.viz.query_editor.TransactionResponse)], null);
})()], 0));
}));
com.wsscode.pathom.viz.query_editor.load_indexes = (function com$wsscode$pathom$viz$query_editor$load_indexes(app_or_reconciler){
var reconciler = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(app_or_reconciler);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return app_or_reconciler;
}
})();
var root_ident = new cljs.core.Keyword("ui","root","ui/root",-448656785).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(fulcro.client.primitives.app_state(reconciler)));
return fulcro.client.data_fetch.load.cljs$core$IFn$_invoke$arity$4(reconciler,root_ident,com.wsscode.pathom.viz.query_editor.QueryEditor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null),new cljs.core.Keyword(null,"remote","remote",-1593576576),com.wsscode.pathom.viz.query_editor.remote_key], null));
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.TransactionResponse !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.TransactionResponse = (function com$wsscode$pathom$viz$query_editor$TransactionResponse(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","TransactionResponse","com.wsscode.pathom.viz.query-editor/TransactionResponse",-1437901883),com.wsscode.pathom.viz.query_editor.TransactionResponse);

var x51348_51485 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
x51348_51485.render = ((function (x51348_51485){
return (function (){
var this__43720__auto__ = this;
var _ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51350 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51351 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51352 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51353 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51354 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51355 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51356 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51357 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51358 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51359 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51355;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51356;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51357;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51358;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51359;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51354;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51353;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51352;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51351;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51350;
}});})(x51348_51485))
;


com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.constructor = com.wsscode.pathom.viz.query_editor.TransactionResponse;

com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/TransactionResponse";

com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.fulcro$isComponent = true;

var x51361_51487 = com.wsscode.pathom.viz.query_editor.TransactionResponse;
x51361_51487.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51361_51487.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51361_51487){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51361_51487))
;

x51361_51487.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51361_51487.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51361_51487){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x51361_51487))
;


var x51362_51488 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
x51362_51488.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51362_51488.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51362_51488){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51362_51488))
;

x51362_51488.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51362_51488.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51362_51488){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x51362_51488))
;


com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/TransactionResponse";

com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.query-editor/TransactionResponse");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.Button !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.Button = (function com$wsscode$pathom$viz$query_editor$Button(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.query_editor.Button.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","Button","com.wsscode.pathom.viz.query-editor/Button",1064206500),com.wsscode.pathom.viz.query_editor.Button);

var x51368_51489 = com.wsscode.pathom.viz.query_editor.Button.prototype;
x51368_51489.render = ((function (x51368_51489){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51370 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51371 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51372 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51373 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51374 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51375 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51376 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51377 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51378 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51379 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51375;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51376;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51377;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51378;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51379;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),props,fulcro.client.primitives.children(this$)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51374;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51373;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51372;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51371;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51370;
}});})(x51368_51489))
;


com.wsscode.pathom.viz.query_editor.Button.prototype.constructor = com.wsscode.pathom.viz.query_editor.Button;

com.wsscode.pathom.viz.query_editor.Button.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/Button";

com.wsscode.pathom.viz.query_editor.Button.prototype.fulcro$isComponent = true;

var x51381_51506 = com.wsscode.pathom.viz.query_editor.Button;
x51381_51506.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51381_51506.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51381_51506){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5","#fff","center","middle","nowrap","#4b5b6d","pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b0c1d6",new cljs.core.Keyword(null,"color","color",1011675173),"#eaeaea"], null)], null)], null)], null);
});})(x51381_51506))
;

x51381_51506.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51381_51506){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51381_51506))
;


var x51383_51522 = com.wsscode.pathom.viz.query_editor.Button.prototype;
x51383_51522.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51383_51522.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51383_51522){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5","#fff","center","middle","nowrap","#4b5b6d","pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b0c1d6",new cljs.core.Keyword(null,"color","color",1011675173),"#eaeaea"], null)], null)], null)], null);
});})(x51383_51522))
;

x51383_51522.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51383_51522){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x51383_51522))
;


com.wsscode.pathom.viz.query_editor.Button.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.Button.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/Button";

com.wsscode.pathom.viz.query_editor.Button.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.query-editor/Button");
});
com.wsscode.pathom.viz.query_editor.button = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.Button);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.QueryEditor !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.QueryEditor = (function com$wsscode$pathom$viz$query_editor$QueryEditor(){
var this__44802__auto__ = this;
React.Component.apply(this__44802__auto__,arguments);

if((!((this__44802__auto__.initLocalState == null)))){
this__44802__auto__.state = this__44802__auto__.initLocalState();
} else {
this__44802__auto__.state = ({});
}

return this__44802__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.query_editor.QueryEditor.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","QueryEditor","com.wsscode.pathom.viz.query-editor/QueryEditor",-147278935),com.wsscode.pathom.viz.query_editor.QueryEditor);

var x51392_51528 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
x51392_51528.render = ((function (x51392_51528){
return (function (){
var this__43720__auto__ = this;
var this$ = this__43720__auto__;
var _STAR_reconciler_STAR__orig_val__51394 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__51395 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__51396 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__51397 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__51398 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__51399 = fulcro.client.primitives.get_reconciler(this__43720__auto__);
var _STAR_depth_STAR__temp_val__51400 = (fulcro.client.primitives.depth(this__43720__auto__) + (1));
var _STAR_shared_STAR__temp_val__51401 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__43720__auto__);
var _STAR_instrument_STAR__temp_val__51402 = fulcro.client.primitives.instrument(this__43720__auto__);
var _STAR_parent_STAR__temp_val__51403 = this__43720__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__51399;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__51400;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__51401;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__51402;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__51403;

try{var map__51404 = fulcro.client.primitives.props(this$);
var map__51404__$1 = (((((!((map__51404 == null))))?(((((map__51404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51404):map__51404);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798));
var request_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
var query_running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51404__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var map__51405 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__51405__$1 = (((((!((map__51405 == null))))?(((((map__51405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51405):map__51405);
var default_trace_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51405__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","default-trace-size","com.wsscode.pathom.viz.query-editor/default-trace-size",1888578783),(400));
var editor_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51405__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","editor-props","com.wsscode.pathom.viz.query-editor/editor-props",-223318753));
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51405__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),true);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.query_editor.QueryEditor);
var run_query = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"run-query","run-query",-1834614852));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),(cljs.core.truth_(enable_trace_QMARK_)?fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),request_trace_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
});})(run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528))
], null)], 0)),"Request trace"], 0)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__51409 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528){
return (function (){
return com.wsscode.pathom.viz.query_editor.load_indexes(fulcro.client.primitives.get_reconciler(this$));
});})(run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"6px"], null)], null);
var G__51410 = "Refresh index";
return (com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2(G__51409,G__51410) : com.wsscode.pathom.viz.query_editor.button.call(null,G__51409,G__51410));
})(),(function (){var G__51411 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),run_query,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),query_running_QMARK_], null);
var G__51412 = "Run query";
return (com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2(G__51411,G__51412) : com.wsscode.pathom.viz.query_editor.button.call(null,G__51411,G__51412));
})()], 0)),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".query-row",".query-row",-936435707),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?com.wsscode.pathom.viz.codemirror.pathom(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"editor","editor",-989377770).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"query-width","query-width",1236835238));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (400);
}
})()),"px"].join('')], null),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),((cljs.core.map_QMARK_(indexes))?com.wsscode.pathom.core.elide_not_found(indexes):null),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),new cljs.core.PersistentArrayMap(null, 5, ["Cmd-Enter",run_query,"Ctrl-Enter",run_query,"Shift-Enter",run_query,"Cmd-J","pathomJoin","Ctrl-Space","autocomplete"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528){
return (function (p1__51387_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),p1__51387_SHARP_);
});})(run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528))
], null),editor_props], 0))):null),com.wsscode.pathom.viz.helpers.drag_resize(this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"query-width","query-width",1236835238),new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"default","default",-1987822328),(400),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"divisor-v","divisor-v",-1483808443).cljs$core$IFn$_invoke$arity$1(css)], null)], null),fulcro.client.localized_dom.div()),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?com.wsscode.pathom.viz.codemirror.clojure(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"value","value",305978217),result,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","readOnly","com.wsscode.pathom.viz.codemirror/readOnly",-9416564),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true], null)], null),editor_props], 0))):null)], 0)),(cljs.core.truth_(trace)?com.wsscode.pathom.viz.helpers.drag_resize(this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"trace-height","trace-height",-1848631945),new cljs.core.Keyword(null,"default","default",-1987822328),default_trace_size,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"divisor-h","divisor-h",965004412).cljs$core$IFn$_invoke$arity$1(css)], null)], null),fulcro.client.localized_dom.div()):null),(cljs.core.truth_(trace)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"trace-height","trace-height",-1848631945));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_trace_size;
}
})()),"px"].join('')], null)], null),(function (){var G__51415 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.trace","trace-data","com.wsscode.pathom.viz.trace/trace-data",-1057203590),trace,new cljs.core.Keyword("com.wsscode.pathom.viz.trace","on-show-details","com.wsscode.pathom.viz.trace/on-show-details",-1635963710),((function (run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528){
return (function (p1__51388_SHARP_){
return console.log(p1__51388_SHARP_);
});})(run_query,map__51404,map__51404__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__51405,map__51405__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__51394,_STAR_depth_STAR__orig_val__51395,_STAR_shared_STAR__orig_val__51396,_STAR_instrument_STAR__orig_val__51397,_STAR_parent_STAR__orig_val__51398,_STAR_reconciler_STAR__temp_val__51399,_STAR_depth_STAR__temp_val__51400,_STAR_shared_STAR__temp_val__51401,_STAR_instrument_STAR__temp_val__51402,_STAR_parent_STAR__temp_val__51403,this$,this__43720__auto__,x51392_51528))
], null);
return (com.wsscode.pathom.viz.trace.d3_trace.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.trace.d3_trace.cljs$core$IFn$_invoke$arity$1(G__51415) : com.wsscode.pathom.viz.trace.d3_trace.call(null,G__51415));
})()], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__51398;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__51397;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__51396;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__51395;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__51394;
}});})(x51392_51528))
;

x51392_51528.componentDidMount = ((function (x51392_51528){
return (function (){
var this__43704__auto__ = this;
var this$ = this__43704__auto__;
var reconciler__43705__auto__ = fulcro.client.primitives.get_reconciler(this__43704__auto__);
var lifecycle__43706__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43705__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__43707__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__43705__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__43704__auto__,"fulcro$mounted",true);

if((indexer__43707__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__43707__auto__,this__43704__auto__);
}

if(cljs.core.truth_(lifecycle__43706__auto__)){
(lifecycle__43706__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__43706__auto__.cljs$core$IFn$_invoke$arity$2(this__43704__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__43706__auto__.call(null,this__43704__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

return setTimeout(((function (this$,reconciler__43705__auto__,lifecycle__43706__auto__,indexer__43707__auto__,this__43704__auto__,x51392_51528){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render?","render?",-1838581524),true], null));
});})(this$,reconciler__43705__auto__,lifecycle__43706__auto__,indexer__43707__auto__,this__43704__auto__,x51392_51528))
,(100));
});})(x51392_51528))
;

x51392_51528.initLocalState = ((function (x51392_51528){
return (function (){
var this$ = this;
var ret__43695__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-query","run-query",-1834614852),((function (this$,x51392_51528){
return (function (){
var map__51417 = fulcro.client.primitives.props(this$);
var map__51417__$1 = (((((!((map__51417 == null))))?(((((map__51417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51417):map__51417);
var props = map__51417__$1;
var query_running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51417__$1,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539));
var map__51418 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__51418__$1 = (((((!((map__51418 == null))))?(((((map__51418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51418):map__51418);
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51418__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305));
if(cljs.core.not(query_running_QMARK_)){
var props__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),((function (map__51417,map__51417__$1,props,query_running_QMARK_,map__51418,map__51418__$1,enable_trace_QMARK_,this$,x51392_51528){
return (function (p1__51385_SHARP_){
var and__4120__auto__ = enable_trace_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return p1__51385_SHARP_;
} else {
return and__4120__auto__;
}
});})(map__51417,map__51417__$1,props,query_running_QMARK_,map__51418,map__51418__$1,enable_trace_QMARK_,this$,x51392_51528))
);
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),null,(1),null)),(new cljs.core.List(null,props__$1,null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
} else {
return null;
}
});})(this$,x51392_51528))
], null);
var obj51423 = ({"fulcro$state":ret__43695__auto__});
return obj51423;
});})(x51392_51528))
;


com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.constructor = com.wsscode.pathom.viz.query_editor.QueryEditor;

com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/QueryEditor";

com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.fulcro$isComponent = true;

var x51424_51596 = com.wsscode.pathom.viz.query_editor.QueryEditor;
x51424_51596.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51424_51596.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51424_51596){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100% !important",new cljs.core.Keyword(null,"width","width",-384071477),"100% !important",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute !important",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-ident","$cm-atom-ident",-1918959628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#219",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror-hint","$CodeMirror-hint",673243748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query-row",".query-row",-936435707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#eeeeee",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-h",".divisor-h",-75539445),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"0",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"18px"], null)], null)], null);
});})(x51424_51596))
;

x51424_51596.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51424_51596){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.trace.D3Trace,com.wsscode.pathom.viz.query_editor.Button], null);
});})(x51424_51596))
;

x51424_51596.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x51424_51596.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x51424_51596){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),true,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),"[]",new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),""], null);
});})(x51424_51596))
;

x51424_51596.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51424_51596.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51424_51596){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51424_51596))
;

x51424_51596.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51424_51596.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51424_51596){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x51424_51596))
;


var x51427_51598 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
x51427_51598.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x51427_51598.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x51427_51598){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100% !important",new cljs.core.Keyword(null,"width","width",-384071477),"100% !important",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute !important",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-ident","$cm-atom-ident",-1918959628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#219",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror-hint","$CodeMirror-hint",673243748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query-row",".query-row",-936435707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#eeeeee",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-h",".divisor-h",-75539445),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"0",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"18px"], null)], null)], null);
});})(x51427_51598))
;

x51427_51598.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x51427_51598){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.trace.D3Trace,com.wsscode.pathom.viz.query_editor.Button], null);
});})(x51427_51598))
;

x51427_51598.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x51427_51598.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x51427_51598){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),true,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),"[]",new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),""], null);
});})(x51427_51598))
;

x51427_51598.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x51427_51598.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x51427_51598){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x51427_51598))
;

x51427_51598.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x51427_51598.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x51427_51598){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x51427_51598))
;


com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/QueryEditor";

com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$ctorPrWriter = (function (this__44805__auto__,writer__44806__auto__,opt__44807__auto__){
return cljs.core._write(writer__44806__auto__,"com.wsscode.pathom.viz.query-editor/QueryEditor");
});
com.wsscode.pathom.viz.query_editor.query_editor = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor);

//# sourceMappingURL=com.wsscode.pathom.viz.query_editor.js.map
