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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k88233,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__88241 = k88233;
var G__88241__$1 = (((G__88241 instanceof cljs.core.Keyword))?G__88241.fqn:null);
switch (G__88241__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88233,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__88243){
var vec__88244 = p__88243;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88244,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88244,(1),null);
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88232){
var self__ = this;
var G__88232__$1 = this;
return (new cljs.core.RecordIter((0),G__88232__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88234,other88235){
var self__ = this;
var this88234__$1 = this;
return (((!((other88235 == null)))) && ((this88234__$1.constructor === other88235.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88234__$1.parser,other88235.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88234__$1.__extmap,other88235.__extmap)));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__88232){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__88257 = cljs.core.keyword_identical_QMARK_;
var expr__88258 = k__4393__auto__;
if(cljs.core.truth_((pred__88257.cljs$core$IFn$_invoke$arity$2 ? pred__88257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__88258) : pred__88257.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__88258)))){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__88232,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__88232),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__88232){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__88232,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__88264){
var self__ = this;
var map__88265 = p__88264;
var map__88265__$1 = (((((!((map__88265 == null))))?(((((map__88265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88265):map__88265);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88265__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88265__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88265__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88265__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,this$__$1,map__88265,map__88265__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,this$__$1,map__88265,map__88265__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_88311){
var state_val_88312 = (state_88311[(1)]);
if((state_val_88312 === (7))){
var inst_88276 = (state_88311[(7)]);
var inst_88302 = (state_88311[(2)]);
var inst_88303 = [edn,inst_88302];
var inst_88304 = cljs.core.PersistentHashMap.fromArrays(inst_88276,inst_88303);
var inst_88305 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_88304) : ok_handler.call(null,inst_88304));
var state_88311__$1 = state_88311;
var statearr_88314_89111 = state_88311__$1;
(statearr_88314_89111[(2)] = inst_88305);


cljs.core.async.impl.ioc_helpers.process_exception(state_88311__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (1))){
var state_88311__$1 = state_88311;
var statearr_88315_89112 = state_88311__$1;
(statearr_88315_89112[(2)] = null);

(statearr_88315_89112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (4))){
var inst_88278 = (state_88311[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_88311,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_88276 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_88277 = cljs.core.PersistentHashMap.EMPTY;
var inst_88278__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_88277,edn) : self__.parser.call(null,inst_88277,edn));
var inst_88279 = com.wsscode.async.async_cljs.chan_QMARK_(inst_88278__$1);
var state_88311__$1 = (function (){var statearr_88319 = state_88311;
(statearr_88319[(8)] = inst_88278__$1);

(statearr_88319[(7)] = inst_88276);

return statearr_88319;
})();
if(inst_88279){
var statearr_88320_89116 = state_88311__$1;
(statearr_88320_89116[(1)] = (5));

} else {
var statearr_88321_89117 = state_88311__$1;
(statearr_88321_89117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (15))){
var inst_88298 = (state_88311[(2)]);
var state_88311__$1 = state_88311;
var statearr_88322_89118 = state_88311__$1;
(statearr_88322_89118[(2)] = inst_88298);

(statearr_88322_89118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (13))){
var inst_88278 = (state_88311[(8)]);
var state_88311__$1 = state_88311;
var statearr_88323_89120 = state_88311__$1;
(statearr_88323_89120[(2)] = inst_88278);

(statearr_88323_89120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (6))){
var inst_88278 = (state_88311[(8)]);
var inst_88286 = com.wsscode.async.async_cljs.promise_QMARK_(inst_88278);
var state_88311__$1 = state_88311;
if(cljs.core.truth_(inst_88286)){
var statearr_88324_89123 = state_88311__$1;
(statearr_88324_89123[(1)] = (9));

} else {
var statearr_88325_89125 = state_88311__$1;
(statearr_88325_89125[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (3))){
var inst_88267 = (state_88311[(2)]);
var inst_88268 = console.error("PathomRemote error:",inst_88267);
var inst_88269 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_88270 = [inst_88267];
var inst_88271 = cljs.core.PersistentHashMap.fromArrays(inst_88269,inst_88270);
var inst_88272 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_88271) : error_handler.call(null,inst_88271));
var state_88311__$1 = (function (){var statearr_88326 = state_88311;
(statearr_88326[(9)] = inst_88268);

return statearr_88326;
})();
var statearr_88327_89127 = state_88311__$1;
(statearr_88327_89127[(2)] = inst_88272);


cljs.core.async.impl.ioc_helpers.process_exception(state_88311__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (12))){
var inst_88291 = (state_88311[(2)]);
var inst_88292 = com.wsscode.async.async_cljs.consumer_pair(inst_88291);
var state_88311__$1 = state_88311;
var statearr_88328_89130 = state_88311__$1;
(statearr_88328_89130[(2)] = inst_88292);

(statearr_88328_89130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (2))){
var inst_88307 = (state_88311[(2)]);
var state_88311__$1 = state_88311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88311__$1,inst_88307);
} else {
if((state_val_88312 === (11))){
var inst_88300 = (state_88311[(2)]);
var state_88311__$1 = state_88311;
var statearr_88329_89132 = state_88311__$1;
(statearr_88329_89132[(2)] = inst_88300);

(statearr_88329_89132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (9))){
var inst_88278 = (state_88311[(8)]);
var inst_88289 = com.wsscode.async.async_cljs.promise__GT_chan(inst_88278);
var state_88311__$1 = state_88311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88311__$1,(12),inst_88289);
} else {
if((state_val_88312 === (5))){
var inst_88278 = (state_88311[(8)]);
var state_88311__$1 = state_88311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88311__$1,(8),inst_88278);
} else {
if((state_val_88312 === (14))){
var state_88311__$1 = state_88311;
var statearr_88340_89134 = state_88311__$1;
(statearr_88340_89134[(2)] = null);

(statearr_88340_89134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (10))){
var state_88311__$1 = state_88311;
var statearr_88341_89135 = state_88311__$1;
(statearr_88341_89135[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88312 === (8))){
var inst_88282 = (state_88311[(2)]);
var inst_88283 = com.wsscode.async.async_cljs.throw_err(inst_88282);
var state_88311__$1 = state_88311;
var statearr_88343_89139 = state_88311__$1;
(statearr_88343_89139[(2)] = inst_88283);

(statearr_88343_89139[(1)] = (7));


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
});})(c__47946__auto__,this$__$1,map__88265,map__88265__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__47663__auto__,c__47946__auto__,this$__$1,map__88265,map__88265__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0 = (function (){
var statearr_88345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88345[(0)] = com$wsscode$pathom$fulcro$network$state_machine__47664__auto__);

(statearr_88345[(1)] = (1));

return statearr_88345;
});
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1 = (function (state_88311){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_88311);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e88346){if((e88346 instanceof Object)){
var ex__47667__auto__ = e88346;
var statearr_88347_89141 = state_88311;
(statearr_88347_89141[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_88311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89143 = state_88311;
state_88311 = G__89143;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = function(state_88311){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1.call(this,state_88311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,this$__$1,map__88265,map__88265__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__47948__auto__ = (function (){var statearr_88348 = f__47947__auto__();
(statearr_88348[(6)] = c__47946__auto__);

return statearr_88348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,this$__$1,map__88265,map__88265__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__88236){
var extmap__4424__auto__ = (function (){var G__88349 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__88236,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__88236)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88349);
} else {
return G__88349;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__88236),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k88351,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__88358 = k88351;
var G__88358__$1 = (((G__88358 instanceof cljs.core.Keyword))?G__88358.fqn:null);
switch (G__88358__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88351,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__88362){
var vec__88364 = p__88362;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88364,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88364,(1),null);
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88350){
var self__ = this;
var G__88350__$1 = this;
return (new cljs.core.RecordIter((0),G__88350__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88352,other88353){
var self__ = this;
var this88352__$1 = this;
return (((!((other88353 == null)))) && ((this88352__$1.constructor === other88353.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88352__$1.f,other88353.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88352__$1.serialize_QMARK_,other88353.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88352__$1.__extmap,other88353.__extmap)));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__88350){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__88377 = cljs.core.keyword_identical_QMARK_;
var expr__88378 = k__4393__auto__;
if(cljs.core.truth_((pred__88377.cljs$core$IFn$_invoke$arity$2 ? pred__88377.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__88378) : pred__88377.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__88378)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__88350,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88377.cljs$core$IFn$_invoke$arity$2 ? pred__88377.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__88378) : pred__88377.call(null,new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__88378)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__88350,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__88350),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__88350){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__88350,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__88354){
var extmap__4424__auto__ = (function (){var G__88392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__88354,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__88354)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88392);
} else {
return G__88392;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__88354),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__88354),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__88394 = arguments.length;
switch (G__88394) {
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k88404,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__88419 = k88404;
var G__88419__$1 = (((G__88419 instanceof cljs.core.Keyword))?G__88419.fqn:null);
switch (G__88419__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88404,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__88424){
var vec__88426 = p__88424;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88426,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88426,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88403){
var self__ = this;
var G__88403__$1 = this;
return (new cljs.core.RecordIter((0),G__88403__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88405,other88406){
var self__ = this;
var this88405__$1 = this;
return (((!((other88406 == null)))) && ((this88405__$1.constructor === other88406.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88405__$1.network,other88406.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88405__$1.options,other88406.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88405__$1.__extmap,other88406.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__88445 = self__.options;
var map__88445__$1 = (((((!((map__88445 == null))))?(((((map__88445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88445):map__88445);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88445__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__88445,map__88445__$1,___$1){
return (function (___$2,x){
return x;
});})(map__88445,map__88445__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88445__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__88445,map__88445__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__88445,map__88445__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88445__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__88445,map__88445__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__88445,map__88445__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88445__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88445__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__88456 = edn_SINGLEQUOTE_;
var G__88457 = ((function (G__88456,edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__88456,edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__88399_SHARP_){
var G__88458 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__88399_SHARP_) : transform_response.call(null,env,p1__88399_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__88458) : ok.call(null,G__88458));
});})(G__88456,edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__88456,edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__88400_SHARP_){
var G__88459 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__88400_SHARP_) : transform_error.call(null,env,p1__88400_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__88459) : error.call(null,G__88459));
});})(G__88456,edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__88456,edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__88456,G__88457) : transform_transmission.call(null,G__88456,G__88457));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__88401_SHARP_){
var G__88460 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__88401_SHARP_) : transform_response.call(null,env,p1__88401_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__88460) : ok.call(null,G__88460));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__88402_SHARP_){
var G__88461 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__88402_SHARP_) : transform_error.call(null,env,p1__88402_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__88461) : error.call(null,G__88461));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88445,map__88445__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
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
}catch (e88462){var ___$2 = e88462;
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__88403){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__88467 = cljs.core.keyword_identical_QMARK_;
var expr__88468 = k__4393__auto__;
if(cljs.core.truth_((pred__88467.cljs$core$IFn$_invoke$arity$2 ? pred__88467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__88468) : pred__88467.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__88468)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__88403,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88467.cljs$core$IFn$_invoke$arity$2 ? pred__88467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__88468) : pred__88467.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__88468)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__88403,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__88403),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__88403){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__88403,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__88413){
var extmap__4424__auto__ = (function (){var G__88480 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__88413,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__88413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88480);
} else {
return G__88480;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__88413),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__88413),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k88487,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__88491 = k88487;
var G__88491__$1 = (((G__88491 instanceof cljs.core.Keyword))?G__88491.fqn:null);
switch (G__88491__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88487,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__88492){
var vec__88493 = p__88492;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88493,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88493,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88486){
var self__ = this;
var G__88486__$1 = this;
return (new cljs.core.RecordIter((0),G__88486__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88488,other88489){
var self__ = this;
var this88488__$1 = this;
return (((!((other88489 == null)))) && ((this88488__$1.constructor === other88489.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88488__$1.network,other88489.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88488__$1.options,other88489.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88488__$1.__extmap,other88489.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e88512){var ___$2 = e88512;
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__88486){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__88515 = cljs.core.keyword_identical_QMARK_;
var expr__88516 = k__4393__auto__;
if(cljs.core.truth_((pred__88515.cljs$core$IFn$_invoke$arity$2 ? pred__88515.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__88516) : pred__88515.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__88516)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__88486,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__88515.cljs$core$IFn$_invoke$arity$2 ? pred__88515.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__88516) : pred__88515.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__88516)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__88486,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__88486),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__88486){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__88486,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__88528){
var self__ = this;
var map__88529 = p__88528;
var map__88529__$1 = (((((!((map__88529 == null))))?(((((map__88529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88529):map__88529);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88529__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88529__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88529__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88529__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__88535 = self__.options;
var map__88535__$1 = (((((!((map__88535 == null))))?(((((map__88535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88535):map__88535);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88535__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__88535,map__88535__$1,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__88535,map__88535__$1,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88535__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__88535,map__88535__$1,transform_query,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__88535,map__88535__$1,transform_query,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88535__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__88535,map__88535__$1,transform_query,transform_response,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__88535,map__88535__$1,transform_query,transform_response,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__88535__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__88535,map__88535__$1,transform_query,transform_response,transform_error,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__88535,map__88535__$1,transform_query,transform_response,transform_error,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88535__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88535__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__88542 = env;
var G__88543 = edn_SINGLEQUOTE_;
var G__88544 = ((function (G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__88549 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__88482_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__88482_SHARP_) : transform_response.call(null,env,p1__88482_SHARP_));
});})(G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__88549) : ok_handler.call(null,G__88549));
});})(G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__88553 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__88483_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__88483_SHARP_) : transform_error.call(null,env,p1__88483_SHARP_));
});})(G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__88553) : error_handler.call(null,G__88553));
});})(G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__88556 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__88556) : progress_handler.call(null,G__88556));
});})(G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__88542,G__88543,edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__88542,G__88543,G__88544) : transform_transmission.call(null,G__88542,G__88543,G__88544));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__88557 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__88484_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__88484_SHARP_) : transform_response.call(null,env,p1__88484_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__88557) : ok_handler.call(null,G__88557));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__88558 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__88485_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__88485_SHARP_) : transform_error.call(null,env,p1__88485_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__88558) : error_handler.call(null,G__88558));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__88562 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__88562) : progress_handler.call(null,G__88562));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__88535,map__88535__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__88529,map__88529__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__88490){
var extmap__4424__auto__ = (function (){var G__88574 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__88490,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__88490)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88574);
} else {
return G__88574;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__88490),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__88490),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__88581 = network;
var G__88581__$1 = (((G__88581 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__88581));
var G__88581__$2 = (((G__88581__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__88581__$1));
if((G__88581__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__88581__$2,app);
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
var G__88593 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__88593,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,com.wsscode.pathom.fulcro.network.graphql_response_key(cljs.core.key(id_param)))]));
} else {
return G__88593;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__88598 = arguments.length;
switch (G__88598) {
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

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__88607){
var map__88608 = p__88607;
var map__88608__$1 = (((((!((map__88608 == null))))?(((((map__88608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__88608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__88608):map__88608);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88608__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__88608,map__88608__$1,update_http_request){
return (function (_this,edn,ok,error){
var c__47946__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__47946__auto__,map__88608,map__88608__$1,update_http_request){
return (function (){
var f__47947__auto__ = (function (){var switch__47663__auto__ = ((function (c__47946__auto__,map__88608,map__88608__$1,update_http_request){
return (function (state_88685){
var state_val_88686 = (state_88685[(1)]);
if((state_val_88686 === (7))){
var inst_88640 = (state_88685[(7)]);
var state_88685__$1 = state_88685;
var statearr_88687_89191 = state_88685__$1;
(statearr_88687_89191[(2)] = inst_88640);

(statearr_88687_89191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (1))){
var state_88685__$1 = state_88685;
var statearr_88688_89192 = state_88685__$1;
(statearr_88688_89192[(2)] = null);

(statearr_88688_89192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (4))){
var inst_88627 = (state_88685[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_88685,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_88620 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_88622 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_88624 = (new cljs.core.PersistentArrayMap(null,1,inst_88622,null));
var inst_88625 = (new cljs.core.PersistentHashSet(null,inst_88624,null));
var inst_88626 = com.wsscode.pathom.core.elide_ast_nodes(inst_88620,inst_88625);
var inst_88627__$1 = com.wsscode.pathom.core.ast__GT_query(inst_88626);
var inst_88629 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_88630 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_88631 = [inst_88630];
var inst_88632 = cljs.core.PersistentHashMap.fromArrays(inst_88629,inst_88631);
var inst_88633 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_88627__$1,inst_88632);
var inst_88635 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_88636 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_88637 = [inst_88633];
var inst_88638 = cljs.core.PersistentHashMap.fromArrays(inst_88636,inst_88637);
var inst_88639 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_88638];
var inst_88640 = cljs.core.PersistentHashMap.fromArrays(inst_88635,inst_88639);
var state_88685__$1 = (function (){var statearr_88693 = state_88685;
(statearr_88693[(7)] = inst_88640);

(statearr_88693[(8)] = inst_88627__$1);

return statearr_88693;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_88694_89194 = state_88685__$1;
(statearr_88694_89194[(1)] = (6));

} else {
var statearr_88695_89195 = state_88685__$1;
(statearr_88695_89195[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (15))){
var inst_88650 = (state_88685[(9)]);
var inst_88671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_88650);
var state_88685__$1 = state_88685;
var statearr_88697_89196 = state_88685__$1;
(statearr_88697_89196[(2)] = inst_88671);

(statearr_88697_89196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (13))){
var state_88685__$1 = state_88685;
var statearr_88699_89197 = state_88685__$1;
(statearr_88699_89197[(2)] = false);

(statearr_88699_89197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (6))){
var inst_88640 = (state_88685[(7)]);
var inst_88642 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_88640) : update_http_request.call(null,inst_88640));
var state_88685__$1 = state_88685;
var statearr_88700_89198 = state_88685__$1;
(statearr_88700_89198[(2)] = inst_88642);

(statearr_88700_89198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (17))){
var inst_88627 = (state_88685[(8)]);
var inst_88674 = (state_88685[(2)]);
var inst_88675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_88674,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_88676 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_88677 = [inst_88675];
var inst_88678 = cljs.core.PersistentHashMap.fromArrays(inst_88676,inst_88677);
var inst_88679 = com.wsscode.pathom.fulcro.network.graphql_response_parser(inst_88678,inst_88627);
var inst_88680 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_88679) : ok.call(null,inst_88679));
var state_88685__$1 = state_88685;
var statearr_88702_89200 = state_88685__$1;
(statearr_88702_89200[(2)] = inst_88680);


cljs.core.async.impl.ioc_helpers.process_exception(state_88685__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (3))){
var inst_88612 = (state_88685[(2)]);
var inst_88613 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_88612) : error.call(null,inst_88612));
var state_88685__$1 = state_88685;
var statearr_88704_89201 = state_88685__$1;
(statearr_88704_89201[(2)] = inst_88613);


cljs.core.async.impl.ioc_helpers.process_exception(state_88685__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (12))){
var state_88685__$1 = state_88685;
var statearr_88706_89202 = state_88685__$1;
(statearr_88706_89202[(2)] = true);

(statearr_88706_89202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (2))){
var inst_88682 = (state_88685[(2)]);
var state_88685__$1 = state_88685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88685__$1,inst_88682);
} else {
if((state_val_88686 === (11))){
var inst_88668 = (state_88685[(2)]);
var state_88685__$1 = state_88685;
if(cljs.core.truth_(inst_88668)){
var statearr_88715_89203 = state_88685__$1;
(statearr_88715_89203[(1)] = (15));

} else {
var statearr_88716_89204 = state_88685__$1;
(statearr_88716_89204[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (9))){
var inst_88650 = (state_88685[(9)]);
var inst_88656 = inst_88650.cljs$lang$protocol_mask$partition0$;
var inst_88657 = (inst_88656 & (64));
var inst_88659 = inst_88650.cljs$core$ISeq$;
var inst_88660 = (cljs.core.PROTOCOL_SENTINEL === inst_88659);
var inst_88661 = ((inst_88657) || (inst_88660));
var state_88685__$1 = state_88685;
if(cljs.core.truth_(inst_88661)){
var statearr_88718_89205 = state_88685__$1;
(statearr_88718_89205[(1)] = (12));

} else {
var statearr_88719_89207 = state_88685__$1;
(statearr_88719_89207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (5))){
var inst_88650 = (state_88685[(9)]);
var inst_88648 = (state_88685[(2)]);
var inst_88649 = com.wsscode.async.async_cljs.throw_err(inst_88648);
var inst_88650__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_88649);
var inst_88653 = (inst_88650__$1 == null);
var inst_88654 = cljs.core.not(inst_88653);
var state_88685__$1 = (function (){var statearr_88724 = state_88685;
(statearr_88724[(9)] = inst_88650__$1);

return statearr_88724;
})();
if(inst_88654){
var statearr_88725_89208 = state_88685__$1;
(statearr_88725_89208[(1)] = (9));

} else {
var statearr_88727_89209 = state_88685__$1;
(statearr_88727_89209[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (14))){
var inst_88665 = (state_88685[(2)]);
var state_88685__$1 = state_88685;
var statearr_88728_89210 = state_88685__$1;
(statearr_88728_89210[(2)] = inst_88665);

(statearr_88728_89210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (16))){
var inst_88650 = (state_88685[(9)]);
var state_88685__$1 = state_88685;
var statearr_88731_89211 = state_88685__$1;
(statearr_88731_89211[(2)] = inst_88650);

(statearr_88731_89211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (10))){
var state_88685__$1 = state_88685;
var statearr_88732_89212 = state_88685__$1;
(statearr_88732_89212[(2)] = false);

(statearr_88732_89212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88686 === (8))){
var inst_88645 = (state_88685[(2)]);
var inst_88646 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_88645);
var state_88685__$1 = state_88685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88685__$1,(5),inst_88646);
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
});})(c__47946__auto__,map__88608,map__88608__$1,update_http_request))
;
return ((function (switch__47663__auto__,c__47946__auto__,map__88608,map__88608__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0 = (function (){
var statearr_88735 = [null,null,null,null,null,null,null,null,null,null];
(statearr_88735[(0)] = com$wsscode$pathom$fulcro$network$state_machine__47664__auto__);

(statearr_88735[(1)] = (1));

return statearr_88735;
});
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1 = (function (state_88685){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_88685);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e88736){if((e88736 instanceof Object)){
var ex__47667__auto__ = e88736;
var statearr_88737_89213 = state_88685;
(statearr_88737_89213[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_88685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89215 = state_88685;
state_88685 = G__89215;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = function(state_88685){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1.call(this,state_88685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__,map__88608,map__88608__$1,update_http_request))
})();
var state__47948__auto__ = (function (){var statearr_88746 = f__47947__auto__();
(statearr_88746[(6)] = c__47946__auto__);

return statearr_88746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47948__auto__);
});})(c__47946__auto__,map__88608,map__88608__$1,update_http_request))
);

return c__47946__auto__;
});})(map__88608,map__88608__$1,update_http_request))
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

var G__88750 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__88750,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,simple_keyword(cljs.core.key(id_param)))]));
} else {
return G__88750;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__88760 = arguments.length;
switch (G__88760) {
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
return (function (state_88823){
var state_val_88825 = (state_88823[(1)]);
if((state_val_88825 === (7))){
var state_88823__$1 = state_88823;
var statearr_88828_89219 = state_88823__$1;
(statearr_88828_89219[(2)] = false);

(statearr_88828_89219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (1))){
var state_88823__$1 = state_88823;
var statearr_88829_89220 = state_88823__$1;
(statearr_88829_89220[(2)] = null);

(statearr_88829_89220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (4))){
var inst_88776 = (state_88823[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_88823,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_88771 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_88772 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_88773 = (new cljs.core.PersistentArrayMap(null,1,inst_88772,null));
var inst_88774 = (new cljs.core.PersistentHashSet(null,inst_88773,null));
var inst_88775 = com.wsscode.pathom.core.elide_ast_nodes(inst_88771,inst_88774);
var inst_88776__$1 = com.wsscode.pathom.core.ast__GT_query(inst_88775);
var inst_88777 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_88778 = [fulcro.client.primitives.tempid_QMARK_];
var inst_88779 = cljs.core.PersistentHashMap.fromArrays(inst_88777,inst_88778);
var inst_88780 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_88779,config], 0));
var inst_88781 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_88776__$1,inst_88780);
var inst_88782 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_88783 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_88784 = [inst_88781];
var inst_88785 = cljs.core.PersistentHashMap.fromArrays(inst_88783,inst_88784);
var inst_88786 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_88785];
var inst_88787 = cljs.core.PersistentHashMap.fromArrays(inst_88782,inst_88786);
var inst_88788 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_88787);
var state_88823__$1 = (function (){var statearr_88830 = state_88823;
(statearr_88830[(7)] = inst_88776__$1);

return statearr_88830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88823__$1,(5),inst_88788);
} else {
if((state_val_88825 === (13))){
var inst_88792 = (state_88823[(8)]);
var state_88823__$1 = state_88823;
var statearr_88832_89221 = state_88823__$1;
(statearr_88832_89221[(2)] = inst_88792);

(statearr_88832_89221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (6))){
var inst_88792 = (state_88823[(8)]);
var inst_88797 = inst_88792.cljs$lang$protocol_mask$partition0$;
var inst_88798 = (inst_88797 & (64));
var inst_88799 = inst_88792.cljs$core$ISeq$;
var inst_88800 = (cljs.core.PROTOCOL_SENTINEL === inst_88799);
var inst_88801 = ((inst_88798) || (inst_88800));
var state_88823__$1 = state_88823;
if(cljs.core.truth_(inst_88801)){
var statearr_88833_89222 = state_88823__$1;
(statearr_88833_89222[(1)] = (9));

} else {
var statearr_88834_89223 = state_88823__$1;
(statearr_88834_89223[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (3))){
var inst_88763 = (state_88823[(2)]);
var inst_88764 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_88763) : error.call(null,inst_88763));
var state_88823__$1 = state_88823;
var statearr_88835_89224 = state_88823__$1;
(statearr_88835_89224[(2)] = inst_88764);


cljs.core.async.impl.ioc_helpers.process_exception(state_88823__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (12))){
var inst_88792 = (state_88823[(8)]);
var inst_88810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_88792);
var state_88823__$1 = state_88823;
var statearr_88836_89225 = state_88823__$1;
(statearr_88836_89225[(2)] = inst_88810);

(statearr_88836_89225[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (2))){
var inst_88821 = (state_88823[(2)]);
var state_88823__$1 = state_88823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88823__$1,inst_88821);
} else {
if((state_val_88825 === (11))){
var inst_88805 = (state_88823[(2)]);
var state_88823__$1 = state_88823;
var statearr_88841_89226 = state_88823__$1;
(statearr_88841_89226[(2)] = inst_88805);

(statearr_88841_89226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (9))){
var state_88823__$1 = state_88823;
var statearr_88845_89228 = state_88823__$1;
(statearr_88845_89228[(2)] = true);

(statearr_88845_89228[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (5))){
var inst_88792 = (state_88823[(8)]);
var inst_88790 = (state_88823[(2)]);
var inst_88791 = com.wsscode.async.async_cljs.throw_err(inst_88790);
var inst_88792__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_88791);
var inst_88794 = (inst_88792__$1 == null);
var inst_88795 = cljs.core.not(inst_88794);
var state_88823__$1 = (function (){var statearr_88848 = state_88823;
(statearr_88848[(8)] = inst_88792__$1);

return statearr_88848;
})();
if(inst_88795){
var statearr_88849_89229 = state_88823__$1;
(statearr_88849_89229[(1)] = (6));

} else {
var statearr_88850_89230 = state_88823__$1;
(statearr_88850_89230[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (14))){
var inst_88776 = (state_88823[(7)]);
var inst_88813 = (state_88823[(2)]);
var inst_88814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_88813,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_88815 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_88816 = [inst_88814];
var inst_88817 = cljs.core.PersistentHashMap.fromArrays(inst_88815,inst_88816);
var inst_88818 = com.wsscode.pathom.fulcro.network.graphql_response_parser2(inst_88817,inst_88776);
var inst_88819 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_88818) : ok.call(null,inst_88818));
var state_88823__$1 = state_88823;
var statearr_88851_89232 = state_88823__$1;
(statearr_88851_89232[(2)] = inst_88819);


cljs.core.async.impl.ioc_helpers.process_exception(state_88823__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (10))){
var state_88823__$1 = state_88823;
var statearr_88852_89233 = state_88823__$1;
(statearr_88852_89233[(2)] = false);

(statearr_88852_89233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88825 === (8))){
var inst_88808 = (state_88823[(2)]);
var state_88823__$1 = state_88823;
if(cljs.core.truth_(inst_88808)){
var statearr_88853_89234 = state_88823__$1;
(statearr_88853_89234[(1)] = (12));

} else {
var statearr_88854_89235 = state_88823__$1;
(statearr_88854_89235[(1)] = (13));

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
var statearr_88855 = [null,null,null,null,null,null,null,null,null];
(statearr_88855[(0)] = com$wsscode$pathom$fulcro$network$state_machine__47664__auto__);

(statearr_88855[(1)] = (1));

return statearr_88855;
});
var com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1 = (function (state_88823){
while(true){
var ret_value__47665__auto__ = (function (){try{while(true){
var result__47666__auto__ = switch__47663__auto__(state_88823);
if(cljs.core.keyword_identical_QMARK_(result__47666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47666__auto__;
}
break;
}
}catch (e88856){if((e88856 instanceof Object)){
var ex__47667__auto__ = e88856;
var statearr_88860_89237 = state_88823;
(statearr_88860_89237[(5)] = ex__47667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_88823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e88856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89238 = state_88823;
state_88823 = G__89238;
continue;
} else {
return ret_value__47665__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__ = function(state_88823){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1.call(this,state_88823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__47664__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__47664__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__47664__auto__;
})()
;})(switch__47663__auto__,c__47946__auto__))
})();
var state__47948__auto__ = (function (){var statearr_88861 = f__47947__auto__();
(statearr_88861[(6)] = c__47946__auto__);

return statearr_88861;
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
var G__89239__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__88863_89240 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__88863_89240) : f.call(null,G__88863_89240));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__89239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89241__i = 0, G__89241__a = new Array(arguments.length -  0);
while (G__89241__i < G__89241__a.length) {G__89241__a[G__89241__i] = arguments[G__89241__i + 0]; ++G__89241__i;}
  args = new cljs.core.IndexedSeq(G__89241__a,0,null);
} 
return G__89239__delegate.call(this,args);};
G__89239.cljs$lang$maxFixedArity = 0;
G__89239.cljs$lang$applyTo = (function (arglist__89242){
var args = cljs.core.seq(arglist__89242);
return G__89239__delegate(args);
});
G__89239.cljs$core$IFn$_invoke$arity$variadic = G__89239__delegate;
return G__89239;
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
var vec__88868 = requests;
var seq__88869 = cljs.core.seq(vec__88868);
var first__88870 = cljs.core.first(seq__88869);
var seq__88869__$1 = cljs.core.next(seq__88869);
var vec__88871 = first__88870;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88871,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88871,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88871,(2),null);
var tail = seq__88869__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__88890 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88890,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88890,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88890,(2),null);
var req = vec__88890;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__89243 = cljs.core.next(left);
var G__89244 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__89245 = current;
var G__89246 = next_cycle;
left = G__89243;
groups__$1 = G__89244;
current = G__89245;
next_cycle = G__89246;
continue;
} else {
var G__89247 = cljs.core.next(left);
var G__89248 = groups__$1;
var G__89249 = current;
var G__89250 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__89247;
groups__$1 = G__89248;
current = G__89249;
next_cycle = G__89250;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__88896 = next_cycle;
var seq__88897 = cljs.core.seq(vec__88896);
var first__88898 = cljs.core.first(seq__88897);
var seq__88897__$1 = cljs.core.next(seq__88897);
var vec__88899 = first__88898;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88899,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88899,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88899,(2),null);
var tail__$1 = seq__88897__$1;
var G__89251 = tail__$1;
var G__89252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__89253 = (current + (1));
var G__89254 = cljs.core.PersistentVector.EMPTY;
left = G__89251;
groups__$1 = G__89252;
current = G__89253;
next_cycle = G__89254;
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
return com.wsscode.pathom.fulcro.network.debounce((function (p1__88902_SHARP_){
var G__88903 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__88902_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__88903) : f.call(null,G__88903));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k88908,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__88918 = k88908;
var G__88918__$1 = (((G__88918 instanceof cljs.core.Keyword))?G__88918.fqn:null);
switch (G__88918__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k88908,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__88922){
var vec__88923 = p__88922;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88923,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88923,(1),null);
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__88907){
var self__ = this;
var G__88907__$1 = this;
return (new cljs.core.RecordIter((0),G__88907__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this88910,other88911){
var self__ = this;
var this88910__$1 = this;
return (((!((other88911 == null)))) && ((this88910__$1.constructor === other88911.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88910__$1.send_fn,other88911.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this88910__$1.__extmap,other88911.__extmap)));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__88907){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__88937 = cljs.core.keyword_identical_QMARK_;
var expr__88938 = k__4393__auto__;
if(cljs.core.truth_((pred__88937.cljs$core$IFn$_invoke$arity$2 ? pred__88937.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__88938) : pred__88937.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__88938)))){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__88907,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__88907),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__88907){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__88907,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__88912){
var extmap__4424__auto__ = (function (){var G__88945 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__88912,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__88912)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__88945);
} else {
return G__88945;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__88912),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__88953 = arguments.length;
switch (G__88953) {
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
var seq__88957 = cljs.core.seq(reqs);
var chunk__88958 = null;
var count__88959 = (0);
var i__88960 = (0);
while(true){
if((i__88960 < count__88959)){
var map__89016 = chunk__88958.cljs$core$IIndexed$_nth$arity$2(null,i__88960);
var map__89016__$1 = (((((!((map__89016 == null))))?(((((map__89016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89016):map__89016);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89016__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89016__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89016__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__88957,chunk__88958,count__88959,i__88960,map__89016,map__89016__$1,query,ok,err){
return (function (p1__88947_SHARP_){
var seq__89021 = cljs.core.seq(ok);
var chunk__89022 = null;
var count__89023 = (0);
var i__89024 = (0);
while(true){
if((i__89024 < count__89023)){
var f = chunk__89022.cljs$core$IIndexed$_nth$arity$2(null,i__89024);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88947_SHARP_) : f.call(null,p1__88947_SHARP_));


var G__89258 = seq__89021;
var G__89259 = chunk__89022;
var G__89260 = count__89023;
var G__89261 = (i__89024 + (1));
seq__89021 = G__89258;
chunk__89022 = G__89259;
count__89023 = G__89260;
i__89024 = G__89261;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__89021);
if(temp__5720__auto__){
var seq__89021__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__89021__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__89021__$1);
var G__89262 = cljs.core.chunk_rest(seq__89021__$1);
var G__89263 = c__4550__auto__;
var G__89264 = cljs.core.count(c__4550__auto__);
var G__89265 = (0);
seq__89021 = G__89262;
chunk__89022 = G__89263;
count__89023 = G__89264;
i__89024 = G__89265;
continue;
} else {
var f = cljs.core.first(seq__89021__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88947_SHARP_) : f.call(null,p1__88947_SHARP_));


var G__89266 = cljs.core.next(seq__89021__$1);
var G__89267 = null;
var G__89268 = (0);
var G__89269 = (0);
seq__89021 = G__89266;
chunk__89022 = G__89267;
count__89023 = G__89268;
i__89024 = G__89269;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__88957,chunk__88958,count__88959,i__88960,map__89016,map__89016__$1,query,ok,err))
,((function (seq__88957,chunk__88958,count__88959,i__88960,map__89016,map__89016__$1,query,ok,err){
return (function (p1__88948_SHARP_){
var seq__89028 = cljs.core.seq(err);
var chunk__89029 = null;
var count__89030 = (0);
var i__89031 = (0);
while(true){
if((i__89031 < count__89030)){
var f = chunk__89029.cljs$core$IIndexed$_nth$arity$2(null,i__89031);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88948_SHARP_) : f.call(null,p1__88948_SHARP_));


var G__89271 = seq__89028;
var G__89272 = chunk__89029;
var G__89273 = count__89030;
var G__89274 = (i__89031 + (1));
seq__89028 = G__89271;
chunk__89029 = G__89272;
count__89030 = G__89273;
i__89031 = G__89274;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__89028);
if(temp__5720__auto__){
var seq__89028__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__89028__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__89028__$1);
var G__89275 = cljs.core.chunk_rest(seq__89028__$1);
var G__89276 = c__4550__auto__;
var G__89277 = cljs.core.count(c__4550__auto__);
var G__89278 = (0);
seq__89028 = G__89275;
chunk__89029 = G__89276;
count__89030 = G__89277;
i__89031 = G__89278;
continue;
} else {
var f = cljs.core.first(seq__89028__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88948_SHARP_) : f.call(null,p1__88948_SHARP_));


var G__89279 = cljs.core.next(seq__89028__$1);
var G__89280 = null;
var G__89281 = (0);
var G__89282 = (0);
seq__89028 = G__89279;
chunk__89029 = G__89280;
count__89030 = G__89281;
i__89031 = G__89282;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__88957,chunk__88958,count__88959,i__88960,map__89016,map__89016__$1,query,ok,err))
);


var G__89283 = seq__88957;
var G__89284 = chunk__88958;
var G__89285 = count__88959;
var G__89286 = (i__88960 + (1));
seq__88957 = G__89283;
chunk__88958 = G__89284;
count__88959 = G__89285;
i__88960 = G__89286;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__88957);
if(temp__5720__auto__){
var seq__88957__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__88957__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__88957__$1);
var G__89287 = cljs.core.chunk_rest(seq__88957__$1);
var G__89288 = c__4550__auto__;
var G__89289 = cljs.core.count(c__4550__auto__);
var G__89290 = (0);
seq__88957 = G__89287;
chunk__88958 = G__89288;
count__88959 = G__89289;
i__88960 = G__89290;
continue;
} else {
var map__89039 = cljs.core.first(seq__88957__$1);
var map__89039__$1 = (((((!((map__89039 == null))))?(((((map__89039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89039):map__89039);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89039__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89039__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89039__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__88957,chunk__88958,count__88959,i__88960,map__89039,map__89039__$1,query,ok,err,seq__88957__$1,temp__5720__auto__){
return (function (p1__88947_SHARP_){
var seq__89042 = cljs.core.seq(ok);
var chunk__89043 = null;
var count__89044 = (0);
var i__89045 = (0);
while(true){
if((i__89045 < count__89044)){
var f = chunk__89043.cljs$core$IIndexed$_nth$arity$2(null,i__89045);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88947_SHARP_) : f.call(null,p1__88947_SHARP_));


var G__89293 = seq__89042;
var G__89294 = chunk__89043;
var G__89295 = count__89044;
var G__89296 = (i__89045 + (1));
seq__89042 = G__89293;
chunk__89043 = G__89294;
count__89044 = G__89295;
i__89045 = G__89296;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__89042);
if(temp__5720__auto____$1){
var seq__89042__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__89042__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__89042__$1);
var G__89297 = cljs.core.chunk_rest(seq__89042__$1);
var G__89298 = c__4550__auto__;
var G__89299 = cljs.core.count(c__4550__auto__);
var G__89300 = (0);
seq__89042 = G__89297;
chunk__89043 = G__89298;
count__89044 = G__89299;
i__89045 = G__89300;
continue;
} else {
var f = cljs.core.first(seq__89042__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88947_SHARP_) : f.call(null,p1__88947_SHARP_));


var G__89301 = cljs.core.next(seq__89042__$1);
var G__89302 = null;
var G__89303 = (0);
var G__89304 = (0);
seq__89042 = G__89301;
chunk__89043 = G__89302;
count__89044 = G__89303;
i__89045 = G__89304;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__88957,chunk__88958,count__88959,i__88960,map__89039,map__89039__$1,query,ok,err,seq__88957__$1,temp__5720__auto__))
,((function (seq__88957,chunk__88958,count__88959,i__88960,map__89039,map__89039__$1,query,ok,err,seq__88957__$1,temp__5720__auto__){
return (function (p1__88948_SHARP_){
var seq__89052 = cljs.core.seq(err);
var chunk__89053 = null;
var count__89054 = (0);
var i__89055 = (0);
while(true){
if((i__89055 < count__89054)){
var f = chunk__89053.cljs$core$IIndexed$_nth$arity$2(null,i__89055);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88948_SHARP_) : f.call(null,p1__88948_SHARP_));


var G__89305 = seq__89052;
var G__89306 = chunk__89053;
var G__89307 = count__89054;
var G__89308 = (i__89055 + (1));
seq__89052 = G__89305;
chunk__89053 = G__89306;
count__89054 = G__89307;
i__89055 = G__89308;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__89052);
if(temp__5720__auto____$1){
var seq__89052__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__89052__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__89052__$1);
var G__89309 = cljs.core.chunk_rest(seq__89052__$1);
var G__89310 = c__4550__auto__;
var G__89311 = cljs.core.count(c__4550__auto__);
var G__89312 = (0);
seq__89052 = G__89309;
chunk__89053 = G__89310;
count__89054 = G__89311;
i__89055 = G__89312;
continue;
} else {
var f = cljs.core.first(seq__89052__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__88948_SHARP_) : f.call(null,p1__88948_SHARP_));


var G__89313 = cljs.core.next(seq__89052__$1);
var G__89314 = null;
var G__89315 = (0);
var G__89316 = (0);
seq__89052 = G__89313;
chunk__89053 = G__89314;
count__89054 = G__89315;
i__89055 = G__89316;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__88957,chunk__88958,count__88959,i__88960,map__89039,map__89039__$1,query,ok,err,seq__88957__$1,temp__5720__auto__))
);


var G__89317 = cljs.core.next(seq__88957__$1);
var G__89318 = null;
var G__89319 = (0);
var G__89320 = (0);
seq__88957 = G__89317;
chunk__88958 = G__89318;
count__88959 = G__89319;
i__88960 = G__89320;
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
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__89068){
var map__89069 = p__89068;
var map__89069__$1 = (((((!((map__89069 == null))))?(((((map__89069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__89069):map__89069);
var env = map__89069__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89069__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__89072 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89072,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89072,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
