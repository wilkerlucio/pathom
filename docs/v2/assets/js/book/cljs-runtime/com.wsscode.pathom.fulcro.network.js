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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49386,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49418 = k49386;
var G__49418__$1 = (((G__49418 instanceof cljs.core.Keyword))?G__49418.fqn:null);
switch (G__49418__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49386,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49419){
var vec__49424 = p__49419;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49424,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49424,(1),null);
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49385){
var self__ = this;
var G__49385__$1 = this;
return (new cljs.core.RecordIter((0),G__49385__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49432 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-654270555 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49432(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49387,other49388){
var self__ = this;
var this49387__$1 = this;
return (((!((other49388 == null)))) && ((this49387__$1.constructor === other49388.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49387__$1.parser,other49388.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49387__$1.__extmap,other49388.__extmap)));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49385){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49440 = cljs.core.keyword_identical_QMARK_;
var expr__49441 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49445 = new cljs.core.Keyword(null,"parser","parser",-1543495310);
var G__49446 = expr__49441;
return (pred__49440.cljs$core$IFn$_invoke$arity$2 ? pred__49440.cljs$core$IFn$_invoke$arity$2(G__49445,G__49446) : pred__49440.call(null,G__49445,G__49446));
})())){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__49385,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49385),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49385){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__49385,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__49450){
var self__ = this;
var map__49451 = p__49450;
var map__49451__$1 = (((((!((map__49451 == null))))?(((((map__49451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49451):map__49451);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49451__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,this$__$1,map__49451,map__49451__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,this$__$1,map__49451,map__49451__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_49479){
var state_val_49480 = (state_49479[(1)]);
if((state_val_49480 === (1))){
var state_49479__$1 = state_49479;
var statearr_49487_50530 = state_49479__$1;
(statearr_49487_50530[(2)] = null);

(statearr_49487_50530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (2))){
var inst_49477 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49479__$1,inst_49477);
} else {
if((state_val_49480 === (3))){
var inst_49453 = (state_49479[(2)]);
var inst_49454 = console.error("PathomRemote error:",inst_49453);
var inst_49455 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49456 = [inst_49453];
var inst_49457 = cljs.core.PersistentHashMap.fromArrays(inst_49455,inst_49456);
var inst_49458 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_49457) : error_handler.call(null,inst_49457));
var state_49479__$1 = (function (){var statearr_49494 = state_49479;
(statearr_49494[(7)] = inst_49454);

return statearr_49494;
})();
var statearr_49495_50534 = state_49479__$1;
(statearr_49495_50534[(2)] = inst_49458);


cljs.core.async.impl.ioc_helpers.process_exception(state_49479__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (4))){
var inst_49464 = (state_49479[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49479,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49462 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49463 = cljs.core.PersistentHashMap.EMPTY;
var inst_49464__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_49463,edn) : self__.parser.call(null,inst_49463,edn));
var inst_49465 = com.wsscode.common.async_cljs.chan_QMARK_(inst_49464__$1);
var state_49479__$1 = (function (){var statearr_49500 = state_49479;
(statearr_49500[(9)] = inst_49462);

(statearr_49500[(8)] = inst_49464__$1);

return statearr_49500;
})();
if(inst_49465){
var statearr_49501_50536 = state_49479__$1;
(statearr_49501_50536[(1)] = (5));

} else {
var statearr_49502_50537 = state_49479__$1;
(statearr_49502_50537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (5))){
var inst_49464 = (state_49479[(8)]);
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49479__$1,(8),inst_49464);
} else {
if((state_val_49480 === (6))){
var inst_49464 = (state_49479[(8)]);
var state_49479__$1 = state_49479;
var statearr_49504_50538 = state_49479__$1;
(statearr_49504_50538[(2)] = inst_49464);

(statearr_49504_50538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (7))){
var inst_49462 = (state_49479[(9)]);
var inst_49472 = (state_49479[(2)]);
var inst_49473 = [edn,inst_49472];
var inst_49474 = cljs.core.PersistentHashMap.fromArrays(inst_49462,inst_49473);
var inst_49475 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_49474) : ok_handler.call(null,inst_49474));
var state_49479__$1 = state_49479;
var statearr_49505_50539 = state_49479__$1;
(statearr_49505_50539[(2)] = inst_49475);


cljs.core.async.impl.ioc_helpers.process_exception(state_49479__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (8))){
var inst_49468 = (state_49479[(2)]);
var inst_49469 = com.wsscode.common.async_cljs.throw_err(inst_49468);
var state_49479__$1 = state_49479;
var statearr_49506_50540 = state_49479__$1;
(statearr_49506_50540[(2)] = inst_49469);

(statearr_49506_50540[(1)] = (7));


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
});})(c__38971__auto__,this$__$1,map__49451,map__49451__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__38924__auto__,c__38971__auto__,this$__$1,map__49451,map__49451__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0 = (function (){
var statearr_49507 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49507[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38925__auto__);

(statearr_49507[(1)] = (1));

return statearr_49507;
});
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1 = (function (state_49479){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_49479);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e49508){if((e49508 instanceof Object)){
var ex__38928__auto__ = e49508;
var statearr_49510_50543 = state_49479;
(statearr_49510_50543[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50545 = state_49479;
state_49479 = G__50545;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__ = function(state_49479){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1.call(this,state_49479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,this$__$1,map__49451,map__49451__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__38973__auto__ = (function (){var statearr_49511 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_49511[(6)] = c__38971__auto__);

return statearr_49511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,this$__$1,map__49451,map__49451__$1,edn,ok_handler,error_handler,progress_handler))
);

return c__38971__auto__;
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
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__49404){
var extmap__4424__auto__ = (function (){var G__49518 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49404,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__49404)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49518);
} else {
return G__49518;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__49404),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49523,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49533 = k49523;
var G__49533__$1 = (((G__49533 instanceof cljs.core.Keyword))?G__49533.fqn:null);
switch (G__49533__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49523,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49537){
var vec__49538 = p__49537;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49538,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49538,(1),null);
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49522){
var self__ = this;
var G__49522__$1 = this;
return (new cljs.core.RecordIter((0),G__49522__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49543 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1603683175 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49543(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49524,other49525){
var self__ = this;
var this49524__$1 = this;
return (((!((other49525 == null)))) && ((this49524__$1.constructor === other49525.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49524__$1.f,other49525.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49524__$1.serialize_QMARK_,other49525.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49524__$1.__extmap,other49525.__extmap)));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49522){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49551 = cljs.core.keyword_identical_QMARK_;
var expr__49552 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49554 = new cljs.core.Keyword(null,"f","f",-1597136552);
var G__49555 = expr__49552;
return (pred__49551.cljs$core$IFn$_invoke$arity$2 ? pred__49551.cljs$core$IFn$_invoke$arity$2(G__49554,G__49555) : pred__49551.call(null,G__49554,G__49555));
})())){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__49522,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49556 = new cljs.core.Keyword(null,"serialize?","serialize?",1512776885);
var G__49557 = expr__49552;
return (pred__49551.cljs$core$IFn$_invoke$arity$2 ? pred__49551.cljs$core$IFn$_invoke$arity$2(G__49556,G__49557) : pred__49551.call(null,G__49556,G__49557));
})())){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__49522,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49522),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49522){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__49522,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__49529){
var extmap__4424__auto__ = (function (){var G__49569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49529,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__49529)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49569);
} else {
return G__49569;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__49529),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__49529),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__49571 = arguments.length;
switch (G__49571) {
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49581,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49592 = k49581;
var G__49592__$1 = (((G__49592 instanceof cljs.core.Keyword))?G__49592.fqn:null);
switch (G__49592__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49581,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49597){
var vec__49599 = p__49597;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49599,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49599,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49580){
var self__ = this;
var G__49580__$1 = this;
return (new cljs.core.RecordIter((0),G__49580__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49616 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-928703448 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49616(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49582,other49583){
var self__ = this;
var this49582__$1 = this;
return (((!((other49583 == null)))) && ((this49582__$1.constructor === other49583.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49582__$1.network,other49583.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49582__$1.options,other49583.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49582__$1.__extmap,other49583.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__49625 = self__.options;
var map__49625__$1 = (((((!((map__49625 == null))))?(((((map__49625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49625):map__49625);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49625__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__49625,map__49625__$1,___$1){
return (function (___$2,x){
return x;
});})(map__49625,map__49625__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49625__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__49625,map__49625__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__49625,map__49625__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49625__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__49625,map__49625__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__49625,map__49625__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49625__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49625__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__49629 = edn_SINGLEQUOTE_;
var G__49630 = ((function (G__49629,edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__49629,edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49575_SHARP_){
var G__49632 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49575_SHARP_) : transform_response.call(null,env,p1__49575_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__49632) : ok.call(null,G__49632));
});})(G__49629,edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__49629,edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49576_SHARP_){
var G__49633 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49576_SHARP_) : transform_error.call(null,env,p1__49576_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__49633) : error.call(null,G__49633));
});})(G__49629,edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__49629,edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__49629,G__49630) : transform_transmission.call(null,G__49629,G__49630));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49577_SHARP_){
var G__49634 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49577_SHARP_) : transform_response.call(null,env,p1__49577_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__49634) : ok.call(null,G__49634));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49578_SHARP_){
var G__49635 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49578_SHARP_) : transform_error.call(null,env,p1__49578_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__49635) : error.call(null,G__49635));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49625,map__49625__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
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
}catch (e49638){var ___$2 = e49638;
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49580){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49643 = cljs.core.keyword_identical_QMARK_;
var expr__49644 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49646 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__49647 = expr__49644;
return (pred__49643.cljs$core$IFn$_invoke$arity$2 ? pred__49643.cljs$core$IFn$_invoke$arity$2(G__49646,G__49647) : pred__49643.call(null,G__49646,G__49647));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__49580,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49648 = new cljs.core.Keyword(null,"options","options",99638489);
var G__49649 = expr__49644;
return (pred__49643.cljs$core$IFn$_invoke$arity$2 ? pred__49643.cljs$core$IFn$_invoke$arity$2(G__49648,G__49649) : pred__49643.call(null,G__49648,G__49649));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__49580,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49580),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49580){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__49580,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__49586){
var extmap__4424__auto__ = (function (){var G__49660 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49586,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__49586)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49660);
} else {
return G__49660;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__49586),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49586),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49669,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49681 = k49669;
var G__49681__$1 = (((G__49681 instanceof cljs.core.Keyword))?G__49681.fqn:null);
switch (G__49681__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49669,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49685){
var vec__49686 = p__49685;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49686,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49686,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49668){
var self__ = this;
var G__49668__$1 = this;
return (new cljs.core.RecordIter((0),G__49668__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49695 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1483300891 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49695(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49670,other49671){
var self__ = this;
var this49670__$1 = this;
return (((!((other49671 == null)))) && ((this49670__$1.constructor === other49671.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49670__$1.network,other49671.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49670__$1.options,other49671.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49670__$1.__extmap,other49671.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e49705){var ___$2 = e49705;
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49668){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49711 = cljs.core.keyword_identical_QMARK_;
var expr__49712 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49714 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__49715 = expr__49712;
return (pred__49711.cljs$core$IFn$_invoke$arity$2 ? pred__49711.cljs$core$IFn$_invoke$arity$2(G__49714,G__49715) : pred__49711.call(null,G__49714,G__49715));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__49668,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49721 = new cljs.core.Keyword(null,"options","options",99638489);
var G__49722 = expr__49712;
return (pred__49711.cljs$core$IFn$_invoke$arity$2 ? pred__49711.cljs$core$IFn$_invoke$arity$2(G__49721,G__49722) : pred__49711.call(null,G__49721,G__49722));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__49668,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49668),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49668){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__49668,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__49724){
var self__ = this;
var map__49725 = p__49724;
var map__49725__$1 = (((((!((map__49725 == null))))?(((((map__49725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49725):map__49725);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49725__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__49730 = self__.options;
var map__49730__$1 = (((((!((map__49730 == null))))?(((((map__49730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49730):map__49730);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49730__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__49730,map__49730__$1,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49730,map__49730__$1,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49730__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__49730,map__49730__$1,transform_query,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49730,map__49730__$1,transform_query,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49730__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__49730,map__49730__$1,transform_query,transform_response,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49730,map__49730__$1,transform_query,transform_response,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49730__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__49730,map__49730__$1,transform_query,transform_response,transform_error,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49730,map__49730__$1,transform_query,transform_response,transform_error,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49730__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49730__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__49762 = env;
var G__49763 = edn_SINGLEQUOTE_;
var G__49764 = ((function (G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__49789 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49663_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49663_SHARP_) : transform_response.call(null,env,p1__49663_SHARP_));
});})(G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__49789) : ok_handler.call(null,G__49789));
});})(G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__49801 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49664_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49664_SHARP_) : transform_error.call(null,env,p1__49664_SHARP_));
});})(G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__49801) : error_handler.call(null,G__49801));
});})(G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__49820 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__49820) : progress_handler.call(null,G__49820));
});})(G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__49762,G__49763,edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__49762,G__49763,G__49764) : transform_transmission.call(null,G__49762,G__49763,G__49764));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__49833 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49666_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49666_SHARP_) : transform_response.call(null,env,p1__49666_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__49833) : ok_handler.call(null,G__49833));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__49850 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49667_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49667_SHARP_) : transform_error.call(null,env,p1__49667_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__49850) : error_handler.call(null,G__49850));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__49874 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__49874) : progress_handler.call(null,G__49874));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49730,map__49730__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49725,map__49725__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__49673){
var extmap__4424__auto__ = (function (){var G__49886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49673,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__49673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49886);
} else {
return G__49886;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__49673),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49673),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__49897 = network;
var G__49897__$1 = (((G__49897 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49897));
var G__49897__$2 = (((G__49897__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__49897__$1));
if((G__49897__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__49897__$2,app);
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
var G__49910 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49910,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,(function (){var G__49911 = cljs.core.key(id_param);
return (com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1(G__49911) : com.wsscode.pathom.fulcro.network.graphql_response_key.call(null,G__49911));
})())]));
} else {
return G__49910;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__49917 = arguments.length;
switch (G__49917) {
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

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__49921){
var map__49922 = p__49921;
var map__49922__$1 = (((((!((map__49922 == null))))?(((((map__49922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49922):map__49922);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49922__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__49922,map__49922__$1,update_http_request){
return (function (this$,edn,ok,error){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__49922,map__49922__$1,update_http_request){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__49922,map__49922__$1,update_http_request){
return (function (state_49998){
var state_val_49999 = (state_49998[(1)]);
if((state_val_49999 === (7))){
var inst_49953 = (state_49998[(7)]);
var state_49998__$1 = state_49998;
var statearr_50003_50902 = state_49998__$1;
(statearr_50003_50902[(2)] = inst_49953);

(statearr_50003_50902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (1))){
var state_49998__$1 = state_49998;
var statearr_50005_50903 = state_49998__$1;
(statearr_50005_50903[(2)] = null);

(statearr_50005_50903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (4))){
var inst_49939 = (state_49998[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49998,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49933 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_49935 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_49936 = (new cljs.core.PersistentArrayMap(null,1,inst_49935,null));
var inst_49937 = (new cljs.core.PersistentHashSet(null,inst_49936,null));
var inst_49938 = com.wsscode.pathom.core.elide_ast_nodes(inst_49933,inst_49937);
var inst_49939__$1 = com.wsscode.pathom.core.ast__GT_query(inst_49938);
var inst_49941 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_49942 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_49943 = [inst_49942];
var inst_49944 = cljs.core.PersistentHashMap.fromArrays(inst_49941,inst_49943);
var inst_49945 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_49939__$1,inst_49944);
var inst_49948 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_49949 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_49950 = [inst_49945];
var inst_49951 = cljs.core.PersistentHashMap.fromArrays(inst_49949,inst_49950);
var inst_49952 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_49951];
var inst_49953 = cljs.core.PersistentHashMap.fromArrays(inst_49948,inst_49952);
var state_49998__$1 = (function (){var statearr_50009 = state_49998;
(statearr_50009[(7)] = inst_49953);

(statearr_50009[(8)] = inst_49939__$1);

return statearr_50009;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_50010_50914 = state_49998__$1;
(statearr_50010_50914[(1)] = (6));

} else {
var statearr_50012_50915 = state_49998__$1;
(statearr_50012_50915[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (15))){
var inst_49964 = (state_49998[(9)]);
var inst_49983 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49964);
var state_49998__$1 = state_49998;
var statearr_50016_50916 = state_49998__$1;
(statearr_50016_50916[(2)] = inst_49983);

(statearr_50016_50916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (13))){
var state_49998__$1 = state_49998;
var statearr_50018_50920 = state_49998__$1;
(statearr_50018_50920[(2)] = false);

(statearr_50018_50920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (6))){
var inst_49953 = (state_49998[(7)]);
var inst_49956 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_49953) : update_http_request.call(null,inst_49953));
var state_49998__$1 = state_49998;
var statearr_50021_50922 = state_49998__$1;
(statearr_50021_50922[(2)] = inst_49956);

(statearr_50021_50922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (17))){
var inst_49939 = (state_49998[(8)]);
var inst_49986 = (state_49998[(2)]);
var inst_49987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49986,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_49988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49986,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_49989 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_49990 = [inst_49987];
var inst_49991 = cljs.core.PersistentHashMap.fromArrays(inst_49989,inst_49990);
var inst_49992 = (com.wsscode.pathom.fulcro.network.graphql_response_parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.fulcro.network.graphql_response_parser.cljs$core$IFn$_invoke$arity$2(inst_49991,inst_49939) : com.wsscode.pathom.fulcro.network.graphql_response_parser.call(null,inst_49991,inst_49939));
var inst_49993 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_49992) : ok.call(null,inst_49992));
var state_49998__$1 = (function (){var statearr_50025 = state_49998;
(statearr_50025[(10)] = inst_49988);

return statearr_50025;
})();
var statearr_50026_50928 = state_49998__$1;
(statearr_50026_50928[(2)] = inst_49993);


cljs.core.async.impl.ioc_helpers.process_exception(state_49998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (3))){
var inst_49927 = (state_49998[(2)]);
var inst_49928 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_49927) : error.call(null,inst_49927));
var state_49998__$1 = state_49998;
var statearr_50029_50932 = state_49998__$1;
(statearr_50029_50932[(2)] = inst_49928);


cljs.core.async.impl.ioc_helpers.process_exception(state_49998__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (12))){
var state_49998__$1 = state_49998;
var statearr_50031_50933 = state_49998__$1;
(statearr_50031_50933[(2)] = true);

(statearr_50031_50933[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (2))){
var inst_49995 = (state_49998[(2)]);
var state_49998__$1 = state_49998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49998__$1,inst_49995);
} else {
if((state_val_49999 === (11))){
var inst_49981 = (state_49998[(2)]);
var state_49998__$1 = state_49998;
if(cljs.core.truth_(inst_49981)){
var statearr_50035_50936 = state_49998__$1;
(statearr_50035_50936[(1)] = (15));

} else {
var statearr_50036_50938 = state_49998__$1;
(statearr_50036_50938[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (9))){
var inst_49964 = (state_49998[(9)]);
var inst_49970 = inst_49964.cljs$lang$protocol_mask$partition0$;
var inst_49971 = (inst_49970 & (64));
var inst_49972 = inst_49964.cljs$core$ISeq$;
var inst_49973 = (cljs.core.PROTOCOL_SENTINEL === inst_49972);
var inst_49974 = ((inst_49971) || (inst_49973));
var state_49998__$1 = state_49998;
if(cljs.core.truth_(inst_49974)){
var statearr_50038_50939 = state_49998__$1;
(statearr_50038_50939[(1)] = (12));

} else {
var statearr_50039_50940 = state_49998__$1;
(statearr_50039_50940[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (5))){
var inst_49964 = (state_49998[(9)]);
var inst_49962 = (state_49998[(2)]);
var inst_49963 = com.wsscode.common.async_cljs.throw_err(inst_49962);
var inst_49964__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_49963);
var inst_49966 = (inst_49964__$1 == null);
var inst_49967 = cljs.core.not(inst_49966);
var state_49998__$1 = (function (){var statearr_50042 = state_49998;
(statearr_50042[(9)] = inst_49964__$1);

return statearr_50042;
})();
if(inst_49967){
var statearr_50043_50943 = state_49998__$1;
(statearr_50043_50943[(1)] = (9));

} else {
var statearr_50044_50944 = state_49998__$1;
(statearr_50044_50944[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (14))){
var inst_49978 = (state_49998[(2)]);
var state_49998__$1 = state_49998;
var statearr_50047_50948 = state_49998__$1;
(statearr_50047_50948[(2)] = inst_49978);

(statearr_50047_50948[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (16))){
var inst_49964 = (state_49998[(9)]);
var state_49998__$1 = state_49998;
var statearr_50049_50950 = state_49998__$1;
(statearr_50049_50950[(2)] = inst_49964);

(statearr_50049_50950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (10))){
var state_49998__$1 = state_49998;
var statearr_50052_50952 = state_49998__$1;
(statearr_50052_50952[(2)] = false);

(statearr_50052_50952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49999 === (8))){
var inst_49959 = (state_49998[(2)]);
var inst_49960 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_49959);
var state_49998__$1 = state_49998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49998__$1,(5),inst_49960);
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
});})(c__38971__auto__,map__49922,map__49922__$1,update_http_request))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__49922,map__49922__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0 = (function (){
var statearr_50059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50059[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38925__auto__);

(statearr_50059[(1)] = (1));

return statearr_50059;
});
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1 = (function (state_49998){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_49998);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50062){if((e50062 instanceof Object)){
var ex__38928__auto__ = e50062;
var statearr_50063_50955 = state_49998;
(statearr_50063_50955[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50957 = state_49998;
state_49998 = G__50957;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__ = function(state_49998){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1.call(this,state_49998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__49922,map__49922__$1,update_http_request))
})();
var state__38973__auto__ = (function (){var statearr_50066 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50066[(6)] = c__38971__auto__);

return statearr_50066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__49922,map__49922__$1,update_http_request))
);

return c__38971__auto__;
});})(map__49922,map__49922__$1,update_http_request))
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

var G__50074 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50074,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,(function (){var G__50075 = cljs.core.key(id_param);
return (simple_keyword.cljs$core$IFn$_invoke$arity$1 ? simple_keyword.cljs$core$IFn$_invoke$arity$1(G__50075) : simple_keyword.call(null,G__50075));
})())]));
} else {
return G__50074;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__50079 = arguments.length;
switch (G__50079) {
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
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__){
return (function (state_50151){
var state_val_50152 = (state_50151[(1)]);
if((state_val_50152 === (7))){
var state_50151__$1 = state_50151;
var statearr_50155_50969 = state_50151__$1;
(statearr_50155_50969[(2)] = false);

(statearr_50155_50969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (1))){
var state_50151__$1 = state_50151;
var statearr_50156_50971 = state_50151__$1;
(statearr_50156_50971[(2)] = null);

(statearr_50156_50971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (4))){
var inst_50099 = (state_50151[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_50151,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_50090 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_50095 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_50096 = (new cljs.core.PersistentArrayMap(null,1,inst_50095,null));
var inst_50097 = (new cljs.core.PersistentHashSet(null,inst_50096,null));
var inst_50098 = com.wsscode.pathom.core.elide_ast_nodes(inst_50090,inst_50097);
var inst_50099__$1 = com.wsscode.pathom.core.ast__GT_query(inst_50098);
var inst_50100 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_50101 = [fulcro.client.primitives.tempid_QMARK_];
var inst_50102 = cljs.core.PersistentHashMap.fromArrays(inst_50100,inst_50101);
var inst_50103 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50102,config], 0));
var inst_50104 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_50099__$1,inst_50103);
var inst_50106 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_50107 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_50108 = [inst_50104];
var inst_50109 = cljs.core.PersistentHashMap.fromArrays(inst_50107,inst_50108);
var inst_50110 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_50109];
var inst_50111 = cljs.core.PersistentHashMap.fromArrays(inst_50106,inst_50110);
var inst_50112 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_50111);
var state_50151__$1 = (function (){var statearr_50161 = state_50151;
(statearr_50161[(7)] = inst_50099__$1);

return statearr_50161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50151__$1,(5),inst_50112);
} else {
if((state_val_50152 === (13))){
var inst_50116 = (state_50151[(8)]);
var state_50151__$1 = state_50151;
var statearr_50162_50977 = state_50151__$1;
(statearr_50162_50977[(2)] = inst_50116);

(statearr_50162_50977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (6))){
var inst_50116 = (state_50151[(8)]);
var inst_50124 = inst_50116.cljs$lang$protocol_mask$partition0$;
var inst_50125 = (inst_50124 & (64));
var inst_50126 = inst_50116.cljs$core$ISeq$;
var inst_50127 = (cljs.core.PROTOCOL_SENTINEL === inst_50126);
var inst_50128 = ((inst_50125) || (inst_50127));
var state_50151__$1 = state_50151;
if(cljs.core.truth_(inst_50128)){
var statearr_50166_50981 = state_50151__$1;
(statearr_50166_50981[(1)] = (9));

} else {
var statearr_50167_50982 = state_50151__$1;
(statearr_50167_50982[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (3))){
var inst_50082 = (state_50151[(2)]);
var inst_50083 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_50082) : error.call(null,inst_50082));
var state_50151__$1 = state_50151;
var statearr_50168_50984 = state_50151__$1;
(statearr_50168_50984[(2)] = inst_50083);


cljs.core.async.impl.ioc_helpers.process_exception(state_50151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (12))){
var inst_50116 = (state_50151[(8)]);
var inst_50137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50116);
var state_50151__$1 = state_50151;
var statearr_50169_50986 = state_50151__$1;
(statearr_50169_50986[(2)] = inst_50137);

(statearr_50169_50986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (2))){
var inst_50149 = (state_50151[(2)]);
var state_50151__$1 = state_50151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50151__$1,inst_50149);
} else {
if((state_val_50152 === (11))){
var inst_50132 = (state_50151[(2)]);
var state_50151__$1 = state_50151;
var statearr_50170_50987 = state_50151__$1;
(statearr_50170_50987[(2)] = inst_50132);

(statearr_50170_50987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (9))){
var state_50151__$1 = state_50151;
var statearr_50171_50989 = state_50151__$1;
(statearr_50171_50989[(2)] = true);

(statearr_50171_50989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (5))){
var inst_50116 = (state_50151[(8)]);
var inst_50114 = (state_50151[(2)]);
var inst_50115 = com.wsscode.common.async_cljs.throw_err(inst_50114);
var inst_50116__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_50115);
var inst_50120 = (inst_50116__$1 == null);
var inst_50121 = cljs.core.not(inst_50120);
var state_50151__$1 = (function (){var statearr_50175 = state_50151;
(statearr_50175[(8)] = inst_50116__$1);

return statearr_50175;
})();
if(inst_50121){
var statearr_50176_50992 = state_50151__$1;
(statearr_50176_50992[(1)] = (6));

} else {
var statearr_50177_50993 = state_50151__$1;
(statearr_50177_50993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (14))){
var inst_50099 = (state_50151[(7)]);
var inst_50140 = (state_50151[(2)]);
var inst_50141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50140,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_50142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_50140,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_50143 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_50144 = [inst_50141];
var inst_50145 = cljs.core.PersistentHashMap.fromArrays(inst_50143,inst_50144);
var inst_50146 = (com.wsscode.pathom.fulcro.network.graphql_response_parser2.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.fulcro.network.graphql_response_parser2.cljs$core$IFn$_invoke$arity$2(inst_50145,inst_50099) : com.wsscode.pathom.fulcro.network.graphql_response_parser2.call(null,inst_50145,inst_50099));
var inst_50147 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_50146) : ok.call(null,inst_50146));
var state_50151__$1 = (function (){var statearr_50178 = state_50151;
(statearr_50178[(9)] = inst_50142);

return statearr_50178;
})();
var statearr_50180_50997 = state_50151__$1;
(statearr_50180_50997[(2)] = inst_50147);


