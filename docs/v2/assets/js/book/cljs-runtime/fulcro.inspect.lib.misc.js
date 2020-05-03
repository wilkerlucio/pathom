goog.provide('fulcro.inspect.lib.misc');
goog.require('cljs.core');
fulcro.inspect.lib.misc.fixed_size_assoc = (function fulcro$inspect$lib$misc$fixed_size_assoc(size,db,key,value){
var map__52936 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,key,value),new cljs.core.Keyword("fulcro.inspect.lib.misc","history","fulcro.inspect.lib.misc/history",1140630734),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),key);
var map__52936__$1 = (((((!((map__52936 == null))))?(((((map__52936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52936):map__52936);
var db_SINGLEQUOTE_ = map__52936__$1;
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52936__$1,new cljs.core.Keyword("fulcro.inspect.lib.misc","history","fulcro.inspect.lib.misc/history",1140630734));
if((cljs.core.count(history) > size)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db_SINGLEQUOTE_,cljs.core.first(history)),new cljs.core.Keyword("fulcro.inspect.lib.misc","history","fulcro.inspect.lib.misc/history",1140630734),((function (map__52936,map__52936__$1,db_SINGLEQUOTE_,history){
return (function (p1__52935_SHARP_){
return cljs.core.vec(cljs.core.next(p1__52935_SHARP_));
});})(map__52936,map__52936__$1,db_SINGLEQUOTE_,history))
);
} else {
return db_SINGLEQUOTE_;
}
});

//# sourceMappingURL=fulcro.inspect.lib.misc.js.map
