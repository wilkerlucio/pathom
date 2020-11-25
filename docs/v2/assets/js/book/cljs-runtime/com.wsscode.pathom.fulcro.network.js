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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59706,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59712 = k59706;
var G__59712__$1 = (((G__59712 instanceof cljs.core.Keyword))?G__59712.fqn:null);
switch (G__59712__$1) {
case "parser":
return self__.parser;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59706,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59713){
var vec__59714 = p__59713;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59714,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59714,(1),null);
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59705){
var self__ = this;
var G__59705__$1 = this;
return (new cljs.core.RecordIter((0),G__59705__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59707,other59708){
var self__ = this;
var this59707__$1 = this;
return (((!((other59708 == null)))) && ((this59707__$1.constructor === other59708.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59707__$1.parser,other59708.parser)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59707__$1.__extmap,other59708.__extmap)));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59705){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59728 = cljs.core.keyword_identical_QMARK_;
var expr__59729 = k__4393__auto__;
if(cljs.core.truth_((pred__59728.cljs$core$IFn$_invoke$arity$2 ? pred__59728.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__59729) : pred__59728.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310),expr__59729)))){
return (new com.wsscode.pathom.fulcro.network.PathomRemote(G__59705,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59705),null));
}
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parser","parser",-1543495310),self__.parser,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59705){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.PathomRemote(self__.parser,G__59705,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.PathomRemote.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__59734){
var self__ = this;
var map__59735 = p__59734;
var map__59735__$1 = (((((!((map__59735 == null))))?(((((map__59735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59735):map__59735);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59735__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,this$__$1,map__59735,map__59735__$1,edn,ok_handler,error_handler,progress_handler){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,this$__$1,map__59735,map__59735__$1,edn,ok_handler,error_handler,progress_handler){
return (function (state_59779){
var state_val_59780 = (state_59779[(1)]);
if((state_val_59780 === (7))){
var inst_59750 = (state_59779[(7)]);
var inst_59757 = com.wsscode.async.async_cljs.promise_QMARK_(inst_59750);
var state_59779__$1 = state_59779;
if(cljs.core.truth_(inst_59757)){
var statearr_59792_60629 = state_59779__$1;
(statearr_59792_60629[(1)] = (10));

} else {
var statearr_59793_60630 = state_59779__$1;
(statearr_59793_60630[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (1))){
var state_59779__$1 = state_59779;
var statearr_59795_60632 = state_59779__$1;
(statearr_59795_60632[(2)] = null);

(statearr_59795_60632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (4))){
var inst_59737 = (state_59779[(2)]);
var inst_59738 = console.error("PathomRemote error:",inst_59737);
var inst_59739 = [new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_59740 = [inst_59737];
var inst_59741 = cljs.core.PersistentHashMap.fromArrays(inst_59739,inst_59740);
var inst_59742 = (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(inst_59741) : error_handler.call(null,inst_59741));
var state_59779__$1 = (function (){var statearr_59798 = state_59779;
(statearr_59798[(8)] = inst_59738);

return statearr_59798;
})();
var statearr_59799_60635 = state_59779__$1;
(statearr_59799_60635[(2)] = inst_59742);

(statearr_59799_60635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (15))){
var state_59779__$1 = state_59779;
var statearr_59802_60637 = state_59779__$1;
(statearr_59802_60637[(2)] = null);

(statearr_59802_60637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (13))){
var inst_59761 = (state_59779[(2)]);
var inst_59762 = com.wsscode.async.async_cljs.consumer_pair(inst_59761);
var state_59779__$1 = state_59779;
var statearr_59805_60638 = state_59779__$1;
(statearr_59805_60638[(2)] = inst_59762);

(statearr_59805_60638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (6))){
var inst_59750 = (state_59779[(7)]);
var state_59779__$1 = state_59779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59779__$1,(9),inst_59750);
} else {
if((state_val_59780 === (3))){
var inst_59777 = (state_59779[(2)]);
var state_59779__$1 = state_59779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59779__$1,inst_59777);
} else {
if((state_val_59780 === (12))){
var inst_59769 = (state_59779[(2)]);
var state_59779__$1 = state_59779;
var statearr_59809_60643 = state_59779__$1;
(statearr_59809_60643[(2)] = inst_59769);

(statearr_59809_60643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (2))){
var inst_59750 = (state_59779[(7)]);
var _ = (function (){var statearr_59810 = state_59779;
(statearr_59810[(4)] = cljs.core.cons((5),(state_59779[(4)])));

return statearr_59810;
})();
var inst_59748 = [new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_59749 = cljs.core.PersistentHashMap.EMPTY;
var inst_59750__$1 = (self__.parser.cljs$core$IFn$_invoke$arity$2 ? self__.parser.cljs$core$IFn$_invoke$arity$2(inst_59749,edn) : self__.parser.call(null,inst_59749,edn));
var inst_59751 = com.wsscode.async.async_cljs.chan_QMARK_(inst_59750__$1);
var state_59779__$1 = (function (){var statearr_59811 = state_59779;
(statearr_59811[(9)] = inst_59748);

(statearr_59811[(7)] = inst_59750__$1);

return statearr_59811;
})();
if(inst_59751){
var statearr_59814_60646 = state_59779__$1;
(statearr_59814_60646[(1)] = (6));

} else {
var statearr_59815_60648 = state_59779__$1;
(statearr_59815_60648[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (11))){
var state_59779__$1 = state_59779;
var statearr_59818_60649 = state_59779__$1;
(statearr_59818_60649[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (9))){
var inst_59754 = (state_59779[(2)]);
var inst_59755 = com.wsscode.async.async_cljs.throw_err(inst_59754);
var state_59779__$1 = state_59779;
var statearr_59820_60650 = state_59779__$1;
(statearr_59820_60650[(2)] = inst_59755);

(statearr_59820_60650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (5))){
var _ = (function (){var statearr_59821 = state_59779;
(statearr_59821[(4)] = cljs.core.rest((state_59779[(4)])));

return statearr_59821;
})();
var state_59779__$1 = state_59779;
var ex59817 = (state_59779__$1[(2)]);
var statearr_59822_60652 = state_59779__$1;
(statearr_59822_60652[(5)] = ex59817);


var statearr_59823_60653 = state_59779__$1;
(statearr_59823_60653[(1)] = (4));

(statearr_59823_60653[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (14))){
var inst_59750 = (state_59779[(7)]);
var state_59779__$1 = state_59779;
var statearr_59824_60656 = state_59779__$1;
(statearr_59824_60656[(2)] = inst_59750);

(statearr_59824_60656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (16))){
var inst_59767 = (state_59779[(2)]);
var state_59779__$1 = state_59779;
var statearr_59825_60657 = state_59779__$1;
(statearr_59825_60657[(2)] = inst_59767);

(statearr_59825_60657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59780 === (10))){
var inst_59750 = (state_59779[(7)]);
var inst_59759 = com.wsscode.async.async_cljs.promise__GT_chan(inst_59750);
var state_59779__$1 = state_59779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59779__$1,(13),inst_59759);
} else {
if((state_val_59780 === (8))){
var inst_59748 = (state_59779[(9)]);
var inst_59771 = (state_59779[(2)]);
var inst_59772 = [edn,inst_59771];
var inst_59773 = cljs.core.PersistentHashMap.fromArrays(inst_59748,inst_59772);
var inst_59774 = (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(inst_59773) : ok_handler.call(null,inst_59773));
var _ = (function (){var statearr_59827 = state_59779;
(statearr_59827[(4)] = cljs.core.rest((state_59779[(4)])));

return statearr_59827;
})();
var state_59779__$1 = state_59779;
var statearr_59828_60662 = state_59779__$1;
(statearr_59828_60662[(2)] = inst_59774);

(statearr_59828_60662[(1)] = (3));


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
});})(c__48839__auto__,this$__$1,map__59735,map__59735__$1,edn,ok_handler,error_handler,progress_handler))
;
return ((function (switch__48139__auto__,c__48839__auto__,this$__$1,map__59735,map__59735__$1,edn,ok_handler,error_handler,progress_handler){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0 = (function (){
var statearr_59829 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59829[(0)] = com$wsscode$pathom$fulcro$network$state_machine__48140__auto__);

(statearr_59829[(1)] = (1));

return statearr_59829;
});
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1 = (function (state_59779){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_59779);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e59830){var ex__48143__auto__ = e59830;
var statearr_59831_60664 = state_59779;
(statearr_59831_60664[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_59779[(4)]))){
var statearr_59832_60665 = state_59779;
(statearr_59832_60665[(1)] = cljs.core.first((state_59779[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60668 = state_59779;
state_59779 = G__60668;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__ = function(state_59779){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1.call(this,state_59779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,this$__$1,map__59735,map__59735__$1,edn,ok_handler,error_handler,progress_handler))
})();
var state__48841__auto__ = (function (){var statearr_59833 = f__48840__auto__();
(statearr_59833[(6)] = c__48839__auto__);

return statearr_59833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,this$__$1,map__59735,map__59735__$1,edn,ok_handler,error_handler,progress_handler))
);

return c__48839__auto__;
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
com.wsscode.pathom.fulcro.network.map__GT_PathomRemote = (function com$wsscode$pathom$fulcro$network$map__GT_PathomRemote(G__59710){
var extmap__4424__auto__ = (function (){var G__59842 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__59710,new cljs.core.Keyword(null,"parser","parser",-1543495310));
if(cljs.core.record_QMARK_(G__59710)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59842);
} else {
return G__59842;
}
})();
return (new com.wsscode.pathom.fulcro.network.PathomRemote(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(G__59710),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59850,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59857 = k59850;
var G__59857__$1 = (((G__59857 instanceof cljs.core.Keyword))?G__59857.fqn:null);
switch (G__59857__$1) {
case "f":
return self__.f;

break;
case "serialize?":
return self__.serialize_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59850,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59862){
var vec__59863 = p__59862;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59863,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59863,(1),null);
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59849){
var self__ = this;
var G__59849__$1 = this;
return (new cljs.core.RecordIter((0),G__59849__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59851,other59852){
var self__ = this;
var this59851__$1 = this;
return (((!((other59852 == null)))) && ((this59851__$1.constructor === other59852.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59851__$1.f,other59852.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59851__$1.serialize_QMARK_,other59852.serialize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59851__$1.__extmap,other59852.__extmap)));
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

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59849){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59881 = cljs.core.keyword_identical_QMARK_;
var expr__59882 = k__4393__auto__;
if(cljs.core.truth_((pred__59881.cljs$core$IFn$_invoke$arity$2 ? pred__59881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__59882) : pred__59881.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__59882)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(G__59849,self__.serialize_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59881.cljs$core$IFn$_invoke$arity$2 ? pred__59881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__59882) : pred__59881.call(null,new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),expr__59882)))){
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,G__59849,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59849),null));
}
}
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"serialize?","serialize?",1512776885),self__.serialize_QMARK_,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.FnNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59849){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.FnNetwork(self__.f,self__.serialize_QMARK_,G__59849,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_FnNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_FnNetwork(G__59855){
var extmap__4424__auto__ = (function (){var G__59888 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59855,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"serialize?","serialize?",1512776885)], 0));
if(cljs.core.record_QMARK_(G__59855)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59888);
} else {
return G__59888;
}
})();
return (new com.wsscode.pathom.fulcro.network.FnNetwork(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__59855),new cljs.core.Keyword(null,"serialize?","serialize?",1512776885).cljs$core$IFn$_invoke$arity$1(G__59855),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Creates a simple Fulcro network out a function, the function will reeive the params:
 *   [network edn ok-callback error-callback]
 */
com.wsscode.pathom.fulcro.network.fn_network = (function com$wsscode$pathom$fulcro$network$fn_network(var_args){
var G__59890 = arguments.length;
switch (G__59890) {
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59906,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59917 = k59906;
var G__59917__$1 = (((G__59917 instanceof cljs.core.Keyword))?G__59917.fqn:null);
switch (G__59917__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59906,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59920){
var vec__59922 = p__59920;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59922,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59922,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59905){
var self__ = this;
var G__59905__$1 = this;
return (new cljs.core.RecordIter((0),G__59905__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59907,other59908){
var self__ = this;
var this59907__$1 = this;
return (((!((other59908 == null)))) && ((this59907__$1.constructor === other59908.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59907__$1.network,other59908.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59907__$1.options,other59908.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59907__$1.__extmap,other59908.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.fulcro$client$network$FulcroNetwork$send$arity$4 = (function (_,edn,ok,error){
var self__ = this;
var ___$1 = this;
var map__59937 = self__.options;
var map__59937__$1 = (((((!((map__59937 == null))))?(((((map__59937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59937):map__59937);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59937__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__59937,map__59937__$1,___$1){
return (function (___$2,x){
return x;
});})(map__59937,map__59937__$1,___$1))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59937__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__59937,map__59937__$1,transform_query,___$1){
return (function (___$2,x){
return x;
});})(map__59937,map__59937__$1,transform_query,___$1))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__59937__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__59937,map__59937__$1,transform_query,transform_response,___$1){
return (function (___$2,x){
return x;
});})(map__59937,map__59937__$1,transform_query,transform_response,___$1))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59937__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59937__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__59948 = edn_SINGLEQUOTE_;
var G__59949 = ((function (G__59948,edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE___$1,((function (G__59948,edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__59900_SHARP_){
var G__59953 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__59900_SHARP_) : transform_response.call(null,env,p1__59900_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__59953) : ok.call(null,G__59953));
});})(G__59948,edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (G__59948,edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__59902_SHARP_){
var G__59954 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__59902_SHARP_) : transform_error.call(null,env,p1__59902_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__59954) : error.call(null,G__59954));
});})(G__59948,edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
);
});})(G__59948,edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$2 ? transform_transmission.cljs$core$IFn$_invoke$arity$2(G__59948,G__59949) : transform_transmission.call(null,G__59948,G__59949));
} else {
return fulcro.client.network.send(self__.network,edn_SINGLEQUOTE_,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__59903_SHARP_){
var G__59957 = (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__59903_SHARP_) : transform_response.call(null,env,p1__59903_SHARP_));
return (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(G__59957) : ok.call(null,G__59957));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
,((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1){
return (function (p1__59904_SHARP_){
var G__59961 = (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__59904_SHARP_) : transform_error.call(null,env,p1__59904_SHARP_));
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__59961) : error.call(null,G__59961));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__59937,map__59937__$1,transform_query,transform_response,transform_error,transform_transmission,app_STAR_,req_id,env,___$1))
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
}catch (e59970){var ___$2 = e59970;
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

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59905){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59972 = cljs.core.keyword_identical_QMARK_;
var expr__59973 = k__4393__auto__;
if(cljs.core.truth_((pred__59972.cljs$core$IFn$_invoke$arity$2 ? pred__59972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__59973) : pred__59972.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__59973)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(G__59905,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59972.cljs$core$IFn$_invoke$arity$2 ? pred__59972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__59973) : pred__59972.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__59973)))){
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,G__59905,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59905),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59905){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(self__.network,self__.options,G__59905,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_TransformNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_TransformNetwork(G__59910){
var extmap__4424__auto__ = (function (){var G__59979 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59910,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__59910)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59979);
} else {
return G__59979;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformNetwork(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__59910),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__59910),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59987,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59995 = k59987;
var G__59995__$1 = (((G__59995 instanceof cljs.core.Keyword))?G__59995.fqn:null);
switch (G__59995__$1) {
case "network":
return self__.network;

break;
case "options":
return self__.options;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59987,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59999){
var vec__60000 = p__59999;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60000,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60000,(1),null);
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59986){
var self__ = this;
var G__59986__$1 = this;
return (new cljs.core.RecordIter((0),G__59986__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"network","network",2050004697),new cljs.core.Keyword(null,"options","options",99638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59988,other59989){
var self__ = this;
var this59988__$1 = this;
return (((!((other59989 == null)))) && ((this59988__$1.constructor === other59989.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59988__$1.network,other59989.network)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59988__$1.options,other59989.options)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59988__$1.__extmap,other59989.__extmap)));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$ = cljs.core.PROTOCOL_SENTINEL;

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$NetworkBehavior$serialize_requests_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return fulcro.client.network.serialize_requests_QMARK_(self__.network);
}catch (e60016){var ___$2 = e60016;
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59986){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__60019 = cljs.core.keyword_identical_QMARK_;
var expr__60020 = k__4393__auto__;
if(cljs.core.truth_((pred__60019.cljs$core$IFn$_invoke$arity$2 ? pred__60019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"network","network",2050004697),expr__60020) : pred__60019.call(null,new cljs.core.Keyword(null,"network","network",2050004697),expr__60020)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(G__59986,self__.options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60019.cljs$core$IFn$_invoke$arity$2 ? pred__60019.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489),expr__60020) : pred__60019.call(null,new cljs.core.Keyword(null,"options","options",99638489),expr__60020)))){
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,G__59986,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59986),null));
}
}
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"network","network",2050004697),self__.network,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"options","options",99638489),self__.options,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59986){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(self__.network,self__.options,G__59986,self__.__extmap,self__.__hash));
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

