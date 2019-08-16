goog.provide('fulcro.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('fulcro.tempid');

/**
* @constructor
*/
fulcro.transit.TempIdHandler = (function (){
});
fulcro.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "fulcro/tempid";
});

fulcro.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
});

fulcro.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

fulcro.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

fulcro.transit.TempIdHandler.cljs$lang$type = true;

fulcro.transit.TempIdHandler.cljs$lang$ctorStr = "fulcro.transit/TempIdHandler";

fulcro.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fulcro.transit/TempIdHandler");
});

/**
 * Positional factory function for fulcro.transit/TempIdHandler.
 */
fulcro.transit.__GT_TempIdHandler = (function fulcro$transit$__GT_TempIdHandler(){
return (new fulcro.transit.TempIdHandler());
});

fulcro.transit.writer = (function fulcro$transit$writer(var_args){
var G__49448 = arguments.length;
switch (G__49448) {
case 0:
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),fulcro.tempid.TempId], null),(new fulcro.transit.TempIdHandler())));
});

fulcro.transit.writer.cljs$lang$maxFixedArity = 1;

fulcro.transit.reader = (function fulcro$transit$reader(var_args){
var G__49464 = arguments.length;
switch (G__49464) {
case 0:
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),"fulcro/tempid"], null),(function (id){
return fulcro.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
})));
});

fulcro.transit.reader.cljs$lang$maxFixedArity = 1;

/**
 * Checks to see that the value in question can be serialized by the default fulcro writer.
 */
fulcro.transit.serializable_QMARK_ = (function fulcro$transit$serializable_QMARK_(v){
try{fulcro.transit.writer.cljs$core$IFn$_invoke$arity$0().write(v);

return true;
}catch (e49465){var e = e49465;
return false;
}});

//# sourceMappingURL=fulcro.transit.js.map
