goog.provide('com.wsscode.pathom.fulcro.network');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.pathom.core');
goog.require('com.wsscode.pathom.diplomat.http');
goog.require('com.wsscode.pathom.diplomat.http.fetch');
goog.require('com.wsscode.pathom.graphql');
goog.require('fulcro.client.network');
goog.require('fulcro.client.primitives');

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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k55783,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__55791 = k55783;
var G__55791__$1 = (((G__55791 instanceof cljs.core.Keyword))?G__55791.fqn:null);
switch (G__55791__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55783,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__55793){
var vec__55794 = p__55793;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55794,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55794,(1),null);
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55782){
var self__ = this;
var G__55782__$1 = this;
return (new cljs.core.RecordIter((0),G__55782__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-654270555 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55784,other55785){
var self__ = this;
var this55784__$1 = this;
return (((!((other55785 == null)))) && ((this55784__$1.constructor === other55785.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55784__$1.parser,other55785.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55784__$1.__extmap,other55785.__extmap)));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__55782){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__55803 = cljs.core.keyword_identical_QMARK_;
var expr__55804 = k__4393__auto__;
if(cljs.core.truth_((pred__55803.cljs$core$IFn$_invoke$arity$2 ? pred__55803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__55804) : pred__55803.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__55804)))){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__55782,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__55782),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__55782){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__55782,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__55813){
var self__ = this;
var map__55814 = p__55813;
var map__55814__$1 = (((((!((map__55814 == null))))?(((((map__55814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55814):map__55814);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55814__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,this$__$1,map__55814,map__55814__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,this$__$1,map__55814,map__55814__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_55856){
var state_val_55857 = (state_55856[(1)]);
if((state_val_55857 === (7))){
var inst_55825 = (state_55856[(7)]);
var inst_55849 = (state_55856[(2)]);
var inst_55850 = [edn,inst_55849];
var inst_55851 = cljs.core.PersistentHashMap.fromArrays(inst_55825,inst_55850);
var inst_55852 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_55851) : ok_handler.call(null,inst_55851));
var state_55856__$1 = state_55856;
var statearr_55870_56610 = state_55856__$1;
(statearr_55870_56610[(2)] = inst_55852);


cljs.core.async.impl.ioc_helpers.process_exception(state_55856__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (1))){
var state_55856__$1 = state_55856;
var statearr_55871_56616 = state_55856__$1;
(statearr_55871_56616[(2)] = null);

(statearr_55871_56616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (4))){
var inst_55827 = (state_55856[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_55856,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_55825 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_55826 = cljs.core.PersistentHashMap.EMPTY;
var inst_55827__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_55826,edn) : self__.parser.call(null,inst_55826,edn));
var inst_55828 = com.wsscode.async.async_cljs.chan_QMARK_(inst_55827__$1);
var state_55856__$1 = (function (){var statearr_55872 = state_55856;
(statearr_55872[(8)] = inst_55827__$1);

(statearr_55872[(7)] = inst_55825);

return statearr_55872;
})();
if(inst_55828){
var statearr_55873_56618 = state_55856__$1;
(statearr_55873_56618[(1)] = (5));

} else {
var statearr_55874_56619 = state_55856__$1;
(statearr_55874_56619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (15))){
var inst_55845 = (state_55856[(2)]);
var state_55856__$1 = state_55856;
var statearr_55875_56620 = state_55856__$1;
(statearr_55875_56620[(2)] = inst_55845);

(statearr_55875_56620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (13))){
var inst_55827 = (state_55856[(8)]);
var state_55856__$1 = state_55856;
var statearr_55877_56621 = state_55856__$1;
(statearr_55877_56621[(2)] = inst_55827);

(statearr_55877_56621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (6))){
var inst_55827 = (state_55856[(8)]);
var inst_55834 = com.wsscode.async.async_cljs.promise_QMARK_(inst_55827);
var state_55856__$1 = state_55856;
if(cljs.core.truth_(inst_55834)){
var statearr_55878_56622 = state_55856__$1;
(statearr_55878_56622[(1)] = (9));

} else {
var statearr_55879_56623 = state_55856__$1;
(statearr_55879_56623[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (3))){
var inst_55816 = (state_55856[(2)]);
var inst_55817 = console.error("PathomRemote error:",inst_55816);
var inst_55818 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_55819 = [inst_55816];
var inst_55820 = cljs.core.PersistentHashMap.fromArrays(inst_55818,inst_55819);
var inst_55821 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_55820) : error_handler.call(null,inst_55820));
var state_55856__$1 = (function (){var statearr_55881 = state_55856;
(statearr_55881[(9)] = inst_55817);

return statearr_55881;
})();
var statearr_55882_56624 = state_55856__$1;
(statearr_55882_56624[(2)] = inst_55821);


cljs.core.async.impl.ioc_helpers.process_exception(state_55856__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (12))){
var inst_55838 = (state_55856[(2)]);
var inst_55839 = com.wsscode.async.async_cljs.consumer_pair(inst_55838);
var state_55856__$1 = state_55856;
var statearr_55884_56631 = state_55856__$1;
(statearr_55884_56631[(2)] = inst_55839);

(statearr_55884_56631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (2))){
var inst_55854 = (state_55856[(2)]);
var state_55856__$1 = state_55856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55856__$1,inst_55854);
} else {
if((state_val_55857 === (11))){
var inst_55847 = (state_55856[(2)]);
var state_55856__$1 = state_55856;
var statearr_55885_56633 = state_55856__$1;
(statearr_55885_56633[(2)] = inst_55847);

(statearr_55885_56633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (9))){
var inst_55827 = (state_55856[(8)]);
var inst_55836 = com.wsscode.async.async_cljs.promise__GT_chan(inst_55827);
var state_55856__$1 = state_55856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55856__$1,(12),inst_55836);
} else {
if((state_val_55857 === (5))){
var inst_55827 = (state_55856[(8)]);
var state_55856__$1 = state_55856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55856__$1,(8),inst_55827);
} else {
if((state_val_55857 === (14))){
var state_55856__$1 = state_55856;
var statearr_55886_56635 = state_55856__$1;
(statearr_55886_56635[(2)] = null);

(statearr_55886_56635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (10))){
var state_55856__$1 = state_55856;
var statearr_55887_56636 = state_55856__$1;
(statearr_55887_56636[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55857 === (8))){
var inst_55831 = (state_55856[(2)]);
var inst_55832 = com.wsscode.async.async_cljs.throw_err(inst_55831);
var state_55856__$1 = state_55856;
var statearr_55890_56637 = state_55856__$1;
(statearr_55890_56637[(2)] = inst_55832);

(statearr_55890_56637[(1)] = (7));


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
});})(c__47946__auto__,this$__$1,map__55814,map__55814__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__47663__auto__,c__47946__auto__,this$__$1,map__55814,map__55814__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0 = (function (){
var statearr_55892 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55892[(0)] = com$wsscode$pathom$fulcro$network$state_machine__47664__auto__);

(statearr_55892[(1)] = (1));

return statearr_55892;
});
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1 = (function (state_55856){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_55856);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e55893){if((e55893 instanceof Object)){
var ex__47667__auto__ = e55893;
var statearr_55895_56638 = state_55856;
(statearr_55895_56638[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56639 = state_55856;
state_55856 = G__56639;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = function(state_55856){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1.call(this,state_55856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,this$__$1,map__55814,map__55814__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__47948__auto__ = (function (){var statearr_55896 = f__47947__auto__();
(statearr_55896[(6)] = c__47946__auto__);

return statearr_55896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,this$__$1,map__55814,map__55814__$1,edn,ok_handler,error_handler,progress_handler))
);

return c__47946__auto__;
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
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__55790){
var extmap__4424__auto__ = (function (){var G__55904 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55790,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__55790)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55904);
} else {
return G__55904;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__55790),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k55907,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__55912 = k55907;
var G__55912__$1 = (((G__55912 instanceof cljs.core.Keyword))?G__55912.fqn:null);
switch (G__55912__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55907,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__55913){
var vec__55914 = p__55913;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55914,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55914,(1),null);
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55906){
var self__ = this;
var G__55906__$1 = this;
return (new cljs.core.RecordIter((0),G__55906__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1603683175 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55908,other55909){
var self__ = this;
var this55908__$1 = this;
return (((!((other55909 == null)))) && ((this55908__$1.constructor === other55909.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55908__$1.f,other55909.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55908__$1.serialize_QMARK_,other55909.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55908__$1.__extmap,other55909.__extmap)));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__55906){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__55926 = cljs.core.keyword_identical_QMARK_;
var expr__55927 = k__4393__auto__;
if(cljs.core.truth_((pred__55926.cljs$core$IFn$_invoke$arity$2 ? pred__55926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__55927) : pred__55926.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__55927)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__55906,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__55926.cljs$core$IFn$_invoke$arity$2 ? pred__55926.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__55927) : pred__55926.call(null,new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__55927)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__55906,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__55906),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__55906){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__55906,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__55911){
var extmap__4424__auto__ = (function (){var G__55933 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55911,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__55911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__55933);
} else {
return G__55933;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__55911),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__55911),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__55937 = arguments.length;
switch (G__55937) {
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k55952,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__55959 = k55952;
var G__55959__$1 = (((G__55959 instanceof cljs.core.Keyword))?G__55959.fqn:null);
switch (G__55959__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k55952,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__55963){
var vec__55964 = p__55963;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55964,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55964,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55951){
var self__ = this;
var G__55951__$1 = this;
return (new cljs.core.RecordIter((0),G__55951__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-928703448 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this55953,other55954){
var self__ = this;
var this55953__$1 = this;
return (((!((other55954 == null)))) && ((this55953__$1.constructor === other55954.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55953__$1.network,other55954.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55953__$1.options,other55954.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this55953__$1.__extmap,other55954.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__55978 = self__.options;
var map__55978__$1 = (((((!((map__55978 == null))))?(((((map__55978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55978):map__55978);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55978__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__55978,map__55978__$1,___$1){
return (function (___$2,x){
return x;
});})(map__55978,map__55978__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55978__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__55978,map__55978__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__55978,map__55978__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55978__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__55978,map__55978__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__55978,map__55978__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55978__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55978__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__55992 = edn_SINGLEQUOTE_;
var G__55993 = ((function (G__55992,edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__55992,edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__55945_SHARP_){
var G__55995 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__55945_SHARP_) : transform_response.call(null,env,p1__55945_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__55995) : ok.call(null,G__55995));
});})(G__55992,edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__55992,edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__55946_SHARP_){
var G__55996 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__55946_SHARP_) : transform_error.call(null,env,p1__55946_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__55996) : error.call(null,G__55996));
});})(G__55992,edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__55992,edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__55992,G__55993) : transform_transmission.call(null,G__55992,G__55993));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__55947_SHARP_){
var G__55997 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__55947_SHARP_) : transform_response.call(null,env,p1__55947_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__55997) : ok.call(null,G__55997));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__55948_SHARP_){
var G__56000 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__55948_SHARP_) : transform_error.call(null,env,p1__55948_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__56000) : error.call(null,G__56000));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__55978,map__55978__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
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
}catch (e56002){var ___$2 = e56002;
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__55951){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56003 = cljs.core.keyword_identical_QMARK_;
var expr__56004 = k__4393__auto__;
if(cljs.core.truth_((pred__56003.cljs$core$IFn$_invoke$arity$2 ? pred__56003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__56004) : pred__56003.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__56004)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__55951,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56003.cljs$core$IFn$_invoke$arity$2 ? pred__56003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__56004) : pred__56003.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__56004)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__55951,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__55951),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__55951){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__55951,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__55956){
var extmap__4424__auto__ = (function (){var G__56009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__55956,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__55956)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56009);
} else {
return G__56009;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__55956),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__55956),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k56017,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__56021 = k56017;
var G__56021__$1 = (((G__56021 instanceof cljs.core.Keyword))?G__56021.fqn:null);
switch (G__56021__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56017,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__56022){
var vec__56023 = p__56022;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56023,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56023,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56016){
var self__ = this;
var G__56016__$1 = this;
return (new cljs.core.RecordIter((0),G__56016__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1483300891 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56018,other56019){
var self__ = this;
var this56018__$1 = this;
return (((!((other56019 == null)))) && ((this56018__$1.constructor === other56019.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56018__$1.network,other56019.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56018__$1.options,other56019.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56018__$1.__extmap,other56019.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e56034){var ___$2 = e56034;
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__56016){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56038 = cljs.core.keyword_identical_QMARK_;
var expr__56039 = k__4393__auto__;
if(cljs.core.truth_((pred__56038.cljs$core$IFn$_invoke$arity$2 ? pred__56038.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__56039) : pred__56038.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__56039)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__56016,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56038.cljs$core$IFn$_invoke$arity$2 ? pred__56038.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__56039) : pred__56038.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__56039)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__56016,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__56016),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__56016){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__56016,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__56042){
var self__ = this;
var map__56043 = p__56042;
var map__56043__$1 = (((((!((map__56043 == null))))?(((((map__56043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56043):map__56043);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56043__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56043__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56043__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56043__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__56045 = self__.options;
var map__56045__$1 = (((((!((map__56045 == null))))?(((((map__56045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56045):map__56045);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56045__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__56045,map__56045__$1,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__56045,map__56045__$1,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56045__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__56045,map__56045__$1,transform_query,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__56045,map__56045__$1,transform_query,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56045__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__56045,map__56045__$1,transform_query,transform_response,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__56045,map__56045__$1,transform_query,transform_response,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56045__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__56045,map__56045__$1,transform_query,transform_response,transform_error,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__56045,map__56045__$1,transform_query,transform_response,transform_error,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56045__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56045__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__56052 = env;
var G__56053 = edn_SINGLEQUOTE_;
var G__56054 = ((function (G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__56057 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__56010_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__56010_SHARP_) : transform_response.call(null,env,p1__56010_SHARP_));
});})(G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__56057) : ok_handler.call(null,G__56057));
});})(G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__56058 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__56012_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__56012_SHARP_) : transform_error.call(null,env,p1__56012_SHARP_));
});})(G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__56058) : error_handler.call(null,G__56058));
});})(G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__56060 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__56060) : progress_handler.call(null,G__56060));
});})(G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__56052,G__56053,edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__56052,G__56053,G__56054) : transform_transmission.call(null,G__56052,G__56053,G__56054));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__56061 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__56013_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__56013_SHARP_) : transform_response.call(null,env,p1__56013_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__56061) : ok_handler.call(null,G__56061));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__56063 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__56014_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__56014_SHARP_) : transform_error.call(null,env,p1__56014_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__56063) : error_handler.call(null,G__56063));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__56069 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__56069) : progress_handler.call(null,G__56069));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__56045,map__56045__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__56043,map__56043__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__56020){
var extmap__4424__auto__ = (function (){var G__56076 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56020,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__56020)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56076);
} else {
return G__56076;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__56020),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__56020),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__56091 = network;
var G__56091__$1 = (((G__56091 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__56091));
var G__56091__$2 = (((G__56091__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__56091__$1));
if((G__56091__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__56091__$2,app);
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
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),com.wsscode.pathom.fulcro.network.graphql_response_key(k));
var id_param = com.wsscode.pathom.graphql.find_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null)),fulcro.client.primitives.tempid_QMARK_);
var G__56098 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56098,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,com.wsscode.pathom.fulcro.network.graphql_response_key(cljs.core.key(id_param)))]));
} else {
return G__56098;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__56111 = arguments.length;
switch (G__56111) {
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

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__56116){
var map__56117 = p__56116;
var map__56117__$1 = (((((!((map__56117 == null))))?(((((map__56117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56117):map__56117);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56117__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__56117,map__56117__$1,update_http_request){
return (function (_this,edn,ok,error){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__56117,map__56117__$1,update_http_request){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__56117,map__56117__$1,update_http_request){
return (function (state_56191){
var state_val_56193 = (state_56191[(1)]);
if((state_val_56193 === (7))){
var inst_56147 = (state_56191[(7)]);
var state_56191__$1 = state_56191;
var statearr_56198_56695 = state_56191__$1;
(statearr_56198_56695[(2)] = inst_56147);

(statearr_56198_56695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (1))){
var state_56191__$1 = state_56191;
var statearr_56199_56696 = state_56191__$1;
(statearr_56199_56696[(2)] = null);

(statearr_56199_56696[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (4))){
var inst_56134 = (state_56191[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_56191,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_56129 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_56130 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_56131 = (new cljs.core.PersistentArrayMap(null,1,inst_56130,null));
var inst_56132 = (new cljs.core.PersistentHashSet(null,inst_56131,null));
var inst_56133 = com.wsscode.pathom.core.elide_ast_nodes(inst_56129,inst_56132);
var inst_56134__$1 = com.wsscode.pathom.core.ast__GT_query(inst_56133);
var inst_56135 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_56136 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_56137 = [inst_56136];
var inst_56138 = cljs.core.PersistentHashMap.fromArrays(inst_56135,inst_56137);
var inst_56139 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_56134__$1,inst_56138);
var inst_56142 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_56143 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_56144 = [inst_56139];
var inst_56145 = cljs.core.PersistentHashMap.fromArrays(inst_56143,inst_56144);
var inst_56146 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_56145];
var inst_56147 = cljs.core.PersistentHashMap.fromArrays(inst_56142,inst_56146);
var state_56191__$1 = (function (){var statearr_56202 = state_56191;
(statearr_56202[(8)] = inst_56134__$1);

(statearr_56202[(7)] = inst_56147);

return statearr_56202;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_56204_56697 = state_56191__$1;
(statearr_56204_56697[(1)] = (6));

} else {
var statearr_56206_56698 = state_56191__$1;
(statearr_56206_56698[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (15))){
var inst_56157 = (state_56191[(9)]);
var inst_56175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56157);
var state_56191__$1 = state_56191;
var statearr_56208_56699 = state_56191__$1;
(statearr_56208_56699[(2)] = inst_56175);

(statearr_56208_56699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (13))){
var state_56191__$1 = state_56191;
var statearr_56209_56700 = state_56191__$1;
(statearr_56209_56700[(2)] = false);

(statearr_56209_56700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (6))){
var inst_56147 = (state_56191[(7)]);
var inst_56149 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_56147) : update_http_request.call(null,inst_56147));
var state_56191__$1 = state_56191;
var statearr_56212_56701 = state_56191__$1;
(statearr_56212_56701[(2)] = inst_56149);

(statearr_56212_56701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (17))){
var inst_56134 = (state_56191[(8)]);
var inst_56178 = (state_56191[(2)]);
var inst_56179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56178,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_56180 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_56181 = [inst_56179];
var inst_56182 = cljs.core.PersistentHashMap.fromArrays(inst_56180,inst_56181);
var inst_56183 = com.wsscode.pathom.fulcro.network.graphql_response_parser(inst_56182,inst_56134);
var inst_56184 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_56183) : ok.call(null,inst_56183));
var state_56191__$1 = state_56191;
var statearr_56216_56703 = state_56191__$1;
(statearr_56216_56703[(2)] = inst_56184);


cljs.core.async.impl.ioc_helpers.process_exception(state_56191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (3))){
var inst_56120 = (state_56191[(2)]);
var inst_56121 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_56120) : error.call(null,inst_56120));
var state_56191__$1 = state_56191;
var statearr_56219_56704 = state_56191__$1;
(statearr_56219_56704[(2)] = inst_56121);


cljs.core.async.impl.ioc_helpers.process_exception(state_56191__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (12))){
var state_56191__$1 = state_56191;
var statearr_56220_56706 = state_56191__$1;
(statearr_56220_56706[(2)] = true);

(statearr_56220_56706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (2))){
var inst_56186 = (state_56191[(2)]);
var state_56191__$1 = state_56191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56191__$1,inst_56186);
} else {
if((state_val_56193 === (11))){
var inst_56173 = (state_56191[(2)]);
var state_56191__$1 = state_56191;
if(cljs.core.truth_(inst_56173)){
var statearr_56223_56707 = state_56191__$1;
(statearr_56223_56707[(1)] = (15));

} else {
var statearr_56224_56708 = state_56191__$1;
(statearr_56224_56708[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (9))){
var inst_56157 = (state_56191[(9)]);
var inst_56162 = inst_56157.cljs$lang$protocol_mask$partition0$;
var inst_56163 = (inst_56162 & (64));
var inst_56164 = inst_56157.cljs$core$ISeq$;
var inst_56165 = (cljs.core.PROTOCOL_SENTINEL === inst_56164);
var inst_56166 = ((inst_56163) || (inst_56165));
var state_56191__$1 = state_56191;
if(cljs.core.truth_(inst_56166)){
var statearr_56226_56711 = state_56191__$1;
(statearr_56226_56711[(1)] = (12));

} else {
var statearr_56227_56712 = state_56191__$1;
(statearr_56227_56712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (5))){
var inst_56157 = (state_56191[(9)]);
var inst_56155 = (state_56191[(2)]);
var inst_56156 = com.wsscode.async.async_cljs.throw_err(inst_56155);
var inst_56157__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_56156);
var inst_56159 = (inst_56157__$1 == null);
var inst_56160 = cljs.core.not(inst_56159);
var state_56191__$1 = (function (){var statearr_56235 = state_56191;
(statearr_56235[(9)] = inst_56157__$1);

return statearr_56235;
})();
if(inst_56160){
var statearr_56236_56714 = state_56191__$1;
(statearr_56236_56714[(1)] = (9));

} else {
var statearr_56237_56715 = state_56191__$1;
(statearr_56237_56715[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (14))){
var inst_56170 = (state_56191[(2)]);
var state_56191__$1 = state_56191;
var statearr_56239_56717 = state_56191__$1;
(statearr_56239_56717[(2)] = inst_56170);

(statearr_56239_56717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (16))){
var inst_56157 = (state_56191[(9)]);
var state_56191__$1 = state_56191;
var statearr_56240_56719 = state_56191__$1;
(statearr_56240_56719[(2)] = inst_56157);

(statearr_56240_56719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (10))){
var state_56191__$1 = state_56191;
var statearr_56243_56720 = state_56191__$1;
(statearr_56243_56720[(2)] = false);

(statearr_56243_56720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56193 === (8))){
var inst_56152 = (state_56191[(2)]);
var inst_56153 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_56152);
var state_56191__$1 = state_56191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56191__$1,(5),inst_56153);
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
});})(c__47946__auto__,map__56117,map__56117__$1,update_http_request))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__56117,map__56117__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0 = (function (){
var statearr_56245 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56245[(0)] = com$wsscode$pathom$fulcro$network$state_machine__47664__auto__);

(statearr_56245[(1)] = (1));

return statearr_56245;
});
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1 = (function (state_56191){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_56191);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e56246){if((e56246 instanceof Object)){
var ex__47667__auto__ = e56246;
var statearr_56247_56721 = state_56191;
(statearr_56247_56721[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56723 = state_56191;
state_56191 = G__56723;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = function(state_56191){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1.call(this,state_56191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__56117,map__56117__$1,update_http_request))
})();
var state__47948__auto__ = (function (){var statearr_56248 = f__47947__auto__();
(statearr_56248[(6)] = c__47946__auto__);

return statearr_56248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__56117,map__56117__$1,update_http_request))
);

return c__47946__auto__;
});})(map__56117,map__56117__$1,update_http_request))
);
});

