goog.provide('com.wsscode.pathom.fulcro.network');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.graphql');
goog.require('com.wsscode.pathom.diplomat.http');
goog.require('com.wsscode.pathom.diplomat.http.fetch');
goog.require('fulcro.client.network');
goog.require('fulcro.client.primitives');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fulcro.client.network.FulcroRemoteI}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom.fulcro.network.PathomRemote = (function (parser,__meta,__extmap,__hash){
this.parser = parser;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49515,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49560 = k49515;
var G__49560__$1 = (((G__49560 instanceof cljs.core.Keyword))?G__49560.fqn:null);
switch (G__49560__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49515,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49561){
var vec__49564 = p__49561;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49564,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#com.wsscode.pathom.fulcro.network.PathomRemote{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser],null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49514){
var self__ = this;
var G__49514__$1 = this;
return (new cljs.core.RecordIter((0),G__49514__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49573 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-654270555 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49573(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49517,other49518){
var self__ = this;
var this49517__$1 = this;
return (((!((other49518 == null)))) && ((this49517__$1.constructor === other49518.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49517__$1.parser,other49518.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49517__$1.__extmap,other49518.__extmap)));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parser","parser",-1543495310),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49514){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49578 = cljs.core.keyword_identical_QMARK_;
var expr__49579 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49583 = new cljs.core.Keyword(null,"parser","parser",-1543495310);
var G__49584 = expr__49579;
return (pred__49578.cljs$core$IFn$_invoke$arity$2 ? pred__49578.cljs$core$IFn$_invoke$arity$2(G__49583,G__49584) : pred__49578.call(null,G__49583,G__49584));
})())){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__49514,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49514),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49514){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__49514,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__49596){
var self__ = this;
var map__49597 = p__49596;
var map__49597__$1 = (((((!((map__49597 == null))))?(((((map__49597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49597):map__49597);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49597__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,this$__$1,map__49597,map__49597__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,this$__$1,map__49597,map__49597__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_49629){
var state_val_49630 = (state_49629[(1)]);
if((state_val_49630 === (1))){
var state_49629__$1 = state_49629;
var statearr_49635_51170 = state_49629__$1;
(statearr_49635_51170[(2)] = null);

(statearr_49635_51170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (2))){
var inst_49627 = (state_49629[(2)]);
var state_49629__$1 = state_49629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49629__$1,inst_49627);
} else {
if((state_val_49630 === (3))){
var inst_49603 = (state_49629[(2)]);
var inst_49604 = console.error("PathomRemote error:",inst_49603);
var inst_49605 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49606 = [inst_49603];
var inst_49607 = cljs.core.PersistentHashMap.fromArrays(inst_49605,inst_49606);
var inst_49608 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_49607) : error_handler.call(null,inst_49607));
var state_49629__$1 = (function (){var statearr_49636 = state_49629;
(statearr_49636[(7)] = inst_49604);

return statearr_49636;
})();
var statearr_49637_51178 = state_49629__$1;
(statearr_49637_51178[(2)] = inst_49608);


cljs.core.async.impl.ioc_helpers.process_exception(state_49629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (4))){
var inst_49614 = (state_49629[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49629,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49612 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49613 = cljs.core.PersistentHashMap.EMPTY;
var inst_49614__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_49613,edn) : self__.parser.call(null,inst_49613,edn));
var inst_49615 = com.wsscode.common.async_cljs.chan_QMARK_(inst_49614__$1);
var state_49629__$1 = (function (){var statearr_49638 = state_49629;
(statearr_49638[(9)] = inst_49612);

(statearr_49638[(8)] = inst_49614__$1);

return statearr_49638;
})();
if(inst_49615){
var statearr_49639_51193 = state_49629__$1;
(statearr_49639_51193[(1)] = (5));

} else {
var statearr_49640_51194 = state_49629__$1;
(statearr_49640_51194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (5))){
var inst_49614 = (state_49629[(8)]);
var state_49629__$1 = state_49629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49629__$1,(8),inst_49614);
} else {
if((state_val_49630 === (6))){
var inst_49614 = (state_49629[(8)]);
var state_49629__$1 = state_49629;
var statearr_49641_51207 = state_49629__$1;
(statearr_49641_51207[(2)] = inst_49614);

(statearr_49641_51207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (7))){
var inst_49612 = (state_49629[(9)]);
var inst_49622 = (state_49629[(2)]);
var inst_49623 = [edn,inst_49622];
var inst_49624 = cljs.core.PersistentHashMap.fromArrays(inst_49612,inst_49623);
var inst_49625 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_49624) : ok_handler.call(null,inst_49624));
var state_49629__$1 = state_49629;
var statearr_49642_51217 = state_49629__$1;
(statearr_49642_51217[(2)] = inst_49625);


cljs.core.async.impl.ioc_helpers.process_exception(state_49629__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49630 === (8))){
var inst_49618 = (state_49629[(2)]);
var inst_49619 = com.wsscode.common.async_cljs.throw_err(inst_49618);
var state_49629__$1 = state_49629;
var statearr_49644_51222 = state_49629__$1;
(statearr_49644_51222[(2)] = inst_49619);

(statearr_49644_51222[(1)] = (7));


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
});})(c__39003__auto__,this$__$1,map__49597,map__49597__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__38929__auto__,c__39003__auto__,this$__$1,map__49597,map__49597__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0 = (function (){
var statearr_49645 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49645[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38930__auto__);

(statearr_49645[(1)] = (1));

return statearr_49645;
});
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1 = (function (state_49629){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_49629);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e49648){if((e49648 instanceof Object)){
var ex__38933__auto__ = e49648;
var statearr_49651_51235 = state_49629;
(statearr_49651_51235[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49648;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51236 = state_49629;
state_49629 = G__51236;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__ = function(state_49629){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1.call(this,state_49629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,this$__$1,map__49597,map__49597__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__39005__auto__ = (function (){var statearr_49652 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_49652[(6)] = c__39003__auto__);

return statearr_49652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,this$__$1,map__49597,map__49597__$1,edn,ok_handler,error_handler,progress_handler))
);

return c__39003__auto__;
});

com.wsscode.pathom.fulcro.network.PathomRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parser","parser",97036217,null)], null);
});

com.wsscode.pathom.fulcro.network.PathomRemote.cljs$lang$type = true;

com.wsscode.pathom.fulcro.network.PathomRemote.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom.fulcro.network/PathomRemote",null,(1),null));
});

com.wsscode.pathom.fulcro.network.PathomRemote.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"com.wsscode.pathom.fulcro.network/PathomRemote");
});

/**
 * Positional factory function for com.wsscode.pathom.fulcro.network/PathomRemote.
 */
