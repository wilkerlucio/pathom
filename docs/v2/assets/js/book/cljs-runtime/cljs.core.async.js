goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50678 = arguments.length;
switch (G__50678) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50679 = (function (f,blockable,meta50680){
this.f = f;
this.blockable = blockable;
this.meta50680 = meta50680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50681,meta50680__$1){
var self__ = this;
var _50681__$1 = this;
return (new cljs.core.async.t_cljs$core$async50679(self__.f,self__.blockable,meta50680__$1));
});

cljs.core.async.t_cljs$core$async50679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50681){
var self__ = this;
var _50681__$1 = this;
return self__.meta50680;
});

cljs.core.async.t_cljs$core$async50679.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async50679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async50679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50680","meta50680",-603608309,null)], null);
});

cljs.core.async.t_cljs$core$async50679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50679";

cljs.core.async.t_cljs$core$async50679.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50679");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50679.
 */
cljs.core.async.__GT_t_cljs$core$async50679 = (function cljs$core$async$__GT_t_cljs$core$async50679(f__$1,blockable__$1,meta50680){
return (new cljs.core.async.t_cljs$core$async50679(f__$1,blockable__$1,meta50680));
});

}

return (new cljs.core.async.t_cljs$core$async50679(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50684 = arguments.length;
switch (G__50684) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50686 = arguments.length;
switch (G__50686) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50688 = arguments.length;
switch (G__50688) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52148 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52148) : fn1.call(null,val_52148));
} else {
cljs.core.async.impl.dispatch.run(((function (val_52148,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52148) : fn1.call(null,val_52148));
});})(val_52148,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50690 = arguments.length;
switch (G__50690) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___52160 = n;
var x_52161 = (0);
while(true){
if((x_52161 < n__4607__auto___52160)){
(a[x_52161] = x_52161);

var G__52162 = (x_52161 + (1));
x_52161 = G__52162;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50691 = (function (flag,meta50692){
this.flag = flag;
this.meta50692 = meta50692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_50693,meta50692__$1){
var self__ = this;
var _50693__$1 = this;
return (new cljs.core.async.t_cljs$core$async50691(self__.flag,meta50692__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async50691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_50693){
var self__ = this;
var _50693__$1 = this;
return self__.meta50692;
});})(flag))
;

cljs.core.async.t_cljs$core$async50691.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async50691.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async50691.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50692","meta50692",-405367365,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async50691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50691";

cljs.core.async.t_cljs$core$async50691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50691");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50691.
 */
cljs.core.async.__GT_t_cljs$core$async50691 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50691(flag__$1,meta50692){
return (new cljs.core.async.t_cljs$core$async50691(flag__$1,meta50692));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async50691(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50694 = (function (flag,cb,meta50695){
this.flag = flag;
this.cb = cb;
this.meta50695 = meta50695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50696,meta50695__$1){
var self__ = this;
var _50696__$1 = this;
return (new cljs.core.async.t_cljs$core$async50694(self__.flag,self__.cb,meta50695__$1));
});

cljs.core.async.t_cljs$core$async50694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50696){
var self__ = this;
var _50696__$1 = this;
return self__.meta50695;
});

cljs.core.async.t_cljs$core$async50694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async50694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async50694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async50694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50695","meta50695",-945963398,null)], null);
});

cljs.core.async.t_cljs$core$async50694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50694";

cljs.core.async.t_cljs$core$async50694.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async50694");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50694.
 */
cljs.core.async.__GT_t_cljs$core$async50694 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50694(flag__$1,cb__$1,meta50695){
return (new cljs.core.async.t_cljs$core$async50694(flag__$1,cb__$1,meta50695));
});

}

