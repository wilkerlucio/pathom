goog.provide('fulcro.inspect.remote.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('fulcro.transit');

/**
* @constructor
*/
fulcro.inspect.remote.transit.ErrorHandler = (function (){
});
fulcro.inspect.remote.transit.ErrorHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "js-error";
});

fulcro.inspect.remote.transit.ErrorHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_message(v),cljs.core.ex_data(v)], null);
});

fulcro.inspect.remote.transit.ErrorHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return cljs.core.ex_message(v);
});

fulcro.inspect.remote.transit.ErrorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

fulcro.inspect.remote.transit.ErrorHandler.cljs$lang$type = true;

fulcro.inspect.remote.transit.ErrorHandler.cljs$lang$ctorStr = "fulcro.inspect.remote.transit/ErrorHandler";

fulcro.inspect.remote.transit.ErrorHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fulcro.inspect.remote.transit/ErrorHandler");
});

/**
 * Positional factory function for fulcro.inspect.remote.transit/ErrorHandler.
 */
fulcro.inspect.remote.transit.__GT_ErrorHandler = (function fulcro$inspect$remote$transit$__GT_ErrorHandler(){
return (new fulcro.inspect.remote.transit.ErrorHandler());
});


/**
* @constructor
*/
fulcro.inspect.remote.transit.DefaultHandler = (function (){
});
fulcro.inspect.remote.transit.DefaultHandler.prototype.tag = (function (v){
var self__ = this;
var this$ = this;
return "unknown";
});

fulcro.inspect.remote.transit.DefaultHandler.prototype.rep = (function (v){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
});

fulcro.inspect.remote.transit.DefaultHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

fulcro.inspect.remote.transit.DefaultHandler.cljs$lang$type = true;

fulcro.inspect.remote.transit.DefaultHandler.cljs$lang$ctorStr = "fulcro.inspect.remote.transit/DefaultHandler";

fulcro.inspect.remote.transit.DefaultHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"fulcro.inspect.remote.transit/DefaultHandler");
});

/**
 * Positional factory function for fulcro.inspect.remote.transit/DefaultHandler.
 */
fulcro.inspect.remote.transit.__GT_DefaultHandler = (function fulcro$inspect$remote$transit$__GT_DefaultHandler(){
return (new fulcro.inspect.remote.transit.DefaultHandler());
});

fulcro.inspect.remote.transit.write_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.ExceptionInfo,(new fulcro.inspect.remote.transit.ErrorHandler()),"default",(new fulcro.inspect.remote.transit.DefaultHandler())]);
fulcro.inspect.remote.transit.read_handlers = new cljs.core.PersistentArrayMap(null, 1, ["js-error",(function (p__60092){
var vec__60093 = p__60092;
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093,(1),null);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,data);
})], null);
fulcro.inspect.remote.transit.read = (function fulcro$inspect$remote$transit$read(str){
var reader = fulcro.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),fulcro.inspect.remote.transit.read_handlers], null));
return cognitect.transit.read(reader,str);
});
fulcro.inspect.remote.transit.write = (function fulcro$inspect$remote$transit$write(x){
var writer = fulcro.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),fulcro.inspect.remote.transit.write_handlers], null));
return cognitect.transit.write(writer,x);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL;

//# sourceMappingURL=fulcro.inspect.remote.transit.js.map
