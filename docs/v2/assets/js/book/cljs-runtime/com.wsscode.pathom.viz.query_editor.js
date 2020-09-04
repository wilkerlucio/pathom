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
}catch (e54726){var _ = e54726;
return null;
}});
com.wsscode.pathom.viz.query_editor.indexes = com.wsscode.pathom.connect.resolver(new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","indexes","com.wsscode.pathom.viz.query-editor/indexes",-1925947531,null),(function (){var G__54730 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189)], null)], null);
return G__54730;

})(),(function com$wsscode$pathom$viz$query_editor$indexes(p__54741,_){
var map__54742 = p__54741;
var map__54742__$1 = (((((!((map__54742 == null))))?(((((map__54742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54742):map__54742);
var client_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659));
var G__54749 = cljs.core.PersistentArrayMap.EMPTY;
var G__54750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","idents","com.wsscode.pathom.connect/idents",1893384007),new cljs.core.Keyword("com.wsscode.pathom.connect","index-io","com.wsscode.pathom.connect/index-io",-1849483323),new cljs.core.Keyword("com.wsscode.pathom.connect","autocomplete-ignore","com.wsscode.pathom.connect/autocomplete-ignore",-191717401)], null)], null)], null);
return (client_parser.cljs$core$IFn$_invoke$arity$2 ? client_parser.cljs$core$IFn$_invoke$arity$2(G__54749,G__54750) : client_parser.call(null,G__54749,G__54750));
}));
com.wsscode.pathom.viz.query_editor.run_query = com.wsscode.pathom.connect.mutation(new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.connect","params","com.wsscode.pathom.connect/params",-1655889795),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347)], null),new cljs.core.Keyword("com.wsscode.pathom.connect","output","com.wsscode.pathom.connect/output",552487303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798)], null)], null),(function com$wsscode$pathom$viz$query_editor$run_query(p__54764,p__54765){
var map__54766 = p__54764;
var map__54766__$1 = (((((!((map__54766 == null))))?(((((map__54766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54766):map__54766);
var client_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54766__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659));
var map__54767 = p__54765;
var map__54767__$1 = (((((!((map__54767 == null))))?(((((map__54767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54767):map__54767);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54767__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54767__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347));
var request_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54767__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
var ch__53995__auto__ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var c__48522__auto___55114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48522__auto___55114,ch__53995__auto__,map__54766,map__54766__$1,client_parser,map__54767,map__54767__$1,id,query,request_trace_QMARK_){
return (function (){
var f__48523__auto__ = (function (){var switch__48139__auto__ = ((function (c__48522__auto___55114,ch__53995__auto__,map__54766,map__54766__$1,client_parser,map__54767,map__54767__$1,id,query,request_trace_QMARK_){
return (function (state_54890){
var state_val_54892 = (state_54890[(1)]);
if((state_val_54892 === (7))){
var inst_54822 = (state_54890[(7)]);
var state_54890__$1 = state_54890;
var statearr_54895_55116 = state_54890__$1;
(statearr_54895_55116[(2)] = inst_54822);

(statearr_54895_55116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (20))){
var inst_54882 = cljs.core.async.close_BANG_(ch__53995__auto__);
var state_54890__$1 = state_54890;
var statearr_54898_55117 = state_54890__$1;
(statearr_54898_55117[(2)] = inst_54882);

(statearr_54898_55117[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (1))){
var state_54890__$1 = state_54890;
var statearr_54900_55118 = state_54890__$1;
(statearr_54900_55118[(2)] = null);

(statearr_54900_55118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (4))){
var inst_54798 = (state_54890[(2)]);
var state_54890__$1 = state_54890;
var statearr_54901_55119 = state_54890__$1;
(statearr_54901_55119[(2)] = inst_54798);

(statearr_54901_55119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (15))){
var inst_54867 = (state_54890[(2)]);
var state_54890__$1 = state_54890;
var statearr_54912_55120 = state_54890__$1;
(statearr_54912_55120[(2)] = inst_54867);

(statearr_54912_55120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (21))){
var inst_54879 = (state_54890[(8)]);
var inst_54884 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch__53995__auto__,inst_54879);
var state_54890__$1 = state_54890;
var statearr_54918_55121 = state_54890__$1;
(statearr_54918_55121[(2)] = inst_54884);

(statearr_54918_55121[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (13))){
var inst_54836 = (state_54890[(9)]);
var inst_54857 = com.wsscode.async.async_cljs.promise__GT_chan(inst_54836);
var state_54890__$1 = state_54890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54890__$1,(16),inst_54857);
} else {
if((state_val_54892 === (22))){
var inst_54886 = (state_54890[(2)]);
var state_54890__$1 = state_54890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54890__$1,inst_54886);
} else {
if((state_val_54892 === (6))){
var inst_54822 = (state_54890[(7)]);
var inst_54827 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_54822,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
var state_54890__$1 = state_54890;
var statearr_54929_55122 = state_54890__$1;
(statearr_54929_55122[(2)] = inst_54827);

(statearr_54929_55122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (17))){
var inst_54836 = (state_54890[(9)]);
var state_54890__$1 = state_54890;
var statearr_54931_55123 = state_54890__$1;
(statearr_54931_55123[(2)] = inst_54836);

(statearr_54931_55123[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (3))){
var inst_54879 = (state_54890[(8)]);
var inst_54879__$1 = (state_54890[(2)]);
var inst_54880 = (inst_54879__$1 == null);
var state_54890__$1 = (function (){var statearr_54935 = state_54890;
(statearr_54935[(8)] = inst_54879__$1);

return statearr_54935;
})();
if(cljs.core.truth_(inst_54880)){
var statearr_54936_55124 = state_54890__$1;
(statearr_54936_55124[(1)] = (20));

} else {
var statearr_54937_55125 = state_54890__$1;
(statearr_54937_55125[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (12))){
var inst_54842 = (state_54890[(2)]);
var inst_54843 = com.wsscode.async.async_cljs.throw_err(inst_54842);
var state_54890__$1 = state_54890;
var statearr_54939_55127 = state_54890__$1;
(statearr_54939_55127[(2)] = inst_54843);

(statearr_54939_55127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (2))){
var _ = (function (){var statearr_54940 = state_54890;
(statearr_54940[(4)] = cljs.core.cons((5),(state_54890[(4)])));

return statearr_54940;
})();
var inst_54815 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54816 = [new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)];
var inst_54817 = (new cljs.core.PersistentVector(null,1,(5),inst_54815,inst_54816,null));
var inst_54822 = com.wsscode.pathom.viz.query_editor.safe_read(query);
var state_54890__$1 = (function (){var statearr_54941 = state_54890;
(statearr_54941[(7)] = inst_54822);

(statearr_54941[(10)] = inst_54817);

return statearr_54941;
})();
if(cljs.core.truth_(request_trace_QMARK_)){
var statearr_54942_55129 = state_54890__$1;
(statearr_54942_55129[(1)] = (6));

} else {
var statearr_54943_55130 = state_54890__$1;
(statearr_54943_55130[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (19))){
var inst_54865 = (state_54890[(2)]);
var state_54890__$1 = state_54890;
var statearr_54944_55131 = state_54890__$1;
(statearr_54944_55131[(2)] = inst_54865);

(statearr_54944_55131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (11))){
var inst_54817 = (state_54890[(10)]);
var inst_54869 = (state_54890[(2)]);
var inst_54870 = [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)];
var inst_54871 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,inst_54869,inst_54817);
var inst_54872 = com.wsscode.pathom.viz.helpers.pprint(inst_54871);
var inst_54873 = [id,inst_54872,null];
var inst_54874 = cljs.core.PersistentHashMap.fromArrays(inst_54870,inst_54873);
var inst_54875 = cljs.core.select_keys(inst_54869,inst_54817);
var inst_54876 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54874,inst_54875], 0));
var _ = (function (){var statearr_54947 = state_54890;
(statearr_54947[(4)] = cljs.core.rest((state_54890[(4)])));

return statearr_54947;
})();
var state_54890__$1 = state_54890;
var statearr_54948_55132 = state_54890__$1;
(statearr_54948_55132[(2)] = inst_54876);

(statearr_54948_55132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (9))){
var inst_54836 = (state_54890[(9)]);
var state_54890__$1 = state_54890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54890__$1,(12),inst_54836);
} else {
if((state_val_54892 === (5))){
var _ = (function (){var statearr_54949 = state_54890;
(statearr_54949[(4)] = cljs.core.rest((state_54890[(4)])));

return statearr_54949;
})();
var state_54890__$1 = state_54890;
var ex54945 = (state_54890__$1[(2)]);
var statearr_54950_55134 = state_54890__$1;
(statearr_54950_55134[(5)] = ex54945);


var statearr_54951_55135 = state_54890__$1;
(statearr_54951_55135[(1)] = (4));

(statearr_54951_55135[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (14))){
var state_54890__$1 = state_54890;
var statearr_54953_55136 = state_54890__$1;
(statearr_54953_55136[(1)] = (17));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (16))){
var inst_54859 = (state_54890[(2)]);
var inst_54860 = com.wsscode.async.async_cljs.consumer_pair(inst_54859);
var state_54890__$1 = state_54890;
var statearr_54960_55137 = state_54890__$1;
(statearr_54960_55137[(2)] = inst_54860);

(statearr_54960_55137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (10))){
var inst_54836 = (state_54890[(9)]);
var inst_54845 = com.wsscode.async.async_cljs.promise_QMARK_(inst_54836);
var state_54890__$1 = state_54890;
if(cljs.core.truth_(inst_54845)){
var statearr_54973_55138 = state_54890__$1;
(statearr_54973_55138[(1)] = (13));

} else {
var statearr_54974_55139 = state_54890__$1;
(statearr_54974_55139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (18))){
var state_54890__$1 = state_54890;
var statearr_54975_55140 = state_54890__$1;
(statearr_54975_55140[(2)] = null);

(statearr_54975_55140[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (8))){
var inst_54836 = (state_54890[(9)]);
var inst_54832 = (state_54890[(2)]);
var inst_54835 = cljs.core.PersistentHashMap.EMPTY;
var inst_54836__$1 = (client_parser.cljs$core$IFn$_invoke$arity$2 ? client_parser.cljs$core$IFn$_invoke$arity$2(inst_54835,inst_54832) : client_parser.call(null,inst_54835,inst_54832));
var inst_54837 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54836__$1);
var state_54890__$1 = (function (){var statearr_54978 = state_54890;
(statearr_54978[(9)] = inst_54836__$1);

return statearr_54978;
})();
if(inst_54837){
var statearr_54979_55141 = state_54890__$1;
(statearr_54979_55141[(1)] = (9));

} else {
var statearr_54980_55142 = state_54890__$1;
(statearr_54980_55142[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__48522__auto___55114,ch__53995__auto__,map__54766,map__54766__$1,client_parser,map__54767,map__54767__$1,id,query,request_trace_QMARK_))
;
return ((function (switch__48139__auto__,c__48522__auto___55114,ch__53995__auto__,map__54766,map__54766__$1,client_parser,map__54767,map__54767__$1,id,query,request_trace_QMARK_){
return (function() {
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto____0 = (function (){
var statearr_54987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54987[(0)] = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto__);

(statearr_54987[(1)] = (1));

return statearr_54987;
});
var com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto____1 = (function (state_54890){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_54890);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e54989){var ex__48143__auto__ = e54989;
var statearr_54990_55143 = state_54890;
(statearr_54990_55143[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_54890[(4)]))){
var statearr_54991_55144 = state_54890;
(statearr_54991_55144[(1)] = cljs.core.first((state_54890[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55146 = state_54890;
state_54890 = G__55146;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto__ = function(state_54890){
switch(arguments.length){
case 0:
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto____1.call(this,state_54890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto____0;
com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto____1;
return com$wsscode$pathom$viz$query_editor$run_query_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48522__auto___55114,ch__53995__auto__,map__54766,map__54766__$1,client_parser,map__54767,map__54767__$1,id,query,request_trace_QMARK_))
})();
var state__48524__auto__ = (function (){var statearr_54996 = f__48523__auto__();
(statearr_54996[(6)] = c__48522__auto___55114);

return statearr_54996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48524__auto__);
});})(c__48522__auto___55114,ch__53995__auto__,map__54766,map__54766__$1,client_parser,map__54767,map__54767__$1,id,query,request_trace_QMARK_))
);


return ch__53995__auto__;
}));
/**
 * Returns a new parser that will use the card-parser setting the client
 *   parser to be `client-parser`.
 */
com.wsscode.pathom.viz.query_editor.client_card_parser = (function com$wsscode$pathom$viz$query_editor$client_card_parser(var_args){
var G__54998 = arguments.length;
switch (G__54998) {
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

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$core$IFn$_invoke$arity$2 = (function (client_parser,p__55002){
var map__55003 = p__55002;
var map__55003__$1 = (((((!((map__55003 == null))))?(((((map__55003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55003):map__55003);
var wrap_run_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55003__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","wrap-run-query","com.wsscode.pathom.viz.query-editor/wrap-run-query",1107576422));
var card_parser = com.wsscode.pathom.core.parallel_parser(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.map_reader,com.wsscode.pathom.connect.parallel_reader,com.wsscode.pathom.connect.open_ident_reader], null)], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),com.wsscode.pathom.connect.mutate_async,new cljs.core.Keyword("com.wsscode.pathom.core","plugins","com.wsscode.pathom.core/plugins",-2128476796),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.core.error_handler_plugin,com.wsscode.pathom.core.request_cache_plugin,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.connect.connect_plugin.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.query_editor.indexes,(function (){var G__55007 = com.wsscode.pathom.viz.query_editor.run_query;
if(cljs.core.truth_(wrap_run_query)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__55007,new cljs.core.Keyword("com.wsscode.pathom.connect","mutate","com.wsscode.pathom.connect/mutate",-1612651112),wrap_run_query);
} else {
return G__55007;
}
})()], null)], null)),new cljs.core.Keyword("com.wsscode.pathom.connect","register","com.wsscode.pathom.connect/register",-386283650)),com.wsscode.pathom.core.trace_plugin], null)], null));
return ((function (card_parser,map__55003,map__55003__$1,wrap_run_query){
return (function (env,tx){
return card_parser(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","client-parser","com.wsscode.pathom.viz.query-editor/client-parser",429887659),client_parser),tx);
});
;})(card_parser,map__55003,map__55003__$1,wrap_run_query))
});

com.wsscode.pathom.viz.query_editor.client_card_parser.cljs$lang$maxFixedArity = 2;

fulcro.client.mutations.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),(function (fulcro_incoming_env,_,___$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__55008 = fulcro_incoming_env;
var map__55008__$1 = (((((!((map__55008 == null))))?(((((map__55008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55008):map__55008);
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55008__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","TransactionResponse","com.wsscode.pathom.viz.query-editor/TransactionResponse",-1437901883),com.wsscode.pathom.viz.query_editor.TransactionResponse);

var x55018_55164 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
x55018_55164.render = ((function (x55018_55164){
return (function (){
var this__52659__auto__ = this;
var _ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55019 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55020 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55021 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55022 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55023 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55024 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55025 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55026 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55027 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55028 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55024;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55025;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55026;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55027;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55028;

try{var ___$1 = fulcro.client.primitives.props(_);
return null;
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55023;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55022;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55021;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55020;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55019;
}});})(x55018_55164))
;


com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.constructor = com.wsscode.pathom.viz.query_editor.TransactionResponse;

com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/TransactionResponse";

com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype.fulcro$isComponent = true;

var x55030_55170 = com.wsscode.pathom.viz.query_editor.TransactionResponse;
x55030_55170.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55030_55170.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55030_55170){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55030_55170))
;

x55030_55170.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55030_55170.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55030_55170){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x55030_55170))
;


var x55035_55172 = com.wsscode.pathom.viz.query_editor.TransactionResponse.prototype;
x55035_55172.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55035_55172.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55035_55172){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55035_55172))
;

x55035_55172.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55035_55172.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55035_55172){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x55035_55172))
;


com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/TransactionResponse";

com.wsscode.pathom.viz.query_editor.TransactionResponse.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.query-editor/TransactionResponse");
});
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.Button !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.Button = (function com$wsscode$pathom$viz$query_editor$Button(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.query_editor.Button.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","Button","com.wsscode.pathom.viz.query-editor/Button",1064206500),com.wsscode.pathom.viz.query_editor.Button);

var x55044_55174 = com.wsscode.pathom.viz.query_editor.Button.prototype;
x55044_55174.render = ((function (x55044_55174){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55045 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55046 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55047 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55048 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55049 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55050 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55051 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55052 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55053 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55054 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55050;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55051;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55052;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55053;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55054;

try{var props = fulcro.client.primitives.props(this$);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),props,fulcro.client.primitives.children(this$)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55049;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55048;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55047;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55046;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55045;
}});})(x55044_55174))
;


com.wsscode.pathom.viz.query_editor.Button.prototype.constructor = com.wsscode.pathom.viz.query_editor.Button;

com.wsscode.pathom.viz.query_editor.Button.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/Button";

com.wsscode.pathom.viz.query_editor.Button.prototype.fulcro$isComponent = true;

var x55056_55175 = com.wsscode.pathom.viz.query_editor.Button;
x55056_55175.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55056_55175.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55056_55175){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5","#fff","center","middle","nowrap","#4b5b6d","pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b0c1d6",new cljs.core.Keyword(null,"color","color",1011675173),"#eaeaea"], null)], null)], null)], null);
});})(x55056_55175))
;

x55056_55175.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55056_55175){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55056_55175))
;


var x55059_55182 = com.wsscode.pathom.viz.query_editor.Button.prototype;
x55059_55182.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55059_55182.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55059_55182){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"user-select","user-select",-346451650)],["1.5","#fff","center","middle","nowrap","#4b5b6d","pointer","2px 8px","none","inline-block","none","3px","0","none"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:disabled","&:disabled",1179821010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#b0c1d6",new cljs.core.Keyword(null,"color","color",1011675173),"#eaeaea"], null)], null)], null)], null);
});})(x55059_55182))
;

