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
return cljs.core.cons((coll[idx]),(function (){var G__52177 = coll;
var G__52178 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__52177,G__52178) : shadow.dom.lazy_native_coll_seq.call(null,G__52177,G__52178));
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
var G__52215 = arguments.length;
switch (G__52215) {
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
var G__52240 = arguments.length;
switch (G__52240) {
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
var G__52257 = arguments.length;
switch (G__52257) {
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
var G__52271 = arguments.length;
switch (G__52271) {
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
var G__52292 = arguments.length;
switch (G__52292) {
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
return goog.dom.contains(document,shadow.dom.dom_node(el));
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__52317 = arguments.length;
switch (G__52317) {
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
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
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
}catch (e52327){if((e52327 instanceof Object)){
var e = e52327;
return console.log("didnt support attachEvent",el,e);
} else {
throw e52327;

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
var seq__52340 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__52341 = null;
var count__52342 = (0);
var i__52343 = (0);
while(true){
if((i__52343 < count__52342)){
var el = chunk__52341.cljs$core$IIndexed$_nth$arity$2(null,i__52343);
var handler_53918__$1 = ((function (seq__52340,chunk__52341,count__52342,i__52343,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52340,chunk__52341,count__52342,i__52343,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53918__$1);


var G__53920 = seq__52340;
var G__53921 = chunk__52341;
var G__53922 = count__52342;
var G__53923 = (i__52343 + (1));
seq__52340 = G__53920;
chunk__52341 = G__53921;
count__52342 = G__53922;
i__52343 = G__53923;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52340);
if(temp__5720__auto__){
var seq__52340__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52340__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52340__$1);
var G__53926 = cljs.core.chunk_rest(seq__52340__$1);
var G__53927 = c__4550__auto__;
var G__53928 = cljs.core.count(c__4550__auto__);
var G__53929 = (0);
seq__52340 = G__53926;
chunk__52341 = G__53927;
count__52342 = G__53928;
i__52343 = G__53929;
continue;
} else {
var el = cljs.core.first(seq__52340__$1);
var handler_53931__$1 = ((function (seq__52340,chunk__52341,count__52342,i__52343,el,seq__52340__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52340,chunk__52341,count__52342,i__52343,el,seq__52340__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53931__$1);


var G__53935 = cljs.core.next(seq__52340__$1);
var G__53936 = null;
var G__53937 = (0);
var G__53938 = (0);
seq__52340 = G__53935;
chunk__52341 = G__53936;
count__52342 = G__53937;
i__52343 = G__53938;
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
var G__52364 = arguments.length;
switch (G__52364) {
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
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__52379 = cljs.core.seq(events);
var chunk__52380 = null;
var count__52381 = (0);
var i__52382 = (0);
while(true){
if((i__52382 < count__52381)){
var vec__52398 = chunk__52380.cljs$core$IIndexed$_nth$arity$2(null,i__52382);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52398,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53959 = seq__52379;
var G__53960 = chunk__52380;
var G__53961 = count__52381;
var G__53962 = (i__52382 + (1));
seq__52379 = G__53959;
chunk__52380 = G__53960;
count__52381 = G__53961;
i__52382 = G__53962;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52379);
if(temp__5720__auto__){
var seq__52379__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52379__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52379__$1);
var G__53965 = cljs.core.chunk_rest(seq__52379__$1);
var G__53966 = c__4550__auto__;
var G__53967 = cljs.core.count(c__4550__auto__);
var G__53968 = (0);
seq__52379 = G__53965;
chunk__52380 = G__53966;
count__52381 = G__53967;
i__52382 = G__53968;
continue;
} else {
var vec__52407 = cljs.core.first(seq__52379__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52407,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53973 = cljs.core.next(seq__52379__$1);
var G__53974 = null;
var G__53975 = (0);
var G__53976 = (0);
seq__52379 = G__53973;
chunk__52380 = G__53974;
count__52381 = G__53975;
i__52382 = G__53976;
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
var seq__52416 = cljs.core.seq(styles);
var chunk__52417 = null;
var count__52418 = (0);
var i__52419 = (0);
while(true){
if((i__52419 < count__52418)){
var vec__52440 = chunk__52417.cljs$core$IIndexed$_nth$arity$2(null,i__52419);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52440,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52440,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53984 = seq__52416;
var G__53985 = chunk__52417;
var G__53986 = count__52418;
var G__53987 = (i__52419 + (1));
seq__52416 = G__53984;
chunk__52417 = G__53985;
count__52418 = G__53986;
i__52419 = G__53987;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52416);
if(temp__5720__auto__){
var seq__52416__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52416__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52416__$1);
var G__53989 = cljs.core.chunk_rest(seq__52416__$1);
var G__53990 = c__4550__auto__;
var G__53991 = cljs.core.count(c__4550__auto__);
var G__53992 = (0);
seq__52416 = G__53989;
chunk__52417 = G__53990;
count__52418 = G__53991;
i__52419 = G__53992;
continue;
} else {
var vec__52448 = cljs.core.first(seq__52416__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52448,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53995 = cljs.core.next(seq__52416__$1);
var G__53996 = null;
var G__53997 = (0);
var G__53998 = (0);
seq__52416 = G__53995;
chunk__52417 = G__53996;
count__52418 = G__53997;
i__52419 = G__53998;
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
var G__52457_53999 = key;
var G__52457_54000__$1 = (((G__52457_53999 instanceof cljs.core.Keyword))?G__52457_53999.fqn:null);
switch (G__52457_54000__$1) {
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
var ks_54013 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_54013,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_54013,"aria-");
}
})())){
el.setAttribute(ks_54013,value);
} else {
(el[ks_54013] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__52528){
var map__52529 = p__52528;
var map__52529__$1 = (((((!((map__52529 == null))))?(((((map__52529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52529):map__52529);
var props = map__52529__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52529__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__52536 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52536,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52536,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52536,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__52547 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__52547,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__52547;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__52559 = arguments.length;
switch (G__52559) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__52571){
var vec__52572 = p__52571;
var seq__52573 = cljs.core.seq(vec__52572);
var first__52574 = cljs.core.first(seq__52573);
var seq__52573__$1 = cljs.core.next(seq__52573);
var nn = first__52574;
var first__52574__$1 = cljs.core.first(seq__52573__$1);
var seq__52573__$2 = cljs.core.next(seq__52573__$1);
var np = first__52574__$1;
var nc = seq__52573__$2;
var node = vec__52572;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52584 = nn;
var G__52585 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52584,G__52585) : create_fn.call(null,G__52584,G__52585));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52590 = nn;
var G__52591 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52590,G__52591) : create_fn.call(null,G__52590,G__52591));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52594 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52594,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52594,(1),null);
var seq__52599_54049 = cljs.core.seq(node_children);
var chunk__52600_54050 = null;
var count__52601_54051 = (0);
var i__52602_54052 = (0);
while(true){
if((i__52602_54052 < count__52601_54051)){
var child_struct_54053 = chunk__52600_54050.cljs$core$IIndexed$_nth$arity$2(null,i__52602_54052);
var children_54054 = shadow.dom.dom_node(child_struct_54053);
if(cljs.core.seq_QMARK_(children_54054)){
var seq__52663_54057 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54054));
var chunk__52665_54058 = null;
var count__52666_54059 = (0);
var i__52667_54060 = (0);
while(true){
if((i__52667_54060 < count__52666_54059)){
var child_54062 = chunk__52665_54058.cljs$core$IIndexed$_nth$arity$2(null,i__52667_54060);
if(cljs.core.truth_(child_54062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54062);


var G__54065 = seq__52663_54057;
var G__54066 = chunk__52665_54058;
var G__54067 = count__52666_54059;
var G__54068 = (i__52667_54060 + (1));
seq__52663_54057 = G__54065;
chunk__52665_54058 = G__54066;
count__52666_54059 = G__54067;
i__52667_54060 = G__54068;
continue;
} else {
var G__54069 = seq__52663_54057;
var G__54070 = chunk__52665_54058;
var G__54071 = count__52666_54059;
var G__54072 = (i__52667_54060 + (1));
seq__52663_54057 = G__54069;
chunk__52665_54058 = G__54070;
count__52666_54059 = G__54071;
i__52667_54060 = G__54072;
continue;
}
} else {
var temp__5720__auto___54075 = cljs.core.seq(seq__52663_54057);
if(temp__5720__auto___54075){
var seq__52663_54076__$1 = temp__5720__auto___54075;
if(cljs.core.chunked_seq_QMARK_(seq__52663_54076__$1)){
var c__4550__auto___54079 = cljs.core.chunk_first(seq__52663_54076__$1);
var G__54081 = cljs.core.chunk_rest(seq__52663_54076__$1);
var G__54082 = c__4550__auto___54079;
var G__54083 = cljs.core.count(c__4550__auto___54079);
var G__54084 = (0);
seq__52663_54057 = G__54081;
chunk__52665_54058 = G__54082;
count__52666_54059 = G__54083;
i__52667_54060 = G__54084;
continue;
} else {
var child_54087 = cljs.core.first(seq__52663_54076__$1);
if(cljs.core.truth_(child_54087)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54087);


var G__54091 = cljs.core.next(seq__52663_54076__$1);
var G__54092 = null;
var G__54093 = (0);
var G__54094 = (0);
seq__52663_54057 = G__54091;
chunk__52665_54058 = G__54092;
count__52666_54059 = G__54093;
i__52667_54060 = G__54094;
continue;
} else {
var G__54097 = cljs.core.next(seq__52663_54076__$1);
var G__54098 = null;
var G__54099 = (0);
var G__54100 = (0);
seq__52663_54057 = G__54097;
chunk__52665_54058 = G__54098;
count__52666_54059 = G__54099;
i__52667_54060 = G__54100;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54054);
}


var G__54103 = seq__52599_54049;
var G__54104 = chunk__52600_54050;
var G__54106 = count__52601_54051;
var G__54107 = (i__52602_54052 + (1));
seq__52599_54049 = G__54103;
chunk__52600_54050 = G__54104;
count__52601_54051 = G__54106;
i__52602_54052 = G__54107;
continue;
} else {
var temp__5720__auto___54108 = cljs.core.seq(seq__52599_54049);
if(temp__5720__auto___54108){
var seq__52599_54109__$1 = temp__5720__auto___54108;
if(cljs.core.chunked_seq_QMARK_(seq__52599_54109__$1)){
var c__4550__auto___54111 = cljs.core.chunk_first(seq__52599_54109__$1);
var G__54113 = cljs.core.chunk_rest(seq__52599_54109__$1);
var G__54114 = c__4550__auto___54111;
var G__54115 = cljs.core.count(c__4550__auto___54111);
var G__54116 = (0);
seq__52599_54049 = G__54113;
chunk__52600_54050 = G__54114;
count__52601_54051 = G__54115;
i__52602_54052 = G__54116;
continue;
} else {
var child_struct_54117 = cljs.core.first(seq__52599_54109__$1);
var children_54121 = shadow.dom.dom_node(child_struct_54117);
if(cljs.core.seq_QMARK_(children_54121)){
var seq__52677_54122 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_54121));
var chunk__52679_54123 = null;
var count__52680_54124 = (0);
var i__52681_54125 = (0);
while(true){
if((i__52681_54125 < count__52680_54124)){
var child_54128 = chunk__52679_54123.cljs$core$IIndexed$_nth$arity$2(null,i__52681_54125);
if(cljs.core.truth_(child_54128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54128);


var G__54130 = seq__52677_54122;
var G__54131 = chunk__52679_54123;
var G__54132 = count__52680_54124;
var G__54133 = (i__52681_54125 + (1));
seq__52677_54122 = G__54130;
chunk__52679_54123 = G__54131;
count__52680_54124 = G__54132;
i__52681_54125 = G__54133;
continue;
} else {
var G__54136 = seq__52677_54122;
var G__54137 = chunk__52679_54123;
var G__54138 = count__52680_54124;
var G__54139 = (i__52681_54125 + (1));
seq__52677_54122 = G__54136;
chunk__52679_54123 = G__54137;
count__52680_54124 = G__54138;
i__52681_54125 = G__54139;
continue;
}
} else {
var temp__5720__auto___54140__$1 = cljs.core.seq(seq__52677_54122);
if(temp__5720__auto___54140__$1){
var seq__52677_54141__$1 = temp__5720__auto___54140__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52677_54141__$1)){
var c__4550__auto___54143 = cljs.core.chunk_first(seq__52677_54141__$1);
var G__54144 = cljs.core.chunk_rest(seq__52677_54141__$1);
var G__54145 = c__4550__auto___54143;
var G__54146 = cljs.core.count(c__4550__auto___54143);
var G__54147 = (0);
seq__52677_54122 = G__54144;
chunk__52679_54123 = G__54145;
count__52680_54124 = G__54146;
i__52681_54125 = G__54147;
continue;
} else {
var child_54148 = cljs.core.first(seq__52677_54141__$1);
if(cljs.core.truth_(child_54148)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_54148);


var G__54149 = cljs.core.next(seq__52677_54141__$1);
var G__54150 = null;
var G__54151 = (0);
var G__54152 = (0);
seq__52677_54122 = G__54149;
chunk__52679_54123 = G__54150;
count__52680_54124 = G__54151;
i__52681_54125 = G__54152;
continue;
} else {
var G__54153 = cljs.core.next(seq__52677_54141__$1);
var G__54154 = null;
var G__54155 = (0);
var G__54156 = (0);
seq__52677_54122 = G__54153;
chunk__52679_54123 = G__54154;
count__52680_54124 = G__54155;
i__52681_54125 = G__54156;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_54121);
}


var G__54157 = cljs.core.next(seq__52599_54109__$1);
var G__54158 = null;
var G__54159 = (0);
var G__54160 = (0);
seq__52599_54049 = G__54157;
chunk__52600_54050 = G__54158;
count__52601_54051 = G__54159;
i__52602_54052 = G__54160;
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
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__52730 = cljs.core.seq(node);
var chunk__52731 = null;
var count__52732 = (0);
var i__52733 = (0);
while(true){
if((i__52733 < count__52732)){
var n = chunk__52731.cljs$core$IIndexed$_nth$arity$2(null,i__52733);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54178 = seq__52730;
var G__54179 = chunk__52731;
var G__54180 = count__52732;
var G__54181 = (i__52733 + (1));
seq__52730 = G__54178;
chunk__52731 = G__54179;
count__52732 = G__54180;
i__52733 = G__54181;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52730);
if(temp__5720__auto__){
var seq__52730__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52730__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52730__$1);
var G__54188 = cljs.core.chunk_rest(seq__52730__$1);
var G__54189 = c__4550__auto__;
var G__54190 = cljs.core.count(c__4550__auto__);
var G__54191 = (0);
seq__52730 = G__54188;
chunk__52731 = G__54189;
count__52732 = G__54190;
i__52733 = G__54191;
continue;
} else {
var n = cljs.core.first(seq__52730__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__54195 = cljs.core.next(seq__52730__$1);
var G__54196 = null;
var G__54197 = (0);
var G__54198 = (0);
seq__52730 = G__54195;
chunk__52731 = G__54196;
count__52732 = G__54197;
i__52733 = G__54198;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__52751 = arguments.length;
switch (G__52751) {
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
var G__52764 = arguments.length;
switch (G__52764) {
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
var G__52790 = arguments.length;
switch (G__52790) {
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
var len__4730__auto___54231 = arguments.length;
var i__4731__auto___54233 = (0);
while(true){
if((i__4731__auto___54233 < len__4730__auto___54231)){
args__4736__auto__.push((arguments[i__4731__auto___54233]));

var G__54235 = (i__4731__auto___54233 + (1));
i__4731__auto___54233 = G__54235;
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
var seq__52804_54236 = cljs.core.seq(nodes);
var chunk__52805_54237 = null;
var count__52806_54238 = (0);
var i__52807_54239 = (0);
while(true){
if((i__52807_54239 < count__52806_54238)){
var node_54240 = chunk__52805_54237.cljs$core$IIndexed$_nth$arity$2(null,i__52807_54239);
fragment.appendChild(shadow.dom._to_dom(node_54240));


var G__54241 = seq__52804_54236;
var G__54242 = chunk__52805_54237;
var G__54243 = count__52806_54238;
var G__54244 = (i__52807_54239 + (1));
seq__52804_54236 = G__54241;
chunk__52805_54237 = G__54242;
count__52806_54238 = G__54243;
i__52807_54239 = G__54244;
continue;
} else {
var temp__5720__auto___54245 = cljs.core.seq(seq__52804_54236);
if(temp__5720__auto___54245){
var seq__52804_54246__$1 = temp__5720__auto___54245;
if(cljs.core.chunked_seq_QMARK_(seq__52804_54246__$1)){
var c__4550__auto___54247 = cljs.core.chunk_first(seq__52804_54246__$1);
var G__54249 = cljs.core.chunk_rest(seq__52804_54246__$1);
var G__54250 = c__4550__auto___54247;
var G__54251 = cljs.core.count(c__4550__auto___54247);
var G__54252 = (0);
seq__52804_54236 = G__54249;
chunk__52805_54237 = G__54250;
count__52806_54238 = G__54251;
i__52807_54239 = G__54252;
continue;
} else {
var node_54253 = cljs.core.first(seq__52804_54246__$1);
fragment.appendChild(shadow.dom._to_dom(node_54253));


var G__54254 = cljs.core.next(seq__52804_54246__$1);
var G__54255 = null;
var G__54256 = (0);
var G__54257 = (0);
seq__52804_54236 = G__54254;
chunk__52805_54237 = G__54255;
count__52806_54238 = G__54256;
i__52807_54239 = G__54257;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq52803){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52803));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__52811_54260 = cljs.core.seq(scripts);
var chunk__52812_54261 = null;
var count__52813_54262 = (0);
var i__52814_54263 = (0);
while(true){
if((i__52814_54263 < count__52813_54262)){
var vec__52830_54267 = chunk__52812_54261.cljs$core$IIndexed$_nth$arity$2(null,i__52814_54263);
var script_tag_54268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52830_54267,(0),null);
var script_body_54269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52830_54267,(1),null);
eval(script_body_54269);


var G__54270 = seq__52811_54260;
var G__54271 = chunk__52812_54261;
var G__54272 = count__52813_54262;
var G__54273 = (i__52814_54263 + (1));
seq__52811_54260 = G__54270;
chunk__52812_54261 = G__54271;
count__52813_54262 = G__54272;
i__52814_54263 = G__54273;
continue;
} else {
var temp__5720__auto___54274 = cljs.core.seq(seq__52811_54260);
if(temp__5720__auto___54274){
var seq__52811_54275__$1 = temp__5720__auto___54274;
if(cljs.core.chunked_seq_QMARK_(seq__52811_54275__$1)){
var c__4550__auto___54277 = cljs.core.chunk_first(seq__52811_54275__$1);
var G__54278 = cljs.core.chunk_rest(seq__52811_54275__$1);
var G__54279 = c__4550__auto___54277;
var G__54280 = cljs.core.count(c__4550__auto___54277);
var G__54281 = (0);
seq__52811_54260 = G__54278;
chunk__52812_54261 = G__54279;
count__52813_54262 = G__54280;
i__52814_54263 = G__54281;
continue;
} else {
var vec__52836_54284 = cljs.core.first(seq__52811_54275__$1);
var script_tag_54285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52836_54284,(0),null);
var script_body_54286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52836_54284,(1),null);
eval(script_body_54286);


var G__54291 = cljs.core.next(seq__52811_54275__$1);
var G__54292 = null;
var G__54293 = (0);
var G__54294 = (0);
seq__52811_54260 = G__54291;
chunk__52812_54261 = G__54292;
count__52813_54262 = G__54293;
i__52814_54263 = G__54294;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__52840){
var vec__52841 = p__52840;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52841,(1),null);
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
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__52851 = arguments.length;
switch (G__52851) {
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
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__52874 = cljs.core.seq(style_keys);
var chunk__52875 = null;
var count__52876 = (0);
var i__52877 = (0);
while(true){
if((i__52877 < count__52876)){
var it = chunk__52875.cljs$core$IIndexed$_nth$arity$2(null,i__52877);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54332 = seq__52874;
var G__54333 = chunk__52875;
var G__54334 = count__52876;
var G__54335 = (i__52877 + (1));
seq__52874 = G__54332;
chunk__52875 = G__54333;
count__52876 = G__54334;
i__52877 = G__54335;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__52874);
if(temp__5720__auto__){
var seq__52874__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52874__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__52874__$1);
var G__54338 = cljs.core.chunk_rest(seq__52874__$1);
var G__54339 = c__4550__auto__;
var G__54340 = cljs.core.count(c__4550__auto__);
var G__54341 = (0);
seq__52874 = G__54338;
chunk__52875 = G__54339;
count__52876 = G__54340;
i__52877 = G__54341;
continue;
} else {
var it = cljs.core.first(seq__52874__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__54346 = cljs.core.next(seq__52874__$1);
var G__54347 = null;
var G__54348 = (0);
var G__54349 = (0);
seq__52874 = G__54346;
chunk__52875 = G__54347;
count__52876 = G__54348;
i__52877 = G__54349;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k52895,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__52932 = k52895;
var G__52932__$1 = (((G__52932 instanceof cljs.core.Keyword))?G__52932.fqn:null);
switch (G__52932__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52895,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__52952){
var vec__52957 = p__52952;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52957,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52894){
var self__ = this;
var G__52894__$1 = this;
return (new cljs.core.RecordIter((0),G__52894__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52896,other52897){
var self__ = this;
var this52896__$1 = this;
return (((!((other52897 == null)))) && ((this52896__$1.constructor === other52897.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52896__$1.x,other52897.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52896__$1.y,other52897.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52896__$1.__extmap,other52897.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__52894){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__53047 = cljs.core.keyword_identical_QMARK_;
var expr__53048 = k__4393__auto__;
if(cljs.core.truth_((pred__53047.cljs$core$IFn$_invoke$arity$2 ? pred__53047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53048) : pred__53047.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53048)))){
return (new shadow.dom.Coordinate(G__52894,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53047.cljs$core$IFn$_invoke$arity$2 ? pred__53047.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53048) : pred__53047.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53048)))){
return (new shadow.dom.Coordinate(self__.x,G__52894,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__52894),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__52894){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__52894,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__52912){
var extmap__4424__auto__ = (function (){var G__53100 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52912,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__52912)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53100);
} else {
return G__53100;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__52912),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__52912),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k53137,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__53169 = k53137;
var G__53169__$1 = (((G__53169 instanceof cljs.core.Keyword))?G__53169.fqn:null);
switch (G__53169__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53137,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__53176){
var vec__53177 = p__53176;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53177,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53177,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53136){
var self__ = this;
var G__53136__$1 = this;
return (new cljs.core.RecordIter((0),G__53136__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
(this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53138,other53140){
var self__ = this;
var this53138__$1 = this;
return (((!((other53140 == null)))) && ((this53138__$1.constructor === other53140.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53138__$1.w,other53140.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53138__$1.h,other53140.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53138__$1.__extmap,other53140.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__53136){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__53248 = cljs.core.keyword_identical_QMARK_;
var expr__53249 = k__4393__auto__;
if(cljs.core.truth_((pred__53248.cljs$core$IFn$_invoke$arity$2 ? pred__53248.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53249) : pred__53248.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53249)))){
return (new shadow.dom.Size(G__53136,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53248.cljs$core$IFn$_invoke$arity$2 ? pred__53248.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53249) : pred__53248.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53249)))){
return (new shadow.dom.Size(self__.w,G__53136,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__53136),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__53136){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53136,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4391__auto__,(0)),cljs.core._nth(entry__4391__auto__,(1)));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53148){
var extmap__4424__auto__ = (function (){var G__53311 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53148,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53148)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53311);
} else {
return G__53311;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53148),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53148),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var G__54428 = (i + (1));
var G__54429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__54428;
ret = G__54429;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53355){
var vec__53359 = p__53355;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53359,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53359,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53371 = arguments.length;
switch (G__53371) {
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
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

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
var G__54456 = ps;
var G__54457 = (i + (1));
el__$1 = G__54456;
i = G__54457;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
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
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__53455 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53455,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53455,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53455,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53464_54473 = cljs.core.seq(props);
var chunk__53465_54474 = null;
var count__53466_54475 = (0);
var i__53467_54476 = (0);
while(true){
if((i__53467_54476 < count__53466_54475)){
var vec__53509_54479 = chunk__53465_54474.cljs$core$IIndexed$_nth$arity$2(null,i__53467_54476);
var k_54480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53509_54479,(0),null);
var v_54481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53509_54479,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_54480);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54480),v_54481);


var G__54484 = seq__53464_54473;
var G__54485 = chunk__53465_54474;
var G__54486 = count__53466_54475;
var G__54487 = (i__53467_54476 + (1));
seq__53464_54473 = G__54484;
chunk__53465_54474 = G__54485;
count__53466_54475 = G__54486;
i__53467_54476 = G__54487;
continue;
} else {
var temp__5720__auto___54488 = cljs.core.seq(seq__53464_54473);
if(temp__5720__auto___54488){
var seq__53464_54489__$1 = temp__5720__auto___54488;
if(cljs.core.chunked_seq_QMARK_(seq__53464_54489__$1)){
var c__4550__auto___54490 = cljs.core.chunk_first(seq__53464_54489__$1);
var G__54491 = cljs.core.chunk_rest(seq__53464_54489__$1);
var G__54492 = c__4550__auto___54490;
var G__54493 = cljs.core.count(c__4550__auto___54490);
var G__54494 = (0);
seq__53464_54473 = G__54491;
chunk__53465_54474 = G__54492;
count__53466_54475 = G__54493;
i__53467_54476 = G__54494;
continue;
} else {
var vec__53528_54497 = cljs.core.first(seq__53464_54489__$1);
var k_54498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528_54497,(0),null);
var v_54499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53528_54497,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_54498);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_54498),v_54499);


var G__54500 = cljs.core.next(seq__53464_54489__$1);
var G__54501 = null;
var G__54502 = (0);
var G__54503 = (0);
seq__53464_54473 = G__54500;
chunk__53465_54474 = G__54501;
count__53466_54475 = G__54502;
i__53467_54476 = G__54503;
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
var vec__53567 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53567,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53567,(1),null);
var seq__53575_54510 = cljs.core.seq(node_children);
var chunk__53577_54511 = null;
var count__53578_54512 = (0);
var i__53579_54513 = (0);
while(true){
if((i__53579_54513 < count__53578_54512)){
var child_struct_54515 = chunk__53577_54511.cljs$core$IIndexed$_nth$arity$2(null,i__53579_54513);
if((!((child_struct_54515 == null)))){
if(typeof child_struct_54515 === 'string'){
var text_54517 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54517),child_struct_54515].join(''));
} else {
var children_54520 = shadow.dom.svg_node(child_struct_54515);
if(cljs.core.seq_QMARK_(children_54520)){
var seq__53705_54522 = cljs.core.seq(children_54520);
var chunk__53707_54523 = null;
var count__53708_54524 = (0);
var i__53709_54525 = (0);
while(true){
if((i__53709_54525 < count__53708_54524)){
var child_54527 = chunk__53707_54523.cljs$core$IIndexed$_nth$arity$2(null,i__53709_54525);
if(cljs.core.truth_(child_54527)){
node.appendChild(child_54527);


var G__54529 = seq__53705_54522;
var G__54530 = chunk__53707_54523;
var G__54531 = count__53708_54524;
var G__54532 = (i__53709_54525 + (1));
seq__53705_54522 = G__54529;
chunk__53707_54523 = G__54530;
count__53708_54524 = G__54531;
i__53709_54525 = G__54532;
continue;
} else {
var G__54537 = seq__53705_54522;
var G__54538 = chunk__53707_54523;
var G__54539 = count__53708_54524;
var G__54540 = (i__53709_54525 + (1));
seq__53705_54522 = G__54537;
chunk__53707_54523 = G__54538;
count__53708_54524 = G__54539;
i__53709_54525 = G__54540;
continue;
}
} else {
var temp__5720__auto___54543 = cljs.core.seq(seq__53705_54522);
if(temp__5720__auto___54543){
var seq__53705_54548__$1 = temp__5720__auto___54543;
if(cljs.core.chunked_seq_QMARK_(seq__53705_54548__$1)){
var c__4550__auto___54550 = cljs.core.chunk_first(seq__53705_54548__$1);
var G__54551 = cljs.core.chunk_rest(seq__53705_54548__$1);
var G__54552 = c__4550__auto___54550;
var G__54553 = cljs.core.count(c__4550__auto___54550);
var G__54554 = (0);
seq__53705_54522 = G__54551;
chunk__53707_54523 = G__54552;
count__53708_54524 = G__54553;
i__53709_54525 = G__54554;
continue;
} else {
var child_54558 = cljs.core.first(seq__53705_54548__$1);
if(cljs.core.truth_(child_54558)){
node.appendChild(child_54558);


var G__54562 = cljs.core.next(seq__53705_54548__$1);
var G__54563 = null;
var G__54564 = (0);
var G__54565 = (0);
seq__53705_54522 = G__54562;
chunk__53707_54523 = G__54563;
count__53708_54524 = G__54564;
i__53709_54525 = G__54565;
continue;
} else {
var G__54566 = cljs.core.next(seq__53705_54548__$1);
var G__54567 = null;
var G__54568 = (0);
var G__54569 = (0);
seq__53705_54522 = G__54566;
chunk__53707_54523 = G__54567;
count__53708_54524 = G__54568;
i__53709_54525 = G__54569;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54520);
}
}


var G__54570 = seq__53575_54510;
var G__54571 = chunk__53577_54511;
var G__54572 = count__53578_54512;
var G__54573 = (i__53579_54513 + (1));
seq__53575_54510 = G__54570;
chunk__53577_54511 = G__54571;
count__53578_54512 = G__54572;
i__53579_54513 = G__54573;
continue;
} else {
var G__54574 = seq__53575_54510;
var G__54575 = chunk__53577_54511;
var G__54576 = count__53578_54512;
var G__54577 = (i__53579_54513 + (1));
seq__53575_54510 = G__54574;
chunk__53577_54511 = G__54575;
count__53578_54512 = G__54576;
i__53579_54513 = G__54577;
continue;
}
} else {
var temp__5720__auto___54578 = cljs.core.seq(seq__53575_54510);
if(temp__5720__auto___54578){
var seq__53575_54581__$1 = temp__5720__auto___54578;
if(cljs.core.chunked_seq_QMARK_(seq__53575_54581__$1)){
var c__4550__auto___54582 = cljs.core.chunk_first(seq__53575_54581__$1);
var G__54583 = cljs.core.chunk_rest(seq__53575_54581__$1);
var G__54584 = c__4550__auto___54582;
var G__54585 = cljs.core.count(c__4550__auto___54582);
var G__54586 = (0);
seq__53575_54510 = G__54583;
chunk__53577_54511 = G__54584;
count__53578_54512 = G__54585;
i__53579_54513 = G__54586;
continue;
} else {
var child_struct_54589 = cljs.core.first(seq__53575_54581__$1);
if((!((child_struct_54589 == null)))){
if(typeof child_struct_54589 === 'string'){
var text_54590 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_54590),child_struct_54589].join(''));
} else {
var children_54595 = shadow.dom.svg_node(child_struct_54589);
if(cljs.core.seq_QMARK_(children_54595)){
var seq__53725_54597 = cljs.core.seq(children_54595);
var chunk__53727_54598 = null;
var count__53728_54599 = (0);
var i__53729_54600 = (0);
while(true){
if((i__53729_54600 < count__53728_54599)){
var child_54603 = chunk__53727_54598.cljs$core$IIndexed$_nth$arity$2(null,i__53729_54600);
if(cljs.core.truth_(child_54603)){
node.appendChild(child_54603);


var G__54604 = seq__53725_54597;
var G__54605 = chunk__53727_54598;
var G__54606 = count__53728_54599;
var G__54607 = (i__53729_54600 + (1));
seq__53725_54597 = G__54604;
chunk__53727_54598 = G__54605;
count__53728_54599 = G__54606;
i__53729_54600 = G__54607;
continue;
} else {
var G__54610 = seq__53725_54597;
var G__54611 = chunk__53727_54598;
var G__54612 = count__53728_54599;
var G__54613 = (i__53729_54600 + (1));
seq__53725_54597 = G__54610;
chunk__53727_54598 = G__54611;
count__53728_54599 = G__54612;
i__53729_54600 = G__54613;
continue;
}
} else {
var temp__5720__auto___54614__$1 = cljs.core.seq(seq__53725_54597);
if(temp__5720__auto___54614__$1){
var seq__53725_54615__$1 = temp__5720__auto___54614__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53725_54615__$1)){
var c__4550__auto___54618 = cljs.core.chunk_first(seq__53725_54615__$1);
var G__54619 = cljs.core.chunk_rest(seq__53725_54615__$1);
var G__54620 = c__4550__auto___54618;
var G__54621 = cljs.core.count(c__4550__auto___54618);
var G__54622 = (0);
seq__53725_54597 = G__54619;
chunk__53727_54598 = G__54620;
count__53728_54599 = G__54621;
i__53729_54600 = G__54622;
continue;
} else {
var child_54623 = cljs.core.first(seq__53725_54615__$1);
if(cljs.core.truth_(child_54623)){
node.appendChild(child_54623);


var G__54624 = cljs.core.next(seq__53725_54615__$1);
var G__54625 = null;
var G__54626 = (0);
var G__54627 = (0);
seq__53725_54597 = G__54624;
chunk__53727_54598 = G__54625;
count__53728_54599 = G__54626;
i__53729_54600 = G__54627;
continue;
} else {
var G__54629 = cljs.core.next(seq__53725_54615__$1);
var G__54630 = null;
var G__54631 = (0);
var G__54632 = (0);
seq__53725_54597 = G__54629;
chunk__53727_54598 = G__54630;
count__53728_54599 = G__54631;
i__53729_54600 = G__54632;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_54595);
}
}


var G__54637 = cljs.core.next(seq__53575_54581__$1);
var G__54638 = null;
var G__54639 = (0);
var G__54640 = (0);
seq__53575_54510 = G__54637;
chunk__53577_54511 = G__54638;
count__53578_54512 = G__54639;
i__53579_54513 = G__54640;
continue;
} else {
var G__54643 = cljs.core.next(seq__53575_54581__$1);
var G__54644 = null;
var G__54645 = (0);
var G__54646 = (0);
seq__53575_54510 = G__54643;
chunk__53577_54511 = G__54644;
count__53578_54512 = G__54645;
i__53579_54513 = G__54646;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

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

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___54666 = arguments.length;
var i__4731__auto___54667 = (0);
while(true){
if((i__4731__auto___54667 < len__4730__auto___54666)){
args__4736__auto__.push((arguments[i__4731__auto___54667]));

var G__54671 = (i__4731__auto___54667 + (1));
i__4731__auto___54667 = G__54671;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq53762){
var G__53763 = cljs.core.first(seq53762);
var seq53762__$1 = cljs.core.next(seq53762);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53763,seq53762__$1);
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
var G__53774 = arguments.length;
switch (G__53774) {
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
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__50615__auto___54682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__50615__auto___54682,buf,chan,event_fn){
return (function (){
var f__50616__auto__ = (function (){var switch__48679__auto__ = ((function (c__50615__auto___54682,buf,chan,event_fn){
return (function (state_53792){
var state_val_53793 = (state_53792[(1)]);
if((state_val_53793 === (1))){
var state_53792__$1 = state_53792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53792__$1,(2),once_or_cleanup);
} else {
if((state_val_53793 === (2))){
var inst_53789 = (state_53792[(2)]);
var inst_53790 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53792__$1 = (function (){var statearr_53806 = state_53792;
(statearr_53806[(7)] = inst_53789);

return statearr_53806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53792__$1,inst_53790);
} else {
return null;
}
}
});})(c__50615__auto___54682,buf,chan,event_fn))
;
return ((function (switch__48679__auto__,c__50615__auto___54682,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__48680__auto__ = null;
var shadow$dom$state_machine__48680__auto____0 = (function (){
var statearr_53809 = [null,null,null,null,null,null,null,null];
(statearr_53809[(0)] = shadow$dom$state_machine__48680__auto__);

(statearr_53809[(1)] = (1));

return statearr_53809;
});
var shadow$dom$state_machine__48680__auto____1 = (function (state_53792){
while(true){
var ret_value__48681__auto__ = (function (){try{while(true){
var result__48682__auto__ = switch__48679__auto__(state_53792);
if(cljs.core.keyword_identical_QMARK_(result__48682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48682__auto__;
}
break;
}
}catch (e53811){var ex__48683__auto__ = e53811;
var statearr_53812_54686 = state_53792;
(statearr_53812_54686[(2)] = ex__48683__auto__);


if(cljs.core.seq((state_53792[(4)]))){
var statearr_53815_54687 = state_53792;
(statearr_53815_54687[(1)] = cljs.core.first((state_53792[(4)])));

} else {
throw ex__48683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54689 = state_53792;
state_53792 = G__54689;
continue;
} else {
return ret_value__48681__auto__;
}
break;
}
});
shadow$dom$state_machine__48680__auto__ = function(state_53792){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48680__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48680__auto____1.call(this,state_53792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48680__auto____0;
shadow$dom$state_machine__48680__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48680__auto____1;
return shadow$dom$state_machine__48680__auto__;
})()
;})(switch__48679__auto__,c__50615__auto___54682,buf,chan,event_fn))
})();
var state__50617__auto__ = (function (){var statearr_53816 = f__50616__auto__();
(statearr_53816[(6)] = c__50615__auto___54682);

return statearr_53816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50617__auto__);
});})(c__50615__auto___54682,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
