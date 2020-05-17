goog.provide('fulcro.tempid');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
fulcro.tempid.TempId = (function (id,__hash){
this.id = id;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
fulcro.tempid.TempId.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});

fulcro.tempid.TempId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof fulcro.tempid.TempId)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.id,other.id)));
});

fulcro.tempid.TempId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((self__.__hash == null)){
self__.__hash = cljs.core.hash(self__.id);
} else {
}

return self__.__hash;
});

fulcro.tempid.TempId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#fulcro/tempid[\"",self__.id,"\"]"], 0));
});

fulcro.tempid.TempId.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

fulcro.tempid.TempId.cljs$lang$type = true;

fulcro.tempid.TempId.cljs$lang$ctorStr = "fulcro.tempid/TempId";

fulcro.tempid.TempId.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fulcro.tempid/TempId");
});

/**
 * Positional factory function for fulcro.tempid/TempId.
 */
fulcro.tempid.__GT_TempId = (function fulcro$tempid$__GT_TempId(id,__hash){
return (new fulcro.tempid.TempId(id,__hash));
});

fulcro.tempid.tempid = (function fulcro$tempid$tempid(var_args){
var G__56685 = arguments.length;
switch (G__56685) {
case 0:
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
});

fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return (new fulcro.tempid.TempId(id,null));
});

fulcro.tempid.tempid.cljs$lang$maxFixedArity = 1;

fulcro.tempid.tempid_QMARK_ = (function fulcro$tempid$tempid_QMARK_(x){
return (x instanceof fulcro.tempid.TempId);
});

//# sourceMappingURL=fulcro.tempid.js.map