x55059_55182.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55059_55182){
return (function (_){
var ___$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x55059_55182))
;


com.wsscode.pathom.viz.query_editor.Button.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.Button.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/Button";

com.wsscode.pathom.viz.query_editor.Button.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.query-editor/Button");
});
com.wsscode.pathom.viz.query_editor.button = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.Button);
if((typeof com !== 'undefined') && (typeof com.wsscode !== 'undefined') && (typeof com.wsscode.pathom !== 'undefined') && (typeof com.wsscode.pathom.viz !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor !== 'undefined') && (typeof com.wsscode.pathom.viz.query_editor.QueryEditor !== 'undefined')){
} else {
/**
 * @constructor
 * @nocollapse
 */
com.wsscode.pathom.viz.query_editor.QueryEditor = (function com$wsscode$pathom$viz$query_editor$QueryEditor(){
var this__53741__auto__ = this;
React.Component.apply(this__53741__auto__,arguments);

if((!((this__53741__auto__.initLocalState == null)))){
this__53741__auto__.state = this__53741__auto__.initLocalState();
} else {
this__53741__auto__.state = ({});
}

return this__53741__auto__;
});

goog.object.extend(com.wsscode.pathom.viz.query_editor.QueryEditor.prototype,React.Component.prototype,fulcro.client.primitives.default_component_prototype);
}