com.wsscode.pathom.fulcro.network.__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$__GT_PathomRemote(parser){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(parser,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom.fulcro.network/PathomRemote, taking a map of keywords to field values.
 */
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__49541){
var extmap__4424__auto__ = (function (){var G__49660 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49541,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__49541)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49660);
} else {
return G__49660;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__49541),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Create a Fulcro remote that will use a Pathom async parser to process the query.
 */
com.wsscode.pathom.fulcro.network.pathom_remote = (function com$wsscode$pathom$fulcro$network$pathom_remote(parser){
return com.wsscode.pathom.fulcro.network.map__GT_PathomRemote(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom.fulcro.network.FnNetwork = (function (f,serialize_QMARK_,__meta,__extmap,__hash){
this.f = f;
this.serialize_QMARK_ = serialize_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49664,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49673 = k49664;
var G__49673__$1 = (((G__49673 instanceof cljs.core.Keyword))?G__49673.fqn:null);
switch (G__49673__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49664,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49674){
var vec__49675 = p__49674;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#com.wsscode.pathom.fulcro.network.FnNetwork{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_],null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49663){
var self__ = this;
var G__49663__$1 = this;
return (new cljs.core.RecordIter((0),G__49663__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49681 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1603683175 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49681(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49665,other49666){
var self__ = this;
var this49665__$1 = this;
return (((!((other49666 == null)))) && ((this49665__$1.constructor === other49666.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49665__$1.f,other49666.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49665__$1.serialize_QMARK_,other49666.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49665__$1.__extmap,other49666.__extmap)));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (this$,edn,ok,error){
var self__ = this;
var this$__$1 = this;
return (self__.f.cljs$core$IFn$_invoke$arity$4 ? self__.f.cljs$core$IFn$_invoke$arity$4(this$__$1,edn,ok,error) : self__.f.call(null,this$__$1,edn,ok,error));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.serialize_QMARK_;
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49663){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49692 = cljs.core.keyword_identical_QMARK_;
var expr__49693 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49695 = new cljs.core.Keyword(null,"f","f",-1597136552);
var G__49696 = expr__49693;
return (pred__49692.cljs$core$IFn$_invoke$arity$2 ? pred__49692.cljs$core$IFn$_invoke$arity$2(G__49695,G__49696) : pred__49692.call(null,G__49695,G__49696));
})())){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__49663,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49697 = new cljs.core.Keyword(null,"serialize?","serialize?",1512776885);
var G__49698 = expr__49693;
return (pred__49692.cljs$core$IFn$_invoke$arity$2 ? pred__49692.cljs$core$IFn$_invoke$arity$2(G__49697,G__49698) : pred__49692.call(null,G__49697,G__49698));
})())){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__49663,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49663),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49663){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__49663,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"serialize?","serialize?",-1141658884,null)], null);
});

com.wsscode.pathom.fulcro.network.FnNetwork.cljs$lang$type = true;

com.wsscode.pathom.fulcro.network.FnNetwork.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom.fulcro.network/FnNetwork",null,(1),null));
});

com.wsscode.pathom.fulcro.network.FnNetwork.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"com.wsscode.pathom.fulcro.network/FnNetwork");
});

/**
 * Positional factory function for com.wsscode.pathom.fulcro.network/FnNetwork.
 */
com.wsscode.pathom.fulcro.network.__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$__GT_FnNetwork(f,serialize_QMARK_){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(f,serialize_QMARK_,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom.fulcro.network/FnNetwork, taking a map of keywords to field values.
 */
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__49669){
var extmap__4424__auto__ = (function (){var G__49706 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49669,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__49669)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49706);
} else {
return G__49706;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__49669),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__49669),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__49713 = arguments.length;
switch (G__49713) {
case 1:
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1 = (function (f){
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$2(f,true);
});

com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$2 = (function (f,serialize_QMARK_){
return com.wsscode.pathom.fulcro.network.map__GT_FnNetwork(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"f","f",-1597136552),f,new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),serialize_QMARK_], null));
});

com.wsscode.pathom.fulcro.network.fn_network.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom.fulcro.network.TransformNetwork = (function (network,options,__meta,__extmap,__hash){
this.network = network;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49723,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49730 = k49723;
var G__49730__$1 = (((G__49730 instanceof cljs.core.Keyword))?G__49730.fqn:null);
switch (G__49730__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49723,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49736){
var vec__49739 = p__49736;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49739,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49739,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#com.wsscode.pathom.fulcro.network.TransformNetwork{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49722){
var self__ = this;
var G__49722__$1 = this;
return (new cljs.core.RecordIter((0),G__49722__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49756 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-928703448 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49756(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49724,other49725){
var self__ = this;
var this49724__$1 = this;
return (((!((other49725 == null)))) && ((this49724__$1.constructor === other49725.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49724__$1.network,other49725.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49724__$1.options,other49725.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49724__$1.__extmap,other49725.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__49767 = self__.options;
var map__49767__$1 = (((((!((map__49767 == null))))?(((((map__49767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49767):map__49767);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49767__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__49767,map__49767__$1,___$1){
return (function (___$2,x){
return x;
});})(map__49767,map__49767__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49767__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__49767,map__49767__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__49767,map__49767__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49767__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__49767,map__49767__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__49767,map__49767__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49767__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49767__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__49776 = edn_SINGLEQUOTE_;
var G__49777 = ((function (G__49776,edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__49776,edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49718_SHARP_){
var G__49782 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49718_SHARP_) : transform_response.call(null,env,p1__49718_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__49782) : ok.call(null,G__49782));
});})(G__49776,edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__49776,edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49719_SHARP_){
var G__49783 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49719_SHARP_) : transform_error.call(null,env,p1__49719_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__49783) : error.call(null,G__49783));
});})(G__49776,edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__49776,edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__49776,G__49777) : transform_transmission.call(null,G__49776,G__49777));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49720_SHARP_){
var G__49785 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49720_SHARP_) : transform_response.call(null,env,p1__49720_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__49785) : ok.call(null,G__49785));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49721_SHARP_){
var G__49788 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49721_SHARP_) : transform_error.call(null,env,p1__49721_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__49788) : error.call(null,G__49788));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49767,map__49767__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
}
} else {
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(null) : ok.call(null,null));
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
fulcro.client.network.start(self__.network);

return this$__$1;
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e49802){var ___$2 = e49802;
return true;
}});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49722){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49815 = cljs.core.keyword_identical_QMARK_;
var expr__49816 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49822 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__49823 = expr__49816;
return (pred__49815.cljs$core$IFn$_invoke$arity$2 ? pred__49815.cljs$core$IFn$_invoke$arity$2(G__49822,G__49823) : pred__49815.call(null,G__49822,G__49823));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__49722,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49825 = new cljs.core.Keyword(null,"options","options",99638489);
var G__49826 = expr__49816;
return (pred__49815.cljs$core$IFn$_invoke$arity$2 ? pred__49815.cljs$core$IFn$_invoke$arity$2(G__49825,G__49826) : pred__49815.call(null,G__49825,G__49826));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__49722,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49722),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49722){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__49722,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"network","network",-604431072,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

com.wsscode.pathom.fulcro.network.TransformNetwork.cljs$lang$type = true;

com.wsscode.pathom.fulcro.network.TransformNetwork.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom.fulcro.network/TransformNetwork",null,(1),null));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"com.wsscode.pathom.fulcro.network/TransformNetwork");
});

