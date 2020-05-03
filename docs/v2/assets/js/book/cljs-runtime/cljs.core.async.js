goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45936 = arguments.length;
switch (G__45936) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45938 = (function (f,blockable,meta45939){
this.f = f;
this.blockable = blockable;
this.meta45939 = meta45939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45940,meta45939__$1){
var self__ = this;
var _45940__$1 = this;
return (new cljs.core.async.t_cljs$core$async45938(self__.f,self__.blockable,meta45939__$1));
});

cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45940){
var self__ = this;
var _45940__$1 = this;
return self__.meta45939;
});

cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async45938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async45938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45939","meta45939",1581781174,null)], null);
});

cljs.core.async.t_cljs$core$async45938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45938";

cljs.core.async.t_cljs$core$async45938.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45938");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45938.
 */
cljs.core.async.__GT_t_cljs$core$async45938 = (function cljs$core$async$__GT_t_cljs$core$async45938(f__$1,blockable__$1,meta45939){
return (new cljs.core.async.t_cljs$core$async45938(f__$1,blockable__$1,meta45939));
});

}

return (new cljs.core.async.t_cljs$core$async45938(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45959 = arguments.length;
switch (G__45959) {
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
var G__45967 = arguments.length;
switch (G__45967) {
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
var G__45974 = arguments.length;
switch (G__45974) {
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
var val_48548 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48548) : fn1.call(null,val_48548));
} else {
cljs.core.async.impl.dispatch.run(((function (val_48548,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48548) : fn1.call(null,val_48548));
});})(val_48548,ret))
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
var G__45980 = arguments.length;
switch (G__45980) {
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
var n__4607__auto___48565 = n;
var x_48566 = (0);
while(true){
if((x_48566 < n__4607__auto___48565)){
(a[x_48566] = (0));

var G__48568 = (x_48566 + (1));
x_48566 = G__48568;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__48569 = (i + (1));
i = G__48569;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45987 = (function (flag,meta45988){
this.flag = flag;
this.meta45988 = meta45988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_45989,meta45988__$1){
var self__ = this;
var _45989__$1 = this;
return (new cljs.core.async.t_cljs$core$async45987(self__.flag,meta45988__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async45987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_45989){
var self__ = this;
var _45989__$1 = this;
return self__.meta45988;
});})(flag))
;

cljs.core.async.t_cljs$core$async45987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async45987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async45987.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45988","meta45988",1398873640,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async45987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45987";

cljs.core.async.t_cljs$core$async45987.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45987");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45987.
 */
cljs.core.async.__GT_t_cljs$core$async45987 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45987(flag__$1,meta45988){
return (new cljs.core.async.t_cljs$core$async45987(flag__$1,meta45988));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async45987(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45999 = (function (flag,cb,meta46000){
this.flag = flag;
this.cb = cb;
this.meta46000 = meta46000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46001,meta46000__$1){
var self__ = this;
var _46001__$1 = this;
return (new cljs.core.async.t_cljs$core$async45999(self__.flag,self__.cb,meta46000__$1));
});

cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46001){
var self__ = this;
var _46001__$1 = this;
return self__.meta46000;
});

cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async45999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async45999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46000","meta46000",-436394537,null)], null);
});

cljs.core.async.t_cljs$core$async45999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45999";

cljs.core.async.t_cljs$core$async45999.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45999");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45999.
 */
cljs.core.async.__GT_t_cljs$core$async45999 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45999(flag__$1,cb__$1,meta46000){
return (new cljs.core.async.t_cljs$core$async45999(flag__$1,cb__$1,meta46000));
});

}

