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
var G__57155 = arguments.length;
switch (G__57155) {
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
var vec__57162 = args;
var seq__57163 = cljs.core.seq(vec__57162);
var first__57164 = cljs.core.first(seq__57163);
var seq__57163__$1 = cljs.core.next(seq__57163);
var head = first__57164;
var tail = seq__57163__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__57167 = (function (){var G__57168 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__57168,tail);

return G__57168;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57167) : f.call(null,G__57167));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__57172 = (function (){var G__57174 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__57174,args);

return G__57174;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57172) : f.call(null,G__57172));
} else {
if(cljs.core.object_QMARK_(head)){
var G__57186 = (function (){var G__57187 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__57187,tail);

return G__57187;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57186) : f.call(null,G__57186));
} else {
if(cljs.core.map_QMARK_(head)){
var G__57191 = (function (){var G__57192 = [type,cljs.core.clj__GT_js(fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__57192,tail);

return G__57192;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57191) : f.call(null,G__57191));
} else {
var G__57193 = (function (){var G__57194 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__57194,args);

return G__57194;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__57193) : f.call(null,G__57193));

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
var len__4730__auto___59607 = arguments.length;
var i__4731__auto___59608 = (0);
while(true){
if((i__4731__auto___59608 < len__4730__auto___59607)){
args__4736__auto__.push((arguments[i__4731__auto___59608]));

var G__59609 = (i__4731__auto___59608 + (1));
i__4731__auto___59608 = G__59609;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57226 = conformed_args__50743__auto__;
var map__57226__$1 = (((((!((map__57226 == null))))?(((((map__57226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57226):map__57226);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57226__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57226__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57226__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.form.cljs$lang$applyTo = (function (seq57215){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57215));
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
var len__4730__auto___59641 = arguments.length;
var i__4731__auto___59642 = (0);
while(true){
if((i__4731__auto___59642 < len__4730__auto___59641)){
args__4736__auto__.push((arguments[i__4731__auto___59642]));

var G__59647 = (i__4731__auto___59642 + (1));
i__4731__auto___59642 = G__59647;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57236 = conformed_args__50743__auto__;
var map__57236__$1 = (((((!((map__57236 == null))))?(((((map__57236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57236):map__57236);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57236__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57236__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57236__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.audio.cljs$lang$applyTo = (function (seq57230){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57230));
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
var len__4730__auto___59686 = arguments.length;
var i__4731__auto___59691 = (0);
while(true){
if((i__4731__auto___59691 < len__4730__auto___59686)){
args__4736__auto__.push((arguments[i__4731__auto___59691]));

var G__59696 = (i__4731__auto___59691 + (1));
i__4731__auto___59691 = G__59696;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57253 = conformed_args__50743__auto__;
var map__57253__$1 = (((((!((map__57253 == null))))?(((((map__57253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57253):map__57253);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.input.cljs$lang$applyTo = (function (seq57245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57245));
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
var len__4730__auto___59745 = arguments.length;
var i__4731__auto___59747 = (0);
while(true){
if((i__4731__auto___59747 < len__4730__auto___59745)){
args__4736__auto__.push((arguments[i__4731__auto___59747]));

var G__59754 = (i__4731__auto___59747 + (1));
i__4731__auto___59747 = G__59754;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57279 = conformed_args__50743__auto__;
var map__57279__$1 = (((((!((map__57279 == null))))?(((((map__57279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57279):map__57279);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menuitem.cljs$lang$applyTo = (function (seq57265){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57265));
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
var len__4730__auto___59791 = arguments.length;
var i__4731__auto___59792 = (0);
while(true){
if((i__4731__auto___59792 < len__4730__auto___59791)){
args__4736__auto__.push((arguments[i__4731__auto___59792]));

var G__59793 = (i__4731__auto___59792 + (1));
i__4731__auto___59792 = G__59793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57296 = conformed_args__50743__auto__;
var map__57296__$1 = (((((!((map__57296 == null))))?(((((map__57296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57296):map__57296);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57296__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq57286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57286));
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
var len__4730__auto___59803 = arguments.length;
var i__4731__auto___59804 = (0);
while(true){
if((i__4731__auto___59804 < len__4730__auto___59803)){
args__4736__auto__.push((arguments[i__4731__auto___59804]));

var G__59805 = (i__4731__auto___59804 + (1));
i__4731__auto___59804 = G__59805;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57321 = conformed_args__50743__auto__;
var map__57321__$1 = (((((!((map__57321 == null))))?(((((map__57321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57321):map__57321);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57321__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57321__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57321__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMerge.cljs$lang$applyTo = (function (seq57310){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57310));
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
var len__4730__auto___59812 = arguments.length;
var i__4731__auto___59813 = (0);
while(true){
if((i__4731__auto___59813 < len__4730__auto___59812)){
args__4736__auto__.push((arguments[i__4731__auto___59813]));

var G__59814 = (i__4731__auto___59813 + (1));
i__4731__auto___59813 = G__59814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57336 = conformed_args__50743__auto__;
var map__57336__$1 = (((((!((map__57336 == null))))?(((((map__57336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57336):map__57336);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57336__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.set.cljs$lang$applyTo = (function (seq57326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57326));
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
var len__4730__auto___59854 = arguments.length;
var i__4731__auto___59855 = (0);
while(true){
if((i__4731__auto___59855 < len__4730__auto___59854)){
args__4736__auto__.push((arguments[i__4731__auto___59855]));

var G__59858 = (i__4731__auto___59855 + (1));
i__4731__auto___59855 = G__59858;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57346 = conformed_args__50743__auto__;
var map__57346__$1 = (((((!((map__57346 == null))))?(((((map__57346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57346):map__57346);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpecularLighting.cljs$lang$applyTo = (function (seq57341){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57341));
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
var len__4730__auto___59903 = arguments.length;
var i__4731__auto___59904 = (0);
while(true){
if((i__4731__auto___59904 < len__4730__auto___59903)){
args__4736__auto__.push((arguments[i__4731__auto___59904]));

var G__59910 = (i__4731__auto___59904 + (1));
i__4731__auto___59904 = G__59910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57361 = conformed_args__50743__auto__;
var map__57361__$1 = (((((!((map__57361 == null))))?(((((map__57361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57361):map__57361);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57361__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57361__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57361__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.base.cljs$lang$applyTo = (function (seq57360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57360));
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
var len__4730__auto___59964 = arguments.length;
var i__4731__auto___59965 = (0);
while(true){
if((i__4731__auto___59965 < len__4730__auto___59964)){
args__4736__auto__.push((arguments[i__4731__auto___59965]));

var G__59970 = (i__4731__auto___59965 + (1));
i__4731__auto___59965 = G__59970;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57364 = conformed_args__50743__auto__;
var map__57364__$1 = (((((!((map__57364 == null))))?(((((map__57364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57364):map__57364);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h1.cljs$lang$applyTo = (function (seq57363){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57363));
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
var len__4730__auto___59984 = arguments.length;
var i__4731__auto___59985 = (0);
while(true){
if((i__4731__auto___59985 < len__4730__auto___59984)){
args__4736__auto__.push((arguments[i__4731__auto___59985]));

var G__59987 = (i__4731__auto___59985 + (1));
i__4731__auto___59985 = G__59987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57368 = conformed_args__50743__auto__;
var map__57368__$1 = (((((!((map__57368 == null))))?(((((map__57368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57368):map__57368);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feOffset.cljs$lang$applyTo = (function (seq57366){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57366));
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
var len__4730__auto___60024 = arguments.length;
var i__4731__auto___60025 = (0);
while(true){
if((i__4731__auto___60025 < len__4730__auto___60024)){
args__4736__auto__.push((arguments[i__4731__auto___60025]));

var G__60027 = (i__4731__auto___60025 + (1));
i__4731__auto___60025 = G__60027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57372 = conformed_args__50743__auto__;
var map__57372__$1 = (((((!((map__57372 == null))))?(((((map__57372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57372):map__57372);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57372__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57372__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57372__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.embed.cljs$lang$applyTo = (function (seq57370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57370));
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
var len__4730__auto___60043 = arguments.length;
var i__4731__auto___60044 = (0);
while(true){
if((i__4731__auto___60044 < len__4730__auto___60043)){
args__4736__auto__.push((arguments[i__4731__auto___60044]));

var G__60050 = (i__4731__auto___60044 + (1));
i__4731__auto___60044 = G__60050;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57379 = conformed_args__50743__auto__;
var map__57379__$1 = (((((!((map__57379 == null))))?(((((map__57379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57379):map__57379);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57379__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57379__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57379__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateMotion.cljs$lang$applyTo = (function (seq57375){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57375));
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
var len__4730__auto___60072 = arguments.length;
var i__4731__auto___60073 = (0);
while(true){
if((i__4731__auto___60073 < len__4730__auto___60072)){
args__4736__auto__.push((arguments[i__4731__auto___60073]));

var G__60074 = (i__4731__auto___60073 + (1));
i__4731__auto___60073 = G__60074;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57382 = conformed_args__50743__auto__;
var map__57382__$1 = (((((!((map__57382 == null))))?(((((map__57382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57382):map__57382);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57382__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57382__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57382__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h3.cljs$lang$applyTo = (function (seq57381){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57381));
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
var len__4730__auto___60075 = arguments.length;
var i__4731__auto___60076 = (0);
while(true){
if((i__4731__auto___60076 < len__4730__auto___60075)){
args__4736__auto__.push((arguments[i__4731__auto___60076]));

var G__60077 = (i__4731__auto___60076 + (1));
i__4731__auto___60076 = G__60077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57387 = conformed_args__50743__auto__;
var map__57387__$1 = (((((!((map__57387 == null))))?(((((map__57387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57387):map__57387);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57387__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57387__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57387__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.body.cljs$lang$applyTo = (function (seq57385){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57385));
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
var len__4730__auto___60090 = arguments.length;
var i__4731__auto___60091 = (0);
while(true){
if((i__4731__auto___60091 < len__4730__auto___60090)){
args__4736__auto__.push((arguments[i__4731__auto___60091]));

var G__60092 = (i__4731__auto___60091 + (1));
i__4731__auto___60091 = G__60092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57392 = conformed_args__50743__auto__;
var map__57392__$1 = (((((!((map__57392 == null))))?(((((map__57392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57392):map__57392);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hkern.cljs$lang$applyTo = (function (seq57389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57389));
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
var len__4730__auto___60094 = arguments.length;
var i__4731__auto___60095 = (0);
while(true){
if((i__4731__auto___60095 < len__4730__auto___60094)){
args__4736__auto__.push((arguments[i__4731__auto___60095]));

var G__60096 = (i__4731__auto___60095 + (1));
i__4731__auto___60095 = G__60096;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57395 = conformed_args__50743__auto__;
var map__57395__$1 = (((((!((map__57395 == null))))?(((((map__57395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57395):map__57395);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57395__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57395__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57395__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.keygen.cljs$lang$applyTo = (function (seq57394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57394));
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
var len__4730__auto___60100 = arguments.length;
var i__4731__auto___60101 = (0);
while(true){
if((i__4731__auto___60101 < len__4730__auto___60100)){
args__4736__auto__.push((arguments[i__4731__auto___60101]));

var G__60102 = (i__4731__auto___60101 + (1));
i__4731__auto___60101 = G__60102;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57404 = conformed_args__50743__auto__;
var map__57404__$1 = (((((!((map__57404 == null))))?(((((map__57404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57404):map__57404);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57404__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57404__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57404__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_format.cljs$lang$applyTo = (function (seq57400){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57400));
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
var len__4730__auto___60113 = arguments.length;
var i__4731__auto___60114 = (0);
while(true){
if((i__4731__auto___60114 < len__4730__auto___60113)){
args__4736__auto__.push((arguments[i__4731__auto___60114]));

var G__60115 = (i__4731__auto___60114 + (1));
i__4731__auto___60114 = G__60115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57411 = conformed_args__50743__auto__;
var map__57411__$1 = (((((!((map__57411 == null))))?(((((map__57411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57411):map__57411);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57411__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57411__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57411__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncA.cljs$lang$applyTo = (function (seq57407){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57407));
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
var len__4730__auto___60133 = arguments.length;
var i__4731__auto___60134 = (0);
while(true){
if((i__4731__auto___60134 < len__4730__auto___60133)){
args__4736__auto__.push((arguments[i__4731__auto___60134]));

var G__60135 = (i__4731__auto___60134 + (1));
i__4731__auto___60134 = G__60135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57438 = conformed_args__50743__auto__;
var map__57438__$1 = (((((!((map__57438 == null))))?(((((map__57438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57438):map__57438);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57438__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57438__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57438__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.progress.cljs$lang$applyTo = (function (seq57427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57427));
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
var len__4730__auto___60146 = arguments.length;
var i__4731__auto___60147 = (0);
while(true){
if((i__4731__auto___60147 < len__4730__auto___60146)){
args__4736__auto__.push((arguments[i__4731__auto___60147]));

var G__60148 = (i__4731__auto___60147 + (1));
i__4731__auto___60147 = G__60148;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57442 = conformed_args__50743__auto__;
var map__57442__$1 = (((((!((map__57442 == null))))?(((((map__57442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57442):map__57442);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57442__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57442__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57442__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.main.cljs$lang$applyTo = (function (seq57440){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57440));
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
var len__4730__auto___60160 = arguments.length;
var i__4731__auto___60163 = (0);
while(true){
if((i__4731__auto___60163 < len__4730__auto___60160)){
args__4736__auto__.push((arguments[i__4731__auto___60163]));

var G__60164 = (i__4731__auto___60163 + (1));
i__4731__auto___60163 = G__60164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57446 = conformed_args__50743__auto__;
var map__57446__$1 = (((((!((map__57446 == null))))?(((((map__57446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57446):map__57446);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57446__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57446__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57446__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cite.cljs$lang$applyTo = (function (seq57445){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57445));
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
var len__4730__auto___60192 = arguments.length;
var i__4731__auto___60193 = (0);
while(true){
if((i__4731__auto___60193 < len__4730__auto___60192)){
args__4736__auto__.push((arguments[i__4731__auto___60193]));

var G__60194 = (i__4731__auto___60193 + (1));
i__4731__auto___60193 = G__60194;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57450 = conformed_args__50743__auto__;
var map__57450__$1 = (((((!((map__57450 == null))))?(((((map__57450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57450):map__57450);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57450__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57450__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57450__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rect.cljs$lang$applyTo = (function (seq57449){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57449));
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
var len__4730__auto___60211 = arguments.length;
var i__4731__auto___60212 = (0);
while(true){
if((i__4731__auto___60212 < len__4730__auto___60211)){
args__4736__auto__.push((arguments[i__4731__auto___60212]));

var G__60217 = (i__4731__auto___60212 + (1));
i__4731__auto___60212 = G__60217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57453 = conformed_args__50743__auto__;
var map__57453__$1 = (((((!((map__57453 == null))))?(((((map__57453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57453):map__57453);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57453__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57453__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57453__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tref.cljs$lang$applyTo = (function (seq57452){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57452));
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
var len__4730__auto___60244 = arguments.length;
var i__4731__auto___60246 = (0);
while(true){
if((i__4731__auto___60246 < len__4730__auto___60244)){
args__4736__auto__.push((arguments[i__4731__auto___60246]));

var G__60248 = (i__4731__auto___60246 + (1));
i__4731__auto___60246 = G__60248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57459 = conformed_args__50743__auto__;
var map__57459__$1 = (((((!((map__57459 == null))))?(((((map__57459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57459):map__57459);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshpatch.cljs$lang$applyTo = (function (seq57455){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57455));
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
var len__4730__auto___60290 = arguments.length;
var i__4731__auto___60291 = (0);
while(true){
if((i__4731__auto___60291 < len__4730__auto___60290)){
args__4736__auto__.push((arguments[i__4731__auto___60291]));

var G__60296 = (i__4731__auto___60291 + (1));
i__4731__auto___60291 = G__60296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57463 = conformed_args__50743__auto__;
var map__57463__$1 = (((((!((map__57463 == null))))?(((((map__57463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57463):map__57463);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polyline.cljs$lang$applyTo = (function (seq57462){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57462));
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
var len__4730__auto___60330 = arguments.length;
var i__4731__auto___60331 = (0);
while(true){
if((i__4731__auto___60331 < len__4730__auto___60330)){
args__4736__auto__.push((arguments[i__4731__auto___60331]));

var G__60341 = (i__4731__auto___60331 + (1));
i__4731__auto___60331 = G__60341;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57467 = conformed_args__50743__auto__;
var map__57467__$1 = (((((!((map__57467 == null))))?(((((map__57467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57467):map__57467);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57467__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57467__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57467__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.metadata.cljs$lang$applyTo = (function (seq57465){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57465));
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
var len__4730__auto___60388 = arguments.length;
var i__4731__auto___60389 = (0);
while(true){
if((i__4731__auto___60389 < len__4730__auto___60388)){
args__4736__auto__.push((arguments[i__4731__auto___60389]));

var G__60391 = (i__4731__auto___60389 + (1));
i__4731__auto___60389 = G__60391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57475 = conformed_args__50743__auto__;
var map__57475__$1 = (((((!((map__57475 == null))))?(((((map__57475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57475):map__57475);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57475__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57475__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57475__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.map.cljs$lang$applyTo = (function (seq57470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57470));
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
var len__4730__auto___60406 = arguments.length;
var i__4731__auto___60407 = (0);
while(true){
if((i__4731__auto___60407 < len__4730__auto___60406)){
args__4736__auto__.push((arguments[i__4731__auto___60407]));

var G__60408 = (i__4731__auto___60407 + (1));
i__4731__auto___60407 = G__60408;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57482 = conformed_args__50743__auto__;
var map__57482__$1 = (((((!((map__57482 == null))))?(((((map__57482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57482):map__57482);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.object.cljs$lang$applyTo = (function (seq57480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57480));
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
var len__4730__auto___60422 = arguments.length;
var i__4731__auto___60423 = (0);
while(true){
if((i__4731__auto___60423 < len__4730__auto___60422)){
args__4736__auto__.push((arguments[i__4731__auto___60423]));

var G__60427 = (i__4731__auto___60423 + (1));
i__4731__auto___60423 = G__60427;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57485 = conformed_args__50743__auto__;
var map__57485__$1 = (((((!((map__57485 == null))))?(((((map__57485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57485):map__57485);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57485__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57485__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57485__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.i.cljs$lang$applyTo = (function (seq57484){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57484));
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
var len__4730__auto___60439 = arguments.length;
var i__4731__auto___60444 = (0);
while(true){
if((i__4731__auto___60444 < len__4730__auto___60439)){
args__4736__auto__.push((arguments[i__4731__auto___60444]));

var G__60445 = (i__4731__auto___60444 + (1));
i__4731__auto___60444 = G__60445;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57489 = conformed_args__50743__auto__;
var map__57489__$1 = (((((!((map__57489 == null))))?(((((map__57489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57489):map__57489);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57489__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57489__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57489__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_name.cljs$lang$applyTo = (function (seq57488){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57488));
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
var len__4730__auto___60447 = arguments.length;
var i__4731__auto___60448 = (0);
while(true){
if((i__4731__auto___60448 < len__4730__auto___60447)){
args__4736__auto__.push((arguments[i__4731__auto___60448]));

var G__60449 = (i__4731__auto___60448 + (1));
i__4731__auto___60448 = G__60449;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57493 = conformed_args__50743__auto__;
var map__57493__$1 = (((((!((map__57493 == null))))?(((((map__57493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57493):map__57493);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.p.cljs$lang$applyTo = (function (seq57492){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57492));
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
var len__4730__auto___60456 = arguments.length;
var i__4731__auto___60457 = (0);
while(true){
if((i__4731__auto___60457 < len__4730__auto___60456)){
args__4736__auto__.push((arguments[i__4731__auto___60457]));

var G__60458 = (i__4731__auto___60457 + (1));
i__4731__auto___60457 = G__60458;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57497 = conformed_args__50743__auto__;
var map__57497__$1 = (((((!((map__57497 == null))))?(((((map__57497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57497):map__57497);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57497__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57497__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57497__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncR.cljs$lang$applyTo = (function (seq57495){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57495));
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
var len__4730__auto___60473 = arguments.length;
var i__4731__auto___60474 = (0);
while(true){
if((i__4731__auto___60474 < len__4730__auto___60473)){
args__4736__auto__.push((arguments[i__4731__auto___60474]));

var G__60475 = (i__4731__auto___60474 + (1));
i__4731__auto___60474 = G__60475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57500 = conformed_args__50743__auto__;
var map__57500__$1 = (((((!((map__57500 == null))))?(((((map__57500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57500):map__57500);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57500__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatchpath.cljs$lang$applyTo = (function (seq57499){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57499));
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
var len__4730__auto___60481 = arguments.length;
var i__4731__auto___60482 = (0);
while(true){
if((i__4731__auto___60482 < len__4730__auto___60481)){
args__4736__auto__.push((arguments[i__4731__auto___60482]));

var G__60483 = (i__4731__auto___60482 + (1));
i__4731__auto___60482 = G__60483;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57503 = conformed_args__50743__auto__;
var map__57503__$1 = (((((!((map__57503 == null))))?(((((map__57503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57503):map__57503);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphItem.cljs$lang$applyTo = (function (seq57502){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57502));
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
var len__4730__auto___60492 = arguments.length;
var i__4731__auto___60493 = (0);
while(true){
if((i__4731__auto___60493 < len__4730__auto___60492)){
args__4736__auto__.push((arguments[i__4731__auto___60493]));

var G__60494 = (i__4731__auto___60493 + (1));
i__4731__auto___60493 = G__60494;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57506 = conformed_args__50743__auto__;
var map__57506__$1 = (((((!((map__57506 == null))))?(((((map__57506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57506):map__57506);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.nav.cljs$lang$applyTo = (function (seq57505){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57505));
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
var len__4730__auto___60515 = arguments.length;
var i__4731__auto___60516 = (0);
while(true){
if((i__4731__auto___60516 < len__4730__auto___60515)){
args__4736__auto__.push((arguments[i__4731__auto___60516]));

var G__60517 = (i__4731__auto___60516 + (1));
i__4731__auto___60516 = G__60517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57509 = conformed_args__50743__auto__;
var map__57509__$1 = (((((!((map__57509 == null))))?(((((map__57509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57509):map__57509);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57509__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57509__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57509__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ruby.cljs$lang$applyTo = (function (seq57508){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57508));
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
var len__4730__auto___60531 = arguments.length;
var i__4731__auto___60532 = (0);
while(true){
if((i__4731__auto___60532 < len__4730__auto___60531)){
args__4736__auto__.push((arguments[i__4731__auto___60532]));

var G__60534 = (i__4731__auto___60532 + (1));
i__4731__auto___60532 = G__60534;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57513 = conformed_args__50743__auto__;
var map__57513__$1 = (((((!((map__57513 == null))))?(((((map__57513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57513):map__57513);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57513__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.switch$.cljs$lang$applyTo = (function (seq57511){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57511));
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
var len__4730__auto___60550 = arguments.length;
var i__4731__auto___60552 = (0);
while(true){
if((i__4731__auto___60552 < len__4730__auto___60550)){
args__4736__auto__.push((arguments[i__4731__auto___60552]));

var G__60553 = (i__4731__auto___60552 + (1));
i__4731__auto___60552 = G__60553;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57516 = conformed_args__50743__auto__;
var map__57516__$1 = (((((!((map__57516 == null))))?(((((map__57516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57516):map__57516);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57516__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57516__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57516__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.a.cljs$lang$applyTo = (function (seq57515){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57515));
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
var len__4730__auto___60573 = arguments.length;
var i__4731__auto___60575 = (0);
while(true){
if((i__4731__auto___60575 < len__4730__auto___60573)){
args__4736__auto__.push((arguments[i__4731__auto___60575]));

var G__60578 = (i__4731__auto___60575 + (1));
i__4731__auto___60575 = G__60578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57519 = conformed_args__50743__auto__;
var map__57519__$1 = (((((!((map__57519 == null))))?(((((map__57519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57519):map__57519);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.view.cljs$lang$applyTo = (function (seq57518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57518));
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
var len__4730__auto___60587 = arguments.length;
var i__4731__auto___60588 = (0);
while(true){
if((i__4731__auto___60588 < len__4730__auto___60587)){
args__4736__auto__.push((arguments[i__4731__auto___60588]));

var G__60589 = (i__4731__auto___60588 + (1));
i__4731__auto___60588 = G__60589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57522 = conformed_args__50743__auto__;
var map__57522__$1 = (((((!((map__57522 == null))))?(((((map__57522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57522):map__57522);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57522__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57522__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57522__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menu.cljs$lang$applyTo = (function (seq57521){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57521));
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
var len__4730__auto___60596 = arguments.length;
var i__4731__auto___60597 = (0);
while(true){
if((i__4731__auto___60597 < len__4730__auto___60596)){
args__4736__auto__.push((arguments[i__4731__auto___60597]));

var G__60598 = (i__4731__auto___60597 + (1));
i__4731__auto___60597 = G__60598;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57525 = conformed_args__50743__auto__;
var map__57525__$1 = (((((!((map__57525 == null))))?(((((map__57525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57525):map__57525);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57525__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57525__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57525__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.blockquote.cljs$lang$applyTo = (function (seq57524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57524));
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
var len__4730__auto___60602 = arguments.length;
var i__4731__auto___60603 = (0);
while(true){
if((i__4731__auto___60603 < len__4730__auto___60602)){
args__4736__auto__.push((arguments[i__4731__auto___60603]));

var G__60604 = (i__4731__auto___60603 + (1));
i__4731__auto___60603 = G__60604;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57528 = conformed_args__50743__auto__;
var map__57528__$1 = (((((!((map__57528 == null))))?(((((map__57528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57528):map__57528);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57528__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.img.cljs$lang$applyTo = (function (seq57527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57527));
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
var len__4730__auto___60616 = arguments.length;
var i__4731__auto___60617 = (0);
while(true){
if((i__4731__auto___60617 < len__4730__auto___60616)){
args__4736__auto__.push((arguments[i__4731__auto___60617]));

var G__60618 = (i__4731__auto___60617 + (1));
i__4731__auto___60617 = G__60618;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57531 = conformed_args__50743__auto__;
var map__57531__$1 = (((((!((map__57531 == null))))?(((((map__57531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57531):map__57531);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncG.cljs$lang$applyTo = (function (seq57530){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57530));
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
var len__4730__auto___60620 = arguments.length;
var i__4731__auto___60622 = (0);
while(true){
if((i__4731__auto___60622 < len__4730__auto___60620)){
args__4736__auto__.push((arguments[i__4731__auto___60622]));

var G__60626 = (i__4731__auto___60622 + (1));
i__4731__auto___60622 = G__60626;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57534 = conformed_args__50743__auto__;
var map__57534__$1 = (((((!((map__57534 == null))))?(((((map__57534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57534):map__57534);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57534__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.text.cljs$lang$applyTo = (function (seq57533){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57533));
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
var len__4730__auto___60635 = arguments.length;
var i__4731__auto___60636 = (0);
while(true){
if((i__4731__auto___60636 < len__4730__auto___60635)){
args__4736__auto__.push((arguments[i__4731__auto___60636]));

var G__60637 = (i__4731__auto___60636 + (1));
i__4731__auto___60636 = G__60637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57537 = conformed_args__50743__auto__;
var map__57537__$1 = (((((!((map__57537 == null))))?(((((map__57537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57537):map__57537);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57537__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57537__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57537__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.span.cljs$lang$applyTo = (function (seq57536){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57536));
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
var len__4730__auto___60641 = arguments.length;
var i__4731__auto___60642 = (0);
while(true){
if((i__4731__auto___60642 < len__4730__auto___60641)){
args__4736__auto__.push((arguments[i__4731__auto___60642]));

var G__60647 = (i__4731__auto___60642 + (1));
i__4731__auto___60642 = G__60647;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57565 = conformed_args__50743__auto__;
var map__57565__$1 = (((((!((map__57565 == null))))?(((((map__57565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57565):map__57565);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.track.cljs$lang$applyTo = (function (seq57557){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57557));
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
var len__4730__auto___60656 = arguments.length;
var i__4731__auto___60657 = (0);
while(true){
if((i__4731__auto___60657 < len__4730__auto___60656)){
args__4736__auto__.push((arguments[i__4731__auto___60657]));

var G__60658 = (i__4731__auto___60657 + (1));
i__4731__auto___60657 = G__60658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57574 = conformed_args__50743__auto__;
var map__57574__$1 = (((((!((map__57574 == null))))?(((((map__57574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57574):map__57574);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57574__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57574__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57574__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.data.cljs$lang$applyTo = (function (seq57572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57572));
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
var len__4730__auto___60662 = arguments.length;
var i__4731__auto___60663 = (0);
while(true){
if((i__4731__auto___60663 < len__4730__auto___60662)){
args__4736__auto__.push((arguments[i__4731__auto___60663]));

var G__60667 = (i__4731__auto___60663 + (1));
i__4731__auto___60663 = G__60667;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57581 = conformed_args__50743__auto__;
var map__57581__$1 = (((((!((map__57581 == null))))?(((((map__57581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57581):map__57581);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57581__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57581__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57581__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.u.cljs$lang$applyTo = (function (seq57577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57577));
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
var len__4730__auto___60677 = arguments.length;
var i__4731__auto___60678 = (0);
while(true){
if((i__4731__auto___60678 < len__4730__auto___60677)){
args__4736__auto__.push((arguments[i__4731__auto___60678]));

var G__60679 = (i__4731__auto___60678 + (1));
i__4731__auto___60678 = G__60679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57587 = conformed_args__50743__auto__;
var map__57587__$1 = (((((!((map__57587 == null))))?(((((map__57587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57587):map__57587);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57587__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57587__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57587__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dl.cljs$lang$applyTo = (function (seq57584){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57584));
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
var len__4730__auto___60697 = arguments.length;
var i__4731__auto___60698 = (0);
while(true){
if((i__4731__auto___60698 < len__4730__auto___60697)){
args__4736__auto__.push((arguments[i__4731__auto___60698]));

var G__60700 = (i__4731__auto___60698 + (1));
i__4731__auto___60698 = G__60700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57594 = conformed_args__50743__auto__;
var map__57594__$1 = (((((!((map__57594 == null))))?(((((map__57594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57594):map__57594);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57594__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57594__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57594__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.select.cljs$lang$applyTo = (function (seq57593){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57593));
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
var len__4730__auto___60715 = arguments.length;
var i__4731__auto___60719 = (0);
while(true){
if((i__4731__auto___60719 < len__4730__auto___60715)){
args__4736__auto__.push((arguments[i__4731__auto___60719]));

var G__60724 = (i__4731__auto___60719 + (1));
i__4731__auto___60719 = G__60724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57599 = conformed_args__50743__auto__;
var map__57599__$1 = (((((!((map__57599 == null))))?(((((map__57599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57599):map__57599);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57599__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57599__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57599__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polygon.cljs$lang$applyTo = (function (seq57597){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57597));
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
var len__4730__auto___60725 = arguments.length;
var i__4731__auto___60726 = (0);
while(true){
if((i__4731__auto___60726 < len__4730__auto___60725)){
args__4736__auto__.push((arguments[i__4731__auto___60726]));

var G__60727 = (i__4731__auto___60726 + (1));
i__4731__auto___60726 = G__60727;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57604 = conformed_args__50743__auto__;
var map__57604__$1 = (((((!((map__57604 == null))))?(((((map__57604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57604):map__57604);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57604__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57604__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57604__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pattern.cljs$lang$applyTo = (function (seq57602){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57602));
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
var len__4730__auto___60730 = arguments.length;
var i__4731__auto___60731 = (0);
while(true){
if((i__4731__auto___60731 < len__4730__auto___60730)){
args__4736__auto__.push((arguments[i__4731__auto___60731]));

var G__60732 = (i__4731__auto___60731 + (1));
i__4731__auto___60731 = G__60732;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57610 = conformed_args__50743__auto__;
var map__57610__$1 = (((((!((map__57610 == null))))?(((((map__57610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57610):map__57610);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57610__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57610__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57610__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.html.cljs$lang$applyTo = (function (seq57609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57609));
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
var len__4730__auto___60742 = arguments.length;
var i__4731__auto___60743 = (0);
while(true){
if((i__4731__auto___60743 < len__4730__auto___60742)){
args__4736__auto__.push((arguments[i__4731__auto___60743]));

var G__60745 = (i__4731__auto___60743 + (1));
i__4731__auto___60743 = G__60745;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57614 = conformed_args__50743__auto__;
var map__57614__$1 = (((((!((map__57614 == null))))?(((((map__57614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57614):map__57614);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57614__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57614__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57614__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.foreignObject.cljs$lang$applyTo = (function (seq57613){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57613));
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
var len__4730__auto___60766 = arguments.length;
var i__4731__auto___60767 = (0);
while(true){
if((i__4731__auto___60767 < len__4730__auto___60766)){
args__4736__auto__.push((arguments[i__4731__auto___60767]));

var G__60768 = (i__4731__auto___60767 + (1));
i__4731__auto___60767 = G__60768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57618 = conformed_args__50743__auto__;
var map__57618__$1 = (((((!((map__57618 == null))))?(((((map__57618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57618):map__57618);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.thead.cljs$lang$applyTo = (function (seq57616){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57616));
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
var len__4730__auto___60787 = arguments.length;
var i__4731__auto___60789 = (0);
while(true){
if((i__4731__auto___60789 < len__4730__auto___60787)){
args__4736__auto__.push((arguments[i__4731__auto___60789]));

var G__60793 = (i__4731__auto___60789 + (1));
i__4731__auto___60789 = G__60793;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57621 = conformed_args__50743__auto__;
var map__57621__$1 = (((((!((map__57621 == null))))?(((((map__57621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57621):map__57621);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57621__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57621__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57621__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.path.cljs$lang$applyTo = (function (seq57620){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57620));
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
var len__4730__auto___60807 = arguments.length;
var i__4731__auto___60808 = (0);
while(true){
if((i__4731__auto___60808 < len__4730__auto___60807)){
args__4736__auto__.push((arguments[i__4731__auto___60808]));

var G__60810 = (i__4731__auto___60808 + (1));
i__4731__auto___60808 = G__60810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57625 = conformed_args__50743__auto__;
var map__57625__$1 = (((((!((map__57625 == null))))?(((((map__57625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57625):map__57625);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.del.cljs$lang$applyTo = (function (seq57623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57623));
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
var len__4730__auto___60817 = arguments.length;
var i__4731__auto___60818 = (0);
while(true){
if((i__4731__auto___60818 < len__4730__auto___60817)){
args__4736__auto__.push((arguments[i__4731__auto___60818]));

var G__60820 = (i__4731__auto___60818 + (1));
i__4731__auto___60818 = G__60820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57628 = conformed_args__50743__auto__;
var map__57628__$1 = (((((!((map__57628 == null))))?(((((map__57628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57628):map__57628);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57628__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57628__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57628__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyph.cljs$lang$applyTo = (function (seq57627){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57627));
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
var len__4730__auto___60829 = arguments.length;
var i__4731__auto___60830 = (0);
while(true){
if((i__4731__auto___60830 < len__4730__auto___60829)){
args__4736__auto__.push((arguments[i__4731__auto___60830]));

var G__60832 = (i__4731__auto___60830 + (1));
i__4731__auto___60830 = G__60832;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57632 = conformed_args__50743__auto__;
var map__57632__$1 = (((((!((map__57632 == null))))?(((((map__57632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57632):map__57632);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57632__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fieldset.cljs$lang$applyTo = (function (seq57630){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57630));
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
var len__4730__auto___60847 = arguments.length;
var i__4731__auto___60848 = (0);
while(true){
if((i__4731__auto___60848 < len__4730__auto___60847)){
args__4736__auto__.push((arguments[i__4731__auto___60848]));

var G__60853 = (i__4731__auto___60848 + (1));
i__4731__auto___60848 = G__60853;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57635 = conformed_args__50743__auto__;
var map__57635__$1 = (((((!((map__57635 == null))))?(((((map__57635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57635):map__57635);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57635__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57635__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57635__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.aside.cljs$lang$applyTo = (function (seq57634){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57634));
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
var len__4730__auto___60886 = arguments.length;
var i__4731__auto___60887 = (0);
while(true){
if((i__4731__auto___60887 < len__4730__auto___60886)){
args__4736__auto__.push((arguments[i__4731__auto___60887]));

var G__60890 = (i__4731__auto___60887 + (1));
i__4731__auto___60887 = G__60890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57638 = conformed_args__50743__auto__;
var map__57638__$1 = (((((!((map__57638 == null))))?(((((map__57638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57638):map__57638);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feBlend.cljs$lang$applyTo = (function (seq57637){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57637));
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
var len__4730__auto___60910 = arguments.length;
var i__4731__auto___60912 = (0);
while(true){
if((i__4731__auto___60912 < len__4730__auto___60910)){
args__4736__auto__.push((arguments[i__4731__auto___60912]));

var G__60916 = (i__4731__auto___60912 + (1));
i__4731__auto___60912 = G__60916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57645 = conformed_args__50743__auto__;
var map__57645__$1 = (((((!((map__57645 == null))))?(((((map__57645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57645):map__57645);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figure.cljs$lang$applyTo = (function (seq57643){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57643));
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
var len__4730__auto___60934 = arguments.length;
var i__4731__auto___60935 = (0);
while(true){
if((i__4731__auto___60935 < len__4730__auto___60934)){
args__4736__auto__.push((arguments[i__4731__auto___60935]));

var G__60937 = (i__4731__auto___60935 + (1));
i__4731__auto___60935 = G__60937;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57651 = conformed_args__50743__auto__;
var map__57651__$1 = (((((!((map__57651 == null))))?(((((map__57651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57651):map__57651);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textPath.cljs$lang$applyTo = (function (seq57647){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57647));
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
var len__4730__auto___60953 = arguments.length;
var i__4731__auto___60955 = (0);
while(true){
if((i__4731__auto___60955 < len__4730__auto___60953)){
args__4736__auto__.push((arguments[i__4731__auto___60955]));

var G__60958 = (i__4731__auto___60955 + (1));
i__4731__auto___60955 = G__60958;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57658 = conformed_args__50743__auto__;
var map__57658__$1 = (((((!((map__57658 == null))))?(((((map__57658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57658):map__57658);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57658__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figcaption.cljs$lang$applyTo = (function (seq57657){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57657));
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
var len__4730__auto___60981 = arguments.length;
var i__4731__auto___60982 = (0);
while(true){
if((i__4731__auto___60982 < len__4730__auto___60981)){
args__4736__auto__.push((arguments[i__4731__auto___60982]));

var G__60985 = (i__4731__auto___60982 + (1));
i__4731__auto___60982 = G__60985;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57664 = conformed_args__50743__auto__;
var map__57664__$1 = (((((!((map__57664 == null))))?(((((map__57664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57664):map__57664);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mask.cljs$lang$applyTo = (function (seq57663){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57663));
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
var len__4730__auto___61007 = arguments.length;
var i__4731__auto___61008 = (0);
while(true){
if((i__4731__auto___61008 < len__4730__auto___61007)){
args__4736__auto__.push((arguments[i__4731__auto___61008]));

var G__61012 = (i__4731__auto___61008 + (1));
i__4731__auto___61008 = G__61012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57667 = conformed_args__50743__auto__;
var map__57667__$1 = (((((!((map__57667 == null))))?(((((map__57667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57667):map__57667);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57667__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57667__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57667__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.q.cljs$lang$applyTo = (function (seq57666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57666));
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
var len__4730__auto___61037 = arguments.length;
var i__4731__auto___61038 = (0);
while(true){
if((i__4731__auto___61038 < len__4730__auto___61037)){
args__4736__auto__.push((arguments[i__4731__auto___61038]));

var G__61042 = (i__4731__auto___61038 + (1));
i__4731__auto___61038 = G__61042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57674 = conformed_args__50743__auto__;
var map__57674__$1 = (((((!((map__57674 == null))))?(((((map__57674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57674):map__57674);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdi.cljs$lang$applyTo = (function (seq57669){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57669));
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
var len__4730__auto___61046 = arguments.length;
var i__4731__auto___61048 = (0);
while(true){
if((i__4731__auto___61048 < len__4730__auto___61046)){
args__4736__auto__.push((arguments[i__4731__auto___61048]));

var G__61050 = (i__4731__auto___61048 + (1));
i__4731__auto___61048 = G__61050;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57685 = conformed_args__50743__auto__;
var map__57685__$1 = (((((!((map__57685 == null))))?(((((map__57685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57685):map__57685);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDistantLight.cljs$lang$applyTo = (function (seq57684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57684));
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
var len__4730__auto___61070 = arguments.length;
var i__4731__auto___61071 = (0);
while(true){
if((i__4731__auto___61071 < len__4730__auto___61070)){
args__4736__auto__.push((arguments[i__4731__auto___61071]));

var G__61079 = (i__4731__auto___61071 + (1));
i__4731__auto___61071 = G__61079;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57688 = conformed_args__50743__auto__;
var map__57688__$1 = (((((!((map__57688 == null))))?(((((map__57688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57688):map__57688);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57688__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57688__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57688__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.video.cljs$lang$applyTo = (function (seq57687){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57687));
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
var len__4730__auto___61124 = arguments.length;
var i__4731__auto___61125 = (0);
while(true){
if((i__4731__auto___61125 < len__4730__auto___61124)){
args__4736__auto__.push((arguments[i__4731__auto___61125]));

var G__61126 = (i__4731__auto___61125 + (1));
i__4731__auto___61125 = G__61126;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57691 = conformed_args__50743__auto__;
var map__57691__$1 = (((((!((map__57691 == null))))?(((((map__57691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57691):map__57691);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57691__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.address.cljs$lang$applyTo = (function (seq57690){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57690));
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
var len__4730__auto___61140 = arguments.length;
var i__4731__auto___61141 = (0);
while(true){
if((i__4731__auto___61141 < len__4730__auto___61140)){
args__4736__auto__.push((arguments[i__4731__auto___61141]));

var G__61142 = (i__4731__auto___61141 + (1));
i__4731__auto___61141 = G__61142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57694 = conformed_args__50743__auto__;
var map__57694__$1 = (((((!((map__57694 == null))))?(((((map__57694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57694):map__57694);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57694__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57694__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57694__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.caption.cljs$lang$applyTo = (function (seq57693){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57693));
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
var len__4730__auto___61151 = arguments.length;
var i__4731__auto___61154 = (0);
while(true){
if((i__4731__auto___61154 < len__4730__auto___61151)){
args__4736__auto__.push((arguments[i__4731__auto___61154]));

var G__61155 = (i__4731__auto___61154 + (1));
i__4731__auto___61154 = G__61155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57697 = conformed_args__50743__auto__;
var map__57697__$1 = (((((!((map__57697 == null))))?(((((map__57697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57697):map__57697);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57697__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dd.cljs$lang$applyTo = (function (seq57696){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57696));
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
var len__4730__auto___61165 = arguments.length;
var i__4731__auto___61168 = (0);
while(true){
if((i__4731__auto___61168 < len__4730__auto___61165)){
args__4736__auto__.push((arguments[i__4731__auto___61168]));

var G__61173 = (i__4731__auto___61168 + (1));
i__4731__auto___61168 = G__61173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57700 = conformed_args__50743__auto__;
var map__57700__$1 = (((((!((map__57700 == null))))?(((((map__57700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57700):map__57700);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57700__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rp.cljs$lang$applyTo = (function (seq57699){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57699));
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
var len__4730__auto___61180 = arguments.length;
var i__4731__auto___61181 = (0);
while(true){
if((i__4731__auto___61181 < len__4730__auto___61180)){
args__4736__auto__.push((arguments[i__4731__auto___61181]));

var G__61184 = (i__4731__auto___61181 + (1));
i__4731__auto___61181 = G__61184;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57703 = conformed_args__50743__auto__;
var map__57703__$1 = (((((!((map__57703 == null))))?(((((map__57703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57703):map__57703);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57703__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57703__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hr.cljs$lang$applyTo = (function (seq57702){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57702));
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
var len__4730__auto___61208 = arguments.length;
var i__4731__auto___61209 = (0);
while(true){
if((i__4731__auto___61209 < len__4730__auto___61208)){
args__4736__auto__.push((arguments[i__4731__auto___61209]));

var G__61214 = (i__4731__auto___61209 + (1));
i__4731__auto___61209 = G__61214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57706 = conformed_args__50743__auto__;
var map__57706__$1 = (((((!((map__57706 == null))))?(((((map__57706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57706):map__57706);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57706__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57706__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57706__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meta.cljs$lang$applyTo = (function (seq57705){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57705));
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
var len__4730__auto___61249 = arguments.length;
var i__4731__auto___61250 = (0);
while(true){
if((i__4731__auto___61250 < len__4730__auto___61249)){
args__4736__auto__.push((arguments[i__4731__auto___61250]));

var G__61255 = (i__4731__auto___61250 + (1));
i__4731__auto___61250 = G__61255;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57709 = conformed_args__50743__auto__;
var map__57709__$1 = (((((!((map__57709 == null))))?(((((map__57709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57709):map__57709);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57709__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57709__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57709__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tbody.cljs$lang$applyTo = (function (seq57708){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57708));
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
var len__4730__auto___61305 = arguments.length;
var i__4731__auto___61308 = (0);
while(true){
if((i__4731__auto___61308 < len__4730__auto___61305)){
args__4736__auto__.push((arguments[i__4731__auto___61308]));

var G__61313 = (i__4731__auto___61308 + (1));
i__4731__auto___61308 = G__61313;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57712 = conformed_args__50743__auto__;
var map__57712__$1 = (((((!((map__57712 == null))))?(((((map__57712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57712):map__57712);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57712__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57712__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57712__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.desc.cljs$lang$applyTo = (function (seq57711){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57711));
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
var len__4730__auto___61334 = arguments.length;
var i__4731__auto___61335 = (0);
while(true){
if((i__4731__auto___61335 < len__4730__auto___61334)){
args__4736__auto__.push((arguments[i__4731__auto___61335]));

var G__61339 = (i__4731__auto___61335 + (1));
i__4731__auto___61335 = G__61339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57715 = conformed_args__50743__auto__;
var map__57715__$1 = (((((!((map__57715 == null))))?(((((map__57715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57715):map__57715);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57715__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57715__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57715__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.table.cljs$lang$applyTo = (function (seq57714){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57714));
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
var len__4730__auto___61347 = arguments.length;
var i__4731__auto___61348 = (0);
while(true){
if((i__4731__auto___61348 < len__4730__auto___61347)){
args__4736__auto__.push((arguments[i__4731__auto___61348]));

var G__61349 = (i__4731__auto___61348 + (1));
i__4731__auto___61348 = G__61349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57718 = conformed_args__50743__auto__;
var map__57718__$1 = (((((!((map__57718 == null))))?(((((map__57718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57718):map__57718);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57718__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57718__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57718__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pre.cljs$lang$applyTo = (function (seq57717){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57717));
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
var len__4730__auto___61364 = arguments.length;
var i__4731__auto___61365 = (0);
while(true){
if((i__4731__auto___61365 < len__4730__auto___61364)){
args__4736__auto__.push((arguments[i__4731__auto___61365]));

var G__61366 = (i__4731__auto___61365 + (1));
i__4731__auto___61365 = G__61366;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57721 = conformed_args__50743__auto__;
var map__57721__$1 = (((((!((map__57721 == null))))?(((((map__57721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57721):map__57721);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57721__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ul.cljs$lang$applyTo = (function (seq57720){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57720));
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
var len__4730__auto___61393 = arguments.length;
var i__4731__auto___61398 = (0);
while(true){
if((i__4731__auto___61398 < len__4730__auto___61393)){
args__4736__auto__.push((arguments[i__4731__auto___61398]));

var G__61402 = (i__4731__auto___61398 + (1));
i__4731__auto___61398 = G__61402;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57724 = conformed_args__50743__auto__;
var map__57724__$1 = (((((!((map__57724 == null))))?(((((map__57724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57724):map__57724);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57724__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57724__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq57723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57723));
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
var len__4730__auto___61431 = arguments.length;
var i__4731__auto___61433 = (0);
while(true){
if((i__4731__auto___61433 < len__4730__auto___61431)){
args__4736__auto__.push((arguments[i__4731__auto___61433]));

var G__61434 = (i__4731__auto___61433 + (1));
i__4731__auto___61433 = G__61434;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57727 = conformed_args__50743__auto__;
var map__57727__$1 = (((((!((map__57727 == null))))?(((((map__57727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57727):map__57727);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57727__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sup.cljs$lang$applyTo = (function (seq57726){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57726));
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
var len__4730__auto___61450 = arguments.length;
var i__4731__auto___61452 = (0);
while(true){
if((i__4731__auto___61452 < len__4730__auto___61450)){
args__4736__auto__.push((arguments[i__4731__auto___61452]));

var G__61454 = (i__4731__auto___61452 + (1));
i__4731__auto___61452 = G__61454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57730 = conformed_args__50743__auto__;
var map__57730__$1 = (((((!((map__57730 == null))))?(((((map__57730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57730):map__57730);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57730__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57730__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57730__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dfn.cljs$lang$applyTo = (function (seq57729){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57729));
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
var len__4730__auto___61472 = arguments.length;
var i__4731__auto___61473 = (0);
while(true){
if((i__4731__auto___61473 < len__4730__auto___61472)){
args__4736__auto__.push((arguments[i__4731__auto___61473]));

var G__61481 = (i__4731__auto___61473 + (1));
i__4731__auto___61473 = G__61481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57733 = conformed_args__50743__auto__;
var map__57733__$1 = (((((!((map__57733 == null))))?(((((map__57733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57733):map__57733);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57733__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sub.cljs$lang$applyTo = (function (seq57732){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57732));
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
var len__4730__auto___61500 = arguments.length;
var i__4731__auto___61502 = (0);
while(true){
if((i__4731__auto___61502 < len__4730__auto___61500)){
args__4736__auto__.push((arguments[i__4731__auto___61502]));

var G__61503 = (i__4731__auto___61502 + (1));
i__4731__auto___61502 = G__61503;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57736 = conformed_args__50743__auto__;
var map__57736__$1 = (((((!((map__57736 == null))))?(((((map__57736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57736):map__57736);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mark.cljs$lang$applyTo = (function (seq57735){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57735));
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
var len__4730__auto___61527 = arguments.length;
var i__4731__auto___61528 = (0);
while(true){
if((i__4731__auto___61528 < len__4730__auto___61527)){
args__4736__auto__.push((arguments[i__4731__auto___61528]));

var G__61530 = (i__4731__auto___61528 + (1));
i__4731__auto___61528 = G__61530;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57739 = conformed_args__50743__auto__;
var map__57739__$1 = (((((!((map__57739 == null))))?(((((map__57739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57739):map__57739);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57739__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDisplacementMap.cljs$lang$applyTo = (function (seq57738){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57738));
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
var len__4730__auto___61562 = arguments.length;
var i__4731__auto___61564 = (0);
while(true){
if((i__4731__auto___61564 < len__4730__auto___61562)){
args__4736__auto__.push((arguments[i__4731__auto___61564]));

var G__61569 = (i__4731__auto___61564 + (1));
i__4731__auto___61564 = G__61569;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57742 = conformed_args__50743__auto__;
var map__57742__$1 = (((((!((map__57742 == null))))?(((((map__57742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57742):map__57742);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57742__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57742__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57742__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.unknown.cljs$lang$applyTo = (function (seq57741){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57741));
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
var len__4730__auto___61595 = arguments.length;
var i__4731__auto___61597 = (0);
while(true){
if((i__4731__auto___61597 < len__4730__auto___61595)){
args__4736__auto__.push((arguments[i__4731__auto___61597]));

var G__61599 = (i__4731__auto___61597 + (1));
i__4731__auto___61597 = G__61599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57754 = conformed_args__50743__auto__;
var map__57754__$1 = (((((!((map__57754 == null))))?(((((map__57754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57754):map__57754);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57754__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57754__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.script.cljs$lang$applyTo = (function (seq57747){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57747));
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
var len__4730__auto___61632 = arguments.length;
var i__4731__auto___61636 = (0);
while(true){
if((i__4731__auto___61636 < len__4730__auto___61632)){
args__4736__auto__.push((arguments[i__4731__auto___61636]));

var G__61637 = (i__4731__auto___61636 + (1));
i__4731__auto___61636 = G__61637;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57760 = conformed_args__50743__auto__;
var map__57760__$1 = (((((!((map__57760 == null))))?(((((map__57760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57760):map__57760);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57760__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57760__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57760__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTurbulence.cljs$lang$applyTo = (function (seq57756){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57756));
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
var len__4730__auto___61654 = arguments.length;
var i__4731__auto___61655 = (0);
while(true){
if((i__4731__auto___61655 < len__4730__auto___61654)){
args__4736__auto__.push((arguments[i__4731__auto___61655]));

var G__61656 = (i__4731__auto___61655 + (1));
i__4731__auto___61655 = G__61656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57795 = conformed_args__50743__auto__;
var map__57795__$1 = (((((!((map__57795 == null))))?(((((map__57795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57795):map__57795);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57795__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57795__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57795__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.big.cljs$lang$applyTo = (function (seq57774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57774));
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
var len__4730__auto___61667 = arguments.length;
var i__4731__auto___61668 = (0);
while(true){
if((i__4731__auto___61668 < len__4730__auto___61667)){
args__4736__auto__.push((arguments[i__4731__auto___61668]));

var G__61670 = (i__4731__auto___61668 + (1));
i__4731__auto___61668 = G__61670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57819 = conformed_args__50743__auto__;
var map__57819__$1 = (((((!((map__57819 == null))))?(((((map__57819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57819):map__57819);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57819__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57819__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57819__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.button.cljs$lang$applyTo = (function (seq57810){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57810));
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
var len__4730__auto___61676 = arguments.length;
var i__4731__auto___61677 = (0);
while(true){
if((i__4731__auto___61677 < len__4730__auto___61676)){
args__4736__auto__.push((arguments[i__4731__auto___61677]));

var G__61678 = (i__4731__auto___61677 + (1));
i__4731__auto___61677 = G__61678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57830 = conformed_args__50743__auto__;
var map__57830__$1 = (((((!((map__57830 == null))))?(((((map__57830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57830):map__57830);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57830__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_uri.cljs$lang$applyTo = (function (seq57825){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57825));
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
var len__4730__auto___61681 = arguments.length;
var i__4731__auto___61682 = (0);
while(true){
if((i__4731__auto___61682 < len__4730__auto___61681)){
args__4736__auto__.push((arguments[i__4731__auto___61682]));

var G__61685 = (i__4731__auto___61682 + (1));
i__4731__auto___61682 = G__61685;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57850 = conformed_args__50743__auto__;
var map__57850__$1 = (((((!((map__57850 == null))))?(((((map__57850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57850):map__57850);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57850__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.wbr.cljs$lang$applyTo = (function (seq57838){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57838));
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
var len__4730__auto___61703 = arguments.length;
var i__4731__auto___61704 = (0);
while(true){
if((i__4731__auto___61704 < len__4730__auto___61703)){
args__4736__auto__.push((arguments[i__4731__auto___61704]));

var G__61706 = (i__4731__auto___61704 + (1));
i__4731__auto___61704 = G__61706;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57867 = conformed_args__50743__auto__;
var map__57867__$1 = (((((!((map__57867 == null))))?(((((map__57867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57867):map__57867);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.symbol.cljs$lang$applyTo = (function (seq57853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57853));
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
var len__4730__auto___61713 = arguments.length;
var i__4731__auto___61714 = (0);
while(true){
if((i__4731__auto___61714 < len__4730__auto___61713)){
args__4736__auto__.push((arguments[i__4731__auto___61714]));

var G__61715 = (i__4731__auto___61714 + (1));
i__4731__auto___61714 = G__61715;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57893 = conformed_args__50743__auto__;
var map__57893__$1 = (((((!((map__57893 == null))))?(((((map__57893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57893):map__57893);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57893__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57893__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57893__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.strong.cljs$lang$applyTo = (function (seq57882){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57882));
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
var len__4730__auto___61724 = arguments.length;
var i__4731__auto___61725 = (0);
while(true){
if((i__4731__auto___61725 < len__4730__auto___61724)){
args__4736__auto__.push((arguments[i__4731__auto___61725]));

var G__61729 = (i__4731__auto___61725 + (1));
i__4731__auto___61725 = G__61729;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57914 = conformed_args__50743__auto__;
var map__57914__$1 = (((((!((map__57914 == null))))?(((((map__57914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57914):map__57914);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.use.cljs$lang$applyTo = (function (seq57901){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57901));
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
var len__4730__auto___61734 = arguments.length;
var i__4731__auto___61735 = (0);
while(true){
if((i__4731__auto___61735 < len__4730__auto___61734)){
args__4736__auto__.push((arguments[i__4731__auto___61735]));

var G__61736 = (i__4731__auto___61735 + (1));
i__4731__auto___61735 = G__61736;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57935 = conformed_args__50743__auto__;
var map__57935__$1 = (((((!((map__57935 == null))))?(((((map__57935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57935):map__57935);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57935__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57935__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57935__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.solidcolor.cljs$lang$applyTo = (function (seq57925){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57925));
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
var len__4730__auto___61783 = arguments.length;
var i__4731__auto___61786 = (0);
while(true){
if((i__4731__auto___61786 < len__4730__auto___61783)){
args__4736__auto__.push((arguments[i__4731__auto___61786]));

var G__61795 = (i__4731__auto___61786 + (1));
i__4731__auto___61786 = G__61795;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__57984 = conformed_args__50743__auto__;
var map__57984__$1 = (((((!((map__57984 == null))))?(((((map__57984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57984):map__57984);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fePointLight.cljs$lang$applyTo = (function (seq57955){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57955));
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
var len__4730__auto___61818 = arguments.length;
var i__4731__auto___61820 = (0);
while(true){
if((i__4731__auto___61820 < len__4730__auto___61818)){
args__4736__auto__.push((arguments[i__4731__auto___61820]));

var G__61828 = (i__4731__auto___61820 + (1));
i__4731__auto___61820 = G__61828;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58007 = conformed_args__50743__auto__;
var map__58007__$1 = (((((!((map__58007 == null))))?(((((map__58007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58007):map__58007);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58007__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58007__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58007__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.li.cljs$lang$applyTo = (function (seq58000){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58000));
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
var len__4730__auto___61845 = arguments.length;
var i__4731__auto___61846 = (0);
while(true){
if((i__4731__auto___61846 < len__4730__auto___61845)){
args__4736__auto__.push((arguments[i__4731__auto___61846]));

var G__61847 = (i__4731__auto___61846 + (1));
i__4731__auto___61846 = G__61847;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58038 = conformed_args__50743__auto__;
var map__58038__$1 = (((((!((map__58038 == null))))?(((((map__58038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58038):map__58038);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58038__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58038__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58038__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dt.cljs$lang$applyTo = (function (seq58016){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58016));
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
var len__4730__auto___61860 = arguments.length;
var i__4731__auto___61861 = (0);
while(true){
if((i__4731__auto___61861 < len__4730__auto___61860)){
args__4736__auto__.push((arguments[i__4731__auto___61861]));

var G__61864 = (i__4731__auto___61861 + (1));
i__4731__auto___61861 = G__61864;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58067 = conformed_args__50743__auto__;
var map__58067__$1 = (((((!((map__58067 == null))))?(((((map__58067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58067):map__58067);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncB.cljs$lang$applyTo = (function (seq58048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58048));
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
var len__4730__auto___61876 = arguments.length;
var i__4731__auto___61877 = (0);
while(true){
if((i__4731__auto___61877 < len__4730__auto___61876)){
args__4736__auto__.push((arguments[i__4731__auto___61877]));

var G__61878 = (i__4731__auto___61877 + (1));
i__4731__auto___61877 = G__61878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58096 = conformed_args__50743__auto__;
var map__58096__$1 = (((((!((map__58096 == null))))?(((((map__58096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58096):map__58096);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58096__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58096__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58096__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.marker.cljs$lang$applyTo = (function (seq58087){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58087));
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
var len__4730__auto___61884 = arguments.length;
var i__4731__auto___61886 = (0);
while(true){
if((i__4731__auto___61886 < len__4730__auto___61884)){
args__4736__auto__.push((arguments[i__4731__auto___61886]));

var G__61887 = (i__4731__auto___61886 + (1));
i__4731__auto___61886 = G__61887;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58123 = conformed_args__50743__auto__;
var map__58123__$1 = (((((!((map__58123 == null))))?(((((map__58123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58123):map__58123);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58123__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComponentTransfer.cljs$lang$applyTo = (function (seq58118){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58118));
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
var len__4730__auto___61888 = arguments.length;
var i__4731__auto___61889 = (0);
while(true){
if((i__4731__auto___61889 < len__4730__auto___61888)){
args__4736__auto__.push((arguments[i__4731__auto___61889]));

var G__61890 = (i__4731__auto___61889 + (1));
i__4731__auto___61889 = G__61890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58160 = conformed_args__50743__auto__;
var map__58160__$1 = (((((!((map__58160 == null))))?(((((map__58160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58160):map__58160);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58160__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.td.cljs$lang$applyTo = (function (seq58136){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58136));
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
var len__4730__auto___61898 = arguments.length;
var i__4731__auto___61901 = (0);
while(true){
if((i__4731__auto___61901 < len__4730__auto___61898)){
args__4736__auto__.push((arguments[i__4731__auto___61901]));

var G__61902 = (i__4731__auto___61901 + (1));
i__4731__auto___61901 = G__61902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58186 = conformed_args__50743__auto__;
var map__58186__$1 = (((((!((map__58186 == null))))?(((((map__58186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58186):map__58186);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58186__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tr.cljs$lang$applyTo = (function (seq58173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58173));
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
var len__4730__auto___61937 = arguments.length;
var i__4731__auto___61938 = (0);
while(true){
if((i__4731__auto___61938 < len__4730__auto___61937)){
args__4736__auto__.push((arguments[i__4731__auto___61938]));

var G__61939 = (i__4731__auto___61938 + (1));
i__4731__auto___61938 = G__61939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58196 = conformed_args__50743__auto__;
var map__58196__$1 = (((((!((map__58196 == null))))?(((((map__58196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58196):map__58196);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58196__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.circle.cljs$lang$applyTo = (function (seq58188){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58188));
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
var len__4730__auto___61947 = arguments.length;
var i__4731__auto___61949 = (0);
while(true){
if((i__4731__auto___61949 < len__4730__auto___61947)){
args__4736__auto__.push((arguments[i__4731__auto___61949]));

var G__61950 = (i__4731__auto___61949 + (1));
i__4731__auto___61949 = G__61950;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58201 = conformed_args__50743__auto__;
var map__58201__$1 = (((((!((map__58201 == null))))?(((((map__58201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58201):map__58201);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58201__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.section.cljs$lang$applyTo = (function (seq58199){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58199));
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
var len__4730__auto___61961 = arguments.length;
var i__4731__auto___61962 = (0);
while(true){
if((i__4731__auto___61962 < len__4730__auto___61961)){
args__4736__auto__.push((arguments[i__4731__auto___61962]));

var G__61963 = (i__4731__auto___61962 + (1));
i__4731__auto___61962 = G__61963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58211 = conformed_args__50743__auto__;
var map__58211__$1 = (((((!((map__58211 == null))))?(((((map__58211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58211):map__58211);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58211__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDropShadow.cljs$lang$applyTo = (function (seq58203){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58203));
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
var len__4730__auto___61974 = arguments.length;
var i__4731__auto___61978 = (0);
while(true){
if((i__4731__auto___61978 < len__4730__auto___61974)){
args__4736__auto__.push((arguments[i__4731__auto___61978]));

var G__61979 = (i__4731__auto___61978 + (1));
i__4731__auto___61978 = G__61979;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58224 = conformed_args__50743__auto__;
var map__58224__$1 = (((((!((map__58224 == null))))?(((((map__58224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58224):map__58224);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58224__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.th.cljs$lang$applyTo = (function (seq58218){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58218));
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
var len__4730__auto___61996 = arguments.length;
var i__4731__auto___61997 = (0);
while(true){
if((i__4731__auto___61997 < len__4730__auto___61996)){
args__4736__auto__.push((arguments[i__4731__auto___61997]));

var G__61998 = (i__4731__auto___61997 + (1));
i__4731__auto___61997 = G__61998;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58230 = conformed_args__50743__auto__;
var map__58230__$1 = (((((!((map__58230 == null))))?(((((map__58230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58230):map__58230);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58230__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.time.cljs$lang$applyTo = (function (seq58229){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58229));
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
var len__4730__auto___62002 = arguments.length;
var i__4731__auto___62003 = (0);
while(true){
if((i__4731__auto___62003 < len__4730__auto___62002)){
args__4736__auto__.push((arguments[i__4731__auto___62003]));

var G__62005 = (i__4731__auto___62003 + (1));
i__4731__auto___62003 = G__62005;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58239 = conformed_args__50743__auto__;
var map__58239__$1 = (((((!((map__58239 == null))))?(((((map__58239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58239):map__58239);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58239__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58239__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.optgroup.cljs$lang$applyTo = (function (seq58237){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58237));
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
var len__4730__auto___62018 = arguments.length;
var i__4731__auto___62019 = (0);
while(true){
if((i__4731__auto___62019 < len__4730__auto___62018)){
args__4736__auto__.push((arguments[i__4731__auto___62019]));

var G__62021 = (i__4731__auto___62019 + (1));
i__4731__auto___62019 = G__62021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58243 = conformed_args__50743__auto__;
var map__58243__$1 = (((((!((map__58243 == null))))?(((((map__58243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58243):map__58243);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.iframe.cljs$lang$applyTo = (function (seq58241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58241));
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
var len__4730__auto___62037 = arguments.length;
var i__4731__auto___62038 = (0);
while(true){
if((i__4731__auto___62038 < len__4730__auto___62037)){
args__4736__auto__.push((arguments[i__4731__auto___62038]));

var G__62042 = (i__4731__auto___62038 + (1));
i__4731__auto___62038 = G__62042;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58250 = conformed_args__50743__auto__;
var map__58250__$1 = (((((!((map__58250 == null))))?(((((map__58250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58250):map__58250);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58250__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.color_profile.cljs$lang$applyTo = (function (seq58248){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58248));
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
var len__4730__auto___62066 = arguments.length;
var i__4731__auto___62067 = (0);
while(true){
if((i__4731__auto___62067 < len__4730__auto___62066)){
args__4736__auto__.push((arguments[i__4731__auto___62067]));

var G__62070 = (i__4731__auto___62067 + (1));
i__4731__auto___62067 = G__62070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58271 = conformed_args__50743__auto__;
var map__58271__$1 = (((((!((map__58271 == null))))?(((((map__58271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58271):map__58271);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58271__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.legend.cljs$lang$applyTo = (function (seq58255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58255));
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
var len__4730__auto___62080 = arguments.length;
var i__4731__auto___62081 = (0);
while(true){
if((i__4731__auto___62081 < len__4730__auto___62080)){
args__4736__auto__.push((arguments[i__4731__auto___62081]));

var G__62082 = (i__4731__auto___62081 + (1));
i__4731__auto___62081 = G__62082;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58300 = conformed_args__50743__auto__;
var map__58300__$1 = (((((!((map__58300 == null))))?(((((map__58300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58300):map__58300);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58300__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.em.cljs$lang$applyTo = (function (seq58284){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58284));
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
var len__4730__auto___62101 = arguments.length;
var i__4731__auto___62102 = (0);
while(true){
if((i__4731__auto___62102 < len__4730__auto___62101)){
args__4736__auto__.push((arguments[i__4731__auto___62102]));

var G__62103 = (i__4731__auto___62102 + (1));
i__4731__auto___62102 = G__62103;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58309 = conformed_args__50743__auto__;
var map__58309__$1 = (((((!((map__58309 == null))))?(((((map__58309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58309):map__58309);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58309__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.kbd.cljs$lang$applyTo = (function (seq58304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58304));
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
var len__4730__auto___62118 = arguments.length;
var i__4731__auto___62119 = (0);
while(true){
if((i__4731__auto___62119 < len__4730__auto___62118)){
args__4736__auto__.push((arguments[i__4731__auto___62119]));

var G__62120 = (i__4731__auto___62119 + (1));
i__4731__auto___62119 = G__62120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58315 = conformed_args__50743__auto__;
var map__58315__$1 = (((((!((map__58315 == null))))?(((((map__58315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58315):map__58315);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58315__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.article.cljs$lang$applyTo = (function (seq58312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58312));
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
var len__4730__auto___62128 = arguments.length;
var i__4731__auto___62129 = (0);
while(true){
if((i__4731__auto___62129 < len__4730__auto___62128)){
args__4736__auto__.push((arguments[i__4731__auto___62129]));

var G__62130 = (i__4731__auto___62129 + (1));
i__4731__auto___62129 = G__62130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58327 = conformed_args__50743__auto__;
var map__58327__$1 = (((((!((map__58327 == null))))?(((((map__58327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58327):map__58327);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateColor.cljs$lang$applyTo = (function (seq58323){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58323));
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
var len__4730__auto___62139 = arguments.length;
var i__4731__auto___62140 = (0);
while(true){
if((i__4731__auto___62140 < len__4730__auto___62139)){
args__4736__auto__.push((arguments[i__4731__auto___62140]));

var G__62142 = (i__4731__auto___62140 + (1));
i__4731__auto___62140 = G__62142;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58335 = conformed_args__50743__auto__;
var map__58335__$1 = (((((!((map__58335 == null))))?(((((map__58335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58335):map__58335);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58335__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.clipPath.cljs$lang$applyTo = (function (seq58329){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58329));
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
var len__4730__auto___62190 = arguments.length;
var i__4731__auto___62191 = (0);
while(true){
if((i__4731__auto___62191 < len__4730__auto___62190)){
args__4736__auto__.push((arguments[i__4731__auto___62191]));

var G__62192 = (i__4731__auto___62191 + (1));
i__4731__auto___62191 = G__62192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58347 = conformed_args__50743__auto__;
var map__58347__$1 = (((((!((map__58347 == null))))?(((((map__58347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58347):map__58347);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58347__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.abbr.cljs$lang$applyTo = (function (seq58340){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58340));
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
var len__4730__auto___62202 = arguments.length;
var i__4731__auto___62203 = (0);
while(true){
if((i__4731__auto___62203 < len__4730__auto___62202)){
args__4736__auto__.push((arguments[i__4731__auto___62203]));

var G__62204 = (i__4731__auto___62203 + (1));
i__4731__auto___62203 = G__62204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58355 = conformed_args__50743__auto__;
var map__58355__$1 = (((((!((map__58355 == null))))?(((((map__58355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58355):map__58355);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58355__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphDef.cljs$lang$applyTo = (function (seq58354){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58354));
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
var len__4730__auto___62218 = arguments.length;
var i__4731__auto___62219 = (0);
while(true){
if((i__4731__auto___62219 < len__4730__auto___62218)){
args__4736__auto__.push((arguments[i__4731__auto___62219]));

var G__62220 = (i__4731__auto___62219 + (1));
i__4731__auto___62219 = G__62220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58364 = conformed_args__50743__auto__;
var map__58364__$1 = (((((!((map__58364 == null))))?(((((map__58364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58364):map__58364);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshrow.cljs$lang$applyTo = (function (seq58361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58361));
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
var len__4730__auto___62242 = arguments.length;
var i__4731__auto___62243 = (0);
while(true){
if((i__4731__auto___62243 < len__4730__auto___62242)){
args__4736__auto__.push((arguments[i__4731__auto___62243]));

var G__62244 = (i__4731__auto___62243 + (1));
i__4731__auto___62243 = G__62244;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58380 = conformed_args__50743__auto__;
var map__58380__$1 = (((((!((map__58380 == null))))?(((((map__58380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58380):map__58380);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58380__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58380__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58380__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cursor.cljs$lang$applyTo = (function (seq58370){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58370));
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
var len__4730__auto___62253 = arguments.length;
var i__4731__auto___62254 = (0);
while(true){
if((i__4731__auto___62254 < len__4730__auto___62253)){
args__4736__auto__.push((arguments[i__4731__auto___62254]));

var G__62255 = (i__4731__auto___62254 + (1));
i__4731__auto___62254 = G__62255;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58401 = conformed_args__50743__auto__;
var map__58401__$1 = (((((!((map__58401 == null))))?(((((map__58401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58401):map__58401);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58401__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58401__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58401__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animate.cljs$lang$applyTo = (function (seq58394){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58394));
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
var len__4730__auto___62265 = arguments.length;
var i__4731__auto___62266 = (0);
while(true){
if((i__4731__auto___62266 < len__4730__auto___62265)){
args__4736__auto__.push((arguments[i__4731__auto___62266]));

var G__62267 = (i__4731__auto___62266 + (1));
i__4731__auto___62266 = G__62267;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58425 = conformed_args__50743__auto__;
var map__58425__$1 = (((((!((map__58425 == null))))?(((((map__58425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58425):map__58425);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58425__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.source.cljs$lang$applyTo = (function (seq58416){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58416));
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
var len__4730__auto___62289 = arguments.length;
var i__4731__auto___62290 = (0);
while(true){
if((i__4731__auto___62290 < len__4730__auto___62289)){
args__4736__auto__.push((arguments[i__4731__auto___62290]));

var G__62291 = (i__4731__auto___62290 + (1));
i__4731__auto___62290 = G__62291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58452 = conformed_args__50743__auto__;
var map__58452__$1 = (((((!((map__58452 == null))))?(((((map__58452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58452):map__58452);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58452__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.output.cljs$lang$applyTo = (function (seq58440){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58440));
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
var len__4730__auto___62306 = arguments.length;
var i__4731__auto___62307 = (0);
while(true){
if((i__4731__auto___62307 < len__4730__auto___62306)){
args__4736__auto__.push((arguments[i__4731__auto___62307]));

var G__62311 = (i__4731__auto___62307 + (1));
i__4731__auto___62307 = G__62311;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58469 = conformed_args__50743__auto__;
var map__58469__$1 = (((((!((map__58469 == null))))?(((((map__58469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58469):map__58469);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58469__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face.cljs$lang$applyTo = (function (seq58459){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58459));
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
var len__4730__auto___62328 = arguments.length;
var i__4731__auto___62329 = (0);
while(true){
if((i__4731__auto___62329 < len__4730__auto___62328)){
args__4736__auto__.push((arguments[i__4731__auto___62329]));

var G__62330 = (i__4731__auto___62329 + (1));
i__4731__auto___62329 = G__62330;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58486 = conformed_args__50743__auto__;
var map__58486__$1 = (((((!((map__58486 == null))))?(((((map__58486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58486):map__58486);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMergeNode.cljs$lang$applyTo = (function (seq58480){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58480));
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
var len__4730__auto___62334 = arguments.length;
var i__4731__auto___62335 = (0);
while(true){
if((i__4731__auto___62335 < len__4730__auto___62334)){
args__4736__auto__.push((arguments[i__4731__auto___62335]));

var G__62336 = (i__4731__auto___62335 + (1));
i__4731__auto___62335 = G__62336;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58506 = conformed_args__50743__auto__;
var map__58506__$1 = (((((!((map__58506 == null))))?(((((map__58506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58506):map__58506);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpotLight.cljs$lang$applyTo = (function (seq58504){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58504));
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
var len__4730__auto___62360 = arguments.length;
var i__4731__auto___62361 = (0);
while(true){
if((i__4731__auto___62361 < len__4730__auto___62360)){
args__4736__auto__.push((arguments[i__4731__auto___62361]));

var G__62362 = (i__4731__auto___62361 + (1));
i__4731__auto___62361 = G__62362;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58514 = conformed_args__50743__auto__;
var map__58514__$1 = (((((!((map__58514 == null))))?(((((map__58514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58514):map__58514);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58514__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58514__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58514__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.header.cljs$lang$applyTo = (function (seq58513){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58513));
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
var len__4730__auto___62365 = arguments.length;
var i__4731__auto___62366 = (0);
while(true){
if((i__4731__auto___62366 < len__4730__auto___62365)){
args__4736__auto__.push((arguments[i__4731__auto___62366]));

var G__62367 = (i__4731__auto___62366 + (1));
i__4731__auto___62366 = G__62367;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58529 = conformed_args__50743__auto__;
var map__58529__$1 = (((((!((map__58529 == null))))?(((((map__58529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58529):map__58529);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58529__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.datalist.cljs$lang$applyTo = (function (seq58524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58524));
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
var len__4730__auto___62389 = arguments.length;
var i__4731__auto___62390 = (0);
while(true){
if((i__4731__auto___62390 < len__4730__auto___62389)){
args__4736__auto__.push((arguments[i__4731__auto___62390]));

var G__62391 = (i__4731__auto___62390 + (1));
i__4731__auto___62390 = G__62391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58551 = conformed_args__50743__auto__;
var map__58551__$1 = (((((!((map__58551 == null))))?(((((map__58551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58551):map__58551);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tfoot.cljs$lang$applyTo = (function (seq58541){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58541));
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
var len__4730__auto___62445 = arguments.length;
var i__4731__auto___62448 = (0);
while(true){
if((i__4731__auto___62448 < len__4730__auto___62445)){
args__4736__auto__.push((arguments[i__4731__auto___62448]));

var G__62453 = (i__4731__auto___62448 + (1));
i__4731__auto___62448 = G__62453;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58579 = conformed_args__50743__auto__;
var map__58579__$1 = (((((!((map__58579 == null))))?(((((map__58579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58579):map__58579);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58579__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.s.cljs$lang$applyTo = (function (seq58561){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58561));
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
var len__4730__auto___62527 = arguments.length;
var i__4731__auto___62529 = (0);
while(true){
if((i__4731__auto___62529 < len__4730__auto___62527)){
args__4736__auto__.push((arguments[i__4731__auto___62529]));

var G__62535 = (i__4731__auto___62529 + (1));
i__4731__auto___62529 = G__62535;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58603 = conformed_args__50743__auto__;
var map__58603__$1 = (((((!((map__58603 == null))))?(((((map__58603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58603):map__58603);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58603__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatch.cljs$lang$applyTo = (function (seq58594){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58594));
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
var len__4730__auto___62571 = arguments.length;
var i__4731__auto___62572 = (0);
while(true){
if((i__4731__auto___62572 < len__4730__auto___62571)){
args__4736__auto__.push((arguments[i__4731__auto___62572]));

var G__62573 = (i__4731__auto___62572 + (1));
i__4731__auto___62572 = G__62573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58625 = conformed_args__50743__auto__;
var map__58625__$1 = (((((!((map__58625 == null))))?(((((map__58625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58625):map__58625);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58625__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ins.cljs$lang$applyTo = (function (seq58615){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58615));
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
var len__4730__auto___62619 = arguments.length;
var i__4731__auto___62625 = (0);
while(true){
if((i__4731__auto___62625 < len__4730__auto___62619)){
args__4736__auto__.push((arguments[i__4731__auto___62625]));

var G__62628 = (i__4731__auto___62625 + (1));
i__4731__auto___62625 = G__62628;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58638 = conformed_args__50743__auto__;
var map__58638__$1 = (((((!((map__58638 == null))))?(((((map__58638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58638):map__58638);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58638__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.footer.cljs$lang$applyTo = (function (seq58636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58636));
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
var len__4730__auto___62760 = arguments.length;
var i__4731__auto___62762 = (0);
while(true){
if((i__4731__auto___62762 < len__4730__auto___62760)){
args__4736__auto__.push((arguments[i__4731__auto___62762]));

var G__62765 = (i__4731__auto___62762 + (1));
i__4731__auto___62762 = G__62765;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58645 = conformed_args__50743__auto__;
var map__58645__$1 = (((((!((map__58645 == null))))?(((((map__58645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58645):map__58645);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58645__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mpath.cljs$lang$applyTo = (function (seq58643){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58643));
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
var len__4730__auto___62813 = arguments.length;
var i__4731__auto___62816 = (0);
while(true){
if((i__4731__auto___62816 < len__4730__auto___62813)){
args__4736__auto__.push((arguments[i__4731__auto___62816]));

var G__62822 = (i__4731__auto___62816 + (1));
i__4731__auto___62816 = G__62822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58656 = conformed_args__50743__auto__;
var map__58656__$1 = (((((!((map__58656 == null))))?(((((map__58656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58656):map__58656);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58656__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.title.cljs$lang$applyTo = (function (seq58650){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58650));
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
var len__4730__auto___62899 = arguments.length;
var i__4731__auto___62904 = (0);
while(true){
if((i__4731__auto___62904 < len__4730__auto___62899)){
args__4736__auto__.push((arguments[i__4731__auto___62904]));

var G__62906 = (i__4731__auto___62904 + (1));
i__4731__auto___62904 = G__62906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58666 = conformed_args__50743__auto__;
var map__58666__$1 = (((((!((map__58666 == null))))?(((((map__58666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58666):map__58666);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58666__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h5.cljs$lang$applyTo = (function (seq58659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58659));
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
var len__4730__auto___62913 = arguments.length;
var i__4731__auto___62914 = (0);
while(true){
if((i__4731__auto___62914 < len__4730__auto___62913)){
args__4736__auto__.push((arguments[i__4731__auto___62914]));

var G__62915 = (i__4731__auto___62914 + (1));
i__4731__auto___62914 = G__62915;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58677 = conformed_args__50743__auto__;
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshgradient.cljs$lang$applyTo = (function (seq58673){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58673));
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
var len__4730__auto___62928 = arguments.length;
var i__4731__auto___62930 = (0);
while(true){
if((i__4731__auto___62930 < len__4730__auto___62928)){
args__4736__auto__.push((arguments[i__4731__auto___62930]));

var G__62932 = (i__4731__auto___62930 + (1));
i__4731__auto___62930 = G__62932;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58696 = conformed_args__50743__auto__;
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.canvas.cljs$lang$applyTo = (function (seq58684){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58684));
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
var len__4730__auto___62943 = arguments.length;
var i__4731__auto___62944 = (0);
while(true){
if((i__4731__auto___62944 < len__4730__auto___62943)){
args__4736__auto__.push((arguments[i__4731__auto___62944]));

var G__62946 = (i__4731__auto___62944 + (1));
i__4731__auto___62944 = G__62946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58720 = conformed_args__50743__auto__;
var map__58720__$1 = (((((!((map__58720 == null))))?(((((map__58720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58720):map__58720);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58720__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.param.cljs$lang$applyTo = (function (seq58718){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58718));
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
var len__4730__auto___62957 = arguments.length;
var i__4731__auto___62958 = (0);
while(true){
if((i__4731__auto___62958 < len__4730__auto___62957)){
args__4736__auto__.push((arguments[i__4731__auto___62958]));

var G__62959 = (i__4731__auto___62958 + (1));
i__4731__auto___62958 = G__62959;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58735 = conformed_args__50743__auto__;
var map__58735__$1 = (((((!((map__58735 == null))))?(((((map__58735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58735):map__58735);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font.cljs$lang$applyTo = (function (seq58725){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58725));
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
var len__4730__auto___62975 = arguments.length;
var i__4731__auto___62977 = (0);
while(true){
if((i__4731__auto___62977 < len__4730__auto___62975)){
args__4736__auto__.push((arguments[i__4731__auto___62977]));

var G__62978 = (i__4731__auto___62977 + (1));
i__4731__auto___62977 = G__62978;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58746 = conformed_args__50743__auto__;
var map__58746__$1 = (((((!((map__58746 == null))))?(((((map__58746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58746):map__58746);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58746__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.div.cljs$lang$applyTo = (function (seq58739){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58739));
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
var len__4730__auto___62990 = arguments.length;
var i__4731__auto___62991 = (0);
while(true){
if((i__4731__auto___62991 < len__4730__auto___62990)){
args__4736__auto__.push((arguments[i__4731__auto___62991]));

var G__62993 = (i__4731__auto___62991 + (1));
i__4731__auto___62991 = G__62993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58757 = conformed_args__50743__auto__;
var map__58757__$1 = (((((!((map__58757 == null))))?(((((map__58757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58757):map__58757);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.option.cljs$lang$applyTo = (function (seq58749){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58749));
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
var len__4730__auto___63002 = arguments.length;
var i__4731__auto___63004 = (0);
while(true){
if((i__4731__auto___63004 < len__4730__auto___63002)){
args__4736__auto__.push((arguments[i__4731__auto___63004]));

var G__63005 = (i__4731__auto___63004 + (1));
i__4731__auto___63004 = G__63005;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58765 = conformed_args__50743__auto__;
var map__58765__$1 = (((((!((map__58765 == null))))?(((((map__58765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58765):map__58765);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58765__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58765__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58765__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFlood.cljs$lang$applyTo = (function (seq58762){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58762));
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
var len__4730__auto___63021 = arguments.length;
var i__4731__auto___63023 = (0);
while(true){
if((i__4731__auto___63023 < len__4730__auto___63021)){
args__4736__auto__.push((arguments[i__4731__auto___63023]));

var G__63028 = (i__4731__auto___63023 + (1));
i__4731__auto___63023 = G__63028;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58776 = conformed_args__50743__auto__;
var map__58776__$1 = (((((!((map__58776 == null))))?(((((map__58776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58776):map__58776);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.summary.cljs$lang$applyTo = (function (seq58771){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58771));
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
var len__4730__auto___63037 = arguments.length;
var i__4731__auto___63038 = (0);
while(true){
if((i__4731__auto___63038 < len__4730__auto___63037)){
args__4736__auto__.push((arguments[i__4731__auto___63038]));

var G__63039 = (i__4731__auto___63038 + (1));
i__4731__auto___63038 = G__63039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58799 = conformed_args__50743__auto__;
var map__58799__$1 = (((((!((map__58799 == null))))?(((((map__58799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58799):map__58799);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58799__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58799__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58799__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMorphology.cljs$lang$applyTo = (function (seq58790){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58790));
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
var len__4730__auto___63050 = arguments.length;
var i__4731__auto___63051 = (0);
while(true){
if((i__4731__auto___63051 < len__4730__auto___63050)){
args__4736__auto__.push((arguments[i__4731__auto___63051]));

var G__63054 = (i__4731__auto___63051 + (1));
i__4731__auto___63051 = G__63054;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58810 = conformed_args__50743__auto__;
var map__58810__$1 = (((((!((map__58810 == null))))?(((((map__58810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58810):map__58810);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58810__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.samp.cljs$lang$applyTo = (function (seq58808){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58808));
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
var len__4730__auto___63068 = arguments.length;
var i__4731__auto___63069 = (0);
while(true){
if((i__4731__auto___63069 < len__4730__auto___63068)){
args__4736__auto__.push((arguments[i__4731__auto___63069]));

var G__63073 = (i__4731__auto___63069 + (1));
i__4731__auto___63069 = G__63073;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58823 = conformed_args__50743__auto__;
var map__58823__$1 = (((((!((map__58823 == null))))?(((((map__58823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58823):map__58823);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58823__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58823__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58823__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyphRef.cljs$lang$applyTo = (function (seq58815){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58815));
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
var len__4730__auto___63089 = arguments.length;
var i__4731__auto___63096 = (0);
while(true){
if((i__4731__auto___63096 < len__4730__auto___63089)){
args__4736__auto__.push((arguments[i__4731__auto___63096]));

var G__63098 = (i__4731__auto___63096 + (1));
i__4731__auto___63096 = G__63098;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58829 = conformed_args__50743__auto__;
var map__58829__$1 = (((((!((map__58829 == null))))?(((((map__58829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58829):map__58829);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58829__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.small.cljs$lang$applyTo = (function (seq58828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58828));
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
var len__4730__auto___63107 = arguments.length;
var i__4731__auto___63108 = (0);
while(true){
if((i__4731__auto___63108 < len__4730__auto___63107)){
args__4736__auto__.push((arguments[i__4731__auto___63108]));

var G__63109 = (i__4731__auto___63108 + (1));
i__4731__auto___63108 = G__63109;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58840 = conformed_args__50743__auto__;
var map__58840__$1 = (((((!((map__58840 == null))))?(((((map__58840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58840):map__58840);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58840__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58840__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58840__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.style.cljs$lang$applyTo = (function (seq58834){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58834));
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
var len__4730__auto___63118 = arguments.length;
var i__4731__auto___63119 = (0);
while(true){
if((i__4731__auto___63119 < len__4730__auto___63118)){
args__4736__auto__.push((arguments[i__4731__auto___63119]));

var G__63121 = (i__4731__auto___63119 + (1));
i__4731__auto___63119 = G__63121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58851 = conformed_args__50743__auto__;
var map__58851__$1 = (((((!((map__58851 == null))))?(((((map__58851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58851):map__58851);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58851__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textarea.cljs$lang$applyTo = (function (seq58850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58850));
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
var len__4730__auto___63129 = arguments.length;
var i__4731__auto___63130 = (0);
while(true){
if((i__4731__auto___63130 < len__4730__auto___63129)){
args__4736__auto__.push((arguments[i__4731__auto___63130]));

var G__63132 = (i__4731__auto___63130 + (1));
i__4731__auto___63130 = G__63132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58865 = conformed_args__50743__auto__;
var map__58865__$1 = (((((!((map__58865 == null))))?(((((map__58865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58865):map__58865);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58865__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feGaussianBlur.cljs$lang$applyTo = (function (seq58855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58855));
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
var len__4730__auto___63145 = arguments.length;
var i__4731__auto___63146 = (0);
while(true){
if((i__4731__auto___63146 < len__4730__auto___63145)){
args__4736__auto__.push((arguments[i__4731__auto___63146]));

var G__63147 = (i__4731__auto___63146 + (1));
i__4731__auto___63146 = G__63147;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58888 = conformed_args__50743__auto__;
var map__58888__$1 = (((((!((map__58888 == null))))?(((((map__58888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58888):map__58888);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58888__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58888__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58888__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h4.cljs$lang$applyTo = (function (seq58880){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58880));
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
var len__4730__auto___63154 = arguments.length;
var i__4731__auto___63155 = (0);
while(true){
if((i__4731__auto___63155 < len__4730__auto___63154)){
args__4736__auto__.push((arguments[i__4731__auto___63155]));

var G__63156 = (i__4731__auto___63155 + (1));
i__4731__auto___63155 = G__63156;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58916 = conformed_args__50743__auto__;
var map__58916__$1 = (((((!((map__58916 == null))))?(((((map__58916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58916):map__58916);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58916__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.head.cljs$lang$applyTo = (function (seq58895){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58895));
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
var len__4730__auto___63165 = arguments.length;
var i__4731__auto___63166 = (0);
while(true){
if((i__4731__auto___63166 < len__4730__auto___63165)){
args__4736__auto__.push((arguments[i__4731__auto___63166]));

var G__63172 = (i__4731__auto___63166 + (1));
i__4731__auto___63166 = G__63172;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58947 = conformed_args__50743__auto__;
var map__58947__$1 = (((((!((map__58947 == null))))?(((((map__58947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58947):map__58947);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58947__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58947__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58947__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.g.cljs$lang$applyTo = (function (seq58937){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58937));
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
var len__4730__auto___63190 = arguments.length;
var i__4731__auto___63191 = (0);
while(true){
if((i__4731__auto___63191 < len__4730__auto___63190)){
args__4736__auto__.push((arguments[i__4731__auto___63191]));

var G__63193 = (i__4731__auto___63191 + (1));
i__4731__auto___63191 = G__63193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58970 = conformed_args__50743__auto__;
var map__58970__$1 = (((((!((map__58970 == null))))?(((((map__58970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58970):map__58970);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58970__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.missing_glyph.cljs$lang$applyTo = (function (seq58963){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58963));
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
var len__4730__auto___63215 = arguments.length;
var i__4731__auto___63216 = (0);
while(true){
if((i__4731__auto___63216 < len__4730__auto___63215)){
args__4736__auto__.push((arguments[i__4731__auto___63216]));

var G__63217 = (i__4731__auto___63216 + (1));
i__4731__auto___63216 = G__63217;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58991 = conformed_args__50743__auto__;
var map__58991__$1 = (((((!((map__58991 == null))))?(((((map__58991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58991):map__58991);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58991__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58991__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.stop.cljs$lang$applyTo = (function (seq58982){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58982));
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
var len__4730__auto___63232 = arguments.length;
var i__4731__auto___63235 = (0);
while(true){
if((i__4731__auto___63235 < len__4730__auto___63232)){
args__4736__auto__.push((arguments[i__4731__auto___63235]));

var G__63238 = (i__4731__auto___63235 + (1));
i__4731__auto___63235 = G__63238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59009 = conformed_args__50743__auto__;
var map__59009__$1 = (((((!((map__59009 == null))))?(((((map__59009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59009):map__59009);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59009__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq59000){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59000));
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
var len__4730__auto___63246 = arguments.length;
var i__4731__auto___63247 = (0);
while(true){
if((i__4731__auto___63247 < len__4730__auto___63246)){
args__4736__auto__.push((arguments[i__4731__auto___63247]));

var G__63248 = (i__4731__auto___63247 + (1));
i__4731__auto___63247 = G__63248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59036 = conformed_args__50743__auto__;
var map__59036__$1 = (((((!((map__59036 == null))))?(((((map__59036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59036):map__59036);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59036__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59036__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59036__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.filter.cljs$lang$applyTo = (function (seq59022){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59022));
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
var len__4730__auto___63259 = arguments.length;
var i__4731__auto___63261 = (0);
while(true){
if((i__4731__auto___63261 < len__4730__auto___63259)){
args__4736__auto__.push((arguments[i__4731__auto___63261]));

var G__63262 = (i__4731__auto___63261 + (1));
i__4731__auto___63261 = G__63262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59053 = conformed_args__50743__auto__;
var map__59053__$1 = (((((!((map__59053 == null))))?(((((map__59053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59053):map__59053);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComposite.cljs$lang$applyTo = (function (seq59051){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59051));
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
var len__4730__auto___63287 = arguments.length;
var i__4731__auto___63288 = (0);
while(true){
if((i__4731__auto___63288 < len__4730__auto___63287)){
args__4736__auto__.push((arguments[i__4731__auto___63288]));

var G__63289 = (i__4731__auto___63288 + (1));
i__4731__auto___63288 = G__63289;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59067 = conformed_args__50743__auto__;
var map__59067__$1 = (((((!((map__59067 == null))))?(((((map__59067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59067):map__59067);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59067__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mesh.cljs$lang$applyTo = (function (seq59065){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59065));
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
var len__4730__auto___63321 = arguments.length;
var i__4731__auto___63322 = (0);
while(true){
if((i__4731__auto___63322 < len__4730__auto___63321)){
args__4736__auto__.push((arguments[i__4731__auto___63322]));

var G__63324 = (i__4731__auto___63322 + (1));
i__4731__auto___63322 = G__63324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59081 = conformed_args__50743__auto__;
var map__59081__$1 = (((((!((map__59081 == null))))?(((((map__59081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59081):map__59081);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59081__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.var$.cljs$lang$applyTo = (function (seq59076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59076));
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
var len__4730__auto___63352 = arguments.length;
var i__4731__auto___63353 = (0);
while(true){
if((i__4731__auto___63353 < len__4730__auto___63352)){
args__4736__auto__.push((arguments[i__4731__auto___63353]));

var G__63354 = (i__4731__auto___63353 + (1));
i__4731__auto___63353 = G__63354;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59095 = conformed_args__50743__auto__;
var map__59095__$1 = (((((!((map__59095 == null))))?(((((map__59095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59095):map__59095);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tspan.cljs$lang$applyTo = (function (seq59091){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59091));
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
var len__4730__auto___63369 = arguments.length;
var i__4731__auto___63370 = (0);
while(true){
if((i__4731__auto___63370 < len__4730__auto___63369)){
args__4736__auto__.push((arguments[i__4731__auto___63370]));

var G__63371 = (i__4731__auto___63370 + (1));
i__4731__auto___63370 = G__63371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59105 = conformed_args__50743__auto__;
var map__59105__$1 = (((((!((map__59105 == null))))?(((((map__59105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59105):map__59105);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59105__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ol.cljs$lang$applyTo = (function (seq59101){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59101));
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
var len__4730__auto___63378 = arguments.length;
var i__4731__auto___63379 = (0);
while(true){
if((i__4731__auto___63379 < len__4730__auto___63378)){
args__4736__auto__.push((arguments[i__4731__auto___63379]));

var G__63381 = (i__4731__auto___63379 + (1));
i__4731__auto___63379 = G__63381;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59114 = conformed_args__50743__auto__;
var map__59114__$1 = (((((!((map__59114 == null))))?(((((map__59114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59114):map__59114);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.details.cljs$lang$applyTo = (function (seq59109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59109));
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
var len__4730__auto___63401 = arguments.length;
var i__4731__auto___63402 = (0);
while(true){
if((i__4731__auto___63402 < len__4730__auto___63401)){
args__4736__auto__.push((arguments[i__4731__auto___63402]));

var G__63407 = (i__4731__auto___63402 + (1));
i__4731__auto___63402 = G__63407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59129 = conformed_args__50743__auto__;
var map__59129__$1 = (((((!((map__59129 == null))))?(((((map__59129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59129):map__59129);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59129__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.line.cljs$lang$applyTo = (function (seq59126){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59126));
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
var len__4730__auto___63426 = arguments.length;
var i__4731__auto___63427 = (0);
while(true){
if((i__4731__auto___63427 < len__4730__auto___63426)){
args__4736__auto__.push((arguments[i__4731__auto___63427]));

var G__63429 = (i__4731__auto___63427 + (1));
i__4731__auto___63427 = G__63429;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59145 = conformed_args__50743__auto__;
var map__59145__$1 = (((((!((map__59145 == null))))?(((((map__59145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59145):map__59145);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59145__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59145__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59145__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.col.cljs$lang$applyTo = (function (seq59138){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59138));
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
var len__4730__auto___63467 = arguments.length;
var i__4731__auto___63468 = (0);
while(true){
if((i__4731__auto___63468 < len__4730__auto___63467)){
args__4736__auto__.push((arguments[i__4731__auto___63468]));

var G__63473 = (i__4731__auto___63468 + (1));
i__4731__auto___63468 = G__63473;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59171 = conformed_args__50743__auto__;
var map__59171__$1 = (((((!((map__59171 == null))))?(((((map__59171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59171):map__59171);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59171__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.label.cljs$lang$applyTo = (function (seq59151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59151));
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
var len__4730__auto___63499 = arguments.length;
var i__4731__auto___63503 = (0);
while(true){
if((i__4731__auto___63503 < len__4730__auto___63499)){
args__4736__auto__.push((arguments[i__4731__auto___63503]));

var G__63509 = (i__4731__auto___63503 + (1));
i__4731__auto___63503 = G__63509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59191 = conformed_args__50743__auto__;
var map__59191__$1 = (((((!((map__59191 == null))))?(((((map__59191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59191):map__59191);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59191__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59191__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59191__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.picture.cljs$lang$applyTo = (function (seq59181){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59181));
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
var len__4730__auto___63523 = arguments.length;
var i__4731__auto___63524 = (0);
while(true){
if((i__4731__auto___63524 < len__4730__auto___63523)){
args__4736__auto__.push((arguments[i__4731__auto___63524]));

var G__63525 = (i__4731__auto___63524 + (1));
i__4731__auto___63524 = G__63525;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59203 = conformed_args__50743__auto__;
var map__59203__$1 = (((((!((map__59203 == null))))?(((((map__59203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59203):map__59203);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59203__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59203__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59203__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rt.cljs$lang$applyTo = (function (seq59201){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59201));
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
var len__4730__auto___63545 = arguments.length;
var i__4731__auto___63546 = (0);
while(true){
if((i__4731__auto___63546 < len__4730__auto___63545)){
args__4736__auto__.push((arguments[i__4731__auto___63546]));

var G__63547 = (i__4731__auto___63546 + (1));
i__4731__auto___63546 = G__63547;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59216 = conformed_args__50743__auto__;
var map__59216__$1 = (((((!((map__59216 == null))))?(((((map__59216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59216):map__59216);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59216__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h6.cljs$lang$applyTo = (function (seq59210){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59210));
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
var len__4730__auto___63563 = arguments.length;
var i__4731__auto___63564 = (0);
while(true){
if((i__4731__auto___63564 < len__4730__auto___63563)){
args__4736__auto__.push((arguments[i__4731__auto___63564]));

var G__63566 = (i__4731__auto___63564 + (1));
i__4731__auto___63564 = G__63566;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59244 = conformed_args__50743__auto__;
var map__59244__$1 = (((((!((map__59244 == null))))?(((((map__59244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59244):map__59244);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.vkern.cljs$lang$applyTo = (function (seq59241){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59241));
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
var len__4730__auto___63573 = arguments.length;
var i__4731__auto___63574 = (0);
while(true){
if((i__4731__auto___63574 < len__4730__auto___63573)){
args__4736__auto__.push((arguments[i__4731__auto___63574]));

var G__63575 = (i__4731__auto___63574 + (1));
i__4731__auto___63574 = G__63575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59261 = conformed_args__50743__auto__;
var map__59261__$1 = (((((!((map__59261 == null))))?(((((map__59261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59261):map__59261);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.link.cljs$lang$applyTo = (function (seq59255){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59255));
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
var len__4730__auto___63581 = arguments.length;
var i__4731__auto___63582 = (0);
while(true){
if((i__4731__auto___63582 < len__4730__auto___63581)){
args__4736__auto__.push((arguments[i__4731__auto___63582]));

var G__63584 = (i__4731__auto___63582 + (1));
i__4731__auto___63582 = G__63584;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59283 = conformed_args__50743__auto__;
var map__59283__$1 = (((((!((map__59283 == null))))?(((((map__59283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59283):map__59283);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59283__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.defs.cljs$lang$applyTo = (function (seq59269){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59269));
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
var len__4730__auto___63599 = arguments.length;
var i__4731__auto___63600 = (0);
while(true){
if((i__4731__auto___63600 < len__4730__auto___63599)){
args__4736__auto__.push((arguments[i__4731__auto___63600]));

var G__63601 = (i__4731__auto___63600 + (1));
i__4731__auto___63600 = G__63601;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59318 = conformed_args__50743__auto__;
var map__59318__$1 = (((((!((map__59318 == null))))?(((((map__59318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59318):map__59318);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59318__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyph.cljs$lang$applyTo = (function (seq59309){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59309));
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
var len__4730__auto___63624 = arguments.length;
var i__4731__auto___63625 = (0);
while(true){
if((i__4731__auto___63625 < len__4730__auto___63624)){
args__4736__auto__.push((arguments[i__4731__auto___63625]));

var G__63628 = (i__4731__auto___63625 + (1));
i__4731__auto___63625 = G__63628;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59346 = conformed_args__50743__auto__;
var map__59346__$1 = (((((!((map__59346 == null))))?(((((map__59346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59346):map__59346);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59346__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59346__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59346__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.colgroup.cljs$lang$applyTo = (function (seq59326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59326));
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
var len__4730__auto___63639 = arguments.length;
var i__4731__auto___63640 = (0);
while(true){
if((i__4731__auto___63640 < len__4730__auto___63639)){
args__4736__auto__.push((arguments[i__4731__auto___63640]));

var G__63643 = (i__4731__auto___63640 + (1));
i__4731__auto___63640 = G__63643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59352 = conformed_args__50743__auto__;
var map__59352__$1 = (((((!((map__59352 == null))))?(((((map__59352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59352):map__59352);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59352__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59352__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59352__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meter.cljs$lang$applyTo = (function (seq59351){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59351));
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
var len__4730__auto___63652 = arguments.length;
var i__4731__auto___63653 = (0);
while(true){
if((i__4731__auto___63653 < len__4730__auto___63652)){
args__4736__auto__.push((arguments[i__4731__auto___63653]));

var G__63656 = (i__4731__auto___63653 + (1));
i__4731__auto___63653 = G__63656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59368 = conformed_args__50743__auto__;
var map__59368__$1 = (((((!((map__59368 == null))))?(((((map__59368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59368):map__59368);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdo.cljs$lang$applyTo = (function (seq59365){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59365));
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
var len__4730__auto___63660 = arguments.length;
var i__4731__auto___63661 = (0);
while(true){
if((i__4731__auto___63661 < len__4730__auto___63660)){
args__4736__auto__.push((arguments[i__4731__auto___63661]));

var G__63665 = (i__4731__auto___63661 + (1));
i__4731__auto___63661 = G__63665;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59400 = conformed_args__50743__auto__;
var map__59400__$1 = (((((!((map__59400 == null))))?(((((map__59400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59400):map__59400);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feImage.cljs$lang$applyTo = (function (seq59386){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59386));
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
var len__4730__auto___63672 = arguments.length;
var i__4731__auto___63673 = (0);
while(true){
if((i__4731__auto___63673 < len__4730__auto___63672)){
args__4736__auto__.push((arguments[i__4731__auto___63673]));

var G__63674 = (i__4731__auto___63673 + (1));
i__4731__auto___63673 = G__63674;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59421 = conformed_args__50743__auto__;
var map__59421__$1 = (((((!((map__59421 == null))))?(((((map__59421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59421):map__59421);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59421__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59421__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59421__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.b.cljs$lang$applyTo = (function (seq59409){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59409));
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
var len__4730__auto___63707 = arguments.length;
var i__4731__auto___63708 = (0);
while(true){
if((i__4731__auto___63708 < len__4730__auto___63707)){
args__4736__auto__.push((arguments[i__4731__auto___63708]));

var G__63709 = (i__4731__auto___63708 + (1));
i__4731__auto___63708 = G__63709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59429 = conformed_args__50743__auto__;
var map__59429__$1 = (((((!((map__59429 == null))))?(((((map__59429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59429):map__59429);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.svg.cljs$lang$applyTo = (function (seq59424){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59424));
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
return fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59441 = conformed_args__50743__auto__;
var map__59441__$1 = (((((!((map__59441 == null))))?(((((map__59441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59441):map__59441);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59441__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTile.cljs$lang$applyTo = (function (seq59436){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59436));
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
var len__4730__auto___63737 = arguments.length;
var i__4731__auto___63738 = (0);
while(true){
if((i__4731__auto___63738 < len__4730__auto___63737)){
args__4736__auto__.push((arguments[i__4731__auto___63738]));

var G__63740 = (i__4731__auto___63738 + (1));
i__4731__auto___63738 = G__63740;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59449 = conformed_args__50743__auto__;
var map__59449__$1 = (((((!((map__59449 == null))))?(((((map__59449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59449):map__59449);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59449__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ellipse.cljs$lang$applyTo = (function (seq59448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59448));
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
var len__4730__auto___63760 = arguments.length;
var i__4731__auto___63762 = (0);
while(true){
if((i__4731__auto___63762 < len__4730__auto___63760)){
args__4736__auto__.push((arguments[i__4731__auto___63762]));

var G__63764 = (i__4731__auto___63762 + (1));
i__4731__auto___63762 = G__63764;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59457 = conformed_args__50743__auto__;
var map__59457__$1 = (((((!((map__59457 == null))))?(((((map__59457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59457):map__59457);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59457__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59457__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59457__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.code.cljs$lang$applyTo = (function (seq59453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59453));
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
var len__4730__auto___63786 = arguments.length;
var i__4731__auto___63787 = (0);
while(true){
if((i__4731__auto___63787 < len__4730__auto___63786)){
args__4736__auto__.push((arguments[i__4731__auto___63787]));

var G__63789 = (i__4731__auto___63787 + (1));
i__4731__auto___63787 = G__63789;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59473 = conformed_args__50743__auto__;
var map__59473__$1 = (((((!((map__59473 == null))))?(((((map__59473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59473):map__59473);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dialog.cljs$lang$applyTo = (function (seq59470){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59470));
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
var len__4730__auto___63809 = arguments.length;
var i__4731__auto___63811 = (0);
while(true){
if((i__4731__auto___63811 < len__4730__auto___63809)){
args__4736__auto__.push((arguments[i__4731__auto___63811]));

var G__63815 = (i__4731__auto___63811 + (1));
i__4731__auto___63811 = G__63815;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59482 = conformed_args__50743__auto__;
var map__59482__$1 = (((((!((map__59482 == null))))?(((((map__59482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59482):map__59482);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59482__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq59478){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59478));
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
var len__4730__auto___63819 = arguments.length;
var i__4731__auto___63820 = (0);
while(true){
if((i__4731__auto___63820 < len__4730__auto___63819)){
args__4736__auto__.push((arguments[i__4731__auto___63820]));

var G__63821 = (i__4731__auto___63820 + (1));
i__4731__auto___63820 = G__63821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59493 = conformed_args__50743__auto__;
var map__59493__$1 = (((((!((map__59493 == null))))?(((((map__59493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59493):map__59493);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.discard.cljs$lang$applyTo = (function (seq59486){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59486));
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
var len__4730__auto___63842 = arguments.length;
var i__4731__auto___63844 = (0);
while(true){
if((i__4731__auto___63844 < len__4730__auto___63842)){
args__4736__auto__.push((arguments[i__4731__auto___63844]));

var G__63845 = (i__4731__auto___63844 + (1));
i__4731__auto___63844 = G__63845;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59499 = conformed_args__50743__auto__;
var map__59499__$1 = (((((!((map__59499 == null))))?(((((map__59499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59499):map__59499);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59499__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59499__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59499__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_src.cljs$lang$applyTo = (function (seq59498){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59498));
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
var len__4730__auto___63857 = arguments.length;
var i__4731__auto___63858 = (0);
while(true){
if((i__4731__auto___63858 < len__4730__auto___63857)){
args__4736__auto__.push((arguments[i__4731__auto___63858]));

var G__63859 = (i__4731__auto___63858 + (1));
i__4731__auto___63858 = G__63859;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59506 = conformed_args__50743__auto__;
var map__59506__$1 = (((((!((map__59506 == null))))?(((((map__59506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59506):map__59506);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59506__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59506__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59506__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.noscript.cljs$lang$applyTo = (function (seq59503){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59503));
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
var len__4730__auto___63869 = arguments.length;
var i__4731__auto___63876 = (0);
while(true){
if((i__4731__auto___63876 < len__4730__auto___63869)){
args__4736__auto__.push((arguments[i__4731__auto___63876]));

var G__63878 = (i__4731__auto___63876 + (1));
i__4731__auto___63876 = G__63878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59510 = conformed_args__50743__auto__;
var map__59510__$1 = (((((!((map__59510 == null))))?(((((map__59510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59510):map__59510);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59510__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateTransform.cljs$lang$applyTo = (function (seq59509){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59509));
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
var len__4730__auto___63888 = arguments.length;
var i__4731__auto___63889 = (0);
while(true){
if((i__4731__auto___63889 < len__4730__auto___63888)){
args__4736__auto__.push((arguments[i__4731__auto___63889]));

var G__63891 = (i__4731__auto___63889 + (1));
i__4731__auto___63889 = G__63891;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59536 = conformed_args__50743__auto__;
var map__59536__$1 = (((((!((map__59536 == null))))?(((((map__59536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59536):map__59536);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59536__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59536__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59536__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feColorMatrix.cljs$lang$applyTo = (function (seq59527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59527));
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
var len__4730__auto___63904 = arguments.length;
var i__4731__auto___63908 = (0);
while(true){
if((i__4731__auto___63908 < len__4730__auto___63904)){
args__4736__auto__.push((arguments[i__4731__auto___63908]));

var G__63910 = (i__4731__auto___63908 + (1));
i__4731__auto___63908 = G__63910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59551 = conformed_args__50743__auto__;
var map__59551__$1 = (((((!((map__59551 == null))))?(((((map__59551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59551):map__59551);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h2.cljs$lang$applyTo = (function (seq59539){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59539));
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
var len__4730__auto___63922 = arguments.length;
var i__4731__auto___63923 = (0);
while(true){
if((i__4731__auto___63923 < len__4730__auto___63922)){
args__4736__auto__.push((arguments[i__4731__auto___63923]));

var G__63925 = (i__4731__auto___63923 + (1));
i__4731__auto___63923 = G__63925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59571 = conformed_args__50743__auto__;
var map__59571__$1 = (((((!((map__59571 == null))))?(((((map__59571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59571):map__59571);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59571__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.area.cljs$lang$applyTo = (function (seq59562){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59562));
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
var len__4730__auto___63944 = arguments.length;
var i__4731__auto___63945 = (0);
while(true){
if((i__4731__auto___63945 < len__4730__auto___63944)){
args__4736__auto__.push((arguments[i__4731__auto___63945]));

var G__63946 = (i__4731__auto___63945 + (1));
i__4731__auto___63945 = G__63946;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59585 = conformed_args__50743__auto__;
var map__59585__$1 = (((((!((map__59585 == null))))?(((((map__59585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59585):map__59585);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59585__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59585__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59585__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.br.cljs$lang$applyTo = (function (seq59582){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59582));
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
var len__4730__auto___63953 = arguments.length;
var i__4731__auto___63954 = (0);
while(true){
if((i__4731__auto___63954 < len__4730__auto___63953)){
args__4736__auto__.push((arguments[i__4731__auto___63954]));

var G__63956 = (i__4731__auto___63954 + (1));
i__4731__auto___63954 = G__63956;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__50743__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59592 = conformed_args__50743__auto__;
var map__59592__$1 = (((((!((map__59592 == null))))?(((((map__59592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59592):map__59592);
var attrs__50744__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var children__50745__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var css__50746__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59592__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__50745__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__50745__auto__);
var attrs_value__50747__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__50744__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__50747__auto__], null),children__50745__auto____$1),css__50746__auto__);
});

fulcro.client.localized_dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.image.cljs$lang$applyTo = (function (seq59590){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59590));
});


//# sourceMappingURL=fulcro.client.localized_dom.js.map
