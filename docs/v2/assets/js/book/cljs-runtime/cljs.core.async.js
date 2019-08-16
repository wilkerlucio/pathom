goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44701 = arguments.length;
switch (G__44701) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44703 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44703 = (function (f,blockable,meta44704){
this.f = f;
this.blockable = blockable;
this.meta44704 = meta44704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44705,meta44704__$1){
var self__ = this;
var _44705__$1 = this;
return (new cljs.core.async.t_cljs$core$async44703(self__.f,self__.blockable,meta44704__$1));
});

cljs.core.async.t_cljs$core$async44703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44705){
var self__ = this;
var _44705__$1 = this;
return self__.meta44704;
});

cljs.core.async.t_cljs$core$async44703.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44704","meta44704",1764571779,null)], null);
});

cljs.core.async.t_cljs$core$async44703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44703";

cljs.core.async.t_cljs$core$async44703.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44703");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44703.
 */
cljs.core.async.__GT_t_cljs$core$async44703 = (function cljs$core$async$__GT_t_cljs$core$async44703(f__$1,blockable__$1,meta44704){
return (new cljs.core.async.t_cljs$core$async44703(f__$1,blockable__$1,meta44704));
});

}

return (new cljs.core.async.t_cljs$core$async44703(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44720 = arguments.length;
switch (G__44720) {
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
var G__44724 = arguments.length;
switch (G__44724) {
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
var G__44730 = arguments.length;
switch (G__44730) {
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
var val_47523 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47523) : fn1.call(null,val_47523));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47523,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47523) : fn1.call(null,val_47523));
});})(val_47523,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44739 = arguments.length;
switch (G__44739) {
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
var n__4607__auto___47539 = n;
var x_47540 = (0);
while(true){
if((x_47540 < n__4607__auto___47539)){
(a[x_47540] = (0));

var G__47541 = (x_47540 + (1));
x_47540 = G__47541;
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

var G__47542 = (i + (1));
i = G__47542;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44755 = (function (flag,meta44756){
this.flag = flag;
this.meta44756 = meta44756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44757,meta44756__$1){
var self__ = this;
var _44757__$1 = this;
return (new cljs.core.async.t_cljs$core$async44755(self__.flag,meta44756__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44757){
var self__ = this;
var _44757__$1 = this;
return self__.meta44756;
});})(flag))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44755.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44755.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44756","meta44756",1359985615,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44755.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44755";

cljs.core.async.t_cljs$core$async44755.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44755");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44755.
 */
cljs.core.async.__GT_t_cljs$core$async44755 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44755(flag__$1,meta44756){
return (new cljs.core.async.t_cljs$core$async44755(flag__$1,meta44756));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44755(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44766 = (function (flag,cb,meta44767){
this.flag = flag;
this.cb = cb;
this.meta44767 = meta44767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44768,meta44767__$1){
var self__ = this;
var _44768__$1 = this;
return (new cljs.core.async.t_cljs$core$async44766(self__.flag,self__.cb,meta44767__$1));
});

cljs.core.async.t_cljs$core$async44766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44768){
var self__ = this;
var _44768__$1 = this;
return self__.meta44767;
});

cljs.core.async.t_cljs$core$async44766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async44766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44767","meta44767",254063037,null)], null);
});

cljs.core.async.t_cljs$core$async44766.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44766";

cljs.core.async.t_cljs$core$async44766.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44766");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44766.
 */
cljs.core.async.__GT_t_cljs$core$async44766 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44766(flag__$1,cb__$1,meta44767){
return (new cljs.core.async.t_cljs$core$async44766(flag__$1,cb__$1,meta44767));
});

}