/**
 * Positional factory function for com.wsscode.pathom.fulcro.network/TransformNetwork.
 */
com.wsscode.pathom.fulcro.network.__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$__GT_TransformNetwork(network,options){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(network,options,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom.fulcro.network/TransformNetwork, taking a map of keywords to field values.
 */
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__49726){
var extmap__4424__auto__ = (function (){var G__49854 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49726,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__49726)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49854);
} else {
return G__49854;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__49726),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49726),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {fulcro.client.network.FulcroRemoteI}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom.fulcro.network.TransformRemoteI = (function (network,options,__meta,__extmap,__hash){
this.network = network;
this.options = options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49867,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49891 = k49867;
var G__49891__$1 = (((G__49891 instanceof cljs.core.Keyword))?G__49891.fqn:null);
switch (G__49891__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49867,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49898){
var vec__49904 = p__49898;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49904,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49904,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#com.wsscode.pathom.fulcro.network.TransformRemoteI{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"network","network",2050004697),self__.network],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"options","options",99638489),self__.options],null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49866){
var self__ = this;
var G__49866__$1 = this;
return (new cljs.core.RecordIter((0),G__49866__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49931 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1483300891 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49931(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49868,other49869){
var self__ = this;
var this49868__$1 = this;
return (((!((other49869 == null)))) && ((this49868__$1.constructor === other49869.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49868__$1.network,other49869.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49868__$1.options,other49869.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49868__$1.__extmap,other49869.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e49954){var ___$2 = e49954;
return true;
}});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"options","options",99638489),null,new cljs.core.Keyword(null,"network","network",2050004697),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49866){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49962 = cljs.core.keyword_identical_QMARK_;
var expr__49963 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49966 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__49967 = expr__49963;
return (pred__49962.cljs$core$IFn$_invoke$arity$2 ? pred__49962.cljs$core$IFn$_invoke$arity$2(G__49966,G__49967) : pred__49962.call(null,G__49966,G__49967));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__49866,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49968 = new cljs.core.Keyword(null,"options","options",99638489);
var G__49969 = expr__49963;
return (pred__49962.cljs$core$IFn$_invoke$arity$2 ? pred__49962.cljs$core$IFn$_invoke$arity$2(G__49968,G__49969) : pred__49962.call(null,G__49968,G__49969));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__49866,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49866),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49866){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__49866,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__49990){
var self__ = this;
var map__49994 = p__49990;
var map__49994__$1 = (((((!((map__49994 == null))))?(((((map__49994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49994):map__49994);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49994__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49994__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49994__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49994__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__50017 = self__.options;
var map__50017__$1 = (((((!((map__50017 == null))))?(((((map__50017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50017):map__50017);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50017__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__50017,map__50017__$1,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__50017,map__50017__$1,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50017__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__50017,map__50017__$1,transform_query,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__50017,map__50017__$1,transform_query,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50017__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__50017,map__50017__$1,transform_query,transform_response,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__50017,map__50017__$1,transform_query,transform_response,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50017__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__50017,map__50017__$1,transform_query,transform_response,transform_error,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__50017,map__50017__$1,transform_query,transform_response,transform_error,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50017__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50017__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__50087 = env;
var G__50088 = edn_SINGLEQUOTE_;
var G__50089 = ((function (G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__50104 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49861_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49861_SHARP_) : transform_response.call(null,env,p1__49861_SHARP_));
});})(G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__50104) : ok_handler.call(null,G__50104));
});})(G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__50119 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49863_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49863_SHARP_) : transform_error.call(null,env,p1__49863_SHARP_));
});})(G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__50119) : error_handler.call(null,G__50119));
});})(G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__50140 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__50140) : progress_handler.call(null,G__50140));
});})(G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__50087,G__50088,edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__50087,G__50088,G__50089) : transform_transmission.call(null,G__50087,G__50088,G__50089));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__50161 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49864_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49864_SHARP_) : transform_response.call(null,env,p1__49864_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__50161) : ok_handler.call(null,G__50161));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__50167 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49865_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49865_SHARP_) : transform_error.call(null,env,p1__49865_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__50167) : error_handler.call(null,G__50167));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__50168 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__50168) : progress_handler.call(null,G__50168));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__50017,map__50017__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49994,map__49994__$1,edn,ok_handler,error_handler,progress_handler))
], null));
}
} else {
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(null) : ok_handler.call(null,null));
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$abort$arity$2 = (function (this$,abort_id){
var self__ = this;
var this$__$1 = this;
return fulcro.client.network.abort(self__.network,abort_id);
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"network","network",-604431072,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.cljs$lang$type = true;

com.wsscode.pathom.fulcro.network.TransformRemoteI.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom.fulcro.network/TransformRemoteI",null,(1),null));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"com.wsscode.pathom.fulcro.network/TransformRemoteI");
});

/**
 * Positional factory function for com.wsscode.pathom.fulcro.network/TransformRemoteI.
 */
com.wsscode.pathom.fulcro.network.__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$__GT_TransformRemoteI(network,options){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(network,options,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom.fulcro.network/TransformRemoteI, taking a map of keywords to field values.
 */
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__49876){
var extmap__4424__auto__ = (function (){var G__50185 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49876,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__49876)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50185);
} else {
return G__50185;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__49876),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49876),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Given a network, provides some hooks to modify the network behavior.
 * 
 *   ::transform-query [env edn] -> edn
 *   Receives the EDN query so you can modify before it's transmited. If you return nil the send will be cancelled, and the
 *   network ok handler will be triggered with nil.
 * 
 *   ::transform-response [env response] -> response
 *   ::transform-error [env error] -> error
 *   ::transform-progress [env progress] -> progress (for FulcroRemoteI only)
 * 
 *   ::transform-transmission [env transmit]
 *   Transmit is a function with zero arguments, this can be used to wrap some operation around the data
 *   transmission entirely, but you can't affect the parameters from here.
 * 
 *   env is a map with the keys `::request-id` and `::app`
 * 
 *   `::request-id` is a uuid generated on the request, it will
 *   be the same during all transform hooks, you can use this to correlate the hook steps.
 * 
 *   The `::app` is an atom with the app, to have this you must initialize it during the Fulcro :started-callback using
 *   the following code:
 * 
 *   (fn [app] (pathom.network/transform-remote-init remote app))
 * 
 *   This helper is compatible with both fulcro network work interfaces FulcroNetwork and FulcroRemoteI.
 */
com.wsscode.pathom.fulcro.network.transform_remote = (function com$wsscode$pathom$fulcro$network$transform_remote(remote,options){
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
if((((!((remote == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote.fulcro$client$network$FulcroRemoteI$))))?true:false):false)){
return com.wsscode.pathom.fulcro.network.__GT_TransformRemoteI(remote,options__$1);
} else {
if((((!((remote == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === remote.fulcro$client$network$FulcroNetwork$))))?true:false):false)){
return com.wsscode.pathom.fulcro.network.__GT_TransformNetwork(remote,options__$1);
} else {
return null;
}
}
});
/**
 * Set the transform remote app reference, this is needed if your remote needs access to the app.
 */