fulcro.client.primitives._register_component_BANG_(new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","QueryEditor","com.wsscode.pathom.viz.query-editor/QueryEditor",-147278935),com.wsscode.pathom.viz.query_editor.QueryEditor);

var x55070_55185 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
x55070_55185.render = ((function (x55070_55185){
return (function (){
var this__52659__auto__ = this;
var this$ = this__52659__auto__;
var _STAR_reconciler_STAR__orig_val__55071 = fulcro.client.primitives._STAR_reconciler_STAR_;
var _STAR_depth_STAR__orig_val__55072 = fulcro.client.primitives._STAR_depth_STAR_;
var _STAR_shared_STAR__orig_val__55073 = fulcro.client.primitives._STAR_shared_STAR_;
var _STAR_instrument_STAR__orig_val__55074 = fulcro.client.primitives._STAR_instrument_STAR_;
var _STAR_parent_STAR__orig_val__55075 = fulcro.client.primitives._STAR_parent_STAR_;
var _STAR_reconciler_STAR__temp_val__55076 = fulcro.client.primitives.get_reconciler(this__52659__auto__);
var _STAR_depth_STAR__temp_val__55077 = (fulcro.client.primitives.depth(this__52659__auto__) + (1));
var _STAR_shared_STAR__temp_val__55078 = fulcro.client.primitives.shared.cljs$core$IFn$_invoke$arity$1(this__52659__auto__);
var _STAR_instrument_STAR__temp_val__55079 = fulcro.client.primitives.instrument(this__52659__auto__);
var _STAR_parent_STAR__temp_val__55080 = this__52659__auto__;
fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__temp_val__55076;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__temp_val__55077;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__temp_val__55078;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__temp_val__55079;

fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__temp_val__55080;

try{var map__55082 = fulcro.client.primitives.props(this$);
var map__55082__$1 = (((((!((map__55082 == null))))?(((((map__55082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55082):map__55082);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55082__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55082__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798));
var request_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55082__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
var query_running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55082__$1,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55082__$1,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
var indexes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55082__$1,new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189));
var map__55083 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__55083__$1 = (((((!((map__55083 == null))))?(((((map__55083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55083):map__55083);
var default_trace_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55083__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","default-trace-size","com.wsscode.pathom.viz.query-editor/default-trace-size",1888578783),(400));
var editor_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55083__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","editor-props","com.wsscode.pathom.viz.query-editor/editor-props",-223318753));
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55083__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305),true);
var css = fulcro_css.css_implementation.get_classnames(com.wsscode.pathom.viz.query_editor.QueryEditor);
var run_query = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"run-query","run-query",-1834614852));
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".container",".container",-1441208944),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),(cljs.core.truth_(enable_trace_QMARK_)?fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),request_trace_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185){
return (function (){
return fulcro.client.mutations.toggle_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181));
});})(run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185))
], null)], 0)),"Request trace"], 0)):null),fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".flex",".flex",-73425686)], 0)),(function (){var G__55088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185){
return (function (){
return com.wsscode.pathom.viz.query_editor.load_indexes(fulcro.client.primitives.get_reconciler(this$));
});})(run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"6px"], null)], null);
var G__55089 = "Refresh index";
return (com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2(G__55088,G__55089) : com.wsscode.pathom.viz.query_editor.button.call(null,G__55088,G__55089));
})(),(function (){var G__55091 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),run_query,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),query_running_QMARK_], null);
var G__55092 = "Run query";
return (com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.viz.query_editor.button.cljs$core$IFn$_invoke$arity$2(G__55091,G__55092) : com.wsscode.pathom.viz.query_editor.button.call(null,G__55091,G__55092));
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
})(),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),((cljs.core.map_QMARK_(indexes))?com.wsscode.pathom.core.elide_not_found(indexes):null),new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","extraKeys","com.wsscode.pathom.viz.codemirror/extraKeys",-1175773179),new cljs.core.PersistentArrayMap(null, 5, ["Cmd-Enter",run_query,"Ctrl-Enter",run_query,"Shift-Enter",run_query,"Cmd-J","pathomJoin","Ctrl-Space","autocomplete"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185){
return (function (p1__55064_SHARP_){
return fulcro.client.mutations.set_value_BANG_(this$,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),p1__55064_SHARP_);
});})(run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185))
], null),editor_props], 0))):null),com.wsscode.pathom.viz.helpers.drag_resize(this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"query-width","query-width",1236835238),new cljs.core.Keyword(null,"axis","axis",-1215390822),"x",new cljs.core.Keyword(null,"default","default",-1987822328),(400),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"divisor-v","divisor-v",-1483808443).cljs$core$IFn$_invoke$arity$1(css)], null)], null),fulcro.client.localized_dom.div()),(cljs.core.truth_(fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"render?","render?",-1838581524)))?com.wsscode.pathom.viz.codemirror.clojure(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(css),new cljs.core.Keyword(null,"value","value",305978217),result,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","options","com.wsscode.pathom.viz.codemirror/options",760650482),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","readOnly","com.wsscode.pathom.viz.codemirror/readOnly",-9416564),true,new cljs.core.Keyword("com.wsscode.pathom.viz.codemirror","lineNumbers","com.wsscode.pathom.viz.codemirror/lineNumbers",1787881928),true], null)], null),editor_props], 0))):null)], 0)),(cljs.core.truth_(trace)?com.wsscode.pathom.viz.helpers.drag_resize(this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"trace-height","trace-height",-1848631945),new cljs.core.Keyword(null,"default","default",-1987822328),default_trace_size,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"divisor-h","divisor-h",965004412).cljs$core$IFn$_invoke$arity$1(css)], null)], null),fulcro.client.localized_dom.div()):null),(cljs.core.truth_(trace)?fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = fulcro.client.primitives.get_state.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"trace-height","trace-height",-1848631945));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default_trace_size;
}
})()),"px"].join('')], null)], null),(function (){var G__55094 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.viz.trace","trace-data","com.wsscode.pathom.viz.trace/trace-data",-1057203590),trace,new cljs.core.Keyword("com.wsscode.pathom.viz.trace","on-show-details","com.wsscode.pathom.viz.trace/on-show-details",-1635963710),((function (run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185){
return (function (p1__55065_SHARP_){
return console.log(p1__55065_SHARP_);
});})(run_query,map__55082,map__55082__$1,query,result,request_trace_QMARK_,query_running_QMARK_,trace,indexes,map__55083,map__55083__$1,default_trace_size,editor_props,enable_trace_QMARK_,css,_STAR_reconciler_STAR__orig_val__55071,_STAR_depth_STAR__orig_val__55072,_STAR_shared_STAR__orig_val__55073,_STAR_instrument_STAR__orig_val__55074,_STAR_parent_STAR__orig_val__55075,_STAR_reconciler_STAR__temp_val__55076,_STAR_depth_STAR__temp_val__55077,_STAR_shared_STAR__temp_val__55078,_STAR_instrument_STAR__temp_val__55079,_STAR_parent_STAR__temp_val__55080,this$,this__52659__auto__,x55070_55185))
], null);
return (com.wsscode.pathom.viz.trace.d3_trace.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.viz.trace.d3_trace.cljs$core$IFn$_invoke$arity$1(G__55094) : com.wsscode.pathom.viz.trace.d3_trace.call(null,G__55094));
})()], 0)):null)], 0));
}finally {fulcro.client.primitives._STAR_parent_STAR_ = _STAR_parent_STAR__orig_val__55075;

fulcro.client.primitives._STAR_instrument_STAR_ = _STAR_instrument_STAR__orig_val__55074;

fulcro.client.primitives._STAR_shared_STAR_ = _STAR_shared_STAR__orig_val__55073;

fulcro.client.primitives._STAR_depth_STAR_ = _STAR_depth_STAR__orig_val__55072;

fulcro.client.primitives._STAR_reconciler_STAR_ = _STAR_reconciler_STAR__orig_val__55071;
}});})(x55070_55185))
;