return (new cljs.core.async.t_cljs$core$async45999(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__46005_SHARP_){
var G__46007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46005_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46007) : fret.call(null,G__46007));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46006_SHARP_){
var G__46008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46006_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46008) : fret.call(null,G__46008));
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
var G__48583 = (i + (1));
i = G__48583;
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
var len__4730__auto___48585 = arguments.length;
var i__4731__auto___48586 = (0);
while(true){
if((i__4731__auto___48586 < len__4730__auto___48585)){
args__4736__auto__.push((arguments[i__4731__auto___48586]));

var G__48587 = (i__4731__auto___48586 + (1));
i__4731__auto___48586 = G__48587;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46015){
var map__46016 = p__46015;
var map__46016__$1 = (((((!((map__46016 == null))))?(((((map__46016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46016):map__46016);
var opts = map__46016__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46011){
var G__46012 = cljs.core.first(seq46011);
var seq46011__$1 = cljs.core.next(seq46011);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46012,seq46011__$1);
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
var G__46021 = arguments.length;
switch (G__46021) {
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
var c__45808__auto___48600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___48600){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___48600){
return (function (state_46048){
var state_val_46052 = (state_46048[(1)]);
if((state_val_46052 === (7))){
var inst_46044 = (state_46048[(2)]);
var state_46048__$1 = state_46048;
var statearr_46055_48601 = state_46048__$1;
(statearr_46055_48601[(2)] = inst_46044);

(statearr_46055_48601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (1))){
var state_46048__$1 = state_46048;
var statearr_46056_48602 = state_46048__$1;
(statearr_46056_48602[(2)] = null);

(statearr_46056_48602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (4))){
var inst_46027 = (state_46048[(7)]);
var inst_46027__$1 = (state_46048[(2)]);
var inst_46028 = (inst_46027__$1 == null);
var state_46048__$1 = (function (){var statearr_46057 = state_46048;
(statearr_46057[(7)] = inst_46027__$1);

return statearr_46057;
})();
if(cljs.core.truth_(inst_46028)){
var statearr_46058_48603 = state_46048__$1;
(statearr_46058_48603[(1)] = (5));

} else {
var statearr_46059_48604 = state_46048__$1;
(statearr_46059_48604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (13))){
var state_46048__$1 = state_46048;
var statearr_46062_48605 = state_46048__$1;
(statearr_46062_48605[(2)] = null);

(statearr_46062_48605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (6))){
var inst_46027 = (state_46048[(7)]);
var state_46048__$1 = state_46048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46048__$1,(11),to,inst_46027);
} else {
if((state_val_46052 === (3))){
var inst_46046 = (state_46048[(2)]);
var state_46048__$1 = state_46048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46048__$1,inst_46046);
} else {
if((state_val_46052 === (12))){
var state_46048__$1 = state_46048;
var statearr_46063_48608 = state_46048__$1;
(statearr_46063_48608[(2)] = null);

(statearr_46063_48608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (2))){
var state_46048__$1 = state_46048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46048__$1,(4),from);
} else {
if((state_val_46052 === (11))){
var inst_46037 = (state_46048[(2)]);
var state_46048__$1 = state_46048;
if(cljs.core.truth_(inst_46037)){
var statearr_46064_48611 = state_46048__$1;
(statearr_46064_48611[(1)] = (12));

} else {
var statearr_46067_48613 = state_46048__$1;
(statearr_46067_48613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (9))){
var state_46048__$1 = state_46048;
var statearr_46068_48614 = state_46048__$1;
(statearr_46068_48614[(2)] = null);

(statearr_46068_48614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (5))){
var state_46048__$1 = state_46048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46069_48618 = state_46048__$1;
(statearr_46069_48618[(1)] = (8));

} else {
var statearr_46070_48619 = state_46048__$1;
(statearr_46070_48619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (14))){
var inst_46042 = (state_46048[(2)]);
var state_46048__$1 = state_46048;
var statearr_46071_48620 = state_46048__$1;
(statearr_46071_48620[(2)] = inst_46042);

(statearr_46071_48620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (10))){
var inst_46034 = (state_46048[(2)]);
var state_46048__$1 = state_46048;
var statearr_46072_48621 = state_46048__$1;
(statearr_46072_48621[(2)] = inst_46034);

(statearr_46072_48621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46052 === (8))){
var inst_46031 = cljs.core.async.close_BANG_(to);
var state_46048__$1 = state_46048;
var statearr_46073_48625 = state_46048__$1;
(statearr_46073_48625[(2)] = inst_46031);

(statearr_46073_48625[(1)] = (10));


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
});})(c__45808__auto___48600))
;
return ((function (switch__45525__auto__,c__45808__auto___48600){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_46074 = [null,null,null,null,null,null,null,null];
(statearr_46074[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_46074[(1)] = (1));

return statearr_46074;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_46048){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46048);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46077){if((e46077 instanceof Object)){
var ex__45529__auto__ = e46077;
var statearr_46078_48627 = state_46048;
(statearr_46078_48627[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48629 = state_46048;
state_46048 = G__48629;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_46048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_46048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___48600))
})();
var state__45810__auto__ = (function (){var statearr_46080 = f__45809__auto__();
(statearr_46080[(6)] = c__45808__auto___48600);

return statearr_46080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___48600))
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
return (function (p__46083){
var vec__46084 = p__46083;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46084,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46084,(1),null);
var job = vec__46084;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45808__auto___48637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___48637,res,vec__46084,v,p,job,jobs,results){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___48637,res,vec__46084,v,p,job,jobs,results){
return (function (state_46091){
var state_val_46092 = (state_46091[(1)]);
if((state_val_46092 === (1))){
var state_46091__$1 = state_46091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46091__$1,(2),res,v);
} else {
if((state_val_46092 === (2))){
var inst_46088 = (state_46091[(2)]);
var inst_46089 = cljs.core.async.close_BANG_(res);
var state_46091__$1 = (function (){var statearr_46095 = state_46091;
(statearr_46095[(7)] = inst_46088);

return statearr_46095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46091__$1,inst_46089);
} else {
return null;
}
}
});})(c__45808__auto___48637,res,vec__46084,v,p,job,jobs,results))
;
return ((function (switch__45525__auto__,c__45808__auto___48637,res,vec__46084,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_46096 = [null,null,null,null,null,null,null,null];
(statearr_46096[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__);

(statearr_46096[(1)] = (1));

return statearr_46096;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1 = (function (state_46091){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46091);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46097){if((e46097 instanceof Object)){
var ex__45529__auto__ = e46097;
var statearr_46098_48645 = state_46091;
(statearr_46098_48645[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48646 = state_46091;
state_46091 = G__48646;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = function(state_46091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1.call(this,state_46091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___48637,res,vec__46084,v,p,job,jobs,results))
})();
var state__45810__auto__ = (function (){var statearr_46099 = f__45809__auto__();
(statearr_46099[(6)] = c__45808__auto___48637);

return statearr_46099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___48637,res,vec__46084,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__46103){
var vec__46104 = p__46103;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46104,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46104,(1),null);
var job = vec__46104;
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
var n__4607__auto___48648 = n;
var __48649 = (0);
while(true){
if((__48649 < n__4607__auto___48648)){
var G__46107_48650 = type;
var G__46107_48651__$1 = (((G__46107_48650 instanceof cljs.core.Keyword))?G__46107_48650.fqn:null);
switch (G__46107_48651__$1) {
case "compute":
var c__45808__auto___48653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48649,c__45808__auto___48653,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (__48649,c__45808__auto___48653,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async){
return (function (state_46121){
var state_val_46122 = (state_46121[(1)]);
if((state_val_46122 === (1))){
var state_46121__$1 = state_46121;
var statearr_46123_48655 = state_46121__$1;
(statearr_46123_48655[(2)] = null);

(statearr_46123_48655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46122 === (2))){
var state_46121__$1 = state_46121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46121__$1,(4),jobs);
} else {
if((state_val_46122 === (3))){
var inst_46119 = (state_46121[(2)]);
var state_46121__$1 = state_46121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46121__$1,inst_46119);
} else {
if((state_val_46122 === (4))){
var inst_46111 = (state_46121[(2)]);
var inst_46112 = process(inst_46111);
var state_46121__$1 = state_46121;
if(cljs.core.truth_(inst_46112)){
var statearr_46124_48656 = state_46121__$1;
(statearr_46124_48656[(1)] = (5));

} else {
var statearr_46125_48657 = state_46121__$1;
(statearr_46125_48657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46122 === (5))){
var state_46121__$1 = state_46121;
var statearr_46126_48658 = state_46121__$1;
(statearr_46126_48658[(2)] = null);

(statearr_46126_48658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46122 === (6))){
var state_46121__$1 = state_46121;
var statearr_46127_48659 = state_46121__$1;
(statearr_46127_48659[(2)] = null);

(statearr_46127_48659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46122 === (7))){
var inst_46117 = (state_46121[(2)]);
var state_46121__$1 = state_46121;
var statearr_46128_48660 = state_46121__$1;
(statearr_46128_48660[(2)] = inst_46117);

(statearr_46128_48660[(1)] = (3));


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
});})(__48649,c__45808__auto___48653,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async))
;
return ((function (__48649,switch__45525__auto__,c__45808__auto___48653,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_46129 = [null,null,null,null,null,null,null];
(statearr_46129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__);

(statearr_46129[(1)] = (1));

return statearr_46129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1 = (function (state_46121){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46121);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46130){if((e46130 instanceof Object)){
var ex__45529__auto__ = e46130;
var statearr_46131_48662 = state_46121;
(statearr_46131_48662[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46130;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48665 = state_46121;
state_46121 = G__48665;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = function(state_46121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1.call(this,state_46121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__;
})()
;})(__48649,switch__45525__auto__,c__45808__auto___48653,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async))
})();
var state__45810__auto__ = (function (){var statearr_46133 = f__45809__auto__();
(statearr_46133[(6)] = c__45808__auto___48653);

return statearr_46133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(__48649,c__45808__auto___48653,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async))
);


break;
case "async":
var c__45808__auto___48666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48649,c__45808__auto___48666,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (__48649,c__45808__auto___48666,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async){
return (function (state_46146){
var state_val_46147 = (state_46146[(1)]);
if((state_val_46147 === (1))){
var state_46146__$1 = state_46146;
var statearr_46148_48668 = state_46146__$1;
(statearr_46148_48668[(2)] = null);

(statearr_46148_48668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (2))){
var state_46146__$1 = state_46146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46146__$1,(4),jobs);
} else {
if((state_val_46147 === (3))){
var inst_46144 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46146__$1,inst_46144);
} else {
if((state_val_46147 === (4))){
var inst_46136 = (state_46146[(2)]);
var inst_46137 = async(inst_46136);
var state_46146__$1 = state_46146;
if(cljs.core.truth_(inst_46137)){
var statearr_46149_48672 = state_46146__$1;
(statearr_46149_48672[(1)] = (5));

} else {
var statearr_46150_48673 = state_46146__$1;
(statearr_46150_48673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (5))){
var state_46146__$1 = state_46146;
var statearr_46151_48674 = state_46146__$1;
(statearr_46151_48674[(2)] = null);

(statearr_46151_48674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (6))){
var state_46146__$1 = state_46146;
var statearr_46152_48676 = state_46146__$1;
(statearr_46152_48676[(2)] = null);

(statearr_46152_48676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46147 === (7))){
var inst_46142 = (state_46146[(2)]);
var state_46146__$1 = state_46146;
var statearr_46153_48677 = state_46146__$1;
(statearr_46153_48677[(2)] = inst_46142);

(statearr_46153_48677[(1)] = (3));


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
});})(__48649,c__45808__auto___48666,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async))
;
return ((function (__48649,switch__45525__auto__,c__45808__auto___48666,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_46154 = [null,null,null,null,null,null,null];
(statearr_46154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__);

(statearr_46154[(1)] = (1));

return statearr_46154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1 = (function (state_46146){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46146);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46156){if((e46156 instanceof Object)){
var ex__45529__auto__ = e46156;
var statearr_46157_48678 = state_46146;
(statearr_46157_48678[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48679 = state_46146;
state_46146 = G__48679;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = function(state_46146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1.call(this,state_46146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__;
})()
;})(__48649,switch__45525__auto__,c__45808__auto___48666,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async))
})();
var state__45810__auto__ = (function (){var statearr_46158 = f__45809__auto__();
(statearr_46158[(6)] = c__45808__auto___48666);

return statearr_46158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(__48649,c__45808__auto___48666,G__46107_48650,G__46107_48651__$1,n__4607__auto___48648,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46107_48651__$1)].join('')));

}

var G__48680 = (__48649 + (1));
__48649 = G__48680;
continue;
} else {
}
break;
}

var c__45808__auto___48681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___48681,jobs,results,process,async){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___48681,jobs,results,process,async){
return (function (state_46186){
var state_val_46187 = (state_46186[(1)]);
if((state_val_46187 === (7))){
var inst_46181 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
var statearr_46190_48685 = state_46186__$1;
(statearr_46190_48685[(2)] = inst_46181);

(statearr_46190_48685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (1))){
var state_46186__$1 = state_46186;
var statearr_46191_48686 = state_46186__$1;
(statearr_46191_48686[(2)] = null);

(statearr_46191_48686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (4))){
var inst_46161 = (state_46186[(7)]);
var inst_46161__$1 = (state_46186[(2)]);
var inst_46162 = (inst_46161__$1 == null);
var state_46186__$1 = (function (){var statearr_46196 = state_46186;
(statearr_46196[(7)] = inst_46161__$1);

return statearr_46196;
})();
if(cljs.core.truth_(inst_46162)){
var statearr_46197_48692 = state_46186__$1;
(statearr_46197_48692[(1)] = (5));

} else {
var statearr_46198_48693 = state_46186__$1;
(statearr_46198_48693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (6))){
var inst_46161 = (state_46186[(7)]);
var inst_46166 = (state_46186[(8)]);
var inst_46166__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46167 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46170 = [inst_46161,inst_46166__$1];
var inst_46171 = (new cljs.core.PersistentVector(null,2,(5),inst_46167,inst_46170,null));
var state_46186__$1 = (function (){var statearr_46204 = state_46186;
(statearr_46204[(8)] = inst_46166__$1);

return statearr_46204;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46186__$1,(8),jobs,inst_46171);
} else {
if((state_val_46187 === (3))){
var inst_46183 = (state_46186[(2)]);
var state_46186__$1 = state_46186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46186__$1,inst_46183);
} else {
if((state_val_46187 === (2))){
var state_46186__$1 = state_46186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46186__$1,(4),from);
} else {
if((state_val_46187 === (9))){
var inst_46176 = (state_46186[(2)]);
var state_46186__$1 = (function (){var statearr_46220 = state_46186;
(statearr_46220[(9)] = inst_46176);

return statearr_46220;
})();
var statearr_46221_48695 = state_46186__$1;
(statearr_46221_48695[(2)] = null);

(statearr_46221_48695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (5))){
var inst_46164 = cljs.core.async.close_BANG_(jobs);
var state_46186__$1 = state_46186;
var statearr_46222_48696 = state_46186__$1;
(statearr_46222_48696[(2)] = inst_46164);

(statearr_46222_48696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46187 === (8))){
var inst_46166 = (state_46186[(8)]);
var inst_46174 = (state_46186[(2)]);
var state_46186__$1 = (function (){var statearr_46227 = state_46186;
(statearr_46227[(10)] = inst_46174);

return statearr_46227;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46186__$1,(9),results,inst_46166);
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
});})(c__45808__auto___48681,jobs,results,process,async))
;
return ((function (switch__45525__auto__,c__45808__auto___48681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_46228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__);

(statearr_46228[(1)] = (1));

return statearr_46228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1 = (function (state_46186){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46186);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46229){if((e46229 instanceof Object)){
var ex__45529__auto__ = e46229;
var statearr_46230_48700 = state_46186;
(statearr_46230_48700[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48701 = state_46186;
state_46186 = G__48701;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = function(state_46186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1.call(this,state_46186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___48681,jobs,results,process,async))
})();
var state__45810__auto__ = (function (){var statearr_46236 = f__45809__auto__();
(statearr_46236[(6)] = c__45808__auto___48681);

return statearr_46236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___48681,jobs,results,process,async))
);


var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,jobs,results,process,async){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,jobs,results,process,async){
return (function (state_46278){
var state_val_46279 = (state_46278[(1)]);
if((state_val_46279 === (7))){
var inst_46274 = (state_46278[(2)]);
var state_46278__$1 = state_46278;
var statearr_46281_48704 = state_46278__$1;
(statearr_46281_48704[(2)] = inst_46274);

(statearr_46281_48704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (20))){
var state_46278__$1 = state_46278;
var statearr_46282_48706 = state_46278__$1;
(statearr_46282_48706[(2)] = null);

(statearr_46282_48706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (1))){
var state_46278__$1 = state_46278;
var statearr_46283_48708 = state_46278__$1;
(statearr_46283_48708[(2)] = null);

(statearr_46283_48708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (4))){
var inst_46243 = (state_46278[(7)]);
var inst_46243__$1 = (state_46278[(2)]);
var inst_46244 = (inst_46243__$1 == null);
var state_46278__$1 = (function (){var statearr_46284 = state_46278;
(statearr_46284[(7)] = inst_46243__$1);

return statearr_46284;
})();
if(cljs.core.truth_(inst_46244)){
var statearr_46285_48710 = state_46278__$1;
(statearr_46285_48710[(1)] = (5));

} else {
var statearr_46286_48711 = state_46278__$1;
(statearr_46286_48711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (15))){
var inst_46256 = (state_46278[(8)]);
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46278__$1,(18),to,inst_46256);
} else {
if((state_val_46279 === (21))){
var inst_46269 = (state_46278[(2)]);
var state_46278__$1 = state_46278;
var statearr_46287_48712 = state_46278__$1;
(statearr_46287_48712[(2)] = inst_46269);

(statearr_46287_48712[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (13))){
var inst_46271 = (state_46278[(2)]);
var state_46278__$1 = (function (){var statearr_46291 = state_46278;
(statearr_46291[(9)] = inst_46271);

return statearr_46291;
})();
var statearr_46292_48715 = state_46278__$1;
(statearr_46292_48715[(2)] = null);

(statearr_46292_48715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (6))){
var inst_46243 = (state_46278[(7)]);
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46278__$1,(11),inst_46243);
} else {
if((state_val_46279 === (17))){
var inst_46264 = (state_46278[(2)]);
var state_46278__$1 = state_46278;
if(cljs.core.truth_(inst_46264)){
var statearr_46297_48719 = state_46278__$1;
(statearr_46297_48719[(1)] = (19));

} else {
var statearr_46298_48721 = state_46278__$1;
(statearr_46298_48721[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (3))){
var inst_46276 = (state_46278[(2)]);
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46278__$1,inst_46276);
} else {
if((state_val_46279 === (12))){
var inst_46253 = (state_46278[(10)]);
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46278__$1,(14),inst_46253);
} else {
if((state_val_46279 === (2))){
var state_46278__$1 = state_46278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46278__$1,(4),results);
} else {
if((state_val_46279 === (19))){
var state_46278__$1 = state_46278;
var statearr_46303_48725 = state_46278__$1;
(statearr_46303_48725[(2)] = null);

(statearr_46303_48725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (11))){
var inst_46253 = (state_46278[(2)]);
var state_46278__$1 = (function (){var statearr_46307 = state_46278;
(statearr_46307[(10)] = inst_46253);

return statearr_46307;
})();
var statearr_46308_48727 = state_46278__$1;
(statearr_46308_48727[(2)] = null);

(statearr_46308_48727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (9))){
var state_46278__$1 = state_46278;
var statearr_46309_48730 = state_46278__$1;
(statearr_46309_48730[(2)] = null);

(statearr_46309_48730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (5))){
var state_46278__$1 = state_46278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46311_48731 = state_46278__$1;
(statearr_46311_48731[(1)] = (8));

} else {
var statearr_46314_48733 = state_46278__$1;
(statearr_46314_48733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (14))){
var inst_46258 = (state_46278[(11)]);
var inst_46256 = (state_46278[(8)]);
var inst_46256__$1 = (state_46278[(2)]);
var inst_46257 = (inst_46256__$1 == null);
var inst_46258__$1 = cljs.core.not(inst_46257);
var state_46278__$1 = (function (){var statearr_46316 = state_46278;
(statearr_46316[(11)] = inst_46258__$1);

(statearr_46316[(8)] = inst_46256__$1);

return statearr_46316;
})();
if(inst_46258__$1){
var statearr_46317_48736 = state_46278__$1;
(statearr_46317_48736[(1)] = (15));

} else {
var statearr_46319_48737 = state_46278__$1;
(statearr_46319_48737[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (16))){
var inst_46258 = (state_46278[(11)]);
var state_46278__$1 = state_46278;
var statearr_46323_48740 = state_46278__$1;
(statearr_46323_48740[(2)] = inst_46258);

(statearr_46323_48740[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (10))){
var inst_46250 = (state_46278[(2)]);
var state_46278__$1 = state_46278;
var statearr_46325_48742 = state_46278__$1;
(statearr_46325_48742[(2)] = inst_46250);

(statearr_46325_48742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (18))){
var inst_46261 = (state_46278[(2)]);
var state_46278__$1 = state_46278;
var statearr_46326_48744 = state_46278__$1;
(statearr_46326_48744[(2)] = inst_46261);

(statearr_46326_48744[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46279 === (8))){
var inst_46247 = cljs.core.async.close_BANG_(to);
var state_46278__$1 = state_46278;
var statearr_46327_48747 = state_46278__$1;
(statearr_46327_48747[(2)] = inst_46247);

(statearr_46327_48747[(1)] = (10));


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
});})(c__45808__auto__,jobs,results,process,async))
;
return ((function (switch__45525__auto__,c__45808__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_46328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__);

(statearr_46328[(1)] = (1));

return statearr_46328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1 = (function (state_46278){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46278);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46329){if((e46329 instanceof Object)){
var ex__45529__auto__ = e46329;
var statearr_46333_48759 = state_46278;
(statearr_46333_48759[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48761 = state_46278;
state_46278 = G__48761;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__ = function(state_46278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1.call(this,state_46278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45526__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,jobs,results,process,async))
})();
var state__45810__auto__ = (function (){var statearr_46335 = f__45809__auto__();
(statearr_46335[(6)] = c__45808__auto__);

return statearr_46335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,jobs,results,process,async))
);

return c__45808__auto__;
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
var G__46340 = arguments.length;
switch (G__46340) {
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
var G__46345 = arguments.length;
switch (G__46345) {
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
var G__46359 = arguments.length;
switch (G__46359) {
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
var c__45808__auto___48773 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___48773,tc,fc){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___48773,tc,fc){
return (function (state_46389){
var state_val_46390 = (state_46389[(1)]);
if((state_val_46390 === (7))){
var inst_46385 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46391_48774 = state_46389__$1;
(statearr_46391_48774[(2)] = inst_46385);

(statearr_46391_48774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (1))){
var state_46389__$1 = state_46389;
var statearr_46392_48775 = state_46389__$1;
(statearr_46392_48775[(2)] = null);

(statearr_46392_48775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (4))){
var inst_46366 = (state_46389[(7)]);
var inst_46366__$1 = (state_46389[(2)]);
var inst_46367 = (inst_46366__$1 == null);
var state_46389__$1 = (function (){var statearr_46394 = state_46389;
(statearr_46394[(7)] = inst_46366__$1);

return statearr_46394;
})();
if(cljs.core.truth_(inst_46367)){
var statearr_46395_48780 = state_46389__$1;
(statearr_46395_48780[(1)] = (5));

} else {
var statearr_46396_48783 = state_46389__$1;
(statearr_46396_48783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (13))){
var state_46389__$1 = state_46389;
var statearr_46397_48785 = state_46389__$1;
(statearr_46397_48785[(2)] = null);

(statearr_46397_48785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (6))){
var inst_46366 = (state_46389[(7)]);
var inst_46372 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46366) : p.call(null,inst_46366));
var state_46389__$1 = state_46389;
if(cljs.core.truth_(inst_46372)){
var statearr_46398_48786 = state_46389__$1;
(statearr_46398_48786[(1)] = (9));

} else {
var statearr_46399_48787 = state_46389__$1;
(statearr_46399_48787[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (3))){
var inst_46387 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46389__$1,inst_46387);
} else {
if((state_val_46390 === (12))){
var state_46389__$1 = state_46389;
var statearr_46400_48788 = state_46389__$1;
(statearr_46400_48788[(2)] = null);

(statearr_46400_48788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (2))){
var state_46389__$1 = state_46389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46389__$1,(4),ch);
} else {
if((state_val_46390 === (11))){
var inst_46366 = (state_46389[(7)]);
var inst_46376 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46389__$1,(8),inst_46376,inst_46366);
} else {
if((state_val_46390 === (9))){
var state_46389__$1 = state_46389;
var statearr_46401_48789 = state_46389__$1;
(statearr_46401_48789[(2)] = tc);

(statearr_46401_48789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (5))){
var inst_46369 = cljs.core.async.close_BANG_(tc);
var inst_46370 = cljs.core.async.close_BANG_(fc);
var state_46389__$1 = (function (){var statearr_46402 = state_46389;
(statearr_46402[(8)] = inst_46369);

return statearr_46402;
})();
var statearr_46403_48790 = state_46389__$1;
(statearr_46403_48790[(2)] = inst_46370);

(statearr_46403_48790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (14))){
var inst_46383 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
var statearr_46407_48791 = state_46389__$1;
(statearr_46407_48791[(2)] = inst_46383);

(statearr_46407_48791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (10))){
var state_46389__$1 = state_46389;
var statearr_46408_48794 = state_46389__$1;
(statearr_46408_48794[(2)] = fc);

(statearr_46408_48794[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46390 === (8))){
var inst_46378 = (state_46389[(2)]);
var state_46389__$1 = state_46389;
if(cljs.core.truth_(inst_46378)){
var statearr_46409_48795 = state_46389__$1;
(statearr_46409_48795[(1)] = (12));

} else {
var statearr_46410_48796 = state_46389__$1;
(statearr_46410_48796[(1)] = (13));

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
});})(c__45808__auto___48773,tc,fc))
;
return ((function (switch__45525__auto__,c__45808__auto___48773,tc,fc){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_46411 = [null,null,null,null,null,null,null,null,null];
(statearr_46411[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_46411[(1)] = (1));

return statearr_46411;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_46389){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46389);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46412){if((e46412 instanceof Object)){
var ex__45529__auto__ = e46412;
var statearr_46413_48800 = state_46389;
(statearr_46413_48800[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48801 = state_46389;
state_46389 = G__48801;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_46389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_46389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___48773,tc,fc))
})();
var state__45810__auto__ = (function (){var statearr_46417 = f__45809__auto__();
(statearr_46417[(6)] = c__45808__auto___48773);

return statearr_46417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___48773,tc,fc))
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
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_46449){
var state_val_46450 = (state_46449[(1)]);
if((state_val_46450 === (7))){
var inst_46445 = (state_46449[(2)]);
var state_46449__$1 = state_46449;
var statearr_46456_48802 = state_46449__$1;
(statearr_46456_48802[(2)] = inst_46445);

(statearr_46456_48802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (1))){
var inst_46424 = init;
var state_46449__$1 = (function (){var statearr_46457 = state_46449;
(statearr_46457[(7)] = inst_46424);

return statearr_46457;
})();
var statearr_46458_48804 = state_46449__$1;
(statearr_46458_48804[(2)] = null);

(statearr_46458_48804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (4))){
var inst_46429 = (state_46449[(8)]);
var inst_46429__$1 = (state_46449[(2)]);
var inst_46430 = (inst_46429__$1 == null);
var state_46449__$1 = (function (){var statearr_46460 = state_46449;
(statearr_46460[(8)] = inst_46429__$1);

return statearr_46460;
})();
if(cljs.core.truth_(inst_46430)){
var statearr_46464_48806 = state_46449__$1;
(statearr_46464_48806[(1)] = (5));

} else {
var statearr_46466_48807 = state_46449__$1;
(statearr_46466_48807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (6))){
var inst_46429 = (state_46449[(8)]);
var inst_46433 = (state_46449[(9)]);
var inst_46424 = (state_46449[(7)]);
var inst_46433__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46424,inst_46429) : f.call(null,inst_46424,inst_46429));
var inst_46435 = cljs.core.reduced_QMARK_(inst_46433__$1);
var state_46449__$1 = (function (){var statearr_46470 = state_46449;
(statearr_46470[(9)] = inst_46433__$1);

return statearr_46470;
})();
if(inst_46435){
var statearr_46471_48808 = state_46449__$1;
(statearr_46471_48808[(1)] = (8));

} else {
var statearr_46472_48809 = state_46449__$1;
(statearr_46472_48809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (3))){
var inst_46447 = (state_46449[(2)]);
var state_46449__$1 = state_46449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46449__$1,inst_46447);
} else {
if((state_val_46450 === (2))){
var state_46449__$1 = state_46449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46449__$1,(4),ch);
} else {
if((state_val_46450 === (9))){
var inst_46433 = (state_46449[(9)]);
var inst_46424 = inst_46433;
var state_46449__$1 = (function (){var statearr_46473 = state_46449;
(statearr_46473[(7)] = inst_46424);

return statearr_46473;
})();
var statearr_46474_48812 = state_46449__$1;
(statearr_46474_48812[(2)] = null);

(statearr_46474_48812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (5))){
var inst_46424 = (state_46449[(7)]);
var state_46449__$1 = state_46449;
var statearr_46476_48822 = state_46449__$1;
(statearr_46476_48822[(2)] = inst_46424);

(statearr_46476_48822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (10))){
var inst_46443 = (state_46449[(2)]);
var state_46449__$1 = state_46449;
var statearr_46477_48823 = state_46449__$1;
(statearr_46477_48823[(2)] = inst_46443);

(statearr_46477_48823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46450 === (8))){
var inst_46433 = (state_46449[(9)]);
var inst_46439 = cljs.core.deref(inst_46433);
var state_46449__$1 = state_46449;
var statearr_46480_48824 = state_46449__$1;
(statearr_46480_48824[(2)] = inst_46439);

(statearr_46480_48824[(1)] = (10));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__45526__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45526__auto____0 = (function (){
var statearr_46483 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46483[(0)] = cljs$core$async$reduce_$_state_machine__45526__auto__);

(statearr_46483[(1)] = (1));

return statearr_46483;
});
var cljs$core$async$reduce_$_state_machine__45526__auto____1 = (function (state_46449){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46449);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46484){if((e46484 instanceof Object)){
var ex__45529__auto__ = e46484;
var statearr_46485_48825 = state_46449;
(statearr_46485_48825[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48826 = state_46449;
state_46449 = G__48826;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45526__auto__ = function(state_46449){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45526__auto____1.call(this,state_46449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45526__auto____0;
cljs$core$async$reduce_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45526__auto____1;
return cljs$core$async$reduce_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_46486 = f__45809__auto__();
(statearr_46486[(6)] = c__45808__auto__);

return statearr_46486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__,f__$1){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__,f__$1){
return (function (state_46496){
var state_val_46497 = (state_46496[(1)]);
if((state_val_46497 === (1))){
var inst_46491 = cljs.core.async.reduce(f__$1,init,ch);
var state_46496__$1 = state_46496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46496__$1,(2),inst_46491);
} else {
if((state_val_46497 === (2))){
var inst_46493 = (state_46496[(2)]);
var inst_46494 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46493) : f__$1.call(null,inst_46493));
var state_46496__$1 = state_46496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46496__$1,inst_46494);
} else {
return null;
}
}
});})(c__45808__auto__,f__$1))
;
return ((function (switch__45525__auto__,c__45808__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__45526__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45526__auto____0 = (function (){
var statearr_46498 = [null,null,null,null,null,null,null];
(statearr_46498[(0)] = cljs$core$async$transduce_$_state_machine__45526__auto__);

(statearr_46498[(1)] = (1));

return statearr_46498;
});
var cljs$core$async$transduce_$_state_machine__45526__auto____1 = (function (state_46496){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46496);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46499){if((e46499 instanceof Object)){
var ex__45529__auto__ = e46499;
var statearr_46500_48833 = state_46496;
(statearr_46500_48833[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46499;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48834 = state_46496;
state_46496 = G__48834;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45526__auto__ = function(state_46496){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45526__auto____1.call(this,state_46496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45526__auto____0;
cljs$core$async$transduce_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45526__auto____1;
return cljs$core$async$transduce_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__,f__$1))
})();
var state__45810__auto__ = (function (){var statearr_46502 = f__45809__auto__();
(statearr_46502[(6)] = c__45808__auto__);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__,f__$1))
);

return c__45808__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46509 = arguments.length;
switch (G__46509) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_46535){
var state_val_46536 = (state_46535[(1)]);
if((state_val_46536 === (7))){
var inst_46517 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
var statearr_46537_48845 = state_46535__$1;
(statearr_46537_48845[(2)] = inst_46517);

(statearr_46537_48845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (1))){
var inst_46511 = cljs.core.seq(coll);
var inst_46512 = inst_46511;
var state_46535__$1 = (function (){var statearr_46538 = state_46535;
(statearr_46538[(7)] = inst_46512);

return statearr_46538;
})();
var statearr_46540_48848 = state_46535__$1;
(statearr_46540_48848[(2)] = null);

(statearr_46540_48848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (4))){
var inst_46512 = (state_46535[(7)]);
var inst_46515 = cljs.core.first(inst_46512);
var state_46535__$1 = state_46535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46535__$1,(7),ch,inst_46515);
} else {
if((state_val_46536 === (13))){
var inst_46529 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
var statearr_46542_48852 = state_46535__$1;
(statearr_46542_48852[(2)] = inst_46529);

(statearr_46542_48852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (6))){
var inst_46520 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
if(cljs.core.truth_(inst_46520)){
var statearr_46543_48858 = state_46535__$1;
(statearr_46543_48858[(1)] = (8));

} else {
var statearr_46546_48859 = state_46535__$1;
(statearr_46546_48859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (3))){
var inst_46533 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46535__$1,inst_46533);
} else {
if((state_val_46536 === (12))){
var state_46535__$1 = state_46535;
var statearr_46547_48863 = state_46535__$1;
(statearr_46547_48863[(2)] = null);

(statearr_46547_48863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (2))){
var inst_46512 = (state_46535[(7)]);
var state_46535__$1 = state_46535;
if(cljs.core.truth_(inst_46512)){
var statearr_46548_48868 = state_46535__$1;
(statearr_46548_48868[(1)] = (4));

} else {
var statearr_46549_48869 = state_46535__$1;
(statearr_46549_48869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (11))){
var inst_46526 = cljs.core.async.close_BANG_(ch);
var state_46535__$1 = state_46535;
var statearr_46550_48870 = state_46535__$1;
(statearr_46550_48870[(2)] = inst_46526);

(statearr_46550_48870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (9))){
var state_46535__$1 = state_46535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46551_48871 = state_46535__$1;
(statearr_46551_48871[(1)] = (11));

} else {
var statearr_46552_48872 = state_46535__$1;
(statearr_46552_48872[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (5))){
var inst_46512 = (state_46535[(7)]);
var state_46535__$1 = state_46535;
var statearr_46553_48876 = state_46535__$1;
(statearr_46553_48876[(2)] = inst_46512);

(statearr_46553_48876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (10))){
var inst_46531 = (state_46535[(2)]);
var state_46535__$1 = state_46535;
var statearr_46554_48878 = state_46535__$1;
(statearr_46554_48878[(2)] = inst_46531);

(statearr_46554_48878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46536 === (8))){
var inst_46512 = (state_46535[(7)]);
var inst_46522 = cljs.core.next(inst_46512);
var inst_46512__$1 = inst_46522;
var state_46535__$1 = (function (){var statearr_46556 = state_46535;
(statearr_46556[(7)] = inst_46512__$1);

return statearr_46556;
})();
var statearr_46557_48879 = state_46535__$1;
(statearr_46557_48879[(2)] = null);

(statearr_46557_48879[(1)] = (2));


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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_46558 = [null,null,null,null,null,null,null,null];
(statearr_46558[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_46558[(1)] = (1));

return statearr_46558;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_46535){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46535);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46559){if((e46559 instanceof Object)){
var ex__45529__auto__ = e46559;
var statearr_46560_48882 = state_46535;
(statearr_46560_48882[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48884 = state_46535;
state_46535 = G__48884;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_46535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_46535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_46561 = f__45809__auto__();
(statearr_46561[(6)] = c__45808__auto__);

return statearr_46561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46606 = (function (ch,cs,meta46607){
this.ch = ch;
this.cs = cs;
this.meta46607 = meta46607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_46608,meta46607__$1){
var self__ = this;
var _46608__$1 = this;
return (new cljs.core.async.t_cljs$core$async46606(self__.ch,self__.cs,meta46607__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_46608){
var self__ = this;
var _46608__$1 = this;
return self__.meta46607;
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46607","meta46607",-463609647,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async46606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46606";

cljs.core.async.t_cljs$core$async46606.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46606");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46606.
 */
cljs.core.async.__GT_t_cljs$core$async46606 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async46606(ch__$1,cs__$1,meta46607){
return (new cljs.core.async.t_cljs$core$async46606(ch__$1,cs__$1,meta46607));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async46606(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__45808__auto___48919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___48919,cs,m,dchan,dctr,done){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___48919,cs,m,dchan,dctr,done){
return (function (state_46804){
var state_val_46806 = (state_46804[(1)]);
if((state_val_46806 === (7))){
var inst_46794 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46816_48921 = state_46804__$1;
(statearr_46816_48921[(2)] = inst_46794);

(statearr_46816_48921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (20))){
var inst_46679 = (state_46804[(7)]);
var inst_46699 = cljs.core.first(inst_46679);
var inst_46702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46699,(0),null);
var inst_46704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46699,(1),null);
var state_46804__$1 = (function (){var statearr_46818 = state_46804;
(statearr_46818[(8)] = inst_46702);

return statearr_46818;
})();
if(cljs.core.truth_(inst_46704)){
var statearr_46819_48923 = state_46804__$1;
(statearr_46819_48923[(1)] = (22));

} else {
var statearr_46820_48924 = state_46804__$1;
(statearr_46820_48924[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (27))){
var inst_46740 = (state_46804[(9)]);
var inst_46733 = (state_46804[(10)]);
var inst_46643 = (state_46804[(11)]);
var inst_46735 = (state_46804[(12)]);
var inst_46740__$1 = cljs.core._nth(inst_46733,inst_46735);
var inst_46741 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46740__$1,inst_46643,done);
var state_46804__$1 = (function (){var statearr_46828 = state_46804;
(statearr_46828[(9)] = inst_46740__$1);

return statearr_46828;
})();
if(cljs.core.truth_(inst_46741)){
var statearr_46829_48928 = state_46804__$1;
(statearr_46829_48928[(1)] = (30));

} else {
var statearr_46830_48929 = state_46804__$1;
(statearr_46830_48929[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (1))){
var state_46804__$1 = state_46804;
var statearr_46831_48937 = state_46804__$1;
(statearr_46831_48937[(2)] = null);

(statearr_46831_48937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (24))){
var inst_46679 = (state_46804[(7)]);
var inst_46709 = (state_46804[(2)]);
var inst_46710 = cljs.core.next(inst_46679);
var inst_46654 = inst_46710;
var inst_46655 = null;
var inst_46656 = (0);
var inst_46657 = (0);
var state_46804__$1 = (function (){var statearr_46836 = state_46804;
(statearr_46836[(13)] = inst_46656);

(statearr_46836[(14)] = inst_46654);

(statearr_46836[(15)] = inst_46709);

(statearr_46836[(16)] = inst_46655);

(statearr_46836[(17)] = inst_46657);

return statearr_46836;
})();
var statearr_46838_48938 = state_46804__$1;
(statearr_46838_48938[(2)] = null);

(statearr_46838_48938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (39))){
var state_46804__$1 = state_46804;
var statearr_46844_48941 = state_46804__$1;
(statearr_46844_48941[(2)] = null);

(statearr_46844_48941[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (4))){
var inst_46643 = (state_46804[(11)]);
var inst_46643__$1 = (state_46804[(2)]);
var inst_46644 = (inst_46643__$1 == null);
var state_46804__$1 = (function (){var statearr_46845 = state_46804;
(statearr_46845[(11)] = inst_46643__$1);

return statearr_46845;
})();
if(cljs.core.truth_(inst_46644)){
var statearr_46846_48945 = state_46804__$1;
(statearr_46846_48945[(1)] = (5));

} else {
var statearr_46847_48946 = state_46804__$1;
(statearr_46847_48946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (15))){
var inst_46656 = (state_46804[(13)]);
var inst_46654 = (state_46804[(14)]);
var inst_46655 = (state_46804[(16)]);
var inst_46657 = (state_46804[(17)]);
var inst_46672 = (state_46804[(2)]);
var inst_46674 = (inst_46657 + (1));
var tmp46840 = inst_46656;
var tmp46842 = inst_46654;
var tmp46843 = inst_46655;
var inst_46654__$1 = tmp46842;
var inst_46655__$1 = tmp46843;
var inst_46656__$1 = tmp46840;
var inst_46657__$1 = inst_46674;
var state_46804__$1 = (function (){var statearr_46848 = state_46804;
(statearr_46848[(13)] = inst_46656__$1);

(statearr_46848[(14)] = inst_46654__$1);

(statearr_46848[(18)] = inst_46672);

(statearr_46848[(16)] = inst_46655__$1);

(statearr_46848[(17)] = inst_46657__$1);

return statearr_46848;
})();
var statearr_46849_48954 = state_46804__$1;
(statearr_46849_48954[(2)] = null);

(statearr_46849_48954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (21))){
var inst_46713 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46853_48955 = state_46804__$1;
(statearr_46853_48955[(2)] = inst_46713);

(statearr_46853_48955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (31))){
var inst_46740 = (state_46804[(9)]);
var inst_46745 = done(null);
var inst_46747 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46740);
var state_46804__$1 = (function (){var statearr_46854 = state_46804;
(statearr_46854[(19)] = inst_46745);

return statearr_46854;
})();
var statearr_46855_48957 = state_46804__$1;
(statearr_46855_48957[(2)] = inst_46747);

(statearr_46855_48957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (32))){
var inst_46732 = (state_46804[(20)]);
var inst_46733 = (state_46804[(10)]);
var inst_46735 = (state_46804[(12)]);
var inst_46734 = (state_46804[(21)]);
var inst_46749 = (state_46804[(2)]);
var inst_46750 = (inst_46735 + (1));
var tmp46850 = inst_46732;
var tmp46851 = inst_46733;
var tmp46852 = inst_46734;
var inst_46732__$1 = tmp46850;
var inst_46733__$1 = tmp46851;
var inst_46734__$1 = tmp46852;
var inst_46735__$1 = inst_46750;
var state_46804__$1 = (function (){var statearr_46861 = state_46804;
(statearr_46861[(20)] = inst_46732__$1);

(statearr_46861[(10)] = inst_46733__$1);

(statearr_46861[(12)] = inst_46735__$1);

(statearr_46861[(21)] = inst_46734__$1);

(statearr_46861[(22)] = inst_46749);

return statearr_46861;
})();
var statearr_46862_48958 = state_46804__$1;
(statearr_46862_48958[(2)] = null);

(statearr_46862_48958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (40))){
var inst_46765 = (state_46804[(23)]);
var inst_46769 = done(null);
var inst_46770 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46765);
var state_46804__$1 = (function (){var statearr_46866 = state_46804;
(statearr_46866[(24)] = inst_46769);

return statearr_46866;
})();
var statearr_46868_48970 = state_46804__$1;
(statearr_46868_48970[(2)] = inst_46770);

(statearr_46868_48970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (33))){
var inst_46753 = (state_46804[(25)]);
var inst_46756 = cljs.core.chunked_seq_QMARK_(inst_46753);
var state_46804__$1 = state_46804;
if(inst_46756){
var statearr_46871_48981 = state_46804__$1;
(statearr_46871_48981[(1)] = (36));

} else {
var statearr_46873_48986 = state_46804__$1;
(statearr_46873_48986[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (13))){
var inst_46666 = (state_46804[(26)]);
var inst_46669 = cljs.core.async.close_BANG_(inst_46666);
var state_46804__$1 = state_46804;
var statearr_46874_48991 = state_46804__$1;
(statearr_46874_48991[(2)] = inst_46669);

(statearr_46874_48991[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (22))){
var inst_46702 = (state_46804[(8)]);
var inst_46706 = cljs.core.async.close_BANG_(inst_46702);
var state_46804__$1 = state_46804;
var statearr_46878_49000 = state_46804__$1;
(statearr_46878_49000[(2)] = inst_46706);

(statearr_46878_49000[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (36))){
var inst_46753 = (state_46804[(25)]);
var inst_46758 = cljs.core.chunk_first(inst_46753);
var inst_46759 = cljs.core.chunk_rest(inst_46753);
var inst_46762 = cljs.core.count(inst_46758);
var inst_46732 = inst_46759;
var inst_46733 = inst_46758;
var inst_46734 = inst_46762;
var inst_46735 = (0);
var state_46804__$1 = (function (){var statearr_46880 = state_46804;
(statearr_46880[(20)] = inst_46732);

(statearr_46880[(10)] = inst_46733);

(statearr_46880[(12)] = inst_46735);

(statearr_46880[(21)] = inst_46734);

return statearr_46880;
})();
var statearr_46883_49012 = state_46804__$1;
(statearr_46883_49012[(2)] = null);

(statearr_46883_49012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (41))){
var inst_46753 = (state_46804[(25)]);
var inst_46772 = (state_46804[(2)]);
var inst_46773 = cljs.core.next(inst_46753);
var inst_46732 = inst_46773;
var inst_46733 = null;
var inst_46734 = (0);
var inst_46735 = (0);
var state_46804__$1 = (function (){var statearr_46887 = state_46804;
(statearr_46887[(20)] = inst_46732);

(statearr_46887[(10)] = inst_46733);

(statearr_46887[(12)] = inst_46735);

(statearr_46887[(27)] = inst_46772);

(statearr_46887[(21)] = inst_46734);

return statearr_46887;
})();
var statearr_46889_49020 = state_46804__$1;
(statearr_46889_49020[(2)] = null);

(statearr_46889_49020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (43))){
var state_46804__$1 = state_46804;
var statearr_46890_49021 = state_46804__$1;
(statearr_46890_49021[(2)] = null);

(statearr_46890_49021[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (29))){
var inst_46781 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46893_49024 = state_46804__$1;
(statearr_46893_49024[(2)] = inst_46781);

(statearr_46893_49024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (44))){
var inst_46791 = (state_46804[(2)]);
var state_46804__$1 = (function (){var statearr_46894 = state_46804;
(statearr_46894[(28)] = inst_46791);

return statearr_46894;
})();
var statearr_46895_49027 = state_46804__$1;
(statearr_46895_49027[(2)] = null);

(statearr_46895_49027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (6))){
var inst_46723 = (state_46804[(29)]);
var inst_46722 = cljs.core.deref(cs);
var inst_46723__$1 = cljs.core.keys(inst_46722);
var inst_46724 = cljs.core.count(inst_46723__$1);
var inst_46725 = cljs.core.reset_BANG_(dctr,inst_46724);
var inst_46731 = cljs.core.seq(inst_46723__$1);
var inst_46732 = inst_46731;
var inst_46733 = null;
var inst_46734 = (0);
var inst_46735 = (0);
var state_46804__$1 = (function (){var statearr_46900 = state_46804;
(statearr_46900[(20)] = inst_46732);

(statearr_46900[(10)] = inst_46733);

(statearr_46900[(29)] = inst_46723__$1);

(statearr_46900[(12)] = inst_46735);

(statearr_46900[(21)] = inst_46734);

(statearr_46900[(30)] = inst_46725);

return statearr_46900;
})();
var statearr_46903_49031 = state_46804__$1;
(statearr_46903_49031[(2)] = null);

(statearr_46903_49031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (28))){
var inst_46732 = (state_46804[(20)]);
var inst_46753 = (state_46804[(25)]);
var inst_46753__$1 = cljs.core.seq(inst_46732);
var state_46804__$1 = (function (){var statearr_46904 = state_46804;
(statearr_46904[(25)] = inst_46753__$1);

return statearr_46904;
})();
if(inst_46753__$1){
var statearr_46909_49032 = state_46804__$1;
(statearr_46909_49032[(1)] = (33));

} else {
var statearr_46912_49033 = state_46804__$1;
(statearr_46912_49033[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (25))){
var inst_46735 = (state_46804[(12)]);
var inst_46734 = (state_46804[(21)]);
var inst_46737 = (inst_46735 < inst_46734);
var inst_46738 = inst_46737;
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46738)){
var statearr_46914_49037 = state_46804__$1;
(statearr_46914_49037[(1)] = (27));

} else {
var statearr_46921_49040 = state_46804__$1;
(statearr_46921_49040[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (34))){
var state_46804__$1 = state_46804;
var statearr_46922_49043 = state_46804__$1;
(statearr_46922_49043[(2)] = null);

(statearr_46922_49043[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (17))){
var state_46804__$1 = state_46804;
var statearr_46923_49045 = state_46804__$1;
(statearr_46923_49045[(2)] = null);

(statearr_46923_49045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (3))){
var inst_46796 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46804__$1,inst_46796);
} else {
if((state_val_46806 === (12))){
var inst_46718 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46925_49049 = state_46804__$1;
(statearr_46925_49049[(2)] = inst_46718);

(statearr_46925_49049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (2))){
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46804__$1,(4),ch);
} else {
if((state_val_46806 === (23))){
var state_46804__$1 = state_46804;
var statearr_46926_49050 = state_46804__$1;
(statearr_46926_49050[(2)] = null);

(statearr_46926_49050[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (35))){
var inst_46779 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46930_49053 = state_46804__$1;
(statearr_46930_49053[(2)] = inst_46779);

(statearr_46930_49053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (19))){
var inst_46679 = (state_46804[(7)]);
var inst_46687 = cljs.core.chunk_first(inst_46679);
var inst_46688 = cljs.core.chunk_rest(inst_46679);
var inst_46689 = cljs.core.count(inst_46687);
var inst_46654 = inst_46688;
var inst_46655 = inst_46687;
var inst_46656 = inst_46689;
var inst_46657 = (0);
var state_46804__$1 = (function (){var statearr_46933 = state_46804;
(statearr_46933[(13)] = inst_46656);

(statearr_46933[(14)] = inst_46654);

(statearr_46933[(16)] = inst_46655);

(statearr_46933[(17)] = inst_46657);

return statearr_46933;
})();
var statearr_46934_49056 = state_46804__$1;
(statearr_46934_49056[(2)] = null);

(statearr_46934_49056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (11))){
var inst_46654 = (state_46804[(14)]);
var inst_46679 = (state_46804[(7)]);
var inst_46679__$1 = cljs.core.seq(inst_46654);
var state_46804__$1 = (function (){var statearr_46935 = state_46804;
(statearr_46935[(7)] = inst_46679__$1);

return statearr_46935;
})();
if(inst_46679__$1){
var statearr_46936_49057 = state_46804__$1;
(statearr_46936_49057[(1)] = (16));

} else {
var statearr_46937_49058 = state_46804__$1;
(statearr_46937_49058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (9))){
var inst_46720 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46941_49059 = state_46804__$1;
(statearr_46941_49059[(2)] = inst_46720);

(statearr_46941_49059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (5))){
var inst_46651 = cljs.core.deref(cs);
var inst_46652 = cljs.core.seq(inst_46651);
var inst_46654 = inst_46652;
var inst_46655 = null;
var inst_46656 = (0);
var inst_46657 = (0);
var state_46804__$1 = (function (){var statearr_46942 = state_46804;
(statearr_46942[(13)] = inst_46656);

(statearr_46942[(14)] = inst_46654);

(statearr_46942[(16)] = inst_46655);

(statearr_46942[(17)] = inst_46657);

return statearr_46942;
})();
var statearr_46943_49062 = state_46804__$1;
(statearr_46943_49062[(2)] = null);

(statearr_46943_49062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (14))){
var state_46804__$1 = state_46804;
var statearr_46947_49068 = state_46804__$1;
(statearr_46947_49068[(2)] = null);

(statearr_46947_49068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (45))){
var inst_46788 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46948_49071 = state_46804__$1;
(statearr_46948_49071[(2)] = inst_46788);

(statearr_46948_49071[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (26))){
var inst_46723 = (state_46804[(29)]);
var inst_46783 = (state_46804[(2)]);
var inst_46784 = cljs.core.seq(inst_46723);
var state_46804__$1 = (function (){var statearr_46950 = state_46804;
(statearr_46950[(31)] = inst_46783);

return statearr_46950;
})();
if(inst_46784){
var statearr_46951_49075 = state_46804__$1;
(statearr_46951_49075[(1)] = (42));

} else {
var statearr_46953_49076 = state_46804__$1;
(statearr_46953_49076[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (16))){
var inst_46679 = (state_46804[(7)]);
var inst_46684 = cljs.core.chunked_seq_QMARK_(inst_46679);
var state_46804__$1 = state_46804;
if(inst_46684){
var statearr_46954_49081 = state_46804__$1;
(statearr_46954_49081[(1)] = (19));

} else {
var statearr_46956_49082 = state_46804__$1;
(statearr_46956_49082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (38))){
var inst_46776 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46957_49086 = state_46804__$1;
(statearr_46957_49086[(2)] = inst_46776);

(statearr_46957_49086[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (30))){
var state_46804__$1 = state_46804;
var statearr_46958_49088 = state_46804__$1;
(statearr_46958_49088[(2)] = null);

(statearr_46958_49088[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (10))){
var inst_46655 = (state_46804[(16)]);
var inst_46657 = (state_46804[(17)]);
var inst_46665 = cljs.core._nth(inst_46655,inst_46657);
var inst_46666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46665,(0),null);
var inst_46667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46665,(1),null);
var state_46804__$1 = (function (){var statearr_46959 = state_46804;
(statearr_46959[(26)] = inst_46666);

return statearr_46959;
})();
if(cljs.core.truth_(inst_46667)){
var statearr_46960_49090 = state_46804__$1;
(statearr_46960_49090[(1)] = (13));

} else {
var statearr_46961_49091 = state_46804__$1;
(statearr_46961_49091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (18))){
var inst_46716 = (state_46804[(2)]);
var state_46804__$1 = state_46804;
var statearr_46963_49093 = state_46804__$1;
(statearr_46963_49093[(2)] = inst_46716);

(statearr_46963_49093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (42))){
var state_46804__$1 = state_46804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46804__$1,(45),dchan);
} else {
if((state_val_46806 === (37))){
var inst_46643 = (state_46804[(11)]);
var inst_46753 = (state_46804[(25)]);
var inst_46765 = (state_46804[(23)]);
var inst_46765__$1 = cljs.core.first(inst_46753);
var inst_46766 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46765__$1,inst_46643,done);
var state_46804__$1 = (function (){var statearr_46966 = state_46804;
(statearr_46966[(23)] = inst_46765__$1);

return statearr_46966;
})();
if(cljs.core.truth_(inst_46766)){
var statearr_46973_49101 = state_46804__$1;
(statearr_46973_49101[(1)] = (39));

} else {
var statearr_46974_49102 = state_46804__$1;
(statearr_46974_49102[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (8))){
var inst_46656 = (state_46804[(13)]);
var inst_46657 = (state_46804[(17)]);
var inst_46659 = (inst_46657 < inst_46656);
var inst_46660 = inst_46659;
var state_46804__$1 = state_46804;
if(cljs.core.truth_(inst_46660)){
var statearr_46978_49103 = state_46804__$1;
(statearr_46978_49103[(1)] = (10));

} else {
var statearr_46980_49104 = state_46804__$1;
(statearr_46980_49104[(1)] = (11));

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
});})(c__45808__auto___48919,cs,m,dchan,dctr,done))
;
return ((function (switch__45525__auto__,c__45808__auto___48919,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__45526__auto__ = null;
var cljs$core$async$mult_$_state_machine__45526__auto____0 = (function (){
var statearr_46981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46981[(0)] = cljs$core$async$mult_$_state_machine__45526__auto__);

(statearr_46981[(1)] = (1));

return statearr_46981;
});
var cljs$core$async$mult_$_state_machine__45526__auto____1 = (function (state_46804){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_46804);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e46988){if((e46988 instanceof Object)){
var ex__45529__auto__ = e46988;
var statearr_46989_49110 = state_46804;
(statearr_46989_49110[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49111 = state_46804;
state_46804 = G__49111;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45526__auto__ = function(state_46804){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45526__auto____1.call(this,state_46804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45526__auto____0;
cljs$core$async$mult_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45526__auto____1;
return cljs$core$async$mult_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___48919,cs,m,dchan,dctr,done))
})();
var state__45810__auto__ = (function (){var statearr_46997 = f__45809__auto__();
(statearr_46997[(6)] = c__45808__auto___48919);

return statearr_46997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___48919,cs,m,dchan,dctr,done))
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
var G__47003 = arguments.length;
switch (G__47003) {
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
var len__4730__auto___49127 = arguments.length;
var i__4731__auto___49128 = (0);
while(true){
if((i__4731__auto___49128 < len__4730__auto___49127)){
args__4736__auto__.push((arguments[i__4731__auto___49128]));

var G__49129 = (i__4731__auto___49128 + (1));
i__4731__auto___49128 = G__49129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47054){
var map__47055 = p__47054;
var map__47055__$1 = (((((!((map__47055 == null))))?(((((map__47055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47055):map__47055);
var opts = map__47055__$1;
var statearr_47062_49131 = state;
(statearr_47062_49131[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__47055,map__47055__$1,opts){
return (function (val){
var statearr_47065_49133 = state;
(statearr_47065_49133[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__47055,map__47055__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_47068_49136 = state;
(statearr_47068_49136[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47047){
var G__47048 = cljs.core.first(seq47047);
var seq47047__$1 = cljs.core.next(seq47047);
var G__47049 = cljs.core.first(seq47047__$1);
var seq47047__$2 = cljs.core.next(seq47047__$1);
var G__47050 = cljs.core.first(seq47047__$2);
var seq47047__$3 = cljs.core.next(seq47047__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47048,G__47049,G__47050,seq47047__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47072 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47073){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47073 = meta47073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47074,meta47073__$1){
var self__ = this;
var _47074__$1 = this;
return (new cljs.core.async.t_cljs$core$async47072(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47073__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_47074){
var self__ = this;
var _47074__$1 = this;
return self__.meta47073;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async47072.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47073","meta47073",-860111684,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async47072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47072";

cljs.core.async.t_cljs$core$async47072.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47072");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47072.
 */
cljs.core.async.__GT_t_cljs$core$async47072 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async47072(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47073){
return (new cljs.core.async.t_cljs$core$async47072(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47073));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async47072(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45808__auto___49162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_47209){
var state_val_47210 = (state_47209[(1)]);
if((state_val_47210 === (7))){
var inst_47113 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47211_49163 = state_47209__$1;
(statearr_47211_49163[(2)] = inst_47113);

(statearr_47211_49163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (20))){
var inst_47126 = (state_47209[(7)]);
var state_47209__$1 = state_47209;
var statearr_47212_49164 = state_47209__$1;
(statearr_47212_49164[(2)] = inst_47126);

(statearr_47212_49164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (27))){
var state_47209__$1 = state_47209;
var statearr_47217_49167 = state_47209__$1;
(statearr_47217_49167[(2)] = null);

(statearr_47217_49167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (1))){
var inst_47099 = (state_47209[(8)]);
var inst_47099__$1 = calc_state();
var inst_47102 = (inst_47099__$1 == null);
var inst_47103 = cljs.core.not(inst_47102);
var state_47209__$1 = (function (){var statearr_47218 = state_47209;
(statearr_47218[(8)] = inst_47099__$1);

return statearr_47218;
})();
if(inst_47103){
var statearr_47219_49171 = state_47209__$1;
(statearr_47219_49171[(1)] = (2));

} else {
var statearr_47220_49172 = state_47209__$1;
(statearr_47220_49172[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (24))){
var inst_47159 = (state_47209[(9)]);
var inst_47150 = (state_47209[(10)]);
var inst_47178 = (state_47209[(11)]);
var inst_47178__$1 = (inst_47150.cljs$core$IFn$_invoke$arity$1 ? inst_47150.cljs$core$IFn$_invoke$arity$1(inst_47159) : inst_47150.call(null,inst_47159));
var state_47209__$1 = (function (){var statearr_47222 = state_47209;
(statearr_47222[(11)] = inst_47178__$1);

return statearr_47222;
})();
if(cljs.core.truth_(inst_47178__$1)){
var statearr_47223_49175 = state_47209__$1;
(statearr_47223_49175[(1)] = (29));

} else {
var statearr_47224_49176 = state_47209__$1;
(statearr_47224_49176[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (4))){
var inst_47116 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47116)){
var statearr_47227_49177 = state_47209__$1;
(statearr_47227_49177[(1)] = (8));

} else {
var statearr_47228_49178 = state_47209__$1;
(statearr_47228_49178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (15))){
var inst_47144 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47144)){
var statearr_47232_49179 = state_47209__$1;
(statearr_47232_49179[(1)] = (19));

} else {
var statearr_47233_49180 = state_47209__$1;
(statearr_47233_49180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (21))){
var inst_47149 = (state_47209[(12)]);
var inst_47149__$1 = (state_47209[(2)]);
var inst_47150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47149__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47149__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47149__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47209__$1 = (function (){var statearr_47234 = state_47209;
(statearr_47234[(12)] = inst_47149__$1);

(statearr_47234[(10)] = inst_47150);

(statearr_47234[(13)] = inst_47151);

return statearr_47234;
})();
return cljs.core.async.ioc_alts_BANG_(state_47209__$1,(22),inst_47152);
} else {
if((state_val_47210 === (31))){
var inst_47186 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47186)){
var statearr_47238_49183 = state_47209__$1;
(statearr_47238_49183[(1)] = (32));

} else {
var statearr_47241_49184 = state_47209__$1;
(statearr_47241_49184[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (32))){
var inst_47158 = (state_47209[(14)]);
var state_47209__$1 = state_47209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47209__$1,(35),out,inst_47158);
} else {
if((state_val_47210 === (33))){
var inst_47149 = (state_47209[(12)]);
var inst_47126 = inst_47149;
var state_47209__$1 = (function (){var statearr_47244 = state_47209;
(statearr_47244[(7)] = inst_47126);

return statearr_47244;
})();
var statearr_47245_49188 = state_47209__$1;
(statearr_47245_49188[(2)] = null);

(statearr_47245_49188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (13))){
var inst_47126 = (state_47209[(7)]);
var inst_47133 = inst_47126.cljs$lang$protocol_mask$partition0$;
var inst_47134 = (inst_47133 & (64));
var inst_47135 = inst_47126.cljs$core$ISeq$;
var inst_47136 = (cljs.core.PROTOCOL_SENTINEL === inst_47135);
var inst_47137 = ((inst_47134) || (inst_47136));
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47137)){
var statearr_47254_49191 = state_47209__$1;
(statearr_47254_49191[(1)] = (16));

} else {
var statearr_47258_49192 = state_47209__$1;
(statearr_47258_49192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (22))){
var inst_47159 = (state_47209[(9)]);
var inst_47158 = (state_47209[(14)]);
var inst_47157 = (state_47209[(2)]);
var inst_47158__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47157,(0),null);
var inst_47159__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47157,(1),null);
var inst_47160 = (inst_47158__$1 == null);
var inst_47161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47159__$1,change);
var inst_47162 = ((inst_47160) || (inst_47161));
var state_47209__$1 = (function (){var statearr_47260 = state_47209;
(statearr_47260[(9)] = inst_47159__$1);

(statearr_47260[(14)] = inst_47158__$1);

return statearr_47260;
})();
if(cljs.core.truth_(inst_47162)){
var statearr_47261_49196 = state_47209__$1;
(statearr_47261_49196[(1)] = (23));

} else {
var statearr_47263_49197 = state_47209__$1;
(statearr_47263_49197[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (36))){
var inst_47149 = (state_47209[(12)]);
var inst_47126 = inst_47149;
var state_47209__$1 = (function (){var statearr_47264 = state_47209;
(statearr_47264[(7)] = inst_47126);

return statearr_47264;
})();
var statearr_47265_49198 = state_47209__$1;
(statearr_47265_49198[(2)] = null);

(statearr_47265_49198[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (29))){
var inst_47178 = (state_47209[(11)]);
var state_47209__$1 = state_47209;
var statearr_47268_49200 = state_47209__$1;
(statearr_47268_49200[(2)] = inst_47178);

(statearr_47268_49200[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (6))){
var state_47209__$1 = state_47209;
var statearr_47269_49201 = state_47209__$1;
(statearr_47269_49201[(2)] = false);

(statearr_47269_49201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (28))){
var inst_47171 = (state_47209[(2)]);
var inst_47172 = calc_state();
var inst_47126 = inst_47172;
var state_47209__$1 = (function (){var statearr_47271 = state_47209;
(statearr_47271[(7)] = inst_47126);

(statearr_47271[(15)] = inst_47171);

return statearr_47271;
})();
var statearr_47273_49204 = state_47209__$1;
(statearr_47273_49204[(2)] = null);

(statearr_47273_49204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (25))){
var inst_47200 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47275_49205 = state_47209__$1;
(statearr_47275_49205[(2)] = inst_47200);

(statearr_47275_49205[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (34))){
var inst_47198 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47276_49208 = state_47209__$1;
(statearr_47276_49208[(2)] = inst_47198);

(statearr_47276_49208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (17))){
var state_47209__$1 = state_47209;
var statearr_47278_49209 = state_47209__$1;
(statearr_47278_49209[(2)] = false);

(statearr_47278_49209[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (3))){
var state_47209__$1 = state_47209;
var statearr_47279_49210 = state_47209__$1;
(statearr_47279_49210[(2)] = false);

(statearr_47279_49210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (12))){
var inst_47202 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47209__$1,inst_47202);
} else {
if((state_val_47210 === (2))){
var inst_47099 = (state_47209[(8)]);
var inst_47105 = inst_47099.cljs$lang$protocol_mask$partition0$;
var inst_47106 = (inst_47105 & (64));
var inst_47107 = inst_47099.cljs$core$ISeq$;
var inst_47108 = (cljs.core.PROTOCOL_SENTINEL === inst_47107);
var inst_47109 = ((inst_47106) || (inst_47108));
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47109)){
var statearr_47284_49211 = state_47209__$1;
(statearr_47284_49211[(1)] = (5));

} else {
var statearr_47286_49212 = state_47209__$1;
(statearr_47286_49212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (23))){
var inst_47158 = (state_47209[(14)]);
var inst_47165 = (inst_47158 == null);
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47165)){
var statearr_47287_49213 = state_47209__$1;
(statearr_47287_49213[(1)] = (26));

} else {
var statearr_47288_49214 = state_47209__$1;
(statearr_47288_49214[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (35))){
var inst_47189 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
if(cljs.core.truth_(inst_47189)){
var statearr_47289_49215 = state_47209__$1;
(statearr_47289_49215[(1)] = (36));

} else {
var statearr_47291_49216 = state_47209__$1;
(statearr_47291_49216[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (19))){
var inst_47126 = (state_47209[(7)]);
var inst_47146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47126);
var state_47209__$1 = state_47209;
var statearr_47292_49217 = state_47209__$1;
(statearr_47292_49217[(2)] = inst_47146);

(statearr_47292_49217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (11))){
var inst_47126 = (state_47209[(7)]);
var inst_47130 = (inst_47126 == null);
var inst_47131 = cljs.core.not(inst_47130);
var state_47209__$1 = state_47209;
if(inst_47131){
var statearr_47293_49218 = state_47209__$1;
(statearr_47293_49218[(1)] = (13));

} else {
var statearr_47294_49219 = state_47209__$1;
(statearr_47294_49219[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (9))){
var inst_47099 = (state_47209[(8)]);
var state_47209__$1 = state_47209;
var statearr_47296_49220 = state_47209__$1;
(statearr_47296_49220[(2)] = inst_47099);

(statearr_47296_49220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (5))){
var state_47209__$1 = state_47209;
var statearr_47297_49221 = state_47209__$1;
(statearr_47297_49221[(2)] = true);

(statearr_47297_49221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (14))){
var state_47209__$1 = state_47209;
var statearr_47298_49222 = state_47209__$1;
(statearr_47298_49222[(2)] = false);

(statearr_47298_49222[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (26))){
var inst_47159 = (state_47209[(9)]);
var inst_47168 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47159);
var state_47209__$1 = state_47209;
var statearr_47300_49223 = state_47209__$1;
(statearr_47300_49223[(2)] = inst_47168);

(statearr_47300_49223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (16))){
var state_47209__$1 = state_47209;
var statearr_47301_49224 = state_47209__$1;
(statearr_47301_49224[(2)] = true);

(statearr_47301_49224[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (38))){
var inst_47194 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47302_49225 = state_47209__$1;
(statearr_47302_49225[(2)] = inst_47194);

(statearr_47302_49225[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (30))){
var inst_47159 = (state_47209[(9)]);
var inst_47150 = (state_47209[(10)]);
var inst_47151 = (state_47209[(13)]);
var inst_47181 = cljs.core.empty_QMARK_(inst_47150);
var inst_47182 = (inst_47151.cljs$core$IFn$_invoke$arity$1 ? inst_47151.cljs$core$IFn$_invoke$arity$1(inst_47159) : inst_47151.call(null,inst_47159));
var inst_47183 = cljs.core.not(inst_47182);
var inst_47184 = ((inst_47181) && (inst_47183));
var state_47209__$1 = state_47209;
var statearr_47303_49226 = state_47209__$1;
(statearr_47303_49226[(2)] = inst_47184);

(statearr_47303_49226[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (10))){
var inst_47099 = (state_47209[(8)]);
var inst_47121 = (state_47209[(2)]);
var inst_47122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47121,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47121,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47121,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47126 = inst_47099;
var state_47209__$1 = (function (){var statearr_47304 = state_47209;
(statearr_47304[(7)] = inst_47126);

(statearr_47304[(16)] = inst_47123);

(statearr_47304[(17)] = inst_47122);

(statearr_47304[(18)] = inst_47124);

return statearr_47304;
})();
var statearr_47306_49227 = state_47209__$1;
(statearr_47306_49227[(2)] = null);

(statearr_47306_49227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (18))){
var inst_47141 = (state_47209[(2)]);
var state_47209__$1 = state_47209;
var statearr_47308_49228 = state_47209__$1;
(statearr_47308_49228[(2)] = inst_47141);

(statearr_47308_49228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (37))){
var state_47209__$1 = state_47209;
var statearr_47309_49229 = state_47209__$1;
(statearr_47309_49229[(2)] = null);

(statearr_47309_49229[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47210 === (8))){
var inst_47099 = (state_47209[(8)]);
var inst_47118 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47099);
var state_47209__$1 = state_47209;
var statearr_47311_49230 = state_47209__$1;
(statearr_47311_49230[(2)] = inst_47118);

(statearr_47311_49230[(1)] = (10));


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
});})(c__45808__auto___49162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__45525__auto__,c__45808__auto___49162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__45526__auto__ = null;
var cljs$core$async$mix_$_state_machine__45526__auto____0 = (function (){
var statearr_47313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47313[(0)] = cljs$core$async$mix_$_state_machine__45526__auto__);

(statearr_47313[(1)] = (1));

return statearr_47313;
});
var cljs$core$async$mix_$_state_machine__45526__auto____1 = (function (state_47209){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_47209);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e47316){if((e47316 instanceof Object)){
var ex__45529__auto__ = e47316;
var statearr_47320_49233 = state_47209;
(statearr_47320_49233[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49234 = state_47209;
state_47209 = G__49234;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45526__auto__ = function(state_47209){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45526__auto____1.call(this,state_47209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45526__auto____0;
cljs$core$async$mix_$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45526__auto____1;
return cljs$core$async$mix_$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__45810__auto__ = (function (){var statearr_47324 = f__45809__auto__();
(statearr_47324[(6)] = c__45808__auto___49162);

return statearr_47324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49162,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__47346 = arguments.length;
switch (G__47346) {
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
var G__47358 = arguments.length;
switch (G__47358) {
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
return (function (p1__47356_SHARP_){
if(cljs.core.truth_((p1__47356_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47356_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47356_SHARP_.call(null,topic)))){
return p1__47356_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47356_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47363 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47364){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47364 = meta47364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_47365,meta47364__$1){
var self__ = this;
var _47365__$1 = this;
return (new cljs.core.async.t_cljs$core$async47363(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47364__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_47365){
var self__ = this;
var _47365__$1 = this;
return self__.meta47364;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47364","meta47364",-1520986562,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async47363.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47363";

cljs.core.async.t_cljs$core$async47363.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47363");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47363.
 */
cljs.core.async.__GT_t_cljs$core$async47363 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async47363(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47364){
return (new cljs.core.async.t_cljs$core$async47363(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47364));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async47363(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45808__auto___49254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49254,mults,ensure_mult,p){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49254,mults,ensure_mult,p){
return (function (state_47475){
var state_val_47476 = (state_47475[(1)]);
if((state_val_47476 === (7))){
var inst_47471 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
var statearr_47480_49256 = state_47475__$1;
(statearr_47480_49256[(2)] = inst_47471);

(statearr_47480_49256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (20))){
var state_47475__$1 = state_47475;
var statearr_47486_49258 = state_47475__$1;
(statearr_47486_49258[(2)] = null);

(statearr_47486_49258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (1))){
var state_47475__$1 = state_47475;
var statearr_47489_49259 = state_47475__$1;
(statearr_47489_49259[(2)] = null);

(statearr_47489_49259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (24))){
var inst_47454 = (state_47475[(7)]);
var inst_47463 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47454);
var state_47475__$1 = state_47475;
var statearr_47491_49260 = state_47475__$1;
(statearr_47491_49260[(2)] = inst_47463);

(statearr_47491_49260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (4))){
var inst_47402 = (state_47475[(8)]);
var inst_47402__$1 = (state_47475[(2)]);
var inst_47403 = (inst_47402__$1 == null);
var state_47475__$1 = (function (){var statearr_47494 = state_47475;
(statearr_47494[(8)] = inst_47402__$1);

return statearr_47494;
})();
if(cljs.core.truth_(inst_47403)){
var statearr_47500_49265 = state_47475__$1;
(statearr_47500_49265[(1)] = (5));

} else {
var statearr_47501_49266 = state_47475__$1;
(statearr_47501_49266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (15))){
var inst_47448 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
var statearr_47506_49267 = state_47475__$1;
(statearr_47506_49267[(2)] = inst_47448);

(statearr_47506_49267[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (21))){
var inst_47468 = (state_47475[(2)]);
var state_47475__$1 = (function (){var statearr_47507 = state_47475;
(statearr_47507[(9)] = inst_47468);

return statearr_47507;
})();
var statearr_47508_49269 = state_47475__$1;
(statearr_47508_49269[(2)] = null);

(statearr_47508_49269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (13))){
var inst_47430 = (state_47475[(10)]);
var inst_47432 = cljs.core.chunked_seq_QMARK_(inst_47430);
var state_47475__$1 = state_47475;
if(inst_47432){
var statearr_47510_49271 = state_47475__$1;
(statearr_47510_49271[(1)] = (16));

} else {
var statearr_47511_49272 = state_47475__$1;
(statearr_47511_49272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (22))){
var inst_47460 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
if(cljs.core.truth_(inst_47460)){
var statearr_47513_49274 = state_47475__$1;
(statearr_47513_49274[(1)] = (23));

} else {
var statearr_47514_49275 = state_47475__$1;
(statearr_47514_49275[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (6))){
var inst_47456 = (state_47475[(11)]);
var inst_47454 = (state_47475[(7)]);
var inst_47402 = (state_47475[(8)]);
var inst_47454__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47402) : topic_fn.call(null,inst_47402));
var inst_47455 = cljs.core.deref(mults);
var inst_47456__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47455,inst_47454__$1);
var state_47475__$1 = (function (){var statearr_47517 = state_47475;
(statearr_47517[(11)] = inst_47456__$1);

(statearr_47517[(7)] = inst_47454__$1);

return statearr_47517;
})();
if(cljs.core.truth_(inst_47456__$1)){
var statearr_47519_49281 = state_47475__$1;
(statearr_47519_49281[(1)] = (19));

} else {
var statearr_47520_49282 = state_47475__$1;
(statearr_47520_49282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (25))){
var inst_47465 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
var statearr_47521_49283 = state_47475__$1;
(statearr_47521_49283[(2)] = inst_47465);

(statearr_47521_49283[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (17))){
var inst_47430 = (state_47475[(10)]);
var inst_47439 = cljs.core.first(inst_47430);
var inst_47440 = cljs.core.async.muxch_STAR_(inst_47439);
var inst_47441 = cljs.core.async.close_BANG_(inst_47440);
var inst_47442 = cljs.core.next(inst_47430);
var inst_47412 = inst_47442;
var inst_47413 = null;
var inst_47414 = (0);
var inst_47415 = (0);
var state_47475__$1 = (function (){var statearr_47524 = state_47475;
(statearr_47524[(12)] = inst_47441);

(statearr_47524[(13)] = inst_47412);

(statearr_47524[(14)] = inst_47413);

(statearr_47524[(15)] = inst_47414);

(statearr_47524[(16)] = inst_47415);

return statearr_47524;
})();
var statearr_47525_49288 = state_47475__$1;
(statearr_47525_49288[(2)] = null);

(statearr_47525_49288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (3))){
var inst_47473 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47475__$1,inst_47473);
} else {
if((state_val_47476 === (12))){
var inst_47450 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
var statearr_47528_49289 = state_47475__$1;
(statearr_47528_49289[(2)] = inst_47450);

(statearr_47528_49289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (2))){
var state_47475__$1 = state_47475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47475__$1,(4),ch);
} else {
if((state_val_47476 === (23))){
var state_47475__$1 = state_47475;
var statearr_47529_49293 = state_47475__$1;
(statearr_47529_49293[(2)] = null);

(statearr_47529_49293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (19))){
var inst_47456 = (state_47475[(11)]);
var inst_47402 = (state_47475[(8)]);
var inst_47458 = cljs.core.async.muxch_STAR_(inst_47456);
var state_47475__$1 = state_47475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47475__$1,(22),inst_47458,inst_47402);
} else {
if((state_val_47476 === (11))){
var inst_47412 = (state_47475[(13)]);
var inst_47430 = (state_47475[(10)]);
var inst_47430__$1 = cljs.core.seq(inst_47412);
var state_47475__$1 = (function (){var statearr_47537 = state_47475;
(statearr_47537[(10)] = inst_47430__$1);

return statearr_47537;
})();
if(inst_47430__$1){
var statearr_47539_49295 = state_47475__$1;
(statearr_47539_49295[(1)] = (13));

} else {
var statearr_47540_49296 = state_47475__$1;
(statearr_47540_49296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (9))){
var inst_47452 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
var statearr_47541_49301 = state_47475__$1;
(statearr_47541_49301[(2)] = inst_47452);

(statearr_47541_49301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (5))){
var inst_47409 = cljs.core.deref(mults);
var inst_47410 = cljs.core.vals(inst_47409);
var inst_47411 = cljs.core.seq(inst_47410);
var inst_47412 = inst_47411;
var inst_47413 = null;
var inst_47414 = (0);
var inst_47415 = (0);
var state_47475__$1 = (function (){var statearr_47552 = state_47475;
(statearr_47552[(13)] = inst_47412);

(statearr_47552[(14)] = inst_47413);

(statearr_47552[(15)] = inst_47414);

(statearr_47552[(16)] = inst_47415);

return statearr_47552;
})();
var statearr_47553_49302 = state_47475__$1;
(statearr_47553_49302[(2)] = null);

(statearr_47553_49302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (14))){
var state_47475__$1 = state_47475;
var statearr_47558_49303 = state_47475__$1;
(statearr_47558_49303[(2)] = null);

(statearr_47558_49303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (16))){
var inst_47430 = (state_47475[(10)]);
var inst_47434 = cljs.core.chunk_first(inst_47430);
var inst_47435 = cljs.core.chunk_rest(inst_47430);
var inst_47436 = cljs.core.count(inst_47434);
var inst_47412 = inst_47435;
var inst_47413 = inst_47434;
var inst_47414 = inst_47436;
var inst_47415 = (0);
var state_47475__$1 = (function (){var statearr_47563 = state_47475;
(statearr_47563[(13)] = inst_47412);

(statearr_47563[(14)] = inst_47413);

(statearr_47563[(15)] = inst_47414);

(statearr_47563[(16)] = inst_47415);

return statearr_47563;
})();
var statearr_47567_49306 = state_47475__$1;
(statearr_47567_49306[(2)] = null);

(statearr_47567_49306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (10))){
var inst_47412 = (state_47475[(13)]);
var inst_47413 = (state_47475[(14)]);
var inst_47414 = (state_47475[(15)]);
var inst_47415 = (state_47475[(16)]);
var inst_47422 = cljs.core._nth(inst_47413,inst_47415);
var inst_47423 = cljs.core.async.muxch_STAR_(inst_47422);
var inst_47424 = cljs.core.async.close_BANG_(inst_47423);
var inst_47426 = (inst_47415 + (1));
var tmp47554 = inst_47412;
var tmp47555 = inst_47413;
var tmp47556 = inst_47414;
var inst_47412__$1 = tmp47554;
var inst_47413__$1 = tmp47555;
var inst_47414__$1 = tmp47556;
var inst_47415__$1 = inst_47426;
var state_47475__$1 = (function (){var statearr_47570 = state_47475;
(statearr_47570[(13)] = inst_47412__$1);

(statearr_47570[(14)] = inst_47413__$1);

(statearr_47570[(17)] = inst_47424);

(statearr_47570[(15)] = inst_47414__$1);

(statearr_47570[(16)] = inst_47415__$1);

return statearr_47570;
})();
var statearr_47574_49307 = state_47475__$1;
(statearr_47574_49307[(2)] = null);

(statearr_47574_49307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (18))){
var inst_47445 = (state_47475[(2)]);
var state_47475__$1 = state_47475;
var statearr_47575_49310 = state_47475__$1;
(statearr_47575_49310[(2)] = inst_47445);

(statearr_47575_49310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47476 === (8))){
var inst_47414 = (state_47475[(15)]);
var inst_47415 = (state_47475[(16)]);
var inst_47419 = (inst_47415 < inst_47414);
var inst_47420 = inst_47419;
var state_47475__$1 = state_47475;
if(cljs.core.truth_(inst_47420)){
var statearr_47576_49311 = state_47475__$1;
(statearr_47576_49311[(1)] = (10));

} else {
var statearr_47577_49312 = state_47475__$1;
(statearr_47577_49312[(1)] = (11));

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
});})(c__45808__auto___49254,mults,ensure_mult,p))
;
return ((function (switch__45525__auto__,c__45808__auto___49254,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_47580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47580[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_47580[(1)] = (1));

return statearr_47580;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_47475){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_47475);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e47581){if((e47581 instanceof Object)){
var ex__45529__auto__ = e47581;
var statearr_47582_49315 = state_47475;
(statearr_47582_49315[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49316 = state_47475;
state_47475 = G__49316;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_47475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_47475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49254,mults,ensure_mult,p))
})();
var state__45810__auto__ = (function (){var statearr_47585 = f__45809__auto__();
(statearr_47585[(6)] = c__45808__auto___49254);

return statearr_47585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49254,mults,ensure_mult,p))
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
var G__47591 = arguments.length;
switch (G__47591) {
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
var G__47603 = arguments.length;
switch (G__47603) {
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
var G__47609 = arguments.length;
switch (G__47609) {
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
var c__45808__auto___49325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_47665){
var state_val_47666 = (state_47665[(1)]);
if((state_val_47666 === (7))){
var state_47665__$1 = state_47665;
var statearr_47675_49326 = state_47665__$1;
(statearr_47675_49326[(2)] = null);

(statearr_47675_49326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (1))){
var state_47665__$1 = state_47665;
var statearr_47680_49327 = state_47665__$1;
(statearr_47680_49327[(2)] = null);

(statearr_47680_49327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (4))){
var inst_47616 = (state_47665[(7)]);
var inst_47618 = (inst_47616 < cnt);
var state_47665__$1 = state_47665;
if(cljs.core.truth_(inst_47618)){
var statearr_47682_49328 = state_47665__$1;
(statearr_47682_49328[(1)] = (6));

} else {
var statearr_47683_49329 = state_47665__$1;
(statearr_47683_49329[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (15))){
var inst_47657 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47684_49330 = state_47665__$1;
(statearr_47684_49330[(2)] = inst_47657);

(statearr_47684_49330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (13))){
var inst_47649 = cljs.core.async.close_BANG_(out);
var state_47665__$1 = state_47665;
var statearr_47685_49332 = state_47665__$1;
(statearr_47685_49332[(2)] = inst_47649);

(statearr_47685_49332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (6))){
var state_47665__$1 = state_47665;
var statearr_47688_49333 = state_47665__$1;
(statearr_47688_49333[(2)] = null);

(statearr_47688_49333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (3))){
var inst_47659 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47665__$1,inst_47659);
} else {
if((state_val_47666 === (12))){
var inst_47645 = (state_47665[(8)]);
var inst_47645__$1 = (state_47665[(2)]);
var inst_47646 = cljs.core.some(cljs.core.nil_QMARK_,inst_47645__$1);
var state_47665__$1 = (function (){var statearr_47699 = state_47665;
(statearr_47699[(8)] = inst_47645__$1);

return statearr_47699;
})();
if(cljs.core.truth_(inst_47646)){
var statearr_47702_49336 = state_47665__$1;
(statearr_47702_49336[(1)] = (13));

} else {
var statearr_47704_49337 = state_47665__$1;
(statearr_47704_49337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (2))){
var inst_47615 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47616 = (0);
var state_47665__$1 = (function (){var statearr_47706 = state_47665;
(statearr_47706[(7)] = inst_47616);

(statearr_47706[(9)] = inst_47615);

return statearr_47706;
})();
var statearr_47710_49338 = state_47665__$1;
(statearr_47710_49338[(2)] = null);

(statearr_47710_49338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (11))){
var inst_47616 = (state_47665[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47665,(10),Object,null,(9));
var inst_47632 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47616) : chs__$1.call(null,inst_47616));
var inst_47633 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47616) : done.call(null,inst_47616));
var inst_47634 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47632,inst_47633);
var state_47665__$1 = state_47665;
var statearr_47712_49339 = state_47665__$1;
(statearr_47712_49339[(2)] = inst_47634);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (9))){
var inst_47616 = (state_47665[(7)]);
var inst_47636 = (state_47665[(2)]);
var inst_47637 = (inst_47616 + (1));
var inst_47616__$1 = inst_47637;
var state_47665__$1 = (function (){var statearr_47713 = state_47665;
(statearr_47713[(10)] = inst_47636);

(statearr_47713[(7)] = inst_47616__$1);

return statearr_47713;
})();
var statearr_47714_49341 = state_47665__$1;
(statearr_47714_49341[(2)] = null);

(statearr_47714_49341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (5))){
var inst_47643 = (state_47665[(2)]);
var state_47665__$1 = (function (){var statearr_47723 = state_47665;
(statearr_47723[(11)] = inst_47643);

return statearr_47723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47665__$1,(12),dchan);
} else {
if((state_val_47666 === (14))){
var inst_47645 = (state_47665[(8)]);
var inst_47652 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47645);
var state_47665__$1 = state_47665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47665__$1,(16),out,inst_47652);
} else {
if((state_val_47666 === (16))){
var inst_47654 = (state_47665[(2)]);
var state_47665__$1 = (function (){var statearr_47729 = state_47665;
(statearr_47729[(12)] = inst_47654);

return statearr_47729;
})();
var statearr_47731_49342 = state_47665__$1;
(statearr_47731_49342[(2)] = null);

(statearr_47731_49342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (10))){
var inst_47625 = (state_47665[(2)]);
var inst_47626 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47665__$1 = (function (){var statearr_47732 = state_47665;
(statearr_47732[(13)] = inst_47625);

return statearr_47732;
})();
var statearr_47734_49343 = state_47665__$1;
(statearr_47734_49343[(2)] = inst_47626);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47666 === (8))){
var inst_47641 = (state_47665[(2)]);
var state_47665__$1 = state_47665;
var statearr_47735_49344 = state_47665__$1;
(statearr_47735_49344[(2)] = inst_47641);

(statearr_47735_49344[(1)] = (5));


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
});})(c__45808__auto___49325,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__45525__auto__,c__45808__auto___49325,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_47746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47746[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_47746[(1)] = (1));

return statearr_47746;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_47665){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_47665);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e47749){if((e47749 instanceof Object)){
var ex__45529__auto__ = e47749;
var statearr_47750_49346 = state_47665;
(statearr_47750_49346[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49347 = state_47665;
state_47665 = G__49347;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_47665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_47665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49325,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__45810__auto__ = (function (){var statearr_47758 = f__45809__auto__();
(statearr_47758[(6)] = c__45808__auto___49325);

return statearr_47758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49325,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__47762 = arguments.length;
switch (G__47762) {
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
var c__45808__auto___49349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49349,out){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49349,out){
return (function (state_47799){
var state_val_47800 = (state_47799[(1)]);
if((state_val_47800 === (7))){
var inst_47776 = (state_47799[(7)]);
var inst_47777 = (state_47799[(8)]);
var inst_47776__$1 = (state_47799[(2)]);
var inst_47777__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47776__$1,(0),null);
var inst_47778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47776__$1,(1),null);
var inst_47779 = (inst_47777__$1 == null);
var state_47799__$1 = (function (){var statearr_47803 = state_47799;
(statearr_47803[(7)] = inst_47776__$1);

(statearr_47803[(9)] = inst_47778);

(statearr_47803[(8)] = inst_47777__$1);

return statearr_47803;
})();
if(cljs.core.truth_(inst_47779)){
var statearr_47804_49352 = state_47799__$1;
(statearr_47804_49352[(1)] = (8));

} else {
var statearr_47805_49353 = state_47799__$1;
(statearr_47805_49353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (1))){
var inst_47766 = cljs.core.vec(chs);
var inst_47767 = inst_47766;
var state_47799__$1 = (function (){var statearr_47806 = state_47799;
(statearr_47806[(10)] = inst_47767);

return statearr_47806;
})();
var statearr_47807_49355 = state_47799__$1;
(statearr_47807_49355[(2)] = null);

(statearr_47807_49355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (4))){
var inst_47767 = (state_47799[(10)]);
var state_47799__$1 = state_47799;
return cljs.core.async.ioc_alts_BANG_(state_47799__$1,(7),inst_47767);
} else {
if((state_val_47800 === (6))){
var inst_47795 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
var statearr_47810_49356 = state_47799__$1;
(statearr_47810_49356[(2)] = inst_47795);

(statearr_47810_49356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (3))){
var inst_47797 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47799__$1,inst_47797);
} else {
if((state_val_47800 === (2))){
var inst_47767 = (state_47799[(10)]);
var inst_47769 = cljs.core.count(inst_47767);
var inst_47770 = (inst_47769 > (0));
var state_47799__$1 = state_47799;
if(cljs.core.truth_(inst_47770)){
var statearr_47812_49357 = state_47799__$1;
(statearr_47812_49357[(1)] = (4));

} else {
var statearr_47813_49358 = state_47799__$1;
(statearr_47813_49358[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (11))){
var inst_47767 = (state_47799[(10)]);
var inst_47788 = (state_47799[(2)]);
var tmp47811 = inst_47767;
var inst_47767__$1 = tmp47811;
var state_47799__$1 = (function (){var statearr_47816 = state_47799;
(statearr_47816[(10)] = inst_47767__$1);

(statearr_47816[(11)] = inst_47788);

return statearr_47816;
})();
var statearr_47817_49359 = state_47799__$1;
(statearr_47817_49359[(2)] = null);

(statearr_47817_49359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (9))){
var inst_47777 = (state_47799[(8)]);
var state_47799__$1 = state_47799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47799__$1,(11),out,inst_47777);
} else {
if((state_val_47800 === (5))){
var inst_47793 = cljs.core.async.close_BANG_(out);
var state_47799__$1 = state_47799;
var statearr_47821_49361 = state_47799__$1;
(statearr_47821_49361[(2)] = inst_47793);

(statearr_47821_49361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (10))){
var inst_47791 = (state_47799[(2)]);
var state_47799__$1 = state_47799;
var statearr_47823_49362 = state_47799__$1;
(statearr_47823_49362[(2)] = inst_47791);

(statearr_47823_49362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47800 === (8))){
var inst_47776 = (state_47799[(7)]);
var inst_47767 = (state_47799[(10)]);
var inst_47778 = (state_47799[(9)]);
var inst_47777 = (state_47799[(8)]);
var inst_47781 = (function (){var cs = inst_47767;
var vec__47772 = inst_47776;
var v = inst_47777;
var c = inst_47778;
return ((function (cs,vec__47772,v,c,inst_47776,inst_47767,inst_47778,inst_47777,state_val_47800,c__45808__auto___49349,out){
return (function (p1__47760_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47760_SHARP_);
});
;})(cs,vec__47772,v,c,inst_47776,inst_47767,inst_47778,inst_47777,state_val_47800,c__45808__auto___49349,out))
})();
var inst_47784 = cljs.core.filterv(inst_47781,inst_47767);
var inst_47767__$1 = inst_47784;
var state_47799__$1 = (function (){var statearr_47826 = state_47799;
(statearr_47826[(10)] = inst_47767__$1);

return statearr_47826;
})();
var statearr_47827_49364 = state_47799__$1;
(statearr_47827_49364[(2)] = null);

(statearr_47827_49364[(1)] = (2));


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
});})(c__45808__auto___49349,out))
;
return ((function (switch__45525__auto__,c__45808__auto___49349,out){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_47830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47830[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_47830[(1)] = (1));

return statearr_47830;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_47799){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_47799);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e47834){if((e47834 instanceof Object)){
var ex__45529__auto__ = e47834;
var statearr_47836_49366 = state_47799;
(statearr_47836_49366[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49370 = state_47799;
state_47799 = G__49370;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_47799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_47799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49349,out))
})();
var state__45810__auto__ = (function (){var statearr_47838 = f__45809__auto__();
(statearr_47838[(6)] = c__45808__auto___49349);

return statearr_47838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49349,out))
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
var G__47848 = arguments.length;
switch (G__47848) {
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
var c__45808__auto___49380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49380,out){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49380,out){
return (function (state_47880){
var state_val_47882 = (state_47880[(1)]);
if((state_val_47882 === (7))){
var inst_47861 = (state_47880[(7)]);
var inst_47861__$1 = (state_47880[(2)]);
var inst_47862 = (inst_47861__$1 == null);
var inst_47863 = cljs.core.not(inst_47862);
var state_47880__$1 = (function (){var statearr_47884 = state_47880;
(statearr_47884[(7)] = inst_47861__$1);

return statearr_47884;
})();
if(inst_47863){
var statearr_47885_49385 = state_47880__$1;
(statearr_47885_49385[(1)] = (8));

} else {
var statearr_47886_49386 = state_47880__$1;
(statearr_47886_49386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (1))){
var inst_47856 = (0);
var state_47880__$1 = (function (){var statearr_47887 = state_47880;
(statearr_47887[(8)] = inst_47856);

return statearr_47887;
})();
var statearr_47888_49389 = state_47880__$1;
(statearr_47888_49389[(2)] = null);

(statearr_47888_49389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (4))){
var state_47880__$1 = state_47880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47880__$1,(7),ch);
} else {
if((state_val_47882 === (6))){
var inst_47875 = (state_47880[(2)]);
var state_47880__$1 = state_47880;
var statearr_47889_49392 = state_47880__$1;
(statearr_47889_49392[(2)] = inst_47875);

(statearr_47889_49392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (3))){
var inst_47877 = (state_47880[(2)]);
var inst_47878 = cljs.core.async.close_BANG_(out);
var state_47880__$1 = (function (){var statearr_47891 = state_47880;
(statearr_47891[(9)] = inst_47877);

return statearr_47891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47880__$1,inst_47878);
} else {
if((state_val_47882 === (2))){
var inst_47856 = (state_47880[(8)]);
var inst_47858 = (inst_47856 < n);
var state_47880__$1 = state_47880;
if(cljs.core.truth_(inst_47858)){
var statearr_47894_49393 = state_47880__$1;
(statearr_47894_49393[(1)] = (4));

} else {
var statearr_47896_49394 = state_47880__$1;
(statearr_47896_49394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (11))){
var inst_47856 = (state_47880[(8)]);
var inst_47866 = (state_47880[(2)]);
var inst_47867 = (inst_47856 + (1));
var inst_47856__$1 = inst_47867;
var state_47880__$1 = (function (){var statearr_47897 = state_47880;
(statearr_47897[(10)] = inst_47866);

(statearr_47897[(8)] = inst_47856__$1);

return statearr_47897;
})();
var statearr_47898_49398 = state_47880__$1;
(statearr_47898_49398[(2)] = null);

(statearr_47898_49398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (9))){
var state_47880__$1 = state_47880;
var statearr_47899_49402 = state_47880__$1;
(statearr_47899_49402[(2)] = null);

(statearr_47899_49402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (5))){
var state_47880__$1 = state_47880;
var statearr_47900_49407 = state_47880__$1;
(statearr_47900_49407[(2)] = null);

(statearr_47900_49407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (10))){
var inst_47872 = (state_47880[(2)]);
var state_47880__$1 = state_47880;
var statearr_47902_49408 = state_47880__$1;
(statearr_47902_49408[(2)] = inst_47872);

(statearr_47902_49408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47882 === (8))){
var inst_47861 = (state_47880[(7)]);
var state_47880__$1 = state_47880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47880__$1,(11),out,inst_47861);
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
});})(c__45808__auto___49380,out))
;
return ((function (switch__45525__auto__,c__45808__auto___49380,out){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_47905 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47905[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_47905[(1)] = (1));

return statearr_47905;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_47880){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_47880);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e47907){if((e47907 instanceof Object)){
var ex__45529__auto__ = e47907;
var statearr_47909_49413 = state_47880;
(statearr_47909_49413[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49416 = state_47880;
state_47880 = G__49416;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_47880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_47880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49380,out))
})();
var state__45810__auto__ = (function (){var statearr_47913 = f__45809__auto__();
(statearr_47913[(6)] = c__45808__auto___49380);

return statearr_47913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49380,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47922 = (function (f,ch,meta47923){
this.f = f;
this.ch = ch;
this.meta47923 = meta47923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47924,meta47923__$1){
var self__ = this;
var _47924__$1 = this;
return (new cljs.core.async.t_cljs$core$async47922(self__.f,self__.ch,meta47923__$1));
});

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47924){
var self__ = this;
var _47924__$1 = this;
return self__.meta47923;
});

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47942 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47942 = (function (f,ch,meta47923,_,fn1,meta47943){
this.f = f;
this.ch = ch;
this.meta47923 = meta47923;
this._ = _;
this.fn1 = fn1;
this.meta47943 = meta47943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47944,meta47943__$1){
var self__ = this;
var _47944__$1 = this;
return (new cljs.core.async.t_cljs$core$async47942(self__.f,self__.ch,self__.meta47923,self__._,self__.fn1,meta47943__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47944){
var self__ = this;
var _47944__$1 = this;
return self__.meta47943;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47942.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47942.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47942.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47942.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47917_SHARP_){
var G__47951 = (((p1__47917_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47917_SHARP_) : self__.f.call(null,p1__47917_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47951) : f1.call(null,G__47951));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47942.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47923","meta47923",515230246,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47922","cljs.core.async/t_cljs$core$async47922",471539133,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47943","meta47943",-1512538473,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47942";

cljs.core.async.t_cljs$core$async47942.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47942");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47942.
 */
cljs.core.async.__GT_t_cljs$core$async47942 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47942(f__$1,ch__$1,meta47923__$1,___$2,fn1__$1,meta47943){
return (new cljs.core.async.t_cljs$core$async47942(f__$1,ch__$1,meta47923__$1,___$2,fn1__$1,meta47943));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47942(self__.f,self__.ch,self__.meta47923,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47956 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47956) : self__.f.call(null,G__47956));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47922.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47923","meta47923",515230246,null)], null);
});

cljs.core.async.t_cljs$core$async47922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47922";

cljs.core.async.t_cljs$core$async47922.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47922");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47922.
 */
cljs.core.async.__GT_t_cljs$core$async47922 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47922(f__$1,ch__$1,meta47923){
return (new cljs.core.async.t_cljs$core$async47922(f__$1,ch__$1,meta47923));
});

}

return (new cljs.core.async.t_cljs$core$async47922(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47970 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47970 = (function (f,ch,meta47971){
this.f = f;
this.ch = ch;
this.meta47971 = meta47971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47972,meta47971__$1){
var self__ = this;
var _47972__$1 = this;
return (new cljs.core.async.t_cljs$core$async47970(self__.f,self__.ch,meta47971__$1));
});

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47972){
var self__ = this;
var _47972__$1 = this;
return self__.meta47971;
});

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async47970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47971","meta47971",549371805,null)], null);
});

cljs.core.async.t_cljs$core$async47970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47970";

cljs.core.async.t_cljs$core$async47970.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47970");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47970.
 */
cljs.core.async.__GT_t_cljs$core$async47970 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47970(f__$1,ch__$1,meta47971){
return (new cljs.core.async.t_cljs$core$async47970(f__$1,ch__$1,meta47971));
});

}

return (new cljs.core.async.t_cljs$core$async47970(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47994 = (function (p,ch,meta47995){
this.p = p;
this.ch = ch;
this.meta47995 = meta47995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47996,meta47995__$1){
var self__ = this;
var _47996__$1 = this;
return (new cljs.core.async.t_cljs$core$async47994(self__.p,self__.ch,meta47995__$1));
});

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47996){
var self__ = this;
var _47996__$1 = this;
return self__.meta47995;
});

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47995","meta47995",-1449589813,null)], null);
});

cljs.core.async.t_cljs$core$async47994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47994";

cljs.core.async.t_cljs$core$async47994.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async47994");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47994.
 */
cljs.core.async.__GT_t_cljs$core$async47994 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47994(p__$1,ch__$1,meta47995){
return (new cljs.core.async.t_cljs$core$async47994(p__$1,ch__$1,meta47995));
});

}

return (new cljs.core.async.t_cljs$core$async47994(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48024 = arguments.length;
switch (G__48024) {
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
var c__45808__auto___49445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49445,out){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49445,out){
return (function (state_48047){
var state_val_48048 = (state_48047[(1)]);
if((state_val_48048 === (7))){
var inst_48043 = (state_48047[(2)]);
var state_48047__$1 = state_48047;
var statearr_48049_49447 = state_48047__$1;
(statearr_48049_49447[(2)] = inst_48043);

(statearr_48049_49447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (1))){
var state_48047__$1 = state_48047;
var statearr_48052_49450 = state_48047__$1;
(statearr_48052_49450[(2)] = null);

(statearr_48052_49450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (4))){
var inst_48027 = (state_48047[(7)]);
var inst_48027__$1 = (state_48047[(2)]);
var inst_48029 = (inst_48027__$1 == null);
var state_48047__$1 = (function (){var statearr_48055 = state_48047;
(statearr_48055[(7)] = inst_48027__$1);

return statearr_48055;
})();
if(cljs.core.truth_(inst_48029)){
var statearr_48056_49454 = state_48047__$1;
(statearr_48056_49454[(1)] = (5));

} else {
var statearr_48057_49455 = state_48047__$1;
(statearr_48057_49455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (6))){
var inst_48027 = (state_48047[(7)]);
var inst_48034 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48027) : p.call(null,inst_48027));
var state_48047__$1 = state_48047;
if(cljs.core.truth_(inst_48034)){
var statearr_48061_49456 = state_48047__$1;
(statearr_48061_49456[(1)] = (8));

} else {
var statearr_48064_49458 = state_48047__$1;
(statearr_48064_49458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (3))){
var inst_48045 = (state_48047[(2)]);
var state_48047__$1 = state_48047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48047__$1,inst_48045);
} else {
if((state_val_48048 === (2))){
var state_48047__$1 = state_48047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48047__$1,(4),ch);
} else {
if((state_val_48048 === (11))){
var inst_48037 = (state_48047[(2)]);
var state_48047__$1 = state_48047;
var statearr_48069_49459 = state_48047__$1;
(statearr_48069_49459[(2)] = inst_48037);

(statearr_48069_49459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (9))){
var state_48047__$1 = state_48047;
var statearr_48070_49460 = state_48047__$1;
(statearr_48070_49460[(2)] = null);

(statearr_48070_49460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (5))){
var inst_48032 = cljs.core.async.close_BANG_(out);
var state_48047__$1 = state_48047;
var statearr_48073_49463 = state_48047__$1;
(statearr_48073_49463[(2)] = inst_48032);

(statearr_48073_49463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (10))){
var inst_48040 = (state_48047[(2)]);
var state_48047__$1 = (function (){var statearr_48075 = state_48047;
(statearr_48075[(8)] = inst_48040);

return statearr_48075;
})();
var statearr_48078_49464 = state_48047__$1;
(statearr_48078_49464[(2)] = null);

(statearr_48078_49464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48048 === (8))){
var inst_48027 = (state_48047[(7)]);
var state_48047__$1 = state_48047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48047__$1,(11),out,inst_48027);
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
});})(c__45808__auto___49445,out))
;
return ((function (switch__45525__auto__,c__45808__auto___49445,out){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_48080 = [null,null,null,null,null,null,null,null,null];
(statearr_48080[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_48080[(1)] = (1));

return statearr_48080;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_48047){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_48047);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e48081){if((e48081 instanceof Object)){
var ex__45529__auto__ = e48081;
var statearr_48083_49466 = state_48047;
(statearr_48083_49466[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49472 = state_48047;
state_48047 = G__49472;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_48047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_48047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49445,out))
})();
var state__45810__auto__ = (function (){var statearr_48087 = f__45809__auto__();
(statearr_48087[(6)] = c__45808__auto___49445);

return statearr_48087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49445,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48096 = arguments.length;
switch (G__48096) {
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
var c__45808__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto__){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto__){
return (function (state_48168){
var state_val_48169 = (state_48168[(1)]);
if((state_val_48169 === (7))){
var inst_48164 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48172_49482 = state_48168__$1;
(statearr_48172_49482[(2)] = inst_48164);

(statearr_48172_49482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (20))){
var inst_48132 = (state_48168[(7)]);
var inst_48144 = (state_48168[(2)]);
var inst_48146 = cljs.core.next(inst_48132);
var inst_48115 = inst_48146;
var inst_48116 = null;
var inst_48117 = (0);
var inst_48118 = (0);
var state_48168__$1 = (function (){var statearr_48173 = state_48168;
(statearr_48173[(8)] = inst_48144);

(statearr_48173[(9)] = inst_48117);

(statearr_48173[(10)] = inst_48115);

(statearr_48173[(11)] = inst_48118);

(statearr_48173[(12)] = inst_48116);

return statearr_48173;
})();
var statearr_48175_49484 = state_48168__$1;
(statearr_48175_49484[(2)] = null);

(statearr_48175_49484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (1))){
var state_48168__$1 = state_48168;
var statearr_48176_49487 = state_48168__$1;
(statearr_48176_49487[(2)] = null);

(statearr_48176_49487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (4))){
var inst_48104 = (state_48168[(13)]);
var inst_48104__$1 = (state_48168[(2)]);
var inst_48105 = (inst_48104__$1 == null);
var state_48168__$1 = (function (){var statearr_48177 = state_48168;
(statearr_48177[(13)] = inst_48104__$1);

return statearr_48177;
})();
if(cljs.core.truth_(inst_48105)){
var statearr_48178_49490 = state_48168__$1;
(statearr_48178_49490[(1)] = (5));

} else {
var statearr_48180_49491 = state_48168__$1;
(statearr_48180_49491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (15))){
var state_48168__$1 = state_48168;
var statearr_48184_49492 = state_48168__$1;
(statearr_48184_49492[(2)] = null);

(statearr_48184_49492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (21))){
var state_48168__$1 = state_48168;
var statearr_48185_49493 = state_48168__$1;
(statearr_48185_49493[(2)] = null);

(statearr_48185_49493[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (13))){
var inst_48117 = (state_48168[(9)]);
var inst_48115 = (state_48168[(10)]);
var inst_48118 = (state_48168[(11)]);
var inst_48116 = (state_48168[(12)]);
var inst_48125 = (state_48168[(2)]);
var inst_48126 = (inst_48118 + (1));
var tmp48181 = inst_48117;
var tmp48182 = inst_48115;
var tmp48183 = inst_48116;
var inst_48115__$1 = tmp48182;
var inst_48116__$1 = tmp48183;
var inst_48117__$1 = tmp48181;
var inst_48118__$1 = inst_48126;
var state_48168__$1 = (function (){var statearr_48186 = state_48168;
(statearr_48186[(9)] = inst_48117__$1);

(statearr_48186[(10)] = inst_48115__$1);

(statearr_48186[(11)] = inst_48118__$1);

(statearr_48186[(12)] = inst_48116__$1);

(statearr_48186[(14)] = inst_48125);

return statearr_48186;
})();
var statearr_48187_49502 = state_48168__$1;
(statearr_48187_49502[(2)] = null);

(statearr_48187_49502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (22))){
var state_48168__$1 = state_48168;
var statearr_48189_49508 = state_48168__$1;
(statearr_48189_49508[(2)] = null);

(statearr_48189_49508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (6))){
var inst_48104 = (state_48168[(13)]);
var inst_48113 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48104) : f.call(null,inst_48104));
var inst_48114 = cljs.core.seq(inst_48113);
var inst_48115 = inst_48114;
var inst_48116 = null;
var inst_48117 = (0);
var inst_48118 = (0);
var state_48168__$1 = (function (){var statearr_48190 = state_48168;
(statearr_48190[(9)] = inst_48117);

(statearr_48190[(10)] = inst_48115);

(statearr_48190[(11)] = inst_48118);

(statearr_48190[(12)] = inst_48116);

return statearr_48190;
})();
var statearr_48192_49510 = state_48168__$1;
(statearr_48192_49510[(2)] = null);

(statearr_48192_49510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (17))){
var inst_48132 = (state_48168[(7)]);
var inst_48136 = cljs.core.chunk_first(inst_48132);
var inst_48137 = cljs.core.chunk_rest(inst_48132);
var inst_48138 = cljs.core.count(inst_48136);
var inst_48115 = inst_48137;
var inst_48116 = inst_48136;
var inst_48117 = inst_48138;
var inst_48118 = (0);
var state_48168__$1 = (function (){var statearr_48193 = state_48168;
(statearr_48193[(9)] = inst_48117);

(statearr_48193[(10)] = inst_48115);

(statearr_48193[(11)] = inst_48118);

(statearr_48193[(12)] = inst_48116);

return statearr_48193;
})();
var statearr_48194_49513 = state_48168__$1;
(statearr_48194_49513[(2)] = null);

(statearr_48194_49513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (3))){
var inst_48166 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48168__$1,inst_48166);
} else {
if((state_val_48169 === (12))){
var inst_48154 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48195_49516 = state_48168__$1;
(statearr_48195_49516[(2)] = inst_48154);

(statearr_48195_49516[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (2))){
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48168__$1,(4),in$);
} else {
if((state_val_48169 === (23))){
var inst_48162 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48197_49520 = state_48168__$1;
(statearr_48197_49520[(2)] = inst_48162);

(statearr_48197_49520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (19))){
var inst_48149 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48199_49522 = state_48168__$1;
(statearr_48199_49522[(2)] = inst_48149);

(statearr_48199_49522[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (11))){
var inst_48132 = (state_48168[(7)]);
var inst_48115 = (state_48168[(10)]);
var inst_48132__$1 = cljs.core.seq(inst_48115);
var state_48168__$1 = (function (){var statearr_48201 = state_48168;
(statearr_48201[(7)] = inst_48132__$1);

return statearr_48201;
})();
if(inst_48132__$1){
var statearr_48202_49525 = state_48168__$1;
(statearr_48202_49525[(1)] = (14));

} else {
var statearr_48203_49528 = state_48168__$1;
(statearr_48203_49528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (9))){
var inst_48156 = (state_48168[(2)]);
var inst_48157 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48168__$1 = (function (){var statearr_48204 = state_48168;
(statearr_48204[(15)] = inst_48156);

return statearr_48204;
})();
if(cljs.core.truth_(inst_48157)){
var statearr_48206_49534 = state_48168__$1;
(statearr_48206_49534[(1)] = (21));

} else {
var statearr_48207_49535 = state_48168__$1;
(statearr_48207_49535[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (5))){
var inst_48107 = cljs.core.async.close_BANG_(out);
var state_48168__$1 = state_48168;
var statearr_48210_49542 = state_48168__$1;
(statearr_48210_49542[(2)] = inst_48107);

(statearr_48210_49542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (14))){
var inst_48132 = (state_48168[(7)]);
var inst_48134 = cljs.core.chunked_seq_QMARK_(inst_48132);
var state_48168__$1 = state_48168;
if(inst_48134){
var statearr_48211_49544 = state_48168__$1;
(statearr_48211_49544[(1)] = (17));

} else {
var statearr_48213_49546 = state_48168__$1;
(statearr_48213_49546[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (16))){
var inst_48152 = (state_48168[(2)]);
var state_48168__$1 = state_48168;
var statearr_48214_49548 = state_48168__$1;
(statearr_48214_49548[(2)] = inst_48152);

(statearr_48214_49548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48169 === (10))){
var inst_48118 = (state_48168[(11)]);
var inst_48116 = (state_48168[(12)]);
var inst_48123 = cljs.core._nth(inst_48116,inst_48118);
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48168__$1,(13),out,inst_48123);
} else {
if((state_val_48169 === (18))){
var inst_48132 = (state_48168[(7)]);
var inst_48141 = cljs.core.first(inst_48132);
var state_48168__$1 = state_48168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48168__$1,(20),out,inst_48141);
} else {
if((state_val_48169 === (8))){
var inst_48117 = (state_48168[(9)]);
var inst_48118 = (state_48168[(11)]);
var inst_48120 = (inst_48118 < inst_48117);
var inst_48121 = inst_48120;
var state_48168__$1 = state_48168;
if(cljs.core.truth_(inst_48121)){
var statearr_48219_49549 = state_48168__$1;
(statearr_48219_49549[(1)] = (10));

} else {
var statearr_48220_49550 = state_48168__$1;
(statearr_48220_49550[(1)] = (11));

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
});})(c__45808__auto__))
;
return ((function (switch__45525__auto__,c__45808__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__45526__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45526__auto____0 = (function (){
var statearr_48221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48221[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45526__auto__);

(statearr_48221[(1)] = (1));

return statearr_48221;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45526__auto____1 = (function (state_48168){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_48168);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e48222){if((e48222 instanceof Object)){
var ex__45529__auto__ = e48222;
var statearr_48223_49553 = state_48168;
(statearr_48223_49553[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49554 = state_48168;
state_48168 = G__49554;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45526__auto__ = function(state_48168){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45526__auto____1.call(this,state_48168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45526__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45526__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto__))
})();
var state__45810__auto__ = (function (){var statearr_48225 = f__45809__auto__();
(statearr_48225[(6)] = c__45808__auto__);

return statearr_48225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto__))
);

return c__45808__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48231 = arguments.length;
switch (G__48231) {
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
var G__48235 = arguments.length;
switch (G__48235) {
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
var G__48239 = arguments.length;
switch (G__48239) {
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
var c__45808__auto___49564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49564,out){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49564,out){
return (function (state_48266){
var state_val_48267 = (state_48266[(1)]);
if((state_val_48267 === (7))){
var inst_48261 = (state_48266[(2)]);
var state_48266__$1 = state_48266;
var statearr_48268_49565 = state_48266__$1;
(statearr_48268_49565[(2)] = inst_48261);

(statearr_48268_49565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (1))){
var inst_48242 = null;
var state_48266__$1 = (function (){var statearr_48270 = state_48266;
(statearr_48270[(7)] = inst_48242);

return statearr_48270;
})();
var statearr_48271_49572 = state_48266__$1;
(statearr_48271_49572[(2)] = null);

(statearr_48271_49572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (4))){
var inst_48245 = (state_48266[(8)]);
var inst_48245__$1 = (state_48266[(2)]);
var inst_48246 = (inst_48245__$1 == null);
var inst_48247 = cljs.core.not(inst_48246);
var state_48266__$1 = (function (){var statearr_48273 = state_48266;
(statearr_48273[(8)] = inst_48245__$1);

return statearr_48273;
})();
if(inst_48247){
var statearr_48274_49575 = state_48266__$1;
(statearr_48274_49575[(1)] = (5));

} else {
var statearr_48275_49577 = state_48266__$1;
(statearr_48275_49577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (6))){
var state_48266__$1 = state_48266;
var statearr_48276_49579 = state_48266__$1;
(statearr_48276_49579[(2)] = null);

(statearr_48276_49579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (3))){
var inst_48263 = (state_48266[(2)]);
var inst_48264 = cljs.core.async.close_BANG_(out);
var state_48266__$1 = (function (){var statearr_48278 = state_48266;
(statearr_48278[(9)] = inst_48263);

return statearr_48278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48266__$1,inst_48264);
} else {
if((state_val_48267 === (2))){
var state_48266__$1 = state_48266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48266__$1,(4),ch);
} else {
if((state_val_48267 === (11))){
var inst_48245 = (state_48266[(8)]);
var inst_48255 = (state_48266[(2)]);
var inst_48242 = inst_48245;
var state_48266__$1 = (function (){var statearr_48279 = state_48266;
(statearr_48279[(7)] = inst_48242);

(statearr_48279[(10)] = inst_48255);

return statearr_48279;
})();
var statearr_48280_49581 = state_48266__$1;
(statearr_48280_49581[(2)] = null);

(statearr_48280_49581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (9))){
var inst_48245 = (state_48266[(8)]);
var state_48266__$1 = state_48266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48266__$1,(11),out,inst_48245);
} else {
if((state_val_48267 === (5))){
var inst_48245 = (state_48266[(8)]);
var inst_48242 = (state_48266[(7)]);
var inst_48249 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48245,inst_48242);
var state_48266__$1 = state_48266;
if(inst_48249){
var statearr_48283_49585 = state_48266__$1;
(statearr_48283_49585[(1)] = (8));

} else {
var statearr_48285_49586 = state_48266__$1;
(statearr_48285_49586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (10))){
var inst_48258 = (state_48266[(2)]);
var state_48266__$1 = state_48266;
var statearr_48286_49587 = state_48266__$1;
(statearr_48286_49587[(2)] = inst_48258);

(statearr_48286_49587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48267 === (8))){
var inst_48242 = (state_48266[(7)]);
var tmp48282 = inst_48242;
var inst_48242__$1 = tmp48282;
var state_48266__$1 = (function (){var statearr_48287 = state_48266;
(statearr_48287[(7)] = inst_48242__$1);

return statearr_48287;
})();
var statearr_48288_49590 = state_48266__$1;
(statearr_48288_49590[(2)] = null);

(statearr_48288_49590[(1)] = (2));


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
});})(c__45808__auto___49564,out))
;
return ((function (switch__45525__auto__,c__45808__auto___49564,out){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_48290 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48290[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_48290[(1)] = (1));

return statearr_48290;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_48266){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_48266);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e48291){if((e48291 instanceof Object)){
var ex__45529__auto__ = e48291;
var statearr_48292_49594 = state_48266;
(statearr_48292_49594[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48291;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49596 = state_48266;
state_48266 = G__49596;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_48266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_48266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49564,out))
})();
var state__45810__auto__ = (function (){var statearr_48293 = f__45809__auto__();
(statearr_48293[(6)] = c__45808__auto___49564);

return statearr_48293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49564,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48300 = arguments.length;
switch (G__48300) {
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
var c__45808__auto___49605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49605,out){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49605,out){
return (function (state_48353){
var state_val_48354 = (state_48353[(1)]);
if((state_val_48354 === (7))){
var inst_48349 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
var statearr_48356_49606 = state_48353__$1;
(statearr_48356_49606[(2)] = inst_48349);

(statearr_48356_49606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (1))){
var inst_48307 = (new Array(n));
var inst_48309 = inst_48307;
var inst_48310 = (0);
var state_48353__$1 = (function (){var statearr_48360 = state_48353;
(statearr_48360[(7)] = inst_48309);

(statearr_48360[(8)] = inst_48310);

return statearr_48360;
})();
var statearr_48362_49609 = state_48353__$1;
(statearr_48362_49609[(2)] = null);

(statearr_48362_49609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (4))){
var inst_48316 = (state_48353[(9)]);
var inst_48316__$1 = (state_48353[(2)]);
var inst_48317 = (inst_48316__$1 == null);
var inst_48318 = cljs.core.not(inst_48317);
var state_48353__$1 = (function (){var statearr_48363 = state_48353;
(statearr_48363[(9)] = inst_48316__$1);

return statearr_48363;
})();
if(inst_48318){
var statearr_48364_49611 = state_48353__$1;
(statearr_48364_49611[(1)] = (5));

} else {
var statearr_48365_49615 = state_48353__$1;
(statearr_48365_49615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (15))){
var inst_48343 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
var statearr_48370_49620 = state_48353__$1;
(statearr_48370_49620[(2)] = inst_48343);

(statearr_48370_49620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (13))){
var state_48353__$1 = state_48353;
var statearr_48371_49622 = state_48353__$1;
(statearr_48371_49622[(2)] = null);

(statearr_48371_49622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (6))){
var inst_48310 = (state_48353[(8)]);
var inst_48338 = (inst_48310 > (0));
var state_48353__$1 = state_48353;
if(cljs.core.truth_(inst_48338)){
var statearr_48372_49626 = state_48353__$1;
(statearr_48372_49626[(1)] = (12));

} else {
var statearr_48375_49627 = state_48353__$1;
(statearr_48375_49627[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (3))){
var inst_48351 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48353__$1,inst_48351);
} else {
if((state_val_48354 === (12))){
var inst_48309 = (state_48353[(7)]);
var inst_48341 = cljs.core.vec(inst_48309);
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48353__$1,(15),out,inst_48341);
} else {
if((state_val_48354 === (2))){
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48353__$1,(4),ch);
} else {
if((state_val_48354 === (11))){
var inst_48331 = (state_48353[(2)]);
var inst_48332 = (new Array(n));
var inst_48309 = inst_48332;
var inst_48310 = (0);
var state_48353__$1 = (function (){var statearr_48380 = state_48353;
(statearr_48380[(7)] = inst_48309);

(statearr_48380[(10)] = inst_48331);

(statearr_48380[(8)] = inst_48310);

return statearr_48380;
})();
var statearr_48381_49633 = state_48353__$1;
(statearr_48381_49633[(2)] = null);

(statearr_48381_49633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (9))){
var inst_48309 = (state_48353[(7)]);
var inst_48329 = cljs.core.vec(inst_48309);
var state_48353__$1 = state_48353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48353__$1,(11),out,inst_48329);
} else {
if((state_val_48354 === (5))){
var inst_48309 = (state_48353[(7)]);
var inst_48316 = (state_48353[(9)]);
var inst_48322 = (state_48353[(11)]);
var inst_48310 = (state_48353[(8)]);
var inst_48321 = (inst_48309[inst_48310] = inst_48316);
var inst_48322__$1 = (inst_48310 + (1));
var inst_48325 = (inst_48322__$1 < n);
var state_48353__$1 = (function (){var statearr_48387 = state_48353;
(statearr_48387[(12)] = inst_48321);

(statearr_48387[(11)] = inst_48322__$1);

return statearr_48387;
})();
if(cljs.core.truth_(inst_48325)){
var statearr_48389_49643 = state_48353__$1;
(statearr_48389_49643[(1)] = (8));

} else {
var statearr_48391_49644 = state_48353__$1;
(statearr_48391_49644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (14))){
var inst_48346 = (state_48353[(2)]);
var inst_48347 = cljs.core.async.close_BANG_(out);
var state_48353__$1 = (function (){var statearr_48393 = state_48353;
(statearr_48393[(13)] = inst_48346);

return statearr_48393;
})();
var statearr_48394_49645 = state_48353__$1;
(statearr_48394_49645[(2)] = inst_48347);

(statearr_48394_49645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (10))){
var inst_48335 = (state_48353[(2)]);
var state_48353__$1 = state_48353;
var statearr_48396_49647 = state_48353__$1;
(statearr_48396_49647[(2)] = inst_48335);

(statearr_48396_49647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48354 === (8))){
var inst_48309 = (state_48353[(7)]);
var inst_48322 = (state_48353[(11)]);
var tmp48392 = inst_48309;
var inst_48309__$1 = tmp48392;
var inst_48310 = inst_48322;
var state_48353__$1 = (function (){var statearr_48397 = state_48353;
(statearr_48397[(7)] = inst_48309__$1);

(statearr_48397[(8)] = inst_48310);

return statearr_48397;
})();
var statearr_48399_49649 = state_48353__$1;
(statearr_48399_49649[(2)] = null);

(statearr_48399_49649[(1)] = (2));


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
});})(c__45808__auto___49605,out))
;
return ((function (switch__45525__auto__,c__45808__auto___49605,out){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_48404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48404[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_48404[(1)] = (1));

return statearr_48404;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_48353){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_48353);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e48405){if((e48405 instanceof Object)){
var ex__45529__auto__ = e48405;
var statearr_48407_49654 = state_48353;
(statearr_48407_49654[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49656 = state_48353;
state_48353 = G__49656;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_48353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_48353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49605,out))
})();
var state__45810__auto__ = (function (){var statearr_48408 = f__45809__auto__();
(statearr_48408[(6)] = c__45808__auto___49605);

return statearr_48408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48415 = arguments.length;
switch (G__48415) {
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
var c__45808__auto___49664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___49664,out){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___49664,out){
return (function (state_48472){
var state_val_48473 = (state_48472[(1)]);
if((state_val_48473 === (7))){
var inst_48468 = (state_48472[(2)]);
var state_48472__$1 = state_48472;
var statearr_48482_49666 = state_48472__$1;
(statearr_48482_49666[(2)] = inst_48468);

(statearr_48482_49666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (1))){
var inst_48427 = [];
var inst_48428 = inst_48427;
var inst_48429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48472__$1 = (function (){var statearr_48483 = state_48472;
(statearr_48483[(7)] = inst_48428);

(statearr_48483[(8)] = inst_48429);

return statearr_48483;
})();
var statearr_48485_49668 = state_48472__$1;
(statearr_48485_49668[(2)] = null);

(statearr_48485_49668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (4))){
var inst_48432 = (state_48472[(9)]);
var inst_48432__$1 = (state_48472[(2)]);
var inst_48433 = (inst_48432__$1 == null);
var inst_48434 = cljs.core.not(inst_48433);
var state_48472__$1 = (function (){var statearr_48486 = state_48472;
(statearr_48486[(9)] = inst_48432__$1);

return statearr_48486;
})();
if(inst_48434){
var statearr_48491_49673 = state_48472__$1;
(statearr_48491_49673[(1)] = (5));

} else {
var statearr_48492_49674 = state_48472__$1;
(statearr_48492_49674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (15))){
var inst_48458 = (state_48472[(2)]);
var state_48472__$1 = state_48472;
var statearr_48495_49677 = state_48472__$1;
(statearr_48495_49677[(2)] = inst_48458);

(statearr_48495_49677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (13))){
var state_48472__$1 = state_48472;
var statearr_48496_49680 = state_48472__$1;
(statearr_48496_49680[(2)] = null);

(statearr_48496_49680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (6))){
var inst_48428 = (state_48472[(7)]);
var inst_48453 = inst_48428.length;
var inst_48454 = (inst_48453 > (0));
var state_48472__$1 = state_48472;
if(cljs.core.truth_(inst_48454)){
var statearr_48497_49681 = state_48472__$1;
(statearr_48497_49681[(1)] = (12));

} else {
var statearr_48498_49682 = state_48472__$1;
(statearr_48498_49682[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (3))){
var inst_48470 = (state_48472[(2)]);
var state_48472__$1 = state_48472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48472__$1,inst_48470);
} else {
if((state_val_48473 === (12))){
var inst_48428 = (state_48472[(7)]);
var inst_48456 = cljs.core.vec(inst_48428);
var state_48472__$1 = state_48472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48472__$1,(15),out,inst_48456);
} else {
if((state_val_48473 === (2))){
var state_48472__$1 = state_48472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48472__$1,(4),ch);
} else {
if((state_val_48473 === (11))){
var inst_48432 = (state_48472[(9)]);
var inst_48436 = (state_48472[(10)]);
var inst_48446 = (state_48472[(2)]);
var inst_48447 = [];
var inst_48448 = inst_48447.push(inst_48432);
var inst_48428 = inst_48447;
var inst_48429 = inst_48436;
var state_48472__$1 = (function (){var statearr_48500 = state_48472;
(statearr_48500[(7)] = inst_48428);

(statearr_48500[(11)] = inst_48446);

(statearr_48500[(12)] = inst_48448);

(statearr_48500[(8)] = inst_48429);

return statearr_48500;
})();
var statearr_48501_49692 = state_48472__$1;
(statearr_48501_49692[(2)] = null);

(statearr_48501_49692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (9))){
var inst_48428 = (state_48472[(7)]);
var inst_48444 = cljs.core.vec(inst_48428);
var state_48472__$1 = state_48472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48472__$1,(11),out,inst_48444);
} else {
if((state_val_48473 === (5))){
var inst_48432 = (state_48472[(9)]);
var inst_48436 = (state_48472[(10)]);
var inst_48429 = (state_48472[(8)]);
var inst_48436__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48432) : f.call(null,inst_48432));
var inst_48437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48436__$1,inst_48429);
var inst_48438 = cljs.core.keyword_identical_QMARK_(inst_48429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48439 = ((inst_48437) || (inst_48438));
var state_48472__$1 = (function (){var statearr_48502 = state_48472;
(statearr_48502[(10)] = inst_48436__$1);

return statearr_48502;
})();
if(cljs.core.truth_(inst_48439)){
var statearr_48503_49699 = state_48472__$1;
(statearr_48503_49699[(1)] = (8));

} else {
var statearr_48504_49701 = state_48472__$1;
(statearr_48504_49701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (14))){
var inst_48461 = (state_48472[(2)]);
var inst_48466 = cljs.core.async.close_BANG_(out);
var state_48472__$1 = (function (){var statearr_48506 = state_48472;
(statearr_48506[(13)] = inst_48461);

return statearr_48506;
})();
var statearr_48510_49704 = state_48472__$1;
(statearr_48510_49704[(2)] = inst_48466);

(statearr_48510_49704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (10))){
var inst_48451 = (state_48472[(2)]);
var state_48472__$1 = state_48472;
var statearr_48512_49708 = state_48472__$1;
(statearr_48512_49708[(2)] = inst_48451);

(statearr_48512_49708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48473 === (8))){
var inst_48432 = (state_48472[(9)]);
var inst_48436 = (state_48472[(10)]);
var inst_48428 = (state_48472[(7)]);
var inst_48441 = inst_48428.push(inst_48432);
var tmp48505 = inst_48428;
var inst_48428__$1 = tmp48505;
var inst_48429 = inst_48436;
var state_48472__$1 = (function (){var statearr_48513 = state_48472;
(statearr_48513[(14)] = inst_48441);

(statearr_48513[(7)] = inst_48428__$1);

(statearr_48513[(8)] = inst_48429);

return statearr_48513;
})();
var statearr_48514_49711 = state_48472__$1;
(statearr_48514_49711[(2)] = null);

(statearr_48514_49711[(1)] = (2));


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
});})(c__45808__auto___49664,out))
;
return ((function (switch__45525__auto__,c__45808__auto___49664,out){
return (function() {
var cljs$core$async$state_machine__45526__auto__ = null;
var cljs$core$async$state_machine__45526__auto____0 = (function (){
var statearr_48518 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48518[(0)] = cljs$core$async$state_machine__45526__auto__);

(statearr_48518[(1)] = (1));

return statearr_48518;
});
var cljs$core$async$state_machine__45526__auto____1 = (function (state_48472){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_48472);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e48519){if((e48519 instanceof Object)){
var ex__45529__auto__ = e48519;
var statearr_48520_49715 = state_48472;
(statearr_48520_49715[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48519;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49719 = state_48472;
state_48472 = G__49719;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
cljs$core$async$state_machine__45526__auto__ = function(state_48472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45526__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45526__auto____1.call(this,state_48472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45526__auto____0;
cljs$core$async$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45526__auto____1;
return cljs$core$async$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___49664,out))
})();
var state__45810__auto__ = (function (){var statearr_48522 = f__45809__auto__();
(statearr_48522[(6)] = c__45808__auto___49664);

return statearr_48522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___49664,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