com.wsscode.pathom.fulcro.network.transform_remote_init = (function com$wsscode$pathom$fulcro$network$transform_remote_init(network,app){
var G__50209 = network;
var G__50209__$1 = (((G__50209 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__50209));
var G__50209__$2 = (((G__50209__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__50209__$1));
if((G__50209__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__50209__$2,app);
}
});
/**
 * Wrap a Remote so it always ask for the pathom profile.
 */
com.wsscode.pathom.fulcro.network.trace_remote = (function com$wsscode$pathom$fulcro$network$trace_remote(network){
return com.wsscode.pathom.fulcro.network.transform_remote(network,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),(function (_,query){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword("com.wsscode.pathom","trace","com.wsscode.pathom/trace",1253203063));
})], null));
});
/**
 * Wrap a Remote so it always ask for the pathom profile.
 */
com.wsscode.pathom.fulcro.network.profile_remote = (function com$wsscode$pathom$fulcro$network$profile_remote(network){
return com.wsscode.pathom.fulcro.network.transform_remote(network,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),(function (_,query){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583));
})], null));
});
com.wsscode.pathom.fulcro.network.graphql_response_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword,com.wsscode.pathom.graphql.camel_case,cljs.core.name);
com.wsscode.pathom.fulcro.network.graphql_response_parser = com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.core.map_reader_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),com.wsscode.pathom.fulcro.network.graphql_response_key], null))], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),(function (env,k,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),(com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.fulcro.network.graphql_response_key.call(null,k)));
var id_param = com.wsscode.pathom.graphql.find_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null)),fulcro.client.primitives.tempid_QMARK_);
var G__50238 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50238,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,(function (){var G__50244 = cljs.core.key(id_param);
return (com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1(G__50244) : com.wsscode.pathom.fulcro.network.graphql_response_key.call(null,G__50244));
})())]));
} else {
return G__50238;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__50255 = arguments.length;
switch (G__50255) {
case 1:
return com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$1 = (function (url){
return com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__50263){
var map__50268 = p__50263;
var map__50268__$1 = (((((!((map__50268 == null))))?(((((map__50268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50268):map__50268);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50268__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__50268,map__50268__$1,update_http_request){
return (function (this$,edn,ok,error){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__50268,map__50268__$1,update_http_request){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__50268,map__50268__$1,update_http_request){
return (function (state_50361){
var state_val_50362 = (state_50361[(1)]);
if((state_val_50362 === (7))){
var inst_50310 = (state_50361[(7)]);
var state_50361__$1 = state_50361;
var statearr_50369_51524 = state_50361__$1;
(statearr_50369_51524[(2)] = inst_50310);

(statearr_50369_51524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (1))){
var state_50361__$1 = state_50361;
var statearr_50371_51531 = state_50361__$1;
(statearr_50371_51531[(2)] = null);

(statearr_50371_51531[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (4))){
var inst_50296 = (state_50361[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50361,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50290 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_50292 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_50293 = (new cljs.core.PersistentArrayMap(null,1,inst_50292,null));
var inst_50294 = (new cljs.core.PersistentHashSet(null,inst_50293,null));
var inst_50295 = com.wsscode.pathom.core.elide_ast_nodes(inst_50290,inst_50294);
var inst_50296__$1 = com.wsscode.pathom.core.ast__GT_query(inst_50295);
var inst_50297 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_50298 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_50300 = [inst_50298];
var inst_50301 = cljs.core.PersistentHashMap.fromArrays(inst_50297,inst_50300);
var inst_50302 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_50296__$1,inst_50301);
var inst_50304 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_50306 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_50307 = [inst_50302];
var inst_50308 = cljs.core.PersistentHashMap.fromArrays(inst_50306,inst_50307);
var inst_50309 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_50308];
var inst_50310 = cljs.core.PersistentHashMap.fromArrays(inst_50304,inst_50309);
var state_50361__$1 = (function (){var statearr_50380 = state_50361;
(statearr_50380[(7)] = inst_50310);

(statearr_50380[(8)] = inst_50296__$1);

return statearr_50380;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_50388_51599 = state_50361__$1;
(statearr_50388_51599[(1)] = (6));

} else {
var statearr_50390_51610 = state_50361__$1;
(statearr_50390_51610[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (15))){
var inst_50320 = (state_50361[(9)]);
var inst_50342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50320);
var state_50361__$1 = state_50361;
var statearr_50393_51615 = state_50361__$1;
(statearr_50393_51615[(2)] = inst_50342);

(statearr_50393_51615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (13))){
var state_50361__$1 = state_50361;
var statearr_50396_51617 = state_50361__$1;
(statearr_50396_51617[(2)] = false);

(statearr_50396_51617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (6))){
var inst_50310 = (state_50361[(7)]);
var inst_50312 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_50310) : update_http_request.call(null,inst_50310));
var state_50361__$1 = state_50361;
var statearr_50402_51619 = state_50361__$1;
(statearr_50402_51619[(2)] = inst_50312);

(statearr_50402_51619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (17))){
var inst_50296 = (state_50361[(8)]);
var inst_50345 = (state_50361[(2)]);
var inst_50346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50345,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_50347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50345,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_50348 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_50349 = [inst_50346];
var inst_50350 = cljs.core.PersistentHashMap.fromArrays(inst_50348,inst_50349);
var inst_50351 = (com.wsscode.pathom.fulcro.network.graphql_response_parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.fulcro.network.graphql_response_parser.cljs$core$IFn$_invoke$arity$2(inst_50350,inst_50296) : com.wsscode.pathom.fulcro.network.graphql_response_parser.call(null,inst_50350,inst_50296));
var inst_50352 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_50351) : ok.call(null,inst_50351));
var state_50361__$1 = (function (){var statearr_50407 = state_50361;
(statearr_50407[(10)] = inst_50347);

return statearr_50407;
})();
var statearr_50408_51622 = state_50361__$1;
(statearr_50408_51622[(2)] = inst_50352);


cljs.core.async.impl.ioc_helpers.process_exception(state_50361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (3))){
var inst_50277 = (state_50361[(2)]);
var inst_50278 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_50277) : error.call(null,inst_50277));
var state_50361__$1 = state_50361;
var statearr_50410_51625 = state_50361__$1;
(statearr_50410_51625[(2)] = inst_50278);


cljs.core.async.impl.ioc_helpers.process_exception(state_50361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (12))){
var state_50361__$1 = state_50361;
var statearr_50415_51626 = state_50361__$1;
(statearr_50415_51626[(2)] = true);

(statearr_50415_51626[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (2))){
var inst_50355 = (state_50361[(2)]);
var state_50361__$1 = state_50361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50361__$1,inst_50355);
} else {
if((state_val_50362 === (11))){
var inst_50340 = (state_50361[(2)]);
var state_50361__$1 = state_50361;
if(cljs.core.truth_(inst_50340)){
var statearr_50423_51629 = state_50361__$1;
(statearr_50423_51629[(1)] = (15));

} else {
var statearr_50425_51630 = state_50361__$1;
(statearr_50425_51630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (9))){
var inst_50320 = (state_50361[(9)]);
var inst_50329 = inst_50320.cljs$lang$protocol_mask$partition0$;
var inst_50330 = (inst_50329 & (64));
var inst_50331 = inst_50320.cljs$core$ISeq$;
var inst_50332 = (cljs.core.PROTOCOL_SENTINEL === inst_50331);
var inst_50333 = ((inst_50330) || (inst_50332));
var state_50361__$1 = state_50361;
if(cljs.core.truth_(inst_50333)){
var statearr_50427_51631 = state_50361__$1;
(statearr_50427_51631[(1)] = (12));

} else {
var statearr_50431_51632 = state_50361__$1;
(statearr_50431_51632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (5))){
var inst_50320 = (state_50361[(9)]);
var inst_50318 = (state_50361[(2)]);
var inst_50319 = com.wsscode.common.async_cljs.throw_err(inst_50318);
var inst_50320__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_50319);
var inst_50323 = (inst_50320__$1 == null);
var inst_50324 = cljs.core.not(inst_50323);
var state_50361__$1 = (function (){var statearr_50437 = state_50361;
(statearr_50437[(9)] = inst_50320__$1);

return statearr_50437;
})();
if(inst_50324){
var statearr_50443_51637 = state_50361__$1;
(statearr_50443_51637[(1)] = (9));

} else {
var statearr_50446_51639 = state_50361__$1;
(statearr_50446_51639[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (14))){
var inst_50337 = (state_50361[(2)]);
var state_50361__$1 = state_50361;
var statearr_50448_51645 = state_50361__$1;
(statearr_50448_51645[(2)] = inst_50337);

(statearr_50448_51645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (16))){
var inst_50320 = (state_50361[(9)]);
var state_50361__$1 = state_50361;
var statearr_50452_51660 = state_50361__$1;
(statearr_50452_51660[(2)] = inst_50320);

(statearr_50452_51660[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (10))){
var state_50361__$1 = state_50361;
var statearr_50457_51667 = state_50361__$1;
(statearr_50457_51667[(2)] = false);

(statearr_50457_51667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50362 === (8))){
var inst_50315 = (state_50361[(2)]);
var inst_50316 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_50315);
var state_50361__$1 = state_50361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50361__$1,(5),inst_50316);
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
});})(c__39003__auto__,map__50268,map__50268__$1,update_http_request))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__50268,map__50268__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0 = (function (){
var statearr_50464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50464[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38930__auto__);

(statearr_50464[(1)] = (1));

return statearr_50464;
});
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1 = (function (state_50361){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_50361);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e50469){if((e50469 instanceof Object)){
var ex__38933__auto__ = e50469;
var statearr_50470_51683 = state_50361;
(statearr_50470_51683[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50469;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51684 = state_50361;
state_50361 = G__51684;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__ = function(state_50361){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1.call(this,state_50361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__50268,map__50268__$1,update_http_request))
})();
var state__39005__auto__ = (function (){var statearr_50477 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_50477[(6)] = c__39003__auto__);

return statearr_50477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__50268,map__50268__$1,update_http_request))
);

return c__39003__auto__;
});})(map__50268,map__50268__$1,update_http_request))
);
});

com.wsscode.pathom.fulcro.network.graphql_network.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.fulcro.network.graphql_response_parser2 = (function (){var simple_keyword = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name);
return com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.core.map_reader_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),simple_keyword], null))], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),((function (simple_keyword){
return (function (env,k,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (simple_keyword){
return (function (){
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),(simple_keyword.cljs$core$IFn$_invoke$arity$1 ? simple_keyword.cljs$core$IFn$_invoke$arity$1(k) : simple_keyword.call(null,k)));
var id_param = com.wsscode.pathom.graphql.find_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null)),fulcro.client.primitives.tempid_QMARK_);
console.log("VOLTA",id_param,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),response);

var G__50497 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50497,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,(function (){var G__50498 = cljs.core.key(id_param);
return (simple_keyword.cljs$core$IFn$_invoke$arity$1 ? simple_keyword.cljs$core$IFn$_invoke$arity$1(G__50498) : simple_keyword.call(null,G__50498));
})())]));
} else {
return G__50497;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__50510 = arguments.length;
switch (G__50510) {
case 1:
return com.wsscode.pathom.fulcro.network.graphql_network2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.fulcro.network.graphql_network2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.fulcro.network.graphql_network2.cljs$core$IFn$_invoke$arity$1 = (function (url){
return com.wsscode.pathom.fulcro.network.graphql_network2.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
});

com.wsscode.pathom.fulcro.network.graphql_network2.cljs$core$IFn$_invoke$arity$2 = (function (url,config){
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1((function (this$,edn,ok,error){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__){
return (function (state_50585){
var state_val_50586 = (state_50585[(1)]);
if((state_val_50586 === (7))){
var state_50585__$1 = state_50585;
var statearr_50594_51700 = state_50585__$1;
(statearr_50594_51700[(2)] = false);

(statearr_50594_51700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (1))){
var state_50585__$1 = state_50585;
var statearr_50597_51701 = state_50585__$1;
(statearr_50597_51701[(2)] = null);

(statearr_50597_51701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (4))){
var inst_50529 = (state_50585[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50585,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50524 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_50525 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_50526 = (new cljs.core.PersistentArrayMap(null,1,inst_50525,null));
var inst_50527 = (new cljs.core.PersistentHashSet(null,inst_50526,null));
var inst_50528 = com.wsscode.pathom.core.elide_ast_nodes(inst_50524,inst_50527);
var inst_50529__$1 = com.wsscode.pathom.core.ast__GT_query(inst_50528);
var inst_50530 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_50531 = [fulcro.client.primitives.tempid_QMARK_];
var inst_50532 = cljs.core.PersistentHashMap.fromArrays(inst_50530,inst_50531);
var inst_50533 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50532,config], 0));
var inst_50534 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_50529__$1,inst_50533);
var inst_50535 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_50536 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_50537 = [inst_50534];
var inst_50538 = cljs.core.PersistentHashMap.fromArrays(inst_50536,inst_50537);
var inst_50539 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_50538];
var inst_50540 = cljs.core.PersistentHashMap.fromArrays(inst_50535,inst_50539);
var inst_50541 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_50540);
var state_50585__$1 = (function (){var statearr_50612 = state_50585;
(statearr_50612[(7)] = inst_50529__$1);

return statearr_50612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50585__$1,(5),inst_50541);
} else {
if((state_val_50586 === (13))){
var inst_50545 = (state_50585[(8)]);
var state_50585__$1 = state_50585;
var statearr_50614_51709 = state_50585__$1;
(statearr_50614_51709[(2)] = inst_50545);

(statearr_50614_51709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (6))){
var inst_50545 = (state_50585[(8)]);
var inst_50557 = inst_50545.cljs$lang$protocol_mask$partition0$;
var inst_50558 = (inst_50557 & (64));
var inst_50559 = inst_50545.cljs$core$ISeq$;
var inst_50560 = (cljs.core.PROTOCOL_SENTINEL === inst_50559);
var inst_50561 = ((inst_50558) || (inst_50560));
var state_50585__$1 = state_50585;
if(cljs.core.truth_(inst_50561)){
var statearr_50618_51711 = state_50585__$1;
(statearr_50618_51711[(1)] = (9));

} else {
var statearr_50619_51712 = state_50585__$1;
(statearr_50619_51712[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (3))){
var inst_50515 = (state_50585[(2)]);
var inst_50516 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_50515) : error.call(null,inst_50515));
var state_50585__$1 = state_50585;
var statearr_50622_51714 = state_50585__$1;
(statearr_50622_51714[(2)] = inst_50516);


cljs.core.async.impl.ioc_helpers.process_exception(state_50585__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (12))){
var inst_50545 = (state_50585[(8)]);
var inst_50570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50545);
var state_50585__$1 = state_50585;
var statearr_50623_51715 = state_50585__$1;
(statearr_50623_51715[(2)] = inst_50570);

(statearr_50623_51715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (2))){
var inst_50582 = (state_50585[(2)]);
var state_50585__$1 = state_50585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50585__$1,inst_50582);
} else {
if((state_val_50586 === (11))){
var inst_50565 = (state_50585[(2)]);
var state_50585__$1 = state_50585;
var statearr_50627_51717 = state_50585__$1;
(statearr_50627_51717[(2)] = inst_50565);

(statearr_50627_51717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (9))){
var state_50585__$1 = state_50585;
var statearr_50629_51719 = state_50585__$1;
(statearr_50629_51719[(2)] = true);

(statearr_50629_51719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (5))){
var inst_50545 = (state_50585[(8)]);
var inst_50543 = (state_50585[(2)]);
var inst_50544 = com.wsscode.common.async_cljs.throw_err(inst_50543);
var inst_50545__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_50544);
var inst_50548 = (inst_50545__$1 == null);
var inst_50549 = cljs.core.not(inst_50548);
var state_50585__$1 = (function (){var statearr_50633 = state_50585;
(statearr_50633[(8)] = inst_50545__$1);

return statearr_50633;
})();
if(inst_50549){
var statearr_50634_51721 = state_50585__$1;
(statearr_50634_51721[(1)] = (6));

} else {
var statearr_50635_51722 = state_50585__$1;
(statearr_50635_51722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (14))){
var inst_50529 = (state_50585[(7)]);
var inst_50573 = (state_50585[(2)]);
var inst_50574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50573,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_50575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50573,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_50576 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_50577 = [inst_50574];
var inst_50578 = cljs.core.PersistentHashMap.fromArrays(inst_50576,inst_50577);
var inst_50579 = (com.wsscode.pathom.fulcro.network.graphql_response_parser2.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.fulcro.network.graphql_response_parser2.cljs$core$IFn$_invoke$arity$2(inst_50578,inst_50529) : com.wsscode.pathom.fulcro.network.graphql_response_parser2.call(null,inst_50578,inst_50529));
var inst_50580 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_50579) : ok.call(null,inst_50579));
var state_50585__$1 = (function (){var statearr_50641 = state_50585;
(statearr_50641[(9)] = inst_50575);

return statearr_50641;
})();
var statearr_50648_51727 = state_50585__$1;
(statearr_50648_51727[(2)] = inst_50580);


cljs.core.async.impl.ioc_helpers.process_exception(state_50585__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (10))){
var state_50585__$1 = state_50585;
var statearr_50649_51729 = state_50585__$1;
(statearr_50649_51729[(2)] = false);

(statearr_50649_51729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50586 === (8))){
var inst_50568 = (state_50585[(2)]);
var state_50585__$1 = state_50585;
if(cljs.core.truth_(inst_50568)){
var statearr_50655_51730 = state_50585__$1;
(statearr_50655_51730[(1)] = (12));

} else {
var statearr_50656_51732 = state_50585__$1;
(statearr_50656_51732[(1)] = (13));

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
});})(c__39003__auto__))
;
return ((function (switch__38929__auto__,c__39003__auto__){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0 = (function (){
var statearr_50659 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50659[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38930__auto__);

(statearr_50659[(1)] = (1));

return statearr_50659;
});
var com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1 = (function (state_50585){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_50585);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e50660){if((e50660 instanceof Object)){
var ex__38933__auto__ = e50660;
var statearr_50665_51735 = state_50585;
(statearr_50665_51735[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51737 = state_50585;
state_50585 = G__51737;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__ = function(state_50585){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1.call(this,state_50585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38930__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38930__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__))
})();
var state__39005__auto__ = (function (){var statearr_50672 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_50672[(6)] = c__39003__auto__);

return statearr_50672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__))
);

return c__39003__auto__;
}));
});

