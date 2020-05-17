goog.provide('fulcro.client.localized_dom');
goog.require('cljs.core');
goog.require('fulcro.client.dom');
goog.require('fulcro.util');
goog.require('fulcro.client.localized_dom_common');





































































































































































































fulcro.client.localized_dom.node = fulcro.client.dom.node;
fulcro.client.localized_dom.render_to_str = fulcro.client.dom.render_to_str;
fulcro.client.localized_dom.create_element = fulcro.client.dom.create_element;
var arr_append_STAR_ = (function fulcro$client$localized_dom$arr_append_STAR_(arr,x){
arr.push(x);

return arr;
});
var arr_append = (function fulcro$client$localized_dom$arr_append(arr,tail){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(arr_append_STAR_,arr,fulcro.util.force_children(tail));
});
fulcro.client.localized_dom.macro_create_element = (function fulcro$client$localized_dom$macro_create_element(var_args){
var G__66076 = arguments.length;
switch (G__66076) {
case 2:
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,args){
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3(type,args,null);
});

fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,args,csskw){
var vec__66085 = args;
var seq__66086 = cljs.core.seq(vec__66085);
var first__66087 = cljs.core.first(seq__66086);
var seq__66086__$1 = cljs.core.next(seq__66086);
var head = first__66087;
var tail = seq__66086__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__66092 = (function (){var G__66094 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__66094,tail);

return G__66094;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66092) : f.call(null,G__66092));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__66097 = (function (){var G__66099 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__66099,args);

return G__66099;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66097) : f.call(null,G__66097));
} else {
if(cljs.core.object_QMARK_(head)){
var G__66101 = (function (){var G__66102 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__66102,tail);

return G__66102;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66101) : f.call(null,G__66101));
} else {
if(cljs.core.map_QMARK_(head)){
var G__66103 = (function (){var G__66104 = [type,cljs.core.clj__GT_js(fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__66104,tail);

return G__66104;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66103) : f.call(null,G__66103));
} else {
var G__66108 = (function (){var G__66110 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__66110,args);

return G__66110;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66108) : f.call(null,G__66108));

}
}
}
}
});

fulcro.client.localized_dom.macro_create_element.cljs$lang$maxFixedArity = 3;