x55070_55185.componentDidMount = ((function (x55070_55185){
return (function (){
var this__52643__auto__ = this;
var this$ = this__52643__auto__;
var reconciler__52644__auto__ = fulcro.client.primitives.get_reconciler(this__52643__auto__);
var lifecycle__52645__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52644__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"lifecycle","lifecycle",341496205)], null));
var indexer__52646__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(reconciler__52644__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
goog.object.set(this__52643__auto__,"fulcro$mounted",true);

if((indexer__52646__auto__ == null)){
} else {
fulcro.client.impl.protocols.index_component_BANG_(indexer__52646__auto__,this__52643__auto__);
}

if(cljs.core.truth_(lifecycle__52645__auto__)){
(lifecycle__52645__auto__.cljs$core$IFn$_invoke$arity$2 ? lifecycle__52645__auto__.cljs$core$IFn$_invoke$arity$2(this__52643__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)) : lifecycle__52645__auto__.call(null,this__52643__auto__,new cljs.core.Keyword(null,"mount","mount",-1560582470)));
} else {
}

return setTimeout(((function (this$,reconciler__52644__auto__,lifecycle__52645__auto__,indexer__52646__auto__,this__52643__auto__,x55070_55185){
return (function (){
return fulcro.client.primitives.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render?","render?",-1838581524),true], null));
});})(this$,reconciler__52644__auto__,lifecycle__52645__auto__,indexer__52646__auto__,this__52643__auto__,x55070_55185))
,(100));
});})(x55070_55185))
;

