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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k68546,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__68554 = k68546;
var G__68554__$1 = (((G__68554 instanceof cljs.core.Keyword))?G__68554.fqn:null);
switch (G__68554__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68546,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__68555){
var vec__68556 = p__68555;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68556,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68556,(1),null);
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68545){
var self__ = this;
var G__68545__$1 = this;
return (new cljs.core.RecordIter((0),G__68545__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68547,other68548){
var self__ = this;
var this68547__$1 = this;
return (((!((other68548 == null)))) && ((this68547__$1.constructor === other68548.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68547__$1.parser,other68548.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68547__$1.__extmap,other68548.__extmap)));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__68545){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__68576 = cljs.core.keyword_identical_QMARK_;
var expr__68577 = k__4393__auto__;
if(cljs.core.truth_((pred__68576.cljs$core$IFn$_invoke$arity$2 ? pred__68576.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__68577) : pred__68576.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__68577)))){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__68545,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__68545),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__68545){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__68545,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__68580){
var self__ = this;
var map__68581 = p__68580;
var map__68581__$1 = (((((!((map__68581 == null))))?(((((map__68581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68581):map__68581);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68581__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,this$__$1,map__68581,map__68581__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,this$__$1,map__68581,map__68581__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_68609){
var state_val_68610 = (state_68609[(1)]);
if((state_val_68610 === (1))){
var state_68609__$1 = state_68609;
var statearr_68613_69577 = state_68609__$1;
(statearr_68613_69577[(2)] = null);

(statearr_68613_69577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68610 === (2))){
var inst_68607 = (state_68609[(2)]);
var state_68609__$1 = state_68609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68609__$1,inst_68607);
} else {
if((state_val_68610 === (3))){
var inst_68583 = (state_68609[(2)]);
var inst_68584 = console.error("PathomRemote error:",inst_68583);
var inst_68585 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_68586 = [inst_68583];
var inst_68587 = cljs.core.PersistentHashMap.fromArrays(inst_68585,inst_68586);
var inst_68588 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_68587) : error_handler.call(null,inst_68587));
var state_68609__$1 = (function (){var statearr_68617 = state_68609;
(statearr_68617[(7)] = inst_68584);

return statearr_68617;
})();
var statearr_68618_69579 = state_68609__$1;
(statearr_68618_69579[(2)] = inst_68588);


cljs.core.async.impl.ioc_helpers.process_exception(state_68609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68610 === (4))){
var inst_68594 = (state_68609[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68609,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_68592 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_68593 = cljs.core.PersistentHashMap.EMPTY;
var inst_68594__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_68593,edn) : self__.parser.call(null,inst_68593,edn));
var inst_68595 = com.wsscode.common.async_cljs.chan_QMARK_(inst_68594__$1);
var state_68609__$1 = (function (){var statearr_68621 = state_68609;
(statearr_68621[(8)] = inst_68594__$1);

(statearr_68621[(9)] = inst_68592);

return statearr_68621;
})();
if(inst_68595){
var statearr_68623_69580 = state_68609__$1;
(statearr_68623_69580[(1)] = (5));

} else {
var statearr_68624_69581 = state_68609__$1;
(statearr_68624_69581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68610 === (5))){
var inst_68594 = (state_68609[(8)]);
var state_68609__$1 = state_68609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68609__$1,(8),inst_68594);
} else {
if((state_val_68610 === (6))){
var inst_68594 = (state_68609[(8)]);
var state_68609__$1 = state_68609;
var statearr_68625_69582 = state_68609__$1;
(statearr_68625_69582[(2)] = inst_68594);

(statearr_68625_69582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68610 === (7))){
var inst_68592 = (state_68609[(9)]);
var inst_68602 = (state_68609[(2)]);
var inst_68603 = [edn,inst_68602];
var inst_68604 = cljs.core.PersistentHashMap.fromArrays(inst_68592,inst_68603);
var inst_68605 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_68604) : ok_handler.call(null,inst_68604));
var state_68609__$1 = state_68609;
var statearr_68626_69584 = state_68609__$1;
(statearr_68626_69584[(2)] = inst_68605);


cljs.core.async.impl.ioc_helpers.process_exception(state_68609__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68610 === (8))){
var inst_68598 = (state_68609[(2)]);
var inst_68599 = com.wsscode.common.async_cljs.throw_err(inst_68598);
var state_68609__$1 = state_68609;
var statearr_68628_69588 = state_68609__$1;
(statearr_68628_69588[(2)] = inst_68599);

(statearr_68628_69588[(1)] = (7));


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
});})(c__45808__auto__,this$__$1,map__68581,map__68581__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__45525__auto__,c__45808__auto__,this$__$1,map__68581,map__68581__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0 = (function (){
var statearr_68632 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68632[(0)] = com$wsscode$pathom$fulcro$network$state_machine__45526__auto__);

(statearr_68632[(1)] = (1));

return statearr_68632;
});
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1 = (function (state_68609){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_68609);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68634){if((e68634 instanceof Object)){
var ex__45529__auto__ = e68634;
var statearr_68635_69590 = state_68609;
(statearr_68635_69590[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69594 = state_68609;
state_68609 = G__69594;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__ = function(state_68609){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1.call(this,state_68609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,this$__$1,map__68581,map__68581__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__45810__auto__ = (function (){var statearr_68636 = f__45809__auto__();
(statearr_68636[(6)] = c__45808__auto__);

return statearr_68636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,this$__$1,map__68581,map__68581__$1,edn,ok_handler,error_handler,progress_handler))
);

return c__45808__auto__;
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
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__68552){
var extmap__4424__auto__ = (function (){var G__68639 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68552,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__68552)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68639);
} else {
return G__68639;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__68552),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k68646,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__68657 = k68646;
var G__68657__$1 = (((G__68657 instanceof cljs.core.Keyword))?G__68657.fqn:null);
switch (G__68657__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68646,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__68659){
var vec__68660 = p__68659;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68660,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68660,(1),null);
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68645){
var self__ = this;
var G__68645__$1 = this;
return (new cljs.core.RecordIter((0),G__68645__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68647,other68648){
var self__ = this;
var this68647__$1 = this;
return (((!((other68648 == null)))) && ((this68647__$1.constructor === other68648.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68647__$1.f,other68648.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68647__$1.serialize_QMARK_,other68648.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68647__$1.__extmap,other68648.__extmap)));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__68645){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__68668 = cljs.core.keyword_identical_QMARK_;
var expr__68669 = k__4393__auto__;
if(cljs.core.truth_((pred__68668.cljs$core$IFn$_invoke$arity$2 ? pred__68668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__68669) : pred__68668.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__68669)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__68645,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68668.cljs$core$IFn$_invoke$arity$2 ? pred__68668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__68669) : pred__68668.call(null,new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__68669)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__68645,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__68645),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__68645){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__68645,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__68651){
var extmap__4424__auto__ = (function (){var G__68677 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68651,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__68651)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68677);
} else {
return G__68677;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__68651),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__68651),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__68681 = arguments.length;
switch (G__68681) {
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k68687,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__68691 = k68687;
var G__68691__$1 = (((G__68691 instanceof cljs.core.Keyword))?G__68691.fqn:null);
switch (G__68691__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68687,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__68694){
var vec__68695 = p__68694;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68695,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68695,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68686){
var self__ = this;
var G__68686__$1 = this;
return (new cljs.core.RecordIter((0),G__68686__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68688,other68689){
var self__ = this;
var this68688__$1 = this;
return (((!((other68689 == null)))) && ((this68688__$1.constructor === other68689.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68688__$1.network,other68689.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68688__$1.options,other68689.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68688__$1.__extmap,other68689.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__68708 = self__.options;
var map__68708__$1 = (((((!((map__68708 == null))))?(((((map__68708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68708):map__68708);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68708__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__68708,map__68708__$1,___$1){
return (function (___$2,x){
return x;
});})(map__68708,map__68708__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68708__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__68708,map__68708__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__68708,map__68708__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68708__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__68708,map__68708__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__68708,map__68708__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68708__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__68714 = edn_SINGLEQUOTE_;
var G__68715 = ((function (G__68714,edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__68714,edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__68682_SHARP_){
var G__68717 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__68682_SHARP_) : transform_response.call(null,env,p1__68682_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__68717) : ok.call(null,G__68717));
});})(G__68714,edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__68714,edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__68683_SHARP_){
var G__68718 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__68683_SHARP_) : transform_error.call(null,env,p1__68683_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__68718) : error.call(null,G__68718));
});})(G__68714,edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__68714,edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__68714,G__68715) : transform_transmission.call(null,G__68714,G__68715));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__68684_SHARP_){
var G__68720 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__68684_SHARP_) : transform_response.call(null,env,p1__68684_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__68720) : ok.call(null,G__68720));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__68685_SHARP_){
var G__68722 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__68685_SHARP_) : transform_error.call(null,env,p1__68685_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__68722) : error.call(null,G__68722));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68708,map__68708__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
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
}catch (e68725){var ___$2 = e68725;
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__68686){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__68729 = cljs.core.keyword_identical_QMARK_;
var expr__68730 = k__4393__auto__;
if(cljs.core.truth_((pred__68729.cljs$core$IFn$_invoke$arity$2 ? pred__68729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__68730) : pred__68729.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__68730)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__68686,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68729.cljs$core$IFn$_invoke$arity$2 ? pred__68729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__68730) : pred__68729.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__68730)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__68686,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__68686),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__68686){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__68686,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__68690){
var extmap__4424__auto__ = (function (){var G__68735 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68690,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__68690)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68735);
} else {
return G__68735;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__68690),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__68690),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k68747,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__68756 = k68747;
var G__68756__$1 = (((G__68756 instanceof cljs.core.Keyword))?G__68756.fqn:null);
switch (G__68756__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k68747,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__68757){
var vec__68758 = p__68757;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68758,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68758,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__68746){
var self__ = this;
var G__68746__$1 = this;
return (new cljs.core.RecordIter((0),G__68746__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this68748,other68749){
var self__ = this;
var this68748__$1 = this;
return (((!((other68749 == null)))) && ((this68748__$1.constructor === other68749.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68748__$1.network,other68749.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68748__$1.options,other68749.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this68748__$1.__extmap,other68749.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e68772){var ___$2 = e68772;
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__68746){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__68778 = cljs.core.keyword_identical_QMARK_;
var expr__68779 = k__4393__auto__;
if(cljs.core.truth_((pred__68778.cljs$core$IFn$_invoke$arity$2 ? pred__68778.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__68779) : pred__68778.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__68779)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__68746,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68778.cljs$core$IFn$_invoke$arity$2 ? pred__68778.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__68779) : pred__68778.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__68779)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__68746,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__68746),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__68746){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__68746,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__68787){
var self__ = this;
var map__68788 = p__68787;
var map__68788__$1 = (((((!((map__68788 == null))))?(((((map__68788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68788):map__68788);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68788__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68788__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68788__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68788__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__68790 = self__.options;
var map__68790__$1 = (((((!((map__68790 == null))))?(((((map__68790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68790):map__68790);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68790__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__68790,map__68790__$1,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__68790,map__68790__$1,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68790__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__68790,map__68790__$1,transform_query,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__68790,map__68790__$1,transform_query,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68790__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__68790,map__68790__$1,transform_query,transform_response,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__68790,map__68790__$1,transform_query,transform_response,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68790__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__68790,map__68790__$1,transform_query,transform_response,transform_error,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__68790,map__68790__$1,transform_query,transform_response,transform_error,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68790__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68790__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__68797 = env;
var G__68798 = edn_SINGLEQUOTE_;
var G__68799 = ((function (G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__68801 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__68741_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__68741_SHARP_) : transform_response.call(null,env,p1__68741_SHARP_));
});})(G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__68801) : ok_handler.call(null,G__68801));
});})(G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__68805 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__68742_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__68742_SHARP_) : transform_error.call(null,env,p1__68742_SHARP_));
});})(G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__68805) : error_handler.call(null,G__68805));
});})(G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__68806 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__68806) : progress_handler.call(null,G__68806));
});})(G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__68797,G__68798,edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__68797,G__68798,G__68799) : transform_transmission.call(null,G__68797,G__68798,G__68799));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__68807 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__68743_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__68743_SHARP_) : transform_response.call(null,env,p1__68743_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__68807) : ok_handler.call(null,G__68807));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__68808 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__68745_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__68745_SHARP_) : transform_error.call(null,env,p1__68745_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__68808) : error_handler.call(null,G__68808));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__68810 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__68810) : progress_handler.call(null,G__68810));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__68790,map__68790__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__68788,map__68788__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__68753){
var extmap__4424__auto__ = (function (){var G__68815 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__68753,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__68753)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68815);
} else {
return G__68815;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__68753),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__68753),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__68820 = network;
var G__68820__$1 = (((G__68820 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__68820));
var G__68820__$2 = (((G__68820__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__68820__$1));
if((G__68820__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__68820__$2,app);
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
var G__68828 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68828,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,com.wsscode.pathom.fulcro.network.graphql_response_key(cljs.core.key(id_param)))]));
} else {
return G__68828;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__68831 = arguments.length;
switch (G__68831) {
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

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__68832){
var map__68834 = p__68832;
var map__68834__$1 = (((((!((map__68834 == null))))?(((((map__68834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68834):map__68834);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68834__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__68834,map__68834__$1,update_http_request){
return (function (this$,edn,ok,error){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,map__68834,map__68834__$1,update_http_request){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,map__68834,map__68834__$1,update_http_request){
return (function (state_68904){
var state_val_68905 = (state_68904[(1)]);
if((state_val_68905 === (7))){
var inst_68862 = (state_68904[(7)]);
var state_68904__$1 = state_68904;
var statearr_68910_69696 = state_68904__$1;
(statearr_68910_69696[(2)] = inst_68862);

(statearr_68910_69696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (1))){
var state_68904__$1 = state_68904;
var statearr_68912_69697 = state_68904__$1;
(statearr_68912_69697[(2)] = null);

(statearr_68912_69697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (4))){
var inst_68847 = (state_68904[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_68904,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_68842 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_68843 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_68844 = (new cljs.core.PersistentArrayMap(null,1,inst_68843,null));
var inst_68845 = (new cljs.core.PersistentHashSet(null,inst_68844,null));
var inst_68846 = com.wsscode.pathom.core.elide_ast_nodes(inst_68842,inst_68845);
var inst_68847__$1 = com.wsscode.pathom.core.ast__GT_query(inst_68846);
var inst_68848 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_68849 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_68850 = [inst_68849];
var inst_68852 = cljs.core.PersistentHashMap.fromArrays(inst_68848,inst_68850);
var inst_68853 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_68847__$1,inst_68852);
var inst_68857 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_68858 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_68859 = [inst_68853];
var inst_68860 = cljs.core.PersistentHashMap.fromArrays(inst_68858,inst_68859);
var inst_68861 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_68860];
var inst_68862 = cljs.core.PersistentHashMap.fromArrays(inst_68857,inst_68861);
var state_68904__$1 = (function (){var statearr_68918 = state_68904;
(statearr_68918[(8)] = inst_68847__$1);

(statearr_68918[(7)] = inst_68862);

return statearr_68918;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_68919_69703 = state_68904__$1;
(statearr_68919_69703[(1)] = (6));

} else {
var statearr_68920_69704 = state_68904__$1;
(statearr_68920_69704[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (15))){
var inst_68872 = (state_68904[(9)]);
var inst_68890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_68872);
var state_68904__$1 = state_68904;
var statearr_68927_69705 = state_68904__$1;
(statearr_68927_69705[(2)] = inst_68890);

(statearr_68927_69705[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (13))){
var state_68904__$1 = state_68904;
var statearr_68934_69706 = state_68904__$1;
(statearr_68934_69706[(2)] = false);

(statearr_68934_69706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (6))){
var inst_68862 = (state_68904[(7)]);
var inst_68864 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_68862) : update_http_request.call(null,inst_68862));
var state_68904__$1 = state_68904;
var statearr_68935_69707 = state_68904__$1;
(statearr_68935_69707[(2)] = inst_68864);

(statearr_68935_69707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (17))){
var inst_68847 = (state_68904[(8)]);
var inst_68893 = (state_68904[(2)]);
var inst_68894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68893,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_68895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_68893,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_68896 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_68897 = [inst_68894];
var inst_68898 = cljs.core.PersistentHashMap.fromArrays(inst_68896,inst_68897);
var inst_68899 = com.wsscode.pathom.fulcro.network.graphql_response_parser(inst_68898,inst_68847);
var inst_68900 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_68899) : ok.call(null,inst_68899));
var state_68904__$1 = (function (){var statearr_68941 = state_68904;
(statearr_68941[(10)] = inst_68895);

return statearr_68941;
})();
var statearr_68942_69708 = state_68904__$1;
(statearr_68942_69708[(2)] = inst_68900);


cljs.core.async.impl.ioc_helpers.process_exception(state_68904__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (3))){
var inst_68836 = (state_68904[(2)]);
var inst_68837 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_68836) : error.call(null,inst_68836));
var state_68904__$1 = state_68904;
var statearr_68944_69709 = state_68904__$1;
(statearr_68944_69709[(2)] = inst_68837);


cljs.core.async.impl.ioc_helpers.process_exception(state_68904__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (12))){
var state_68904__$1 = state_68904;
var statearr_68945_69710 = state_68904__$1;
(statearr_68945_69710[(2)] = true);

(statearr_68945_69710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (2))){
var inst_68902 = (state_68904[(2)]);
var state_68904__$1 = state_68904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68904__$1,inst_68902);
} else {
if((state_val_68905 === (11))){
var inst_68888 = (state_68904[(2)]);
var state_68904__$1 = state_68904;
if(cljs.core.truth_(inst_68888)){
var statearr_68946_69711 = state_68904__$1;
(statearr_68946_69711[(1)] = (15));

} else {
var statearr_68947_69712 = state_68904__$1;
(statearr_68947_69712[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (9))){
var inst_68872 = (state_68904[(9)]);
var inst_68877 = inst_68872.cljs$lang$protocol_mask$partition0$;
var inst_68878 = (inst_68877 & (64));
var inst_68879 = inst_68872.cljs$core$ISeq$;
var inst_68880 = (cljs.core.PROTOCOL_SENTINEL === inst_68879);
var inst_68881 = ((inst_68878) || (inst_68880));
var state_68904__$1 = state_68904;
if(cljs.core.truth_(inst_68881)){
var statearr_68948_69713 = state_68904__$1;
(statearr_68948_69713[(1)] = (12));

} else {
var statearr_68949_69714 = state_68904__$1;
(statearr_68949_69714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (5))){
var inst_68872 = (state_68904[(9)]);
var inst_68870 = (state_68904[(2)]);
var inst_68871 = com.wsscode.common.async_cljs.throw_err(inst_68870);
var inst_68872__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_68871);
var inst_68874 = (inst_68872__$1 == null);
var inst_68875 = cljs.core.not(inst_68874);
var state_68904__$1 = (function (){var statearr_68953 = state_68904;
(statearr_68953[(9)] = inst_68872__$1);

return statearr_68953;
})();
if(inst_68875){
var statearr_68954_69718 = state_68904__$1;
(statearr_68954_69718[(1)] = (9));

} else {
var statearr_68956_69719 = state_68904__$1;
(statearr_68956_69719[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (14))){
var inst_68885 = (state_68904[(2)]);
var state_68904__$1 = state_68904;
var statearr_68957_69721 = state_68904__$1;
(statearr_68957_69721[(2)] = inst_68885);

(statearr_68957_69721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (16))){
var inst_68872 = (state_68904[(9)]);
var state_68904__$1 = state_68904;
var statearr_68963_69723 = state_68904__$1;
(statearr_68963_69723[(2)] = inst_68872);

(statearr_68963_69723[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (10))){
var state_68904__$1 = state_68904;
var statearr_68967_69724 = state_68904__$1;
(statearr_68967_69724[(2)] = false);

(statearr_68967_69724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68905 === (8))){
var inst_68867 = (state_68904[(2)]);
var inst_68868 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_68867);
var state_68904__$1 = state_68904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68904__$1,(5),inst_68868);
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
});})(c__45808__auto__,map__68834,map__68834__$1,update_http_request))
;
return ((function (switch__45525__auto__,c__45808__auto__,map__68834,map__68834__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0 = (function (){
var statearr_68983 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68983[(0)] = com$wsscode$pathom$fulcro$network$state_machine__45526__auto__);

(statearr_68983[(1)] = (1));

return statearr_68983;
});
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1 = (function (state_68904){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_68904);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e68991){if((e68991 instanceof Object)){
var ex__45529__auto__ = e68991;
var statearr_68994_69730 = state_68904;
(statearr_68994_69730[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68991;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69731 = state_68904;
state_68904 = G__69731;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__ = function(state_68904){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1.call(this,state_68904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,map__68834,map__68834__$1,update_http_request))
})();
var state__45810__auto__ = (function (){var statearr_68999 = f__45809__auto__();
(statearr_68999[(6)] = c__45808__auto__);

return statearr_68999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,map__68834,map__68834__$1,update_http_request))
);

return c__45808__auto__;
});})(map__68834,map__68834__$1,update_http_request))
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

var G__69051 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__69051,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,simple_keyword(cljs.core.key(id_param)))]));
} else {
return G__69051;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__69081 = arguments.length;
switch (G__69081) {
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
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_69183){
var state_val_69185 = (state_69183[(1)]);
if((state_val_69185 === (7))){
var state_69183__$1 = state_69183;
var statearr_69189_69768 = state_69183__$1;
(statearr_69189_69768[(2)] = false);

(statearr_69189_69768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (1))){
var state_69183__$1 = state_69183;
var statearr_69191_69769 = state_69183__$1;
(statearr_69191_69769[(2)] = null);

(statearr_69191_69769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (4))){
var inst_69131 = (state_69183[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_69183,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_69126 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_69127 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_69128 = (new cljs.core.PersistentArrayMap(null,1,inst_69127,null));
var inst_69129 = (new cljs.core.PersistentHashSet(null,inst_69128,null));
var inst_69130 = com.wsscode.pathom.core.elide_ast_nodes(inst_69126,inst_69129);
var inst_69131__$1 = com.wsscode.pathom.core.ast__GT_query(inst_69130);
var inst_69132 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_69133 = [fulcro.client.primitives.tempid_QMARK_];
var inst_69134 = cljs.core.PersistentHashMap.fromArrays(inst_69132,inst_69133);
var inst_69135 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_69134,config], 0));
var inst_69136 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_69131__$1,inst_69135);
var inst_69137 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_69138 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_69139 = [inst_69136];
var inst_69140 = cljs.core.PersistentHashMap.fromArrays(inst_69138,inst_69139);
var inst_69141 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_69140];
var inst_69142 = cljs.core.PersistentHashMap.fromArrays(inst_69137,inst_69141);
var inst_69143 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_69142);
var state_69183__$1 = (function (){var statearr_69195 = state_69183;
(statearr_69195[(7)] = inst_69131__$1);

return statearr_69195;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_69183__$1,(5),inst_69143);
} else {
if((state_val_69185 === (13))){
var inst_69147 = (state_69183[(8)]);
var state_69183__$1 = state_69183;
var statearr_69198_69776 = state_69183__$1;
(statearr_69198_69776[(2)] = inst_69147);

(statearr_69198_69776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (6))){
var inst_69147 = (state_69183[(8)]);
var inst_69155 = inst_69147.cljs$lang$protocol_mask$partition0$;
var inst_69156 = (inst_69155 & (64));
var inst_69157 = inst_69147.cljs$core$ISeq$;
var inst_69158 = (cljs.core.PROTOCOL_SENTINEL === inst_69157);
var inst_69159 = ((inst_69156) || (inst_69158));
var state_69183__$1 = state_69183;
if(cljs.core.truth_(inst_69159)){
var statearr_69203_69778 = state_69183__$1;
(statearr_69203_69778[(1)] = (9));

} else {
var statearr_69204_69779 = state_69183__$1;
(statearr_69204_69779[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (3))){
var inst_69119 = (state_69183[(2)]);
var inst_69121 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_69119) : error.call(null,inst_69119));
var state_69183__$1 = state_69183;
var statearr_69209_69781 = state_69183__$1;
(statearr_69209_69781[(2)] = inst_69121);


cljs.core.async.impl.ioc_helpers.process_exception(state_69183__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (12))){
var inst_69147 = (state_69183[(8)]);
var inst_69169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_69147);
var state_69183__$1 = state_69183;
var statearr_69212_69783 = state_69183__$1;
(statearr_69212_69783[(2)] = inst_69169);

(statearr_69212_69783[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (2))){
var inst_69181 = (state_69183[(2)]);
var state_69183__$1 = state_69183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_69183__$1,inst_69181);
} else {
if((state_val_69185 === (11))){
var inst_69164 = (state_69183[(2)]);
var state_69183__$1 = state_69183;
var statearr_69215_69785 = state_69183__$1;
(statearr_69215_69785[(2)] = inst_69164);

(statearr_69215_69785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (9))){
var state_69183__$1 = state_69183;
var statearr_69218_69787 = state_69183__$1;
(statearr_69218_69787[(2)] = true);

(statearr_69218_69787[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (5))){
var inst_69147 = (state_69183[(8)]);
var inst_69145 = (state_69183[(2)]);
var inst_69146 = com.wsscode.common.async_cljs.throw_err(inst_69145);
var inst_69147__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_69146);
var inst_69151 = (inst_69147__$1 == null);
var inst_69152 = cljs.core.not(inst_69151);
var state_69183__$1 = (function (){var statearr_69222 = state_69183;
(statearr_69222[(8)] = inst_69147__$1);

return statearr_69222;
})();
if(inst_69152){
var statearr_69223_69789 = state_69183__$1;
(statearr_69223_69789[(1)] = (6));

} else {
var statearr_69224_69791 = state_69183__$1;
(statearr_69224_69791[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (14))){
var inst_69131 = (state_69183[(7)]);
var inst_69172 = (state_69183[(2)]);
var inst_69173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69172,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_69174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_69172,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_69175 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_69176 = [inst_69173];
var inst_69177 = cljs.core.PersistentHashMap.fromArrays(inst_69175,inst_69176);
var inst_69178 = com.wsscode.pathom.fulcro.network.graphql_response_parser2(inst_69177,inst_69131);
var inst_69179 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_69178) : ok.call(null,inst_69178));
var state_69183__$1 = (function (){var statearr_69225 = state_69183;
(statearr_69225[(9)] = inst_69174);

return statearr_69225;
})();
var statearr_69226_69795 = state_69183__$1;
(statearr_69226_69795[(2)] = inst_69179);


cljs.core.async.impl.ioc_helpers.process_exception(state_69183__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (10))){
var state_69183__$1 = state_69183;
var statearr_69229_69797 = state_69183__$1;
(statearr_69229_69797[(2)] = false);

(statearr_69229_69797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69185 === (8))){
var inst_69167 = (state_69183[(2)]);
var state_69183__$1 = state_69183;
if(cljs.core.truth_(inst_69167)){
var statearr_69231_69798 = state_69183__$1;
(statearr_69231_69798[(1)] = (12));

} else {
var statearr_69232_69799 = state_69183__$1;
(statearr_69232_69799[(1)] = (13));

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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0 = (function (){
var statearr_69235 = [null,null,null,null,null,null,null,null,null,null];
(statearr_69235[(0)] = com$wsscode$pathom$fulcro$network$state_machine__45526__auto__);

(statearr_69235[(1)] = (1));

return statearr_69235;
});
var com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1 = (function (state_69183){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_69183);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e69236){if((e69236 instanceof Object)){
var ex__45529__auto__ = e69236;
var statearr_69238_69803 = state_69183;
(statearr_69238_69803[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_69183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69804 = state_69183;
state_69183 = G__69804;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__ = function(state_69183){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1.call(this,state_69183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__45526__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__45526__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_69239 = f__45809__auto__();
(statearr_69239[(6)] = c__45808__auto__);

return statearr_69239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
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
var G__69808__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__69246_69810 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69246_69810) : f.call(null,G__69246_69810));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__69808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69811__i = 0, G__69811__a = new Array(arguments.length -  0);
while (G__69811__i < G__69811__a.length) {G__69811__a[G__69811__i] = arguments[G__69811__i + 0]; ++G__69811__i;}
  args = new cljs.core.IndexedSeq(G__69811__a,0,null);
} 
return G__69808__delegate.call(this,args);};
G__69808.cljs$lang$maxFixedArity = 0;
G__69808.cljs$lang$applyTo = (function (arglist__69812){
var args = cljs.core.seq(arglist__69812);
return G__69808__delegate(args);
});
G__69808.cljs$core$IFn$_invoke$arity$variadic = G__69808__delegate;
return G__69808;
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
var vec__69251 = requests;
var seq__69252 = cljs.core.seq(vec__69251);
var first__69253 = cljs.core.first(seq__69252);
var seq__69252__$1 = cljs.core.next(seq__69252);
var vec__69254 = first__69253;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69254,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69254,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69254,(2),null);
var tail = seq__69252__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__69279 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69279,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69279,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69279,(2),null);
var req = vec__69279;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__69830 = cljs.core.next(left);
var G__69831 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__69832 = current;
var G__69833 = next_cycle;
left = G__69830;
groups__$1 = G__69831;
current = G__69832;
next_cycle = G__69833;
continue;
} else {
var G__69853 = cljs.core.next(left);
var G__69854 = groups__$1;
var G__69855 = current;
var G__69856 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__69853;
groups__$1 = G__69854;
current = G__69855;
next_cycle = G__69856;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__69285 = next_cycle;
var seq__69286 = cljs.core.seq(vec__69285);
var first__69287 = cljs.core.first(seq__69286);
var seq__69286__$1 = cljs.core.next(seq__69286);
var vec__69288 = first__69287;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69288,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69288,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69288,(2),null);
var tail__$1 = seq__69286__$1;
var G__69866 = tail__$1;
var G__69867 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__69868 = (current + (1));
var G__69869 = cljs.core.PersistentVector.EMPTY;
left = G__69866;
groups__$1 = G__69867;
current = G__69868;
next_cycle = G__69869;
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
return com.wsscode.pathom.fulcro.network.debounce((function (p1__69294_SHARP_){
var G__69298 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__69294_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__69298) : f.call(null,G__69298));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k69303,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__69317 = k69303;
var G__69317__$1 = (((G__69317 instanceof cljs.core.Keyword))?G__69317.fqn:null);
switch (G__69317__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k69303,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__69322){
var vec__69323 = p__69322;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69323,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69323,(1),null);
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__69302){
var self__ = this;
var G__69302__$1 = this;
return (new cljs.core.RecordIter((0),G__69302__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this69304,other69305){
var self__ = this;
var this69304__$1 = this;
return (((!((other69305 == null)))) && ((this69304__$1.constructor === other69305.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69304__$1.send_fn,other69305.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this69304__$1.__extmap,other69305.__extmap)));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__69302){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__69352 = cljs.core.keyword_identical_QMARK_;
var expr__69353 = k__4393__auto__;
if(cljs.core.truth_((pred__69352.cljs$core$IFn$_invoke$arity$2 ? pred__69352.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__69353) : pred__69352.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__69353)))){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__69302,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__69302),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__69302){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__69302,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__69309){
var extmap__4424__auto__ = (function (){var G__69364 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__69309,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__69309)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__69364);
} else {
return G__69364;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__69309),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__69371 = arguments.length;
switch (G__69371) {
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
var seq__69376 = cljs.core.seq(reqs);
var chunk__69377 = null;
var count__69378 = (0);
var i__69379 = (0);
while(true){
if((i__69379 < count__69378)){
var map__69459 = chunk__69377.cljs$core$IIndexed$_nth$arity$2(null,i__69379);
var map__69459__$1 = (((((!((map__69459 == null))))?(((((map__69459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69459):map__69459);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69459__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69459__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69459__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__69376,chunk__69377,count__69378,i__69379,map__69459,map__69459__$1,query,ok,err){
return (function (p1__69366_SHARP_){
var seq__69465 = cljs.core.seq(ok);
var chunk__69466 = null;
var count__69467 = (0);
var i__69468 = (0);
while(true){
if((i__69468 < count__69467)){
var f = chunk__69466.cljs$core$IIndexed$_nth$arity$2(null,i__69468);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69366_SHARP_) : f.call(null,p1__69366_SHARP_));


var G__70037 = seq__69465;
var G__70038 = chunk__69466;
var G__70039 = count__69467;
var G__70040 = (i__69468 + (1));
seq__69465 = G__70037;
chunk__69466 = G__70038;
count__69467 = G__70039;
i__69468 = G__70040;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69465);
if(temp__5720__auto__){
var seq__69465__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69465__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69465__$1);
var G__70042 = cljs.core.chunk_rest(seq__69465__$1);
var G__70043 = c__4550__auto__;
var G__70044 = cljs.core.count(c__4550__auto__);
var G__70045 = (0);
seq__69465 = G__70042;
chunk__69466 = G__70043;
count__69467 = G__70044;
i__69468 = G__70045;
continue;
} else {
var f = cljs.core.first(seq__69465__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69366_SHARP_) : f.call(null,p1__69366_SHARP_));


var G__70047 = cljs.core.next(seq__69465__$1);
var G__70048 = null;
var G__70049 = (0);
var G__70050 = (0);
seq__69465 = G__70047;
chunk__69466 = G__70048;
count__69467 = G__70049;
i__69468 = G__70050;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__69376,chunk__69377,count__69378,i__69379,map__69459,map__69459__$1,query,ok,err))
,((function (seq__69376,chunk__69377,count__69378,i__69379,map__69459,map__69459__$1,query,ok,err){
return (function (p1__69367_SHARP_){
var seq__69476 = cljs.core.seq(err);
var chunk__69477 = null;
var count__69478 = (0);
var i__69479 = (0);
while(true){
if((i__69479 < count__69478)){
var f = chunk__69477.cljs$core$IIndexed$_nth$arity$2(null,i__69479);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69367_SHARP_) : f.call(null,p1__69367_SHARP_));


var G__70054 = seq__69476;
var G__70055 = chunk__69477;
var G__70056 = count__69478;
var G__70057 = (i__69479 + (1));
seq__69476 = G__70054;
chunk__69477 = G__70055;
count__69478 = G__70056;
i__69479 = G__70057;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69476);
if(temp__5720__auto__){
var seq__69476__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69476__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69476__$1);
var G__70058 = cljs.core.chunk_rest(seq__69476__$1);
var G__70059 = c__4550__auto__;
var G__70060 = cljs.core.count(c__4550__auto__);
var G__70061 = (0);
seq__69476 = G__70058;
chunk__69477 = G__70059;
count__69478 = G__70060;
i__69479 = G__70061;
continue;
} else {
var f = cljs.core.first(seq__69476__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69367_SHARP_) : f.call(null,p1__69367_SHARP_));


var G__70062 = cljs.core.next(seq__69476__$1);
var G__70063 = null;
var G__70064 = (0);
var G__70065 = (0);
seq__69476 = G__70062;
chunk__69477 = G__70063;
count__69478 = G__70064;
i__69479 = G__70065;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__69376,chunk__69377,count__69378,i__69379,map__69459,map__69459__$1,query,ok,err))
);


var G__70067 = seq__69376;
var G__70068 = chunk__69377;
var G__70069 = count__69378;
var G__70070 = (i__69379 + (1));
seq__69376 = G__70067;
chunk__69377 = G__70068;
count__69378 = G__70069;
i__69379 = G__70070;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__69376);
if(temp__5720__auto__){
var seq__69376__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69376__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69376__$1);
var G__70071 = cljs.core.chunk_rest(seq__69376__$1);
var G__70072 = c__4550__auto__;
var G__70073 = cljs.core.count(c__4550__auto__);
var G__70074 = (0);
seq__69376 = G__70071;
chunk__69377 = G__70072;
count__69378 = G__70073;
i__69379 = G__70074;
continue;
} else {
var map__69503 = cljs.core.first(seq__69376__$1);
var map__69503__$1 = (((((!((map__69503 == null))))?(((((map__69503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69503):map__69503);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69503__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69503__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69503__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__69376,chunk__69377,count__69378,i__69379,map__69503,map__69503__$1,query,ok,err,seq__69376__$1,temp__5720__auto__){
return (function (p1__69366_SHARP_){
var seq__69506 = cljs.core.seq(ok);
var chunk__69507 = null;
var count__69508 = (0);
var i__69509 = (0);
while(true){
if((i__69509 < count__69508)){
var f = chunk__69507.cljs$core$IIndexed$_nth$arity$2(null,i__69509);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69366_SHARP_) : f.call(null,p1__69366_SHARP_));


var G__70081 = seq__69506;
var G__70082 = chunk__69507;
var G__70083 = count__69508;
var G__70084 = (i__69509 + (1));
seq__69506 = G__70081;
chunk__69507 = G__70082;
count__69508 = G__70083;
i__69509 = G__70084;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__69506);
if(temp__5720__auto____$1){
var seq__69506__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__69506__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69506__$1);
var G__70086 = cljs.core.chunk_rest(seq__69506__$1);
var G__70087 = c__4550__auto__;
var G__70088 = cljs.core.count(c__4550__auto__);
var G__70089 = (0);
seq__69506 = G__70086;
chunk__69507 = G__70087;
count__69508 = G__70088;
i__69509 = G__70089;
continue;
} else {
var f = cljs.core.first(seq__69506__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69366_SHARP_) : f.call(null,p1__69366_SHARP_));


var G__70091 = cljs.core.next(seq__69506__$1);
var G__70092 = null;
var G__70093 = (0);
var G__70094 = (0);
seq__69506 = G__70091;
chunk__69507 = G__70092;
count__69508 = G__70093;
i__69509 = G__70094;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__69376,chunk__69377,count__69378,i__69379,map__69503,map__69503__$1,query,ok,err,seq__69376__$1,temp__5720__auto__))
,((function (seq__69376,chunk__69377,count__69378,i__69379,map__69503,map__69503__$1,query,ok,err,seq__69376__$1,temp__5720__auto__){
return (function (p1__69367_SHARP_){
var seq__69519 = cljs.core.seq(err);
var chunk__69520 = null;
var count__69521 = (0);
var i__69522 = (0);
while(true){
if((i__69522 < count__69521)){
var f = chunk__69520.cljs$core$IIndexed$_nth$arity$2(null,i__69522);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69367_SHARP_) : f.call(null,p1__69367_SHARP_));


var G__70097 = seq__69519;
var G__70098 = chunk__69520;
var G__70099 = count__69521;
var G__70100 = (i__69522 + (1));
seq__69519 = G__70097;
chunk__69520 = G__70098;
count__69521 = G__70099;
i__69522 = G__70100;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__69519);
if(temp__5720__auto____$1){
var seq__69519__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__69519__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__69519__$1);
var G__70102 = cljs.core.chunk_rest(seq__69519__$1);
var G__70103 = c__4550__auto__;
var G__70104 = cljs.core.count(c__4550__auto__);
var G__70105 = (0);
seq__69519 = G__70102;
chunk__69520 = G__70103;
count__69521 = G__70104;
i__69522 = G__70105;
continue;
} else {
var f = cljs.core.first(seq__69519__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__69367_SHARP_) : f.call(null,p1__69367_SHARP_));


var G__70106 = cljs.core.next(seq__69519__$1);
var G__70107 = null;
var G__70108 = (0);
var G__70109 = (0);
seq__69519 = G__70106;
chunk__69520 = G__70107;
count__69521 = G__70108;
i__69522 = G__70109;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__69376,chunk__69377,count__69378,i__69379,map__69503,map__69503__$1,query,ok,err,seq__69376__$1,temp__5720__auto__))
);


var G__70111 = cljs.core.next(seq__69376__$1);
var G__70112 = null;
var G__70113 = (0);
var G__70114 = (0);
seq__69376 = G__70111;
chunk__69377 = G__70112;
count__69378 = G__70113;
i__69379 = G__70114;
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
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__69538){
var map__69540 = p__69538;
var map__69540__$1 = (((((!((map__69540 == null))))?(((((map__69540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69540):map__69540);
var env = map__69540__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69540__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__69543 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69543,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69543,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
