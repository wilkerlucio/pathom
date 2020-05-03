goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428 = (function (val,meta43429){
this.val = val;
this.meta43429 = meta43429;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43430,meta43429__$1){
var self__ = this;
var _43430__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428(self__.val,meta43429__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43430){
var self__ = this;
var _43430__$1 = this;
return self__.meta43429;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta43429","meta43429",-1910983230,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels43428";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels43428");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels43428.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels43428 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels43428(val__$1,meta43429){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428(val__$1,meta43429));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels43428(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async.impl.channels/PutBox");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_43678 = self__.puts.pop();
if((putter_43678 == null)){
} else {
var put_handler_43681 = putter_43678.handler;
var val_43682 = putter_43678.val;
if(put_handler_43681.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_43687 = put_handler_43681.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_43687,put_handler_43681,val_43682,putter_43678,this$__$1){
return (function (){
return (put_cb_43687.cljs$core$IFn$_invoke$arity$1 ? put_cb_43687.cljs$core$IFn$_invoke$arity$1(true) : put_cb_43687.call(null,true));
});})(put_cb_43687,put_handler_43681,val_43682,putter_43678,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = self__.buf;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4120__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__43706 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__43706;
continue;
} else {
var G__43709 = takers;
takers = G__43709;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__43476_43710 = cljs.core.seq(take_cbs);
var chunk__43478_43711 = null;
var count__43479_43712 = (0);
var i__43480_43713 = (0);
while(true){
if((i__43480_43713 < count__43479_43712)){
var f_43715 = chunk__43478_43711.cljs$core$IIndexed$_nth$arity$2(null,i__43480_43713);
cljs.core.async.impl.dispatch.run(f_43715);


var G__43717 = seq__43476_43710;
var G__43718 = chunk__43478_43711;
var G__43719 = count__43479_43712;
var G__43720 = (i__43480_43713 + (1));
seq__43476_43710 = G__43717;
chunk__43478_43711 = G__43718;
count__43479_43712 = G__43719;
i__43480_43713 = G__43720;
continue;
} else {
var temp__5720__auto___43726 = cljs.core.seq(seq__43476_43710);
if(temp__5720__auto___43726){
var seq__43476_43732__$1 = temp__5720__auto___43726;
if(cljs.core.chunked_seq_QMARK_(seq__43476_43732__$1)){
var c__4550__auto___43734 = cljs.core.chunk_first(seq__43476_43732__$1);
var G__43735 = cljs.core.chunk_rest(seq__43476_43732__$1);
var G__43736 = c__4550__auto___43734;
var G__43737 = cljs.core.count(c__4550__auto___43734);
var G__43738 = (0);
seq__43476_43710 = G__43735;
chunk__43478_43711 = G__43736;
count__43479_43712 = G__43737;
i__43480_43713 = G__43738;
continue;
} else {
var f_43740 = cljs.core.first(seq__43476_43732__$1);
cljs.core.async.impl.dispatch.run(f_43740);


var G__43742 = cljs.core.next(seq__43476_43732__$1);
var G__43743 = null;
var G__43744 = (0);
var G__43745 = (0);
seq__43476_43710 = G__43742;
chunk__43478_43711 = G__43743;
count__43479_43712 = G__43744;
i__43480_43713 = G__43745;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5718__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5718__auto__)){
var take_cb = temp__5718__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__43504 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__4120__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__4120__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))){
var G__43781 = cbs__$1;
cbs = G__43781;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43504,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43504,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__43518_43785 = cljs.core.seq(cbs);
var chunk__43519_43786 = null;
var count__43520_43787 = (0);
var i__43521_43788 = (0);
while(true){
if((i__43521_43788 < count__43520_43787)){
var cb_43790 = chunk__43519_43786.cljs$core$IIndexed$_nth$arity$2(null,i__43521_43788);
cljs.core.async.impl.dispatch.run(((function (seq__43518_43785,chunk__43519_43786,count__43520_43787,i__43521_43788,cb_43790,val,vec__43504,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return (cb_43790.cljs$core$IFn$_invoke$arity$1 ? cb_43790.cljs$core$IFn$_invoke$arity$1(true) : cb_43790.call(null,true));
});})(seq__43518_43785,chunk__43519_43786,count__43520_43787,i__43521_43788,cb_43790,val,vec__43504,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__43799 = seq__43518_43785;
var G__43800 = chunk__43519_43786;
var G__43801 = count__43520_43787;
var G__43802 = (i__43521_43788 + (1));
seq__43518_43785 = G__43799;
chunk__43519_43786 = G__43800;
count__43520_43787 = G__43801;
i__43521_43788 = G__43802;
continue;
} else {
var temp__5720__auto___43803 = cljs.core.seq(seq__43518_43785);
if(temp__5720__auto___43803){
var seq__43518_43804__$1 = temp__5720__auto___43803;
if(cljs.core.chunked_seq_QMARK_(seq__43518_43804__$1)){
var c__4550__auto___43805 = cljs.core.chunk_first(seq__43518_43804__$1);
var G__43806 = cljs.core.chunk_rest(seq__43518_43804__$1);
var G__43807 = c__4550__auto___43805;
var G__43808 = cljs.core.count(c__4550__auto___43805);
var G__43809 = (0);
seq__43518_43785 = G__43806;
chunk__43519_43786 = G__43807;
count__43520_43787 = G__43808;
i__43521_43788 = G__43809;
continue;
} else {
var cb_43810 = cljs.core.first(seq__43518_43804__$1);
cljs.core.async.impl.dispatch.run(((function (seq__43518_43785,chunk__43519_43786,count__43520_43787,i__43521_43788,cb_43810,seq__43518_43804__$1,temp__5720__auto___43803,val,vec__43504,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1){
return (function (){
return (cb_43810.cljs$core$IFn$_invoke$arity$1 ? cb_43810.cljs$core$IFn$_invoke$arity$1(true) : cb_43810.call(null,true));
});})(seq__43518_43785,chunk__43519_43786,count__43520_43787,i__43521_43788,cb_43810,seq__43518_43804__$1,temp__5720__auto___43803,val,vec__43504,done_QMARK_,cbs,take_cb,temp__5718__auto__,this$__$1))
);


var G__43812 = cljs.core.next(seq__43518_43804__$1);
var G__43813 = null;
var G__43814 = (0);
var G__43815 = (0);
seq__43518_43785 = G__43812;
chunk__43519_43786 = G__43813;
count__43520_43787 = G__43814;
i__43521_43788 = G__43815;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4120__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})())){
var has_val = (function (){var and__4120__auto__ = self__.buf;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4120__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__4120__auto__ = self__.buf;
if(cljs.core.truth_(and__4120__auto__)){
return (self__.puts.length === (0));
} else {
return and__4120__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_43833 = self__.takes.pop();
if((taker_43833 == null)){
} else {
if(taker_43833.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_43836 = taker_43833.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_43837 = (cljs.core.truth_((function (){var and__4120__auto__ = self__.buf;
if(cljs.core.truth_(and__4120__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4120__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_43836,val_43837,taker_43833,this$__$1){
return (function (){
return (take_cb_43836.cljs$core$IFn$_invoke$arity$1 ? take_cb_43836.cljs$core$IFn$_invoke$arity$1(val_43837) : take_cb_43836.call(null,val_43837));
});})(take_cb_43836,val_43837,taker_43833,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__43594 = (function (){var or__4131__auto__ = exh;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__43594.cljs$core$IFn$_invoke$arity$1 ? fexpr__43594.cljs$core$IFn$_invoke$arity$1(t) : fexpr__43594.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__43603 = arguments.length;
switch (G__43603) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__43875 = null;
var G__43875__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e43617){var t = e43617;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__43875__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e43618){var t = e43618;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__43875 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__43875__1.call(this,buf__$1);
case 2:
return G__43875__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43875.cljs$core$IFn$_invoke$arity$1 = G__43875__1;
G__43875.cljs$core$IFn$_invoke$arity$2 = G__43875__2;
return G__43875;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