com.wsscode.pathom.fulcro.network.graphql_network2.cljs$lang$maxFixedArity = 2;

/**
 * Debounce calls, all the call inputs will be stored and the final call will receive a vector with every
 *   collected input during the debounce.
 */
com.wsscode.pathom.fulcro.network.debounce = (function com$wsscode$pathom$fulcro$network$debounce(f,interval){
var timer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var calls = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return ((function (timer,calls){
return (function() { 
var G__51741__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__50686_51743 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50686_51743) : f.call(null,G__50686_51743));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__51741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51745__i = 0, G__51745__a = new Array(arguments.length -  0);
while (G__51745__i < G__51745__a.length) {G__51745__a[G__51745__i] = arguments[G__51745__i + 0]; ++G__51745__i;}
  args = new cljs.core.IndexedSeq(G__51745__a,0,null);
} 
return G__51741__delegate.call(this,args);};
G__51741.cljs$lang$maxFixedArity = 0;
G__51741.cljs$lang$applyTo = (function (arglist__51747){
var args = cljs.core.seq(arglist__51747);
return G__51741__delegate(args);
});
G__51741.cljs$core$IFn$_invoke$arity$variadic = G__51741__delegate;
return G__51741;
})()
;
;})(timer,calls))
});
/**
 * Given a list of requests [query ok-callback error-callback], reduces the number of requests to the minimum by merging
 *   the requests. Not all requests are mergeable, so this still might output multiple requests.
 */