com.wsscode.pathom.fulcro.network.graphql_network.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.fulcro.network.graphql_response_parser2 = (function (){var simple_keyword = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name);
return com.wsscode.pathom.core.parser(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.core","env","com.wsscode.pathom.core/env",602275378),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","reader","com.wsscode.pathom.core/reader",1510046410),com.wsscode.pathom.core.map_reader_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.core","map-key-transform","com.wsscode.pathom.core/map-key-transform",-238565800),simple_keyword], null))], null),new cljs.core.Keyword("com.wsscode.pathom.core","mutate","com.wsscode.pathom.core/mutate",-2086097173),((function (simple_keyword){
return (function (env,k,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (simple_keyword){
return (function (){
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),simple_keyword(k));
var id_param = com.wsscode.pathom.graphql.find_id(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"params","params",710516235)], null)),fulcro.client.primitives.tempid_QMARK_);
console.log("VOLTA",id_param,com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env),response);

var G__56253 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56253,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,simple_keyword(cljs.core.key(id_param)))]));
} else {
return G__56253;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__56261 = arguments.length;
switch (G__56261) {
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
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1((function (_this,edn,ok,error){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__){
return (function (state_56328){
var state_val_56329 = (state_56328[(1)]);
if((state_val_56329 === (7))){
var state_56328__$1 = state_56328;
var statearr_56334_56735 = state_56328__$1;
(statearr_56334_56735[(2)] = false);

(statearr_56334_56735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (1))){
var state_56328__$1 = state_56328;
var statearr_56336_56736 = state_56328__$1;
(statearr_56336_56736[(2)] = null);

(statearr_56336_56736[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (4))){
var inst_56278 = (state_56328[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_56328,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_56272 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_56274 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_56275 = (new cljs.core.PersistentArrayMap(null,1,inst_56274,null));
var inst_56276 = (new cljs.core.PersistentHashSet(null,inst_56275,null));
var inst_56277 = com.wsscode.pathom.core.elide_ast_nodes(inst_56272,inst_56276);
var inst_56278__$1 = com.wsscode.pathom.core.ast__GT_query(inst_56277);
var inst_56279 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_56280 = [fulcro.client.primitives.tempid_QMARK_];
var inst_56281 = cljs.core.PersistentHashMap.fromArrays(inst_56279,inst_56280);
var inst_56282 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_56281,config], 0));
var inst_56283 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_56278__$1,inst_56282);
var inst_56284 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_56285 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_56286 = [inst_56283];
var inst_56287 = cljs.core.PersistentHashMap.fromArrays(inst_56285,inst_56286);
var inst_56288 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_56287];
var inst_56289 = cljs.core.PersistentHashMap.fromArrays(inst_56284,inst_56288);
var inst_56290 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_56289);
var state_56328__$1 = (function (){var statearr_56341 = state_56328;
(statearr_56341[(7)] = inst_56278__$1);

return statearr_56341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56328__$1,(5),inst_56290);
} else {
if((state_val_56329 === (13))){
var inst_56294 = (state_56328[(8)]);
var state_56328__$1 = state_56328;
var statearr_56344_56742 = state_56328__$1;
(statearr_56344_56742[(2)] = inst_56294);

(statearr_56344_56742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (6))){
var inst_56294 = (state_56328[(8)]);
var inst_56300 = inst_56294.cljs$lang$protocol_mask$partition0$;
var inst_56301 = (inst_56300 & (64));
var inst_56302 = inst_56294.cljs$core$ISeq$;
var inst_56303 = (cljs.core.PROTOCOL_SENTINEL === inst_56302);
var inst_56304 = ((inst_56301) || (inst_56303));
var state_56328__$1 = state_56328;
if(cljs.core.truth_(inst_56304)){
var statearr_56346_56743 = state_56328__$1;
(statearr_56346_56743[(1)] = (9));

} else {
var statearr_56347_56744 = state_56328__$1;
(statearr_56347_56744[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (3))){
var inst_56262 = (state_56328[(2)]);
var inst_56263 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_56262) : error.call(null,inst_56262));
var state_56328__$1 = state_56328;
var statearr_56348_56745 = state_56328__$1;
(statearr_56348_56745[(2)] = inst_56263);


cljs.core.async.impl.ioc_helpers.process_exception(state_56328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (12))){
var inst_56294 = (state_56328[(8)]);
var inst_56313 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56294);
var state_56328__$1 = state_56328;
var statearr_56349_56747 = state_56328__$1;
(statearr_56349_56747[(2)] = inst_56313);

(statearr_56349_56747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (2))){
var inst_56326 = (state_56328[(2)]);
var state_56328__$1 = state_56328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56328__$1,inst_56326);
} else {
if((state_val_56329 === (11))){
var inst_56308 = (state_56328[(2)]);
var state_56328__$1 = state_56328;
var statearr_56352_56750 = state_56328__$1;
(statearr_56352_56750[(2)] = inst_56308);

(statearr_56352_56750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (9))){
var state_56328__$1 = state_56328;
var statearr_56354_56751 = state_56328__$1;
(statearr_56354_56751[(2)] = true);

(statearr_56354_56751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (5))){
var inst_56294 = (state_56328[(8)]);
var inst_56292 = (state_56328[(2)]);
var inst_56293 = com.wsscode.async.async_cljs.throw_err(inst_56292);
var inst_56294__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_56293);
var inst_56296 = (inst_56294__$1 == null);
var inst_56297 = cljs.core.not(inst_56296);
var state_56328__$1 = (function (){var statearr_56357 = state_56328;
(statearr_56357[(8)] = inst_56294__$1);

return statearr_56357;
})();
if(inst_56297){
var statearr_56358_56753 = state_56328__$1;
(statearr_56358_56753[(1)] = (6));

} else {
var statearr_56359_56755 = state_56328__$1;
(statearr_56359_56755[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (14))){
var inst_56278 = (state_56328[(7)]);
var inst_56316 = (state_56328[(2)]);
var inst_56318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56316,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_56320 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_56321 = [inst_56318];
var inst_56322 = cljs.core.PersistentHashMap.fromArrays(inst_56320,inst_56321);
var inst_56323 = com.wsscode.pathom.fulcro.network.graphql_response_parser2(inst_56322,inst_56278);
var inst_56324 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_56323) : ok.call(null,inst_56323));
var state_56328__$1 = state_56328;
var statearr_56360_56758 = state_56328__$1;
(statearr_56360_56758[(2)] = inst_56324);


cljs.core.async.impl.ioc_helpers.process_exception(state_56328__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (10))){
var state_56328__$1 = state_56328;
var statearr_56361_56759 = state_56328__$1;
(statearr_56361_56759[(2)] = false);

(statearr_56361_56759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56329 === (8))){
var inst_56311 = (state_56328[(2)]);
var state_56328__$1 = state_56328;
if(cljs.core.truth_(inst_56311)){
var statearr_56364_56760 = state_56328__$1;
(statearr_56364_56760[(1)] = (12));

} else {
var statearr_56366_56761 = state_56328__$1;
(statearr_56366_56761[(1)] = (13));

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
});})(c__47946__auto__))
;
return ((function (switch__47663__auto__,c__47946__auto__){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0 = (function (){
var statearr_56368 = [null,null,null,null,null,null,null,null,null];
(statearr_56368[(0)] = com$wsscode$pathom$fulcro$network$state_machine__47664__auto__);

(statearr_56368[(1)] = (1));

return statearr_56368;
});
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1 = (function (state_56328){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_56328);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e56372){if((e56372 instanceof Object)){
var ex__47667__auto__ = e56372;
var statearr_56373_56767 = state_56328;
(statearr_56373_56767[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56372;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56768 = state_56328;
state_56328 = G__56768;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = function(state_56328){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1.call(this,state_56328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_56376 = f__47947__auto__();
(statearr_56376[(6)] = c__47946__auto__);

return statearr_56376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__))
);

return c__47946__auto__;
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
var G__56771__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__56377_56773 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56377_56773) : f.call(null,G__56377_56773));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__56771 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56775__i = 0, G__56775__a = new Array(arguments.length -  0);
while (G__56775__i < G__56775__a.length) {G__56775__a[G__56775__i] = arguments[G__56775__i + 0]; ++G__56775__i;}
  args = new cljs.core.IndexedSeq(G__56775__a,0,null);
} 
return G__56771__delegate.call(this,args);};
G__56771.cljs$lang$maxFixedArity = 0;
G__56771.cljs$lang$applyTo = (function (arglist__56777){
var args = cljs.core.seq(arglist__56777);
return G__56771__delegate(args);
});
G__56771.cljs$core$IFn$_invoke$arity$variadic = G__56771__delegate;
return G__56771;
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
var vec__56381 = requests;
var seq__56382 = cljs.core.seq(vec__56381);
var first__56383 = cljs.core.first(seq__56382);
var seq__56382__$1 = cljs.core.next(seq__56382);
var vec__56384 = first__56383;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56384,(2),null);
var tail = seq__56382__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__56403 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56403,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56403,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56403,(2),null);
var req = vec__56403;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__56781 = cljs.core.next(left);
var G__56782 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__56783 = current;
var G__56784 = next_cycle;
left = G__56781;
groups__$1 = G__56782;
current = G__56783;
next_cycle = G__56784;
continue;
} else {
var G__56785 = cljs.core.next(left);
var G__56786 = groups__$1;
var G__56787 = current;
var G__56788 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__56785;
groups__$1 = G__56786;
current = G__56787;
next_cycle = G__56788;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__56409 = next_cycle;
var seq__56410 = cljs.core.seq(vec__56409);
var first__56411 = cljs.core.first(seq__56410);
var seq__56410__$1 = cljs.core.next(seq__56410);
var vec__56412 = first__56411;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56412,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56412,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56412,(2),null);
var tail__$1 = seq__56410__$1;
var G__56789 = tail__$1;
var G__56790 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__56791 = (current + (1));
var G__56792 = cljs.core.PersistentVector.EMPTY;
left = G__56789;
groups__$1 = G__56790;
current = G__56791;
next_cycle = G__56792;
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
return com.wsscode.pathom.fulcro.network.debounce((function (p1__56416_SHARP_){
var G__56419 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__56416_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56419) : f.call(null,G__56419));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k56422,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__56436 = k56422;
var G__56436__$1 = (((G__56436 instanceof cljs.core.Keyword))?G__56436.fqn:null);
switch (G__56436__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56422,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__56441){
var vec__56443 = p__56441;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56443,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56443,(1),null);
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56421){
var self__ = this;
var G__56421__$1 = this;
return (new cljs.core.RecordIter((0),G__56421__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (176772946 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56423,other56424){
var self__ = this;
var this56423__$1 = this;
return (((!((other56424 == null)))) && ((this56423__$1.constructor === other56424.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56423__$1.send_fn,other56424.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56423__$1.__extmap,other56424.__extmap)));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__56421){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__56464 = cljs.core.keyword_identical_QMARK_;
var expr__56465 = k__4393__auto__;
if(cljs.core.truth_((pred__56464.cljs$core$IFn$_invoke$arity$2 ? pred__56464.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__56465) : pred__56464.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__56465)))){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__56421,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__56421),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__56421){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__56421,self__.__extmap,self__.__hash));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__56427){
var extmap__4424__auto__ = (function (){var G__56472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56427,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__56427)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56472);
} else {
return G__56472;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__56427),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__56477 = arguments.length;
switch (G__56477) {
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
var seq__56482 = cljs.core.seq(reqs);
var chunk__56483 = null;
var count__56484 = (0);
var i__56485 = (0);
while(true){
if((i__56485 < count__56484)){
var map__56533 = chunk__56483.cljs$core$IIndexed$_nth$arity$2(null,i__56485);
var map__56533__$1 = (((((!((map__56533 == null))))?(((((map__56533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56533):map__56533);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56533__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__56482,chunk__56483,count__56484,i__56485,map__56533,map__56533__$1,query,ok,err){
return (function (p1__56473_SHARP_){
var seq__56536 = cljs.core.seq(ok);
var chunk__56537 = null;
var count__56538 = (0);
var i__56539 = (0);
while(true){
if((i__56539 < count__56538)){
var f = chunk__56537.cljs$core$IIndexed$_nth$arity$2(null,i__56539);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56473_SHARP_) : f.call(null,p1__56473_SHARP_));


var G__56818 = seq__56536;
var G__56819 = chunk__56537;
var G__56820 = count__56538;
var G__56821 = (i__56539 + (1));
seq__56536 = G__56818;
chunk__56537 = G__56819;
count__56538 = G__56820;
i__56539 = G__56821;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56536);
if(temp__5720__auto__){
var seq__56536__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56536__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56536__$1);
var G__56823 = cljs.core.chunk_rest(seq__56536__$1);
var G__56824 = c__4550__auto__;
var G__56825 = cljs.core.count(c__4550__auto__);
var G__56826 = (0);
seq__56536 = G__56823;
chunk__56537 = G__56824;
count__56538 = G__56825;
i__56539 = G__56826;
continue;
} else {
var f = cljs.core.first(seq__56536__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56473_SHARP_) : f.call(null,p1__56473_SHARP_));


var G__56827 = cljs.core.next(seq__56536__$1);
var G__56828 = null;
var G__56829 = (0);
var G__56830 = (0);
seq__56536 = G__56827;
chunk__56537 = G__56828;
count__56538 = G__56829;
i__56539 = G__56830;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__56482,chunk__56483,count__56484,i__56485,map__56533,map__56533__$1,query,ok,err))
,((function (seq__56482,chunk__56483,count__56484,i__56485,map__56533,map__56533__$1,query,ok,err){
return (function (p1__56474_SHARP_){
var seq__56545 = cljs.core.seq(err);
var chunk__56546 = null;
var count__56547 = (0);
var i__56548 = (0);
while(true){
if((i__56548 < count__56547)){
var f = chunk__56546.cljs$core$IIndexed$_nth$arity$2(null,i__56548);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56474_SHARP_) : f.call(null,p1__56474_SHARP_));


var G__56831 = seq__56545;
var G__56832 = chunk__56546;
var G__56833 = count__56547;
var G__56834 = (i__56548 + (1));
seq__56545 = G__56831;
chunk__56546 = G__56832;
count__56547 = G__56833;
i__56548 = G__56834;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56545);
if(temp__5720__auto__){
var seq__56545__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56545__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56545__$1);
var G__56835 = cljs.core.chunk_rest(seq__56545__$1);
var G__56836 = c__4550__auto__;
var G__56837 = cljs.core.count(c__4550__auto__);
var G__56838 = (0);
seq__56545 = G__56835;
chunk__56546 = G__56836;
count__56547 = G__56837;
i__56548 = G__56838;
continue;
} else {
var f = cljs.core.first(seq__56545__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56474_SHARP_) : f.call(null,p1__56474_SHARP_));


var G__56839 = cljs.core.next(seq__56545__$1);
var G__56840 = null;
var G__56841 = (0);
var G__56842 = (0);
seq__56545 = G__56839;
chunk__56546 = G__56840;
count__56547 = G__56841;
i__56548 = G__56842;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__56482,chunk__56483,count__56484,i__56485,map__56533,map__56533__$1,query,ok,err))
);


var G__56843 = seq__56482;
var G__56844 = chunk__56483;
var G__56845 = count__56484;
var G__56846 = (i__56485 + (1));
seq__56482 = G__56843;
chunk__56483 = G__56844;
count__56484 = G__56845;
i__56485 = G__56846;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__56482);
if(temp__5720__auto__){
var seq__56482__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56482__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56482__$1);
var G__56847 = cljs.core.chunk_rest(seq__56482__$1);
var G__56848 = c__4550__auto__;
var G__56849 = cljs.core.count(c__4550__auto__);
var G__56850 = (0);
seq__56482 = G__56847;
chunk__56483 = G__56848;
count__56484 = G__56849;
i__56485 = G__56850;
continue;
} else {
var map__56551 = cljs.core.first(seq__56482__$1);
var map__56551__$1 = (((((!((map__56551 == null))))?(((((map__56551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56551):map__56551);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56551__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56551__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56551__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__56482,chunk__56483,count__56484,i__56485,map__56551,map__56551__$1,query,ok,err,seq__56482__$1,temp__5720__auto__){
return (function (p1__56473_SHARP_){
var seq__56555 = cljs.core.seq(ok);
var chunk__56556 = null;
var count__56557 = (0);
var i__56558 = (0);
while(true){
if((i__56558 < count__56557)){
var f = chunk__56556.cljs$core$IIndexed$_nth$arity$2(null,i__56558);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56473_SHARP_) : f.call(null,p1__56473_SHARP_));


var G__56851 = seq__56555;
var G__56852 = chunk__56556;
var G__56853 = count__56557;
var G__56854 = (i__56558 + (1));
seq__56555 = G__56851;
chunk__56556 = G__56852;
count__56557 = G__56853;
i__56558 = G__56854;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__56555);
if(temp__5720__auto____$1){
var seq__56555__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56555__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56555__$1);
var G__56855 = cljs.core.chunk_rest(seq__56555__$1);
var G__56856 = c__4550__auto__;
var G__56857 = cljs.core.count(c__4550__auto__);
var G__56858 = (0);
seq__56555 = G__56855;
chunk__56556 = G__56856;
count__56557 = G__56857;
i__56558 = G__56858;
continue;
} else {
var f = cljs.core.first(seq__56555__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56473_SHARP_) : f.call(null,p1__56473_SHARP_));


var G__56859 = cljs.core.next(seq__56555__$1);
var G__56860 = null;
var G__56861 = (0);
var G__56862 = (0);
seq__56555 = G__56859;
chunk__56556 = G__56860;
count__56557 = G__56861;
i__56558 = G__56862;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__56482,chunk__56483,count__56484,i__56485,map__56551,map__56551__$1,query,ok,err,seq__56482__$1,temp__5720__auto__))
,((function (seq__56482,chunk__56483,count__56484,i__56485,map__56551,map__56551__$1,query,ok,err,seq__56482__$1,temp__5720__auto__){
return (function (p1__56474_SHARP_){
var seq__56565 = cljs.core.seq(err);
var chunk__56566 = null;
var count__56567 = (0);
var i__56568 = (0);
while(true){
if((i__56568 < count__56567)){
var f = chunk__56566.cljs$core$IIndexed$_nth$arity$2(null,i__56568);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56474_SHARP_) : f.call(null,p1__56474_SHARP_));


var G__56863 = seq__56565;
var G__56864 = chunk__56566;
var G__56865 = count__56567;
var G__56866 = (i__56568 + (1));
seq__56565 = G__56863;
chunk__56566 = G__56864;
count__56567 = G__56865;
i__56568 = G__56866;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__56565);
if(temp__5720__auto____$1){
var seq__56565__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56565__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__56565__$1);
var G__56868 = cljs.core.chunk_rest(seq__56565__$1);
var G__56869 = c__4550__auto__;
var G__56870 = cljs.core.count(c__4550__auto__);
var G__56871 = (0);
seq__56565 = G__56868;
chunk__56566 = G__56869;
count__56567 = G__56870;
i__56568 = G__56871;
continue;
} else {
var f = cljs.core.first(seq__56565__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__56474_SHARP_) : f.call(null,p1__56474_SHARP_));


var G__56872 = cljs.core.next(seq__56565__$1);
var G__56873 = null;
var G__56874 = (0);
var G__56875 = (0);
seq__56565 = G__56872;
chunk__56566 = G__56873;
count__56567 = G__56874;
i__56568 = G__56875;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__56482,chunk__56483,count__56484,i__56485,map__56551,map__56551__$1,query,ok,err,seq__56482__$1,temp__5720__auto__))
);


var G__56876 = cljs.core.next(seq__56482__$1);
var G__56877 = null;
var G__56878 = (0);
var G__56879 = (0);
seq__56482 = G__56876;
chunk__56483 = G__56877;
count__56484 = G__56878;
i__56485 = G__56879;
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
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__56580){
var map__56581 = p__56580;
var map__56581__$1 = (((((!((map__56581 == null))))?(((((map__56581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56581):map__56581);
var env = map__56581__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56581__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__56585 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56585,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
