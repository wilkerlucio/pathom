goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51287 = arguments.length;
switch (G__51287) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51288 = (function (f,blockable,meta51289){
this.f = f;
this.blockable = blockable;
this.meta51289 = meta51289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51290,meta51289__$1){
var self__ = this;
var _51290__$1 = this;
return (new cljs.core.async.t_cljs$core$async51288(self__.f,self__.blockable,meta51289__$1));
});

cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51290){
var self__ = this;
var _51290__$1 = this;
return self__.meta51289;
});

cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async51288.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async51288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51289","meta51289",773177293,null)], null);
});

cljs.core.async.t_cljs$core$async51288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51288";

cljs.core.async.t_cljs$core$async51288.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51288");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51288.
 */
cljs.core.async.__GT_t_cljs$core$async51288 = (function cljs$core$async$__GT_t_cljs$core$async51288(f__$1,blockable__$1,meta51289){
return (new cljs.core.async.t_cljs$core$async51288(f__$1,blockable__$1,meta51289));
});

}

return (new cljs.core.async.t_cljs$core$async51288(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51327 = arguments.length;
switch (G__51327) {
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
var G__51338 = arguments.length;
switch (G__51338) {
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
var G__51353 = arguments.length;
switch (G__51353) {
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
var val_54873 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54873) : fn1.call(null,val_54873));
} else {
cljs.core.async.impl.dispatch.run(((function (val_54873,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_54873) : fn1.call(null,val_54873));
});})(val_54873,ret))
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
var G__51372 = arguments.length;
switch (G__51372) {
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
var n__4607__auto___54899 = n;
var x_54900 = (0);
while(true){
if((x_54900 < n__4607__auto___54899)){
(a[x_54900] = (0));

var G__54901 = (x_54900 + (1));
x_54900 = G__54901;
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

var G__54905 = (i + (1));
i = G__54905;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51393 = (function (flag,meta51394){
this.flag = flag;
this.meta51394 = meta51394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_51395,meta51394__$1){
var self__ = this;
var _51395__$1 = this;
return (new cljs.core.async.t_cljs$core$async51393(self__.flag,meta51394__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async51393.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_51395){
var self__ = this;
var _51395__$1 = this;
return self__.meta51394;
});})(flag))
;

cljs.core.async.t_cljs$core$async51393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async51393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async51393.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51394","meta51394",671017244,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async51393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51393";

cljs.core.async.t_cljs$core$async51393.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51393");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51393.
 */
cljs.core.async.__GT_t_cljs$core$async51393 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51393(flag__$1,meta51394){
return (new cljs.core.async.t_cljs$core$async51393(flag__$1,meta51394));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async51393(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51414 = (function (flag,cb,meta51415){
this.flag = flag;
this.cb = cb;
this.meta51415 = meta51415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async51414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51416,meta51415__$1){
var self__ = this;
var _51416__$1 = this;
return (new cljs.core.async.t_cljs$core$async51414(self__.flag,self__.cb,meta51415__$1));
});

cljs.core.async.t_cljs$core$async51414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51416){
var self__ = this;
var _51416__$1 = this;
return self__.meta51415;
});

cljs.core.async.t_cljs$core$async51414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async51414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async51414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async51414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async51414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51415","meta51415",1411688503,null)], null);
});

cljs.core.async.t_cljs$core$async51414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51414";

cljs.core.async.t_cljs$core$async51414.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async51414");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51414.
 */
cljs.core.async.__GT_t_cljs$core$async51414 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51414(flag__$1,cb__$1,meta51415){
return (new cljs.core.async.t_cljs$core$async51414(flag__$1,cb__$1,meta51415));
});

}

