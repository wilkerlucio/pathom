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
var G__58042 = arguments.length;
switch (G__58042) {
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
var vec__58049 = args;
var seq__58050 = cljs.core.seq(vec__58049);
var first__58051 = cljs.core.first(seq__58050);
var seq__58050__$1 = cljs.core.next(seq__58050);
var head = first__58051;
var tail = seq__58050__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__58056 = (function (){var G__58057 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58057,tail);

return G__58057;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58056) : f.call(null,G__58056));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__58064 = (function (){var G__58066 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58066,args);

return G__58066;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58064) : f.call(null,G__58064));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58069 = (function (){var G__58070 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__58070,tail);

return G__58070;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58069) : f.call(null,G__58069));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58071 = (function (){var G__58072 = [type,cljs.core.clj__GT_js(fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__58072,tail);

return G__58072;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58071) : f.call(null,G__58071));
} else {
var G__58073 = (function (){var G__58078 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58078,args);

return G__58078;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58073) : f.call(null,G__58073));

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
var len__4730__auto___63249 = arguments.length;
var i__4731__auto___63250 = (0);
while(true){
if((i__4731__auto___63250 < len__4730__auto___63249)){
args__4736__auto__.push((arguments[i__4731__auto___63250]));

var G__63252 = (i__4731__auto___63250 + (1));
i__4731__auto___63250 = G__63252;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58099 = conformed_args__49349__auto__;
var map__58099__$1 = (((((!((map__58099 == null))))?(((((map__58099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58099):map__58099);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58099__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.form.cljs$lang$applyTo = (function (seq58092){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58092));
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
var len__4730__auto___63258 = arguments.length;
var i__4731__auto___63259 = (0);
while(true){
if((i__4731__auto___63259 < len__4730__auto___63258)){
args__4736__auto__.push((arguments[i__4731__auto___63259]));

var G__63262 = (i__4731__auto___63259 + (1));
i__4731__auto___63259 = G__63262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58127 = conformed_args__49349__auto__;
var map__58127__$1 = (((((!((map__58127 == null))))?(((((map__58127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58127):map__58127);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.audio.cljs$lang$applyTo = (function (seq58122){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58122));
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
var len__4730__auto___63268 = arguments.length;
var i__4731__auto___63269 = (0);
while(true){
if((i__4731__auto___63269 < len__4730__auto___63268)){
args__4736__auto__.push((arguments[i__4731__auto___63269]));

var G__63270 = (i__4731__auto___63269 + (1));
i__4731__auto___63269 = G__63270;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58158 = conformed_args__49349__auto__;
var map__58158__$1 = (((((!((map__58158 == null))))?(((((map__58158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58158):map__58158);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58158__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.input.cljs$lang$applyTo = (function (seq58140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58140));
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
var len__4730__auto___63292 = arguments.length;
var i__4731__auto___63294 = (0);
while(true){
if((i__4731__auto___63294 < len__4730__auto___63292)){
args__4736__auto__.push((arguments[i__4731__auto___63294]));

var G__63296 = (i__4731__auto___63294 + (1));
i__4731__auto___63294 = G__63296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58168 = conformed_args__49349__auto__;
var map__58168__$1 = (((((!((map__58168 == null))))?(((((map__58168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58168):map__58168);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58168__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menuitem.cljs$lang$applyTo = (function (seq58165){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58165));
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
var len__4730__auto___63318 = arguments.length;
var i__4731__auto___63320 = (0);
while(true){
if((i__4731__auto___63320 < len__4730__auto___63318)){
args__4736__auto__.push((arguments[i__4731__auto___63320]));

var G__63321 = (i__4731__auto___63320 + (1));
i__4731__auto___63320 = G__63321;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58193 = conformed_args__49349__auto__;
var map__58193__$1 = (((((!((map__58193 == null))))?(((((map__58193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58193):map__58193);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq58184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58184));
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
var len__4730__auto___63333 = arguments.length;
var i__4731__auto___63334 = (0);
while(true){
if((i__4731__auto___63334 < len__4730__auto___63333)){
args__4736__auto__.push((arguments[i__4731__auto___63334]));

var G__63335 = (i__4731__auto___63334 + (1));
i__4731__auto___63334 = G__63335;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58227 = conformed_args__49349__auto__;
var map__58227__$1 = (((((!((map__58227 == null))))?(((((map__58227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58227):map__58227);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58227__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMerge.cljs$lang$applyTo = (function (seq58221){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58221));
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
var len__4730__auto___63366 = arguments.length;
var i__4731__auto___63368 = (0);
while(true){
if((i__4731__auto___63368 < len__4730__auto___63366)){
args__4736__auto__.push((arguments[i__4731__auto___63368]));

var G__63369 = (i__4731__auto___63368 + (1));
i__4731__auto___63368 = G__63369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58241 = conformed_args__49349__auto__;
var map__58241__$1 = (((((!((map__58241 == null))))?(((((map__58241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58241):map__58241);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58241__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.set.cljs$lang$applyTo = (function (seq58234){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58234));
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
var len__4730__auto___63379 = arguments.length;
var i__4731__auto___63380 = (0);
while(true){
if((i__4731__auto___63380 < len__4730__auto___63379)){
args__4736__auto__.push((arguments[i__4731__auto___63380]));

var G__63382 = (i__4731__auto___63380 + (1));
i__4731__auto___63380 = G__63382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58293 = conformed_args__49349__auto__;
var map__58293__$1 = (((((!((map__58293 == null))))?(((((map__58293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58293):map__58293);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58293__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58288){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58288));
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
var len__4730__auto___63399 = arguments.length;
var i__4731__auto___63400 = (0);
while(true){
if((i__4731__auto___63400 < len__4730__auto___63399)){
args__4736__auto__.push((arguments[i__4731__auto___63400]));

var G__63402 = (i__4731__auto___63400 + (1));
i__4731__auto___63400 = G__63402;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58304 = conformed_args__49349__auto__;
var map__58304__$1 = (((((!((map__58304 == null))))?(((((map__58304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58304):map__58304);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58304__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.base.cljs$lang$applyTo = (function (seq58296){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58296));
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
var len__4730__auto___63408 = arguments.length;
var i__4731__auto___63410 = (0);
while(true){
if((i__4731__auto___63410 < len__4730__auto___63408)){
args__4736__auto__.push((arguments[i__4731__auto___63410]));

var G__63411 = (i__4731__auto___63410 + (1));
i__4731__auto___63410 = G__63411;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58354 = conformed_args__49349__auto__;
var map__58354__$1 = (((((!((map__58354 == null))))?(((((map__58354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58354):map__58354);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58354__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h1.cljs$lang$applyTo = (function (seq58335){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58335));
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
var len__4730__auto___63417 = arguments.length;
var i__4731__auto___63418 = (0);
while(true){
if((i__4731__auto___63418 < len__4730__auto___63417)){
args__4736__auto__.push((arguments[i__4731__auto___63418]));

var G__63420 = (i__4731__auto___63418 + (1));
i__4731__auto___63418 = G__63420;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58400 = conformed_args__49349__auto__;
var map__58400__$1 = (((((!((map__58400 == null))))?(((((map__58400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58400):map__58400);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feOffset.cljs$lang$applyTo = (function (seq58387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58387));
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
var len__4730__auto___63435 = arguments.length;
var i__4731__auto___63440 = (0);
while(true){
if((i__4731__auto___63440 < len__4730__auto___63435)){
args__4736__auto__.push((arguments[i__4731__auto___63440]));

var G__63443 = (i__4731__auto___63440 + (1));
i__4731__auto___63440 = G__63443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58403 = conformed_args__49349__auto__;
var map__58403__$1 = (((((!((map__58403 == null))))?(((((map__58403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58403):map__58403);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.embed.cljs$lang$applyTo = (function (seq58402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58402));
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
var len__4730__auto___63460 = arguments.length;
var i__4731__auto___63461 = (0);
while(true){
if((i__4731__auto___63461 < len__4730__auto___63460)){
args__4736__auto__.push((arguments[i__4731__auto___63461]));

var G__63463 = (i__4731__auto___63461 + (1));
i__4731__auto___63461 = G__63463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58412 = conformed_args__49349__auto__;
var map__58412__$1 = (((((!((map__58412 == null))))?(((((map__58412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58412):map__58412);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58412__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateMotion.cljs$lang$applyTo = (function (seq58405){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58405));
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
var len__4730__auto___63495 = arguments.length;
var i__4731__auto___63496 = (0);
while(true){
if((i__4731__auto___63496 < len__4730__auto___63495)){
args__4736__auto__.push((arguments[i__4731__auto___63496]));

var G__63497 = (i__4731__auto___63496 + (1));
i__4731__auto___63496 = G__63497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58425 = conformed_args__49349__auto__;
var map__58425__$1 = (((((!((map__58425 == null))))?(((((map__58425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58425):map__58425);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h3.cljs$lang$applyTo = (function (seq58419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58419));
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
var len__4730__auto___63520 = arguments.length;
var i__4731__auto___63521 = (0);
while(true){
if((i__4731__auto___63521 < len__4730__auto___63520)){
args__4736__auto__.push((arguments[i__4731__auto___63521]));

var G__63529 = (i__4731__auto___63521 + (1));
i__4731__auto___63521 = G__63529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58442 = conformed_args__49349__auto__;
var map__58442__$1 = (((((!((map__58442 == null))))?(((((map__58442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58442):map__58442);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.body.cljs$lang$applyTo = (function (seq58438){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58438));
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
var len__4730__auto___63546 = arguments.length;
var i__4731__auto___63547 = (0);
while(true){
if((i__4731__auto___63547 < len__4730__auto___63546)){
args__4736__auto__.push((arguments[i__4731__auto___63547]));

var G__63548 = (i__4731__auto___63547 + (1));
i__4731__auto___63547 = G__63548;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58464 = conformed_args__49349__auto__;
var map__58464__$1 = (((((!((map__58464 == null))))?(((((map__58464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58464):map__58464);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58464__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hkern.cljs$lang$applyTo = (function (seq58455){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58455));
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
var len__4730__auto___63570 = arguments.length;
var i__4731__auto___63575 = (0);
while(true){
if((i__4731__auto___63575 < len__4730__auto___63570)){
args__4736__auto__.push((arguments[i__4731__auto___63575]));

var G__63576 = (i__4731__auto___63575 + (1));
i__4731__auto___63575 = G__63576;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58485 = conformed_args__49349__auto__;
var map__58485__$1 = (((((!((map__58485 == null))))?(((((map__58485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58485):map__58485);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.keygen.cljs$lang$applyTo = (function (seq58476){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58476));
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
var len__4730__auto___63592 = arguments.length;
var i__4731__auto___63593 = (0);
while(true){
if((i__4731__auto___63593 < len__4730__auto___63592)){
args__4736__auto__.push((arguments[i__4731__auto___63593]));

var G__63598 = (i__4731__auto___63593 + (1));
i__4731__auto___63593 = G__63598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58502 = conformed_args__49349__auto__;
var map__58502__$1 = (((((!((map__58502 == null))))?(((((map__58502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58502):map__58502);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58502__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_format.cljs$lang$applyTo = (function (seq58494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58494));
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
var len__4730__auto___63633 = arguments.length;
var i__4731__auto___63635 = (0);
while(true){
if((i__4731__auto___63635 < len__4730__auto___63633)){
args__4736__auto__.push((arguments[i__4731__auto___63635]));

var G__63637 = (i__4731__auto___63635 + (1));
i__4731__auto___63635 = G__63637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58544 = conformed_args__49349__auto__;
var map__58544__$1 = (((((!((map__58544 == null))))?(((((map__58544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58544):map__58544);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58544__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncA.cljs$lang$applyTo = (function (seq58521){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58521));
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
var len__4730__auto___63643 = arguments.length;
var i__4731__auto___63645 = (0);
while(true){
if((i__4731__auto___63645 < len__4730__auto___63643)){
args__4736__auto__.push((arguments[i__4731__auto___63645]));

var G__63646 = (i__4731__auto___63645 + (1));
i__4731__auto___63645 = G__63646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58561 = conformed_args__49349__auto__;
var map__58561__$1 = (((((!((map__58561 == null))))?(((((map__58561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58561):map__58561);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58561__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.progress.cljs$lang$applyTo = (function (seq58559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58559));
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
var len__4730__auto___63653 = arguments.length;
var i__4731__auto___63655 = (0);
while(true){
if((i__4731__auto___63655 < len__4730__auto___63653)){
args__4736__auto__.push((arguments[i__4731__auto___63655]));

var G__63656 = (i__4731__auto___63655 + (1));
i__4731__auto___63655 = G__63656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58580 = conformed_args__49349__auto__;
var map__58580__$1 = (((((!((map__58580 == null))))?(((((map__58580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58580):map__58580);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58580__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.main.cljs$lang$applyTo = (function (seq58573){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58573));
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
var len__4730__auto___63666 = arguments.length;
var i__4731__auto___63667 = (0);
while(true){
if((i__4731__auto___63667 < len__4730__auto___63666)){
args__4736__auto__.push((arguments[i__4731__auto___63667]));

var G__63674 = (i__4731__auto___63667 + (1));
i__4731__auto___63667 = G__63674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58596 = conformed_args__49349__auto__;
var map__58596__$1 = (((((!((map__58596 == null))))?(((((map__58596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58596):map__58596);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cite.cljs$lang$applyTo = (function (seq58588){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58588));
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
var len__4730__auto___63701 = arguments.length;
var i__4731__auto___63702 = (0);
while(true){
if((i__4731__auto___63702 < len__4730__auto___63701)){
args__4736__auto__.push((arguments[i__4731__auto___63702]));

var G__63703 = (i__4731__auto___63702 + (1));
i__4731__auto___63702 = G__63703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58605 = conformed_args__49349__auto__;
var map__58605__$1 = (((((!((map__58605 == null))))?(((((map__58605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58605):map__58605);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58605__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rect.cljs$lang$applyTo = (function (seq58604){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58604));
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
var len__4730__auto___63716 = arguments.length;
var i__4731__auto___63718 = (0);
while(true){
if((i__4731__auto___63718 < len__4730__auto___63716)){
args__4736__auto__.push((arguments[i__4731__auto___63718]));

var G__63720 = (i__4731__auto___63718 + (1));
i__4731__auto___63718 = G__63720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58614 = conformed_args__49349__auto__;
var map__58614__$1 = (((((!((map__58614 == null))))?(((((map__58614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58614):map__58614);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tref.cljs$lang$applyTo = (function (seq58609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58609));
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
var len__4730__auto___63735 = arguments.length;
var i__4731__auto___63736 = (0);
while(true){
if((i__4731__auto___63736 < len__4730__auto___63735)){
args__4736__auto__.push((arguments[i__4731__auto___63736]));

var G__63738 = (i__4731__auto___63736 + (1));
i__4731__auto___63736 = G__63738;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58631 = conformed_args__49349__auto__;
var map__58631__$1 = (((((!((map__58631 == null))))?(((((map__58631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58631):map__58631);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58631__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshpatch.cljs$lang$applyTo = (function (seq58627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58627));
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
var len__4730__auto___63748 = arguments.length;
var i__4731__auto___63749 = (0);
while(true){
if((i__4731__auto___63749 < len__4730__auto___63748)){
args__4736__auto__.push((arguments[i__4731__auto___63749]));

var G__63752 = (i__4731__auto___63749 + (1));
i__4731__auto___63749 = G__63752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58641 = conformed_args__49349__auto__;
var map__58641__$1 = (((((!((map__58641 == null))))?(((((map__58641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58641):map__58641);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polyline.cljs$lang$applyTo = (function (seq58637){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58637));
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
var len__4730__auto___63759 = arguments.length;
var i__4731__auto___63760 = (0);
while(true){
if((i__4731__auto___63760 < len__4730__auto___63759)){
args__4736__auto__.push((arguments[i__4731__auto___63760]));

var G__63761 = (i__4731__auto___63760 + (1));
i__4731__auto___63760 = G__63761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58656 = conformed_args__49349__auto__;
var map__58656__$1 = (((((!((map__58656 == null))))?(((((map__58656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58656):map__58656);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.metadata.cljs$lang$applyTo = (function (seq58649){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58649));
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
var len__4730__auto___63767 = arguments.length;
var i__4731__auto___63768 = (0);
while(true){
if((i__4731__auto___63768 < len__4730__auto___63767)){
args__4736__auto__.push((arguments[i__4731__auto___63768]));

var G__63770 = (i__4731__auto___63768 + (1));
i__4731__auto___63768 = G__63770;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58666 = conformed_args__49349__auto__;
var map__58666__$1 = (((((!((map__58666 == null))))?(((((map__58666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58666):map__58666);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.map.cljs$lang$applyTo = (function (seq58664){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58664));
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
var len__4730__auto___63781 = arguments.length;
var i__4731__auto___63783 = (0);
while(true){
if((i__4731__auto___63783 < len__4730__auto___63781)){
args__4736__auto__.push((arguments[i__4731__auto___63783]));

var G__63784 = (i__4731__auto___63783 + (1));
i__4731__auto___63783 = G__63784;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58669 = conformed_args__49349__auto__;
var map__58669__$1 = (((((!((map__58669 == null))))?(((((map__58669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58669):map__58669);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58669__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.object.cljs$lang$applyTo = (function (seq58668){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58668));
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
var len__4730__auto___63794 = arguments.length;
var i__4731__auto___63795 = (0);
while(true){
if((i__4731__auto___63795 < len__4730__auto___63794)){
args__4736__auto__.push((arguments[i__4731__auto___63795]));

var G__63796 = (i__4731__auto___63795 + (1));
i__4731__auto___63795 = G__63796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58681 = conformed_args__49349__auto__;
var map__58681__$1 = (((((!((map__58681 == null))))?(((((map__58681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58681):map__58681);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.i.cljs$lang$applyTo = (function (seq58677){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58677));
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
var len__4730__auto___63806 = arguments.length;
var i__4731__auto___63807 = (0);
while(true){
if((i__4731__auto___63807 < len__4730__auto___63806)){
args__4736__auto__.push((arguments[i__4731__auto___63807]));

var G__63808 = (i__4731__auto___63807 + (1));
i__4731__auto___63807 = G__63808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58686 = conformed_args__49349__auto__;
var map__58686__$1 = (((((!((map__58686 == null))))?(((((map__58686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58686):map__58686);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58686__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_name.cljs$lang$applyTo = (function (seq58684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58684));
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
var len__4730__auto___63820 = arguments.length;
var i__4731__auto___63822 = (0);
while(true){
if((i__4731__auto___63822 < len__4730__auto___63820)){
args__4736__auto__.push((arguments[i__4731__auto___63822]));

var G__63823 = (i__4731__auto___63822 + (1));
i__4731__auto___63822 = G__63823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58700 = conformed_args__49349__auto__;
var map__58700__$1 = (((((!((map__58700 == null))))?(((((map__58700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58700):map__58700);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.p.cljs$lang$applyTo = (function (seq58692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58692));
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
var len__4730__auto___63839 = arguments.length;
var i__4731__auto___63841 = (0);
while(true){
if((i__4731__auto___63841 < len__4730__auto___63839)){
args__4736__auto__.push((arguments[i__4731__auto___63841]));

var G__63842 = (i__4731__auto___63841 + (1));
i__4731__auto___63841 = G__63842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58711 = conformed_args__49349__auto__;
var map__58711__$1 = (((((!((map__58711 == null))))?(((((map__58711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58711):map__58711);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncR.cljs$lang$applyTo = (function (seq58709){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58709));
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
var len__4730__auto___63860 = arguments.length;
var i__4731__auto___63861 = (0);
while(true){
if((i__4731__auto___63861 < len__4730__auto___63860)){
args__4736__auto__.push((arguments[i__4731__auto___63861]));

var G__63862 = (i__4731__auto___63861 + (1));
i__4731__auto___63861 = G__63862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58727 = conformed_args__49349__auto__;
var map__58727__$1 = (((((!((map__58727 == null))))?(((((map__58727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58727):map__58727);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatchpath.cljs$lang$applyTo = (function (seq58719){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58719));
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
var len__4730__auto___63875 = arguments.length;
var i__4731__auto___63876 = (0);
while(true){
if((i__4731__auto___63876 < len__4730__auto___63875)){
args__4736__auto__.push((arguments[i__4731__auto___63876]));

var G__63877 = (i__4731__auto___63876 + (1));
i__4731__auto___63876 = G__63877;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58736 = conformed_args__49349__auto__;
var map__58736__$1 = (((((!((map__58736 == null))))?(((((map__58736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58736):map__58736);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphItem.cljs$lang$applyTo = (function (seq58731){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58731));
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
var len__4730__auto___63892 = arguments.length;
var i__4731__auto___63893 = (0);
while(true){
if((i__4731__auto___63893 < len__4730__auto___63892)){
args__4736__auto__.push((arguments[i__4731__auto___63893]));

var G__63895 = (i__4731__auto___63893 + (1));
i__4731__auto___63893 = G__63895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58745 = conformed_args__49349__auto__;
var map__58745__$1 = (((((!((map__58745 == null))))?(((((map__58745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58745):map__58745);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.nav.cljs$lang$applyTo = (function (seq58738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58738));
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
var len__4730__auto___63908 = arguments.length;
var i__4731__auto___63911 = (0);
while(true){
if((i__4731__auto___63911 < len__4730__auto___63908)){
args__4736__auto__.push((arguments[i__4731__auto___63911]));

var G__63917 = (i__4731__auto___63911 + (1));
i__4731__auto___63911 = G__63917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58760 = conformed_args__49349__auto__;
var map__58760__$1 = (((((!((map__58760 == null))))?(((((map__58760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58760):map__58760);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ruby.cljs$lang$applyTo = (function (seq58755){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58755));
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
var len__4730__auto___63941 = arguments.length;
var i__4731__auto___63942 = (0);
while(true){
if((i__4731__auto___63942 < len__4730__auto___63941)){
args__4736__auto__.push((arguments[i__4731__auto___63942]));

var G__63944 = (i__4731__auto___63942 + (1));
i__4731__auto___63942 = G__63944;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58767 = conformed_args__49349__auto__;
var map__58767__$1 = (((((!((map__58767 == null))))?(((((map__58767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58767):map__58767);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.switch$.cljs$lang$applyTo = (function (seq58763){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58763));
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
var len__4730__auto___63960 = arguments.length;
var i__4731__auto___63961 = (0);
while(true){
if((i__4731__auto___63961 < len__4730__auto___63960)){
args__4736__auto__.push((arguments[i__4731__auto___63961]));

var G__63962 = (i__4731__auto___63961 + (1));
i__4731__auto___63961 = G__63962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58777 = conformed_args__49349__auto__;
var map__58777__$1 = (((((!((map__58777 == null))))?(((((map__58777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58777):map__58777);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.a.cljs$lang$applyTo = (function (seq58773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58773));
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
var len__4730__auto___63972 = arguments.length;
var i__4731__auto___63973 = (0);
while(true){
if((i__4731__auto___63973 < len__4730__auto___63972)){
args__4736__auto__.push((arguments[i__4731__auto___63973]));

var G__63974 = (i__4731__auto___63973 + (1));
i__4731__auto___63973 = G__63974;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58787 = conformed_args__49349__auto__;
var map__58787__$1 = (((((!((map__58787 == null))))?(((((map__58787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58787):map__58787);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58787__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.view.cljs$lang$applyTo = (function (seq58783){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58783));
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
var len__4730__auto___63980 = arguments.length;
var i__4731__auto___63981 = (0);
while(true){
if((i__4731__auto___63981 < len__4730__auto___63980)){
args__4736__auto__.push((arguments[i__4731__auto___63981]));

var G__63982 = (i__4731__auto___63981 + (1));
i__4731__auto___63981 = G__63982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58806 = conformed_args__49349__auto__;
var map__58806__$1 = (((((!((map__58806 == null))))?(((((map__58806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58806):map__58806);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58806__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menu.cljs$lang$applyTo = (function (seq58801){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58801));
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
var len__4730__auto___63988 = arguments.length;
var i__4731__auto___63989 = (0);
while(true){
if((i__4731__auto___63989 < len__4730__auto___63988)){
args__4736__auto__.push((arguments[i__4731__auto___63989]));

var G__63990 = (i__4731__auto___63989 + (1));
i__4731__auto___63989 = G__63990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58822 = conformed_args__49349__auto__;
var map__58822__$1 = (((((!((map__58822 == null))))?(((((map__58822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58822):map__58822);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58822__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.blockquote.cljs$lang$applyTo = (function (seq58811){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58811));
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
var len__4730__auto___64021 = arguments.length;
var i__4731__auto___64023 = (0);
while(true){
if((i__4731__auto___64023 < len__4730__auto___64021)){
args__4736__auto__.push((arguments[i__4731__auto___64023]));

var G__64027 = (i__4731__auto___64023 + (1));
i__4731__auto___64023 = G__64027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58860 = conformed_args__49349__auto__;
var map__58860__$1 = (((((!((map__58860 == null))))?(((((map__58860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58860):map__58860);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58860__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.img.cljs$lang$applyTo = (function (seq58849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58849));
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
var len__4730__auto___64073 = arguments.length;
var i__4731__auto___64074 = (0);
while(true){
if((i__4731__auto___64074 < len__4730__auto___64073)){
args__4736__auto__.push((arguments[i__4731__auto___64074]));

var G__64084 = (i__4731__auto___64074 + (1));
i__4731__auto___64074 = G__64084;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58878 = conformed_args__49349__auto__;
var map__58878__$1 = (((((!((map__58878 == null))))?(((((map__58878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58878):map__58878);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58878__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58878__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58878__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncG.cljs$lang$applyTo = (function (seq58869){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58869));
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
var len__4730__auto___64138 = arguments.length;
var i__4731__auto___64142 = (0);
while(true){
if((i__4731__auto___64142 < len__4730__auto___64138)){
args__4736__auto__.push((arguments[i__4731__auto___64142]));

var G__64147 = (i__4731__auto___64142 + (1));
i__4731__auto___64142 = G__64147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58916 = conformed_args__49349__auto__;
var map__58916__$1 = (((((!((map__58916 == null))))?(((((map__58916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58916):map__58916);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.text.cljs$lang$applyTo = (function (seq58895){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58895));
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
var len__4730__auto___64153 = arguments.length;
var i__4731__auto___64154 = (0);
while(true){
if((i__4731__auto___64154 < len__4730__auto___64153)){
args__4736__auto__.push((arguments[i__4731__auto___64154]));

var G__64156 = (i__4731__auto___64154 + (1));
i__4731__auto___64154 = G__64156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58962 = conformed_args__49349__auto__;
var map__58962__$1 = (((((!((map__58962 == null))))?(((((map__58962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58962):map__58962);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58962__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.span.cljs$lang$applyTo = (function (seq58945){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58945));
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
var len__4730__auto___64169 = arguments.length;
var i__4731__auto___64170 = (0);
while(true){
if((i__4731__auto___64170 < len__4730__auto___64169)){
args__4736__auto__.push((arguments[i__4731__auto___64170]));

var G__64172 = (i__4731__auto___64170 + (1));
i__4731__auto___64170 = G__64172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58977 = conformed_args__49349__auto__;
var map__58977__$1 = (((((!((map__58977 == null))))?(((((map__58977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58977):map__58977);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.track.cljs$lang$applyTo = (function (seq58973){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58973));
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
var len__4730__auto___64192 = arguments.length;
var i__4731__auto___64193 = (0);
while(true){
if((i__4731__auto___64193 < len__4730__auto___64192)){
args__4736__auto__.push((arguments[i__4731__auto___64193]));

var G__64197 = (i__4731__auto___64193 + (1));
i__4731__auto___64193 = G__64197;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58994 = conformed_args__49349__auto__;
var map__58994__$1 = (((((!((map__58994 == null))))?(((((map__58994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58994):map__58994);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58994__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58994__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58994__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.data.cljs$lang$applyTo = (function (seq58986){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58986));
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
var len__4730__auto___64209 = arguments.length;
var i__4731__auto___64213 = (0);
while(true){
if((i__4731__auto___64213 < len__4730__auto___64209)){
args__4736__auto__.push((arguments[i__4731__auto___64213]));

var G__64215 = (i__4731__auto___64213 + (1));
i__4731__auto___64213 = G__64215;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59018 = conformed_args__49349__auto__;
var map__59018__$1 = (((((!((map__59018 == null))))?(((((map__59018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59018):map__59018);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.u.cljs$lang$applyTo = (function (seq59006){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59006));
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
var len__4730__auto___64224 = arguments.length;
var i__4731__auto___64225 = (0);
while(true){
if((i__4731__auto___64225 < len__4730__auto___64224)){
args__4736__auto__.push((arguments[i__4731__auto___64225]));

var G__64226 = (i__4731__auto___64225 + (1));
i__4731__auto___64225 = G__64226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59042 = conformed_args__49349__auto__;
var map__59042__$1 = (((((!((map__59042 == null))))?(((((map__59042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59042):map__59042);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59042__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59042__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59042__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dl.cljs$lang$applyTo = (function (seq59037){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59037));
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
var len__4730__auto___64232 = arguments.length;
var i__4731__auto___64233 = (0);
while(true){
if((i__4731__auto___64233 < len__4730__auto___64232)){
args__4736__auto__.push((arguments[i__4731__auto___64233]));

var G__64235 = (i__4731__auto___64233 + (1));
i__4731__auto___64233 = G__64235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59062 = conformed_args__49349__auto__;
var map__59062__$1 = (((((!((map__59062 == null))))?(((((map__59062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59062):map__59062);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.select.cljs$lang$applyTo = (function (seq59054){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59054));
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
var len__4730__auto___64242 = arguments.length;
var i__4731__auto___64243 = (0);
while(true){
if((i__4731__auto___64243 < len__4730__auto___64242)){
args__4736__auto__.push((arguments[i__4731__auto___64243]));

var G__64246 = (i__4731__auto___64243 + (1));
i__4731__auto___64243 = G__64246;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59082 = conformed_args__49349__auto__;
var map__59082__$1 = (((((!((map__59082 == null))))?(((((map__59082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59082):map__59082);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59082__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polygon.cljs$lang$applyTo = (function (seq59070){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59070));
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
var len__4730__auto___64256 = arguments.length;
var i__4731__auto___64258 = (0);
while(true){
if((i__4731__auto___64258 < len__4730__auto___64256)){
args__4736__auto__.push((arguments[i__4731__auto___64258]));

var G__64260 = (i__4731__auto___64258 + (1));
i__4731__auto___64258 = G__64260;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59100 = conformed_args__49349__auto__;
var map__59100__$1 = (((((!((map__59100 == null))))?(((((map__59100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59100):map__59100);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59100__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59100__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59100__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pattern.cljs$lang$applyTo = (function (seq59092){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59092));
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
var len__4730__auto___64274 = arguments.length;
var i__4731__auto___64275 = (0);
while(true){
if((i__4731__auto___64275 < len__4730__auto___64274)){
args__4736__auto__.push((arguments[i__4731__auto___64275]));

var G__64277 = (i__4731__auto___64275 + (1));
i__4731__auto___64275 = G__64277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59116 = conformed_args__49349__auto__;
var map__59116__$1 = (((((!((map__59116 == null))))?(((((map__59116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59116):map__59116);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59116__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59116__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59116__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.html.cljs$lang$applyTo = (function (seq59108){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59108));
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
var len__4730__auto___64288 = arguments.length;
var i__4731__auto___64289 = (0);
while(true){
if((i__4731__auto___64289 < len__4730__auto___64288)){
args__4736__auto__.push((arguments[i__4731__auto___64289]));

var G__64291 = (i__4731__auto___64289 + (1));
i__4731__auto___64289 = G__64291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59141 = conformed_args__49349__auto__;
var map__59141__$1 = (((((!((map__59141 == null))))?(((((map__59141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59141):map__59141);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59141__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59141__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59141__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.foreignObject.cljs$lang$applyTo = (function (seq59133){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59133));
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
var len__4730__auto___64304 = arguments.length;
var i__4731__auto___64306 = (0);
while(true){
if((i__4731__auto___64306 < len__4730__auto___64304)){
args__4736__auto__.push((arguments[i__4731__auto___64306]));

var G__64309 = (i__4731__auto___64306 + (1));
i__4731__auto___64306 = G__64309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59166 = conformed_args__49349__auto__;
var map__59166__$1 = (((((!((map__59166 == null))))?(((((map__59166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59166):map__59166);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59166__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59166__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.thead.cljs$lang$applyTo = (function (seq59159){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59159));
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
var len__4730__auto___64320 = arguments.length;
var i__4731__auto___64322 = (0);
while(true){
if((i__4731__auto___64322 < len__4730__auto___64320)){
args__4736__auto__.push((arguments[i__4731__auto___64322]));

var G__64324 = (i__4731__auto___64322 + (1));
i__4731__auto___64322 = G__64324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59174 = conformed_args__49349__auto__;
var map__59174__$1 = (((((!((map__59174 == null))))?(((((map__59174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59174):map__59174);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.path.cljs$lang$applyTo = (function (seq59173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59173));
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
var len__4730__auto___64335 = arguments.length;
var i__4731__auto___64336 = (0);
while(true){
if((i__4731__auto___64336 < len__4730__auto___64335)){
args__4736__auto__.push((arguments[i__4731__auto___64336]));

var G__64340 = (i__4731__auto___64336 + (1));
i__4731__auto___64336 = G__64340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59186 = conformed_args__49349__auto__;
var map__59186__$1 = (((((!((map__59186 == null))))?(((((map__59186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59186):map__59186);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.del.cljs$lang$applyTo = (function (seq59180){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59180));
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
var len__4730__auto___64352 = arguments.length;
var i__4731__auto___64353 = (0);
while(true){
if((i__4731__auto___64353 < len__4730__auto___64352)){
args__4736__auto__.push((arguments[i__4731__auto___64353]));

var G__64356 = (i__4731__auto___64353 + (1));
i__4731__auto___64353 = G__64356;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59200 = conformed_args__49349__auto__;
var map__59200__$1 = (((((!((map__59200 == null))))?(((((map__59200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59200):map__59200);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59200__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59200__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59200__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyph.cljs$lang$applyTo = (function (seq59193){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59193));
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
var len__4730__auto___64369 = arguments.length;
var i__4731__auto___64371 = (0);
while(true){
if((i__4731__auto___64371 < len__4730__auto___64369)){
args__4736__auto__.push((arguments[i__4731__auto___64371]));

var G__64372 = (i__4731__auto___64371 + (1));
i__4731__auto___64371 = G__64372;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59209 = conformed_args__49349__auto__;
var map__59209__$1 = (((((!((map__59209 == null))))?(((((map__59209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59209):map__59209);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59209__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59209__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59209__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fieldset.cljs$lang$applyTo = (function (seq59208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59208));
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
var len__4730__auto___64389 = arguments.length;
var i__4731__auto___64390 = (0);
while(true){
if((i__4731__auto___64390 < len__4730__auto___64389)){
args__4736__auto__.push((arguments[i__4731__auto___64390]));

var G__64392 = (i__4731__auto___64390 + (1));
i__4731__auto___64390 = G__64392;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59222 = conformed_args__49349__auto__;
var map__59222__$1 = (((((!((map__59222 == null))))?(((((map__59222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59222):map__59222);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.aside.cljs$lang$applyTo = (function (seq59218){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59218));
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
var len__4730__auto___64441 = arguments.length;
var i__4731__auto___64443 = (0);
while(true){
if((i__4731__auto___64443 < len__4730__auto___64441)){
args__4736__auto__.push((arguments[i__4731__auto___64443]));

var G__64446 = (i__4731__auto___64443 + (1));
i__4731__auto___64443 = G__64446;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59236 = conformed_args__49349__auto__;
var map__59236__$1 = (((((!((map__59236 == null))))?(((((map__59236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59236):map__59236);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feBlend.cljs$lang$applyTo = (function (seq59232){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59232));
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
var len__4730__auto___64463 = arguments.length;
var i__4731__auto___64465 = (0);
while(true){
if((i__4731__auto___64465 < len__4730__auto___64463)){
args__4736__auto__.push((arguments[i__4731__auto___64465]));

var G__64467 = (i__4731__auto___64465 + (1));
i__4731__auto___64465 = G__64467;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59250 = conformed_args__49349__auto__;
var map__59250__$1 = (((((!((map__59250 == null))))?(((((map__59250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59250):map__59250);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figure.cljs$lang$applyTo = (function (seq59247){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59247));
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
var len__4730__auto___64477 = arguments.length;
var i__4731__auto___64479 = (0);
while(true){
if((i__4731__auto___64479 < len__4730__auto___64477)){
args__4736__auto__.push((arguments[i__4731__auto___64479]));

var G__64480 = (i__4731__auto___64479 + (1));
i__4731__auto___64479 = G__64480;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59263 = conformed_args__49349__auto__;
var map__59263__$1 = (((((!((map__59263 == null))))?(((((map__59263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59263):map__59263);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textPath.cljs$lang$applyTo = (function (seq59255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59255));
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
var len__4730__auto___64493 = arguments.length;
var i__4731__auto___64494 = (0);
while(true){
if((i__4731__auto___64494 < len__4730__auto___64493)){
args__4736__auto__.push((arguments[i__4731__auto___64494]));

var G__64496 = (i__4731__auto___64494 + (1));
i__4731__auto___64494 = G__64496;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59275 = conformed_args__49349__auto__;
var map__59275__$1 = (((((!((map__59275 == null))))?(((((map__59275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59275):map__59275);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59275__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59275__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59275__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figcaption.cljs$lang$applyTo = (function (seq59270){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59270));
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
var len__4730__auto___64505 = arguments.length;
var i__4731__auto___64507 = (0);
while(true){
if((i__4731__auto___64507 < len__4730__auto___64505)){
args__4736__auto__.push((arguments[i__4731__auto___64507]));

var G__64508 = (i__4731__auto___64507 + (1));
i__4731__auto___64507 = G__64508;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59281 = conformed_args__49349__auto__;
var map__59281__$1 = (((((!((map__59281 == null))))?(((((map__59281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59281):map__59281);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59281__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mask.cljs$lang$applyTo = (function (seq59280){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59280));
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
var len__4730__auto___64517 = arguments.length;
var i__4731__auto___64518 = (0);
while(true){
if((i__4731__auto___64518 < len__4730__auto___64517)){
args__4736__auto__.push((arguments[i__4731__auto___64518]));

var G__64519 = (i__4731__auto___64518 + (1));
i__4731__auto___64518 = G__64519;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59302 = conformed_args__49349__auto__;
var map__59302__$1 = (((((!((map__59302 == null))))?(((((map__59302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59302):map__59302);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.q.cljs$lang$applyTo = (function (seq59300){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59300));
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
var len__4730__auto___64531 = arguments.length;
var i__4731__auto___64532 = (0);
while(true){
if((i__4731__auto___64532 < len__4730__auto___64531)){
args__4736__auto__.push((arguments[i__4731__auto___64532]));

var G__64536 = (i__4731__auto___64532 + (1));
i__4731__auto___64532 = G__64536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59327 = conformed_args__49349__auto__;
var map__59327__$1 = (((((!((map__59327 == null))))?(((((map__59327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59327):map__59327);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdi.cljs$lang$applyTo = (function (seq59311){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59311));
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
var len__4730__auto___64553 = arguments.length;
var i__4731__auto___64556 = (0);
while(true){
if((i__4731__auto___64556 < len__4730__auto___64553)){
args__4736__auto__.push((arguments[i__4731__auto___64556]));

var G__64558 = (i__4731__auto___64556 + (1));
i__4731__auto___64556 = G__64558;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59342 = conformed_args__49349__auto__;
var map__59342__$1 = (((((!((map__59342 == null))))?(((((map__59342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59342):map__59342);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDistantLight.cljs$lang$applyTo = (function (seq59336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59336));
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
var len__4730__auto___64599 = arguments.length;
var i__4731__auto___64600 = (0);
while(true){
if((i__4731__auto___64600 < len__4730__auto___64599)){
args__4736__auto__.push((arguments[i__4731__auto___64600]));

var G__64603 = (i__4731__auto___64600 + (1));
i__4731__auto___64600 = G__64603;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59356 = conformed_args__49349__auto__;
var map__59356__$1 = (((((!((map__59356 == null))))?(((((map__59356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59356):map__59356);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59356__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59356__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59356__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.video.cljs$lang$applyTo = (function (seq59352){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59352));
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
var len__4730__auto___64617 = arguments.length;
var i__4731__auto___64618 = (0);
while(true){
if((i__4731__auto___64618 < len__4730__auto___64617)){
args__4736__auto__.push((arguments[i__4731__auto___64618]));

var G__64621 = (i__4731__auto___64618 + (1));
i__4731__auto___64618 = G__64621;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59379 = conformed_args__49349__auto__;
var map__59379__$1 = (((((!((map__59379 == null))))?(((((map__59379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59379):map__59379);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.address.cljs$lang$applyTo = (function (seq59372){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59372));
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
var len__4730__auto___64634 = arguments.length;
var i__4731__auto___64636 = (0);
while(true){
if((i__4731__auto___64636 < len__4730__auto___64634)){
args__4736__auto__.push((arguments[i__4731__auto___64636]));

var G__64637 = (i__4731__auto___64636 + (1));
i__4731__auto___64636 = G__64637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59399 = conformed_args__49349__auto__;
var map__59399__$1 = (((((!((map__59399 == null))))?(((((map__59399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59399):map__59399);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59399__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.caption.cljs$lang$applyTo = (function (seq59394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59394));
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
var len__4730__auto___64648 = arguments.length;
var i__4731__auto___64650 = (0);
while(true){
if((i__4731__auto___64650 < len__4730__auto___64648)){
args__4736__auto__.push((arguments[i__4731__auto___64650]));

var G__64651 = (i__4731__auto___64650 + (1));
i__4731__auto___64650 = G__64651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59420 = conformed_args__49349__auto__;
var map__59420__$1 = (((((!((map__59420 == null))))?(((((map__59420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59420):map__59420);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dd.cljs$lang$applyTo = (function (seq59406){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59406));
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
var len__4730__auto___64665 = arguments.length;
var i__4731__auto___64666 = (0);
while(true){
if((i__4731__auto___64666 < len__4730__auto___64665)){
args__4736__auto__.push((arguments[i__4731__auto___64666]));

var G__64668 = (i__4731__auto___64666 + (1));
i__4731__auto___64666 = G__64668;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59537 = conformed_args__49349__auto__;
var map__59537__$1 = (((((!((map__59537 == null))))?(((((map__59537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59537):map__59537);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rp.cljs$lang$applyTo = (function (seq59498){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59498));
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
var len__4730__auto___64691 = arguments.length;
var i__4731__auto___64692 = (0);
while(true){
if((i__4731__auto___64692 < len__4730__auto___64691)){
args__4736__auto__.push((arguments[i__4731__auto___64692]));

var G__64693 = (i__4731__auto___64692 + (1));
i__4731__auto___64692 = G__64693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59613 = conformed_args__49349__auto__;
var map__59613__$1 = (((((!((map__59613 == null))))?(((((map__59613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59613):map__59613);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59613__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59613__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59613__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hr.cljs$lang$applyTo = (function (seq59571){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59571));
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
var len__4730__auto___64706 = arguments.length;
var i__4731__auto___64707 = (0);
while(true){
if((i__4731__auto___64707 < len__4730__auto___64706)){
args__4736__auto__.push((arguments[i__4731__auto___64707]));

var G__64710 = (i__4731__auto___64707 + (1));
i__4731__auto___64707 = G__64710;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59725 = conformed_args__49349__auto__;
var map__59725__$1 = (((((!((map__59725 == null))))?(((((map__59725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59725):map__59725);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59725__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meta.cljs$lang$applyTo = (function (seq59680){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59680));
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
var len__4730__auto___64724 = arguments.length;
var i__4731__auto___64725 = (0);
while(true){
if((i__4731__auto___64725 < len__4730__auto___64724)){
args__4736__auto__.push((arguments[i__4731__auto___64725]));

var G__64727 = (i__4731__auto___64725 + (1));
i__4731__auto___64725 = G__64727;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59859 = conformed_args__49349__auto__;
var map__59859__$1 = (((((!((map__59859 == null))))?(((((map__59859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59859):map__59859);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tbody.cljs$lang$applyTo = (function (seq59794){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59794));
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
var len__4730__auto___64736 = arguments.length;
var i__4731__auto___64738 = (0);
while(true){
if((i__4731__auto___64738 < len__4730__auto___64736)){
args__4736__auto__.push((arguments[i__4731__auto___64738]));

var G__64741 = (i__4731__auto___64738 + (1));
i__4731__auto___64738 = G__64741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59879 = conformed_args__49349__auto__;
var map__59879__$1 = (((((!((map__59879 == null))))?(((((map__59879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59879):map__59879);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59879__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.desc.cljs$lang$applyTo = (function (seq59869){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59869));
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
var len__4730__auto___64752 = arguments.length;
var i__4731__auto___64753 = (0);
while(true){
if((i__4731__auto___64753 < len__4730__auto___64752)){
args__4736__auto__.push((arguments[i__4731__auto___64753]));

var G__64756 = (i__4731__auto___64753 + (1));
i__4731__auto___64753 = G__64756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59910 = conformed_args__49349__auto__;
var map__59910__$1 = (((((!((map__59910 == null))))?(((((map__59910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59910):map__59910);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59910__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59910__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59910__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.table.cljs$lang$applyTo = (function (seq59896){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59896));
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
var len__4730__auto___64761 = arguments.length;
var i__4731__auto___64762 = (0);
while(true){
if((i__4731__auto___64762 < len__4730__auto___64761)){
args__4736__auto__.push((arguments[i__4731__auto___64762]));

var G__64764 = (i__4731__auto___64762 + (1));
i__4731__auto___64762 = G__64764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59937 = conformed_args__49349__auto__;
var map__59937__$1 = (((((!((map__59937 == null))))?(((((map__59937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59937):map__59937);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59937__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59937__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59937__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pre.cljs$lang$applyTo = (function (seq59926){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59926));
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
var len__4730__auto___64780 = arguments.length;
var i__4731__auto___64781 = (0);
while(true){
if((i__4731__auto___64781 < len__4730__auto___64780)){
args__4736__auto__.push((arguments[i__4731__auto___64781]));

var G__64782 = (i__4731__auto___64781 + (1));
i__4731__auto___64781 = G__64782;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59952 = conformed_args__49349__auto__;
var map__59952__$1 = (((((!((map__59952 == null))))?(((((map__59952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59952):map__59952);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59952__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59952__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59952__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ul.cljs$lang$applyTo = (function (seq59945){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59945));
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
var len__4730__auto___64817 = arguments.length;
var i__4731__auto___64819 = (0);
while(true){
if((i__4731__auto___64819 < len__4730__auto___64817)){
args__4736__auto__.push((arguments[i__4731__auto___64819]));

var G__64826 = (i__4731__auto___64819 + (1));
i__4731__auto___64819 = G__64826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59977 = conformed_args__49349__auto__;
var map__59977__$1 = (((((!((map__59977 == null))))?(((((map__59977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59977.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59977):map__59977);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59977__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59977__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59977__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq59970){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59970));
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
var len__4730__auto___64848 = arguments.length;
var i__4731__auto___64849 = (0);
while(true){
if((i__4731__auto___64849 < len__4730__auto___64848)){
args__4736__auto__.push((arguments[i__4731__auto___64849]));

var G__64851 = (i__4731__auto___64849 + (1));
i__4731__auto___64849 = G__64851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60001 = conformed_args__49349__auto__;
var map__60001__$1 = (((((!((map__60001 == null))))?(((((map__60001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60001):map__60001);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sup.cljs$lang$applyTo = (function (seq59992){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59992));
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
var len__4730__auto___64862 = arguments.length;
var i__4731__auto___64863 = (0);
while(true){
if((i__4731__auto___64863 < len__4730__auto___64862)){
args__4736__auto__.push((arguments[i__4731__auto___64863]));

var G__64864 = (i__4731__auto___64863 + (1));
i__4731__auto___64863 = G__64864;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60016 = conformed_args__49349__auto__;
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dfn.cljs$lang$applyTo = (function (seq60011){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60011));
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
var len__4730__auto___64876 = arguments.length;
var i__4731__auto___64878 = (0);
while(true){
if((i__4731__auto___64878 < len__4730__auto___64876)){
args__4736__auto__.push((arguments[i__4731__auto___64878]));

var G__64881 = (i__4731__auto___64878 + (1));
i__4731__auto___64878 = G__64881;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60040 = conformed_args__49349__auto__;
var map__60040__$1 = (((((!((map__60040 == null))))?(((((map__60040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60040):map__60040);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60040__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sub.cljs$lang$applyTo = (function (seq60028){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60028));
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
var len__4730__auto___64894 = arguments.length;
var i__4731__auto___64895 = (0);
while(true){
if((i__4731__auto___64895 < len__4730__auto___64894)){
args__4736__auto__.push((arguments[i__4731__auto___64895]));

var G__64896 = (i__4731__auto___64895 + (1));
i__4731__auto___64895 = G__64896;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60060 = conformed_args__49349__auto__;
var map__60060__$1 = (((((!((map__60060 == null))))?(((((map__60060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60060):map__60060);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60060__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mark.cljs$lang$applyTo = (function (seq60052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60052));
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
var len__4730__auto___64903 = arguments.length;
var i__4731__auto___64904 = (0);
while(true){
if((i__4731__auto___64904 < len__4730__auto___64903)){
args__4736__auto__.push((arguments[i__4731__auto___64904]));

var G__64905 = (i__4731__auto___64904 + (1));
i__4731__auto___64904 = G__64905;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60079 = conformed_args__49349__auto__;
var map__60079__$1 = (((((!((map__60079 == null))))?(((((map__60079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60079):map__60079);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60079__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60079__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60079__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDisplacementMap.cljs$lang$applyTo = (function (seq60073){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60073));
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
var len__4730__auto___64912 = arguments.length;
var i__4731__auto___64913 = (0);
while(true){
if((i__4731__auto___64913 < len__4730__auto___64912)){
args__4736__auto__.push((arguments[i__4731__auto___64913]));

var G__64915 = (i__4731__auto___64913 + (1));
i__4731__auto___64913 = G__64915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60094 = conformed_args__49349__auto__;
var map__60094__$1 = (((((!((map__60094 == null))))?(((((map__60094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60094):map__60094);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60094__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.unknown.cljs$lang$applyTo = (function (seq60087){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60087));
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
var len__4730__auto___64940 = arguments.length;
var i__4731__auto___64941 = (0);
while(true){
if((i__4731__auto___64941 < len__4730__auto___64940)){
args__4736__auto__.push((arguments[i__4731__auto___64941]));

var G__64955 = (i__4731__auto___64941 + (1));
i__4731__auto___64941 = G__64955;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60108 = conformed_args__49349__auto__;
var map__60108__$1 = (((((!((map__60108 == null))))?(((((map__60108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60108):map__60108);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.script.cljs$lang$applyTo = (function (seq60102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60102));
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
var len__4730__auto___65004 = arguments.length;
var i__4731__auto___65005 = (0);
while(true){
if((i__4731__auto___65005 < len__4730__auto___65004)){
args__4736__auto__.push((arguments[i__4731__auto___65005]));

var G__65006 = (i__4731__auto___65005 + (1));
i__4731__auto___65005 = G__65006;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60132 = conformed_args__49349__auto__;
var map__60132__$1 = (((((!((map__60132 == null))))?(((((map__60132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60132):map__60132);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60132__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60132__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60132__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTurbulence.cljs$lang$applyTo = (function (seq60122){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60122));
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
var len__4730__auto___65013 = arguments.length;
var i__4731__auto___65014 = (0);
while(true){
if((i__4731__auto___65014 < len__4730__auto___65013)){
args__4736__auto__.push((arguments[i__4731__auto___65014]));

var G__65015 = (i__4731__auto___65014 + (1));
i__4731__auto___65014 = G__65015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60155 = conformed_args__49349__auto__;
var map__60155__$1 = (((((!((map__60155 == null))))?(((((map__60155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60155):map__60155);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60155__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60155__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60155__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.big.cljs$lang$applyTo = (function (seq60145){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60145));
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
var len__4730__auto___65024 = arguments.length;
var i__4731__auto___65025 = (0);
while(true){
if((i__4731__auto___65025 < len__4730__auto___65024)){
args__4736__auto__.push((arguments[i__4731__auto___65025]));

var G__65026 = (i__4731__auto___65025 + (1));
i__4731__auto___65025 = G__65026;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60184 = conformed_args__49349__auto__;
var map__60184__$1 = (((((!((map__60184 == null))))?(((((map__60184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60184):map__60184);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.button.cljs$lang$applyTo = (function (seq60170){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60170));
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
var len__4730__auto___65033 = arguments.length;
var i__4731__auto___65035 = (0);
while(true){
if((i__4731__auto___65035 < len__4730__auto___65033)){
args__4736__auto__.push((arguments[i__4731__auto___65035]));

var G__65036 = (i__4731__auto___65035 + (1));
i__4731__auto___65035 = G__65036;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60196 = conformed_args__49349__auto__;
var map__60196__$1 = (((((!((map__60196 == null))))?(((((map__60196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60196):map__60196);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_uri.cljs$lang$applyTo = (function (seq60191){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60191));
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
var len__4730__auto___65042 = arguments.length;
var i__4731__auto___65043 = (0);
while(true){
if((i__4731__auto___65043 < len__4730__auto___65042)){
args__4736__auto__.push((arguments[i__4731__auto___65043]));

var G__65045 = (i__4731__auto___65043 + (1));
i__4731__auto___65043 = G__65045;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60216 = conformed_args__49349__auto__;
var map__60216__$1 = (((((!((map__60216 == null))))?(((((map__60216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60216):map__60216);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.wbr.cljs$lang$applyTo = (function (seq60211){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60211));
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
var len__4730__auto___65049 = arguments.length;
var i__4731__auto___65051 = (0);
while(true){
if((i__4731__auto___65051 < len__4730__auto___65049)){
args__4736__auto__.push((arguments[i__4731__auto___65051]));

var G__65052 = (i__4731__auto___65051 + (1));
i__4731__auto___65051 = G__65052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60238 = conformed_args__49349__auto__;
var map__60238__$1 = (((((!((map__60238 == null))))?(((((map__60238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60238):map__60238);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.symbol.cljs$lang$applyTo = (function (seq60228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60228));
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
var len__4730__auto___65053 = arguments.length;
var i__4731__auto___65054 = (0);
while(true){
if((i__4731__auto___65054 < len__4730__auto___65053)){
args__4736__auto__.push((arguments[i__4731__auto___65054]));

var G__65055 = (i__4731__auto___65054 + (1));
i__4731__auto___65054 = G__65055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60278 = conformed_args__49349__auto__;
var map__60278__$1 = (((((!((map__60278 == null))))?(((((map__60278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60278):map__60278);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60278__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.strong.cljs$lang$applyTo = (function (seq60260){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60260));
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
var len__4730__auto___65069 = arguments.length;
var i__4731__auto___65070 = (0);
while(true){
if((i__4731__auto___65070 < len__4730__auto___65069)){
args__4736__auto__.push((arguments[i__4731__auto___65070]));

var G__65073 = (i__4731__auto___65070 + (1));
i__4731__auto___65070 = G__65073;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60319 = conformed_args__49349__auto__;
var map__60319__$1 = (((((!((map__60319 == null))))?(((((map__60319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60319):map__60319);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60319__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.use.cljs$lang$applyTo = (function (seq60308){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60308));
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
var len__4730__auto___65120 = arguments.length;
var i__4731__auto___65124 = (0);
while(true){
if((i__4731__auto___65124 < len__4730__auto___65120)){
args__4736__auto__.push((arguments[i__4731__auto___65124]));

var G__65131 = (i__4731__auto___65124 + (1));
i__4731__auto___65124 = G__65131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60347 = conformed_args__49349__auto__;
var map__60347__$1 = (((((!((map__60347 == null))))?(((((map__60347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60347):map__60347);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.solidcolor.cljs$lang$applyTo = (function (seq60334){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60334));
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
var len__4730__auto___65139 = arguments.length;
var i__4731__auto___65140 = (0);
while(true){
if((i__4731__auto___65140 < len__4730__auto___65139)){
args__4736__auto__.push((arguments[i__4731__auto___65140]));

var G__65142 = (i__4731__auto___65140 + (1));
i__4731__auto___65140 = G__65142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60403 = conformed_args__49349__auto__;
var map__60403__$1 = (((((!((map__60403 == null))))?(((((map__60403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60403):map__60403);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fePointLight.cljs$lang$applyTo = (function (seq60389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60389));
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
var len__4730__auto___65147 = arguments.length;
var i__4731__auto___65148 = (0);
while(true){
if((i__4731__auto___65148 < len__4730__auto___65147)){
args__4736__auto__.push((arguments[i__4731__auto___65148]));

var G__65149 = (i__4731__auto___65148 + (1));
i__4731__auto___65148 = G__65149;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60455 = conformed_args__49349__auto__;
var map__60455__$1 = (((((!((map__60455 == null))))?(((((map__60455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60455):map__60455);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.li.cljs$lang$applyTo = (function (seq60426){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60426));
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
var len__4730__auto___65157 = arguments.length;
var i__4731__auto___65158 = (0);
while(true){
if((i__4731__auto___65158 < len__4730__auto___65157)){
args__4736__auto__.push((arguments[i__4731__auto___65158]));

var G__65160 = (i__4731__auto___65158 + (1));
i__4731__auto___65158 = G__65160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60473 = conformed_args__49349__auto__;
var map__60473__$1 = (((((!((map__60473 == null))))?(((((map__60473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60473):map__60473);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dt.cljs$lang$applyTo = (function (seq60467){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60467));
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
var len__4730__auto___65166 = arguments.length;
var i__4731__auto___65168 = (0);
while(true){
if((i__4731__auto___65168 < len__4730__auto___65166)){
args__4736__auto__.push((arguments[i__4731__auto___65168]));

var G__65170 = (i__4731__auto___65168 + (1));
i__4731__auto___65168 = G__65170;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60488 = conformed_args__49349__auto__;
var map__60488__$1 = (((((!((map__60488 == null))))?(((((map__60488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60488):map__60488);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60488__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncB.cljs$lang$applyTo = (function (seq60482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60482));
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
var len__4730__auto___65173 = arguments.length;
var i__4731__auto___65174 = (0);
while(true){
if((i__4731__auto___65174 < len__4730__auto___65173)){
args__4736__auto__.push((arguments[i__4731__auto___65174]));

var G__65176 = (i__4731__auto___65174 + (1));
i__4731__auto___65174 = G__65176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60501 = conformed_args__49349__auto__;
var map__60501__$1 = (((((!((map__60501 == null))))?(((((map__60501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60501):map__60501);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60501__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.marker.cljs$lang$applyTo = (function (seq60496){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60496));
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
var len__4730__auto___65182 = arguments.length;
var i__4731__auto___65183 = (0);
while(true){
if((i__4731__auto___65183 < len__4730__auto___65182)){
args__4736__auto__.push((arguments[i__4731__auto___65183]));

var G__65184 = (i__4731__auto___65183 + (1));
i__4731__auto___65183 = G__65184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60540 = conformed_args__49349__auto__;
var map__60540__$1 = (((((!((map__60540 == null))))?(((((map__60540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60540):map__60540);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60540__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComponentTransfer.cljs$lang$applyTo = (function (seq60509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60509));
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
var len__4730__auto___65192 = arguments.length;
var i__4731__auto___65193 = (0);
while(true){
if((i__4731__auto___65193 < len__4730__auto___65192)){
args__4736__auto__.push((arguments[i__4731__auto___65193]));

var G__65194 = (i__4731__auto___65193 + (1));
i__4731__auto___65193 = G__65194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60562 = conformed_args__49349__auto__;
var map__60562__$1 = (((((!((map__60562 == null))))?(((((map__60562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60562):map__60562);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.td.cljs$lang$applyTo = (function (seq60558){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60558));
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
var len__4730__auto___65235 = arguments.length;
var i__4731__auto___65236 = (0);
while(true){
if((i__4731__auto___65236 < len__4730__auto___65235)){
args__4736__auto__.push((arguments[i__4731__auto___65236]));

var G__65241 = (i__4731__auto___65236 + (1));
i__4731__auto___65236 = G__65241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60585 = conformed_args__49349__auto__;
var map__60585__$1 = (((((!((map__60585 == null))))?(((((map__60585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60585):map__60585);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tr.cljs$lang$applyTo = (function (seq60574){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60574));
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
var len__4730__auto___65262 = arguments.length;
var i__4731__auto___65263 = (0);
while(true){
if((i__4731__auto___65263 < len__4730__auto___65262)){
args__4736__auto__.push((arguments[i__4731__auto___65263]));

var G__65267 = (i__4731__auto___65263 + (1));
i__4731__auto___65263 = G__65267;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60600 = conformed_args__49349__auto__;
var map__60600__$1 = (((((!((map__60600 == null))))?(((((map__60600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60600):map__60600);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60600__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.circle.cljs$lang$applyTo = (function (seq60594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60594));
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
var len__4730__auto___65275 = arguments.length;
var i__4731__auto___65276 = (0);
while(true){
if((i__4731__auto___65276 < len__4730__auto___65275)){
args__4736__auto__.push((arguments[i__4731__auto___65276]));

var G__65277 = (i__4731__auto___65276 + (1));
i__4731__auto___65276 = G__65277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60625 = conformed_args__49349__auto__;
var map__60625__$1 = (((((!((map__60625 == null))))?(((((map__60625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60625):map__60625);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.section.cljs$lang$applyTo = (function (seq60617){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60617));
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
var len__4730__auto___65282 = arguments.length;
var i__4731__auto___65283 = (0);
while(true){
if((i__4731__auto___65283 < len__4730__auto___65282)){
args__4736__auto__.push((arguments[i__4731__auto___65283]));

var G__65285 = (i__4731__auto___65283 + (1));
i__4731__auto___65283 = G__65285;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60643 = conformed_args__49349__auto__;
var map__60643__$1 = (((((!((map__60643 == null))))?(((((map__60643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60643):map__60643);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60643__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60643__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60643__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDropShadow.cljs$lang$applyTo = (function (seq60630){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60630));
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
var len__4730__auto___65292 = arguments.length;
var i__4731__auto___65294 = (0);
while(true){
if((i__4731__auto___65294 < len__4730__auto___65292)){
args__4736__auto__.push((arguments[i__4731__auto___65294]));

var G__65295 = (i__4731__auto___65294 + (1));
i__4731__auto___65294 = G__65295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60660 = conformed_args__49349__auto__;
var map__60660__$1 = (((((!((map__60660 == null))))?(((((map__60660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60660):map__60660);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60660__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.th.cljs$lang$applyTo = (function (seq60651){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60651));
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
var len__4730__auto___65308 = arguments.length;
var i__4731__auto___65309 = (0);
while(true){
if((i__4731__auto___65309 < len__4730__auto___65308)){
args__4736__auto__.push((arguments[i__4731__auto___65309]));

var G__65310 = (i__4731__auto___65309 + (1));
i__4731__auto___65309 = G__65310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60682 = conformed_args__49349__auto__;
var map__60682__$1 = (((((!((map__60682 == null))))?(((((map__60682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60682):map__60682);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60682__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60682__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60682__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.time.cljs$lang$applyTo = (function (seq60665){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60665));
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
var len__4730__auto___65322 = arguments.length;
var i__4731__auto___65326 = (0);
while(true){
if((i__4731__auto___65326 < len__4730__auto___65322)){
args__4736__auto__.push((arguments[i__4731__auto___65326]));

var G__65328 = (i__4731__auto___65326 + (1));
i__4731__auto___65326 = G__65328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60709 = conformed_args__49349__auto__;
var map__60709__$1 = (((((!((map__60709 == null))))?(((((map__60709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60709):map__60709);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.optgroup.cljs$lang$applyTo = (function (seq60688){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60688));
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
var len__4730__auto___65330 = arguments.length;
var i__4731__auto___65331 = (0);
while(true){
if((i__4731__auto___65331 < len__4730__auto___65330)){
args__4736__auto__.push((arguments[i__4731__auto___65331]));

var G__65332 = (i__4731__auto___65331 + (1));
i__4731__auto___65331 = G__65332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60734 = conformed_args__49349__auto__;
var map__60734__$1 = (((((!((map__60734 == null))))?(((((map__60734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60734):map__60734);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60734__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.iframe.cljs$lang$applyTo = (function (seq60721){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60721));
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
var len__4730__auto___65337 = arguments.length;
var i__4731__auto___65338 = (0);
while(true){
if((i__4731__auto___65338 < len__4730__auto___65337)){
args__4736__auto__.push((arguments[i__4731__auto___65338]));

var G__65339 = (i__4731__auto___65338 + (1));
i__4731__auto___65338 = G__65339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60752 = conformed_args__49349__auto__;
var map__60752__$1 = (((((!((map__60752 == null))))?(((((map__60752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60752):map__60752);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60752__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.color_profile.cljs$lang$applyTo = (function (seq60744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60744));
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
var len__4730__auto___65345 = arguments.length;
var i__4731__auto___65346 = (0);
while(true){
if((i__4731__auto___65346 < len__4730__auto___65345)){
args__4736__auto__.push((arguments[i__4731__auto___65346]));

var G__65347 = (i__4731__auto___65346 + (1));
i__4731__auto___65346 = G__65347;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60767 = conformed_args__49349__auto__;
var map__60767__$1 = (((((!((map__60767 == null))))?(((((map__60767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60767):map__60767);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.legend.cljs$lang$applyTo = (function (seq60763){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60763));
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
var len__4730__auto___65351 = arguments.length;
var i__4731__auto___65352 = (0);
while(true){
if((i__4731__auto___65352 < len__4730__auto___65351)){
args__4736__auto__.push((arguments[i__4731__auto___65352]));

var G__65353 = (i__4731__auto___65352 + (1));
i__4731__auto___65352 = G__65353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60800 = conformed_args__49349__auto__;
var map__60800__$1 = (((((!((map__60800 == null))))?(((((map__60800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60800):map__60800);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.em.cljs$lang$applyTo = (function (seq60798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60798));
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
var len__4730__auto___65357 = arguments.length;
var i__4731__auto___65358 = (0);
while(true){
if((i__4731__auto___65358 < len__4730__auto___65357)){
args__4736__auto__.push((arguments[i__4731__auto___65358]));

var G__65360 = (i__4731__auto___65358 + (1));
i__4731__auto___65358 = G__65360;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60819 = conformed_args__49349__auto__;
var map__60819__$1 = (((((!((map__60819 == null))))?(((((map__60819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60819):map__60819);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.kbd.cljs$lang$applyTo = (function (seq60815){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60815));
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
var len__4730__auto___65367 = arguments.length;
var i__4731__auto___65368 = (0);
while(true){
if((i__4731__auto___65368 < len__4730__auto___65367)){
args__4736__auto__.push((arguments[i__4731__auto___65368]));

var G__65369 = (i__4731__auto___65368 + (1));
i__4731__auto___65368 = G__65369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60836 = conformed_args__49349__auto__;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.article.cljs$lang$applyTo = (function (seq60826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60826));
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
var len__4730__auto___65374 = arguments.length;
var i__4731__auto___65376 = (0);
while(true){
if((i__4731__auto___65376 < len__4730__auto___65374)){
args__4736__auto__.push((arguments[i__4731__auto___65376]));

var G__65377 = (i__4731__auto___65376 + (1));
i__4731__auto___65376 = G__65377;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60855 = conformed_args__49349__auto__;
var map__60855__$1 = (((((!((map__60855 == null))))?(((((map__60855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60855):map__60855);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateColor.cljs$lang$applyTo = (function (seq60843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60843));
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
var len__4730__auto___65383 = arguments.length;
var i__4731__auto___65384 = (0);
while(true){
if((i__4731__auto___65384 < len__4730__auto___65383)){
args__4736__auto__.push((arguments[i__4731__auto___65384]));

var G__65385 = (i__4731__auto___65384 + (1));
i__4731__auto___65384 = G__65385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60943 = conformed_args__49349__auto__;
var map__60943__$1 = (((((!((map__60943 == null))))?(((((map__60943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60943):map__60943);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.clipPath.cljs$lang$applyTo = (function (seq60935){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60935));
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
var len__4730__auto___65390 = arguments.length;
var i__4731__auto___65391 = (0);
while(true){
if((i__4731__auto___65391 < len__4730__auto___65390)){
args__4736__auto__.push((arguments[i__4731__auto___65391]));

var G__65392 = (i__4731__auto___65391 + (1));
i__4731__auto___65391 = G__65392;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61063 = conformed_args__49349__auto__;
var map__61063__$1 = (((((!((map__61063 == null))))?(((((map__61063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61063):map__61063);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.abbr.cljs$lang$applyTo = (function (seq61002){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61002));
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
var len__4730__auto___65396 = arguments.length;
var i__4731__auto___65397 = (0);
while(true){
if((i__4731__auto___65397 < len__4730__auto___65396)){
args__4736__auto__.push((arguments[i__4731__auto___65397]));

var G__65398 = (i__4731__auto___65397 + (1));
i__4731__auto___65397 = G__65398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61194 = conformed_args__49349__auto__;
var map__61194__$1 = (((((!((map__61194 == null))))?(((((map__61194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61194):map__61194);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphDef.cljs$lang$applyTo = (function (seq61141){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61141));
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
var len__4730__auto___65402 = arguments.length;
var i__4731__auto___65403 = (0);
while(true){
if((i__4731__auto___65403 < len__4730__auto___65402)){
args__4736__auto__.push((arguments[i__4731__auto___65403]));

var G__65404 = (i__4731__auto___65403 + (1));
i__4731__auto___65403 = G__65404;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61215 = conformed_args__49349__auto__;
var map__61215__$1 = (((((!((map__61215 == null))))?(((((map__61215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61215):map__61215);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61215__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61215__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61215__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshrow.cljs$lang$applyTo = (function (seq61204){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61204));
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
var len__4730__auto___65408 = arguments.length;
var i__4731__auto___65409 = (0);
while(true){
if((i__4731__auto___65409 < len__4730__auto___65408)){
args__4736__auto__.push((arguments[i__4731__auto___65409]));

var G__65410 = (i__4731__auto___65409 + (1));
i__4731__auto___65409 = G__65410;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61240 = conformed_args__49349__auto__;
var map__61240__$1 = (((((!((map__61240 == null))))?(((((map__61240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61240):map__61240);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cursor.cljs$lang$applyTo = (function (seq61228){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61228));
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
var len__4730__auto___65413 = arguments.length;
var i__4731__auto___65414 = (0);
while(true){
if((i__4731__auto___65414 < len__4730__auto___65413)){
args__4736__auto__.push((arguments[i__4731__auto___65414]));

var G__65415 = (i__4731__auto___65414 + (1));
i__4731__auto___65414 = G__65415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61262 = conformed_args__49349__auto__;
var map__61262__$1 = (((((!((map__61262 == null))))?(((((map__61262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61262):map__61262);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61262__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61262__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61262__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animate.cljs$lang$applyTo = (function (seq61254){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61254));
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
var len__4730__auto___65418 = arguments.length;
var i__4731__auto___65419 = (0);
while(true){
if((i__4731__auto___65419 < len__4730__auto___65418)){
args__4736__auto__.push((arguments[i__4731__auto___65419]));

var G__65422 = (i__4731__auto___65419 + (1));
i__4731__auto___65419 = G__65422;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61280 = conformed_args__49349__auto__;
var map__61280__$1 = (((((!((map__61280 == null))))?(((((map__61280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61280):map__61280);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.source.cljs$lang$applyTo = (function (seq61275){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61275));
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
var len__4730__auto___65426 = arguments.length;
var i__4731__auto___65427 = (0);
while(true){
if((i__4731__auto___65427 < len__4730__auto___65426)){
args__4736__auto__.push((arguments[i__4731__auto___65427]));

var G__65428 = (i__4731__auto___65427 + (1));
i__4731__auto___65427 = G__65428;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61291 = conformed_args__49349__auto__;
var map__61291__$1 = (((((!((map__61291 == null))))?(((((map__61291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61291):map__61291);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61291__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61291__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61291__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.output.cljs$lang$applyTo = (function (seq61282){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61282));
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
var len__4730__auto___65429 = arguments.length;
var i__4731__auto___65430 = (0);
while(true){
if((i__4731__auto___65430 < len__4730__auto___65429)){
args__4736__auto__.push((arguments[i__4731__auto___65430]));

var G__65431 = (i__4731__auto___65430 + (1));
i__4731__auto___65430 = G__65431;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61307 = conformed_args__49349__auto__;
var map__61307__$1 = (((((!((map__61307 == null))))?(((((map__61307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61307):map__61307);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61307__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61307__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face.cljs$lang$applyTo = (function (seq61299){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61299));
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
var len__4730__auto___65436 = arguments.length;
var i__4731__auto___65437 = (0);
while(true){
if((i__4731__auto___65437 < len__4730__auto___65436)){
args__4736__auto__.push((arguments[i__4731__auto___65437]));

var G__65440 = (i__4731__auto___65437 + (1));
i__4731__auto___65437 = G__65440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61321 = conformed_args__49349__auto__;
var map__61321__$1 = (((((!((map__61321 == null))))?(((((map__61321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61321):map__61321);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMergeNode.cljs$lang$applyTo = (function (seq61318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61318));
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
var len__4730__auto___65442 = arguments.length;
var i__4731__auto___65443 = (0);
while(true){
if((i__4731__auto___65443 < len__4730__auto___65442)){
args__4736__auto__.push((arguments[i__4731__auto___65443]));

var G__65444 = (i__4731__auto___65443 + (1));
i__4731__auto___65443 = G__65444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61338 = conformed_args__49349__auto__;
var map__61338__$1 = (((((!((map__61338 == null))))?(((((map__61338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61338):map__61338);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61338__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpotLight.cljs$lang$applyTo = (function (seq61331){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61331));
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
var len__4730__auto___65448 = arguments.length;
var i__4731__auto___65449 = (0);
while(true){
if((i__4731__auto___65449 < len__4730__auto___65448)){
args__4736__auto__.push((arguments[i__4731__auto___65449]));

var G__65450 = (i__4731__auto___65449 + (1));
i__4731__auto___65449 = G__65450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61352 = conformed_args__49349__auto__;
var map__61352__$1 = (((((!((map__61352 == null))))?(((((map__61352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61352):map__61352);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.header.cljs$lang$applyTo = (function (seq61346){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61346));
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
var len__4730__auto___65454 = arguments.length;
var i__4731__auto___65455 = (0);
while(true){
if((i__4731__auto___65455 < len__4730__auto___65454)){
args__4736__auto__.push((arguments[i__4731__auto___65455]));

var G__65456 = (i__4731__auto___65455 + (1));
i__4731__auto___65455 = G__65456;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61368 = conformed_args__49349__auto__;
var map__61368__$1 = (((((!((map__61368 == null))))?(((((map__61368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61368):map__61368);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.datalist.cljs$lang$applyTo = (function (seq61361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61361));
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
var len__4730__auto___65460 = arguments.length;
var i__4731__auto___65461 = (0);
while(true){
if((i__4731__auto___65461 < len__4730__auto___65460)){
args__4736__auto__.push((arguments[i__4731__auto___65461]));

var G__65462 = (i__4731__auto___65461 + (1));
i__4731__auto___65461 = G__65462;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61380 = conformed_args__49349__auto__;
var map__61380__$1 = (((((!((map__61380 == null))))?(((((map__61380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61380):map__61380);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tfoot.cljs$lang$applyTo = (function (seq61374){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61374));
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
var len__4730__auto___65463 = arguments.length;
var i__4731__auto___65464 = (0);
while(true){
if((i__4731__auto___65464 < len__4730__auto___65463)){
args__4736__auto__.push((arguments[i__4731__auto___65464]));

var G__65466 = (i__4731__auto___65464 + (1));
i__4731__auto___65464 = G__65466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61394 = conformed_args__49349__auto__;
var map__61394__$1 = (((((!((map__61394 == null))))?(((((map__61394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61394):map__61394);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.s.cljs$lang$applyTo = (function (seq61389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61389));
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
var len__4730__auto___65469 = arguments.length;
var i__4731__auto___65470 = (0);
while(true){
if((i__4731__auto___65470 < len__4730__auto___65469)){
args__4736__auto__.push((arguments[i__4731__auto___65470]));

var G__65471 = (i__4731__auto___65470 + (1));
i__4731__auto___65470 = G__65471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61416 = conformed_args__49349__auto__;
var map__61416__$1 = (((((!((map__61416 == null))))?(((((map__61416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61416):map__61416);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61416__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatch.cljs$lang$applyTo = (function (seq61399){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61399));
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
var len__4730__auto___65489 = arguments.length;
var i__4731__auto___65490 = (0);
while(true){
if((i__4731__auto___65490 < len__4730__auto___65489)){
args__4736__auto__.push((arguments[i__4731__auto___65490]));

var G__65491 = (i__4731__auto___65490 + (1));
i__4731__auto___65490 = G__65491;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61520 = conformed_args__49349__auto__;
var map__61520__$1 = (((((!((map__61520 == null))))?(((((map__61520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61520):map__61520);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ins.cljs$lang$applyTo = (function (seq61460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61460));
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
var len__4730__auto___65496 = arguments.length;
var i__4731__auto___65497 = (0);
while(true){
if((i__4731__auto___65497 < len__4730__auto___65496)){
args__4736__auto__.push((arguments[i__4731__auto___65497]));

var G__65499 = (i__4731__auto___65497 + (1));
i__4731__auto___65497 = G__65499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61659 = conformed_args__49349__auto__;
var map__61659__$1 = (((((!((map__61659 == null))))?(((((map__61659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61659):map__61659);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61659__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61659__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61659__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.footer.cljs$lang$applyTo = (function (seq61615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61615));
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
var len__4730__auto___65507 = arguments.length;
var i__4731__auto___65508 = (0);
while(true){
if((i__4731__auto___65508 < len__4730__auto___65507)){
args__4736__auto__.push((arguments[i__4731__auto___65508]));

var G__65509 = (i__4731__auto___65508 + (1));
i__4731__auto___65508 = G__65509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61776 = conformed_args__49349__auto__;
var map__61776__$1 = (((((!((map__61776 == null))))?(((((map__61776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61776):map__61776);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mpath.cljs$lang$applyTo = (function (seq61736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61736));
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
var len__4730__auto___65511 = arguments.length;
var i__4731__auto___65512 = (0);
while(true){
if((i__4731__auto___65512 < len__4730__auto___65511)){
args__4736__auto__.push((arguments[i__4731__auto___65512]));

var G__65513 = (i__4731__auto___65512 + (1));
i__4731__auto___65512 = G__65513;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61901 = conformed_args__49349__auto__;
var map__61901__$1 = (((((!((map__61901 == null))))?(((((map__61901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61901):map__61901);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61901__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.title.cljs$lang$applyTo = (function (seq61849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61849));
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
var len__4730__auto___65515 = arguments.length;
var i__4731__auto___65516 = (0);
while(true){
if((i__4731__auto___65516 < len__4730__auto___65515)){
args__4736__auto__.push((arguments[i__4731__auto___65516]));

var G__65517 = (i__4731__auto___65516 + (1));
i__4731__auto___65516 = G__65517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62025 = conformed_args__49349__auto__;
var map__62025__$1 = (((((!((map__62025 == null))))?(((((map__62025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62025):map__62025);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62025__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h5.cljs$lang$applyTo = (function (seq61975){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61975));
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
var len__4730__auto___65521 = arguments.length;
var i__4731__auto___65522 = (0);
while(true){
if((i__4731__auto___65522 < len__4730__auto___65521)){
args__4736__auto__.push((arguments[i__4731__auto___65522]));

var G__65523 = (i__4731__auto___65522 + (1));
i__4731__auto___65522 = G__65523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62059 = conformed_args__49349__auto__;
var map__62059__$1 = (((((!((map__62059 == null))))?(((((map__62059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62059):map__62059);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62059__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshgradient.cljs$lang$applyTo = (function (seq62047){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62047));
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
var len__4730__auto___65527 = arguments.length;
var i__4731__auto___65528 = (0);
while(true){
if((i__4731__auto___65528 < len__4730__auto___65527)){
args__4736__auto__.push((arguments[i__4731__auto___65528]));

var G__65529 = (i__4731__auto___65528 + (1));
i__4731__auto___65528 = G__65529;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62067 = conformed_args__49349__auto__;
var map__62067__$1 = (((((!((map__62067 == null))))?(((((map__62067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62067):map__62067);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.canvas.cljs$lang$applyTo = (function (seq62064){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62064));
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
var len__4730__auto___65534 = arguments.length;
var i__4731__auto___65535 = (0);
while(true){
if((i__4731__auto___65535 < len__4730__auto___65534)){
args__4736__auto__.push((arguments[i__4731__auto___65535]));

var G__65536 = (i__4731__auto___65535 + (1));
i__4731__auto___65535 = G__65536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62083 = conformed_args__49349__auto__;
var map__62083__$1 = (((((!((map__62083 == null))))?(((((map__62083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62083):map__62083);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62083__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.param.cljs$lang$applyTo = (function (seq62075){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62075));
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
var len__4730__auto___65554 = arguments.length;
var i__4731__auto___65555 = (0);
while(true){
if((i__4731__auto___65555 < len__4730__auto___65554)){
args__4736__auto__.push((arguments[i__4731__auto___65555]));

var G__65557 = (i__4731__auto___65555 + (1));
i__4731__auto___65555 = G__65557;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62109 = conformed_args__49349__auto__;
var map__62109__$1 = (((((!((map__62109 == null))))?(((((map__62109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62109):map__62109);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62109__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font.cljs$lang$applyTo = (function (seq62099){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62099));
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
var len__4730__auto___65563 = arguments.length;
var i__4731__auto___65564 = (0);
while(true){
if((i__4731__auto___65564 < len__4730__auto___65563)){
args__4736__auto__.push((arguments[i__4731__auto___65564]));

var G__65565 = (i__4731__auto___65564 + (1));
i__4731__auto___65564 = G__65565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62128 = conformed_args__49349__auto__;
var map__62128__$1 = (((((!((map__62128 == null))))?(((((map__62128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62128):map__62128);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62128__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62128__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62128__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.div.cljs$lang$applyTo = (function (seq62121){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62121));
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
var len__4730__auto___65572 = arguments.length;
var i__4731__auto___65573 = (0);
while(true){
if((i__4731__auto___65573 < len__4730__auto___65572)){
args__4736__auto__.push((arguments[i__4731__auto___65573]));

var G__65574 = (i__4731__auto___65573 + (1));
i__4731__auto___65573 = G__65574;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62156 = conformed_args__49349__auto__;
var map__62156__$1 = (((((!((map__62156 == null))))?(((((map__62156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62156):map__62156);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62156__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62156__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62156__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.option.cljs$lang$applyTo = (function (seq62143){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62143));
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
var len__4730__auto___65579 = arguments.length;
var i__4731__auto___65580 = (0);
while(true){
if((i__4731__auto___65580 < len__4730__auto___65579)){
args__4736__auto__.push((arguments[i__4731__auto___65580]));

var G__65581 = (i__4731__auto___65580 + (1));
i__4731__auto___65580 = G__65581;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62172 = conformed_args__49349__auto__;
var map__62172__$1 = (((((!((map__62172 == null))))?(((((map__62172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62172):map__62172);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFlood.cljs$lang$applyTo = (function (seq62163){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62163));
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
var len__4730__auto___65588 = arguments.length;
var i__4731__auto___65589 = (0);
while(true){
if((i__4731__auto___65589 < len__4730__auto___65588)){
args__4736__auto__.push((arguments[i__4731__auto___65589]));

var G__65601 = (i__4731__auto___65589 + (1));
i__4731__auto___65589 = G__65601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62193 = conformed_args__49349__auto__;
var map__62193__$1 = (((((!((map__62193 == null))))?(((((map__62193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62193):map__62193);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62193__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.summary.cljs$lang$applyTo = (function (seq62185){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62185));
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
var len__4730__auto___65614 = arguments.length;
var i__4731__auto___65616 = (0);
while(true){
if((i__4731__auto___65616 < len__4730__auto___65614)){
args__4736__auto__.push((arguments[i__4731__auto___65616]));

var G__65618 = (i__4731__auto___65616 + (1));
i__4731__auto___65616 = G__65618;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62231 = conformed_args__49349__auto__;
var map__62231__$1 = (((((!((map__62231 == null))))?(((((map__62231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62231):map__62231);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMorphology.cljs$lang$applyTo = (function (seq62214){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62214));
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
var len__4730__auto___65624 = arguments.length;
var i__4731__auto___65626 = (0);
while(true){
if((i__4731__auto___65626 < len__4730__auto___65624)){
args__4736__auto__.push((arguments[i__4731__auto___65626]));

var G__65627 = (i__4731__auto___65626 + (1));
i__4731__auto___65626 = G__65627;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62259 = conformed_args__49349__auto__;
var map__62259__$1 = (((((!((map__62259 == null))))?(((((map__62259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62259):map__62259);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62259__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62259__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62259__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.samp.cljs$lang$applyTo = (function (seq62251){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62251));
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
var len__4730__auto___65635 = arguments.length;
var i__4731__auto___65636 = (0);
while(true){
if((i__4731__auto___65636 < len__4730__auto___65635)){
args__4736__auto__.push((arguments[i__4731__auto___65636]));

var G__65637 = (i__4731__auto___65636 + (1));
i__4731__auto___65636 = G__65637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62285 = conformed_args__49349__auto__;
var map__62285__$1 = (((((!((map__62285 == null))))?(((((map__62285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62285):map__62285);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62285__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62285__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62285__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyphRef.cljs$lang$applyTo = (function (seq62271){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62271));
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
var len__4730__auto___65639 = arguments.length;
var i__4731__auto___65642 = (0);
while(true){
if((i__4731__auto___65642 < len__4730__auto___65639)){
args__4736__auto__.push((arguments[i__4731__auto___65642]));

var G__65643 = (i__4731__auto___65642 + (1));
i__4731__auto___65642 = G__65643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62309 = conformed_args__49349__auto__;
var map__62309__$1 = (((((!((map__62309 == null))))?(((((map__62309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62309):map__62309);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.small.cljs$lang$applyTo = (function (seq62301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62301));
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
var len__4730__auto___65668 = arguments.length;
var i__4731__auto___65669 = (0);
while(true){
if((i__4731__auto___65669 < len__4730__auto___65668)){
args__4736__auto__.push((arguments[i__4731__auto___65669]));

var G__65671 = (i__4731__auto___65669 + (1));
i__4731__auto___65669 = G__65671;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62323 = conformed_args__49349__auto__;
var map__62323__$1 = (((((!((map__62323 == null))))?(((((map__62323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62323):map__62323);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62323__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62323__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62323__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.style.cljs$lang$applyTo = (function (seq62318){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62318));
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
var len__4730__auto___65677 = arguments.length;
var i__4731__auto___65678 = (0);
while(true){
if((i__4731__auto___65678 < len__4730__auto___65677)){
args__4736__auto__.push((arguments[i__4731__auto___65678]));

var G__65681 = (i__4731__auto___65678 + (1));
i__4731__auto___65678 = G__65681;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62337 = conformed_args__49349__auto__;
var map__62337__$1 = (((((!((map__62337 == null))))?(((((map__62337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62337):map__62337);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62337__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62337__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62337__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textarea.cljs$lang$applyTo = (function (seq62332){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62332));
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
var len__4730__auto___65688 = arguments.length;
var i__4731__auto___65689 = (0);
while(true){
if((i__4731__auto___65689 < len__4730__auto___65688)){
args__4736__auto__.push((arguments[i__4731__auto___65689]));

var G__65690 = (i__4731__auto___65689 + (1));
i__4731__auto___65689 = G__65690;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62350 = conformed_args__49349__auto__;
var map__62350__$1 = (((((!((map__62350 == null))))?(((((map__62350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62350):map__62350);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62350__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feGaussianBlur.cljs$lang$applyTo = (function (seq62344){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62344));
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
var len__4730__auto___65697 = arguments.length;
var i__4731__auto___65698 = (0);
while(true){
if((i__4731__auto___65698 < len__4730__auto___65697)){
args__4736__auto__.push((arguments[i__4731__auto___65698]));

var G__65699 = (i__4731__auto___65698 + (1));
i__4731__auto___65698 = G__65699;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62365 = conformed_args__49349__auto__;
var map__62365__$1 = (((((!((map__62365 == null))))?(((((map__62365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62365):map__62365);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h4.cljs$lang$applyTo = (function (seq62353){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62353));
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
var len__4730__auto___65700 = arguments.length;
var i__4731__auto___65701 = (0);
while(true){
if((i__4731__auto___65701 < len__4730__auto___65700)){
args__4736__auto__.push((arguments[i__4731__auto___65701]));

var G__65702 = (i__4731__auto___65701 + (1));
i__4731__auto___65701 = G__65702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62386 = conformed_args__49349__auto__;
var map__62386__$1 = (((((!((map__62386 == null))))?(((((map__62386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62386):map__62386);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62386__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62386__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62386__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.head.cljs$lang$applyTo = (function (seq62379){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62379));
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
var len__4730__auto___65707 = arguments.length;
var i__4731__auto___65708 = (0);
while(true){
if((i__4731__auto___65708 < len__4730__auto___65707)){
args__4736__auto__.push((arguments[i__4731__auto___65708]));

var G__65709 = (i__4731__auto___65708 + (1));
i__4731__auto___65708 = G__65709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62395 = conformed_args__49349__auto__;
var map__62395__$1 = (((((!((map__62395 == null))))?(((((map__62395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62395):map__62395);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.g.cljs$lang$applyTo = (function (seq62388){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62388));
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
var len__4730__auto___65714 = arguments.length;
var i__4731__auto___65715 = (0);
while(true){
if((i__4731__auto___65715 < len__4730__auto___65714)){
args__4736__auto__.push((arguments[i__4731__auto___65715]));

var G__65716 = (i__4731__auto___65715 + (1));
i__4731__auto___65715 = G__65716;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62413 = conformed_args__49349__auto__;
var map__62413__$1 = (((((!((map__62413 == null))))?(((((map__62413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62413):map__62413);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62413__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62413__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62413__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.missing_glyph.cljs$lang$applyTo = (function (seq62403){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62403));
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
var len__4730__auto___65719 = arguments.length;
var i__4731__auto___65720 = (0);
while(true){
if((i__4731__auto___65720 < len__4730__auto___65719)){
args__4736__auto__.push((arguments[i__4731__auto___65720]));

var G__65721 = (i__4731__auto___65720 + (1));
i__4731__auto___65720 = G__65721;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62434 = conformed_args__49349__auto__;
var map__62434__$1 = (((((!((map__62434 == null))))?(((((map__62434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62434):map__62434);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62434__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.stop.cljs$lang$applyTo = (function (seq62424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62424));
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
var len__4730__auto___65724 = arguments.length;
var i__4731__auto___65725 = (0);
while(true){
if((i__4731__auto___65725 < len__4730__auto___65724)){
args__4736__auto__.push((arguments[i__4731__auto___65725]));

var G__65726 = (i__4731__auto___65725 + (1));
i__4731__auto___65725 = G__65726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62455 = conformed_args__49349__auto__;
var map__62455__$1 = (((((!((map__62455 == null))))?(((((map__62455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62455):map__62455);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62455__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62455__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62455__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq62446){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62446));
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
var len__4730__auto___65745 = arguments.length;
var i__4731__auto___65748 = (0);
while(true){
if((i__4731__auto___65748 < len__4730__auto___65745)){
args__4736__auto__.push((arguments[i__4731__auto___65748]));

var G__65749 = (i__4731__auto___65748 + (1));
i__4731__auto___65748 = G__65749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62470 = conformed_args__49349__auto__;
var map__62470__$1 = (((((!((map__62470 == null))))?(((((map__62470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62470):map__62470);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62470__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62470__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62470__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.filter.cljs$lang$applyTo = (function (seq62463){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62463));
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
var len__4730__auto___65754 = arguments.length;
var i__4731__auto___65755 = (0);
while(true){
if((i__4731__auto___65755 < len__4730__auto___65754)){
args__4736__auto__.push((arguments[i__4731__auto___65755]));

var G__65756 = (i__4731__auto___65755 + (1));
i__4731__auto___65755 = G__65756;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62487 = conformed_args__49349__auto__;
var map__62487__$1 = (((((!((map__62487 == null))))?(((((map__62487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62487):map__62487);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62487__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComposite.cljs$lang$applyTo = (function (seq62484){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62484));
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
var len__4730__auto___65763 = arguments.length;
var i__4731__auto___65764 = (0);
while(true){
if((i__4731__auto___65764 < len__4730__auto___65763)){
args__4736__auto__.push((arguments[i__4731__auto___65764]));

var G__65766 = (i__4731__auto___65764 + (1));
i__4731__auto___65764 = G__65766;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62503 = conformed_args__49349__auto__;
var map__62503__$1 = (((((!((map__62503 == null))))?(((((map__62503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62503):map__62503);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mesh.cljs$lang$applyTo = (function (seq62498){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62498));
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
var len__4730__auto___65771 = arguments.length;
var i__4731__auto___65772 = (0);
while(true){
if((i__4731__auto___65772 < len__4730__auto___65771)){
args__4736__auto__.push((arguments[i__4731__auto___65772]));

var G__65773 = (i__4731__auto___65772 + (1));
i__4731__auto___65772 = G__65773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62515 = conformed_args__49349__auto__;
var map__62515__$1 = (((((!((map__62515 == null))))?(((((map__62515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62515):map__62515);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.var$.cljs$lang$applyTo = (function (seq62509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62509));
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
var len__4730__auto___65780 = arguments.length;
var i__4731__auto___65781 = (0);
while(true){
if((i__4731__auto___65781 < len__4730__auto___65780)){
args__4736__auto__.push((arguments[i__4731__auto___65781]));

var G__65785 = (i__4731__auto___65781 + (1));
i__4731__auto___65781 = G__65785;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62526 = conformed_args__49349__auto__;
var map__62526__$1 = (((((!((map__62526 == null))))?(((((map__62526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62526):map__62526);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62526__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62526__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62526__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tspan.cljs$lang$applyTo = (function (seq62520){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62520));
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
var len__4730__auto___65806 = arguments.length;
var i__4731__auto___65807 = (0);
while(true){
if((i__4731__auto___65807 < len__4730__auto___65806)){
args__4736__auto__.push((arguments[i__4731__auto___65807]));

var G__65808 = (i__4731__auto___65807 + (1));
i__4731__auto___65807 = G__65808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62543 = conformed_args__49349__auto__;
var map__62543__$1 = (((((!((map__62543 == null))))?(((((map__62543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62543):map__62543);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62543__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ol.cljs$lang$applyTo = (function (seq62538){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62538));
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
var len__4730__auto___65814 = arguments.length;
var i__4731__auto___65816 = (0);
while(true){
if((i__4731__auto___65816 < len__4730__auto___65814)){
args__4736__auto__.push((arguments[i__4731__auto___65816]));

var G__65818 = (i__4731__auto___65816 + (1));
i__4731__auto___65816 = G__65818;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62562 = conformed_args__49349__auto__;
var map__62562__$1 = (((((!((map__62562 == null))))?(((((map__62562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62562):map__62562);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62562__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62562__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62562__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.details.cljs$lang$applyTo = (function (seq62550){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62550));
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
var len__4730__auto___65826 = arguments.length;
var i__4731__auto___65827 = (0);
while(true){
if((i__4731__auto___65827 < len__4730__auto___65826)){
args__4736__auto__.push((arguments[i__4731__auto___65827]));

var G__65829 = (i__4731__auto___65827 + (1));
i__4731__auto___65827 = G__65829;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62618 = conformed_args__49349__auto__;
var map__62618__$1 = (((((!((map__62618 == null))))?(((((map__62618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62618):map__62618);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.line.cljs$lang$applyTo = (function (seq62605){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62605));
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
var len__4730__auto___65836 = arguments.length;
var i__4731__auto___65837 = (0);
while(true){
if((i__4731__auto___65837 < len__4730__auto___65836)){
args__4736__auto__.push((arguments[i__4731__auto___65837]));

var G__65838 = (i__4731__auto___65837 + (1));
i__4731__auto___65837 = G__65838;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62632 = conformed_args__49349__auto__;
var map__62632__$1 = (((((!((map__62632 == null))))?(((((map__62632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62632):map__62632);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.col.cljs$lang$applyTo = (function (seq62625){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62625));
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
var len__4730__auto___65861 = arguments.length;
var i__4731__auto___65866 = (0);
while(true){
if((i__4731__auto___65866 < len__4730__auto___65861)){
args__4736__auto__.push((arguments[i__4731__auto___65866]));

var G__65869 = (i__4731__auto___65866 + (1));
i__4731__auto___65866 = G__65869;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62645 = conformed_args__49349__auto__;
var map__62645__$1 = (((((!((map__62645 == null))))?(((((map__62645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62645):map__62645);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.label.cljs$lang$applyTo = (function (seq62638){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62638));
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
var len__4730__auto___65873 = arguments.length;
var i__4731__auto___65874 = (0);
while(true){
if((i__4731__auto___65874 < len__4730__auto___65873)){
args__4736__auto__.push((arguments[i__4731__auto___65874]));

var G__65875 = (i__4731__auto___65874 + (1));
i__4731__auto___65874 = G__65875;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62655 = conformed_args__49349__auto__;
var map__62655__$1 = (((((!((map__62655 == null))))?(((((map__62655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62655):map__62655);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62655__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.picture.cljs$lang$applyTo = (function (seq62653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62653));
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
var len__4730__auto___65881 = arguments.length;
var i__4731__auto___65883 = (0);
while(true){
if((i__4731__auto___65883 < len__4730__auto___65881)){
args__4736__auto__.push((arguments[i__4731__auto___65883]));

var G__65885 = (i__4731__auto___65883 + (1));
i__4731__auto___65883 = G__65885;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62664 = conformed_args__49349__auto__;
var map__62664__$1 = (((((!((map__62664 == null))))?(((((map__62664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62664):map__62664);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rt.cljs$lang$applyTo = (function (seq62660){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62660));
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
var len__4730__auto___65892 = arguments.length;
var i__4731__auto___65893 = (0);
while(true){
if((i__4731__auto___65893 < len__4730__auto___65892)){
args__4736__auto__.push((arguments[i__4731__auto___65893]));

var G__65894 = (i__4731__auto___65893 + (1));
i__4731__auto___65893 = G__65894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62670 = conformed_args__49349__auto__;
var map__62670__$1 = (((((!((map__62670 == null))))?(((((map__62670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62670):map__62670);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h6.cljs$lang$applyTo = (function (seq62667){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62667));
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
var len__4730__auto___65901 = arguments.length;
var i__4731__auto___65902 = (0);
while(true){
if((i__4731__auto___65902 < len__4730__auto___65901)){
args__4736__auto__.push((arguments[i__4731__auto___65902]));

var G__65904 = (i__4731__auto___65902 + (1));
i__4731__auto___65902 = G__65904;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62677 = conformed_args__49349__auto__;
var map__62677__$1 = (((((!((map__62677 == null))))?(((((map__62677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62677):map__62677);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.vkern.cljs$lang$applyTo = (function (seq62676){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62676));
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
var len__4730__auto___65907 = arguments.length;
var i__4731__auto___65908 = (0);
while(true){
if((i__4731__auto___65908 < len__4730__auto___65907)){
args__4736__auto__.push((arguments[i__4731__auto___65908]));

var G__65911 = (i__4731__auto___65908 + (1));
i__4731__auto___65908 = G__65911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62687 = conformed_args__49349__auto__;
var map__62687__$1 = (((((!((map__62687 == null))))?(((((map__62687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62687):map__62687);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62687__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.link.cljs$lang$applyTo = (function (seq62682){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62682));
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
var len__4730__auto___65928 = arguments.length;
var i__4731__auto___65930 = (0);
while(true){
if((i__4731__auto___65930 < len__4730__auto___65928)){
args__4736__auto__.push((arguments[i__4731__auto___65930]));

var G__65935 = (i__4731__auto___65930 + (1));
i__4731__auto___65930 = G__65935;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62692 = conformed_args__49349__auto__;
var map__62692__$1 = (((((!((map__62692 == null))))?(((((map__62692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62692):map__62692);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62692__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62692__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62692__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.defs.cljs$lang$applyTo = (function (seq62691){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62691));
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
var len__4730__auto___65940 = arguments.length;
var i__4731__auto___65941 = (0);
while(true){
if((i__4731__auto___65941 < len__4730__auto___65940)){
args__4736__auto__.push((arguments[i__4731__auto___65941]));

var G__65943 = (i__4731__auto___65941 + (1));
i__4731__auto___65941 = G__65943;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62697 = conformed_args__49349__auto__;
var map__62697__$1 = (((((!((map__62697 == null))))?(((((map__62697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62697):map__62697);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyph.cljs$lang$applyTo = (function (seq62695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62695));
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
var len__4730__auto___65951 = arguments.length;
var i__4731__auto___65952 = (0);
while(true){
if((i__4731__auto___65952 < len__4730__auto___65951)){
args__4736__auto__.push((arguments[i__4731__auto___65952]));

var G__65953 = (i__4731__auto___65952 + (1));
i__4731__auto___65952 = G__65953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62702 = conformed_args__49349__auto__;
var map__62702__$1 = (((((!((map__62702 == null))))?(((((map__62702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62702):map__62702);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62702__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62702__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62702__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.colgroup.cljs$lang$applyTo = (function (seq62699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62699));
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
var len__4730__auto___65958 = arguments.length;
var i__4731__auto___65960 = (0);
while(true){
if((i__4731__auto___65960 < len__4730__auto___65958)){
args__4736__auto__.push((arguments[i__4731__auto___65960]));

var G__65961 = (i__4731__auto___65960 + (1));
i__4731__auto___65960 = G__65961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62706 = conformed_args__49349__auto__;
var map__62706__$1 = (((((!((map__62706 == null))))?(((((map__62706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62706):map__62706);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meter.cljs$lang$applyTo = (function (seq62704){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62704));
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
var len__4730__auto___65966 = arguments.length;
var i__4731__auto___65967 = (0);
while(true){
if((i__4731__auto___65967 < len__4730__auto___65966)){
args__4736__auto__.push((arguments[i__4731__auto___65967]));

var G__65968 = (i__4731__auto___65967 + (1));
i__4731__auto___65967 = G__65968;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62711 = conformed_args__49349__auto__;
var map__62711__$1 = (((((!((map__62711 == null))))?(((((map__62711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62711):map__62711);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62711__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdo.cljs$lang$applyTo = (function (seq62710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62710));
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
var len__4730__auto___65992 = arguments.length;
var i__4731__auto___65993 = (0);
while(true){
if((i__4731__auto___65993 < len__4730__auto___65992)){
args__4736__auto__.push((arguments[i__4731__auto___65993]));

var G__65994 = (i__4731__auto___65993 + (1));
i__4731__auto___65993 = G__65994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62718 = conformed_args__49349__auto__;
var map__62718__$1 = (((((!((map__62718 == null))))?(((((map__62718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62718):map__62718);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feImage.cljs$lang$applyTo = (function (seq62714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62714));
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
var len__4730__auto___65999 = arguments.length;
var i__4731__auto___66000 = (0);
while(true){
if((i__4731__auto___66000 < len__4730__auto___65999)){
args__4736__auto__.push((arguments[i__4731__auto___66000]));

var G__66001 = (i__4731__auto___66000 + (1));
i__4731__auto___66000 = G__66001;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62733 = conformed_args__49349__auto__;
var map__62733__$1 = (((((!((map__62733 == null))))?(((((map__62733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62733):map__62733);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.b.cljs$lang$applyTo = (function (seq62722){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62722));
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
var len__4730__auto___66007 = arguments.length;
var i__4731__auto___66008 = (0);
while(true){
if((i__4731__auto___66008 < len__4730__auto___66007)){
args__4736__auto__.push((arguments[i__4731__auto___66008]));

var G__66009 = (i__4731__auto___66008 + (1));
i__4731__auto___66008 = G__66009;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62753 = conformed_args__49349__auto__;
var map__62753__$1 = (((((!((map__62753 == null))))?(((((map__62753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62753):map__62753);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62753__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.svg.cljs$lang$applyTo = (function (seq62745){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62745));
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
var len__4730__auto___66014 = arguments.length;
var i__4731__auto___66015 = (0);
while(true){
if((i__4731__auto___66015 < len__4730__auto___66014)){
args__4736__auto__.push((arguments[i__4731__auto___66015]));

var G__66017 = (i__4731__auto___66015 + (1));
i__4731__auto___66015 = G__66017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62768 = conformed_args__49349__auto__;
var map__62768__$1 = (((((!((map__62768 == null))))?(((((map__62768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62768):map__62768);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62768__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62768__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62768__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTile.cljs$lang$applyTo = (function (seq62761){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62761));
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
var len__4730__auto___66023 = arguments.length;
var i__4731__auto___66024 = (0);
while(true){
if((i__4731__auto___66024 < len__4730__auto___66023)){
args__4736__auto__.push((arguments[i__4731__auto___66024]));

var G__66025 = (i__4731__auto___66024 + (1));
i__4731__auto___66024 = G__66025;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62783 = conformed_args__49349__auto__;
var map__62783__$1 = (((((!((map__62783 == null))))?(((((map__62783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62783):map__62783);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62783__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ellipse.cljs$lang$applyTo = (function (seq62777){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62777));
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
var len__4730__auto___66029 = arguments.length;
var i__4731__auto___66030 = (0);
while(true){
if((i__4731__auto___66030 < len__4730__auto___66029)){
args__4736__auto__.push((arguments[i__4731__auto___66030]));

var G__66031 = (i__4731__auto___66030 + (1));
i__4731__auto___66030 = G__66031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62811 = conformed_args__49349__auto__;
var map__62811__$1 = (((((!((map__62811 == null))))?(((((map__62811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62811):map__62811);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62811__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62811__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62811__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.code.cljs$lang$applyTo = (function (seq62799){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62799));
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
var len__4730__auto___66036 = arguments.length;
var i__4731__auto___66037 = (0);
while(true){
if((i__4731__auto___66037 < len__4730__auto___66036)){
args__4736__auto__.push((arguments[i__4731__auto___66037]));

var G__66038 = (i__4731__auto___66037 + (1));
i__4731__auto___66037 = G__66038;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62838 = conformed_args__49349__auto__;
var map__62838__$1 = (((((!((map__62838 == null))))?(((((map__62838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62838):map__62838);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62838__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dialog.cljs$lang$applyTo = (function (seq62828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62828));
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
var len__4730__auto___66044 = arguments.length;
var i__4731__auto___66046 = (0);
while(true){
if((i__4731__auto___66046 < len__4730__auto___66044)){
args__4736__auto__.push((arguments[i__4731__auto___66046]));

var G__66047 = (i__4731__auto___66046 + (1));
i__4731__auto___66046 = G__66047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62858 = conformed_args__49349__auto__;
var map__62858__$1 = (((((!((map__62858 == null))))?(((((map__62858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62858):map__62858);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62858__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62858__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq62851){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62851));
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
var len__4730__auto___66050 = arguments.length;
var i__4731__auto___66051 = (0);
while(true){
if((i__4731__auto___66051 < len__4730__auto___66050)){
args__4736__auto__.push((arguments[i__4731__auto___66051]));

var G__66052 = (i__4731__auto___66051 + (1));
i__4731__auto___66051 = G__66052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62895 = conformed_args__49349__auto__;
var map__62895__$1 = (((((!((map__62895 == null))))?(((((map__62895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62895):map__62895);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62895__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.discard.cljs$lang$applyTo = (function (seq62886){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62886));
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
var len__4730__auto___66055 = arguments.length;
var i__4731__auto___66056 = (0);
while(true){
if((i__4731__auto___66056 < len__4730__auto___66055)){
args__4736__auto__.push((arguments[i__4731__auto___66056]));

var G__66058 = (i__4731__auto___66056 + (1));
i__4731__auto___66056 = G__66058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62919 = conformed_args__49349__auto__;
var map__62919__$1 = (((((!((map__62919 == null))))?(((((map__62919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62919):map__62919);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62919__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62919__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62919__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_src.cljs$lang$applyTo = (function (seq62910){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62910));
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
var len__4730__auto___66076 = arguments.length;
var i__4731__auto___66077 = (0);
while(true){
if((i__4731__auto___66077 < len__4730__auto___66076)){
args__4736__auto__.push((arguments[i__4731__auto___66077]));

var G__66079 = (i__4731__auto___66077 + (1));
i__4731__auto___66077 = G__66079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62943 = conformed_args__49349__auto__;
var map__62943__$1 = (((((!((map__62943 == null))))?(((((map__62943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62943):map__62943);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62943__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62943__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.noscript.cljs$lang$applyTo = (function (seq62930){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62930));
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
var len__4730__auto___66086 = arguments.length;
var i__4731__auto___66087 = (0);
while(true){
if((i__4731__auto___66087 < len__4730__auto___66086)){
args__4736__auto__.push((arguments[i__4731__auto___66087]));

var G__66089 = (i__4731__auto___66087 + (1));
i__4731__auto___66087 = G__66089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__62963 = conformed_args__49349__auto__;
var map__62963__$1 = (((((!((map__62963 == null))))?(((((map__62963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62963):map__62963);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62963__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62963__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62963__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateTransform.cljs$lang$applyTo = (function (seq62952){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62952));
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
var len__4730__auto___66094 = arguments.length;
var i__4731__auto___66096 = (0);
while(true){
if((i__4731__auto___66096 < len__4730__auto___66094)){
args__4736__auto__.push((arguments[i__4731__auto___66096]));

var G__66097 = (i__4731__auto___66096 + (1));
i__4731__auto___66096 = G__66097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63003 = conformed_args__49349__auto__;
var map__63003__$1 = (((((!((map__63003 == null))))?(((((map__63003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63003):map__63003);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feColorMatrix.cljs$lang$applyTo = (function (seq62978){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62978));
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
var len__4730__auto___66100 = arguments.length;
var i__4731__auto___66101 = (0);
while(true){
if((i__4731__auto___66101 < len__4730__auto___66100)){
args__4736__auto__.push((arguments[i__4731__auto___66101]));

var G__66102 = (i__4731__auto___66101 + (1));
i__4731__auto___66101 = G__66102;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63055 = conformed_args__49349__auto__;
var map__63055__$1 = (((((!((map__63055 == null))))?(((((map__63055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63055):map__63055);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63055__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63055__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63055__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h2.cljs$lang$applyTo = (function (seq63043){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63043));
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
var len__4730__auto___66121 = arguments.length;
var i__4731__auto___66122 = (0);
while(true){
if((i__4731__auto___66122 < len__4730__auto___66121)){
args__4736__auto__.push((arguments[i__4731__auto___66122]));

var G__66123 = (i__4731__auto___66122 + (1));
i__4731__auto___66122 = G__66123;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63078 = conformed_args__49349__auto__;
var map__63078__$1 = (((((!((map__63078 == null))))?(((((map__63078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63078):map__63078);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63078__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63078__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63078__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.area.cljs$lang$applyTo = (function (seq63071){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63071));
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
var len__4730__auto___66129 = arguments.length;
var i__4731__auto___66130 = (0);
while(true){
if((i__4731__auto___66130 < len__4730__auto___66129)){
args__4736__auto__.push((arguments[i__4731__auto___66130]));

var G__66132 = (i__4731__auto___66130 + (1));
i__4731__auto___66130 = G__66132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63093 = conformed_args__49349__auto__;
var map__63093__$1 = (((((!((map__63093 == null))))?(((((map__63093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63093):map__63093);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63093__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.br.cljs$lang$applyTo = (function (seq63086){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63086));
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
var len__4730__auto___66139 = arguments.length;
var i__4731__auto___66140 = (0);
while(true){
if((i__4731__auto___66140 < len__4730__auto___66139)){
args__4736__auto__.push((arguments[i__4731__auto___66140]));

var G__66141 = (i__4731__auto___66140 + (1));
i__4731__auto___66140 = G__66141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__49349__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__63120 = conformed_args__49349__auto__;
var map__63120__$1 = (((((!((map__63120 == null))))?(((((map__63120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63120):map__63120);
var css__49352__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63120__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__49351__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63120__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var attrs__49350__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63120__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__49351__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__49351__auto__);
var attrs_value__49353__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__49350__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__49353__auto__], null),children__49351__auto____$1),css__49352__auto__);
});

fulcro.client.localized_dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.image.cljs$lang$applyTo = (function (seq63105){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63105));
});


//# sourceMappingURL=fulcro.client.localized_dom.js.map