x55070_55185.initLocalState = ((function (x55070_55185){
return (function (){
var this$ = this;
var ret__52634__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run-query","run-query",-1834614852),((function (this$,x55070_55185){
return (function (){
var map__55097 = fulcro.client.primitives.props(this$);
var map__55097__$1 = (((((!((map__55097 == null))))?(((((map__55097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55097):map__55097);
var props = map__55097__$1;
var query_running_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55097__$1,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539));
var map__55098 = fulcro.client.primitives.get_computed.cljs$core$IFn$_invoke$arity$1(props);
var map__55098__$1 = (((((!((map__55098 == null))))?(((((map__55098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55098):map__55098);
var enable_trace_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55098__$1,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","enable-trace?","com.wsscode.pathom.viz.query-editor/enable-trace?",-315452305));
if(cljs.core.not(query_running_QMARK_)){
var props__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),((function (map__55097,map__55097__$1,props,query_running_QMARK_,map__55098,map__55098__$1,enable_trace_QMARK_,this$,x55070_55185){
return (function (p1__55063_SHARP_){
var and__4120__auto__ = enable_trace_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return p1__55063_SHARP_;
} else {
return and__4120__auto__;
}
});})(map__55097,map__55097__$1,props,query_running_QMARK_,map__55098,map__55098__$1,enable_trace_QMARK_,this$,x55070_55185))
);
return fulcro.client.primitives.ptransact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("com.wsscode.pathom.viz.query-editor","run-query","com.wsscode.pathom.viz.query-editor/run-query",-375131988,null),null,(1),null)),(new cljs.core.List(null,props__$1,null,(1),null))))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("fulcro.client.mutations","set-props","fulcro.client.mutations/set-props",-1739323709,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)))))], null));
} else {
return null;
}
});})(this$,x55070_55185))
], null);
var obj55105 = ({"fulcro$state":ret__52634__auto__});
return obj55105;
});})(x55070_55185))
;


