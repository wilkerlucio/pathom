goog.provide('com.wsscode.common.async_cljs');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
com.wsscode.common.async_cljs.chan_QMARK_ = (function com$wsscode$common$async_cljs$chan_QMARK_(c){
if((!((c == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.cljs$core$async$impl$protocols$ReadPort$)))){
return true;
} else {
if((!c.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,c);
}
});
com.wsscode.common.async_cljs.promise__GT_chan = (function com$wsscode$common$async_cljs$promise__GT_chan(p){
var c = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
p.then(((function (c){
return (function (p1__62028_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"success","success",1890645906),p1__62028_SHARP_], null));
});})(c))
,((function (c){
return (function (p1__62029_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),p1__62029_SHARP_], null));
});})(c))
);

return c;
});
com.wsscode.common.async_cljs.consumer_pair = (function com$wsscode$common$async_cljs$consumer_pair(resp){
if(cljs.core.contains_QMARK_(resp,new cljs.core.Keyword(null,"error","error",-978969032))){
throw new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(resp);
} else {
return new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(resp);
}
});
com.wsscode.common.async_cljs.error_QMARK_ = (function com$wsscode$common$async_cljs$error_QMARK_(err){
return (err instanceof Error);
});
com.wsscode.common.async_cljs.throw_err = (function com$wsscode$common$async_cljs$throw_err(x){
if(com.wsscode.common.async_cljs.error_QMARK_(x)){
throw x;
} else {
return x;
}
});

//# sourceMappingURL=com.wsscode.common.async_cljs.js.map