com.wsscode.pathom.fulcro.network.group_mergeable_requests = (function com$wsscode$pathom$fulcro$network$group_mergeable_requests(requests){
if(cljs.core.seq(requests)){
var vec__50724 = requests;
var seq__50725 = cljs.core.seq(vec__50724);
var first__50726 = cljs.core.first(seq__50725);
var seq__50725__$1 = cljs.core.next(seq__50725);
var vec__50727 = first__50726;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50727,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50727,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50727,(2),null);
var tail = seq__50725__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__50762 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50762,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50762,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50762,(2),null);
var req = vec__50762;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__51752 = cljs.core.next(left);
var G__51753 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__51754 = current;
var G__51755 = next_cycle;
left = G__51752;
groups__$1 = G__51753;
current = G__51754;
next_cycle = G__51755;
continue;
} else {
var G__51760 = cljs.core.next(left);
var G__51761 = groups__$1;
var G__51762 = current;
var G__51763 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__51760;
groups__$1 = G__51761;
current = G__51762;
next_cycle = G__51763;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__50773 = next_cycle;
var seq__50774 = cljs.core.seq(vec__50773);
var first__50775 = cljs.core.first(seq__50774);
var seq__50774__$1 = cljs.core.next(seq__50774);
var vec__50776 = first__50775;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50776,(2),null);
var tail__$1 = seq__50774__$1;
var G__51766 = tail__$1;
var G__51767 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__51768 = (current + (1));
var G__51769 = cljs.core.PersistentVector.EMPTY;
left = G__51766;
groups__$1 = G__51767;
current = G__51768;
next_cycle = G__51769;
continue;
} else {
return groups__$1;
}
}
break;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Setup a debounce to batch network requests. The callback function f will be called with a list of requests to be made
 *   after merging as max as possible.
 */