com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.constructor = com.wsscode.pathom.viz.query_editor.QueryEditor;

com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.constructor.displayName = "com.wsscode.pathom.viz.query-editor/QueryEditor";

com.wsscode.pathom.viz.query_editor.QueryEditor.prototype.fulcro$isComponent = true;

var x55106_55251 = com.wsscode.pathom.viz.query_editor.QueryEditor;
x55106_55251.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55106_55251.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55106_55251){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100% !important",new cljs.core.Keyword(null,"width","width",-384071477),"100% !important",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute !important",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-ident","$cm-atom-ident",-1918959628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#219",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror-hint","$CodeMirror-hint",673243748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query-row",".query-row",-936435707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#eeeeee",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-h",".divisor-h",-75539445),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"0",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"18px"], null)], null)], null);
});})(x55106_55251))
;

x55106_55251.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55106_55251){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.trace.D3Trace,com.wsscode.pathom.viz.query_editor.Button], null);
});})(x55106_55251))
;

x55106_55251.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x55106_55251.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x55106_55251){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),true,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),"[]",new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),""], null);
});})(x55106_55251))
;

x55106_55251.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55106_55251.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55106_55251){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55106_55251))
;

x55106_55251.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55106_55251.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55106_55251){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x55106_55251))
;


var x55108_55273 = com.wsscode.pathom.viz.query_editor.QueryEditor.prototype;
x55108_55273.fulcro_css$css_protocols$CSS$ = cljs.core.PROTOCOL_SENTINEL;

