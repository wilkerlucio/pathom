goog.provide('fulcro.inspect.ui.helpers');
goog.require('cljs.core');
goog.require('fulcro_css.css');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('fulcro.client.primitives');
fulcro.inspect.ui.helpers.js_get_in = (function fulcro$inspect$ui$helpers$js_get_in(x,path){
var G__56906 = x;
var G__56907 = cljs.core.clj__GT_js(path);
return goog.object.getValueByKeys(G__56906,G__56907);
});
fulcro.inspect.ui.helpers.html_attr_merge = (function fulcro$inspect$ui$helpers$html_attr_merge(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
if(typeof a === 'string'){
return [a," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('');
} else {
return b;

}
}
});
fulcro.inspect.ui.helpers.props__GT_html = (function fulcro$inspect$ui$helpers$props__GT_html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___56969 = arguments.length;
var i__4731__auto___56970 = (0);
while(true){
if((i__4731__auto___56970 < len__4730__auto___56969)){
args__4736__auto__.push((arguments[i__4731__auto___56970]));

var G__56972 = (i__4731__auto___56970 + (1));
i__4731__auto___56970 = G__56972;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,props){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__56922){
var vec__56924 = p__56922;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56924,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56924,(1),null);
return cljs.core.simple_keyword_QMARK_(k);
})),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,fulcro.inspect.ui.helpers.html_attr_merge,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"react-key","react-key",1337881348)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56909_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56909_SHARP_,new cljs.core.Keyword(null,"react-key","react-key",1337881348));
}),props))));
});

fulcro.inspect.ui.helpers.props__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
fulcro.inspect.ui.helpers.props__GT_html.cljs$lang$applyTo = (function (seq56910){
var G__56911 = cljs.core.first(seq56910);
var seq56910__$1 = cljs.core.next(seq56910);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56911,seq56910__$1);
});

fulcro.inspect.ui.helpers.expand_classes = (function fulcro$inspect$ui$helpers$expand_classes(css,classes){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(css,classes))], null);
});
fulcro.inspect.ui.helpers.props = (function fulcro$inspect$ui$helpers$props(comp,defaults){
return fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(defaults,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.client.primitives.props(comp)], 0));
});
fulcro.inspect.ui.helpers.props_PLUS_classes = (function fulcro$inspect$ui$helpers$props_PLUS_classes(comp,defaults){
var props = fulcro.client.primitives.props(comp);
var css = (function (){var G__56939 = fulcro.client.primitives.react_type(comp);
return (fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_classnames.cljs$core$IFn$_invoke$arity$1(G__56939) : fulcro_css.css.get_classnames.call(null,G__56939));
})();
return fulcro.inspect.ui.helpers.props__GT_html.cljs$core$IFn$_invoke$arity$variadic(defaults,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro.inspect.ui.helpers.expand_classes(css,new cljs.core.Keyword("fulcro.inspect.ui.core","classes","fulcro.inspect.ui.core/classes",2092032546).cljs$core$IFn$_invoke$arity$1(props)),props], 0));
});
fulcro.inspect.ui.helpers.computed_factory = (function fulcro$inspect$ui$helpers$computed_factory(var_args){
var G__56944 = arguments.length;
switch (G__56944) {
case 1:
return fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2(class$,cljs.core.PersistentArrayMap.EMPTY);
});

fulcro.inspect.ui.helpers.computed_factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,options){
var factory = fulcro.client.primitives.factory.cljs$core$IFn$_invoke$arity$2(class$,options);
return ((function (factory){
return (function() {
var fulcro$inspect$ui$helpers$real_factory = null;
var fulcro$inspect$ui$helpers$real_factory__1 = (function (props){
return fulcro$inspect$ui$helpers$real_factory.cljs$core$IFn$_invoke$arity$2(props,cljs.core.PersistentArrayMap.EMPTY);
});
var fulcro$inspect$ui$helpers$real_factory__2 = (function (props,computed){
var G__56949 = fulcro.client.primitives.computed(props,computed);
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__56949) : factory.call(null,G__56949));
});
fulcro$inspect$ui$helpers$real_factory = function(props,computed){
switch(arguments.length){
case 1:
return fulcro$inspect$ui$helpers$real_factory__1.call(this,props);
case 2:
return fulcro$inspect$ui$helpers$real_factory__2.call(this,props,computed);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fulcro$inspect$ui$helpers$real_factory.cljs$core$IFn$_invoke$arity$1 = fulcro$inspect$ui$helpers$real_factory__1;
fulcro$inspect$ui$helpers$real_factory.cljs$core$IFn$_invoke$arity$2 = fulcro$inspect$ui$helpers$real_factory__2;
return fulcro$inspect$ui$helpers$real_factory;
})()
;})(factory))
});

fulcro.inspect.ui.helpers.computed_factory.cljs$lang$maxFixedArity = 2;

fulcro.inspect.ui.helpers.react_display_name = (function fulcro$inspect$ui$helpers$react_display_name(element){
var or__4131__auto__ = (function (){var G__56956 = element;
var G__56956__$1 = (((G__56956 == null))?null:goog.object.get(G__56956,"displayName"));
if((G__56956__$1 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__56956__$1);
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__56959 = element;
var G__56959__$1 = (((G__56959 == null))?null:fulcro.client.primitives.react_type(G__56959));
var G__56959__$2 = (((G__56959__$1 == null))?null:goog.object.get(G__56959__$1,"displayName"));
if((G__56959__$2 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__56959__$2);
}
}
});

//# sourceMappingURL=fulcro.inspect.ui.helpers.js.map
