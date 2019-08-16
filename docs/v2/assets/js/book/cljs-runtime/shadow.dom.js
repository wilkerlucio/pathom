goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58371 = coll;
var G__58372 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58371,G__58372) : shadow.dom.lazy_native_coll_seq.call(null,G__58371,G__58372));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58406 = arguments.length;
switch (G__58406) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58420 = arguments.length;
switch (G__58420) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58432 = arguments.length;
switch (G__58432) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58446 = arguments.length;
switch (G__58446) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58463 = arguments.length;
switch (G__58463) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__58468 = document;
var G__58470 = shadow.dom.dom_node(el);
return goog.dom.contains(G__58468,G__58470);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__58472 = shadow.dom.dom_node(parent);
var G__58473 = shadow.dom.dom_node(el);
return goog.dom.contains(G__58472,G__58473);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__58474 = shadow.dom.dom_node(el);
var G__58475 = cls;
return goog.dom.classlist.add(G__58474,G__58475);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__58482 = shadow.dom.dom_node(el);
var G__58483 = cls;
return goog.dom.classlist.remove(G__58482,G__58483);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58485 = arguments.length;
switch (G__58485) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__58491 = shadow.dom.dom_node(el);
var G__58492 = cls;
return goog.dom.classlist.toggle(G__58491,G__58492);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58505){if((e58505 instanceof Object)){
var e = e58505;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58505;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58515 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58516 = null;
var count__58517 = (0);
var i__58518 = (0);
while(true){
if((i__58518 < count__58517)){
var el = chunk__58516.cljs$core$IIndexed$_nth$arity$2(null,i__58518);
var handler_59511__$1 = ((function (seq__58515,chunk__58516,count__58517,i__58518,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58515,chunk__58516,count__58517,i__58518,el))
;
var G__58531_59513 = el;
var G__58532_59514 = cljs.core.name(ev);
var G__58533_59515 = handler_59511__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58531_59513,G__58532_59514,G__58533_59515) : shadow.dom.dom_listen.call(null,G__58531_59513,G__58532_59514,G__58533_59515));


var G__59517 = seq__58515;
var G__59518 = chunk__58516;
var G__59519 = count__58517;
var G__59520 = (i__58518 + (1));
seq__58515 = G__59517;
chunk__58516 = G__59518;
count__58517 = G__59519;
i__58518 = G__59520;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58515);
if(temp__5720__auto__){
var seq__58515__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58515__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58515__$1);
var G__59522 = cljs.core.chunk_rest(seq__58515__$1);
var G__59523 = c__4550__auto__;
var G__59524 = cljs.core.count(c__4550__auto__);
var G__59525 = (0);
seq__58515 = G__59522;
chunk__58516 = G__59523;
count__58517 = G__59524;
i__58518 = G__59525;
continue;
} else {
var el = cljs.core.first(seq__58515__$1);
var handler_59526__$1 = ((function (seq__58515,chunk__58516,count__58517,i__58518,el,seq__58515__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58515,chunk__58516,count__58517,i__58518,el,seq__58515__$1,temp__5720__auto__))
;
var G__58538_59528 = el;
var G__58539_59529 = cljs.core.name(ev);
var G__58540_59530 = handler_59526__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58538_59528,G__58539_59529,G__58540_59530) : shadow.dom.dom_listen.call(null,G__58538_59528,G__58539_59529,G__58540_59530));


var G__59531 = cljs.core.next(seq__58515__$1);
var G__59532 = null;
var G__59533 = (0);
var G__59534 = (0);
seq__58515 = G__59531;
chunk__58516 = G__59532;
count__58517 = G__59533;
i__58518 = G__59534;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58545 = arguments.length;
switch (G__58545) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__58558 = shadow.dom.dom_node(el);
var G__58559 = cljs.core.name(ev);
var G__58560 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58558,G__58559,G__58560) : shadow.dom.dom_listen.call(null,G__58558,G__58559,G__58560));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__58562 = shadow.dom.dom_node(el);
var G__58563 = cljs.core.name(ev);
var G__58564 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__58562,G__58563,G__58564) : shadow.dom.dom_listen_remove.call(null,G__58562,G__58563,G__58564));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58571 = cljs.core.seq(events);
var chunk__58572 = null;
var count__58573 = (0);
var i__58574 = (0);
while(true){
if((i__58574 < count__58573)){
var vec__58589 = chunk__58572.cljs$core$IIndexed$_nth$arity$2(null,i__58574);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59540 = seq__58571;
var G__59541 = chunk__58572;
var G__59542 = count__58573;
var G__59543 = (i__58574 + (1));
seq__58571 = G__59540;
chunk__58572 = G__59541;
count__58573 = G__59542;
i__58574 = G__59543;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58571);
if(temp__5720__auto__){
var seq__58571__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58571__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58571__$1);
var G__59545 = cljs.core.chunk_rest(seq__58571__$1);
var G__59546 = c__4550__auto__;
var G__59547 = cljs.core.count(c__4550__auto__);
var G__59548 = (0);
seq__58571 = G__59545;
chunk__58572 = G__59546;
count__58573 = G__59547;
i__58574 = G__59548;
continue;
} else {
var vec__58600 = cljs.core.first(seq__58571__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58600,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59553 = cljs.core.next(seq__58571__$1);
var G__59554 = null;
var G__59555 = (0);
var G__59556 = (0);
seq__58571 = G__59553;
chunk__58572 = G__59554;
count__58573 = G__59555;
i__58574 = G__59556;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58605 = cljs.core.seq(styles);
var chunk__58606 = null;
var count__58607 = (0);
var i__58608 = (0);
while(true){
if((i__58608 < count__58607)){
var vec__58622 = chunk__58606.cljs$core$IIndexed$_nth$arity$2(null,i__58608);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58622,(1),null);
var G__58626_59559 = dom;
var G__58627_59560 = cljs.core.name(k);
var G__58628_59561 = (((v == null))?"":v);
goog.style.setStyle(G__58626_59559,G__58627_59560,G__58628_59561);


var G__59563 = seq__58605;
var G__59564 = chunk__58606;
var G__59565 = count__58607;
var G__59566 = (i__58608 + (1));
seq__58605 = G__59563;
chunk__58606 = G__59564;
count__58607 = G__59565;
i__58608 = G__59566;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58605);
if(temp__5720__auto__){
var seq__58605__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58605__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58605__$1);
var G__59567 = cljs.core.chunk_rest(seq__58605__$1);
var G__59568 = c__4550__auto__;
var G__59569 = cljs.core.count(c__4550__auto__);
var G__59570 = (0);
seq__58605 = G__59567;
chunk__58606 = G__59568;
count__58607 = G__59569;
i__58608 = G__59570;
continue;
} else {
var vec__58630 = cljs.core.first(seq__58605__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58630,(1),null);
var G__58633_59573 = dom;
var G__58634_59574 = cljs.core.name(k);
var G__58635_59575 = (((v == null))?"":v);
goog.style.setStyle(G__58633_59573,G__58634_59574,G__58635_59575);


var G__59576 = cljs.core.next(seq__58605__$1);
var G__59577 = null;
var G__59578 = (0);
var G__59579 = (0);
seq__58605 = G__59576;
chunk__58606 = G__59577;
count__58607 = G__59578;
i__58608 = G__59579;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58637_59580 = key;
var G__58637_59581__$1 = (((G__58637_59580 instanceof cljs.core.Keyword))?G__58637_59580.fqn:null);
switch (G__58637_59581__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_59589 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_59589,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_59589,"aria-");
}
})())){
el.setAttribute(ks_59589,value);
} else {
(el[ks_59589] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__58648 = shadow.dom.dom_node(el);
var G__58649 = cls;
return goog.dom.classlist.contains(G__58648,G__58649);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58662){
var map__58664 = p__58662;
var map__58664__$1 = (((((!((map__58664 == null))))?(((((map__58664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58664):map__58664);
var props = map__58664__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58664__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58668 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58668,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58671 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58671,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58671;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58674 = arguments.length;
switch (G__58674) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58683){
var vec__58685 = p__58683;
var seq__58686 = cljs.core.seq(vec__58685);
var first__58687 = cljs.core.first(seq__58686);
var seq__58686__$1 = cljs.core.next(seq__58686);
var nn = first__58687;
var first__58687__$1 = cljs.core.first(seq__58686__$1);
var seq__58686__$2 = cljs.core.next(seq__58686__$1);
var np = first__58687__$1;
var nc = seq__58686__$2;
var node = vec__58685;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58690 = nn;
var G__58691 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58690,G__58691) : create_fn.call(null,G__58690,G__58691));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58693 = nn;
var G__58694 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58693,G__58694) : create_fn.call(null,G__58693,G__58694));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58702 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58702,(1),null);
var seq__58705_59613 = cljs.core.seq(node_children);
var chunk__58706_59614 = null;
var count__58707_59615 = (0);
var i__58708_59616 = (0);
while(true){
if((i__58708_59616 < count__58707_59615)){
var child_struct_59617 = chunk__58706_59614.cljs$core$IIndexed$_nth$arity$2(null,i__58708_59616);
var children_59618 = shadow.dom.dom_node(child_struct_59617);
if(cljs.core.seq_QMARK_(children_59618)){
var seq__58740_59619 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59618));
var chunk__58742_59620 = null;
var count__58743_59621 = (0);
var i__58744_59622 = (0);
while(true){
if((i__58744_59622 < count__58743_59621)){
var child_59627 = chunk__58742_59620.cljs$core$IIndexed$_nth$arity$2(null,i__58744_59622);
if(cljs.core.truth_(child_59627)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59627);


var G__59637 = seq__58740_59619;
var G__59638 = chunk__58742_59620;
var G__59639 = count__58743_59621;
var G__59640 = (i__58744_59622 + (1));
seq__58740_59619 = G__59637;
chunk__58742_59620 = G__59638;
count__58743_59621 = G__59639;
i__58744_59622 = G__59640;
continue;
} else {
var G__59643 = seq__58740_59619;
var G__59644 = chunk__58742_59620;
var G__59645 = count__58743_59621;
var G__59646 = (i__58744_59622 + (1));
seq__58740_59619 = G__59643;
chunk__58742_59620 = G__59644;
count__58743_59621 = G__59645;
i__58744_59622 = G__59646;
continue;
}
} else {
var temp__5720__auto___59648 = cljs.core.seq(seq__58740_59619);
if(temp__5720__auto___59648){
var seq__58740_59649__$1 = temp__5720__auto___59648;
if(cljs.core.chunked_seq_QMARK_(seq__58740_59649__$1)){
var c__4550__auto___59650 = cljs.core.chunk_first(seq__58740_59649__$1);
var G__59651 = cljs.core.chunk_rest(seq__58740_59649__$1);
var G__59652 = c__4550__auto___59650;
var G__59653 = cljs.core.count(c__4550__auto___59650);
var G__59654 = (0);
seq__58740_59619 = G__59651;
chunk__58742_59620 = G__59652;
count__58743_59621 = G__59653;
i__58744_59622 = G__59654;
continue;
} else {
var child_59655 = cljs.core.first(seq__58740_59649__$1);
if(cljs.core.truth_(child_59655)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59655);


var G__59656 = cljs.core.next(seq__58740_59649__$1);
var G__59657 = null;
var G__59658 = (0);
var G__59659 = (0);
seq__58740_59619 = G__59656;
chunk__58742_59620 = G__59657;
count__58743_59621 = G__59658;
i__58744_59622 = G__59659;
continue;
} else {
var G__59660 = cljs.core.next(seq__58740_59649__$1);
var G__59661 = null;
var G__59662 = (0);
var G__59663 = (0);
seq__58740_59619 = G__59660;
chunk__58742_59620 = G__59661;
count__58743_59621 = G__59662;
i__58744_59622 = G__59663;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59618);
}


var G__59664 = seq__58705_59613;
var G__59665 = chunk__58706_59614;
var G__59666 = count__58707_59615;
var G__59667 = (i__58708_59616 + (1));
seq__58705_59613 = G__59664;
chunk__58706_59614 = G__59665;
count__58707_59615 = G__59666;
i__58708_59616 = G__59667;
continue;
} else {
var temp__5720__auto___59668 = cljs.core.seq(seq__58705_59613);
if(temp__5720__auto___59668){
var seq__58705_59669__$1 = temp__5720__auto___59668;
if(cljs.core.chunked_seq_QMARK_(seq__58705_59669__$1)){
var c__4550__auto___59670 = cljs.core.chunk_first(seq__58705_59669__$1);
var G__59671 = cljs.core.chunk_rest(seq__58705_59669__$1);
var G__59672 = c__4550__auto___59670;
var G__59673 = cljs.core.count(c__4550__auto___59670);
var G__59674 = (0);
seq__58705_59613 = G__59671;
chunk__58706_59614 = G__59672;
count__58707_59615 = G__59673;
i__58708_59616 = G__59674;
continue;
} else {
var child_struct_59675 = cljs.core.first(seq__58705_59669__$1);
var children_59676 = shadow.dom.dom_node(child_struct_59675);
if(cljs.core.seq_QMARK_(children_59676)){
var seq__58751_59677 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59676));
var chunk__58753_59678 = null;
var count__58754_59679 = (0);
var i__58755_59680 = (0);
while(true){
if((i__58755_59680 < count__58754_59679)){
var child_59685 = chunk__58753_59678.cljs$core$IIndexed$_nth$arity$2(null,i__58755_59680);
if(cljs.core.truth_(child_59685)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59685);


var G__59687 = seq__58751_59677;
var G__59688 = chunk__58753_59678;
var G__59689 = count__58754_59679;
var G__59690 = (i__58755_59680 + (1));
seq__58751_59677 = G__59687;
chunk__58753_59678 = G__59688;
count__58754_59679 = G__59689;
i__58755_59680 = G__59690;
continue;
} else {
var G__59692 = seq__58751_59677;
var G__59693 = chunk__58753_59678;
var G__59694 = count__58754_59679;
var G__59695 = (i__58755_59680 + (1));
seq__58751_59677 = G__59692;
chunk__58753_59678 = G__59693;
count__58754_59679 = G__59694;
i__58755_59680 = G__59695;
continue;
}
} else {
var temp__5720__auto___59697__$1 = cljs.core.seq(seq__58751_59677);
if(temp__5720__auto___59697__$1){
var seq__58751_59698__$1 = temp__5720__auto___59697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58751_59698__$1)){
var c__4550__auto___59699 = cljs.core.chunk_first(seq__58751_59698__$1);
var G__59700 = cljs.core.chunk_rest(seq__58751_59698__$1);
var G__59701 = c__4550__auto___59699;
var G__59702 = cljs.core.count(c__4550__auto___59699);
var G__59703 = (0);
seq__58751_59677 = G__59700;
chunk__58753_59678 = G__59701;
count__58754_59679 = G__59702;
i__58755_59680 = G__59703;
continue;
} else {
var child_59704 = cljs.core.first(seq__58751_59698__$1);
if(cljs.core.truth_(child_59704)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59704);


var G__59705 = cljs.core.next(seq__58751_59698__$1);
var G__59706 = null;
var G__59707 = (0);
var G__59708 = (0);
seq__58751_59677 = G__59705;
chunk__58753_59678 = G__59706;
count__58754_59679 = G__59707;
i__58755_59680 = G__59708;
continue;
} else {
var G__59709 = cljs.core.next(seq__58751_59698__$1);
var G__59710 = null;
var G__59711 = (0);
var G__59712 = (0);
seq__58751_59677 = G__59709;
chunk__58753_59678 = G__59710;
count__58754_59679 = G__59711;
i__58755_59680 = G__59712;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59676);
}


var G__59713 = cljs.core.next(seq__58705_59669__$1);
var G__59714 = null;
var G__59715 = (0);
var G__59716 = (0);
seq__58705_59613 = G__59713;
chunk__58706_59614 = G__59714;
count__58707_59615 = G__59715;
i__58708_59616 = G__59716;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__58772 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__58772);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58779 = cljs.core.seq(node);
var chunk__58780 = null;
var count__58781 = (0);
var i__58782 = (0);
while(true){
if((i__58782 < count__58781)){
var n = chunk__58780.cljs$core$IIndexed$_nth$arity$2(null,i__58782);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59774 = seq__58779;
var G__59775 = chunk__58780;
var G__59776 = count__58781;
var G__59777 = (i__58782 + (1));
seq__58779 = G__59774;
chunk__58780 = G__59775;
count__58781 = G__59776;
i__58782 = G__59777;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58779);
if(temp__5720__auto__){
var seq__58779__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58779__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58779__$1);
var G__59787 = cljs.core.chunk_rest(seq__58779__$1);
var G__59788 = c__4550__auto__;
var G__59789 = cljs.core.count(c__4550__auto__);
var G__59790 = (0);
seq__58779 = G__59787;
chunk__58780 = G__59788;
count__58781 = G__59789;
i__58782 = G__59790;
continue;
} else {
var n = cljs.core.first(seq__58779__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59795 = cljs.core.next(seq__58779__$1);
var G__59796 = null;
var G__59797 = (0);
var G__59798 = (0);
seq__58779 = G__59795;
chunk__58780 = G__59796;
count__58781 = G__59797;
i__58782 = G__59798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__58792 = shadow.dom.dom_node(new$);
var G__58793 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58792,G__58793);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58798 = arguments.length;
switch (G__58798) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58806 = arguments.length;
switch (G__58806) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58818 = arguments.length;
switch (G__58818) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___59849 = arguments.length;
var i__4731__auto___59850 = (0);
while(true){
if((i__4731__auto___59850 < len__4730__auto___59849)){
args__4736__auto__.push((arguments[i__4731__auto___59850]));

var G__59853 = (i__4731__auto___59850 + (1));
i__4731__auto___59850 = G__59853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58846_59862 = cljs.core.seq(nodes);
var chunk__58847_59863 = null;
var count__58848_59864 = (0);
var i__58849_59865 = (0);
while(true){
if((i__58849_59865 < count__58848_59864)){
var node_59870 = chunk__58847_59863.cljs$core$IIndexed$_nth$arity$2(null,i__58849_59865);
fragment.appendChild(shadow.dom._to_dom(node_59870));


var G__59879 = seq__58846_59862;
var G__59880 = chunk__58847_59863;
var G__59881 = count__58848_59864;
var G__59882 = (i__58849_59865 + (1));
seq__58846_59862 = G__59879;
chunk__58847_59863 = G__59880;
count__58848_59864 = G__59881;
i__58849_59865 = G__59882;
continue;
} else {
var temp__5720__auto___59883 = cljs.core.seq(seq__58846_59862);
if(temp__5720__auto___59883){
var seq__58846_59884__$1 = temp__5720__auto___59883;
if(cljs.core.chunked_seq_QMARK_(seq__58846_59884__$1)){
var c__4550__auto___59885 = cljs.core.chunk_first(seq__58846_59884__$1);
var G__59886 = cljs.core.chunk_rest(seq__58846_59884__$1);
var G__59887 = c__4550__auto___59885;
var G__59888 = cljs.core.count(c__4550__auto___59885);
var G__59889 = (0);
seq__58846_59862 = G__59886;
chunk__58847_59863 = G__59887;
count__58848_59864 = G__59888;
i__58849_59865 = G__59889;
continue;
} else {
var node_59890 = cljs.core.first(seq__58846_59884__$1);
fragment.appendChild(shadow.dom._to_dom(node_59890));


var G__59893 = cljs.core.next(seq__58846_59884__$1);
var G__59894 = null;
var G__59895 = (0);
var G__59896 = (0);
seq__58846_59862 = G__59893;
chunk__58847_59863 = G__59894;
count__58848_59864 = G__59895;
i__58849_59865 = G__59896;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq58836){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58836));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58857_59911 = cljs.core.seq(scripts);
var chunk__58858_59912 = null;
var count__58859_59913 = (0);
var i__58860_59914 = (0);
while(true){
if((i__58860_59914 < count__58859_59913)){
var vec__58877_59918 = chunk__58858_59912.cljs$core$IIndexed$_nth$arity$2(null,i__58860_59914);
var script_tag_59919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58877_59918,(0),null);
var script_body_59920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58877_59918,(1),null);
eval(script_body_59920);


var G__59921 = seq__58857_59911;
var G__59922 = chunk__58858_59912;
var G__59923 = count__58859_59913;
var G__59924 = (i__58860_59914 + (1));
seq__58857_59911 = G__59921;
chunk__58858_59912 = G__59922;
count__58859_59913 = G__59923;
i__58860_59914 = G__59924;
continue;
} else {
var temp__5720__auto___59929 = cljs.core.seq(seq__58857_59911);
if(temp__5720__auto___59929){
var seq__58857_59932__$1 = temp__5720__auto___59929;
if(cljs.core.chunked_seq_QMARK_(seq__58857_59932__$1)){
var c__4550__auto___59934 = cljs.core.chunk_first(seq__58857_59932__$1);
var G__59939 = cljs.core.chunk_rest(seq__58857_59932__$1);
var G__59940 = c__4550__auto___59934;
var G__59941 = cljs.core.count(c__4550__auto___59934);
var G__59942 = (0);
seq__58857_59911 = G__59939;
chunk__58858_59912 = G__59940;
count__58859_59913 = G__59941;
i__58860_59914 = G__59942;
continue;
} else {
var vec__58881_59951 = cljs.core.first(seq__58857_59932__$1);
var script_tag_59952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58881_59951,(0),null);
var script_body_59953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58881_59951,(1),null);
eval(script_body_59953);


var G__59957 = cljs.core.next(seq__58857_59932__$1);
var G__59958 = null;
var G__59959 = (0);
var G__59960 = (0);
seq__58857_59911 = G__59957;
chunk__58858_59912 = G__59958;
count__58859_59913 = G__59959;
i__58860_59914 = G__59960;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__58884){
var vec__58885 = p__58884;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58885,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58885,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__58896 = shadow.dom.dom_node(el);
var G__58897 = cls;
return goog.dom.getAncestorByClass(G__58896,G__58897);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58911 = arguments.length;
switch (G__58911) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__58924 = shadow.dom.dom_node(el);
var G__58925 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58924,G__58925);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58926 = shadow.dom.dom_node(el);
var G__58927 = cljs.core.name(tag);
var G__58928 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58926,G__58927,G__58928);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58940 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58940);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58941 = shadow.dom.dom_node(dom);
var G__58942 = value;
return goog.dom.forms.setValue(G__58941,G__58942);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58971 = cljs.core.seq(style_keys);
var chunk__58972 = null;
var count__58973 = (0);
var i__58974 = (0);
while(true){
if((i__58974 < count__58973)){
var it = chunk__58972.cljs$core$IIndexed$_nth$arity$2(null,i__58974);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60002 = seq__58971;
var G__60003 = chunk__58972;
var G__60004 = count__58973;
var G__60005 = (i__58974 + (1));
seq__58971 = G__60002;
chunk__58972 = G__60003;
count__58973 = G__60004;
i__58974 = G__60005;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58971);
if(temp__5720__auto__){
var seq__58971__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58971__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58971__$1);
var G__60019 = cljs.core.chunk_rest(seq__58971__$1);
var G__60021 = c__4550__auto__;
var G__60022 = cljs.core.count(c__4550__auto__);
var G__60023 = (0);
seq__58971 = G__60019;
chunk__58972 = G__60021;
count__58973 = G__60022;
i__58974 = G__60023;
continue;
} else {
var it = cljs.core.first(seq__58971__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60029 = cljs.core.next(seq__58971__$1);
var G__60030 = null;
var G__60031 = (0);
var G__60032 = (0);
seq__58971 = G__60029;
chunk__58972 = G__60030;
count__58973 = G__60031;
i__58974 = G__60032;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k58988,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59007 = k58988;
var G__59007__$1 = (((G__59007 instanceof cljs.core.Keyword))?G__59007.fqn:null);
switch (G__59007__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58988,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59012){
var vec__59015 = p__59012;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59015,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59015,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58987){
var self__ = this;
var G__58987__$1 = this;
return (new cljs.core.RecordIter((0),G__58987__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__59045 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__59045(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58989,other58990){
var self__ = this;
var this58989__$1 = this;
return (((!((other58990 == null)))) && ((this58989__$1.constructor === other58990.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58989__$1.x,other58990.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58989__$1.y,other58990.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58989__$1.__extmap,other58990.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__58987){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59057 = cljs.core.keyword_identical_QMARK_;
var expr__59058 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__59060 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__59061 = expr__59058;
return (pred__59057.cljs$core$IFn$_invoke$arity$2 ? pred__59057.cljs$core$IFn$_invoke$arity$2(G__59060,G__59061) : pred__59057.call(null,G__59060,G__59061));
})())){
return (new shadow.dom.Coordinate(G__58987,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59062 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__59063 = expr__59058;
return (pred__59057.cljs$core$IFn$_invoke$arity$2 ? pred__59057.cljs$core$IFn$_invoke$arity$2(G__59062,G__59063) : pred__59057.call(null,G__59062,G__59063));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58987,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__58987),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__58987){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58987,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58997){
var extmap__4424__auto__ = (function (){var G__59069 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58997,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58997)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59069);
} else {
return G__59069;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58997),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58997),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__59077 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__59077);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__59078 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__59078);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__59083 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__59083);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59085,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59094 = k59085;
var G__59094__$1 = (((G__59094 instanceof cljs.core.Keyword))?G__59094.fqn:null);
switch (G__59094__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59085,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59097){
var vec__59098 = p__59097;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59098,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59098,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59084){
var self__ = this;
var G__59084__$1 = this;
return (new cljs.core.RecordIter((0),G__59084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__59108 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__59108(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59086,other59087){
var self__ = this;
var this59086__$1 = this;
return (((!((other59087 == null)))) && ((this59086__$1.constructor === other59087.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59086__$1.w,other59087.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59086__$1.h,other59087.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59086__$1.__extmap,other59087.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59084){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59119 = cljs.core.keyword_identical_QMARK_;
var expr__59120 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__59122 = new cljs.core.Keyword(null,"w","w",354169001);
var G__59123 = expr__59120;
return (pred__59119.cljs$core$IFn$_invoke$arity$2 ? pred__59119.cljs$core$IFn$_invoke$arity$2(G__59122,G__59123) : pred__59119.call(null,G__59122,G__59123));
})())){
return (new shadow.dom.Size(G__59084,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__59124 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__59125 = expr__59120;
return (pred__59119.cljs$core$IFn$_invoke$arity$2 ? pred__59119.cljs$core$IFn$_invoke$arity$2(G__59124,G__59125) : pred__59119.call(null,G__59124,G__59125));
})())){
return (new shadow.dom.Size(self__.w,G__59084,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59084),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59084){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__59084,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__59090){
var extmap__4424__auto__ = (function (){var G__59139 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59090,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__59090)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59139);
} else {
return G__59139;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__59090),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__59090),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__59147 = shadow.dom.dom_node(el);
return goog.style.getSize(G__59147);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__60144 = (i + (1));
var G__60145 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60144;
ret = G__60145;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59185){
var vec__59186 = p__59185;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59186,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__59197 = arguments.length;
switch (G__59197) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__59212_60161 = new_node;
var G__59213_60162 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__59212_60161,G__59213_60162);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__59219_60166 = new_node;
var G__59220_60167 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__59219_60166,G__59220_60167);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60180 = ps;
var G__60181 = (i + (1));
el__$1 = G__60180;
i = G__60181;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__59249 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__59249);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__59260 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__59260);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__59266 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__59266);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__59270 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59270,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59270,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59270,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__59276_60202 = cljs.core.seq(props);
var chunk__59277_60203 = null;
var count__59278_60204 = (0);
var i__59279_60205 = (0);
while(true){
if((i__59279_60205 < count__59278_60204)){
var vec__59310_60206 = chunk__59277_60203.cljs$core$IIndexed$_nth$arity$2(null,i__59279_60205);
var k_60208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59310_60206,(0),null);
var v_60209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59310_60206,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_60208);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60208),v_60209);


var G__60213 = seq__59276_60202;
var G__60214 = chunk__59277_60203;
var G__60215 = count__59278_60204;
var G__60216 = (i__59279_60205 + (1));
seq__59276_60202 = G__60213;
chunk__59277_60203 = G__60214;
count__59278_60204 = G__60215;
i__59279_60205 = G__60216;
continue;
} else {
var temp__5720__auto___60218 = cljs.core.seq(seq__59276_60202);
if(temp__5720__auto___60218){
var seq__59276_60219__$1 = temp__5720__auto___60218;
if(cljs.core.chunked_seq_QMARK_(seq__59276_60219__$1)){
var c__4550__auto___60220 = cljs.core.chunk_first(seq__59276_60219__$1);
var G__60222 = cljs.core.chunk_rest(seq__59276_60219__$1);
var G__60223 = c__4550__auto___60220;
var G__60224 = cljs.core.count(c__4550__auto___60220);
var G__60225 = (0);
seq__59276_60202 = G__60222;
chunk__59277_60203 = G__60223;
count__59278_60204 = G__60224;
i__59279_60205 = G__60225;
continue;
} else {
var vec__59315_60226 = cljs.core.first(seq__59276_60219__$1);
var k_60227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315_60226,(0),null);
var v_60228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59315_60226,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_60227);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60227),v_60228);


var G__60230 = cljs.core.next(seq__59276_60219__$1);
var G__60231 = null;
var G__60232 = (0);
var G__60233 = (0);
seq__59276_60202 = G__60230;
chunk__59277_60203 = G__60231;
count__59278_60204 = G__60232;
i__59279_60205 = G__60233;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__59328 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59328,(1),null);
var seq__59332_60240 = cljs.core.seq(node_children);
var chunk__59334_60241 = null;
var count__59335_60242 = (0);
var i__59336_60243 = (0);
while(true){
if((i__59336_60243 < count__59335_60242)){
var child_struct_60245 = chunk__59334_60241.cljs$core$IIndexed$_nth$arity$2(null,i__59336_60243);
if((!((child_struct_60245 == null)))){
if(typeof child_struct_60245 === 'string'){
var text_60249 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60249),child_struct_60245].join(''));
} else {
var children_60250 = shadow.dom.svg_node(child_struct_60245);
if(cljs.core.seq_QMARK_(children_60250)){
var seq__59393_60251 = cljs.core.seq(children_60250);
var chunk__59395_60252 = null;
var count__59396_60253 = (0);
var i__59397_60254 = (0);
while(true){
if((i__59397_60254 < count__59396_60253)){
var child_60256 = chunk__59395_60252.cljs$core$IIndexed$_nth$arity$2(null,i__59397_60254);
if(cljs.core.truth_(child_60256)){
node.appendChild(child_60256);


var G__60257 = seq__59393_60251;
var G__60258 = chunk__59395_60252;
var G__60259 = count__59396_60253;
var G__60260 = (i__59397_60254 + (1));
seq__59393_60251 = G__60257;
chunk__59395_60252 = G__60258;
count__59396_60253 = G__60259;
i__59397_60254 = G__60260;
continue;
} else {
var G__60262 = seq__59393_60251;
var G__60263 = chunk__59395_60252;
var G__60264 = count__59396_60253;
var G__60265 = (i__59397_60254 + (1));
seq__59393_60251 = G__60262;
chunk__59395_60252 = G__60263;
count__59396_60253 = G__60264;
i__59397_60254 = G__60265;
continue;
}
} else {
var temp__5720__auto___60268 = cljs.core.seq(seq__59393_60251);
if(temp__5720__auto___60268){
var seq__59393_60269__$1 = temp__5720__auto___60268;
if(cljs.core.chunked_seq_QMARK_(seq__59393_60269__$1)){
var c__4550__auto___60270 = cljs.core.chunk_first(seq__59393_60269__$1);
var G__60271 = cljs.core.chunk_rest(seq__59393_60269__$1);
var G__60272 = c__4550__auto___60270;
var G__60273 = cljs.core.count(c__4550__auto___60270);
var G__60274 = (0);
seq__59393_60251 = G__60271;
chunk__59395_60252 = G__60272;
count__59396_60253 = G__60273;
i__59397_60254 = G__60274;
continue;
} else {
var child_60275 = cljs.core.first(seq__59393_60269__$1);
if(cljs.core.truth_(child_60275)){
node.appendChild(child_60275);


var G__60277 = cljs.core.next(seq__59393_60269__$1);
var G__60278 = null;
var G__60279 = (0);
var G__60280 = (0);
seq__59393_60251 = G__60277;
chunk__59395_60252 = G__60278;
count__59396_60253 = G__60279;
i__59397_60254 = G__60280;
continue;
} else {
var G__60281 = cljs.core.next(seq__59393_60269__$1);
var G__60282 = null;
var G__60283 = (0);
var G__60284 = (0);
seq__59393_60251 = G__60281;
chunk__59395_60252 = G__60282;
count__59396_60253 = G__60283;
i__59397_60254 = G__60284;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60250);
}
}


var G__60286 = seq__59332_60240;
var G__60287 = chunk__59334_60241;
var G__60288 = count__59335_60242;
var G__60289 = (i__59336_60243 + (1));
seq__59332_60240 = G__60286;
chunk__59334_60241 = G__60287;
count__59335_60242 = G__60288;
i__59336_60243 = G__60289;
continue;
} else {
var G__60292 = seq__59332_60240;
var G__60293 = chunk__59334_60241;
var G__60294 = count__59335_60242;
var G__60295 = (i__59336_60243 + (1));
seq__59332_60240 = G__60292;
chunk__59334_60241 = G__60293;
count__59335_60242 = G__60294;
i__59336_60243 = G__60295;
continue;
}
} else {
var temp__5720__auto___60298 = cljs.core.seq(seq__59332_60240);
if(temp__5720__auto___60298){
var seq__59332_60300__$1 = temp__5720__auto___60298;
if(cljs.core.chunked_seq_QMARK_(seq__59332_60300__$1)){
var c__4550__auto___60302 = cljs.core.chunk_first(seq__59332_60300__$1);
var G__60307 = cljs.core.chunk_rest(seq__59332_60300__$1);
var G__60308 = c__4550__auto___60302;
var G__60309 = cljs.core.count(c__4550__auto___60302);
var G__60310 = (0);
seq__59332_60240 = G__60307;
chunk__59334_60241 = G__60308;
count__59335_60242 = G__60309;
i__59336_60243 = G__60310;
continue;
} else {
var child_struct_60311 = cljs.core.first(seq__59332_60300__$1);
if((!((child_struct_60311 == null)))){
if(typeof child_struct_60311 === 'string'){
var text_60312 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60312),child_struct_60311].join(''));
} else {
var children_60313 = shadow.dom.svg_node(child_struct_60311);
if(cljs.core.seq_QMARK_(children_60313)){
var seq__59414_60314 = cljs.core.seq(children_60313);
var chunk__59416_60315 = null;
var count__59417_60316 = (0);
var i__59418_60317 = (0);
while(true){
if((i__59418_60317 < count__59417_60316)){
var child_60318 = chunk__59416_60315.cljs$core$IIndexed$_nth$arity$2(null,i__59418_60317);
if(cljs.core.truth_(child_60318)){
node.appendChild(child_60318);


var G__60320 = seq__59414_60314;
var G__60321 = chunk__59416_60315;
var G__60322 = count__59417_60316;
var G__60323 = (i__59418_60317 + (1));
seq__59414_60314 = G__60320;
chunk__59416_60315 = G__60321;
count__59417_60316 = G__60322;
i__59418_60317 = G__60323;
continue;
} else {
var G__60324 = seq__59414_60314;
var G__60325 = chunk__59416_60315;
var G__60326 = count__59417_60316;
var G__60327 = (i__59418_60317 + (1));
seq__59414_60314 = G__60324;
chunk__59416_60315 = G__60325;
count__59417_60316 = G__60326;
i__59418_60317 = G__60327;
continue;
}
} else {
var temp__5720__auto___60328__$1 = cljs.core.seq(seq__59414_60314);
if(temp__5720__auto___60328__$1){
var seq__59414_60329__$1 = temp__5720__auto___60328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59414_60329__$1)){
var c__4550__auto___60332 = cljs.core.chunk_first(seq__59414_60329__$1);
var G__60337 = cljs.core.chunk_rest(seq__59414_60329__$1);
var G__60338 = c__4550__auto___60332;
var G__60339 = cljs.core.count(c__4550__auto___60332);
var G__60340 = (0);
seq__59414_60314 = G__60337;
chunk__59416_60315 = G__60338;
count__59417_60316 = G__60339;
i__59418_60317 = G__60340;
continue;
} else {
var child_60343 = cljs.core.first(seq__59414_60329__$1);
if(cljs.core.truth_(child_60343)){
node.appendChild(child_60343);


var G__60349 = cljs.core.next(seq__59414_60329__$1);
var G__60350 = null;
var G__60351 = (0);
var G__60352 = (0);
seq__59414_60314 = G__60349;
chunk__59416_60315 = G__60350;
count__59417_60316 = G__60351;
i__59418_60317 = G__60352;
continue;
} else {
var G__60357 = cljs.core.next(seq__59414_60329__$1);
var G__60358 = null;
var G__60359 = (0);
var G__60360 = (0);
seq__59414_60314 = G__60357;
chunk__59416_60315 = G__60358;
count__59417_60316 = G__60359;
i__59418_60317 = G__60360;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60313);
}
}


var G__60371 = cljs.core.next(seq__59332_60300__$1);
var G__60372 = null;
var G__60373 = (0);
var G__60374 = (0);
seq__59332_60240 = G__60371;
chunk__59334_60241 = G__60372;
count__59335_60242 = G__60373;
i__59336_60243 = G__60374;
continue;
} else {
var G__60381 = cljs.core.next(seq__59332_60300__$1);
var G__60382 = null;
var G__60383 = (0);
var G__60384 = (0);
seq__59332_60240 = G__60381;
chunk__59334_60241 = G__60382;
count__59335_60242 = G__60383;
i__59336_60243 = G__60384;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__59433_60385 = shadow.dom._to_svg;
var G__59434_60386 = "string";
var G__59435_60387 = ((function (G__59433_60385,G__59434_60386){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__59433_60385,G__59434_60386))
;
goog.object.set(G__59433_60385,G__59434_60386,G__59435_60387);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__59443_60397 = shadow.dom._to_svg;
var G__59444_60398 = "null";
var G__59445_60399 = ((function (G__59443_60397,G__59444_60398){
return (function (_){
return null;
});})(G__59443_60397,G__59444_60398))
;
goog.object.set(G__59443_60397,G__59444_60398,G__59445_60399);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___60400 = arguments.length;
var i__4731__auto___60401 = (0);
while(true){
if((i__4731__auto___60401 < len__4730__auto___60400)){
args__4736__auto__.push((arguments[i__4731__auto___60401]));

var G__60405 = (i__4731__auto___60401 + (1));
i__4731__auto___60401 = G__60405;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq59446){
var G__59447 = cljs.core.first(seq59446);
var seq59446__$1 = cljs.core.next(seq59446);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59447,seq59446__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__59452 = arguments.length;
switch (G__59452) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__59454_60417 = shadow.dom.dom_node(el);
var G__59455_60418 = cljs.core.name(event);
var G__59456_60419 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__59454_60417,G__59455_60418,G__59456_60419) : shadow.dom.dom_listen.call(null,G__59454_60417,G__59455_60418,G__59456_60419));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__44617__auto___60428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44617__auto___60428,buf,chan,event_fn){
return (function (){
var f__44618__auto__ = (function (){var switch__44304__auto__ = ((function (c__44617__auto___60428,buf,chan,event_fn){
return (function (state_59468){
var state_val_59469 = (state_59468[(1)]);
if((state_val_59469 === (1))){
var state_59468__$1 = state_59468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59468__$1,(2),once_or_cleanup);
} else {
if((state_val_59469 === (2))){
var inst_59460 = (state_59468[(2)]);
var inst_59466 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_59468__$1 = (function (){var statearr_59471 = state_59468;
(statearr_59471[(7)] = inst_59460);

return statearr_59471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59468__$1,inst_59466);
} else {
return null;
}
}
});})(c__44617__auto___60428,buf,chan,event_fn))
;
return ((function (switch__44304__auto__,c__44617__auto___60428,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__44305__auto__ = null;
var shadow$dom$state_machine__44305__auto____0 = (function (){
var statearr_59472 = [null,null,null,null,null,null,null,null];
(statearr_59472[(0)] = shadow$dom$state_machine__44305__auto__);

(statearr_59472[(1)] = (1));

return statearr_59472;
});
var shadow$dom$state_machine__44305__auto____1 = (function (state_59468){
while(true){
var ret_value__44306__auto__ = (function (){try{while(true){
var result__44307__auto__ = switch__44304__auto__(state_59468);
if(cljs.core.keyword_identical_QMARK_(result__44307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44307__auto__;
}
break;
}
}catch (e59475){if((e59475 instanceof Object)){
var ex__44308__auto__ = e59475;
var statearr_59476_60438 = state_59468;
(statearr_59476_60438[(5)] = ex__44308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60446 = state_59468;
state_59468 = G__60446;
continue;
} else {
return ret_value__44306__auto__;
}
break;
}
});
shadow$dom$state_machine__44305__auto__ = function(state_59468){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__44305__auto____0.call(this);
case 1:
return shadow$dom$state_machine__44305__auto____1.call(this,state_59468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__44305__auto____0;
shadow$dom$state_machine__44305__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__44305__auto____1;
return shadow$dom$state_machine__44305__auto__;
})()
;})(switch__44304__auto__,c__44617__auto___60428,buf,chan,event_fn))
})();
var state__44619__auto__ = (function (){var statearr_59477 = (f__44618__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44618__auto__.cljs$core$IFn$_invoke$arity$0() : f__44618__auto__.call(null));
(statearr_59477[(6)] = c__44617__auto___60428);

return statearr_59477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44619__auto__);
});})(c__44617__auto___60428,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