/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (form "hello")
 * (form nil "hello")
 * 
 * These two are made equivalent at compile time
 * (form {:onClick f} "hello")
 * (form #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (form :#the-id.klass.other-klass "hello")
 * (form :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.form = (function fulcro$client$localized_dom$form(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70261 = arguments.length;
var i__4731__auto___70262 = (0);
while(true){
if((i__4731__auto___70262 < len__4730__auto___70261)){
args__4736__auto__.push((arguments[i__4731__auto___70262]));

var G__70264 = (i__4731__auto___70262 + (1));
i__4731__auto___70262 = G__70264;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66136 = conformed_args__58615__auto__;
var map__66136__$1 = (((((!((map__66136 == null))))?(((((map__66136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66136):map__66136);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66136__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66136__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66136__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.form.cljs$lang$applyTo = (function (seq66130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66130));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (audio "hello")
 * (audio nil "hello")
 * 
 * These two are made equivalent at compile time
 * (audio {:onClick f} "hello")
 * (audio #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (audio :#the-id.klass.other-klass "hello")
 * (audio :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.audio = (function fulcro$client$localized_dom$audio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70285 = arguments.length;
var i__4731__auto___70286 = (0);
while(true){
if((i__4731__auto___70286 < len__4730__auto___70285)){
args__4736__auto__.push((arguments[i__4731__auto___70286]));

var G__70287 = (i__4731__auto___70286 + (1));
i__4731__auto___70286 = G__70287;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66158 = conformed_args__58615__auto__;
var map__66158__$1 = (((((!((map__66158 == null))))?(((((map__66158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66158):map__66158);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.audio.cljs$lang$applyTo = (function (seq66153){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66153));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (input "hello")
 * (input nil "hello")
 * 
 * These two are made equivalent at compile time
 * (input {:onClick f} "hello")
 * (input #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (input :#the-id.klass.other-klass "hello")
 * (input :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.input = (function fulcro$client$localized_dom$input(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70296 = arguments.length;
var i__4731__auto___70297 = (0);
while(true){
if((i__4731__auto___70297 < len__4730__auto___70296)){
args__4736__auto__.push((arguments[i__4731__auto___70297]));

var G__70298 = (i__4731__auto___70297 + (1));
i__4731__auto___70297 = G__70298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66170 = conformed_args__58615__auto__;
var map__66170__$1 = (((((!((map__66170 == null))))?(((((map__66170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66170):map__66170);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66170__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66170__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66170__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.input.cljs$lang$applyTo = (function (seq66162){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66162));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menuitem "hello")
 * (menuitem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menuitem {:onClick f} "hello")
 * (menuitem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menuitem :#the-id.klass.other-klass "hello")
 * (menuitem :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.menuitem = (function fulcro$client$localized_dom$menuitem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70307 = arguments.length;
var i__4731__auto___70309 = (0);
while(true){
if((i__4731__auto___70309 < len__4730__auto___70307)){
args__4736__auto__.push((arguments[i__4731__auto___70309]));

var G__70310 = (i__4731__auto___70309 + (1));
i__4731__auto___70309 = G__70310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66189 = conformed_args__58615__auto__;
var map__66189__$1 = (((((!((map__66189 == null))))?(((((map__66189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66189):map__66189);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66189__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menuitem.cljs$lang$applyTo = (function (seq66181){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66181));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (radialGradient "hello")
 * (radialGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (radialGradient {:onClick f} "hello")
 * (radialGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (radialGradient :#the-id.klass.other-klass "hello")
 * (radialGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.radialGradient = (function fulcro$client$localized_dom$radialGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70316 = arguments.length;
var i__4731__auto___70317 = (0);
while(true){
if((i__4731__auto___70317 < len__4730__auto___70316)){
args__4736__auto__.push((arguments[i__4731__auto___70317]));

var G__70318 = (i__4731__auto___70317 + (1));
i__4731__auto___70317 = G__70318;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66196 = conformed_args__58615__auto__;
var map__66196__$1 = (((((!((map__66196 == null))))?(((((map__66196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66196):map__66196);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq66195){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66195));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMerge "hello")
 * (feMerge nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMerge {:onClick f} "hello")
 * (feMerge #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMerge :#the-id.klass.other-klass "hello")
 * (feMerge :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feMerge = (function fulcro$client$localized_dom$feMerge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70322 = arguments.length;
var i__4731__auto___70325 = (0);
while(true){
if((i__4731__auto___70325 < len__4730__auto___70322)){
args__4736__auto__.push((arguments[i__4731__auto___70325]));

var G__70327 = (i__4731__auto___70325 + (1));
i__4731__auto___70325 = G__70327;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66206 = conformed_args__58615__auto__;
var map__66206__$1 = (((((!((map__66206 == null))))?(((((map__66206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66206):map__66206);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66206__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66206__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMerge.cljs$lang$applyTo = (function (seq66200){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66200));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (set "hello")
 * (set nil "hello")
 * 
 * These two are made equivalent at compile time
 * (set {:onClick f} "hello")
 * (set #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (set :#the-id.klass.other-klass "hello")
 * (set :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.set = (function fulcro$client$localized_dom$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70333 = arguments.length;
var i__4731__auto___70334 = (0);
while(true){
if((i__4731__auto___70334 < len__4730__auto___70333)){
args__4736__auto__.push((arguments[i__4731__auto___70334]));

var G__70335 = (i__4731__auto___70334 + (1));
i__4731__auto___70334 = G__70335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66213 = conformed_args__58615__auto__;
var map__66213__$1 = (((((!((map__66213 == null))))?(((((map__66213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66213):map__66213);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.set.cljs$lang$applyTo = (function (seq66212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66212));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting "hello")
 * (feSpecularLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpecularLighting {:onClick f} "hello")
 * (feSpecularLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpecularLighting :#the-id.klass.other-klass "hello")
 * (feSpecularLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feSpecularLighting = (function fulcro$client$localized_dom$feSpecularLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70343 = arguments.length;
var i__4731__auto___70344 = (0);
while(true){
if((i__4731__auto___70344 < len__4730__auto___70343)){
args__4736__auto__.push((arguments[i__4731__auto___70344]));

var G__70349 = (i__4731__auto___70344 + (1));
i__4731__auto___70344 = G__70349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66222 = conformed_args__58615__auto__;
var map__66222__$1 = (((((!((map__66222 == null))))?(((((map__66222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66222):map__66222);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpecularLighting.cljs$lang$applyTo = (function (seq66217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66217));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (base "hello")
 * (base nil "hello")
 * 
 * These two are made equivalent at compile time
 * (base {:onClick f} "hello")
 * (base #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (base :#the-id.klass.other-klass "hello")
 * (base :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.base = (function fulcro$client$localized_dom$base(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70356 = arguments.length;
var i__4731__auto___70360 = (0);
while(true){
if((i__4731__auto___70360 < len__4730__auto___70356)){
args__4736__auto__.push((arguments[i__4731__auto___70360]));

var G__70361 = (i__4731__auto___70360 + (1));
i__4731__auto___70360 = G__70361;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66232 = conformed_args__58615__auto__;
var map__66232__$1 = (((((!((map__66232 == null))))?(((((map__66232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66232):map__66232);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.base.cljs$lang$applyTo = (function (seq66226){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66226));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h1 "hello")
 * (h1 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h1 {:onClick f} "hello")
 * (h1 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h1 :#the-id.klass.other-klass "hello")
 * (h1 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.h1 = (function fulcro$client$localized_dom$h1(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70367 = arguments.length;
var i__4731__auto___70368 = (0);
while(true){
if((i__4731__auto___70368 < len__4730__auto___70367)){
args__4736__auto__.push((arguments[i__4731__auto___70368]));

var G__70369 = (i__4731__auto___70368 + (1));
i__4731__auto___70368 = G__70369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66249 = conformed_args__58615__auto__;
var map__66249__$1 = (((((!((map__66249 == null))))?(((((map__66249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66249):map__66249);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66249__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h1.cljs$lang$applyTo = (function (seq66245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66245));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feOffset "hello")
 * (feOffset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feOffset {:onClick f} "hello")
 * (feOffset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feOffset :#the-id.klass.other-klass "hello")
 * (feOffset :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feOffset = (function fulcro$client$localized_dom$feOffset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70389 = arguments.length;
var i__4731__auto___70390 = (0);
while(true){
if((i__4731__auto___70390 < len__4730__auto___70389)){
args__4736__auto__.push((arguments[i__4731__auto___70390]));

var G__70407 = (i__4731__auto___70390 + (1));
i__4731__auto___70390 = G__70407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66272 = conformed_args__58615__auto__;
var map__66272__$1 = (((((!((map__66272 == null))))?(((((map__66272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66272):map__66272);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66272__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66272__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66272__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feOffset.cljs$lang$applyTo = (function (seq66264){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66264));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (embed "hello")
 * (embed nil "hello")
 * 
 * These two are made equivalent at compile time
 * (embed {:onClick f} "hello")
 * (embed #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (embed :#the-id.klass.other-klass "hello")
 * (embed :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.embed = (function fulcro$client$localized_dom$embed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70419 = arguments.length;
var i__4731__auto___70420 = (0);
while(true){
if((i__4731__auto___70420 < len__4730__auto___70419)){
args__4736__auto__.push((arguments[i__4731__auto___70420]));

var G__70422 = (i__4731__auto___70420 + (1));
i__4731__auto___70420 = G__70422;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66286 = conformed_args__58615__auto__;
var map__66286__$1 = (((((!((map__66286 == null))))?(((((map__66286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66286):map__66286);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66286__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66286__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66286__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.embed.cljs$lang$applyTo = (function (seq66284){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66284));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateMotion "hello")
 * (animateMotion nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateMotion {:onClick f} "hello")
 * (animateMotion #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateMotion :#the-id.klass.other-klass "hello")
 * (animateMotion :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.animateMotion = (function fulcro$client$localized_dom$animateMotion(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70432 = arguments.length;
var i__4731__auto___70433 = (0);
while(true){
if((i__4731__auto___70433 < len__4730__auto___70432)){
args__4736__auto__.push((arguments[i__4731__auto___70433]));

var G__70435 = (i__4731__auto___70433 + (1));
i__4731__auto___70433 = G__70435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66322 = conformed_args__58615__auto__;
var map__66322__$1 = (((((!((map__66322 == null))))?(((((map__66322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66322):map__66322);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateMotion.cljs$lang$applyTo = (function (seq66316){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66316));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h3 "hello")
 * (h3 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h3 {:onClick f} "hello")
 * (h3 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h3 :#the-id.klass.other-klass "hello")
 * (h3 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.h3 = (function fulcro$client$localized_dom$h3(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70440 = arguments.length;
var i__4731__auto___70442 = (0);
while(true){
if((i__4731__auto___70442 < len__4730__auto___70440)){
args__4736__auto__.push((arguments[i__4731__auto___70442]));

var G__70443 = (i__4731__auto___70442 + (1));
i__4731__auto___70442 = G__70443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66335 = conformed_args__58615__auto__;
var map__66335__$1 = (((((!((map__66335 == null))))?(((((map__66335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66335):map__66335);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h3.cljs$lang$applyTo = (function (seq66333){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66333));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (body "hello")
 * (body nil "hello")
 * 
 * These two are made equivalent at compile time
 * (body {:onClick f} "hello")
 * (body #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (body :#the-id.klass.other-klass "hello")
 * (body :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.body = (function fulcro$client$localized_dom$body(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70446 = arguments.length;
var i__4731__auto___70447 = (0);
while(true){
if((i__4731__auto___70447 < len__4730__auto___70446)){
args__4736__auto__.push((arguments[i__4731__auto___70447]));

var G__70448 = (i__4731__auto___70447 + (1));
i__4731__auto___70447 = G__70448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66346 = conformed_args__58615__auto__;
var map__66346__$1 = (((((!((map__66346 == null))))?(((((map__66346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66346):map__66346);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.body.cljs$lang$applyTo = (function (seq66340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hkern "hello")
 * (hkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hkern {:onClick f} "hello")
 * (hkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hkern :#the-id.klass.other-klass "hello")
 * (hkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.hkern = (function fulcro$client$localized_dom$hkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70454 = arguments.length;
var i__4731__auto___70455 = (0);
while(true){
if((i__4731__auto___70455 < len__4730__auto___70454)){
args__4736__auto__.push((arguments[i__4731__auto___70455]));

var G__70456 = (i__4731__auto___70455 + (1));
i__4731__auto___70455 = G__70456;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66358 = conformed_args__58615__auto__;
var map__66358__$1 = (((((!((map__66358 == null))))?(((((map__66358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66358):map__66358);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66358__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66358__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hkern.cljs$lang$applyTo = (function (seq66357){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66357));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (keygen "hello")
 * (keygen nil "hello")
 * 
 * These two are made equivalent at compile time
 * (keygen {:onClick f} "hello")
 * (keygen #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (keygen :#the-id.klass.other-klass "hello")
 * (keygen :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.keygen = (function fulcro$client$localized_dom$keygen(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70459 = arguments.length;
var i__4731__auto___70460 = (0);
while(true){
if((i__4731__auto___70460 < len__4730__auto___70459)){
args__4736__auto__.push((arguments[i__4731__auto___70460]));

var G__70461 = (i__4731__auto___70460 + (1));
i__4731__auto___70460 = G__70461;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66367 = conformed_args__58615__auto__;
var map__66367__$1 = (((((!((map__66367 == null))))?(((((map__66367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66367):map__66367);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66367__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66367__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66367__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.keygen.cljs$lang$applyTo = (function (seq66362){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66362));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-format "hello")
 * (font-face-format nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-format {:onClick f} "hello")
 * (font-face-format #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-format :#the-id.klass.other-klass "hello")
 * (font-face-format :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.font_face_format = (function fulcro$client$localized_dom$font_face_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70473 = arguments.length;
var i__4731__auto___70474 = (0);
while(true){
if((i__4731__auto___70474 < len__4730__auto___70473)){
args__4736__auto__.push((arguments[i__4731__auto___70474]));

var G__70475 = (i__4731__auto___70474 + (1));
i__4731__auto___70474 = G__70475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66382 = conformed_args__58615__auto__;
var map__66382__$1 = (((((!((map__66382 == null))))?(((((map__66382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66382):map__66382);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_format.cljs$lang$applyTo = (function (seq66377){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66377));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncA "hello")
 * (feFuncA nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncA {:onClick f} "hello")
 * (feFuncA #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncA :#the-id.klass.other-klass "hello")
 * (feFuncA :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feFuncA = (function fulcro$client$localized_dom$feFuncA(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70480 = arguments.length;
var i__4731__auto___70481 = (0);
while(true){
if((i__4731__auto___70481 < len__4730__auto___70480)){
args__4736__auto__.push((arguments[i__4731__auto___70481]));

var G__70482 = (i__4731__auto___70481 + (1));
i__4731__auto___70481 = G__70482;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66394 = conformed_args__58615__auto__;
var map__66394__$1 = (((((!((map__66394 == null))))?(((((map__66394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66394):map__66394);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncA.cljs$lang$applyTo = (function (seq66392){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66392));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (progress "hello")
 * (progress nil "hello")
 * 
 * These two are made equivalent at compile time
 * (progress {:onClick f} "hello")
 * (progress #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (progress :#the-id.klass.other-klass "hello")
 * (progress :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.progress = (function fulcro$client$localized_dom$progress(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70491 = arguments.length;
var i__4731__auto___70492 = (0);
while(true){
if((i__4731__auto___70492 < len__4730__auto___70491)){
args__4736__auto__.push((arguments[i__4731__auto___70492]));

var G__70493 = (i__4731__auto___70492 + (1));
i__4731__auto___70492 = G__70493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66418 = conformed_args__58615__auto__;
var map__66418__$1 = (((((!((map__66418 == null))))?(((((map__66418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66418):map__66418);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66418__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66418__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66418__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.progress.cljs$lang$applyTo = (function (seq66411){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66411));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (main "hello")
 * (main nil "hello")
 * 
 * These two are made equivalent at compile time
 * (main {:onClick f} "hello")
 * (main #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (main :#the-id.klass.other-klass "hello")
 * (main :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.main = (function fulcro$client$localized_dom$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70504 = arguments.length;
var i__4731__auto___70505 = (0);
while(true){
if((i__4731__auto___70505 < len__4730__auto___70504)){
args__4736__auto__.push((arguments[i__4731__auto___70505]));

var G__70506 = (i__4731__auto___70505 + (1));
i__4731__auto___70505 = G__70506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66428 = conformed_args__58615__auto__;
var map__66428__$1 = (((((!((map__66428 == null))))?(((((map__66428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66428):map__66428);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66428__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66428__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66428__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.main.cljs$lang$applyTo = (function (seq66426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66426));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cite "hello")
 * (cite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cite {:onClick f} "hello")
 * (cite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cite :#the-id.klass.other-klass "hello")
 * (cite :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.cite = (function fulcro$client$localized_dom$cite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70513 = arguments.length;
var i__4731__auto___70515 = (0);
while(true){
if((i__4731__auto___70515 < len__4730__auto___70513)){
args__4736__auto__.push((arguments[i__4731__auto___70515]));

var G__70517 = (i__4731__auto___70515 + (1));
i__4731__auto___70515 = G__70517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66445 = conformed_args__58615__auto__;
var map__66445__$1 = (((((!((map__66445 == null))))?(((((map__66445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66445):map__66445);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66445__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66445__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66445__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cite.cljs$lang$applyTo = (function (seq66438){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66438));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rect "hello")
 * (rect nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rect {:onClick f} "hello")
 * (rect #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rect :#the-id.klass.other-klass "hello")
 * (rect :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.rect = (function fulcro$client$localized_dom$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70523 = arguments.length;
var i__4731__auto___70524 = (0);
while(true){
if((i__4731__auto___70524 < len__4730__auto___70523)){
args__4736__auto__.push((arguments[i__4731__auto___70524]));

var G__70529 = (i__4731__auto___70524 + (1));
i__4731__auto___70524 = G__70529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66452 = conformed_args__58615__auto__;
var map__66452__$1 = (((((!((map__66452 == null))))?(((((map__66452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66452):map__66452);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rect.cljs$lang$applyTo = (function (seq66448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66448));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tref "hello")
 * (tref nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tref {:onClick f} "hello")
 * (tref #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tref :#the-id.klass.other-klass "hello")
 * (tref :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.tref = (function fulcro$client$localized_dom$tref(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70539 = arguments.length;
var i__4731__auto___70540 = (0);
while(true){
if((i__4731__auto___70540 < len__4730__auto___70539)){
args__4736__auto__.push((arguments[i__4731__auto___70540]));

var G__70541 = (i__4731__auto___70540 + (1));
i__4731__auto___70540 = G__70541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66465 = conformed_args__58615__auto__;
var map__66465__$1 = (((((!((map__66465 == null))))?(((((map__66465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66465):map__66465);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66465__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66465__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66465__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tref.cljs$lang$applyTo = (function (seq66460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66460));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshpatch "hello")
 * (meshpatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshpatch {:onClick f} "hello")
 * (meshpatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshpatch :#the-id.klass.other-klass "hello")
 * (meshpatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.meshpatch = (function fulcro$client$localized_dom$meshpatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70550 = arguments.length;
var i__4731__auto___70551 = (0);
while(true){
if((i__4731__auto___70551 < len__4730__auto___70550)){
args__4736__auto__.push((arguments[i__4731__auto___70551]));

var G__70552 = (i__4731__auto___70551 + (1));
i__4731__auto___70551 = G__70552;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66476 = conformed_args__58615__auto__;
var map__66476__$1 = (((((!((map__66476 == null))))?(((((map__66476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66476):map__66476);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66476__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66476__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66476__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshpatch.cljs$lang$applyTo = (function (seq66470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66470));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polyline "hello")
 * (polyline nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polyline {:onClick f} "hello")
 * (polyline #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polyline :#the-id.klass.other-klass "hello")
 * (polyline :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.polyline = (function fulcro$client$localized_dom$polyline(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70562 = arguments.length;
var i__4731__auto___70563 = (0);
while(true){
if((i__4731__auto___70563 < len__4730__auto___70562)){
args__4736__auto__.push((arguments[i__4731__auto___70563]));

var G__70564 = (i__4731__auto___70563 + (1));
i__4731__auto___70563 = G__70564;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66500 = conformed_args__58615__auto__;
var map__66500__$1 = (((((!((map__66500 == null))))?(((((map__66500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66500):map__66500);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polyline.cljs$lang$applyTo = (function (seq66483){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66483));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (metadata "hello")
 * (metadata nil "hello")
 * 
 * These two are made equivalent at compile time
 * (metadata {:onClick f} "hello")
 * (metadata #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (metadata :#the-id.klass.other-klass "hello")
 * (metadata :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.metadata = (function fulcro$client$localized_dom$metadata(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70567 = arguments.length;
var i__4731__auto___70568 = (0);
while(true){
if((i__4731__auto___70568 < len__4730__auto___70567)){
args__4736__auto__.push((arguments[i__4731__auto___70568]));

var G__70571 = (i__4731__auto___70568 + (1));
i__4731__auto___70568 = G__70571;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66517 = conformed_args__58615__auto__;
var map__66517__$1 = (((((!((map__66517 == null))))?(((((map__66517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66517):map__66517);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66517__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66517__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66517__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.metadata.cljs$lang$applyTo = (function (seq66508){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66508));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (map "hello")
 * (map nil "hello")
 * 
 * These two are made equivalent at compile time
 * (map {:onClick f} "hello")
 * (map #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (map :#the-id.klass.other-klass "hello")
 * (map :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.map = (function fulcro$client$localized_dom$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70577 = arguments.length;
var i__4731__auto___70578 = (0);
while(true){
if((i__4731__auto___70578 < len__4730__auto___70577)){
args__4736__auto__.push((arguments[i__4731__auto___70578]));

var G__70579 = (i__4731__auto___70578 + (1));
i__4731__auto___70578 = G__70579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66532 = conformed_args__58615__auto__;
var map__66532__$1 = (((((!((map__66532 == null))))?(((((map__66532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66532):map__66532);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66532__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66532__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66532__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.map.cljs$lang$applyTo = (function (seq66529){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66529));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (object "hello")
 * (object nil "hello")
 * 
 * These two are made equivalent at compile time
 * (object {:onClick f} "hello")
 * (object #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (object :#the-id.klass.other-klass "hello")
 * (object :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.object = (function fulcro$client$localized_dom$object(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70587 = arguments.length;
var i__4731__auto___70588 = (0);
while(true){
if((i__4731__auto___70588 < len__4730__auto___70587)){
args__4736__auto__.push((arguments[i__4731__auto___70588]));

var G__70589 = (i__4731__auto___70588 + (1));
i__4731__auto___70588 = G__70589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66542 = conformed_args__58615__auto__;
var map__66542__$1 = (((((!((map__66542 == null))))?(((((map__66542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66542):map__66542);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66542__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.object.cljs$lang$applyTo = (function (seq66540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66540));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (i "hello")
 * (i nil "hello")
 * 
 * These two are made equivalent at compile time
 * (i {:onClick f} "hello")
 * (i #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (i :#the-id.klass.other-klass "hello")
 * (i :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.i = (function fulcro$client$localized_dom$i(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70594 = arguments.length;
var i__4731__auto___70595 = (0);
while(true){
if((i__4731__auto___70595 < len__4730__auto___70594)){
args__4736__auto__.push((arguments[i__4731__auto___70595]));

var G__70598 = (i__4731__auto___70595 + (1));
i__4731__auto___70595 = G__70598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66557 = conformed_args__58615__auto__;
var map__66557__$1 = (((((!((map__66557 == null))))?(((((map__66557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66557):map__66557);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66557__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66557__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66557__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.i.cljs$lang$applyTo = (function (seq66553){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66553));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-name "hello")
 * (font-face-name nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-name {:onClick f} "hello")
 * (font-face-name #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-name :#the-id.klass.other-klass "hello")
 * (font-face-name :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.font_face_name = (function fulcro$client$localized_dom$font_face_name(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70609 = arguments.length;
var i__4731__auto___70610 = (0);
while(true){
if((i__4731__auto___70610 < len__4730__auto___70609)){
args__4736__auto__.push((arguments[i__4731__auto___70610]));

var G__70612 = (i__4731__auto___70610 + (1));
i__4731__auto___70610 = G__70612;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66565 = conformed_args__58615__auto__;
var map__66565__$1 = (((((!((map__66565 == null))))?(((((map__66565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66565):map__66565);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_name.cljs$lang$applyTo = (function (seq66564){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66564));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (p "hello")
 * (p nil "hello")
 * 
 * These two are made equivalent at compile time
 * (p {:onClick f} "hello")
 * (p #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (p :#the-id.klass.other-klass "hello")
 * (p :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.p = (function fulcro$client$localized_dom$p(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70614 = arguments.length;
var i__4731__auto___70615 = (0);
while(true){
if((i__4731__auto___70615 < len__4730__auto___70614)){
args__4736__auto__.push((arguments[i__4731__auto___70615]));

var G__70617 = (i__4731__auto___70615 + (1));
i__4731__auto___70615 = G__70617;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66570 = conformed_args__58615__auto__;
var map__66570__$1 = (((((!((map__66570 == null))))?(((((map__66570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66570):map__66570);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66570__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66570__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66570__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.p.cljs$lang$applyTo = (function (seq66568){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66568));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncR "hello")
 * (feFuncR nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncR {:onClick f} "hello")
 * (feFuncR #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncR :#the-id.klass.other-klass "hello")
 * (feFuncR :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feFuncR = (function fulcro$client$localized_dom$feFuncR(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70620 = arguments.length;
var i__4731__auto___70621 = (0);
while(true){
if((i__4731__auto___70621 < len__4730__auto___70620)){
args__4736__auto__.push((arguments[i__4731__auto___70621]));

var G__70622 = (i__4731__auto___70621 + (1));
i__4731__auto___70621 = G__70622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66575 = conformed_args__58615__auto__;
var map__66575__$1 = (((((!((map__66575 == null))))?(((((map__66575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66575):map__66575);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66575__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66575__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66575__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncR.cljs$lang$applyTo = (function (seq66572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66572));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatchpath "hello")
 * (hatchpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatchpath {:onClick f} "hello")
 * (hatchpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatchpath :#the-id.klass.other-klass "hello")
 * (hatchpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.hatchpath = (function fulcro$client$localized_dom$hatchpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70628 = arguments.length;
var i__4731__auto___70629 = (0);
while(true){
if((i__4731__auto___70629 < len__4730__auto___70628)){
args__4736__auto__.push((arguments[i__4731__auto___70629]));

var G__70630 = (i__4731__auto___70629 + (1));
i__4731__auto___70629 = G__70630;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66586 = conformed_args__58615__auto__;
var map__66586__$1 = (((((!((map__66586 == null))))?(((((map__66586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66586):map__66586);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66586__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66586__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66586__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatchpath.cljs$lang$applyTo = (function (seq66583){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66583));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem "hello")
 * (altGlyphItem nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphItem {:onClick f} "hello")
 * (altGlyphItem #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphItem :#the-id.klass.other-klass "hello")
 * (altGlyphItem :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.altGlyphItem = (function fulcro$client$localized_dom$altGlyphItem(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70640 = arguments.length;
var i__4731__auto___70641 = (0);
while(true){
if((i__4731__auto___70641 < len__4730__auto___70640)){
args__4736__auto__.push((arguments[i__4731__auto___70641]));

var G__70642 = (i__4731__auto___70641 + (1));
i__4731__auto___70641 = G__70642;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66611 = conformed_args__58615__auto__;
var map__66611__$1 = (((((!((map__66611 == null))))?(((((map__66611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66611):map__66611);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphItem.cljs$lang$applyTo = (function (seq66591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66591));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (nav "hello")
 * (nav nil "hello")
 * 
 * These two are made equivalent at compile time
 * (nav {:onClick f} "hello")
 * (nav #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (nav :#the-id.klass.other-klass "hello")
 * (nav :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.nav = (function fulcro$client$localized_dom$nav(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70650 = arguments.length;
var i__4731__auto___70651 = (0);
while(true){
if((i__4731__auto___70651 < len__4730__auto___70650)){
args__4736__auto__.push((arguments[i__4731__auto___70651]));

var G__70654 = (i__4731__auto___70651 + (1));
i__4731__auto___70651 = G__70654;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66647 = conformed_args__58615__auto__;
var map__66647__$1 = (((((!((map__66647 == null))))?(((((map__66647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66647):map__66647);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66647__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66647__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66647__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.nav.cljs$lang$applyTo = (function (seq66639){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66639));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ruby "hello")
 * (ruby nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ruby {:onClick f} "hello")
 * (ruby #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ruby :#the-id.klass.other-klass "hello")
 * (ruby :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.ruby = (function fulcro$client$localized_dom$ruby(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70655 = arguments.length;
var i__4731__auto___70656 = (0);
while(true){
if((i__4731__auto___70656 < len__4730__auto___70655)){
args__4736__auto__.push((arguments[i__4731__auto___70656]));

var G__70657 = (i__4731__auto___70656 + (1));
i__4731__auto___70656 = G__70657;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66665 = conformed_args__58615__auto__;
var map__66665__$1 = (((((!((map__66665 == null))))?(((((map__66665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66665):map__66665);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66665__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66665__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66665__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ruby.cljs$lang$applyTo = (function (seq66659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66659));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (switch "hello")
 * (switch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (switch {:onClick f} "hello")
 * (switch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (switch :#the-id.klass.other-klass "hello")
 * (switch :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.switch$ = (function fulcro$client$localized_dom$switch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70659 = arguments.length;
var i__4731__auto___70660 = (0);
while(true){
if((i__4731__auto___70660 < len__4730__auto___70659)){
args__4736__auto__.push((arguments[i__4731__auto___70660]));

var G__70661 = (i__4731__auto___70660 + (1));
i__4731__auto___70660 = G__70661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66682 = conformed_args__58615__auto__;
var map__66682__$1 = (((((!((map__66682 == null))))?(((((map__66682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66682):map__66682);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.switch$.cljs$lang$applyTo = (function (seq66675){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66675));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (a "hello")
 * (a nil "hello")
 * 
 * These two are made equivalent at compile time
 * (a {:onClick f} "hello")
 * (a #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (a :#the-id.klass.other-klass "hello")
 * (a :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.a = (function fulcro$client$localized_dom$a(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70672 = arguments.length;
var i__4731__auto___70673 = (0);
while(true){
if((i__4731__auto___70673 < len__4730__auto___70672)){
args__4736__auto__.push((arguments[i__4731__auto___70673]));

var G__70674 = (i__4731__auto___70673 + (1));
i__4731__auto___70673 = G__70674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66701 = conformed_args__58615__auto__;
var map__66701__$1 = (((((!((map__66701 == null))))?(((((map__66701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66701):map__66701);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66701__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66701__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66701__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.a.cljs$lang$applyTo = (function (seq66691){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66691));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (view "hello")
 * (view nil "hello")
 * 
 * These two are made equivalent at compile time
 * (view {:onClick f} "hello")
 * (view #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (view :#the-id.klass.other-klass "hello")
 * (view :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.view = (function fulcro$client$localized_dom$view(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70685 = arguments.length;
var i__4731__auto___70686 = (0);
while(true){
if((i__4731__auto___70686 < len__4730__auto___70685)){
args__4736__auto__.push((arguments[i__4731__auto___70686]));

var G__70687 = (i__4731__auto___70686 + (1));
i__4731__auto___70686 = G__70687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66730 = conformed_args__58615__auto__;
var map__66730__$1 = (((((!((map__66730 == null))))?(((((map__66730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66730):map__66730);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.view.cljs$lang$applyTo = (function (seq66716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66716));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (menu "hello")
 * (menu nil "hello")
 * 
 * These two are made equivalent at compile time
 * (menu {:onClick f} "hello")
 * (menu #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (menu :#the-id.klass.other-klass "hello")
 * (menu :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.menu = (function fulcro$client$localized_dom$menu(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70694 = arguments.length;
var i__4731__auto___70695 = (0);
while(true){
if((i__4731__auto___70695 < len__4730__auto___70694)){
args__4736__auto__.push((arguments[i__4731__auto___70695]));

var G__70696 = (i__4731__auto___70695 + (1));
i__4731__auto___70695 = G__70696;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66747 = conformed_args__58615__auto__;
var map__66747__$1 = (((((!((map__66747 == null))))?(((((map__66747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66747):map__66747);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66747__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66747__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menu.cljs$lang$applyTo = (function (seq66744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66744));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (blockquote "hello")
 * (blockquote nil "hello")
 * 
 * These two are made equivalent at compile time
 * (blockquote {:onClick f} "hello")
 * (blockquote #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (blockquote :#the-id.klass.other-klass "hello")
 * (blockquote :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.blockquote = (function fulcro$client$localized_dom$blockquote(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70699 = arguments.length;
var i__4731__auto___70700 = (0);
while(true){
if((i__4731__auto___70700 < len__4730__auto___70699)){
args__4736__auto__.push((arguments[i__4731__auto___70700]));

var G__70701 = (i__4731__auto___70700 + (1));
i__4731__auto___70700 = G__70701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66784 = conformed_args__58615__auto__;
var map__66784__$1 = (((((!((map__66784 == null))))?(((((map__66784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66784):map__66784);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66784__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66784__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66784__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.blockquote.cljs$lang$applyTo = (function (seq66775){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66775));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (img "hello")
 * (img nil "hello")
 * 
 * These two are made equivalent at compile time
 * (img {:onClick f} "hello")
 * (img #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (img :#the-id.klass.other-klass "hello")
 * (img :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.img = (function fulcro$client$localized_dom$img(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70702 = arguments.length;
var i__4731__auto___70703 = (0);
while(true){
if((i__4731__auto___70703 < len__4730__auto___70702)){
args__4736__auto__.push((arguments[i__4731__auto___70703]));

var G__70704 = (i__4731__auto___70703 + (1));
i__4731__auto___70703 = G__70704;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66809 = conformed_args__58615__auto__;
var map__66809__$1 = (((((!((map__66809 == null))))?(((((map__66809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66809):map__66809);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66809__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66809__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66809__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.img.cljs$lang$applyTo = (function (seq66796){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66796));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncG "hello")
 * (feFuncG nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncG {:onClick f} "hello")
 * (feFuncG #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncG :#the-id.klass.other-klass "hello")
 * (feFuncG :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feFuncG = (function fulcro$client$localized_dom$feFuncG(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70710 = arguments.length;
var i__4731__auto___70711 = (0);
while(true){
if((i__4731__auto___70711 < len__4730__auto___70710)){
args__4736__auto__.push((arguments[i__4731__auto___70711]));

var G__70712 = (i__4731__auto___70711 + (1));
i__4731__auto___70711 = G__70712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66844 = conformed_args__58615__auto__;
var map__66844__$1 = (((((!((map__66844 == null))))?(((((map__66844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66844):map__66844);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncG.cljs$lang$applyTo = (function (seq66836){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66836));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (text "hello")
 * (text nil "hello")
 * 
 * These two are made equivalent at compile time
 * (text {:onClick f} "hello")
 * (text #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (text :#the-id.klass.other-klass "hello")
 * (text :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.text = (function fulcro$client$localized_dom$text(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70726 = arguments.length;
var i__4731__auto___70727 = (0);
while(true){
if((i__4731__auto___70727 < len__4730__auto___70726)){
args__4736__auto__.push((arguments[i__4731__auto___70727]));

var G__70728 = (i__4731__auto___70727 + (1));
i__4731__auto___70727 = G__70728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66881 = conformed_args__58615__auto__;
var map__66881__$1 = (((((!((map__66881 == null))))?(((((map__66881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66881):map__66881);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66881__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66881__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66881__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.text.cljs$lang$applyTo = (function (seq66873){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66873));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (span "hello")
 * (span nil "hello")
 * 
 * These two are made equivalent at compile time
 * (span {:onClick f} "hello")
 * (span #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (span :#the-id.klass.other-klass "hello")
 * (span :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.span = (function fulcro$client$localized_dom$span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70735 = arguments.length;
var i__4731__auto___70736 = (0);
while(true){
if((i__4731__auto___70736 < len__4730__auto___70735)){
args__4736__auto__.push((arguments[i__4731__auto___70736]));

var G__70737 = (i__4731__auto___70736 + (1));
i__4731__auto___70736 = G__70737;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66891 = conformed_args__58615__auto__;
var map__66891__$1 = (((((!((map__66891 == null))))?(((((map__66891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66891):map__66891);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66891__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.span.cljs$lang$applyTo = (function (seq66889){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66889));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (track "hello")
 * (track nil "hello")
 * 
 * These two are made equivalent at compile time
 * (track {:onClick f} "hello")
 * (track #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (track :#the-id.klass.other-klass "hello")
 * (track :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.track = (function fulcro$client$localized_dom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70746 = arguments.length;
var i__4731__auto___70747 = (0);
while(true){
if((i__4731__auto___70747 < len__4730__auto___70746)){
args__4736__auto__.push((arguments[i__4731__auto___70747]));

var G__70751 = (i__4731__auto___70747 + (1));
i__4731__auto___70747 = G__70751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66907 = conformed_args__58615__auto__;
var map__66907__$1 = (((((!((map__66907 == null))))?(((((map__66907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66907):map__66907);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66907__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66907__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66907__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.track.cljs$lang$applyTo = (function (seq66903){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66903));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (data "hello")
 * (data nil "hello")
 * 
 * These two are made equivalent at compile time
 * (data {:onClick f} "hello")
 * (data #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (data :#the-id.klass.other-klass "hello")
 * (data :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.data = (function fulcro$client$localized_dom$data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70758 = arguments.length;
var i__4731__auto___70759 = (0);
while(true){
if((i__4731__auto___70759 < len__4730__auto___70758)){
args__4736__auto__.push((arguments[i__4731__auto___70759]));

var G__70762 = (i__4731__auto___70759 + (1));
i__4731__auto___70759 = G__70762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66918 = conformed_args__58615__auto__;
var map__66918__$1 = (((((!((map__66918 == null))))?(((((map__66918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66918):map__66918);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.data.cljs$lang$applyTo = (function (seq66912){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66912));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (u "hello")
 * (u nil "hello")
 * 
 * These two are made equivalent at compile time
 * (u {:onClick f} "hello")
 * (u #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (u :#the-id.klass.other-klass "hello")
 * (u :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.u = (function fulcro$client$localized_dom$u(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70775 = arguments.length;
var i__4731__auto___70776 = (0);
while(true){
if((i__4731__auto___70776 < len__4730__auto___70775)){
args__4736__auto__.push((arguments[i__4731__auto___70776]));

var G__70777 = (i__4731__auto___70776 + (1));
i__4731__auto___70776 = G__70777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66948 = conformed_args__58615__auto__;
var map__66948__$1 = (((((!((map__66948 == null))))?(((((map__66948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66948):map__66948);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66948__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66948__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66948__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.u.cljs$lang$applyTo = (function (seq66936){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66936));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dl "hello")
 * (dl nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dl {:onClick f} "hello")
 * (dl #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dl :#the-id.klass.other-klass "hello")
 * (dl :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.dl = (function fulcro$client$localized_dom$dl(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70788 = arguments.length;
var i__4731__auto___70789 = (0);
while(true){
if((i__4731__auto___70789 < len__4730__auto___70788)){
args__4736__auto__.push((arguments[i__4731__auto___70789]));

var G__70790 = (i__4731__auto___70789 + (1));
i__4731__auto___70789 = G__70790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66957 = conformed_args__58615__auto__;
var map__66957__$1 = (((((!((map__66957 == null))))?(((((map__66957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66957):map__66957);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dl.cljs$lang$applyTo = (function (seq66955){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66955));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (select "hello")
 * (select nil "hello")
 * 
 * These two are made equivalent at compile time
 * (select {:onClick f} "hello")
 * (select #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (select :#the-id.klass.other-klass "hello")
 * (select :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.select = (function fulcro$client$localized_dom$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70800 = arguments.length;
var i__4731__auto___70801 = (0);
while(true){
if((i__4731__auto___70801 < len__4730__auto___70800)){
args__4736__auto__.push((arguments[i__4731__auto___70801]));

var G__70802 = (i__4731__auto___70801 + (1));
i__4731__auto___70801 = G__70802;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66976 = conformed_args__58615__auto__;
var map__66976__$1 = (((((!((map__66976 == null))))?(((((map__66976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66976):map__66976);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.select.cljs$lang$applyTo = (function (seq66966){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66966));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (polygon "hello")
 * (polygon nil "hello")
 * 
 * These two are made equivalent at compile time
 * (polygon {:onClick f} "hello")
 * (polygon #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (polygon :#the-id.klass.other-klass "hello")
 * (polygon :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.polygon = (function fulcro$client$localized_dom$polygon(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70809 = arguments.length;
var i__4731__auto___70810 = (0);
while(true){
if((i__4731__auto___70810 < len__4730__auto___70809)){
args__4736__auto__.push((arguments[i__4731__auto___70810]));

var G__70811 = (i__4731__auto___70810 + (1));
i__4731__auto___70810 = G__70811;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__66984 = conformed_args__58615__auto__;
var map__66984__$1 = (((((!((map__66984 == null))))?(((((map__66984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66984):map__66984);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polygon.cljs$lang$applyTo = (function (seq66982){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66982));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pattern "hello")
 * (pattern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pattern {:onClick f} "hello")
 * (pattern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pattern :#the-id.klass.other-klass "hello")
 * (pattern :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.pattern = (function fulcro$client$localized_dom$pattern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70824 = arguments.length;
var i__4731__auto___70825 = (0);
while(true){
if((i__4731__auto___70825 < len__4730__auto___70824)){
args__4736__auto__.push((arguments[i__4731__auto___70825]));

var G__70826 = (i__4731__auto___70825 + (1));
i__4731__auto___70825 = G__70826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67000 = conformed_args__58615__auto__;
var map__67000__$1 = (((((!((map__67000 == null))))?(((((map__67000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67000):map__67000);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67000__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67000__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67000__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pattern.cljs$lang$applyTo = (function (seq66994){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66994));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (html "hello")
 * (html nil "hello")
 * 
 * These two are made equivalent at compile time
 * (html {:onClick f} "hello")
 * (html #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (html :#the-id.klass.other-klass "hello")
 * (html :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.html = (function fulcro$client$localized_dom$html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70830 = arguments.length;
var i__4731__auto___70831 = (0);
while(true){
if((i__4731__auto___70831 < len__4730__auto___70830)){
args__4736__auto__.push((arguments[i__4731__auto___70831]));

var G__70832 = (i__4731__auto___70831 + (1));
i__4731__auto___70831 = G__70832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67010 = conformed_args__58615__auto__;
var map__67010__$1 = (((((!((map__67010 == null))))?(((((map__67010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67010):map__67010);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.html.cljs$lang$applyTo = (function (seq67009){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67009));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (foreignObject "hello")
 * (foreignObject nil "hello")
 * 
 * These two are made equivalent at compile time
 * (foreignObject {:onClick f} "hello")
 * (foreignObject #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (foreignObject :#the-id.klass.other-klass "hello")
 * (foreignObject :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.foreignObject = (function fulcro$client$localized_dom$foreignObject(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70842 = arguments.length;
var i__4731__auto___70844 = (0);
while(true){
if((i__4731__auto___70844 < len__4730__auto___70842)){
args__4736__auto__.push((arguments[i__4731__auto___70844]));

var G__70847 = (i__4731__auto___70844 + (1));
i__4731__auto___70844 = G__70847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67030 = conformed_args__58615__auto__;
var map__67030__$1 = (((((!((map__67030 == null))))?(((((map__67030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67030):map__67030);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67030__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67030__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67030__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.foreignObject.cljs$lang$applyTo = (function (seq67024){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67024));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (thead "hello")
 * (thead nil "hello")
 * 
 * These two are made equivalent at compile time
 * (thead {:onClick f} "hello")
 * (thead #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (thead :#the-id.klass.other-klass "hello")
 * (thead :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.thead = (function fulcro$client$localized_dom$thead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70861 = arguments.length;
var i__4731__auto___70862 = (0);
while(true){
if((i__4731__auto___70862 < len__4730__auto___70861)){
args__4736__auto__.push((arguments[i__4731__auto___70862]));

var G__70863 = (i__4731__auto___70862 + (1));
i__4731__auto___70862 = G__70863;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67058 = conformed_args__58615__auto__;
var map__67058__$1 = (((((!((map__67058 == null))))?(((((map__67058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67058):map__67058);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67058__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67058__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.thead.cljs$lang$applyTo = (function (seq67046){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67046));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (path "hello")
 * (path nil "hello")
 * 
 * These two are made equivalent at compile time
 * (path {:onClick f} "hello")
 * (path #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (path :#the-id.klass.other-klass "hello")
 * (path :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.path = (function fulcro$client$localized_dom$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70873 = arguments.length;
var i__4731__auto___70874 = (0);
while(true){
if((i__4731__auto___70874 < len__4730__auto___70873)){
args__4736__auto__.push((arguments[i__4731__auto___70874]));

var G__70876 = (i__4731__auto___70874 + (1));
i__4731__auto___70874 = G__70876;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67079 = conformed_args__58615__auto__;
var map__67079__$1 = (((((!((map__67079 == null))))?(((((map__67079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67079):map__67079);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.path.cljs$lang$applyTo = (function (seq67069){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67069));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (del "hello")
 * (del nil "hello")
 * 
 * These two are made equivalent at compile time
 * (del {:onClick f} "hello")
 * (del #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (del :#the-id.klass.other-klass "hello")
 * (del :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.del = (function fulcro$client$localized_dom$del(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70888 = arguments.length;
var i__4731__auto___70889 = (0);
while(true){
if((i__4731__auto___70889 < len__4730__auto___70888)){
args__4736__auto__.push((arguments[i__4731__auto___70889]));

var G__70890 = (i__4731__auto___70889 + (1));
i__4731__auto___70889 = G__70890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67091 = conformed_args__58615__auto__;
var map__67091__$1 = (((((!((map__67091 == null))))?(((((map__67091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67091):map__67091);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67091__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67091__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67091__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.del.cljs$lang$applyTo = (function (seq67088){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67088));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyph "hello")
 * (altGlyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyph {:onClick f} "hello")
 * (altGlyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyph :#the-id.klass.other-klass "hello")
 * (altGlyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.altGlyph = (function fulcro$client$localized_dom$altGlyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70903 = arguments.length;
var i__4731__auto___70904 = (0);
while(true){
if((i__4731__auto___70904 < len__4730__auto___70903)){
args__4736__auto__.push((arguments[i__4731__auto___70904]));

var G__70905 = (i__4731__auto___70904 + (1));
i__4731__auto___70904 = G__70905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67098 = conformed_args__58615__auto__;
var map__67098__$1 = (((((!((map__67098 == null))))?(((((map__67098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67098):map__67098);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67098__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67098__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67098__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyph.cljs$lang$applyTo = (function (seq67095){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67095));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fieldset "hello")
 * (fieldset nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fieldset {:onClick f} "hello")
 * (fieldset #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fieldset :#the-id.klass.other-klass "hello")
 * (fieldset :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.fieldset = (function fulcro$client$localized_dom$fieldset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70915 = arguments.length;
var i__4731__auto___70916 = (0);
while(true){
if((i__4731__auto___70916 < len__4730__auto___70915)){
args__4736__auto__.push((arguments[i__4731__auto___70916]));

var G__70917 = (i__4731__auto___70916 + (1));
i__4731__auto___70916 = G__70917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67118 = conformed_args__58615__auto__;
var map__67118__$1 = (((((!((map__67118 == null))))?(((((map__67118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67118):map__67118);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67118__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67118__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67118__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fieldset.cljs$lang$applyTo = (function (seq67100){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67100));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (aside "hello")
 * (aside nil "hello")
 * 
 * These two are made equivalent at compile time
 * (aside {:onClick f} "hello")
 * (aside #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (aside :#the-id.klass.other-klass "hello")
 * (aside :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.aside = (function fulcro$client$localized_dom$aside(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70923 = arguments.length;
var i__4731__auto___70924 = (0);
while(true){
if((i__4731__auto___70924 < len__4730__auto___70923)){
args__4736__auto__.push((arguments[i__4731__auto___70924]));

var G__70925 = (i__4731__auto___70924 + (1));
i__4731__auto___70924 = G__70925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67138 = conformed_args__58615__auto__;
var map__67138__$1 = (((((!((map__67138 == null))))?(((((map__67138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67138):map__67138);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67138__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67138__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67138__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.aside.cljs$lang$applyTo = (function (seq67128){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67128));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feBlend "hello")
 * (feBlend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feBlend {:onClick f} "hello")
 * (feBlend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feBlend :#the-id.klass.other-klass "hello")
 * (feBlend :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feBlend = (function fulcro$client$localized_dom$feBlend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70934 = arguments.length;
var i__4731__auto___70936 = (0);
while(true){
if((i__4731__auto___70936 < len__4730__auto___70934)){
args__4736__auto__.push((arguments[i__4731__auto___70936]));

var G__70937 = (i__4731__auto___70936 + (1));
i__4731__auto___70936 = G__70937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67149 = conformed_args__58615__auto__;
var map__67149__$1 = (((((!((map__67149 == null))))?(((((map__67149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67149):map__67149);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67149__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67149__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67149__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feBlend.cljs$lang$applyTo = (function (seq67142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67142));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figure "hello")
 * (figure nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figure {:onClick f} "hello")
 * (figure #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figure :#the-id.klass.other-klass "hello")
 * (figure :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.figure = (function fulcro$client$localized_dom$figure(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70943 = arguments.length;
var i__4731__auto___70944 = (0);
while(true){
if((i__4731__auto___70944 < len__4730__auto___70943)){
args__4736__auto__.push((arguments[i__4731__auto___70944]));

var G__70945 = (i__4731__auto___70944 + (1));
i__4731__auto___70944 = G__70945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67211 = conformed_args__58615__auto__;
var map__67211__$1 = (((((!((map__67211 == null))))?(((((map__67211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67211):map__67211);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figure.cljs$lang$applyTo = (function (seq67185){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67185));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textPath "hello")
 * (textPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textPath {:onClick f} "hello")
 * (textPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textPath :#the-id.klass.other-klass "hello")
 * (textPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.textPath = (function fulcro$client$localized_dom$textPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70958 = arguments.length;
var i__4731__auto___70959 = (0);
while(true){
if((i__4731__auto___70959 < len__4730__auto___70958)){
args__4736__auto__.push((arguments[i__4731__auto___70959]));

var G__70960 = (i__4731__auto___70959 + (1));
i__4731__auto___70959 = G__70960;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67230 = conformed_args__58615__auto__;
var map__67230__$1 = (((((!((map__67230 == null))))?(((((map__67230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67230):map__67230);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textPath.cljs$lang$applyTo = (function (seq67220){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67220));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (figcaption "hello")
 * (figcaption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (figcaption {:onClick f} "hello")
 * (figcaption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (figcaption :#the-id.klass.other-klass "hello")
 * (figcaption :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.figcaption = (function fulcro$client$localized_dom$figcaption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70963 = arguments.length;
var i__4731__auto___70965 = (0);
while(true){
if((i__4731__auto___70965 < len__4730__auto___70963)){
args__4736__auto__.push((arguments[i__4731__auto___70965]));

var G__70966 = (i__4731__auto___70965 + (1));
i__4731__auto___70965 = G__70966;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67247 = conformed_args__58615__auto__;
var map__67247__$1 = (((((!((map__67247 == null))))?(((((map__67247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67247):map__67247);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67247__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67247__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67247__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figcaption.cljs$lang$applyTo = (function (seq67241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67241));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mask "hello")
 * (mask nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mask {:onClick f} "hello")
 * (mask #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mask :#the-id.klass.other-klass "hello")
 * (mask :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.mask = (function fulcro$client$localized_dom$mask(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70970 = arguments.length;
var i__4731__auto___70972 = (0);
while(true){
if((i__4731__auto___70972 < len__4730__auto___70970)){
args__4736__auto__.push((arguments[i__4731__auto___70972]));

var G__70973 = (i__4731__auto___70972 + (1));
i__4731__auto___70972 = G__70973;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67275 = conformed_args__58615__auto__;
var map__67275__$1 = (((((!((map__67275 == null))))?(((((map__67275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67275):map__67275);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mask.cljs$lang$applyTo = (function (seq67266){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67266));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (q "hello")
 * (q nil "hello")
 * 
 * These two are made equivalent at compile time
 * (q {:onClick f} "hello")
 * (q #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (q :#the-id.klass.other-klass "hello")
 * (q :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.q = (function fulcro$client$localized_dom$q(var_args){
var args__4736__auto__ = [];
var len__4730__auto___70995 = arguments.length;
var i__4731__auto___70996 = (0);
while(true){
if((i__4731__auto___70996 < len__4730__auto___70995)){
args__4736__auto__.push((arguments[i__4731__auto___70996]));

var G__70997 = (i__4731__auto___70996 + (1));
i__4731__auto___70996 = G__70997;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67299 = conformed_args__58615__auto__;
var map__67299__$1 = (((((!((map__67299 == null))))?(((((map__67299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67299):map__67299);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67299__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67299__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67299__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.q.cljs$lang$applyTo = (function (seq67281){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67281));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdi "hello")
 * (bdi nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdi {:onClick f} "hello")
 * (bdi #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdi :#the-id.klass.other-klass "hello")
 * (bdi :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.bdi = (function fulcro$client$localized_dom$bdi(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71002 = arguments.length;
var i__4731__auto___71003 = (0);
while(true){
if((i__4731__auto___71003 < len__4730__auto___71002)){
args__4736__auto__.push((arguments[i__4731__auto___71003]));

var G__71004 = (i__4731__auto___71003 + (1));
i__4731__auto___71003 = G__71004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67328 = conformed_args__58615__auto__;
var map__67328__$1 = (((((!((map__67328 == null))))?(((((map__67328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67328):map__67328);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdi.cljs$lang$applyTo = (function (seq67319){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67319));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDistantLight "hello")
 * (feDistantLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDistantLight {:onClick f} "hello")
 * (feDistantLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDistantLight :#the-id.klass.other-klass "hello")
 * (feDistantLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feDistantLight = (function fulcro$client$localized_dom$feDistantLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71021 = arguments.length;
var i__4731__auto___71022 = (0);
while(true){
if((i__4731__auto___71022 < len__4730__auto___71021)){
args__4736__auto__.push((arguments[i__4731__auto___71022]));

var G__71025 = (i__4731__auto___71022 + (1));
i__4731__auto___71022 = G__71025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67349 = conformed_args__58615__auto__;
var map__67349__$1 = (((((!((map__67349 == null))))?(((((map__67349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67349):map__67349);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67349__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67349__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67349__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDistantLight.cljs$lang$applyTo = (function (seq67340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (video "hello")
 * (video nil "hello")
 * 
 * These two are made equivalent at compile time
 * (video {:onClick f} "hello")
 * (video #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (video :#the-id.klass.other-klass "hello")
 * (video :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.video = (function fulcro$client$localized_dom$video(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71032 = arguments.length;
var i__4731__auto___71033 = (0);
while(true){
if((i__4731__auto___71033 < len__4730__auto___71032)){
args__4736__auto__.push((arguments[i__4731__auto___71033]));

var G__71034 = (i__4731__auto___71033 + (1));
i__4731__auto___71033 = G__71034;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67388 = conformed_args__58615__auto__;
var map__67388__$1 = (((((!((map__67388 == null))))?(((((map__67388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67388):map__67388);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67388__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67388__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67388__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.video.cljs$lang$applyTo = (function (seq67363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67363));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (address "hello")
 * (address nil "hello")
 * 
 * These two are made equivalent at compile time
 * (address {:onClick f} "hello")
 * (address #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (address :#the-id.klass.other-klass "hello")
 * (address :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.address = (function fulcro$client$localized_dom$address(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71045 = arguments.length;
var i__4731__auto___71049 = (0);
while(true){
if((i__4731__auto___71049 < len__4730__auto___71045)){
args__4736__auto__.push((arguments[i__4731__auto___71049]));

var G__71056 = (i__4731__auto___71049 + (1));
i__4731__auto___71049 = G__71056;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67412 = conformed_args__58615__auto__;
var map__67412__$1 = (((((!((map__67412 == null))))?(((((map__67412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67412):map__67412);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.address.cljs$lang$applyTo = (function (seq67409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67409));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (caption "hello")
 * (caption nil "hello")
 * 
 * These two are made equivalent at compile time
 * (caption {:onClick f} "hello")
 * (caption #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (caption :#the-id.klass.other-klass "hello")
 * (caption :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.caption = (function fulcro$client$localized_dom$caption(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71077 = arguments.length;
var i__4731__auto___71078 = (0);
while(true){
if((i__4731__auto___71078 < len__4730__auto___71077)){
args__4736__auto__.push((arguments[i__4731__auto___71078]));

var G__71079 = (i__4731__auto___71078 + (1));
i__4731__auto___71078 = G__71079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67437 = conformed_args__58615__auto__;
var map__67437__$1 = (((((!((map__67437 == null))))?(((((map__67437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67437):map__67437);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67437__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67437__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67437__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.caption.cljs$lang$applyTo = (function (seq67434){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67434));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dd "hello")
 * (dd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dd {:onClick f} "hello")
 * (dd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dd :#the-id.klass.other-klass "hello")
 * (dd :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.dd = (function fulcro$client$localized_dom$dd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71088 = arguments.length;
var i__4731__auto___71089 = (0);
while(true){
if((i__4731__auto___71089 < len__4730__auto___71088)){
args__4736__auto__.push((arguments[i__4731__auto___71089]));

var G__71090 = (i__4731__auto___71089 + (1));
i__4731__auto___71089 = G__71090;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67463 = conformed_args__58615__auto__;
var map__67463__$1 = (((((!((map__67463 == null))))?(((((map__67463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67463):map__67463);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dd.cljs$lang$applyTo = (function (seq67445){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67445));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rp "hello")
 * (rp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rp {:onClick f} "hello")
 * (rp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rp :#the-id.klass.other-klass "hello")
 * (rp :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.rp = (function fulcro$client$localized_dom$rp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71097 = arguments.length;
var i__4731__auto___71098 = (0);
while(true){
if((i__4731__auto___71098 < len__4730__auto___71097)){
args__4736__auto__.push((arguments[i__4731__auto___71098]));

var G__71099 = (i__4731__auto___71098 + (1));
i__4731__auto___71098 = G__71099;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67497 = conformed_args__58615__auto__;
var map__67497__$1 = (((((!((map__67497 == null))))?(((((map__67497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67497):map__67497);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rp.cljs$lang$applyTo = (function (seq67486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67486));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hr "hello")
 * (hr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hr {:onClick f} "hello")
 * (hr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hr :#the-id.klass.other-klass "hello")
 * (hr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.hr = (function fulcro$client$localized_dom$hr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71107 = arguments.length;
var i__4731__auto___71108 = (0);
while(true){
if((i__4731__auto___71108 < len__4730__auto___71107)){
args__4736__auto__.push((arguments[i__4731__auto___71108]));

var G__71110 = (i__4731__auto___71108 + (1));
i__4731__auto___71108 = G__71110;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67522 = conformed_args__58615__auto__;
var map__67522__$1 = (((((!((map__67522 == null))))?(((((map__67522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67522):map__67522);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hr.cljs$lang$applyTo = (function (seq67507){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67507));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meta "hello")
 * (meta nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meta {:onClick f} "hello")
 * (meta #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meta :#the-id.klass.other-klass "hello")
 * (meta :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.meta = (function fulcro$client$localized_dom$meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71117 = arguments.length;
var i__4731__auto___71119 = (0);
while(true){
if((i__4731__auto___71119 < len__4730__auto___71117)){
args__4736__auto__.push((arguments[i__4731__auto___71119]));

var G__71120 = (i__4731__auto___71119 + (1));
i__4731__auto___71119 = G__71120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67546 = conformed_args__58615__auto__;
var map__67546__$1 = (((((!((map__67546 == null))))?(((((map__67546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67546):map__67546);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meta.cljs$lang$applyTo = (function (seq67540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67540));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tbody "hello")
 * (tbody nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tbody {:onClick f} "hello")
 * (tbody #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tbody :#the-id.klass.other-klass "hello")
 * (tbody :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.tbody = (function fulcro$client$localized_dom$tbody(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71127 = arguments.length;
var i__4731__auto___71129 = (0);
while(true){
if((i__4731__auto___71129 < len__4730__auto___71127)){
args__4736__auto__.push((arguments[i__4731__auto___71129]));

var G__71131 = (i__4731__auto___71129 + (1));
i__4731__auto___71129 = G__71131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67569 = conformed_args__58615__auto__;
var map__67569__$1 = (((((!((map__67569 == null))))?(((((map__67569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67569):map__67569);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tbody.cljs$lang$applyTo = (function (seq67555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67555));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (desc "hello")
 * (desc nil "hello")
 * 
 * These two are made equivalent at compile time
 * (desc {:onClick f} "hello")
 * (desc #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (desc :#the-id.klass.other-klass "hello")
 * (desc :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.desc = (function fulcro$client$localized_dom$desc(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71137 = arguments.length;
var i__4731__auto___71138 = (0);
while(true){
if((i__4731__auto___71138 < len__4730__auto___71137)){
args__4736__auto__.push((arguments[i__4731__auto___71138]));

var G__71139 = (i__4731__auto___71138 + (1));
i__4731__auto___71138 = G__71139;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67619 = conformed_args__58615__auto__;
var map__67619__$1 = (((((!((map__67619 == null))))?(((((map__67619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67619):map__67619);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67619__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67619__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67619__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.desc.cljs$lang$applyTo = (function (seq67596){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67596));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (table "hello")
 * (table nil "hello")
 * 
 * These two are made equivalent at compile time
 * (table {:onClick f} "hello")
 * (table #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (table :#the-id.klass.other-klass "hello")
 * (table :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.table = (function fulcro$client$localized_dom$table(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71154 = arguments.length;
var i__4731__auto___71156 = (0);
while(true){
if((i__4731__auto___71156 < len__4730__auto___71154)){
args__4736__auto__.push((arguments[i__4731__auto___71156]));

var G__71159 = (i__4731__auto___71156 + (1));
i__4731__auto___71156 = G__71159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67637 = conformed_args__58615__auto__;
var map__67637__$1 = (((((!((map__67637 == null))))?(((((map__67637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67637):map__67637);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67637__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67637__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67637__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.table.cljs$lang$applyTo = (function (seq67622){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67622));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (pre "hello")
 * (pre nil "hello")
 * 
 * These two are made equivalent at compile time
 * (pre {:onClick f} "hello")
 * (pre #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (pre :#the-id.klass.other-klass "hello")
 * (pre :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.pre = (function fulcro$client$localized_dom$pre(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71165 = arguments.length;
var i__4731__auto___71166 = (0);
while(true){
if((i__4731__auto___71166 < len__4730__auto___71165)){
args__4736__auto__.push((arguments[i__4731__auto___71166]));

var G__71167 = (i__4731__auto___71166 + (1));
i__4731__auto___71166 = G__71167;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67674 = conformed_args__58615__auto__;
var map__67674__$1 = (((((!((map__67674 == null))))?(((((map__67674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67674):map__67674);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pre.cljs$lang$applyTo = (function (seq67664){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67664));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ul "hello")
 * (ul nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ul {:onClick f} "hello")
 * (ul #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ul :#the-id.klass.other-klass "hello")
 * (ul :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.ul = (function fulcro$client$localized_dom$ul(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71172 = arguments.length;
var i__4731__auto___71173 = (0);
while(true){
if((i__4731__auto___71173 < len__4730__auto___71172)){
args__4736__auto__.push((arguments[i__4731__auto___71173]));

var G__71182 = (i__4731__auto___71173 + (1));
i__4731__auto___71173 = G__71182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67727 = conformed_args__58615__auto__;
var map__67727__$1 = (((((!((map__67727 == null))))?(((((map__67727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67727):map__67727);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ul.cljs$lang$applyTo = (function (seq67698){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67698));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix "hello")
 * (feConvolveMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feConvolveMatrix {:onClick f} "hello")
 * (feConvolveMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feConvolveMatrix :#the-id.klass.other-klass "hello")
 * (feConvolveMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feConvolveMatrix = (function fulcro$client$localized_dom$feConvolveMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71222 = arguments.length;
var i__4731__auto___71223 = (0);
while(true){
if((i__4731__auto___71223 < len__4730__auto___71222)){
args__4736__auto__.push((arguments[i__4731__auto___71223]));

var G__71224 = (i__4731__auto___71223 + (1));
i__4731__auto___71223 = G__71224;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67753 = conformed_args__58615__auto__;
var map__67753__$1 = (((((!((map__67753 == null))))?(((((map__67753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67753):map__67753);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq67741){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67741));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sup "hello")
 * (sup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sup {:onClick f} "hello")
 * (sup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sup :#the-id.klass.other-klass "hello")
 * (sup :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.sup = (function fulcro$client$localized_dom$sup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71232 = arguments.length;
var i__4731__auto___71233 = (0);
while(true){
if((i__4731__auto___71233 < len__4730__auto___71232)){
args__4736__auto__.push((arguments[i__4731__auto___71233]));

var G__71234 = (i__4731__auto___71233 + (1));
i__4731__auto___71233 = G__71234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67791 = conformed_args__58615__auto__;
var map__67791__$1 = (((((!((map__67791 == null))))?(((((map__67791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67791):map__67791);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67791__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67791__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67791__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sup.cljs$lang$applyTo = (function (seq67782){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67782));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dfn "hello")
 * (dfn nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dfn {:onClick f} "hello")
 * (dfn #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dfn :#the-id.klass.other-klass "hello")
 * (dfn :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.dfn = (function fulcro$client$localized_dom$dfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71245 = arguments.length;
var i__4731__auto___71246 = (0);
while(true){
if((i__4731__auto___71246 < len__4730__auto___71245)){
args__4736__auto__.push((arguments[i__4731__auto___71246]));

var G__71247 = (i__4731__auto___71246 + (1));
i__4731__auto___71246 = G__71247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67820 = conformed_args__58615__auto__;
var map__67820__$1 = (((((!((map__67820 == null))))?(((((map__67820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67820):map__67820);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dfn.cljs$lang$applyTo = (function (seq67807){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67807));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (sub "hello")
 * (sub nil "hello")
 * 
 * These two are made equivalent at compile time
 * (sub {:onClick f} "hello")
 * (sub #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (sub :#the-id.klass.other-klass "hello")
 * (sub :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.sub = (function fulcro$client$localized_dom$sub(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71256 = arguments.length;
var i__4731__auto___71257 = (0);
while(true){
if((i__4731__auto___71257 < len__4730__auto___71256)){
args__4736__auto__.push((arguments[i__4731__auto___71257]));

var G__71258 = (i__4731__auto___71257 + (1));
i__4731__auto___71257 = G__71258;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67845 = conformed_args__58615__auto__;
var map__67845__$1 = (((((!((map__67845 == null))))?(((((map__67845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67845):map__67845);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67845__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67845__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67845__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sub.cljs$lang$applyTo = (function (seq67836){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67836));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mark "hello")
 * (mark nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mark {:onClick f} "hello")
 * (mark #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mark :#the-id.klass.other-klass "hello")
 * (mark :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.mark = (function fulcro$client$localized_dom$mark(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71269 = arguments.length;
var i__4731__auto___71271 = (0);
while(true){
if((i__4731__auto___71271 < len__4730__auto___71269)){
args__4736__auto__.push((arguments[i__4731__auto___71271]));

var G__71272 = (i__4731__auto___71271 + (1));
i__4731__auto___71271 = G__71272;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67870 = conformed_args__58615__auto__;
var map__67870__$1 = (((((!((map__67870 == null))))?(((((map__67870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67870):map__67870);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67870__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67870__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67870__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mark.cljs$lang$applyTo = (function (seq67865){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67865));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap "hello")
 * (feDisplacementMap nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDisplacementMap {:onClick f} "hello")
 * (feDisplacementMap #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDisplacementMap :#the-id.klass.other-klass "hello")
 * (feDisplacementMap :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feDisplacementMap = (function fulcro$client$localized_dom$feDisplacementMap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71281 = arguments.length;
var i__4731__auto___71282 = (0);
while(true){
if((i__4731__auto___71282 < len__4730__auto___71281)){
args__4736__auto__.push((arguments[i__4731__auto___71282]));

var G__71283 = (i__4731__auto___71282 + (1));
i__4731__auto___71282 = G__71283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67900 = conformed_args__58615__auto__;
var map__67900__$1 = (((((!((map__67900 == null))))?(((((map__67900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67900):map__67900);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67900__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67900__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67900__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDisplacementMap.cljs$lang$applyTo = (function (seq67884){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67884));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (unknown "hello")
 * (unknown nil "hello")
 * 
 * These two are made equivalent at compile time
 * (unknown {:onClick f} "hello")
 * (unknown #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (unknown :#the-id.klass.other-klass "hello")
 * (unknown :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.unknown = (function fulcro$client$localized_dom$unknown(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71291 = arguments.length;
var i__4731__auto___71292 = (0);
while(true){
if((i__4731__auto___71292 < len__4730__auto___71291)){
args__4736__auto__.push((arguments[i__4731__auto___71292]));

var G__71293 = (i__4731__auto___71292 + (1));
i__4731__auto___71292 = G__71293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67915 = conformed_args__58615__auto__;
var map__67915__$1 = (((((!((map__67915 == null))))?(((((map__67915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67915):map__67915);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67915__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67915__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67915__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.unknown.cljs$lang$applyTo = (function (seq67910){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67910));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (script "hello")
 * (script nil "hello")
 * 
 * These two are made equivalent at compile time
 * (script {:onClick f} "hello")
 * (script #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (script :#the-id.klass.other-klass "hello")
 * (script :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.script = (function fulcro$client$localized_dom$script(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71307 = arguments.length;
var i__4731__auto___71308 = (0);
while(true){
if((i__4731__auto___71308 < len__4730__auto___71307)){
args__4736__auto__.push((arguments[i__4731__auto___71308]));

var G__71309 = (i__4731__auto___71308 + (1));
i__4731__auto___71308 = G__71309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67925 = conformed_args__58615__auto__;
var map__67925__$1 = (((((!((map__67925 == null))))?(((((map__67925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67925):map__67925);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67925__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67925__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67925__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.script.cljs$lang$applyTo = (function (seq67921){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67921));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTurbulence "hello")
 * (feTurbulence nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTurbulence {:onClick f} "hello")
 * (feTurbulence #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTurbulence :#the-id.klass.other-klass "hello")
 * (feTurbulence :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feTurbulence = (function fulcro$client$localized_dom$feTurbulence(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71316 = arguments.length;
var i__4731__auto___71317 = (0);
while(true){
if((i__4731__auto___71317 < len__4730__auto___71316)){
args__4736__auto__.push((arguments[i__4731__auto___71317]));

var G__71319 = (i__4731__auto___71317 + (1));
i__4731__auto___71317 = G__71319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67960 = conformed_args__58615__auto__;
var map__67960__$1 = (((((!((map__67960 == null))))?(((((map__67960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67960):map__67960);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67960__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67960__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67960__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTurbulence.cljs$lang$applyTo = (function (seq67931){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67931));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (big "hello")
 * (big nil "hello")
 * 
 * These two are made equivalent at compile time
 * (big {:onClick f} "hello")
 * (big #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (big :#the-id.klass.other-klass "hello")
 * (big :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.big = (function fulcro$client$localized_dom$big(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71334 = arguments.length;
var i__4731__auto___71335 = (0);
while(true){
if((i__4731__auto___71335 < len__4730__auto___71334)){
args__4736__auto__.push((arguments[i__4731__auto___71335]));

var G__71336 = (i__4731__auto___71335 + (1));
i__4731__auto___71335 = G__71336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__67988 = conformed_args__58615__auto__;
var map__67988__$1 = (((((!((map__67988 == null))))?(((((map__67988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67988):map__67988);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.big.cljs$lang$applyTo = (function (seq67982){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67982));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (button "hello")
 * (button nil "hello")
 * 
 * These two are made equivalent at compile time
 * (button {:onClick f} "hello")
 * (button #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (button :#the-id.klass.other-klass "hello")
 * (button :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.button = (function fulcro$client$localized_dom$button(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71344 = arguments.length;
var i__4731__auto___71346 = (0);
while(true){
if((i__4731__auto___71346 < len__4730__auto___71344)){
args__4736__auto__.push((arguments[i__4731__auto___71346]));

var G__71348 = (i__4731__auto___71346 + (1));
i__4731__auto___71346 = G__71348;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68008 = conformed_args__58615__auto__;
var map__68008__$1 = (((((!((map__68008 == null))))?(((((map__68008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68008):map__68008);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68008__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68008__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68008__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.button.cljs$lang$applyTo = (function (seq67997){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67997));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-uri "hello")
 * (font-face-uri nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-uri {:onClick f} "hello")
 * (font-face-uri #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-uri :#the-id.klass.other-klass "hello")
 * (font-face-uri :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.font_face_uri = (function fulcro$client$localized_dom$font_face_uri(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71350 = arguments.length;
var i__4731__auto___71351 = (0);
while(true){
if((i__4731__auto___71351 < len__4730__auto___71350)){
args__4736__auto__.push((arguments[i__4731__auto___71351]));

var G__71352 = (i__4731__auto___71351 + (1));
i__4731__auto___71351 = G__71352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68039 = conformed_args__58615__auto__;
var map__68039__$1 = (((((!((map__68039 == null))))?(((((map__68039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68039):map__68039);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68039__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68039__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68039__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_uri.cljs$lang$applyTo = (function (seq68029){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68029));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (wbr "hello")
 * (wbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (wbr {:onClick f} "hello")
 * (wbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (wbr :#the-id.klass.other-klass "hello")
 * (wbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.wbr = (function fulcro$client$localized_dom$wbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71355 = arguments.length;
var i__4731__auto___71356 = (0);
while(true){
if((i__4731__auto___71356 < len__4730__auto___71355)){
args__4736__auto__.push((arguments[i__4731__auto___71356]));

var G__71358 = (i__4731__auto___71356 + (1));
i__4731__auto___71356 = G__71358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68049 = conformed_args__58615__auto__;
var map__68049__$1 = (((((!((map__68049 == null))))?(((((map__68049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68049):map__68049);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.wbr.cljs$lang$applyTo = (function (seq68047){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68047));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (symbol "hello")
 * (symbol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (symbol {:onClick f} "hello")
 * (symbol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (symbol :#the-id.klass.other-klass "hello")
 * (symbol :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.symbol = (function fulcro$client$localized_dom$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71363 = arguments.length;
var i__4731__auto___71364 = (0);
while(true){
if((i__4731__auto___71364 < len__4730__auto___71363)){
args__4736__auto__.push((arguments[i__4731__auto___71364]));

var G__71365 = (i__4731__auto___71364 + (1));
i__4731__auto___71364 = G__71365;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68060 = conformed_args__58615__auto__;
var map__68060__$1 = (((((!((map__68060 == null))))?(((((map__68060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68060):map__68060);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68060__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.symbol.cljs$lang$applyTo = (function (seq68052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68052));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (strong "hello")
 * (strong nil "hello")
 * 
 * These two are made equivalent at compile time
 * (strong {:onClick f} "hello")
 * (strong #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (strong :#the-id.klass.other-klass "hello")
 * (strong :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.strong = (function fulcro$client$localized_dom$strong(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71367 = arguments.length;
var i__4731__auto___71368 = (0);
while(true){
if((i__4731__auto___71368 < len__4730__auto___71367)){
args__4736__auto__.push((arguments[i__4731__auto___71368]));

var G__71370 = (i__4731__auto___71368 + (1));
i__4731__auto___71368 = G__71370;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68089 = conformed_args__58615__auto__;
var map__68089__$1 = (((((!((map__68089 == null))))?(((((map__68089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68089):map__68089);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68089__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.strong.cljs$lang$applyTo = (function (seq68080){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68080));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (use "hello")
 * (use nil "hello")
 * 
 * These two are made equivalent at compile time
 * (use {:onClick f} "hello")
 * (use #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (use :#the-id.klass.other-klass "hello")
 * (use :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.use = (function fulcro$client$localized_dom$use(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71377 = arguments.length;
var i__4731__auto___71378 = (0);
while(true){
if((i__4731__auto___71378 < len__4730__auto___71377)){
args__4736__auto__.push((arguments[i__4731__auto___71378]));

var G__71379 = (i__4731__auto___71378 + (1));
i__4731__auto___71378 = G__71379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68108 = conformed_args__58615__auto__;
var map__68108__$1 = (((((!((map__68108 == null))))?(((((map__68108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68108):map__68108);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.use.cljs$lang$applyTo = (function (seq68103){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68103));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (solidcolor "hello")
 * (solidcolor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (solidcolor {:onClick f} "hello")
 * (solidcolor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (solidcolor :#the-id.klass.other-klass "hello")
 * (solidcolor :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.solidcolor = (function fulcro$client$localized_dom$solidcolor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71387 = arguments.length;
var i__4731__auto___71388 = (0);
while(true){
if((i__4731__auto___71388 < len__4730__auto___71387)){
args__4736__auto__.push((arguments[i__4731__auto___71388]));

var G__71390 = (i__4731__auto___71388 + (1));
i__4731__auto___71388 = G__71390;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68144 = conformed_args__58615__auto__;
var map__68144__$1 = (((((!((map__68144 == null))))?(((((map__68144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68144):map__68144);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68144__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68144__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68144__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.solidcolor.cljs$lang$applyTo = (function (seq68128){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68128));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (fePointLight "hello")
 * (fePointLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (fePointLight {:onClick f} "hello")
 * (fePointLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (fePointLight :#the-id.klass.other-klass "hello")
 * (fePointLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.fePointLight = (function fulcro$client$localized_dom$fePointLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71395 = arguments.length;
var i__4731__auto___71396 = (0);
while(true){
if((i__4731__auto___71396 < len__4730__auto___71395)){
args__4736__auto__.push((arguments[i__4731__auto___71396]));

var G__71397 = (i__4731__auto___71396 + (1));
i__4731__auto___71396 = G__71397;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68180 = conformed_args__58615__auto__;
var map__68180__$1 = (((((!((map__68180 == null))))?(((((map__68180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68180):map__68180);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68180__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fePointLight.cljs$lang$applyTo = (function (seq68156){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68156));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (li "hello")
 * (li nil "hello")
 * 
 * These two are made equivalent at compile time
 * (li {:onClick f} "hello")
 * (li #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (li :#the-id.klass.other-klass "hello")
 * (li :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.li = (function fulcro$client$localized_dom$li(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71401 = arguments.length;
var i__4731__auto___71402 = (0);
while(true){
if((i__4731__auto___71402 < len__4730__auto___71401)){
args__4736__auto__.push((arguments[i__4731__auto___71402]));

var G__71403 = (i__4731__auto___71402 + (1));
i__4731__auto___71402 = G__71403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68215 = conformed_args__58615__auto__;
var map__68215__$1 = (((((!((map__68215 == null))))?(((((map__68215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68215):map__68215);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.li.cljs$lang$applyTo = (function (seq68212){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68212));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dt "hello")
 * (dt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dt {:onClick f} "hello")
 * (dt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dt :#the-id.klass.other-klass "hello")
 * (dt :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.dt = (function fulcro$client$localized_dom$dt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71406 = arguments.length;
var i__4731__auto___71407 = (0);
while(true){
if((i__4731__auto___71407 < len__4730__auto___71406)){
args__4736__auto__.push((arguments[i__4731__auto___71407]));

var G__71409 = (i__4731__auto___71407 + (1));
i__4731__auto___71407 = G__71409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68246 = conformed_args__58615__auto__;
var map__68246__$1 = (((((!((map__68246 == null))))?(((((map__68246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68246):map__68246);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dt.cljs$lang$applyTo = (function (seq68231){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68231));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFuncB "hello")
 * (feFuncB nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFuncB {:onClick f} "hello")
 * (feFuncB #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFuncB :#the-id.klass.other-klass "hello")
 * (feFuncB :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feFuncB = (function fulcro$client$localized_dom$feFuncB(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71426 = arguments.length;
var i__4731__auto___71428 = (0);
while(true){
if((i__4731__auto___71428 < len__4730__auto___71426)){
args__4736__auto__.push((arguments[i__4731__auto___71428]));

var G__71429 = (i__4731__auto___71428 + (1));
i__4731__auto___71428 = G__71429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68261 = conformed_args__58615__auto__;
var map__68261__$1 = (((((!((map__68261 == null))))?(((((map__68261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68261):map__68261);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncB.cljs$lang$applyTo = (function (seq68256){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68256));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (marker "hello")
 * (marker nil "hello")
 * 
 * These two are made equivalent at compile time
 * (marker {:onClick f} "hello")
 * (marker #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (marker :#the-id.klass.other-klass "hello")
 * (marker :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.marker = (function fulcro$client$localized_dom$marker(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71438 = arguments.length;
var i__4731__auto___71439 = (0);
while(true){
if((i__4731__auto___71439 < len__4730__auto___71438)){
args__4736__auto__.push((arguments[i__4731__auto___71439]));

var G__71444 = (i__4731__auto___71439 + (1));
i__4731__auto___71439 = G__71444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68300 = conformed_args__58615__auto__;
var map__68300__$1 = (((((!((map__68300 == null))))?(((((map__68300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68300):map__68300);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.marker.cljs$lang$applyTo = (function (seq68284){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68284));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer "hello")
 * (feComponentTransfer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComponentTransfer {:onClick f} "hello")
 * (feComponentTransfer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComponentTransfer :#the-id.klass.other-klass "hello")
 * (feComponentTransfer :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feComponentTransfer = (function fulcro$client$localized_dom$feComponentTransfer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71450 = arguments.length;
var i__4731__auto___71451 = (0);
while(true){
if((i__4731__auto___71451 < len__4730__auto___71450)){
args__4736__auto__.push((arguments[i__4731__auto___71451]));

var G__71452 = (i__4731__auto___71451 + (1));
i__4731__auto___71451 = G__71452;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68326 = conformed_args__58615__auto__;
var map__68326__$1 = (((((!((map__68326 == null))))?(((((map__68326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68326):map__68326);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68326__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComponentTransfer.cljs$lang$applyTo = (function (seq68315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68315));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (td "hello")
 * (td nil "hello")
 * 
 * These two are made equivalent at compile time
 * (td {:onClick f} "hello")
 * (td #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (td :#the-id.klass.other-klass "hello")
 * (td :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.td = (function fulcro$client$localized_dom$td(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71464 = arguments.length;
var i__4731__auto___71466 = (0);
while(true){
if((i__4731__auto___71466 < len__4730__auto___71464)){
args__4736__auto__.push((arguments[i__4731__auto___71466]));

var G__71467 = (i__4731__auto___71466 + (1));
i__4731__auto___71466 = G__71467;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68356 = conformed_args__58615__auto__;
var map__68356__$1 = (((((!((map__68356 == null))))?(((((map__68356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68356):map__68356);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.td.cljs$lang$applyTo = (function (seq68340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68340));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tr "hello")
 * (tr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tr {:onClick f} "hello")
 * (tr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tr :#the-id.klass.other-klass "hello")
 * (tr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.tr = (function fulcro$client$localized_dom$tr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71474 = arguments.length;
var i__4731__auto___71475 = (0);
while(true){
if((i__4731__auto___71475 < len__4730__auto___71474)){
args__4736__auto__.push((arguments[i__4731__auto___71475]));

var G__71476 = (i__4731__auto___71475 + (1));
i__4731__auto___71475 = G__71476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68393 = conformed_args__58615__auto__;
var map__68393__$1 = (((((!((map__68393 == null))))?(((((map__68393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68393):map__68393);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68393__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68393__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68393__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tr.cljs$lang$applyTo = (function (seq68372){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68372));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (circle "hello")
 * (circle nil "hello")
 * 
 * These two are made equivalent at compile time
 * (circle {:onClick f} "hello")
 * (circle #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (circle :#the-id.klass.other-klass "hello")
 * (circle :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.circle = (function fulcro$client$localized_dom$circle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71500 = arguments.length;
var i__4731__auto___71505 = (0);
while(true){
if((i__4731__auto___71505 < len__4730__auto___71500)){
args__4736__auto__.push((arguments[i__4731__auto___71505]));

var G__71507 = (i__4731__auto___71505 + (1));
i__4731__auto___71505 = G__71507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68430 = conformed_args__58615__auto__;
var map__68430__$1 = (((((!((map__68430 == null))))?(((((map__68430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68430):map__68430);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.circle.cljs$lang$applyTo = (function (seq68418){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68418));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (section "hello")
 * (section nil "hello")
 * 
 * These two are made equivalent at compile time
 * (section {:onClick f} "hello")
 * (section #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (section :#the-id.klass.other-klass "hello")
 * (section :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.section = (function fulcro$client$localized_dom$section(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71512 = arguments.length;
var i__4731__auto___71513 = (0);
while(true){
if((i__4731__auto___71513 < len__4730__auto___71512)){
args__4736__auto__.push((arguments[i__4731__auto___71513]));

var G__71514 = (i__4731__auto___71513 + (1));
i__4731__auto___71513 = G__71514;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68463 = conformed_args__58615__auto__;
var map__68463__$1 = (((((!((map__68463 == null))))?(((((map__68463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68463):map__68463);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.section.cljs$lang$applyTo = (function (seq68446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68446));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDropShadow "hello")
 * (feDropShadow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDropShadow {:onClick f} "hello")
 * (feDropShadow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDropShadow :#the-id.klass.other-klass "hello")
 * (feDropShadow :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feDropShadow = (function fulcro$client$localized_dom$feDropShadow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71519 = arguments.length;
var i__4731__auto___71520 = (0);
while(true){
if((i__4731__auto___71520 < len__4730__auto___71519)){
args__4736__auto__.push((arguments[i__4731__auto___71520]));

var G__71521 = (i__4731__auto___71520 + (1));
i__4731__auto___71520 = G__71521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68494 = conformed_args__58615__auto__;
var map__68494__$1 = (((((!((map__68494 == null))))?(((((map__68494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68494):map__68494);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68494__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68494__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68494__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDropShadow.cljs$lang$applyTo = (function (seq68479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68479));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (th "hello")
 * (th nil "hello")
 * 
 * These two are made equivalent at compile time
 * (th {:onClick f} "hello")
 * (th #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (th :#the-id.klass.other-klass "hello")
 * (th :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.th = (function fulcro$client$localized_dom$th(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71531 = arguments.length;
var i__4731__auto___71532 = (0);
while(true){
if((i__4731__auto___71532 < len__4730__auto___71531)){
args__4736__auto__.push((arguments[i__4731__auto___71532]));

var G__71533 = (i__4731__auto___71532 + (1));
i__4731__auto___71532 = G__71533;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68543 = conformed_args__58615__auto__;
var map__68543__$1 = (((((!((map__68543 == null))))?(((((map__68543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68543):map__68543);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.th.cljs$lang$applyTo = (function (seq68519){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68519));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (time "hello")
 * (time nil "hello")
 * 
 * These two are made equivalent at compile time
 * (time {:onClick f} "hello")
 * (time #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (time :#the-id.klass.other-klass "hello")
 * (time :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.time = (function fulcro$client$localized_dom$time(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71543 = arguments.length;
var i__4731__auto___71544 = (0);
while(true){
if((i__4731__auto___71544 < len__4730__auto___71543)){
args__4736__auto__.push((arguments[i__4731__auto___71544]));

var G__71545 = (i__4731__auto___71544 + (1));
i__4731__auto___71544 = G__71545;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68584 = conformed_args__58615__auto__;
var map__68584__$1 = (((((!((map__68584 == null))))?(((((map__68584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68584):map__68584);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.time.cljs$lang$applyTo = (function (seq68568){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68568));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (optgroup "hello")
 * (optgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (optgroup {:onClick f} "hello")
 * (optgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (optgroup :#the-id.klass.other-klass "hello")
 * (optgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.optgroup = (function fulcro$client$localized_dom$optgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71550 = arguments.length;
var i__4731__auto___71551 = (0);
while(true){
if((i__4731__auto___71551 < len__4730__auto___71550)){
args__4736__auto__.push((arguments[i__4731__auto___71551]));

var G__71552 = (i__4731__auto___71551 + (1));
i__4731__auto___71551 = G__71552;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68608 = conformed_args__58615__auto__;
var map__68608__$1 = (((((!((map__68608 == null))))?(((((map__68608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68608):map__68608);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68608__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68608__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68608__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.optgroup.cljs$lang$applyTo = (function (seq68603){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68603));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (iframe "hello")
 * (iframe nil "hello")
 * 
 * These two are made equivalent at compile time
 * (iframe {:onClick f} "hello")
 * (iframe #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (iframe :#the-id.klass.other-klass "hello")
 * (iframe :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.iframe = (function fulcro$client$localized_dom$iframe(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71562 = arguments.length;
var i__4731__auto___71563 = (0);
while(true){
if((i__4731__auto___71563 < len__4730__auto___71562)){
args__4736__auto__.push((arguments[i__4731__auto___71563]));

var G__71564 = (i__4731__auto___71563 + (1));
i__4731__auto___71563 = G__71564;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68626 = conformed_args__58615__auto__;
var map__68626__$1 = (((((!((map__68626 == null))))?(((((map__68626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68626):map__68626);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68626__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68626__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68626__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.iframe.cljs$lang$applyTo = (function (seq68617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68617));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (color-profile "hello")
 * (color-profile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (color-profile {:onClick f} "hello")
 * (color-profile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (color-profile :#the-id.klass.other-klass "hello")
 * (color-profile :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.color_profile = (function fulcro$client$localized_dom$color_profile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71577 = arguments.length;
var i__4731__auto___71578 = (0);
while(true){
if((i__4731__auto___71578 < len__4730__auto___71577)){
args__4736__auto__.push((arguments[i__4731__auto___71578]));

var G__71581 = (i__4731__auto___71578 + (1));
i__4731__auto___71578 = G__71581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68636 = conformed_args__58615__auto__;
var map__68636__$1 = (((((!((map__68636 == null))))?(((((map__68636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68636):map__68636);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68636__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68636__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68636__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.color_profile.cljs$lang$applyTo = (function (seq68634){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68634));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (legend "hello")
 * (legend nil "hello")
 * 
 * These two are made equivalent at compile time
 * (legend {:onClick f} "hello")
 * (legend #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (legend :#the-id.klass.other-klass "hello")
 * (legend :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.legend = (function fulcro$client$localized_dom$legend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71588 = arguments.length;
var i__4731__auto___71589 = (0);
while(true){
if((i__4731__auto___71589 < len__4730__auto___71588)){
args__4736__auto__.push((arguments[i__4731__auto___71589]));

var G__71592 = (i__4731__auto___71589 + (1));
i__4731__auto___71589 = G__71592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68668 = conformed_args__58615__auto__;
var map__68668__$1 = (((((!((map__68668 == null))))?(((((map__68668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68668):map__68668);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68668__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68668__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68668__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.legend.cljs$lang$applyTo = (function (seq68652){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68652));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (em "hello")
 * (em nil "hello")
 * 
 * These two are made equivalent at compile time
 * (em {:onClick f} "hello")
 * (em #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (em :#the-id.klass.other-klass "hello")
 * (em :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.em = (function fulcro$client$localized_dom$em(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71607 = arguments.length;
var i__4731__auto___71608 = (0);
while(true){
if((i__4731__auto___71608 < len__4730__auto___71607)){
args__4736__auto__.push((arguments[i__4731__auto___71608]));

var G__71609 = (i__4731__auto___71608 + (1));
i__4731__auto___71608 = G__71609;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68685 = conformed_args__58615__auto__;
var map__68685__$1 = (((((!((map__68685 == null))))?(((((map__68685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68685):map__68685);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.em.cljs$lang$applyTo = (function (seq68676){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68676));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (kbd "hello")
 * (kbd nil "hello")
 * 
 * These two are made equivalent at compile time
 * (kbd {:onClick f} "hello")
 * (kbd #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (kbd :#the-id.klass.other-klass "hello")
 * (kbd :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.kbd = (function fulcro$client$localized_dom$kbd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71617 = arguments.length;
var i__4731__auto___71618 = (0);
while(true){
if((i__4731__auto___71618 < len__4730__auto___71617)){
args__4736__auto__.push((arguments[i__4731__auto___71618]));

var G__71619 = (i__4731__auto___71618 + (1));
i__4731__auto___71618 = G__71619;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68696 = conformed_args__58615__auto__;
var map__68696__$1 = (((((!((map__68696 == null))))?(((((map__68696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68696):map__68696);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.kbd.cljs$lang$applyTo = (function (seq68693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68693));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (article "hello")
 * (article nil "hello")
 * 
 * These two are made equivalent at compile time
 * (article {:onClick f} "hello")
 * (article #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (article :#the-id.klass.other-klass "hello")
 * (article :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.article = (function fulcro$client$localized_dom$article(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71630 = arguments.length;
var i__4731__auto___71631 = (0);
while(true){
if((i__4731__auto___71631 < len__4730__auto___71630)){
args__4736__auto__.push((arguments[i__4731__auto___71631]));

var G__71632 = (i__4731__auto___71631 + (1));
i__4731__auto___71631 = G__71632;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68717 = conformed_args__58615__auto__;
var map__68717__$1 = (((((!((map__68717 == null))))?(((((map__68717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68717):map__68717);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68717__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68717__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68717__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.article.cljs$lang$applyTo = (function (seq68710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68710));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateColor "hello")
 * (animateColor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateColor {:onClick f} "hello")
 * (animateColor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateColor :#the-id.klass.other-klass "hello")
 * (animateColor :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.animateColor = (function fulcro$client$localized_dom$animateColor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71639 = arguments.length;
var i__4731__auto___71640 = (0);
while(true){
if((i__4731__auto___71640 < len__4730__auto___71639)){
args__4736__auto__.push((arguments[i__4731__auto___71640]));

var G__71642 = (i__4731__auto___71640 + (1));
i__4731__auto___71640 = G__71642;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68742 = conformed_args__58615__auto__;
var map__68742__$1 = (((((!((map__68742 == null))))?(((((map__68742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68742):map__68742);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateColor.cljs$lang$applyTo = (function (seq68723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68723));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (clipPath "hello")
 * (clipPath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (clipPath {:onClick f} "hello")
 * (clipPath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (clipPath :#the-id.klass.other-klass "hello")
 * (clipPath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.clipPath = (function fulcro$client$localized_dom$clipPath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71649 = arguments.length;
var i__4731__auto___71650 = (0);
while(true){
if((i__4731__auto___71650 < len__4730__auto___71649)){
args__4736__auto__.push((arguments[i__4731__auto___71650]));

var G__71652 = (i__4731__auto___71650 + (1));
i__4731__auto___71650 = G__71652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68748 = conformed_args__58615__auto__;
var map__68748__$1 = (((((!((map__68748 == null))))?(((((map__68748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68748):map__68748);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.clipPath.cljs$lang$applyTo = (function (seq68746){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68746));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (abbr "hello")
 * (abbr nil "hello")
 * 
 * These two are made equivalent at compile time
 * (abbr {:onClick f} "hello")
 * (abbr #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (abbr :#the-id.klass.other-klass "hello")
 * (abbr :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.abbr = (function fulcro$client$localized_dom$abbr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71667 = arguments.length;
var i__4731__auto___71668 = (0);
while(true){
if((i__4731__auto___71668 < len__4730__auto___71667)){
args__4736__auto__.push((arguments[i__4731__auto___71668]));

var G__71669 = (i__4731__auto___71668 + (1));
i__4731__auto___71668 = G__71669;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68762 = conformed_args__58615__auto__;
var map__68762__$1 = (((((!((map__68762 == null))))?(((((map__68762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68762):map__68762);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68762__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68762__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68762__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.abbr.cljs$lang$applyTo = (function (seq68758){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68758));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef "hello")
 * (altGlyphDef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (altGlyphDef {:onClick f} "hello")
 * (altGlyphDef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (altGlyphDef :#the-id.klass.other-klass "hello")
 * (altGlyphDef :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.altGlyphDef = (function fulcro$client$localized_dom$altGlyphDef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71679 = arguments.length;
var i__4731__auto___71680 = (0);
while(true){
if((i__4731__auto___71680 < len__4730__auto___71679)){
args__4736__auto__.push((arguments[i__4731__auto___71680]));

var G__71681 = (i__4731__auto___71680 + (1));
i__4731__auto___71680 = G__71681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68782 = conformed_args__58615__auto__;
var map__68782__$1 = (((((!((map__68782 == null))))?(((((map__68782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68782):map__68782);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68782__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68782__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68782__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphDef.cljs$lang$applyTo = (function (seq68774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68774));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshrow "hello")
 * (meshrow nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshrow {:onClick f} "hello")
 * (meshrow #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshrow :#the-id.klass.other-klass "hello")
 * (meshrow :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.meshrow = (function fulcro$client$localized_dom$meshrow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71690 = arguments.length;
var i__4731__auto___71691 = (0);
while(true){
if((i__4731__auto___71691 < len__4730__auto___71690)){
args__4736__auto__.push((arguments[i__4731__auto___71691]));

var G__71692 = (i__4731__auto___71691 + (1));
i__4731__auto___71691 = G__71692;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68787 = conformed_args__58615__auto__;
var map__68787__$1 = (((((!((map__68787 == null))))?(((((map__68787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68787):map__68787);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshrow.cljs$lang$applyTo = (function (seq68786){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68786));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (cursor "hello")
 * (cursor nil "hello")
 * 
 * These two are made equivalent at compile time
 * (cursor {:onClick f} "hello")
 * (cursor #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (cursor :#the-id.klass.other-klass "hello")
 * (cursor :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.cursor = (function fulcro$client$localized_dom$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71700 = arguments.length;
var i__4731__auto___71701 = (0);
while(true){
if((i__4731__auto___71701 < len__4730__auto___71700)){
args__4736__auto__.push((arguments[i__4731__auto___71701]));

var G__71702 = (i__4731__auto___71701 + (1));
i__4731__auto___71701 = G__71702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68800 = conformed_args__58615__auto__;
var map__68800__$1 = (((((!((map__68800 == null))))?(((((map__68800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68800):map__68800);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cursor.cljs$lang$applyTo = (function (seq68792){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68792));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animate "hello")
 * (animate nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animate {:onClick f} "hello")
 * (animate #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animate :#the-id.klass.other-klass "hello")
 * (animate :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.animate = (function fulcro$client$localized_dom$animate(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71707 = arguments.length;
var i__4731__auto___71708 = (0);
while(true){
if((i__4731__auto___71708 < len__4730__auto___71707)){
args__4736__auto__.push((arguments[i__4731__auto___71708]));

var G__71710 = (i__4731__auto___71708 + (1));
i__4731__auto___71708 = G__71710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68822 = conformed_args__58615__auto__;
var map__68822__$1 = (((((!((map__68822 == null))))?(((((map__68822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68822):map__68822);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animate.cljs$lang$applyTo = (function (seq68818){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68818));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (source "hello")
 * (source nil "hello")
 * 
 * These two are made equivalent at compile time
 * (source {:onClick f} "hello")
 * (source #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (source :#the-id.klass.other-klass "hello")
 * (source :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.source = (function fulcro$client$localized_dom$source(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71717 = arguments.length;
var i__4731__auto___71719 = (0);
while(true){
if((i__4731__auto___71719 < len__4730__auto___71717)){
args__4736__auto__.push((arguments[i__4731__auto___71719]));

var G__71720 = (i__4731__auto___71719 + (1));
i__4731__auto___71719 = G__71720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68830 = conformed_args__58615__auto__;
var map__68830__$1 = (((((!((map__68830 == null))))?(((((map__68830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68830):map__68830);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.source.cljs$lang$applyTo = (function (seq68826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68826));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (output "hello")
 * (output nil "hello")
 * 
 * These two are made equivalent at compile time
 * (output {:onClick f} "hello")
 * (output #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (output :#the-id.klass.other-klass "hello")
 * (output :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.output = (function fulcro$client$localized_dom$output(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71725 = arguments.length;
var i__4731__auto___71726 = (0);
while(true){
if((i__4731__auto___71726 < len__4730__auto___71725)){
args__4736__auto__.push((arguments[i__4731__auto___71726]));

var G__71727 = (i__4731__auto___71726 + (1));
i__4731__auto___71726 = G__71727;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68846 = conformed_args__58615__auto__;
var map__68846__$1 = (((((!((map__68846 == null))))?(((((map__68846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68846):map__68846);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.output.cljs$lang$applyTo = (function (seq68839){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68839));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face "hello")
 * (font-face nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face {:onClick f} "hello")
 * (font-face #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face :#the-id.klass.other-klass "hello")
 * (font-face :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.font_face = (function fulcro$client$localized_dom$font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71730 = arguments.length;
var i__4731__auto___71731 = (0);
while(true){
if((i__4731__auto___71731 < len__4730__auto___71730)){
args__4736__auto__.push((arguments[i__4731__auto___71731]));

var G__71733 = (i__4731__auto___71731 + (1));
i__4731__auto___71731 = G__71733;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68869 = conformed_args__58615__auto__;
var map__68869__$1 = (((((!((map__68869 == null))))?(((((map__68869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68869):map__68869);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68869__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68869__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68869__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face.cljs$lang$applyTo = (function (seq68856){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68856));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMergeNode "hello")
 * (feMergeNode nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMergeNode {:onClick f} "hello")
 * (feMergeNode #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMergeNode :#the-id.klass.other-klass "hello")
 * (feMergeNode :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feMergeNode = (function fulcro$client$localized_dom$feMergeNode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71737 = arguments.length;
var i__4731__auto___71738 = (0);
while(true){
if((i__4731__auto___71738 < len__4730__auto___71737)){
args__4736__auto__.push((arguments[i__4731__auto___71738]));

var G__71741 = (i__4731__auto___71738 + (1));
i__4731__auto___71738 = G__71741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68882 = conformed_args__58615__auto__;
var map__68882__$1 = (((((!((map__68882 == null))))?(((((map__68882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68882):map__68882);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68882__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68882__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68882__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMergeNode.cljs$lang$applyTo = (function (seq68876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68876));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feSpotLight "hello")
 * (feSpotLight nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feSpotLight {:onClick f} "hello")
 * (feSpotLight #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feSpotLight :#the-id.klass.other-klass "hello")
 * (feSpotLight :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feSpotLight = (function fulcro$client$localized_dom$feSpotLight(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71747 = arguments.length;
var i__4731__auto___71748 = (0);
while(true){
if((i__4731__auto___71748 < len__4730__auto___71747)){
args__4736__auto__.push((arguments[i__4731__auto___71748]));

var G__71749 = (i__4731__auto___71748 + (1));
i__4731__auto___71748 = G__71749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68913 = conformed_args__58615__auto__;
var map__68913__$1 = (((((!((map__68913 == null))))?(((((map__68913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68913):map__68913);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68913__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68913__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68913__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpotLight.cljs$lang$applyTo = (function (seq68903){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68903));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (header "hello")
 * (header nil "hello")
 * 
 * These two are made equivalent at compile time
 * (header {:onClick f} "hello")
 * (header #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (header :#the-id.klass.other-klass "hello")
 * (header :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.header = (function fulcro$client$localized_dom$header(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71759 = arguments.length;
var i__4731__auto___71760 = (0);
while(true){
if((i__4731__auto___71760 < len__4730__auto___71759)){
args__4736__auto__.push((arguments[i__4731__auto___71760]));

var G__71761 = (i__4731__auto___71760 + (1));
i__4731__auto___71760 = G__71761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68932 = conformed_args__58615__auto__;
var map__68932__$1 = (((((!((map__68932 == null))))?(((((map__68932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68932):map__68932);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68932__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68932__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68932__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.header.cljs$lang$applyTo = (function (seq68930){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68930));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (datalist "hello")
 * (datalist nil "hello")
 * 
 * These two are made equivalent at compile time
 * (datalist {:onClick f} "hello")
 * (datalist #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (datalist :#the-id.klass.other-klass "hello")
 * (datalist :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.datalist = (function fulcro$client$localized_dom$datalist(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71767 = arguments.length;
var i__4731__auto___71768 = (0);
while(true){
if((i__4731__auto___71768 < len__4730__auto___71767)){
args__4736__auto__.push((arguments[i__4731__auto___71768]));

var G__71770 = (i__4731__auto___71768 + (1));
i__4731__auto___71768 = G__71770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__68966 = conformed_args__58615__auto__;
var map__68966__$1 = (((((!((map__68966 == null))))?(((((map__68966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68966):map__68966);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.datalist.cljs$lang$applyTo = (function (seq68944){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68944));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tfoot "hello")
 * (tfoot nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tfoot {:onClick f} "hello")
 * (tfoot #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tfoot :#the-id.klass.other-klass "hello")
 * (tfoot :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.tfoot = (function fulcro$client$localized_dom$tfoot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71774 = arguments.length;
var i__4731__auto___71776 = (0);
while(true){
if((i__4731__auto___71776 < len__4730__auto___71774)){
args__4736__auto__.push((arguments[i__4731__auto___71776]));

var G__71779 = (i__4731__auto___71776 + (1));
i__4731__auto___71776 = G__71779;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69009 = conformed_args__58615__auto__;
var map__69009__$1 = (((((!((map__69009 == null))))?(((((map__69009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69009):map__69009);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tfoot.cljs$lang$applyTo = (function (seq68987){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68987));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (s "hello")
 * (s nil "hello")
 * 
 * These two are made equivalent at compile time
 * (s {:onClick f} "hello")
 * (s #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (s :#the-id.klass.other-klass "hello")
 * (s :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.s = (function fulcro$client$localized_dom$s(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71799 = arguments.length;
var i__4731__auto___71804 = (0);
while(true){
if((i__4731__auto___71804 < len__4730__auto___71799)){
args__4736__auto__.push((arguments[i__4731__auto___71804]));

var G__71806 = (i__4731__auto___71804 + (1));
i__4731__auto___71804 = G__71806;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69052 = conformed_args__58615__auto__;
var map__69052__$1 = (((((!((map__69052 == null))))?(((((map__69052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69052):map__69052);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69052__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69052__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69052__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.s.cljs$lang$applyTo = (function (seq69017){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69017));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (hatch "hello")
 * (hatch nil "hello")
 * 
 * These two are made equivalent at compile time
 * (hatch {:onClick f} "hello")
 * (hatch #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (hatch :#the-id.klass.other-klass "hello")
 * (hatch :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.hatch = (function fulcro$client$localized_dom$hatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71821 = arguments.length;
var i__4731__auto___71822 = (0);
while(true){
if((i__4731__auto___71822 < len__4730__auto___71821)){
args__4736__auto__.push((arguments[i__4731__auto___71822]));

var G__71823 = (i__4731__auto___71822 + (1));
i__4731__auto___71822 = G__71823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69064 = conformed_args__58615__auto__;
var map__69064__$1 = (((((!((map__69064 == null))))?(((((map__69064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69064):map__69064);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69064__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69064__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69064__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatch.cljs$lang$applyTo = (function (seq69057){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69057));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ins "hello")
 * (ins nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ins {:onClick f} "hello")
 * (ins #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ins :#the-id.klass.other-klass "hello")
 * (ins :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.ins = (function fulcro$client$localized_dom$ins(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71827 = arguments.length;
var i__4731__auto___71828 = (0);
while(true){
if((i__4731__auto___71828 < len__4730__auto___71827)){
args__4736__auto__.push((arguments[i__4731__auto___71828]));

var G__71829 = (i__4731__auto___71828 + (1));
i__4731__auto___71828 = G__71829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69117 = conformed_args__58615__auto__;
var map__69117__$1 = (((((!((map__69117 == null))))?(((((map__69117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69117):map__69117);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69117__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69117__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69117__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ins.cljs$lang$applyTo = (function (seq69097){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69097));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (footer "hello")
 * (footer nil "hello")
 * 
 * These two are made equivalent at compile time
 * (footer {:onClick f} "hello")
 * (footer #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (footer :#the-id.klass.other-klass "hello")
 * (footer :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.footer = (function fulcro$client$localized_dom$footer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71838 = arguments.length;
var i__4731__auto___71839 = (0);
while(true){
if((i__4731__auto___71839 < len__4730__auto___71838)){
args__4736__auto__.push((arguments[i__4731__auto___71839]));

var G__71840 = (i__4731__auto___71839 + (1));
i__4731__auto___71839 = G__71840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69172 = conformed_args__58615__auto__;
var map__69172__$1 = (((((!((map__69172 == null))))?(((((map__69172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69172):map__69172);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.footer.cljs$lang$applyTo = (function (seq69157){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69157));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mpath "hello")
 * (mpath nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mpath {:onClick f} "hello")
 * (mpath #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mpath :#the-id.klass.other-klass "hello")
 * (mpath :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.mpath = (function fulcro$client$localized_dom$mpath(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71845 = arguments.length;
var i__4731__auto___71846 = (0);
while(true){
if((i__4731__auto___71846 < len__4730__auto___71845)){
args__4736__auto__.push((arguments[i__4731__auto___71846]));

var G__71847 = (i__4731__auto___71846 + (1));
i__4731__auto___71846 = G__71847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69216 = conformed_args__58615__auto__;
var map__69216__$1 = (((((!((map__69216 == null))))?(((((map__69216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69216):map__69216);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mpath.cljs$lang$applyTo = (function (seq69188){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69188));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (title "hello")
 * (title nil "hello")
 * 
 * These two are made equivalent at compile time
 * (title {:onClick f} "hello")
 * (title #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (title :#the-id.klass.other-klass "hello")
 * (title :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.title = (function fulcro$client$localized_dom$title(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71855 = arguments.length;
var i__4731__auto___71856 = (0);
while(true){
if((i__4731__auto___71856 < len__4730__auto___71855)){
args__4736__auto__.push((arguments[i__4731__auto___71856]));

var G__71857 = (i__4731__auto___71856 + (1));
i__4731__auto___71856 = G__71857;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69279 = conformed_args__58615__auto__;
var map__69279__$1 = (((((!((map__69279 == null))))?(((((map__69279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69279):map__69279);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.title.cljs$lang$applyTo = (function (seq69255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69255));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h5 "hello")
 * (h5 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h5 {:onClick f} "hello")
 * (h5 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h5 :#the-id.klass.other-klass "hello")
 * (h5 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.h5 = (function fulcro$client$localized_dom$h5(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71863 = arguments.length;
var i__4731__auto___71864 = (0);
while(true){
if((i__4731__auto___71864 < len__4730__auto___71863)){
args__4736__auto__.push((arguments[i__4731__auto___71864]));

var G__71865 = (i__4731__auto___71864 + (1));
i__4731__auto___71864 = G__71865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69334 = conformed_args__58615__auto__;
var map__69334__$1 = (((((!((map__69334 == null))))?(((((map__69334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69334):map__69334);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69334__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69334__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69334__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h5.cljs$lang$applyTo = (function (seq69315){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69315));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meshgradient "hello")
 * (meshgradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meshgradient {:onClick f} "hello")
 * (meshgradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meshgradient :#the-id.klass.other-klass "hello")
 * (meshgradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.meshgradient = (function fulcro$client$localized_dom$meshgradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71867 = arguments.length;
var i__4731__auto___71868 = (0);
while(true){
if((i__4731__auto___71868 < len__4730__auto___71867)){
args__4736__auto__.push((arguments[i__4731__auto___71868]));

var G__71873 = (i__4731__auto___71868 + (1));
i__4731__auto___71868 = G__71873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69357 = conformed_args__58615__auto__;
var map__69357__$1 = (((((!((map__69357 == null))))?(((((map__69357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69357):map__69357);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69357__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69357__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshgradient.cljs$lang$applyTo = (function (seq69352){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69352));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (canvas "hello")
 * (canvas nil "hello")
 * 
 * These two are made equivalent at compile time
 * (canvas {:onClick f} "hello")
 * (canvas #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (canvas :#the-id.klass.other-klass "hello")
 * (canvas :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.canvas = (function fulcro$client$localized_dom$canvas(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71894 = arguments.length;
var i__4731__auto___71895 = (0);
while(true){
if((i__4731__auto___71895 < len__4730__auto___71894)){
args__4736__auto__.push((arguments[i__4731__auto___71895]));

var G__71896 = (i__4731__auto___71895 + (1));
i__4731__auto___71895 = G__71896;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69382 = conformed_args__58615__auto__;
var map__69382__$1 = (((((!((map__69382 == null))))?(((((map__69382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69382):map__69382);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.canvas.cljs$lang$applyTo = (function (seq69372){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69372));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (param "hello")
 * (param nil "hello")
 * 
 * These two are made equivalent at compile time
 * (param {:onClick f} "hello")
 * (param #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (param :#the-id.klass.other-klass "hello")
 * (param :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.param = (function fulcro$client$localized_dom$param(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71903 = arguments.length;
var i__4731__auto___71904 = (0);
while(true){
if((i__4731__auto___71904 < len__4730__auto___71903)){
args__4736__auto__.push((arguments[i__4731__auto___71904]));

var G__71906 = (i__4731__auto___71904 + (1));
i__4731__auto___71904 = G__71906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69411 = conformed_args__58615__auto__;
var map__69411__$1 = (((((!((map__69411 == null))))?(((((map__69411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69411):map__69411);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.param.cljs$lang$applyTo = (function (seq69403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69403));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font "hello")
 * (font nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font {:onClick f} "hello")
 * (font #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font :#the-id.klass.other-klass "hello")
 * (font :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.font = (function fulcro$client$localized_dom$font(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71918 = arguments.length;
var i__4731__auto___71919 = (0);
while(true){
if((i__4731__auto___71919 < len__4730__auto___71918)){
args__4736__auto__.push((arguments[i__4731__auto___71919]));

var G__71921 = (i__4731__auto___71919 + (1));
i__4731__auto___71919 = G__71921;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69446 = conformed_args__58615__auto__;
var map__69446__$1 = (((((!((map__69446 == null))))?(((((map__69446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69446):map__69446);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font.cljs$lang$applyTo = (function (seq69431){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69431));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (div "hello")
 * (div nil "hello")
 * 
 * These two are made equivalent at compile time
 * (div {:onClick f} "hello")
 * (div #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (div :#the-id.klass.other-klass "hello")
 * (div :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.div = (function fulcro$client$localized_dom$div(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71930 = arguments.length;
var i__4731__auto___71931 = (0);
while(true){
if((i__4731__auto___71931 < len__4730__auto___71930)){
args__4736__auto__.push((arguments[i__4731__auto___71931]));

var G__71933 = (i__4731__auto___71931 + (1));
i__4731__auto___71931 = G__71933;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69481 = conformed_args__58615__auto__;
var map__69481__$1 = (((((!((map__69481 == null))))?(((((map__69481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69481):map__69481);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.div.cljs$lang$applyTo = (function (seq69471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69471));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (option "hello")
 * (option nil "hello")
 * 
 * These two are made equivalent at compile time
 * (option {:onClick f} "hello")
 * (option #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (option :#the-id.klass.other-klass "hello")
 * (option :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.option = (function fulcro$client$localized_dom$option(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71944 = arguments.length;
var i__4731__auto___71945 = (0);
while(true){
if((i__4731__auto___71945 < len__4730__auto___71944)){
args__4736__auto__.push((arguments[i__4731__auto___71945]));

var G__71946 = (i__4731__auto___71945 + (1));
i__4731__auto___71945 = G__71946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69496 = conformed_args__58615__auto__;
var map__69496__$1 = (((((!((map__69496 == null))))?(((((map__69496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69496):map__69496);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69496__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69496__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69496__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.option.cljs$lang$applyTo = (function (seq69493){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69493));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feFlood "hello")
 * (feFlood nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feFlood {:onClick f} "hello")
 * (feFlood #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feFlood :#the-id.klass.other-klass "hello")
 * (feFlood :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feFlood = (function fulcro$client$localized_dom$feFlood(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71950 = arguments.length;
var i__4731__auto___71951 = (0);
while(true){
if((i__4731__auto___71951 < len__4730__auto___71950)){
args__4736__auto__.push((arguments[i__4731__auto___71951]));

var G__71952 = (i__4731__auto___71951 + (1));
i__4731__auto___71951 = G__71952;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69518 = conformed_args__58615__auto__;
var map__69518__$1 = (((((!((map__69518 == null))))?(((((map__69518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69518):map__69518);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69518__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69518__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69518__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFlood.cljs$lang$applyTo = (function (seq69510){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69510));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (summary "hello")
 * (summary nil "hello")
 * 
 * These two are made equivalent at compile time
 * (summary {:onClick f} "hello")
 * (summary #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (summary :#the-id.klass.other-klass "hello")
 * (summary :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.summary = (function fulcro$client$localized_dom$summary(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71958 = arguments.length;
var i__4731__auto___71960 = (0);
while(true){
if((i__4731__auto___71960 < len__4730__auto___71958)){
args__4736__auto__.push((arguments[i__4731__auto___71960]));

var G__71962 = (i__4731__auto___71960 + (1));
i__4731__auto___71960 = G__71962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69546 = conformed_args__58615__auto__;
var map__69546__$1 = (((((!((map__69546 == null))))?(((((map__69546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69546):map__69546);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.summary.cljs$lang$applyTo = (function (seq69531){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69531));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feMorphology "hello")
 * (feMorphology nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feMorphology {:onClick f} "hello")
 * (feMorphology #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feMorphology :#the-id.klass.other-klass "hello")
 * (feMorphology :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feMorphology = (function fulcro$client$localized_dom$feMorphology(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71970 = arguments.length;
var i__4731__auto___71971 = (0);
while(true){
if((i__4731__auto___71971 < len__4730__auto___71970)){
args__4736__auto__.push((arguments[i__4731__auto___71971]));

var G__71972 = (i__4731__auto___71971 + (1));
i__4731__auto___71971 = G__71972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69579 = conformed_args__58615__auto__;
var map__69579__$1 = (((((!((map__69579 == null))))?(((((map__69579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69579):map__69579);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMorphology.cljs$lang$applyTo = (function (seq69568){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69568));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (samp "hello")
 * (samp nil "hello")
 * 
 * These two are made equivalent at compile time
 * (samp {:onClick f} "hello")
 * (samp #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (samp :#the-id.klass.other-klass "hello")
 * (samp :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.samp = (function fulcro$client$localized_dom$samp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___71988 = arguments.length;
var i__4731__auto___71989 = (0);
while(true){
if((i__4731__auto___71989 < len__4730__auto___71988)){
args__4736__auto__.push((arguments[i__4731__auto___71989]));

var G__71990 = (i__4731__auto___71989 + (1));
i__4731__auto___71989 = G__71990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69596 = conformed_args__58615__auto__;
var map__69596__$1 = (((((!((map__69596 == null))))?(((((map__69596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69596):map__69596);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.samp.cljs$lang$applyTo = (function (seq69586){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69586));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyphRef "hello")
 * (glyphRef nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyphRef {:onClick f} "hello")
 * (glyphRef #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyphRef :#the-id.klass.other-klass "hello")
 * (glyphRef :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.glyphRef = (function fulcro$client$localized_dom$glyphRef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72002 = arguments.length;
var i__4731__auto___72003 = (0);
while(true){
if((i__4731__auto___72003 < len__4730__auto___72002)){
args__4736__auto__.push((arguments[i__4731__auto___72003]));

var G__72004 = (i__4731__auto___72003 + (1));
i__4731__auto___72003 = G__72004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69632 = conformed_args__58615__auto__;
var map__69632__$1 = (((((!((map__69632 == null))))?(((((map__69632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69632):map__69632);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyphRef.cljs$lang$applyTo = (function (seq69626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69626));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (small "hello")
 * (small nil "hello")
 * 
 * These two are made equivalent at compile time
 * (small {:onClick f} "hello")
 * (small #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (small :#the-id.klass.other-klass "hello")
 * (small :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.small = (function fulcro$client$localized_dom$small(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72025 = arguments.length;
var i__4731__auto___72026 = (0);
while(true){
if((i__4731__auto___72026 < len__4730__auto___72025)){
args__4736__auto__.push((arguments[i__4731__auto___72026]));

var G__72030 = (i__4731__auto___72026 + (1));
i__4731__auto___72026 = G__72030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69648 = conformed_args__58615__auto__;
var map__69648__$1 = (((((!((map__69648 == null))))?(((((map__69648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69648):map__69648);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69648__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69648__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69648__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.small.cljs$lang$applyTo = (function (seq69640){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69640));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (style "hello")
 * (style nil "hello")
 * 
 * These two are made equivalent at compile time
 * (style {:onClick f} "hello")
 * (style #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (style :#the-id.klass.other-klass "hello")
 * (style :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.style = (function fulcro$client$localized_dom$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72047 = arguments.length;
var i__4731__auto___72048 = (0);
while(true){
if((i__4731__auto___72048 < len__4730__auto___72047)){
args__4736__auto__.push((arguments[i__4731__auto___72048]));

var G__72050 = (i__4731__auto___72048 + (1));
i__4731__auto___72048 = G__72050;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69657 = conformed_args__58615__auto__;
var map__69657__$1 = (((((!((map__69657 == null))))?(((((map__69657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69657):map__69657);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69657__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69657__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.style.cljs$lang$applyTo = (function (seq69654){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69654));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (textarea "hello")
 * (textarea nil "hello")
 * 
 * These two are made equivalent at compile time
 * (textarea {:onClick f} "hello")
 * (textarea #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (textarea :#the-id.klass.other-klass "hello")
 * (textarea :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.textarea = (function fulcro$client$localized_dom$textarea(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72064 = arguments.length;
var i__4731__auto___72066 = (0);
while(true){
if((i__4731__auto___72066 < len__4730__auto___72064)){
args__4736__auto__.push((arguments[i__4731__auto___72066]));

var G__72067 = (i__4731__auto___72066 + (1));
i__4731__auto___72066 = G__72067;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69674 = conformed_args__58615__auto__;
var map__69674__$1 = (((((!((map__69674 == null))))?(((((map__69674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69674):map__69674);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textarea.cljs$lang$applyTo = (function (seq69667){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69667));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur "hello")
 * (feGaussianBlur nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feGaussianBlur {:onClick f} "hello")
 * (feGaussianBlur #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feGaussianBlur :#the-id.klass.other-klass "hello")
 * (feGaussianBlur :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feGaussianBlur = (function fulcro$client$localized_dom$feGaussianBlur(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72083 = arguments.length;
var i__4731__auto___72084 = (0);
while(true){
if((i__4731__auto___72084 < len__4730__auto___72083)){
args__4736__auto__.push((arguments[i__4731__auto___72084]));

var G__72085 = (i__4731__auto___72084 + (1));
i__4731__auto___72084 = G__72085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69685 = conformed_args__58615__auto__;
var map__69685__$1 = (((((!((map__69685 == null))))?(((((map__69685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69685):map__69685);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feGaussianBlur.cljs$lang$applyTo = (function (seq69683){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69683));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h4 "hello")
 * (h4 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h4 {:onClick f} "hello")
 * (h4 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h4 :#the-id.klass.other-klass "hello")
 * (h4 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.h4 = (function fulcro$client$localized_dom$h4(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72089 = arguments.length;
var i__4731__auto___72090 = (0);
while(true){
if((i__4731__auto___72090 < len__4730__auto___72089)){
args__4736__auto__.push((arguments[i__4731__auto___72090]));

var G__72093 = (i__4731__auto___72090 + (1));
i__4731__auto___72090 = G__72093;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69695 = conformed_args__58615__auto__;
var map__69695__$1 = (((((!((map__69695 == null))))?(((((map__69695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69695):map__69695);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69695__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h4.cljs$lang$applyTo = (function (seq69692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69692));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (head "hello")
 * (head nil "hello")
 * 
 * These two are made equivalent at compile time
 * (head {:onClick f} "hello")
 * (head #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (head :#the-id.klass.other-klass "hello")
 * (head :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.head = (function fulcro$client$localized_dom$head(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72100 = arguments.length;
var i__4731__auto___72102 = (0);
while(true){
if((i__4731__auto___72102 < len__4730__auto___72100)){
args__4736__auto__.push((arguments[i__4731__auto___72102]));

var G__72104 = (i__4731__auto___72102 + (1));
i__4731__auto___72102 = G__72104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69712 = conformed_args__58615__auto__;
var map__69712__$1 = (((((!((map__69712 == null))))?(((((map__69712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69712):map__69712);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.head.cljs$lang$applyTo = (function (seq69704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69704));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (g "hello")
 * (g nil "hello")
 * 
 * These two are made equivalent at compile time
 * (g {:onClick f} "hello")
 * (g #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (g :#the-id.klass.other-klass "hello")
 * (g :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.g = (function fulcro$client$localized_dom$g(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72120 = arguments.length;
var i__4731__auto___72121 = (0);
while(true){
if((i__4731__auto___72121 < len__4730__auto___72120)){
args__4736__auto__.push((arguments[i__4731__auto___72121]));

var G__72124 = (i__4731__auto___72121 + (1));
i__4731__auto___72121 = G__72124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69719 = conformed_args__58615__auto__;
var map__69719__$1 = (((((!((map__69719 == null))))?(((((map__69719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69719):map__69719);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69719__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69719__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69719__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.g.cljs$lang$applyTo = (function (seq69716){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69716));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (missing-glyph "hello")
 * (missing-glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (missing-glyph {:onClick f} "hello")
 * (missing-glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (missing-glyph :#the-id.klass.other-klass "hello")
 * (missing-glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.missing_glyph = (function fulcro$client$localized_dom$missing_glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72141 = arguments.length;
var i__4731__auto___72143 = (0);
while(true){
if((i__4731__auto___72143 < len__4730__auto___72141)){
args__4736__auto__.push((arguments[i__4731__auto___72143]));

var G__72148 = (i__4731__auto___72143 + (1));
i__4731__auto___72143 = G__72148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69726 = conformed_args__58615__auto__;
var map__69726__$1 = (((((!((map__69726 == null))))?(((((map__69726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69726):map__69726);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69726__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69726__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69726__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.missing_glyph.cljs$lang$applyTo = (function (seq69723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69723));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (stop "hello")
 * (stop nil "hello")
 * 
 * These two are made equivalent at compile time
 * (stop {:onClick f} "hello")
 * (stop #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (stop :#the-id.klass.other-klass "hello")
 * (stop :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.stop = (function fulcro$client$localized_dom$stop(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72159 = arguments.length;
var i__4731__auto___72160 = (0);
while(true){
if((i__4731__auto___72160 < len__4730__auto___72159)){
args__4736__auto__.push((arguments[i__4731__auto___72160]));

var G__72163 = (i__4731__auto___72160 + (1));
i__4731__auto___72160 = G__72163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69737 = conformed_args__58615__auto__;
var map__69737__$1 = (((((!((map__69737 == null))))?(((((map__69737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69737):map__69737);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69737__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69737__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69737__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.stop.cljs$lang$applyTo = (function (seq69733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69733));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting "hello")
 * (feDiffuseLighting nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feDiffuseLighting {:onClick f} "hello")
 * (feDiffuseLighting #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feDiffuseLighting :#the-id.klass.other-klass "hello")
 * (feDiffuseLighting :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feDiffuseLighting = (function fulcro$client$localized_dom$feDiffuseLighting(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72177 = arguments.length;
var i__4731__auto___72178 = (0);
while(true){
if((i__4731__auto___72178 < len__4730__auto___72177)){
args__4736__auto__.push((arguments[i__4731__auto___72178]));

var G__72179 = (i__4731__auto___72178 + (1));
i__4731__auto___72178 = G__72179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69744 = conformed_args__58615__auto__;
var map__69744__$1 = (((((!((map__69744 == null))))?(((((map__69744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69744):map__69744);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69744__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq69743){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69743));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (filter "hello")
 * (filter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (filter {:onClick f} "hello")
 * (filter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (filter :#the-id.klass.other-klass "hello")
 * (filter :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.filter = (function fulcro$client$localized_dom$filter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72182 = arguments.length;
var i__4731__auto___72183 = (0);
while(true){
if((i__4731__auto___72183 < len__4730__auto___72182)){
args__4736__auto__.push((arguments[i__4731__auto___72183]));

var G__72184 = (i__4731__auto___72183 + (1));
i__4731__auto___72183 = G__72184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69757 = conformed_args__58615__auto__;
var map__69757__$1 = (((((!((map__69757 == null))))?(((((map__69757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69757):map__69757);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.filter.cljs$lang$applyTo = (function (seq69752){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69752));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feComposite "hello")
 * (feComposite nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feComposite {:onClick f} "hello")
 * (feComposite #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feComposite :#the-id.klass.other-klass "hello")
 * (feComposite :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feComposite = (function fulcro$client$localized_dom$feComposite(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72190 = arguments.length;
var i__4731__auto___72191 = (0);
while(true){
if((i__4731__auto___72191 < len__4730__auto___72190)){
args__4736__auto__.push((arguments[i__4731__auto___72191]));

var G__72193 = (i__4731__auto___72191 + (1));
i__4731__auto___72191 = G__72193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69765 = conformed_args__58615__auto__;
var map__69765__$1 = (((((!((map__69765 == null))))?(((((map__69765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69765):map__69765);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComposite.cljs$lang$applyTo = (function (seq69764){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69764));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (mesh "hello")
 * (mesh nil "hello")
 * 
 * These two are made equivalent at compile time
 * (mesh {:onClick f} "hello")
 * (mesh #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (mesh :#the-id.klass.other-klass "hello")
 * (mesh :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.mesh = (function fulcro$client$localized_dom$mesh(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72215 = arguments.length;
var i__4731__auto___72217 = (0);
while(true){
if((i__4731__auto___72217 < len__4730__auto___72215)){
args__4736__auto__.push((arguments[i__4731__auto___72217]));

var G__72223 = (i__4731__auto___72217 + (1));
i__4731__auto___72217 = G__72223;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69771 = conformed_args__58615__auto__;
var map__69771__$1 = (((((!((map__69771 == null))))?(((((map__69771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69771):map__69771);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69771__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69771__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69771__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mesh.cljs$lang$applyTo = (function (seq69770){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69770));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (var "hello")
 * (var nil "hello")
 * 
 * These two are made equivalent at compile time
 * (var {:onClick f} "hello")
 * (var #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (var :#the-id.klass.other-klass "hello")
 * (var :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.var$ = (function fulcro$client$localized_dom$var(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72240 = arguments.length;
var i__4731__auto___72242 = (0);
while(true){
if((i__4731__auto___72242 < len__4730__auto___72240)){
args__4736__auto__.push((arguments[i__4731__auto___72242]));

var G__72243 = (i__4731__auto___72242 + (1));
i__4731__auto___72242 = G__72243;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69775 = conformed_args__58615__auto__;
var map__69775__$1 = (((((!((map__69775 == null))))?(((((map__69775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69775):map__69775);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69775__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.var$.cljs$lang$applyTo = (function (seq69774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69774));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (tspan "hello")
 * (tspan nil "hello")
 * 
 * These two are made equivalent at compile time
 * (tspan {:onClick f} "hello")
 * (tspan #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (tspan :#the-id.klass.other-klass "hello")
 * (tspan :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.tspan = (function fulcro$client$localized_dom$tspan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72263 = arguments.length;
var i__4731__auto___72264 = (0);
while(true){
if((i__4731__auto___72264 < len__4730__auto___72263)){
args__4736__auto__.push((arguments[i__4731__auto___72264]));

var G__72268 = (i__4731__auto___72264 + (1));
i__4731__auto___72264 = G__72268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69787 = conformed_args__58615__auto__;
var map__69787__$1 = (((((!((map__69787 == null))))?(((((map__69787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69787):map__69787);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tspan.cljs$lang$applyTo = (function (seq69782){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69782));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ol "hello")
 * (ol nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ol {:onClick f} "hello")
 * (ol #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ol :#the-id.klass.other-klass "hello")
 * (ol :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.ol = (function fulcro$client$localized_dom$ol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72282 = arguments.length;
var i__4731__auto___72287 = (0);
while(true){
if((i__4731__auto___72287 < len__4730__auto___72282)){
args__4736__auto__.push((arguments[i__4731__auto___72287]));

var G__72289 = (i__4731__auto___72287 + (1));
i__4731__auto___72287 = G__72289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69795 = conformed_args__58615__auto__;
var map__69795__$1 = (((((!((map__69795 == null))))?(((((map__69795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69795):map__69795);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ol.cljs$lang$applyTo = (function (seq69790){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69790));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (details "hello")
 * (details nil "hello")
 * 
 * These two are made equivalent at compile time
 * (details {:onClick f} "hello")
 * (details #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (details :#the-id.klass.other-klass "hello")
 * (details :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.details = (function fulcro$client$localized_dom$details(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72308 = arguments.length;
var i__4731__auto___72309 = (0);
while(true){
if((i__4731__auto___72309 < len__4730__auto___72308)){
args__4736__auto__.push((arguments[i__4731__auto___72309]));

var G__72311 = (i__4731__auto___72309 + (1));
i__4731__auto___72309 = G__72311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69804 = conformed_args__58615__auto__;
var map__69804__$1 = (((((!((map__69804 == null))))?(((((map__69804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69804):map__69804);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69804__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69804__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69804__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.details.cljs$lang$applyTo = (function (seq69797){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69797));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (line "hello")
 * (line nil "hello")
 * 
 * These two are made equivalent at compile time
 * (line {:onClick f} "hello")
 * (line #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (line :#the-id.klass.other-klass "hello")
 * (line :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.line = (function fulcro$client$localized_dom$line(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72334 = arguments.length;
var i__4731__auto___72337 = (0);
while(true){
if((i__4731__auto___72337 < len__4730__auto___72334)){
args__4736__auto__.push((arguments[i__4731__auto___72337]));

var G__72338 = (i__4731__auto___72337 + (1));
i__4731__auto___72337 = G__72338;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69819 = conformed_args__58615__auto__;
var map__69819__$1 = (((((!((map__69819 == null))))?(((((map__69819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69819):map__69819);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.line.cljs$lang$applyTo = (function (seq69814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69814));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (col "hello")
 * (col nil "hello")
 * 
 * These two are made equivalent at compile time
 * (col {:onClick f} "hello")
 * (col #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (col :#the-id.klass.other-klass "hello")
 * (col :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.col = (function fulcro$client$localized_dom$col(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72356 = arguments.length;
var i__4731__auto___72357 = (0);
while(true){
if((i__4731__auto___72357 < len__4730__auto___72356)){
args__4736__auto__.push((arguments[i__4731__auto___72357]));

var G__72359 = (i__4731__auto___72357 + (1));
i__4731__auto___72357 = G__72359;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69824 = conformed_args__58615__auto__;
var map__69824__$1 = (((((!((map__69824 == null))))?(((((map__69824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69824):map__69824);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69824__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69824__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69824__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.col.cljs$lang$applyTo = (function (seq69823){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69823));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (label "hello")
 * (label nil "hello")
 * 
 * These two are made equivalent at compile time
 * (label {:onClick f} "hello")
 * (label #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (label :#the-id.klass.other-klass "hello")
 * (label :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.label = (function fulcro$client$localized_dom$label(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72399 = arguments.length;
var i__4731__auto___72400 = (0);
while(true){
if((i__4731__auto___72400 < len__4730__auto___72399)){
args__4736__auto__.push((arguments[i__4731__auto___72400]));

var G__72410 = (i__4731__auto___72400 + (1));
i__4731__auto___72400 = G__72410;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69837 = conformed_args__58615__auto__;
var map__69837__$1 = (((((!((map__69837 == null))))?(((((map__69837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69837):map__69837);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69837__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69837__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69837__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.label.cljs$lang$applyTo = (function (seq69834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69834));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (picture "hello")
 * (picture nil "hello")
 * 
 * These two are made equivalent at compile time
 * (picture {:onClick f} "hello")
 * (picture #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (picture :#the-id.klass.other-klass "hello")
 * (picture :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.picture = (function fulcro$client$localized_dom$picture(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72460 = arguments.length;
var i__4731__auto___72461 = (0);
while(true){
if((i__4731__auto___72461 < len__4730__auto___72460)){
args__4736__auto__.push((arguments[i__4731__auto___72461]));

var G__72465 = (i__4731__auto___72461 + (1));
i__4731__auto___72461 = G__72465;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69840 = conformed_args__58615__auto__;
var map__69840__$1 = (((((!((map__69840 == null))))?(((((map__69840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69840):map__69840);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.picture.cljs$lang$applyTo = (function (seq69839){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69839));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (rt "hello")
 * (rt nil "hello")
 * 
 * These two are made equivalent at compile time
 * (rt {:onClick f} "hello")
 * (rt #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (rt :#the-id.klass.other-klass "hello")
 * (rt :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.rt = (function fulcro$client$localized_dom$rt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72520 = arguments.length;
var i__4731__auto___72522 = (0);
while(true){
if((i__4731__auto___72522 < len__4730__auto___72520)){
args__4736__auto__.push((arguments[i__4731__auto___72522]));

var G__72526 = (i__4731__auto___72522 + (1));
i__4731__auto___72522 = G__72526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69849 = conformed_args__58615__auto__;
var map__69849__$1 = (((((!((map__69849 == null))))?(((((map__69849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69849):map__69849);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69849__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69849__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rt.cljs$lang$applyTo = (function (seq69844){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69844));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h6 "hello")
 * (h6 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h6 {:onClick f} "hello")
 * (h6 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h6 :#the-id.klass.other-klass "hello")
 * (h6 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.h6 = (function fulcro$client$localized_dom$h6(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72545 = arguments.length;
var i__4731__auto___72548 = (0);
while(true){
if((i__4731__auto___72548 < len__4730__auto___72545)){
args__4736__auto__.push((arguments[i__4731__auto___72548]));

var G__72557 = (i__4731__auto___72548 + (1));
i__4731__auto___72548 = G__72557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69855 = conformed_args__58615__auto__;
var map__69855__$1 = (((((!((map__69855 == null))))?(((((map__69855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69855):map__69855);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h6.cljs$lang$applyTo = (function (seq69854){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69854));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (vkern "hello")
 * (vkern nil "hello")
 * 
 * These two are made equivalent at compile time
 * (vkern {:onClick f} "hello")
 * (vkern #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (vkern :#the-id.klass.other-klass "hello")
 * (vkern :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.vkern = (function fulcro$client$localized_dom$vkern(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72620 = arguments.length;
var i__4731__auto___72621 = (0);
while(true){
if((i__4731__auto___72621 < len__4730__auto___72620)){
args__4736__auto__.push((arguments[i__4731__auto___72621]));

var G__72622 = (i__4731__auto___72621 + (1));
i__4731__auto___72621 = G__72622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69860 = conformed_args__58615__auto__;
var map__69860__$1 = (((((!((map__69860 == null))))?(((((map__69860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69860):map__69860);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.vkern.cljs$lang$applyTo = (function (seq69858){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69858));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (link "hello")
 * (link nil "hello")
 * 
 * These two are made equivalent at compile time
 * (link {:onClick f} "hello")
 * (link #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (link :#the-id.klass.other-klass "hello")
 * (link :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.link = (function fulcro$client$localized_dom$link(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72694 = arguments.length;
var i__4731__auto___72697 = (0);
while(true){
if((i__4731__auto___72697 < len__4730__auto___72694)){
args__4736__auto__.push((arguments[i__4731__auto___72697]));

var G__72714 = (i__4731__auto___72697 + (1));
i__4731__auto___72697 = G__72714;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69872 = conformed_args__58615__auto__;
var map__69872__$1 = (((((!((map__69872 == null))))?(((((map__69872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69872):map__69872);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.link.cljs$lang$applyTo = (function (seq69869){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69869));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (defs "hello")
 * (defs nil "hello")
 * 
 * These two are made equivalent at compile time
 * (defs {:onClick f} "hello")
 * (defs #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (defs :#the-id.klass.other-klass "hello")
 * (defs :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.defs = (function fulcro$client$localized_dom$defs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72765 = arguments.length;
var i__4731__auto___72766 = (0);
while(true){
if((i__4731__auto___72766 < len__4730__auto___72765)){
args__4736__auto__.push((arguments[i__4731__auto___72766]));

var G__72768 = (i__4731__auto___72766 + (1));
i__4731__auto___72766 = G__72768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69879 = conformed_args__58615__auto__;
var map__69879__$1 = (((((!((map__69879 == null))))?(((((map__69879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69879):map__69879);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.defs.cljs$lang$applyTo = (function (seq69876){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69876));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (glyph "hello")
 * (glyph nil "hello")
 * 
 * These two are made equivalent at compile time
 * (glyph {:onClick f} "hello")
 * (glyph #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (glyph :#the-id.klass.other-klass "hello")
 * (glyph :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.glyph = (function fulcro$client$localized_dom$glyph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72842 = arguments.length;
var i__4731__auto___72843 = (0);
while(true){
if((i__4731__auto___72843 < len__4730__auto___72842)){
args__4736__auto__.push((arguments[i__4731__auto___72843]));

var G__72854 = (i__4731__auto___72843 + (1));
i__4731__auto___72843 = G__72854;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69905 = conformed_args__58615__auto__;
var map__69905__$1 = (((((!((map__69905 == null))))?(((((map__69905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69905):map__69905);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69905__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69905__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69905__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyph.cljs$lang$applyTo = (function (seq69895){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69895));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (colgroup "hello")
 * (colgroup nil "hello")
 * 
 * These two are made equivalent at compile time
 * (colgroup {:onClick f} "hello")
 * (colgroup #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (colgroup :#the-id.klass.other-klass "hello")
 * (colgroup :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.colgroup = (function fulcro$client$localized_dom$colgroup(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72889 = arguments.length;
var i__4731__auto___72890 = (0);
while(true){
if((i__4731__auto___72890 < len__4730__auto___72889)){
args__4736__auto__.push((arguments[i__4731__auto___72890]));

var G__72891 = (i__4731__auto___72890 + (1));
i__4731__auto___72890 = G__72891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69918 = conformed_args__58615__auto__;
var map__69918__$1 = (((((!((map__69918 == null))))?(((((map__69918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69918):map__69918);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69918__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69918__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69918__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.colgroup.cljs$lang$applyTo = (function (seq69913){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69913));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (meter "hello")
 * (meter nil "hello")
 * 
 * These two are made equivalent at compile time
 * (meter {:onClick f} "hello")
 * (meter #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (meter :#the-id.klass.other-klass "hello")
 * (meter :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.meter = (function fulcro$client$localized_dom$meter(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72904 = arguments.length;
var i__4731__auto___72906 = (0);
while(true){
if((i__4731__auto___72906 < len__4730__auto___72904)){
args__4736__auto__.push((arguments[i__4731__auto___72906]));

var G__72908 = (i__4731__auto___72906 + (1));
i__4731__auto___72906 = G__72908;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69938 = conformed_args__58615__auto__;
var map__69938__$1 = (((((!((map__69938 == null))))?(((((map__69938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69938):map__69938);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69938__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69938__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69938__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meter.cljs$lang$applyTo = (function (seq69925){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69925));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (bdo "hello")
 * (bdo nil "hello")
 * 
 * These two are made equivalent at compile time
 * (bdo {:onClick f} "hello")
 * (bdo #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (bdo :#the-id.klass.other-klass "hello")
 * (bdo :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.bdo = (function fulcro$client$localized_dom$bdo(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72931 = arguments.length;
var i__4731__auto___72933 = (0);
while(true){
if((i__4731__auto___72933 < len__4730__auto___72931)){
args__4736__auto__.push((arguments[i__4731__auto___72933]));

var G__72936 = (i__4731__auto___72933 + (1));
i__4731__auto___72933 = G__72936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69950 = conformed_args__58615__auto__;
var map__69950__$1 = (((((!((map__69950 == null))))?(((((map__69950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69950):map__69950);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69950__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69950__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69950__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdo.cljs$lang$applyTo = (function (seq69944){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69944));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feImage "hello")
 * (feImage nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feImage {:onClick f} "hello")
 * (feImage #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feImage :#the-id.klass.other-klass "hello")
 * (feImage :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feImage = (function fulcro$client$localized_dom$feImage(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72952 = arguments.length;
var i__4731__auto___72953 = (0);
while(true){
if((i__4731__auto___72953 < len__4730__auto___72952)){
args__4736__auto__.push((arguments[i__4731__auto___72953]));

var G__72956 = (i__4731__auto___72953 + (1));
i__4731__auto___72953 = G__72956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69957 = conformed_args__58615__auto__;
var map__69957__$1 = (((((!((map__69957 == null))))?(((((map__69957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69957):map__69957);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69957__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69957__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69957__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feImage.cljs$lang$applyTo = (function (seq69953){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69953));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (b "hello")
 * (b nil "hello")
 * 
 * These two are made equivalent at compile time
 * (b {:onClick f} "hello")
 * (b #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (b :#the-id.klass.other-klass "hello")
 * (b :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.b = (function fulcro$client$localized_dom$b(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72970 = arguments.length;
var i__4731__auto___72972 = (0);
while(true){
if((i__4731__auto___72972 < len__4730__auto___72970)){
args__4736__auto__.push((arguments[i__4731__auto___72972]));

var G__72975 = (i__4731__auto___72972 + (1));
i__4731__auto___72972 = G__72975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69970 = conformed_args__58615__auto__;
var map__69970__$1 = (((((!((map__69970 == null))))?(((((map__69970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69970):map__69970);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.b.cljs$lang$applyTo = (function (seq69965){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69965));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (svg "hello")
 * (svg nil "hello")
 * 
 * These two are made equivalent at compile time
 * (svg {:onClick f} "hello")
 * (svg #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (svg :#the-id.klass.other-klass "hello")
 * (svg :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.svg = (function fulcro$client$localized_dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___72986 = arguments.length;
var i__4731__auto___72987 = (0);
while(true){
if((i__4731__auto___72987 < len__4730__auto___72986)){
args__4736__auto__.push((arguments[i__4731__auto___72987]));

var G__72989 = (i__4731__auto___72987 + (1));
i__4731__auto___72987 = G__72989;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69976 = conformed_args__58615__auto__;
var map__69976__$1 = (((((!((map__69976 == null))))?(((((map__69976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69976):map__69976);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69976__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69976__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69976__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.svg.cljs$lang$applyTo = (function (seq69972){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69972));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feTile "hello")
 * (feTile nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feTile {:onClick f} "hello")
 * (feTile #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feTile :#the-id.klass.other-klass "hello")
 * (feTile :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feTile = (function fulcro$client$localized_dom$feTile(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73020 = arguments.length;
var i__4731__auto___73024 = (0);
while(true){
if((i__4731__auto___73024 < len__4730__auto___73020)){
args__4736__auto__.push((arguments[i__4731__auto___73024]));

var G__73025 = (i__4731__auto___73024 + (1));
i__4731__auto___73024 = G__73025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__69988 = conformed_args__58615__auto__;
var map__69988__$1 = (((((!((map__69988 == null))))?(((((map__69988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69988):map__69988);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69988__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69988__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69988__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTile.cljs$lang$applyTo = (function (seq69980){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69980));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (ellipse "hello")
 * (ellipse nil "hello")
 * 
 * These two are made equivalent at compile time
 * (ellipse {:onClick f} "hello")
 * (ellipse #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (ellipse :#the-id.klass.other-klass "hello")
 * (ellipse :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.ellipse = (function fulcro$client$localized_dom$ellipse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73035 = arguments.length;
var i__4731__auto___73036 = (0);
while(true){
if((i__4731__auto___73036 < len__4730__auto___73035)){
args__4736__auto__.push((arguments[i__4731__auto___73036]));

var G__73038 = (i__4731__auto___73036 + (1));
i__4731__auto___73036 = G__73038;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70010 = conformed_args__58615__auto__;
var map__70010__$1 = (((((!((map__70010 == null))))?(((((map__70010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70010):map__70010);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ellipse.cljs$lang$applyTo = (function (seq70005){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70005));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (code "hello")
 * (code nil "hello")
 * 
 * These two are made equivalent at compile time
 * (code {:onClick f} "hello")
 * (code #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (code :#the-id.klass.other-klass "hello")
 * (code :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.code = (function fulcro$client$localized_dom$code(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73044 = arguments.length;
var i__4731__auto___73045 = (0);
while(true){
if((i__4731__auto___73045 < len__4730__auto___73044)){
args__4736__auto__.push((arguments[i__4731__auto___73045]));

var G__73047 = (i__4731__auto___73045 + (1));
i__4731__auto___73045 = G__73047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70021 = conformed_args__58615__auto__;
var map__70021__$1 = (((((!((map__70021 == null))))?(((((map__70021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70021):map__70021);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70021__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70021__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.code.cljs$lang$applyTo = (function (seq70019){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70019));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (dialog "hello")
 * (dialog nil "hello")
 * 
 * These two are made equivalent at compile time
 * (dialog {:onClick f} "hello")
 * (dialog #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (dialog :#the-id.klass.other-klass "hello")
 * (dialog :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.dialog = (function fulcro$client$localized_dom$dialog(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73058 = arguments.length;
var i__4731__auto___73059 = (0);
while(true){
if((i__4731__auto___73059 < len__4730__auto___73058)){
args__4736__auto__.push((arguments[i__4731__auto___73059]));

var G__73063 = (i__4731__auto___73059 + (1));
i__4731__auto___73059 = G__73063;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70032 = conformed_args__58615__auto__;
var map__70032__$1 = (((((!((map__70032 == null))))?(((((map__70032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70032):map__70032);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dialog.cljs$lang$applyTo = (function (seq70027){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70027));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (linearGradient "hello")
 * (linearGradient nil "hello")
 * 
 * These two are made equivalent at compile time
 * (linearGradient {:onClick f} "hello")
 * (linearGradient #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (linearGradient :#the-id.klass.other-klass "hello")
 * (linearGradient :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.linearGradient = (function fulcro$client$localized_dom$linearGradient(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73074 = arguments.length;
var i__4731__auto___73075 = (0);
while(true){
if((i__4731__auto___73075 < len__4730__auto___73074)){
args__4736__auto__.push((arguments[i__4731__auto___73075]));

var G__73077 = (i__4731__auto___73075 + (1));
i__4731__auto___73075 = G__73077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70038 = conformed_args__58615__auto__;
var map__70038__$1 = (((((!((map__70038 == null))))?(((((map__70038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70038):map__70038);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq70034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70034));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (discard "hello")
 * (discard nil "hello")
 * 
 * These two are made equivalent at compile time
 * (discard {:onClick f} "hello")
 * (discard #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (discard :#the-id.klass.other-klass "hello")
 * (discard :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.discard = (function fulcro$client$localized_dom$discard(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73087 = arguments.length;
var i__4731__auto___73088 = (0);
while(true){
if((i__4731__auto___73088 < len__4730__auto___73087)){
args__4736__auto__.push((arguments[i__4731__auto___73088]));

var G__73090 = (i__4731__auto___73088 + (1));
i__4731__auto___73088 = G__73090;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70049 = conformed_args__58615__auto__;
var map__70049__$1 = (((((!((map__70049 == null))))?(((((map__70049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70049):map__70049);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70049__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70049__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70049__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.discard.cljs$lang$applyTo = (function (seq70046){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70046));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (font-face-src "hello")
 * (font-face-src nil "hello")
 * 
 * These two are made equivalent at compile time
 * (font-face-src {:onClick f} "hello")
 * (font-face-src #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (font-face-src :#the-id.klass.other-klass "hello")
 * (font-face-src :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.font_face_src = (function fulcro$client$localized_dom$font_face_src(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73098 = arguments.length;
var i__4731__auto___73099 = (0);
while(true){
if((i__4731__auto___73099 < len__4730__auto___73098)){
args__4736__auto__.push((arguments[i__4731__auto___73099]));

var G__73100 = (i__4731__auto___73099 + (1));
i__4731__auto___73099 = G__73100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70075 = conformed_args__58615__auto__;
var map__70075__$1 = (((((!((map__70075 == null))))?(((((map__70075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70075):map__70075);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_src.cljs$lang$applyTo = (function (seq70068){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70068));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (noscript "hello")
 * (noscript nil "hello")
 * 
 * These two are made equivalent at compile time
 * (noscript {:onClick f} "hello")
 * (noscript #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (noscript :#the-id.klass.other-klass "hello")
 * (noscript :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.noscript = (function fulcro$client$localized_dom$noscript(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73106 = arguments.length;
var i__4731__auto___73107 = (0);
while(true){
if((i__4731__auto___73107 < len__4730__auto___73106)){
args__4736__auto__.push((arguments[i__4731__auto___73107]));

var G__73109 = (i__4731__auto___73107 + (1));
i__4731__auto___73107 = G__73109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70105 = conformed_args__58615__auto__;
var map__70105__$1 = (((((!((map__70105 == null))))?(((((map__70105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70105):map__70105);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.noscript.cljs$lang$applyTo = (function (seq70101){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70101));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (animateTransform "hello")
 * (animateTransform nil "hello")
 * 
 * These two are made equivalent at compile time
 * (animateTransform {:onClick f} "hello")
 * (animateTransform #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (animateTransform :#the-id.klass.other-klass "hello")
 * (animateTransform :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.animateTransform = (function fulcro$client$localized_dom$animateTransform(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73117 = arguments.length;
var i__4731__auto___73118 = (0);
while(true){
if((i__4731__auto___73118 < len__4730__auto___73117)){
args__4736__auto__.push((arguments[i__4731__auto___73118]));

var G__73119 = (i__4731__auto___73118 + (1));
i__4731__auto___73118 = G__73119;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70123 = conformed_args__58615__auto__;
var map__70123__$1 = (((((!((map__70123 == null))))?(((((map__70123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70123):map__70123);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateTransform.cljs$lang$applyTo = (function (seq70112){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70112));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix "hello")
 * (feColorMatrix nil "hello")
 * 
 * These two are made equivalent at compile time
 * (feColorMatrix {:onClick f} "hello")
 * (feColorMatrix #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (feColorMatrix :#the-id.klass.other-klass "hello")
 * (feColorMatrix :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.feColorMatrix = (function fulcro$client$localized_dom$feColorMatrix(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73131 = arguments.length;
var i__4731__auto___73133 = (0);
while(true){
if((i__4731__auto___73133 < len__4730__auto___73131)){
args__4736__auto__.push((arguments[i__4731__auto___73133]));

var G__73135 = (i__4731__auto___73133 + (1));
i__4731__auto___73133 = G__73135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70139 = conformed_args__58615__auto__;
var map__70139__$1 = (((((!((map__70139 == null))))?(((((map__70139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70139):map__70139);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70139__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70139__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70139__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feColorMatrix.cljs$lang$applyTo = (function (seq70134){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70134));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (h2 "hello")
 * (h2 nil "hello")
 * 
 * These two are made equivalent at compile time
 * (h2 {:onClick f} "hello")
 * (h2 #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (h2 :#the-id.klass.other-klass "hello")
 * (h2 :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.h2 = (function fulcro$client$localized_dom$h2(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73140 = arguments.length;
var i__4731__auto___73141 = (0);
while(true){
if((i__4731__auto___73141 < len__4730__auto___73140)){
args__4736__auto__.push((arguments[i__4731__auto___73141]));

var G__73142 = (i__4731__auto___73141 + (1));
i__4731__auto___73141 = G__73142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70153 = conformed_args__58615__auto__;
var map__70153__$1 = (((((!((map__70153 == null))))?(((((map__70153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70153):map__70153);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h2.cljs$lang$applyTo = (function (seq70142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70142));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (area "hello")
 * (area nil "hello")
 * 
 * These two are made equivalent at compile time
 * (area {:onClick f} "hello")
 * (area #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (area :#the-id.klass.other-klass "hello")
 * (area :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.area = (function fulcro$client$localized_dom$area(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73149 = arguments.length;
var i__4731__auto___73150 = (0);
while(true){
if((i__4731__auto___73150 < len__4730__auto___73149)){
args__4736__auto__.push((arguments[i__4731__auto___73150]));

var G__73152 = (i__4731__auto___73150 + (1));
i__4731__auto___73150 = G__73152;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70169 = conformed_args__58615__auto__;
var map__70169__$1 = (((((!((map__70169 == null))))?(((((map__70169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70169):map__70169);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70169__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.area.cljs$lang$applyTo = (function (seq70167){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70167));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (br "hello")
 * (br nil "hello")
 * 
 * These two are made equivalent at compile time
 * (br {:onClick f} "hello")
 * (br #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (br :#the-id.klass.other-klass "hello")
 * (br :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.br = (function fulcro$client$localized_dom$br(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73162 = arguments.length;
var i__4731__auto___73164 = (0);
while(true){
if((i__4731__auto___73164 < len__4730__auto___73162)){
args__4736__auto__.push((arguments[i__4731__auto___73164]));

var G__73165 = (i__4731__auto___73164 + (1));
i__4731__auto___73164 = G__73165;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70178 = conformed_args__58615__auto__;
var map__70178__$1 = (((((!((map__70178 == null))))?(((((map__70178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70178):map__70178);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.br.cljs$lang$applyTo = (function (seq70174){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70174));
});


/**
 * Returns a React DOM element. Can be invoked in several ways
 * 
 * These two are made equivalent at compile time
 * (image "hello")
 * (image nil "hello")
 * 
 * These two are made equivalent at compile time
 * (image {:onClick f} "hello")
 * (image #js {:onClick f} "hello")
 * 
 * There is also a shorthand for CSS id and class names
 * (image :#the-id.klass.other-klass "hello")
 * (image :#the-id.klass.other-klass {:onClick f} "hello")
 */
fulcro.client.localized_dom.image = (function fulcro$client$localized_dom$image(var_args){
var args__4736__auto__ = [];
var len__4730__auto___73176 = arguments.length;
var i__4731__auto___73178 = (0);
while(true){
if((i__4731__auto___73178 < len__4730__auto___73176)){
args__4736__auto__.push((arguments[i__4731__auto___73178]));

var G__73179 = (i__4731__auto___73178 + (1));
i__4731__auto___73178 = G__73179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__58615__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__70191 = conformed_args__58615__auto__;
var map__70191__$1 = (((((!((map__70191 == null))))?(((((map__70191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70191):map__70191);
var css__58618__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var attrs__58616__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__58617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__58617__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__58617__auto__);
var attrs_value__58619__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__58616__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__58619__auto__], null),children__58617__auto____$1),css__58618__auto__);
});

fulcro.client.localized_dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.image.cljs$lang$applyTo = (function (seq70187){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70187));
});


//# sourceMappingURL=fulcro.client.localized_dom.js.map