x55108_55273.fulcro_css$css_protocols$CSS$local_rules$arity$1 = ((function (x55108_55273){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"100% !important",new cljs.core.Keyword(null,"width","width",-384071477),"100% !important",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute !important",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-composite","$cm-atom-composite",-229866949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ab890d"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$cm-atom-ident","$cm-atom-ident",-1918959628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#219",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror-hint","$CodeMirror-hint",673243748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".container",".container",-1441208944),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ddd",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"200px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".query-row",".query-row",-936435707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".toolbar",".toolbar",968457325),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"#eeeeee",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid #e0e0e0",new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 4px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".editor",".editor",2032871892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-v",".divisor-v",-1827704384),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"0",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".divisor-h",".divisor-h",-75539445),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e0e0e0",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"0",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"0",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"2"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$CodeMirror","$CodeMirror",2040722964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#f6f7f8"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".trace",".trace",-615736569),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"18px"], null)], null)], null);
});})(x55108_55273))
;

x55108_55273.fulcro_css$css_protocols$CSS$include_children$arity$1 = ((function (x55108_55273){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.viz.trace.D3Trace,com.wsscode.pathom.viz.query_editor.Button], null);
});})(x55108_55273))
;

x55108_55273.fulcro$client$primitives$InitialAppState$ = cljs.core.PROTOCOL_SENTINEL;