com.wsscode.pathom.fulcro.network.TransformRemoteI.prototype.fulcro$client$network$FulcroRemoteI$transmit$arity$2 = (function (this$,p__60030){
var self__ = this;
var map__60031 = p__60030;
var map__60031__$1 = (((((!((map__60031 == null))))?(((((map__60031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60031):map__60031);
var edn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957));
var ok_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226));
var progress_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60031__$1,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355));
var this$__$1 = this;
var map__60037 = self__.options;
var map__60037__$1 = (((((!((map__60037 == null))))?(((((map__60037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60037):map__60037);
var transform_query = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60037__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-query","com.wsscode.pathom.fulcro.network/transform-query",-858543588),((function (map__60037,map__60037__$1,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__60037,map__60037__$1,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_response = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60037__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-response","com.wsscode.pathom.fulcro.network/transform-response",612468140),((function (map__60037,map__60037__$1,transform_query,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__60037,map__60037__$1,transform_query,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60037__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-error","com.wsscode.pathom.fulcro.network/transform-error",-1129352368),((function (map__60037,map__60037__$1,transform_query,transform_response,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__60037,map__60037__$1,transform_query,transform_response,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_progress = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60037__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-progress","com.wsscode.pathom.fulcro.network/transform-progress",-587053240),((function (map__60037,map__60037__$1,transform_query,transform_response,transform_error,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (_,x){
return x;
});})(map__60037,map__60037__$1,transform_query,transform_response,transform_error,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
var transform_transmission = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60037__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","transform-transmission","com.wsscode.pathom.fulcro.network/transform-transmission",1217468815));
var app_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60037__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267));
var req_id = cljs.core.random_uuid();
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","request-id","com.wsscode.pathom.fulcro.network/request-id",-2145646802),req_id,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app","com.wsscode.pathom.fulcro.network/app",-1540176162),cljs.core.deref(app_STAR_)], null);
var temp__5718__auto__ = (transform_query.cljs$core$IFn$_invoke$arity$2 ? transform_query.cljs$core$IFn$_invoke$arity$2(env,edn) : transform_query.call(null,env,edn));
if(cljs.core.truth_(temp__5718__auto__)){
var edn_SINGLEQUOTE_ = temp__5718__auto__;
if(cljs.core.truth_(transform_transmission)){
var G__60044 = env;
var G__60045 = edn_SINGLEQUOTE_;
var G__60046 = ((function (G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (edn_SINGLEQUOTE___$1){
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE___$1,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__60047 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__59982_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__59982_SHARP_) : transform_response.call(null,env,p1__59982_SHARP_));
});})(G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__60047) : ok_handler.call(null,G__60047));
});})(G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__60050 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__59983_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__59983_SHARP_) : transform_error.call(null,env,p1__59983_SHARP_));
});})(G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__60050) : error_handler.call(null,G__60050));
});})(G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__60053 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__60053) : progress_handler.call(null,G__60053));
});})(G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
], null));
});})(G__60044,G__60045,edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
;
return (transform_transmission.cljs$core$IFn$_invoke$arity$3 ? transform_transmission.cljs$core$IFn$_invoke$arity$3(G__60044,G__60045,G__60046) : transform_transmission.call(null,G__60044,G__60045,G__60046));
} else {
return fulcro.client.network.transmit(self__.network,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fulcro.client.network","edn","fulcro.client.network/edn",-1239708957),edn_SINGLEQUOTE_,new cljs.core.Keyword("fulcro.client.network","ok-handler","fulcro.client.network/ok-handler",-107274727),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (response){
var G__60055 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__59984_SHARP_){
return (transform_response.cljs$core$IFn$_invoke$arity$2 ? transform_response.cljs$core$IFn$_invoke$arity$2(env,p1__59984_SHARP_) : transform_response.call(null,env,p1__59984_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
return (ok_handler.cljs$core$IFn$_invoke$arity$1 ? ok_handler.cljs$core$IFn$_invoke$arity$1(G__60055) : ok_handler.call(null,G__60055));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","error-handler","fulcro.client.network/error-handler",-607171226),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (error){
var G__60056 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"body","body",-2049205669),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (p1__59985_SHARP_){
return (transform_error.cljs$core$IFn$_invoke$arity$2 ? transform_error.cljs$core$IFn$_invoke$arity$2(env,p1__59985_SHARP_) : transform_error.call(null,env,p1__59985_SHARP_));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
);
return (error_handler.cljs$core$IFn$_invoke$arity$1 ? error_handler.cljs$core$IFn$_invoke$arity$1(G__60056) : error_handler.call(null,G__60056));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
,new cljs.core.Keyword("fulcro.client.network","progress-handler","fulcro.client.network/progress-handler",1886593355),((function (edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler){
return (function (progress){
var G__60057 = (transform_progress.cljs$core$IFn$_invoke$arity$2 ? transform_progress.cljs$core$IFn$_invoke$arity$2(env,progress) : transform_progress.call(null,env,progress));
return (progress_handler.cljs$core$IFn$_invoke$arity$1 ? progress_handler.cljs$core$IFn$_invoke$arity$1(G__60057) : progress_handler.call(null,G__60057));
});})(edn_SINGLEQUOTE_,temp__5718__auto__,map__60037,map__60037__$1,transform_query,transform_response,transform_error,transform_progress,transform_transmission,app_STAR_,req_id,env,this$__$1,map__60031,map__60031__$1,edn,ok_handler,error_handler,progress_handler))
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
com.wsscode.pathom.fulcro.network.map__GT_TransformRemoteI = (function com$wsscode$pathom$fulcro$network$map__GT_TransformRemoteI(G__59991){
var extmap__4424__auto__ = (function (){var G__60063 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59991,new cljs.core.Keyword(null,"network","network",2050004697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489)], 0));
if(cljs.core.record_QMARK_(G__59991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60063);
} else {
return G__60063;
}
})();
return (new com.wsscode.pathom.fulcro.network.TransformRemoteI(new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(G__59991),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__59991),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__60073 = network;
var G__60073__$1 = (((G__60073 == null))?null:new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(G__60073));
var G__60073__$2 = (((G__60073__$1 == null))?null:new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","app*","com.wsscode.pathom.fulcro.network/app*",212485267).cljs$core$IFn$_invoke$arity$1(G__60073__$1));
if((G__60073__$2 == null)){
return null;
} else {
return cljs.core.reset_BANG_(G__60073__$2,app);
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
var G__60086 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60086,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,com.wsscode.pathom.fulcro.network.graphql_response_key(cljs.core.key(id_param)))]));
} else {
return G__60086;
}
})], null);
})], null));
com.wsscode.pathom.fulcro.network.graphql_network = (function com$wsscode$pathom$fulcro$network$graphql_network(var_args){
var G__60090 = arguments.length;
switch (G__60090) {
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

com.wsscode.pathom.fulcro.network.graphql_network.cljs$core$IFn$_invoke$arity$2 = (function (url,p__60096){
var map__60097 = p__60096;
var map__60097__$1 = (((((!((map__60097 == null))))?(((((map__60097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60097):map__60097);
var update_http_request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","update-http-request","com.wsscode.pathom.fulcro.network/update-http-request",-478575150));
return com.wsscode.pathom.fulcro.network.fn_network.cljs$core$IFn$_invoke$arity$1(((function (map__60097,map__60097__$1,update_http_request){
return (function (_this,edn,ok,error){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__60097,map__60097__$1,update_http_request){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__60097,map__60097__$1,update_http_request){
return (function (state_60166){
var state_val_60167 = (state_60166[(1)]);
if((state_val_60167 === (7))){
var inst_60124 = (state_60166[(7)]);
var inst_60126 = (update_http_request.cljs$core$IFn$_invoke$arity$1 ? update_http_request.cljs$core$IFn$_invoke$arity$1(inst_60124) : update_http_request.call(null,inst_60124));
var state_60166__$1 = state_60166;
var statearr_60168_60705 = state_60166__$1;
(statearr_60168_60705[(2)] = inst_60126);

(statearr_60168_60705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (1))){
var state_60166__$1 = state_60166;
var statearr_60169_60706 = state_60166__$1;
(statearr_60169_60706[(2)] = null);

(statearr_60169_60706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (4))){
var inst_60099 = (state_60166[(2)]);
var inst_60100 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_60099) : error.call(null,inst_60099));
var state_60166__$1 = state_60166;
var statearr_60170_60707 = state_60166__$1;
(statearr_60170_60707[(2)] = inst_60100);

(statearr_60170_60707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (15))){
var inst_60147 = (state_60166[(2)]);
var state_60166__$1 = state_60166;
var statearr_60171_60708 = state_60166__$1;
(statearr_60171_60708[(2)] = inst_60147);

(statearr_60171_60708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (13))){
var state_60166__$1 = state_60166;
var statearr_60172_60710 = state_60166__$1;
(statearr_60172_60710[(2)] = true);

(statearr_60172_60710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (6))){
var inst_60134 = (state_60166[(8)]);
var inst_60132 = (state_60166[(2)]);
var inst_60133 = com.wsscode.async.async_cljs.throw_err(inst_60132);
var inst_60134__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_60133);
var inst_60136 = (inst_60134__$1 == null);
var inst_60137 = cljs.core.not(inst_60136);
var state_60166__$1 = (function (){var statearr_60173 = state_60166;
(statearr_60173[(8)] = inst_60134__$1);

return statearr_60173;
})();
if(inst_60137){
var statearr_60174_60711 = state_60166__$1;
(statearr_60174_60711[(1)] = (10));

} else {
var statearr_60175_60712 = state_60166__$1;
(statearr_60175_60712[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (17))){
var inst_60134 = (state_60166[(8)]);
var state_60166__$1 = state_60166;
var statearr_60179_60713 = state_60166__$1;
(statearr_60179_60713[(2)] = inst_60134);

(statearr_60179_60713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (3))){
var inst_60164 = (state_60166[(2)]);
var state_60166__$1 = state_60166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60166__$1,inst_60164);
} else {
if((state_val_60167 === (12))){
var inst_60150 = (state_60166[(2)]);
var state_60166__$1 = state_60166;
if(cljs.core.truth_(inst_60150)){
var statearr_60184_60714 = state_60166__$1;
(statearr_60184_60714[(1)] = (16));

} else {
var statearr_60185_60715 = state_60166__$1;
(statearr_60185_60715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (2))){
var inst_60112 = (state_60166[(9)]);
var _ = (function (){var statearr_60187 = state_60166;
(statearr_60187[(4)] = cljs.core.cons((5),(state_60166[(4)])));

return statearr_60187;
})();
var inst_60107 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_60108 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_60109 = (new cljs.core.PersistentArrayMap(null,1,inst_60108,null));
var inst_60110 = (new cljs.core.PersistentHashSet(null,inst_60109,null));
var inst_60111 = com.wsscode.pathom.core.elide_ast_nodes(inst_60107,inst_60110);
var inst_60112__$1 = com.wsscode.pathom.core.ast__GT_query(inst_60111);
var inst_60113 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","js-name","com.wsscode.pathom.graphql/js-name",1988989576)];
var inst_60114 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.graphql.camel_case,cljs.core.name);
var inst_60115 = [inst_60114];
var inst_60116 = cljs.core.PersistentHashMap.fromArrays(inst_60113,inst_60115);
var inst_60117 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_60112__$1,inst_60116);
var inst_60119 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_60120 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_60121 = [inst_60117];
var inst_60122 = cljs.core.PersistentHashMap.fromArrays(inst_60120,inst_60121);
var inst_60123 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_60122];
var inst_60124 = cljs.core.PersistentHashMap.fromArrays(inst_60119,inst_60123);
var state_60166__$1 = (function (){var statearr_60189 = state_60166;
(statearr_60189[(7)] = inst_60124);

(statearr_60189[(9)] = inst_60112__$1);

return statearr_60189;
})();
if(cljs.core.truth_(update_http_request)){
var statearr_60190_60716 = state_60166__$1;
(statearr_60190_60716[(1)] = (7));

} else {
var statearr_60191_60717 = state_60166__$1;
(statearr_60191_60717[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (11))){
var state_60166__$1 = state_60166;
var statearr_60194_60718 = state_60166__$1;
(statearr_60194_60718[(2)] = false);

(statearr_60194_60718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (9))){
var inst_60129 = (state_60166[(2)]);
var inst_60130 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_60129);
var state_60166__$1 = state_60166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60166__$1,(6),inst_60130);
} else {
if((state_val_60167 === (5))){
var _ = (function (){var statearr_60195 = state_60166;
(statearr_60195[(4)] = cljs.core.rest((state_60166[(4)])));

return statearr_60195;
})();
var state_60166__$1 = state_60166;
var ex60193 = (state_60166__$1[(2)]);
var statearr_60196_60720 = state_60166__$1;
(statearr_60196_60720[(5)] = ex60193);


var statearr_60197_60721 = state_60166__$1;
(statearr_60197_60721[(1)] = (4));

(statearr_60197_60721[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (14))){
var state_60166__$1 = state_60166;
var statearr_60201_60722 = state_60166__$1;
(statearr_60201_60722[(2)] = false);

(statearr_60201_60722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (16))){
var inst_60134 = (state_60166[(8)]);
var inst_60152 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60134);
var state_60166__$1 = state_60166;
var statearr_60203_60723 = state_60166__$1;
(statearr_60203_60723[(2)] = inst_60152);

(statearr_60203_60723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (10))){
var inst_60134 = (state_60166[(8)]);
var inst_60139 = inst_60134.cljs$lang$protocol_mask$partition0$;
var inst_60140 = (inst_60139 & (64));
var inst_60141 = inst_60134.cljs$core$ISeq$;
var inst_60142 = (cljs.core.PROTOCOL_SENTINEL === inst_60141);
var inst_60143 = ((inst_60140) || (inst_60142));
var state_60166__$1 = state_60166;
if(cljs.core.truth_(inst_60143)){
var statearr_60205_60724 = state_60166__$1;
(statearr_60205_60724[(1)] = (13));

} else {
var statearr_60206_60725 = state_60166__$1;
(statearr_60206_60725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (18))){
var inst_60112 = (state_60166[(9)]);
var inst_60155 = (state_60166[(2)]);
var inst_60156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60155,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_60157 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_60158 = [inst_60156];
var inst_60159 = cljs.core.PersistentHashMap.fromArrays(inst_60157,inst_60158);
var inst_60160 = com.wsscode.pathom.fulcro.network.graphql_response_parser(inst_60159,inst_60112);
var inst_60161 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_60160) : ok.call(null,inst_60160));
var _ = (function (){var statearr_60209 = state_60166;
(statearr_60209[(4)] = cljs.core.rest((state_60166[(4)])));

return statearr_60209;
})();
var state_60166__$1 = state_60166;
var statearr_60212_60727 = state_60166__$1;
(statearr_60212_60727[(2)] = inst_60161);

(statearr_60212_60727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60167 === (8))){
var inst_60124 = (state_60166[(7)]);
var state_60166__$1 = state_60166;
var statearr_60215_60728 = state_60166__$1;
(statearr_60215_60728[(2)] = inst_60124);

(statearr_60215_60728[(1)] = (9));


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
});})(c__48839__auto__,map__60097,map__60097__$1,update_http_request))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__60097,map__60097__$1,update_http_request){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0 = (function (){
var statearr_60217 = [null,null,null,null,null,null,null,null,null,null];
(statearr_60217[(0)] = com$wsscode$pathom$fulcro$network$state_machine__48140__auto__);

(statearr_60217[(1)] = (1));

return statearr_60217;
});
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1 = (function (state_60166){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_60166);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e60220){var ex__48143__auto__ = e60220;
var statearr_60221_60729 = state_60166;
(statearr_60221_60729[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_60166[(4)]))){
var statearr_60222_60730 = state_60166;
(statearr_60222_60730[(1)] = cljs.core.first((state_60166[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60732 = state_60166;
state_60166 = G__60732;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__ = function(state_60166){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1.call(this,state_60166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__60097,map__60097__$1,update_http_request))
})();
var state__48841__auto__ = (function (){var statearr_60223 = f__48840__auto__();
(statearr_60223[(6)] = c__48839__auto__);

return statearr_60223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__60097,map__60097__$1,update_http_request))
);

return c__48839__auto__;
});})(map__60097,map__60097__$1,update_http_request))
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

var G__60227 = response;
if(cljs.core.truth_(id_param)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60227,new cljs.core.Keyword("fulcro.client.primitives","tempids","fulcro.client.primitives/tempids",1304031205),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.val(id_param),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,simple_keyword(cljs.core.key(id_param)))]));
} else {
return G__60227;
}
});})(simple_keyword))
], null);
});})(simple_keyword))
], null));
})();
com.wsscode.pathom.fulcro.network.graphql_network2 = (function com$wsscode$pathom$fulcro$network$graphql_network2(var_args){
var G__60229 = arguments.length;
switch (G__60229) {
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
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__){
return (function (state_60294){
var state_val_60295 = (state_60294[(1)]);
if((state_val_60295 === (7))){
var inst_60261 = (state_60294[(7)]);
var inst_60266 = inst_60261.cljs$lang$protocol_mask$partition0$;
var inst_60267 = (inst_60266 & (64));
var inst_60268 = inst_60261.cljs$core$ISeq$;
var inst_60269 = (cljs.core.PROTOCOL_SENTINEL === inst_60268);
var inst_60270 = ((inst_60267) || (inst_60269));
var state_60294__$1 = state_60294;
if(cljs.core.truth_(inst_60270)){
var statearr_60302_60735 = state_60294__$1;
(statearr_60302_60735[(1)] = (10));

} else {
var statearr_60304_60736 = state_60294__$1;
(statearr_60304_60736[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (1))){
var state_60294__$1 = state_60294;
var statearr_60309_60737 = state_60294__$1;
(statearr_60309_60737[(2)] = null);

(statearr_60309_60737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (4))){
var inst_60232 = (state_60294[(2)]);
var inst_60233 = (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(inst_60232) : error.call(null,inst_60232));
var state_60294__$1 = state_60294;
var statearr_60310_60738 = state_60294__$1;
(statearr_60310_60738[(2)] = inst_60233);

(statearr_60310_60738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (15))){
var inst_60245 = (state_60294[(8)]);
var inst_60282 = (state_60294[(2)]);
var inst_60283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60282,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_60285 = [new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031)];
var inst_60286 = [inst_60283];
var inst_60287 = cljs.core.PersistentHashMap.fromArrays(inst_60285,inst_60286);
var inst_60288 = com.wsscode.pathom.fulcro.network.graphql_response_parser2(inst_60287,inst_60245);
var inst_60289 = (ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(inst_60288) : ok.call(null,inst_60288));
var _ = (function (){var statearr_60313 = state_60294;
(statearr_60313[(4)] = cljs.core.rest((state_60294[(4)])));

return statearr_60313;
})();
var state_60294__$1 = state_60294;
var statearr_60315_60739 = state_60294__$1;
(statearr_60315_60739[(2)] = inst_60289);

(statearr_60315_60739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (13))){
var inst_60261 = (state_60294[(7)]);
var inst_60279 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60261);
var state_60294__$1 = state_60294;
var statearr_60318_60740 = state_60294__$1;
(statearr_60318_60740[(2)] = inst_60279);

(statearr_60318_60740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (6))){
var inst_60261 = (state_60294[(7)]);
var inst_60259 = (state_60294[(2)]);
var inst_60260 = com.wsscode.async.async_cljs.throw_err(inst_60259);
var inst_60261__$1 = new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","body","com.wsscode.pathom.diplomat.http/body",839730955).cljs$core$IFn$_invoke$arity$1(inst_60260);
var inst_60263 = (inst_60261__$1 == null);
var inst_60264 = cljs.core.not(inst_60263);
var state_60294__$1 = (function (){var statearr_60319 = state_60294;
(statearr_60319[(7)] = inst_60261__$1);

return statearr_60319;
})();
if(inst_60264){
var statearr_60320_60741 = state_60294__$1;
(statearr_60320_60741[(1)] = (7));

} else {
var statearr_60321_60742 = state_60294__$1;
(statearr_60321_60742[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (3))){
var inst_60292 = (state_60294[(2)]);
var state_60294__$1 = state_60294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60294__$1,inst_60292);
} else {
if((state_val_60295 === (12))){
var inst_60274 = (state_60294[(2)]);
var state_60294__$1 = state_60294;
var statearr_60322_60743 = state_60294__$1;
(statearr_60322_60743[(2)] = inst_60274);

(statearr_60322_60743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (2))){
var inst_60245 = (state_60294[(8)]);
var _ = (function (){var statearr_60323 = state_60294;
(statearr_60323[(4)] = cljs.core.cons((5),(state_60294[(4)])));

return statearr_60323;
})();
var inst_60240 = com.wsscode.pathom.core.query__GT_ast(edn);
var inst_60241 = [new cljs.core.Keyword("com.wsscode.pathom.profile","profile","com.wsscode.pathom.profile/profile",-1055198583),null];
var inst_60242 = (new cljs.core.PersistentArrayMap(null,1,inst_60241,null));
var inst_60243 = (new cljs.core.PersistentHashSet(null,inst_60242,null));
var inst_60244 = com.wsscode.pathom.core.elide_ast_nodes(inst_60240,inst_60243);
var inst_60245__$1 = com.wsscode.pathom.core.ast__GT_query(inst_60244);
var inst_60246 = [new cljs.core.Keyword("com.wsscode.pathom.graphql","tempid?","com.wsscode.pathom.graphql/tempid?",1423381701)];
var inst_60247 = [fulcro.client.primitives.tempid_QMARK_];
var inst_60248 = cljs.core.PersistentHashMap.fromArrays(inst_60246,inst_60247);
var inst_60249 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_60248,config], 0));
var inst_60250 = com.wsscode.pathom.graphql.query__GT_graphql.cljs$core$IFn$_invoke$arity$2(inst_60245__$1,inst_60249);
var inst_60251 = [new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","url","com.wsscode.pathom.diplomat.http/url",1690966630),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","method","com.wsscode.pathom.diplomat.http/method",1862305016),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","as","com.wsscode.pathom.diplomat.http/as",139380761),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","form-params","com.wsscode.pathom.diplomat.http/form-params",1015103523)];
var inst_60252 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_60253 = [inst_60250];
var inst_60254 = cljs.core.PersistentHashMap.fromArrays(inst_60252,inst_60253);
var inst_60255 = [url,new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","post","com.wsscode.pathom.diplomat.http/post",-1010788441),new cljs.core.Keyword("com.wsscode.pathom.diplomat.http","json","com.wsscode.pathom.diplomat.http/json",2025134090),inst_60254];
var inst_60256 = cljs.core.PersistentHashMap.fromArrays(inst_60251,inst_60255);
var inst_60257 = com.wsscode.pathom.diplomat.http.fetch.request_async(inst_60256);
var state_60294__$1 = (function (){var statearr_60324 = state_60294;
(statearr_60324[(8)] = inst_60245__$1);

return statearr_60324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60294__$1,(6),inst_60257);
} else {
if((state_val_60295 === (11))){
var state_60294__$1 = state_60294;
var statearr_60327_60746 = state_60294__$1;
(statearr_60327_60746[(2)] = false);

(statearr_60327_60746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (9))){
var inst_60277 = (state_60294[(2)]);
var state_60294__$1 = state_60294;
if(cljs.core.truth_(inst_60277)){
var statearr_60329_60748 = state_60294__$1;
(statearr_60329_60748[(1)] = (13));

} else {
var statearr_60330_60749 = state_60294__$1;
(statearr_60330_60749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (5))){
var _ = (function (){var statearr_60332 = state_60294;
(statearr_60332[(4)] = cljs.core.rest((state_60294[(4)])));

return statearr_60332;
})();
var state_60294__$1 = state_60294;
var ex60326 = (state_60294__$1[(2)]);
var statearr_60337_60750 = state_60294__$1;
(statearr_60337_60750[(5)] = ex60326);


var statearr_60339_60751 = state_60294__$1;
(statearr_60339_60751[(1)] = (4));

(statearr_60339_60751[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (14))){
var inst_60261 = (state_60294[(7)]);
var state_60294__$1 = state_60294;
var statearr_60344_60752 = state_60294__$1;
(statearr_60344_60752[(2)] = inst_60261);

(statearr_60344_60752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (10))){
var state_60294__$1 = state_60294;
var statearr_60345_60753 = state_60294__$1;
(statearr_60345_60753[(2)] = true);

(statearr_60345_60753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60295 === (8))){
var state_60294__$1 = state_60294;
var statearr_60347_60754 = state_60294__$1;
(statearr_60347_60754[(2)] = false);

(statearr_60347_60754[(1)] = (9));


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
});})(c__48839__auto__))
;
return ((function (switch__48139__auto__,c__48839__auto__){
return (function() {
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto__ = null;
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0 = (function (){
var statearr_60350 = [null,null,null,null,null,null,null,null,null];
(statearr_60350[(0)] = com$wsscode$pathom$fulcro$network$state_machine__48140__auto__);

(statearr_60350[(1)] = (1));

return statearr_60350;
});
var com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1 = (function (state_60294){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_60294);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e60352){var ex__48143__auto__ = e60352;
var statearr_60353_60755 = state_60294;
(statearr_60353_60755[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_60294[(4)]))){
var statearr_60354_60756 = state_60294;
(statearr_60354_60756[(1)] = cljs.core.first((state_60294[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60757 = state_60294;
state_60294 = G__60757;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__ = function(state_60294){
switch(arguments.length){
case 0:
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1.call(this,state_60294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$fulcro$network$state_machine__48140__auto____0;
com$wsscode$pathom$fulcro$network$state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$fulcro$network$state_machine__48140__auto____1;
return com$wsscode$pathom$fulcro$network$state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__))
})();
var state__48841__auto__ = (function (){var statearr_60357 = f__48840__auto__();
(statearr_60357[(6)] = c__48839__auto__);

return statearr_60357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__))
);

return c__48839__auto__;
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
var G__60758__delegate = function (args){
clearTimeout(cljs.core.deref(timer));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(calls,cljs.core.conj,args);

return cljs.core.reset_BANG_(timer,setTimeout(((function (timer,calls){
return (function (){
var G__60366_60759 = cljs.core.deref(calls);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60366_60759) : f.call(null,G__60366_60759));

return cljs.core.reset_BANG_(calls,cljs.core.PersistentVector.EMPTY);
});})(timer,calls))
,interval));
};
var G__60758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60760__i = 0, G__60760__a = new Array(arguments.length -  0);
while (G__60760__i < G__60760__a.length) {G__60760__a[G__60760__i] = arguments[G__60760__i + 0]; ++G__60760__i;}
  args = new cljs.core.IndexedSeq(G__60760__a,0,null);
} 
return G__60758__delegate.call(this,args);};
G__60758.cljs$lang$maxFixedArity = 0;
G__60758.cljs$lang$applyTo = (function (arglist__60761){
var args = cljs.core.seq(arglist__60761);
return G__60758__delegate(args);
});
G__60758.cljs$core$IFn$_invoke$arity$variadic = G__60758__delegate;
return G__60758;
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
var vec__60370 = requests;
var seq__60371 = cljs.core.seq(vec__60370);
var first__60372 = cljs.core.first(seq__60371);
var seq__60371__$1 = cljs.core.next(seq__60371);
var vec__60373 = first__60372;
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60373,(0),null);
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60373,(1),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60373,(2),null);
var tail = seq__60371__$1;
var groups = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err], null)], null)], null);
var left = tail;
var groups__$1 = groups;
var current = (0);
var next_cycle = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(left);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__60394 = temp__5718__auto__;
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60394,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60394,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60394,(2),null);
var req = vec__60394;
var cur_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups__$1,current);
var merged = com.wsscode.pathom.core.merge_queries(new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305).cljs$core$IFn$_invoke$arity$1(cur_group),query);
if(cljs.core.truth_(merged)){
var G__60762 = cljs.core.next(left);
var G__60763 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(groups__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305)], null),merged),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695)], null),cljs.core.conj,ok__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396)], null),cljs.core.conj,err__$1);
var G__60764 = current;
var G__60765 = next_cycle;
left = G__60762;
groups__$1 = G__60763;
current = G__60764;
next_cycle = G__60765;
continue;
} else {
var G__60766 = cljs.core.next(left);
var G__60767 = groups__$1;
var G__60768 = current;
var G__60769 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_cycle,req);
left = G__60766;
groups__$1 = G__60767;
current = G__60768;
next_cycle = G__60769;
continue;
}
} else {
if(cljs.core.seq(next_cycle)){
var vec__60401 = next_cycle;
var seq__60402 = cljs.core.seq(vec__60401);
var first__60403 = cljs.core.first(seq__60402);
var seq__60402__$1 = cljs.core.next(seq__60402);
var vec__60404 = first__60403;
var q__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60404,(0),null);
var ok__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60404,(1),null);
var err__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60404,(2),null);
var tail__$1 = seq__60402__$1;
var G__60770 = tail__$1;
var G__60771 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305),q__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ok__$1], null),new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [err__$1], null)], null));
var G__60772 = (current + (1));
var G__60773 = cljs.core.PersistentVector.EMPTY;
left = G__60770;
groups__$1 = G__60771;
current = G__60772;
next_cycle = G__60773;
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
return com.wsscode.pathom.fulcro.network.debounce((function (p1__60410_SHARP_){
var G__60415 = com.wsscode.pathom.fulcro.network.group_mergeable_requests(p1__60410_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__60415) : f.call(null,G__60415));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k60418,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__60427 = k60418;
var G__60427__$1 = (((G__60427 instanceof cljs.core.Keyword))?G__60427.fqn:null);
switch (G__60427__$1) {
case "send-fn":
return self__.send_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60418,else__4388__auto__);

}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__60428){
var vec__60429 = p__60428;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60429,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60429,(1),null);
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60417){
var self__ = this;
var G__60417__$1 = this;
return (new cljs.core.RecordIter((0),G__60417__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-fn","send-fn",351002041)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60419,other60420){
var self__ = this;
var this60419__$1 = this;
return (((!((other60420 == null)))) && ((this60419__$1.constructor === other60420.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60419__$1.send_fn,other60420.send_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60419__$1.__extmap,other60420.__extmap)));
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

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__60417){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__60445 = cljs.core.keyword_identical_QMARK_;
var expr__60446 = k__4393__auto__;
if(cljs.core.truth_((pred__60445.cljs$core$IFn$_invoke$arity$2 ? pred__60445.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__60446) : pred__60445.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__60446)))){
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(G__60417,self__.__meta,self__.__extmap,null));
} else {
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__60417),null));
}
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn,null))], null),self__.__extmap));
});