return (new cljs.core.async.t_cljs$core$async51414(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51430_SHARP_){
var G__51435 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51430_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51435) : fret.call(null,G__51435));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51431_SHARP_){
var G__51437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51431_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51437) : fret.call(null,G__51437));
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
var G__54949 = (i + (1));
i = G__54949;
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
var len__4730__auto___54956 = arguments.length;
var i__4731__auto___54957 = (0);
while(true){
if((i__4731__auto___54957 < len__4730__auto___54956)){
args__4736__auto__.push((arguments[i__4731__auto___54957]));

var G__54959 = (i__4731__auto___54957 + (1));
i__4731__auto___54957 = G__54959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51442){
var map__51443 = p__51442;
var map__51443__$1 = (((((!((map__51443 == null))))?(((((map__51443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51443):map__51443);
var opts = map__51443__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51439){
var G__51440 = cljs.core.first(seq51439);
var seq51439__$1 = cljs.core.next(seq51439);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51440,seq51439__$1);
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
var G__51455 = arguments.length;
switch (G__51455) {
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
var c__51169__auto___54983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___54983){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___54983){
return (function (state_51514){
var state_val_51515 = (state_51514[(1)]);
if((state_val_51515 === (7))){
var inst_51498 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51528_54986 = state_51514__$1;
(statearr_51528_54986[(2)] = inst_51498);

(statearr_51528_54986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (1))){
var state_51514__$1 = state_51514;
var statearr_51529_54987 = state_51514__$1;
(statearr_51529_54987[(2)] = null);

(statearr_51529_54987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (4))){
var inst_51476 = (state_51514[(7)]);
var inst_51476__$1 = (state_51514[(2)]);
var inst_51481 = (inst_51476__$1 == null);
var state_51514__$1 = (function (){var statearr_51530 = state_51514;
(statearr_51530[(7)] = inst_51476__$1);

return statearr_51530;
})();
if(cljs.core.truth_(inst_51481)){
var statearr_51531_54992 = state_51514__$1;
(statearr_51531_54992[(1)] = (5));

} else {
var statearr_51532_54993 = state_51514__$1;
(statearr_51532_54993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (13))){
var state_51514__$1 = state_51514;
var statearr_51535_54996 = state_51514__$1;
(statearr_51535_54996[(2)] = null);

(statearr_51535_54996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (6))){
var inst_51476 = (state_51514[(7)]);
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51514__$1,(11),to,inst_51476);
} else {
if((state_val_51515 === (3))){
var inst_51505 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51514__$1,inst_51505);
} else {
if((state_val_51515 === (12))){
var state_51514__$1 = state_51514;
var statearr_51546_55003 = state_51514__$1;
(statearr_51546_55003[(2)] = null);

(statearr_51546_55003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (2))){
var state_51514__$1 = state_51514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51514__$1,(4),from);
} else {
if((state_val_51515 === (11))){
var inst_51490 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
if(cljs.core.truth_(inst_51490)){
var statearr_51553_55008 = state_51514__$1;
(statearr_51553_55008[(1)] = (12));

} else {
var statearr_51554_55009 = state_51514__$1;
(statearr_51554_55009[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (9))){
var state_51514__$1 = state_51514;
var statearr_51556_55011 = state_51514__$1;
(statearr_51556_55011[(2)] = null);

(statearr_51556_55011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (5))){
var state_51514__$1 = state_51514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51558_55016 = state_51514__$1;
(statearr_51558_55016[(1)] = (8));

} else {
var statearr_51559_55019 = state_51514__$1;
(statearr_51559_55019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (14))){
var inst_51496 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51560_55024 = state_51514__$1;
(statearr_51560_55024[(2)] = inst_51496);

(statearr_51560_55024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (10))){
var inst_51487 = (state_51514[(2)]);
var state_51514__$1 = state_51514;
var statearr_51561_55026 = state_51514__$1;
(statearr_51561_55026[(2)] = inst_51487);

(statearr_51561_55026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51515 === (8))){
var inst_51484 = cljs.core.async.close_BANG_(to);
var state_51514__$1 = state_51514;
var statearr_51562_55030 = state_51514__$1;
(statearr_51562_55030[(2)] = inst_51484);

(statearr_51562_55030[(1)] = (10));


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
});})(c__51169__auto___54983))
;
return ((function (switch__50952__auto__,c__51169__auto___54983){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_51564 = [null,null,null,null,null,null,null,null];
(statearr_51564[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_51564[(1)] = (1));

return statearr_51564;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_51514){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51514);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e51568){if((e51568 instanceof Object)){
var ex__50956__auto__ = e51568;
var statearr_51569_55038 = state_51514;
(statearr_51569_55038[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51568;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55042 = state_51514;
state_51514 = G__55042;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_51514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_51514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___54983))
})();
var state__51171__auto__ = (function (){var statearr_51572 = f__51170__auto__();
(statearr_51572[(6)] = c__51169__auto___54983);

return statearr_51572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___54983))
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
return (function (p__51578){
var vec__51579 = p__51578;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51579,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51579,(1),null);
var job = vec__51579;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__51169__auto___55058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___55058,res,vec__51579,v,p,job,jobs,results){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___55058,res,vec__51579,v,p,job,jobs,results){
return (function (state_51589){
var state_val_51591 = (state_51589[(1)]);
if((state_val_51591 === (1))){
var state_51589__$1 = state_51589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51589__$1,(2),res,v);
} else {
if((state_val_51591 === (2))){
var inst_51585 = (state_51589[(2)]);
var inst_51586 = cljs.core.async.close_BANG_(res);
var state_51589__$1 = (function (){var statearr_51592 = state_51589;
(statearr_51592[(7)] = inst_51585);

return statearr_51592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51589__$1,inst_51586);
} else {
return null;
}
}
});})(c__51169__auto___55058,res,vec__51579,v,p,job,jobs,results))
;
return ((function (switch__50952__auto__,c__51169__auto___55058,res,vec__51579,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0 = (function (){
var statearr_51593 = [null,null,null,null,null,null,null,null];
(statearr_51593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__);

(statearr_51593[(1)] = (1));

return statearr_51593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1 = (function (state_51589){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51589);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e51603){if((e51603 instanceof Object)){
var ex__50956__auto__ = e51603;
var statearr_51604_55080 = state_51589;
(statearr_51604_55080[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55090 = state_51589;
state_51589 = G__55090;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = function(state_51589){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1.call(this,state_51589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___55058,res,vec__51579,v,p,job,jobs,results))
})();
var state__51171__auto__ = (function (){var statearr_51606 = f__51170__auto__();
(statearr_51606[(6)] = c__51169__auto___55058);

return statearr_51606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___55058,res,vec__51579,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__51614){
var vec__51619 = p__51614;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51619,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51619,(1),null);
var job = vec__51619;
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
var n__4607__auto___55097 = n;
var __55098 = (0);
while(true){
if((__55098 < n__4607__auto___55097)){
var G__51622_55099 = type;
var G__51622_55100__$1 = (((G__51622_55099 instanceof cljs.core.Keyword))?G__51622_55099.fqn:null);
switch (G__51622_55100__$1) {
case "compute":
var c__51169__auto___55104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55098,c__51169__auto___55104,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (__55098,c__51169__auto___55104,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async){
return (function (state_51636){
var state_val_51637 = (state_51636[(1)]);
if((state_val_51637 === (1))){
var state_51636__$1 = state_51636;
var statearr_51640_55107 = state_51636__$1;
(statearr_51640_55107[(2)] = null);

(statearr_51640_55107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51637 === (2))){
var state_51636__$1 = state_51636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51636__$1,(4),jobs);
} else {
if((state_val_51637 === (3))){
var inst_51633 = (state_51636[(2)]);
var state_51636__$1 = state_51636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51636__$1,inst_51633);
} else {
if((state_val_51637 === (4))){
var inst_51625 = (state_51636[(2)]);
var inst_51626 = process(inst_51625);
var state_51636__$1 = state_51636;
if(cljs.core.truth_(inst_51626)){
var statearr_51649_55117 = state_51636__$1;
(statearr_51649_55117[(1)] = (5));

} else {
var statearr_51650_55122 = state_51636__$1;
(statearr_51650_55122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51637 === (5))){
var state_51636__$1 = state_51636;
var statearr_51656_55123 = state_51636__$1;
(statearr_51656_55123[(2)] = null);

(statearr_51656_55123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51637 === (6))){
var state_51636__$1 = state_51636;
var statearr_51658_55129 = state_51636__$1;
(statearr_51658_55129[(2)] = null);

(statearr_51658_55129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51637 === (7))){
var inst_51631 = (state_51636[(2)]);
var state_51636__$1 = state_51636;
var statearr_51659_55135 = state_51636__$1;
(statearr_51659_55135[(2)] = inst_51631);

(statearr_51659_55135[(1)] = (3));


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
});})(__55098,c__51169__auto___55104,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async))
;
return ((function (__55098,switch__50952__auto__,c__51169__auto___55104,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0 = (function (){
var statearr_51664 = [null,null,null,null,null,null,null];
(statearr_51664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__);

(statearr_51664[(1)] = (1));

return statearr_51664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1 = (function (state_51636){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51636);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e51667){if((e51667 instanceof Object)){
var ex__50956__auto__ = e51667;
var statearr_51668_55148 = state_51636;
(statearr_51668_55148[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55149 = state_51636;
state_51636 = G__55149;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = function(state_51636){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1.call(this,state_51636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__;
})()
;})(__55098,switch__50952__auto__,c__51169__auto___55104,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async))
})();
var state__51171__auto__ = (function (){var statearr_51670 = f__51170__auto__();
(statearr_51670[(6)] = c__51169__auto___55104);

return statearr_51670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(__55098,c__51169__auto___55104,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async))
);


break;
case "async":
var c__51169__auto___55152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55098,c__51169__auto___55152,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (__55098,c__51169__auto___55152,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async){
return (function (state_51690){
var state_val_51691 = (state_51690[(1)]);
if((state_val_51691 === (1))){
var state_51690__$1 = state_51690;
var statearr_51695_55162 = state_51690__$1;
(statearr_51695_55162[(2)] = null);

(statearr_51695_55162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (2))){
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51690__$1,(4),jobs);
} else {
if((state_val_51691 === (3))){
var inst_51687 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51690__$1,inst_51687);
} else {
if((state_val_51691 === (4))){
var inst_51673 = (state_51690[(2)]);
var inst_51679 = async(inst_51673);
var state_51690__$1 = state_51690;
if(cljs.core.truth_(inst_51679)){
var statearr_51699_55163 = state_51690__$1;
(statearr_51699_55163[(1)] = (5));

} else {
var statearr_51702_55164 = state_51690__$1;
(statearr_51702_55164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (5))){
var state_51690__$1 = state_51690;
var statearr_51703_55168 = state_51690__$1;
(statearr_51703_55168[(2)] = null);

(statearr_51703_55168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (6))){
var state_51690__$1 = state_51690;
var statearr_51706_55172 = state_51690__$1;
(statearr_51706_55172[(2)] = null);

(statearr_51706_55172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51691 === (7))){
var inst_51685 = (state_51690[(2)]);
var state_51690__$1 = state_51690;
var statearr_51713_55173 = state_51690__$1;
(statearr_51713_55173[(2)] = inst_51685);

(statearr_51713_55173[(1)] = (3));


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
});})(__55098,c__51169__auto___55152,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async))
;
return ((function (__55098,switch__50952__auto__,c__51169__auto___55152,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0 = (function (){
var statearr_51716 = [null,null,null,null,null,null,null];
(statearr_51716[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__);

(statearr_51716[(1)] = (1));

return statearr_51716;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1 = (function (state_51690){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51690);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e51718){if((e51718 instanceof Object)){
var ex__50956__auto__ = e51718;
var statearr_51723_55175 = state_51690;
(statearr_51723_55175[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51718;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55177 = state_51690;
state_51690 = G__55177;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = function(state_51690){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1.call(this,state_51690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__;
})()
;})(__55098,switch__50952__auto__,c__51169__auto___55152,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async))
})();
var state__51171__auto__ = (function (){var statearr_51725 = f__51170__auto__();
(statearr_51725[(6)] = c__51169__auto___55152);

return statearr_51725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(__55098,c__51169__auto___55152,G__51622_55099,G__51622_55100__$1,n__4607__auto___55097,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51622_55100__$1)].join('')));

}

var G__55179 = (__55098 + (1));
__55098 = G__55179;
continue;
} else {
}
break;
}

var c__51169__auto___55180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___55180,jobs,results,process,async){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___55180,jobs,results,process,async){
return (function (state_51748){
var state_val_51749 = (state_51748[(1)]);
if((state_val_51749 === (7))){
var inst_51744 = (state_51748[(2)]);
var state_51748__$1 = state_51748;
var statearr_51763_55184 = state_51748__$1;
(statearr_51763_55184[(2)] = inst_51744);

(statearr_51763_55184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51749 === (1))){
var state_51748__$1 = state_51748;
var statearr_51764_55189 = state_51748__$1;
(statearr_51764_55189[(2)] = null);

(statearr_51764_55189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51749 === (4))){
var inst_51729 = (state_51748[(7)]);
var inst_51729__$1 = (state_51748[(2)]);
var inst_51730 = (inst_51729__$1 == null);
var state_51748__$1 = (function (){var statearr_51765 = state_51748;
(statearr_51765[(7)] = inst_51729__$1);

return statearr_51765;
})();
if(cljs.core.truth_(inst_51730)){
var statearr_51766_55197 = state_51748__$1;
(statearr_51766_55197[(1)] = (5));

} else {
var statearr_51767_55198 = state_51748__$1;
(statearr_51767_55198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51749 === (6))){
var inst_51734 = (state_51748[(8)]);
var inst_51729 = (state_51748[(7)]);
var inst_51734__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51736 = [inst_51729,inst_51734__$1];
var inst_51737 = (new cljs.core.PersistentVector(null,2,(5),inst_51735,inst_51736,null));
var state_51748__$1 = (function (){var statearr_51769 = state_51748;
(statearr_51769[(8)] = inst_51734__$1);

return statearr_51769;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51748__$1,(8),jobs,inst_51737);
} else {
if((state_val_51749 === (3))){
var inst_51746 = (state_51748[(2)]);
var state_51748__$1 = state_51748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51748__$1,inst_51746);
} else {
if((state_val_51749 === (2))){
var state_51748__$1 = state_51748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51748__$1,(4),from);
} else {
if((state_val_51749 === (9))){
var inst_51741 = (state_51748[(2)]);
var state_51748__$1 = (function (){var statearr_51773 = state_51748;
(statearr_51773[(9)] = inst_51741);

return statearr_51773;
})();
var statearr_51774_55211 = state_51748__$1;
(statearr_51774_55211[(2)] = null);

(statearr_51774_55211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51749 === (5))){
var inst_51732 = cljs.core.async.close_BANG_(jobs);
var state_51748__$1 = state_51748;
var statearr_51782_55213 = state_51748__$1;
(statearr_51782_55213[(2)] = inst_51732);

(statearr_51782_55213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51749 === (8))){
var inst_51734 = (state_51748[(8)]);
var inst_51739 = (state_51748[(2)]);
var state_51748__$1 = (function (){var statearr_51783 = state_51748;
(statearr_51783[(10)] = inst_51739);

return statearr_51783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51748__$1,(9),results,inst_51734);
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
});})(c__51169__auto___55180,jobs,results,process,async))
;
return ((function (switch__50952__auto__,c__51169__auto___55180,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0 = (function (){
var statearr_51785 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51785[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__);

(statearr_51785[(1)] = (1));

return statearr_51785;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1 = (function (state_51748){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51748);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e51787){if((e51787 instanceof Object)){
var ex__50956__auto__ = e51787;
var statearr_51788_55220 = state_51748;
(statearr_51788_55220[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55222 = state_51748;
state_51748 = G__55222;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = function(state_51748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1.call(this,state_51748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___55180,jobs,results,process,async))
})();
var state__51171__auto__ = (function (){var statearr_51792 = f__51170__auto__();
(statearr_51792[(6)] = c__51169__auto___55180);

return statearr_51792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___55180,jobs,results,process,async))
);


var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,jobs,results,process,async){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,jobs,results,process,async){
return (function (state_51842){
var state_val_51843 = (state_51842[(1)]);
if((state_val_51843 === (7))){
var inst_51838 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51846_55228 = state_51842__$1;
(statearr_51846_55228[(2)] = inst_51838);

(statearr_51846_55228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (20))){
var state_51842__$1 = state_51842;
var statearr_51847_55229 = state_51842__$1;
(statearr_51847_55229[(2)] = null);

(statearr_51847_55229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (1))){
var state_51842__$1 = state_51842;
var statearr_51848_55230 = state_51842__$1;
(statearr_51848_55230[(2)] = null);

(statearr_51848_55230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (4))){
var inst_51800 = (state_51842[(7)]);
var inst_51800__$1 = (state_51842[(2)]);
var inst_51801 = (inst_51800__$1 == null);
var state_51842__$1 = (function (){var statearr_51851 = state_51842;
(statearr_51851[(7)] = inst_51800__$1);

return statearr_51851;
})();
if(cljs.core.truth_(inst_51801)){
var statearr_51853_55235 = state_51842__$1;
(statearr_51853_55235[(1)] = (5));

} else {
var statearr_51856_55236 = state_51842__$1;
(statearr_51856_55236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (15))){
var inst_51814 = (state_51842[(8)]);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51842__$1,(18),to,inst_51814);
} else {
if((state_val_51843 === (21))){
var inst_51829 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51860_55246 = state_51842__$1;
(statearr_51860_55246[(2)] = inst_51829);

(statearr_51860_55246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (13))){
var inst_51831 = (state_51842[(2)]);
var state_51842__$1 = (function (){var statearr_51861 = state_51842;
(statearr_51861[(9)] = inst_51831);

return statearr_51861;
})();
var statearr_51862_55250 = state_51842__$1;
(statearr_51862_55250[(2)] = null);

(statearr_51862_55250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (6))){
var inst_51800 = (state_51842[(7)]);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51842__$1,(11),inst_51800);
} else {
if((state_val_51843 === (17))){
var inst_51824 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
if(cljs.core.truth_(inst_51824)){
var statearr_51863_55257 = state_51842__$1;
(statearr_51863_55257[(1)] = (19));

} else {
var statearr_51864_55262 = state_51842__$1;
(statearr_51864_55262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (3))){
var inst_51840 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51842__$1,inst_51840);
} else {
if((state_val_51843 === (12))){
var inst_51811 = (state_51842[(10)]);
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51842__$1,(14),inst_51811);
} else {
if((state_val_51843 === (2))){
var state_51842__$1 = state_51842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51842__$1,(4),results);
} else {
if((state_val_51843 === (19))){
var state_51842__$1 = state_51842;
var statearr_51866_55268 = state_51842__$1;
(statearr_51866_55268[(2)] = null);

(statearr_51866_55268[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (11))){
var inst_51811 = (state_51842[(2)]);
var state_51842__$1 = (function (){var statearr_51868 = state_51842;
(statearr_51868[(10)] = inst_51811);

return statearr_51868;
})();
var statearr_51869_55273 = state_51842__$1;
(statearr_51869_55273[(2)] = null);

(statearr_51869_55273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (9))){
var state_51842__$1 = state_51842;
var statearr_51870_55274 = state_51842__$1;
(statearr_51870_55274[(2)] = null);

(statearr_51870_55274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (5))){
var state_51842__$1 = state_51842;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51871_55275 = state_51842__$1;
(statearr_51871_55275[(1)] = (8));

} else {
var statearr_51872_55276 = state_51842__$1;
(statearr_51872_55276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (14))){
var inst_51818 = (state_51842[(11)]);
var inst_51814 = (state_51842[(8)]);
var inst_51814__$1 = (state_51842[(2)]);
var inst_51817 = (inst_51814__$1 == null);
var inst_51818__$1 = cljs.core.not(inst_51817);
var state_51842__$1 = (function (){var statearr_51873 = state_51842;
(statearr_51873[(11)] = inst_51818__$1);

(statearr_51873[(8)] = inst_51814__$1);

return statearr_51873;
})();
if(inst_51818__$1){
var statearr_51874_55278 = state_51842__$1;
(statearr_51874_55278[(1)] = (15));

} else {
var statearr_51876_55279 = state_51842__$1;
(statearr_51876_55279[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (16))){
var inst_51818 = (state_51842[(11)]);
var state_51842__$1 = state_51842;
var statearr_51878_55280 = state_51842__$1;
(statearr_51878_55280[(2)] = inst_51818);

(statearr_51878_55280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (10))){
var inst_51808 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51881_55281 = state_51842__$1;
(statearr_51881_55281[(2)] = inst_51808);

(statearr_51881_55281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (18))){
var inst_51821 = (state_51842[(2)]);
var state_51842__$1 = state_51842;
var statearr_51883_55282 = state_51842__$1;
(statearr_51883_55282[(2)] = inst_51821);

(statearr_51883_55282[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51843 === (8))){
var inst_51805 = cljs.core.async.close_BANG_(to);
var state_51842__$1 = state_51842;
var statearr_51886_55284 = state_51842__$1;
(statearr_51886_55284[(2)] = inst_51805);

(statearr_51886_55284[(1)] = (10));


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
});})(c__51169__auto__,jobs,results,process,async))
;
return ((function (switch__50952__auto__,c__51169__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0 = (function (){
var statearr_51891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51891[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__);

(statearr_51891[(1)] = (1));

return statearr_51891;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1 = (function (state_51842){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51842);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e51892){if((e51892 instanceof Object)){
var ex__50956__auto__ = e51892;
var statearr_51893_55291 = state_51842;
(statearr_51893_55291[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55294 = state_51842;
state_51842 = G__55294;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__ = function(state_51842){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1.call(this,state_51842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,jobs,results,process,async))
})();
var state__51171__auto__ = (function (){var statearr_51898 = f__51170__auto__();
(statearr_51898[(6)] = c__51169__auto__);

return statearr_51898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,jobs,results,process,async))
);

return c__51169__auto__;
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
var G__51912 = arguments.length;
switch (G__51912) {
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
var G__51927 = arguments.length;
switch (G__51927) {
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
var G__51937 = arguments.length;
switch (G__51937) {
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
var c__51169__auto___55316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___55316,tc,fc){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___55316,tc,fc){
return (function (state_51977){
var state_val_51978 = (state_51977[(1)]);
if((state_val_51978 === (7))){
var inst_51973 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_51986_55317 = state_51977__$1;
(statearr_51986_55317[(2)] = inst_51973);

(statearr_51986_55317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (1))){
var state_51977__$1 = state_51977;
var statearr_51992_55319 = state_51977__$1;
(statearr_51992_55319[(2)] = null);

(statearr_51992_55319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (4))){
var inst_51951 = (state_51977[(7)]);
var inst_51951__$1 = (state_51977[(2)]);
var inst_51952 = (inst_51951__$1 == null);
var state_51977__$1 = (function (){var statearr_51996 = state_51977;
(statearr_51996[(7)] = inst_51951__$1);

return statearr_51996;
})();
if(cljs.core.truth_(inst_51952)){
var statearr_51997_55322 = state_51977__$1;
(statearr_51997_55322[(1)] = (5));

} else {
var statearr_51998_55324 = state_51977__$1;
(statearr_51998_55324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (13))){
var state_51977__$1 = state_51977;
var statearr_51999_55326 = state_51977__$1;
(statearr_51999_55326[(2)] = null);

(statearr_51999_55326[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (6))){
var inst_51951 = (state_51977[(7)]);
var inst_51960 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51951) : p.call(null,inst_51951));
var state_51977__$1 = state_51977;
if(cljs.core.truth_(inst_51960)){
var statearr_52004_55328 = state_51977__$1;
(statearr_52004_55328[(1)] = (9));

} else {
var statearr_52007_55331 = state_51977__$1;
(statearr_52007_55331[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (3))){
var inst_51975 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51977__$1,inst_51975);
} else {
if((state_val_51978 === (12))){
var state_51977__$1 = state_51977;
var statearr_52009_55334 = state_51977__$1;
(statearr_52009_55334[(2)] = null);

(statearr_52009_55334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (2))){
var state_51977__$1 = state_51977;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51977__$1,(4),ch);
} else {
if((state_val_51978 === (11))){
var inst_51951 = (state_51977[(7)]);
var inst_51964 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51977__$1,(8),inst_51964,inst_51951);
} else {
if((state_val_51978 === (9))){
var state_51977__$1 = state_51977;
var statearr_52012_55335 = state_51977__$1;
(statearr_52012_55335[(2)] = tc);

(statearr_52012_55335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (5))){
var inst_51957 = cljs.core.async.close_BANG_(tc);
var inst_51958 = cljs.core.async.close_BANG_(fc);
var state_51977__$1 = (function (){var statearr_52014 = state_51977;
(statearr_52014[(8)] = inst_51957);

return statearr_52014;
})();
var statearr_52015_55340 = state_51977__$1;
(statearr_52015_55340[(2)] = inst_51958);

(statearr_52015_55340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (14))){
var inst_51971 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
var statearr_52016_55342 = state_51977__$1;
(statearr_52016_55342[(2)] = inst_51971);

(statearr_52016_55342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (10))){
var state_51977__$1 = state_51977;
var statearr_52018_55345 = state_51977__$1;
(statearr_52018_55345[(2)] = fc);

(statearr_52018_55345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51978 === (8))){
var inst_51966 = (state_51977[(2)]);
var state_51977__$1 = state_51977;
if(cljs.core.truth_(inst_51966)){
var statearr_52020_55347 = state_51977__$1;
(statearr_52020_55347[(1)] = (12));

} else {
var statearr_52022_55348 = state_51977__$1;
(statearr_52022_55348[(1)] = (13));

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
});})(c__51169__auto___55316,tc,fc))
;
return ((function (switch__50952__auto__,c__51169__auto___55316,tc,fc){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_52023 = [null,null,null,null,null,null,null,null,null];
(statearr_52023[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_52023[(1)] = (1));

return statearr_52023;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_51977){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_51977);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e52024){if((e52024 instanceof Object)){
var ex__50956__auto__ = e52024;
var statearr_52026_55352 = state_51977;
(statearr_52026_55352[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55353 = state_51977;
state_51977 = G__55353;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_51977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_51977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___55316,tc,fc))
})();
var state__51171__auto__ = (function (){var statearr_52031 = f__51170__auto__();
(statearr_52031[(6)] = c__51169__auto___55316);

return statearr_52031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___55316,tc,fc))
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
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__){
return (function (state_52063){
var state_val_52064 = (state_52063[(1)]);
if((state_val_52064 === (7))){
var inst_52056 = (state_52063[(2)]);
var state_52063__$1 = state_52063;
var statearr_52068_55360 = state_52063__$1;
(statearr_52068_55360[(2)] = inst_52056);

(statearr_52068_55360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (1))){
var inst_52040 = init;
var state_52063__$1 = (function (){var statearr_52071 = state_52063;
(statearr_52071[(7)] = inst_52040);

return statearr_52071;
})();
var statearr_52072_55361 = state_52063__$1;
(statearr_52072_55361[(2)] = null);

(statearr_52072_55361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (4))){
var inst_52043 = (state_52063[(8)]);
var inst_52043__$1 = (state_52063[(2)]);
var inst_52044 = (inst_52043__$1 == null);
var state_52063__$1 = (function (){var statearr_52073 = state_52063;
(statearr_52073[(8)] = inst_52043__$1);

return statearr_52073;
})();
if(cljs.core.truth_(inst_52044)){
var statearr_52074_55363 = state_52063__$1;
(statearr_52074_55363[(1)] = (5));

} else {
var statearr_52075_55364 = state_52063__$1;
(statearr_52075_55364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (6))){
var inst_52040 = (state_52063[(7)]);
var inst_52043 = (state_52063[(8)]);
var inst_52047 = (state_52063[(9)]);
var inst_52047__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_52040,inst_52043) : f.call(null,inst_52040,inst_52043));
var inst_52048 = cljs.core.reduced_QMARK_(inst_52047__$1);
var state_52063__$1 = (function (){var statearr_52076 = state_52063;
(statearr_52076[(9)] = inst_52047__$1);

return statearr_52076;
})();
if(inst_52048){
var statearr_52077_55368 = state_52063__$1;
(statearr_52077_55368[(1)] = (8));

} else {
var statearr_52078_55369 = state_52063__$1;
(statearr_52078_55369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (3))){
var inst_52061 = (state_52063[(2)]);
var state_52063__$1 = state_52063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52063__$1,inst_52061);
} else {
if((state_val_52064 === (2))){
var state_52063__$1 = state_52063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52063__$1,(4),ch);
} else {
if((state_val_52064 === (9))){
var inst_52047 = (state_52063[(9)]);
var inst_52040 = inst_52047;
var state_52063__$1 = (function (){var statearr_52083 = state_52063;
(statearr_52083[(7)] = inst_52040);

return statearr_52083;
})();
var statearr_52085_55374 = state_52063__$1;
(statearr_52085_55374[(2)] = null);

(statearr_52085_55374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (5))){
var inst_52040 = (state_52063[(7)]);
var state_52063__$1 = state_52063;
var statearr_52090_55376 = state_52063__$1;
(statearr_52090_55376[(2)] = inst_52040);

(statearr_52090_55376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (10))){
var inst_52054 = (state_52063[(2)]);
var state_52063__$1 = state_52063;
var statearr_52091_55379 = state_52063__$1;
(statearr_52091_55379[(2)] = inst_52054);

(statearr_52091_55379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52064 === (8))){
var inst_52047 = (state_52063[(9)]);
var inst_52050 = cljs.core.deref(inst_52047);
var state_52063__$1 = state_52063;
var statearr_52093_55388 = state_52063__$1;
(statearr_52093_55388[(2)] = inst_52050);

(statearr_52093_55388[(1)] = (10));


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
});})(c__51169__auto__))
;
return ((function (switch__50952__auto__,c__51169__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__50953__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50953__auto____0 = (function (){
var statearr_52096 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52096[(0)] = cljs$core$async$reduce_$_state_machine__50953__auto__);

(statearr_52096[(1)] = (1));

return statearr_52096;
});
var cljs$core$async$reduce_$_state_machine__50953__auto____1 = (function (state_52063){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_52063);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e52097){if((e52097 instanceof Object)){
var ex__50956__auto__ = e52097;
var statearr_52098_55394 = state_52063;
(statearr_52098_55394[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55395 = state_52063;
state_52063 = G__55395;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50953__auto__ = function(state_52063){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50953__auto____1.call(this,state_52063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50953__auto____0;
cljs$core$async$reduce_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50953__auto____1;
return cljs$core$async$reduce_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__))
})();
var state__51171__auto__ = (function (){var statearr_52099 = f__51170__auto__();
(statearr_52099[(6)] = c__51169__auto__);

return statearr_52099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__))
);

return c__51169__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,f__$1){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,f__$1){
return (function (state_52113){
var state_val_52114 = (state_52113[(1)]);
if((state_val_52114 === (1))){
var inst_52105 = cljs.core.async.reduce(f__$1,init,ch);
var state_52113__$1 = state_52113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52113__$1,(2),inst_52105);
} else {
if((state_val_52114 === (2))){
var inst_52107 = (state_52113[(2)]);
var inst_52108 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_52107) : f__$1.call(null,inst_52107));
var state_52113__$1 = state_52113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52113__$1,inst_52108);
} else {
return null;
}
}
});})(c__51169__auto__,f__$1))
;
return ((function (switch__50952__auto__,c__51169__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__50953__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50953__auto____0 = (function (){
var statearr_52119 = [null,null,null,null,null,null,null];
(statearr_52119[(0)] = cljs$core$async$transduce_$_state_machine__50953__auto__);

(statearr_52119[(1)] = (1));

return statearr_52119;
});
var cljs$core$async$transduce_$_state_machine__50953__auto____1 = (function (state_52113){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_52113);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e52120){if((e52120 instanceof Object)){
var ex__50956__auto__ = e52120;
var statearr_52121_55402 = state_52113;
(statearr_52121_55402[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55403 = state_52113;
state_52113 = G__55403;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50953__auto__ = function(state_52113){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50953__auto____1.call(this,state_52113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50953__auto____0;
cljs$core$async$transduce_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50953__auto____1;
return cljs$core$async$transduce_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,f__$1))
})();
var state__51171__auto__ = (function (){var statearr_52125 = f__51170__auto__();
(statearr_52125[(6)] = c__51169__auto__);

return statearr_52125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,f__$1))
);

return c__51169__auto__;
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
var G__52132 = arguments.length;
switch (G__52132) {
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
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__){
return (function (state_52168){
var state_val_52169 = (state_52168[(1)]);
if((state_val_52169 === (7))){
var inst_52147 = (state_52168[(2)]);
var state_52168__$1 = state_52168;
var statearr_52175_55420 = state_52168__$1;
(statearr_52175_55420[(2)] = inst_52147);

(statearr_52175_55420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (1))){
var inst_52135 = cljs.core.seq(coll);
var inst_52137 = inst_52135;
var state_52168__$1 = (function (){var statearr_52176 = state_52168;
(statearr_52176[(7)] = inst_52137);

return statearr_52176;
})();
var statearr_52178_55423 = state_52168__$1;
(statearr_52178_55423[(2)] = null);

(statearr_52178_55423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (4))){
var inst_52137 = (state_52168[(7)]);
var inst_52145 = cljs.core.first(inst_52137);
var state_52168__$1 = state_52168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52168__$1,(7),ch,inst_52145);
} else {
if((state_val_52169 === (13))){
var inst_52161 = (state_52168[(2)]);
var state_52168__$1 = state_52168;
var statearr_52183_55424 = state_52168__$1;
(statearr_52183_55424[(2)] = inst_52161);

(statearr_52183_55424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (6))){
var inst_52150 = (state_52168[(2)]);
var state_52168__$1 = state_52168;
if(cljs.core.truth_(inst_52150)){
var statearr_52185_55427 = state_52168__$1;
(statearr_52185_55427[(1)] = (8));

} else {
var statearr_52187_55428 = state_52168__$1;
(statearr_52187_55428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (3))){
var inst_52165 = (state_52168[(2)]);
var state_52168__$1 = state_52168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52168__$1,inst_52165);
} else {
if((state_val_52169 === (12))){
var state_52168__$1 = state_52168;
var statearr_52190_55434 = state_52168__$1;
(statearr_52190_55434[(2)] = null);

(statearr_52190_55434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (2))){
var inst_52137 = (state_52168[(7)]);
var state_52168__$1 = state_52168;
if(cljs.core.truth_(inst_52137)){
var statearr_52199_55438 = state_52168__$1;
(statearr_52199_55438[(1)] = (4));

} else {
var statearr_52202_55439 = state_52168__$1;
(statearr_52202_55439[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (11))){
var inst_52158 = cljs.core.async.close_BANG_(ch);
var state_52168__$1 = state_52168;
var statearr_52203_55441 = state_52168__$1;
(statearr_52203_55441[(2)] = inst_52158);

(statearr_52203_55441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (9))){
var state_52168__$1 = state_52168;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52205_55442 = state_52168__$1;
(statearr_52205_55442[(1)] = (11));

} else {
var statearr_52206_55443 = state_52168__$1;
(statearr_52206_55443[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (5))){
var inst_52137 = (state_52168[(7)]);
var state_52168__$1 = state_52168;
var statearr_52208_55445 = state_52168__$1;
(statearr_52208_55445[(2)] = inst_52137);

(statearr_52208_55445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (10))){
var inst_52163 = (state_52168[(2)]);
var state_52168__$1 = state_52168;
var statearr_52211_55454 = state_52168__$1;
(statearr_52211_55454[(2)] = inst_52163);

(statearr_52211_55454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52169 === (8))){
var inst_52137 = (state_52168[(7)]);
var inst_52152 = cljs.core.next(inst_52137);
var inst_52137__$1 = inst_52152;
var state_52168__$1 = (function (){var statearr_52212 = state_52168;
(statearr_52212[(7)] = inst_52137__$1);

return statearr_52212;
})();
var statearr_52213_55455 = state_52168__$1;
(statearr_52213_55455[(2)] = null);

(statearr_52213_55455[(1)] = (2));


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
});})(c__51169__auto__))
;
return ((function (switch__50952__auto__,c__51169__auto__){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_52214 = [null,null,null,null,null,null,null,null];
(statearr_52214[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_52214[(1)] = (1));

return statearr_52214;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_52168){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_52168);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e52219){if((e52219 instanceof Object)){
var ex__50956__auto__ = e52219;
var statearr_52220_55460 = state_52168;
(statearr_52220_55460[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52219;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55461 = state_52168;
state_52168 = G__55461;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_52168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_52168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__))
})();
var state__51171__auto__ = (function (){var statearr_52221 = f__51170__auto__();
(statearr_52221[(6)] = c__51169__auto__);

return statearr_52221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__))
);

return c__51169__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52245 = (function (ch,cs,meta52246){
this.ch = ch;
this.cs = cs;
this.meta52246 = meta52246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52247,meta52246__$1){
var self__ = this;
var _52247__$1 = this;
return (new cljs.core.async.t_cljs$core$async52245(self__.ch,self__.cs,meta52246__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52247){
var self__ = this;
var _52247__$1 = this;
return self__.meta52246;
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52246","meta52246",432123094,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async52245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52245";

cljs.core.async.t_cljs$core$async52245.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52245");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52245.
 */
cljs.core.async.__GT_t_cljs$core$async52245 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async52245(ch__$1,cs__$1,meta52246){
return (new cljs.core.async.t_cljs$core$async52245(ch__$1,cs__$1,meta52246));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async52245(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__51169__auto___55488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___55488,cs,m,dchan,dctr,done){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___55488,cs,m,dchan,dctr,done){
return (function (state_52408){
var state_val_52412 = (state_52408[(1)]);
if((state_val_52412 === (7))){
var inst_52404 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52420_55495 = state_52408__$1;
(statearr_52420_55495[(2)] = inst_52404);

(statearr_52420_55495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (20))){
var inst_52292 = (state_52408[(7)]);
var inst_52304 = cljs.core.first(inst_52292);
var inst_52305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52304,(0),null);
var inst_52306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52304,(1),null);
var state_52408__$1 = (function (){var statearr_52430 = state_52408;
(statearr_52430[(8)] = inst_52305);

return statearr_52430;
})();
if(cljs.core.truth_(inst_52306)){
var statearr_52433_55497 = state_52408__$1;
(statearr_52433_55497[(1)] = (22));

} else {
var statearr_52434_55498 = state_52408__$1;
(statearr_52434_55498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (27))){
var inst_52257 = (state_52408[(9)]);
var inst_52337 = (state_52408[(10)]);
var inst_52339 = (state_52408[(11)]);
var inst_52348 = (state_52408[(12)]);
var inst_52348__$1 = cljs.core._nth(inst_52337,inst_52339);
var inst_52349 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52348__$1,inst_52257,done);
var state_52408__$1 = (function (){var statearr_52436 = state_52408;
(statearr_52436[(12)] = inst_52348__$1);

return statearr_52436;
})();
if(cljs.core.truth_(inst_52349)){
var statearr_52437_55501 = state_52408__$1;
(statearr_52437_55501[(1)] = (30));

} else {
var statearr_52438_55502 = state_52408__$1;
(statearr_52438_55502[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (1))){
var state_52408__$1 = state_52408;
var statearr_52445_55505 = state_52408__$1;
(statearr_52445_55505[(2)] = null);

(statearr_52445_55505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (24))){
var inst_52292 = (state_52408[(7)]);
var inst_52311 = (state_52408[(2)]);
var inst_52312 = cljs.core.next(inst_52292);
var inst_52266 = inst_52312;
var inst_52267 = null;
var inst_52268 = (0);
var inst_52269 = (0);
var state_52408__$1 = (function (){var statearr_52459 = state_52408;
(statearr_52459[(13)] = inst_52267);

(statearr_52459[(14)] = inst_52266);

(statearr_52459[(15)] = inst_52311);

(statearr_52459[(16)] = inst_52269);

(statearr_52459[(17)] = inst_52268);

return statearr_52459;
})();
var statearr_52460_55508 = state_52408__$1;
(statearr_52460_55508[(2)] = null);

(statearr_52460_55508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (39))){
var state_52408__$1 = state_52408;
var statearr_52466_55509 = state_52408__$1;
(statearr_52466_55509[(2)] = null);

(statearr_52466_55509[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (4))){
var inst_52257 = (state_52408[(9)]);
var inst_52257__$1 = (state_52408[(2)]);
var inst_52258 = (inst_52257__$1 == null);
var state_52408__$1 = (function (){var statearr_52470 = state_52408;
(statearr_52470[(9)] = inst_52257__$1);

return statearr_52470;
})();
if(cljs.core.truth_(inst_52258)){
var statearr_52471_55510 = state_52408__$1;
(statearr_52471_55510[(1)] = (5));

} else {
var statearr_52472_55511 = state_52408__$1;
(statearr_52472_55511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (15))){
var inst_52267 = (state_52408[(13)]);
var inst_52266 = (state_52408[(14)]);
var inst_52269 = (state_52408[(16)]);
var inst_52268 = (state_52408[(17)]);
var inst_52286 = (state_52408[(2)]);
var inst_52287 = (inst_52269 + (1));
var tmp52461 = inst_52267;
var tmp52462 = inst_52266;
var tmp52463 = inst_52268;
var inst_52266__$1 = tmp52462;
var inst_52267__$1 = tmp52461;
var inst_52268__$1 = tmp52463;
var inst_52269__$1 = inst_52287;
var state_52408__$1 = (function (){var statearr_52486 = state_52408;
(statearr_52486[(18)] = inst_52286);

(statearr_52486[(13)] = inst_52267__$1);

(statearr_52486[(14)] = inst_52266__$1);

(statearr_52486[(16)] = inst_52269__$1);

(statearr_52486[(17)] = inst_52268__$1);

return statearr_52486;
})();
var statearr_52487_55515 = state_52408__$1;
(statearr_52487_55515[(2)] = null);

(statearr_52487_55515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (21))){
var inst_52315 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52491_55518 = state_52408__$1;
(statearr_52491_55518[(2)] = inst_52315);

(statearr_52491_55518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (31))){
var inst_52348 = (state_52408[(12)]);
var inst_52352 = done(null);
var inst_52353 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52348);
var state_52408__$1 = (function (){var statearr_52494 = state_52408;
(statearr_52494[(19)] = inst_52352);

return statearr_52494;
})();
var statearr_52495_55520 = state_52408__$1;
(statearr_52495_55520[(2)] = inst_52353);

(statearr_52495_55520[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (32))){
var inst_52337 = (state_52408[(10)]);
var inst_52339 = (state_52408[(11)]);
var inst_52338 = (state_52408[(20)]);
var inst_52336 = (state_52408[(21)]);
var inst_52355 = (state_52408[(2)]);
var inst_52358 = (inst_52339 + (1));
var tmp52488 = inst_52337;
var tmp52489 = inst_52338;
var tmp52490 = inst_52336;
var inst_52336__$1 = tmp52490;
var inst_52337__$1 = tmp52488;
var inst_52338__$1 = tmp52489;
var inst_52339__$1 = inst_52358;
var state_52408__$1 = (function (){var statearr_52507 = state_52408;
(statearr_52507[(10)] = inst_52337__$1);

(statearr_52507[(11)] = inst_52339__$1);

(statearr_52507[(22)] = inst_52355);

(statearr_52507[(20)] = inst_52338__$1);

(statearr_52507[(21)] = inst_52336__$1);

return statearr_52507;
})();
var statearr_52513_55525 = state_52408__$1;
(statearr_52513_55525[(2)] = null);

(statearr_52513_55525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (40))){
var inst_52373 = (state_52408[(23)]);
var inst_52378 = done(null);
var inst_52379 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_52373);
var state_52408__$1 = (function (){var statearr_52515 = state_52408;
(statearr_52515[(24)] = inst_52378);

return statearr_52515;
})();
var statearr_52517_55528 = state_52408__$1;
(statearr_52517_55528[(2)] = inst_52379);

(statearr_52517_55528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (33))){
var inst_52361 = (state_52408[(25)]);
var inst_52363 = cljs.core.chunked_seq_QMARK_(inst_52361);
var state_52408__$1 = state_52408;
if(inst_52363){
var statearr_52519_55531 = state_52408__$1;
(statearr_52519_55531[(1)] = (36));

} else {
var statearr_52520_55533 = state_52408__$1;
(statearr_52520_55533[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (13))){
var inst_52278 = (state_52408[(26)]);
var inst_52283 = cljs.core.async.close_BANG_(inst_52278);
var state_52408__$1 = state_52408;
var statearr_52522_55535 = state_52408__$1;
(statearr_52522_55535[(2)] = inst_52283);

(statearr_52522_55535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (22))){
var inst_52305 = (state_52408[(8)]);
var inst_52308 = cljs.core.async.close_BANG_(inst_52305);
var state_52408__$1 = state_52408;
var statearr_52525_55536 = state_52408__$1;
(statearr_52525_55536[(2)] = inst_52308);

(statearr_52525_55536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (36))){
var inst_52361 = (state_52408[(25)]);
var inst_52365 = cljs.core.chunk_first(inst_52361);
var inst_52366 = cljs.core.chunk_rest(inst_52361);
var inst_52367 = cljs.core.count(inst_52365);
var inst_52336 = inst_52366;
var inst_52337 = inst_52365;
var inst_52338 = inst_52367;
var inst_52339 = (0);
var state_52408__$1 = (function (){var statearr_52529 = state_52408;
(statearr_52529[(10)] = inst_52337);

(statearr_52529[(11)] = inst_52339);

(statearr_52529[(20)] = inst_52338);

(statearr_52529[(21)] = inst_52336);

return statearr_52529;
})();
var statearr_52530_55543 = state_52408__$1;
(statearr_52530_55543[(2)] = null);

(statearr_52530_55543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (41))){
var inst_52361 = (state_52408[(25)]);
var inst_52381 = (state_52408[(2)]);
var inst_52382 = cljs.core.next(inst_52361);
var inst_52336 = inst_52382;
var inst_52337 = null;
var inst_52338 = (0);
var inst_52339 = (0);
var state_52408__$1 = (function (){var statearr_52531 = state_52408;
(statearr_52531[(10)] = inst_52337);

(statearr_52531[(11)] = inst_52339);

(statearr_52531[(27)] = inst_52381);

(statearr_52531[(20)] = inst_52338);

(statearr_52531[(21)] = inst_52336);

return statearr_52531;
})();
var statearr_52532_55546 = state_52408__$1;
(statearr_52532_55546[(2)] = null);

(statearr_52532_55546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (43))){
var state_52408__$1 = state_52408;
var statearr_52537_55549 = state_52408__$1;
(statearr_52537_55549[(2)] = null);

(statearr_52537_55549[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (29))){
var inst_52390 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52540_55550 = state_52408__$1;
(statearr_52540_55550[(2)] = inst_52390);

(statearr_52540_55550[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (44))){
var inst_52401 = (state_52408[(2)]);
var state_52408__$1 = (function (){var statearr_52542 = state_52408;
(statearr_52542[(28)] = inst_52401);

return statearr_52542;
})();
var statearr_52543_55551 = state_52408__$1;
(statearr_52543_55551[(2)] = null);

(statearr_52543_55551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (6))){
var inst_52327 = (state_52408[(29)]);
var inst_52326 = cljs.core.deref(cs);
var inst_52327__$1 = cljs.core.keys(inst_52326);
var inst_52328 = cljs.core.count(inst_52327__$1);
var inst_52329 = cljs.core.reset_BANG_(dctr,inst_52328);
var inst_52335 = cljs.core.seq(inst_52327__$1);
var inst_52336 = inst_52335;
var inst_52337 = null;
var inst_52338 = (0);
var inst_52339 = (0);
var state_52408__$1 = (function (){var statearr_52547 = state_52408;
(statearr_52547[(30)] = inst_52329);

(statearr_52547[(10)] = inst_52337);

(statearr_52547[(11)] = inst_52339);

(statearr_52547[(29)] = inst_52327__$1);

(statearr_52547[(20)] = inst_52338);

(statearr_52547[(21)] = inst_52336);

return statearr_52547;
})();
var statearr_52548_55558 = state_52408__$1;
(statearr_52548_55558[(2)] = null);

(statearr_52548_55558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (28))){
var inst_52361 = (state_52408[(25)]);
var inst_52336 = (state_52408[(21)]);
var inst_52361__$1 = cljs.core.seq(inst_52336);
var state_52408__$1 = (function (){var statearr_52549 = state_52408;
(statearr_52549[(25)] = inst_52361__$1);

return statearr_52549;
})();
if(inst_52361__$1){
var statearr_52550_55566 = state_52408__$1;
(statearr_52550_55566[(1)] = (33));

} else {
var statearr_52551_55569 = state_52408__$1;
(statearr_52551_55569[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (25))){
var inst_52339 = (state_52408[(11)]);
var inst_52338 = (state_52408[(20)]);
var inst_52341 = (inst_52339 < inst_52338);
var inst_52342 = inst_52341;
var state_52408__$1 = state_52408;
if(cljs.core.truth_(inst_52342)){
var statearr_52555_55571 = state_52408__$1;
(statearr_52555_55571[(1)] = (27));

} else {
var statearr_52556_55572 = state_52408__$1;
(statearr_52556_55572[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (34))){
var state_52408__$1 = state_52408;
var statearr_52558_55573 = state_52408__$1;
(statearr_52558_55573[(2)] = null);

(statearr_52558_55573[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (17))){
var state_52408__$1 = state_52408;
var statearr_52559_55576 = state_52408__$1;
(statearr_52559_55576[(2)] = null);

(statearr_52559_55576[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (3))){
var inst_52406 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52408__$1,inst_52406);
} else {
if((state_val_52412 === (12))){
var inst_52320 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52561_55579 = state_52408__$1;
(statearr_52561_55579[(2)] = inst_52320);

(statearr_52561_55579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (2))){
var state_52408__$1 = state_52408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52408__$1,(4),ch);
} else {
if((state_val_52412 === (23))){
var state_52408__$1 = state_52408;
var statearr_52562_55585 = state_52408__$1;
(statearr_52562_55585[(2)] = null);

(statearr_52562_55585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (35))){
var inst_52388 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52563_55586 = state_52408__$1;
(statearr_52563_55586[(2)] = inst_52388);

(statearr_52563_55586[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (19))){
var inst_52292 = (state_52408[(7)]);
var inst_52296 = cljs.core.chunk_first(inst_52292);
var inst_52297 = cljs.core.chunk_rest(inst_52292);
var inst_52298 = cljs.core.count(inst_52296);
var inst_52266 = inst_52297;
var inst_52267 = inst_52296;
var inst_52268 = inst_52298;
var inst_52269 = (0);
var state_52408__$1 = (function (){var statearr_52565 = state_52408;
(statearr_52565[(13)] = inst_52267);

(statearr_52565[(14)] = inst_52266);

(statearr_52565[(16)] = inst_52269);

(statearr_52565[(17)] = inst_52268);

return statearr_52565;
})();
var statearr_52566_55596 = state_52408__$1;
(statearr_52566_55596[(2)] = null);

(statearr_52566_55596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (11))){
var inst_52266 = (state_52408[(14)]);
var inst_52292 = (state_52408[(7)]);
var inst_52292__$1 = cljs.core.seq(inst_52266);
var state_52408__$1 = (function (){var statearr_52570 = state_52408;
(statearr_52570[(7)] = inst_52292__$1);

return statearr_52570;
})();
if(inst_52292__$1){
var statearr_52571_55598 = state_52408__$1;
(statearr_52571_55598[(1)] = (16));

} else {
var statearr_52573_55599 = state_52408__$1;
(statearr_52573_55599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (9))){
var inst_52322 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52574_55600 = state_52408__$1;
(statearr_52574_55600[(2)] = inst_52322);

(statearr_52574_55600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (5))){
var inst_52264 = cljs.core.deref(cs);
var inst_52265 = cljs.core.seq(inst_52264);
var inst_52266 = inst_52265;
var inst_52267 = null;
var inst_52268 = (0);
var inst_52269 = (0);
var state_52408__$1 = (function (){var statearr_52575 = state_52408;
(statearr_52575[(13)] = inst_52267);

(statearr_52575[(14)] = inst_52266);

(statearr_52575[(16)] = inst_52269);

(statearr_52575[(17)] = inst_52268);

return statearr_52575;
})();
var statearr_52576_55609 = state_52408__$1;
(statearr_52576_55609[(2)] = null);

(statearr_52576_55609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (14))){
var state_52408__$1 = state_52408;
var statearr_52580_55614 = state_52408__$1;
(statearr_52580_55614[(2)] = null);

(statearr_52580_55614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (45))){
var inst_52398 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52583_55618 = state_52408__$1;
(statearr_52583_55618[(2)] = inst_52398);

(statearr_52583_55618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (26))){
var inst_52327 = (state_52408[(29)]);
var inst_52392 = (state_52408[(2)]);
var inst_52393 = cljs.core.seq(inst_52327);
var state_52408__$1 = (function (){var statearr_52584 = state_52408;
(statearr_52584[(31)] = inst_52392);

return statearr_52584;
})();
if(inst_52393){
var statearr_52585_55620 = state_52408__$1;
(statearr_52585_55620[(1)] = (42));

} else {
var statearr_52586_55621 = state_52408__$1;
(statearr_52586_55621[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (16))){
var inst_52292 = (state_52408[(7)]);
var inst_52294 = cljs.core.chunked_seq_QMARK_(inst_52292);
var state_52408__$1 = state_52408;
if(inst_52294){
var statearr_52587_55628 = state_52408__$1;
(statearr_52587_55628[(1)] = (19));

} else {
var statearr_52588_55629 = state_52408__$1;
(statearr_52588_55629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (38))){
var inst_52385 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52589_55632 = state_52408__$1;
(statearr_52589_55632[(2)] = inst_52385);

(statearr_52589_55632[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (30))){
var state_52408__$1 = state_52408;
var statearr_52590_55635 = state_52408__$1;
(statearr_52590_55635[(2)] = null);

(statearr_52590_55635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (10))){
var inst_52267 = (state_52408[(13)]);
var inst_52269 = (state_52408[(16)]);
var inst_52277 = cljs.core._nth(inst_52267,inst_52269);
var inst_52278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52277,(0),null);
var inst_52279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52277,(1),null);
var state_52408__$1 = (function (){var statearr_52591 = state_52408;
(statearr_52591[(26)] = inst_52278);

return statearr_52591;
})();
if(cljs.core.truth_(inst_52279)){
var statearr_52592_55644 = state_52408__$1;
(statearr_52592_55644[(1)] = (13));

} else {
var statearr_52597_55645 = state_52408__$1;
(statearr_52597_55645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (18))){
var inst_52318 = (state_52408[(2)]);
var state_52408__$1 = state_52408;
var statearr_52599_55648 = state_52408__$1;
(statearr_52599_55648[(2)] = inst_52318);

(statearr_52599_55648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (42))){
var state_52408__$1 = state_52408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52408__$1,(45),dchan);
} else {
if((state_val_52412 === (37))){
var inst_52361 = (state_52408[(25)]);
var inst_52257 = (state_52408[(9)]);
var inst_52373 = (state_52408[(23)]);
var inst_52373__$1 = cljs.core.first(inst_52361);
var inst_52374 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52373__$1,inst_52257,done);
var state_52408__$1 = (function (){var statearr_52601 = state_52408;
(statearr_52601[(23)] = inst_52373__$1);

return statearr_52601;
})();
if(cljs.core.truth_(inst_52374)){
var statearr_52602_55650 = state_52408__$1;
(statearr_52602_55650[(1)] = (39));

} else {
var statearr_52604_55653 = state_52408__$1;
(statearr_52604_55653[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52412 === (8))){
var inst_52269 = (state_52408[(16)]);
var inst_52268 = (state_52408[(17)]);
var inst_52271 = (inst_52269 < inst_52268);
var inst_52272 = inst_52271;
var state_52408__$1 = state_52408;
if(cljs.core.truth_(inst_52272)){
var statearr_52605_55654 = state_52408__$1;
(statearr_52605_55654[(1)] = (10));

} else {
var statearr_52606_55655 = state_52408__$1;
(statearr_52606_55655[(1)] = (11));

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
});})(c__51169__auto___55488,cs,m,dchan,dctr,done))
;
return ((function (switch__50952__auto__,c__51169__auto___55488,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__50953__auto__ = null;
var cljs$core$async$mult_$_state_machine__50953__auto____0 = (function (){
var statearr_52610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52610[(0)] = cljs$core$async$mult_$_state_machine__50953__auto__);

(statearr_52610[(1)] = (1));

return statearr_52610;
});
var cljs$core$async$mult_$_state_machine__50953__auto____1 = (function (state_52408){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_52408);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e52614){if((e52614 instanceof Object)){
var ex__50956__auto__ = e52614;
var statearr_52616_55660 = state_52408;
(statearr_52616_55660[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55661 = state_52408;
state_52408 = G__55661;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50953__auto__ = function(state_52408){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50953__auto____1.call(this,state_52408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50953__auto____0;
cljs$core$async$mult_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50953__auto____1;
return cljs$core$async$mult_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___55488,cs,m,dchan,dctr,done))
})();
var state__51171__auto__ = (function (){var statearr_52618 = f__51170__auto__();
(statearr_52618[(6)] = c__51169__auto___55488);

return statearr_52618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___55488,cs,m,dchan,dctr,done))
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
var G__52621 = arguments.length;
switch (G__52621) {
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
var len__4730__auto___55695 = arguments.length;
var i__4731__auto___55696 = (0);
while(true){
if((i__4731__auto___55696 < len__4730__auto___55695)){
args__4736__auto__.push((arguments[i__4731__auto___55696]));

var G__55700 = (i__4731__auto___55696 + (1));
i__4731__auto___55696 = G__55700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52656){
var map__52657 = p__52656;
var map__52657__$1 = (((((!((map__52657 == null))))?(((((map__52657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52657):map__52657);
var opts = map__52657__$1;
var statearr_52665_55702 = state;
(statearr_52665_55702[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__52657,map__52657__$1,opts){
return (function (val){
var statearr_52667_55703 = state;
(statearr_52667_55703[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__52657,map__52657__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_52668_55705 = state;
(statearr_52668_55705[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52649){
var G__52650 = cljs.core.first(seq52649);
var seq52649__$1 = cljs.core.next(seq52649);
var G__52651 = cljs.core.first(seq52649__$1);
var seq52649__$2 = cljs.core.next(seq52649__$1);
var G__52652 = cljs.core.first(seq52649__$2);
var seq52649__$3 = cljs.core.next(seq52649__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52650,G__52651,G__52652,seq52649__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52694 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52695){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52695 = meta52695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52696,meta52695__$1){
var self__ = this;
var _52696__$1 = this;
return (new cljs.core.async.t_cljs$core$async52694(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52695__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_52696){
var self__ = this;
var _52696__$1 = this;
return self__.meta52695;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async52694.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52695","meta52695",-1064838188,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async52694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async52694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52694";

cljs.core.async.t_cljs$core$async52694.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async52694");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52694.
 */
cljs.core.async.__GT_t_cljs$core$async52694 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async52694(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52695){
return (new cljs.core.async.t_cljs$core$async52694(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52695));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async52694(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51169__auto___55760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___55760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___55760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_52896){
var state_val_52900 = (state_52896[(1)]);
if((state_val_52900 === (7))){
var inst_52771 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_52911_55768 = state_52896__$1;
(statearr_52911_55768[(2)] = inst_52771);

(statearr_52911_55768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (20))){
var inst_52790 = (state_52896[(7)]);
var state_52896__$1 = state_52896;
var statearr_52920_55769 = state_52896__$1;
(statearr_52920_55769[(2)] = inst_52790);

(statearr_52920_55769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (27))){
var state_52896__$1 = state_52896;
var statearr_52922_55770 = state_52896__$1;
(statearr_52922_55770[(2)] = null);

(statearr_52922_55770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (1))){
var inst_52744 = (state_52896[(8)]);
var inst_52744__$1 = calc_state();
var inst_52751 = (inst_52744__$1 == null);
var inst_52752 = cljs.core.not(inst_52751);
var state_52896__$1 = (function (){var statearr_52925 = state_52896;
(statearr_52925[(8)] = inst_52744__$1);

return statearr_52925;
})();
if(inst_52752){
var statearr_52927_55772 = state_52896__$1;
(statearr_52927_55772[(1)] = (2));

} else {
var statearr_52928_55773 = state_52896__$1;
(statearr_52928_55773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (24))){
var inst_52827 = (state_52896[(9)]);
var inst_52838 = (state_52896[(10)]);
var inst_52858 = (state_52896[(11)]);
var inst_52858__$1 = (inst_52827.cljs$core$IFn$_invoke$arity$1 ? inst_52827.cljs$core$IFn$_invoke$arity$1(inst_52838) : inst_52827.call(null,inst_52838));
var state_52896__$1 = (function (){var statearr_52935 = state_52896;
(statearr_52935[(11)] = inst_52858__$1);

return statearr_52935;
})();
if(cljs.core.truth_(inst_52858__$1)){
var statearr_52936_55779 = state_52896__$1;
(statearr_52936_55779[(1)] = (29));

} else {
var statearr_52938_55780 = state_52896__$1;
(statearr_52938_55780[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (4))){
var inst_52775 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52775)){
var statearr_52949_55782 = state_52896__$1;
(statearr_52949_55782[(1)] = (8));

} else {
var statearr_52953_55783 = state_52896__$1;
(statearr_52953_55783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (15))){
var inst_52817 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52817)){
var statearr_52956_55790 = state_52896__$1;
(statearr_52956_55790[(1)] = (19));

} else {
var statearr_52958_55791 = state_52896__$1;
(statearr_52958_55791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (21))){
var inst_52825 = (state_52896[(12)]);
var inst_52825__$1 = (state_52896[(2)]);
var inst_52827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52825__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52825__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52825__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52896__$1 = (function (){var statearr_52960 = state_52896;
(statearr_52960[(9)] = inst_52827);

(statearr_52960[(12)] = inst_52825__$1);

(statearr_52960[(13)] = inst_52828);

return statearr_52960;
})();
return cljs.core.async.ioc_alts_BANG_(state_52896__$1,(22),inst_52829);
} else {
if((state_val_52900 === (31))){
var inst_52867 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52867)){
var statearr_52965_55795 = state_52896__$1;
(statearr_52965_55795[(1)] = (32));

} else {
var statearr_52966_55796 = state_52896__$1;
(statearr_52966_55796[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (32))){
var inst_52837 = (state_52896[(14)]);
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52896__$1,(35),out,inst_52837);
} else {
if((state_val_52900 === (33))){
var inst_52825 = (state_52896[(12)]);
var inst_52790 = inst_52825;
var state_52896__$1 = (function (){var statearr_52969 = state_52896;
(statearr_52969[(7)] = inst_52790);

return statearr_52969;
})();
var statearr_52971_55798 = state_52896__$1;
(statearr_52971_55798[(2)] = null);

(statearr_52971_55798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (13))){
var inst_52790 = (state_52896[(7)]);
var inst_52806 = inst_52790.cljs$lang$protocol_mask$partition0$;
var inst_52807 = (inst_52806 & (64));
var inst_52808 = inst_52790.cljs$core$ISeq$;
var inst_52809 = (cljs.core.PROTOCOL_SENTINEL === inst_52808);
var inst_52810 = ((inst_52807) || (inst_52809));
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52810)){
var statearr_52975_55800 = state_52896__$1;
(statearr_52975_55800[(1)] = (16));

} else {
var statearr_52976_55801 = state_52896__$1;
(statearr_52976_55801[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (22))){
var inst_52838 = (state_52896[(10)]);
var inst_52837 = (state_52896[(14)]);
var inst_52836 = (state_52896[(2)]);
var inst_52837__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52836,(0),null);
var inst_52838__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52836,(1),null);
var inst_52839 = (inst_52837__$1 == null);
var inst_52840 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52838__$1,change);
var inst_52841 = ((inst_52839) || (inst_52840));
var state_52896__$1 = (function (){var statearr_52983 = state_52896;
(statearr_52983[(10)] = inst_52838__$1);

(statearr_52983[(14)] = inst_52837__$1);

return statearr_52983;
})();
if(cljs.core.truth_(inst_52841)){
var statearr_52984_55807 = state_52896__$1;
(statearr_52984_55807[(1)] = (23));

} else {
var statearr_52985_55808 = state_52896__$1;
(statearr_52985_55808[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (36))){
var inst_52825 = (state_52896[(12)]);
var inst_52790 = inst_52825;
var state_52896__$1 = (function (){var statearr_52991 = state_52896;
(statearr_52991[(7)] = inst_52790);

return statearr_52991;
})();
var statearr_52992_55812 = state_52896__$1;
(statearr_52992_55812[(2)] = null);

(statearr_52992_55812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (29))){
var inst_52858 = (state_52896[(11)]);
var state_52896__$1 = state_52896;
var statearr_52993_55813 = state_52896__$1;
(statearr_52993_55813[(2)] = inst_52858);

(statearr_52993_55813[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (6))){
var state_52896__$1 = state_52896;
var statearr_52995_55814 = state_52896__$1;
(statearr_52995_55814[(2)] = false);

(statearr_52995_55814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (28))){
var inst_52854 = (state_52896[(2)]);
var inst_52855 = calc_state();
var inst_52790 = inst_52855;
var state_52896__$1 = (function (){var statearr_52996 = state_52896;
(statearr_52996[(15)] = inst_52854);

(statearr_52996[(7)] = inst_52790);

return statearr_52996;
})();
var statearr_52997_55819 = state_52896__$1;
(statearr_52997_55819[(2)] = null);

(statearr_52997_55819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (25))){
var inst_52883 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_53000_55820 = state_52896__$1;
(statearr_53000_55820[(2)] = inst_52883);

(statearr_53000_55820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (34))){
var inst_52881 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_53001_55821 = state_52896__$1;
(statearr_53001_55821[(2)] = inst_52881);

(statearr_53001_55821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (17))){
var state_52896__$1 = state_52896;
var statearr_53004_55823 = state_52896__$1;
(statearr_53004_55823[(2)] = false);

(statearr_53004_55823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (3))){
var state_52896__$1 = state_52896;
var statearr_53006_55824 = state_52896__$1;
(statearr_53006_55824[(2)] = false);

(statearr_53006_55824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (12))){
var inst_52885 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52896__$1,inst_52885);
} else {
if((state_val_52900 === (2))){
var inst_52744 = (state_52896[(8)]);
var inst_52761 = inst_52744.cljs$lang$protocol_mask$partition0$;
var inst_52763 = (inst_52761 & (64));
var inst_52765 = inst_52744.cljs$core$ISeq$;
var inst_52766 = (cljs.core.PROTOCOL_SENTINEL === inst_52765);
var inst_52767 = ((inst_52763) || (inst_52766));
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52767)){
var statearr_53030_55831 = state_52896__$1;
(statearr_53030_55831[(1)] = (5));

} else {
var statearr_53032_55832 = state_52896__$1;
(statearr_53032_55832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (23))){
var inst_52837 = (state_52896[(14)]);
var inst_52848 = (inst_52837 == null);
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52848)){
var statearr_53034_55835 = state_52896__$1;
(statearr_53034_55835[(1)] = (26));

} else {
var statearr_53039_55836 = state_52896__$1;
(statearr_53039_55836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (35))){
var inst_52871 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
if(cljs.core.truth_(inst_52871)){
var statearr_53041_55840 = state_52896__$1;
(statearr_53041_55840[(1)] = (36));

} else {
var statearr_53042_55841 = state_52896__$1;
(statearr_53042_55841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (19))){
var inst_52790 = (state_52896[(7)]);
var inst_52821 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52790);
var state_52896__$1 = state_52896;
var statearr_53049_55847 = state_52896__$1;
(statearr_53049_55847[(2)] = inst_52821);

(statearr_53049_55847[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (11))){
var inst_52790 = (state_52896[(7)]);
var inst_52798 = (inst_52790 == null);
var inst_52799 = cljs.core.not(inst_52798);
var state_52896__$1 = state_52896;
if(inst_52799){
var statearr_53050_55850 = state_52896__$1;
(statearr_53050_55850[(1)] = (13));

} else {
var statearr_53051_55851 = state_52896__$1;
(statearr_53051_55851[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (9))){
var inst_52744 = (state_52896[(8)]);
var state_52896__$1 = state_52896;
var statearr_53052_55854 = state_52896__$1;
(statearr_53052_55854[(2)] = inst_52744);

(statearr_53052_55854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (5))){
var state_52896__$1 = state_52896;
var statearr_53054_55857 = state_52896__$1;
(statearr_53054_55857[(2)] = true);

(statearr_53054_55857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (14))){
var state_52896__$1 = state_52896;
var statearr_53055_55859 = state_52896__$1;
(statearr_53055_55859[(2)] = false);

(statearr_53055_55859[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (26))){
var inst_52838 = (state_52896[(10)]);
var inst_52851 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_52838);
var state_52896__$1 = state_52896;
var statearr_53056_55860 = state_52896__$1;
(statearr_53056_55860[(2)] = inst_52851);

(statearr_53056_55860[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (16))){
var state_52896__$1 = state_52896;
var statearr_53057_55864 = state_52896__$1;
(statearr_53057_55864[(2)] = true);

(statearr_53057_55864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (38))){
var inst_52876 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_53060_55867 = state_52896__$1;
(statearr_53060_55867[(2)] = inst_52876);

(statearr_53060_55867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (30))){
var inst_52827 = (state_52896[(9)]);
var inst_52838 = (state_52896[(10)]);
var inst_52828 = (state_52896[(13)]);
var inst_52862 = cljs.core.empty_QMARK_(inst_52827);
var inst_52863 = (inst_52828.cljs$core$IFn$_invoke$arity$1 ? inst_52828.cljs$core$IFn$_invoke$arity$1(inst_52838) : inst_52828.call(null,inst_52838));
var inst_52864 = cljs.core.not(inst_52863);
var inst_52865 = ((inst_52862) && (inst_52864));
var state_52896__$1 = state_52896;
var statearr_53062_55877 = state_52896__$1;
(statearr_53062_55877[(2)] = inst_52865);

(statearr_53062_55877[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (10))){
var inst_52744 = (state_52896[(8)]);
var inst_52784 = (state_52896[(2)]);
var inst_52785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52784,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52784,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52784,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52790 = inst_52744;
var state_52896__$1 = (function (){var statearr_53065 = state_52896;
(statearr_53065[(16)] = inst_52786);

(statearr_53065[(17)] = inst_52788);

(statearr_53065[(18)] = inst_52785);

(statearr_53065[(7)] = inst_52790);

return statearr_53065;
})();
var statearr_53067_55884 = state_52896__$1;
(statearr_53067_55884[(2)] = null);

(statearr_53067_55884[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (18))){
var inst_52814 = (state_52896[(2)]);
var state_52896__$1 = state_52896;
var statearr_53070_55887 = state_52896__$1;
(statearr_53070_55887[(2)] = inst_52814);

(statearr_53070_55887[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (37))){
var state_52896__$1 = state_52896;
var statearr_53071_55888 = state_52896__$1;
(statearr_53071_55888[(2)] = null);

(statearr_53071_55888[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52900 === (8))){
var inst_52744 = (state_52896[(8)]);
var inst_52781 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_52744);
var state_52896__$1 = state_52896;
var statearr_53073_55891 = state_52896__$1;
(statearr_53073_55891[(2)] = inst_52781);

(statearr_53073_55891[(1)] = (10));


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
});})(c__51169__auto___55760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__50952__auto__,c__51169__auto___55760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__50953__auto__ = null;
var cljs$core$async$mix_$_state_machine__50953__auto____0 = (function (){
var statearr_53078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53078[(0)] = cljs$core$async$mix_$_state_machine__50953__auto__);

(statearr_53078[(1)] = (1));

return statearr_53078;
});
var cljs$core$async$mix_$_state_machine__50953__auto____1 = (function (state_52896){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_52896);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e53079){if((e53079 instanceof Object)){
var ex__50956__auto__ = e53079;
var statearr_53080_55895 = state_52896;
(statearr_53080_55895[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55896 = state_52896;
state_52896 = G__55896;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50953__auto__ = function(state_52896){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50953__auto____1.call(this,state_52896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50953__auto____0;
cljs$core$async$mix_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50953__auto____1;
return cljs$core$async$mix_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___55760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__51171__auto__ = (function (){var statearr_53088 = f__51170__auto__();
(statearr_53088[(6)] = c__51169__auto___55760);

return statearr_53088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___55760,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__53109 = arguments.length;
switch (G__53109) {
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
var G__53123 = arguments.length;
switch (G__53123) {
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
return (function (p1__53121_SHARP_){
if(cljs.core.truth_((p1__53121_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__53121_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__53121_SHARP_.call(null,topic)))){
return p1__53121_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53121_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53127 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta53128){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta53128 = meta53128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53129,meta53128__$1){
var self__ = this;
var _53129__$1 = this;
return (new cljs.core.async.t_cljs$core$async53127(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta53128__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53129){
var self__ = this;
var _53129__$1 = this;
return self__.meta53128;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta53128","meta53128",716129993,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async53127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53127";

cljs.core.async.t_cljs$core$async53127.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53127");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53127.
 */
cljs.core.async.__GT_t_cljs$core$async53127 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async53127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53128){
return (new cljs.core.async.t_cljs$core$async53127(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta53128));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async53127(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__51169__auto___55949 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___55949,mults,ensure_mult,p){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___55949,mults,ensure_mult,p){
return (function (state_53240){
var state_val_53241 = (state_53240[(1)]);
if((state_val_53241 === (7))){
var inst_53236 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
var statearr_53242_55954 = state_53240__$1;
(statearr_53242_55954[(2)] = inst_53236);

(statearr_53242_55954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (20))){
var state_53240__$1 = state_53240;
var statearr_53246_55957 = state_53240__$1;
(statearr_53246_55957[(2)] = null);

(statearr_53246_55957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (1))){
var state_53240__$1 = state_53240;
var statearr_53247_55960 = state_53240__$1;
(statearr_53247_55960[(2)] = null);

(statearr_53247_55960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (24))){
var inst_53217 = (state_53240[(7)]);
var inst_53227 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_53217);
var state_53240__$1 = state_53240;
var statearr_53250_55964 = state_53240__$1;
(statearr_53250_55964[(2)] = inst_53227);

(statearr_53250_55964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (4))){
var inst_53159 = (state_53240[(8)]);
var inst_53159__$1 = (state_53240[(2)]);
var inst_53162 = (inst_53159__$1 == null);
var state_53240__$1 = (function (){var statearr_53252 = state_53240;
(statearr_53252[(8)] = inst_53159__$1);

return statearr_53252;
})();
if(cljs.core.truth_(inst_53162)){
var statearr_53253_55968 = state_53240__$1;
(statearr_53253_55968[(1)] = (5));

} else {
var statearr_53254_55969 = state_53240__$1;
(statearr_53254_55969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (15))){
var inst_53211 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
var statearr_53255_55975 = state_53240__$1;
(statearr_53255_55975[(2)] = inst_53211);

(statearr_53255_55975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (21))){
var inst_53232 = (state_53240[(2)]);
var state_53240__$1 = (function (){var statearr_53258 = state_53240;
(statearr_53258[(9)] = inst_53232);

return statearr_53258;
})();
var statearr_53260_55977 = state_53240__$1;
(statearr_53260_55977[(2)] = null);

(statearr_53260_55977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (13))){
var inst_53189 = (state_53240[(10)]);
var inst_53191 = cljs.core.chunked_seq_QMARK_(inst_53189);
var state_53240__$1 = state_53240;
if(inst_53191){
var statearr_53261_55981 = state_53240__$1;
(statearr_53261_55981[(1)] = (16));

} else {
var statearr_53262_55982 = state_53240__$1;
(statearr_53262_55982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (22))){
var inst_53224 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
if(cljs.core.truth_(inst_53224)){
var statearr_53265_55987 = state_53240__$1;
(statearr_53265_55987[(1)] = (23));

} else {
var statearr_53266_55989 = state_53240__$1;
(statearr_53266_55989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (6))){
var inst_53217 = (state_53240[(7)]);
var inst_53159 = (state_53240[(8)]);
var inst_53220 = (state_53240[(11)]);
var inst_53217__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_53159) : topic_fn.call(null,inst_53159));
var inst_53219 = cljs.core.deref(mults);
var inst_53220__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_53219,inst_53217__$1);
var state_53240__$1 = (function (){var statearr_53268 = state_53240;
(statearr_53268[(7)] = inst_53217__$1);

(statearr_53268[(11)] = inst_53220__$1);

return statearr_53268;
})();
if(cljs.core.truth_(inst_53220__$1)){
var statearr_53279_55998 = state_53240__$1;
(statearr_53279_55998[(1)] = (19));

} else {
var statearr_53280_55999 = state_53240__$1;
(statearr_53280_55999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (25))){
var inst_53229 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
var statearr_53282_56003 = state_53240__$1;
(statearr_53282_56003[(2)] = inst_53229);

(statearr_53282_56003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (17))){
var inst_53189 = (state_53240[(10)]);
var inst_53202 = cljs.core.first(inst_53189);
var inst_53203 = cljs.core.async.muxch_STAR_(inst_53202);
var inst_53204 = cljs.core.async.close_BANG_(inst_53203);
var inst_53205 = cljs.core.next(inst_53189);
var inst_53172 = inst_53205;
var inst_53173 = null;
var inst_53174 = (0);
var inst_53175 = (0);
var state_53240__$1 = (function (){var statearr_53289 = state_53240;
(statearr_53289[(12)] = inst_53172);

(statearr_53289[(13)] = inst_53173);

(statearr_53289[(14)] = inst_53204);

(statearr_53289[(15)] = inst_53175);

(statearr_53289[(16)] = inst_53174);

return statearr_53289;
})();
var statearr_53293_56009 = state_53240__$1;
(statearr_53293_56009[(2)] = null);

(statearr_53293_56009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (3))){
var inst_53238 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53240__$1,inst_53238);
} else {
if((state_val_53241 === (12))){
var inst_53213 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
var statearr_53299_56014 = state_53240__$1;
(statearr_53299_56014[(2)] = inst_53213);

(statearr_53299_56014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (2))){
var state_53240__$1 = state_53240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53240__$1,(4),ch);
} else {
if((state_val_53241 === (23))){
var state_53240__$1 = state_53240;
var statearr_53301_56021 = state_53240__$1;
(statearr_53301_56021[(2)] = null);

(statearr_53301_56021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (19))){
var inst_53159 = (state_53240[(8)]);
var inst_53220 = (state_53240[(11)]);
var inst_53222 = cljs.core.async.muxch_STAR_(inst_53220);
var state_53240__$1 = state_53240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53240__$1,(22),inst_53222,inst_53159);
} else {
if((state_val_53241 === (11))){
var inst_53172 = (state_53240[(12)]);
var inst_53189 = (state_53240[(10)]);
var inst_53189__$1 = cljs.core.seq(inst_53172);
var state_53240__$1 = (function (){var statearr_53306 = state_53240;
(statearr_53306[(10)] = inst_53189__$1);

return statearr_53306;
})();
if(inst_53189__$1){
var statearr_53307_56027 = state_53240__$1;
(statearr_53307_56027[(1)] = (13));

} else {
var statearr_53308_56028 = state_53240__$1;
(statearr_53308_56028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (9))){
var inst_53215 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
var statearr_53310_56033 = state_53240__$1;
(statearr_53310_56033[(2)] = inst_53215);

(statearr_53310_56033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (5))){
var inst_53169 = cljs.core.deref(mults);
var inst_53170 = cljs.core.vals(inst_53169);
var inst_53171 = cljs.core.seq(inst_53170);
var inst_53172 = inst_53171;
var inst_53173 = null;
var inst_53174 = (0);
var inst_53175 = (0);
var state_53240__$1 = (function (){var statearr_53313 = state_53240;
(statearr_53313[(12)] = inst_53172);

(statearr_53313[(13)] = inst_53173);

(statearr_53313[(15)] = inst_53175);

(statearr_53313[(16)] = inst_53174);

return statearr_53313;
})();
var statearr_53314_56035 = state_53240__$1;
(statearr_53314_56035[(2)] = null);

(statearr_53314_56035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (14))){
var state_53240__$1 = state_53240;
var statearr_53320_56039 = state_53240__$1;
(statearr_53320_56039[(2)] = null);

(statearr_53320_56039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (16))){
var inst_53189 = (state_53240[(10)]);
var inst_53195 = cljs.core.chunk_first(inst_53189);
var inst_53196 = cljs.core.chunk_rest(inst_53189);
var inst_53197 = cljs.core.count(inst_53195);
var inst_53172 = inst_53196;
var inst_53173 = inst_53195;
var inst_53174 = inst_53197;
var inst_53175 = (0);
var state_53240__$1 = (function (){var statearr_53322 = state_53240;
(statearr_53322[(12)] = inst_53172);

(statearr_53322[(13)] = inst_53173);

(statearr_53322[(15)] = inst_53175);

(statearr_53322[(16)] = inst_53174);

return statearr_53322;
})();
var statearr_53325_56048 = state_53240__$1;
(statearr_53325_56048[(2)] = null);

(statearr_53325_56048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (10))){
var inst_53172 = (state_53240[(12)]);
var inst_53173 = (state_53240[(13)]);
var inst_53175 = (state_53240[(15)]);
var inst_53174 = (state_53240[(16)]);
var inst_53180 = cljs.core._nth(inst_53173,inst_53175);
var inst_53182 = cljs.core.async.muxch_STAR_(inst_53180);
var inst_53183 = cljs.core.async.close_BANG_(inst_53182);
var inst_53185 = (inst_53175 + (1));
var tmp53317 = inst_53172;
var tmp53318 = inst_53173;
var tmp53319 = inst_53174;
var inst_53172__$1 = tmp53317;
var inst_53173__$1 = tmp53318;
var inst_53174__$1 = tmp53319;
var inst_53175__$1 = inst_53185;
var state_53240__$1 = (function (){var statearr_53332 = state_53240;
(statearr_53332[(17)] = inst_53183);

(statearr_53332[(12)] = inst_53172__$1);

(statearr_53332[(13)] = inst_53173__$1);

(statearr_53332[(15)] = inst_53175__$1);

(statearr_53332[(16)] = inst_53174__$1);

return statearr_53332;
})();
var statearr_53333_56062 = state_53240__$1;
(statearr_53333_56062[(2)] = null);

(statearr_53333_56062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (18))){
var inst_53208 = (state_53240[(2)]);
var state_53240__$1 = state_53240;
var statearr_53337_56064 = state_53240__$1;
(statearr_53337_56064[(2)] = inst_53208);

(statearr_53337_56064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53241 === (8))){
var inst_53175 = (state_53240[(15)]);
var inst_53174 = (state_53240[(16)]);
var inst_53177 = (inst_53175 < inst_53174);
var inst_53178 = inst_53177;
var state_53240__$1 = state_53240;
if(cljs.core.truth_(inst_53178)){
var statearr_53339_56067 = state_53240__$1;
(statearr_53339_56067[(1)] = (10));

} else {
var statearr_53340_56069 = state_53240__$1;
(statearr_53340_56069[(1)] = (11));

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
});})(c__51169__auto___55949,mults,ensure_mult,p))
;
return ((function (switch__50952__auto__,c__51169__auto___55949,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_53345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53345[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_53345[(1)] = (1));

return statearr_53345;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_53240){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_53240);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e53346){if((e53346 instanceof Object)){
var ex__50956__auto__ = e53346;
var statearr_53347_56083 = state_53240;
(statearr_53347_56083[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53346;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56088 = state_53240;
state_53240 = G__56088;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_53240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_53240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___55949,mults,ensure_mult,p))
})();
var state__51171__auto__ = (function (){var statearr_53353 = f__51170__auto__();
(statearr_53353[(6)] = c__51169__auto___55949);

return statearr_53353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___55949,mults,ensure_mult,p))
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
var G__53365 = arguments.length;
switch (G__53365) {
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
var G__53383 = arguments.length;
switch (G__53383) {
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
var G__53391 = arguments.length;
switch (G__53391) {
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
var c__51169__auto___56132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53453){
var state_val_53454 = (state_53453[(1)]);
if((state_val_53454 === (7))){
var state_53453__$1 = state_53453;
var statearr_53465_56137 = state_53453__$1;
(statearr_53465_56137[(2)] = null);

(statearr_53465_56137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (1))){
var state_53453__$1 = state_53453;
var statearr_53466_56140 = state_53453__$1;
(statearr_53466_56140[(2)] = null);

(statearr_53466_56140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (4))){
var inst_53413 = (state_53453[(7)]);
var inst_53415 = (inst_53413 < cnt);
var state_53453__$1 = state_53453;
if(cljs.core.truth_(inst_53415)){
var statearr_53471_56142 = state_53453__$1;
(statearr_53471_56142[(1)] = (6));

} else {
var statearr_53478_56143 = state_53453__$1;
(statearr_53478_56143[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (15))){
var inst_53449 = (state_53453[(2)]);
var state_53453__$1 = state_53453;
var statearr_53483_56145 = state_53453__$1;
(statearr_53483_56145[(2)] = inst_53449);

(statearr_53483_56145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (13))){
var inst_53439 = cljs.core.async.close_BANG_(out);
var state_53453__$1 = state_53453;
var statearr_53491_56147 = state_53453__$1;
(statearr_53491_56147[(2)] = inst_53439);

(statearr_53491_56147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (6))){
var state_53453__$1 = state_53453;
var statearr_53496_56153 = state_53453__$1;
(statearr_53496_56153[(2)] = null);

(statearr_53496_56153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (3))){
var inst_53451 = (state_53453[(2)]);
var state_53453__$1 = state_53453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53453__$1,inst_53451);
} else {
if((state_val_53454 === (12))){
var inst_53436 = (state_53453[(8)]);
var inst_53436__$1 = (state_53453[(2)]);
var inst_53437 = cljs.core.some(cljs.core.nil_QMARK_,inst_53436__$1);
var state_53453__$1 = (function (){var statearr_53514 = state_53453;
(statearr_53514[(8)] = inst_53436__$1);

return statearr_53514;
})();
if(cljs.core.truth_(inst_53437)){
var statearr_53515_56163 = state_53453__$1;
(statearr_53515_56163[(1)] = (13));

} else {
var statearr_53516_56164 = state_53453__$1;
(statearr_53516_56164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (2))){
var inst_53412 = cljs.core.reset_BANG_(dctr,cnt);
var inst_53413 = (0);
var state_53453__$1 = (function (){var statearr_53518 = state_53453;
(statearr_53518[(7)] = inst_53413);

(statearr_53518[(9)] = inst_53412);

return statearr_53518;
})();
var statearr_53522_56167 = state_53453__$1;
(statearr_53522_56167[(2)] = null);

(statearr_53522_56167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (11))){
var inst_53413 = (state_53453[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_53453,(10),Object,null,(9));
var inst_53423 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_53413) : chs__$1.call(null,inst_53413));
var inst_53424 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_53413) : done.call(null,inst_53413));
var inst_53425 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_53423,inst_53424);
var state_53453__$1 = state_53453;
var statearr_53530_56172 = state_53453__$1;
(statearr_53530_56172[(2)] = inst_53425);


cljs.core.async.impl.ioc_helpers.process_exception(state_53453__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (9))){
var inst_53413 = (state_53453[(7)]);
var inst_53427 = (state_53453[(2)]);
var inst_53428 = (inst_53413 + (1));
var inst_53413__$1 = inst_53428;
var state_53453__$1 = (function (){var statearr_53537 = state_53453;
(statearr_53537[(7)] = inst_53413__$1);

(statearr_53537[(10)] = inst_53427);

return statearr_53537;
})();
var statearr_53539_56179 = state_53453__$1;
(statearr_53539_56179[(2)] = null);

(statearr_53539_56179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (5))){
var inst_53434 = (state_53453[(2)]);
var state_53453__$1 = (function (){var statearr_53543 = state_53453;
(statearr_53543[(11)] = inst_53434);

return statearr_53543;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53453__$1,(12),dchan);
} else {
if((state_val_53454 === (14))){
var inst_53436 = (state_53453[(8)]);
var inst_53441 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_53436);
var state_53453__$1 = state_53453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53453__$1,(16),out,inst_53441);
} else {
if((state_val_53454 === (16))){
var inst_53443 = (state_53453[(2)]);
var state_53453__$1 = (function (){var statearr_53545 = state_53453;
(statearr_53545[(12)] = inst_53443);

return statearr_53545;
})();
var statearr_53546_56192 = state_53453__$1;
(statearr_53546_56192[(2)] = null);

(statearr_53546_56192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (10))){
var inst_53418 = (state_53453[(2)]);
var inst_53419 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_53453__$1 = (function (){var statearr_53549 = state_53453;
(statearr_53549[(13)] = inst_53418);

return statearr_53549;
})();
var statearr_53553_56199 = state_53453__$1;
(statearr_53553_56199[(2)] = inst_53419);


cljs.core.async.impl.ioc_helpers.process_exception(state_53453__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53454 === (8))){
var inst_53432 = (state_53453[(2)]);
var state_53453__$1 = state_53453;
var statearr_53554_56202 = state_53453__$1;
(statearr_53554_56202[(2)] = inst_53432);

(statearr_53554_56202[(1)] = (5));


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
});})(c__51169__auto___56132,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__50952__auto__,c__51169__auto___56132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_53556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53556[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_53556[(1)] = (1));

return statearr_53556;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_53453){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_53453);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e53557){if((e53557 instanceof Object)){
var ex__50956__auto__ = e53557;
var statearr_53558_56209 = state_53453;
(statearr_53558_56209[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56212 = state_53453;
state_53453 = G__56212;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_53453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_53453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56132,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__51171__auto__ = (function (){var statearr_53560 = f__51170__auto__();
(statearr_53560[(6)] = c__51169__auto___56132);

return statearr_53560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56132,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__53570 = arguments.length;
switch (G__53570) {
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
var c__51169__auto___56231 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56231,out){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56231,out){
return (function (state_53609){
var state_val_53610 = (state_53609[(1)]);
if((state_val_53610 === (7))){
var inst_53585 = (state_53609[(7)]);
var inst_53584 = (state_53609[(8)]);
var inst_53584__$1 = (state_53609[(2)]);
var inst_53585__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53584__$1,(0),null);
var inst_53586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53584__$1,(1),null);
var inst_53587 = (inst_53585__$1 == null);
var state_53609__$1 = (function (){var statearr_53614 = state_53609;
(statearr_53614[(9)] = inst_53586);

(statearr_53614[(7)] = inst_53585__$1);

(statearr_53614[(8)] = inst_53584__$1);

return statearr_53614;
})();
if(cljs.core.truth_(inst_53587)){
var statearr_53615_56240 = state_53609__$1;
(statearr_53615_56240[(1)] = (8));

} else {
var statearr_53616_56242 = state_53609__$1;
(statearr_53616_56242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (1))){
var inst_53574 = cljs.core.vec(chs);
var inst_53575 = inst_53574;
var state_53609__$1 = (function (){var statearr_53617 = state_53609;
(statearr_53617[(10)] = inst_53575);

return statearr_53617;
})();
var statearr_53618_56247 = state_53609__$1;
(statearr_53618_56247[(2)] = null);

(statearr_53618_56247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (4))){
var inst_53575 = (state_53609[(10)]);
var state_53609__$1 = state_53609;
return cljs.core.async.ioc_alts_BANG_(state_53609__$1,(7),inst_53575);
} else {
if((state_val_53610 === (6))){
var inst_53604 = (state_53609[(2)]);
var state_53609__$1 = state_53609;
var statearr_53622_56252 = state_53609__$1;
(statearr_53622_56252[(2)] = inst_53604);

(statearr_53622_56252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (3))){
var inst_53606 = (state_53609[(2)]);
var state_53609__$1 = state_53609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53609__$1,inst_53606);
} else {
if((state_val_53610 === (2))){
var inst_53575 = (state_53609[(10)]);
var inst_53577 = cljs.core.count(inst_53575);
var inst_53578 = (inst_53577 > (0));
var state_53609__$1 = state_53609;
if(cljs.core.truth_(inst_53578)){
var statearr_53631_56256 = state_53609__$1;
(statearr_53631_56256[(1)] = (4));

} else {
var statearr_53632_56258 = state_53609__$1;
(statearr_53632_56258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (11))){
var inst_53575 = (state_53609[(10)]);
var inst_53594 = (state_53609[(2)]);
var tmp53629 = inst_53575;
var inst_53575__$1 = tmp53629;
var state_53609__$1 = (function (){var statearr_53639 = state_53609;
(statearr_53639[(11)] = inst_53594);

(statearr_53639[(10)] = inst_53575__$1);

return statearr_53639;
})();
var statearr_53641_56261 = state_53609__$1;
(statearr_53641_56261[(2)] = null);

(statearr_53641_56261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (9))){
var inst_53585 = (state_53609[(7)]);
var state_53609__$1 = state_53609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53609__$1,(11),out,inst_53585);
} else {
if((state_val_53610 === (5))){
var inst_53602 = cljs.core.async.close_BANG_(out);
var state_53609__$1 = state_53609;
var statearr_53655_56269 = state_53609__$1;
(statearr_53655_56269[(2)] = inst_53602);

(statearr_53655_56269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (10))){
var inst_53597 = (state_53609[(2)]);
var state_53609__$1 = state_53609;
var statearr_53658_56271 = state_53609__$1;
(statearr_53658_56271[(2)] = inst_53597);

(statearr_53658_56271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53610 === (8))){
var inst_53575 = (state_53609[(10)]);
var inst_53586 = (state_53609[(9)]);
var inst_53585 = (state_53609[(7)]);
var inst_53584 = (state_53609[(8)]);
var inst_53589 = (function (){var cs = inst_53575;
var vec__53580 = inst_53584;
var v = inst_53585;
var c = inst_53586;
return ((function (cs,vec__53580,v,c,inst_53575,inst_53586,inst_53585,inst_53584,state_val_53610,c__51169__auto___56231,out){
return (function (p1__53562_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__53562_SHARP_);
});
;})(cs,vec__53580,v,c,inst_53575,inst_53586,inst_53585,inst_53584,state_val_53610,c__51169__auto___56231,out))
})();
var inst_53590 = cljs.core.filterv(inst_53589,inst_53575);
var inst_53575__$1 = inst_53590;
var state_53609__$1 = (function (){var statearr_53664 = state_53609;
(statearr_53664[(10)] = inst_53575__$1);

return statearr_53664;
})();
var statearr_53666_56282 = state_53609__$1;
(statearr_53666_56282[(2)] = null);

(statearr_53666_56282[(1)] = (2));


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
});})(c__51169__auto___56231,out))
;
return ((function (switch__50952__auto__,c__51169__auto___56231,out){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_53702 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53702[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_53702[(1)] = (1));

return statearr_53702;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_53609){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_53609);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e53704){if((e53704 instanceof Object)){
var ex__50956__auto__ = e53704;
var statearr_53706_56294 = state_53609;
(statearr_53706_56294[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56298 = state_53609;
state_53609 = G__56298;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_53609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_53609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56231,out))
})();
var state__51171__auto__ = (function (){var statearr_53713 = f__51170__auto__();
(statearr_53713[(6)] = c__51169__auto___56231);

return statearr_53713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56231,out))
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
var G__53726 = arguments.length;
switch (G__53726) {
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
var c__51169__auto___56308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56308,out){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56308,out){
return (function (state_53769){
var state_val_53770 = (state_53769[(1)]);
if((state_val_53770 === (7))){
var inst_53749 = (state_53769[(7)]);
var inst_53749__$1 = (state_53769[(2)]);
var inst_53750 = (inst_53749__$1 == null);
var inst_53751 = cljs.core.not(inst_53750);
var state_53769__$1 = (function (){var statearr_53780 = state_53769;
(statearr_53780[(7)] = inst_53749__$1);

return statearr_53780;
})();
if(inst_53751){
var statearr_53782_56318 = state_53769__$1;
(statearr_53782_56318[(1)] = (8));

} else {
var statearr_53786_56319 = state_53769__$1;
(statearr_53786_56319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (1))){
var inst_53743 = (0);
var state_53769__$1 = (function (){var statearr_53787 = state_53769;
(statearr_53787[(8)] = inst_53743);

return statearr_53787;
})();
var statearr_53788_56326 = state_53769__$1;
(statearr_53788_56326[(2)] = null);

(statearr_53788_56326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (4))){
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53769__$1,(7),ch);
} else {
if((state_val_53770 === (6))){
var inst_53762 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
var statearr_53792_56330 = state_53769__$1;
(statearr_53792_56330[(2)] = inst_53762);

(statearr_53792_56330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (3))){
var inst_53764 = (state_53769[(2)]);
var inst_53765 = cljs.core.async.close_BANG_(out);
var state_53769__$1 = (function (){var statearr_53793 = state_53769;
(statearr_53793[(9)] = inst_53764);

return statearr_53793;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53769__$1,inst_53765);
} else {
if((state_val_53770 === (2))){
var inst_53743 = (state_53769[(8)]);
var inst_53745 = (inst_53743 < n);
var state_53769__$1 = state_53769;
if(cljs.core.truth_(inst_53745)){
var statearr_53794_56334 = state_53769__$1;
(statearr_53794_56334[(1)] = (4));

} else {
var statearr_53795_56336 = state_53769__$1;
(statearr_53795_56336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (11))){
var inst_53743 = (state_53769[(8)]);
var inst_53754 = (state_53769[(2)]);
var inst_53755 = (inst_53743 + (1));
var inst_53743__$1 = inst_53755;
var state_53769__$1 = (function (){var statearr_53797 = state_53769;
(statearr_53797[(8)] = inst_53743__$1);

(statearr_53797[(10)] = inst_53754);

return statearr_53797;
})();
var statearr_53798_56338 = state_53769__$1;
(statearr_53798_56338[(2)] = null);

(statearr_53798_56338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (9))){
var state_53769__$1 = state_53769;
var statearr_53800_56339 = state_53769__$1;
(statearr_53800_56339[(2)] = null);

(statearr_53800_56339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (5))){
var state_53769__$1 = state_53769;
var statearr_53803_56343 = state_53769__$1;
(statearr_53803_56343[(2)] = null);

(statearr_53803_56343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (10))){
var inst_53759 = (state_53769[(2)]);
var state_53769__$1 = state_53769;
var statearr_53808_56347 = state_53769__$1;
(statearr_53808_56347[(2)] = inst_53759);

(statearr_53808_56347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53770 === (8))){
var inst_53749 = (state_53769[(7)]);
var state_53769__$1 = state_53769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53769__$1,(11),out,inst_53749);
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
});})(c__51169__auto___56308,out))
;
return ((function (switch__50952__auto__,c__51169__auto___56308,out){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_53812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53812[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_53812[(1)] = (1));

return statearr_53812;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_53769){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_53769);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e53815){if((e53815 instanceof Object)){
var ex__50956__auto__ = e53815;
var statearr_53816_56363 = state_53769;
(statearr_53816_56363[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56367 = state_53769;
state_53769 = G__56367;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_53769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_53769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56308,out))
})();
var state__51171__auto__ = (function (){var statearr_53827 = f__51170__auto__();
(statearr_53827[(6)] = c__51169__auto___56308);

return statearr_53827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56308,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53834 = (function (f,ch,meta53835){
this.f = f;
this.ch = ch;
this.meta53835 = meta53835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53836,meta53835__$1){
var self__ = this;
var _53836__$1 = this;
return (new cljs.core.async.t_cljs$core$async53834(self__.f,self__.ch,meta53835__$1));
});

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53836){
var self__ = this;
var _53836__$1 = this;
return self__.meta53835;
});

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53842 = (function (f,ch,meta53835,_,fn1,meta53843){
this.f = f;
this.ch = ch;
this.meta53835 = meta53835;
this._ = _;
this.fn1 = fn1;
this.meta53843 = meta53843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_53844,meta53843__$1){
var self__ = this;
var _53844__$1 = this;
return (new cljs.core.async.t_cljs$core$async53842(self__.f,self__.ch,self__.meta53835,self__._,self__.fn1,meta53843__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async53842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_53844){
var self__ = this;
var _53844__$1 = this;
return self__.meta53843;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async53842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__53830_SHARP_){
var G__53856 = (((p1__53830_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__53830_SHARP_) : self__.f.call(null,p1__53830_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__53856) : f1.call(null,G__53856));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async53842.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53835","meta53835",-2081047716,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53834","cljs.core.async/t_cljs$core$async53834",-97026382,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53843","meta53843",-2047539374,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async53842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53842";

cljs.core.async.t_cljs$core$async53842.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53842");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53842.
 */
cljs.core.async.__GT_t_cljs$core$async53842 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53842(f__$1,ch__$1,meta53835__$1,___$2,fn1__$1,meta53843){
return (new cljs.core.async.t_cljs$core$async53842(f__$1,ch__$1,meta53835__$1,___$2,fn1__$1,meta53843));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async53842(self__.f,self__.ch,self__.meta53835,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__53872 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__53872) : self__.f.call(null,G__53872));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async53834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53835","meta53835",-2081047716,null)], null);
});

cljs.core.async.t_cljs$core$async53834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53834";

cljs.core.async.t_cljs$core$async53834.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53834");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53834.
 */
cljs.core.async.__GT_t_cljs$core$async53834 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53834(f__$1,ch__$1,meta53835){
return (new cljs.core.async.t_cljs$core$async53834(f__$1,ch__$1,meta53835));
});

}

return (new cljs.core.async.t_cljs$core$async53834(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53917 = (function (f,ch,meta53918){
this.f = f;
this.ch = ch;
this.meta53918 = meta53918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53919,meta53918__$1){
var self__ = this;
var _53919__$1 = this;
return (new cljs.core.async.t_cljs$core$async53917(self__.f,self__.ch,meta53918__$1));
});

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53919){
var self__ = this;
var _53919__$1 = this;
return self__.meta53918;
});

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async53917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53918","meta53918",-2119242136,null)], null);
});

cljs.core.async.t_cljs$core$async53917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53917";

cljs.core.async.t_cljs$core$async53917.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53917");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53917.
 */
cljs.core.async.__GT_t_cljs$core$async53917 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53917(f__$1,ch__$1,meta53918){
return (new cljs.core.async.t_cljs$core$async53917(f__$1,ch__$1,meta53918));
});

}

return (new cljs.core.async.t_cljs$core$async53917(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53948 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53948 = (function (p,ch,meta53949){
this.p = p;
this.ch = ch;
this.meta53949 = meta53949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53950,meta53949__$1){
var self__ = this;
var _53950__$1 = this;
return (new cljs.core.async.t_cljs$core$async53948(self__.p,self__.ch,meta53949__$1));
});

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53950){
var self__ = this;
var _53950__$1 = this;
return self__.meta53949;
});

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async53948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async53948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53949","meta53949",2145388924,null)], null);
});

cljs.core.async.t_cljs$core$async53948.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async53948.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53948";

cljs.core.async.t_cljs$core$async53948.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async53948");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53948.
 */
cljs.core.async.__GT_t_cljs$core$async53948 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53948(p__$1,ch__$1,meta53949){
return (new cljs.core.async.t_cljs$core$async53948(p__$1,ch__$1,meta53949));
});

}

return (new cljs.core.async.t_cljs$core$async53948(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53991 = arguments.length;
switch (G__53991) {
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
var c__51169__auto___56429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56429,out){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56429,out){
return (function (state_54018){
var state_val_54019 = (state_54018[(1)]);
if((state_val_54019 === (7))){
var inst_54014 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54026_56434 = state_54018__$1;
(statearr_54026_56434[(2)] = inst_54014);

(statearr_54026_56434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (1))){
var state_54018__$1 = state_54018;
var statearr_54027_56438 = state_54018__$1;
(statearr_54027_56438[(2)] = null);

(statearr_54027_56438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (4))){
var inst_54000 = (state_54018[(7)]);
var inst_54000__$1 = (state_54018[(2)]);
var inst_54001 = (inst_54000__$1 == null);
var state_54018__$1 = (function (){var statearr_54033 = state_54018;
(statearr_54033[(7)] = inst_54000__$1);

return statearr_54033;
})();
if(cljs.core.truth_(inst_54001)){
var statearr_54034_56443 = state_54018__$1;
(statearr_54034_56443[(1)] = (5));

} else {
var statearr_54035_56445 = state_54018__$1;
(statearr_54035_56445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (6))){
var inst_54000 = (state_54018[(7)]);
var inst_54005 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54000) : p.call(null,inst_54000));
var state_54018__$1 = state_54018;
if(cljs.core.truth_(inst_54005)){
var statearr_54036_56448 = state_54018__$1;
(statearr_54036_56448[(1)] = (8));

} else {
var statearr_54037_56449 = state_54018__$1;
(statearr_54037_56449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (3))){
var inst_54016 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54018__$1,inst_54016);
} else {
if((state_val_54019 === (2))){
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54018__$1,(4),ch);
} else {
if((state_val_54019 === (11))){
var inst_54008 = (state_54018[(2)]);
var state_54018__$1 = state_54018;
var statearr_54039_56452 = state_54018__$1;
(statearr_54039_56452[(2)] = inst_54008);

(statearr_54039_56452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (9))){
var state_54018__$1 = state_54018;
var statearr_54040_56455 = state_54018__$1;
(statearr_54040_56455[(2)] = null);

(statearr_54040_56455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (5))){
var inst_54003 = cljs.core.async.close_BANG_(out);
var state_54018__$1 = state_54018;
var statearr_54045_56460 = state_54018__$1;
(statearr_54045_56460[(2)] = inst_54003);

(statearr_54045_56460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (10))){
var inst_54011 = (state_54018[(2)]);
var state_54018__$1 = (function (){var statearr_54047 = state_54018;
(statearr_54047[(8)] = inst_54011);

return statearr_54047;
})();
var statearr_54048_56468 = state_54018__$1;
(statearr_54048_56468[(2)] = null);

(statearr_54048_56468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54019 === (8))){
var inst_54000 = (state_54018[(7)]);
var state_54018__$1 = state_54018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54018__$1,(11),out,inst_54000);
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
});})(c__51169__auto___56429,out))
;
return ((function (switch__50952__auto__,c__51169__auto___56429,out){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_54051 = [null,null,null,null,null,null,null,null,null];
(statearr_54051[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_54051[(1)] = (1));

return statearr_54051;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_54018){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_54018);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e54052){if((e54052 instanceof Object)){
var ex__50956__auto__ = e54052;
var statearr_54077_56494 = state_54018;
(statearr_54077_56494[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56503 = state_54018;
state_54018 = G__56503;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_54018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_54018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56429,out))
})();
var state__51171__auto__ = (function (){var statearr_54081 = f__51170__auto__();
(statearr_54081[(6)] = c__51169__auto___56429);

return statearr_54081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56429,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__54093 = arguments.length;
switch (G__54093) {
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
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__){
return (function (state_54186){
var state_val_54187 = (state_54186[(1)]);
if((state_val_54187 === (7))){
var inst_54182 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54190_56534 = state_54186__$1;
(statearr_54190_56534[(2)] = inst_54182);

(statearr_54190_56534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (20))){
var inst_54148 = (state_54186[(7)]);
var inst_54159 = (state_54186[(2)]);
var inst_54160 = cljs.core.next(inst_54148);
var inst_54131 = inst_54160;
var inst_54132 = null;
var inst_54133 = (0);
var inst_54134 = (0);
var state_54186__$1 = (function (){var statearr_54191 = state_54186;
(statearr_54191[(8)] = inst_54134);

(statearr_54191[(9)] = inst_54131);

(statearr_54191[(10)] = inst_54159);

(statearr_54191[(11)] = inst_54133);

(statearr_54191[(12)] = inst_54132);

return statearr_54191;
})();
var statearr_54192_56541 = state_54186__$1;
(statearr_54192_56541[(2)] = null);

(statearr_54192_56541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (1))){
var state_54186__$1 = state_54186;
var statearr_54193_56547 = state_54186__$1;
(statearr_54193_56547[(2)] = null);

(statearr_54193_56547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (4))){
var inst_54120 = (state_54186[(13)]);
var inst_54120__$1 = (state_54186[(2)]);
var inst_54121 = (inst_54120__$1 == null);
var state_54186__$1 = (function (){var statearr_54194 = state_54186;
(statearr_54194[(13)] = inst_54120__$1);

return statearr_54194;
})();
if(cljs.core.truth_(inst_54121)){
var statearr_54195_56551 = state_54186__$1;
(statearr_54195_56551[(1)] = (5));

} else {
var statearr_54196_56552 = state_54186__$1;
(statearr_54196_56552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (15))){
var state_54186__$1 = state_54186;
var statearr_54200_56553 = state_54186__$1;
(statearr_54200_56553[(2)] = null);

(statearr_54200_56553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (21))){
var state_54186__$1 = state_54186;
var statearr_54201_56555 = state_54186__$1;
(statearr_54201_56555[(2)] = null);

(statearr_54201_56555[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (13))){
var inst_54134 = (state_54186[(8)]);
var inst_54131 = (state_54186[(9)]);
var inst_54133 = (state_54186[(11)]);
var inst_54132 = (state_54186[(12)]);
var inst_54142 = (state_54186[(2)]);
var inst_54145 = (inst_54134 + (1));
var tmp54197 = inst_54131;
var tmp54198 = inst_54133;
var tmp54199 = inst_54132;
var inst_54131__$1 = tmp54197;
var inst_54132__$1 = tmp54199;
var inst_54133__$1 = tmp54198;
var inst_54134__$1 = inst_54145;
var state_54186__$1 = (function (){var statearr_54226 = state_54186;
(statearr_54226[(8)] = inst_54134__$1);

(statearr_54226[(14)] = inst_54142);

(statearr_54226[(9)] = inst_54131__$1);

(statearr_54226[(11)] = inst_54133__$1);

(statearr_54226[(12)] = inst_54132__$1);

return statearr_54226;
})();
var statearr_54229_56560 = state_54186__$1;
(statearr_54229_56560[(2)] = null);

(statearr_54229_56560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (22))){
var state_54186__$1 = state_54186;
var statearr_54231_56563 = state_54186__$1;
(statearr_54231_56563[(2)] = null);

(statearr_54231_56563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (6))){
var inst_54120 = (state_54186[(13)]);
var inst_54129 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54120) : f.call(null,inst_54120));
var inst_54130 = cljs.core.seq(inst_54129);
var inst_54131 = inst_54130;
var inst_54132 = null;
var inst_54133 = (0);
var inst_54134 = (0);
var state_54186__$1 = (function (){var statearr_54233 = state_54186;
(statearr_54233[(8)] = inst_54134);

(statearr_54233[(9)] = inst_54131);

(statearr_54233[(11)] = inst_54133);

(statearr_54233[(12)] = inst_54132);

return statearr_54233;
})();
var statearr_54234_56566 = state_54186__$1;
(statearr_54234_56566[(2)] = null);

(statearr_54234_56566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (17))){
var inst_54148 = (state_54186[(7)]);
var inst_54152 = cljs.core.chunk_first(inst_54148);
var inst_54153 = cljs.core.chunk_rest(inst_54148);
var inst_54154 = cljs.core.count(inst_54152);
var inst_54131 = inst_54153;
var inst_54132 = inst_54152;
var inst_54133 = inst_54154;
var inst_54134 = (0);
var state_54186__$1 = (function (){var statearr_54238 = state_54186;
(statearr_54238[(8)] = inst_54134);

(statearr_54238[(9)] = inst_54131);

(statearr_54238[(11)] = inst_54133);

(statearr_54238[(12)] = inst_54132);

return statearr_54238;
})();
var statearr_54239_56573 = state_54186__$1;
(statearr_54239_56573[(2)] = null);

(statearr_54239_56573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (3))){
var inst_54184 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54186__$1,inst_54184);
} else {
if((state_val_54187 === (12))){
var inst_54168 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54242_56581 = state_54186__$1;
(statearr_54242_56581[(2)] = inst_54168);

(statearr_54242_56581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (2))){
var state_54186__$1 = state_54186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54186__$1,(4),in$);
} else {
if((state_val_54187 === (23))){
var inst_54180 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54243_56585 = state_54186__$1;
(statearr_54243_56585[(2)] = inst_54180);

(statearr_54243_56585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (19))){
var inst_54163 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54248_56586 = state_54186__$1;
(statearr_54248_56586[(2)] = inst_54163);

(statearr_54248_56586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (11))){
var inst_54131 = (state_54186[(9)]);
var inst_54148 = (state_54186[(7)]);
var inst_54148__$1 = cljs.core.seq(inst_54131);
var state_54186__$1 = (function (){var statearr_54254 = state_54186;
(statearr_54254[(7)] = inst_54148__$1);

return statearr_54254;
})();
if(inst_54148__$1){
var statearr_54257_56591 = state_54186__$1;
(statearr_54257_56591[(1)] = (14));

} else {
var statearr_54259_56593 = state_54186__$1;
(statearr_54259_56593[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (9))){
var inst_54170 = (state_54186[(2)]);
var inst_54171 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_54186__$1 = (function (){var statearr_54269 = state_54186;
(statearr_54269[(15)] = inst_54170);

return statearr_54269;
})();
if(cljs.core.truth_(inst_54171)){
var statearr_54274_56596 = state_54186__$1;
(statearr_54274_56596[(1)] = (21));

} else {
var statearr_54275_56597 = state_54186__$1;
(statearr_54275_56597[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (5))){
var inst_54123 = cljs.core.async.close_BANG_(out);
var state_54186__$1 = state_54186;
var statearr_54293_56598 = state_54186__$1;
(statearr_54293_56598[(2)] = inst_54123);

(statearr_54293_56598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (14))){
var inst_54148 = (state_54186[(7)]);
var inst_54150 = cljs.core.chunked_seq_QMARK_(inst_54148);
var state_54186__$1 = state_54186;
if(inst_54150){
var statearr_54321_56599 = state_54186__$1;
(statearr_54321_56599[(1)] = (17));

} else {
var statearr_54323_56600 = state_54186__$1;
(statearr_54323_56600[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (16))){
var inst_54166 = (state_54186[(2)]);
var state_54186__$1 = state_54186;
var statearr_54327_56601 = state_54186__$1;
(statearr_54327_56601[(2)] = inst_54166);

(statearr_54327_56601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54187 === (10))){
var inst_54134 = (state_54186[(8)]);
var inst_54132 = (state_54186[(12)]);
var inst_54139 = cljs.core._nth(inst_54132,inst_54134);
var state_54186__$1 = state_54186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54186__$1,(13),out,inst_54139);
} else {
if((state_val_54187 === (18))){
var inst_54148 = (state_54186[(7)]);
var inst_54157 = cljs.core.first(inst_54148);
var state_54186__$1 = state_54186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54186__$1,(20),out,inst_54157);
} else {
if((state_val_54187 === (8))){
var inst_54134 = (state_54186[(8)]);
var inst_54133 = (state_54186[(11)]);
var inst_54136 = (inst_54134 < inst_54133);
var inst_54137 = inst_54136;
var state_54186__$1 = state_54186;
if(cljs.core.truth_(inst_54137)){
var statearr_54420_56608 = state_54186__$1;
(statearr_54420_56608[(1)] = (10));

} else {
var statearr_54421_56609 = state_54186__$1;
(statearr_54421_56609[(1)] = (11));

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
});})(c__51169__auto__))
;
return ((function (switch__50952__auto__,c__51169__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50953__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50953__auto____0 = (function (){
var statearr_54422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54422[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50953__auto__);

(statearr_54422[(1)] = (1));

return statearr_54422;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50953__auto____1 = (function (state_54186){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_54186);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e54423){if((e54423 instanceof Object)){
var ex__50956__auto__ = e54423;
var statearr_54424_56613 = state_54186;
(statearr_54424_56613[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56616 = state_54186;
state_54186 = G__56616;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50953__auto__ = function(state_54186){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50953__auto____1.call(this,state_54186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50953__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50953__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__))
})();
var state__51171__auto__ = (function (){var statearr_54427 = f__51170__auto__();
(statearr_54427[(6)] = c__51169__auto__);

return statearr_54427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__))
);

return c__51169__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__54429 = arguments.length;
switch (G__54429) {
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
var G__54437 = arguments.length;
switch (G__54437) {
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
var G__54440 = arguments.length;
switch (G__54440) {
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
var c__51169__auto___56631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56631,out){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56631,out){
return (function (state_54467){
var state_val_54468 = (state_54467[(1)]);
if((state_val_54468 === (7))){
var inst_54462 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
var statearr_54469_56633 = state_54467__$1;
(statearr_54469_56633[(2)] = inst_54462);

(statearr_54469_56633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (1))){
var inst_54443 = null;
var state_54467__$1 = (function (){var statearr_54470 = state_54467;
(statearr_54470[(7)] = inst_54443);

return statearr_54470;
})();
var statearr_54471_56635 = state_54467__$1;
(statearr_54471_56635[(2)] = null);

(statearr_54471_56635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (4))){
var inst_54446 = (state_54467[(8)]);
var inst_54446__$1 = (state_54467[(2)]);
var inst_54447 = (inst_54446__$1 == null);
var inst_54448 = cljs.core.not(inst_54447);
var state_54467__$1 = (function (){var statearr_54472 = state_54467;
(statearr_54472[(8)] = inst_54446__$1);

return statearr_54472;
})();
if(inst_54448){
var statearr_54473_56637 = state_54467__$1;
(statearr_54473_56637[(1)] = (5));

} else {
var statearr_54474_56638 = state_54467__$1;
(statearr_54474_56638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (6))){
var state_54467__$1 = state_54467;
var statearr_54475_56639 = state_54467__$1;
(statearr_54475_56639[(2)] = null);

(statearr_54475_56639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (3))){
var inst_54464 = (state_54467[(2)]);
var inst_54465 = cljs.core.async.close_BANG_(out);
var state_54467__$1 = (function (){var statearr_54480 = state_54467;
(statearr_54480[(9)] = inst_54464);

return statearr_54480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54467__$1,inst_54465);
} else {
if((state_val_54468 === (2))){
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54467__$1,(4),ch);
} else {
if((state_val_54468 === (11))){
var inst_54446 = (state_54467[(8)]);
var inst_54455 = (state_54467[(2)]);
var inst_54443 = inst_54446;
var state_54467__$1 = (function (){var statearr_54484 = state_54467;
(statearr_54484[(7)] = inst_54443);

(statearr_54484[(10)] = inst_54455);

return statearr_54484;
})();
var statearr_54485_56641 = state_54467__$1;
(statearr_54485_56641[(2)] = null);

(statearr_54485_56641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (9))){
var inst_54446 = (state_54467[(8)]);
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54467__$1,(11),out,inst_54446);
} else {
if((state_val_54468 === (5))){
var inst_54443 = (state_54467[(7)]);
var inst_54446 = (state_54467[(8)]);
var inst_54450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54446,inst_54443);
var state_54467__$1 = state_54467;
if(inst_54450){
var statearr_54488_56643 = state_54467__$1;
(statearr_54488_56643[(1)] = (8));

} else {
var statearr_54489_56644 = state_54467__$1;
(statearr_54489_56644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (10))){
var inst_54459 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
var statearr_54490_56645 = state_54467__$1;
(statearr_54490_56645[(2)] = inst_54459);

(statearr_54490_56645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (8))){
var inst_54443 = (state_54467[(7)]);
var tmp54487 = inst_54443;
var inst_54443__$1 = tmp54487;
var state_54467__$1 = (function (){var statearr_54491 = state_54467;
(statearr_54491[(7)] = inst_54443__$1);

return statearr_54491;
})();
var statearr_54492_56648 = state_54467__$1;
(statearr_54492_56648[(2)] = null);

(statearr_54492_56648[(1)] = (2));


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
});})(c__51169__auto___56631,out))
;
return ((function (switch__50952__auto__,c__51169__auto___56631,out){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_54493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54493[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_54493[(1)] = (1));

return statearr_54493;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_54467){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_54467);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e54495){if((e54495 instanceof Object)){
var ex__50956__auto__ = e54495;
var statearr_54497_56650 = state_54467;
(statearr_54497_56650[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54495;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56651 = state_54467;
state_54467 = G__56651;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_54467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_54467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56631,out))
})();
var state__51171__auto__ = (function (){var statearr_54501 = f__51170__auto__();
(statearr_54501[(6)] = c__51169__auto___56631);

return statearr_54501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56631,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__54504 = arguments.length;
switch (G__54504) {
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
var c__51169__auto___56670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56670,out){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56670,out){
return (function (state_54550){
var state_val_54551 = (state_54550[(1)]);
if((state_val_54551 === (7))){
var inst_54546 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
var statearr_54556_56671 = state_54550__$1;
(statearr_54556_56671[(2)] = inst_54546);

(statearr_54556_56671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (1))){
var inst_54507 = (new Array(n));
var inst_54508 = inst_54507;
var inst_54509 = (0);
var state_54550__$1 = (function (){var statearr_54557 = state_54550;
(statearr_54557[(7)] = inst_54509);

(statearr_54557[(8)] = inst_54508);

return statearr_54557;
})();
var statearr_54558_56673 = state_54550__$1;
(statearr_54558_56673[(2)] = null);

(statearr_54558_56673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (4))){
var inst_54513 = (state_54550[(9)]);
var inst_54513__$1 = (state_54550[(2)]);
var inst_54514 = (inst_54513__$1 == null);
var inst_54515 = cljs.core.not(inst_54514);
var state_54550__$1 = (function (){var statearr_54560 = state_54550;
(statearr_54560[(9)] = inst_54513__$1);

return statearr_54560;
})();
if(inst_54515){
var statearr_54563_56675 = state_54550__$1;
(statearr_54563_56675[(1)] = (5));

} else {
var statearr_54565_56679 = state_54550__$1;
(statearr_54565_56679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (15))){
var inst_54540 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
var statearr_54567_56680 = state_54550__$1;
(statearr_54567_56680[(2)] = inst_54540);

(statearr_54567_56680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (13))){
var state_54550__$1 = state_54550;
var statearr_54569_56681 = state_54550__$1;
(statearr_54569_56681[(2)] = null);

(statearr_54569_56681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (6))){
var inst_54509 = (state_54550[(7)]);
var inst_54536 = (inst_54509 > (0));
var state_54550__$1 = state_54550;
if(cljs.core.truth_(inst_54536)){
var statearr_54573_56682 = state_54550__$1;
(statearr_54573_56682[(1)] = (12));

} else {
var statearr_54574_56683 = state_54550__$1;
(statearr_54574_56683[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (3))){
var inst_54548 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54550__$1,inst_54548);
} else {
if((state_val_54551 === (12))){
var inst_54508 = (state_54550[(8)]);
var inst_54538 = cljs.core.vec(inst_54508);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54550__$1,(15),out,inst_54538);
} else {
if((state_val_54551 === (2))){
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54550__$1,(4),ch);
} else {
if((state_val_54551 === (11))){
var inst_54529 = (state_54550[(2)]);
var inst_54530 = (new Array(n));
var inst_54508 = inst_54530;
var inst_54509 = (0);
var state_54550__$1 = (function (){var statearr_54583 = state_54550;
(statearr_54583[(7)] = inst_54509);

(statearr_54583[(10)] = inst_54529);

(statearr_54583[(8)] = inst_54508);

return statearr_54583;
})();
var statearr_54584_56686 = state_54550__$1;
(statearr_54584_56686[(2)] = null);

(statearr_54584_56686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (9))){
var inst_54508 = (state_54550[(8)]);
var inst_54527 = cljs.core.vec(inst_54508);
var state_54550__$1 = state_54550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54550__$1,(11),out,inst_54527);
} else {
if((state_val_54551 === (5))){
var inst_54509 = (state_54550[(7)]);
var inst_54513 = (state_54550[(9)]);
var inst_54508 = (state_54550[(8)]);
var inst_54521 = (state_54550[(11)]);
var inst_54520 = (inst_54508[inst_54509] = inst_54513);
var inst_54521__$1 = (inst_54509 + (1));
var inst_54522 = (inst_54521__$1 < n);
var state_54550__$1 = (function (){var statearr_54586 = state_54550;
(statearr_54586[(12)] = inst_54520);

(statearr_54586[(11)] = inst_54521__$1);

return statearr_54586;
})();
if(cljs.core.truth_(inst_54522)){
var statearr_54587_56687 = state_54550__$1;
(statearr_54587_56687[(1)] = (8));

} else {
var statearr_54588_56688 = state_54550__$1;
(statearr_54588_56688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (14))){
var inst_54543 = (state_54550[(2)]);
var inst_54544 = cljs.core.async.close_BANG_(out);
var state_54550__$1 = (function (){var statearr_54594 = state_54550;
(statearr_54594[(13)] = inst_54543);

return statearr_54594;
})();
var statearr_54595_56689 = state_54550__$1;
(statearr_54595_56689[(2)] = inst_54544);

(statearr_54595_56689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (10))){
var inst_54533 = (state_54550[(2)]);
var state_54550__$1 = state_54550;
var statearr_54596_56694 = state_54550__$1;
(statearr_54596_56694[(2)] = inst_54533);

(statearr_54596_56694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54551 === (8))){
var inst_54508 = (state_54550[(8)]);
var inst_54521 = (state_54550[(11)]);
var tmp54591 = inst_54508;
var inst_54508__$1 = tmp54591;
var inst_54509 = inst_54521;
var state_54550__$1 = (function (){var statearr_54598 = state_54550;
(statearr_54598[(7)] = inst_54509);

(statearr_54598[(8)] = inst_54508__$1);

return statearr_54598;
})();
var statearr_54602_56695 = state_54550__$1;
(statearr_54602_56695[(2)] = null);

(statearr_54602_56695[(1)] = (2));


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
});})(c__51169__auto___56670,out))
;
return ((function (switch__50952__auto__,c__51169__auto___56670,out){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_54613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54613[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_54613[(1)] = (1));

return statearr_54613;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_54550){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_54550);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e54616){if((e54616 instanceof Object)){
var ex__50956__auto__ = e54616;
var statearr_54619_56697 = state_54550;
(statearr_54619_56697[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54616;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56698 = state_54550;
state_54550 = G__56698;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_54550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_54550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56670,out))
})();
var state__51171__auto__ = (function (){var statearr_54628 = f__51170__auto__();
(statearr_54628[(6)] = c__51169__auto___56670);

return statearr_54628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56670,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__54644 = arguments.length;
switch (G__54644) {
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
var c__51169__auto___56703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___56703,out){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___56703,out){
return (function (state_54702){
var state_val_54703 = (state_54702[(1)]);
if((state_val_54703 === (7))){
var inst_54698 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54706_56704 = state_54702__$1;
(statearr_54706_56704[(2)] = inst_54698);

(statearr_54706_56704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (1))){
var inst_54651 = [];
var inst_54652 = inst_54651;
var inst_54653 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_54702__$1 = (function (){var statearr_54709 = state_54702;
(statearr_54709[(7)] = inst_54652);

(statearr_54709[(8)] = inst_54653);

return statearr_54709;
})();
var statearr_54711_56705 = state_54702__$1;
(statearr_54711_56705[(2)] = null);

(statearr_54711_56705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (4))){
var inst_54656 = (state_54702[(9)]);
var inst_54656__$1 = (state_54702[(2)]);
var inst_54657 = (inst_54656__$1 == null);
var inst_54658 = cljs.core.not(inst_54657);
var state_54702__$1 = (function (){var statearr_54712 = state_54702;
(statearr_54712[(9)] = inst_54656__$1);

return statearr_54712;
})();
if(inst_54658){
var statearr_54713_56706 = state_54702__$1;
(statearr_54713_56706[(1)] = (5));

} else {
var statearr_54714_56707 = state_54702__$1;
(statearr_54714_56707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (15))){
var inst_54692 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54715_56708 = state_54702__$1;
(statearr_54715_56708[(2)] = inst_54692);

(statearr_54715_56708[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (13))){
var state_54702__$1 = state_54702;
var statearr_54720_56709 = state_54702__$1;
(statearr_54720_56709[(2)] = null);

(statearr_54720_56709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (6))){
var inst_54652 = (state_54702[(7)]);
var inst_54687 = inst_54652.length;
var inst_54688 = (inst_54687 > (0));
var state_54702__$1 = state_54702;
if(cljs.core.truth_(inst_54688)){
var statearr_54721_56710 = state_54702__$1;
(statearr_54721_56710[(1)] = (12));

} else {
var statearr_54722_56711 = state_54702__$1;
(statearr_54722_56711[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (3))){
var inst_54700 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54702__$1,inst_54700);
} else {
if((state_val_54703 === (12))){
var inst_54652 = (state_54702[(7)]);
var inst_54690 = cljs.core.vec(inst_54652);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54702__$1,(15),out,inst_54690);
} else {
if((state_val_54703 === (2))){
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54702__$1,(4),ch);
} else {
if((state_val_54703 === (11))){
var inst_54660 = (state_54702[(10)]);
var inst_54656 = (state_54702[(9)]);
var inst_54676 = (state_54702[(2)]);
var inst_54677 = [];
var inst_54678 = inst_54677.push(inst_54656);
var inst_54652 = inst_54677;
var inst_54653 = inst_54660;
var state_54702__$1 = (function (){var statearr_54727 = state_54702;
(statearr_54727[(11)] = inst_54678);

(statearr_54727[(7)] = inst_54652);

(statearr_54727[(8)] = inst_54653);

(statearr_54727[(12)] = inst_54676);

return statearr_54727;
})();
var statearr_54728_56714 = state_54702__$1;
(statearr_54728_56714[(2)] = null);

(statearr_54728_56714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (9))){
var inst_54652 = (state_54702[(7)]);
var inst_54674 = cljs.core.vec(inst_54652);
var state_54702__$1 = state_54702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54702__$1,(11),out,inst_54674);
} else {
if((state_val_54703 === (5))){
var inst_54660 = (state_54702[(10)]);
var inst_54653 = (state_54702[(8)]);
var inst_54656 = (state_54702[(9)]);
var inst_54660__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_54656) : f.call(null,inst_54656));
var inst_54665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54660__$1,inst_54653);
var inst_54666 = cljs.core.keyword_identical_QMARK_(inst_54653,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_54667 = ((inst_54665) || (inst_54666));
var state_54702__$1 = (function (){var statearr_54744 = state_54702;
(statearr_54744[(10)] = inst_54660__$1);

return statearr_54744;
})();
if(cljs.core.truth_(inst_54667)){
var statearr_54746_56716 = state_54702__$1;
(statearr_54746_56716[(1)] = (8));

} else {
var statearr_54747_56717 = state_54702__$1;
(statearr_54747_56717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (14))){
var inst_54695 = (state_54702[(2)]);
var inst_54696 = cljs.core.async.close_BANG_(out);
var state_54702__$1 = (function (){var statearr_54758 = state_54702;
(statearr_54758[(13)] = inst_54695);

return statearr_54758;
})();
var statearr_54761_56718 = state_54702__$1;
(statearr_54761_56718[(2)] = inst_54696);

(statearr_54761_56718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (10))){
var inst_54681 = (state_54702[(2)]);
var state_54702__$1 = state_54702;
var statearr_54762_56720 = state_54702__$1;
(statearr_54762_56720[(2)] = inst_54681);

(statearr_54762_56720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54703 === (8))){
var inst_54660 = (state_54702[(10)]);
var inst_54652 = (state_54702[(7)]);
var inst_54656 = (state_54702[(9)]);
var inst_54669 = inst_54652.push(inst_54656);
var tmp54753 = inst_54652;
var inst_54652__$1 = tmp54753;
var inst_54653 = inst_54660;
var state_54702__$1 = (function (){var statearr_54767 = state_54702;
(statearr_54767[(14)] = inst_54669);

(statearr_54767[(7)] = inst_54652__$1);

(statearr_54767[(8)] = inst_54653);

return statearr_54767;
})();
var statearr_54768_56724 = state_54702__$1;
(statearr_54768_56724[(2)] = null);

(statearr_54768_56724[(1)] = (2));


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
});})(c__51169__auto___56703,out))
;
return ((function (switch__50952__auto__,c__51169__auto___56703,out){
return (function() {
var cljs$core$async$state_machine__50953__auto__ = null;
var cljs$core$async$state_machine__50953__auto____0 = (function (){
var statearr_54775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54775[(0)] = cljs$core$async$state_machine__50953__auto__);

(statearr_54775[(1)] = (1));

return statearr_54775;
});
var cljs$core$async$state_machine__50953__auto____1 = (function (state_54702){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_54702);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e54777){if((e54777 instanceof Object)){
var ex__50956__auto__ = e54777;
var statearr_54779_56727 = state_54702;
(statearr_54779_56727[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_54702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54777;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56729 = state_54702;
state_54702 = G__56729;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
cljs$core$async$state_machine__50953__auto__ = function(state_54702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50953__auto____1.call(this,state_54702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50953__auto____0;
cljs$core$async$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50953__auto____1;
return cljs$core$async$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___56703,out))
})();
var state__51171__auto__ = (function (){var statearr_54783 = f__51170__auto__();
(statearr_54783[(6)] = c__51169__auto___56703);

return statearr_54783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___56703,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