com.wsscode.pathom.fulcro.network.batch_send = (function com$wsscode$pathom$fulcro$network$batch_send(f,delay){
return com.wsscode.pathom.fulcro.network.debounce((function (p1__50786_SHARP_){
var G__50790 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__50786_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50790) : f.call(null,G__50790));
}),delay);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {fulcro.client.network.FulcroNetwork}
 * @implements {cljs.core.IKVReduce}
 * @implements {fulcro.client.network.NetworkBehavior}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.wsscode.pathom.fulcro.network.BatchNetwork = (function (send_fn,__meta,__extmap,__hash){
this.send_fn = send_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50795,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50821 = k50795;
var G__50821__$1 = (((G__50821 instanceof cljs.core.Keyword))?G__50821.fqn:null);
switch (G__50821__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50795,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50831){
var vec__50832 = p__50831;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#com.wsscode.pathom.fulcro.network.BatchNetwork{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50794){
var self__ = this;
var G__50794__$1 = this;
return (new cljs.core.RecordIter((0),G__50794__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50882 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (176772946 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50882(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50797,other50798){
var self__ = this;
var this50797__$1 = this;
return (((!((other50798 == null)))) && ((this50797__$1.constructor === other50798.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50797__$1.send_fn,other50798.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50797__$1.__extmap,other50798.__extmap)));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
return (self__.send_fn.cljs$core$IFn$_invoke$arity$3 ? self__.send_fn.cljs$core$IFn$_invoke$arity$3(edn,ok,error) : self__.send_fn.call(null,edn,ok,error));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.fulcro$client$network$FulcroNetwork$start$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50794){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50908 = cljs.core.keyword_identical_QMARK_;
var expr__50909 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50913 = new cljs.core.Keyword(null,"send-fn","send-fn",351002041);
var G__50914 = expr__50909;
return (pred__50908.cljs$core$IFn$_invoke$arity$2 ? pred__50908.cljs$core$IFn$_invoke$arity$2(G__50913,G__50914) : pred__50908.call(null,G__50913,G__50914));
})())){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__50794,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50794),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50794){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__50794,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"send-fn","send-fn",1991533568,null)], null);
});

com.wsscode.pathom.fulcro.network.BatchNetwork.cljs$lang$type = true;

com.wsscode.pathom.fulcro.network.BatchNetwork.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"com.wsscode.pathom.fulcro.network/BatchNetwork",null,(1),null));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"com.wsscode.pathom.fulcro.network/BatchNetwork");
});

/**
 * Positional factory function for com.wsscode.pathom.fulcro.network/BatchNetwork.
 */
com.wsscode.pathom.fulcro.network.__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$__GT_BatchNetwork(send_fn){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(send_fn,null,null,null));
});

