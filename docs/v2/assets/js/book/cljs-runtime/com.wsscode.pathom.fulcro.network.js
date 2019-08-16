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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49341,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49363 = k49341;
var G__49363__$1 = (((G__49363 instanceof cljs.core.Keyword))?G__49363.fqn:null);
switch (G__49363__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49341,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49365){
var vec__49366 = p__49365;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49366,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49366,(1),null);
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49340){
var self__ = this;
var G__49340__$1 = this;
return (new cljs.core.RecordIter((0),G__49340__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49373 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-654270555 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49373(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49342,other49343){
var self__ = this;
var this49342__$1 = this;
return (((!((other49343 == null)))) && ((this49342__$1.constructor === other49343.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49342__$1.parser,other49343.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49342__$1.__extmap,other49343.__extmap)));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49340){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49378 = cljs.core.keyword_identical_QMARK_;
var expr__49379 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49383 = new cljs.core.Keyword(null,"parser","parser",-1543495310);
var G__49384 = expr__49379;
return (pred__49378.cljs$core$IFn$_invoke$arity$2 ? pred__49378.cljs$core$IFn$_invoke$arity$2(G__49383,G__49384) : pred__49378.call(null,G__49383,G__49384));
})())){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__49340,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49340),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49340){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__49340,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__49388){
var self__ = this;
var map__49389 = p__49388;
var map__49389__$1 = (((((!((map__49389 == null))))?(((((map__49389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49389):map__49389);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49389__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49389__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49389__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49389__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,this$__$1,map__49389,map__49389__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,this$__$1,map__49389,map__49389__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_49420){
var state_val_49421 = (state_49420[(1)]);
if((state_val_49421 === (1))){
var state_49420__$1 = state_49420;
var statearr_49424_50707 = state_49420__$1;
(statearr_49424_50707[(2)] = null);

(statearr_49424_50707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (2))){
var inst_49418 = (state_49420[(2)]);
var state_49420__$1 = state_49420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49420__$1,inst_49418);
} else {
if((state_val_49421 === (3))){
var inst_49392 = (state_49420[(2)]);
var inst_49393 = console.error("PathomRemote error:",inst_49392);
var inst_49395 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49397 = [inst_49392];
var inst_49398 = cljs.core.PersistentHashMap.fromArrays(inst_49395,inst_49397);
var inst_49399 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_49398) : error_handler.call(null,inst_49398));
var state_49420__$1 = (function (){var statearr_49426 = state_49420;
(statearr_49426[(7)] = inst_49393);

return statearr_49426;
})();
var statearr_49427_50720 = state_49420__$1;
(statearr_49427_50720[(2)] = inst_49399);


cljs.core.async.impl.ioc_helpers.process_exception(state_49420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (4))){
var inst_49405 = (state_49420[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49420,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49403 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49404 = cljs.core.PersistentHashMap.EMPTY;
var inst_49405__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_49404,edn) : self__.parser.call(null,inst_49404,edn));
var inst_49406 = com.wsscode.common.async_cljs.chan_QMARK_(inst_49405__$1);
var state_49420__$1 = (function (){var statearr_49428 = state_49420;
(statearr_49428[(9)] = inst_49403);

(statearr_49428[(8)] = inst_49405__$1);

return statearr_49428;
})();
if(inst_49406){
var statearr_49430_50726 = state_49420__$1;
(statearr_49430_50726[(1)] = (5));

} else {
var statearr_49431_50727 = state_49420__$1;
(statearr_49431_50727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (5))){
var inst_49405 = (state_49420[(8)]);
var state_49420__$1 = state_49420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49420__$1,(8),inst_49405);
} else {
if((state_val_49421 === (6))){
var inst_49405 = (state_49420[(8)]);
var state_49420__$1 = state_49420;
var statearr_49433_50732 = state_49420__$1;
(statearr_49433_50732[(2)] = inst_49405);

(statearr_49433_50732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (7))){
var inst_49403 = (state_49420[(9)]);
var inst_49413 = (state_49420[(2)]);
var inst_49414 = [edn,inst_49413];
var inst_49415 = cljs.core.PersistentHashMap.fromArrays(inst_49403,inst_49414);
var inst_49416 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_49415) : ok_handler.call(null,inst_49415));
var state_49420__$1 = state_49420;
var statearr_49434_50740 = state_49420__$1;
(statearr_49434_50740[(2)] = inst_49416);


cljs.core.async.impl.ioc_helpers.process_exception(state_49420__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49421 === (8))){
var inst_49409 = (state_49420[(2)]);
var inst_49410 = com.wsscode.common.async_cljs.throw_err(inst_49409);
var state_49420__$1 = state_49420;
var statearr_49436_50742 = state_49420__$1;
(statearr_49436_50742[(2)] = inst_49410);

(statearr_49436_50742[(1)] = (7));


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
});})(c__39084__auto__,this$__$1,map__49389,map__49389__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__38786__auto__,c__39084__auto__,this$__$1,map__49389,map__49389__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0 = (function (){
var statearr_49438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49438[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38787__auto__);

(statearr_49438[(1)] = (1));

return statearr_49438;
});
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1 = (function (state_49420){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49420);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e49439){if((e49439 instanceof Object)){
var ex__38790__auto__ = e49439;
var statearr_49441_50747 = state_49420;
(statearr_49441_50747[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49439;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50753 = state_49420;
state_49420 = G__50753;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__ = function(state_49420){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1.call(this,state_49420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,this$__$1,map__49389,map__49389__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__39086__auto__ = (function (){var statearr_49442 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_49442[(6)] = c__39084__auto__);

return statearr_49442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,this$__$1,map__49389,map__49389__$1,edn,ok_handler,error_handler,progress_handler))
);

return c__39084__auto__;
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
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__49353){
var extmap__4424__auto__ = (function (){var G__49448 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49353,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__49353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49448);
} else {
return G__49448;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__49353),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49453,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49461 = k49453;
var G__49461__$1 = (((G__49461 instanceof cljs.core.Keyword))?G__49461.fqn:null);
switch (G__49461__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49453,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49462){
var vec__49463 = p__49462;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49463,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49463,(1),null);
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49452){
var self__ = this;
var G__49452__$1 = this;
return (new cljs.core.RecordIter((0),G__49452__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49467 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1603683175 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49467(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49454,other49455){
var self__ = this;
var this49454__$1 = this;
return (((!((other49455 == null)))) && ((this49454__$1.constructor === other49455.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49454__$1.f,other49455.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49454__$1.serialize_QMARK_,other49455.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49454__$1.__extmap,other49455.__extmap)));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49452){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49468 = cljs.core.keyword_identical_QMARK_;
var expr__49469 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49471 = new cljs.core.Keyword(null,"f","f",-1597136552);
var G__49472 = expr__49469;
return (pred__49468.cljs$core$IFn$_invoke$arity$2 ? pred__49468.cljs$core$IFn$_invoke$arity$2(G__49471,G__49472) : pred__49468.call(null,G__49471,G__49472));
})())){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__49452,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49473 = new cljs.core.Keyword(null,"serialize?","serialize?",1512776885);
var G__49474 = expr__49469;
return (pred__49468.cljs$core$IFn$_invoke$arity$2 ? pred__49468.cljs$core$IFn$_invoke$arity$2(G__49473,G__49474) : pred__49468.call(null,G__49473,G__49474));
})())){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__49452,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49452),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49452){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__49452,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__49456){
var extmap__4424__auto__ = (function (){var G__49475 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49456,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__49456)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49475);
} else {
return G__49475;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__49456),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__49456),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__49479 = arguments.length;
switch (G__49479) {
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49489,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49496 = k49489;
var G__49496__$1 = (((G__49496 instanceof cljs.core.Keyword))?G__49496.fqn:null);
switch (G__49496__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49489,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49499){
var vec__49500 = p__49499;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49500,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49500,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49488){
var self__ = this;
var G__49488__$1 = this;
return (new cljs.core.RecordIter((0),G__49488__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49507 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-928703448 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49507(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49490,other49491){
var self__ = this;
var this49490__$1 = this;
return (((!((other49491 == null)))) && ((this49490__$1.constructor === other49491.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49490__$1.network,other49491.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49490__$1.options,other49491.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49490__$1.__extmap,other49491.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__49520 = self__.options;
var map__49520__$1 = (((((!((map__49520 == null))))?(((((map__49520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49520):map__49520);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49520__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__49520,map__49520__$1,___$1){
return (function (___$2,x){
return x;
});})(map__49520,map__49520__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49520__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__49520,map__49520__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__49520,map__49520__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49520__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__49520,map__49520__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__49520,map__49520__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49520__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__49530 = edn_SINGLEQUOTE_;
var G__49531 = ((function (G__49530,edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__49530,edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49484_SHARP_){
var G__49533 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49484_SHARP_) : transform_response.call(null,env,p1__49484_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__49533) : ok.call(null,G__49533));
});})(G__49530,edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__49530,edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49485_SHARP_){
var G__49534 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49485_SHARP_) : transform_error.call(null,env,p1__49485_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__49534) : error.call(null,G__49534));
});})(G__49530,edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__49530,edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__49530,G__49531) : transform_transmission.call(null,G__49530,G__49531));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49486_SHARP_){
var G__49535 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49486_SHARP_) : transform_response.call(null,env,p1__49486_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__49535) : ok.call(null,G__49535));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__49487_SHARP_){
var G__49536 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49487_SHARP_) : transform_error.call(null,env,p1__49487_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__49536) : error.call(null,G__49536));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49520,map__49520__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
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
}catch (e49540){var ___$2 = e49540;
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49488){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49543 = cljs.core.keyword_identical_QMARK_;
var expr__49544 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49546 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__49547 = expr__49544;
return (pred__49543.cljs$core$IFn$_invoke$arity$2 ? pred__49543.cljs$core$IFn$_invoke$arity$2(G__49546,G__49547) : pred__49543.call(null,G__49546,G__49547));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__49488,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49549 = new cljs.core.Keyword(null,"options","options",99638489);
var G__49550 = expr__49544;
return (pred__49543.cljs$core$IFn$_invoke$arity$2 ? pred__49543.cljs$core$IFn$_invoke$arity$2(G__49549,G__49550) : pred__49543.call(null,G__49549,G__49550));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__49488,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49488),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49488){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__49488,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__49493){
var extmap__4424__auto__ = (function (){var G__49557 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49493,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__49493)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49557);
} else {
return G__49557;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__49493),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49493),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49565,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49573 = k49565;
var G__49573__$1 = (((G__49573 instanceof cljs.core.Keyword))?G__49573.fqn:null);
switch (G__49573__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49565,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49577){
var vec__49578 = p__49577;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49578,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49578,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49564){
var self__ = this;
var G__49564__$1 = this;
return (new cljs.core.RecordIter((0),G__49564__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49590 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1483300891 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49590(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49566,other49567){
var self__ = this;
var this49566__$1 = this;
return (((!((other49567 == null)))) && ((this49566__$1.constructor === other49567.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49566__$1.network,other49567.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49566__$1.options,other49567.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49566__$1.__extmap,other49567.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e49592){var ___$2 = e49592;
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49564){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49595 = cljs.core.keyword_identical_QMARK_;
var expr__49596 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49599 = new cljs.core.Keyword(null,"network","network",2050004697);
var G__49600 = expr__49596;
return (pred__49595.cljs$core$IFn$_invoke$arity$2 ? pred__49595.cljs$core$IFn$_invoke$arity$2(G__49599,G__49600) : pred__49595.call(null,G__49599,G__49600));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__49564,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49601 = new cljs.core.Keyword(null,"options","options",99638489);
var G__49602 = expr__49596;
return (pred__49595.cljs$core$IFn$_invoke$arity$2 ? pred__49595.cljs$core$IFn$_invoke$arity$2(G__49601,G__49602) : pred__49595.call(null,G__49601,G__49602));
})())){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__49564,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49564),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49564){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__49564,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__49604){
var self__ = this;
var map__49605 = p__49604;
var map__49605__$1 = (((((!((map__49605 == null))))?(((((map__49605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49605):map__49605);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__49607 = self__.options;
var map__49607__$1 = (((((!((map__49607 == null))))?(((((map__49607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49607):map__49607);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49607__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__49607,map__49607__$1,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49607,map__49607__$1,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49607__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__49607,map__49607__$1,transform_query,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49607,map__49607__$1,transform_query,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49607__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__49607,map__49607__$1,transform_query,transform_response,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49607,map__49607__$1,transform_query,transform_response,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49607__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__49607,map__49607__$1,transform_query,transform_response,transform_error,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__49607,map__49607__$1,transform_query,transform_response,transform_error,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49607__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49607__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__49614 = env;
var G__49615 = edn_SINGLEQUOTE_;
var G__49616 = ((function (G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__49619 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49559_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49559_SHARP_) : transform_response.call(null,env,p1__49559_SHARP_));
});})(G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__49619) : ok_handler.call(null,G__49619));
});})(G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__49620 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49560_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49560_SHARP_) : transform_error.call(null,env,p1__49560_SHARP_));
});})(G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__49620) : error_handler.call(null,G__49620));
});})(G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__49622 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__49622) : progress_handler.call(null,G__49622));
});})(G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__49614,G__49615,edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__49614,G__49615,G__49616) : transform_transmission.call(null,G__49614,G__49615,G__49616));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__49624 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49561_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__49561_SHARP_) : transform_response.call(null,env,p1__49561_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__49624) : ok_handler.call(null,G__49624));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__49626 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__49562_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__49562_SHARP_) : transform_error.call(null,env,p1__49562_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__49626) : error_handler.call(null,G__49626));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__49627 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__49627) : progress_handler.call(null,G__49627));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__49607,map__49607__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__49605,map__49605__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__49568){
var extmap__4424__auto__ = (function (){var G__49633 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49568,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__49568)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49633);
} else {
return G__49633;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__49568),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49568),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__49637 = network;
var G__49637__$1 = (((G__49637 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__49637));
var G__49637__$2 = (((G__49637__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__49637__$1));
if((G__49637__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__49637__$2,app);
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
var G__49643 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49643,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,(function (){var G__49644 = cljs.core.key(id_param);
return (com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.fulcro.network.graphql_response_key.cljs$core$IFn$_invoke$arity$1(G__49644) : com.wsscode.pathom.fulcro.network.graphql_response_key.call(null,G__49644));
})())]));
} else {
return G__49643;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__49654 = arguments.length;
switch (G__49654) {
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

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__49659){
var map__49660 = p__49659;
var map__49660__$1 = (((((!((map__49660 == null))))?(((((map__49660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49660):map__49660);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49660__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__49660,map__49660__$1,update_http_request){
return (function (this$,edn,ok,error){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__49660,map__49660__$1,update_http_request){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__49660,map__49660__$1,update_http_request){
return (function (state_49739){
var state_val_49740 = (state_49739[(1)]);
if((state_val_49740 === (7))){
var inst_49697 = (state_49739[(7)]);
var state_49739__$1 = state_49739;
var statearr_49742_51029 = state_49739__$1;
(statearr_49742_51029[(2)] = inst_49697);

(statearr_49742_51029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (1))){
var state_49739__$1 = state_49739;
var statearr_49747_51030 = state_49739__$1;
(statearr_49747_51030[(2)] = null);

(statearr_49747_51030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (4))){
var inst_49684 = (state_49739[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49739,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49679 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_49680 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_49681 = (new cljs.core.PersistentArrayMap(null,1,inst_49680,null));
var inst_49682 = (new cljs.core.PersistentHashSet(null,inst_49681,null));
var inst_49683 = com.wsscode.pathom.core.elide_ast_nodes(inst_49679,inst_49682);
var inst_49684__$1 = com.wsscode.pathom.core.ast__GT_query(inst_49683);
var inst_49685 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_49686 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_49687 = [inst_49686];
var inst_49688 = cljs.core.PersistentHashMap.fromArrays(inst_49685,inst_49687);
var inst_49689 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_49684__$1,inst_49688);
var inst_49692 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_49693 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_49694 = [inst_49689];
var inst_49695 = cljs.core.PersistentHashMap.fromArrays(inst_49693,inst_49694);
var inst_49696 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_49695];
var inst_49697 = cljs.core.PersistentHashMap.fromArrays(inst_49692,inst_49696);
var state_49739__$1 = (function (){var statearr_49751 = state_49739;
(statearr_49751[(8)] = inst_49684__$1);

(statearr_49751[(7)] = inst_49697);

return statearr_49751;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_49754_51087 = state_49739__$1;
(statearr_49754_51087[(1)] = (6));

} else {
var statearr_49755_51089 = state_49739__$1;
(statearr_49755_51089[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (15))){
var inst_49707 = (state_49739[(9)]);
var inst_49725 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49707);
var state_49739__$1 = state_49739;
var statearr_49756_51094 = state_49739__$1;
(statearr_49756_51094[(2)] = inst_49725);

(statearr_49756_51094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (13))){
var state_49739__$1 = state_49739;
var statearr_49759_51101 = state_49739__$1;
(statearr_49759_51101[(2)] = false);

(statearr_49759_51101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (6))){
var inst_49697 = (state_49739[(7)]);
var inst_49699 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_49697) : update_http_request.call(null,inst_49697));
var state_49739__$1 = state_49739;
var statearr_49761_51109 = state_49739__$1;
(statearr_49761_51109[(2)] = inst_49699);

(statearr_49761_51109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (17))){
var inst_49684 = (state_49739[(8)]);
var inst_49728 = (state_49739[(2)]);
var inst_49729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49728,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_49730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49728,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_49731 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_49732 = [inst_49729];
var inst_49733 = cljs.core.PersistentHashMap.fromArrays(inst_49731,inst_49732);
var inst_49734 = (com.wsscode.pathom.fulcro.network.graphql_response_parser.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.fulcro.network.graphql_response_parser.cljs$core$IFn$_invoke$arity$2(inst_49733,inst_49684) : com.wsscode.pathom.fulcro.network.graphql_response_parser.call(null,inst_49733,inst_49684));
var inst_49735 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_49734) : ok.call(null,inst_49734));
var state_49739__$1 = (function (){var statearr_49763 = state_49739;
(statearr_49763[(10)] = inst_49730);

return statearr_49763;
})();
var statearr_49764_51123 = state_49739__$1;
(statearr_49764_51123[(2)] = inst_49735);


cljs.core.async.impl.ioc_helpers.process_exception(state_49739__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (3))){
var inst_49669 = (state_49739[(2)]);
var inst_49670 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_49669) : error.call(null,inst_49669));
var state_49739__$1 = state_49739;
var statearr_49765_51130 = state_49739__$1;
(statearr_49765_51130[(2)] = inst_49670);


cljs.core.async.impl.ioc_helpers.process_exception(state_49739__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (12))){
var state_49739__$1 = state_49739;
var statearr_49767_51136 = state_49739__$1;
(statearr_49767_51136[(2)] = true);

(statearr_49767_51136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (2))){
var inst_49737 = (state_49739[(2)]);
var state_49739__$1 = state_49739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49739__$1,inst_49737);
} else {
if((state_val_49740 === (11))){
var inst_49723 = (state_49739[(2)]);
var state_49739__$1 = state_49739;
if(cljs.core.truth_(inst_49723)){
var statearr_49771_51147 = state_49739__$1;
(statearr_49771_51147[(1)] = (15));

} else {
var statearr_49772_51149 = state_49739__$1;
(statearr_49772_51149[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (9))){
var inst_49707 = (state_49739[(9)]);
var inst_49712 = inst_49707.cljs$lang$protocol_mask$partition0$;
var inst_49713 = (inst_49712 & (64));
var inst_49714 = inst_49707.cljs$core$ISeq$;
var inst_49715 = (cljs.core.PROTOCOL_SENTINEL === inst_49714);
var inst_49716 = ((inst_49713) || (inst_49715));
var state_49739__$1 = state_49739;
if(cljs.core.truth_(inst_49716)){
var statearr_49773_51158 = state_49739__$1;
(statearr_49773_51158[(1)] = (12));

} else {
var statearr_49774_51162 = state_49739__$1;
(statearr_49774_51162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (5))){
var inst_49707 = (state_49739[(9)]);
var inst_49705 = (state_49739[(2)]);
var inst_49706 = com.wsscode.common.async_cljs.throw_err(inst_49705);
var inst_49707__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_49706);
var inst_49709 = (inst_49707__$1 == null);
var inst_49710 = cljs.core.not(inst_49709);
var state_49739__$1 = (function (){var statearr_49775 = state_49739;
(statearr_49775[(9)] = inst_49707__$1);

return statearr_49775;
})();
if(inst_49710){
var statearr_49776_51173 = state_49739__$1;
(statearr_49776_51173[(1)] = (9));

} else {
var statearr_49777_51178 = state_49739__$1;
(statearr_49777_51178[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (14))){
var inst_49720 = (state_49739[(2)]);
var state_49739__$1 = state_49739;
var statearr_49779_51180 = state_49739__$1;
(statearr_49779_51180[(2)] = inst_49720);

(statearr_49779_51180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (16))){
var inst_49707 = (state_49739[(9)]);
var state_49739__$1 = state_49739;
var statearr_49781_51186 = state_49739__$1;
(statearr_49781_51186[(2)] = inst_49707);

(statearr_49781_51186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (10))){
var state_49739__$1 = state_49739;
var statearr_49782_51187 = state_49739__$1;
(statearr_49782_51187[(2)] = false);

(statearr_49782_51187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49740 === (8))){
var inst_49702 = (state_49739[(2)]);
var inst_49703 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_49702);
var state_49739__$1 = state_49739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49739__$1,(5),inst_49703);
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
});})(c__39084__auto__,map__49660,map__49660__$1,update_http_request))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__49660,map__49660__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0 = (function (){
var statearr_49784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49784[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38787__auto__);

(statearr_49784[(1)] = (1));

return statearr_49784;
});
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1 = (function (state_49739){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49739);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e49785){if((e49785 instanceof Object)){
var ex__38790__auto__ = e49785;
var statearr_49788_51201 = state_49739;
(statearr_49788_51201[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51206 = state_49739;
state_49739 = G__51206;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__ = function(state_49739){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1.call(this,state_49739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__49660,map__49660__$1,update_http_request))
})();
var state__39086__auto__ = (function (){var statearr_49789 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_49789[(6)] = c__39084__auto__);

return statearr_49789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__49660,map__49660__$1,update_http_request))
);

return c__39084__auto__;
});})(map__49660,map__49660__$1,update_http_request))
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

var G__49792 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49792,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,(function (){var G__49793 = cljs.core.key(id_param);
return (simple_keyword.cljs$core$IFn$_invoke$arity$1 ? simple_keyword.cljs$core$IFn$_invoke$arity$1(G__49793) : simple_keyword.call(null,G__49793));
})())]));
} else {
return G__49792;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__49798 = arguments.length;
switch (G__49798) {
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
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__){
return (function (state_49953){
var state_val_49954 = (state_49953[(1)]);
if((state_val_49954 === (7))){
var state_49953__$1 = state_49953;
var statearr_49988_51340 = state_49953__$1;
(statearr_49988_51340[(2)] = false);

(statearr_49988_51340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (1))){
var state_49953__$1 = state_49953;
var statearr_49991_51346 = state_49953__$1;
(statearr_49991_51346[(2)] = null);

(statearr_49991_51346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (4))){
var inst_49829 = (state_49953[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_49953,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_49820 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_49825 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_49826 = (new cljs.core.PersistentArrayMap(null,1,inst_49825,null));
var inst_49827 = (new cljs.core.PersistentHashSet(null,inst_49826,null));
var inst_49828 = com.wsscode.pathom.core.elide_ast_nodes(inst_49820,inst_49827);
var inst_49829__$1 = com.wsscode.pathom.core.ast__GT_query(inst_49828);
var inst_49830 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_49834 = [fulcro.client.primitives.tempid_QMARK_];
var inst_49835 = cljs.core.PersistentHashMap.fromArrays(inst_49830,inst_49834);
var inst_49836 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49835,config], 0));
var inst_49837 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_49829__$1,inst_49836);
var inst_49839 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_49840 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_49841 = [inst_49837];
var inst_49842 = cljs.core.PersistentHashMap.fromArrays(inst_49840,inst_49841);
var inst_49843 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_49842];
var inst_49844 = cljs.core.PersistentHashMap.fromArrays(inst_49839,inst_49843);
var inst_49845 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_49844);
var state_49953__$1 = (function (){var statearr_50053 = state_49953;
(statearr_50053[(7)] = inst_49829__$1);

return statearr_50053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49953__$1,(5),inst_49845);
} else {
if((state_val_49954 === (13))){
var inst_49849 = (state_49953[(8)]);
var state_49953__$1 = state_49953;
var statearr_50054_51435 = state_49953__$1;
(statearr_50054_51435[(2)] = inst_49849);

(statearr_50054_51435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (6))){
var inst_49849 = (state_49953[(8)]);
var inst_49854 = inst_49849.cljs$lang$protocol_mask$partition0$;
var inst_49855 = (inst_49854 & (64));
var inst_49856 = inst_49849.cljs$core$ISeq$;
var inst_49857 = (cljs.core.PROTOCOL_SENTINEL === inst_49856);
var inst_49861 = ((inst_49855) || (inst_49857));
var state_49953__$1 = state_49953;
if(cljs.core.truth_(inst_49861)){
var statearr_50056_51444 = state_49953__$1;
(statearr_50056_51444[(1)] = (9));

} else {
var statearr_50058_51446 = state_49953__$1;
(statearr_50058_51446[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (3))){
var inst_49810 = (state_49953[(2)]);
var inst_49811 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_49810) : error.call(null,inst_49810));
var state_49953__$1 = state_49953;
var statearr_50062_51448 = state_49953__$1;
(statearr_50062_51448[(2)] = inst_49811);


cljs.core.async.impl.ioc_helpers.process_exception(state_49953__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (12))){
var inst_49849 = (state_49953[(8)]);
var inst_49878 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_49849);
var state_49953__$1 = state_49953;
var statearr_50064_51451 = state_49953__$1;
(statearr_50064_51451[(2)] = inst_49878);

(statearr_50064_51451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (2))){
var inst_49905 = (state_49953[(2)]);
var state_49953__$1 = state_49953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49953__$1,inst_49905);
} else {
if((state_val_49954 === (11))){
var inst_49865 = (state_49953[(2)]);
var state_49953__$1 = state_49953;
var statearr_50065_51454 = state_49953__$1;
(statearr_50065_51454[(2)] = inst_49865);

(statearr_50065_51454[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (9))){
var state_49953__$1 = state_49953;
var statearr_50071_51455 = state_49953__$1;
(statearr_50071_51455[(2)] = true);

(statearr_50071_51455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (5))){
var inst_49849 = (state_49953[(8)]);
var inst_49847 = (state_49953[(2)]);
var inst_49848 = com.wsscode.common.async_cljs.throw_err(inst_49847);
var inst_49849__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_49848);
var inst_49851 = (inst_49849__$1 == null);
var inst_49852 = cljs.core.not(inst_49851);
var state_49953__$1 = (function (){var statearr_50077 = state_49953;
(statearr_50077[(8)] = inst_49849__$1);

return statearr_50077;
})();
if(inst_49852){
var statearr_50078_51465 = state_49953__$1;
(statearr_50078_51465[(1)] = (6));

} else {
var statearr_50079_51466 = state_49953__$1;
(statearr_50079_51466[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (14))){
var inst_49829 = (state_49953[(7)]);
var inst_49881 = (state_49953[(2)]);
var inst_49886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49881,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_49890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49881,new cljs.core.Keyword(null,"errors","errors",-908790718));
var inst_49895 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_49898 = [inst_49886];
var inst_49900 = cljs.core.PersistentHashMap.fromArrays(inst_49895,inst_49898);
var inst_49902 = (com.wsscode.pathom.fulcro.network.graphql_response_parser2.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.fulcro.network.graphql_response_parser2.cljs$core$IFn$_invoke$arity$2(inst_49900,inst_49829) : com.wsscode.pathom.fulcro.network.graphql_response_parser2.call(null,inst_49900,inst_49829));
var inst_49903 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_49902) : ok.call(null,inst_49902));
var state_49953__$1 = (function (){var statearr_50082 = state_49953;
(statearr_50082[(9)] = inst_49890);

return statearr_50082;
})();
var statearr_50086_51503 = state_49953__$1;
(statearr_50086_51503[(2)] = inst_49903);


cljs.core.async.impl.ioc_helpers.process_exception(state_49953__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (10))){
var state_49953__$1 = state_49953;
var statearr_50087_51504 = state_49953__$1;
(statearr_50087_51504[(2)] = false);

(statearr_50087_51504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49954 === (8))){
var inst_49868 = (state_49953[(2)]);
var state_49953__$1 = state_49953;
if(cljs.core.truth_(inst_49868)){
var statearr_50089_51507 = state_49953__$1;
(statearr_50089_51507[(1)] = (12));

} else {
var statearr_50091_51508 = state_49953__$1;
(statearr_50091_51508[(1)] = (13));

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
});})(c__39084__auto__))
;
return ((function (switch__38786__auto__,c__39084__auto__){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0 = (function (){
var statearr_50096 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50096[(0)] = com$wsscode$pathom$fulcro$network$state_machine__38787__auto__);

(statearr_50096[(1)] = (1));

return statearr_50096;
});
var com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1 = (function (state_49953){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_49953);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e50099){if((e50099 instanceof Object)){
var ex__38790__auto__ = e50099;
var statearr_50102_51516 = state_49953;
(statearr_50102_51516[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50099;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51518 = state_49953;
state_49953 = G__51518;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__ = function(state_49953){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1.call(this,state_49953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__38787__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__38787__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__))
})();
var state__39086__auto__ = (function (){var statearr_50107 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_50107[(6)] = c__39084__auto__);

return statearr_50107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__))
);

return c__39084__auto__;
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
var G__51526__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__50121_51528 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50121_51528) : f.call(null,G__50121_51528));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__51526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51530__i = 0, G__51530__a = new Array(arguments.length -  0);
while (G__51530__i < G__51530__a.length) {G__51530__a[G__51530__i] = arguments[G__51530__i + 0]; ++G__51530__i;}
  args = new cljs.core.IndexedSeq(G__51530__a,0,null);
} 
return G__51526__delegate.call(this,args);};
G__51526.cljs$lang$maxFixedArity = 0;
G__51526.cljs$lang$applyTo = (function (arglist__51531){
var args = cljs.core.seq(arglist__51531);
return G__51526__delegate(args);
});
G__51526.cljs$core$IFn$_invoke$arity$variadic = G__51526__delegate;
return G__51526;
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
var vec__50129 = requests;
var seq__50130 = cljs.core.seq(vec__50129);
var first__50131 = cljs.core.first(seq__50130);
var seq__50130__$1 = cljs.core.next(seq__50130);
var vec__50132 = first__50131;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50132,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50132,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50132,(2),null);
var tail = seq__50130__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__50175 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50175,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50175,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50175,(2),null);
var req = vec__50175;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__51543 = cljs.core.next(left);
var G__51544 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__51545 = current;
var G__51546 = next_cycle;
left = G__51543;
groups__$1 = G__51544;
current = G__51545;
next_cycle = G__51546;
continue;
} else {
var G__51549 = cljs.core.next(left);
var G__51550 = groups__$1;
var G__51551 = current;
var G__51552 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__51549;
groups__$1 = G__51550;
current = G__51551;
next_cycle = G__51552;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__50182 = next_cycle;
var seq__50183 = cljs.core.seq(vec__50182);
var first__50184 = cljs.core.first(seq__50183);
var seq__50183__$1 = cljs.core.next(seq__50183);
var vec__50185 = first__50184;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50185,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50185,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50185,(2),null);
var tail__$1 = seq__50183__$1;
var G__51555 = tail__$1;
var G__51556 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__51557 = (current + (1));
var G__51558 = cljs.core.PersistentVector.EMPTY;
left = G__51555;
groups__$1 = G__51556;
current = G__51557;
next_cycle = G__51558;
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
return com.wsscode.pathom.fulcro.network.debounce((function (p1__50189_SHARP_){
var G__50194 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__50189_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__50194) : f.call(null,G__50194));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50198,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50209 = k50198;
var G__50209__$1 = (((G__50209 instanceof cljs.core.Keyword))?G__50209.fqn:null);
switch (G__50209__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50198,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50218){
var vec__50222 = p__50218;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50222,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50222,(1),null);
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50197){
var self__ = this;
var G__50197__$1 = this;
return (new cljs.core.RecordIter((0),G__50197__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__50237 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (176772946 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50237(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50199,other50200){
var self__ = this;
var this50199__$1 = this;
return (((!((other50200 == null)))) && ((this50199__$1.constructor === other50200.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50199__$1.send_fn,other50200.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50199__$1.__extmap,other50200.__extmap)));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50197){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50261 = cljs.core.keyword_identical_QMARK_;
var expr__50262 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50264 = new cljs.core.Keyword(null,"send-fn","send-fn",351002041);
var G__50265 = expr__50262;
return (pred__50261.cljs$core$IFn$_invoke$arity$2 ? pred__50261.cljs$core$IFn$_invoke$arity$2(G__50264,G__50265) : pred__50261.call(null,G__50264,G__50265));
})())){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__50197,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50197),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50197){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__50197,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__50203){
var extmap__4424__auto__ = (function (){var G__50281 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50203,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__50203)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50281);
} else {
return G__50281;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__50203),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__50292 = arguments.length;
switch (G__50292) {
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
var seq__50294 = cljs.core.seq(reqs);
var chunk__50295 = null;
var count__50296 = (0);
var i__50297 = (0);
while(true){
if((i__50297 < count__50296)){
var map__50384 = chunk__50295.cljs$core$IIndexed$_nth$arity$2(null,i__50297);
var map__50384__$1 = (((((!((map__50384 == null))))?(((((map__50384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50384):map__50384);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50384__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__50294,chunk__50295,count__50296,i__50297,map__50384,map__50384__$1,query,ok,err){
return (function (p1__50286_SHARP_){
var seq__50406 = cljs.core.seq(ok);
var chunk__50407 = null;
var count__50408 = (0);
var i__50409 = (0);
while(true){
if((i__50409 < count__50408)){
var f = chunk__50407.cljs$core$IIndexed$_nth$arity$2(null,i__50409);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50286_SHARP_) : f.call(null,p1__50286_SHARP_));


var G__51600 = seq__50406;
var G__51601 = chunk__50407;
var G__51602 = count__50408;
var G__51603 = (i__50409 + (1));
seq__50406 = G__51600;
chunk__50407 = G__51601;
count__50408 = G__51602;
i__50409 = G__51603;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50406);
if(temp__5720__auto__){
var seq__50406__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50406__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50406__$1);
var G__51605 = cljs.core.chunk_rest(seq__50406__$1);
var G__51606 = c__4550__auto__;
var G__51607 = cljs.core.count(c__4550__auto__);
var G__51608 = (0);
seq__50406 = G__51605;
chunk__50407 = G__51606;
count__50408 = G__51607;
i__50409 = G__51608;
continue;
} else {
var f = cljs.core.first(seq__50406__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50286_SHARP_) : f.call(null,p1__50286_SHARP_));


var G__51610 = cljs.core.next(seq__50406__$1);
var G__51611 = null;
var G__51612 = (0);
var G__51613 = (0);
seq__50406 = G__51610;
chunk__50407 = G__51611;
count__50408 = G__51612;
i__50409 = G__51613;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50294,chunk__50295,count__50296,i__50297,map__50384,map__50384__$1,query,ok,err))
,((function (seq__50294,chunk__50295,count__50296,i__50297,map__50384,map__50384__$1,query,ok,err){
return (function (p1__50287_SHARP_){
var seq__50455 = cljs.core.seq(err);
var chunk__50456 = null;
var count__50457 = (0);
var i__50458 = (0);
while(true){
if((i__50458 < count__50457)){
var f = chunk__50456.cljs$core$IIndexed$_nth$arity$2(null,i__50458);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50287_SHARP_) : f.call(null,p1__50287_SHARP_));


var G__51614 = seq__50455;
var G__51615 = chunk__50456;
var G__51616 = count__50457;
var G__51617 = (i__50458 + (1));
seq__50455 = G__51614;
chunk__50456 = G__51615;
count__50457 = G__51616;
i__50458 = G__51617;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50455);
if(temp__5720__auto__){
var seq__50455__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50455__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50455__$1);
var G__51618 = cljs.core.chunk_rest(seq__50455__$1);
var G__51619 = c__4550__auto__;
var G__51620 = cljs.core.count(c__4550__auto__);
var G__51621 = (0);
seq__50455 = G__51618;
chunk__50456 = G__51619;
count__50457 = G__51620;
i__50458 = G__51621;
continue;
} else {
var f = cljs.core.first(seq__50455__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50287_SHARP_) : f.call(null,p1__50287_SHARP_));


var G__51622 = cljs.core.next(seq__50455__$1);
var G__51623 = null;
var G__51624 = (0);
var G__51625 = (0);
seq__50455 = G__51622;
chunk__50456 = G__51623;
count__50457 = G__51624;
i__50458 = G__51625;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50294,chunk__50295,count__50296,i__50297,map__50384,map__50384__$1,query,ok,err))
);


var G__51626 = seq__50294;
var G__51627 = chunk__50295;
var G__51628 = count__50296;
var G__51629 = (i__50297 + (1));
seq__50294 = G__51626;
chunk__50295 = G__51627;
count__50296 = G__51628;
i__50297 = G__51629;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__50294);
if(temp__5720__auto__){
var seq__50294__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50294__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50294__$1);
var G__51630 = cljs.core.chunk_rest(seq__50294__$1);
var G__51631 = c__4550__auto__;
var G__51632 = cljs.core.count(c__4550__auto__);
var G__51633 = (0);
seq__50294 = G__51630;
chunk__50295 = G__51631;
count__50296 = G__51632;
i__50297 = G__51633;
continue;
} else {
var map__50473 = cljs.core.first(seq__50294__$1);
var map__50473__$1 = (((((!((map__50473 == null))))?(((((map__50473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50473):map__50473);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50473__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__50294,chunk__50295,count__50296,i__50297,map__50473,map__50473__$1,query,ok,err,seq__50294__$1,temp__5720__auto__){
return (function (p1__50286_SHARP_){
var seq__50478 = cljs.core.seq(ok);
var chunk__50479 = null;
var count__50480 = (0);
var i__50481 = (0);
while(true){
if((i__50481 < count__50480)){
var f = chunk__50479.cljs$core$IIndexed$_nth$arity$2(null,i__50481);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50286_SHARP_) : f.call(null,p1__50286_SHARP_));


var G__51636 = seq__50478;
var G__51637 = chunk__50479;
var G__51638 = count__50480;
var G__51639 = (i__50481 + (1));
seq__50478 = G__51636;
chunk__50479 = G__51637;
count__50480 = G__51638;
i__50481 = G__51639;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__50478);
if(temp__5720__auto____$1){
var seq__50478__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50478__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50478__$1);
var G__51640 = cljs.core.chunk_rest(seq__50478__$1);
var G__51641 = c__4550__auto__;
var G__51642 = cljs.core.count(c__4550__auto__);
var G__51643 = (0);
seq__50478 = G__51640;
chunk__50479 = G__51641;
count__50480 = G__51642;
i__50481 = G__51643;
continue;
} else {
var f = cljs.core.first(seq__50478__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50286_SHARP_) : f.call(null,p1__50286_SHARP_));


var G__51644 = cljs.core.next(seq__50478__$1);
var G__51645 = null;
var G__51646 = (0);
var G__51647 = (0);
seq__50478 = G__51644;
chunk__50479 = G__51645;
count__50480 = G__51646;
i__50481 = G__51647;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50294,chunk__50295,count__50296,i__50297,map__50473,map__50473__$1,query,ok,err,seq__50294__$1,temp__5720__auto__))
,((function (seq__50294,chunk__50295,count__50296,i__50297,map__50473,map__50473__$1,query,ok,err,seq__50294__$1,temp__5720__auto__){
return (function (p1__50287_SHARP_){
var seq__50569 = cljs.core.seq(err);
var chunk__50570 = null;
var count__50571 = (0);
var i__50572 = (0);
while(true){
if((i__50572 < count__50571)){
var f = chunk__50570.cljs$core$IIndexed$_nth$arity$2(null,i__50572);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50287_SHARP_) : f.call(null,p1__50287_SHARP_));


var G__51648 = seq__50569;
var G__51649 = chunk__50570;
var G__51650 = count__50571;
var G__51651 = (i__50572 + (1));
seq__50569 = G__51648;
chunk__50570 = G__51649;
count__50571 = G__51650;
i__50572 = G__51651;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__50569);
if(temp__5720__auto____$1){
var seq__50569__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50569__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__50569__$1);
var G__51652 = cljs.core.chunk_rest(seq__50569__$1);
var G__51653 = c__4550__auto__;
var G__51654 = cljs.core.count(c__4550__auto__);
var G__51655 = (0);
seq__50569 = G__51652;
chunk__50570 = G__51653;
count__50571 = G__51654;
i__50572 = G__51655;
continue;
} else {
var f = cljs.core.first(seq__50569__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__50287_SHARP_) : f.call(null,p1__50287_SHARP_));


var G__51657 = cljs.core.next(seq__50569__$1);
var G__51658 = null;
var G__51659 = (0);
var G__51660 = (0);
seq__50569 = G__51657;
chunk__50570 = G__51658;
count__50571 = G__51659;
i__50572 = G__51660;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__50294,chunk__50295,count__50296,i__50297,map__50473,map__50473__$1,query,ok,err,seq__50294__$1,temp__5720__auto__))
);


var G__51661 = cljs.core.next(seq__50294__$1);
var G__51662 = null;
var G__51663 = (0);
var G__51664 = (0);
seq__50294 = G__51661;
chunk__50295 = G__51662;
count__50296 = G__51663;
i__50297 = G__51664;
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
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__50594){
var map__50595 = p__50594;
var map__50595__$1 = (((((!((map__50595 == null))))?(((((map__50595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50595):map__50595);
var env = map__50595__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50595__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__50601 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50601,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
