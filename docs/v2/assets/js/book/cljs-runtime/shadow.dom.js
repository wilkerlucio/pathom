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
return cljs.core.cons((coll[idx]),(function (){var G__64803 = coll;
var G__64804 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64803,G__64804) : shadow.dom.lazy_native_coll_seq.call(null,G__64803,G__64804));
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
var G__64819 = arguments.length;
switch (G__64819) {
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
var G__64825 = arguments.length;
switch (G__64825) {
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
var G__64828 = arguments.length;
switch (G__64828) {
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
var G__64830 = arguments.length;
switch (G__64830) {
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
var G__64844 = arguments.length;
switch (G__64844) {
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
var G__64851 = arguments.length;
switch (G__64851) {
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
}catch (e64860){if((e64860 instanceof Object)){
var e = e64860;
return console.log("didnt support attachEvent",el,e);
} else {
throw e64860;

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
var seq__64868 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__64869 = null;
var count__64870 = (0);
var i__64871 = (0);
while(true){
if((i__64871 < count__64870)){
var el = chunk__64869.cljs$core$IIndexed$_nth$arity$2(null,i__64871);
var handler_65331__$1 = ((function (seq__64868,chunk__64869,count__64870,i__64871,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64868,chunk__64869,count__64870,i__64871,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65331__$1);


var G__65332 = seq__64868;
var G__65333 = chunk__64869;
var G__65334 = count__64870;
var G__65335 = (i__64871 + (1));
seq__64868 = G__65332;
chunk__64869 = G__65333;
count__64870 = G__65334;
i__64871 = G__65335;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64868);
if(temp__5720__auto__){
var seq__64868__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64868__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64868__$1);
var G__65336 = cljs.core.chunk_rest(seq__64868__$1);
var G__65337 = c__4550__auto__;
var G__65338 = cljs.core.count(c__4550__auto__);
var G__65339 = (0);
seq__64868 = G__65336;
chunk__64869 = G__65337;
count__64870 = G__65338;
i__64871 = G__65339;
continue;
} else {
var el = cljs.core.first(seq__64868__$1);
var handler_65340__$1 = ((function (seq__64868,chunk__64869,count__64870,i__64871,el,seq__64868__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64868,chunk__64869,count__64870,i__64871,el,seq__64868__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_65340__$1);


var G__65342 = cljs.core.next(seq__64868__$1);
var G__65343 = null;
var G__65344 = (0);
var G__65345 = (0);
seq__64868 = G__65342;
chunk__64869 = G__65343;
count__64870 = G__65344;
i__64871 = G__65345;
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
var G__64884 = arguments.length;
switch (G__64884) {
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
var seq__64887 = cljs.core.seq(events);
var chunk__64888 = null;
var count__64889 = (0);
var i__64890 = (0);
while(true){
if((i__64890 < count__64889)){
var vec__64897 = chunk__64888.cljs$core$IIndexed$_nth$arity$2(null,i__64890);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64897,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65348 = seq__64887;
var G__65349 = chunk__64888;
var G__65350 = count__64889;
var G__65351 = (i__64890 + (1));
seq__64887 = G__65348;
chunk__64888 = G__65349;
count__64889 = G__65350;
i__64890 = G__65351;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64887);
if(temp__5720__auto__){
var seq__64887__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64887__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64887__$1);
var G__65354 = cljs.core.chunk_rest(seq__64887__$1);
var G__65355 = c__4550__auto__;
var G__65356 = cljs.core.count(c__4550__auto__);
var G__65357 = (0);
seq__64887 = G__65354;
chunk__64888 = G__65355;
count__64889 = G__65356;
i__64890 = G__65357;
continue;
} else {
var vec__64902 = cljs.core.first(seq__64887__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64902,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64902,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65358 = cljs.core.next(seq__64887__$1);
var G__65359 = null;
var G__65360 = (0);
var G__65361 = (0);
seq__64887 = G__65358;
chunk__64888 = G__65359;
count__64889 = G__65360;
i__64890 = G__65361;
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
var seq__64908 = cljs.core.seq(styles);
var chunk__64909 = null;
var count__64910 = (0);
var i__64911 = (0);
while(true){
if((i__64911 < count__64910)){
var vec__64918 = chunk__64909.cljs$core$IIndexed$_nth$arity$2(null,i__64911);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64918,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64918,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65363 = seq__64908;
var G__65364 = chunk__64909;
var G__65365 = count__64910;
var G__65366 = (i__64911 + (1));
seq__64908 = G__65363;
chunk__64909 = G__65364;
count__64910 = G__65365;
i__64911 = G__65366;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__64908);
if(temp__5720__auto__){
var seq__64908__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64908__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__64908__$1);
var G__65367 = cljs.core.chunk_rest(seq__64908__$1);
var G__65368 = c__4550__auto__;
var G__65369 = cljs.core.count(c__4550__auto__);
var G__65370 = (0);
seq__64908 = G__65367;
chunk__64909 = G__65368;
count__64910 = G__65369;
i__64911 = G__65370;
continue;
} else {
var vec__64926 = cljs.core.first(seq__64908__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64926,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__65371 = cljs.core.next(seq__64908__$1);
var G__65372 = null;
var G__65373 = (0);
var G__65374 = (0);
seq__64908 = G__65371;
chunk__64909 = G__65372;
count__64910 = G__65373;
i__64911 = G__65374;
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
var G__64930_65375 = key;
var G__64930_65376__$1 = (((G__64930_65375 instanceof cljs.core.Keyword))?G__64930_65375.fqn:null);
switch (G__64930_65376__$1) {
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
var ks_65380 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_65380,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_65380,"aria-");
}
})())){
el.setAttribute(ks_65380,value);
} else {
(el[ks_65380] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__64937){
var map__64938 = p__64937;
var map__64938__$1 = (((((!((map__64938 == null))))?(((((map__64938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64938):map__64938);
var props = map__64938__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64938__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__64941 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64941,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64941,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64941,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__64944 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__64944,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__64944;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__64950 = arguments.length;
switch (G__64950) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__64951){
var vec__64952 = p__64951;
var seq__64953 = cljs.core.seq(vec__64952);
var first__64954 = cljs.core.first(seq__64953);
var seq__64953__$1 = cljs.core.next(seq__64953);
var nn = first__64954;
var first__64954__$1 = cljs.core.first(seq__64953__$1);
var seq__64953__$2 = cljs.core.next(seq__64953__$1);
var np = first__64954__$1;
var nc = seq__64953__$2;
var node = vec__64952;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64955 = nn;
var G__64956 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64955,G__64956) : create_fn.call(null,G__64955,G__64956));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64957 = nn;
var G__64958 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64957,G__64958) : create_fn.call(null,G__64957,G__64958));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__64959 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64959,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64959,(1),null);
var seq__64965_65396 = cljs.core.seq(node_children);
var chunk__64966_65397 = null;
var count__64967_65398 = (0);
var i__64968_65399 = (0);
while(true){
if((i__64968_65399 < count__64967_65398)){
var child_struct_65400 = chunk__64966_65397.cljs$core$IIndexed$_nth$arity$2(null,i__64968_65399);
var children_65401 = shadow.dom.dom_node(child_struct_65400);
if(cljs.core.seq_QMARK_(children_65401)){
var seq__64991_65402 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65401));
var chunk__64993_65403 = null;
var count__64994_65404 = (0);
var i__64995_65405 = (0);
while(true){
if((i__64995_65405 < count__64994_65404)){
var child_65406 = chunk__64993_65403.cljs$core$IIndexed$_nth$arity$2(null,i__64995_65405);
if(cljs.core.truth_(child_65406)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65406);


var G__65407 = seq__64991_65402;
var G__65408 = chunk__64993_65403;
var G__65409 = count__64994_65404;
var G__65410 = (i__64995_65405 + (1));
seq__64991_65402 = G__65407;
chunk__64993_65403 = G__65408;
count__64994_65404 = G__65409;
i__64995_65405 = G__65410;
continue;
} else {
var G__65411 = seq__64991_65402;
var G__65412 = chunk__64993_65403;
var G__65413 = count__64994_65404;
var G__65414 = (i__64995_65405 + (1));
seq__64991_65402 = G__65411;
chunk__64993_65403 = G__65412;
count__64994_65404 = G__65413;
i__64995_65405 = G__65414;
continue;
}
} else {
var temp__5720__auto___65415 = cljs.core.seq(seq__64991_65402);
if(temp__5720__auto___65415){
var seq__64991_65416__$1 = temp__5720__auto___65415;
if(cljs.core.chunked_seq_QMARK_(seq__64991_65416__$1)){
var c__4550__auto___65417 = cljs.core.chunk_first(seq__64991_65416__$1);
var G__65418 = cljs.core.chunk_rest(seq__64991_65416__$1);
var G__65419 = c__4550__auto___65417;
var G__65420 = cljs.core.count(c__4550__auto___65417);
var G__65421 = (0);
seq__64991_65402 = G__65418;
chunk__64993_65403 = G__65419;
count__64994_65404 = G__65420;
i__64995_65405 = G__65421;
continue;
} else {
var child_65422 = cljs.core.first(seq__64991_65416__$1);
if(cljs.core.truth_(child_65422)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65422);


var G__65423 = cljs.core.next(seq__64991_65416__$1);
var G__65424 = null;
var G__65425 = (0);
var G__65426 = (0);
seq__64991_65402 = G__65423;
chunk__64993_65403 = G__65424;
count__64994_65404 = G__65425;
i__64995_65405 = G__65426;
continue;
} else {
var G__65427 = cljs.core.next(seq__64991_65416__$1);
var G__65428 = null;
var G__65429 = (0);
var G__65430 = (0);
seq__64991_65402 = G__65427;
chunk__64993_65403 = G__65428;
count__64994_65404 = G__65429;
i__64995_65405 = G__65430;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65401);
}


var G__65431 = seq__64965_65396;
var G__65432 = chunk__64966_65397;
var G__65433 = count__64967_65398;
var G__65434 = (i__64968_65399 + (1));
seq__64965_65396 = G__65431;
chunk__64966_65397 = G__65432;
count__64967_65398 = G__65433;
i__64968_65399 = G__65434;
continue;
} else {
var temp__5720__auto___65435 = cljs.core.seq(seq__64965_65396);
if(temp__5720__auto___65435){
var seq__64965_65436__$1 = temp__5720__auto___65435;
if(cljs.core.chunked_seq_QMARK_(seq__64965_65436__$1)){
var c__4550__auto___65437 = cljs.core.chunk_first(seq__64965_65436__$1);
var G__65438 = cljs.core.chunk_rest(seq__64965_65436__$1);
var G__65439 = c__4550__auto___65437;
var G__65440 = cljs.core.count(c__4550__auto___65437);
var G__65441 = (0);
seq__64965_65396 = G__65438;
chunk__64966_65397 = G__65439;
count__64967_65398 = G__65440;
i__64968_65399 = G__65441;
continue;
} else {
var child_struct_65442 = cljs.core.first(seq__64965_65436__$1);
var children_65443 = shadow.dom.dom_node(child_struct_65442);
if(cljs.core.seq_QMARK_(children_65443)){
var seq__64997_65444 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65443));
var chunk__64999_65445 = null;
var count__65000_65446 = (0);
var i__65001_65447 = (0);
while(true){
if((i__65001_65447 < count__65000_65446)){
var child_65448 = chunk__64999_65445.cljs$core$IIndexed$_nth$arity$2(null,i__65001_65447);
if(cljs.core.truth_(child_65448)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65448);


var G__65449 = seq__64997_65444;
var G__65450 = chunk__64999_65445;
var G__65451 = count__65000_65446;
var G__65452 = (i__65001_65447 + (1));
seq__64997_65444 = G__65449;
chunk__64999_65445 = G__65450;
count__65000_65446 = G__65451;
i__65001_65447 = G__65452;
continue;
} else {
var G__65453 = seq__64997_65444;
var G__65454 = chunk__64999_65445;
var G__65455 = count__65000_65446;
var G__65456 = (i__65001_65447 + (1));
seq__64997_65444 = G__65453;
chunk__64999_65445 = G__65454;
count__65000_65446 = G__65455;
i__65001_65447 = G__65456;
continue;
}
} else {
var temp__5720__auto___65457__$1 = cljs.core.seq(seq__64997_65444);
if(temp__5720__auto___65457__$1){
var seq__64997_65459__$1 = temp__5720__auto___65457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64997_65459__$1)){
var c__4550__auto___65460 = cljs.core.chunk_first(seq__64997_65459__$1);
var G__65461 = cljs.core.chunk_rest(seq__64997_65459__$1);
var G__65462 = c__4550__auto___65460;
var G__65463 = cljs.core.count(c__4550__auto___65460);
var G__65464 = (0);
seq__64997_65444 = G__65461;
chunk__64999_65445 = G__65462;
count__65000_65446 = G__65463;
i__65001_65447 = G__65464;
continue;
} else {
var child_65466 = cljs.core.first(seq__64997_65459__$1);
if(cljs.core.truth_(child_65466)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65466);


var G__65467 = cljs.core.next(seq__64997_65459__$1);
var G__65468 = null;
var G__65469 = (0);
var G__65470 = (0);
seq__64997_65444 = G__65467;
chunk__64999_65445 = G__65468;
count__65000_65446 = G__65469;
i__65001_65447 = G__65470;
continue;
} else {
var G__65472 = cljs.core.next(seq__64997_65459__$1);
var G__65473 = null;
var G__65474 = (0);
var G__65475 = (0);
seq__64997_65444 = G__65472;
chunk__64999_65445 = G__65473;
count__65000_65446 = G__65474;
i__65001_65447 = G__65475;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65443);
}


var G__65476 = cljs.core.next(seq__64965_65436__$1);
var G__65477 = null;
var G__65478 = (0);
var G__65479 = (0);
seq__64965_65396 = G__65476;
chunk__64966_65397 = G__65477;
count__64967_65398 = G__65478;
i__64968_65399 = G__65479;
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
var seq__65015 = cljs.core.seq(node);
var chunk__65016 = null;
var count__65017 = (0);
var i__65018 = (0);
while(true){
if((i__65018 < count__65017)){
var n = chunk__65016.cljs$core$IIndexed$_nth$arity$2(null,i__65018);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65483 = seq__65015;
var G__65484 = chunk__65016;
var G__65485 = count__65017;
var G__65486 = (i__65018 + (1));
seq__65015 = G__65483;
chunk__65016 = G__65484;
count__65017 = G__65485;
i__65018 = G__65486;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__65015);
if(temp__5720__auto__){
var seq__65015__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65015__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65015__$1);
var G__65487 = cljs.core.chunk_rest(seq__65015__$1);
var G__65488 = c__4550__auto__;
var G__65489 = cljs.core.count(c__4550__auto__);
var G__65490 = (0);
seq__65015 = G__65487;
chunk__65016 = G__65488;
count__65017 = G__65489;
i__65018 = G__65490;
continue;
} else {
var n = cljs.core.first(seq__65015__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65491 = cljs.core.next(seq__65015__$1);
var G__65492 = null;
var G__65493 = (0);
var G__65494 = (0);
seq__65015 = G__65491;
chunk__65016 = G__65492;
count__65017 = G__65493;
i__65018 = G__65494;
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
var G__65025 = arguments.length;
switch (G__65025) {
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
var G__65028 = arguments.length;
switch (G__65028) {
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
var G__65035 = arguments.length;
switch (G__65035) {
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
var len__4730__auto___65499 = arguments.length;
var i__4731__auto___65500 = (0);
while(true){
if((i__4731__auto___65500 < len__4730__auto___65499)){
args__4736__auto__.push((arguments[i__4731__auto___65500]));

var G__65501 = (i__4731__auto___65500 + (1));
i__4731__auto___65500 = G__65501;
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
var seq__65043_65505 = cljs.core.seq(nodes);
var chunk__65044_65506 = null;
var count__65045_65507 = (0);
var i__65046_65508 = (0);
while(true){
if((i__65046_65508 < count__65045_65507)){
var node_65509 = chunk__65044_65506.cljs$core$IIndexed$_nth$arity$2(null,i__65046_65508);
fragment.appendChild(shadow.dom._to_dom(node_65509));


var G__65510 = seq__65043_65505;
var G__65511 = chunk__65044_65506;
var G__65512 = count__65045_65507;
var G__65513 = (i__65046_65508 + (1));
seq__65043_65505 = G__65510;
chunk__65044_65506 = G__65511;
count__65045_65507 = G__65512;
i__65046_65508 = G__65513;
continue;
} else {
var temp__5720__auto___65514 = cljs.core.seq(seq__65043_65505);
if(temp__5720__auto___65514){
var seq__65043_65515__$1 = temp__5720__auto___65514;
if(cljs.core.chunked_seq_QMARK_(seq__65043_65515__$1)){
var c__4550__auto___65516 = cljs.core.chunk_first(seq__65043_65515__$1);
var G__65517 = cljs.core.chunk_rest(seq__65043_65515__$1);
var G__65518 = c__4550__auto___65516;
var G__65519 = cljs.core.count(c__4550__auto___65516);
var G__65520 = (0);
seq__65043_65505 = G__65517;
chunk__65044_65506 = G__65518;
count__65045_65507 = G__65519;
i__65046_65508 = G__65520;
continue;
} else {
var node_65522 = cljs.core.first(seq__65043_65515__$1);
fragment.appendChild(shadow.dom._to_dom(node_65522));


var G__65523 = cljs.core.next(seq__65043_65515__$1);
var G__65524 = null;
var G__65525 = (0);
var G__65526 = (0);
seq__65043_65505 = G__65523;
chunk__65044_65506 = G__65524;
count__65045_65507 = G__65525;
i__65046_65508 = G__65526;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq65042){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65042));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__65052_65527 = cljs.core.seq(scripts);
var chunk__65053_65528 = null;
var count__65054_65529 = (0);
var i__65055_65530 = (0);
while(true){
if((i__65055_65530 < count__65054_65529)){
var vec__65063_65531 = chunk__65053_65528.cljs$core$IIndexed$_nth$arity$2(null,i__65055_65530);
var script_tag_65532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65063_65531,(0),null);
var script_body_65533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65063_65531,(1),null);
eval(script_body_65533);


var G__65535 = seq__65052_65527;
var G__65536 = chunk__65053_65528;
var G__65537 = count__65054_65529;
var G__65538 = (i__65055_65530 + (1));
seq__65052_65527 = G__65535;
chunk__65053_65528 = G__65536;
count__65054_65529 = G__65537;
i__65055_65530 = G__65538;
continue;
} else {
var temp__5720__auto___65539 = cljs.core.seq(seq__65052_65527);
if(temp__5720__auto___65539){
var seq__65052_65541__$1 = temp__5720__auto___65539;
if(cljs.core.chunked_seq_QMARK_(seq__65052_65541__$1)){
var c__4550__auto___65545 = cljs.core.chunk_first(seq__65052_65541__$1);
var G__65546 = cljs.core.chunk_rest(seq__65052_65541__$1);
var G__65547 = c__4550__auto___65545;
var G__65548 = cljs.core.count(c__4550__auto___65545);
var G__65549 = (0);
seq__65052_65527 = G__65546;
chunk__65053_65528 = G__65547;
count__65054_65529 = G__65548;
i__65055_65530 = G__65549;
continue;
} else {
var vec__65068_65550 = cljs.core.first(seq__65052_65541__$1);
var script_tag_65551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65068_65550,(0),null);
var script_body_65552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65068_65550,(1),null);
eval(script_body_65552);


var G__65553 = cljs.core.next(seq__65052_65541__$1);
var G__65554 = null;
var G__65555 = (0);
var G__65556 = (0);
seq__65052_65527 = G__65553;
chunk__65053_65528 = G__65554;
count__65054_65529 = G__65555;
i__65055_65530 = G__65556;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__65073){
var vec__65075 = p__65073;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65075,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65075,(1),null);
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
var G__65080 = arguments.length;
switch (G__65080) {
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
var seq__65088 = cljs.core.seq(style_keys);
var chunk__65089 = null;
var count__65090 = (0);
var i__65091 = (0);
while(true){
if((i__65091 < count__65090)){
var it = chunk__65089.cljs$core$IIndexed$_nth$arity$2(null,i__65091);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65563 = seq__65088;
var G__65564 = chunk__65089;
var G__65565 = count__65090;
var G__65566 = (i__65091 + (1));
seq__65088 = G__65563;
chunk__65089 = G__65564;
count__65090 = G__65565;
i__65091 = G__65566;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__65088);
if(temp__5720__auto__){
var seq__65088__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65088__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__65088__$1);
var G__65567 = cljs.core.chunk_rest(seq__65088__$1);
var G__65568 = c__4550__auto__;
var G__65569 = cljs.core.count(c__4550__auto__);
var G__65570 = (0);
seq__65088 = G__65567;
chunk__65089 = G__65568;
count__65090 = G__65569;
i__65091 = G__65570;
continue;
} else {
var it = cljs.core.first(seq__65088__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65572 = cljs.core.next(seq__65088__$1);
var G__65573 = null;
var G__65574 = (0);
var G__65575 = (0);
seq__65088 = G__65572;
chunk__65089 = G__65573;
count__65090 = G__65574;
i__65091 = G__65575;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k65096,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__65100 = k65096;
var G__65100__$1 = (((G__65100 instanceof cljs.core.Keyword))?G__65100.fqn:null);
switch (G__65100__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65096,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__65101){
var vec__65102 = p__65101;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65102,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65102,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65095){
var self__ = this;
var G__65095__$1 = this;
return (new cljs.core.RecordIter((0),G__65095__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65097,other65098){
var self__ = this;
var this65097__$1 = this;
return (((!((other65098 == null)))) && ((this65097__$1.constructor === other65098.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65097__$1.x,other65098.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65097__$1.y,other65098.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65097__$1.__extmap,other65098.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__65095){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__65116 = cljs.core.keyword_identical_QMARK_;
var expr__65117 = k__4393__auto__;
if(cljs.core.truth_((pred__65116.cljs$core$IFn$_invoke$arity$2 ? pred__65116.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__65117) : pred__65116.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__65117)))){
return (new shadow.dom.Coordinate(G__65095,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65116.cljs$core$IFn$_invoke$arity$2 ? pred__65116.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__65117) : pred__65116.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__65117)))){
return (new shadow.dom.Coordinate(self__.x,G__65095,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__65095),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__65095){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__65095,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__65099){
var extmap__4424__auto__ = (function (){var G__65120 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65099,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__65099)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65120);
} else {
return G__65120;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__65099),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__65099),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k65122,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__65126 = k65122;
var G__65126__$1 = (((G__65126 instanceof cljs.core.Keyword))?G__65126.fqn:null);
switch (G__65126__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k65122,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__65130){
var vec__65131 = p__65130;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65131,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65131,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__65121){
var self__ = this;
var G__65121__$1 = this;
return (new cljs.core.RecordIter((0),G__65121__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this65123,other65124){
var self__ = this;
var this65123__$1 = this;
return (((!((other65124 == null)))) && ((this65123__$1.constructor === other65124.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65123__$1.w,other65124.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65123__$1.h,other65124.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this65123__$1.__extmap,other65124.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__65121){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__65143 = cljs.core.keyword_identical_QMARK_;
var expr__65144 = k__4393__auto__;
if(cljs.core.truth_((pred__65143.cljs$core$IFn$_invoke$arity$2 ? pred__65143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__65144) : pred__65143.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__65144)))){
return (new shadow.dom.Size(G__65121,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__65143.cljs$core$IFn$_invoke$arity$2 ? pred__65143.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__65144) : pred__65143.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__65144)))){
return (new shadow.dom.Size(self__.w,G__65121,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__65121),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__65121){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__65121,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__65125){
var extmap__4424__auto__ = (function (){var G__65149 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__65125,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__65125)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__65149);
} else {
return G__65149;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__65125),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__65125),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__65594 = (i + (1));
var G__65595 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65594;
ret = G__65595;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65159){
var vec__65160 = p__65159;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65160,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__65165 = arguments.length;
switch (G__65165) {
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
var G__65613 = ps;
var G__65614 = (i + (1));
el__$1 = G__65613;
i = G__65614;
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
var vec__65191 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65191,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65191,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65191,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__65195_65616 = cljs.core.seq(props);
var chunk__65196_65617 = null;
var count__65197_65618 = (0);
var i__65198_65619 = (0);
while(true){
if((i__65198_65619 < count__65197_65618)){
var vec__65214_65620 = chunk__65196_65617.cljs$core$IIndexed$_nth$arity$2(null,i__65198_65619);
var k_65621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65214_65620,(0),null);
var v_65622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65214_65620,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_65621);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65621),v_65622);


var G__65623 = seq__65195_65616;
var G__65624 = chunk__65196_65617;
var G__65625 = count__65197_65618;
var G__65626 = (i__65198_65619 + (1));
seq__65195_65616 = G__65623;
chunk__65196_65617 = G__65624;
count__65197_65618 = G__65625;
i__65198_65619 = G__65626;
continue;
} else {
var temp__5720__auto___65627 = cljs.core.seq(seq__65195_65616);
if(temp__5720__auto___65627){
var seq__65195_65628__$1 = temp__5720__auto___65627;
if(cljs.core.chunked_seq_QMARK_(seq__65195_65628__$1)){
var c__4550__auto___65629 = cljs.core.chunk_first(seq__65195_65628__$1);
var G__65630 = cljs.core.chunk_rest(seq__65195_65628__$1);
var G__65631 = c__4550__auto___65629;
var G__65632 = cljs.core.count(c__4550__auto___65629);
var G__65633 = (0);
seq__65195_65616 = G__65630;
chunk__65196_65617 = G__65631;
count__65197_65618 = G__65632;
i__65198_65619 = G__65633;
continue;
} else {
var vec__65217_65634 = cljs.core.first(seq__65195_65628__$1);
var k_65635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65217_65634,(0),null);
var v_65636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65217_65634,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_65635);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65635),v_65636);


var G__65637 = cljs.core.next(seq__65195_65628__$1);
var G__65638 = null;
var G__65639 = (0);
var G__65640 = (0);
seq__65195_65616 = G__65637;
chunk__65196_65617 = G__65638;
count__65197_65618 = G__65639;
i__65198_65619 = G__65640;
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
var vec__65223 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65223,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65223,(1),null);
var seq__65226_65642 = cljs.core.seq(node_children);
var chunk__65228_65643 = null;
var count__65229_65644 = (0);
var i__65230_65645 = (0);
while(true){
if((i__65230_65645 < count__65229_65644)){
var child_struct_65646 = chunk__65228_65643.cljs$core$IIndexed$_nth$arity$2(null,i__65230_65645);
if((!((child_struct_65646 == null)))){
if(typeof child_struct_65646 === 'string'){
var text_65647 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65647),child_struct_65646].join(''));
} else {
var children_65649 = shadow.dom.svg_node(child_struct_65646);
if(cljs.core.seq_QMARK_(children_65649)){
var seq__65252_65651 = cljs.core.seq(children_65649);
var chunk__65254_65652 = null;
var count__65255_65653 = (0);
var i__65256_65654 = (0);
while(true){
if((i__65256_65654 < count__65255_65653)){
var child_65655 = chunk__65254_65652.cljs$core$IIndexed$_nth$arity$2(null,i__65256_65654);
if(cljs.core.truth_(child_65655)){
node.appendChild(child_65655);


var G__65659 = seq__65252_65651;
var G__65660 = chunk__65254_65652;
var G__65661 = count__65255_65653;
var G__65662 = (i__65256_65654 + (1));
seq__65252_65651 = G__65659;
chunk__65254_65652 = G__65660;
count__65255_65653 = G__65661;
i__65256_65654 = G__65662;
continue;
} else {
var G__65663 = seq__65252_65651;
var G__65664 = chunk__65254_65652;
var G__65665 = count__65255_65653;
var G__65666 = (i__65256_65654 + (1));
seq__65252_65651 = G__65663;
chunk__65254_65652 = G__65664;
count__65255_65653 = G__65665;
i__65256_65654 = G__65666;
continue;
}
} else {
var temp__5720__auto___65667 = cljs.core.seq(seq__65252_65651);
if(temp__5720__auto___65667){
var seq__65252_65668__$1 = temp__5720__auto___65667;
if(cljs.core.chunked_seq_QMARK_(seq__65252_65668__$1)){
var c__4550__auto___65669 = cljs.core.chunk_first(seq__65252_65668__$1);
var G__65670 = cljs.core.chunk_rest(seq__65252_65668__$1);
var G__65671 = c__4550__auto___65669;
var G__65672 = cljs.core.count(c__4550__auto___65669);
var G__65673 = (0);
seq__65252_65651 = G__65670;
chunk__65254_65652 = G__65671;
count__65255_65653 = G__65672;
i__65256_65654 = G__65673;
continue;
} else {
var child_65674 = cljs.core.first(seq__65252_65668__$1);
if(cljs.core.truth_(child_65674)){
node.appendChild(child_65674);


var G__65675 = cljs.core.next(seq__65252_65668__$1);
var G__65676 = null;
var G__65677 = (0);
var G__65678 = (0);
seq__65252_65651 = G__65675;
chunk__65254_65652 = G__65676;
count__65255_65653 = G__65677;
i__65256_65654 = G__65678;
continue;
} else {
var G__65679 = cljs.core.next(seq__65252_65668__$1);
var G__65680 = null;
var G__65681 = (0);
var G__65682 = (0);
seq__65252_65651 = G__65679;
chunk__65254_65652 = G__65680;
count__65255_65653 = G__65681;
i__65256_65654 = G__65682;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65649);
}
}


var G__65683 = seq__65226_65642;
var G__65684 = chunk__65228_65643;
var G__65685 = count__65229_65644;
var G__65686 = (i__65230_65645 + (1));
seq__65226_65642 = G__65683;
chunk__65228_65643 = G__65684;
count__65229_65644 = G__65685;
i__65230_65645 = G__65686;
continue;
} else {
var G__65687 = seq__65226_65642;
var G__65688 = chunk__65228_65643;
var G__65689 = count__65229_65644;
var G__65690 = (i__65230_65645 + (1));
seq__65226_65642 = G__65687;
chunk__65228_65643 = G__65688;
count__65229_65644 = G__65689;
i__65230_65645 = G__65690;
continue;
}
} else {
var temp__5720__auto___65691 = cljs.core.seq(seq__65226_65642);
if(temp__5720__auto___65691){
var seq__65226_65692__$1 = temp__5720__auto___65691;
if(cljs.core.chunked_seq_QMARK_(seq__65226_65692__$1)){
var c__4550__auto___65693 = cljs.core.chunk_first(seq__65226_65692__$1);
var G__65694 = cljs.core.chunk_rest(seq__65226_65692__$1);
var G__65695 = c__4550__auto___65693;
var G__65696 = cljs.core.count(c__4550__auto___65693);
var G__65697 = (0);
seq__65226_65642 = G__65694;
chunk__65228_65643 = G__65695;
count__65229_65644 = G__65696;
i__65230_65645 = G__65697;
continue;
} else {
var child_struct_65698 = cljs.core.first(seq__65226_65692__$1);
if((!((child_struct_65698 == null)))){
if(typeof child_struct_65698 === 'string'){
var text_65699 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65699),child_struct_65698].join(''));
} else {
var children_65700 = shadow.dom.svg_node(child_struct_65698);
if(cljs.core.seq_QMARK_(children_65700)){
var seq__65260_65701 = cljs.core.seq(children_65700);
var chunk__65262_65702 = null;
var count__65263_65703 = (0);
var i__65264_65704 = (0);
while(true){
if((i__65264_65704 < count__65263_65703)){
var child_65705 = chunk__65262_65702.cljs$core$IIndexed$_nth$arity$2(null,i__65264_65704);
if(cljs.core.truth_(child_65705)){
node.appendChild(child_65705);


var G__65706 = seq__65260_65701;
var G__65707 = chunk__65262_65702;
var G__65708 = count__65263_65703;
var G__65709 = (i__65264_65704 + (1));
seq__65260_65701 = G__65706;
chunk__65262_65702 = G__65707;
count__65263_65703 = G__65708;
i__65264_65704 = G__65709;
continue;
} else {
var G__65713 = seq__65260_65701;
var G__65714 = chunk__65262_65702;
var G__65715 = count__65263_65703;
var G__65716 = (i__65264_65704 + (1));
seq__65260_65701 = G__65713;
chunk__65262_65702 = G__65714;
count__65263_65703 = G__65715;
i__65264_65704 = G__65716;
continue;
}
} else {
var temp__5720__auto___65717__$1 = cljs.core.seq(seq__65260_65701);
if(temp__5720__auto___65717__$1){
var seq__65260_65718__$1 = temp__5720__auto___65717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65260_65718__$1)){
var c__4550__auto___65719 = cljs.core.chunk_first(seq__65260_65718__$1);
var G__65720 = cljs.core.chunk_rest(seq__65260_65718__$1);
var G__65721 = c__4550__auto___65719;
var G__65722 = cljs.core.count(c__4550__auto___65719);
var G__65723 = (0);
seq__65260_65701 = G__65720;
chunk__65262_65702 = G__65721;
count__65263_65703 = G__65722;
i__65264_65704 = G__65723;
continue;
} else {
var child_65724 = cljs.core.first(seq__65260_65718__$1);
if(cljs.core.truth_(child_65724)){
node.appendChild(child_65724);


var G__65725 = cljs.core.next(seq__65260_65718__$1);
var G__65726 = null;
var G__65727 = (0);
var G__65728 = (0);
seq__65260_65701 = G__65725;
chunk__65262_65702 = G__65726;
count__65263_65703 = G__65727;
i__65264_65704 = G__65728;
continue;
} else {
var G__65729 = cljs.core.next(seq__65260_65718__$1);
var G__65730 = null;
var G__65731 = (0);
var G__65732 = (0);
seq__65260_65701 = G__65729;
chunk__65262_65702 = G__65730;
count__65263_65703 = G__65731;
i__65264_65704 = G__65732;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65700);
}
}


var G__65733 = cljs.core.next(seq__65226_65692__$1);
var G__65734 = null;
var G__65735 = (0);
var G__65736 = (0);
seq__65226_65642 = G__65733;
chunk__65228_65643 = G__65734;
count__65229_65644 = G__65735;
i__65230_65645 = G__65736;
continue;
} else {
var G__65737 = cljs.core.next(seq__65226_65692__$1);
var G__65738 = null;
var G__65739 = (0);
var G__65740 = (0);
seq__65226_65642 = G__65737;
chunk__65228_65643 = G__65738;
count__65229_65644 = G__65739;
i__65230_65645 = G__65740;
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
var len__4730__auto___65744 = arguments.length;
var i__4731__auto___65745 = (0);
while(true){
if((i__4731__auto___65745 < len__4730__auto___65744)){
args__4736__auto__.push((arguments[i__4731__auto___65745]));

var G__65746 = (i__4731__auto___65745 + (1));
i__4731__auto___65745 = G__65746;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq65272){
var G__65273 = cljs.core.first(seq65272);
var seq65272__$1 = cljs.core.next(seq65272);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65273,seq65272__$1);
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
var G__65279 = arguments.length;
switch (G__65279) {
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
var c__51169__auto___65753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___65753,buf,chan,event_fn){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___65753,buf,chan,event_fn){
return (function (state_65285){
var state_val_65286 = (state_65285[(1)]);
if((state_val_65286 === (1))){
var state_65285__$1 = state_65285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65285__$1,(2),once_or_cleanup);
} else {
if((state_val_65286 === (2))){
var inst_65282 = (state_65285[(2)]);
var inst_65283 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_65285__$1 = (function (){var statearr_65289 = state_65285;
(statearr_65289[(7)] = inst_65282);

return statearr_65289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65285__$1,inst_65283);
} else {
return null;
}
}
});})(c__51169__auto___65753,buf,chan,event_fn))
;
return ((function (switch__50952__auto__,c__51169__auto___65753,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__50953__auto__ = null;
var shadow$dom$state_machine__50953__auto____0 = (function (){
var statearr_65290 = [null,null,null,null,null,null,null,null];
(statearr_65290[(0)] = shadow$dom$state_machine__50953__auto__);

(statearr_65290[(1)] = (1));

return statearr_65290;
});
var shadow$dom$state_machine__50953__auto____1 = (function (state_65285){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_65285);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e65292){if((e65292 instanceof Object)){
var ex__50956__auto__ = e65292;
var statearr_65293_65762 = state_65285;
(statearr_65293_65762[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65764 = state_65285;
state_65285 = G__65764;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
shadow$dom$state_machine__50953__auto__ = function(state_65285){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__50953__auto____0.call(this);
case 1:
return shadow$dom$state_machine__50953__auto____1.call(this,state_65285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__50953__auto____0;
shadow$dom$state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__50953__auto____1;
return shadow$dom$state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___65753,buf,chan,event_fn))
})();
var state__51171__auto__ = (function (){var statearr_65295 = f__51170__auto__();
(statearr_65295[(6)] = c__51169__auto___65753);

return statearr_65295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___65753,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
