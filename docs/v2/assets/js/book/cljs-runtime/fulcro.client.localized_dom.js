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
var G__58005 = arguments.length;
switch (G__58005) {
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
var vec__58009 = args;
var seq__58010 = cljs.core.seq(vec__58009);
var first__58011 = cljs.core.first(seq__58010);
var seq__58010__$1 = cljs.core.next(seq__58010);
var head = first__58011;
var tail = seq__58010__$1;
var f = (cljs.core.truth_((fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1 ? fulcro.client.dom.form_elements_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : fulcro.client.dom.form_elements_QMARK_.call(null,type)))?fulcro.client.dom.macro_create_wrapped_form_element:fulcro.client.dom.macro_create_element_STAR_);
if((head == null)){
var G__58030 = (function (){var G__58037 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58037,tail);

return G__58037;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58030) : f.call(null,G__58030));
} else {
if(fulcro.client.dom.element_QMARK_(head)){
var G__58038 = (function (){var G__58039 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58039,args);

return G__58039;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58038) : f.call(null,G__58038));
} else {
if(cljs.core.object_QMARK_(head)){
var G__58041 = (function (){var G__58042 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw)];
arr_append(G__58042,tail);

return G__58042;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58041) : f.call(null,G__58041));
} else {
if(cljs.core.map_QMARK_(head)){
var G__58044 = (function (){var G__58045 = [type,cljs.core.clj__GT_js(fulcro.client.localized_dom_common.add_kwprops_to_props(head,csskw))];
arr_append(G__58045,tail);

return G__58045;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58044) : f.call(null,G__58044));
} else {
var G__58046 = (function (){var G__58047 = [type,fulcro.client.localized_dom_common.add_kwprops_to_props(({}),csskw)];
arr_append(G__58047,args);

return G__58047;
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__58046) : f.call(null,G__58046));

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
var len__4730__auto___61778 = arguments.length;
var i__4731__auto___61779 = (0);
while(true){
if((i__4731__auto___61779 < len__4730__auto___61778)){
args__4736__auto__.push((arguments[i__4731__auto___61779]));

var G__61780 = (i__4731__auto___61779 + (1));
i__4731__auto___61779 = G__61780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58075 = conformed_args__51664__auto__;
var map__58075__$1 = (((((!((map__58075 == null))))?(((((map__58075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58075):map__58075);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("form",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.form.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.form.cljs$lang$applyTo = (function (seq58066){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58066));
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
var len__4730__auto___61788 = arguments.length;
var i__4731__auto___61790 = (0);
while(true){
if((i__4731__auto___61790 < len__4730__auto___61788)){
args__4736__auto__.push((arguments[i__4731__auto___61790]));

var G__61791 = (i__4731__auto___61790 + (1));
i__4731__auto___61790 = G__61791;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58101 = conformed_args__51664__auto__;
var map__58101__$1 = (((((!((map__58101 == null))))?(((((map__58101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58101):map__58101);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("audio",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.audio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.audio.cljs$lang$applyTo = (function (seq58090){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58090));
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
var len__4730__auto___61800 = arguments.length;
var i__4731__auto___61802 = (0);
while(true){
if((i__4731__auto___61802 < len__4730__auto___61800)){
args__4736__auto__.push((arguments[i__4731__auto___61802]));

var G__61803 = (i__4731__auto___61802 + (1));
i__4731__auto___61802 = G__61803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58114 = conformed_args__51664__auto__;
var map__58114__$1 = (((((!((map__58114 == null))))?(((((map__58114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58114):map__58114);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58114__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("input",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.input.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.input.cljs$lang$applyTo = (function (seq58109){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58109));
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
var len__4730__auto___61812 = arguments.length;
var i__4731__auto___61813 = (0);
while(true){
if((i__4731__auto___61813 < len__4730__auto___61812)){
args__4736__auto__.push((arguments[i__4731__auto___61813]));

var G__61814 = (i__4731__auto___61813 + (1));
i__4731__auto___61813 = G__61814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58127 = conformed_args__51664__auto__;
var map__58127__$1 = (((((!((map__58127 == null))))?(((((map__58127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58127):map__58127);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58127__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menuitem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.menuitem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menuitem.cljs$lang$applyTo = (function (seq58119){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58119));
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
var len__4730__auto___61836 = arguments.length;
var i__4731__auto___61837 = (0);
while(true){
if((i__4731__auto___61837 < len__4730__auto___61836)){
args__4736__auto__.push((arguments[i__4731__auto___61837]));

var G__61840 = (i__4731__auto___61837 + (1));
i__4731__auto___61837 = G__61840;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58144 = conformed_args__51664__auto__;
var map__58144__$1 = (((((!((map__58144 == null))))?(((((map__58144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58144):map__58144);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58144__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("radialGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.radialGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.radialGradient.cljs$lang$applyTo = (function (seq58140){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58140));
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
var len__4730__auto___61844 = arguments.length;
var i__4731__auto___61845 = (0);
while(true){
if((i__4731__auto___61845 < len__4730__auto___61844)){
args__4736__auto__.push((arguments[i__4731__auto___61845]));

var G__61846 = (i__4731__auto___61845 + (1));
i__4731__auto___61845 = G__61846;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58159 = conformed_args__51664__auto__;
var map__58159__$1 = (((((!((map__58159 == null))))?(((((map__58159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58159):map__58159);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58159__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMerge",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feMerge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMerge.cljs$lang$applyTo = (function (seq58146){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58146));
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
var len__4730__auto___61857 = arguments.length;
var i__4731__auto___61858 = (0);
while(true){
if((i__4731__auto___61858 < len__4730__auto___61857)){
args__4736__auto__.push((arguments[i__4731__auto___61858]));

var G__61861 = (i__4731__auto___61858 + (1));
i__4731__auto___61858 = G__61861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.set.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58172 = conformed_args__51664__auto__;
var map__58172__$1 = (((((!((map__58172 == null))))?(((((map__58172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58172):map__58172);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58172__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("set",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.set.cljs$lang$applyTo = (function (seq58166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58166));
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
var len__4730__auto___61868 = arguments.length;
var i__4731__auto___61869 = (0);
while(true){
if((i__4731__auto___61869 < len__4730__auto___61868)){
args__4736__auto__.push((arguments[i__4731__auto___61869]));

var G__61871 = (i__4731__auto___61869 + (1));
i__4731__auto___61869 = G__61871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58184 = conformed_args__51664__auto__;
var map__58184__$1 = (((((!((map__58184 == null))))?(((((map__58184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58184):map__58184);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58184__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpecularLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feSpecularLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpecularLighting.cljs$lang$applyTo = (function (seq58180){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58180));
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
var len__4730__auto___61893 = arguments.length;
var i__4731__auto___61894 = (0);
while(true){
if((i__4731__auto___61894 < len__4730__auto___61893)){
args__4736__auto__.push((arguments[i__4731__auto___61894]));

var G__61895 = (i__4731__auto___61894 + (1));
i__4731__auto___61894 = G__61895;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58194 = conformed_args__51664__auto__;
var map__58194__$1 = (((((!((map__58194 == null))))?(((((map__58194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58194):map__58194);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58194__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("base",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.base.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.base.cljs$lang$applyTo = (function (seq58192){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58192));
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
var len__4730__auto___61905 = arguments.length;
var i__4731__auto___61906 = (0);
while(true){
if((i__4731__auto___61906 < len__4730__auto___61905)){
args__4736__auto__.push((arguments[i__4731__auto___61906]));

var G__61909 = (i__4731__auto___61906 + (1));
i__4731__auto___61906 = G__61909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58213 = conformed_args__51664__auto__;
var map__58213__$1 = (((((!((map__58213 == null))))?(((((map__58213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58213):map__58213);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58213__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h1",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.h1.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h1.cljs$lang$applyTo = (function (seq58204){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58204));
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
var len__4730__auto___61914 = arguments.length;
var i__4731__auto___61915 = (0);
while(true){
if((i__4731__auto___61915 < len__4730__auto___61914)){
args__4736__auto__.push((arguments[i__4731__auto___61915]));

var G__61916 = (i__4731__auto___61915 + (1));
i__4731__auto___61915 = G__61916;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58225 = conformed_args__51664__auto__;
var map__58225__$1 = (((((!((map__58225 == null))))?(((((map__58225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58225):map__58225);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feOffset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feOffset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feOffset.cljs$lang$applyTo = (function (seq58221){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58221));
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
var len__4730__auto___61925 = arguments.length;
var i__4731__auto___61926 = (0);
while(true){
if((i__4731__auto___61926 < len__4730__auto___61925)){
args__4736__auto__.push((arguments[i__4731__auto___61926]));

var G__61927 = (i__4731__auto___61926 + (1));
i__4731__auto___61926 = G__61927;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58240 = conformed_args__51664__auto__;
var map__58240__$1 = (((((!((map__58240 == null))))?(((((map__58240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58240):map__58240);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58240__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("embed",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.embed.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.embed.cljs$lang$applyTo = (function (seq58229){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58229));
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
var len__4730__auto___61946 = arguments.length;
var i__4731__auto___61947 = (0);
while(true){
if((i__4731__auto___61947 < len__4730__auto___61946)){
args__4736__auto__.push((arguments[i__4731__auto___61947]));

var G__61948 = (i__4731__auto___61947 + (1));
i__4731__auto___61947 = G__61948;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58261 = conformed_args__51664__auto__;
var map__58261__$1 = (((((!((map__58261 == null))))?(((((map__58261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58261):map__58261);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58261__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateMotion",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.animateMotion.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateMotion.cljs$lang$applyTo = (function (seq58245){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58245));
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
var len__4730__auto___61959 = arguments.length;
var i__4731__auto___61960 = (0);
while(true){
if((i__4731__auto___61960 < len__4730__auto___61959)){
args__4736__auto__.push((arguments[i__4731__auto___61960]));

var G__61964 = (i__4731__auto___61960 + (1));
i__4731__auto___61960 = G__61964;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58290 = conformed_args__51664__auto__;
var map__58290__$1 = (((((!((map__58290 == null))))?(((((map__58290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58290):map__58290);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58290__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h3",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.h3.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h3.cljs$lang$applyTo = (function (seq58278){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58278));
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
var len__4730__auto___61978 = arguments.length;
var i__4731__auto___61980 = (0);
while(true){
if((i__4731__auto___61980 < len__4730__auto___61978)){
args__4736__auto__.push((arguments[i__4731__auto___61980]));

var G__61982 = (i__4731__auto___61980 + (1));
i__4731__auto___61980 = G__61982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58298 = conformed_args__51664__auto__;
var map__58298__$1 = (((((!((map__58298 == null))))?(((((map__58298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58298):map__58298);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58298__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("body",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.body.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.body.cljs$lang$applyTo = (function (seq58296){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58296));
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
var len__4730__auto___61987 = arguments.length;
var i__4731__auto___61988 = (0);
while(true){
if((i__4731__auto___61988 < len__4730__auto___61987)){
args__4736__auto__.push((arguments[i__4731__auto___61988]));

var G__61993 = (i__4731__auto___61988 + (1));
i__4731__auto___61988 = G__61993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58310 = conformed_args__51664__auto__;
var map__58310__$1 = (((((!((map__58310 == null))))?(((((map__58310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58310):map__58310);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58310__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.hkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hkern.cljs$lang$applyTo = (function (seq58304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58304));
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
var len__4730__auto___62002 = arguments.length;
var i__4731__auto___62003 = (0);
while(true){
if((i__4731__auto___62003 < len__4730__auto___62002)){
args__4736__auto__.push((arguments[i__4731__auto___62003]));

var G__62004 = (i__4731__auto___62003 + (1));
i__4731__auto___62003 = G__62004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58316 = conformed_args__51664__auto__;
var map__58316__$1 = (((((!((map__58316 == null))))?(((((map__58316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58316):map__58316);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58316__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("keygen",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.keygen.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.keygen.cljs$lang$applyTo = (function (seq58312){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58312));
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
var len__4730__auto___62009 = arguments.length;
var i__4731__auto___62010 = (0);
while(true){
if((i__4731__auto___62010 < len__4730__auto___62009)){
args__4736__auto__.push((arguments[i__4731__auto___62010]));

var G__62011 = (i__4731__auto___62010 + (1));
i__4731__auto___62010 = G__62011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58322 = conformed_args__51664__auto__;
var map__58322__$1 = (((((!((map__58322 == null))))?(((((map__58322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58322):map__58322);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58322__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-format",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.font_face_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_format.cljs$lang$applyTo = (function (seq58321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58321));
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
var len__4730__auto___62019 = arguments.length;
var i__4731__auto___62020 = (0);
while(true){
if((i__4731__auto___62020 < len__4730__auto___62019)){
args__4736__auto__.push((arguments[i__4731__auto___62020]));

var G__62021 = (i__4731__auto___62020 + (1));
i__4731__auto___62020 = G__62021;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58328 = conformed_args__51664__auto__;
var map__58328__$1 = (((((!((map__58328 == null))))?(((((map__58328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58328):map__58328);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58328__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncA",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feFuncA.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncA.cljs$lang$applyTo = (function (seq58327){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58327));
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
var len__4730__auto___62034 = arguments.length;
var i__4731__auto___62035 = (0);
while(true){
if((i__4731__auto___62035 < len__4730__auto___62034)){
args__4736__auto__.push((arguments[i__4731__auto___62035]));

var G__62036 = (i__4731__auto___62035 + (1));
i__4731__auto___62035 = G__62036;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58342 = conformed_args__51664__auto__;
var map__58342__$1 = (((((!((map__58342 == null))))?(((((map__58342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58342):map__58342);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58342__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("progress",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.progress.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.progress.cljs$lang$applyTo = (function (seq58336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58336));
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
var len__4730__auto___62065 = arguments.length;
var i__4731__auto___62066 = (0);
while(true){
if((i__4731__auto___62066 < len__4730__auto___62065)){
args__4736__auto__.push((arguments[i__4731__auto___62066]));

var G__62068 = (i__4731__auto___62066 + (1));
i__4731__auto___62066 = G__62068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58371 = conformed_args__51664__auto__;
var map__58371__$1 = (((((!((map__58371 == null))))?(((((map__58371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58371):map__58371);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58371__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("main",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.main.cljs$lang$applyTo = (function (seq58360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58360));
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
var len__4730__auto___62075 = arguments.length;
var i__4731__auto___62076 = (0);
while(true){
if((i__4731__auto___62076 < len__4730__auto___62075)){
args__4736__auto__.push((arguments[i__4731__auto___62076]));

var G__62077 = (i__4731__auto___62076 + (1));
i__4731__auto___62076 = G__62077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58383 = conformed_args__51664__auto__;
var map__58383__$1 = (((((!((map__58383 == null))))?(((((map__58383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58383):map__58383);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58383__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.cite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cite.cljs$lang$applyTo = (function (seq58379){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58379));
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
var len__4730__auto___62085 = arguments.length;
var i__4731__auto___62086 = (0);
while(true){
if((i__4731__auto___62086 < len__4730__auto___62085)){
args__4736__auto__.push((arguments[i__4731__auto___62086]));

var G__62087 = (i__4731__auto___62086 + (1));
i__4731__auto___62086 = G__62087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58394 = conformed_args__51664__auto__;
var map__58394__$1 = (((((!((map__58394 == null))))?(((((map__58394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58394):map__58394);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rect",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.rect.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rect.cljs$lang$applyTo = (function (seq58387){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58387));
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
var len__4730__auto___62090 = arguments.length;
var i__4731__auto___62091 = (0);
while(true){
if((i__4731__auto___62091 < len__4730__auto___62090)){
args__4736__auto__.push((arguments[i__4731__auto___62091]));

var G__62092 = (i__4731__auto___62091 + (1));
i__4731__auto___62091 = G__62092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tref.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58405 = conformed_args__51664__auto__;
var map__58405__$1 = (((((!((map__58405 == null))))?(((((map__58405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58405):map__58405);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58405__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tref",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.tref.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tref.cljs$lang$applyTo = (function (seq58402){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58402));
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
var len__4730__auto___62097 = arguments.length;
var i__4731__auto___62099 = (0);
while(true){
if((i__4731__auto___62099 < len__4730__auto___62097)){
args__4736__auto__.push((arguments[i__4731__auto___62099]));

var G__62100 = (i__4731__auto___62099 + (1));
i__4731__auto___62099 = G__62100;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58433 = conformed_args__51664__auto__;
var map__58433__$1 = (((((!((map__58433 == null))))?(((((map__58433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58433):map__58433);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshpatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.meshpatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshpatch.cljs$lang$applyTo = (function (seq58419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58419));
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
var len__4730__auto___62107 = arguments.length;
var i__4731__auto___62108 = (0);
while(true){
if((i__4731__auto___62108 < len__4730__auto___62107)){
args__4736__auto__.push((arguments[i__4731__auto___62108]));

var G__62110 = (i__4731__auto___62108 + (1));
i__4731__auto___62108 = G__62110;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58451 = conformed_args__51664__auto__;
var map__58451__$1 = (((((!((map__58451 == null))))?(((((map__58451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58451):map__58451);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polyline",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.polyline.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polyline.cljs$lang$applyTo = (function (seq58449){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58449));
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
var len__4730__auto___62120 = arguments.length;
var i__4731__auto___62121 = (0);
while(true){
if((i__4731__auto___62121 < len__4730__auto___62120)){
args__4736__auto__.push((arguments[i__4731__auto___62121]));

var G__62123 = (i__4731__auto___62121 + (1));
i__4731__auto___62121 = G__62123;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.metadata.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58458 = conformed_args__51664__auto__;
var map__58458__$1 = (((((!((map__58458 == null))))?(((((map__58458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58458):map__58458);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58458__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58458__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58458__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("metadata",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.metadata.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.metadata.cljs$lang$applyTo = (function (seq58453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58453));
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
var len__4730__auto___62130 = arguments.length;
var i__4731__auto___62131 = (0);
while(true){
if((i__4731__auto___62131 < len__4730__auto___62130)){
args__4736__auto__.push((arguments[i__4731__auto___62131]));

var G__62136 = (i__4731__auto___62131 + (1));
i__4731__auto___62131 = G__62136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58481 = conformed_args__51664__auto__;
var map__58481__$1 = (((((!((map__58481 == null))))?(((((map__58481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58481):map__58481);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58481__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("map",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.map.cljs$lang$applyTo = (function (seq58474){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58474));
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
var len__4730__auto___62143 = arguments.length;
var i__4731__auto___62145 = (0);
while(true){
if((i__4731__auto___62145 < len__4730__auto___62143)){
args__4736__auto__.push((arguments[i__4731__auto___62145]));

var G__62150 = (i__4731__auto___62145 + (1));
i__4731__auto___62145 = G__62150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58493 = conformed_args__51664__auto__;
var map__58493__$1 = (((((!((map__58493 == null))))?(((((map__58493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58493):map__58493);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58493__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("object",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.object.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.object.cljs$lang$applyTo = (function (seq58487){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58487));
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
var len__4730__auto___62169 = arguments.length;
var i__4731__auto___62170 = (0);
while(true){
if((i__4731__auto___62170 < len__4730__auto___62169)){
args__4736__auto__.push((arguments[i__4731__auto___62170]));

var G__62171 = (i__4731__auto___62170 + (1));
i__4731__auto___62170 = G__62171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58504 = conformed_args__51664__auto__;
var map__58504__$1 = (((((!((map__58504 == null))))?(((((map__58504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58504):map__58504);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("i",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.i.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.i.cljs$lang$applyTo = (function (seq58495){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58495));
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
var len__4730__auto___62181 = arguments.length;
var i__4731__auto___62182 = (0);
while(true){
if((i__4731__auto___62182 < len__4730__auto___62181)){
args__4736__auto__.push((arguments[i__4731__auto___62182]));

var G__62186 = (i__4731__auto___62182 + (1));
i__4731__auto___62182 = G__62186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58511 = conformed_args__51664__auto__;
var map__58511__$1 = (((((!((map__58511 == null))))?(((((map__58511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58511):map__58511);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58511__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-name",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.font_face_name.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_name.cljs$lang$applyTo = (function (seq58506){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58506));
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
var len__4730__auto___62188 = arguments.length;
var i__4731__auto___62189 = (0);
while(true){
if((i__4731__auto___62189 < len__4730__auto___62188)){
args__4736__auto__.push((arguments[i__4731__auto___62189]));

var G__62192 = (i__4731__auto___62189 + (1));
i__4731__auto___62189 = G__62192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58519 = conformed_args__51664__auto__;
var map__58519__$1 = (((((!((map__58519 == null))))?(((((map__58519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58519):map__58519);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58519__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("p",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.p.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.p.cljs$lang$applyTo = (function (seq58517){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58517));
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
var len__4730__auto___62210 = arguments.length;
var i__4731__auto___62211 = (0);
while(true){
if((i__4731__auto___62211 < len__4730__auto___62210)){
args__4736__auto__.push((arguments[i__4731__auto___62211]));

var G__62212 = (i__4731__auto___62211 + (1));
i__4731__auto___62211 = G__62212;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58531 = conformed_args__51664__auto__;
var map__58531__$1 = (((((!((map__58531 == null))))?(((((map__58531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58531):map__58531);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58531__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58531__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58531__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncR",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feFuncR.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncR.cljs$lang$applyTo = (function (seq58524){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58524));
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
var len__4730__auto___62228 = arguments.length;
var i__4731__auto___62229 = (0);
while(true){
if((i__4731__auto___62229 < len__4730__auto___62228)){
args__4736__auto__.push((arguments[i__4731__auto___62229]));

var G__62230 = (i__4731__auto___62229 + (1));
i__4731__auto___62229 = G__62230;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58535 = conformed_args__51664__auto__;
var map__58535__$1 = (((((!((map__58535 == null))))?(((((map__58535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58535):map__58535);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58535__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatchpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.hatchpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatchpath.cljs$lang$applyTo = (function (seq58534){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58534));
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
var len__4730__auto___62237 = arguments.length;
var i__4731__auto___62241 = (0);
while(true){
if((i__4731__auto___62241 < len__4730__auto___62237)){
args__4736__auto__.push((arguments[i__4731__auto___62241]));

var G__62242 = (i__4731__auto___62241 + (1));
i__4731__auto___62241 = G__62242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58545 = conformed_args__51664__auto__;
var map__58545__$1 = (((((!((map__58545 == null))))?(((((map__58545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58545):map__58545);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58545__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58545__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58545__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphItem",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.altGlyphItem.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphItem.cljs$lang$applyTo = (function (seq58540){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58540));
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
var len__4730__auto___62245 = arguments.length;
var i__4731__auto___62247 = (0);
while(true){
if((i__4731__auto___62247 < len__4730__auto___62245)){
args__4736__auto__.push((arguments[i__4731__auto___62247]));

var G__62248 = (i__4731__auto___62247 + (1));
i__4731__auto___62247 = G__62248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58556 = conformed_args__51664__auto__;
var map__58556__$1 = (((((!((map__58556 == null))))?(((((map__58556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58556):map__58556);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58556__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("nav",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.nav.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.nav.cljs$lang$applyTo = (function (seq58552){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58552));
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
var len__4730__auto___62249 = arguments.length;
var i__4731__auto___62250 = (0);
while(true){
if((i__4731__auto___62250 < len__4730__auto___62249)){
args__4736__auto__.push((arguments[i__4731__auto___62250]));

var G__62251 = (i__4731__auto___62250 + (1));
i__4731__auto___62250 = G__62251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58591 = conformed_args__51664__auto__;
var map__58591__$1 = (((((!((map__58591 == null))))?(((((map__58591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58591):map__58591);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58591__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ruby",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.ruby.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ruby.cljs$lang$applyTo = (function (seq58575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58575));
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
var len__4730__auto___62258 = arguments.length;
var i__4731__auto___62259 = (0);
while(true){
if((i__4731__auto___62259 < len__4730__auto___62258)){
args__4736__auto__.push((arguments[i__4731__auto___62259]));

var G__62262 = (i__4731__auto___62259 + (1));
i__4731__auto___62259 = G__62262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.switch$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58624 = conformed_args__51664__auto__;
var map__58624__$1 = (((((!((map__58624 == null))))?(((((map__58624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58624):map__58624);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("switch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.switch$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.switch$.cljs$lang$applyTo = (function (seq58608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58608));
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
var len__4730__auto___62269 = arguments.length;
var i__4731__auto___62270 = (0);
while(true){
if((i__4731__auto___62270 < len__4730__auto___62269)){
args__4736__auto__.push((arguments[i__4731__auto___62270]));

var G__62272 = (i__4731__auto___62270 + (1));
i__4731__auto___62270 = G__62272;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58649 = conformed_args__51664__auto__;
var map__58649__$1 = (((((!((map__58649 == null))))?(((((map__58649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58649):map__58649);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("a",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.a.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.a.cljs$lang$applyTo = (function (seq58646){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58646));
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
var len__4730__auto___62293 = arguments.length;
var i__4731__auto___62294 = (0);
while(true){
if((i__4731__auto___62294 < len__4730__auto___62293)){
args__4736__auto__.push((arguments[i__4731__auto___62294]));

var G__62296 = (i__4731__auto___62294 + (1));
i__4731__auto___62294 = G__62296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.view.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58661 = conformed_args__51664__auto__;
var map__58661__$1 = (((((!((map__58661 == null))))?(((((map__58661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58661):map__58661);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58661__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("view",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.view.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.view.cljs$lang$applyTo = (function (seq58656){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58656));
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
var len__4730__auto___62304 = arguments.length;
var i__4731__auto___62305 = (0);
while(true){
if((i__4731__auto___62305 < len__4730__auto___62304)){
args__4736__auto__.push((arguments[i__4731__auto___62305]));

var G__62306 = (i__4731__auto___62305 + (1));
i__4731__auto___62305 = G__62306;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58674 = conformed_args__51664__auto__;
var map__58674__$1 = (((((!((map__58674 == null))))?(((((map__58674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58674):map__58674);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58674__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("menu",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.menu.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.menu.cljs$lang$applyTo = (function (seq58665){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58665));
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
var len__4730__auto___62314 = arguments.length;
var i__4731__auto___62315 = (0);
while(true){
if((i__4731__auto___62315 < len__4730__auto___62314)){
args__4736__auto__.push((arguments[i__4731__auto___62315]));

var G__62316 = (i__4731__auto___62315 + (1));
i__4731__auto___62315 = G__62316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58677 = conformed_args__51664__auto__;
var map__58677__$1 = (((((!((map__58677 == null))))?(((((map__58677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58677):map__58677);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58677__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("blockquote",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.blockquote.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.blockquote.cljs$lang$applyTo = (function (seq58676){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58676));
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
var len__4730__auto___62351 = arguments.length;
var i__4731__auto___62352 = (0);
while(true){
if((i__4731__auto___62352 < len__4730__auto___62351)){
args__4736__auto__.push((arguments[i__4731__auto___62352]));

var G__62353 = (i__4731__auto___62352 + (1));
i__4731__auto___62352 = G__62353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58685 = conformed_args__51664__auto__;
var map__58685__$1 = (((((!((map__58685 == null))))?(((((map__58685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58685):map__58685);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("img",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.img.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.img.cljs$lang$applyTo = (function (seq58682){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58682));
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
var len__4730__auto___62360 = arguments.length;
var i__4731__auto___62361 = (0);
while(true){
if((i__4731__auto___62361 < len__4730__auto___62360)){
args__4736__auto__.push((arguments[i__4731__auto___62361]));

var G__62363 = (i__4731__auto___62361 + (1));
i__4731__auto___62361 = G__62363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58696 = conformed_args__51664__auto__;
var map__58696__$1 = (((((!((map__58696 == null))))?(((((map__58696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58696):map__58696);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncG",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feFuncG.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncG.cljs$lang$applyTo = (function (seq58692){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58692));
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
var len__4730__auto___62370 = arguments.length;
var i__4731__auto___62371 = (0);
while(true){
if((i__4731__auto___62371 < len__4730__auto___62370)){
args__4736__auto__.push((arguments[i__4731__auto___62371]));

var G__62373 = (i__4731__auto___62371 + (1));
i__4731__auto___62371 = G__62373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58710 = conformed_args__51664__auto__;
var map__58710__$1 = (((((!((map__58710 == null))))?(((((map__58710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58710):map__58710);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58710__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("text",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.text.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.text.cljs$lang$applyTo = (function (seq58706){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58706));
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
var len__4730__auto___62377 = arguments.length;
var i__4731__auto___62378 = (0);
while(true){
if((i__4731__auto___62378 < len__4730__auto___62377)){
args__4736__auto__.push((arguments[i__4731__auto___62378]));

var G__62379 = (i__4731__auto___62378 + (1));
i__4731__auto___62378 = G__62379;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58722 = conformed_args__51664__auto__;
var map__58722__$1 = (((((!((map__58722 == null))))?(((((map__58722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58722):map__58722);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("span",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.span.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.span.cljs$lang$applyTo = (function (seq58718){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58718));
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
var len__4730__auto___62397 = arguments.length;
var i__4731__auto___62398 = (0);
while(true){
if((i__4731__auto___62398 < len__4730__auto___62397)){
args__4736__auto__.push((arguments[i__4731__auto___62398]));

var G__62400 = (i__4731__auto___62398 + (1));
i__4731__auto___62398 = G__62400;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58731 = conformed_args__51664__auto__;
var map__58731__$1 = (((((!((map__58731 == null))))?(((((map__58731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58731):map__58731);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58731__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58731__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("track",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.track.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.track.cljs$lang$applyTo = (function (seq58727){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58727));
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
var len__4730__auto___62407 = arguments.length;
var i__4731__auto___62408 = (0);
while(true){
if((i__4731__auto___62408 < len__4730__auto___62407)){
args__4736__auto__.push((arguments[i__4731__auto___62408]));

var G__62409 = (i__4731__auto___62408 + (1));
i__4731__auto___62408 = G__62409;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58741 = conformed_args__51664__auto__;
var map__58741__$1 = (((((!((map__58741 == null))))?(((((map__58741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58741):map__58741);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58741__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58741__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58741__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("data",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.data.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.data.cljs$lang$applyTo = (function (seq58737){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58737));
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
var len__4730__auto___62419 = arguments.length;
var i__4731__auto___62420 = (0);
while(true){
if((i__4731__auto___62420 < len__4730__auto___62419)){
args__4736__auto__.push((arguments[i__4731__auto___62420]));

var G__62421 = (i__4731__auto___62420 + (1));
i__4731__auto___62420 = G__62421;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58756 = conformed_args__51664__auto__;
var map__58756__$1 = (((((!((map__58756 == null))))?(((((map__58756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58756):map__58756);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58756__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("u",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.u.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.u.cljs$lang$applyTo = (function (seq58752){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58752));
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
var len__4730__auto___62436 = arguments.length;
var i__4731__auto___62437 = (0);
while(true){
if((i__4731__auto___62437 < len__4730__auto___62436)){
args__4736__auto__.push((arguments[i__4731__auto___62437]));

var G__62438 = (i__4731__auto___62437 + (1));
i__4731__auto___62437 = G__62438;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58777 = conformed_args__51664__auto__;
var map__58777__$1 = (((((!((map__58777 == null))))?(((((map__58777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58777):map__58777);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dl",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.dl.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dl.cljs$lang$applyTo = (function (seq58768){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58768));
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
var len__4730__auto___62446 = arguments.length;
var i__4731__auto___62447 = (0);
while(true){
if((i__4731__auto___62447 < len__4730__auto___62446)){
args__4736__auto__.push((arguments[i__4731__auto___62447]));

var G__62448 = (i__4731__auto___62447 + (1));
i__4731__auto___62447 = G__62448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.select.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58794 = conformed_args__51664__auto__;
var map__58794__$1 = (((((!((map__58794 == null))))?(((((map__58794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58794):map__58794);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("select",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.select.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.select.cljs$lang$applyTo = (function (seq58788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58788));
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
var len__4730__auto___62469 = arguments.length;
var i__4731__auto___62470 = (0);
while(true){
if((i__4731__auto___62470 < len__4730__auto___62469)){
args__4736__auto__.push((arguments[i__4731__auto___62470]));

var G__62474 = (i__4731__auto___62470 + (1));
i__4731__auto___62470 = G__62474;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58813 = conformed_args__51664__auto__;
var map__58813__$1 = (((((!((map__58813 == null))))?(((((map__58813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58813):map__58813);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58813__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58813__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58813__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("polygon",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.polygon.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.polygon.cljs$lang$applyTo = (function (seq58805){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58805));
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
var len__4730__auto___62481 = arguments.length;
var i__4731__auto___62482 = (0);
while(true){
if((i__4731__auto___62482 < len__4730__auto___62481)){
args__4736__auto__.push((arguments[i__4731__auto___62482]));

var G__62483 = (i__4731__auto___62482 + (1));
i__4731__auto___62482 = G__62483;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58831 = conformed_args__51664__auto__;
var map__58831__$1 = (((((!((map__58831 == null))))?(((((map__58831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58831):map__58831);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58831__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pattern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.pattern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pattern.cljs$lang$applyTo = (function (seq58825){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58825));
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
var len__4730__auto___62501 = arguments.length;
var i__4731__auto___62502 = (0);
while(true){
if((i__4731__auto___62502 < len__4730__auto___62501)){
args__4736__auto__.push((arguments[i__4731__auto___62502]));

var G__62506 = (i__4731__auto___62502 + (1));
i__4731__auto___62502 = G__62506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58846 = conformed_args__51664__auto__;
var map__58846__$1 = (((((!((map__58846 == null))))?(((((map__58846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58846):map__58846);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58846__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58846__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58846__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("html",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.html.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.html.cljs$lang$applyTo = (function (seq58842){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58842));
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
var len__4730__auto___62519 = arguments.length;
var i__4731__auto___62520 = (0);
while(true){
if((i__4731__auto___62520 < len__4730__auto___62519)){
args__4736__auto__.push((arguments[i__4731__auto___62520]));

var G__62521 = (i__4731__auto___62520 + (1));
i__4731__auto___62520 = G__62521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58859 = conformed_args__51664__auto__;
var map__58859__$1 = (((((!((map__58859 == null))))?(((((map__58859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58859):map__58859);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58859__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("foreignObject",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.foreignObject.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.foreignObject.cljs$lang$applyTo = (function (seq58853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58853));
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
var len__4730__auto___62561 = arguments.length;
var i__4731__auto___62562 = (0);
while(true){
if((i__4731__auto___62562 < len__4730__auto___62561)){
args__4736__auto__.push((arguments[i__4731__auto___62562]));

var G__62565 = (i__4731__auto___62562 + (1));
i__4731__auto___62562 = G__62565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58876 = conformed_args__51664__auto__;
var map__58876__$1 = (((((!((map__58876 == null))))?(((((map__58876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58876):map__58876);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58876__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58876__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58876__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("thead",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.thead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.thead.cljs$lang$applyTo = (function (seq58870){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58870));
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
var len__4730__auto___62573 = arguments.length;
var i__4731__auto___62574 = (0);
while(true){
if((i__4731__auto___62574 < len__4730__auto___62573)){
args__4736__auto__.push((arguments[i__4731__auto___62574]));

var G__62575 = (i__4731__auto___62574 + (1));
i__4731__auto___62574 = G__62575;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58889 = conformed_args__51664__auto__;
var map__58889__$1 = (((((!((map__58889 == null))))?(((((map__58889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58889):map__58889);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58889__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("path",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.path.cljs$lang$applyTo = (function (seq58883){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58883));
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
var len__4730__auto___62647 = arguments.length;
var i__4731__auto___62648 = (0);
while(true){
if((i__4731__auto___62648 < len__4730__auto___62647)){
args__4736__auto__.push((arguments[i__4731__auto___62648]));

var G__62649 = (i__4731__auto___62648 + (1));
i__4731__auto___62648 = G__62649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58898 = conformed_args__51664__auto__;
var map__58898__$1 = (((((!((map__58898 == null))))?(((((map__58898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58898):map__58898);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("del",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.del.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.del.cljs$lang$applyTo = (function (seq58893){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58893));
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
var len__4730__auto___62657 = arguments.length;
var i__4731__auto___62659 = (0);
while(true){
if((i__4731__auto___62659 < len__4730__auto___62657)){
args__4736__auto__.push((arguments[i__4731__auto___62659]));

var G__62661 = (i__4731__auto___62659 + (1));
i__4731__auto___62659 = G__62661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58914 = conformed_args__51664__auto__;
var map__58914__$1 = (((((!((map__58914 == null))))?(((((map__58914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58914):map__58914);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58914__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.altGlyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyph.cljs$lang$applyTo = (function (seq58911){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58911));
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
var len__4730__auto___62677 = arguments.length;
var i__4731__auto___62678 = (0);
while(true){
if((i__4731__auto___62678 < len__4730__auto___62677)){
args__4736__auto__.push((arguments[i__4731__auto___62678]));

var G__62679 = (i__4731__auto___62678 + (1));
i__4731__auto___62678 = G__62679;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58939 = conformed_args__51664__auto__;
var map__58939__$1 = (((((!((map__58939 == null))))?(((((map__58939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58939):map__58939);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58939__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fieldset",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.fieldset.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fieldset.cljs$lang$applyTo = (function (seq58929){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58929));
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
var len__4730__auto___62692 = arguments.length;
var i__4731__auto___62693 = (0);
while(true){
if((i__4731__auto___62693 < len__4730__auto___62692)){
args__4736__auto__.push((arguments[i__4731__auto___62693]));

var G__62695 = (i__4731__auto___62693 + (1));
i__4731__auto___62693 = G__62695;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58954 = conformed_args__51664__auto__;
var map__58954__$1 = (((((!((map__58954 == null))))?(((((map__58954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58954):map__58954);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58954__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("aside",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.aside.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.aside.cljs$lang$applyTo = (function (seq58946){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58946));
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
var len__4730__auto___62717 = arguments.length;
var i__4731__auto___62718 = (0);
while(true){
if((i__4731__auto___62718 < len__4730__auto___62717)){
args__4736__auto__.push((arguments[i__4731__auto___62718]));

var G__62720 = (i__4731__auto___62718 + (1));
i__4731__auto___62718 = G__62720;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58978 = conformed_args__51664__auto__;
var map__58978__$1 = (((((!((map__58978 == null))))?(((((map__58978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58978):map__58978);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58978__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feBlend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feBlend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feBlend.cljs$lang$applyTo = (function (seq58969){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58969));
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
var len__4730__auto___62750 = arguments.length;
var i__4731__auto___62751 = (0);
while(true){
if((i__4731__auto___62751 < len__4730__auto___62750)){
args__4736__auto__.push((arguments[i__4731__auto___62751]));

var G__62752 = (i__4731__auto___62751 + (1));
i__4731__auto___62751 = G__62752;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58992 = conformed_args__51664__auto__;
var map__58992__$1 = (((((!((map__58992 == null))))?(((((map__58992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58992):map__58992);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figure",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.figure.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figure.cljs$lang$applyTo = (function (seq58987){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58987));
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
var len__4730__auto___62767 = arguments.length;
var i__4731__auto___62768 = (0);
while(true){
if((i__4731__auto___62768 < len__4730__auto___62767)){
args__4736__auto__.push((arguments[i__4731__auto___62768]));

var G__62769 = (i__4731__auto___62768 + (1));
i__4731__auto___62768 = G__62769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__58997 = conformed_args__51664__auto__;
var map__58997__$1 = (((((!((map__58997 == null))))?(((((map__58997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58997):map__58997);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58997__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58997__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.textPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textPath.cljs$lang$applyTo = (function (seq58995){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58995));
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
var len__4730__auto___62786 = arguments.length;
var i__4731__auto___62788 = (0);
while(true){
if((i__4731__auto___62788 < len__4730__auto___62786)){
args__4736__auto__.push((arguments[i__4731__auto___62788]));

var G__62790 = (i__4731__auto___62788 + (1));
i__4731__auto___62788 = G__62790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59005 = conformed_args__51664__auto__;
var map__59005__$1 = (((((!((map__59005 == null))))?(((((map__59005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59005):map__59005);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("figcaption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.figcaption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.figcaption.cljs$lang$applyTo = (function (seq59003){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59003));
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
var len__4730__auto___62840 = arguments.length;
var i__4731__auto___62841 = (0);
while(true){
if((i__4731__auto___62841 < len__4730__auto___62840)){
args__4736__auto__.push((arguments[i__4731__auto___62841]));

var G__62842 = (i__4731__auto___62841 + (1));
i__4731__auto___62841 = G__62842;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59010 = conformed_args__51664__auto__;
var map__59010__$1 = (((((!((map__59010 == null))))?(((((map__59010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59010):map__59010);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59010__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mask",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.mask.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mask.cljs$lang$applyTo = (function (seq59009){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59009));
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
var len__4730__auto___62859 = arguments.length;
var i__4731__auto___62864 = (0);
while(true){
if((i__4731__auto___62864 < len__4730__auto___62859)){
args__4736__auto__.push((arguments[i__4731__auto___62864]));

var G__62865 = (i__4731__auto___62864 + (1));
i__4731__auto___62864 = G__62865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59023 = conformed_args__51664__auto__;
var map__59023__$1 = (((((!((map__59023 == null))))?(((((map__59023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59023):map__59023);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59023__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("q",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.q.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.q.cljs$lang$applyTo = (function (seq59020){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59020));
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
var len__4730__auto___62897 = arguments.length;
var i__4731__auto___62898 = (0);
while(true){
if((i__4731__auto___62898 < len__4730__auto___62897)){
args__4736__auto__.push((arguments[i__4731__auto___62898]));

var G__62903 = (i__4731__auto___62898 + (1));
i__4731__auto___62898 = G__62903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59032 = conformed_args__51664__auto__;
var map__59032__$1 = (((((!((map__59032 == null))))?(((((map__59032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59032):map__59032);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59032__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59032__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59032__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdi",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.bdi.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdi.cljs$lang$applyTo = (function (seq59025){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59025));
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
var len__4730__auto___62938 = arguments.length;
var i__4731__auto___62939 = (0);
while(true){
if((i__4731__auto___62939 < len__4730__auto___62938)){
args__4736__auto__.push((arguments[i__4731__auto___62939]));

var G__62941 = (i__4731__auto___62939 + (1));
i__4731__auto___62939 = G__62941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59050 = conformed_args__51664__auto__;
var map__59050__$1 = (((((!((map__59050 == null))))?(((((map__59050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59050):map__59050);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59050__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59050__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59050__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDistantLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feDistantLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDistantLight.cljs$lang$applyTo = (function (seq59043){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59043));
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
var len__4730__auto___62969 = arguments.length;
var i__4731__auto___62970 = (0);
while(true){
if((i__4731__auto___62970 < len__4730__auto___62969)){
args__4736__auto__.push((arguments[i__4731__auto___62970]));

var G__62975 = (i__4731__auto___62970 + (1));
i__4731__auto___62970 = G__62975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59053 = conformed_args__51664__auto__;
var map__59053__$1 = (((((!((map__59053 == null))))?(((((map__59053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59053):map__59053);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59053__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59053__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59053__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("video",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.video.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.video.cljs$lang$applyTo = (function (seq59052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59052));
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
var len__4730__auto___62990 = arguments.length;
var i__4731__auto___62991 = (0);
while(true){
if((i__4731__auto___62991 < len__4730__auto___62990)){
args__4736__auto__.push((arguments[i__4731__auto___62991]));

var G__62992 = (i__4731__auto___62991 + (1));
i__4731__auto___62991 = G__62992;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59062 = conformed_args__51664__auto__;
var map__59062__$1 = (((((!((map__59062 == null))))?(((((map__59062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59062):map__59062);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59062__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59062__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59062__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("address",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.address.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.address.cljs$lang$applyTo = (function (seq59061){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59061));
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
var len__4730__auto___63046 = arguments.length;
var i__4731__auto___63047 = (0);
while(true){
if((i__4731__auto___63047 < len__4730__auto___63046)){
args__4736__auto__.push((arguments[i__4731__auto___63047]));

var G__63051 = (i__4731__auto___63047 + (1));
i__4731__auto___63047 = G__63051;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59071 = conformed_args__51664__auto__;
var map__59071__$1 = (((((!((map__59071 == null))))?(((((map__59071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59071):map__59071);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59071__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("caption",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.caption.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.caption.cljs$lang$applyTo = (function (seq59070){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59070));
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
var len__4730__auto___63120 = arguments.length;
var i__4731__auto___63122 = (0);
while(true){
if((i__4731__auto___63122 < len__4730__auto___63120)){
args__4736__auto__.push((arguments[i__4731__auto___63122]));

var G__63129 = (i__4731__auto___63122 + (1));
i__4731__auto___63122 = G__63129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59085 = conformed_args__51664__auto__;
var map__59085__$1 = (((((!((map__59085 == null))))?(((((map__59085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59085):map__59085);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59085__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59085__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59085__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.dd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dd.cljs$lang$applyTo = (function (seq59076){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59076));
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
var len__4730__auto___63162 = arguments.length;
var i__4731__auto___63163 = (0);
while(true){
if((i__4731__auto___63163 < len__4730__auto___63162)){
args__4736__auto__.push((arguments[i__4731__auto___63163]));

var G__63164 = (i__4731__auto___63163 + (1));
i__4731__auto___63163 = G__63164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59095 = conformed_args__51664__auto__;
var map__59095__$1 = (((((!((map__59095 == null))))?(((((map__59095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59095):map__59095);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59095__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.rp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rp.cljs$lang$applyTo = (function (seq59092){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59092));
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
var len__4730__auto___63167 = arguments.length;
var i__4731__auto___63168 = (0);
while(true){
if((i__4731__auto___63168 < len__4730__auto___63167)){
args__4736__auto__.push((arguments[i__4731__auto___63168]));

var G__63171 = (i__4731__auto___63168 + (1));
i__4731__auto___63168 = G__63171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59108 = conformed_args__51664__auto__;
var map__59108__$1 = (((((!((map__59108 == null))))?(((((map__59108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59108):map__59108);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59108__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59108__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59108__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.hr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hr.cljs$lang$applyTo = (function (seq59102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59102));
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
var len__4730__auto___63218 = arguments.length;
var i__4731__auto___63219 = (0);
while(true){
if((i__4731__auto___63219 < len__4730__auto___63218)){
args__4736__auto__.push((arguments[i__4731__auto___63219]));

var G__63220 = (i__4731__auto___63219 + (1));
i__4731__auto___63219 = G__63220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59119 = conformed_args__51664__auto__;
var map__59119__$1 = (((((!((map__59119 == null))))?(((((map__59119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59119):map__59119);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59119__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59119__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59119__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meta",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.meta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meta.cljs$lang$applyTo = (function (seq59116){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59116));
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
var len__4730__auto___63254 = arguments.length;
var i__4731__auto___63256 = (0);
while(true){
if((i__4731__auto___63256 < len__4730__auto___63254)){
args__4736__auto__.push((arguments[i__4731__auto___63256]));

var G__63257 = (i__4731__auto___63256 + (1));
i__4731__auto___63256 = G__63257;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59134 = conformed_args__51664__auto__;
var map__59134__$1 = (((((!((map__59134 == null))))?(((((map__59134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59134):map__59134);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59134__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59134__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59134__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tbody",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.tbody.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tbody.cljs$lang$applyTo = (function (seq59132){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59132));
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
var len__4730__auto___63327 = arguments.length;
var i__4731__auto___63328 = (0);
while(true){
if((i__4731__auto___63328 < len__4730__auto___63327)){
args__4736__auto__.push((arguments[i__4731__auto___63328]));

var G__63332 = (i__4731__auto___63328 + (1));
i__4731__auto___63328 = G__63332;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.desc.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59147 = conformed_args__51664__auto__;
var map__59147__$1 = (((((!((map__59147 == null))))?(((((map__59147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59147):map__59147);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("desc",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.desc.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.desc.cljs$lang$applyTo = (function (seq59142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59142));
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
var len__4730__auto___63369 = arguments.length;
var i__4731__auto___63370 = (0);
while(true){
if((i__4731__auto___63370 < len__4730__auto___63369)){
args__4736__auto__.push((arguments[i__4731__auto___63370]));

var G__63372 = (i__4731__auto___63370 + (1));
i__4731__auto___63370 = G__63372;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59153 = conformed_args__51664__auto__;
var map__59153__$1 = (((((!((map__59153 == null))))?(((((map__59153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59153):map__59153);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59153__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59153__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59153__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("table",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.table.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.table.cljs$lang$applyTo = (function (seq59151){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59151));
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
var len__4730__auto___63427 = arguments.length;
var i__4731__auto___63428 = (0);
while(true){
if((i__4731__auto___63428 < len__4730__auto___63427)){
args__4736__auto__.push((arguments[i__4731__auto___63428]));

var G__63431 = (i__4731__auto___63428 + (1));
i__4731__auto___63428 = G__63431;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59161 = conformed_args__51664__auto__;
var map__59161__$1 = (((((!((map__59161 == null))))?(((((map__59161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59161):map__59161);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59161__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59161__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59161__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("pre",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.pre.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.pre.cljs$lang$applyTo = (function (seq59156){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59156));
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
var len__4730__auto___63466 = arguments.length;
var i__4731__auto___63467 = (0);
while(true){
if((i__4731__auto___63467 < len__4730__auto___63466)){
args__4736__auto__.push((arguments[i__4731__auto___63467]));

var G__63470 = (i__4731__auto___63467 + (1));
i__4731__auto___63467 = G__63470;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59167 = conformed_args__51664__auto__;
var map__59167__$1 = (((((!((map__59167 == null))))?(((((map__59167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59167):map__59167);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59167__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ul",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.ul.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ul.cljs$lang$applyTo = (function (seq59166){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59166));
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
var len__4730__auto___63483 = arguments.length;
var i__4731__auto___63484 = (0);
while(true){
if((i__4731__auto___63484 < len__4730__auto___63483)){
args__4736__auto__.push((arguments[i__4731__auto___63484]));

var G__63485 = (i__4731__auto___63484 + (1));
i__4731__auto___63484 = G__63485;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59187 = conformed_args__51664__auto__;
var map__59187__$1 = (((((!((map__59187 == null))))?(((((map__59187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59187):map__59187);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59187__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59187__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59187__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feConvolveMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feConvolveMatrix.cljs$lang$applyTo = (function (seq59182){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59182));
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
var len__4730__auto___63494 = arguments.length;
var i__4731__auto___63496 = (0);
while(true){
if((i__4731__auto___63496 < len__4730__auto___63494)){
args__4736__auto__.push((arguments[i__4731__auto___63496]));

var G__63497 = (i__4731__auto___63496 + (1));
i__4731__auto___63496 = G__63497;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59208 = conformed_args__51664__auto__;
var map__59208__$1 = (((((!((map__59208 == null))))?(((((map__59208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59208):map__59208);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59208__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59208__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59208__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.sup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sup.cljs$lang$applyTo = (function (seq59204){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59204));
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
var len__4730__auto___63507 = arguments.length;
var i__4731__auto___63508 = (0);
while(true){
if((i__4731__auto___63508 < len__4730__auto___63507)){
args__4736__auto__.push((arguments[i__4731__auto___63508]));

var G__63509 = (i__4731__auto___63508 + (1));
i__4731__auto___63508 = G__63509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59222 = conformed_args__51664__auto__;
var map__59222__$1 = (((((!((map__59222 == null))))?(((((map__59222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59222):map__59222);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dfn",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.dfn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dfn.cljs$lang$applyTo = (function (seq59217){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59217));
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
var len__4730__auto___63516 = arguments.length;
var i__4731__auto___63518 = (0);
while(true){
if((i__4731__auto___63518 < len__4730__auto___63516)){
args__4736__auto__.push((arguments[i__4731__auto___63518]));

var G__63519 = (i__4731__auto___63518 + (1));
i__4731__auto___63518 = G__63519;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59225 = conformed_args__51664__auto__;
var map__59225__$1 = (((((!((map__59225 == null))))?(((((map__59225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59225):map__59225);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59225__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59225__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59225__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("sub",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.sub.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.sub.cljs$lang$applyTo = (function (seq59224){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59224));
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
var len__4730__auto___63524 = arguments.length;
var i__4731__auto___63525 = (0);
while(true){
if((i__4731__auto___63525 < len__4730__auto___63524)){
args__4736__auto__.push((arguments[i__4731__auto___63525]));

var G__63526 = (i__4731__auto___63525 + (1));
i__4731__auto___63525 = G__63526;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59243 = conformed_args__51664__auto__;
var map__59243__$1 = (((((!((map__59243 == null))))?(((((map__59243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59243):map__59243);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mark",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.mark.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mark.cljs$lang$applyTo = (function (seq59235){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59235));
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
var len__4730__auto___63533 = arguments.length;
var i__4731__auto___63534 = (0);
while(true){
if((i__4731__auto___63534 < len__4730__auto___63533)){
args__4736__auto__.push((arguments[i__4731__auto___63534]));

var G__63536 = (i__4731__auto___63534 + (1));
i__4731__auto___63534 = G__63536;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59254 = conformed_args__51664__auto__;
var map__59254__$1 = (((((!((map__59254 == null))))?(((((map__59254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59254):map__59254);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59254__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59254__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59254__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDisplacementMap",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feDisplacementMap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDisplacementMap.cljs$lang$applyTo = (function (seq59250){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59250));
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
var len__4730__auto___63542 = arguments.length;
var i__4731__auto___63543 = (0);
while(true){
if((i__4731__auto___63543 < len__4730__auto___63542)){
args__4736__auto__.push((arguments[i__4731__auto___63543]));

var G__63546 = (i__4731__auto___63543 + (1));
i__4731__auto___63543 = G__63546;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.unknown.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59270 = conformed_args__51664__auto__;
var map__59270__$1 = (((((!((map__59270 == null))))?(((((map__59270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59270):map__59270);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59270__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("unknown",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.unknown.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.unknown.cljs$lang$applyTo = (function (seq59262){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59262));
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
var len__4730__auto___63561 = arguments.length;
var i__4731__auto___63562 = (0);
while(true){
if((i__4731__auto___63562 < len__4730__auto___63561)){
args__4736__auto__.push((arguments[i__4731__auto___63562]));

var G__63565 = (i__4731__auto___63562 + (1));
i__4731__auto___63562 = G__63565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59277 = conformed_args__51664__auto__;
var map__59277__$1 = (((((!((map__59277 == null))))?(((((map__59277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59277):map__59277);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59277__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59277__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59277__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("script",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.script.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.script.cljs$lang$applyTo = (function (seq59272){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59272));
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
var len__4730__auto___63576 = arguments.length;
var i__4731__auto___63577 = (0);
while(true){
if((i__4731__auto___63577 < len__4730__auto___63576)){
args__4736__auto__.push((arguments[i__4731__auto___63577]));

var G__63579 = (i__4731__auto___63577 + (1));
i__4731__auto___63577 = G__63579;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59306 = conformed_args__51664__auto__;
var map__59306__$1 = (((((!((map__59306 == null))))?(((((map__59306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59306):map__59306);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59306__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59306__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTurbulence",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feTurbulence.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTurbulence.cljs$lang$applyTo = (function (seq59293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59293));
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
var len__4730__auto___63589 = arguments.length;
var i__4731__auto___63590 = (0);
while(true){
if((i__4731__auto___63590 < len__4730__auto___63589)){
args__4736__auto__.push((arguments[i__4731__auto___63590]));

var G__63592 = (i__4731__auto___63590 + (1));
i__4731__auto___63590 = G__63592;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59330 = conformed_args__51664__auto__;
var map__59330__$1 = (((((!((map__59330 == null))))?(((((map__59330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59330):map__59330);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59330__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59330__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59330__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("big",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.big.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.big.cljs$lang$applyTo = (function (seq59322){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59322));
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
var len__4730__auto___63604 = arguments.length;
var i__4731__auto___63606 = (0);
while(true){
if((i__4731__auto___63606 < len__4730__auto___63604)){
args__4736__auto__.push((arguments[i__4731__auto___63606]));

var G__63610 = (i__4731__auto___63606 + (1));
i__4731__auto___63606 = G__63610;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59365 = conformed_args__51664__auto__;
var map__59365__$1 = (((((!((map__59365 == null))))?(((((map__59365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59365):map__59365);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59365__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59365__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59365__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("button",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.button.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.button.cljs$lang$applyTo = (function (seq59349){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59349));
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
var len__4730__auto___63620 = arguments.length;
var i__4731__auto___63621 = (0);
while(true){
if((i__4731__auto___63621 < len__4730__auto___63620)){
args__4736__auto__.push((arguments[i__4731__auto___63621]));

var G__63622 = (i__4731__auto___63621 + (1));
i__4731__auto___63621 = G__63622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59385 = conformed_args__51664__auto__;
var map__59385__$1 = (((((!((map__59385 == null))))?(((((map__59385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59385):map__59385);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59385__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59385__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59385__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-uri",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.font_face_uri.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_uri.cljs$lang$applyTo = (function (seq59378){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59378));
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
var len__4730__auto___63631 = arguments.length;
var i__4731__auto___63632 = (0);
while(true){
if((i__4731__auto___63632 < len__4730__auto___63631)){
args__4736__auto__.push((arguments[i__4731__auto___63632]));

var G__63634 = (i__4731__auto___63632 + (1));
i__4731__auto___63632 = G__63634;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59400 = conformed_args__51664__auto__;
var map__59400__$1 = (((((!((map__59400 == null))))?(((((map__59400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59400):map__59400);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59400__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("wbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.wbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.wbr.cljs$lang$applyTo = (function (seq59389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59389));
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
var len__4730__auto___63644 = arguments.length;
var i__4731__auto___63645 = (0);
while(true){
if((i__4731__auto___63645 < len__4730__auto___63644)){
args__4736__auto__.push((arguments[i__4731__auto___63645]));

var G__63646 = (i__4731__auto___63645 + (1));
i__4731__auto___63645 = G__63646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.symbol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59422 = conformed_args__51664__auto__;
var map__59422__$1 = (((((!((map__59422 == null))))?(((((map__59422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59422):map__59422);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59422__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59422__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59422__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("symbol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.symbol.cljs$lang$applyTo = (function (seq59419){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59419));
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
var len__4730__auto___63653 = arguments.length;
var i__4731__auto___63654 = (0);
while(true){
if((i__4731__auto___63654 < len__4730__auto___63653)){
args__4736__auto__.push((arguments[i__4731__auto___63654]));

var G__63655 = (i__4731__auto___63654 + (1));
i__4731__auto___63654 = G__63655;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59430 = conformed_args__51664__auto__;
var map__59430__$1 = (((((!((map__59430 == null))))?(((((map__59430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59430):map__59430);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("strong",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.strong.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.strong.cljs$lang$applyTo = (function (seq59427){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59427));
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
var len__4730__auto___63667 = arguments.length;
var i__4731__auto___63668 = (0);
while(true){
if((i__4731__auto___63668 < len__4730__auto___63667)){
args__4736__auto__.push((arguments[i__4731__auto___63668]));

var G__63670 = (i__4731__auto___63668 + (1));
i__4731__auto___63668 = G__63670;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.use.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59440 = conformed_args__51664__auto__;
var map__59440__$1 = (((((!((map__59440 == null))))?(((((map__59440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59440):map__59440);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("use",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.use.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.use.cljs$lang$applyTo = (function (seq59434){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59434));
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
var len__4730__auto___63679 = arguments.length;
var i__4731__auto___63680 = (0);
while(true){
if((i__4731__auto___63680 < len__4730__auto___63679)){
args__4736__auto__.push((arguments[i__4731__auto___63680]));

var G__63686 = (i__4731__auto___63680 + (1));
i__4731__auto___63680 = G__63686;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59451 = conformed_args__51664__auto__;
var map__59451__$1 = (((((!((map__59451 == null))))?(((((map__59451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59451):map__59451);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59451__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("solidcolor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.solidcolor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.solidcolor.cljs$lang$applyTo = (function (seq59445){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59445));
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
var len__4730__auto___63706 = arguments.length;
var i__4731__auto___63707 = (0);
while(true){
if((i__4731__auto___63707 < len__4730__auto___63706)){
args__4736__auto__.push((arguments[i__4731__auto___63707]));

var G__63708 = (i__4731__auto___63707 + (1));
i__4731__auto___63707 = G__63708;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59463 = conformed_args__51664__auto__;
var map__59463__$1 = (((((!((map__59463 == null))))?(((((map__59463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59463):map__59463);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59463__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59463__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59463__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("fePointLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.fePointLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.fePointLight.cljs$lang$applyTo = (function (seq59460){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59460));
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
var len__4730__auto___63715 = arguments.length;
var i__4731__auto___63716 = (0);
while(true){
if((i__4731__auto___63716 < len__4730__auto___63715)){
args__4736__auto__.push((arguments[i__4731__auto___63716]));

var G__63717 = (i__4731__auto___63716 + (1));
i__4731__auto___63716 = G__63717;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59472 = conformed_args__51664__auto__;
var map__59472__$1 = (((((!((map__59472 == null))))?(((((map__59472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59472):map__59472);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59472__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59472__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59472__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("li",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.li.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.li.cljs$lang$applyTo = (function (seq59471){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59471));
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
var len__4730__auto___63725 = arguments.length;
var i__4731__auto___63727 = (0);
while(true){
if((i__4731__auto___63727 < len__4730__auto___63725)){
args__4736__auto__.push((arguments[i__4731__auto___63727]));

var G__63728 = (i__4731__auto___63727 + (1));
i__4731__auto___63727 = G__63728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59479 = conformed_args__51664__auto__;
var map__59479__$1 = (((((!((map__59479 == null))))?(((((map__59479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59479):map__59479);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59479__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59479__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59479__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.dt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dt.cljs$lang$applyTo = (function (seq59476){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59476));
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
var len__4730__auto___63739 = arguments.length;
var i__4731__auto___63740 = (0);
while(true){
if((i__4731__auto___63740 < len__4730__auto___63739)){
args__4736__auto__.push((arguments[i__4731__auto___63740]));

var G__63742 = (i__4731__auto___63740 + (1));
i__4731__auto___63740 = G__63742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59486 = conformed_args__51664__auto__;
var map__59486__$1 = (((((!((map__59486 == null))))?(((((map__59486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59486):map__59486);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59486__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59486__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59486__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFuncB",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feFuncB.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFuncB.cljs$lang$applyTo = (function (seq59483){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59483));
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
var len__4730__auto___63758 = arguments.length;
var i__4731__auto___63759 = (0);
while(true){
if((i__4731__auto___63759 < len__4730__auto___63758)){
args__4736__auto__.push((arguments[i__4731__auto___63759]));

var G__63761 = (i__4731__auto___63759 + (1));
i__4731__auto___63759 = G__63761;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.marker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59504 = conformed_args__51664__auto__;
var map__59504__$1 = (((((!((map__59504 == null))))?(((((map__59504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59504):map__59504);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59504__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59504__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59504__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("marker",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.marker.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.marker.cljs$lang$applyTo = (function (seq59500){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59500));
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
var len__4730__auto___63767 = arguments.length;
var i__4731__auto___63768 = (0);
while(true){
if((i__4731__auto___63768 < len__4730__auto___63767)){
args__4736__auto__.push((arguments[i__4731__auto___63768]));

var G__63769 = (i__4731__auto___63768 + (1));
i__4731__auto___63768 = G__63769;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59520 = conformed_args__51664__auto__;
var map__59520__$1 = (((((!((map__59520 == null))))?(((((map__59520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59520):map__59520);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59520__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59520__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59520__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComponentTransfer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feComponentTransfer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComponentTransfer.cljs$lang$applyTo = (function (seq59514){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59514));
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
var len__4730__auto___63774 = arguments.length;
var i__4731__auto___63775 = (0);
while(true){
if((i__4731__auto___63775 < len__4730__auto___63774)){
args__4736__auto__.push((arguments[i__4731__auto___63775]));

var G__63777 = (i__4731__auto___63775 + (1));
i__4731__auto___63775 = G__63777;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59546 = conformed_args__51664__auto__;
var map__59546__$1 = (((((!((map__59546 == null))))?(((((map__59546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59546):map__59546);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59546__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("td",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.td.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.td.cljs$lang$applyTo = (function (seq59527){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59527));
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
var len__4730__auto___63786 = arguments.length;
var i__4731__auto___63787 = (0);
while(true){
if((i__4731__auto___63787 < len__4730__auto___63786)){
args__4736__auto__.push((arguments[i__4731__auto___63787]));

var G__63790 = (i__4731__auto___63787 + (1));
i__4731__auto___63787 = G__63790;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59565 = conformed_args__51664__auto__;
var map__59565__$1 = (((((!((map__59565 == null))))?(((((map__59565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59565):map__59565);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59565__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.tr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tr.cljs$lang$applyTo = (function (seq59555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59555));
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
var len__4730__auto___63808 = arguments.length;
var i__4731__auto___63809 = (0);
while(true){
if((i__4731__auto___63809 < len__4730__auto___63808)){
args__4736__auto__.push((arguments[i__4731__auto___63809]));

var G__63810 = (i__4731__auto___63809 + (1));
i__4731__auto___63809 = G__63810;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59596 = conformed_args__51664__auto__;
var map__59596__$1 = (((((!((map__59596 == null))))?(((((map__59596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59596):map__59596);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("circle",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.circle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.circle.cljs$lang$applyTo = (function (seq59589){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59589));
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
var len__4730__auto___63838 = arguments.length;
var i__4731__auto___63839 = (0);
while(true){
if((i__4731__auto___63839 < len__4730__auto___63838)){
args__4736__auto__.push((arguments[i__4731__auto___63839]));

var G__63841 = (i__4731__auto___63839 + (1));
i__4731__auto___63839 = G__63841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59611 = conformed_args__51664__auto__;
var map__59611__$1 = (((((!((map__59611 == null))))?(((((map__59611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59611):map__59611);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59611__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59611__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59611__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("section",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.section.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.section.cljs$lang$applyTo = (function (seq59609){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59609));
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
var len__4730__auto___63848 = arguments.length;
var i__4731__auto___63849 = (0);
while(true){
if((i__4731__auto___63849 < len__4730__auto___63848)){
args__4736__auto__.push((arguments[i__4731__auto___63849]));

var G__63851 = (i__4731__auto___63849 + (1));
i__4731__auto___63849 = G__63851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59629 = conformed_args__51664__auto__;
var map__59629__$1 = (((((!((map__59629 == null))))?(((((map__59629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59629):map__59629);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59629__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDropShadow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feDropShadow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDropShadow.cljs$lang$applyTo = (function (seq59624){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59624));
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
var len__4730__auto___63857 = arguments.length;
var i__4731__auto___63858 = (0);
while(true){
if((i__4731__auto___63858 < len__4730__auto___63857)){
args__4736__auto__.push((arguments[i__4731__auto___63858]));

var G__63860 = (i__4731__auto___63858 + (1));
i__4731__auto___63858 = G__63860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59664 = conformed_args__51664__auto__;
var map__59664__$1 = (((((!((map__59664 == null))))?(((((map__59664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59664):map__59664);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59664__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("th",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.th.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.th.cljs$lang$applyTo = (function (seq59659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59659));
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
var len__4730__auto___63866 = arguments.length;
var i__4731__auto___63867 = (0);
while(true){
if((i__4731__auto___63867 < len__4730__auto___63866)){
args__4736__auto__.push((arguments[i__4731__auto___63867]));

var G__63871 = (i__4731__auto___63867 + (1));
i__4731__auto___63867 = G__63871;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59684 = conformed_args__51664__auto__;
var map__59684__$1 = (((((!((map__59684 == null))))?(((((map__59684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59684):map__59684);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59684__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("time",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.time.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.time.cljs$lang$applyTo = (function (seq59672){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59672));
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
var len__4730__auto___63881 = arguments.length;
var i__4731__auto___63882 = (0);
while(true){
if((i__4731__auto___63882 < len__4730__auto___63881)){
args__4736__auto__.push((arguments[i__4731__auto___63882]));

var G__63883 = (i__4731__auto___63882 + (1));
i__4731__auto___63882 = G__63883;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59716 = conformed_args__51664__auto__;
var map__59716__$1 = (((((!((map__59716 == null))))?(((((map__59716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59716):map__59716);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59716__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("optgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.optgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.optgroup.cljs$lang$applyTo = (function (seq59695){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59695));
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
var len__4730__auto___63886 = arguments.length;
var i__4731__auto___63888 = (0);
while(true){
if((i__4731__auto___63888 < len__4730__auto___63886)){
args__4736__auto__.push((arguments[i__4731__auto___63888]));

var G__63889 = (i__4731__auto___63888 + (1));
i__4731__auto___63888 = G__63889;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59729 = conformed_args__51664__auto__;
var map__59729__$1 = (((((!((map__59729 == null))))?(((((map__59729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59729):map__59729);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59729__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59729__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59729__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("iframe",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.iframe.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.iframe.cljs$lang$applyTo = (function (seq59723){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59723));
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
var len__4730__auto___63895 = arguments.length;
var i__4731__auto___63898 = (0);
while(true){
if((i__4731__auto___63898 < len__4730__auto___63895)){
args__4736__auto__.push((arguments[i__4731__auto___63898]));

var G__63903 = (i__4731__auto___63898 + (1));
i__4731__auto___63898 = G__63903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59736 = conformed_args__51664__auto__;
var map__59736__$1 = (((((!((map__59736 == null))))?(((((map__59736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59736):map__59736);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59736__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59736__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59736__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("color-profile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.color_profile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.color_profile.cljs$lang$applyTo = (function (seq59734){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59734));
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
var len__4730__auto___63908 = arguments.length;
var i__4731__auto___63909 = (0);
while(true){
if((i__4731__auto___63909 < len__4730__auto___63908)){
args__4736__auto__.push((arguments[i__4731__auto___63909]));

var G__63911 = (i__4731__auto___63909 + (1));
i__4731__auto___63909 = G__63911;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59748 = conformed_args__51664__auto__;
var map__59748__$1 = (((((!((map__59748 == null))))?(((((map__59748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59748):map__59748);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59748__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("legend",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.legend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.legend.cljs$lang$applyTo = (function (seq59744){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59744));
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
var len__4730__auto___63924 = arguments.length;
var i__4731__auto___63925 = (0);
while(true){
if((i__4731__auto___63925 < len__4730__auto___63924)){
args__4736__auto__.push((arguments[i__4731__auto___63925]));

var G__63926 = (i__4731__auto___63925 + (1));
i__4731__auto___63925 = G__63926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59776 = conformed_args__51664__auto__;
var map__59776__$1 = (((((!((map__59776 == null))))?(((((map__59776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59776):map__59776);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59776__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("em",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.em.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.em.cljs$lang$applyTo = (function (seq59773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59773));
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
var len__4730__auto___63932 = arguments.length;
var i__4731__auto___63933 = (0);
while(true){
if((i__4731__auto___63933 < len__4730__auto___63932)){
args__4736__auto__.push((arguments[i__4731__auto___63933]));

var G__63934 = (i__4731__auto___63933 + (1));
i__4731__auto___63933 = G__63934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59793 = conformed_args__51664__auto__;
var map__59793__$1 = (((((!((map__59793 == null))))?(((((map__59793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59793):map__59793);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("kbd",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.kbd.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.kbd.cljs$lang$applyTo = (function (seq59787){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59787));
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
var len__4730__auto___63938 = arguments.length;
var i__4731__auto___63939 = (0);
while(true){
if((i__4731__auto___63939 < len__4730__auto___63938)){
args__4736__auto__.push((arguments[i__4731__auto___63939]));

var G__63940 = (i__4731__auto___63939 + (1));
i__4731__auto___63939 = G__63940;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59817 = conformed_args__51664__auto__;
var map__59817__$1 = (((((!((map__59817 == null))))?(((((map__59817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59817):map__59817);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59817__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("article",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.article.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.article.cljs$lang$applyTo = (function (seq59802){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59802));
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
var len__4730__auto___63956 = arguments.length;
var i__4731__auto___63957 = (0);
while(true){
if((i__4731__auto___63957 < len__4730__auto___63956)){
args__4736__auto__.push((arguments[i__4731__auto___63957]));

var G__63961 = (i__4731__auto___63957 + (1));
i__4731__auto___63957 = G__63961;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59825 = conformed_args__51664__auto__;
var map__59825__$1 = (((((!((map__59825 == null))))?(((((map__59825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59825):map__59825);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59825__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateColor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.animateColor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateColor.cljs$lang$applyTo = (function (seq59824){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59824));
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
var len__4730__auto___63975 = arguments.length;
var i__4731__auto___63977 = (0);
while(true){
if((i__4731__auto___63977 < len__4730__auto___63975)){
args__4736__auto__.push((arguments[i__4731__auto___63977]));

var G__63978 = (i__4731__auto___63977 + (1));
i__4731__auto___63977 = G__63978;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59855 = conformed_args__51664__auto__;
var map__59855__$1 = (((((!((map__59855 == null))))?(((((map__59855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59855):map__59855);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("clipPath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.clipPath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.clipPath.cljs$lang$applyTo = (function (seq59841){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59841));
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
var len__4730__auto___63992 = arguments.length;
var i__4731__auto___63993 = (0);
while(true){
if((i__4731__auto___63993 < len__4730__auto___63992)){
args__4736__auto__.push((arguments[i__4731__auto___63993]));

var G__63994 = (i__4731__auto___63993 + (1));
i__4731__auto___63993 = G__63994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59867 = conformed_args__51664__auto__;
var map__59867__$1 = (((((!((map__59867 == null))))?(((((map__59867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59867):map__59867);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59867__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59867__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59867__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("abbr",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.abbr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.abbr.cljs$lang$applyTo = (function (seq59865){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59865));
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
var len__4730__auto___64004 = arguments.length;
var i__4731__auto___64005 = (0);
while(true){
if((i__4731__auto___64005 < len__4730__auto___64004)){
args__4736__auto__.push((arguments[i__4731__auto___64005]));

var G__64012 = (i__4731__auto___64005 + (1));
i__4731__auto___64005 = G__64012;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59877 = conformed_args__51664__auto__;
var map__59877__$1 = (((((!((map__59877 == null))))?(((((map__59877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59877):map__59877);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59877__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("altGlyphDef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.altGlyphDef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.altGlyphDef.cljs$lang$applyTo = (function (seq59874){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59874));
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
var len__4730__auto___64041 = arguments.length;
var i__4731__auto___64042 = (0);
while(true){
if((i__4731__auto___64042 < len__4730__auto___64041)){
args__4736__auto__.push((arguments[i__4731__auto___64042]));

var G__64043 = (i__4731__auto___64042 + (1));
i__4731__auto___64042 = G__64043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59898 = conformed_args__51664__auto__;
var map__59898__$1 = (((((!((map__59898 == null))))?(((((map__59898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59898):map__59898);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59898__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59898__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59898__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshrow",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.meshrow.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshrow.cljs$lang$applyTo = (function (seq59883){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59883));
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
var len__4730__auto___64065 = arguments.length;
var i__4731__auto___64067 = (0);
while(true){
if((i__4731__auto___64067 < len__4730__auto___64065)){
args__4736__auto__.push((arguments[i__4731__auto___64067]));

var G__64069 = (i__4731__auto___64067 + (1));
i__4731__auto___64067 = G__64069;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59951 = conformed_args__51664__auto__;
var map__59951__$1 = (((((!((map__59951 == null))))?(((((map__59951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59951):map__59951);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("cursor",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.cursor.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.cursor.cljs$lang$applyTo = (function (seq59934){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59934));
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
var len__4730__auto___64082 = arguments.length;
var i__4731__auto___64083 = (0);
while(true){
if((i__4731__auto___64083 < len__4730__auto___64082)){
args__4736__auto__.push((arguments[i__4731__auto___64083]));

var G__64087 = (i__4731__auto___64083 + (1));
i__4731__auto___64083 = G__64087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__59986 = conformed_args__51664__auto__;
var map__59986__$1 = (((((!((map__59986 == null))))?(((((map__59986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59986):map__59986);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59986__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animate",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.animate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animate.cljs$lang$applyTo = (function (seq59979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59979));
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
var len__4730__auto___64103 = arguments.length;
var i__4731__auto___64104 = (0);
while(true){
if((i__4731__auto___64104 < len__4730__auto___64103)){
args__4736__auto__.push((arguments[i__4731__auto___64104]));

var G__64105 = (i__4731__auto___64104 + (1));
i__4731__auto___64104 = G__64105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60005 = conformed_args__51664__auto__;
var map__60005__$1 = (((((!((map__60005 == null))))?(((((map__60005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60005):map__60005);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60005__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60005__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("source",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.source.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.source.cljs$lang$applyTo = (function (seq59991){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59991));
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
var len__4730__auto___64113 = arguments.length;
var i__4731__auto___64114 = (0);
while(true){
if((i__4731__auto___64114 < len__4730__auto___64113)){
args__4736__auto__.push((arguments[i__4731__auto___64114]));

var G__64115 = (i__4731__auto___64114 + (1));
i__4731__auto___64114 = G__64115;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60018 = conformed_args__51664__auto__;
var map__60018__$1 = (((((!((map__60018 == null))))?(((((map__60018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60018):map__60018);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60018__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("output",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.output.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.output.cljs$lang$applyTo = (function (seq60013){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60013));
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
var len__4730__auto___64124 = arguments.length;
var i__4731__auto___64127 = (0);
while(true){
if((i__4731__auto___64127 < len__4730__auto___64124)){
args__4736__auto__.push((arguments[i__4731__auto___64127]));

var G__64128 = (i__4731__auto___64127 + (1));
i__4731__auto___64127 = G__64128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60033 = conformed_args__51664__auto__;
var map__60033__$1 = (((((!((map__60033 == null))))?(((((map__60033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60033):map__60033);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60033__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60033__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60033__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face.cljs$lang$applyTo = (function (seq60022){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60022));
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
var len__4730__auto___64161 = arguments.length;
var i__4731__auto___64162 = (0);
while(true){
if((i__4731__auto___64162 < len__4730__auto___64161)){
args__4736__auto__.push((arguments[i__4731__auto___64162]));

var G__64163 = (i__4731__auto___64162 + (1));
i__4731__auto___64162 = G__64163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60075 = conformed_args__51664__auto__;
var map__60075__$1 = (((((!((map__60075 == null))))?(((((map__60075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60075):map__60075);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60075__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMergeNode",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feMergeNode.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMergeNode.cljs$lang$applyTo = (function (seq60052){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60052));
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
var len__4730__auto___64188 = arguments.length;
var i__4731__auto___64190 = (0);
while(true){
if((i__4731__auto___64190 < len__4730__auto___64188)){
args__4736__auto__.push((arguments[i__4731__auto___64190]));

var G__64192 = (i__4731__auto___64190 + (1));
i__4731__auto___64190 = G__64192;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60090 = conformed_args__51664__auto__;
var map__60090__$1 = (((((!((map__60090 == null))))?(((((map__60090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60090):map__60090);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feSpotLight",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feSpotLight.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feSpotLight.cljs$lang$applyTo = (function (seq60087){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60087));
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
var len__4730__auto___64204 = arguments.length;
var i__4731__auto___64206 = (0);
while(true){
if((i__4731__auto___64206 < len__4730__auto___64204)){
args__4736__auto__.push((arguments[i__4731__auto___64206]));

var G__64209 = (i__4731__auto___64206 + (1));
i__4731__auto___64206 = G__64209;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60106 = conformed_args__51664__auto__;
var map__60106__$1 = (((((!((map__60106 == null))))?(((((map__60106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60106):map__60106);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60106__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60106__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60106__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("header",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.header.cljs$lang$applyTo = (function (seq60100){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60100));
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
var len__4730__auto___64219 = arguments.length;
var i__4731__auto___64221 = (0);
while(true){
if((i__4731__auto___64221 < len__4730__auto___64219)){
args__4736__auto__.push((arguments[i__4731__auto___64221]));

var G__64222 = (i__4731__auto___64221 + (1));
i__4731__auto___64221 = G__64222;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60121 = conformed_args__51664__auto__;
var map__60121__$1 = (((((!((map__60121 == null))))?(((((map__60121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60121):map__60121);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60121__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("datalist",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.datalist.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.datalist.cljs$lang$applyTo = (function (seq60120){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60120));
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
var len__4730__auto___64243 = arguments.length;
var i__4731__auto___64244 = (0);
while(true){
if((i__4731__auto___64244 < len__4730__auto___64243)){
args__4736__auto__.push((arguments[i__4731__auto___64244]));

var G__64245 = (i__4731__auto___64244 + (1));
i__4731__auto___64244 = G__64245;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60147 = conformed_args__51664__auto__;
var map__60147__$1 = (((((!((map__60147 == null))))?(((((map__60147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60147):map__60147);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60147__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tfoot",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.tfoot.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tfoot.cljs$lang$applyTo = (function (seq60130){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60130));
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
var len__4730__auto___64261 = arguments.length;
var i__4731__auto___64263 = (0);
while(true){
if((i__4731__auto___64263 < len__4730__auto___64261)){
args__4736__auto__.push((arguments[i__4731__auto___64263]));

var G__64265 = (i__4731__auto___64263 + (1));
i__4731__auto___64263 = G__64265;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60174 = conformed_args__51664__auto__;
var map__60174__$1 = (((((!((map__60174 == null))))?(((((map__60174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60174):map__60174);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60174__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60174__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("s",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.s.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.s.cljs$lang$applyTo = (function (seq60173){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60173));
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
var len__4730__auto___64281 = arguments.length;
var i__4731__auto___64287 = (0);
while(true){
if((i__4731__auto___64287 < len__4730__auto___64281)){
args__4736__auto__.push((arguments[i__4731__auto___64287]));

var G__64290 = (i__4731__auto___64287 + (1));
i__4731__auto___64287 = G__64290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.hatch.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60205 = conformed_args__51664__auto__;
var map__60205__$1 = (((((!((map__60205 == null))))?(((((map__60205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60205):map__60205);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("hatch",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.hatch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.hatch.cljs$lang$applyTo = (function (seq60184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60184));
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
var len__4730__auto___64300 = arguments.length;
var i__4731__auto___64301 = (0);
while(true){
if((i__4731__auto___64301 < len__4730__auto___64300)){
args__4736__auto__.push((arguments[i__4731__auto___64301]));

var G__64302 = (i__4731__auto___64301 + (1));
i__4731__auto___64301 = G__64302;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60232 = conformed_args__51664__auto__;
var map__60232__$1 = (((((!((map__60232 == null))))?(((((map__60232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60232):map__60232);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60232__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60232__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ins",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.ins.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ins.cljs$lang$applyTo = (function (seq60229){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60229));
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
var len__4730__auto___64317 = arguments.length;
var i__4731__auto___64318 = (0);
while(true){
if((i__4731__auto___64318 < len__4730__auto___64317)){
args__4736__auto__.push((arguments[i__4731__auto___64318]));

var G__64323 = (i__4731__auto___64318 + (1));
i__4731__auto___64318 = G__64323;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60260 = conformed_args__51664__auto__;
var map__60260__$1 = (((((!((map__60260 == null))))?(((((map__60260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60260):map__60260);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60260__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("footer",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.footer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.footer.cljs$lang$applyTo = (function (seq60257){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60257));
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
var len__4730__auto___64326 = arguments.length;
var i__4731__auto___64327 = (0);
while(true){
if((i__4731__auto___64327 < len__4730__auto___64326)){
args__4736__auto__.push((arguments[i__4731__auto___64327]));

var G__64328 = (i__4731__auto___64327 + (1));
i__4731__auto___64327 = G__64328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mpath.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60297 = conformed_args__51664__auto__;
var map__60297__$1 = (((((!((map__60297 == null))))?(((((map__60297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60297):map__60297);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60297__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mpath",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.mpath.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mpath.cljs$lang$applyTo = (function (seq60272){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60272));
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
var len__4730__auto___64339 = arguments.length;
var i__4731__auto___64340 = (0);
while(true){
if((i__4731__auto___64340 < len__4730__auto___64339)){
args__4736__auto__.push((arguments[i__4731__auto___64340]));

var G__64341 = (i__4731__auto___64340 + (1));
i__4731__auto___64340 = G__64341;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60327 = conformed_args__51664__auto__;
var map__60327__$1 = (((((!((map__60327 == null))))?(((((map__60327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60327):map__60327);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60327__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("title",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.title.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.title.cljs$lang$applyTo = (function (seq60326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60326));
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
var len__4730__auto___64353 = arguments.length;
var i__4731__auto___64354 = (0);
while(true){
if((i__4731__auto___64354 < len__4730__auto___64353)){
args__4736__auto__.push((arguments[i__4731__auto___64354]));

var G__64356 = (i__4731__auto___64354 + (1));
i__4731__auto___64354 = G__64356;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60364 = conformed_args__51664__auto__;
var map__60364__$1 = (((((!((map__60364 == null))))?(((((map__60364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60364):map__60364);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60364__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h5",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.h5.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h5.cljs$lang$applyTo = (function (seq60352){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60352));
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
var len__4730__auto___64369 = arguments.length;
var i__4731__auto___64370 = (0);
while(true){
if((i__4731__auto___64370 < len__4730__auto___64369)){
args__4736__auto__.push((arguments[i__4731__auto___64370]));

var G__64371 = (i__4731__auto___64370 + (1));
i__4731__auto___64370 = G__64371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60414 = conformed_args__51664__auto__;
var map__60414__$1 = (((((!((map__60414 == null))))?(((((map__60414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60414):map__60414);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60414__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meshgradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.meshgradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meshgradient.cljs$lang$applyTo = (function (seq60389){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60389));
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
var len__4730__auto___64382 = arguments.length;
var i__4731__auto___64383 = (0);
while(true){
if((i__4731__auto___64383 < len__4730__auto___64382)){
args__4736__auto__.push((arguments[i__4731__auto___64383]));

var G__64384 = (i__4731__auto___64383 + (1));
i__4731__auto___64383 = G__64384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60459 = conformed_args__51664__auto__;
var map__60459__$1 = (((((!((map__60459 == null))))?(((((map__60459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60459):map__60459);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("canvas",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.canvas.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.canvas.cljs$lang$applyTo = (function (seq60440){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60440));
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
var len__4730__auto___64394 = arguments.length;
var i__4731__auto___64395 = (0);
while(true){
if((i__4731__auto___64395 < len__4730__auto___64394)){
args__4736__auto__.push((arguments[i__4731__auto___64395]));

var G__64396 = (i__4731__auto___64395 + (1));
i__4731__auto___64395 = G__64396;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60503 = conformed_args__51664__auto__;
var map__60503__$1 = (((((!((map__60503 == null))))?(((((map__60503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60503):map__60503);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60503__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("param",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.param.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.param.cljs$lang$applyTo = (function (seq60494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60494));
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
var len__4730__auto___64406 = arguments.length;
var i__4731__auto___64407 = (0);
while(true){
if((i__4731__auto___64407 < len__4730__auto___64406)){
args__4736__auto__.push((arguments[i__4731__auto___64407]));

var G__64408 = (i__4731__auto___64407 + (1));
i__4731__auto___64407 = G__64408;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60527 = conformed_args__51664__auto__;
var map__60527__$1 = (((((!((map__60527 == null))))?(((((map__60527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60527):map__60527);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60527__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.font.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font.cljs$lang$applyTo = (function (seq60518){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60518));
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
var len__4730__auto___64422 = arguments.length;
var i__4731__auto___64423 = (0);
while(true){
if((i__4731__auto___64423 < len__4730__auto___64422)){
args__4736__auto__.push((arguments[i__4731__auto___64423]));

var G__64428 = (i__4731__auto___64423 + (1));
i__4731__auto___64423 = G__64428;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60551 = conformed_args__51664__auto__;
var map__60551__$1 = (((((!((map__60551 == null))))?(((((map__60551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60551):map__60551);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60551__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60551__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60551__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("div",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.div.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.div.cljs$lang$applyTo = (function (seq60535){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60535));
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
var len__4730__auto___64441 = arguments.length;
var i__4731__auto___64442 = (0);
while(true){
if((i__4731__auto___64442 < len__4730__auto___64441)){
args__4736__auto__.push((arguments[i__4731__auto___64442]));

var G__64443 = (i__4731__auto___64442 + (1));
i__4731__auto___64442 = G__64443;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60558 = conformed_args__51664__auto__;
var map__60558__$1 = (((((!((map__60558 == null))))?(((((map__60558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60558):map__60558);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60558__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("option",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.option.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.option.cljs$lang$applyTo = (function (seq60555){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60555));
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
var len__4730__auto___64458 = arguments.length;
var i__4731__auto___64459 = (0);
while(true){
if((i__4731__auto___64459 < len__4730__auto___64458)){
args__4736__auto__.push((arguments[i__4731__auto___64459]));

var G__64460 = (i__4731__auto___64459 + (1));
i__4731__auto___64459 = G__64460;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60569 = conformed_args__51664__auto__;
var map__60569__$1 = (((((!((map__60569 == null))))?(((((map__60569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60569):map__60569);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feFlood",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feFlood.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feFlood.cljs$lang$applyTo = (function (seq60567){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60567));
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
var len__4730__auto___64464 = arguments.length;
var i__4731__auto___64467 = (0);
while(true){
if((i__4731__auto___64467 < len__4730__auto___64464)){
args__4736__auto__.push((arguments[i__4731__auto___64467]));

var G__64471 = (i__4731__auto___64467 + (1));
i__4731__auto___64467 = G__64471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60582 = conformed_args__51664__auto__;
var map__60582__$1 = (((((!((map__60582 == null))))?(((((map__60582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60582):map__60582);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60582__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("summary",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.summary.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.summary.cljs$lang$applyTo = (function (seq60578){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60578));
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
var len__4730__auto___64486 = arguments.length;
var i__4731__auto___64487 = (0);
while(true){
if((i__4731__auto___64487 < len__4730__auto___64486)){
args__4736__auto__.push((arguments[i__4731__auto___64487]));

var G__64488 = (i__4731__auto___64487 + (1));
i__4731__auto___64487 = G__64488;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60605 = conformed_args__51664__auto__;
var map__60605__$1 = (((((!((map__60605 == null))))?(((((map__60605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60605):map__60605);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60605__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feMorphology",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feMorphology.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feMorphology.cljs$lang$applyTo = (function (seq60591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60591));
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
var len__4730__auto___64494 = arguments.length;
var i__4731__auto___64495 = (0);
while(true){
if((i__4731__auto___64495 < len__4730__auto___64494)){
args__4736__auto__.push((arguments[i__4731__auto___64495]));

var G__64499 = (i__4731__auto___64495 + (1));
i__4731__auto___64495 = G__64499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60624 = conformed_args__51664__auto__;
var map__60624__$1 = (((((!((map__60624 == null))))?(((((map__60624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60624):map__60624);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60624__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("samp",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.samp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.samp.cljs$lang$applyTo = (function (seq60619){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60619));
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
var len__4730__auto___64513 = arguments.length;
var i__4731__auto___64514 = (0);
while(true){
if((i__4731__auto___64514 < len__4730__auto___64513)){
args__4736__auto__.push((arguments[i__4731__auto___64514]));

var G__64515 = (i__4731__auto___64514 + (1));
i__4731__auto___64514 = G__64515;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60651 = conformed_args__51664__auto__;
var map__60651__$1 = (((((!((map__60651 == null))))?(((((map__60651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60651):map__60651);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60651__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60651__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60651__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyphRef",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.glyphRef.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyphRef.cljs$lang$applyTo = (function (seq60633){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60633));
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
var len__4730__auto___64529 = arguments.length;
var i__4731__auto___64530 = (0);
while(true){
if((i__4731__auto___64530 < len__4730__auto___64529)){
args__4736__auto__.push((arguments[i__4731__auto___64530]));

var G__64534 = (i__4731__auto___64530 + (1));
i__4731__auto___64530 = G__64534;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60663 = conformed_args__51664__auto__;
var map__60663__$1 = (((((!((map__60663 == null))))?(((((map__60663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60663):map__60663);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60663__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("small",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.small.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.small.cljs$lang$applyTo = (function (seq60659){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60659));
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
var len__4730__auto___64584 = arguments.length;
var i__4731__auto___64585 = (0);
while(true){
if((i__4731__auto___64585 < len__4730__auto___64584)){
args__4736__auto__.push((arguments[i__4731__auto___64585]));

var G__64593 = (i__4731__auto___64585 + (1));
i__4731__auto___64585 = G__64593;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60673 = conformed_args__51664__auto__;
var map__60673__$1 = (((((!((map__60673 == null))))?(((((map__60673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60673):map__60673);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60673__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60673__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60673__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("style",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.style.cljs$lang$applyTo = (function (seq60670){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60670));
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
var len__4730__auto___64633 = arguments.length;
var i__4731__auto___64635 = (0);
while(true){
if((i__4731__auto___64635 < len__4730__auto___64633)){
args__4736__auto__.push((arguments[i__4731__auto___64635]));

var G__64646 = (i__4731__auto___64635 + (1));
i__4731__auto___64635 = G__64646;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60696 = conformed_args__51664__auto__;
var map__60696__$1 = (((((!((map__60696 == null))))?(((((map__60696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60696):map__60696);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60696__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("textarea",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.textarea.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.textarea.cljs$lang$applyTo = (function (seq60689){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60689));
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
var len__4730__auto___64682 = arguments.length;
var i__4731__auto___64683 = (0);
while(true){
if((i__4731__auto___64683 < len__4730__auto___64682)){
args__4736__auto__.push((arguments[i__4731__auto___64683]));

var G__64684 = (i__4731__auto___64683 + (1));
i__4731__auto___64683 = G__64684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60714 = conformed_args__51664__auto__;
var map__60714__$1 = (((((!((map__60714 == null))))?(((((map__60714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60714):map__60714);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60714__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feGaussianBlur",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feGaussianBlur.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feGaussianBlur.cljs$lang$applyTo = (function (seq60708){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60708));
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
var len__4730__auto___64731 = arguments.length;
var i__4731__auto___64737 = (0);
while(true){
if((i__4731__auto___64737 < len__4730__auto___64731)){
args__4736__auto__.push((arguments[i__4731__auto___64737]));

var G__64742 = (i__4731__auto___64737 + (1));
i__4731__auto___64737 = G__64742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60722 = conformed_args__51664__auto__;
var map__60722__$1 = (((((!((map__60722 == null))))?(((((map__60722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60722):map__60722);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60722__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h4",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.h4.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h4.cljs$lang$applyTo = (function (seq60721){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60721));
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
var len__4730__auto___64780 = arguments.length;
var i__4731__auto___64781 = (0);
while(true){
if((i__4731__auto___64781 < len__4730__auto___64780)){
args__4736__auto__.push((arguments[i__4731__auto___64781]));

var G__64783 = (i__4731__auto___64781 + (1));
i__4731__auto___64781 = G__64783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60735 = conformed_args__51664__auto__;
var map__60735__$1 = (((((!((map__60735 == null))))?(((((map__60735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60735):map__60735);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("head",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.head.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.head.cljs$lang$applyTo = (function (seq60733){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60733));
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
var len__4730__auto___64848 = arguments.length;
var i__4731__auto___64849 = (0);
while(true){
if((i__4731__auto___64849 < len__4730__auto___64848)){
args__4736__auto__.push((arguments[i__4731__auto___64849]));

var G__64860 = (i__4731__auto___64849 + (1));
i__4731__auto___64849 = G__64860;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60745 = conformed_args__51664__auto__;
var map__60745__$1 = (((((!((map__60745 == null))))?(((((map__60745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60745):map__60745);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60745__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60745__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60745__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("g",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.g.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.g.cljs$lang$applyTo = (function (seq60742){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60742));
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
var len__4730__auto___64877 = arguments.length;
var i__4731__auto___64879 = (0);
while(true){
if((i__4731__auto___64879 < len__4730__auto___64877)){
args__4736__auto__.push((arguments[i__4731__auto___64879]));

var G__64880 = (i__4731__auto___64879 + (1));
i__4731__auto___64879 = G__64880;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60757 = conformed_args__51664__auto__;
var map__60757__$1 = (((((!((map__60757 == null))))?(((((map__60757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60757):map__60757);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60757__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("missing-glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.missing_glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.missing_glyph.cljs$lang$applyTo = (function (seq60751){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60751));
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
var len__4730__auto___64900 = arguments.length;
var i__4731__auto___64901 = (0);
while(true){
if((i__4731__auto___64901 < len__4730__auto___64900)){
args__4736__auto__.push((arguments[i__4731__auto___64901]));

var G__64909 = (i__4731__auto___64901 + (1));
i__4731__auto___64901 = G__64909;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60766 = conformed_args__51664__auto__;
var map__60766__$1 = (((((!((map__60766 == null))))?(((((map__60766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60766):map__60766);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60766__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("stop",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.stop.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.stop.cljs$lang$applyTo = (function (seq60760){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60760));
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
var len__4730__auto___64925 = arguments.length;
var i__4731__auto___64926 = (0);
while(true){
if((i__4731__auto___64926 < len__4730__auto___64925)){
args__4736__auto__.push((arguments[i__4731__auto___64926]));

var G__64929 = (i__4731__auto___64926 + (1));
i__4731__auto___64926 = G__64929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60777 = conformed_args__51664__auto__;
var map__60777__$1 = (((((!((map__60777 == null))))?(((((map__60777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60777):map__60777);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60777__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feDiffuseLighting",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feDiffuseLighting.cljs$lang$applyTo = (function (seq60776){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60776));
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
var len__4730__auto___64936 = arguments.length;
var i__4731__auto___64937 = (0);
while(true){
if((i__4731__auto___64937 < len__4730__auto___64936)){
args__4736__auto__.push((arguments[i__4731__auto___64937]));

var G__64938 = (i__4731__auto___64937 + (1));
i__4731__auto___64937 = G__64938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.filter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60794 = conformed_args__51664__auto__;
var map__60794__$1 = (((((!((map__60794 == null))))?(((((map__60794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60794):map__60794);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60794__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("filter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.filter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.filter.cljs$lang$applyTo = (function (seq60788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60788));
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
var len__4730__auto___64960 = arguments.length;
var i__4731__auto___64961 = (0);
while(true){
if((i__4731__auto___64961 < len__4730__auto___64960)){
args__4736__auto__.push((arguments[i__4731__auto___64961]));

var G__64962 = (i__4731__auto___64961 + (1));
i__4731__auto___64961 = G__64962;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60820 = conformed_args__51664__auto__;
var map__60820__$1 = (((((!((map__60820 == null))))?(((((map__60820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60820):map__60820);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feComposite",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feComposite.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feComposite.cljs$lang$applyTo = (function (seq60812){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60812));
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
var len__4730__auto___64983 = arguments.length;
var i__4731__auto___64985 = (0);
while(true){
if((i__4731__auto___64985 < len__4730__auto___64983)){
args__4736__auto__.push((arguments[i__4731__auto___64985]));

var G__64986 = (i__4731__auto___64985 + (1));
i__4731__auto___64985 = G__64986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.mesh.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60833 = conformed_args__51664__auto__;
var map__60833__$1 = (((((!((map__60833 == null))))?(((((map__60833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60833):map__60833);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("mesh",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.mesh.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.mesh.cljs$lang$applyTo = (function (seq60832){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60832));
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
var len__4730__auto___65000 = arguments.length;
var i__4731__auto___65002 = (0);
while(true){
if((i__4731__auto___65002 < len__4730__auto___65000)){
args__4736__auto__.push((arguments[i__4731__auto___65002]));

var G__65003 = (i__4731__auto___65002 + (1));
i__4731__auto___65002 = G__65003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60836 = conformed_args__51664__auto__;
var map__60836__$1 = (((((!((map__60836 == null))))?(((((map__60836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60836):map__60836);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60836__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("var",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.var$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.var$.cljs$lang$applyTo = (function (seq60835){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60835));
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
var len__4730__auto___65021 = arguments.length;
var i__4731__auto___65022 = (0);
while(true){
if((i__4731__auto___65022 < len__4730__auto___65021)){
args__4736__auto__.push((arguments[i__4731__auto___65022]));

var G__65023 = (i__4731__auto___65022 + (1));
i__4731__auto___65022 = G__65023;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60844 = conformed_args__51664__auto__;
var map__60844__$1 = (((((!((map__60844 == null))))?(((((map__60844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60844):map__60844);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60844__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("tspan",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.tspan.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.tspan.cljs$lang$applyTo = (function (seq60840){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60840));
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
var len__4730__auto___65043 = arguments.length;
var i__4731__auto___65044 = (0);
while(true){
if((i__4731__auto___65044 < len__4730__auto___65043)){
args__4736__auto__.push((arguments[i__4731__auto___65044]));

var G__65047 = (i__4731__auto___65044 + (1));
i__4731__auto___65044 = G__65047;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60855 = conformed_args__51664__auto__;
var map__60855__$1 = (((((!((map__60855 == null))))?(((((map__60855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60855):map__60855);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60855__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ol",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.ol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ol.cljs$lang$applyTo = (function (seq60851){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60851));
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
var len__4730__auto___65057 = arguments.length;
var i__4731__auto___65059 = (0);
while(true){
if((i__4731__auto___65059 < len__4730__auto___65057)){
args__4736__auto__.push((arguments[i__4731__auto___65059]));

var G__65061 = (i__4731__auto___65059 + (1));
i__4731__auto___65059 = G__65061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60863 = conformed_args__51664__auto__;
var map__60863__$1 = (((((!((map__60863 == null))))?(((((map__60863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60863):map__60863);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60863__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60863__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60863__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("details",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.details.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.details.cljs$lang$applyTo = (function (seq60861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60861));
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
var len__4730__auto___65072 = arguments.length;
var i__4731__auto___65073 = (0);
while(true){
if((i__4731__auto___65073 < len__4730__auto___65072)){
args__4736__auto__.push((arguments[i__4731__auto___65073]));

var G__65076 = (i__4731__auto___65073 + (1));
i__4731__auto___65073 = G__65076;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60872 = conformed_args__51664__auto__;
var map__60872__$1 = (((((!((map__60872 == null))))?(((((map__60872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60872):map__60872);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60872__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("line",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.line.cljs$lang$applyTo = (function (seq60868){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60868));
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
var len__4730__auto___65086 = arguments.length;
var i__4731__auto___65087 = (0);
while(true){
if((i__4731__auto___65087 < len__4730__auto___65086)){
args__4736__auto__.push((arguments[i__4731__auto___65087]));

var G__65088 = (i__4731__auto___65087 + (1));
i__4731__auto___65087 = G__65088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60917 = conformed_args__51664__auto__;
var map__60917__$1 = (((((!((map__60917 == null))))?(((((map__60917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60917):map__60917);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60917__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60917__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60917__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("col",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.col.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.col.cljs$lang$applyTo = (function (seq60896){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60896));
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
var len__4730__auto___65100 = arguments.length;
var i__4731__auto___65101 = (0);
while(true){
if((i__4731__auto___65101 < len__4730__auto___65100)){
args__4736__auto__.push((arguments[i__4731__auto___65101]));

var G__65106 = (i__4731__auto___65101 + (1));
i__4731__auto___65101 = G__65106;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60945 = conformed_args__51664__auto__;
var map__60945__$1 = (((((!((map__60945 == null))))?(((((map__60945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60945):map__60945);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60945__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60945__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60945__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("label",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.label.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.label.cljs$lang$applyTo = (function (seq60940){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60940));
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
var len__4730__auto___65119 = arguments.length;
var i__4731__auto___65120 = (0);
while(true){
if((i__4731__auto___65120 < len__4730__auto___65119)){
args__4736__auto__.push((arguments[i__4731__auto___65120]));

var G__65121 = (i__4731__auto___65120 + (1));
i__4731__auto___65120 = G__65121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60959 = conformed_args__51664__auto__;
var map__60959__$1 = (((((!((map__60959 == null))))?(((((map__60959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60959):map__60959);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60959__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60959__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60959__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("picture",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.picture.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.picture.cljs$lang$applyTo = (function (seq60952){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60952));
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
var len__4730__auto___65136 = arguments.length;
var i__4731__auto___65137 = (0);
while(true){
if((i__4731__auto___65137 < len__4730__auto___65136)){
args__4736__auto__.push((arguments[i__4731__auto___65137]));

var G__65138 = (i__4731__auto___65137 + (1));
i__4731__auto___65137 = G__65138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60967 = conformed_args__51664__auto__;
var map__60967__$1 = (((((!((map__60967 == null))))?(((((map__60967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60967):map__60967);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60967__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("rt",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.rt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.rt.cljs$lang$applyTo = (function (seq60964){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60964));
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
var len__4730__auto___65148 = arguments.length;
var i__4731__auto___65149 = (0);
while(true){
if((i__4731__auto___65149 < len__4730__auto___65148)){
args__4736__auto__.push((arguments[i__4731__auto___65149]));

var G__65150 = (i__4731__auto___65149 + (1));
i__4731__auto___65149 = G__65150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__60984 = conformed_args__51664__auto__;
var map__60984__$1 = (((((!((map__60984 == null))))?(((((map__60984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60984):map__60984);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60984__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60984__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h6",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.h6.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h6.cljs$lang$applyTo = (function (seq60972){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60972));
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
var len__4730__auto___65160 = arguments.length;
var i__4731__auto___65161 = (0);
while(true){
if((i__4731__auto___65161 < len__4730__auto___65160)){
args__4736__auto__.push((arguments[i__4731__auto___65161]));

var G__65162 = (i__4731__auto___65161 + (1));
i__4731__auto___65161 = G__65162;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.vkern.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61003 = conformed_args__51664__auto__;
var map__61003__$1 = (((((!((map__61003 == null))))?(((((map__61003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61003):map__61003);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("vkern",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.vkern.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.vkern.cljs$lang$applyTo = (function (seq61001){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61001));
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
var len__4730__auto___65171 = arguments.length;
var i__4731__auto___65172 = (0);
while(true){
if((i__4731__auto___65172 < len__4730__auto___65171)){
args__4736__auto__.push((arguments[i__4731__auto___65172]));

var G__65174 = (i__4731__auto___65172 + (1));
i__4731__auto___65172 = G__65174;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61015 = conformed_args__51664__auto__;
var map__61015__$1 = (((((!((map__61015 == null))))?(((((map__61015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61015):map__61015);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61015__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("link",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.link.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.link.cljs$lang$applyTo = (function (seq61014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61014));
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
var len__4730__auto___65183 = arguments.length;
var i__4731__auto___65184 = (0);
while(true){
if((i__4731__auto___65184 < len__4730__auto___65183)){
args__4736__auto__.push((arguments[i__4731__auto___65184]));

var G__65186 = (i__4731__auto___65184 + (1));
i__4731__auto___65184 = G__65186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61036 = conformed_args__51664__auto__;
var map__61036__$1 = (((((!((map__61036 == null))))?(((((map__61036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61036):map__61036);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61036__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("defs",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.defs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.defs.cljs$lang$applyTo = (function (seq61028){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61028));
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
var len__4730__auto___65193 = arguments.length;
var i__4731__auto___65194 = (0);
while(true){
if((i__4731__auto___65194 < len__4730__auto___65193)){
args__4736__auto__.push((arguments[i__4731__auto___65194]));

var G__65195 = (i__4731__auto___65194 + (1));
i__4731__auto___65194 = G__65195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.glyph.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61063 = conformed_args__51664__auto__;
var map__61063__$1 = (((((!((map__61063 == null))))?(((((map__61063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61063):map__61063);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61063__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("glyph",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.glyph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.glyph.cljs$lang$applyTo = (function (seq61048){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61048));
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
var len__4730__auto___65200 = arguments.length;
var i__4731__auto___65201 = (0);
while(true){
if((i__4731__auto___65201 < len__4730__auto___65200)){
args__4736__auto__.push((arguments[i__4731__auto___65201]));

var G__65202 = (i__4731__auto___65201 + (1));
i__4731__auto___65201 = G__65202;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61090 = conformed_args__51664__auto__;
var map__61090__$1 = (((((!((map__61090 == null))))?(((((map__61090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61090):map__61090);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61090__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("colgroup",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.colgroup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.colgroup.cljs$lang$applyTo = (function (seq61074){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61074));
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
var len__4730__auto___65210 = arguments.length;
var i__4731__auto___65214 = (0);
while(true){
if((i__4731__auto___65214 < len__4730__auto___65210)){
args__4736__auto__.push((arguments[i__4731__auto___65214]));

var G__65218 = (i__4731__auto___65214 + (1));
i__4731__auto___65214 = G__65218;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61111 = conformed_args__51664__auto__;
var map__61111__$1 = (((((!((map__61111 == null))))?(((((map__61111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61111):map__61111);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61111__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61111__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61111__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("meter",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.meter.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.meter.cljs$lang$applyTo = (function (seq61106){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61106));
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
var len__4730__auto___65270 = arguments.length;
var i__4731__auto___65271 = (0);
while(true){
if((i__4731__auto___65271 < len__4730__auto___65270)){
args__4736__auto__.push((arguments[i__4731__auto___65271]));

var G__65275 = (i__4731__auto___65271 + (1));
i__4731__auto___65271 = G__65275;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61141 = conformed_args__51664__auto__;
var map__61141__$1 = (((((!((map__61141 == null))))?(((((map__61141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61141):map__61141);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61141__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61141__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61141__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("bdo",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.bdo.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.bdo.cljs$lang$applyTo = (function (seq61125){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61125));
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
var len__4730__auto___65331 = arguments.length;
var i__4731__auto___65332 = (0);
while(true){
if((i__4731__auto___65332 < len__4730__auto___65331)){
args__4736__auto__.push((arguments[i__4731__auto___65332]));

var G__65337 = (i__4731__auto___65332 + (1));
i__4731__auto___65332 = G__65337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feImage.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61195 = conformed_args__51664__auto__;
var map__61195__$1 = (((((!((map__61195 == null))))?(((((map__61195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61195):map__61195);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61195__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feImage",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feImage.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feImage.cljs$lang$applyTo = (function (seq61179){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61179));
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
var len__4730__auto___65377 = arguments.length;
var i__4731__auto___65379 = (0);
while(true){
if((i__4731__auto___65379 < len__4730__auto___65377)){
args__4736__auto__.push((arguments[i__4731__auto___65379]));

var G__65384 = (i__4731__auto___65379 + (1));
i__4731__auto___65379 = G__65384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61205 = conformed_args__51664__auto__;
var map__61205__$1 = (((((!((map__61205 == null))))?(((((map__61205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61205):map__61205);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61205__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("b",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.b.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.b.cljs$lang$applyTo = (function (seq61200){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61200));
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
var len__4730__auto___65439 = arguments.length;
var i__4731__auto___65442 = (0);
while(true){
if((i__4731__auto___65442 < len__4730__auto___65439)){
args__4736__auto__.push((arguments[i__4731__auto___65442]));

var G__65450 = (i__4731__auto___65442 + (1));
i__4731__auto___65442 = G__65450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61222 = conformed_args__51664__auto__;
var map__61222__$1 = (((((!((map__61222 == null))))?(((((map__61222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61222):map__61222);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61222__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61222__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61222__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("svg",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.svg.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.svg.cljs$lang$applyTo = (function (seq61213){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61213));
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
var len__4730__auto___65515 = arguments.length;
var i__4731__auto___65517 = (0);
while(true){
if((i__4731__auto___65517 < len__4730__auto___65515)){
args__4736__auto__.push((arguments[i__4731__auto___65517]));

var G__65518 = (i__4731__auto___65517 + (1));
i__4731__auto___65517 = G__65518;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feTile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61263 = conformed_args__51664__auto__;
var map__61263__$1 = (((((!((map__61263 == null))))?(((((map__61263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61263):map__61263);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61263__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feTile",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feTile.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feTile.cljs$lang$applyTo = (function (seq61250){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61250));
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
var len__4730__auto___65564 = arguments.length;
var i__4731__auto___65571 = (0);
while(true){
if((i__4731__auto___65571 < len__4730__auto___65564)){
args__4736__auto__.push((arguments[i__4731__auto___65571]));

var G__65578 = (i__4731__auto___65571 + (1));
i__4731__auto___65571 = G__65578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61306 = conformed_args__51664__auto__;
var map__61306__$1 = (((((!((map__61306 == null))))?(((((map__61306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61306):map__61306);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61306__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61306__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61306__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("ellipse",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.ellipse.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.ellipse.cljs$lang$applyTo = (function (seq61293){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61293));
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
var len__4730__auto___65623 = arguments.length;
var i__4731__auto___65624 = (0);
while(true){
if((i__4731__auto___65624 < len__4730__auto___65623)){
args__4736__auto__.push((arguments[i__4731__auto___65624]));

var G__65629 = (i__4731__auto___65624 + (1));
i__4731__auto___65624 = G__65629;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61368 = conformed_args__51664__auto__;
var map__61368__$1 = (((((!((map__61368 == null))))?(((((map__61368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61368):map__61368);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61368__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("code",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.code.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.code.cljs$lang$applyTo = (function (seq61336){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61336));
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
var len__4730__auto___65682 = arguments.length;
var i__4731__auto___65684 = (0);
while(true){
if((i__4731__auto___65684 < len__4730__auto___65682)){
args__4736__auto__.push((arguments[i__4731__auto___65684]));

var G__65687 = (i__4731__auto___65684 + (1));
i__4731__auto___65684 = G__65687;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61392 = conformed_args__51664__auto__;
var map__61392__$1 = (((((!((map__61392 == null))))?(((((map__61392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61392):map__61392);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61392__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("dialog",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.dialog.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.dialog.cljs$lang$applyTo = (function (seq61374){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61374));
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
var len__4730__auto___65721 = arguments.length;
var i__4731__auto___65722 = (0);
while(true){
if((i__4731__auto___65722 < len__4730__auto___65721)){
args__4736__auto__.push((arguments[i__4731__auto___65722]));

var G__65723 = (i__4731__auto___65722 + (1));
i__4731__auto___65722 = G__65723;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61448 = conformed_args__51664__auto__;
var map__61448__$1 = (((((!((map__61448 == null))))?(((((map__61448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61448):map__61448);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61448__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("linearGradient",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.linearGradient.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.linearGradient.cljs$lang$applyTo = (function (seq61421){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61421));
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
var len__4730__auto___65739 = arguments.length;
var i__4731__auto___65740 = (0);
while(true){
if((i__4731__auto___65740 < len__4730__auto___65739)){
args__4736__auto__.push((arguments[i__4731__auto___65740]));

var G__65741 = (i__4731__auto___65740 + (1));
i__4731__auto___65740 = G__65741;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.discard.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61515 = conformed_args__51664__auto__;
var map__61515__$1 = (((((!((map__61515 == null))))?(((((map__61515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61515):map__61515);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61515__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("discard",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.discard.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.discard.cljs$lang$applyTo = (function (seq61482){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61482));
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
var len__4730__auto___65749 = arguments.length;
var i__4731__auto___65750 = (0);
while(true){
if((i__4731__auto___65750 < len__4730__auto___65749)){
args__4736__auto__.push((arguments[i__4731__auto___65750]));

var G__65751 = (i__4731__auto___65750 + (1));
i__4731__auto___65750 = G__65751;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61569 = conformed_args__51664__auto__;
var map__61569__$1 = (((((!((map__61569 == null))))?(((((map__61569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61569):map__61569);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61569__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61569__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61569__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("font-face-src",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.font_face_src.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.font_face_src.cljs$lang$applyTo = (function (seq61558){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61558));
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
var len__4730__auto___65766 = arguments.length;
var i__4731__auto___65767 = (0);
while(true){
if((i__4731__auto___65767 < len__4730__auto___65766)){
args__4736__auto__.push((arguments[i__4731__auto___65767]));

var G__65768 = (i__4731__auto___65767 + (1));
i__4731__auto___65767 = G__65768;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61596 = conformed_args__51664__auto__;
var map__61596__$1 = (((((!((map__61596 == null))))?(((((map__61596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61596):map__61596);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61596__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61596__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61596__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("noscript",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.noscript.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.noscript.cljs$lang$applyTo = (function (seq61591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61591));
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
var len__4730__auto___65792 = arguments.length;
var i__4731__auto___65797 = (0);
while(true){
if((i__4731__auto___65797 < len__4730__auto___65792)){
args__4736__auto__.push((arguments[i__4731__auto___65797]));

var G__65800 = (i__4731__auto___65797 + (1));
i__4731__auto___65797 = G__65800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61618 = conformed_args__51664__auto__;
var map__61618__$1 = (((((!((map__61618 == null))))?(((((map__61618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61618):map__61618);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61618__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("animateTransform",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.animateTransform.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.animateTransform.cljs$lang$applyTo = (function (seq61614){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61614));
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
var len__4730__auto___65814 = arguments.length;
var i__4731__auto___65816 = (0);
while(true){
if((i__4731__auto___65816 < len__4730__auto___65814)){
args__4736__auto__.push((arguments[i__4731__auto___65816]));

var G__65821 = (i__4731__auto___65816 + (1));
i__4731__auto___65816 = G__65821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61630 = conformed_args__51664__auto__;
var map__61630__$1 = (((((!((map__61630 == null))))?(((((map__61630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61630):map__61630);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61630__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("feColorMatrix",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.feColorMatrix.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.feColorMatrix.cljs$lang$applyTo = (function (seq61626){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61626));
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
var len__4730__auto___65838 = arguments.length;
var i__4731__auto___65839 = (0);
while(true){
if((i__4731__auto___65839 < len__4730__auto___65838)){
args__4736__auto__.push((arguments[i__4731__auto___65839]));

var G__65841 = (i__4731__auto___65839 + (1));
i__4731__auto___65839 = G__65841;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61641 = conformed_args__51664__auto__;
var map__61641__$1 = (((((!((map__61641 == null))))?(((((map__61641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61641):map__61641);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61641__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61641__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61641__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("h2",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.h2.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.h2.cljs$lang$applyTo = (function (seq61636){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61636));
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
var len__4730__auto___65861 = arguments.length;
var i__4731__auto___65863 = (0);
while(true){
if((i__4731__auto___65863 < len__4730__auto___65861)){
args__4736__auto__.push((arguments[i__4731__auto___65863]));

var G__65865 = (i__4731__auto___65863 + (1));
i__4731__auto___65863 = G__65865;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61653 = conformed_args__51664__auto__;
var map__61653__$1 = (((((!((map__61653 == null))))?(((((map__61653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61653):map__61653);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61653__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61653__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61653__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("area",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.area.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.area.cljs$lang$applyTo = (function (seq61648){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61648));
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
var len__4730__auto___65882 = arguments.length;
var i__4731__auto___65884 = (0);
while(true){
if((i__4731__auto___65884 < len__4730__auto___65882)){
args__4736__auto__.push((arguments[i__4731__auto___65884]));

var G__65886 = (i__4731__auto___65884 + (1));
i__4731__auto___65884 = G__65886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61670 = conformed_args__51664__auto__;
var map__61670__$1 = (((((!((map__61670 == null))))?(((((map__61670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61670):map__61670);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61670__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("br",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.br.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.br.cljs$lang$applyTo = (function (seq61666){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61666));
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
var len__4730__auto___65900 = arguments.length;
var i__4731__auto___65901 = (0);
while(true){
if((i__4731__auto___65901 < len__4730__auto___65900)){
args__4736__auto__.push((arguments[i__4731__auto___65901]));

var G__65903 = (i__4731__auto___65901 + (1));
i__4731__auto___65901 = G__65903;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

fulcro.client.localized_dom.image.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var conformed_args__51664__auto__ = fulcro.util.conform_BANG_(new cljs.core.Keyword("fulcro.client.dom","dom-element-args","fulcro.client.dom/dom-element-args",1547208006),args);
var map__61683 = conformed_args__51664__auto__;
var map__61683__$1 = (((((!((map__61683 == null))))?(((((map__61683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61683):map__61683);
var attrs__51665__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61683__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var css__51667__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61683__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var children__51666__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61683__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var children__51666__auto____$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,children__51666__auto__);
var attrs_value__51668__auto__ = (function (){var or__4131__auto__ = cljs.core.second(attrs__51665__auto__);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return fulcro.client.localized_dom.macro_create_element.cljs$core$IFn$_invoke$arity$3("image",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs_value__51668__auto__], null),children__51666__auto____$1),css__51667__auto__);
});

fulcro.client.localized_dom.image.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fulcro.client.localized_dom.image.cljs$lang$applyTo = (function (seq61678){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61678));
});


//# sourceMappingURL=fulcro.client.localized_dom.js.map
