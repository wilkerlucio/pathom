goog.provide('clojure.test.check.properties');
goog.require('cljs.core');
goog.require('clojure.test.check.generators');
goog.require('clojure.test.check.results');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {clojure.test.check.results.Result}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.properties.ErrorResult = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k64477,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__64490 = k64477;
var G__64490__$1 = (((G__64490 instanceof cljs.core.Keyword))?G__64490.fqn:null);
switch (G__64490__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64477,else__4388__auto__);

}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__64493){
var vec__64496 = p__64493;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64496,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64496,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#clojure.test.check.properties.ErrorResult{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64476){
var self__ = this;
var G__64476__$1 = this;
return (new cljs.core.RecordIter((0),G__64476__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-12654282 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$ = cljs.core.PROTOCOL_SENTINEL;

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$pass_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

clojure.test.check.properties.ErrorResult.prototype.clojure$test$check$results$Result$result_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635),self__.error], null);
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64478,other64479){
var self__ = this;
var this64478__$1 = this;
return (((!((other64479 == null)))) && ((this64478__$1.constructor === other64479.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64478__$1.error,other64479.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64478__$1.__extmap,other64479.__extmap)));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__64476){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__64578 = cljs.core.keyword_identical_QMARK_;
var expr__64579 = k__4393__auto__;
if(cljs.core.truth_((pred__64578.cljs$core$IFn$_invoke$arity$2 ? pred__64578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__64579) : pred__64578.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__64579)))){
return (new clojure.test.check.properties.ErrorResult(G__64476,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.properties.ErrorResult(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__64476),null));
}
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__64476){
var self__ = this;
var this__4384__auto____$1 = this;
return (new clojure.test.check.properties.ErrorResult(self__.error,G__64476,self__.__extmap,self__.__hash));
});

clojure.test.check.properties.ErrorResult.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

clojure.test.check.properties.ErrorResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

clojure.test.check.properties.ErrorResult.cljs$lang$type = true;

clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"clojure.test.check.properties/ErrorResult",null,(1),null));
});

clojure.test.check.properties.ErrorResult.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"clojure.test.check.properties/ErrorResult");
});

/**
 * Positional factory function for clojure.test.check.properties/ErrorResult.
 */
clojure.test.check.properties.__GT_ErrorResult = (function clojure$test$check$properties$__GT_ErrorResult(error){
return (new clojure.test.check.properties.ErrorResult(error,null,null,null));
});

/**
 * Factory function for clojure.test.check.properties/ErrorResult, taking a map of keywords to field values.
 */
clojure.test.check.properties.map__GT_ErrorResult = (function clojure$test$check$properties$map__GT_ErrorResult(G__64485){
var extmap__4424__auto__ = (function (){var G__64661 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__64485,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__64485)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64661);
} else {
return G__64661;
}
})();
return (new clojure.test.check.properties.ErrorResult(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__64485),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

clojure.test.check.properties.exception_QMARK_ = (function clojure$test$check$properties$exception_QMARK_(x){
return (x instanceof Error);
});
clojure.test.check.properties.apply_gen = (function clojure$test$check$properties$apply_gen(function$){
return (function (args){
var result = (function (){try{var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(function$,args);
if(clojure.test.check.properties.exception_QMARK_(ret)){
throw ret;
} else {
return ret;
}
}catch (e64719){var ex = e64719;
return clojure.test.check.properties.__GT_ErrorResult(ex);
}})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
});
});
/**
 * A function version of `for-all`. Takes a sequence of N generators
 *   and a function of N args, and returns a property that calls the
 *   function with generated values and tests the return value for
 *   truthiness, like with `for-all`.
 * 
 *   Example:
 * 
 *   (for-all* [gen/large-integer gen/large-integer]
 *          (fn [a b] (>= (+ a b) a)))
 */
clojure.test.check.properties.for_all_STAR_ = (function clojure$test$check$properties$for_all_STAR_(args,function$){
return clojure.test.check.generators.fmap(clojure.test.check.properties.apply_gen(function$),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,args));
});
clojure.test.check.properties.binding_vars = (function clojure$test$check$properties$binding_vars(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});
clojure.test.check.properties.binding_gens = (function clojure$test$check$properties$binding_gens(bindings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
});

//# sourceMappingURL=clojure.test.check.properties.js.map