return (new cljs.core.async.t_cljs$core$async44766(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44806_SHARP_){
var G__44833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44806_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44833) : fret.call(null,G__44833));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44807_SHARP_){
var G__44834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44807_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44834) : fret.call(null,G__44834));
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
var G__47565 = (i + (1));
i = G__47565;
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
var len__4730__auto___47570 = arguments.length;
var i__4731__auto___47571 = (0);
while(true){
if((i__4731__auto___47571 < len__4730__auto___47570)){
args__4736__auto__.push((arguments[i__4731__auto___47571]));

var G__47572 = (i__4731__auto___47571 + (1));
i__4731__auto___47571 = G__47572;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44844){
var map__44845 = p__44844;
var map__44845__$1 = (((((!((map__44845 == null))))?(((((map__44845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44845):map__44845);
var opts = map__44845__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44842){
var G__44843 = cljs.core.first(seq44842);
var seq44842__$1 = cljs.core.next(seq44842);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44843,seq44842__$1);
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
var G__44859 = arguments.length;
switch (G__44859) {
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
var c__44617__auto___47590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___47590){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___47590){
return (function (state_44909){
var state_val_44910 = (state_44909[(1)]);
if((state_val_44910 === (7))){
var inst_44904 = (state_44909[(2)]);
var state_44909__$1 = state_44909;
var statearr_44917_47592 = state_44909__$1;
(statearr_44917_47592[(2)] = inst_44904);

(statearr_44917_47592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (1))){
var state_44909__$1 = state_44909;
var statearr_44918_47595 = state_44909__$1;
(statearr_44918_47595[(2)] = null);

(statearr_44918_47595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (4))){
var inst_44878 = (state_44909[(7)]);
var inst_44878__$1 = (state_44909[(2)]);
var inst_44881 = (inst_44878__$1 == null);
var state_44909__$1 = (function (){var statearr_44922 = state_44909;
(statearr_44922[(7)] = inst_44878__$1);

return statearr_44922;
})();
if(cljs.core.truth_(inst_44881)){
var statearr_44923_47598 = state_44909__$1;
(statearr_44923_47598[(1)] = (5));

} else {
var statearr_44924_47599 = state_44909__$1;
(statearr_44924_47599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (13))){
var state_44909__$1 = state_44909;
var statearr_44928_47600 = state_44909__$1;
(statearr_44928_47600[(2)] = null);

(statearr_44928_47600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (6))){
var inst_44878 = (state_44909[(7)]);
var state_44909__$1 = state_44909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44909__$1,(11),to,inst_44878);
} else {
if((state_val_44910 === (3))){
var inst_44907 = (state_44909[(2)]);
var state_44909__$1 = state_44909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44909__$1,inst_44907);
} else {
if((state_val_44910 === (12))){
var state_44909__$1 = state_44909;
var statearr_44936_47602 = state_44909__$1;
(statearr_44936_47602[(2)] = null);

(statearr_44936_47602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (2))){
var state_44909__$1 = state_44909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44909__$1,(4),from);
} else {
if((state_val_44910 === (11))){
var inst_44894 = (state_44909[(2)]);
var state_44909__$1 = state_44909;
if(cljs.core.truth_(inst_44894)){
var statearr_44937_47603 = state_44909__$1;
(statearr_44937_47603[(1)] = (12));

} else {
var statearr_44938_47605 = state_44909__$1;
(statearr_44938_47605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (9))){
var state_44909__$1 = state_44909;
var statearr_44939_47606 = state_44909__$1;
(statearr_44939_47606[(2)] = null);

(statearr_44939_47606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (5))){
var state_44909__$1 = state_44909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44943_47607 = state_44909__$1;
(statearr_44943_47607[(1)] = (8));

} else {
var statearr_44944_47608 = state_44909__$1;
(statearr_44944_47608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (14))){
var inst_44902 = (state_44909[(2)]);
var state_44909__$1 = state_44909;
var statearr_44946_47610 = state_44909__$1;
(statearr_44946_47610[(2)] = inst_44902);

(statearr_44946_47610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (10))){
var inst_44891 = (state_44909[(2)]);
var state_44909__$1 = state_44909;
var statearr_44947_47612 = state_44909__$1;
(statearr_44947_47612[(2)] = inst_44891);

(statearr_44947_47612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44910 === (8))){
var inst_44884 = cljs.core.async.close_BANG_(to);
var state_44909__$1 = state_44909;
var statearr_44948_47613 = state_44909__$1;
(statearr_44948_47613[(2)] = inst_44884);

(statearr_44948_47613[(1)] = (10));


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
});})(c__44617__auto___47590))
;
return ((function (switch__44304__auto__,c__44617__auto___47590){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_44949 = [null,null,null,null,null,null,null,null];
(statearr_44949[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_44949[(1)] = (1));

return statearr_44949;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_44909){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_44909);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e44950){if((e44950 instanceof Object)){
var ex__44308__auto__ = e44950;
var statearr_44951_47614 = state_44909;
(statearr_44951_47614[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44950;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47615 = state_44909;
state_44909 = G__47615;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_44909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_44909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___47590))
})();
var state__44619__auto__ = (function (){var statearr_44952 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_44952[(6)] = c__44617__auto___47590);

return statearr_44952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___47590))
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
return (function (p__44964){
var vec__44965 = p__44964;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44965,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44965,(1),null);
var job = vec__44965;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44617__auto___47619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___47619,res,vec__44965,v,p,job,jobs,results){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___47619,res,vec__44965,v,p,job,jobs,results){
return (function (state_44972){
var state_val_44973 = (state_44972[(1)]);
if((state_val_44973 === (1))){
var state_44972__$1 = state_44972;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44972__$1,(2),res,v);
} else {
if((state_val_44973 === (2))){
var inst_44969 = (state_44972[(2)]);
var inst_44970 = cljs.core.async.close_BANG_(res);
var state_44972__$1 = (function (){var statearr_44978 = state_44972;
(statearr_44978[(7)] = inst_44969);

return statearr_44978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44972__$1,inst_44970);
} else {
return null;
}
}
});})(c__44617__auto___47619,res,vec__44965,v,p,job,jobs,results))
;
return ((function (switch__44304__auto__,c__44617__auto___47619,res,vec__44965,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0 = (function (){
var statearr_44981 = [null,null,null,null,null,null,null,null];
(statearr_44981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__);

(statearr_44981[(1)] = (1));

return statearr_44981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1 = (function (state_44972){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_44972);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e44987){if((e44987 instanceof Object)){
var ex__44308__auto__ = e44987;
var statearr_44988_47631 = state_44972;
(statearr_44988_47631[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47634 = state_44972;
state_44972 = G__47634;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = function(state_44972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1.call(this,state_44972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___47619,res,vec__44965,v,p,job,jobs,results))
})();
var state__44619__auto__ = (function (){var statearr_44989 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_44989[(6)] = c__44617__auto___47619);

return statearr_44989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___47619,res,vec__44965,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44991){
var vec__44992 = p__44991;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44992,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44992,(1),null);
var job = vec__44992;
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
var n__4607__auto___47637 = n;
var __47638 = (0);
while(true){
if((__47638 < n__4607__auto___47637)){
var G__44995_47639 = type;
var G__44995_47640__$1 = (((G__44995_47639 instanceof cljs.core.Keyword))?G__44995_47639.fqn:null);
switch (G__44995_47640__$1) {
case "compute":
var c__44617__auto___47642 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47638,c__44617__auto___47642,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (__47638,c__44617__auto___47642,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async){
return (function (state_45009){
var state_val_45010 = (state_45009[(1)]);
if((state_val_45010 === (1))){
var state_45009__$1 = state_45009;
var statearr_45011_47647 = state_45009__$1;
(statearr_45011_47647[(2)] = null);

(statearr_45011_47647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (2))){
var state_45009__$1 = state_45009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45009__$1,(4),jobs);
} else {
if((state_val_45010 === (3))){
var inst_45007 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45009__$1,inst_45007);
} else {
if((state_val_45010 === (4))){
var inst_44998 = (state_45009[(2)]);
var inst_44999 = process(inst_44998);
var state_45009__$1 = state_45009;
if(cljs.core.truth_(inst_44999)){
var statearr_45018_47648 = state_45009__$1;
(statearr_45018_47648[(1)] = (5));

} else {
var statearr_45019_47649 = state_45009__$1;
(statearr_45019_47649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (5))){
var state_45009__$1 = state_45009;
var statearr_45020_47653 = state_45009__$1;
(statearr_45020_47653[(2)] = null);

(statearr_45020_47653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (6))){
var state_45009__$1 = state_45009;
var statearr_45027_47654 = state_45009__$1;
(statearr_45027_47654[(2)] = null);

(statearr_45027_47654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (7))){
var inst_45005 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
var statearr_45030_47655 = state_45009__$1;
(statearr_45030_47655[(2)] = inst_45005);

(statearr_45030_47655[(1)] = (3));


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
});})(__47638,c__44617__auto___47642,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async))
;
return ((function (__47638,switch__44304__auto__,c__44617__auto___47642,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0 = (function (){
var statearr_45031 = [null,null,null,null,null,null,null];
(statearr_45031[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__);

(statearr_45031[(1)] = (1));

return statearr_45031;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1 = (function (state_45009){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45009);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45032){if((e45032 instanceof Object)){
var ex__44308__auto__ = e45032;
var statearr_45043_47658 = state_45009;
(statearr_45043_47658[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45032;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47659 = state_45009;
state_45009 = G__47659;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = function(state_45009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1.call(this,state_45009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__;
})()
;})(__47638,switch__44304__auto__,c__44617__auto___47642,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async))
})();
var state__44619__auto__ = (function (){var statearr_45045 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45045[(6)] = c__44617__auto___47642);

return statearr_45045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(__47638,c__44617__auto___47642,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async))
);


break;
case "async":
var c__44617__auto___47660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47638,c__44617__auto___47660,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (__47638,c__44617__auto___47660,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async){
return (function (state_45058){
var state_val_45059 = (state_45058[(1)]);
if((state_val_45059 === (1))){
var state_45058__$1 = state_45058;
var statearr_45062_47661 = state_45058__$1;
(statearr_45062_47661[(2)] = null);

(statearr_45062_47661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45059 === (2))){
var state_45058__$1 = state_45058;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45058__$1,(4),jobs);
} else {
if((state_val_45059 === (3))){
var inst_45056 = (state_45058[(2)]);
var state_45058__$1 = state_45058;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45058__$1,inst_45056);
} else {
if((state_val_45059 === (4))){
var inst_45048 = (state_45058[(2)]);
var inst_45049 = async(inst_45048);
var state_45058__$1 = state_45058;
if(cljs.core.truth_(inst_45049)){
var statearr_45067_47669 = state_45058__$1;
(statearr_45067_47669[(1)] = (5));

} else {
var statearr_45068_47670 = state_45058__$1;
(statearr_45068_47670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45059 === (5))){
var state_45058__$1 = state_45058;
var statearr_45069_47672 = state_45058__$1;
(statearr_45069_47672[(2)] = null);

(statearr_45069_47672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45059 === (6))){
var state_45058__$1 = state_45058;
var statearr_45070_47673 = state_45058__$1;
(statearr_45070_47673[(2)] = null);

(statearr_45070_47673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45059 === (7))){
var inst_45054 = (state_45058[(2)]);
var state_45058__$1 = state_45058;
var statearr_45071_47674 = state_45058__$1;
(statearr_45071_47674[(2)] = inst_45054);

(statearr_45071_47674[(1)] = (3));


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
});})(__47638,c__44617__auto___47660,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async))
;
return ((function (__47638,switch__44304__auto__,c__44617__auto___47660,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0 = (function (){
var statearr_45072 = [null,null,null,null,null,null,null];
(statearr_45072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__);

(statearr_45072[(1)] = (1));

return statearr_45072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1 = (function (state_45058){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45058);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45073){if((e45073 instanceof Object)){
var ex__44308__auto__ = e45073;
var statearr_45074_47677 = state_45058;
(statearr_45074_47677[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47679 = state_45058;
state_45058 = G__47679;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = function(state_45058){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1.call(this,state_45058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__;
})()
;})(__47638,switch__44304__auto__,c__44617__auto___47660,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async))
})();
var state__44619__auto__ = (function (){var statearr_45075 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45075[(6)] = c__44617__auto___47660);

return statearr_45075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(__47638,c__44617__auto___47660,G__44995_47639,G__44995_47640__$1,n__4607__auto___47637,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44995_47640__$1)].join('')));

}

var G__47692 = (__47638 + (1));
__47638 = G__47692;
continue;
} else {
}
break;
}

var c__44617__auto___47693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___47693,jobs,results,process,async){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___47693,jobs,results,process,async){
return (function (state_45110){
var state_val_45111 = (state_45110[(1)]);
if((state_val_45111 === (7))){
var inst_45105 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
var statearr_45123_47698 = state_45110__$1;
(statearr_45123_47698[(2)] = inst_45105);

(statearr_45123_47698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (1))){
var state_45110__$1 = state_45110;
var statearr_45124_47702 = state_45110__$1;
(statearr_45124_47702[(2)] = null);

(statearr_45124_47702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (4))){
var inst_45081 = (state_45110[(7)]);
var inst_45081__$1 = (state_45110[(2)]);
var inst_45083 = (inst_45081__$1 == null);
var state_45110__$1 = (function (){var statearr_45125 = state_45110;
(statearr_45125[(7)] = inst_45081__$1);

return statearr_45125;
})();
if(cljs.core.truth_(inst_45083)){
var statearr_45126_47710 = state_45110__$1;
(statearr_45126_47710[(1)] = (5));

} else {
var statearr_45127_47712 = state_45110__$1;
(statearr_45127_47712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (6))){
var inst_45081 = (state_45110[(7)]);
var inst_45089 = (state_45110[(8)]);
var inst_45089__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45092 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45094 = [inst_45081,inst_45089__$1];
var inst_45097 = (new cljs.core.PersistentVector(null,2,(5),inst_45092,inst_45094,null));
var state_45110__$1 = (function (){var statearr_45129 = state_45110;
(statearr_45129[(8)] = inst_45089__$1);

return statearr_45129;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45110__$1,(8),jobs,inst_45097);
} else {
if((state_val_45111 === (3))){
var inst_45107 = (state_45110[(2)]);
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45110__$1,inst_45107);
} else {
if((state_val_45111 === (2))){
var state_45110__$1 = state_45110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45110__$1,(4),from);
} else {
if((state_val_45111 === (9))){
var inst_45101 = (state_45110[(2)]);
var state_45110__$1 = (function (){var statearr_45135 = state_45110;
(statearr_45135[(9)] = inst_45101);

return statearr_45135;
})();
var statearr_45136_47723 = state_45110__$1;
(statearr_45136_47723[(2)] = null);

(statearr_45136_47723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (5))){
var inst_45086 = cljs.core.async.close_BANG_(jobs);
var state_45110__$1 = state_45110;
var statearr_45137_47724 = state_45110__$1;
(statearr_45137_47724[(2)] = inst_45086);

(statearr_45137_47724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45111 === (8))){
var inst_45089 = (state_45110[(8)]);
var inst_45099 = (state_45110[(2)]);
var state_45110__$1 = (function (){var statearr_45142 = state_45110;
(statearr_45142[(10)] = inst_45099);

return statearr_45142;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45110__$1,(9),results,inst_45089);
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
});})(c__44617__auto___47693,jobs,results,process,async))
;
return ((function (switch__44304__auto__,c__44617__auto___47693,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0 = (function (){
var statearr_45145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__);

(statearr_45145[(1)] = (1));

return statearr_45145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1 = (function (state_45110){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45110);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45146){if((e45146 instanceof Object)){
var ex__44308__auto__ = e45146;
var statearr_45147_47728 = state_45110;
(statearr_45147_47728[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47730 = state_45110;
state_45110 = G__47730;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = function(state_45110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1.call(this,state_45110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___47693,jobs,results,process,async))
})();
var state__44619__auto__ = (function (){var statearr_45149 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45149[(6)] = c__44617__auto___47693);

return statearr_45149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___47693,jobs,results,process,async))
);


var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__,jobs,results,process,async){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__,jobs,results,process,async){
return (function (state_45196){
var state_val_45197 = (state_45196[(1)]);
if((state_val_45197 === (7))){
var inst_45192 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45198_47734 = state_45196__$1;
(statearr_45198_47734[(2)] = inst_45192);

(statearr_45198_47734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (20))){
var state_45196__$1 = state_45196;
var statearr_45199_47735 = state_45196__$1;
(statearr_45199_47735[(2)] = null);

(statearr_45199_47735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (1))){
var state_45196__$1 = state_45196;
var statearr_45201_47736 = state_45196__$1;
(statearr_45201_47736[(2)] = null);

(statearr_45201_47736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (4))){
var inst_45152 = (state_45196[(7)]);
var inst_45152__$1 = (state_45196[(2)]);
var inst_45153 = (inst_45152__$1 == null);
var state_45196__$1 = (function (){var statearr_45202 = state_45196;
(statearr_45202[(7)] = inst_45152__$1);

return statearr_45202;
})();
if(cljs.core.truth_(inst_45153)){
var statearr_45203_47737 = state_45196__$1;
(statearr_45203_47737[(1)] = (5));

} else {
var statearr_45204_47738 = state_45196__$1;
(statearr_45204_47738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (15))){
var inst_45173 = (state_45196[(8)]);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45196__$1,(18),to,inst_45173);
} else {
if((state_val_45197 === (21))){
var inst_45187 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45205_47740 = state_45196__$1;
(statearr_45205_47740[(2)] = inst_45187);

(statearr_45205_47740[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (13))){
var inst_45189 = (state_45196[(2)]);
var state_45196__$1 = (function (){var statearr_45206 = state_45196;
(statearr_45206[(9)] = inst_45189);

return statearr_45206;
})();
var statearr_45207_47741 = state_45196__$1;
(statearr_45207_47741[(2)] = null);

(statearr_45207_47741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (6))){
var inst_45152 = (state_45196[(7)]);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45196__$1,(11),inst_45152);
} else {
if((state_val_45197 === (17))){
var inst_45182 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
if(cljs.core.truth_(inst_45182)){
var statearr_45209_47746 = state_45196__$1;
(statearr_45209_47746[(1)] = (19));

} else {
var statearr_45211_47747 = state_45196__$1;
(statearr_45211_47747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (3))){
var inst_45194 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45196__$1,inst_45194);
} else {
if((state_val_45197 === (12))){
var inst_45166 = (state_45196[(10)]);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45196__$1,(14),inst_45166);
} else {
if((state_val_45197 === (2))){
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45196__$1,(4),results);
} else {
if((state_val_45197 === (19))){
var state_45196__$1 = state_45196;
var statearr_45217_47748 = state_45196__$1;
(statearr_45217_47748[(2)] = null);

(statearr_45217_47748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (11))){
var inst_45166 = (state_45196[(2)]);
var state_45196__$1 = (function (){var statearr_45220 = state_45196;
(statearr_45220[(10)] = inst_45166);

return statearr_45220;
})();
var statearr_45221_47749 = state_45196__$1;
(statearr_45221_47749[(2)] = null);

(statearr_45221_47749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (9))){
var state_45196__$1 = state_45196;
var statearr_45222_47750 = state_45196__$1;
(statearr_45222_47750[(2)] = null);

(statearr_45222_47750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (5))){
var state_45196__$1 = state_45196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45223_47753 = state_45196__$1;
(statearr_45223_47753[(1)] = (8));

} else {
var statearr_45224_47754 = state_45196__$1;
(statearr_45224_47754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (14))){
var inst_45173 = (state_45196[(8)]);
var inst_45176 = (state_45196[(11)]);
var inst_45173__$1 = (state_45196[(2)]);
var inst_45175 = (inst_45173__$1 == null);
var inst_45176__$1 = cljs.core.not(inst_45175);
var state_45196__$1 = (function (){var statearr_45225 = state_45196;
(statearr_45225[(8)] = inst_45173__$1);

(statearr_45225[(11)] = inst_45176__$1);

return statearr_45225;
})();
if(inst_45176__$1){
var statearr_45226_47756 = state_45196__$1;
(statearr_45226_47756[(1)] = (15));

} else {
var statearr_45227_47757 = state_45196__$1;
(statearr_45227_47757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (16))){
var inst_45176 = (state_45196[(11)]);
var state_45196__$1 = state_45196;
var statearr_45228_47758 = state_45196__$1;
(statearr_45228_47758[(2)] = inst_45176);

(statearr_45228_47758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (10))){
var inst_45163 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45229_47759 = state_45196__$1;
(statearr_45229_47759[(2)] = inst_45163);

(statearr_45229_47759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (18))){
var inst_45179 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45230_47760 = state_45196__$1;
(statearr_45230_47760[(2)] = inst_45179);

(statearr_45230_47760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (8))){
var inst_45156 = cljs.core.async.close_BANG_(to);
var state_45196__$1 = state_45196;
var statearr_45231_47761 = state_45196__$1;
(statearr_45231_47761[(2)] = inst_45156);

(statearr_45231_47761[(1)] = (10));


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
});})(c__44617__auto__,jobs,results,process,async))
;
return ((function (switch__44304__auto__,c__44617__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0 = (function (){
var statearr_45233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45233[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__);

(statearr_45233[(1)] = (1));

return statearr_45233;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1 = (function (state_45196){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45196);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45234){if((e45234 instanceof Object)){
var ex__44308__auto__ = e45234;
var statearr_45235_47763 = state_45196;
(statearr_45235_47763[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47764 = state_45196;
state_45196 = G__47764;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__ = function(state_45196){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1.call(this,state_45196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__,jobs,results,process,async))
})();
var state__44619__auto__ = (function (){var statearr_45236 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45236[(6)] = c__44617__auto__);

return statearr_45236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__,jobs,results,process,async))
);

return c__44617__auto__;
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
var G__45239 = arguments.length;
switch (G__45239) {
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
var G__45243 = arguments.length;
switch (G__45243) {
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
var G__45260 = arguments.length;
switch (G__45260) {
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
var c__44617__auto___47786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___47786,tc,fc){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___47786,tc,fc){
return (function (state_45303){
var state_val_45306 = (state_45303[(1)]);
if((state_val_45306 === (7))){
var inst_45299 = (state_45303[(2)]);
var state_45303__$1 = state_45303;
var statearr_45313_47787 = state_45303__$1;
(statearr_45313_47787[(2)] = inst_45299);

(statearr_45313_47787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (1))){
var state_45303__$1 = state_45303;
var statearr_45323_47788 = state_45303__$1;
(statearr_45323_47788[(2)] = null);

(statearr_45323_47788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (4))){
var inst_45273 = (state_45303[(7)]);
var inst_45273__$1 = (state_45303[(2)]);
var inst_45274 = (inst_45273__$1 == null);
var state_45303__$1 = (function (){var statearr_45324 = state_45303;
(statearr_45324[(7)] = inst_45273__$1);

return statearr_45324;
})();
if(cljs.core.truth_(inst_45274)){
var statearr_45325_47790 = state_45303__$1;
(statearr_45325_47790[(1)] = (5));

} else {
var statearr_45326_47791 = state_45303__$1;
(statearr_45326_47791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (13))){
var state_45303__$1 = state_45303;
var statearr_45328_47792 = state_45303__$1;
(statearr_45328_47792[(2)] = null);

(statearr_45328_47792[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (6))){
var inst_45273 = (state_45303[(7)]);
var inst_45286 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45273) : p.call(null,inst_45273));
var state_45303__$1 = state_45303;
if(cljs.core.truth_(inst_45286)){
var statearr_45340_47805 = state_45303__$1;
(statearr_45340_47805[(1)] = (9));

} else {
var statearr_45341_47806 = state_45303__$1;
(statearr_45341_47806[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (3))){
var inst_45301 = (state_45303[(2)]);
var state_45303__$1 = state_45303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45303__$1,inst_45301);
} else {
if((state_val_45306 === (12))){
var state_45303__$1 = state_45303;
var statearr_45350_47816 = state_45303__$1;
(statearr_45350_47816[(2)] = null);

(statearr_45350_47816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (2))){
var state_45303__$1 = state_45303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45303__$1,(4),ch);
} else {
if((state_val_45306 === (11))){
var inst_45273 = (state_45303[(7)]);
var inst_45290 = (state_45303[(2)]);
var state_45303__$1 = state_45303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45303__$1,(8),inst_45290,inst_45273);
} else {
if((state_val_45306 === (9))){
var state_45303__$1 = state_45303;
var statearr_45355_47828 = state_45303__$1;
(statearr_45355_47828[(2)] = tc);

(statearr_45355_47828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (5))){
var inst_45277 = cljs.core.async.close_BANG_(tc);
var inst_45281 = cljs.core.async.close_BANG_(fc);
var state_45303__$1 = (function (){var statearr_45356 = state_45303;
(statearr_45356[(8)] = inst_45277);

return statearr_45356;
})();
var statearr_45359_47838 = state_45303__$1;
(statearr_45359_47838[(2)] = inst_45281);

(statearr_45359_47838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (14))){
var inst_45297 = (state_45303[(2)]);
var state_45303__$1 = state_45303;
var statearr_45366_47844 = state_45303__$1;
(statearr_45366_47844[(2)] = inst_45297);

(statearr_45366_47844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (10))){
var state_45303__$1 = state_45303;
var statearr_45369_47851 = state_45303__$1;
(statearr_45369_47851[(2)] = fc);

(statearr_45369_47851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45306 === (8))){
var inst_45292 = (state_45303[(2)]);
var state_45303__$1 = state_45303;
if(cljs.core.truth_(inst_45292)){
var statearr_45375_47857 = state_45303__$1;
(statearr_45375_47857[(1)] = (12));

} else {
var statearr_45377_47858 = state_45303__$1;
(statearr_45377_47858[(1)] = (13));

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
});})(c__44617__auto___47786,tc,fc))
;
return ((function (switch__44304__auto__,c__44617__auto___47786,tc,fc){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_45384 = [null,null,null,null,null,null,null,null,null];
(statearr_45384[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_45384[(1)] = (1));

return statearr_45384;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_45303){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45303);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45386){if((e45386 instanceof Object)){
var ex__44308__auto__ = e45386;
var statearr_45387_47862 = state_45303;
(statearr_45387_47862[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47863 = state_45303;
state_45303 = G__47863;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_45303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_45303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___47786,tc,fc))
})();
var state__44619__auto__ = (function (){var statearr_45393 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45393[(6)] = c__44617__auto___47786);

return statearr_45393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___47786,tc,fc))
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
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__){
return (function (state_45424){
var state_val_45425 = (state_45424[(1)]);
if((state_val_45425 === (7))){
var inst_45417 = (state_45424[(2)]);
var state_45424__$1 = state_45424;
var statearr_45428_47864 = state_45424__$1;
(statearr_45428_47864[(2)] = inst_45417);

(statearr_45428_47864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (1))){
var inst_45400 = init;
var state_45424__$1 = (function (){var statearr_45433 = state_45424;
(statearr_45433[(7)] = inst_45400);

return statearr_45433;
})();
var statearr_45434_47867 = state_45424__$1;
(statearr_45434_47867[(2)] = null);

(statearr_45434_47867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (4))){
var inst_45404 = (state_45424[(8)]);
var inst_45404__$1 = (state_45424[(2)]);
var inst_45405 = (inst_45404__$1 == null);
var state_45424__$1 = (function (){var statearr_45438 = state_45424;
(statearr_45438[(8)] = inst_45404__$1);

return statearr_45438;
})();
if(cljs.core.truth_(inst_45405)){
var statearr_45440_47868 = state_45424__$1;
(statearr_45440_47868[(1)] = (5));

} else {
var statearr_45441_47869 = state_45424__$1;
(statearr_45441_47869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (6))){
var inst_45400 = (state_45424[(7)]);
var inst_45404 = (state_45424[(8)]);
var inst_45408 = (state_45424[(9)]);
var inst_45408__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45400,inst_45404) : f.call(null,inst_45400,inst_45404));
var inst_45409 = cljs.core.reduced_QMARK_(inst_45408__$1);
var state_45424__$1 = (function (){var statearr_45443 = state_45424;
(statearr_45443[(9)] = inst_45408__$1);

return statearr_45443;
})();
if(inst_45409){
var statearr_45446_47871 = state_45424__$1;
(statearr_45446_47871[(1)] = (8));

} else {
var statearr_45448_47872 = state_45424__$1;
(statearr_45448_47872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (3))){
var inst_45419 = (state_45424[(2)]);
var state_45424__$1 = state_45424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45424__$1,inst_45419);
} else {
if((state_val_45425 === (2))){
var state_45424__$1 = state_45424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45424__$1,(4),ch);
} else {
if((state_val_45425 === (9))){
var inst_45408 = (state_45424[(9)]);
var inst_45400 = inst_45408;
var state_45424__$1 = (function (){var statearr_45452 = state_45424;
(statearr_45452[(7)] = inst_45400);

return statearr_45452;
})();
var statearr_45454_47875 = state_45424__$1;
(statearr_45454_47875[(2)] = null);

(statearr_45454_47875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (5))){
var inst_45400 = (state_45424[(7)]);
var state_45424__$1 = state_45424;
var statearr_45455_47876 = state_45424__$1;
(statearr_45455_47876[(2)] = inst_45400);

(statearr_45455_47876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (10))){
var inst_45415 = (state_45424[(2)]);
var state_45424__$1 = state_45424;
var statearr_45456_47877 = state_45424__$1;
(statearr_45456_47877[(2)] = inst_45415);

(statearr_45456_47877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45425 === (8))){
var inst_45408 = (state_45424[(9)]);
var inst_45411 = cljs.core.deref(inst_45408);
var state_45424__$1 = state_45424;
var statearr_45460_47879 = state_45424__$1;
(statearr_45460_47879[(2)] = inst_45411);

(statearr_45460_47879[(1)] = (10));


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
});})(c__44617__auto__))
;
return ((function (switch__44304__auto__,c__44617__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44305__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44305__auto____0 = (function (){
var statearr_45461 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45461[(0)] = cljs$core$async$reduce_$_state_machine__44305__auto__);

(statearr_45461[(1)] = (1));

return statearr_45461;
});
var cljs$core$async$reduce_$_state_machine__44305__auto____1 = (function (state_45424){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45424);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45462){if((e45462 instanceof Object)){
var ex__44308__auto__ = e45462;
var statearr_45463_47882 = state_45424;
(statearr_45463_47882[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47883 = state_45424;
state_45424 = G__47883;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44305__auto__ = function(state_45424){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44305__auto____1.call(this,state_45424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44305__auto____0;
cljs$core$async$reduce_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44305__auto____1;
return cljs$core$async$reduce_$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__))
})();
var state__44619__auto__ = (function (){var statearr_45464 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45464[(6)] = c__44617__auto__);

return statearr_45464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__))
);

return c__44617__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__,f__$1){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__,f__$1){
return (function (state_45470){
var state_val_45471 = (state_45470[(1)]);
if((state_val_45471 === (1))){
var inst_45465 = cljs.core.async.reduce(f__$1,init,ch);
var state_45470__$1 = state_45470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45470__$1,(2),inst_45465);
} else {
if((state_val_45471 === (2))){
var inst_45467 = (state_45470[(2)]);
var inst_45468 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45467) : f__$1.call(null,inst_45467));
var state_45470__$1 = state_45470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45470__$1,inst_45468);
} else {
return null;
}
}
});})(c__44617__auto__,f__$1))
;
return ((function (switch__44304__auto__,c__44617__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44305__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44305__auto____0 = (function (){
var statearr_45482 = [null,null,null,null,null,null,null];
(statearr_45482[(0)] = cljs$core$async$transduce_$_state_machine__44305__auto__);

(statearr_45482[(1)] = (1));

return statearr_45482;
});
var cljs$core$async$transduce_$_state_machine__44305__auto____1 = (function (state_45470){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45470);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45490){if((e45490 instanceof Object)){
var ex__44308__auto__ = e45490;
var statearr_45492_47887 = state_45470;
(statearr_45492_47887[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47889 = state_45470;
state_45470 = G__47889;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44305__auto__ = function(state_45470){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44305__auto____1.call(this,state_45470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44305__auto____0;
cljs$core$async$transduce_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44305__auto____1;
return cljs$core$async$transduce_$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__,f__$1))
})();
var state__44619__auto__ = (function (){var statearr_45498 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45498[(6)] = c__44617__auto__);

return statearr_45498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__,f__$1))
);

return c__44617__auto__;
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
var G__45505 = arguments.length;
switch (G__45505) {
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
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__){
return (function (state_45534){
var state_val_45535 = (state_45534[(1)]);
if((state_val_45535 === (7))){
var inst_45515 = (state_45534[(2)]);
var state_45534__$1 = state_45534;
var statearr_45556_47895 = state_45534__$1;
(statearr_45556_47895[(2)] = inst_45515);

(statearr_45556_47895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (1))){
var inst_45508 = cljs.core.seq(coll);
var inst_45509 = inst_45508;
var state_45534__$1 = (function (){var statearr_45557 = state_45534;
(statearr_45557[(7)] = inst_45509);

return statearr_45557;
})();
var statearr_45563_47896 = state_45534__$1;
(statearr_45563_47896[(2)] = null);

(statearr_45563_47896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (4))){
var inst_45509 = (state_45534[(7)]);
var inst_45513 = cljs.core.first(inst_45509);
var state_45534__$1 = state_45534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45534__$1,(7),ch,inst_45513);
} else {
if((state_val_45535 === (13))){
var inst_45528 = (state_45534[(2)]);
var state_45534__$1 = state_45534;
var statearr_45575_47897 = state_45534__$1;
(statearr_45575_47897[(2)] = inst_45528);

(statearr_45575_47897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (6))){
var inst_45518 = (state_45534[(2)]);
var state_45534__$1 = state_45534;
if(cljs.core.truth_(inst_45518)){
var statearr_45582_47898 = state_45534__$1;
(statearr_45582_47898[(1)] = (8));

} else {
var statearr_45583_47899 = state_45534__$1;
(statearr_45583_47899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (3))){
var inst_45532 = (state_45534[(2)]);
var state_45534__$1 = state_45534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45534__$1,inst_45532);
} else {
if((state_val_45535 === (12))){
var state_45534__$1 = state_45534;
var statearr_45588_47906 = state_45534__$1;
(statearr_45588_47906[(2)] = null);

(statearr_45588_47906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (2))){
var inst_45509 = (state_45534[(7)]);
var state_45534__$1 = state_45534;
if(cljs.core.truth_(inst_45509)){
var statearr_45589_47907 = state_45534__$1;
(statearr_45589_47907[(1)] = (4));

} else {
var statearr_45590_47908 = state_45534__$1;
(statearr_45590_47908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (11))){
var inst_45525 = cljs.core.async.close_BANG_(ch);
var state_45534__$1 = state_45534;
var statearr_45591_47909 = state_45534__$1;
(statearr_45591_47909[(2)] = inst_45525);

(statearr_45591_47909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (9))){
var state_45534__$1 = state_45534;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45592_47910 = state_45534__$1;
(statearr_45592_47910[(1)] = (11));

} else {
var statearr_45593_47911 = state_45534__$1;
(statearr_45593_47911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (5))){
var inst_45509 = (state_45534[(7)]);
var state_45534__$1 = state_45534;
var statearr_45597_47913 = state_45534__$1;
(statearr_45597_47913[(2)] = inst_45509);

(statearr_45597_47913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (10))){
var inst_45530 = (state_45534[(2)]);
var state_45534__$1 = state_45534;
var statearr_45601_47917 = state_45534__$1;
(statearr_45601_47917[(2)] = inst_45530);

(statearr_45601_47917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45535 === (8))){
var inst_45509 = (state_45534[(7)]);
var inst_45520 = cljs.core.next(inst_45509);
var inst_45509__$1 = inst_45520;
var state_45534__$1 = (function (){var statearr_45606 = state_45534;
(statearr_45606[(7)] = inst_45509__$1);

return statearr_45606;
})();
var statearr_45607_47919 = state_45534__$1;
(statearr_45607_47919[(2)] = null);

(statearr_45607_47919[(1)] = (2));


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
});})(c__44617__auto__))
;
return ((function (switch__44304__auto__,c__44617__auto__){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_45613 = [null,null,null,null,null,null,null,null];
(statearr_45613[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_45613[(1)] = (1));

return statearr_45613;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_45534){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45534);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e45615){if((e45615 instanceof Object)){
var ex__44308__auto__ = e45615;
var statearr_45616_47922 = state_45534;
(statearr_45616_47922[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47924 = state_45534;
state_45534 = G__47924;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_45534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_45534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__))
})();
var state__44619__auto__ = (function (){var statearr_45620 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_45620[(6)] = c__44617__auto__);

return statearr_45620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__))
);

return c__44617__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45659 = (function (ch,cs,meta45660){
this.ch = ch;
this.cs = cs;
this.meta45660 = meta45660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45661,meta45660__$1){
var self__ = this;
var _45661__$1 = this;
return (new cljs.core.async.t_cljs$core$async45659(self__.ch,self__.cs,meta45660__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45661){
var self__ = this;
var _45661__$1 = this;
return self__.meta45660;
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45660","meta45660",-885009221,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45659";

cljs.core.async.t_cljs$core$async45659.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45659");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45659.
 */
cljs.core.async.__GT_t_cljs$core$async45659 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45659(ch__$1,cs__$1,meta45660){
return (new cljs.core.async.t_cljs$core$async45659(ch__$1,cs__$1,meta45660));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45659(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44617__auto___47942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___47942,cs,m,dchan,dctr,done){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___47942,cs,m,dchan,dctr,done){
return (function (state_45843){
var state_val_45844 = (state_45843[(1)]);
if((state_val_45844 === (7))){
var inst_45839 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45851_47944 = state_45843__$1;
(statearr_45851_47944[(2)] = inst_45839);

(statearr_45851_47944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (20))){
var inst_45725 = (state_45843[(7)]);
var inst_45737 = cljs.core.first(inst_45725);
var inst_45738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45737,(0),null);
var inst_45739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45737,(1),null);
var state_45843__$1 = (function (){var statearr_45853 = state_45843;
(statearr_45853[(8)] = inst_45738);

return statearr_45853;
})();
if(cljs.core.truth_(inst_45739)){
var statearr_45854_47946 = state_45843__$1;
(statearr_45854_47946[(1)] = (22));

} else {
var statearr_45855_47948 = state_45843__$1;
(statearr_45855_47948[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (27))){
var inst_45779 = (state_45843[(9)]);
var inst_45693 = (state_45843[(10)]);
var inst_45786 = (state_45843[(11)]);
var inst_45781 = (state_45843[(12)]);
var inst_45786__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45779,inst_45781);
var inst_45787 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45786__$1,inst_45693,done);
var state_45843__$1 = (function (){var statearr_45857 = state_45843;
(statearr_45857[(11)] = inst_45786__$1);

return statearr_45857;
})();
if(cljs.core.truth_(inst_45787)){
var statearr_45858_47951 = state_45843__$1;
(statearr_45858_47951[(1)] = (30));

} else {
var statearr_45860_47952 = state_45843__$1;
(statearr_45860_47952[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (1))){
var state_45843__$1 = state_45843;
var statearr_45864_47954 = state_45843__$1;
(statearr_45864_47954[(2)] = null);

(statearr_45864_47954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (24))){
var inst_45725 = (state_45843[(7)]);
var inst_45746 = (state_45843[(2)]);
var inst_45747 = cljs.core.next(inst_45725);
var inst_45702 = inst_45747;
var inst_45703 = null;
var inst_45704 = (0);
var inst_45705 = (0);
var state_45843__$1 = (function (){var statearr_45868 = state_45843;
(statearr_45868[(13)] = inst_45704);

(statearr_45868[(14)] = inst_45703);

(statearr_45868[(15)] = inst_45705);

(statearr_45868[(16)] = inst_45702);

(statearr_45868[(17)] = inst_45746);

return statearr_45868;
})();
var statearr_45871_47956 = state_45843__$1;
(statearr_45871_47956[(2)] = null);

(statearr_45871_47956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (39))){
var state_45843__$1 = state_45843;
var statearr_45888_47957 = state_45843__$1;
(statearr_45888_47957[(2)] = null);

(statearr_45888_47957[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (4))){
var inst_45693 = (state_45843[(10)]);
var inst_45693__$1 = (state_45843[(2)]);
var inst_45694 = (inst_45693__$1 == null);
var state_45843__$1 = (function (){var statearr_45889 = state_45843;
(statearr_45889[(10)] = inst_45693__$1);

return statearr_45889;
})();
if(cljs.core.truth_(inst_45694)){
var statearr_45890_47959 = state_45843__$1;
(statearr_45890_47959[(1)] = (5));

} else {
var statearr_45891_47960 = state_45843__$1;
(statearr_45891_47960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (15))){
var inst_45704 = (state_45843[(13)]);
var inst_45703 = (state_45843[(14)]);
var inst_45705 = (state_45843[(15)]);
var inst_45702 = (state_45843[(16)]);
var inst_45721 = (state_45843[(2)]);
var inst_45722 = (inst_45705 + (1));
var tmp45880 = inst_45704;
var tmp45881 = inst_45703;
var tmp45882 = inst_45702;
var inst_45702__$1 = tmp45882;
var inst_45703__$1 = tmp45881;
var inst_45704__$1 = tmp45880;
var inst_45705__$1 = inst_45722;
var state_45843__$1 = (function (){var statearr_45892 = state_45843;
(statearr_45892[(13)] = inst_45704__$1);

(statearr_45892[(14)] = inst_45703__$1);

(statearr_45892[(18)] = inst_45721);

(statearr_45892[(15)] = inst_45705__$1);

(statearr_45892[(16)] = inst_45702__$1);

return statearr_45892;
})();
var statearr_45893_47963 = state_45843__$1;
(statearr_45893_47963[(2)] = null);

(statearr_45893_47963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (21))){
var inst_45752 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45897_47966 = state_45843__$1;
(statearr_45897_47966[(2)] = inst_45752);

(statearr_45897_47966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (31))){
var inst_45786 = (state_45843[(11)]);
var inst_45790 = done(null);
var inst_45791 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45786);
var state_45843__$1 = (function (){var statearr_45898 = state_45843;
(statearr_45898[(19)] = inst_45790);

return statearr_45898;
})();
var statearr_45899_47969 = state_45843__$1;
(statearr_45899_47969[(2)] = inst_45791);

(statearr_45899_47969[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (32))){
var inst_45779 = (state_45843[(9)]);
var inst_45780 = (state_45843[(20)]);
var inst_45778 = (state_45843[(21)]);
var inst_45781 = (state_45843[(12)]);
var inst_45794 = (state_45843[(2)]);
var inst_45795 = (inst_45781 + (1));
var tmp45894 = inst_45779;
var tmp45895 = inst_45780;
var tmp45896 = inst_45778;
var inst_45778__$1 = tmp45896;
var inst_45779__$1 = tmp45894;
var inst_45780__$1 = tmp45895;
var inst_45781__$1 = inst_45795;
var state_45843__$1 = (function (){var statearr_45900 = state_45843;
(statearr_45900[(9)] = inst_45779__$1);

(statearr_45900[(20)] = inst_45780__$1);

(statearr_45900[(21)] = inst_45778__$1);

(statearr_45900[(12)] = inst_45781__$1);

(statearr_45900[(22)] = inst_45794);

return statearr_45900;
})();
var statearr_45901_47974 = state_45843__$1;
(statearr_45901_47974[(2)] = null);

(statearr_45901_47974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (40))){
var inst_45809 = (state_45843[(23)]);
var inst_45813 = done(null);
var inst_45814 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45809);
var state_45843__$1 = (function (){var statearr_45902 = state_45843;
(statearr_45902[(24)] = inst_45813);

return statearr_45902;
})();
var statearr_45903_47976 = state_45843__$1;
(statearr_45903_47976[(2)] = inst_45814);

(statearr_45903_47976[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (33))){
var inst_45798 = (state_45843[(25)]);
var inst_45800 = cljs.core.chunked_seq_QMARK_(inst_45798);
var state_45843__$1 = state_45843;
if(inst_45800){
var statearr_45904_47978 = state_45843__$1;
(statearr_45904_47978[(1)] = (36));

} else {
var statearr_45905_47979 = state_45843__$1;
(statearr_45905_47979[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (13))){
var inst_45715 = (state_45843[(26)]);
var inst_45718 = cljs.core.async.close_BANG_(inst_45715);
var state_45843__$1 = state_45843;
var statearr_45906_47980 = state_45843__$1;
(statearr_45906_47980[(2)] = inst_45718);

(statearr_45906_47980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (22))){
var inst_45738 = (state_45843[(8)]);
var inst_45742 = cljs.core.async.close_BANG_(inst_45738);
var state_45843__$1 = state_45843;
var statearr_45907_47981 = state_45843__$1;
(statearr_45907_47981[(2)] = inst_45742);

(statearr_45907_47981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (36))){
var inst_45798 = (state_45843[(25)]);
var inst_45802 = cljs.core.chunk_first(inst_45798);
var inst_45803 = cljs.core.chunk_rest(inst_45798);
var inst_45805 = cljs.core.count(inst_45802);
var inst_45778 = inst_45803;
var inst_45779 = inst_45802;
var inst_45780 = inst_45805;
var inst_45781 = (0);
var state_45843__$1 = (function (){var statearr_45911 = state_45843;
(statearr_45911[(9)] = inst_45779);

(statearr_45911[(20)] = inst_45780);

(statearr_45911[(21)] = inst_45778);

(statearr_45911[(12)] = inst_45781);

return statearr_45911;
})();
var statearr_45912_47986 = state_45843__$1;
(statearr_45912_47986[(2)] = null);

(statearr_45912_47986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (41))){
var inst_45798 = (state_45843[(25)]);
var inst_45816 = (state_45843[(2)]);
var inst_45817 = cljs.core.next(inst_45798);
var inst_45778 = inst_45817;
var inst_45779 = null;
var inst_45780 = (0);
var inst_45781 = (0);
var state_45843__$1 = (function (){var statearr_45914 = state_45843;
(statearr_45914[(9)] = inst_45779);

(statearr_45914[(20)] = inst_45780);

(statearr_45914[(21)] = inst_45778);

(statearr_45914[(12)] = inst_45781);

(statearr_45914[(27)] = inst_45816);

return statearr_45914;
})();
var statearr_45920_47987 = state_45843__$1;
(statearr_45920_47987[(2)] = null);

(statearr_45920_47987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (43))){
var state_45843__$1 = state_45843;
var statearr_45923_47988 = state_45843__$1;
(statearr_45923_47988[(2)] = null);

(statearr_45923_47988[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (29))){
var inst_45825 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45925_47989 = state_45843__$1;
(statearr_45925_47989[(2)] = inst_45825);

(statearr_45925_47989[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (44))){
var inst_45836 = (state_45843[(2)]);
var state_45843__$1 = (function (){var statearr_45933 = state_45843;
(statearr_45933[(28)] = inst_45836);

return statearr_45933;
})();
var statearr_45934_47991 = state_45843__$1;
(statearr_45934_47991[(2)] = null);

(statearr_45934_47991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (6))){
var inst_45770 = (state_45843[(29)]);
var inst_45769 = cljs.core.deref(cs);
var inst_45770__$1 = cljs.core.keys(inst_45769);
var inst_45771 = cljs.core.count(inst_45770__$1);
var inst_45772 = cljs.core.reset_BANG_(dctr,inst_45771);
var inst_45777 = cljs.core.seq(inst_45770__$1);
var inst_45778 = inst_45777;
var inst_45779 = null;
var inst_45780 = (0);
var inst_45781 = (0);
var state_45843__$1 = (function (){var statearr_45939 = state_45843;
(statearr_45939[(9)] = inst_45779);

(statearr_45939[(30)] = inst_45772);

(statearr_45939[(20)] = inst_45780);

(statearr_45939[(21)] = inst_45778);

(statearr_45939[(12)] = inst_45781);

(statearr_45939[(29)] = inst_45770__$1);

return statearr_45939;
})();
var statearr_45940_47994 = state_45843__$1;
(statearr_45940_47994[(2)] = null);

(statearr_45940_47994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (28))){
var inst_45778 = (state_45843[(21)]);
var inst_45798 = (state_45843[(25)]);
var inst_45798__$1 = cljs.core.seq(inst_45778);
var state_45843__$1 = (function (){var statearr_45941 = state_45843;
(statearr_45941[(25)] = inst_45798__$1);

return statearr_45941;
})();
if(inst_45798__$1){
var statearr_45942_47996 = state_45843__$1;
(statearr_45942_47996[(1)] = (33));

} else {
var statearr_45943_47997 = state_45843__$1;
(statearr_45943_47997[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (25))){
var inst_45780 = (state_45843[(20)]);
var inst_45781 = (state_45843[(12)]);
var inst_45783 = (inst_45781 < inst_45780);
var inst_45784 = inst_45783;
var state_45843__$1 = state_45843;
if(cljs.core.truth_(inst_45784)){
var statearr_45944_47998 = state_45843__$1;
(statearr_45944_47998[(1)] = (27));

} else {
var statearr_45945_47999 = state_45843__$1;
(statearr_45945_47999[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (34))){
var state_45843__$1 = state_45843;
var statearr_45946_48000 = state_45843__$1;
(statearr_45946_48000[(2)] = null);

(statearr_45946_48000[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (17))){
var state_45843__$1 = state_45843;
var statearr_45947_48002 = state_45843__$1;
(statearr_45947_48002[(2)] = null);

(statearr_45947_48002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (3))){
var inst_45841 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45843__$1,inst_45841);
} else {
if((state_val_45844 === (12))){
var inst_45757 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45952_48003 = state_45843__$1;
(statearr_45952_48003[(2)] = inst_45757);

(statearr_45952_48003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (2))){
var state_45843__$1 = state_45843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45843__$1,(4),ch);
} else {
if((state_val_45844 === (23))){
var state_45843__$1 = state_45843;
var statearr_45958_48005 = state_45843__$1;
(statearr_45958_48005[(2)] = null);

(statearr_45958_48005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (35))){
var inst_45823 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45961_48006 = state_45843__$1;
(statearr_45961_48006[(2)] = inst_45823);

(statearr_45961_48006[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (19))){
var inst_45725 = (state_45843[(7)]);
var inst_45729 = cljs.core.chunk_first(inst_45725);
var inst_45730 = cljs.core.chunk_rest(inst_45725);
var inst_45731 = cljs.core.count(inst_45729);
var inst_45702 = inst_45730;
var inst_45703 = inst_45729;
var inst_45704 = inst_45731;
var inst_45705 = (0);
var state_45843__$1 = (function (){var statearr_45966 = state_45843;
(statearr_45966[(13)] = inst_45704);

(statearr_45966[(14)] = inst_45703);

(statearr_45966[(15)] = inst_45705);

(statearr_45966[(16)] = inst_45702);

return statearr_45966;
})();
var statearr_45967_48008 = state_45843__$1;
(statearr_45967_48008[(2)] = null);

(statearr_45967_48008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (11))){
var inst_45725 = (state_45843[(7)]);
var inst_45702 = (state_45843[(16)]);
var inst_45725__$1 = cljs.core.seq(inst_45702);
var state_45843__$1 = (function (){var statearr_45968 = state_45843;
(statearr_45968[(7)] = inst_45725__$1);

return statearr_45968;
})();
if(inst_45725__$1){
var statearr_45969_48009 = state_45843__$1;
(statearr_45969_48009[(1)] = (16));

} else {
var statearr_45970_48010 = state_45843__$1;
(statearr_45970_48010[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (9))){
var inst_45759 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45971_48011 = state_45843__$1;
(statearr_45971_48011[(2)] = inst_45759);

(statearr_45971_48011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (5))){
var inst_45700 = cljs.core.deref(cs);
var inst_45701 = cljs.core.seq(inst_45700);
var inst_45702 = inst_45701;
var inst_45703 = null;
var inst_45704 = (0);
var inst_45705 = (0);
var state_45843__$1 = (function (){var statearr_45974 = state_45843;
(statearr_45974[(13)] = inst_45704);

(statearr_45974[(14)] = inst_45703);

(statearr_45974[(15)] = inst_45705);

(statearr_45974[(16)] = inst_45702);

return statearr_45974;
})();
var statearr_45979_48013 = state_45843__$1;
(statearr_45979_48013[(2)] = null);

(statearr_45979_48013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (14))){
var state_45843__$1 = state_45843;
var statearr_45980_48014 = state_45843__$1;
(statearr_45980_48014[(2)] = null);

(statearr_45980_48014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (45))){
var inst_45833 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45981_48016 = state_45843__$1;
(statearr_45981_48016[(2)] = inst_45833);

(statearr_45981_48016[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (26))){
var inst_45770 = (state_45843[(29)]);
var inst_45828 = (state_45843[(2)]);
var inst_45830 = cljs.core.seq(inst_45770);
var state_45843__$1 = (function (){var statearr_45982 = state_45843;
(statearr_45982[(31)] = inst_45828);

return statearr_45982;
})();
if(inst_45830){
var statearr_45984_48018 = state_45843__$1;
(statearr_45984_48018[(1)] = (42));

} else {
var statearr_45985_48019 = state_45843__$1;
(statearr_45985_48019[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (16))){
var inst_45725 = (state_45843[(7)]);
var inst_45727 = cljs.core.chunked_seq_QMARK_(inst_45725);
var state_45843__$1 = state_45843;
if(inst_45727){
var statearr_45989_48022 = state_45843__$1;
(statearr_45989_48022[(1)] = (19));

} else {
var statearr_45993_48023 = state_45843__$1;
(statearr_45993_48023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (38))){
var inst_45820 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_45994_48024 = state_45843__$1;
(statearr_45994_48024[(2)] = inst_45820);

(statearr_45994_48024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (30))){
var state_45843__$1 = state_45843;
var statearr_45995_48025 = state_45843__$1;
(statearr_45995_48025[(2)] = null);

(statearr_45995_48025[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (10))){
var inst_45703 = (state_45843[(14)]);
var inst_45705 = (state_45843[(15)]);
var inst_45714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45703,inst_45705);
var inst_45715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45714,(0),null);
var inst_45716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45714,(1),null);
var state_45843__$1 = (function (){var statearr_46001 = state_45843;
(statearr_46001[(26)] = inst_45715);

return statearr_46001;
})();
if(cljs.core.truth_(inst_45716)){
var statearr_46002_48026 = state_45843__$1;
(statearr_46002_48026[(1)] = (13));

} else {
var statearr_46004_48027 = state_45843__$1;
(statearr_46004_48027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (18))){
var inst_45755 = (state_45843[(2)]);
var state_45843__$1 = state_45843;
var statearr_46007_48029 = state_45843__$1;
(statearr_46007_48029[(2)] = inst_45755);

(statearr_46007_48029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (42))){
var state_45843__$1 = state_45843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45843__$1,(45),dchan);
} else {
if((state_val_45844 === (37))){
var inst_45693 = (state_45843[(10)]);
var inst_45809 = (state_45843[(23)]);
var inst_45798 = (state_45843[(25)]);
var inst_45809__$1 = cljs.core.first(inst_45798);
var inst_45810 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45809__$1,inst_45693,done);
var state_45843__$1 = (function (){var statearr_46012 = state_45843;
(statearr_46012[(23)] = inst_45809__$1);

return statearr_46012;
})();
if(cljs.core.truth_(inst_45810)){
var statearr_46013_48033 = state_45843__$1;
(statearr_46013_48033[(1)] = (39));

} else {
var statearr_46016_48034 = state_45843__$1;
(statearr_46016_48034[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45844 === (8))){
var inst_45704 = (state_45843[(13)]);
var inst_45705 = (state_45843[(15)]);
var inst_45707 = (inst_45705 < inst_45704);
var inst_45708 = inst_45707;
var state_45843__$1 = state_45843;
if(cljs.core.truth_(inst_45708)){
var statearr_46020_48036 = state_45843__$1;
(statearr_46020_48036[(1)] = (10));

} else {
var statearr_46021_48037 = state_45843__$1;
(statearr_46021_48037[(1)] = (11));

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
});})(c__44617__auto___47942,cs,m,dchan,dctr,done))
;
return ((function (switch__44304__auto__,c__44617__auto___47942,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44305__auto__ = null;
var cljs$core$async$mult_$_state_machine__44305__auto____0 = (function (){
var statearr_46026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46026[(0)] = cljs$core$async$mult_$_state_machine__44305__auto__);

(statearr_46026[(1)] = (1));

return statearr_46026;
});
var cljs$core$async$mult_$_state_machine__44305__auto____1 = (function (state_45843){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_45843);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e46027){if((e46027 instanceof Object)){
var ex__44308__auto__ = e46027;
var statearr_46028_48047 = state_45843;
(statearr_46028_48047[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48048 = state_45843;
state_45843 = G__48048;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44305__auto__ = function(state_45843){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44305__auto____1.call(this,state_45843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44305__auto____0;
cljs$core$async$mult_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44305__auto____1;
return cljs$core$async$mult_$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___47942,cs,m,dchan,dctr,done))
})();
var state__44619__auto__ = (function (){var statearr_46030 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_46030[(6)] = c__44617__auto___47942);

return statearr_46030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___47942,cs,m,dchan,dctr,done))
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
var G__46035 = arguments.length;
switch (G__46035) {
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
var len__4730__auto___48085 = arguments.length;
var i__4731__auto___48086 = (0);
while(true){
if((i__4731__auto___48086 < len__4730__auto___48085)){
args__4736__auto__.push((arguments[i__4731__auto___48086]));

var G__48087 = (i__4731__auto___48086 + (1));
i__4731__auto___48086 = G__48087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46065){
var map__46066 = p__46065;
var map__46066__$1 = (((((!((map__46066 == null))))?(((((map__46066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46066):map__46066);
var opts = map__46066__$1;
var statearr_46069_48099 = state;
(statearr_46069_48099[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__46066,map__46066__$1,opts){
return (function (val){
var statearr_46070_48100 = state;
(statearr_46070_48100[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__46066,map__46066__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_46078_48103 = state;
(statearr_46078_48103[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46054){
var G__46055 = cljs.core.first(seq46054);
var seq46054__$1 = cljs.core.next(seq46054);
var G__46056 = cljs.core.first(seq46054__$1);
var seq46054__$2 = cljs.core.next(seq46054__$1);
var G__46057 = cljs.core.first(seq46054__$2);
var seq46054__$3 = cljs.core.next(seq46054__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46055,G__46056,G__46057,seq46054__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46096 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46097){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46097 = meta46097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46098,meta46097__$1){
var self__ = this;
var _46098__$1 = this;
return (new cljs.core.async.t_cljs$core$async46096(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46097__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46098){
var self__ = this;
var _46098__$1 = this;
return self__.meta46097;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46096.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46097","meta46097",793954576,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46096";

cljs.core.async.t_cljs$core$async46096.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46096");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46096.
 */
cljs.core.async.__GT_t_cljs$core$async46096 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46096(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46097){
return (new cljs.core.async.t_cljs$core$async46096(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46097));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46096(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44617__auto___48146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46236){
var state_val_46237 = (state_46236[(1)]);
if((state_val_46237 === (7))){
var inst_46132 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
var statearr_46247_48149 = state_46236__$1;
(statearr_46247_48149[(2)] = inst_46132);

(statearr_46247_48149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (20))){
var inst_46146 = (state_46236[(7)]);
var state_46236__$1 = state_46236;
var statearr_46248_48152 = state_46236__$1;
(statearr_46248_48152[(2)] = inst_46146);

(statearr_46248_48152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (27))){
var state_46236__$1 = state_46236;
var statearr_46254_48153 = state_46236__$1;
(statearr_46254_48153[(2)] = null);

(statearr_46254_48153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (1))){
var inst_46119 = (state_46236[(8)]);
var inst_46119__$1 = calc_state();
var inst_46121 = (inst_46119__$1 == null);
var inst_46122 = cljs.core.not(inst_46121);
var state_46236__$1 = (function (){var statearr_46255 = state_46236;
(statearr_46255[(8)] = inst_46119__$1);

return statearr_46255;
})();
if(inst_46122){
var statearr_46258_48154 = state_46236__$1;
(statearr_46258_48154[(1)] = (2));

} else {
var statearr_46259_48156 = state_46236__$1;
(statearr_46259_48156[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (24))){
var inst_46177 = (state_46236[(9)]);
var inst_46205 = (state_46236[(10)]);
var inst_46188 = (state_46236[(11)]);
var inst_46205__$1 = (inst_46177.cljs$core$IFn$_invoke$arity$1 ? inst_46177.cljs$core$IFn$_invoke$arity$1(inst_46188) : inst_46177.call(null,inst_46188));
var state_46236__$1 = (function (){var statearr_46260 = state_46236;
(statearr_46260[(10)] = inst_46205__$1);

return statearr_46260;
})();
if(cljs.core.truth_(inst_46205__$1)){
var statearr_46262_48158 = state_46236__$1;
(statearr_46262_48158[(1)] = (29));

} else {
var statearr_46264_48159 = state_46236__$1;
(statearr_46264_48159[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (4))){
var inst_46135 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46135)){
var statearr_46267_48160 = state_46236__$1;
(statearr_46267_48160[(1)] = (8));

} else {
var statearr_46269_48161 = state_46236__$1;
(statearr_46269_48161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (15))){
var inst_46170 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46170)){
var statearr_46273_48163 = state_46236__$1;
(statearr_46273_48163[(1)] = (19));

} else {
var statearr_46274_48164 = state_46236__$1;
(statearr_46274_48164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (21))){
var inst_46176 = (state_46236[(12)]);
var inst_46176__$1 = (state_46236[(2)]);
var inst_46177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46176__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46176__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46179 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46176__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46236__$1 = (function (){var statearr_46284 = state_46236;
(statearr_46284[(9)] = inst_46177);

(statearr_46284[(12)] = inst_46176__$1);

(statearr_46284[(13)] = inst_46178);

return statearr_46284;
})();
return cljs.core.async.ioc_alts_BANG_(state_46236__$1,(22),inst_46179);
} else {
if((state_val_46237 === (31))){
var inst_46213 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46213)){
var statearr_46285_48166 = state_46236__$1;
(statearr_46285_48166[(1)] = (32));

} else {
var statearr_46286_48167 = state_46236__$1;
(statearr_46286_48167[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (32))){
var inst_46186 = (state_46236[(14)]);
var state_46236__$1 = state_46236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46236__$1,(35),out,inst_46186);
} else {
if((state_val_46237 === (33))){
var inst_46176 = (state_46236[(12)]);
var inst_46146 = inst_46176;
var state_46236__$1 = (function (){var statearr_46289 = state_46236;
(statearr_46289[(7)] = inst_46146);

return statearr_46289;
})();
var statearr_46293_48169 = state_46236__$1;
(statearr_46293_48169[(2)] = null);

(statearr_46293_48169[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (13))){
var inst_46146 = (state_46236[(7)]);
var inst_46159 = inst_46146.cljs$lang$protocol_mask$partition0$;
var inst_46160 = (inst_46159 & (64));
var inst_46161 = inst_46146.cljs$core$ISeq$;
var inst_46162 = (cljs.core.PROTOCOL_SENTINEL === inst_46161);
var inst_46163 = ((inst_46160) || (inst_46162));
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46163)){
var statearr_46296_48172 = state_46236__$1;
(statearr_46296_48172[(1)] = (16));

} else {
var statearr_46297_48173 = state_46236__$1;
(statearr_46297_48173[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (22))){
var inst_46186 = (state_46236[(14)]);
var inst_46188 = (state_46236[(11)]);
var inst_46185 = (state_46236[(2)]);
var inst_46186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46185,(0),null);
var inst_46188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46185,(1),null);
var inst_46190 = (inst_46186__$1 == null);
var inst_46191 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46188__$1,change);
var inst_46192 = ((inst_46190) || (inst_46191));
var state_46236__$1 = (function (){var statearr_46298 = state_46236;
(statearr_46298[(14)] = inst_46186__$1);

(statearr_46298[(11)] = inst_46188__$1);

return statearr_46298;
})();
if(cljs.core.truth_(inst_46192)){
var statearr_46300_48176 = state_46236__$1;
(statearr_46300_48176[(1)] = (23));

} else {
var statearr_46301_48178 = state_46236__$1;
(statearr_46301_48178[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (36))){
var inst_46176 = (state_46236[(12)]);
var inst_46146 = inst_46176;
var state_46236__$1 = (function (){var statearr_46303 = state_46236;
(statearr_46303[(7)] = inst_46146);

return statearr_46303;
})();
var statearr_46305_48179 = state_46236__$1;
(statearr_46305_48179[(2)] = null);

(statearr_46305_48179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (29))){
var inst_46205 = (state_46236[(10)]);
var state_46236__$1 = state_46236;
var statearr_46306_48180 = state_46236__$1;
(statearr_46306_48180[(2)] = inst_46205);

(statearr_46306_48180[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (6))){
var state_46236__$1 = state_46236;
var statearr_46308_48182 = state_46236__$1;
(statearr_46308_48182[(2)] = false);

(statearr_46308_48182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (28))){
var inst_46201 = (state_46236[(2)]);
var inst_46202 = calc_state();
var inst_46146 = inst_46202;
var state_46236__$1 = (function (){var statearr_46310 = state_46236;
(statearr_46310[(7)] = inst_46146);

(statearr_46310[(15)] = inst_46201);

return statearr_46310;
})();
var statearr_46311_48185 = state_46236__$1;
(statearr_46311_48185[(2)] = null);

(statearr_46311_48185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (25))){
var inst_46228 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
var statearr_46312_48186 = state_46236__$1;
(statearr_46312_48186[(2)] = inst_46228);

(statearr_46312_48186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (34))){
var inst_46226 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
var statearr_46313_48189 = state_46236__$1;
(statearr_46313_48189[(2)] = inst_46226);

(statearr_46313_48189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (17))){
var state_46236__$1 = state_46236;
var statearr_46314_48190 = state_46236__$1;
(statearr_46314_48190[(2)] = false);

(statearr_46314_48190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (3))){
var state_46236__$1 = state_46236;
var statearr_46315_48191 = state_46236__$1;
(statearr_46315_48191[(2)] = false);

(statearr_46315_48191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (12))){
var inst_46231 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46236__$1,inst_46231);
} else {
if((state_val_46237 === (2))){
var inst_46119 = (state_46236[(8)]);
var inst_46124 = inst_46119.cljs$lang$protocol_mask$partition0$;
var inst_46125 = (inst_46124 & (64));
var inst_46126 = inst_46119.cljs$core$ISeq$;
var inst_46127 = (cljs.core.PROTOCOL_SENTINEL === inst_46126);
var inst_46128 = ((inst_46125) || (inst_46127));
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46128)){
var statearr_46318_48194 = state_46236__$1;
(statearr_46318_48194[(1)] = (5));

} else {
var statearr_46319_48197 = state_46236__$1;
(statearr_46319_48197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (23))){
var inst_46186 = (state_46236[(14)]);
var inst_46195 = (inst_46186 == null);
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46195)){
var statearr_46320_48198 = state_46236__$1;
(statearr_46320_48198[(1)] = (26));

} else {
var statearr_46322_48201 = state_46236__$1;
(statearr_46322_48201[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (35))){
var inst_46216 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
if(cljs.core.truth_(inst_46216)){
var statearr_46325_48202 = state_46236__$1;
(statearr_46325_48202[(1)] = (36));

} else {
var statearr_46326_48203 = state_46236__$1;
(statearr_46326_48203[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (19))){
var inst_46146 = (state_46236[(7)]);
var inst_46173 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46146);
var state_46236__$1 = state_46236;
var statearr_46330_48204 = state_46236__$1;
(statearr_46330_48204[(2)] = inst_46173);

(statearr_46330_48204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (11))){
var inst_46146 = (state_46236[(7)]);
var inst_46154 = (inst_46146 == null);
var inst_46155 = cljs.core.not(inst_46154);
var state_46236__$1 = state_46236;
if(inst_46155){
var statearr_46331_48206 = state_46236__$1;
(statearr_46331_48206[(1)] = (13));

} else {
var statearr_46333_48207 = state_46236__$1;
(statearr_46333_48207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (9))){
var inst_46119 = (state_46236[(8)]);
var state_46236__$1 = state_46236;
var statearr_46342_48208 = state_46236__$1;
(statearr_46342_48208[(2)] = inst_46119);

(statearr_46342_48208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (5))){
var state_46236__$1 = state_46236;
var statearr_46343_48211 = state_46236__$1;
(statearr_46343_48211[(2)] = true);

(statearr_46343_48211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (14))){
var state_46236__$1 = state_46236;
var statearr_46344_48213 = state_46236__$1;
(statearr_46344_48213[(2)] = false);

(statearr_46344_48213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (26))){
var inst_46188 = (state_46236[(11)]);
var inst_46198 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46188);
var state_46236__$1 = state_46236;
var statearr_46346_48216 = state_46236__$1;
(statearr_46346_48216[(2)] = inst_46198);

(statearr_46346_48216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (16))){
var state_46236__$1 = state_46236;
var statearr_46347_48217 = state_46236__$1;
(statearr_46347_48217[(2)] = true);

(statearr_46347_48217[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (38))){
var inst_46221 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
var statearr_46353_48219 = state_46236__$1;
(statearr_46353_48219[(2)] = inst_46221);

(statearr_46353_48219[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (30))){
var inst_46177 = (state_46236[(9)]);
var inst_46178 = (state_46236[(13)]);
var inst_46188 = (state_46236[(11)]);
var inst_46208 = cljs.core.empty_QMARK_(inst_46177);
var inst_46209 = (inst_46178.cljs$core$IFn$_invoke$arity$1 ? inst_46178.cljs$core$IFn$_invoke$arity$1(inst_46188) : inst_46178.call(null,inst_46188));
var inst_46210 = cljs.core.not(inst_46209);
var inst_46211 = ((inst_46208) && (inst_46210));
var state_46236__$1 = state_46236;
var statearr_46359_48220 = state_46236__$1;
(statearr_46359_48220[(2)] = inst_46211);

(statearr_46359_48220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (10))){
var inst_46119 = (state_46236[(8)]);
var inst_46140 = (state_46236[(2)]);
var inst_46141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46140,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46140,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46140,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46146 = inst_46119;
var state_46236__$1 = (function (){var statearr_46361 = state_46236;
(statearr_46361[(16)] = inst_46143);

(statearr_46361[(17)] = inst_46141);

(statearr_46361[(18)] = inst_46142);

(statearr_46361[(7)] = inst_46146);

return statearr_46361;
})();
var statearr_46362_48225 = state_46236__$1;
(statearr_46362_48225[(2)] = null);

(statearr_46362_48225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (18))){
var inst_46167 = (state_46236[(2)]);
var state_46236__$1 = state_46236;
var statearr_46363_48227 = state_46236__$1;
(statearr_46363_48227[(2)] = inst_46167);

(statearr_46363_48227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (37))){
var state_46236__$1 = state_46236;
var statearr_46365_48228 = state_46236__$1;
(statearr_46365_48228[(2)] = null);

(statearr_46365_48228[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46237 === (8))){
var inst_46119 = (state_46236[(8)]);
var inst_46137 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46119);
var state_46236__$1 = state_46236;
var statearr_46367_48230 = state_46236__$1;
(statearr_46367_48230[(2)] = inst_46137);

(statearr_46367_48230[(1)] = (10));


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
});})(c__44617__auto___48146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44304__auto__,c__44617__auto___48146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44305__auto__ = null;
var cljs$core$async$mix_$_state_machine__44305__auto____0 = (function (){
var statearr_46368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46368[(0)] = cljs$core$async$mix_$_state_machine__44305__auto__);

(statearr_46368[(1)] = (1));

return statearr_46368;
});
var cljs$core$async$mix_$_state_machine__44305__auto____1 = (function (state_46236){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_46236);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e46371){if((e46371 instanceof Object)){
var ex__44308__auto__ = e46371;
var statearr_46374_48233 = state_46236;
(statearr_46374_48233[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46371;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48234 = state_46236;
state_46236 = G__48234;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44305__auto__ = function(state_46236){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44305__auto____1.call(this,state_46236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44305__auto____0;
cljs$core$async$mix_$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44305__auto____1;
return cljs$core$async$mix_$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44619__auto__ = (function (){var statearr_46375 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_46375[(6)] = c__44617__auto___48146);

return statearr_46375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__46399 = arguments.length;
switch (G__46399) {
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
var G__46407 = arguments.length;
switch (G__46407) {
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
return (function (p1__46402_SHARP_){
if(cljs.core.truth_((p1__46402_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46402_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46402_SHARP_.call(null,topic)))){
return p1__46402_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46402_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46409 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46410){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46410 = meta46410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46411,meta46410__$1){
var self__ = this;
var _46411__$1 = this;
return (new cljs.core.async.t_cljs$core$async46409(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46410__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46411){
var self__ = this;
var _46411__$1 = this;
return self__.meta46410;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46410","meta46410",209262393,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46409";

cljs.core.async.t_cljs$core$async46409.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46409");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46409.
 */
cljs.core.async.__GT_t_cljs$core$async46409 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46409(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46410){
return (new cljs.core.async.t_cljs$core$async46409(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46410));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46409(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44617__auto___48284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48284,mults,ensure_mult,p){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48284,mults,ensure_mult,p){
return (function (state_46517){
var state_val_46520 = (state_46517[(1)]);
if((state_val_46520 === (7))){
var inst_46512 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46526_48288 = state_46517__$1;
(statearr_46526_48288[(2)] = inst_46512);

(statearr_46526_48288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (20))){
var state_46517__$1 = state_46517;
var statearr_46528_48290 = state_46517__$1;
(statearr_46528_48290[(2)] = null);

(statearr_46528_48290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (1))){
var state_46517__$1 = state_46517;
var statearr_46529_48293 = state_46517__$1;
(statearr_46529_48293[(2)] = null);

(statearr_46529_48293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (24))){
var inst_46493 = (state_46517[(7)]);
var inst_46504 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46493);
var state_46517__$1 = state_46517;
var statearr_46530_48296 = state_46517__$1;
(statearr_46530_48296[(2)] = inst_46504);

(statearr_46530_48296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (4))){
var inst_46438 = (state_46517[(8)]);
var inst_46438__$1 = (state_46517[(2)]);
var inst_46439 = (inst_46438__$1 == null);
var state_46517__$1 = (function (){var statearr_46532 = state_46517;
(statearr_46532[(8)] = inst_46438__$1);

return statearr_46532;
})();
if(cljs.core.truth_(inst_46439)){
var statearr_46533_48297 = state_46517__$1;
(statearr_46533_48297[(1)] = (5));

} else {
var statearr_46534_48298 = state_46517__$1;
(statearr_46534_48298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (15))){
var inst_46486 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46535_48299 = state_46517__$1;
(statearr_46535_48299[(2)] = inst_46486);

(statearr_46535_48299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (21))){
var inst_46509 = (state_46517[(2)]);
var state_46517__$1 = (function (){var statearr_46541 = state_46517;
(statearr_46541[(9)] = inst_46509);

return statearr_46541;
})();
var statearr_46542_48301 = state_46517__$1;
(statearr_46542_48301[(2)] = null);

(statearr_46542_48301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (13))){
var inst_46464 = (state_46517[(10)]);
var inst_46468 = cljs.core.chunked_seq_QMARK_(inst_46464);
var state_46517__$1 = state_46517;
if(inst_46468){
var statearr_46545_48305 = state_46517__$1;
(statearr_46545_48305[(1)] = (16));

} else {
var statearr_46546_48306 = state_46517__$1;
(statearr_46546_48306[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (22))){
var inst_46501 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46501)){
var statearr_46548_48309 = state_46517__$1;
(statearr_46548_48309[(1)] = (23));

} else {
var statearr_46553_48310 = state_46517__$1;
(statearr_46553_48310[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (6))){
var inst_46493 = (state_46517[(7)]);
var inst_46438 = (state_46517[(8)]);
var inst_46496 = (state_46517[(11)]);
var inst_46493__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46438) : topic_fn.call(null,inst_46438));
var inst_46495 = cljs.core.deref(mults);
var inst_46496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46495,inst_46493__$1);
var state_46517__$1 = (function (){var statearr_46556 = state_46517;
(statearr_46556[(7)] = inst_46493__$1);

(statearr_46556[(11)] = inst_46496__$1);

return statearr_46556;
})();
if(cljs.core.truth_(inst_46496__$1)){
var statearr_46558_48313 = state_46517__$1;
(statearr_46558_48313[(1)] = (19));

} else {
var statearr_46559_48314 = state_46517__$1;
(statearr_46559_48314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (25))){
var inst_46506 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46560_48316 = state_46517__$1;
(statearr_46560_48316[(2)] = inst_46506);

(statearr_46560_48316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (17))){
var inst_46464 = (state_46517[(10)]);
var inst_46476 = cljs.core.first(inst_46464);
var inst_46477 = cljs.core.async.muxch_STAR_(inst_46476);
var inst_46478 = cljs.core.async.close_BANG_(inst_46477);
var inst_46479 = cljs.core.next(inst_46464);
var inst_46448 = inst_46479;
var inst_46449 = null;
var inst_46450 = (0);
var inst_46451 = (0);
var state_46517__$1 = (function (){var statearr_46567 = state_46517;
(statearr_46567[(12)] = inst_46478);

(statearr_46567[(13)] = inst_46449);

(statearr_46567[(14)] = inst_46450);

(statearr_46567[(15)] = inst_46448);

(statearr_46567[(16)] = inst_46451);

return statearr_46567;
})();
var statearr_46568_48326 = state_46517__$1;
(statearr_46568_48326[(2)] = null);

(statearr_46568_48326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (3))){
var inst_46514 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46517__$1,inst_46514);
} else {
if((state_val_46520 === (12))){
var inst_46489 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46571_48327 = state_46517__$1;
(statearr_46571_48327[(2)] = inst_46489);

(statearr_46571_48327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (2))){
var state_46517__$1 = state_46517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46517__$1,(4),ch);
} else {
if((state_val_46520 === (23))){
var state_46517__$1 = state_46517;
var statearr_46576_48331 = state_46517__$1;
(statearr_46576_48331[(2)] = null);

(statearr_46576_48331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (19))){
var inst_46438 = (state_46517[(8)]);
var inst_46496 = (state_46517[(11)]);
var inst_46499 = cljs.core.async.muxch_STAR_(inst_46496);
var state_46517__$1 = state_46517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46517__$1,(22),inst_46499,inst_46438);
} else {
if((state_val_46520 === (11))){
var inst_46464 = (state_46517[(10)]);
var inst_46448 = (state_46517[(15)]);
var inst_46464__$1 = cljs.core.seq(inst_46448);
var state_46517__$1 = (function (){var statearr_46580 = state_46517;
(statearr_46580[(10)] = inst_46464__$1);

return statearr_46580;
})();
if(inst_46464__$1){
var statearr_46581_48334 = state_46517__$1;
(statearr_46581_48334[(1)] = (13));

} else {
var statearr_46583_48335 = state_46517__$1;
(statearr_46583_48335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (9))){
var inst_46491 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46584_48336 = state_46517__$1;
(statearr_46584_48336[(2)] = inst_46491);

(statearr_46584_48336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (5))){
var inst_46445 = cljs.core.deref(mults);
var inst_46446 = cljs.core.vals(inst_46445);
var inst_46447 = cljs.core.seq(inst_46446);
var inst_46448 = inst_46447;
var inst_46449 = null;
var inst_46450 = (0);
var inst_46451 = (0);
var state_46517__$1 = (function (){var statearr_46587 = state_46517;
(statearr_46587[(13)] = inst_46449);

(statearr_46587[(14)] = inst_46450);

(statearr_46587[(15)] = inst_46448);

(statearr_46587[(16)] = inst_46451);

return statearr_46587;
})();
var statearr_46588_48338 = state_46517__$1;
(statearr_46588_48338[(2)] = null);

(statearr_46588_48338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (14))){
var state_46517__$1 = state_46517;
var statearr_46594_48341 = state_46517__$1;
(statearr_46594_48341[(2)] = null);

(statearr_46594_48341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (16))){
var inst_46464 = (state_46517[(10)]);
var inst_46470 = cljs.core.chunk_first(inst_46464);
var inst_46471 = cljs.core.chunk_rest(inst_46464);
var inst_46472 = cljs.core.count(inst_46470);
var inst_46448 = inst_46471;
var inst_46449 = inst_46470;
var inst_46450 = inst_46472;
var inst_46451 = (0);
var state_46517__$1 = (function (){var statearr_46597 = state_46517;
(statearr_46597[(13)] = inst_46449);

(statearr_46597[(14)] = inst_46450);

(statearr_46597[(15)] = inst_46448);

(statearr_46597[(16)] = inst_46451);

return statearr_46597;
})();
var statearr_46598_48345 = state_46517__$1;
(statearr_46598_48345[(2)] = null);

(statearr_46598_48345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (10))){
var inst_46449 = (state_46517[(13)]);
var inst_46450 = (state_46517[(14)]);
var inst_46448 = (state_46517[(15)]);
var inst_46451 = (state_46517[(16)]);
var inst_46458 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46449,inst_46451);
var inst_46459 = cljs.core.async.muxch_STAR_(inst_46458);
var inst_46460 = cljs.core.async.close_BANG_(inst_46459);
var inst_46461 = (inst_46451 + (1));
var tmp46591 = inst_46449;
var tmp46592 = inst_46450;
var tmp46593 = inst_46448;
var inst_46448__$1 = tmp46593;
var inst_46449__$1 = tmp46591;
var inst_46450__$1 = tmp46592;
var inst_46451__$1 = inst_46461;
var state_46517__$1 = (function (){var statearr_46601 = state_46517;
(statearr_46601[(17)] = inst_46460);

(statearr_46601[(13)] = inst_46449__$1);

(statearr_46601[(14)] = inst_46450__$1);

(statearr_46601[(15)] = inst_46448__$1);

(statearr_46601[(16)] = inst_46451__$1);

return statearr_46601;
})();
var statearr_46602_48347 = state_46517__$1;
(statearr_46602_48347[(2)] = null);

(statearr_46602_48347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (18))){
var inst_46482 = (state_46517[(2)]);
var state_46517__$1 = state_46517;
var statearr_46607_48350 = state_46517__$1;
(statearr_46607_48350[(2)] = inst_46482);

(statearr_46607_48350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46520 === (8))){
var inst_46450 = (state_46517[(14)]);
var inst_46451 = (state_46517[(16)]);
var inst_46453 = (inst_46451 < inst_46450);
var inst_46454 = inst_46453;
var state_46517__$1 = state_46517;
if(cljs.core.truth_(inst_46454)){
var statearr_46608_48354 = state_46517__$1;
(statearr_46608_48354[(1)] = (10));

} else {
var statearr_46609_48355 = state_46517__$1;
(statearr_46609_48355[(1)] = (11));

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
});})(c__44617__auto___48284,mults,ensure_mult,p))
;
return ((function (switch__44304__auto__,c__44617__auto___48284,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_46612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46612[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_46612[(1)] = (1));

return statearr_46612;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_46517){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_46517);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e46613){if((e46613 instanceof Object)){
var ex__44308__auto__ = e46613;
var statearr_46614_48358 = state_46517;
(statearr_46614_48358[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46613;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48359 = state_46517;
state_46517 = G__48359;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_46517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_46517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48284,mults,ensure_mult,p))
})();
var state__44619__auto__ = (function (){var statearr_46616 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_46616[(6)] = c__44617__auto___48284);

return statearr_46616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48284,mults,ensure_mult,p))
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
var G__46619 = arguments.length;
switch (G__46619) {
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
var G__46625 = arguments.length;
switch (G__46625) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__46634 = arguments.length;
switch (G__46634) {
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
var c__44617__auto___48378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46687){
var state_val_46688 = (state_46687[(1)]);
if((state_val_46688 === (7))){
var state_46687__$1 = state_46687;
var statearr_46689_48379 = state_46687__$1;
(statearr_46689_48379[(2)] = null);

(statearr_46689_48379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (1))){
var state_46687__$1 = state_46687;
var statearr_46692_48381 = state_46687__$1;
(statearr_46692_48381[(2)] = null);

(statearr_46692_48381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (4))){
var inst_46649 = (state_46687[(7)]);
var inst_46651 = (inst_46649 < cnt);
var state_46687__$1 = state_46687;
if(cljs.core.truth_(inst_46651)){
var statearr_46693_48384 = state_46687__$1;
(statearr_46693_48384[(1)] = (6));

} else {
var statearr_46694_48385 = state_46687__$1;
(statearr_46694_48385[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (15))){
var inst_46683 = (state_46687[(2)]);
var state_46687__$1 = state_46687;
var statearr_46695_48386 = state_46687__$1;
(statearr_46695_48386[(2)] = inst_46683);

(statearr_46695_48386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (13))){
var inst_46676 = cljs.core.async.close_BANG_(out);
var state_46687__$1 = state_46687;
var statearr_46696_48389 = state_46687__$1;
(statearr_46696_48389[(2)] = inst_46676);

(statearr_46696_48389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (6))){
var state_46687__$1 = state_46687;
var statearr_46697_48390 = state_46687__$1;
(statearr_46697_48390[(2)] = null);

(statearr_46697_48390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (3))){
var inst_46685 = (state_46687[(2)]);
var state_46687__$1 = state_46687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46687__$1,inst_46685);
} else {
if((state_val_46688 === (12))){
var inst_46673 = (state_46687[(8)]);
var inst_46673__$1 = (state_46687[(2)]);
var inst_46674 = cljs.core.some(cljs.core.nil_QMARK_,inst_46673__$1);
var state_46687__$1 = (function (){var statearr_46703 = state_46687;
(statearr_46703[(8)] = inst_46673__$1);

return statearr_46703;
})();
if(cljs.core.truth_(inst_46674)){
var statearr_46704_48395 = state_46687__$1;
(statearr_46704_48395[(1)] = (13));

} else {
var statearr_46706_48398 = state_46687__$1;
(statearr_46706_48398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (2))){
var inst_46648 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46649 = (0);
var state_46687__$1 = (function (){var statearr_46709 = state_46687;
(statearr_46709[(9)] = inst_46648);

(statearr_46709[(7)] = inst_46649);

return statearr_46709;
})();
var statearr_46711_48402 = state_46687__$1;
(statearr_46711_48402[(2)] = null);

(statearr_46711_48402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (11))){
var inst_46649 = (state_46687[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46687,(10),Object,null,(9));
var inst_46660 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46649) : chs__$1.call(null,inst_46649));
var inst_46661 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46649) : done.call(null,inst_46649));
var inst_46662 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46660,inst_46661);
var state_46687__$1 = state_46687;
var statearr_46714_48408 = state_46687__$1;
(statearr_46714_48408[(2)] = inst_46662);


cljs.core.async.impl.ioc_helpers.process_exception(state_46687__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (9))){
var inst_46649 = (state_46687[(7)]);
var inst_46664 = (state_46687[(2)]);
var inst_46665 = (inst_46649 + (1));
var inst_46649__$1 = inst_46665;
var state_46687__$1 = (function (){var statearr_46717 = state_46687;
(statearr_46717[(7)] = inst_46649__$1);

(statearr_46717[(10)] = inst_46664);

return statearr_46717;
})();
var statearr_46719_48409 = state_46687__$1;
(statearr_46719_48409[(2)] = null);

(statearr_46719_48409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (5))){
var inst_46671 = (state_46687[(2)]);
var state_46687__$1 = (function (){var statearr_46722 = state_46687;
(statearr_46722[(11)] = inst_46671);

return statearr_46722;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46687__$1,(12),dchan);
} else {
if((state_val_46688 === (14))){
var inst_46673 = (state_46687[(8)]);
var inst_46678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46673);
var state_46687__$1 = state_46687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46687__$1,(16),out,inst_46678);
} else {
if((state_val_46688 === (16))){
var inst_46680 = (state_46687[(2)]);
var state_46687__$1 = (function (){var statearr_46723 = state_46687;
(statearr_46723[(12)] = inst_46680);

return statearr_46723;
})();
var statearr_46724_48415 = state_46687__$1;
(statearr_46724_48415[(2)] = null);

(statearr_46724_48415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (10))){
var inst_46655 = (state_46687[(2)]);
var inst_46656 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46687__$1 = (function (){var statearr_46726 = state_46687;
(statearr_46726[(13)] = inst_46655);

return statearr_46726;
})();
var statearr_46731_48416 = state_46687__$1;
(statearr_46731_48416[(2)] = inst_46656);


cljs.core.async.impl.ioc_helpers.process_exception(state_46687__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46688 === (8))){
var inst_46669 = (state_46687[(2)]);
var state_46687__$1 = state_46687;
var statearr_46741_48419 = state_46687__$1;
(statearr_46741_48419[(2)] = inst_46669);

(statearr_46741_48419[(1)] = (5));


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
});})(c__44617__auto___48378,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44304__auto__,c__44617__auto___48378,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_46742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46742[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_46742[(1)] = (1));

return statearr_46742;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_46687){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_46687);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e46743){if((e46743 instanceof Object)){
var ex__44308__auto__ = e46743;
var statearr_46744_48424 = state_46687;
(statearr_46744_48424[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46743;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48427 = state_46687;
state_46687 = G__48427;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_46687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_46687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48378,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44619__auto__ = (function (){var statearr_46746 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_46746[(6)] = c__44617__auto___48378);

return statearr_46746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48378,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__46749 = arguments.length;
switch (G__46749) {
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
var c__44617__auto___48442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48442,out){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48442,out){
return (function (state_46787){
var state_val_46788 = (state_46787[(1)]);
if((state_val_46788 === (7))){
var inst_46766 = (state_46787[(7)]);
var inst_46767 = (state_46787[(8)]);
var inst_46766__$1 = (state_46787[(2)]);
var inst_46767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46766__$1,(0),null);
var inst_46768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46766__$1,(1),null);
var inst_46769 = (inst_46767__$1 == null);
var state_46787__$1 = (function (){var statearr_46790 = state_46787;
(statearr_46790[(7)] = inst_46766__$1);

(statearr_46790[(8)] = inst_46767__$1);

(statearr_46790[(9)] = inst_46768);

return statearr_46790;
})();
if(cljs.core.truth_(inst_46769)){
var statearr_46791_48445 = state_46787__$1;
(statearr_46791_48445[(1)] = (8));

} else {
var statearr_46793_48446 = state_46787__$1;
(statearr_46793_48446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (1))){
var inst_46754 = cljs.core.vec(chs);
var inst_46755 = inst_46754;
var state_46787__$1 = (function (){var statearr_46794 = state_46787;
(statearr_46794[(10)] = inst_46755);

return statearr_46794;
})();
var statearr_46795_48447 = state_46787__$1;
(statearr_46795_48447[(2)] = null);

(statearr_46795_48447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (4))){
var inst_46755 = (state_46787[(10)]);
var state_46787__$1 = state_46787;
return cljs.core.async.ioc_alts_BANG_(state_46787__$1,(7),inst_46755);
} else {
if((state_val_46788 === (6))){
var inst_46783 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46796_48450 = state_46787__$1;
(statearr_46796_48450[(2)] = inst_46783);

(statearr_46796_48450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (3))){
var inst_46785 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46787__$1,inst_46785);
} else {
if((state_val_46788 === (2))){
var inst_46755 = (state_46787[(10)]);
var inst_46757 = cljs.core.count(inst_46755);
var inst_46758 = (inst_46757 > (0));
var state_46787__$1 = state_46787;
if(cljs.core.truth_(inst_46758)){
var statearr_46808_48454 = state_46787__$1;
(statearr_46808_48454[(1)] = (4));

} else {
var statearr_46809_48455 = state_46787__$1;
(statearr_46809_48455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (11))){
var inst_46755 = (state_46787[(10)]);
var inst_46776 = (state_46787[(2)]);
var tmp46797 = inst_46755;
var inst_46755__$1 = tmp46797;
var state_46787__$1 = (function (){var statearr_46811 = state_46787;
(statearr_46811[(11)] = inst_46776);

(statearr_46811[(10)] = inst_46755__$1);

return statearr_46811;
})();
var statearr_46812_48456 = state_46787__$1;
(statearr_46812_48456[(2)] = null);

(statearr_46812_48456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (9))){
var inst_46767 = (state_46787[(8)]);
var state_46787__$1 = state_46787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46787__$1,(11),out,inst_46767);
} else {
if((state_val_46788 === (5))){
var inst_46781 = cljs.core.async.close_BANG_(out);
var state_46787__$1 = state_46787;
var statearr_46813_48458 = state_46787__$1;
(statearr_46813_48458[(2)] = inst_46781);

(statearr_46813_48458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (10))){
var inst_46779 = (state_46787[(2)]);
var state_46787__$1 = state_46787;
var statearr_46818_48459 = state_46787__$1;
(statearr_46818_48459[(2)] = inst_46779);

(statearr_46818_48459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46788 === (8))){
var inst_46766 = (state_46787[(7)]);
var inst_46767 = (state_46787[(8)]);
var inst_46755 = (state_46787[(10)]);
var inst_46768 = (state_46787[(9)]);
var inst_46771 = (function (){var cs = inst_46755;
var vec__46762 = inst_46766;
var v = inst_46767;
var c = inst_46768;
return ((function (cs,vec__46762,v,c,inst_46766,inst_46767,inst_46755,inst_46768,state_val_46788,c__44617__auto___48442,out){
return (function (p1__46747_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46747_SHARP_);
});
;})(cs,vec__46762,v,c,inst_46766,inst_46767,inst_46755,inst_46768,state_val_46788,c__44617__auto___48442,out))
})();
var inst_46772 = cljs.core.filterv(inst_46771,inst_46755);
var inst_46755__$1 = inst_46772;
var state_46787__$1 = (function (){var statearr_46820 = state_46787;
(statearr_46820[(10)] = inst_46755__$1);

return statearr_46820;
})();
var statearr_46821_48470 = state_46787__$1;
(statearr_46821_48470[(2)] = null);

(statearr_46821_48470[(1)] = (2));


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
});})(c__44617__auto___48442,out))
;
return ((function (switch__44304__auto__,c__44617__auto___48442,out){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_46823 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46823[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_46823[(1)] = (1));

return statearr_46823;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_46787){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_46787);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e46824){if((e46824 instanceof Object)){
var ex__44308__auto__ = e46824;
var statearr_46825_48475 = state_46787;
(statearr_46825_48475[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48477 = state_46787;
state_46787 = G__48477;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_46787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_46787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48442,out))
})();
var state__44619__auto__ = (function (){var statearr_46835 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_46835[(6)] = c__44617__auto___48442);

return statearr_46835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48442,out))
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
var G__46844 = arguments.length;
switch (G__46844) {
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
var c__44617__auto___48484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48484,out){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48484,out){
return (function (state_46875){
var state_val_46876 = (state_46875[(1)]);
if((state_val_46876 === (7))){
var inst_46855 = (state_46875[(7)]);
var inst_46855__$1 = (state_46875[(2)]);
var inst_46856 = (inst_46855__$1 == null);
var inst_46857 = cljs.core.not(inst_46856);
var state_46875__$1 = (function (){var statearr_46883 = state_46875;
(statearr_46883[(7)] = inst_46855__$1);

return statearr_46883;
})();
if(inst_46857){
var statearr_46884_48491 = state_46875__$1;
(statearr_46884_48491[(1)] = (8));

} else {
var statearr_46885_48493 = state_46875__$1;
(statearr_46885_48493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (1))){
var inst_46850 = (0);
var state_46875__$1 = (function (){var statearr_46886 = state_46875;
(statearr_46886[(8)] = inst_46850);

return statearr_46886;
})();
var statearr_46887_48494 = state_46875__$1;
(statearr_46887_48494[(2)] = null);

(statearr_46887_48494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (4))){
var state_46875__$1 = state_46875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46875__$1,(7),ch);
} else {
if((state_val_46876 === (6))){
var inst_46868 = (state_46875[(2)]);
var state_46875__$1 = state_46875;
var statearr_46890_48495 = state_46875__$1;
(statearr_46890_48495[(2)] = inst_46868);

(statearr_46890_48495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (3))){
var inst_46870 = (state_46875[(2)]);
var inst_46871 = cljs.core.async.close_BANG_(out);
var state_46875__$1 = (function (){var statearr_46892 = state_46875;
(statearr_46892[(9)] = inst_46870);

return statearr_46892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46875__$1,inst_46871);
} else {
if((state_val_46876 === (2))){
var inst_46850 = (state_46875[(8)]);
var inst_46852 = (inst_46850 < n);
var state_46875__$1 = state_46875;
if(cljs.core.truth_(inst_46852)){
var statearr_46897_48501 = state_46875__$1;
(statearr_46897_48501[(1)] = (4));

} else {
var statearr_46898_48504 = state_46875__$1;
(statearr_46898_48504[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (11))){
var inst_46850 = (state_46875[(8)]);
var inst_46860 = (state_46875[(2)]);
var inst_46861 = (inst_46850 + (1));
var inst_46850__$1 = inst_46861;
var state_46875__$1 = (function (){var statearr_46902 = state_46875;
(statearr_46902[(10)] = inst_46860);

(statearr_46902[(8)] = inst_46850__$1);

return statearr_46902;
})();
var statearr_46905_48514 = state_46875__$1;
(statearr_46905_48514[(2)] = null);

(statearr_46905_48514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (9))){
var state_46875__$1 = state_46875;
var statearr_46906_48515 = state_46875__$1;
(statearr_46906_48515[(2)] = null);

(statearr_46906_48515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (5))){
var state_46875__$1 = state_46875;
var statearr_46909_48516 = state_46875__$1;
(statearr_46909_48516[(2)] = null);

(statearr_46909_48516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (10))){
var inst_46865 = (state_46875[(2)]);
var state_46875__$1 = state_46875;
var statearr_46914_48518 = state_46875__$1;
(statearr_46914_48518[(2)] = inst_46865);

(statearr_46914_48518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46876 === (8))){
var inst_46855 = (state_46875[(7)]);
var state_46875__$1 = state_46875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46875__$1,(11),out,inst_46855);
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
});})(c__44617__auto___48484,out))
;
return ((function (switch__44304__auto__,c__44617__auto___48484,out){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_46926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46926[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_46926[(1)] = (1));

return statearr_46926;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_46875){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_46875);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e46927){if((e46927 instanceof Object)){
var ex__44308__auto__ = e46927;
var statearr_46928_48530 = state_46875;
(statearr_46928_48530[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48531 = state_46875;
state_46875 = G__48531;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_46875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_46875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48484,out))
})();
var state__44619__auto__ = (function (){var statearr_46931 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_46931[(6)] = c__44617__auto___48484);

return statearr_46931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48484,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46938 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46938 = (function (f,ch,meta46939){
this.f = f;
this.ch = ch;
this.meta46939 = meta46939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46940,meta46939__$1){
var self__ = this;
var _46940__$1 = this;
return (new cljs.core.async.t_cljs$core$async46938(self__.f,self__.ch,meta46939__$1));
});

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46940){
var self__ = this;
var _46940__$1 = this;
return self__.meta46939;
});

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46957 = (function (f,ch,meta46939,_,fn1,meta46958){
this.f = f;
this.ch = ch;
this.meta46939 = meta46939;
this._ = _;
this.fn1 = fn1;
this.meta46958 = meta46958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46959,meta46958__$1){
var self__ = this;
var _46959__$1 = this;
return (new cljs.core.async.t_cljs$core$async46957(self__.f,self__.ch,self__.meta46939,self__._,self__.fn1,meta46958__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46959){
var self__ = this;
var _46959__$1 = this;
return self__.meta46958;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46957.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46936_SHARP_){
var G__46970 = (((p1__46936_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46936_SHARP_) : self__.f.call(null,p1__46936_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46970) : f1.call(null,G__46970));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46957.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46939","meta46939",359382875,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46938","cljs.core.async/t_cljs$core$async46938",-127127706,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46958","meta46958",-232224332,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46957";

cljs.core.async.t_cljs$core$async46957.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46957");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46957.
 */
cljs.core.async.__GT_t_cljs$core$async46957 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46957(f__$1,ch__$1,meta46939__$1,___$2,fn1__$1,meta46958){
return (new cljs.core.async.t_cljs$core$async46957(f__$1,ch__$1,meta46939__$1,___$2,fn1__$1,meta46958));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46957(self__.f,self__.ch,self__.meta46939,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46973 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46973) : self__.f.call(null,G__46973));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46939","meta46939",359382875,null)], null);
});

cljs.core.async.t_cljs$core$async46938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46938";

cljs.core.async.t_cljs$core$async46938.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46938");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46938.
 */
cljs.core.async.__GT_t_cljs$core$async46938 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46938(f__$1,ch__$1,meta46939){
return (new cljs.core.async.t_cljs$core$async46938(f__$1,ch__$1,meta46939));
});

}

return (new cljs.core.async.t_cljs$core$async46938(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46978 = (function (f,ch,meta46979){
this.f = f;
this.ch = ch;
this.meta46979 = meta46979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46980,meta46979__$1){
var self__ = this;
var _46980__$1 = this;
return (new cljs.core.async.t_cljs$core$async46978(self__.f,self__.ch,meta46979__$1));
});

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46980){
var self__ = this;
var _46980__$1 = this;
return self__.meta46979;
});

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async46978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46979","meta46979",-729008601,null)], null);
});

cljs.core.async.t_cljs$core$async46978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46978";

cljs.core.async.t_cljs$core$async46978.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46978");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46978.
 */
cljs.core.async.__GT_t_cljs$core$async46978 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46978(f__$1,ch__$1,meta46979){
return (new cljs.core.async.t_cljs$core$async46978(f__$1,ch__$1,meta46979));
});

}

return (new cljs.core.async.t_cljs$core$async46978(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46987 = (function (p,ch,meta46988){
this.p = p;
this.ch = ch;
this.meta46988 = meta46988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46989,meta46988__$1){
var self__ = this;
var _46989__$1 = this;
return (new cljs.core.async.t_cljs$core$async46987(self__.p,self__.ch,meta46988__$1));
});

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46989){
var self__ = this;
var _46989__$1 = this;
return self__.meta46988;
});

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46988","meta46988",1189792680,null)], null);
});

cljs.core.async.t_cljs$core$async46987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46987";

cljs.core.async.t_cljs$core$async46987.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46987");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46987.
 */
cljs.core.async.__GT_t_cljs$core$async46987 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46987(p__$1,ch__$1,meta46988){
return (new cljs.core.async.t_cljs$core$async46987(p__$1,ch__$1,meta46988));
});

}

return (new cljs.core.async.t_cljs$core$async46987(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46998 = arguments.length;
switch (G__46998) {
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
var c__44617__auto___48591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48591,out){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48591,out){
return (function (state_47023){
var state_val_47024 = (state_47023[(1)]);
if((state_val_47024 === (7))){
var inst_47019 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47026_48599 = state_47023__$1;
(statearr_47026_48599[(2)] = inst_47019);

(statearr_47026_48599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (1))){
var state_47023__$1 = state_47023;
var statearr_47028_48600 = state_47023__$1;
(statearr_47028_48600[(2)] = null);

(statearr_47028_48600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (4))){
var inst_47005 = (state_47023[(7)]);
var inst_47005__$1 = (state_47023[(2)]);
var inst_47006 = (inst_47005__$1 == null);
var state_47023__$1 = (function (){var statearr_47029 = state_47023;
(statearr_47029[(7)] = inst_47005__$1);

return statearr_47029;
})();
if(cljs.core.truth_(inst_47006)){
var statearr_47031_48603 = state_47023__$1;
(statearr_47031_48603[(1)] = (5));

} else {
var statearr_47032_48604 = state_47023__$1;
(statearr_47032_48604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (6))){
var inst_47005 = (state_47023[(7)]);
var inst_47010 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47005) : p.call(null,inst_47005));
var state_47023__$1 = state_47023;
if(cljs.core.truth_(inst_47010)){
var statearr_47033_48607 = state_47023__$1;
(statearr_47033_48607[(1)] = (8));

} else {
var statearr_47034_48608 = state_47023__$1;
(statearr_47034_48608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (3))){
var inst_47021 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47023__$1,inst_47021);
} else {
if((state_val_47024 === (2))){
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47023__$1,(4),ch);
} else {
if((state_val_47024 === (11))){
var inst_47013 = (state_47023[(2)]);
var state_47023__$1 = state_47023;
var statearr_47035_48609 = state_47023__$1;
(statearr_47035_48609[(2)] = inst_47013);

(statearr_47035_48609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (9))){
var state_47023__$1 = state_47023;
var statearr_47036_48610 = state_47023__$1;
(statearr_47036_48610[(2)] = null);

(statearr_47036_48610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (5))){
var inst_47008 = cljs.core.async.close_BANG_(out);
var state_47023__$1 = state_47023;
var statearr_47038_48611 = state_47023__$1;
(statearr_47038_48611[(2)] = inst_47008);

(statearr_47038_48611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (10))){
var inst_47016 = (state_47023[(2)]);
var state_47023__$1 = (function (){var statearr_47039 = state_47023;
(statearr_47039[(8)] = inst_47016);

return statearr_47039;
})();
var statearr_47040_48613 = state_47023__$1;
(statearr_47040_48613[(2)] = null);

(statearr_47040_48613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47024 === (8))){
var inst_47005 = (state_47023[(7)]);
var state_47023__$1 = state_47023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47023__$1,(11),out,inst_47005);
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
});})(c__44617__auto___48591,out))
;
return ((function (switch__44304__auto__,c__44617__auto___48591,out){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_47042 = [null,null,null,null,null,null,null,null,null];
(statearr_47042[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_47042[(1)] = (1));

return statearr_47042;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_47023){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_47023);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e47043){if((e47043 instanceof Object)){
var ex__44308__auto__ = e47043;
var statearr_47044_48616 = state_47023;
(statearr_47044_48616[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47043;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48621 = state_47023;
state_47023 = G__48621;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_47023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_47023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48591,out))
})();
var state__44619__auto__ = (function (){var statearr_47046 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_47046[(6)] = c__44617__auto___48591);

return statearr_47046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48591,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47049 = arguments.length;
switch (G__47049) {
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
var c__44617__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto__){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto__){
return (function (state_47113){
var state_val_47114 = (state_47113[(1)]);
if((state_val_47114 === (7))){
var inst_47109 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47116_48637 = state_47113__$1;
(statearr_47116_48637[(2)] = inst_47109);

(statearr_47116_48637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (20))){
var inst_47079 = (state_47113[(7)]);
var inst_47090 = (state_47113[(2)]);
var inst_47091 = cljs.core.next(inst_47079);
var inst_47065 = inst_47091;
var inst_47066 = null;
var inst_47067 = (0);
var inst_47068 = (0);
var state_47113__$1 = (function (){var statearr_47117 = state_47113;
(statearr_47117[(8)] = inst_47090);

(statearr_47117[(9)] = inst_47066);

(statearr_47117[(10)] = inst_47068);

(statearr_47117[(11)] = inst_47067);

(statearr_47117[(12)] = inst_47065);

return statearr_47117;
})();
var statearr_47118_48642 = state_47113__$1;
(statearr_47118_48642[(2)] = null);

(statearr_47118_48642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (1))){
var state_47113__$1 = state_47113;
var statearr_47120_48643 = state_47113__$1;
(statearr_47120_48643[(2)] = null);

(statearr_47120_48643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (4))){
var inst_47054 = (state_47113[(13)]);
var inst_47054__$1 = (state_47113[(2)]);
var inst_47055 = (inst_47054__$1 == null);
var state_47113__$1 = (function (){var statearr_47121 = state_47113;
(statearr_47121[(13)] = inst_47054__$1);

return statearr_47121;
})();
if(cljs.core.truth_(inst_47055)){
var statearr_47122_48647 = state_47113__$1;
(statearr_47122_48647[(1)] = (5));

} else {
var statearr_47123_48649 = state_47113__$1;
(statearr_47123_48649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (15))){
var state_47113__$1 = state_47113;
var statearr_47127_48650 = state_47113__$1;
(statearr_47127_48650[(2)] = null);

(statearr_47127_48650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (21))){
var state_47113__$1 = state_47113;
var statearr_47128_48651 = state_47113__$1;
(statearr_47128_48651[(2)] = null);

(statearr_47128_48651[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (13))){
var inst_47066 = (state_47113[(9)]);
var inst_47068 = (state_47113[(10)]);
var inst_47067 = (state_47113[(11)]);
var inst_47065 = (state_47113[(12)]);
var inst_47075 = (state_47113[(2)]);
var inst_47076 = (inst_47068 + (1));
var tmp47124 = inst_47066;
var tmp47125 = inst_47067;
var tmp47126 = inst_47065;
var inst_47065__$1 = tmp47126;
var inst_47066__$1 = tmp47124;
var inst_47067__$1 = tmp47125;
var inst_47068__$1 = inst_47076;
var state_47113__$1 = (function (){var statearr_47130 = state_47113;
(statearr_47130[(9)] = inst_47066__$1);

(statearr_47130[(10)] = inst_47068__$1);

(statearr_47130[(11)] = inst_47067__$1);

(statearr_47130[(12)] = inst_47065__$1);

(statearr_47130[(14)] = inst_47075);

return statearr_47130;
})();
var statearr_47131_48653 = state_47113__$1;
(statearr_47131_48653[(2)] = null);

(statearr_47131_48653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (22))){
var state_47113__$1 = state_47113;
var statearr_47132_48654 = state_47113__$1;
(statearr_47132_48654[(2)] = null);

(statearr_47132_48654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (6))){
var inst_47054 = (state_47113[(13)]);
var inst_47063 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47054) : f.call(null,inst_47054));
var inst_47064 = cljs.core.seq(inst_47063);
var inst_47065 = inst_47064;
var inst_47066 = null;
var inst_47067 = (0);
var inst_47068 = (0);
var state_47113__$1 = (function (){var statearr_47133 = state_47113;
(statearr_47133[(9)] = inst_47066);

(statearr_47133[(10)] = inst_47068);

(statearr_47133[(11)] = inst_47067);

(statearr_47133[(12)] = inst_47065);

return statearr_47133;
})();
var statearr_47135_48659 = state_47113__$1;
(statearr_47135_48659[(2)] = null);

(statearr_47135_48659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (17))){
var inst_47079 = (state_47113[(7)]);
var inst_47083 = cljs.core.chunk_first(inst_47079);
var inst_47084 = cljs.core.chunk_rest(inst_47079);
var inst_47085 = cljs.core.count(inst_47083);
var inst_47065 = inst_47084;
var inst_47066 = inst_47083;
var inst_47067 = inst_47085;
var inst_47068 = (0);
var state_47113__$1 = (function (){var statearr_47136 = state_47113;
(statearr_47136[(9)] = inst_47066);

(statearr_47136[(10)] = inst_47068);

(statearr_47136[(11)] = inst_47067);

(statearr_47136[(12)] = inst_47065);

return statearr_47136;
})();
var statearr_47137_48663 = state_47113__$1;
(statearr_47137_48663[(2)] = null);

(statearr_47137_48663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (3))){
var inst_47111 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47113__$1,inst_47111);
} else {
if((state_val_47114 === (12))){
var inst_47099 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47144_48669 = state_47113__$1;
(statearr_47144_48669[(2)] = inst_47099);

(statearr_47144_48669[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (2))){
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47113__$1,(4),in$);
} else {
if((state_val_47114 === (23))){
var inst_47107 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47145_48671 = state_47113__$1;
(statearr_47145_48671[(2)] = inst_47107);

(statearr_47145_48671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (19))){
var inst_47094 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47147_48673 = state_47113__$1;
(statearr_47147_48673[(2)] = inst_47094);

(statearr_47147_48673[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (11))){
var inst_47079 = (state_47113[(7)]);
var inst_47065 = (state_47113[(12)]);
var inst_47079__$1 = cljs.core.seq(inst_47065);
var state_47113__$1 = (function (){var statearr_47149 = state_47113;
(statearr_47149[(7)] = inst_47079__$1);

return statearr_47149;
})();
if(inst_47079__$1){
var statearr_47150_48685 = state_47113__$1;
(statearr_47150_48685[(1)] = (14));

} else {
var statearr_47151_48688 = state_47113__$1;
(statearr_47151_48688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (9))){
var inst_47101 = (state_47113[(2)]);
var inst_47102 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47113__$1 = (function (){var statearr_47157 = state_47113;
(statearr_47157[(15)] = inst_47101);

return statearr_47157;
})();
if(cljs.core.truth_(inst_47102)){
var statearr_47160_48692 = state_47113__$1;
(statearr_47160_48692[(1)] = (21));

} else {
var statearr_47161_48693 = state_47113__$1;
(statearr_47161_48693[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (5))){
var inst_47057 = cljs.core.async.close_BANG_(out);
var state_47113__$1 = state_47113;
var statearr_47162_48701 = state_47113__$1;
(statearr_47162_48701[(2)] = inst_47057);

(statearr_47162_48701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (14))){
var inst_47079 = (state_47113[(7)]);
var inst_47081 = cljs.core.chunked_seq_QMARK_(inst_47079);
var state_47113__$1 = state_47113;
if(inst_47081){
var statearr_47164_48705 = state_47113__$1;
(statearr_47164_48705[(1)] = (17));

} else {
var statearr_47165_48706 = state_47113__$1;
(statearr_47165_48706[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (16))){
var inst_47097 = (state_47113[(2)]);
var state_47113__$1 = state_47113;
var statearr_47166_48708 = state_47113__$1;
(statearr_47166_48708[(2)] = inst_47097);

(statearr_47166_48708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47114 === (10))){
var inst_47066 = (state_47113[(9)]);
var inst_47068 = (state_47113[(10)]);
var inst_47073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47066,inst_47068);
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47113__$1,(13),out,inst_47073);
} else {
if((state_val_47114 === (18))){
var inst_47079 = (state_47113[(7)]);
var inst_47088 = cljs.core.first(inst_47079);
var state_47113__$1 = state_47113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47113__$1,(20),out,inst_47088);
} else {
if((state_val_47114 === (8))){
var inst_47068 = (state_47113[(10)]);
var inst_47067 = (state_47113[(11)]);
var inst_47070 = (inst_47068 < inst_47067);
var inst_47071 = inst_47070;
var state_47113__$1 = state_47113;
if(cljs.core.truth_(inst_47071)){
var statearr_47169_48713 = state_47113__$1;
(statearr_47169_48713[(1)] = (10));

} else {
var statearr_47172_48715 = state_47113__$1;
(statearr_47172_48715[(1)] = (11));

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
});})(c__44617__auto__))
;
return ((function (switch__44304__auto__,c__44617__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44305__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44305__auto____0 = (function (){
var statearr_47173 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47173[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44305__auto__);

(statearr_47173[(1)] = (1));

return statearr_47173;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44305__auto____1 = (function (state_47113){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_47113);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e47174){if((e47174 instanceof Object)){
var ex__44308__auto__ = e47174;
var statearr_47175_48726 = state_47113;
(statearr_47175_48726[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47174;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48727 = state_47113;
state_47113 = G__48727;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44305__auto__ = function(state_47113){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44305__auto____1.call(this,state_47113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44305__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44305__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto__))
})();
var state__44619__auto__ = (function (){var statearr_47177 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_47177[(6)] = c__44617__auto__);

return statearr_47177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto__))
);

return c__44617__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47180 = arguments.length;
switch (G__47180) {
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
var G__47189 = arguments.length;
switch (G__47189) {
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
var G__47194 = arguments.length;
switch (G__47194) {
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
var c__44617__auto___48746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48746,out){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48746,out){
return (function (state_47231){
var state_val_47232 = (state_47231[(1)]);
if((state_val_47232 === (7))){
var inst_47226 = (state_47231[(2)]);
var state_47231__$1 = state_47231;
var statearr_47237_48752 = state_47231__$1;
(statearr_47237_48752[(2)] = inst_47226);

(statearr_47237_48752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (1))){
var inst_47205 = null;
var state_47231__$1 = (function (){var statearr_47239 = state_47231;
(statearr_47239[(7)] = inst_47205);

return statearr_47239;
})();
var statearr_47242_48755 = state_47231__$1;
(statearr_47242_48755[(2)] = null);

(statearr_47242_48755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (4))){
var inst_47209 = (state_47231[(8)]);
var inst_47209__$1 = (state_47231[(2)]);
var inst_47212 = (inst_47209__$1 == null);
var inst_47213 = cljs.core.not(inst_47212);
var state_47231__$1 = (function (){var statearr_47244 = state_47231;
(statearr_47244[(8)] = inst_47209__$1);

return statearr_47244;
})();
if(inst_47213){
var statearr_47245_48758 = state_47231__$1;
(statearr_47245_48758[(1)] = (5));

} else {
var statearr_47246_48759 = state_47231__$1;
(statearr_47246_48759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (6))){
var state_47231__$1 = state_47231;
var statearr_47247_48761 = state_47231__$1;
(statearr_47247_48761[(2)] = null);

(statearr_47247_48761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (3))){
var inst_47228 = (state_47231[(2)]);
var inst_47229 = cljs.core.async.close_BANG_(out);
var state_47231__$1 = (function (){var statearr_47250 = state_47231;
(statearr_47250[(9)] = inst_47228);

return statearr_47250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47231__$1,inst_47229);
} else {
if((state_val_47232 === (2))){
var state_47231__$1 = state_47231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47231__$1,(4),ch);
} else {
if((state_val_47232 === (11))){
var inst_47209 = (state_47231[(8)]);
var inst_47220 = (state_47231[(2)]);
var inst_47205 = inst_47209;
var state_47231__$1 = (function (){var statearr_47257 = state_47231;
(statearr_47257[(7)] = inst_47205);

(statearr_47257[(10)] = inst_47220);

return statearr_47257;
})();
var statearr_47259_48772 = state_47231__$1;
(statearr_47259_48772[(2)] = null);

(statearr_47259_48772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (9))){
var inst_47209 = (state_47231[(8)]);
var state_47231__$1 = state_47231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47231__$1,(11),out,inst_47209);
} else {
if((state_val_47232 === (5))){
var inst_47205 = (state_47231[(7)]);
var inst_47209 = (state_47231[(8)]);
var inst_47215 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47209,inst_47205);
var state_47231__$1 = state_47231;
if(inst_47215){
var statearr_47265_48778 = state_47231__$1;
(statearr_47265_48778[(1)] = (8));

} else {
var statearr_47266_48779 = state_47231__$1;
(statearr_47266_48779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (10))){
var inst_47223 = (state_47231[(2)]);
var state_47231__$1 = state_47231;
var statearr_47269_48781 = state_47231__$1;
(statearr_47269_48781[(2)] = inst_47223);

(statearr_47269_48781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47232 === (8))){
var inst_47205 = (state_47231[(7)]);
var tmp47264 = inst_47205;
var inst_47205__$1 = tmp47264;
var state_47231__$1 = (function (){var statearr_47270 = state_47231;
(statearr_47270[(7)] = inst_47205__$1);

return statearr_47270;
})();
var statearr_47271_48785 = state_47231__$1;
(statearr_47271_48785[(2)] = null);

(statearr_47271_48785[(1)] = (2));


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
});})(c__44617__auto___48746,out))
;
return ((function (switch__44304__auto__,c__44617__auto___48746,out){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_47274 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47274[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_47274[(1)] = (1));

return statearr_47274;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_47231){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_47231);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e47275){if((e47275 instanceof Object)){
var ex__44308__auto__ = e47275;
var statearr_47276_48796 = state_47231;
(statearr_47276_48796[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48799 = state_47231;
state_47231 = G__48799;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_47231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_47231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48746,out))
})();
var state__44619__auto__ = (function (){var statearr_47277 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_47277[(6)] = c__44617__auto___48746);

return statearr_47277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48746,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47282 = arguments.length;
switch (G__47282) {
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
var c__44617__auto___48806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48806,out){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48806,out){
return (function (state_47326){
var state_val_47327 = (state_47326[(1)]);
if((state_val_47327 === (7))){
var inst_47322 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47338_48809 = state_47326__$1;
(statearr_47338_48809[(2)] = inst_47322);

(statearr_47338_48809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (1))){
var inst_47289 = (new Array(n));
var inst_47290 = inst_47289;
var inst_47291 = (0);
var state_47326__$1 = (function (){var statearr_47342 = state_47326;
(statearr_47342[(7)] = inst_47290);

(statearr_47342[(8)] = inst_47291);

return statearr_47342;
})();
var statearr_47345_48811 = state_47326__$1;
(statearr_47345_48811[(2)] = null);

(statearr_47345_48811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (4))){
var inst_47294 = (state_47326[(9)]);
var inst_47294__$1 = (state_47326[(2)]);
var inst_47295 = (inst_47294__$1 == null);
var inst_47296 = cljs.core.not(inst_47295);
var state_47326__$1 = (function (){var statearr_47352 = state_47326;
(statearr_47352[(9)] = inst_47294__$1);

return statearr_47352;
})();
if(inst_47296){
var statearr_47355_48816 = state_47326__$1;
(statearr_47355_48816[(1)] = (5));

} else {
var statearr_47356_48817 = state_47326__$1;
(statearr_47356_48817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (15))){
var inst_47316 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47357_48819 = state_47326__$1;
(statearr_47357_48819[(2)] = inst_47316);

(statearr_47357_48819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (13))){
var state_47326__$1 = state_47326;
var statearr_47358_48821 = state_47326__$1;
(statearr_47358_48821[(2)] = null);

(statearr_47358_48821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (6))){
var inst_47291 = (state_47326[(8)]);
var inst_47312 = (inst_47291 > (0));
var state_47326__$1 = state_47326;
if(cljs.core.truth_(inst_47312)){
var statearr_47359_48822 = state_47326__$1;
(statearr_47359_48822[(1)] = (12));

} else {
var statearr_47360_48825 = state_47326__$1;
(statearr_47360_48825[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (3))){
var inst_47324 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47326__$1,inst_47324);
} else {
if((state_val_47327 === (12))){
var inst_47290 = (state_47326[(7)]);
var inst_47314 = cljs.core.vec(inst_47290);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47326__$1,(15),out,inst_47314);
} else {
if((state_val_47327 === (2))){
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47326__$1,(4),ch);
} else {
if((state_val_47327 === (11))){
var inst_47306 = (state_47326[(2)]);
var inst_47307 = (new Array(n));
var inst_47290 = inst_47307;
var inst_47291 = (0);
var state_47326__$1 = (function (){var statearr_47367 = state_47326;
(statearr_47367[(7)] = inst_47290);

(statearr_47367[(8)] = inst_47291);

(statearr_47367[(10)] = inst_47306);

return statearr_47367;
})();
var statearr_47368_48836 = state_47326__$1;
(statearr_47368_48836[(2)] = null);

(statearr_47368_48836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (9))){
var inst_47290 = (state_47326[(7)]);
var inst_47304 = cljs.core.vec(inst_47290);
var state_47326__$1 = state_47326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47326__$1,(11),out,inst_47304);
} else {
if((state_val_47327 === (5))){
var inst_47290 = (state_47326[(7)]);
var inst_47299 = (state_47326[(11)]);
var inst_47294 = (state_47326[(9)]);
var inst_47291 = (state_47326[(8)]);
var inst_47298 = (inst_47290[inst_47291] = inst_47294);
var inst_47299__$1 = (inst_47291 + (1));
var inst_47300 = (inst_47299__$1 < n);
var state_47326__$1 = (function (){var statearr_47369 = state_47326;
(statearr_47369[(11)] = inst_47299__$1);

(statearr_47369[(12)] = inst_47298);

return statearr_47369;
})();
if(cljs.core.truth_(inst_47300)){
var statearr_47370_48843 = state_47326__$1;
(statearr_47370_48843[(1)] = (8));

} else {
var statearr_47371_48844 = state_47326__$1;
(statearr_47371_48844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (14))){
var inst_47319 = (state_47326[(2)]);
var inst_47320 = cljs.core.async.close_BANG_(out);
var state_47326__$1 = (function (){var statearr_47373 = state_47326;
(statearr_47373[(13)] = inst_47319);

return statearr_47373;
})();
var statearr_47374_48848 = state_47326__$1;
(statearr_47374_48848[(2)] = inst_47320);

(statearr_47374_48848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (10))){
var inst_47310 = (state_47326[(2)]);
var state_47326__$1 = state_47326;
var statearr_47375_48852 = state_47326__$1;
(statearr_47375_48852[(2)] = inst_47310);

(statearr_47375_48852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47327 === (8))){
var inst_47290 = (state_47326[(7)]);
var inst_47299 = (state_47326[(11)]);
var tmp47372 = inst_47290;
var inst_47290__$1 = tmp47372;
var inst_47291 = inst_47299;
var state_47326__$1 = (function (){var statearr_47376 = state_47326;
(statearr_47376[(7)] = inst_47290__$1);

(statearr_47376[(8)] = inst_47291);

return statearr_47376;
})();
var statearr_47377_48855 = state_47326__$1;
(statearr_47377_48855[(2)] = null);

(statearr_47377_48855[(1)] = (2));


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
});})(c__44617__auto___48806,out))
;
return ((function (switch__44304__auto__,c__44617__auto___48806,out){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_47381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47381[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_47381[(1)] = (1));

return statearr_47381;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_47326){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_47326);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e47382){if((e47382 instanceof Object)){
var ex__44308__auto__ = e47382;
var statearr_47383_48863 = state_47326;
(statearr_47383_48863[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48866 = state_47326;
state_47326 = G__48866;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_47326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_47326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48806,out))
})();
var state__44619__auto__ = (function (){var statearr_47390 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_47390[(6)] = c__44617__auto___48806);

return statearr_47390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48806,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47394 = arguments.length;
switch (G__47394) {
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
var c__44617__auto___48876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___48876,out){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___48876,out){
return (function (state_47446){
var state_val_47447 = (state_47446[(1)]);
if((state_val_47447 === (7))){
var inst_47442 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
var statearr_47449_48882 = state_47446__$1;
(statearr_47449_48882[(2)] = inst_47442);

(statearr_47449_48882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (1))){
var inst_47399 = [];
var inst_47400 = inst_47399;
var inst_47401 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47446__$1 = (function (){var statearr_47450 = state_47446;
(statearr_47450[(7)] = inst_47401);

(statearr_47450[(8)] = inst_47400);

return statearr_47450;
})();
var statearr_47451_48885 = state_47446__$1;
(statearr_47451_48885[(2)] = null);

(statearr_47451_48885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (4))){
var inst_47404 = (state_47446[(9)]);
var inst_47404__$1 = (state_47446[(2)]);
var inst_47406 = (inst_47404__$1 == null);
var inst_47407 = cljs.core.not(inst_47406);
var state_47446__$1 = (function (){var statearr_47454 = state_47446;
(statearr_47454[(9)] = inst_47404__$1);

return statearr_47454;
})();
if(inst_47407){
var statearr_47455_48891 = state_47446__$1;
(statearr_47455_48891[(1)] = (5));

} else {
var statearr_47457_48892 = state_47446__$1;
(statearr_47457_48892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (15))){
var inst_47436 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
var statearr_47458_48896 = state_47446__$1;
(statearr_47458_48896[(2)] = inst_47436);

(statearr_47458_48896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (13))){
var state_47446__$1 = state_47446;
var statearr_47460_48898 = state_47446__$1;
(statearr_47460_48898[(2)] = null);

(statearr_47460_48898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (6))){
var inst_47400 = (state_47446[(8)]);
var inst_47430 = inst_47400.length;
var inst_47431 = (inst_47430 > (0));
var state_47446__$1 = state_47446;
if(cljs.core.truth_(inst_47431)){
var statearr_47464_48900 = state_47446__$1;
(statearr_47464_48900[(1)] = (12));

} else {
var statearr_47465_48901 = state_47446__$1;
(statearr_47465_48901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (3))){
var inst_47444 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47446__$1,inst_47444);
} else {
if((state_val_47447 === (12))){
var inst_47400 = (state_47446[(8)]);
var inst_47434 = cljs.core.vec(inst_47400);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47446__$1,(15),out,inst_47434);
} else {
if((state_val_47447 === (2))){
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47446__$1,(4),ch);
} else {
if((state_val_47447 === (11))){
var inst_47404 = (state_47446[(9)]);
var inst_47409 = (state_47446[(10)]);
var inst_47423 = (state_47446[(2)]);
var inst_47424 = [];
var inst_47425 = inst_47424.push(inst_47404);
var inst_47400 = inst_47424;
var inst_47401 = inst_47409;
var state_47446__$1 = (function (){var statearr_47471 = state_47446;
(statearr_47471[(7)] = inst_47401);

(statearr_47471[(8)] = inst_47400);

(statearr_47471[(11)] = inst_47425);

(statearr_47471[(12)] = inst_47423);

return statearr_47471;
})();
var statearr_47472_48910 = state_47446__$1;
(statearr_47472_48910[(2)] = null);

(statearr_47472_48910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (9))){
var inst_47400 = (state_47446[(8)]);
var inst_47420 = cljs.core.vec(inst_47400);
var state_47446__$1 = state_47446;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47446__$1,(11),out,inst_47420);
} else {
if((state_val_47447 === (5))){
var inst_47401 = (state_47446[(7)]);
var inst_47404 = (state_47446[(9)]);
var inst_47409 = (state_47446[(10)]);
var inst_47409__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47404) : f.call(null,inst_47404));
var inst_47413 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47409__$1,inst_47401);
var inst_47414 = cljs.core.keyword_identical_QMARK_(inst_47401,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47415 = ((inst_47413) || (inst_47414));
var state_47446__$1 = (function (){var statearr_47477 = state_47446;
(statearr_47477[(10)] = inst_47409__$1);

return statearr_47477;
})();
if(cljs.core.truth_(inst_47415)){
var statearr_47481_48918 = state_47446__$1;
(statearr_47481_48918[(1)] = (8));

} else {
var statearr_47485_48919 = state_47446__$1;
(statearr_47485_48919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (14))){
var inst_47439 = (state_47446[(2)]);
var inst_47440 = cljs.core.async.close_BANG_(out);
var state_47446__$1 = (function (){var statearr_47488 = state_47446;
(statearr_47488[(13)] = inst_47439);

return statearr_47488;
})();
var statearr_47489_48921 = state_47446__$1;
(statearr_47489_48921[(2)] = inst_47440);

(statearr_47489_48921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (10))){
var inst_47428 = (state_47446[(2)]);
var state_47446__$1 = state_47446;
var statearr_47490_48923 = state_47446__$1;
(statearr_47490_48923[(2)] = inst_47428);

(statearr_47490_48923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47447 === (8))){
var inst_47400 = (state_47446[(8)]);
var inst_47404 = (state_47446[(9)]);
var inst_47409 = (state_47446[(10)]);
var inst_47417 = inst_47400.push(inst_47404);
var tmp47486 = inst_47400;
var inst_47400__$1 = tmp47486;
var inst_47401 = inst_47409;
var state_47446__$1 = (function (){var statearr_47492 = state_47446;
(statearr_47492[(7)] = inst_47401);

(statearr_47492[(8)] = inst_47400__$1);

(statearr_47492[(14)] = inst_47417);

return statearr_47492;
})();
var statearr_47494_48930 = state_47446__$1;
(statearr_47494_48930[(2)] = null);

(statearr_47494_48930[(1)] = (2));


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
});})(c__44617__auto___48876,out))
;
return ((function (switch__44304__auto__,c__44617__auto___48876,out){
return (function() {
var cljs$core$async$state_machine__44305__auto__ = null;
var cljs$core$async$state_machine__44305__auto____0 = (function (){
var statearr_47496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47496[(0)] = cljs$core$async$state_machine__44305__auto__);

(statearr_47496[(1)] = (1));

return statearr_47496;
});
var cljs$core$async$state_machine__44305__auto____1 = (function (state_47446){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_47446);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e47501){if((e47501 instanceof Object)){
var ex__44308__auto__ = e47501;
var statearr_47503_48937 = state_47446;
(statearr_47503_48937[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47501;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48939 = state_47446;
state_47446 = G__48939;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
cljs$core$async$state_machine__44305__auto__ = function(state_47446){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44305__auto____1.call(this,state_47446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44305__auto____0;
cljs$core$async$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44305__auto____1;
return cljs$core$async$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___48876,out))
})();
var state__44619__auto__ = (function (){var statearr_47504 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_47504[(6)] = c__44617__auto___48876);

return statearr_47504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___48876,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
