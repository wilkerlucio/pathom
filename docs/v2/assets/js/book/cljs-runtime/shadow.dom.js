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
return cljs.core.cons((coll[idx]),(function (){var G__58766 = coll;
var G__58767 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58766,G__58767) : shadow.dom.lazy_native_coll_seq.call(null,G__58766,G__58767));
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
var G__58811 = arguments.length;
switch (G__58811) {
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
var G__58822 = arguments.length;
switch (G__58822) {
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
var G__58832 = arguments.length;
switch (G__58832) {
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
var G__58844 = arguments.length;
switch (G__58844) {
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
var G__58857 = arguments.length;
switch (G__58857) {
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
var G__58875 = arguments.length;
switch (G__58875) {
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
}catch (e58888){if((e58888 instanceof Object)){
var e = e58888;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58888;

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
var seq__58894 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58895 = null;
var count__58896 = (0);
var i__58897 = (0);
while(true){
if((i__58897 < count__58896)){
var el = chunk__58895.cljs$core$IIndexed$_nth$arity$2(null,i__58897);
var handler_59801__$1 = ((function (seq__58894,chunk__58895,count__58896,i__58897,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58894,chunk__58895,count__58896,i__58897,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59801__$1);


var G__59804 = seq__58894;
var G__59805 = chunk__58895;
var G__59806 = count__58896;
var G__59807 = (i__58897 + (1));
seq__58894 = G__59804;
chunk__58895 = G__59805;
count__58896 = G__59806;
i__58897 = G__59807;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58894);
if(temp__5720__auto__){
var seq__58894__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58894__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58894__$1);
var G__59808 = cljs.core.chunk_rest(seq__58894__$1);
var G__59809 = c__4550__auto__;
var G__59810 = cljs.core.count(c__4550__auto__);
var G__59811 = (0);
seq__58894 = G__59808;
chunk__58895 = G__59809;
count__58896 = G__59810;
i__58897 = G__59811;
continue;
} else {
var el = cljs.core.first(seq__58894__$1);
var handler_59812__$1 = ((function (seq__58894,chunk__58895,count__58896,i__58897,el,seq__58894__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58894,chunk__58895,count__58896,i__58897,el,seq__58894__$1,temp__5720__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59812__$1);


var G__59819 = cljs.core.next(seq__58894__$1);
var G__59820 = null;
var G__59821 = (0);
var G__59822 = (0);
seq__58894 = G__59819;
chunk__58895 = G__59820;
count__58896 = G__59821;
i__58897 = G__59822;
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
var G__58930 = arguments.length;
switch (G__58930) {
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
var seq__58947 = cljs.core.seq(events);
var chunk__58948 = null;
var count__58949 = (0);
var i__58950 = (0);
while(true){
if((i__58950 < count__58949)){
var vec__58959 = chunk__58948.cljs$core$IIndexed$_nth$arity$2(null,i__58950);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58959,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58959,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59826 = seq__58947;
var G__59827 = chunk__58948;
var G__59828 = count__58949;
var G__59829 = (i__58950 + (1));
seq__58947 = G__59826;
chunk__58948 = G__59827;
count__58949 = G__59828;
i__58950 = G__59829;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58947);
if(temp__5720__auto__){
var seq__58947__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58947__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58947__$1);
var G__59831 = cljs.core.chunk_rest(seq__58947__$1);
var G__59832 = c__4550__auto__;
var G__59833 = cljs.core.count(c__4550__auto__);
var G__59834 = (0);
seq__58947 = G__59831;
chunk__58948 = G__59832;
count__58949 = G__59833;
i__58950 = G__59834;
continue;
} else {
var vec__58966 = cljs.core.first(seq__58947__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58966,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59835 = cljs.core.next(seq__58947__$1);
var G__59836 = null;
var G__59837 = (0);
var G__59838 = (0);
seq__58947 = G__59835;
chunk__58948 = G__59836;
count__58949 = G__59837;
i__58950 = G__59838;
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
var seq__58971 = cljs.core.seq(styles);
var chunk__58972 = null;
var count__58973 = (0);
var i__58974 = (0);
while(true){
if((i__58974 < count__58973)){
var vec__58984 = chunk__58972.cljs$core$IIndexed$_nth$arity$2(null,i__58974);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58984,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59847 = seq__58971;
var G__59848 = chunk__58972;
var G__59849 = count__58973;
var G__59850 = (i__58974 + (1));
seq__58971 = G__59847;
chunk__58972 = G__59848;
count__58973 = G__59849;
i__58974 = G__59850;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__58971);
if(temp__5720__auto__){
var seq__58971__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58971__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__58971__$1);
var G__59851 = cljs.core.chunk_rest(seq__58971__$1);
var G__59852 = c__4550__auto__;
var G__59853 = cljs.core.count(c__4550__auto__);
var G__59854 = (0);
seq__58971 = G__59851;
chunk__58972 = G__59852;
count__58973 = G__59853;
i__58974 = G__59854;
continue;
} else {
var vec__58988 = cljs.core.first(seq__58971__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58988,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58988,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59856 = cljs.core.next(seq__58971__$1);
var G__59857 = null;
var G__59858 = (0);
var G__59859 = (0);
seq__58971 = G__59856;
chunk__58972 = G__59857;
count__58973 = G__59858;
i__58974 = G__59859;
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
var G__58994_59861 = key;
var G__58994_59862__$1 = (((G__58994_59861 instanceof cljs.core.Keyword))?G__58994_59861.fqn:null);
switch (G__58994_59862__$1) {
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
var ks_59864 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_59864,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_59864,"aria-");
}
})())){
el.setAttribute(ks_59864,value);
} else {
(el[ks_59864] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59013){
var map__59014 = p__59013;
var map__59014__$1 = (((((!((map__59014 == null))))?(((((map__59014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59014):map__59014);
var props = map__59014__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59014__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59016 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59016,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59016,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59016,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59019 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59019,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59019;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59022 = arguments.length;
switch (G__59022) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59026){
var vec__59027 = p__59026;
var seq__59028 = cljs.core.seq(vec__59027);
var first__59029 = cljs.core.first(seq__59028);
var seq__59028__$1 = cljs.core.next(seq__59028);
var nn = first__59029;
var first__59029__$1 = cljs.core.first(seq__59028__$1);
var seq__59028__$2 = cljs.core.next(seq__59028__$1);
var np = first__59029__$1;
var nc = seq__59028__$2;
var node = vec__59027;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59030 = nn;
var G__59031 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59030,G__59031) : create_fn.call(null,G__59030,G__59031));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59034 = nn;
var G__59035 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59034,G__59035) : create_fn.call(null,G__59034,G__59035));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59036 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59036,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59036,(1),null);
var seq__59039_59887 = cljs.core.seq(node_children);
var chunk__59040_59888 = null;
var count__59041_59889 = (0);
var i__59042_59890 = (0);
while(true){
if((i__59042_59890 < count__59041_59889)){
var child_struct_59891 = chunk__59040_59888.cljs$core$IIndexed$_nth$arity$2(null,i__59042_59890);
var children_59892 = shadow.dom.dom_node(child_struct_59891);
if(cljs.core.seq_QMARK_(children_59892)){
var seq__59064_59893 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59892));
var chunk__59066_59894 = null;
var count__59067_59895 = (0);
var i__59068_59896 = (0);
while(true){
if((i__59068_59896 < count__59067_59895)){
var child_59902 = chunk__59066_59894.cljs$core$IIndexed$_nth$arity$2(null,i__59068_59896);
if(cljs.core.truth_(child_59902)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59902);


var G__59903 = seq__59064_59893;
var G__59904 = chunk__59066_59894;
var G__59905 = count__59067_59895;
var G__59906 = (i__59068_59896 + (1));
seq__59064_59893 = G__59903;
chunk__59066_59894 = G__59904;
count__59067_59895 = G__59905;
i__59068_59896 = G__59906;
continue;
} else {
var G__59907 = seq__59064_59893;
var G__59908 = chunk__59066_59894;
var G__59909 = count__59067_59895;
var G__59910 = (i__59068_59896 + (1));
seq__59064_59893 = G__59907;
chunk__59066_59894 = G__59908;
count__59067_59895 = G__59909;
i__59068_59896 = G__59910;
continue;
}
} else {
var temp__5720__auto___59911 = cljs.core.seq(seq__59064_59893);
if(temp__5720__auto___59911){
var seq__59064_59912__$1 = temp__5720__auto___59911;
if(cljs.core.chunked_seq_QMARK_(seq__59064_59912__$1)){
var c__4550__auto___59913 = cljs.core.chunk_first(seq__59064_59912__$1);
var G__59914 = cljs.core.chunk_rest(seq__59064_59912__$1);
var G__59915 = c__4550__auto___59913;
var G__59916 = cljs.core.count(c__4550__auto___59913);
var G__59917 = (0);
seq__59064_59893 = G__59914;
chunk__59066_59894 = G__59915;
count__59067_59895 = G__59916;
i__59068_59896 = G__59917;
continue;
} else {
var child_59919 = cljs.core.first(seq__59064_59912__$1);
if(cljs.core.truth_(child_59919)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59919);


var G__59922 = cljs.core.next(seq__59064_59912__$1);
var G__59923 = null;
var G__59924 = (0);
var G__59925 = (0);
seq__59064_59893 = G__59922;
chunk__59066_59894 = G__59923;
count__59067_59895 = G__59924;
i__59068_59896 = G__59925;
continue;
} else {
var G__59926 = cljs.core.next(seq__59064_59912__$1);
var G__59927 = null;
var G__59928 = (0);
var G__59929 = (0);
seq__59064_59893 = G__59926;
chunk__59066_59894 = G__59927;
count__59067_59895 = G__59928;
i__59068_59896 = G__59929;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59892);
}


var G__59930 = seq__59039_59887;
var G__59931 = chunk__59040_59888;
var G__59932 = count__59041_59889;
var G__59933 = (i__59042_59890 + (1));
seq__59039_59887 = G__59930;
chunk__59040_59888 = G__59931;
count__59041_59889 = G__59932;
i__59042_59890 = G__59933;
continue;
} else {
var temp__5720__auto___59936 = cljs.core.seq(seq__59039_59887);
if(temp__5720__auto___59936){
var seq__59039_59937__$1 = temp__5720__auto___59936;
if(cljs.core.chunked_seq_QMARK_(seq__59039_59937__$1)){
var c__4550__auto___59939 = cljs.core.chunk_first(seq__59039_59937__$1);
var G__59940 = cljs.core.chunk_rest(seq__59039_59937__$1);
var G__59941 = c__4550__auto___59939;
var G__59942 = cljs.core.count(c__4550__auto___59939);
var G__59943 = (0);
seq__59039_59887 = G__59940;
chunk__59040_59888 = G__59941;
count__59041_59889 = G__59942;
i__59042_59890 = G__59943;
continue;
} else {
var child_struct_59945 = cljs.core.first(seq__59039_59937__$1);
var children_59946 = shadow.dom.dom_node(child_struct_59945);
if(cljs.core.seq_QMARK_(children_59946)){
var seq__59077_59947 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59946));
var chunk__59079_59948 = null;
var count__59080_59949 = (0);
var i__59081_59950 = (0);
while(true){
if((i__59081_59950 < count__59080_59949)){
var child_59952 = chunk__59079_59948.cljs$core$IIndexed$_nth$arity$2(null,i__59081_59950);
if(cljs.core.truth_(child_59952)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59952);


var G__59955 = seq__59077_59947;
var G__59956 = chunk__59079_59948;
var G__59957 = count__59080_59949;
var G__59958 = (i__59081_59950 + (1));
seq__59077_59947 = G__59955;
chunk__59079_59948 = G__59956;
count__59080_59949 = G__59957;
i__59081_59950 = G__59958;
continue;
} else {
var G__59959 = seq__59077_59947;
var G__59960 = chunk__59079_59948;
var G__59961 = count__59080_59949;
var G__59962 = (i__59081_59950 + (1));
seq__59077_59947 = G__59959;
chunk__59079_59948 = G__59960;
count__59080_59949 = G__59961;
i__59081_59950 = G__59962;
continue;
}
} else {
var temp__5720__auto___59963__$1 = cljs.core.seq(seq__59077_59947);
if(temp__5720__auto___59963__$1){
var seq__59077_59964__$1 = temp__5720__auto___59963__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59077_59964__$1)){
var c__4550__auto___59965 = cljs.core.chunk_first(seq__59077_59964__$1);
var G__59966 = cljs.core.chunk_rest(seq__59077_59964__$1);
var G__59967 = c__4550__auto___59965;
var G__59968 = cljs.core.count(c__4550__auto___59965);
var G__59969 = (0);
seq__59077_59947 = G__59966;
chunk__59079_59948 = G__59967;
count__59080_59949 = G__59968;
i__59081_59950 = G__59969;
continue;
} else {
var child_59970 = cljs.core.first(seq__59077_59964__$1);
if(cljs.core.truth_(child_59970)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59970);


var G__59971 = cljs.core.next(seq__59077_59964__$1);
var G__59972 = null;
var G__59973 = (0);
var G__59974 = (0);
seq__59077_59947 = G__59971;
chunk__59079_59948 = G__59972;
count__59080_59949 = G__59973;
i__59081_59950 = G__59974;
continue;
} else {
var G__59975 = cljs.core.next(seq__59077_59964__$1);
var G__59976 = null;
var G__59977 = (0);
var G__59978 = (0);
seq__59077_59947 = G__59975;
chunk__59079_59948 = G__59976;
count__59080_59949 = G__59977;
i__59081_59950 = G__59978;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59946);
}


var G__59980 = cljs.core.next(seq__59039_59937__$1);
var G__59981 = null;
var G__59982 = (0);
var G__59983 = (0);
seq__59039_59887 = G__59980;
chunk__59040_59888 = G__59981;
count__59041_59889 = G__59982;
i__59042_59890 = G__59983;
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
var seq__59104 = cljs.core.seq(node);
var chunk__59105 = null;
var count__59106 = (0);
var i__59107 = (0);
while(true){
if((i__59107 < count__59106)){
var n = chunk__59105.cljs$core$IIndexed$_nth$arity$2(null,i__59107);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59993 = seq__59104;
var G__59994 = chunk__59105;
var G__59995 = count__59106;
var G__59996 = (i__59107 + (1));
seq__59104 = G__59993;
chunk__59105 = G__59994;
count__59106 = G__59995;
i__59107 = G__59996;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59104);
if(temp__5720__auto__){
var seq__59104__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59104__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59104__$1);
var G__60001 = cljs.core.chunk_rest(seq__59104__$1);
var G__60002 = c__4550__auto__;
var G__60003 = cljs.core.count(c__4550__auto__);
var G__60004 = (0);
seq__59104 = G__60001;
chunk__59105 = G__60002;
count__59106 = G__60003;
i__59107 = G__60004;
continue;
} else {
var n = cljs.core.first(seq__59104__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60007 = cljs.core.next(seq__59104__$1);
var G__60008 = null;
var G__60009 = (0);
var G__60010 = (0);
seq__59104 = G__60007;
chunk__59105 = G__60008;
count__59106 = G__60009;
i__59107 = G__60010;
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
var G__59121 = arguments.length;
switch (G__59121) {
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
var G__59130 = arguments.length;
switch (G__59130) {
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
var G__59146 = arguments.length;
switch (G__59146) {
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
var len__4730__auto___60023 = arguments.length;
var i__4731__auto___60024 = (0);
while(true){
if((i__4731__auto___60024 < len__4730__auto___60023)){
args__4736__auto__.push((arguments[i__4731__auto___60024]));

var G__60025 = (i__4731__auto___60024 + (1));
i__4731__auto___60024 = G__60025;
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
var seq__59157_60026 = cljs.core.seq(nodes);
var chunk__59158_60027 = null;
var count__59159_60028 = (0);
var i__59160_60029 = (0);
while(true){
if((i__59160_60029 < count__59159_60028)){
var node_60034 = chunk__59158_60027.cljs$core$IIndexed$_nth$arity$2(null,i__59160_60029);
fragment.appendChild(shadow.dom._to_dom(node_60034));


var G__60036 = seq__59157_60026;
var G__60037 = chunk__59158_60027;
var G__60038 = count__59159_60028;
var G__60039 = (i__59160_60029 + (1));
seq__59157_60026 = G__60036;
chunk__59158_60027 = G__60037;
count__59159_60028 = G__60038;
i__59160_60029 = G__60039;
continue;
} else {
var temp__5720__auto___60040 = cljs.core.seq(seq__59157_60026);
if(temp__5720__auto___60040){
var seq__59157_60041__$1 = temp__5720__auto___60040;
if(cljs.core.chunked_seq_QMARK_(seq__59157_60041__$1)){
var c__4550__auto___60042 = cljs.core.chunk_first(seq__59157_60041__$1);
var G__60043 = cljs.core.chunk_rest(seq__59157_60041__$1);
var G__60044 = c__4550__auto___60042;
var G__60045 = cljs.core.count(c__4550__auto___60042);
var G__60046 = (0);
seq__59157_60026 = G__60043;
chunk__59158_60027 = G__60044;
count__59159_60028 = G__60045;
i__59160_60029 = G__60046;
continue;
} else {
var node_60047 = cljs.core.first(seq__59157_60041__$1);
fragment.appendChild(shadow.dom._to_dom(node_60047));


var G__60048 = cljs.core.next(seq__59157_60041__$1);
var G__60049 = null;
var G__60050 = (0);
var G__60051 = (0);
seq__59157_60026 = G__60048;
chunk__59158_60027 = G__60049;
count__59159_60028 = G__60050;
i__59160_60029 = G__60051;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq59155){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59155));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__59169_60053 = cljs.core.seq(scripts);
var chunk__59170_60054 = null;
var count__59171_60055 = (0);
var i__59172_60056 = (0);
while(true){
if((i__59172_60056 < count__59171_60055)){
var vec__59183_60060 = chunk__59170_60054.cljs$core$IIndexed$_nth$arity$2(null,i__59172_60056);
var script_tag_60061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59183_60060,(0),null);
var script_body_60062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59183_60060,(1),null);
eval(script_body_60062);


var G__60063 = seq__59169_60053;
var G__60064 = chunk__59170_60054;
var G__60065 = count__59171_60055;
var G__60066 = (i__59172_60056 + (1));
seq__59169_60053 = G__60063;
chunk__59170_60054 = G__60064;
count__59171_60055 = G__60065;
i__59172_60056 = G__60066;
continue;
} else {
var temp__5720__auto___60067 = cljs.core.seq(seq__59169_60053);
if(temp__5720__auto___60067){
var seq__59169_60068__$1 = temp__5720__auto___60067;
if(cljs.core.chunked_seq_QMARK_(seq__59169_60068__$1)){
var c__4550__auto___60069 = cljs.core.chunk_first(seq__59169_60068__$1);
var G__60070 = cljs.core.chunk_rest(seq__59169_60068__$1);
var G__60071 = c__4550__auto___60069;
var G__60072 = cljs.core.count(c__4550__auto___60069);
var G__60073 = (0);
seq__59169_60053 = G__60070;
chunk__59170_60054 = G__60071;
count__59171_60055 = G__60072;
i__59172_60056 = G__60073;
continue;
} else {
var vec__59189_60077 = cljs.core.first(seq__59169_60068__$1);
var script_tag_60078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59189_60077,(0),null);
var script_body_60079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59189_60077,(1),null);
eval(script_body_60079);


var G__60080 = cljs.core.next(seq__59169_60068__$1);
var G__60081 = null;
var G__60082 = (0);
var G__60083 = (0);
seq__59169_60053 = G__60080;
chunk__59170_60054 = G__60081;
count__59171_60055 = G__60082;
i__59172_60056 = G__60083;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__59193){
var vec__59196 = p__59193;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59196,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59196,(1),null);
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
var G__59213 = arguments.length;
switch (G__59213) {
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
var seq__59230 = cljs.core.seq(style_keys);
var chunk__59231 = null;
var count__59232 = (0);
var i__59233 = (0);
while(true){
if((i__59233 < count__59232)){
var it = chunk__59231.cljs$core$IIndexed$_nth$arity$2(null,i__59233);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60092 = seq__59230;
var G__60093 = chunk__59231;
var G__60094 = count__59232;
var G__60095 = (i__59233 + (1));
seq__59230 = G__60092;
chunk__59231 = G__60093;
count__59232 = G__60094;
i__59233 = G__60095;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__59230);
if(temp__5720__auto__){
var seq__59230__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59230__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__59230__$1);
var G__60096 = cljs.core.chunk_rest(seq__59230__$1);
var G__60097 = c__4550__auto__;
var G__60098 = cljs.core.count(c__4550__auto__);
var G__60099 = (0);
seq__59230 = G__60096;
chunk__59231 = G__60097;
count__59232 = G__60098;
i__59233 = G__60099;
continue;
} else {
var it = cljs.core.first(seq__59230__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60101 = cljs.core.next(seq__59230__$1);
var G__60102 = null;
var G__60103 = (0);
var G__60104 = (0);
seq__59230 = G__60101;
chunk__59231 = G__60102;
count__59232 = G__60103;
i__59233 = G__60104;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59246,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59251 = k59246;
var G__59251__$1 = (((G__59251 instanceof cljs.core.Keyword))?G__59251.fqn:null);
switch (G__59251__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59246,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59256){
var vec__59258 = p__59256;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59258,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59245){
var self__ = this;
var G__59245__$1 = this;
return (new cljs.core.RecordIter((0),G__59245__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59247,other59248){
var self__ = this;
var this59247__$1 = this;
return (((!((other59248 == null)))) && ((this59247__$1.constructor === other59248.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59247__$1.x,other59248.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59247__$1.y,other59248.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59247__$1.__extmap,other59248.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59245){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59284 = cljs.core.keyword_identical_QMARK_;
var expr__59285 = k__4393__auto__;
if(cljs.core.truth_((pred__59284.cljs$core$IFn$_invoke$arity$2 ? pred__59284.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__59285) : pred__59284.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__59285)))){
return (new shadow.dom.Coordinate(G__59245,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59284.cljs$core$IFn$_invoke$arity$2 ? pred__59284.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__59285) : pred__59284.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__59285)))){
return (new shadow.dom.Coordinate(self__.x,G__59245,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59245),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59245){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__59245,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__59249){
var extmap__4424__auto__ = (function (){var G__59323 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59249,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__59249)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59323);
} else {
return G__59323;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__59249),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__59249),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k59346,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__59366 = k59346;
var G__59366__$1 = (((G__59366 instanceof cljs.core.Keyword))?G__59366.fqn:null);
switch (G__59366__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59346,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__59368){
var vec__59369 = p__59368;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59369,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59345){
var self__ = this;
var G__59345__$1 = this;
return (new cljs.core.RecordIter((0),G__59345__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59347,other59348){
var self__ = this;
var this59347__$1 = this;
return (((!((other59348 == null)))) && ((this59347__$1.constructor === other59348.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59347__$1.w,other59348.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59347__$1.h,other59348.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59347__$1.__extmap,other59348.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__59345){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__59416 = cljs.core.keyword_identical_QMARK_;
var expr__59417 = k__4393__auto__;
if(cljs.core.truth_((pred__59416.cljs$core$IFn$_invoke$arity$2 ? pred__59416.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__59417) : pred__59416.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__59417)))){
return (new shadow.dom.Size(G__59345,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59416.cljs$core$IFn$_invoke$arity$2 ? pred__59416.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__59417) : pred__59416.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__59417)))){
return (new shadow.dom.Size(self__.w,G__59345,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__59345),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__59345){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__59345,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__59350){
var extmap__4424__auto__ = (function (){var G__59426 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59350,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__59350)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59426);
} else {
return G__59426;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__59350),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__59350),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__60273 = (i + (1));
var G__60274 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60273;
ret = G__60274;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__59450){
var vec__59452 = p__59450;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59452,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__59459 = arguments.length;
switch (G__59459) {
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
var G__60324 = ps;
var G__60325 = (i + (1));
el__$1 = G__60324;
i = G__60325;
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
var vec__59487 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59487,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59487,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59487,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__59492_60336 = cljs.core.seq(props);
var chunk__59493_60337 = null;
var count__59494_60338 = (0);
var i__59495_60339 = (0);
while(true){
if((i__59495_60339 < count__59494_60338)){
var vec__59507_60340 = chunk__59493_60337.cljs$core$IIndexed$_nth$arity$2(null,i__59495_60339);
var k_60341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59507_60340,(0),null);
var v_60342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59507_60340,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_60341);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60341),v_60342);


var G__60348 = seq__59492_60336;
var G__60349 = chunk__59493_60337;
var G__60350 = count__59494_60338;
var G__60351 = (i__59495_60339 + (1));
seq__59492_60336 = G__60348;
chunk__59493_60337 = G__60349;
count__59494_60338 = G__60350;
i__59495_60339 = G__60351;
continue;
} else {
var temp__5720__auto___60353 = cljs.core.seq(seq__59492_60336);
if(temp__5720__auto___60353){
var seq__59492_60354__$1 = temp__5720__auto___60353;
if(cljs.core.chunked_seq_QMARK_(seq__59492_60354__$1)){
var c__4550__auto___60355 = cljs.core.chunk_first(seq__59492_60354__$1);
var G__60357 = cljs.core.chunk_rest(seq__59492_60354__$1);
var G__60358 = c__4550__auto___60355;
var G__60359 = cljs.core.count(c__4550__auto___60355);
var G__60360 = (0);
seq__59492_60336 = G__60357;
chunk__59493_60337 = G__60358;
count__59494_60338 = G__60359;
i__59495_60339 = G__60360;
continue;
} else {
var vec__59517_60361 = cljs.core.first(seq__59492_60354__$1);
var k_60362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59517_60361,(0),null);
var v_60363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59517_60361,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_60362);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60362),v_60363);


var G__60365 = cljs.core.next(seq__59492_60354__$1);
var G__60366 = null;
var G__60367 = (0);
var G__60368 = (0);
seq__59492_60336 = G__60365;
chunk__59493_60337 = G__60366;
count__59494_60338 = G__60367;
i__59495_60339 = G__60368;
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
var vec__59528 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59528,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59528,(1),null);
var seq__59531_60378 = cljs.core.seq(node_children);
var chunk__59533_60379 = null;
var count__59534_60380 = (0);
var i__59535_60381 = (0);
while(true){
if((i__59535_60381 < count__59534_60380)){
var child_struct_60382 = chunk__59533_60379.cljs$core$IIndexed$_nth$arity$2(null,i__59535_60381);
if((!((child_struct_60382 == null)))){
if(typeof child_struct_60382 === 'string'){
var text_60383 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60383),child_struct_60382].join(''));
} else {
var children_60384 = shadow.dom.svg_node(child_struct_60382);
if(cljs.core.seq_QMARK_(children_60384)){
var seq__59599_60385 = cljs.core.seq(children_60384);
var chunk__59601_60386 = null;
var count__59602_60387 = (0);
var i__59603_60388 = (0);
while(true){
if((i__59603_60388 < count__59602_60387)){
var child_60390 = chunk__59601_60386.cljs$core$IIndexed$_nth$arity$2(null,i__59603_60388);
if(cljs.core.truth_(child_60390)){
node.appendChild(child_60390);


var G__60392 = seq__59599_60385;
var G__60393 = chunk__59601_60386;
var G__60394 = count__59602_60387;
var G__60395 = (i__59603_60388 + (1));
seq__59599_60385 = G__60392;
chunk__59601_60386 = G__60393;
count__59602_60387 = G__60394;
i__59603_60388 = G__60395;
continue;
} else {
var G__60397 = seq__59599_60385;
var G__60398 = chunk__59601_60386;
var G__60399 = count__59602_60387;
var G__60400 = (i__59603_60388 + (1));
seq__59599_60385 = G__60397;
chunk__59601_60386 = G__60398;
count__59602_60387 = G__60399;
i__59603_60388 = G__60400;
continue;
}
} else {
var temp__5720__auto___60401 = cljs.core.seq(seq__59599_60385);
if(temp__5720__auto___60401){
var seq__59599_60403__$1 = temp__5720__auto___60401;
if(cljs.core.chunked_seq_QMARK_(seq__59599_60403__$1)){
var c__4550__auto___60404 = cljs.core.chunk_first(seq__59599_60403__$1);
var G__60406 = cljs.core.chunk_rest(seq__59599_60403__$1);
var G__60407 = c__4550__auto___60404;
var G__60408 = cljs.core.count(c__4550__auto___60404);
var G__60409 = (0);
seq__59599_60385 = G__60406;
chunk__59601_60386 = G__60407;
count__59602_60387 = G__60408;
i__59603_60388 = G__60409;
continue;
} else {
var child_60415 = cljs.core.first(seq__59599_60403__$1);
if(cljs.core.truth_(child_60415)){
node.appendChild(child_60415);


var G__60417 = cljs.core.next(seq__59599_60403__$1);
var G__60418 = null;
var G__60419 = (0);
var G__60420 = (0);
seq__59599_60385 = G__60417;
chunk__59601_60386 = G__60418;
count__59602_60387 = G__60419;
i__59603_60388 = G__60420;
continue;
} else {
var G__60421 = cljs.core.next(seq__59599_60403__$1);
var G__60422 = null;
var G__60423 = (0);
var G__60424 = (0);
seq__59599_60385 = G__60421;
chunk__59601_60386 = G__60422;
count__59602_60387 = G__60423;
i__59603_60388 = G__60424;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60384);
}
}


var G__60425 = seq__59531_60378;
var G__60426 = chunk__59533_60379;
var G__60427 = count__59534_60380;
var G__60428 = (i__59535_60381 + (1));
seq__59531_60378 = G__60425;
chunk__59533_60379 = G__60426;
count__59534_60380 = G__60427;
i__59535_60381 = G__60428;
continue;
} else {
var G__60429 = seq__59531_60378;
var G__60430 = chunk__59533_60379;
var G__60431 = count__59534_60380;
var G__60432 = (i__59535_60381 + (1));
seq__59531_60378 = G__60429;
chunk__59533_60379 = G__60430;
count__59534_60380 = G__60431;
i__59535_60381 = G__60432;
continue;
}
} else {
var temp__5720__auto___60433 = cljs.core.seq(seq__59531_60378);
if(temp__5720__auto___60433){
var seq__59531_60434__$1 = temp__5720__auto___60433;
if(cljs.core.chunked_seq_QMARK_(seq__59531_60434__$1)){
var c__4550__auto___60435 = cljs.core.chunk_first(seq__59531_60434__$1);
var G__60436 = cljs.core.chunk_rest(seq__59531_60434__$1);
var G__60437 = c__4550__auto___60435;
var G__60438 = cljs.core.count(c__4550__auto___60435);
var G__60439 = (0);
seq__59531_60378 = G__60436;
chunk__59533_60379 = G__60437;
count__59534_60380 = G__60438;
i__59535_60381 = G__60439;
continue;
} else {
var child_struct_60441 = cljs.core.first(seq__59531_60434__$1);
if((!((child_struct_60441 == null)))){
if(typeof child_struct_60441 === 'string'){
var text_60442 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60442),child_struct_60441].join(''));
} else {
var children_60443 = shadow.dom.svg_node(child_struct_60441);
if(cljs.core.seq_QMARK_(children_60443)){
var seq__59613_60444 = cljs.core.seq(children_60443);
var chunk__59615_60445 = null;
var count__59616_60446 = (0);
var i__59617_60447 = (0);
while(true){
if((i__59617_60447 < count__59616_60446)){
var child_60450 = chunk__59615_60445.cljs$core$IIndexed$_nth$arity$2(null,i__59617_60447);
if(cljs.core.truth_(child_60450)){
node.appendChild(child_60450);


var G__60455 = seq__59613_60444;
var G__60456 = chunk__59615_60445;
var G__60457 = count__59616_60446;
var G__60458 = (i__59617_60447 + (1));
seq__59613_60444 = G__60455;
chunk__59615_60445 = G__60456;
count__59616_60446 = G__60457;
i__59617_60447 = G__60458;
continue;
} else {
var G__60462 = seq__59613_60444;
var G__60463 = chunk__59615_60445;
var G__60464 = count__59616_60446;
var G__60465 = (i__59617_60447 + (1));
seq__59613_60444 = G__60462;
chunk__59615_60445 = G__60463;
count__59616_60446 = G__60464;
i__59617_60447 = G__60465;
continue;
}
} else {
var temp__5720__auto___60466__$1 = cljs.core.seq(seq__59613_60444);
if(temp__5720__auto___60466__$1){
var seq__59613_60472__$1 = temp__5720__auto___60466__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59613_60472__$1)){
var c__4550__auto___60473 = cljs.core.chunk_first(seq__59613_60472__$1);
var G__60474 = cljs.core.chunk_rest(seq__59613_60472__$1);
var G__60475 = c__4550__auto___60473;
var G__60476 = cljs.core.count(c__4550__auto___60473);
var G__60477 = (0);
seq__59613_60444 = G__60474;
chunk__59615_60445 = G__60475;
count__59616_60446 = G__60476;
i__59617_60447 = G__60477;
continue;
} else {
var child_60478 = cljs.core.first(seq__59613_60472__$1);
if(cljs.core.truth_(child_60478)){
node.appendChild(child_60478);


var G__60479 = cljs.core.next(seq__59613_60472__$1);
var G__60480 = null;
var G__60481 = (0);
var G__60482 = (0);
seq__59613_60444 = G__60479;
chunk__59615_60445 = G__60480;
count__59616_60446 = G__60481;
i__59617_60447 = G__60482;
continue;
} else {
var G__60483 = cljs.core.next(seq__59613_60472__$1);
var G__60484 = null;
var G__60485 = (0);
var G__60486 = (0);
seq__59613_60444 = G__60483;
chunk__59615_60445 = G__60484;
count__59616_60446 = G__60485;
i__59617_60447 = G__60486;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60443);
}
}


var G__60490 = cljs.core.next(seq__59531_60434__$1);
var G__60491 = null;
var G__60492 = (0);
var G__60493 = (0);
seq__59531_60378 = G__60490;
chunk__59533_60379 = G__60491;
count__59534_60380 = G__60492;
i__59535_60381 = G__60493;
continue;
} else {
var G__60495 = cljs.core.next(seq__59531_60434__$1);
var G__60496 = null;
var G__60497 = (0);
var G__60498 = (0);
seq__59531_60378 = G__60495;
chunk__59533_60379 = G__60496;
count__59534_60380 = G__60497;
i__59535_60381 = G__60498;
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
var len__4730__auto___60509 = arguments.length;
var i__4731__auto___60510 = (0);
while(true){
if((i__4731__auto___60510 < len__4730__auto___60509)){
args__4736__auto__.push((arguments[i__4731__auto___60510]));

var G__60511 = (i__4731__auto___60510 + (1));
i__4731__auto___60510 = G__60511;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq59652){
var G__59653 = cljs.core.first(seq59652);
var seq59652__$1 = cljs.core.next(seq59652);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59653,seq59652__$1);
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
var G__59670 = arguments.length;
switch (G__59670) {
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
var c__45808__auto___60530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__45808__auto___60530,buf,chan,event_fn){
return (function (){
var f__45809__auto__ = (function (){var switch__45525__auto__ = ((function (c__45808__auto___60530,buf,chan,event_fn){
return (function (state_59682){
var state_val_59683 = (state_59682[(1)]);
if((state_val_59683 === (1))){
var state_59682__$1 = state_59682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59682__$1,(2),once_or_cleanup);
} else {
if((state_val_59683 === (2))){
var inst_59679 = (state_59682[(2)]);
var inst_59680 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_59682__$1 = (function (){var statearr_59689 = state_59682;
(statearr_59689[(7)] = inst_59679);

return statearr_59689;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59682__$1,inst_59680);
} else {
return null;
}
}
});})(c__45808__auto___60530,buf,chan,event_fn))
;
return ((function (switch__45525__auto__,c__45808__auto___60530,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__45526__auto__ = null;
var shadow$dom$state_machine__45526__auto____0 = (function (){
var statearr_59690 = [null,null,null,null,null,null,null,null];
(statearr_59690[(0)] = shadow$dom$state_machine__45526__auto__);

(statearr_59690[(1)] = (1));

return statearr_59690;
});
var shadow$dom$state_machine__45526__auto____1 = (function (state_59682){
while(true){
var ret_value__45527__auto__ = (function (){try{while(true){
var result__45528__auto__ = switch__45525__auto__(state_59682);
if(cljs.core.keyword_identical_QMARK_(result__45528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45528__auto__;
}
break;
}
}catch (e59692){if((e59692 instanceof Object)){
var ex__45529__auto__ = e59692;
var statearr_59693_60552 = state_59682;
(statearr_59693_60552[(5)] = ex__45529__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_59682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59692;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45527__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60554 = state_59682;
state_59682 = G__60554;
continue;
} else {
return ret_value__45527__auto__;
}
break;
}
});
shadow$dom$state_machine__45526__auto__ = function(state_59682){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45526__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45526__auto____1.call(this,state_59682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45526__auto____0;
shadow$dom$state_machine__45526__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45526__auto____1;
return shadow$dom$state_machine__45526__auto__;
})()
;})(switch__45525__auto__,c__45808__auto___60530,buf,chan,event_fn))
})();
var state__45810__auto__ = (function (){var statearr_59715 = f__45809__auto__();
(statearr_59715[(6)] = c__45808__auto___60530);

return statearr_59715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45810__auto__);
});})(c__45808__auto___60530,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