return (new cljs.core.async.t_cljs$core$async50694(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50697_SHARP_){
var G__50699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50697_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50699) : fret.call(null,G__50699));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50698_SHARP_){
var G__50700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50698_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50700) : fret.call(null,G__50700));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52172 = (i + (1));
i = G__52172;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52180 = arguments.length;
var i__4731__auto___52181 = (0);
while(true){
if((i__4731__auto___52181 < len__4730__auto___52180)){
args__4736__auto__.push((arguments[i__4731__auto___52181]));

var G__52183 = (i__4731__auto___52181 + (1));
i__4731__auto___52181 = G__52183;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50703){
var map__50704 = p__50703;
var map__50704__$1 = (((((!((map__50704 == null))))?(((((map__50704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50704):map__50704);
var opts = map__50704__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50701){
var G__50702 = cljs.core.first(seq50701);
var seq50701__$1 = cljs.core.next(seq50701);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50702,seq50701__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50707 = arguments.length;
switch (G__50707) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50615__auto___52191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___52191){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___52191){
return (function (state_50731){
var state_val_50732 = (state_50731[(1)]);
if((state_val_50732 === (7))){
var inst_50727 = (state_50731[(2)]);
var state_50731__$1 = state_50731;
var statearr_50733_52196 = state_50731__$1;
(statearr_50733_52196[(2)] = inst_50727);

(statearr_50733_52196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (1))){
var state_50731__$1 = state_50731;
var statearr_50734_52197 = state_50731__$1;
(statearr_50734_52197[(2)] = null);

(statearr_50734_52197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (4))){
var inst_50710 = (state_50731[(7)]);
var inst_50710__$1 = (state_50731[(2)]);
var inst_50711 = (inst_50710__$1 == null);
var state_50731__$1 = (function (){var statearr_50735 = state_50731;
(statearr_50735[(7)] = inst_50710__$1);

return statearr_50735;
})();
if(cljs.core.truth_(inst_50711)){
var statearr_50736_52207 = state_50731__$1;
(statearr_50736_52207[(1)] = (5));

} else {
var statearr_50737_52209 = state_50731__$1;
(statearr_50737_52209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (13))){
var state_50731__$1 = state_50731;
var statearr_50738_52211 = state_50731__$1;
(statearr_50738_52211[(2)] = null);

(statearr_50738_52211[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (6))){
var inst_50710 = (state_50731[(7)]);
var state_50731__$1 = state_50731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50731__$1,(11),to,inst_50710);
} else {
if((state_val_50732 === (3))){
var inst_50729 = (state_50731[(2)]);
var state_50731__$1 = state_50731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50731__$1,inst_50729);
} else {
if((state_val_50732 === (12))){
var state_50731__$1 = state_50731;
var statearr_50739_52217 = state_50731__$1;
(statearr_50739_52217[(2)] = null);

(statearr_50739_52217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (2))){
var state_50731__$1 = state_50731;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50731__$1,(4),from);
} else {
if((state_val_50732 === (11))){
var inst_50720 = (state_50731[(2)]);
var state_50731__$1 = state_50731;
if(cljs.core.truth_(inst_50720)){
var statearr_50740_52223 = state_50731__$1;
(statearr_50740_52223[(1)] = (12));

} else {
var statearr_50741_52226 = state_50731__$1;
(statearr_50741_52226[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (9))){
var state_50731__$1 = state_50731;
var statearr_50742_52230 = state_50731__$1;
(statearr_50742_52230[(2)] = null);

(statearr_50742_52230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (5))){
var state_50731__$1 = state_50731;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50743_52235 = state_50731__$1;
(statearr_50743_52235[(1)] = (8));

} else {
var statearr_50744_52238 = state_50731__$1;
(statearr_50744_52238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (14))){
var inst_50725 = (state_50731[(2)]);
var state_50731__$1 = state_50731;
var statearr_50745_52244 = state_50731__$1;
(statearr_50745_52244[(2)] = inst_50725);

(statearr_50745_52244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (10))){
var inst_50717 = (state_50731[(2)]);
var state_50731__$1 = state_50731;
var statearr_50746_52248 = state_50731__$1;
(statearr_50746_52248[(2)] = inst_50717);

(statearr_50746_52248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50732 === (8))){
var inst_50714 = cljs.core.async.close_BANG_(to);
var state_50731__$1 = state_50731;
var statearr_50747_52249 = state_50731__$1;
(statearr_50747_52249[(2)] = inst_50714);

(statearr_50747_52249[(1)] = (10));


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
});})(c__50615__auto___52191))
;
return ((function (switch__48679__auto__,c__50615__auto___52191){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_50748 = [null,null,null,null,null,null,null,null];
(statearr_50748[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_50748[(1)] = (1));

return statearr_50748;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_50731){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50731);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50749){var ex__48683__auto__ = e50749;
var statearr_50750_52253 = state_50731;
(statearr_50750_52253[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50731[(4)]))){
var statearr_50751_52256 = state_50731;
(statearr_50751_52256[(1)] = cljs.core.first((state_50731[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52258 = state_50731;
state_50731 = G__52258;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_50731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_50731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___52191))
})();
var state__50617__auto__ = (function (){var statearr_50752 = f__50616__auto__();
(statearr_50752[(6)] = c__50615__auto___52191);

return statearr_50752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___52191))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__50753){
var vec__50754 = p__50753;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50754,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50754,(1),null);
var job = vec__50754;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50615__auto___52268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___52268,res,vec__50754,v,p,job,jobs,results){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___52268,res,vec__50754,v,p,job,jobs,results){
return (function (state_50761){
var state_val_50762 = (state_50761[(1)]);
if((state_val_50762 === (1))){
var state_50761__$1 = state_50761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50761__$1,(2),res,v);
} else {
if((state_val_50762 === (2))){
var inst_50758 = (state_50761[(2)]);
var inst_50759 = cljs.core.async.close_BANG_(res);
var state_50761__$1 = (function (){var statearr_50763 = state_50761;
(statearr_50763[(7)] = inst_50758);

return statearr_50763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50761__$1,inst_50759);
} else {
return null;
}
}
});})(c__50615__auto___52268,res,vec__50754,v,p,job,jobs,results))
;
return ((function (switch__48679__auto__,c__50615__auto___52268,res,vec__50754,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0 = (function (){
var statearr_50764 = [null,null,null,null,null,null,null,null];
(statearr_50764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__);

(statearr_50764[(1)] = (1));

return statearr_50764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1 = (function (state_50761){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50761);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50765){var ex__48683__auto__ = e50765;
var statearr_50766_52284 = state_50761;
(statearr_50766_52284[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50761[(4)]))){
var statearr_50767_52285 = state_50761;
(statearr_50767_52285[(1)] = cljs.core.first((state_50761[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52288 = state_50761;
state_50761 = G__52288;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = function(state_50761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1.call(this,state_50761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___52268,res,vec__50754,v,p,job,jobs,results))
})();
var state__50617__auto__ = (function (){var statearr_50768 = f__50616__auto__();
(statearr_50768[(6)] = c__50615__auto___52268);

return statearr_50768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___52268,res,vec__50754,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50769){
var vec__50770 = p__50769;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50770,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50770,(1),null);
var job = vec__50770;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___52293 = n;
var __52294 = (0);
while(true){
if((__52294 < n__4607__auto___52293)){
var G__50773_52295 = type;
var G__50773_52296__$1 = (((G__50773_52295 instanceof cljs.core.Keyword))?G__50773_52295.fqn:null);
switch (G__50773_52296__$1) {
case "compute":
var c__50615__auto___52300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52294,c__50615__auto___52300,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (__52294,c__50615__auto___52300,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async){
return (function (state_50786){
var state_val_50787 = (state_50786[(1)]);
if((state_val_50787 === (1))){
var state_50786__$1 = state_50786;
var statearr_50788_52303 = state_50786__$1;
(statearr_50788_52303[(2)] = null);

(statearr_50788_52303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50787 === (2))){
var state_50786__$1 = state_50786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50786__$1,(4),jobs);
} else {
if((state_val_50787 === (3))){
var inst_50784 = (state_50786[(2)]);
var state_50786__$1 = state_50786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50786__$1,inst_50784);
} else {
if((state_val_50787 === (4))){
var inst_50776 = (state_50786[(2)]);
var inst_50777 = process(inst_50776);
var state_50786__$1 = state_50786;
if(cljs.core.truth_(inst_50777)){
var statearr_50789_52308 = state_50786__$1;
(statearr_50789_52308[(1)] = (5));

} else {
var statearr_50790_52309 = state_50786__$1;
(statearr_50790_52309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50787 === (5))){
var state_50786__$1 = state_50786;
var statearr_50791_52310 = state_50786__$1;
(statearr_50791_52310[(2)] = null);

(statearr_50791_52310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50787 === (6))){
var state_50786__$1 = state_50786;
var statearr_50792_52311 = state_50786__$1;
(statearr_50792_52311[(2)] = null);

(statearr_50792_52311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50787 === (7))){
var inst_50782 = (state_50786[(2)]);
var state_50786__$1 = state_50786;
var statearr_50793_52312 = state_50786__$1;
(statearr_50793_52312[(2)] = inst_50782);

(statearr_50793_52312[(1)] = (3));


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
});})(__52294,c__50615__auto___52300,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async))
;
return ((function (__52294,switch__48679__auto__,c__50615__auto___52300,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0 = (function (){
var statearr_50794 = [null,null,null,null,null,null,null];
(statearr_50794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__);

(statearr_50794[(1)] = (1));

return statearr_50794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1 = (function (state_50786){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50786);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50795){var ex__48683__auto__ = e50795;
var statearr_50796_52319 = state_50786;
(statearr_50796_52319[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50786[(4)]))){
var statearr_50797_52320 = state_50786;
(statearr_50797_52320[(1)] = cljs.core.first((state_50786[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52322 = state_50786;
state_50786 = G__52322;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = function(state_50786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1.call(this,state_50786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__;
})()
;})(__52294,switch__48679__auto__,c__50615__auto___52300,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async))
})();
var state__50617__auto__ = (function (){var statearr_50798 = f__50616__auto__();
(statearr_50798[(6)] = c__50615__auto___52300);

return statearr_50798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(__52294,c__50615__auto___52300,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async))
);


break;
case "async":
var c__50615__auto___52323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52294,c__50615__auto___52323,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (__52294,c__50615__auto___52323,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async){
return (function (state_50811){
var state_val_50812 = (state_50811[(1)]);
if((state_val_50812 === (1))){
var state_50811__$1 = state_50811;
var statearr_50813_52325 = state_50811__$1;
(statearr_50813_52325[(2)] = null);

(statearr_50813_52325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50812 === (2))){
var state_50811__$1 = state_50811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50811__$1,(4),jobs);
} else {
if((state_val_50812 === (3))){
var inst_50809 = (state_50811[(2)]);
var state_50811__$1 = state_50811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50811__$1,inst_50809);
} else {
if((state_val_50812 === (4))){
var inst_50801 = (state_50811[(2)]);
var inst_50802 = async(inst_50801);
var state_50811__$1 = state_50811;
if(cljs.core.truth_(inst_50802)){
var statearr_50814_52328 = state_50811__$1;
(statearr_50814_52328[(1)] = (5));

} else {
var statearr_50815_52329 = state_50811__$1;
(statearr_50815_52329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50812 === (5))){
var state_50811__$1 = state_50811;
var statearr_50816_52331 = state_50811__$1;
(statearr_50816_52331[(2)] = null);

(statearr_50816_52331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50812 === (6))){
var state_50811__$1 = state_50811;
var statearr_50817_52332 = state_50811__$1;
(statearr_50817_52332[(2)] = null);

(statearr_50817_52332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50812 === (7))){
var inst_50807 = (state_50811[(2)]);
var state_50811__$1 = state_50811;
var statearr_50818_52333 = state_50811__$1;
(statearr_50818_52333[(2)] = inst_50807);

(statearr_50818_52333[(1)] = (3));


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
});})(__52294,c__50615__auto___52323,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async))
;
return ((function (__52294,switch__48679__auto__,c__50615__auto___52323,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0 = (function (){
var statearr_50819 = [null,null,null,null,null,null,null];
(statearr_50819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__);

(statearr_50819[(1)] = (1));

return statearr_50819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1 = (function (state_50811){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50811);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50820){var ex__48683__auto__ = e50820;
var statearr_50821_52336 = state_50811;
(statearr_50821_52336[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50811[(4)]))){
var statearr_50822_52337 = state_50811;
(statearr_50822_52337[(1)] = cljs.core.first((state_50811[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52339 = state_50811;
state_50811 = G__52339;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = function(state_50811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1.call(this,state_50811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__;
})()
;})(__52294,switch__48679__auto__,c__50615__auto___52323,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async))
})();
var state__50617__auto__ = (function (){var statearr_50823 = f__50616__auto__();
(statearr_50823[(6)] = c__50615__auto___52323);

return statearr_50823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(__52294,c__50615__auto___52323,G__50773_52295,G__50773_52296__$1,n__4607__auto___52293,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50773_52296__$1)].join('')));

}

var G__52345 = (__52294 + (1));
__52294 = G__52345;
continue;
} else {
}
break;
}

var c__50615__auto___52346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___52346,jobs,results,process,async){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___52346,jobs,results,process,async){
return (function (state_50845){
var state_val_50846 = (state_50845[(1)]);
if((state_val_50846 === (7))){
var inst_50841 = (state_50845[(2)]);
var state_50845__$1 = state_50845;
var statearr_50847_52348 = state_50845__$1;
(statearr_50847_52348[(2)] = inst_50841);

(statearr_50847_52348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50846 === (1))){
var state_50845__$1 = state_50845;
var statearr_50848_52349 = state_50845__$1;
(statearr_50848_52349[(2)] = null);

(statearr_50848_52349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50846 === (4))){
var inst_50826 = (state_50845[(7)]);
var inst_50826__$1 = (state_50845[(2)]);
var inst_50827 = (inst_50826__$1 == null);
var state_50845__$1 = (function (){var statearr_50849 = state_50845;
(statearr_50849[(7)] = inst_50826__$1);

return statearr_50849;
})();
if(cljs.core.truth_(inst_50827)){
var statearr_50850_52351 = state_50845__$1;
(statearr_50850_52351[(1)] = (5));

} else {
var statearr_50851_52352 = state_50845__$1;
(statearr_50851_52352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50846 === (6))){
var inst_50826 = (state_50845[(7)]);
var inst_50831 = (state_50845[(8)]);
var inst_50831__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50833 = [inst_50826,inst_50831__$1];
var inst_50834 = (new cljs.core.PersistentVector(null,2,(5),inst_50832,inst_50833,null));
var state_50845__$1 = (function (){var statearr_50852 = state_50845;
(statearr_50852[(8)] = inst_50831__$1);

return statearr_50852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50845__$1,(8),jobs,inst_50834);
} else {
if((state_val_50846 === (3))){
var inst_50843 = (state_50845[(2)]);
var state_50845__$1 = state_50845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50845__$1,inst_50843);
} else {
if((state_val_50846 === (2))){
var state_50845__$1 = state_50845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50845__$1,(4),from);
} else {
if((state_val_50846 === (9))){
var inst_50838 = (state_50845[(2)]);
var state_50845__$1 = (function (){var statearr_50853 = state_50845;
(statearr_50853[(9)] = inst_50838);

return statearr_50853;
})();
var statearr_50854_52359 = state_50845__$1;
(statearr_50854_52359[(2)] = null);

(statearr_50854_52359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50846 === (5))){
var inst_50829 = cljs.core.async.close_BANG_(jobs);
var state_50845__$1 = state_50845;
var statearr_50855_52361 = state_50845__$1;
(statearr_50855_52361[(2)] = inst_50829);

(statearr_50855_52361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50846 === (8))){
var inst_50831 = (state_50845[(8)]);
var inst_50836 = (state_50845[(2)]);
var state_50845__$1 = (function (){var statearr_50856 = state_50845;
(statearr_50856[(10)] = inst_50836);

return statearr_50856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50845__$1,(9),results,inst_50831);
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
});})(c__50615__auto___52346,jobs,results,process,async))
;
return ((function (switch__48679__auto__,c__50615__auto___52346,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0 = (function (){
var statearr_50857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__);

(statearr_50857[(1)] = (1));

return statearr_50857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1 = (function (state_50845){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50845);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50858){var ex__48683__auto__ = e50858;
var statearr_50859_52366 = state_50845;
(statearr_50859_52366[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50845[(4)]))){
var statearr_50860_52369 = state_50845;
(statearr_50860_52369[(1)] = cljs.core.first((state_50845[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52372 = state_50845;
state_50845 = G__52372;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = function(state_50845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1.call(this,state_50845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___52346,jobs,results,process,async))
})();
var state__50617__auto__ = (function (){var statearr_50861 = f__50616__auto__();
(statearr_50861[(6)] = c__50615__auto___52346);

return statearr_50861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___52346,jobs,results,process,async))
);


var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__,jobs,results,process,async){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__,jobs,results,process,async){
return (function (state_50899){
var state_val_50900 = (state_50899[(1)]);
if((state_val_50900 === (7))){
var inst_50895 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
var statearr_50901_52375 = state_50899__$1;
(statearr_50901_52375[(2)] = inst_50895);

(statearr_50901_52375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (20))){
var state_50899__$1 = state_50899;
var statearr_50902_52377 = state_50899__$1;
(statearr_50902_52377[(2)] = null);

(statearr_50902_52377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (1))){
var state_50899__$1 = state_50899;
var statearr_50903_52378 = state_50899__$1;
(statearr_50903_52378[(2)] = null);

(statearr_50903_52378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (4))){
var inst_50864 = (state_50899[(7)]);
var inst_50864__$1 = (state_50899[(2)]);
var inst_50865 = (inst_50864__$1 == null);
var state_50899__$1 = (function (){var statearr_50904 = state_50899;
(statearr_50904[(7)] = inst_50864__$1);

return statearr_50904;
})();
if(cljs.core.truth_(inst_50865)){
var statearr_50905_52383 = state_50899__$1;
(statearr_50905_52383[(1)] = (5));

} else {
var statearr_50906_52385 = state_50899__$1;
(statearr_50906_52385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (15))){
var inst_50877 = (state_50899[(8)]);
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50899__$1,(18),to,inst_50877);
} else {
if((state_val_50900 === (21))){
var inst_50890 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
var statearr_50907_52389 = state_50899__$1;
(statearr_50907_52389[(2)] = inst_50890);

(statearr_50907_52389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (13))){
var inst_50892 = (state_50899[(2)]);
var state_50899__$1 = (function (){var statearr_50908 = state_50899;
(statearr_50908[(9)] = inst_50892);

return statearr_50908;
})();
var statearr_50909_52392 = state_50899__$1;
(statearr_50909_52392[(2)] = null);

(statearr_50909_52392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (6))){
var inst_50864 = (state_50899[(7)]);
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50899__$1,(11),inst_50864);
} else {
if((state_val_50900 === (17))){
var inst_50885 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
if(cljs.core.truth_(inst_50885)){
var statearr_50910_52396 = state_50899__$1;
(statearr_50910_52396[(1)] = (19));

} else {
var statearr_50911_52397 = state_50899__$1;
(statearr_50911_52397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (3))){
var inst_50897 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50899__$1,inst_50897);
} else {
if((state_val_50900 === (12))){
var inst_50874 = (state_50899[(10)]);
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50899__$1,(14),inst_50874);
} else {
if((state_val_50900 === (2))){
var state_50899__$1 = state_50899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50899__$1,(4),results);
} else {
if((state_val_50900 === (19))){
var state_50899__$1 = state_50899;
var statearr_50912_52403 = state_50899__$1;
(statearr_50912_52403[(2)] = null);

(statearr_50912_52403[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (11))){
var inst_50874 = (state_50899[(2)]);
var state_50899__$1 = (function (){var statearr_50913 = state_50899;
(statearr_50913[(10)] = inst_50874);

return statearr_50913;
})();
var statearr_50914_52410 = state_50899__$1;
(statearr_50914_52410[(2)] = null);

(statearr_50914_52410[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (9))){
var state_50899__$1 = state_50899;
var statearr_50915_52411 = state_50899__$1;
(statearr_50915_52411[(2)] = null);

(statearr_50915_52411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (5))){
var state_50899__$1 = state_50899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50916_52412 = state_50899__$1;
(statearr_50916_52412[(1)] = (8));

} else {
var statearr_50917_52414 = state_50899__$1;
(statearr_50917_52414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (14))){
var inst_50879 = (state_50899[(11)]);
var inst_50877 = (state_50899[(8)]);
var inst_50877__$1 = (state_50899[(2)]);
var inst_50878 = (inst_50877__$1 == null);
var inst_50879__$1 = cljs.core.not(inst_50878);
var state_50899__$1 = (function (){var statearr_50918 = state_50899;
(statearr_50918[(11)] = inst_50879__$1);

(statearr_50918[(8)] = inst_50877__$1);

return statearr_50918;
})();
if(inst_50879__$1){
var statearr_50919_52422 = state_50899__$1;
(statearr_50919_52422[(1)] = (15));

} else {
var statearr_50920_52423 = state_50899__$1;
(statearr_50920_52423[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (16))){
var inst_50879 = (state_50899[(11)]);
var state_50899__$1 = state_50899;
var statearr_50921_52428 = state_50899__$1;
(statearr_50921_52428[(2)] = inst_50879);

(statearr_50921_52428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (10))){
var inst_50871 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
var statearr_50922_52429 = state_50899__$1;
(statearr_50922_52429[(2)] = inst_50871);

(statearr_50922_52429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (18))){
var inst_50882 = (state_50899[(2)]);
var state_50899__$1 = state_50899;
var statearr_50923_52430 = state_50899__$1;
(statearr_50923_52430[(2)] = inst_50882);

(statearr_50923_52430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50900 === (8))){
var inst_50868 = cljs.core.async.close_BANG_(to);
var state_50899__$1 = state_50899;
var statearr_50924_52431 = state_50899__$1;
(statearr_50924_52431[(2)] = inst_50868);

(statearr_50924_52431[(1)] = (10));


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
}
}
}
});})(c__50615__auto__,jobs,results,process,async))
;
return ((function (switch__48679__auto__,c__50615__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0 = (function (){
var statearr_50925 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__);

(statearr_50925[(1)] = (1));

return statearr_50925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1 = (function (state_50899){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50899);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50926){var ex__48683__auto__ = e50926;
var statearr_50927_52443 = state_50899;
(statearr_50927_52443[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50899[(4)]))){
var statearr_50928_52444 = state_50899;
(statearr_50928_52444[(1)] = cljs.core.first((state_50899[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52446 = state_50899;
state_50899 = G__52446;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__ = function(state_50899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1.call(this,state_50899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__,jobs,results,process,async))
})();
var state__50617__auto__ = (function (){var statearr_50929 = f__50616__auto__();
(statearr_50929[(6)] = c__50615__auto__);

return statearr_50929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__,jobs,results,process,async))
);

return c__50615__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50931 = arguments.length;
switch (G__50931) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50933 = arguments.length;
switch (G__50933) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50935 = arguments.length;
switch (G__50935) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50615__auto___52480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___52480,tc,fc){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___52480,tc,fc){
return (function (state_50961){
var state_val_50962 = (state_50961[(1)]);
if((state_val_50962 === (7))){
var inst_50957 = (state_50961[(2)]);
var state_50961__$1 = state_50961;
var statearr_50963_52487 = state_50961__$1;
(statearr_50963_52487[(2)] = inst_50957);

(statearr_50963_52487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (1))){
var state_50961__$1 = state_50961;
var statearr_50964_52491 = state_50961__$1;
(statearr_50964_52491[(2)] = null);

(statearr_50964_52491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (4))){
var inst_50938 = (state_50961[(7)]);
var inst_50938__$1 = (state_50961[(2)]);
var inst_50939 = (inst_50938__$1 == null);
var state_50961__$1 = (function (){var statearr_50965 = state_50961;
(statearr_50965[(7)] = inst_50938__$1);

return statearr_50965;
})();
if(cljs.core.truth_(inst_50939)){
var statearr_50966_52496 = state_50961__$1;
(statearr_50966_52496[(1)] = (5));

} else {
var statearr_50967_52497 = state_50961__$1;
(statearr_50967_52497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (13))){
var state_50961__$1 = state_50961;
var statearr_50968_52502 = state_50961__$1;
(statearr_50968_52502[(2)] = null);

(statearr_50968_52502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (6))){
var inst_50938 = (state_50961[(7)]);
var inst_50944 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50938) : p.call(null,inst_50938));
var state_50961__$1 = state_50961;
if(cljs.core.truth_(inst_50944)){
var statearr_50969_52507 = state_50961__$1;
(statearr_50969_52507[(1)] = (9));

} else {
var statearr_50970_52510 = state_50961__$1;
(statearr_50970_52510[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (3))){
var inst_50959 = (state_50961[(2)]);
var state_50961__$1 = state_50961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50961__$1,inst_50959);
} else {
if((state_val_50962 === (12))){
var state_50961__$1 = state_50961;
var statearr_50971_52515 = state_50961__$1;
(statearr_50971_52515[(2)] = null);

(statearr_50971_52515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (2))){
var state_50961__$1 = state_50961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50961__$1,(4),ch);
} else {
if((state_val_50962 === (11))){
var inst_50938 = (state_50961[(7)]);
var inst_50948 = (state_50961[(2)]);
var state_50961__$1 = state_50961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50961__$1,(8),inst_50948,inst_50938);
} else {
if((state_val_50962 === (9))){
var state_50961__$1 = state_50961;
var statearr_50972_52516 = state_50961__$1;
(statearr_50972_52516[(2)] = tc);

(statearr_50972_52516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (5))){
var inst_50941 = cljs.core.async.close_BANG_(tc);
var inst_50942 = cljs.core.async.close_BANG_(fc);
var state_50961__$1 = (function (){var statearr_50973 = state_50961;
(statearr_50973[(8)] = inst_50941);

return statearr_50973;
})();
var statearr_50974_52518 = state_50961__$1;
(statearr_50974_52518[(2)] = inst_50942);

(statearr_50974_52518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (14))){
var inst_50955 = (state_50961[(2)]);
var state_50961__$1 = state_50961;
var statearr_50975_52519 = state_50961__$1;
(statearr_50975_52519[(2)] = inst_50955);

(statearr_50975_52519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (10))){
var state_50961__$1 = state_50961;
var statearr_50976_52521 = state_50961__$1;
(statearr_50976_52521[(2)] = fc);

(statearr_50976_52521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50962 === (8))){
var inst_50950 = (state_50961[(2)]);
var state_50961__$1 = state_50961;
if(cljs.core.truth_(inst_50950)){
var statearr_50977_52522 = state_50961__$1;
(statearr_50977_52522[(1)] = (12));

} else {
var statearr_50978_52523 = state_50961__$1;
(statearr_50978_52523[(1)] = (13));

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
});})(c__50615__auto___52480,tc,fc))
;
return ((function (switch__48679__auto__,c__50615__auto___52480,tc,fc){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_50979 = [null,null,null,null,null,null,null,null,null];
(statearr_50979[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_50979[(1)] = (1));

return statearr_50979;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_50961){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_50961);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e50980){var ex__48683__auto__ = e50980;
var statearr_50981_52526 = state_50961;
(statearr_50981_52526[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_50961[(4)]))){
var statearr_50982_52527 = state_50961;
(statearr_50982_52527[(1)] = cljs.core.first((state_50961[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52532 = state_50961;
state_50961 = G__52532;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_50961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_50961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___52480,tc,fc))
})();
var state__50617__auto__ = (function (){var statearr_50983 = f__50616__auto__();
(statearr_50983[(6)] = c__50615__auto___52480);

return statearr_50983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___52480,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__){
return (function (state_51005){
var state_val_51006 = (state_51005[(1)]);
if((state_val_51006 === (7))){
var inst_51001 = (state_51005[(2)]);
var state_51005__$1 = state_51005;
var statearr_51007_52541 = state_51005__$1;
(statearr_51007_52541[(2)] = inst_51001);

(statearr_51007_52541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (1))){
var inst_50984 = init;
var inst_50985 = inst_50984;
var state_51005__$1 = (function (){var statearr_51008 = state_51005;
(statearr_51008[(7)] = inst_50985);

return statearr_51008;
})();
var statearr_51009_52542 = state_51005__$1;
(statearr_51009_52542[(2)] = null);

(statearr_51009_52542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (4))){
var inst_50988 = (state_51005[(8)]);
var inst_50988__$1 = (state_51005[(2)]);
var inst_50989 = (inst_50988__$1 == null);
var state_51005__$1 = (function (){var statearr_51010 = state_51005;
(statearr_51010[(8)] = inst_50988__$1);

return statearr_51010;
})();
if(cljs.core.truth_(inst_50989)){
var statearr_51011_52543 = state_51005__$1;
(statearr_51011_52543[(1)] = (5));

} else {
var statearr_51012_52545 = state_51005__$1;
(statearr_51012_52545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (6))){
var inst_50992 = (state_51005[(9)]);
var inst_50985 = (state_51005[(7)]);
var inst_50988 = (state_51005[(8)]);
var inst_50992__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50985,inst_50988) : f.call(null,inst_50985,inst_50988));
var inst_50993 = cljs.core.reduced_QMARK_(inst_50992__$1);
var state_51005__$1 = (function (){var statearr_51013 = state_51005;
(statearr_51013[(9)] = inst_50992__$1);

return statearr_51013;
})();
if(inst_50993){
var statearr_51014_52548 = state_51005__$1;
(statearr_51014_52548[(1)] = (8));

} else {
var statearr_51015_52549 = state_51005__$1;
(statearr_51015_52549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (3))){
var inst_51003 = (state_51005[(2)]);
var state_51005__$1 = state_51005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51005__$1,inst_51003);
} else {
if((state_val_51006 === (2))){
var state_51005__$1 = state_51005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51005__$1,(4),ch);
} else {
if((state_val_51006 === (9))){
var inst_50992 = (state_51005[(9)]);
var inst_50985 = inst_50992;
var state_51005__$1 = (function (){var statearr_51016 = state_51005;
(statearr_51016[(7)] = inst_50985);

return statearr_51016;
})();
var statearr_51017_52554 = state_51005__$1;
(statearr_51017_52554[(2)] = null);

(statearr_51017_52554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (5))){
var inst_50985 = (state_51005[(7)]);
var state_51005__$1 = state_51005;
var statearr_51018_52558 = state_51005__$1;
(statearr_51018_52558[(2)] = inst_50985);

(statearr_51018_52558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (10))){
var inst_50999 = (state_51005[(2)]);
var state_51005__$1 = state_51005;
var statearr_51019_52560 = state_51005__$1;
(statearr_51019_52560[(2)] = inst_50999);

(statearr_51019_52560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51006 === (8))){
var inst_50992 = (state_51005[(9)]);
var inst_50995 = cljs.core.deref(inst_50992);
var state_51005__$1 = state_51005;
var statearr_51020_52561 = state_51005__$1;
(statearr_51020_52561[(2)] = inst_50995);

(statearr_51020_52561[(1)] = (10));


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
});})(c__50615__auto__))
;
return ((function (switch__48679__auto__,c__50615__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48680__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48680__auto____0 = (function (){
var statearr_51021 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51021[(0)] = cljs$core$async$reduce_$_state_machine__48680__auto__);

(statearr_51021[(1)] = (1));

return statearr_51021;
});
var cljs$core$async$reduce_$_state_machine__48680__auto____1 = (function (state_51005){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51005);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51022){var ex__48683__auto__ = e51022;
var statearr_51023_52564 = state_51005;
(statearr_51023_52564[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51005[(4)]))){
var statearr_51024_52566 = state_51005;
(statearr_51024_52566[(1)] = cljs.core.first((state_51005[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52567 = state_51005;
state_51005 = G__52567;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48680__auto__ = function(state_51005){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48680__auto____1.call(this,state_51005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48680__auto____0;
cljs$core$async$reduce_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48680__auto____1;
return cljs$core$async$reduce_$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__))
})();
var state__50617__auto__ = (function (){var statearr_51025 = f__50616__auto__();
(statearr_51025[(6)] = c__50615__auto__);

return statearr_51025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__))
);

return c__50615__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__,f__$1){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__,f__$1){
return (function (state_51031){
var state_val_51032 = (state_51031[(1)]);
if((state_val_51032 === (1))){
var inst_51026 = cljs.core.async.reduce(f__$1,init,ch);
var state_51031__$1 = state_51031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51031__$1,(2),inst_51026);
} else {
if((state_val_51032 === (2))){
var inst_51028 = (state_51031[(2)]);
var inst_51029 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51028) : f__$1.call(null,inst_51028));
var state_51031__$1 = state_51031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51031__$1,inst_51029);
} else {
return null;
}
}
});})(c__50615__auto__,f__$1))
;
return ((function (switch__48679__auto__,c__50615__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48680__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48680__auto____0 = (function (){
var statearr_51033 = [null,null,null,null,null,null,null];
(statearr_51033[(0)] = cljs$core$async$transduce_$_state_machine__48680__auto__);

(statearr_51033[(1)] = (1));

return statearr_51033;
});
var cljs$core$async$transduce_$_state_machine__48680__auto____1 = (function (state_51031){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51031);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51034){var ex__48683__auto__ = e51034;
var statearr_51035_52577 = state_51031;
(statearr_51035_52577[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51031[(4)]))){
var statearr_51036_52580 = state_51031;
(statearr_51036_52580[(1)] = cljs.core.first((state_51031[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52581 = state_51031;
state_51031 = G__52581;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48680__auto__ = function(state_51031){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48680__auto____1.call(this,state_51031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48680__auto____0;
cljs$core$async$transduce_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48680__auto____1;
return cljs$core$async$transduce_$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__,f__$1))
})();
var state__50617__auto__ = (function (){var statearr_51037 = f__50616__auto__();
(statearr_51037[(6)] = c__50615__auto__);

return statearr_51037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__,f__$1))
);

return c__50615__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51039 = arguments.length;
switch (G__51039) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__){
return (function (state_51064){
var state_val_51065 = (state_51064[(1)]);
if((state_val_51065 === (7))){
var inst_51046 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
var statearr_51066_52593 = state_51064__$1;
(statearr_51066_52593[(2)] = inst_51046);

(statearr_51066_52593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (1))){
var inst_51040 = cljs.core.seq(coll);
var inst_51041 = inst_51040;
var state_51064__$1 = (function (){var statearr_51067 = state_51064;
(statearr_51067[(7)] = inst_51041);

return statearr_51067;
})();
var statearr_51068_52597 = state_51064__$1;
(statearr_51068_52597[(2)] = null);

(statearr_51068_52597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (4))){
var inst_51041 = (state_51064[(7)]);
var inst_51044 = cljs.core.first(inst_51041);
var state_51064__$1 = state_51064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51064__$1,(7),ch,inst_51044);
} else {
if((state_val_51065 === (13))){
var inst_51058 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
var statearr_51069_52604 = state_51064__$1;
(statearr_51069_52604[(2)] = inst_51058);

(statearr_51069_52604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (6))){
var inst_51049 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
if(cljs.core.truth_(inst_51049)){
var statearr_51070_52611 = state_51064__$1;
(statearr_51070_52611[(1)] = (8));

} else {
var statearr_51071_52615 = state_51064__$1;
(statearr_51071_52615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (3))){
var inst_51062 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51064__$1,inst_51062);
} else {
if((state_val_51065 === (12))){
var state_51064__$1 = state_51064;
var statearr_51072_52617 = state_51064__$1;
(statearr_51072_52617[(2)] = null);

(statearr_51072_52617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (2))){
var inst_51041 = (state_51064[(7)]);
var state_51064__$1 = state_51064;
if(cljs.core.truth_(inst_51041)){
var statearr_51073_52620 = state_51064__$1;
(statearr_51073_52620[(1)] = (4));

} else {
var statearr_51074_52621 = state_51064__$1;
(statearr_51074_52621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (11))){
var inst_51055 = cljs.core.async.close_BANG_(ch);
var state_51064__$1 = state_51064;
var statearr_51075_52626 = state_51064__$1;
(statearr_51075_52626[(2)] = inst_51055);

(statearr_51075_52626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (9))){
var state_51064__$1 = state_51064;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51076_52628 = state_51064__$1;
(statearr_51076_52628[(1)] = (11));

} else {
var statearr_51077_52629 = state_51064__$1;
(statearr_51077_52629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (5))){
var inst_51041 = (state_51064[(7)]);
var state_51064__$1 = state_51064;
var statearr_51078_52635 = state_51064__$1;
(statearr_51078_52635[(2)] = inst_51041);

(statearr_51078_52635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (10))){
var inst_51060 = (state_51064[(2)]);
var state_51064__$1 = state_51064;
var statearr_51079_52636 = state_51064__$1;
(statearr_51079_52636[(2)] = inst_51060);

(statearr_51079_52636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51065 === (8))){
var inst_51041 = (state_51064[(7)]);
var inst_51051 = cljs.core.next(inst_51041);
var inst_51041__$1 = inst_51051;
var state_51064__$1 = (function (){var statearr_51080 = state_51064;
(statearr_51080[(7)] = inst_51041__$1);

return statearr_51080;
})();
var statearr_51081_52637 = state_51064__$1;
(statearr_51081_52637[(2)] = null);

(statearr_51081_52637[(1)] = (2));


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
});})(c__50615__auto__))
;
return ((function (switch__48679__auto__,c__50615__auto__){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_51082 = [null,null,null,null,null,null,null,null];
(statearr_51082[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_51082[(1)] = (1));

return statearr_51082;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51064){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51064);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51083){var ex__48683__auto__ = e51083;
var statearr_51084_52639 = state_51064;
(statearr_51084_52639[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51064[(4)]))){
var statearr_51085_52641 = state_51064;
(statearr_51085_52641[(1)] = cljs.core.first((state_51064[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52642 = state_51064;
state_51064 = G__52642;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__))
})();
var state__50617__auto__ = (function (){var statearr_51086 = f__50616__auto__();
(statearr_51086[(6)] = c__50615__auto__);

return statearr_51086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__))
);

return c__50615__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51088 = arguments.length;
switch (G__51088) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51089 = (function (ch,cs,meta51090){
this.ch = ch;
this.cs = cs;
this.meta51090 = meta51090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51091,meta51090__$1){
var self__ = this;
var _51091__$1 = this;
return (new cljs.core.async.t_cljs$core$async51089(self__.ch,self__.cs,meta51090__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51091){
var self__ = this;
var _51091__$1 = this;
return self__.meta51090;
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51090","meta51090",-1460997269,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async51089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51089";

cljs.core.async.t_cljs$core$async51089.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51089");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51089.
 */
cljs.core.async.__GT_t_cljs$core$async51089 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async51089(ch__$1,cs__$1,meta51090){
return (new cljs.core.async.t_cljs$core$async51089(ch__$1,cs__$1,meta51090));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async51089(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__50615__auto___52676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___52676,cs,m,dchan,dctr,done){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___52676,cs,m,dchan,dctr,done){
return (function (state_51224){
var state_val_51225 = (state_51224[(1)]);
if((state_val_51225 === (7))){
var inst_51220 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51226_52683 = state_51224__$1;
(statearr_51226_52683[(2)] = inst_51220);

(statearr_51226_52683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (20))){
var inst_51125 = (state_51224[(7)]);
var inst_51137 = cljs.core.first(inst_51125);
var inst_51138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51137,(0),null);
var inst_51139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51137,(1),null);
var state_51224__$1 = (function (){var statearr_51227 = state_51224;
(statearr_51227[(8)] = inst_51138);

return statearr_51227;
})();
if(cljs.core.truth_(inst_51139)){
var statearr_51228_52688 = state_51224__$1;
(statearr_51228_52688[(1)] = (22));

} else {
var statearr_51229_52689 = state_51224__$1;
(statearr_51229_52689[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (27))){
var inst_51174 = (state_51224[(9)]);
var inst_51169 = (state_51224[(10)]);
var inst_51094 = (state_51224[(11)]);
var inst_51167 = (state_51224[(12)]);
var inst_51174__$1 = cljs.core._nth(inst_51167,inst_51169);
var inst_51175 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51174__$1,inst_51094,done);
var state_51224__$1 = (function (){var statearr_51230 = state_51224;
(statearr_51230[(9)] = inst_51174__$1);

return statearr_51230;
})();
if(cljs.core.truth_(inst_51175)){
var statearr_51231_52691 = state_51224__$1;
(statearr_51231_52691[(1)] = (30));

} else {
var statearr_51232_52692 = state_51224__$1;
(statearr_51232_52692[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (1))){
var state_51224__$1 = state_51224;
var statearr_51233_52694 = state_51224__$1;
(statearr_51233_52694[(2)] = null);

(statearr_51233_52694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (24))){
var inst_51125 = (state_51224[(7)]);
var inst_51144 = (state_51224[(2)]);
var inst_51145 = cljs.core.next(inst_51125);
var inst_51103 = inst_51145;
var inst_51104 = null;
var inst_51105 = (0);
var inst_51106 = (0);
var state_51224__$1 = (function (){var statearr_51234 = state_51224;
(statearr_51234[(13)] = inst_51144);

(statearr_51234[(14)] = inst_51103);

(statearr_51234[(15)] = inst_51105);

(statearr_51234[(16)] = inst_51104);

(statearr_51234[(17)] = inst_51106);

return statearr_51234;
})();
var statearr_51235_52695 = state_51224__$1;
(statearr_51235_52695[(2)] = null);

(statearr_51235_52695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (39))){
var state_51224__$1 = state_51224;
var statearr_51239_52698 = state_51224__$1;
(statearr_51239_52698[(2)] = null);

(statearr_51239_52698[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (4))){
var inst_51094 = (state_51224[(11)]);
var inst_51094__$1 = (state_51224[(2)]);
var inst_51095 = (inst_51094__$1 == null);
var state_51224__$1 = (function (){var statearr_51240 = state_51224;
(statearr_51240[(11)] = inst_51094__$1);

return statearr_51240;
})();
if(cljs.core.truth_(inst_51095)){
var statearr_51241_52699 = state_51224__$1;
(statearr_51241_52699[(1)] = (5));

} else {
var statearr_51242_52700 = state_51224__$1;
(statearr_51242_52700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (15))){
var inst_51103 = (state_51224[(14)]);
var inst_51105 = (state_51224[(15)]);
var inst_51104 = (state_51224[(16)]);
var inst_51106 = (state_51224[(17)]);
var inst_51121 = (state_51224[(2)]);
var inst_51122 = (inst_51106 + (1));
var tmp51236 = inst_51103;
var tmp51237 = inst_51105;
var tmp51238 = inst_51104;
var inst_51103__$1 = tmp51236;
var inst_51104__$1 = tmp51238;
var inst_51105__$1 = tmp51237;
var inst_51106__$1 = inst_51122;
var state_51224__$1 = (function (){var statearr_51243 = state_51224;
(statearr_51243[(18)] = inst_51121);

(statearr_51243[(14)] = inst_51103__$1);

(statearr_51243[(15)] = inst_51105__$1);

(statearr_51243[(16)] = inst_51104__$1);

(statearr_51243[(17)] = inst_51106__$1);

return statearr_51243;
})();
var statearr_51244_52705 = state_51224__$1;
(statearr_51244_52705[(2)] = null);

(statearr_51244_52705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (21))){
var inst_51148 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51248_52706 = state_51224__$1;
(statearr_51248_52706[(2)] = inst_51148);

(statearr_51248_52706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (31))){
var inst_51174 = (state_51224[(9)]);
var inst_51178 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51174);
var state_51224__$1 = state_51224;
var statearr_51249_52707 = state_51224__$1;
(statearr_51249_52707[(2)] = inst_51178);

(statearr_51249_52707[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (32))){
var inst_51166 = (state_51224[(19)]);
var inst_51169 = (state_51224[(10)]);
var inst_51167 = (state_51224[(12)]);
var inst_51168 = (state_51224[(20)]);
var inst_51180 = (state_51224[(2)]);
var inst_51181 = (inst_51169 + (1));
var tmp51245 = inst_51166;
var tmp51246 = inst_51167;
var tmp51247 = inst_51168;
var inst_51166__$1 = tmp51245;
var inst_51167__$1 = tmp51246;
var inst_51168__$1 = tmp51247;
var inst_51169__$1 = inst_51181;
var state_51224__$1 = (function (){var statearr_51250 = state_51224;
(statearr_51250[(19)] = inst_51166__$1);

(statearr_51250[(10)] = inst_51169__$1);

(statearr_51250[(12)] = inst_51167__$1);

(statearr_51250[(20)] = inst_51168__$1);

(statearr_51250[(21)] = inst_51180);

return statearr_51250;
})();
var statearr_51251_52716 = state_51224__$1;
(statearr_51251_52716[(2)] = null);

(statearr_51251_52716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (40))){
var inst_51193 = (state_51224[(22)]);
var inst_51197 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51193);
var state_51224__$1 = state_51224;
var statearr_51252_52717 = state_51224__$1;
(statearr_51252_52717[(2)] = inst_51197);

(statearr_51252_52717[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (33))){
var inst_51184 = (state_51224[(23)]);
var inst_51186 = cljs.core.chunked_seq_QMARK_(inst_51184);
var state_51224__$1 = state_51224;
if(inst_51186){
var statearr_51253_52719 = state_51224__$1;
(statearr_51253_52719[(1)] = (36));

} else {
var statearr_51254_52721 = state_51224__$1;
(statearr_51254_52721[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (13))){
var inst_51115 = (state_51224[(24)]);
var inst_51118 = cljs.core.async.close_BANG_(inst_51115);
var state_51224__$1 = state_51224;
var statearr_51255_52722 = state_51224__$1;
(statearr_51255_52722[(2)] = inst_51118);

(statearr_51255_52722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (22))){
var inst_51138 = (state_51224[(8)]);
var inst_51141 = cljs.core.async.close_BANG_(inst_51138);
var state_51224__$1 = state_51224;
var statearr_51256_52725 = state_51224__$1;
(statearr_51256_52725[(2)] = inst_51141);

(statearr_51256_52725[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (36))){
var inst_51184 = (state_51224[(23)]);
var inst_51188 = cljs.core.chunk_first(inst_51184);
var inst_51189 = cljs.core.chunk_rest(inst_51184);
var inst_51190 = cljs.core.count(inst_51188);
var inst_51166 = inst_51189;
var inst_51167 = inst_51188;
var inst_51168 = inst_51190;
var inst_51169 = (0);
var state_51224__$1 = (function (){var statearr_51257 = state_51224;
(statearr_51257[(19)] = inst_51166);

(statearr_51257[(10)] = inst_51169);

(statearr_51257[(12)] = inst_51167);

(statearr_51257[(20)] = inst_51168);

return statearr_51257;
})();
var statearr_51258_52729 = state_51224__$1;
(statearr_51258_52729[(2)] = null);

(statearr_51258_52729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (41))){
var inst_51184 = (state_51224[(23)]);
var inst_51199 = (state_51224[(2)]);
var inst_51200 = cljs.core.next(inst_51184);
var inst_51166 = inst_51200;
var inst_51167 = null;
var inst_51168 = (0);
var inst_51169 = (0);
var state_51224__$1 = (function (){var statearr_51259 = state_51224;
(statearr_51259[(19)] = inst_51166);

(statearr_51259[(10)] = inst_51169);

(statearr_51259[(12)] = inst_51167);

(statearr_51259[(25)] = inst_51199);

(statearr_51259[(20)] = inst_51168);

return statearr_51259;
})();
var statearr_51260_52737 = state_51224__$1;
(statearr_51260_52737[(2)] = null);

(statearr_51260_52737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (43))){
var state_51224__$1 = state_51224;
var statearr_51261_52739 = state_51224__$1;
(statearr_51261_52739[(2)] = null);

(statearr_51261_52739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (29))){
var inst_51208 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51262_52741 = state_51224__$1;
(statearr_51262_52741[(2)] = inst_51208);

(statearr_51262_52741[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (44))){
var inst_51217 = (state_51224[(2)]);
var state_51224__$1 = (function (){var statearr_51263 = state_51224;
(statearr_51263[(26)] = inst_51217);

return statearr_51263;
})();
var statearr_51264_52742 = state_51224__$1;
(statearr_51264_52742[(2)] = null);

(statearr_51264_52742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (6))){
var inst_51158 = (state_51224[(27)]);
var inst_51157 = cljs.core.deref(cs);
var inst_51158__$1 = cljs.core.keys(inst_51157);
var inst_51159 = cljs.core.count(inst_51158__$1);
var inst_51160 = cljs.core.reset_BANG_(dctr,inst_51159);
var inst_51165 = cljs.core.seq(inst_51158__$1);
var inst_51166 = inst_51165;
var inst_51167 = null;
var inst_51168 = (0);
var inst_51169 = (0);
var state_51224__$1 = (function (){var statearr_51265 = state_51224;
(statearr_51265[(19)] = inst_51166);

(statearr_51265[(10)] = inst_51169);

(statearr_51265[(28)] = inst_51160);

(statearr_51265[(12)] = inst_51167);

(statearr_51265[(20)] = inst_51168);

(statearr_51265[(27)] = inst_51158__$1);

return statearr_51265;
})();
var statearr_51266_52745 = state_51224__$1;
(statearr_51266_52745[(2)] = null);

(statearr_51266_52745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (28))){
var inst_51184 = (state_51224[(23)]);
var inst_51166 = (state_51224[(19)]);
var inst_51184__$1 = cljs.core.seq(inst_51166);
var state_51224__$1 = (function (){var statearr_51267 = state_51224;
(statearr_51267[(23)] = inst_51184__$1);

return statearr_51267;
})();
if(inst_51184__$1){
var statearr_51268_52749 = state_51224__$1;
(statearr_51268_52749[(1)] = (33));

} else {
var statearr_51269_52750 = state_51224__$1;
(statearr_51269_52750[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (25))){
var inst_51169 = (state_51224[(10)]);
var inst_51168 = (state_51224[(20)]);
var inst_51171 = (inst_51169 < inst_51168);
var inst_51172 = inst_51171;
var state_51224__$1 = state_51224;
if(cljs.core.truth_(inst_51172)){
var statearr_51270_52754 = state_51224__$1;
(statearr_51270_52754[(1)] = (27));

} else {
var statearr_51271_52755 = state_51224__$1;
(statearr_51271_52755[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (34))){
var state_51224__$1 = state_51224;
var statearr_51272_52756 = state_51224__$1;
(statearr_51272_52756[(2)] = null);

(statearr_51272_52756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (17))){
var state_51224__$1 = state_51224;
var statearr_51273_52757 = state_51224__$1;
(statearr_51273_52757[(2)] = null);

(statearr_51273_52757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (3))){
var inst_51222 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51224__$1,inst_51222);
} else {
if((state_val_51225 === (12))){
var inst_51153 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51274_52758 = state_51224__$1;
(statearr_51274_52758[(2)] = inst_51153);

(statearr_51274_52758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (2))){
var state_51224__$1 = state_51224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51224__$1,(4),ch);
} else {
if((state_val_51225 === (23))){
var state_51224__$1 = state_51224;
var statearr_51275_52761 = state_51224__$1;
(statearr_51275_52761[(2)] = null);

(statearr_51275_52761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (35))){
var inst_51206 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51276_52765 = state_51224__$1;
(statearr_51276_52765[(2)] = inst_51206);

(statearr_51276_52765[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (19))){
var inst_51125 = (state_51224[(7)]);
var inst_51129 = cljs.core.chunk_first(inst_51125);
var inst_51130 = cljs.core.chunk_rest(inst_51125);
var inst_51131 = cljs.core.count(inst_51129);
var inst_51103 = inst_51130;
var inst_51104 = inst_51129;
var inst_51105 = inst_51131;
var inst_51106 = (0);
var state_51224__$1 = (function (){var statearr_51277 = state_51224;
(statearr_51277[(14)] = inst_51103);

(statearr_51277[(15)] = inst_51105);

(statearr_51277[(16)] = inst_51104);

(statearr_51277[(17)] = inst_51106);

return statearr_51277;
})();
var statearr_51278_52767 = state_51224__$1;
(statearr_51278_52767[(2)] = null);

(statearr_51278_52767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (11))){
var inst_51125 = (state_51224[(7)]);
var inst_51103 = (state_51224[(14)]);
var inst_51125__$1 = cljs.core.seq(inst_51103);
var state_51224__$1 = (function (){var statearr_51279 = state_51224;
(statearr_51279[(7)] = inst_51125__$1);

return statearr_51279;
})();
if(inst_51125__$1){
var statearr_51280_52770 = state_51224__$1;
(statearr_51280_52770[(1)] = (16));

} else {
var statearr_51281_52771 = state_51224__$1;
(statearr_51281_52771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (9))){
var inst_51155 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51282_52774 = state_51224__$1;
(statearr_51282_52774[(2)] = inst_51155);

(statearr_51282_52774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (5))){
var inst_51101 = cljs.core.deref(cs);
var inst_51102 = cljs.core.seq(inst_51101);
var inst_51103 = inst_51102;
var inst_51104 = null;
var inst_51105 = (0);
var inst_51106 = (0);
var state_51224__$1 = (function (){var statearr_51283 = state_51224;
(statearr_51283[(14)] = inst_51103);

(statearr_51283[(15)] = inst_51105);

(statearr_51283[(16)] = inst_51104);

(statearr_51283[(17)] = inst_51106);

return statearr_51283;
})();
var statearr_51284_52776 = state_51224__$1;
(statearr_51284_52776[(2)] = null);

(statearr_51284_52776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (14))){
var state_51224__$1 = state_51224;
var statearr_51285_52777 = state_51224__$1;
(statearr_51285_52777[(2)] = null);

(statearr_51285_52777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (45))){
var inst_51214 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51286_52779 = state_51224__$1;
(statearr_51286_52779[(2)] = inst_51214);

(statearr_51286_52779[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (26))){
var inst_51158 = (state_51224[(27)]);
var inst_51210 = (state_51224[(2)]);
var inst_51211 = cljs.core.seq(inst_51158);
var state_51224__$1 = (function (){var statearr_51287 = state_51224;
(statearr_51287[(29)] = inst_51210);

return statearr_51287;
})();
if(inst_51211){
var statearr_51288_52780 = state_51224__$1;
(statearr_51288_52780[(1)] = (42));

} else {
var statearr_51289_52781 = state_51224__$1;
(statearr_51289_52781[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (16))){
var inst_51125 = (state_51224[(7)]);
var inst_51127 = cljs.core.chunked_seq_QMARK_(inst_51125);
var state_51224__$1 = state_51224;
if(inst_51127){
var statearr_51290_52783 = state_51224__$1;
(statearr_51290_52783[(1)] = (19));

} else {
var statearr_51291_52785 = state_51224__$1;
(statearr_51291_52785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (38))){
var inst_51203 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51292_52787 = state_51224__$1;
(statearr_51292_52787[(2)] = inst_51203);

(statearr_51292_52787[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (30))){
var state_51224__$1 = state_51224;
var statearr_51293_52789 = state_51224__$1;
(statearr_51293_52789[(2)] = null);

(statearr_51293_52789[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (10))){
var inst_51104 = (state_51224[(16)]);
var inst_51106 = (state_51224[(17)]);
var inst_51114 = cljs.core._nth(inst_51104,inst_51106);
var inst_51115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51114,(0),null);
var inst_51116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51114,(1),null);
var state_51224__$1 = (function (){var statearr_51294 = state_51224;
(statearr_51294[(24)] = inst_51115);

return statearr_51294;
})();
if(cljs.core.truth_(inst_51116)){
var statearr_51295_52791 = state_51224__$1;
(statearr_51295_52791[(1)] = (13));

} else {
var statearr_51296_52793 = state_51224__$1;
(statearr_51296_52793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (18))){
var inst_51151 = (state_51224[(2)]);
var state_51224__$1 = state_51224;
var statearr_51297_52794 = state_51224__$1;
(statearr_51297_52794[(2)] = inst_51151);

(statearr_51297_52794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (42))){
var state_51224__$1 = state_51224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51224__$1,(45),dchan);
} else {
if((state_val_51225 === (37))){
var inst_51184 = (state_51224[(23)]);
var inst_51094 = (state_51224[(11)]);
var inst_51193 = (state_51224[(22)]);
var inst_51193__$1 = cljs.core.first(inst_51184);
var inst_51194 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51193__$1,inst_51094,done);
var state_51224__$1 = (function (){var statearr_51298 = state_51224;
(statearr_51298[(22)] = inst_51193__$1);

return statearr_51298;
})();
if(cljs.core.truth_(inst_51194)){
var statearr_51299_52795 = state_51224__$1;
(statearr_51299_52795[(1)] = (39));

} else {
var statearr_51300_52796 = state_51224__$1;
(statearr_51300_52796[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51225 === (8))){
var inst_51105 = (state_51224[(15)]);
var inst_51106 = (state_51224[(17)]);
var inst_51108 = (inst_51106 < inst_51105);
var inst_51109 = inst_51108;
var state_51224__$1 = state_51224;
if(cljs.core.truth_(inst_51109)){
var statearr_51301_52797 = state_51224__$1;
(statearr_51301_52797[(1)] = (10));

} else {
var statearr_51302_52798 = state_51224__$1;
(statearr_51302_52798[(1)] = (11));

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
});})(c__50615__auto___52676,cs,m,dchan,dctr,done))
;
return ((function (switch__48679__auto__,c__50615__auto___52676,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48680__auto__ = null;
var cljs$core$async$mult_$_state_machine__48680__auto____0 = (function (){
var statearr_51303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51303[(0)] = cljs$core$async$mult_$_state_machine__48680__auto__);

(statearr_51303[(1)] = (1));

return statearr_51303;
});
var cljs$core$async$mult_$_state_machine__48680__auto____1 = (function (state_51224){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51224);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51304){var ex__48683__auto__ = e51304;
var statearr_51305_52799 = state_51224;
(statearr_51305_52799[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51224[(4)]))){
var statearr_51306_52800 = state_51224;
(statearr_51306_52800[(1)] = cljs.core.first((state_51224[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52801 = state_51224;
state_51224 = G__52801;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48680__auto__ = function(state_51224){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48680__auto____1.call(this,state_51224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48680__auto____0;
cljs$core$async$mult_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48680__auto____1;
return cljs$core$async$mult_$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___52676,cs,m,dchan,dctr,done))
})();
var state__50617__auto__ = (function (){var statearr_51307 = f__50616__auto__();
(statearr_51307[(6)] = c__50615__auto___52676);

return statearr_51307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___52676,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51309 = arguments.length;
switch (G__51309) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52808 = arguments.length;
var i__4731__auto___52809 = (0);
while(true){
if((i__4731__auto___52809 < len__4730__auto___52808)){
args__4736__auto__.push((arguments[i__4731__auto___52809]));

var G__52810 = (i__4731__auto___52809 + (1));
i__4731__auto___52809 = G__52810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51314){
var map__51315 = p__51314;
var map__51315__$1 = (((((!((map__51315 == null))))?(((((map__51315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51315):map__51315);
var opts = map__51315__$1;
var statearr_51317_52820 = state;
(statearr_51317_52820[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__51315,map__51315__$1,opts){
return (function (val){
var statearr_51318_52823 = state;
(statearr_51318_52823[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__51315,map__51315__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_51319_52828 = state;
(statearr_51319_52828[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51310){
var G__51311 = cljs.core.first(seq51310);
var seq51310__$1 = cljs.core.next(seq51310);
var G__51312 = cljs.core.first(seq51310__$1);
var seq51310__$2 = cljs.core.next(seq51310__$1);
var G__51313 = cljs.core.first(seq51310__$2);
var seq51310__$3 = cljs.core.next(seq51310__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51311,G__51312,G__51313,seq51310__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51320 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51321){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51321 = meta51321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51322,meta51321__$1){
var self__ = this;
var _51322__$1 = this;
return (new cljs.core.async.t_cljs$core$async51320(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51321__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51322){
var self__ = this;
var _51322__$1 = this;
return self__.meta51321;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51321","meta51321",-590789601,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51320";

cljs.core.async.t_cljs$core$async51320.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51320");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51320.
 */
cljs.core.async.__GT_t_cljs$core$async51320 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51320(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51321){
return (new cljs.core.async.t_cljs$core$async51320(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51321));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51320(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50615__auto___52869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___52869,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___52869,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51424){
var state_val_51425 = (state_51424[(1)]);
if((state_val_51425 === (7))){
var inst_51339 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51426_52870 = state_51424__$1;
(statearr_51426_52870[(2)] = inst_51339);

(statearr_51426_52870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (20))){
var inst_51351 = (state_51424[(7)]);
var state_51424__$1 = state_51424;
var statearr_51427_52873 = state_51424__$1;
(statearr_51427_52873[(2)] = inst_51351);

(statearr_51427_52873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (27))){
var state_51424__$1 = state_51424;
var statearr_51428_52878 = state_51424__$1;
(statearr_51428_52878[(2)] = null);

(statearr_51428_52878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (1))){
var inst_51326 = (state_51424[(8)]);
var inst_51326__$1 = calc_state();
var inst_51328 = (inst_51326__$1 == null);
var inst_51329 = cljs.core.not(inst_51328);
var state_51424__$1 = (function (){var statearr_51429 = state_51424;
(statearr_51429[(8)] = inst_51326__$1);

return statearr_51429;
})();
if(inst_51329){
var statearr_51430_52880 = state_51424__$1;
(statearr_51430_52880[(1)] = (2));

} else {
var statearr_51431_52881 = state_51424__$1;
(statearr_51431_52881[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (24))){
var inst_51384 = (state_51424[(9)]);
var inst_51375 = (state_51424[(10)]);
var inst_51398 = (state_51424[(11)]);
var inst_51398__$1 = (inst_51375.cljs$core$IFn$_invoke$arity$1 ? inst_51375.cljs$core$IFn$_invoke$arity$1(inst_51384) : inst_51375.call(null,inst_51384));
var state_51424__$1 = (function (){var statearr_51432 = state_51424;
(statearr_51432[(11)] = inst_51398__$1);

return statearr_51432;
})();
if(cljs.core.truth_(inst_51398__$1)){
var statearr_51433_52882 = state_51424__$1;
(statearr_51433_52882[(1)] = (29));

} else {
var statearr_51434_52883 = state_51424__$1;
(statearr_51434_52883[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (4))){
var inst_51342 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51342)){
var statearr_51435_52884 = state_51424__$1;
(statearr_51435_52884[(1)] = (8));

} else {
var statearr_51436_52885 = state_51424__$1;
(statearr_51436_52885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (15))){
var inst_51369 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51369)){
var statearr_51437_52888 = state_51424__$1;
(statearr_51437_52888[(1)] = (19));

} else {
var statearr_51438_52889 = state_51424__$1;
(statearr_51438_52889[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (21))){
var inst_51374 = (state_51424[(12)]);
var inst_51374__$1 = (state_51424[(2)]);
var inst_51375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51374__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51374__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51374__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51424__$1 = (function (){var statearr_51439 = state_51424;
(statearr_51439[(10)] = inst_51375);

(statearr_51439[(12)] = inst_51374__$1);

(statearr_51439[(13)] = inst_51376);

return statearr_51439;
})();
return cljs.core.async.ioc_alts_BANG_(state_51424__$1,(22),inst_51377);
} else {
if((state_val_51425 === (31))){
var inst_51406 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51406)){
var statearr_51440_52900 = state_51424__$1;
(statearr_51440_52900[(1)] = (32));

} else {
var statearr_51441_52901 = state_51424__$1;
(statearr_51441_52901[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (32))){
var inst_51383 = (state_51424[(14)]);
var state_51424__$1 = state_51424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51424__$1,(35),out,inst_51383);
} else {
if((state_val_51425 === (33))){
var inst_51374 = (state_51424[(12)]);
var inst_51351 = inst_51374;
var state_51424__$1 = (function (){var statearr_51442 = state_51424;
(statearr_51442[(7)] = inst_51351);

return statearr_51442;
})();
var statearr_51443_52908 = state_51424__$1;
(statearr_51443_52908[(2)] = null);

(statearr_51443_52908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (13))){
var inst_51351 = (state_51424[(7)]);
var inst_51358 = inst_51351.cljs$lang$protocol_mask$partition0$;
var inst_51359 = (inst_51358 & (64));
var inst_51360 = inst_51351.cljs$core$ISeq$;
var inst_51361 = (cljs.core.PROTOCOL_SENTINEL === inst_51360);
var inst_51362 = ((inst_51359) || (inst_51361));
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51362)){
var statearr_51444_52909 = state_51424__$1;
(statearr_51444_52909[(1)] = (16));

} else {
var statearr_51445_52910 = state_51424__$1;
(statearr_51445_52910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (22))){
var inst_51384 = (state_51424[(9)]);
var inst_51383 = (state_51424[(14)]);
var inst_51382 = (state_51424[(2)]);
var inst_51383__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51382,(0),null);
var inst_51384__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51382,(1),null);
var inst_51385 = (inst_51383__$1 == null);
var inst_51386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51384__$1,change);
var inst_51387 = ((inst_51385) || (inst_51386));
var state_51424__$1 = (function (){var statearr_51446 = state_51424;
(statearr_51446[(9)] = inst_51384__$1);

(statearr_51446[(14)] = inst_51383__$1);

return statearr_51446;
})();
if(cljs.core.truth_(inst_51387)){
var statearr_51447_52911 = state_51424__$1;
(statearr_51447_52911[(1)] = (23));

} else {
var statearr_51448_52915 = state_51424__$1;
(statearr_51448_52915[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (36))){
var inst_51374 = (state_51424[(12)]);
var inst_51351 = inst_51374;
var state_51424__$1 = (function (){var statearr_51449 = state_51424;
(statearr_51449[(7)] = inst_51351);

return statearr_51449;
})();
var statearr_51450_52916 = state_51424__$1;
(statearr_51450_52916[(2)] = null);

(statearr_51450_52916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (29))){
var inst_51398 = (state_51424[(11)]);
var state_51424__$1 = state_51424;
var statearr_51451_52919 = state_51424__$1;
(statearr_51451_52919[(2)] = inst_51398);

(statearr_51451_52919[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (6))){
var state_51424__$1 = state_51424;
var statearr_51452_52921 = state_51424__$1;
(statearr_51452_52921[(2)] = false);

(statearr_51452_52921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (28))){
var inst_51394 = (state_51424[(2)]);
var inst_51395 = calc_state();
var inst_51351 = inst_51395;
var state_51424__$1 = (function (){var statearr_51453 = state_51424;
(statearr_51453[(7)] = inst_51351);

(statearr_51453[(15)] = inst_51394);

return statearr_51453;
})();
var statearr_51454_52923 = state_51424__$1;
(statearr_51454_52923[(2)] = null);

(statearr_51454_52923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (25))){
var inst_51420 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51455_52924 = state_51424__$1;
(statearr_51455_52924[(2)] = inst_51420);

(statearr_51455_52924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (34))){
var inst_51418 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51456_52925 = state_51424__$1;
(statearr_51456_52925[(2)] = inst_51418);

(statearr_51456_52925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (17))){
var state_51424__$1 = state_51424;
var statearr_51457_52927 = state_51424__$1;
(statearr_51457_52927[(2)] = false);

(statearr_51457_52927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (3))){
var state_51424__$1 = state_51424;
var statearr_51458_52930 = state_51424__$1;
(statearr_51458_52930[(2)] = false);

(statearr_51458_52930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (12))){
var inst_51422 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51424__$1,inst_51422);
} else {
if((state_val_51425 === (2))){
var inst_51326 = (state_51424[(8)]);
var inst_51331 = inst_51326.cljs$lang$protocol_mask$partition0$;
var inst_51332 = (inst_51331 & (64));
var inst_51333 = inst_51326.cljs$core$ISeq$;
var inst_51334 = (cljs.core.PROTOCOL_SENTINEL === inst_51333);
var inst_51335 = ((inst_51332) || (inst_51334));
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51335)){
var statearr_51459_52941 = state_51424__$1;
(statearr_51459_52941[(1)] = (5));

} else {
var statearr_51460_52946 = state_51424__$1;
(statearr_51460_52946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (23))){
var inst_51383 = (state_51424[(14)]);
var inst_51389 = (inst_51383 == null);
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51389)){
var statearr_51461_52950 = state_51424__$1;
(statearr_51461_52950[(1)] = (26));

} else {
var statearr_51462_52951 = state_51424__$1;
(statearr_51462_52951[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (35))){
var inst_51409 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51409)){
var statearr_51463_52953 = state_51424__$1;
(statearr_51463_52953[(1)] = (36));

} else {
var statearr_51464_52956 = state_51424__$1;
(statearr_51464_52956[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (19))){
var inst_51351 = (state_51424[(7)]);
var inst_51371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51351);
var state_51424__$1 = state_51424;
var statearr_51465_52960 = state_51424__$1;
(statearr_51465_52960[(2)] = inst_51371);

(statearr_51465_52960[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (11))){
var inst_51351 = (state_51424[(7)]);
var inst_51355 = (inst_51351 == null);
var inst_51356 = cljs.core.not(inst_51355);
var state_51424__$1 = state_51424;
if(inst_51356){
var statearr_51466_52963 = state_51424__$1;
(statearr_51466_52963[(1)] = (13));

} else {
var statearr_51467_52964 = state_51424__$1;
(statearr_51467_52964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (9))){
var inst_51326 = (state_51424[(8)]);
var state_51424__$1 = state_51424;
var statearr_51468_52965 = state_51424__$1;
(statearr_51468_52965[(2)] = inst_51326);

(statearr_51468_52965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (5))){
var state_51424__$1 = state_51424;
var statearr_51469_52967 = state_51424__$1;
(statearr_51469_52967[(2)] = true);

(statearr_51469_52967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (14))){
var state_51424__$1 = state_51424;
var statearr_51470_52971 = state_51424__$1;
(statearr_51470_52971[(2)] = false);

(statearr_51470_52971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (26))){
var inst_51384 = (state_51424[(9)]);
var inst_51391 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51384);
var state_51424__$1 = state_51424;
var statearr_51471_52974 = state_51424__$1;
(statearr_51471_52974[(2)] = inst_51391);

(statearr_51471_52974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (16))){
var state_51424__$1 = state_51424;
var statearr_51472_52978 = state_51424__$1;
(statearr_51472_52978[(2)] = true);

(statearr_51472_52978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (38))){
var inst_51414 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51473_52982 = state_51424__$1;
(statearr_51473_52982[(2)] = inst_51414);

(statearr_51473_52982[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (30))){
var inst_51384 = (state_51424[(9)]);
var inst_51375 = (state_51424[(10)]);
var inst_51376 = (state_51424[(13)]);
var inst_51401 = cljs.core.empty_QMARK_(inst_51375);
var inst_51402 = (inst_51376.cljs$core$IFn$_invoke$arity$1 ? inst_51376.cljs$core$IFn$_invoke$arity$1(inst_51384) : inst_51376.call(null,inst_51384));
var inst_51403 = cljs.core.not(inst_51402);
var inst_51404 = ((inst_51401) && (inst_51403));
var state_51424__$1 = state_51424;
var statearr_51474_52992 = state_51424__$1;
(statearr_51474_52992[(2)] = inst_51404);

(statearr_51474_52992[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (10))){
var inst_51326 = (state_51424[(8)]);
var inst_51347 = (state_51424[(2)]);
var inst_51348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51347,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51347,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51347,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51351 = inst_51326;
var state_51424__$1 = (function (){var statearr_51475 = state_51424;
(statearr_51475[(7)] = inst_51351);

(statearr_51475[(16)] = inst_51349);

(statearr_51475[(17)] = inst_51348);

(statearr_51475[(18)] = inst_51350);

return statearr_51475;
})();
var statearr_51476_53004 = state_51424__$1;
(statearr_51476_53004[(2)] = null);

(statearr_51476_53004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (18))){
var inst_51366 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51477_53009 = state_51424__$1;
(statearr_51477_53009[(2)] = inst_51366);

(statearr_51477_53009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (37))){
var state_51424__$1 = state_51424;
var statearr_51478_53012 = state_51424__$1;
(statearr_51478_53012[(2)] = null);

(statearr_51478_53012[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (8))){
var inst_51326 = (state_51424[(8)]);
var inst_51344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51326);
var state_51424__$1 = state_51424;
var statearr_51479_53020 = state_51424__$1;
(statearr_51479_53020[(2)] = inst_51344);

(statearr_51479_53020[(1)] = (10));


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
}
}
});})(c__50615__auto___52869,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48679__auto__,c__50615__auto___52869,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48680__auto__ = null;
var cljs$core$async$mix_$_state_machine__48680__auto____0 = (function (){
var statearr_51480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51480[(0)] = cljs$core$async$mix_$_state_machine__48680__auto__);

(statearr_51480[(1)] = (1));

return statearr_51480;
});
var cljs$core$async$mix_$_state_machine__48680__auto____1 = (function (state_51424){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51424);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51481){var ex__48683__auto__ = e51481;
var statearr_51482_53040 = state_51424;
(statearr_51482_53040[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51424[(4)]))){
var statearr_51483_53046 = state_51424;
(statearr_51483_53046[(1)] = cljs.core.first((state_51424[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53053 = state_51424;
state_51424 = G__53053;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48680__auto__ = function(state_51424){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48680__auto____1.call(this,state_51424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48680__auto____0;
cljs$core$async$mix_$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48680__auto____1;
return cljs$core$async$mix_$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___52869,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__50617__auto__ = (function (){var statearr_51484 = f__50616__auto__();
(statearr_51484[(6)] = c__50615__auto___52869);

return statearr_51484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___52869,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51486 = arguments.length;
switch (G__51486) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51489 = arguments.length;
switch (G__51489) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__51487_SHARP_){
if(cljs.core.truth_((p1__51487_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51487_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51487_SHARP_.call(null,topic)))){
return p1__51487_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51487_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51490 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51491){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51491 = meta51491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51492,meta51491__$1){
var self__ = this;
var _51492__$1 = this;
return (new cljs.core.async.t_cljs$core$async51490(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51491__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51492){
var self__ = this;
var _51492__$1 = this;
return self__.meta51491;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51491","meta51491",-443182405,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51490";

cljs.core.async.t_cljs$core$async51490.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51490");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51490.
 */
cljs.core.async.__GT_t_cljs$core$async51490 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51490(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51491){
return (new cljs.core.async.t_cljs$core$async51490(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51491));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51490(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__50615__auto___53180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___53180,mults,ensure_mult,p){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___53180,mults,ensure_mult,p){
return (function (state_51564){
var state_val_51565 = (state_51564[(1)]);
if((state_val_51565 === (7))){
var inst_51560 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51566_53181 = state_51564__$1;
(statearr_51566_53181[(2)] = inst_51560);

(statearr_51566_53181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (20))){
var state_51564__$1 = state_51564;
var statearr_51567_53182 = state_51564__$1;
(statearr_51567_53182[(2)] = null);

(statearr_51567_53182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (1))){
var state_51564__$1 = state_51564;
var statearr_51568_53186 = state_51564__$1;
(statearr_51568_53186[(2)] = null);

(statearr_51568_53186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (24))){
var inst_51543 = (state_51564[(7)]);
var inst_51552 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51543);
var state_51564__$1 = state_51564;
var statearr_51569_53193 = state_51564__$1;
(statearr_51569_53193[(2)] = inst_51552);

(statearr_51569_53193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (4))){
var inst_51495 = (state_51564[(8)]);
var inst_51495__$1 = (state_51564[(2)]);
var inst_51496 = (inst_51495__$1 == null);
var state_51564__$1 = (function (){var statearr_51570 = state_51564;
(statearr_51570[(8)] = inst_51495__$1);

return statearr_51570;
})();
if(cljs.core.truth_(inst_51496)){
var statearr_51571_53200 = state_51564__$1;
(statearr_51571_53200[(1)] = (5));

} else {
var statearr_51572_53202 = state_51564__$1;
(statearr_51572_53202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (15))){
var inst_51537 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51573_53204 = state_51564__$1;
(statearr_51573_53204[(2)] = inst_51537);

(statearr_51573_53204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (21))){
var inst_51557 = (state_51564[(2)]);
var state_51564__$1 = (function (){var statearr_51574 = state_51564;
(statearr_51574[(9)] = inst_51557);

return statearr_51574;
})();
var statearr_51575_53210 = state_51564__$1;
(statearr_51575_53210[(2)] = null);

(statearr_51575_53210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (13))){
var inst_51519 = (state_51564[(10)]);
var inst_51521 = cljs.core.chunked_seq_QMARK_(inst_51519);
var state_51564__$1 = state_51564;
if(inst_51521){
var statearr_51576_53215 = state_51564__$1;
(statearr_51576_53215[(1)] = (16));

} else {
var statearr_51577_53217 = state_51564__$1;
(statearr_51577_53217[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (22))){
var inst_51549 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
if(cljs.core.truth_(inst_51549)){
var statearr_51578_53222 = state_51564__$1;
(statearr_51578_53222[(1)] = (23));

} else {
var statearr_51579_53225 = state_51564__$1;
(statearr_51579_53225[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (6))){
var inst_51495 = (state_51564[(8)]);
var inst_51543 = (state_51564[(7)]);
var inst_51545 = (state_51564[(11)]);
var inst_51543__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51495) : topic_fn.call(null,inst_51495));
var inst_51544 = cljs.core.deref(mults);
var inst_51545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51544,inst_51543__$1);
var state_51564__$1 = (function (){var statearr_51580 = state_51564;
(statearr_51580[(7)] = inst_51543__$1);

(statearr_51580[(11)] = inst_51545__$1);

return statearr_51580;
})();
if(cljs.core.truth_(inst_51545__$1)){
var statearr_51581_53234 = state_51564__$1;
(statearr_51581_53234[(1)] = (19));

} else {
var statearr_51582_53238 = state_51564__$1;
(statearr_51582_53238[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (25))){
var inst_51554 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51583_53241 = state_51564__$1;
(statearr_51583_53241[(2)] = inst_51554);

(statearr_51583_53241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (17))){
var inst_51519 = (state_51564[(10)]);
var inst_51528 = cljs.core.first(inst_51519);
var inst_51529 = cljs.core.async.muxch_STAR_(inst_51528);
var inst_51530 = cljs.core.async.close_BANG_(inst_51529);
var inst_51531 = cljs.core.next(inst_51519);
var inst_51505 = inst_51531;
var inst_51506 = null;
var inst_51507 = (0);
var inst_51508 = (0);
var state_51564__$1 = (function (){var statearr_51584 = state_51564;
(statearr_51584[(12)] = inst_51508);

(statearr_51584[(13)] = inst_51507);

(statearr_51584[(14)] = inst_51505);

(statearr_51584[(15)] = inst_51530);

(statearr_51584[(16)] = inst_51506);

return statearr_51584;
})();
var statearr_51585_53260 = state_51564__$1;
(statearr_51585_53260[(2)] = null);

(statearr_51585_53260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (3))){
var inst_51562 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51564__$1,inst_51562);
} else {
if((state_val_51565 === (12))){
var inst_51539 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51586_53268 = state_51564__$1;
(statearr_51586_53268[(2)] = inst_51539);

(statearr_51586_53268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (2))){
var state_51564__$1 = state_51564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51564__$1,(4),ch);
} else {
if((state_val_51565 === (23))){
var state_51564__$1 = state_51564;
var statearr_51587_53275 = state_51564__$1;
(statearr_51587_53275[(2)] = null);

(statearr_51587_53275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (19))){
var inst_51495 = (state_51564[(8)]);
var inst_51545 = (state_51564[(11)]);
var inst_51547 = cljs.core.async.muxch_STAR_(inst_51545);
var state_51564__$1 = state_51564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51564__$1,(22),inst_51547,inst_51495);
} else {
if((state_val_51565 === (11))){
var inst_51505 = (state_51564[(14)]);
var inst_51519 = (state_51564[(10)]);
var inst_51519__$1 = cljs.core.seq(inst_51505);
var state_51564__$1 = (function (){var statearr_51588 = state_51564;
(statearr_51588[(10)] = inst_51519__$1);

return statearr_51588;
})();
if(inst_51519__$1){
var statearr_51589_53293 = state_51564__$1;
(statearr_51589_53293[(1)] = (13));

} else {
var statearr_51590_53295 = state_51564__$1;
(statearr_51590_53295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (9))){
var inst_51541 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51591_53300 = state_51564__$1;
(statearr_51591_53300[(2)] = inst_51541);

(statearr_51591_53300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (5))){
var inst_51502 = cljs.core.deref(mults);
var inst_51503 = cljs.core.vals(inst_51502);
var inst_51504 = cljs.core.seq(inst_51503);
var inst_51505 = inst_51504;
var inst_51506 = null;
var inst_51507 = (0);
var inst_51508 = (0);
var state_51564__$1 = (function (){var statearr_51592 = state_51564;
(statearr_51592[(12)] = inst_51508);

(statearr_51592[(13)] = inst_51507);

(statearr_51592[(14)] = inst_51505);

(statearr_51592[(16)] = inst_51506);

return statearr_51592;
})();
var statearr_51593_53314 = state_51564__$1;
(statearr_51593_53314[(2)] = null);

(statearr_51593_53314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (14))){
var state_51564__$1 = state_51564;
var statearr_51597_53318 = state_51564__$1;
(statearr_51597_53318[(2)] = null);

(statearr_51597_53318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (16))){
var inst_51519 = (state_51564[(10)]);
var inst_51523 = cljs.core.chunk_first(inst_51519);
var inst_51524 = cljs.core.chunk_rest(inst_51519);
var inst_51525 = cljs.core.count(inst_51523);
var inst_51505 = inst_51524;
var inst_51506 = inst_51523;
var inst_51507 = inst_51525;
var inst_51508 = (0);
var state_51564__$1 = (function (){var statearr_51598 = state_51564;
(statearr_51598[(12)] = inst_51508);

(statearr_51598[(13)] = inst_51507);

(statearr_51598[(14)] = inst_51505);

(statearr_51598[(16)] = inst_51506);

return statearr_51598;
})();
var statearr_51599_53322 = state_51564__$1;
(statearr_51599_53322[(2)] = null);

(statearr_51599_53322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (10))){
var inst_51508 = (state_51564[(12)]);
var inst_51507 = (state_51564[(13)]);
var inst_51505 = (state_51564[(14)]);
var inst_51506 = (state_51564[(16)]);
var inst_51513 = cljs.core._nth(inst_51506,inst_51508);
var inst_51514 = cljs.core.async.muxch_STAR_(inst_51513);
var inst_51515 = cljs.core.async.close_BANG_(inst_51514);
var inst_51516 = (inst_51508 + (1));
var tmp51594 = inst_51507;
var tmp51595 = inst_51505;
var tmp51596 = inst_51506;
var inst_51505__$1 = tmp51595;
var inst_51506__$1 = tmp51596;
var inst_51507__$1 = tmp51594;
var inst_51508__$1 = inst_51516;
var state_51564__$1 = (function (){var statearr_51600 = state_51564;
(statearr_51600[(17)] = inst_51515);

(statearr_51600[(12)] = inst_51508__$1);

(statearr_51600[(13)] = inst_51507__$1);

(statearr_51600[(14)] = inst_51505__$1);

(statearr_51600[(16)] = inst_51506__$1);

return statearr_51600;
})();
var statearr_51601_53323 = state_51564__$1;
(statearr_51601_53323[(2)] = null);

(statearr_51601_53323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (18))){
var inst_51534 = (state_51564[(2)]);
var state_51564__$1 = state_51564;
var statearr_51602_53324 = state_51564__$1;
(statearr_51602_53324[(2)] = inst_51534);

(statearr_51602_53324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51565 === (8))){
var inst_51508 = (state_51564[(12)]);
var inst_51507 = (state_51564[(13)]);
var inst_51510 = (inst_51508 < inst_51507);
var inst_51511 = inst_51510;
var state_51564__$1 = state_51564;
if(cljs.core.truth_(inst_51511)){
var statearr_51603_53327 = state_51564__$1;
(statearr_51603_53327[(1)] = (10));

} else {
var statearr_51604_53328 = state_51564__$1;
(statearr_51604_53328[(1)] = (11));

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
});})(c__50615__auto___53180,mults,ensure_mult,p))
;
return ((function (switch__48679__auto__,c__50615__auto___53180,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_51605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51605[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_51605[(1)] = (1));

return statearr_51605;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51564){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51564);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51606){var ex__48683__auto__ = e51606;
var statearr_51607_53331 = state_51564;
(statearr_51607_53331[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51564[(4)]))){
var statearr_51608_53336 = state_51564;
(statearr_51608_53336[(1)] = cljs.core.first((state_51564[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53338 = state_51564;
state_51564 = G__53338;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___53180,mults,ensure_mult,p))
})();
var state__50617__auto__ = (function (){var statearr_51609 = f__50616__auto__();
(statearr_51609[(6)] = c__50615__auto___53180);

return statearr_51609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___53180,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51611 = arguments.length;
switch (G__51611) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51613 = arguments.length;
switch (G__51613) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51615 = arguments.length;
switch (G__51615) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__50615__auto___53386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___53386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___53386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51658){
var state_val_51659 = (state_51658[(1)]);
if((state_val_51659 === (7))){
var state_51658__$1 = state_51658;
var statearr_51660_53390 = state_51658__$1;
(statearr_51660_53390[(2)] = null);

(statearr_51660_53390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (1))){
var state_51658__$1 = state_51658;
var statearr_51661_53394 = state_51658__$1;
(statearr_51661_53394[(2)] = null);

(statearr_51661_53394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (4))){
var inst_51618 = (state_51658[(7)]);
var inst_51619 = (state_51658[(8)]);
var inst_51621 = (inst_51619 < inst_51618);
var state_51658__$1 = state_51658;
if(cljs.core.truth_(inst_51621)){
var statearr_51662_53402 = state_51658__$1;
(statearr_51662_53402[(1)] = (6));

} else {
var statearr_51663_53403 = state_51658__$1;
(statearr_51663_53403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (15))){
var inst_51644 = (state_51658[(9)]);
var inst_51649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51644);
var state_51658__$1 = state_51658;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51658__$1,(17),out,inst_51649);
} else {
if((state_val_51659 === (13))){
var inst_51644 = (state_51658[(9)]);
var inst_51644__$1 = (state_51658[(2)]);
var inst_51645 = cljs.core.some(cljs.core.nil_QMARK_,inst_51644__$1);
var state_51658__$1 = (function (){var statearr_51664 = state_51658;
(statearr_51664[(9)] = inst_51644__$1);

return statearr_51664;
})();
if(cljs.core.truth_(inst_51645)){
var statearr_51665_53406 = state_51658__$1;
(statearr_51665_53406[(1)] = (14));

} else {
var statearr_51666_53407 = state_51658__$1;
(statearr_51666_53407[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (6))){
var state_51658__$1 = state_51658;
var statearr_51667_53408 = state_51658__$1;
(statearr_51667_53408[(2)] = null);

(statearr_51667_53408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (17))){
var inst_51651 = (state_51658[(2)]);
var state_51658__$1 = (function (){var statearr_51669 = state_51658;
(statearr_51669[(10)] = inst_51651);

return statearr_51669;
})();
var statearr_51670_53411 = state_51658__$1;
(statearr_51670_53411[(2)] = null);

(statearr_51670_53411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (3))){
var inst_51656 = (state_51658[(2)]);
var state_51658__$1 = state_51658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51658__$1,inst_51656);
} else {
if((state_val_51659 === (12))){
var _ = (function (){var statearr_51671 = state_51658;
(statearr_51671[(4)] = cljs.core.rest((state_51658[(4)])));

return statearr_51671;
})();
var state_51658__$1 = state_51658;
var ex51668 = (state_51658__$1[(2)]);
var statearr_51672_53432 = state_51658__$1;
(statearr_51672_53432[(5)] = ex51668);


if((ex51668 instanceof Object)){
var statearr_51673_53441 = state_51658__$1;
(statearr_51673_53441[(1)] = (11));

(statearr_51673_53441[(5)] = null);

} else {
throw ex51668;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (2))){
var inst_51617 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51618 = cnt;
var inst_51619 = (0);
var state_51658__$1 = (function (){var statearr_51674 = state_51658;
(statearr_51674[(7)] = inst_51618);

(statearr_51674[(8)] = inst_51619);

(statearr_51674[(11)] = inst_51617);

return statearr_51674;
})();
var statearr_51675_53445 = state_51658__$1;
(statearr_51675_53445[(2)] = null);

(statearr_51675_53445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (11))){
var inst_51623 = (state_51658[(2)]);
var inst_51624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51658__$1 = (function (){var statearr_51676 = state_51658;
(statearr_51676[(12)] = inst_51623);

return statearr_51676;
})();
var statearr_51677_53450 = state_51658__$1;
(statearr_51677_53450[(2)] = inst_51624);

(statearr_51677_53450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (9))){
var inst_51619 = (state_51658[(8)]);
var _ = (function (){var statearr_51678 = state_51658;
(statearr_51678[(4)] = cljs.core.cons((12),(state_51658[(4)])));

return statearr_51678;
})();
var inst_51630 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51619) : chs__$1.call(null,inst_51619));
var inst_51631 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51619) : done.call(null,inst_51619));
var inst_51632 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51630,inst_51631);
var ___$1 = (function (){var statearr_51679 = state_51658;
(statearr_51679[(4)] = cljs.core.rest((state_51658[(4)])));

return statearr_51679;
})();
var state_51658__$1 = state_51658;
var statearr_51680_53451 = state_51658__$1;
(statearr_51680_53451[(2)] = inst_51632);

(statearr_51680_53451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (5))){
var inst_51642 = (state_51658[(2)]);
var state_51658__$1 = (function (){var statearr_51681 = state_51658;
(statearr_51681[(13)] = inst_51642);

return statearr_51681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51658__$1,(13),dchan);
} else {
if((state_val_51659 === (14))){
var inst_51647 = cljs.core.async.close_BANG_(out);
var state_51658__$1 = state_51658;
var statearr_51682_53453 = state_51658__$1;
(statearr_51682_53453[(2)] = inst_51647);

(statearr_51682_53453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (16))){
var inst_51654 = (state_51658[(2)]);
var state_51658__$1 = state_51658;
var statearr_51683_53461 = state_51658__$1;
(statearr_51683_53461[(2)] = inst_51654);

(statearr_51683_53461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (10))){
var inst_51619 = (state_51658[(8)]);
var inst_51635 = (state_51658[(2)]);
var inst_51636 = (inst_51619 + (1));
var inst_51619__$1 = inst_51636;
var state_51658__$1 = (function (){var statearr_51684 = state_51658;
(statearr_51684[(8)] = inst_51619__$1);

(statearr_51684[(14)] = inst_51635);

return statearr_51684;
})();
var statearr_51685_53474 = state_51658__$1;
(statearr_51685_53474[(2)] = null);

(statearr_51685_53474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51659 === (8))){
var inst_51640 = (state_51658[(2)]);
var state_51658__$1 = state_51658;
var statearr_51686_53477 = state_51658__$1;
(statearr_51686_53477[(2)] = inst_51640);

(statearr_51686_53477[(1)] = (5));


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
});})(c__50615__auto___53386,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48679__auto__,c__50615__auto___53386,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_51687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51687[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_51687[(1)] = (1));

return statearr_51687;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51658){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51658);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51688){var ex__48683__auto__ = e51688;
var statearr_51689_53496 = state_51658;
(statearr_51689_53496[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51658[(4)]))){
var statearr_51690_53501 = state_51658;
(statearr_51690_53501[(1)] = cljs.core.first((state_51658[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53507 = state_51658;
state_51658 = G__53507;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___53386,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__50617__auto__ = (function (){var statearr_51691 = f__50616__auto__();
(statearr_51691[(6)] = c__50615__auto___53386);

return statearr_51691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___53386,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51694 = arguments.length;
switch (G__51694) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50615__auto___53531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___53531,out){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___53531,out){
return (function (state_51726){
var state_val_51727 = (state_51726[(1)]);
if((state_val_51727 === (7))){
var inst_51706 = (state_51726[(7)]);
var inst_51705 = (state_51726[(8)]);
var inst_51705__$1 = (state_51726[(2)]);
var inst_51706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51705__$1,(0),null);
var inst_51707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51705__$1,(1),null);
var inst_51708 = (inst_51706__$1 == null);
var state_51726__$1 = (function (){var statearr_51728 = state_51726;
(statearr_51728[(7)] = inst_51706__$1);

(statearr_51728[(8)] = inst_51705__$1);

(statearr_51728[(9)] = inst_51707);

return statearr_51728;
})();
if(cljs.core.truth_(inst_51708)){
var statearr_51729_53547 = state_51726__$1;
(statearr_51729_53547[(1)] = (8));

} else {
var statearr_51730_53549 = state_51726__$1;
(statearr_51730_53549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (1))){
var inst_51695 = cljs.core.vec(chs);
var inst_51696 = inst_51695;
var state_51726__$1 = (function (){var statearr_51731 = state_51726;
(statearr_51731[(10)] = inst_51696);

return statearr_51731;
})();
var statearr_51732_53555 = state_51726__$1;
(statearr_51732_53555[(2)] = null);

(statearr_51732_53555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (4))){
var inst_51696 = (state_51726[(10)]);
var state_51726__$1 = state_51726;
return cljs.core.async.ioc_alts_BANG_(state_51726__$1,(7),inst_51696);
} else {
if((state_val_51727 === (6))){
var inst_51722 = (state_51726[(2)]);
var state_51726__$1 = state_51726;
var statearr_51733_53565 = state_51726__$1;
(statearr_51733_53565[(2)] = inst_51722);

(statearr_51733_53565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (3))){
var inst_51724 = (state_51726[(2)]);
var state_51726__$1 = state_51726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51726__$1,inst_51724);
} else {
if((state_val_51727 === (2))){
var inst_51696 = (state_51726[(10)]);
var inst_51698 = cljs.core.count(inst_51696);
var inst_51699 = (inst_51698 > (0));
var state_51726__$1 = state_51726;
if(cljs.core.truth_(inst_51699)){
var statearr_51735_53581 = state_51726__$1;
(statearr_51735_53581[(1)] = (4));

} else {
var statearr_51736_53582 = state_51726__$1;
(statearr_51736_53582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (11))){
var inst_51696 = (state_51726[(10)]);
var inst_51715 = (state_51726[(2)]);
var tmp51734 = inst_51696;
var inst_51696__$1 = tmp51734;
var state_51726__$1 = (function (){var statearr_51737 = state_51726;
(statearr_51737[(10)] = inst_51696__$1);

(statearr_51737[(11)] = inst_51715);

return statearr_51737;
})();
var statearr_51738_53589 = state_51726__$1;
(statearr_51738_53589[(2)] = null);

(statearr_51738_53589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (9))){
var inst_51706 = (state_51726[(7)]);
var state_51726__$1 = state_51726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51726__$1,(11),out,inst_51706);
} else {
if((state_val_51727 === (5))){
var inst_51720 = cljs.core.async.close_BANG_(out);
var state_51726__$1 = state_51726;
var statearr_51739_53603 = state_51726__$1;
(statearr_51739_53603[(2)] = inst_51720);

(statearr_51739_53603[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (10))){
var inst_51718 = (state_51726[(2)]);
var state_51726__$1 = state_51726;
var statearr_51740_53609 = state_51726__$1;
(statearr_51740_53609[(2)] = inst_51718);

(statearr_51740_53609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51727 === (8))){
var inst_51696 = (state_51726[(10)]);
var inst_51706 = (state_51726[(7)]);
var inst_51705 = (state_51726[(8)]);
var inst_51707 = (state_51726[(9)]);
var inst_51710 = (function (){var cs = inst_51696;
var vec__51701 = inst_51705;
var v = inst_51706;
var c = inst_51707;
return ((function (cs,vec__51701,v,c,inst_51696,inst_51706,inst_51705,inst_51707,state_val_51727,c__50615__auto___53531,out){
return (function (p1__51692_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51692_SHARP_);
});
;})(cs,vec__51701,v,c,inst_51696,inst_51706,inst_51705,inst_51707,state_val_51727,c__50615__auto___53531,out))
})();
var inst_51711 = cljs.core.filterv(inst_51710,inst_51696);
var inst_51696__$1 = inst_51711;
var state_51726__$1 = (function (){var statearr_51741 = state_51726;
(statearr_51741[(10)] = inst_51696__$1);

return statearr_51741;
})();
var statearr_51742_53629 = state_51726__$1;
(statearr_51742_53629[(2)] = null);

(statearr_51742_53629[(1)] = (2));


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
});})(c__50615__auto___53531,out))
;
return ((function (switch__48679__auto__,c__50615__auto___53531,out){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_51743 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51743[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_51743[(1)] = (1));

return statearr_51743;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51726){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51726);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51744){var ex__48683__auto__ = e51744;
var statearr_51745_53647 = state_51726;
(statearr_51745_53647[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51726[(4)]))){
var statearr_51746_53651 = state_51726;
(statearr_51746_53651[(1)] = cljs.core.first((state_51726[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53659 = state_51726;
state_51726 = G__53659;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___53531,out))
})();
var state__50617__auto__ = (function (){var statearr_51747 = f__50616__auto__();
(statearr_51747[(6)] = c__50615__auto___53531);

return statearr_51747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___53531,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51749 = arguments.length;
switch (G__51749) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50615__auto___53689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___53689,out){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___53689,out){
return (function (state_51773){
var state_val_51774 = (state_51773[(1)]);
if((state_val_51774 === (7))){
var inst_51755 = (state_51773[(7)]);
var inst_51755__$1 = (state_51773[(2)]);
var inst_51756 = (inst_51755__$1 == null);
var inst_51757 = cljs.core.not(inst_51756);
var state_51773__$1 = (function (){var statearr_51775 = state_51773;
(statearr_51775[(7)] = inst_51755__$1);

return statearr_51775;
})();
if(inst_51757){
var statearr_51776_53701 = state_51773__$1;
(statearr_51776_53701[(1)] = (8));

} else {
var statearr_51777_53702 = state_51773__$1;
(statearr_51777_53702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (1))){
var inst_51750 = (0);
var state_51773__$1 = (function (){var statearr_51778 = state_51773;
(statearr_51778[(8)] = inst_51750);

return statearr_51778;
})();
var statearr_51779_53703 = state_51773__$1;
(statearr_51779_53703[(2)] = null);

(statearr_51779_53703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (4))){
var state_51773__$1 = state_51773;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51773__$1,(7),ch);
} else {
if((state_val_51774 === (6))){
var inst_51768 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
var statearr_51780_53704 = state_51773__$1;
(statearr_51780_53704[(2)] = inst_51768);

(statearr_51780_53704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (3))){
var inst_51770 = (state_51773[(2)]);
var inst_51771 = cljs.core.async.close_BANG_(out);
var state_51773__$1 = (function (){var statearr_51781 = state_51773;
(statearr_51781[(9)] = inst_51770);

return statearr_51781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51773__$1,inst_51771);
} else {
if((state_val_51774 === (2))){
var inst_51750 = (state_51773[(8)]);
var inst_51752 = (inst_51750 < n);
var state_51773__$1 = state_51773;
if(cljs.core.truth_(inst_51752)){
var statearr_51782_53711 = state_51773__$1;
(statearr_51782_53711[(1)] = (4));

} else {
var statearr_51783_53712 = state_51773__$1;
(statearr_51783_53712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (11))){
var inst_51750 = (state_51773[(8)]);
var inst_51760 = (state_51773[(2)]);
var inst_51761 = (inst_51750 + (1));
var inst_51750__$1 = inst_51761;
var state_51773__$1 = (function (){var statearr_51784 = state_51773;
(statearr_51784[(8)] = inst_51750__$1);

(statearr_51784[(10)] = inst_51760);

return statearr_51784;
})();
var statearr_51785_53713 = state_51773__$1;
(statearr_51785_53713[(2)] = null);

(statearr_51785_53713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (9))){
var state_51773__$1 = state_51773;
var statearr_51786_53714 = state_51773__$1;
(statearr_51786_53714[(2)] = null);

(statearr_51786_53714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (5))){
var state_51773__$1 = state_51773;
var statearr_51787_53715 = state_51773__$1;
(statearr_51787_53715[(2)] = null);

(statearr_51787_53715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (10))){
var inst_51765 = (state_51773[(2)]);
var state_51773__$1 = state_51773;
var statearr_51788_53718 = state_51773__$1;
(statearr_51788_53718[(2)] = inst_51765);

(statearr_51788_53718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51774 === (8))){
var inst_51755 = (state_51773[(7)]);
var state_51773__$1 = state_51773;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51773__$1,(11),out,inst_51755);
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
});})(c__50615__auto___53689,out))
;
return ((function (switch__48679__auto__,c__50615__auto___53689,out){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_51789 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51789[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_51789[(1)] = (1));

return statearr_51789;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51773){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51773);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51790){var ex__48683__auto__ = e51790;
var statearr_51791_53721 = state_51773;
(statearr_51791_53721[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51773[(4)]))){
var statearr_51792_53722 = state_51773;
(statearr_51792_53722[(1)] = cljs.core.first((state_51773[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53734 = state_51773;
state_51773 = G__53734;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___53689,out))
})();
var state__50617__auto__ = (function (){var statearr_51793 = f__50616__auto__();
(statearr_51793[(6)] = c__50615__auto___53689);

return statearr_51793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___53689,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51795 = (function (f,ch,meta51796){
this.f = f;
this.ch = ch;
this.meta51796 = meta51796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51797,meta51796__$1){
var self__ = this;
var _51797__$1 = this;
return (new cljs.core.async.t_cljs$core$async51795(self__.f,self__.ch,meta51796__$1));
});

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51797){
var self__ = this;
var _51797__$1 = this;
return self__.meta51796;
});

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51798 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51798 = (function (f,ch,meta51796,_,fn1,meta51799){
this.f = f;
this.ch = ch;
this.meta51796 = meta51796;
this._ = _;
this.fn1 = fn1;
this.meta51799 = meta51799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51800,meta51799__$1){
var self__ = this;
var _51800__$1 = this;
return (new cljs.core.async.t_cljs$core$async51798(self__.f,self__.ch,self__.meta51796,self__._,self__.fn1,meta51799__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51800){
var self__ = this;
var _51800__$1 = this;
return self__.meta51799;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__51794_SHARP_){
var G__51801 = (((p1__51794_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51794_SHARP_) : self__.f.call(null,p1__51794_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51801) : f1.call(null,G__51801));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async51798.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51796","meta51796",1667926570,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51795","cljs.core.async/t_cljs$core$async51795",402213408,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51799","meta51799",-1848465443,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51798";

cljs.core.async.t_cljs$core$async51798.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51798");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51798.
 */
cljs.core.async.__GT_t_cljs$core$async51798 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51798(f__$1,ch__$1,meta51796__$1,___$2,fn1__$1,meta51799){
return (new cljs.core.async.t_cljs$core$async51798(f__$1,ch__$1,meta51796__$1,___$2,fn1__$1,meta51799));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async51798(self__.f,self__.ch,self__.meta51796,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51802 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51802) : self__.f.call(null,G__51802));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async51795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51796","meta51796",1667926570,null)], null);
});

cljs.core.async.t_cljs$core$async51795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51795";

cljs.core.async.t_cljs$core$async51795.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51795");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51795.
 */
cljs.core.async.__GT_t_cljs$core$async51795 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51795(f__$1,ch__$1,meta51796){
return (new cljs.core.async.t_cljs$core$async51795(f__$1,ch__$1,meta51796));
});

}

return (new cljs.core.async.t_cljs$core$async51795(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51803 = (function (f,ch,meta51804){
this.f = f;
this.ch = ch;
this.meta51804 = meta51804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51805,meta51804__$1){
var self__ = this;
var _51805__$1 = this;
return (new cljs.core.async.t_cljs$core$async51803(self__.f,self__.ch,meta51804__$1));
});

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51805){
var self__ = this;
var _51805__$1 = this;
return self__.meta51804;
});

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async51803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51804","meta51804",1908255087,null)], null);
});

cljs.core.async.t_cljs$core$async51803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51803";

cljs.core.async.t_cljs$core$async51803.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51803");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51803.
 */
cljs.core.async.__GT_t_cljs$core$async51803 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51803(f__$1,ch__$1,meta51804){
return (new cljs.core.async.t_cljs$core$async51803(f__$1,ch__$1,meta51804));
});

}

return (new cljs.core.async.t_cljs$core$async51803(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51806 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51806 = (function (p,ch,meta51807){
this.p = p;
this.ch = ch;
this.meta51807 = meta51807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51808,meta51807__$1){
var self__ = this;
var _51808__$1 = this;
return (new cljs.core.async.t_cljs$core$async51806(self__.p,self__.ch,meta51807__$1));
});

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51808){
var self__ = this;
var _51808__$1 = this;
return self__.meta51807;
});

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51806.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async51806.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51807","meta51807",-77587775,null)], null);
});

cljs.core.async.t_cljs$core$async51806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51806";

cljs.core.async.t_cljs$core$async51806.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51806");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51806.
 */
cljs.core.async.__GT_t_cljs$core$async51806 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51806(p__$1,ch__$1,meta51807){
return (new cljs.core.async.t_cljs$core$async51806(p__$1,ch__$1,meta51807));
});

}

return (new cljs.core.async.t_cljs$core$async51806(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51810 = arguments.length;
switch (G__51810) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50615__auto___53784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___53784,out){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___53784,out){
return (function (state_51831){
var state_val_51832 = (state_51831[(1)]);
if((state_val_51832 === (7))){
var inst_51827 = (state_51831[(2)]);
var state_51831__$1 = state_51831;
var statearr_51833_53785 = state_51831__$1;
(statearr_51833_53785[(2)] = inst_51827);

(statearr_51833_53785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (1))){
var state_51831__$1 = state_51831;
var statearr_51834_53786 = state_51831__$1;
(statearr_51834_53786[(2)] = null);

(statearr_51834_53786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (4))){
var inst_51813 = (state_51831[(7)]);
var inst_51813__$1 = (state_51831[(2)]);
var inst_51814 = (inst_51813__$1 == null);
var state_51831__$1 = (function (){var statearr_51835 = state_51831;
(statearr_51835[(7)] = inst_51813__$1);

return statearr_51835;
})();
if(cljs.core.truth_(inst_51814)){
var statearr_51836_53794 = state_51831__$1;
(statearr_51836_53794[(1)] = (5));

} else {
var statearr_51837_53795 = state_51831__$1;
(statearr_51837_53795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (6))){
var inst_51813 = (state_51831[(7)]);
var inst_51818 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51813) : p.call(null,inst_51813));
var state_51831__$1 = state_51831;
if(cljs.core.truth_(inst_51818)){
var statearr_51838_53796 = state_51831__$1;
(statearr_51838_53796[(1)] = (8));

} else {
var statearr_51839_53798 = state_51831__$1;
(statearr_51839_53798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (3))){
var inst_51829 = (state_51831[(2)]);
var state_51831__$1 = state_51831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51831__$1,inst_51829);
} else {
if((state_val_51832 === (2))){
var state_51831__$1 = state_51831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51831__$1,(4),ch);
} else {
if((state_val_51832 === (11))){
var inst_51821 = (state_51831[(2)]);
var state_51831__$1 = state_51831;
var statearr_51840_53804 = state_51831__$1;
(statearr_51840_53804[(2)] = inst_51821);

(statearr_51840_53804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (9))){
var state_51831__$1 = state_51831;
var statearr_51841_53808 = state_51831__$1;
(statearr_51841_53808[(2)] = null);

(statearr_51841_53808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (5))){
var inst_51816 = cljs.core.async.close_BANG_(out);
var state_51831__$1 = state_51831;
var statearr_51842_53810 = state_51831__$1;
(statearr_51842_53810[(2)] = inst_51816);

(statearr_51842_53810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (10))){
var inst_51824 = (state_51831[(2)]);
var state_51831__$1 = (function (){var statearr_51843 = state_51831;
(statearr_51843[(8)] = inst_51824);

return statearr_51843;
})();
var statearr_51844_53814 = state_51831__$1;
(statearr_51844_53814[(2)] = null);

(statearr_51844_53814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (8))){
var inst_51813 = (state_51831[(7)]);
var state_51831__$1 = state_51831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51831__$1,(11),out,inst_51813);
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
});})(c__50615__auto___53784,out))
;
return ((function (switch__48679__auto__,c__50615__auto___53784,out){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_51845 = [null,null,null,null,null,null,null,null,null];
(statearr_51845[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_51845[(1)] = (1));

return statearr_51845;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51831){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51831);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51846){var ex__48683__auto__ = e51846;
var statearr_51847_53820 = state_51831;
(statearr_51847_53820[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51831[(4)]))){
var statearr_51848_53821 = state_51831;
(statearr_51848_53821[(1)] = cljs.core.first((state_51831[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53823 = state_51831;
state_51831 = G__53823;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___53784,out))
})();
var state__50617__auto__ = (function (){var statearr_51849 = f__50616__auto__();
(statearr_51849[(6)] = c__50615__auto___53784);

return statearr_51849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___53784,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51851 = arguments.length;
switch (G__51851) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50615__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto__){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto__){
return (function (state_51913){
var state_val_51914 = (state_51913[(1)]);
if((state_val_51914 === (7))){
var inst_51909 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51915_53831 = state_51913__$1;
(statearr_51915_53831[(2)] = inst_51909);

(statearr_51915_53831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (20))){
var inst_51879 = (state_51913[(7)]);
var inst_51890 = (state_51913[(2)]);
var inst_51891 = cljs.core.next(inst_51879);
var inst_51865 = inst_51891;
var inst_51866 = null;
var inst_51867 = (0);
var inst_51868 = (0);
var state_51913__$1 = (function (){var statearr_51916 = state_51913;
(statearr_51916[(8)] = inst_51868);

(statearr_51916[(9)] = inst_51867);

(statearr_51916[(10)] = inst_51865);

(statearr_51916[(11)] = inst_51890);

(statearr_51916[(12)] = inst_51866);

return statearr_51916;
})();
var statearr_51917_53833 = state_51913__$1;
(statearr_51917_53833[(2)] = null);

(statearr_51917_53833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (1))){
var state_51913__$1 = state_51913;
var statearr_51918_53834 = state_51913__$1;
(statearr_51918_53834[(2)] = null);

(statearr_51918_53834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (4))){
var inst_51854 = (state_51913[(13)]);
var inst_51854__$1 = (state_51913[(2)]);
var inst_51855 = (inst_51854__$1 == null);
var state_51913__$1 = (function (){var statearr_51919 = state_51913;
(statearr_51919[(13)] = inst_51854__$1);

return statearr_51919;
})();
if(cljs.core.truth_(inst_51855)){
var statearr_51920_53837 = state_51913__$1;
(statearr_51920_53837[(1)] = (5));

} else {
var statearr_51921_53838 = state_51913__$1;
(statearr_51921_53838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (15))){
var state_51913__$1 = state_51913;
var statearr_51925_53839 = state_51913__$1;
(statearr_51925_53839[(2)] = null);

(statearr_51925_53839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (21))){
var state_51913__$1 = state_51913;
var statearr_51926_53840 = state_51913__$1;
(statearr_51926_53840[(2)] = null);

(statearr_51926_53840[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (13))){
var inst_51868 = (state_51913[(8)]);
var inst_51867 = (state_51913[(9)]);
var inst_51865 = (state_51913[(10)]);
var inst_51866 = (state_51913[(12)]);
var inst_51875 = (state_51913[(2)]);
var inst_51876 = (inst_51868 + (1));
var tmp51922 = inst_51867;
var tmp51923 = inst_51865;
var tmp51924 = inst_51866;
var inst_51865__$1 = tmp51923;
var inst_51866__$1 = tmp51924;
var inst_51867__$1 = tmp51922;
var inst_51868__$1 = inst_51876;
var state_51913__$1 = (function (){var statearr_51927 = state_51913;
(statearr_51927[(8)] = inst_51868__$1);

(statearr_51927[(9)] = inst_51867__$1);

(statearr_51927[(14)] = inst_51875);

(statearr_51927[(10)] = inst_51865__$1);

(statearr_51927[(12)] = inst_51866__$1);

return statearr_51927;
})();
var statearr_51928_53845 = state_51913__$1;
(statearr_51928_53845[(2)] = null);

(statearr_51928_53845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (22))){
var state_51913__$1 = state_51913;
var statearr_51929_53848 = state_51913__$1;
(statearr_51929_53848[(2)] = null);

(statearr_51929_53848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (6))){
var inst_51854 = (state_51913[(13)]);
var inst_51863 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51854) : f.call(null,inst_51854));
var inst_51864 = cljs.core.seq(inst_51863);
var inst_51865 = inst_51864;
var inst_51866 = null;
var inst_51867 = (0);
var inst_51868 = (0);
var state_51913__$1 = (function (){var statearr_51930 = state_51913;
(statearr_51930[(8)] = inst_51868);

(statearr_51930[(9)] = inst_51867);

(statearr_51930[(10)] = inst_51865);

(statearr_51930[(12)] = inst_51866);

return statearr_51930;
})();
var statearr_51931_53852 = state_51913__$1;
(statearr_51931_53852[(2)] = null);

(statearr_51931_53852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (17))){
var inst_51879 = (state_51913[(7)]);
var inst_51883 = cljs.core.chunk_first(inst_51879);
var inst_51884 = cljs.core.chunk_rest(inst_51879);
var inst_51885 = cljs.core.count(inst_51883);
var inst_51865 = inst_51884;
var inst_51866 = inst_51883;
var inst_51867 = inst_51885;
var inst_51868 = (0);
var state_51913__$1 = (function (){var statearr_51932 = state_51913;
(statearr_51932[(8)] = inst_51868);

(statearr_51932[(9)] = inst_51867);

(statearr_51932[(10)] = inst_51865);

(statearr_51932[(12)] = inst_51866);

return statearr_51932;
})();
var statearr_51933_53854 = state_51913__$1;
(statearr_51933_53854[(2)] = null);

(statearr_51933_53854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (3))){
var inst_51911 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51913__$1,inst_51911);
} else {
if((state_val_51914 === (12))){
var inst_51899 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51934_53856 = state_51913__$1;
(statearr_51934_53856[(2)] = inst_51899);

(statearr_51934_53856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (2))){
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51913__$1,(4),in$);
} else {
if((state_val_51914 === (23))){
var inst_51907 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51935_53861 = state_51913__$1;
(statearr_51935_53861[(2)] = inst_51907);

(statearr_51935_53861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (19))){
var inst_51894 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51936_53866 = state_51913__$1;
(statearr_51936_53866[(2)] = inst_51894);

(statearr_51936_53866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (11))){
var inst_51865 = (state_51913[(10)]);
var inst_51879 = (state_51913[(7)]);
var inst_51879__$1 = cljs.core.seq(inst_51865);
var state_51913__$1 = (function (){var statearr_51937 = state_51913;
(statearr_51937[(7)] = inst_51879__$1);

return statearr_51937;
})();
if(inst_51879__$1){
var statearr_51938_53872 = state_51913__$1;
(statearr_51938_53872[(1)] = (14));

} else {
var statearr_51939_53874 = state_51913__$1;
(statearr_51939_53874[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (9))){
var inst_51901 = (state_51913[(2)]);
var inst_51902 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51913__$1 = (function (){var statearr_51940 = state_51913;
(statearr_51940[(15)] = inst_51901);

return statearr_51940;
})();
if(cljs.core.truth_(inst_51902)){
var statearr_51941_53882 = state_51913__$1;
(statearr_51941_53882[(1)] = (21));

} else {
var statearr_51942_53883 = state_51913__$1;
(statearr_51942_53883[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (5))){
var inst_51857 = cljs.core.async.close_BANG_(out);
var state_51913__$1 = state_51913;
var statearr_51943_53885 = state_51913__$1;
(statearr_51943_53885[(2)] = inst_51857);

(statearr_51943_53885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (14))){
var inst_51879 = (state_51913[(7)]);
var inst_51881 = cljs.core.chunked_seq_QMARK_(inst_51879);
var state_51913__$1 = state_51913;
if(inst_51881){
var statearr_51944_53886 = state_51913__$1;
(statearr_51944_53886[(1)] = (17));

} else {
var statearr_51945_53887 = state_51913__$1;
(statearr_51945_53887[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (16))){
var inst_51897 = (state_51913[(2)]);
var state_51913__$1 = state_51913;
var statearr_51946_53889 = state_51913__$1;
(statearr_51946_53889[(2)] = inst_51897);

(statearr_51946_53889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51914 === (10))){
var inst_51868 = (state_51913[(8)]);
var inst_51866 = (state_51913[(12)]);
var inst_51873 = cljs.core._nth(inst_51866,inst_51868);
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51913__$1,(13),out,inst_51873);
} else {
if((state_val_51914 === (18))){
var inst_51879 = (state_51913[(7)]);
var inst_51888 = cljs.core.first(inst_51879);
var state_51913__$1 = state_51913;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51913__$1,(20),out,inst_51888);
} else {
if((state_val_51914 === (8))){
var inst_51868 = (state_51913[(8)]);
var inst_51867 = (state_51913[(9)]);
var inst_51870 = (inst_51868 < inst_51867);
var inst_51871 = inst_51870;
var state_51913__$1 = state_51913;
if(cljs.core.truth_(inst_51871)){
var statearr_51947_53894 = state_51913__$1;
(statearr_51947_53894[(1)] = (10));

} else {
var statearr_51948_53895 = state_51913__$1;
(statearr_51948_53895[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__50615__auto__))
;
return ((function (switch__48679__auto__,c__50615__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48680__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48680__auto____0 = (function (){
var statearr_51949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51949[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48680__auto__);

(statearr_51949[(1)] = (1));

return statearr_51949;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48680__auto____1 = (function (state_51913){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51913);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e51950){var ex__48683__auto__ = e51950;
var statearr_51951_53904 = state_51913;
(statearr_51951_53904[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51913[(4)]))){
var statearr_51952_53906 = state_51913;
(statearr_51952_53906[(1)] = cljs.core.first((state_51913[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53909 = state_51913;
state_51913 = G__53909;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48680__auto__ = function(state_51913){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48680__auto____1.call(this,state_51913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48680__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48680__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto__))
})();
var state__50617__auto__ = (function (){var statearr_51953 = f__50616__auto__();
(statearr_51953[(6)] = c__50615__auto__);

return statearr_51953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto__))
);

return c__50615__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51955 = arguments.length;
switch (G__51955) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__51957 = arguments.length;
switch (G__51957) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__51959 = arguments.length;
switch (G__51959) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50615__auto___53932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___53932,out){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___53932,out){
return (function (state_51983){
var state_val_51984 = (state_51983[(1)]);
if((state_val_51984 === (7))){
var inst_51978 = (state_51983[(2)]);
var state_51983__$1 = state_51983;
var statearr_51985_53941 = state_51983__$1;
(statearr_51985_53941[(2)] = inst_51978);

(statearr_51985_53941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (1))){
var inst_51960 = null;
var state_51983__$1 = (function (){var statearr_51986 = state_51983;
(statearr_51986[(7)] = inst_51960);

return statearr_51986;
})();
var statearr_51987_53945 = state_51983__$1;
(statearr_51987_53945[(2)] = null);

(statearr_51987_53945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (4))){
var inst_51963 = (state_51983[(8)]);
var inst_51963__$1 = (state_51983[(2)]);
var inst_51964 = (inst_51963__$1 == null);
var inst_51965 = cljs.core.not(inst_51964);
var state_51983__$1 = (function (){var statearr_51988 = state_51983;
(statearr_51988[(8)] = inst_51963__$1);

return statearr_51988;
})();
if(inst_51965){
var statearr_51989_53949 = state_51983__$1;
(statearr_51989_53949[(1)] = (5));

} else {
var statearr_51990_53951 = state_51983__$1;
(statearr_51990_53951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (6))){
var state_51983__$1 = state_51983;
var statearr_51991_53954 = state_51983__$1;
(statearr_51991_53954[(2)] = null);

(statearr_51991_53954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (3))){
var inst_51980 = (state_51983[(2)]);
var inst_51981 = cljs.core.async.close_BANG_(out);
var state_51983__$1 = (function (){var statearr_51992 = state_51983;
(statearr_51992[(9)] = inst_51980);

return statearr_51992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51983__$1,inst_51981);
} else {
if((state_val_51984 === (2))){
var state_51983__$1 = state_51983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51983__$1,(4),ch);
} else {
if((state_val_51984 === (11))){
var inst_51963 = (state_51983[(8)]);
var inst_51972 = (state_51983[(2)]);
var inst_51960 = inst_51963;
var state_51983__$1 = (function (){var statearr_51993 = state_51983;
(statearr_51993[(7)] = inst_51960);

(statearr_51993[(10)] = inst_51972);

return statearr_51993;
})();
var statearr_51994_53957 = state_51983__$1;
(statearr_51994_53957[(2)] = null);

(statearr_51994_53957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (9))){
var inst_51963 = (state_51983[(8)]);
var state_51983__$1 = state_51983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51983__$1,(11),out,inst_51963);
} else {
if((state_val_51984 === (5))){
var inst_51960 = (state_51983[(7)]);
var inst_51963 = (state_51983[(8)]);
var inst_51967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51963,inst_51960);
var state_51983__$1 = state_51983;
if(inst_51967){
var statearr_51996_53971 = state_51983__$1;
(statearr_51996_53971[(1)] = (8));

} else {
var statearr_51997_53972 = state_51983__$1;
(statearr_51997_53972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (10))){
var inst_51975 = (state_51983[(2)]);
var state_51983__$1 = state_51983;
var statearr_51998_53977 = state_51983__$1;
(statearr_51998_53977[(2)] = inst_51975);

(statearr_51998_53977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51984 === (8))){
var inst_51960 = (state_51983[(7)]);
var tmp51995 = inst_51960;
var inst_51960__$1 = tmp51995;
var state_51983__$1 = (function (){var statearr_51999 = state_51983;
(statearr_51999[(7)] = inst_51960__$1);

return statearr_51999;
})();
var statearr_52000_53980 = state_51983__$1;
(statearr_52000_53980[(2)] = null);

(statearr_52000_53980[(1)] = (2));


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
});})(c__50615__auto___53932,out))
;
return ((function (switch__48679__auto__,c__50615__auto___53932,out){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_52001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52001[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_52001[(1)] = (1));

return statearr_52001;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_51983){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_51983);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e52002){var ex__48683__auto__ = e52002;
var statearr_52003_53988 = state_51983;
(statearr_52003_53988[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_51983[(4)]))){
var statearr_52004_53993 = state_51983;
(statearr_52004_53993[(1)] = cljs.core.first((state_51983[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53994 = state_51983;
state_51983 = G__53994;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_51983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_51983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___53932,out))
})();
var state__50617__auto__ = (function (){var statearr_52005 = f__50616__auto__();
(statearr_52005[(6)] = c__50615__auto___53932);

return statearr_52005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___53932,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52007 = arguments.length;
switch (G__52007) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50615__auto___54008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___54008,out){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___54008,out){
return (function (state_52045){
var state_val_52046 = (state_52045[(1)]);
if((state_val_52046 === (7))){
var inst_52041 = (state_52045[(2)]);
var state_52045__$1 = state_52045;
var statearr_52047_54010 = state_52045__$1;
(statearr_52047_54010[(2)] = inst_52041);

(statearr_52047_54010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (1))){
var inst_52008 = (new Array(n));
var inst_52009 = inst_52008;
var inst_52010 = (0);
var state_52045__$1 = (function (){var statearr_52048 = state_52045;
(statearr_52048[(7)] = inst_52010);

(statearr_52048[(8)] = inst_52009);

return statearr_52048;
})();
var statearr_52049_54015 = state_52045__$1;
(statearr_52049_54015[(2)] = null);

(statearr_52049_54015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (4))){
var inst_52013 = (state_52045[(9)]);
var inst_52013__$1 = (state_52045[(2)]);
var inst_52014 = (inst_52013__$1 == null);
var inst_52015 = cljs.core.not(inst_52014);
var state_52045__$1 = (function (){var statearr_52050 = state_52045;
(statearr_52050[(9)] = inst_52013__$1);

return statearr_52050;
})();
if(inst_52015){
var statearr_52051_54016 = state_52045__$1;
(statearr_52051_54016[(1)] = (5));

} else {
var statearr_52052_54018 = state_52045__$1;
(statearr_52052_54018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (15))){
var inst_52035 = (state_52045[(2)]);
var state_52045__$1 = state_52045;
var statearr_52053_54019 = state_52045__$1;
(statearr_52053_54019[(2)] = inst_52035);

(statearr_52053_54019[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (13))){
var state_52045__$1 = state_52045;
var statearr_52054_54020 = state_52045__$1;
(statearr_52054_54020[(2)] = null);

(statearr_52054_54020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (6))){
var inst_52010 = (state_52045[(7)]);
var inst_52031 = (inst_52010 > (0));
var state_52045__$1 = state_52045;
if(cljs.core.truth_(inst_52031)){
var statearr_52055_54021 = state_52045__$1;
(statearr_52055_54021[(1)] = (12));

} else {
var statearr_52056_54022 = state_52045__$1;
(statearr_52056_54022[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (3))){
var inst_52043 = (state_52045[(2)]);
var state_52045__$1 = state_52045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52045__$1,inst_52043);
} else {
if((state_val_52046 === (12))){
var inst_52009 = (state_52045[(8)]);
var inst_52033 = cljs.core.vec(inst_52009);
var state_52045__$1 = state_52045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52045__$1,(15),out,inst_52033);
} else {
if((state_val_52046 === (2))){
var state_52045__$1 = state_52045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52045__$1,(4),ch);
} else {
if((state_val_52046 === (11))){
var inst_52025 = (state_52045[(2)]);
var inst_52026 = (new Array(n));
var inst_52009 = inst_52026;
var inst_52010 = (0);
var state_52045__$1 = (function (){var statearr_52057 = state_52045;
(statearr_52057[(7)] = inst_52010);

(statearr_52057[(10)] = inst_52025);

(statearr_52057[(8)] = inst_52009);

return statearr_52057;
})();
var statearr_52058_54025 = state_52045__$1;
(statearr_52058_54025[(2)] = null);

(statearr_52058_54025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (9))){
var inst_52009 = (state_52045[(8)]);
var inst_52023 = cljs.core.vec(inst_52009);
var state_52045__$1 = state_52045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52045__$1,(11),out,inst_52023);
} else {
if((state_val_52046 === (5))){
var inst_52013 = (state_52045[(9)]);
var inst_52010 = (state_52045[(7)]);
var inst_52018 = (state_52045[(11)]);
var inst_52009 = (state_52045[(8)]);
var inst_52017 = (inst_52009[inst_52010] = inst_52013);
var inst_52018__$1 = (inst_52010 + (1));
var inst_52019 = (inst_52018__$1 < n);
var state_52045__$1 = (function (){var statearr_52059 = state_52045;
(statearr_52059[(12)] = inst_52017);

(statearr_52059[(11)] = inst_52018__$1);

return statearr_52059;
})();
if(cljs.core.truth_(inst_52019)){
var statearr_52060_54029 = state_52045__$1;
(statearr_52060_54029[(1)] = (8));

} else {
var statearr_52061_54030 = state_52045__$1;
(statearr_52061_54030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (14))){
var inst_52038 = (state_52045[(2)]);
var inst_52039 = cljs.core.async.close_BANG_(out);
var state_52045__$1 = (function (){var statearr_52063 = state_52045;
(statearr_52063[(13)] = inst_52038);

return statearr_52063;
})();
var statearr_52064_54033 = state_52045__$1;
(statearr_52064_54033[(2)] = inst_52039);

(statearr_52064_54033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (10))){
var inst_52029 = (state_52045[(2)]);
var state_52045__$1 = state_52045;
var statearr_52065_54034 = state_52045__$1;
(statearr_52065_54034[(2)] = inst_52029);

(statearr_52065_54034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52046 === (8))){
var inst_52018 = (state_52045[(11)]);
var inst_52009 = (state_52045[(8)]);
var tmp52062 = inst_52009;
var inst_52009__$1 = tmp52062;
var inst_52010 = inst_52018;
var state_52045__$1 = (function (){var statearr_52066 = state_52045;
(statearr_52066[(7)] = inst_52010);

(statearr_52066[(8)] = inst_52009__$1);

return statearr_52066;
})();
var statearr_52067_54035 = state_52045__$1;
(statearr_52067_54035[(2)] = null);

(statearr_52067_54035[(1)] = (2));


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
});})(c__50615__auto___54008,out))
;
return ((function (switch__48679__auto__,c__50615__auto___54008,out){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_52068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52068[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_52068[(1)] = (1));

return statearr_52068;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_52045){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_52045);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e52069){var ex__48683__auto__ = e52069;
var statearr_52070_54038 = state_52045;
(statearr_52070_54038[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_52045[(4)]))){
var statearr_52071_54040 = state_52045;
(statearr_52071_54040[(1)] = cljs.core.first((state_52045[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54042 = state_52045;
state_52045 = G__54042;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_52045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_52045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___54008,out))
})();
var state__50617__auto__ = (function (){var statearr_52072 = f__50616__auto__();
(statearr_52072[(6)] = c__50615__auto___54008);

return statearr_52072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___54008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52074 = arguments.length;
switch (G__52074) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50615__auto___54061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___54061,out){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___54061,out){
return (function (state_52116){
var state_val_52117 = (state_52116[(1)]);
if((state_val_52117 === (7))){
var inst_52112 = (state_52116[(2)]);
var state_52116__$1 = state_52116;
var statearr_52118_54074 = state_52116__$1;
(statearr_52118_54074[(2)] = inst_52112);

(statearr_52118_54074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (1))){
var inst_52075 = [];
var inst_52076 = inst_52075;
var inst_52077 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52116__$1 = (function (){var statearr_52119 = state_52116;
(statearr_52119[(7)] = inst_52077);

(statearr_52119[(8)] = inst_52076);

return statearr_52119;
})();
var statearr_52120_54089 = state_52116__$1;
(statearr_52120_54089[(2)] = null);

(statearr_52120_54089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (4))){
var inst_52080 = (state_52116[(9)]);
var inst_52080__$1 = (state_52116[(2)]);
var inst_52081 = (inst_52080__$1 == null);
var inst_52082 = cljs.core.not(inst_52081);
var state_52116__$1 = (function (){var statearr_52121 = state_52116;
(statearr_52121[(9)] = inst_52080__$1);

return statearr_52121;
})();
if(inst_52082){
var statearr_52122_54110 = state_52116__$1;
(statearr_52122_54110[(1)] = (5));

} else {
var statearr_52123_54112 = state_52116__$1;
(statearr_52123_54112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (15))){
var inst_52106 = (state_52116[(2)]);
var state_52116__$1 = state_52116;
var statearr_52124_54120 = state_52116__$1;
(statearr_52124_54120[(2)] = inst_52106);

(statearr_52124_54120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (13))){
var state_52116__$1 = state_52116;
var statearr_52125_54126 = state_52116__$1;
(statearr_52125_54126[(2)] = null);

(statearr_52125_54126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (6))){
var inst_52076 = (state_52116[(8)]);
var inst_52101 = inst_52076.length;
var inst_52102 = (inst_52101 > (0));
var state_52116__$1 = state_52116;
if(cljs.core.truth_(inst_52102)){
var statearr_52126_54134 = state_52116__$1;
(statearr_52126_54134[(1)] = (12));

} else {
var statearr_52127_54135 = state_52116__$1;
(statearr_52127_54135[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (3))){
var inst_52114 = (state_52116[(2)]);
var state_52116__$1 = state_52116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52116__$1,inst_52114);
} else {
if((state_val_52117 === (12))){
var inst_52076 = (state_52116[(8)]);
var inst_52104 = cljs.core.vec(inst_52076);
var state_52116__$1 = state_52116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52116__$1,(15),out,inst_52104);
} else {
if((state_val_52117 === (2))){
var state_52116__$1 = state_52116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52116__$1,(4),ch);
} else {
if((state_val_52117 === (11))){
var inst_52084 = (state_52116[(10)]);
var inst_52080 = (state_52116[(9)]);
var inst_52094 = (state_52116[(2)]);
var inst_52095 = [];
var inst_52096 = inst_52095.push(inst_52080);
var inst_52076 = inst_52095;
var inst_52077 = inst_52084;
var state_52116__$1 = (function (){var statearr_52128 = state_52116;
(statearr_52128[(7)] = inst_52077);

(statearr_52128[(11)] = inst_52096);

(statearr_52128[(12)] = inst_52094);

(statearr_52128[(8)] = inst_52076);

return statearr_52128;
})();
var statearr_52129_54162 = state_52116__$1;
(statearr_52129_54162[(2)] = null);

(statearr_52129_54162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (9))){
var inst_52076 = (state_52116[(8)]);
var inst_52092 = cljs.core.vec(inst_52076);
var state_52116__$1 = state_52116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52116__$1,(11),out,inst_52092);
} else {
if((state_val_52117 === (5))){
var inst_52084 = (state_52116[(10)]);
var inst_52077 = (state_52116[(7)]);
var inst_52080 = (state_52116[(9)]);
var inst_52084__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52080) : f.call(null,inst_52080));
var inst_52085 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52084__$1,inst_52077);
var inst_52086 = cljs.core.keyword_identical_QMARK_(inst_52077,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52087 = ((inst_52085) || (inst_52086));
var state_52116__$1 = (function (){var statearr_52130 = state_52116;
(statearr_52130[(10)] = inst_52084__$1);

return statearr_52130;
})();
if(cljs.core.truth_(inst_52087)){
var statearr_52131_54172 = state_52116__$1;
(statearr_52131_54172[(1)] = (8));

} else {
var statearr_52132_54173 = state_52116__$1;
(statearr_52132_54173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (14))){
var inst_52109 = (state_52116[(2)]);
var inst_52110 = cljs.core.async.close_BANG_(out);
var state_52116__$1 = (function (){var statearr_52134 = state_52116;
(statearr_52134[(13)] = inst_52109);

return statearr_52134;
})();
var statearr_52135_54176 = state_52116__$1;
(statearr_52135_54176[(2)] = inst_52110);

(statearr_52135_54176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (10))){
var inst_52099 = (state_52116[(2)]);
var state_52116__$1 = state_52116;
var statearr_52136_54182 = state_52116__$1;
(statearr_52136_54182[(2)] = inst_52099);

(statearr_52136_54182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52117 === (8))){
var inst_52084 = (state_52116[(10)]);
var inst_52076 = (state_52116[(8)]);
var inst_52080 = (state_52116[(9)]);
var inst_52089 = inst_52076.push(inst_52080);
var tmp52133 = inst_52076;
var inst_52076__$1 = tmp52133;
var inst_52077 = inst_52084;
var state_52116__$1 = (function (){var statearr_52137 = state_52116;
(statearr_52137[(7)] = inst_52077);

(statearr_52137[(14)] = inst_52089);

(statearr_52137[(8)] = inst_52076__$1);

return statearr_52137;
})();
var statearr_52138_54202 = state_52116__$1;
(statearr_52138_54202[(2)] = null);

(statearr_52138_54202[(1)] = (2));


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
});})(c__50615__auto___54061,out))
;
return ((function (switch__48679__auto__,c__50615__auto___54061,out){
return (function() {
var cljs$core$async$state_machine__48680__auto__ = null;
var cljs$core$async$state_machine__48680__auto____0 = (function (){
var statearr_52139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52139[(0)] = cljs$core$async$state_machine__48680__auto__);

(statearr_52139[(1)] = (1));

return statearr_52139;
});
var cljs$core$async$state_machine__48680__auto____1 = (function (state_52116){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_52116);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e52140){var ex__48683__auto__ = e52140;
var statearr_52141_54217 = state_52116;
(statearr_52141_54217[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_52116[(4)]))){
var statearr_52142_54219 = state_52116;
(statearr_52142_54219[(1)] = cljs.core.first((state_52116[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54223 = state_52116;
state_52116 = G__54223;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
cljs$core$async$state_machine__48680__auto__ = function(state_52116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48680__auto____1.call(this,state_52116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48680__auto____0;
cljs$core$async$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48680__auto____1;
return cljs$core$async$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___54061,out))
})();
var state__50617__auto__ = (function (){var statearr_52143 = f__50616__auto__();
(statearr_52143[(6)] = c__50615__auto___54061);

return statearr_52143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___54061,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