com.wsscode.pathom.fulcro.network.BatchNetwork.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__60417){
var self__ = this;
var this__4384__auto____$1 = this;
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(self__.send_fn,G__60417,self__.__extmap,self__.__hash));
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
com.wsscode.pathom.fulcro.network.map__GT_BatchNetwork = (function com$wsscode$pathom$fulcro$network$map__GT_BatchNetwork(G__60424){
var extmap__4424__auto__ = (function (){var G__60462 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60424,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
if(cljs.core.record_QMARK_(G__60424)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60462);
} else {
return G__60462;
}
})();
return (new com.wsscode.pathom.fulcro.network.BatchNetwork(new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__60424),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Wraps a network send calls with a debounce that will accumulate, merge and batch send requests in a time frame
 *   interval.
 */
com.wsscode.pathom.fulcro.network.batch_network = (function com$wsscode$pathom$fulcro$network$batch_network(var_args){
var G__60471 = arguments.length;
switch (G__60471) {
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
var seq__60476 = cljs.core.seq(reqs);
var chunk__60477 = null;
var count__60478 = (0);
var i__60479 = (0);
while(true){
if((i__60479 < count__60478)){
var map__60540 = chunk__60477.cljs$core$IIndexed$_nth$arity$2(null,i__60479);
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__60476,chunk__60477,count__60478,i__60479,map__60540,map__60540__$1,query,ok,err){
return (function (p1__60465_SHARP_){
var seq__60545 = cljs.core.seq(ok);
var chunk__60546 = null;
var count__60547 = (0);
var i__60548 = (0);
while(true){
if((i__60548 < count__60547)){
var f = chunk__60546.cljs$core$IIndexed$_nth$arity$2(null,i__60548);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60465_SHARP_) : f.call(null,p1__60465_SHARP_));


var G__60782 = seq__60545;
var G__60783 = chunk__60546;
var G__60784 = count__60547;
var G__60785 = (i__60548 + (1));
seq__60545 = G__60782;
chunk__60546 = G__60783;
count__60547 = G__60784;
i__60548 = G__60785;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60545);
if(temp__5720__auto__){
var seq__60545__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60545__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60545__$1);
var G__60786 = cljs.core.chunk_rest(seq__60545__$1);
var G__60787 = c__4550__auto__;
var G__60788 = cljs.core.count(c__4550__auto__);
var G__60789 = (0);
seq__60545 = G__60786;
chunk__60546 = G__60787;
count__60547 = G__60788;
i__60548 = G__60789;
continue;
} else {
var f = cljs.core.first(seq__60545__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60465_SHARP_) : f.call(null,p1__60465_SHARP_));


var G__60790 = cljs.core.next(seq__60545__$1);
var G__60791 = null;
var G__60792 = (0);
var G__60793 = (0);
seq__60545 = G__60790;
chunk__60546 = G__60791;
count__60547 = G__60792;
i__60548 = G__60793;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__60476,chunk__60477,count__60478,i__60479,map__60540,map__60540__$1,query,ok,err))
,((function (seq__60476,chunk__60477,count__60478,i__60479,map__60540,map__60540__$1,query,ok,err){
return (function (p1__60466_SHARP_){
var seq__60558 = cljs.core.seq(err);
var chunk__60559 = null;
var count__60560 = (0);
var i__60561 = (0);
while(true){
if((i__60561 < count__60560)){
var f = chunk__60559.cljs$core$IIndexed$_nth$arity$2(null,i__60561);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60466_SHARP_) : f.call(null,p1__60466_SHARP_));


var G__60794 = seq__60558;
var G__60795 = chunk__60559;
var G__60796 = count__60560;
var G__60797 = (i__60561 + (1));
seq__60558 = G__60794;
chunk__60559 = G__60795;
count__60560 = G__60796;
i__60561 = G__60797;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60558);
if(temp__5720__auto__){
var seq__60558__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60558__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60558__$1);
var G__60798 = cljs.core.chunk_rest(seq__60558__$1);
var G__60799 = c__4550__auto__;
var G__60800 = cljs.core.count(c__4550__auto__);
var G__60801 = (0);
seq__60558 = G__60798;
chunk__60559 = G__60799;
count__60560 = G__60800;
i__60561 = G__60801;
continue;
} else {
var f = cljs.core.first(seq__60558__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60466_SHARP_) : f.call(null,p1__60466_SHARP_));


var G__60802 = cljs.core.next(seq__60558__$1);
var G__60803 = null;
var G__60804 = (0);
var G__60805 = (0);
seq__60558 = G__60802;
chunk__60559 = G__60803;
count__60560 = G__60804;
i__60561 = G__60805;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__60476,chunk__60477,count__60478,i__60479,map__60540,map__60540__$1,query,ok,err))
);


var G__60806 = seq__60476;
var G__60807 = chunk__60477;
var G__60808 = count__60478;
var G__60809 = (i__60479 + (1));
seq__60476 = G__60806;
chunk__60477 = G__60807;
count__60478 = G__60808;
i__60479 = G__60809;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__60476);
if(temp__5720__auto__){
var seq__60476__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60476__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60476__$1);
var G__60810 = cljs.core.chunk_rest(seq__60476__$1);
var G__60811 = c__4550__auto__;
var G__60812 = cljs.core.count(c__4550__auto__);
var G__60813 = (0);
seq__60476 = G__60810;
chunk__60477 = G__60811;
count__60478 = G__60812;
i__60479 = G__60813;
continue;
} else {
var map__60567 = cljs.core.first(seq__60476__$1);
var map__60567__$1 = (((((!((map__60567 == null))))?(((((map__60567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60567):map__60567);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","query","com.wsscode.pathom.fulcro.network/query",-259045305));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","ok","com.wsscode.pathom.fulcro.network/ok",-297624695));
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60567__$1,new cljs.core.Keyword("com.wsscode.pathom.fulcro.network","err","com.wsscode.pathom.fulcro.network/err",-930100396));
fulcro.client.network.send(network,query,((function (seq__60476,chunk__60477,count__60478,i__60479,map__60567,map__60567__$1,query,ok,err,seq__60476__$1,temp__5720__auto__){
return (function (p1__60465_SHARP_){
var seq__60570 = cljs.core.seq(ok);
var chunk__60571 = null;
var count__60572 = (0);
var i__60573 = (0);
while(true){
if((i__60573 < count__60572)){
var f = chunk__60571.cljs$core$IIndexed$_nth$arity$2(null,i__60573);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60465_SHARP_) : f.call(null,p1__60465_SHARP_));


var G__60815 = seq__60570;
var G__60816 = chunk__60571;
var G__60817 = count__60572;
var G__60818 = (i__60573 + (1));
seq__60570 = G__60815;
chunk__60571 = G__60816;
count__60572 = G__60817;
i__60573 = G__60818;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__60570);
if(temp__5720__auto____$1){
var seq__60570__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60570__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60570__$1);
var G__60819 = cljs.core.chunk_rest(seq__60570__$1);
var G__60820 = c__4550__auto__;
var G__60821 = cljs.core.count(c__4550__auto__);
var G__60822 = (0);
seq__60570 = G__60819;
chunk__60571 = G__60820;
count__60572 = G__60821;
i__60573 = G__60822;
continue;
} else {
var f = cljs.core.first(seq__60570__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60465_SHARP_) : f.call(null,p1__60465_SHARP_));


var G__60823 = cljs.core.next(seq__60570__$1);
var G__60824 = null;
var G__60825 = (0);
var G__60826 = (0);
seq__60570 = G__60823;
chunk__60571 = G__60824;
count__60572 = G__60825;
i__60573 = G__60826;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__60476,chunk__60477,count__60478,i__60479,map__60567,map__60567__$1,query,ok,err,seq__60476__$1,temp__5720__auto__))
,((function (seq__60476,chunk__60477,count__60478,i__60479,map__60567,map__60567__$1,query,ok,err,seq__60476__$1,temp__5720__auto__){
return (function (p1__60466_SHARP_){
var seq__60586 = cljs.core.seq(err);
var chunk__60587 = null;
var count__60588 = (0);
var i__60589 = (0);
while(true){
if((i__60589 < count__60588)){
var f = chunk__60587.cljs$core$IIndexed$_nth$arity$2(null,i__60589);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60466_SHARP_) : f.call(null,p1__60466_SHARP_));


var G__60828 = seq__60586;
var G__60829 = chunk__60587;
var G__60830 = count__60588;
var G__60831 = (i__60589 + (1));
seq__60586 = G__60828;
chunk__60587 = G__60829;
count__60588 = G__60830;
i__60589 = G__60831;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__60586);
if(temp__5720__auto____$1){
var seq__60586__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60586__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__60586__$1);
var G__60832 = cljs.core.chunk_rest(seq__60586__$1);
var G__60833 = c__4550__auto__;
var G__60834 = cljs.core.count(c__4550__auto__);
var G__60835 = (0);
seq__60586 = G__60832;
chunk__60587 = G__60833;
count__60588 = G__60834;
i__60589 = G__60835;
continue;
} else {
var f = cljs.core.first(seq__60586__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__60466_SHARP_) : f.call(null,p1__60466_SHARP_));


var G__60836 = cljs.core.next(seq__60586__$1);
var G__60837 = null;
var G__60838 = (0);
var G__60839 = (0);
seq__60586 = G__60836;
chunk__60587 = G__60837;
count__60588 = G__60838;
i__60589 = G__60839;
continue;
}
} else {
return null;
}
}
break;
}
});})(seq__60476,chunk__60477,count__60478,i__60479,map__60567,map__60567__$1,query,ok,err,seq__60476__$1,temp__5720__auto__))
);


var G__60840 = cljs.core.next(seq__60476__$1);
var G__60841 = null;
var G__60842 = (0);
var G__60843 = (0);
seq__60476 = G__60840;
chunk__60477 = G__60841;
count__60478 = G__60842;
i__60479 = G__60843;
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
com.wsscode.pathom.fulcro.network.fulcro_union_path = (function com$wsscode$pathom$fulcro$network$fulcro_union_path(p__60595){
var map__60596 = p__60595;
var map__60596__$1 = (((((!((map__60596 == null))))?(((((map__60596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60596):map__60596);
var env = map__60596__$1;
var ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60596__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(ast);
var props = com.wsscode.pathom.core.entity.cljs$core$IFn$_invoke$arity$1(env);
var vec__60598 = fulcro.client.primitives.get_ident.cljs$core$IFn$_invoke$arity$2(component,props);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60598,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60598,(1),null);
return type;
});

//# sourceMappingURL=com.wsscode.pathom.fulcro.network.js.map