x55108_55273.fulcro$client$primitives$InitialAppState$initial_state$arity$2 = ((function (x55108_55273){
return (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),cljs.core.random_uuid(),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),true,new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),"[]",new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),""], null);
});})(x55108_55273))
;

x55108_55273.fulcro$client$primitives$Ident$ = cljs.core.PROTOCOL_SENTINEL;

x55108_55273.fulcro$client$primitives$Ident$ident$arity$2 = ((function (x55108_55273){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x55108_55273))
;

x55108_55273.fulcro$client$primitives$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x55108_55273.fulcro$client$primitives$IQuery$query$arity$1 = ((function (x55108_55273){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","id","com.wsscode.pathom.viz.query-editor/id",-780523321),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","request-trace?","com.wsscode.pathom.viz.query-editor/request-trace?",2047772181),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","query","com.wsscode.pathom.viz.query-editor/query",-2030859347),new cljs.core.Keyword("com.wsscode.pathom.viz.query-editor","result","com.wsscode.pathom.viz.query-editor/result",-65264798),new cljs.core.Keyword("ui","query-running?","ui/query-running?",-1447205539),new cljs.core.Keyword("com.wsscode.pathom.connect","indexes","com.wsscode.pathom.connect/indexes",-1375082189),new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063)], null);
});})(x55108_55273))
;


com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$type = true;

com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$ctorStr = "com.wsscode.pathom.viz.query-editor/QueryEditor";

com.wsscode.pathom.viz.query_editor.QueryEditor.cljs$lang$ctorPrWriter = (function (this__53744__auto__,writer__53745__auto__,opt__53746__auto__){
return cljs.core._write(writer__53745__auto__,"com.wsscode.pathom.viz.query-editor/QueryEditor");
});
com.wsscode.pathom.viz.query_editor.query_editor = fulcro.client.primitives.computed_factory.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.viz.query_editor.QueryEditor);

//# sourceMappingURL=com.wsscode.pathom.viz.query_editor.js.map