cljs.core.async.impl.ioc_helpers.process_exception(state_50151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (10))){
var state_50151__$1 = state_50151;
var statearr_50187_50998 = state_50151__$1;
(statearr_50187_50998[(2)] = false);

(statearr_50187_50998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50152 === (8))){
var inst_50135 = (state_50151[(2)]);
var state_50151__$1 = state_50151;
if(cljs.core.truth_(inst_50135)){
var statearr_50199_50999 = state_50151__$1;
(statearr_50199_50999[(1)] = (12));

} else {
var statearr_50205_51001 = state_50151__$1;
(statearr_50205_51001[(1)] = (13));

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
});})(c__38971__auto__))
;
return ((function (switch__38924__auto__,c__38971__auto__){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0 = (function (){
var statearr_50216 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50216[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38925__auto__);

(statearr_50216[(1)] = (1));

return statearr_50216;
});
var com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1 = (function (state_50151){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_50151);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e50218){if((e50218 instanceof Object)){
var ex__38928__auto__ = e50218;
var statearr_50219_51005 = state_50151;
(statearr_50219_51005[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_50151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51006 = state_50151;
state_50151 = G__51006;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__ = function(state_50151){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1.call(this,state_50151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38925__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38925__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__))
})();
var state__38973__auto__ = (function (){var statearr_50223 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_50223[(6)] = c__38971__auto__);

return statearr_50223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__))
);

return c__38971__auto__;
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
var G__51009__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__50228_51011 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50228_51011) : f.call(null,G__50228_51011));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__51009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51013__i = 0, G__51013__a = new Array(arguments.length -  0);
while (G__51013__i < G__51013__a.length) {G__51013__a[G__51013__i] = arguments[G__51013__i + 0]; ++G__51013__i;}
  args = new cljs.core.IndexedSeq(G__51013__a,0,null);
} 
return G__51009__delegate.call(this,args);};
G__51009.cljs$lang$maxFixedArity = 0;
G__51009.cljs$lang$applyTo = (function (arglist__51014){
var args = cljs.core.seq(arglist__51014);
return G__51009__delegate(args);
});
G__51009.cljs$core$IFn$_invoke$arity$variadic = G__51009__delegate;
return G__51009;
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
var vec__50237 = requests;
var seq__50238 = cljs.core.seq(vec__50237);
var first__50239 = cljs.core.first(seq__50238);
var seq__50238__$1 = cljs.core.next(seq__50238);
var vec__50240 = first__50239;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50240,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50240,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50240,(2),null);
var tail = seq__50238__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__50268 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50268,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50268,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50268,(2),null);
var req = vec__50268;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__51036 = cljs.core.next(left);
var G__51037 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__51038 = current;
var G__51039 = next_cycle;
left = G__51036;
groups__$1 = G__51037;
current = G__51038;
next_cycle = G__51039;
continue;
} else {
var G__51065 = cljs.core.next(left);
var G__51066 = groups__$1;
var G__51067 = current;
var G__51068 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__51065;
groups__$1 = G__51066;
current = G__51067;
next_cycle = G__51068;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__50275 = next_cycle;
var seq__50276 = cljs.core.seq(vec__50275);
var first__50277 = cljs.core.first(seq__50276);
var seq__50276__$1 = cljs.core.next(seq__50276);
var vec__50278 = first__50277;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50278,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50278,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50278,(2),null);
var tail__$1 = seq__50276__$1;
var G__51082 = tail__$1;
var G__51083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__51084 = (current + (1));
var G__51085 = cljs.core.PersistentVector.EMPTY;
left = G__51082;
groups__$1 = G__51083;
current = G__51084;
next_cycle = G__51085;
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
return com.wsscode.pathom.fulcro.network.debounce((function (p1__50284_SHARP_){
var G__50287 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__50284_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50287) : f.call(null,G__50287));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50295,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50319 = k50295;
var G__50319__$1 = (((G__50319 instanceof cljs.core.Keyword))?G__50319.fqn:null);
switch (G__50319__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50295,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50322){
var vec__50323 = p__50322;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50323,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50323,(1),null);
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50294){
var self__ = this;
var G__50294__$1 = this;
return (new cljs.core.RecordIter((0),G__50294__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__50345 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (176772946 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50345(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50298,other50299){
var self__ = this;
var this50298__$1 = this;
return (((!((other50299 == null)))) && ((this50298__$1.constructor === other50299.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50298__$1.send_fn,other50299.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50298__$1.__extmap,other50299.__extmap)));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50294){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50356 = cljs.core.keyword_identical_QMARK_;
var expr__50357 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50359 = new cljs.core.Keyword(null,"send-fn","send-fn",351002041);
var G__50360 = expr__50357;
return (pred__50356.cljs$core$IFn$_invoke$arity$2 ? pred__50356.cljs$core$IFn$_invoke$arity$2(G__50359,G__50360) : pred__50356.call(null,G__50359,G__50360));
})())){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__50294,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50294),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50294){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__50294,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__50314){
var extmap__4424__auto__ = (function (){var G__50383 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50314,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__50314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50383);
} else {
return G__50383;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__50314),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__50393 = arguments.length;
switch (G__50393) {
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
var seq__50397 = cljs.core.seq(reqs);
var chunk__50398 = null;
var count__50399 = (0);
var i__50400 = (0);
while(true){
if((i__50400 < count__50399)){
var map__50455 = chunk__50398.cljs$core$IIndexed$_nth$arity$2(null,i__50400);
var map__50455__$1 = (((((!((map__50455 == null))))?(((((map__50455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50455):map__50455);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50455__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__50397,chunk__50398,count__50399,i__50400,map__50455,map__50455__$1,query,ok,err){
return (function (p1__50387_SHARP_){
var seq__50458 = cljs.core.seq(ok);
var chunk__50459 = null;
var count__50460 = (0);
var i__50461 = (0);
while(true){
if((i__50461 < count__50460)){
var f = chunk__50459.cljs$core$IIndexed$_nth$arity$2(null,i__50461);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50387_SHARP_) : f.call(null,p1__50387_SHARP_));


var G__51149 = seq__50458;
var G__51150 = chunk__50459;
var G__51151 = count__50460;
var G__51152 = (i__50461 + (1));
seq__50458 = G__51149;
chunk__50459 = G__51150;
count__50460 = G__51151;
i__50461 = G__51152;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50458);
if(temp__5720__auto__){
var seq__50458__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50458__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50458__$1);
var G__51156 = cljs.core.chunk_rest(seq__50458__$1);
var G__51157 = c__4550__auto__;
var G__51158 = cljs.core.count(c__4550__auto__);
var G__51159 = (0);
seq__50458 = G__51156;
chunk__50459 = G__51157;
count__50460 = G__51158;
i__50461 = G__51159;
continue;
} else {
var f = cljs.core.first(seq__50458__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50387_SHARP_) : f.call(null,p1__50387_SHARP_));


var G__51161 = cljs.core.next(seq__50458__$1);
var G__51162 = null;
var G__51163 = (0);
var G__51164 = (0);
seq__50458 = G__51161;
chunk__50459 = G__51162;
count__50460 = G__51163;
i__50461 = G__51164;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50397,chunk__50398,count__50399,i__50400,map__50455,map__50455__$1,query,ok,err))
,((function (seq__50397,chunk__50398,count__50399,i__50400,map__50455,map__50455__$1,query,ok,err){
return (function (p1__50388_SHARP_){
var seq__50469 = cljs.core.seq(err);
var chunk__50470 = null;
var count__50471 = (0);
var i__50472 = (0);
while(true){
if((i__50472 < count__50471)){
var f = chunk__50470.cljs$core$IIndexed$_nth$arity$2(null,i__50472);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50388_SHARP_) : f.call(null,p1__50388_SHARP_));


var G__51168 = seq__50469;
var G__51169 = chunk__50470;
var G__51170 = count__50471;
var G__51171 = (i__50472 + (1));
seq__50469 = G__51168;
chunk__50470 = G__51169;
count__50471 = G__51170;
i__50472 = G__51171;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50469);
if(temp__5720__auto__){
var seq__50469__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50469__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50469__$1);
var G__51173 = cljs.core.chunk_rest(seq__50469__$1);
var G__51174 = c__4550__auto__;
var G__51175 = cljs.core.count(c__4550__auto__);
var G__51176 = (0);
seq__50469 = G__51173;
chunk__50470 = G__51174;
count__50471 = G__51175;
i__50472 = G__51176;
continue;
} else {
var f = cljs.core.first(seq__50469__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50388_SHARP_) : f.call(null,p1__50388_SHARP_));


var G__51178 = cljs.core.next(seq__50469__$1);
var G__51179 = null;
var G__51180 = (0);
var G__51181 = (0);
seq__50469 = G__51178;
chunk__50470 = G__51179;
count__50471 = G__51180;
i__50472 = G__51181;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50397,chunk__50398,count__50399,i__50400,map__50455,map__50455__$1,query,ok,err))
);


var G__51183 = seq__50397;
var G__51184 = chunk__50398;
var G__51185 = count__50399;
var G__51186 = (i__50400 + (1));
seq__50397 = G__51183;
chunk__50398 = G__51184;
count__50399 = G__51185;
i__50400 = G__51186;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50397);
if(temp__5720__auto__){
var seq__50397__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50397__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50397__$1);
var G__51188 = cljs.core.chunk_rest(seq__50397__$1);
var G__51189 = c__4550__auto__;
var G__51190 = cljs.core.count(c__4550__auto__);
var G__51191 = (0);
seq__50397 = G__51188;
chunk__50398 = G__51189;
count__50399 = G__51190;
i__50400 = G__51191;
continue;
} else {
var map__50480 = cljs.core.first(seq__50397__$1);
var map__50480__$1 = (((((!((map__50480 == null))))?(((((map__50480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50480):map__50480);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50480__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50480__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50480__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__50397,chunk__50398,count__50399,i__50400,map__50480,map__50480__$1,query,ok,err,seq__50397__$1,temp__5720__auto__){
return (function (p1__50387_SHARP_){
var seq__50485 = cljs.core.seq(ok);
var chunk__50486 = null;
var count__50487 = (0);
var i__50488 = (0);
while(true){
if((i__50488 < count__50487)){
var f = chunk__50486.cljs$core$IIndexed$_nth$arity$2(null,i__50488);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50387_SHARP_) : f.call(null,p1__50387_SHARP_));


var G__51196 = seq__50485;
var G__51197 = chunk__50486;
var G__51198 = count__50487;
var G__51199 = (i__50488 + (1));
seq__50485 = G__51196;
chunk__50486 = G__51197;
count__50487 = G__51198;
i__50488 = G__51199;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__50485);
if(temp__5720__auto____$1){
var seq__50485__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50485__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50485__$1);
var G__51201 = cljs.core.chunk_rest(seq__50485__$1);
var G__51202 = c__4550__auto__;
var G__51203 = cljs.core.count(c__4550__auto__);
var G__51204 = (0);
seq__50485 = G__51201;
chunk__50486 = G__51202;
count__50487 = G__51203;
i__50488 = G__51204;
continue;
} else {
var f = cljs.core.first(seq__50485__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50387_SHARP_) : f.call(null,p1__50387_SHARP_));


var G__51205 = cljs.core.next(seq__50485__$1);
var G__51206 = null;
var G__51207 = (0);
var G__51208 = (0);
seq__50485 = G__51205;
chunk__50486 = G__51206;
count__50487 = G__51207;
i__50488 = G__51208;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50397,chunk__50398,count__50399,i__50400,map__50480,map__50480__$1,query,ok,err,seq__50397__$1,temp__5720__auto__))
,((function (seq__50397,chunk__50398,count__50399,i__50400,map__50480,map__50480__$1,query,ok,err,seq__50397__$1,temp__5720__auto__){
return (function (p1__50388_SHARP_){
var seq__50496 = cljs.core.seq(err);
var chunk__50497 = null;
var count__50498 = (0);
var i__50499 = (0);
while(true){
if((i__50499 < count__50498)){
var f = chunk__50497.cljs$core$IIndexed$_nth$arity$2(null,i__50499);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50388_SHARP_) : f.call(null,p1__50388_SHARP_));


var G__51210 = seq__50496;
var G__51211 = chunk__50497;
var G__51212 = count__50498;
var G__51213 = (i__50499 + (1));
seq__50496 = G__51210;
chunk__50497 = G__51211;
count__50498 = G__51212;
i__50499 = G__51213;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__50496);
if(temp__5720__auto____$1){
var seq__50496__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50496__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50496__$1);
var G__51216 = cljs.core.chunk_rest(seq__50496__$1);
var G__51217 = c__4550__auto__;
var G__51218 = cljs.core.count(c__4550__auto__);
var G__51219 = (0);
seq__50496 = G__51216;
chunk__50497 = G__51217;
count__50498 = G__51218;
i__50499 = G__51219;
continue;
} else {
var f = cljs.core.first(seq__50496__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50388_SHARP_) : f.call(null,p1__50388_SHARP_));


var G__51220 = cljs.core.next(seq__50496__$1);
var G__51221 = null;
var G__51222 = (0);
var G__51223 = (0);
seq__50496 = G__51220;
chunk__50497 = G__51221;
count__50498 = G__51222;
i__50499 = G__51223;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50397,chunk__50398,count__50399,i__50400,map__50480,map__50480__$1,query,ok,err,seq__50397__$1,temp__5720__auto__))
);


var G__51224 = cljs.core.next(seq__50397__$1);
var G__51225 = null;
var G__51226 = (0);
var G__51227 = (0);
seq__50397 = G__51224;
chunk__50398 = G__51225;
count__50399 = G__51226;
i__50400 = G__51227;
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
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__50506){
var map__50507 = p__50506;
var map__50507__$1 = (((((!((map__50507 == null))))?(((((map__50507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50507):map__50507);
var env = map__50507__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__50509 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50509,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50509,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