/**
 * Factory function for com.wsscode.pathom.fulcro.network/BatchNetwork, taking a map of keywords to field values.
 */
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__50802){
var extmap__4424__auto__ = (function (){var G__50926 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50802,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__50802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50926);
} else {
return G__50926;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__50802),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__50932 = arguments.length;
switch (G__50932) {
case 1:
return com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$1 = (function (network){
return com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$2(network,(10));
});

com.wsscode.pathom.fulcro.network.batch_network.cljs$core$IFn$_invoke$arity$2 = (function (network,delay){
var send_fn = com.wsscode.pathom.fulcro.network.batch_send((function (reqs){
var seq__50940 = cljs.core.seq(reqs);
var chunk__50941 = null;
var count__50942 = (0);
var i__50943 = (0);
while(true){
if((i__50943 < count__50942)){
var map__51002 = chunk__50941.cljs$core$IIndexed$_nth$arity$2(null,i__50943);
var map__51002__$1 = (((((!((map__51002 == null))))?(((((map__51002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51002):map__51002);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51002__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51002__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51002__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__50940,chunk__50941,count__50942,i__50943,map__51002,map__51002__$1,query,ok,err){
return (function (p1__50929_SHARP_){
var seq__51010 = cljs.core.seq(ok);
var chunk__51011 = null;
var count__51012 = (0);
var i__51013 = (0);
while(true){
if((i__51013 < count__51012)){
var f = chunk__51011.cljs$core$IIndexed$_nth$arity$2(null,i__51013);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50929_SHARP_) : f.call(null,p1__50929_SHARP_));


var G__51804 = seq__51010;
var G__51805 = chunk__51011;
var G__51806 = count__51012;
var G__51807 = (i__51013 + (1));
seq__51010 = G__51804;
chunk__51011 = G__51805;
count__51012 = G__51806;
i__51013 = G__51807;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51010);
if(temp__5720__auto__){
var seq__51010__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51010__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51010__$1);
var G__51809 = cljs.core.chunk_rest(seq__51010__$1);
var G__51810 = c__4550__auto__;
var G__51811 = cljs.core.count(c__4550__auto__);
var G__51812 = (0);
seq__51010 = G__51809;
chunk__51011 = G__51810;
count__51012 = G__51811;
i__51013 = G__51812;
continue;
} else {
var f = cljs.core.first(seq__51010__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50929_SHARP_) : f.call(null,p1__50929_SHARP_));


var G__51814 = cljs.core.next(seq__51010__$1);
var G__51815 = null;
var G__51816 = (0);
var G__51817 = (0);
seq__51010 = G__51814;
chunk__51011 = G__51815;
count__51012 = G__51816;
i__51013 = G__51817;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50940,chunk__50941,count__50942,i__50943,map__51002,map__51002__$1,query,ok,err))
,((function (seq__50940,chunk__50941,count__50942,i__50943,map__51002,map__51002__$1,query,ok,err){
return (function (p1__50930_SHARP_){
var seq__51023 = cljs.core.seq(err);
var chunk__51024 = null;
var count__51025 = (0);
var i__51026 = (0);
while(true){
if((i__51026 < count__51025)){
var f = chunk__51024.cljs$core$IIndexed$_nth$arity$2(null,i__51026);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50930_SHARP_) : f.call(null,p1__50930_SHARP_));


var G__51819 = seq__51023;
var G__51820 = chunk__51024;
var G__51821 = count__51025;
var G__51822 = (i__51026 + (1));
seq__51023 = G__51819;
chunk__51024 = G__51820;
count__51025 = G__51821;
i__51026 = G__51822;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__51023);
if(temp__5720__auto__){
var seq__51023__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51023__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51023__$1);
var G__51825 = cljs.core.chunk_rest(seq__51023__$1);
var G__51826 = c__4550__auto__;
var G__51827 = cljs.core.count(c__4550__auto__);
var G__51828 = (0);
seq__51023 = G__51825;
chunk__51024 = G__51826;
count__51025 = G__51827;
i__51026 = G__51828;
continue;
} else {
var f = cljs.core.first(seq__51023__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50930_SHARP_) : f.call(null,p1__50930_SHARP_));


var G__51830 = cljs.core.next(seq__51023__$1);
var G__51831 = null;
var G__51832 = (0);
var G__51833 = (0);
seq__51023 = G__51830;
chunk__51024 = G__51831;
count__51025 = G__51832;
i__51026 = G__51833;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50940,chunk__50941,count__50942,i__50943,map__51002,map__51002__$1,query,ok,err))
);


var G__51835 = seq__50940;
var G__51836 = chunk__50941;
var G__51837 = count__50942;
var G__51838 = (i__50943 + (1));
seq__50940 = G__51835;
chunk__50941 = G__51836;
count__50942 = G__51837;
i__50943 = G__51838;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50940);
if(temp__5720__auto__){
var seq__50940__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50940__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50940__$1);
var G__51839 = cljs.core.chunk_rest(seq__50940__$1);
var G__51840 = c__4550__auto__;
var G__51841 = cljs.core.count(c__4550__auto__);
var G__51842 = (0);
seq__50940 = G__51839;
chunk__50941 = G__51840;
count__50942 = G__51841;
i__50943 = G__51842;
continue;
} else {
var map__51036 = cljs.core.first(seq__50940__$1);
var map__51036__$1 = (((((!((map__51036 == null))))?(((((map__51036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51036):map__51036);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51036__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__50940,chunk__50941,count__50942,i__50943,map__51036,map__51036__$1,query,ok,err,seq__50940__$1,temp__5720__auto__){
return (function (p1__50929_SHARP_){
var seq__51038 = cljs.core.seq(ok);
var chunk__51039 = null;
var count__51040 = (0);
var i__51041 = (0);
while(true){
if((i__51041 < count__51040)){
var f = chunk__51039.cljs$core$IIndexed$_nth$arity$2(null,i__51041);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50929_SHARP_) : f.call(null,p1__50929_SHARP_));


var G__51845 = seq__51038;
var G__51846 = chunk__51039;
var G__51847 = count__51040;
var G__51848 = (i__51041 + (1));
seq__51038 = G__51845;
chunk__51039 = G__51846;
count__51040 = G__51847;
i__51041 = G__51848;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__51038);
if(temp__5720__auto____$1){
var seq__51038__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51038__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51038__$1);
var G__51851 = cljs.core.chunk_rest(seq__51038__$1);
var G__51852 = c__4550__auto__;
var G__51853 = cljs.core.count(c__4550__auto__);
var G__51854 = (0);
seq__51038 = G__51851;
chunk__51039 = G__51852;
count__51040 = G__51853;
i__51041 = G__51854;
continue;
} else {
var f = cljs.core.first(seq__51038__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50929_SHARP_) : f.call(null,p1__50929_SHARP_));


var G__51856 = cljs.core.next(seq__51038__$1);
var G__51857 = null;
var G__51858 = (0);
var G__51859 = (0);
seq__51038 = G__51856;
chunk__51039 = G__51857;
count__51040 = G__51858;
i__51041 = G__51859;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50940,chunk__50941,count__50942,i__50943,map__51036,map__51036__$1,query,ok,err,seq__50940__$1,temp__5720__auto__))
,((function (seq__50940,chunk__50941,count__50942,i__50943,map__51036,map__51036__$1,query,ok,err,seq__50940__$1,temp__5720__auto__){
return (function (p1__50930_SHARP_){
var seq__51053 = cljs.core.seq(err);
var chunk__51054 = null;
var count__51055 = (0);
var i__51056 = (0);
while(true){
if((i__51056 < count__51055)){
var f = chunk__51054.cljs$core$IIndexed$_nth$arity$2(null,i__51056);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50930_SHARP_) : f.call(null,p1__50930_SHARP_));


var G__51863 = seq__51053;
var G__51864 = chunk__51054;
var G__51865 = count__51055;
var G__51866 = (i__51056 + (1));
seq__51053 = G__51863;
chunk__51054 = G__51864;
count__51055 = G__51865;
i__51056 = G__51866;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__51053);
if(temp__5720__auto____$1){
var seq__51053__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51053__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51053__$1);
var G__51868 = cljs.core.chunk_rest(seq__51053__$1);
var G__51869 = c__4550__auto__;
var G__51870 = cljs.core.count(c__4550__auto__);
var G__51871 = (0);
seq__51053 = G__51868;
chunk__51054 = G__51869;
count__51055 = G__51870;
i__51056 = G__51871;
continue;
} else {
var f = cljs.core.first(seq__51053__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50930_SHARP_) : f.call(null,p1__50930_SHARP_));


var G__51874 = cljs.core.next(seq__51053__$1);
var G__51875 = null;
var G__51876 = (0);
var G__51877 = (0);
seq__51053 = G__51874;
chunk__51054 = G__51875;
count__51055 = G__51876;
i__51056 = G__51877;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50940,chunk__50941,count__50942,i__50943,map__51036,map__51036__$1,query,ok,err,seq__50940__$1,temp__5720__auto__))
);


var G__51878 = cljs.core.next(seq__50940__$1);
var G__51879 = null;
var G__51880 = (0);
var G__51881 = (0);
seq__50940 = G__51878;
chunk__50941 = G__51879;
count__50942 = G__51880;
i__50943 = G__51881;
continue;
}
} else {
return null;
}
}
break;
}
}),delay);
return com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn], null));
});

com.wsscode.pathom.fulcro.network.batch_network.cljs$lang$maxFixedArity = 2;

/**
 * Decide the union branch based on the Fulcro union component ident dispatch. This is
 *   useful if you are using a parser in the Clojurescript side living in the same process
 *   as the client app, this makes the union picking automatic on those cases.
 */
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__51061){
var map__51064 = p__51061;
var map__51064__$1 = (((((!((map__51064 == null))))?(((((map__51064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51064):map__51064);
var env = map__51064__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51064__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__51069 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51069,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51069,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
