goog.provide('fulcro_css.css_implementation');
goog.require('cljs.core');
goog.require('cljs.tagged_literals');
goog.require('fulcro_css.css_protocols');
goog.require('clojure.string');
/**
 * Replaces slashes and dots with underscore.
 */
fulcro_css.css_implementation.cssify = (function fulcro_css$css_implementation$cssify(str){
if(cljs.core.truth_(str)){
return clojure.string.replace(str,/[.\/]/,"_");
} else {
return null;
}
});
fulcro_css.css_implementation.fq_component = (function fulcro_css$css_implementation$fq_component(comp_class){
var temp__5718__auto__ = comp_class.displayName;
if(cljs.core.truth_(temp__5718__auto__)){
var nm = temp__5718__auto__;
return nm;
} else {
return "unknown/unknown";
}
});
/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
fulcro_css.css_implementation.local_class = (function fulcro_css$css_implementation$local_class(var_args){
var G__49257 = arguments.length;
switch (G__49257) {
case 1:
return fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$1 = (function (comp_class){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.css_implementation.cssify(fulcro_css.css_implementation.fq_component(comp_class)));
});

fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2 = (function (comp_class,nm){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(fulcro_css.css_implementation.cssify(fulcro_css.css_implementation.fq_component(comp_class))),"__",cljs.core.name(nm)].join('');
});

fulcro_css.css_implementation.local_class.cljs$lang$maxFixedArity = 2;

fulcro_css.css_implementation.set_classname = (function fulcro_css$css_implementation$set_classname(m,subclasses){
return cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"className","className",-1983287057),subclasses),new cljs.core.Keyword(null,"class","class",-2030961996)));
});
/**
 * Returns true if the given component has css
 */
fulcro_css.css_implementation.CSS_QMARK_ = (function fulcro_css$css_implementation$CSS_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro_css$css_protocols$CSS$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Returns true if the component has global rules
 */
fulcro_css.css_implementation.Global_QMARK_ = (function fulcro_css$css_implementation$Global_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.fulcro_css$css_protocols$Global$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Get the *raw* value from the global-rules of a component.
 */
fulcro_css.css_implementation.get_global_rules = (function fulcro_css$css_implementation$get_global_rules(component){
if(fulcro_css.css_implementation.Global_QMARK_(component)){
return fulcro_css.css_protocols.global_rules(component);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Get the *raw* value from the local-rules of a component.
 */
fulcro_css.css_implementation.get_local_rules = (function fulcro_css$css_implementation$get_local_rules(component){
if(fulcro_css.css_implementation.CSS_QMARK_(component)){
return fulcro_css.css_protocols.local_rules(component);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Returns true if the given string starts with one of [. $ &$ &.]
 */
fulcro_css.css_implementation.prefixed_name_QMARK_ = (function fulcro_css$css_implementation$prefixed_name_QMARK_(nm){
return (!((cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm) == null)));
});
/**
 * Returns the prefix of a string. [. $ &$ &.]
 */
fulcro_css.css_implementation.get_prefix = (function fulcro_css$css_implementation$get_prefix(nm){
var vec__49284 = cljs.core.re_matches(/(\.|\$|&\.|&\$).*/,nm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49284,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49284,(1),null);
return prefix;
});
/**
 * Returns true if the given keyword starts with one of [. $ &$ &.]
 */
fulcro_css.css_implementation.prefixed_keyword_QMARK_ = (function fulcro_css$css_implementation$prefixed_keyword_QMARK_(kw){
return (((kw instanceof cljs.core.Keyword)) && (fulcro_css.css_implementation.prefixed_name_QMARK_(cljs.core.name(kw))));
});
/**
 * Removes the prefix of a string.
 */
fulcro_css.css_implementation.remove_prefix = (function fulcro_css$css_implementation$remove_prefix(nm){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(fulcro_css.css_implementation.get_prefix(nm)));
});
/**
 * Removes the prefix of a keyword.
 */
fulcro_css.css_implementation.remove_prefix_kw = (function fulcro_css$css_implementation$remove_prefix_kw(kw){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fulcro_css.css_implementation.remove_prefix(cljs.core.name(kw)));
});
/**
 * Returns the list of components from the include-children method of a component
 */
fulcro_css.css_implementation.get_includes = (function fulcro_css$css_implementation$get_includes(component){
if(fulcro_css.css_implementation.CSS_QMARK_(component)){
return fulcro_css.css_protocols.include_children(component);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Recursively finds all includes starting at the given component.
 */
fulcro_css.css_implementation.get_nested_includes = (function fulcro_css$css_implementation$get_nested_includes(component){
var direct_children = fulcro_css.css_implementation.get_includes(component);
if(cljs.core.empty_QMARK_(direct_children)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(direct_children,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (direct_children){
return (function (p1__49298_SHARP_,p2__49299_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__49298_SHARP_,(fulcro_css.css_implementation.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css_implementation.get_nested_includes.cljs$core$IFn$_invoke$arity$1(p2__49299_SHARP_) : fulcro_css.css_implementation.get_nested_includes.call(null,p2__49299_SHARP_)));
});})(direct_children))
,cljs.core.PersistentVector.EMPTY,direct_children));
}
});
fulcro_css.css_implementation.localize_name = (function fulcro_css$css_implementation$localize_name(nm,comp){
var no_prefix = fulcro_css.css_implementation.remove_prefix(nm);
var prefix = fulcro_css.css_implementation.get_prefix(nm);
var G__49304 = prefix;
switch (G__49304) {
case ".":
case "&.":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2(comp,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no_prefix))].join('');

break;
case "$":
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_prefix)].join('');

break;
case "&$":
return ["&.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_prefix)].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49304)].join('')));

}
});
fulcro_css.css_implementation.localize_kw = (function fulcro_css$css_implementation$localize_kw(kw,comp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fulcro_css.css_implementation.localize_name(cljs.core.name(kw),comp));
});
/**
 * Gives the localized classname for the given keyword.
 */
fulcro_css.css_implementation.kw__GT_localized_classname = (function fulcro_css$css_implementation$kw__GT_localized_classname(comp,kw){
var nm = cljs.core.name(kw);
var prefix = fulcro_css.css_implementation.get_prefix(nm);
var no_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,cljs.core.count(prefix));
var G__49308 = prefix;
switch (G__49308) {
case "$":
case "&$":
return no_prefix;

break;
case ".":
case "&.":
return fulcro_css.css_implementation.local_class.cljs$core$IFn$_invoke$arity$2(comp,no_prefix);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49308)].join('')));

}
});
fulcro_css.css_implementation.selector_QMARK_ = (function fulcro_css$css_implementation$selector_QMARK_(x){
try{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(garden.selectors.CSSSelector,cljs.core.type(x));
}catch (e49313){var e = e49313;
return false;
}});
/**
 * Gets all the keywords that are present in a selector
 */
fulcro_css.css_implementation.get_selector_keywords = (function fulcro_css$css_implementation$get_selector_keywords(selector){
var val = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(selector);
var classnames = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (val){
return (function (p1__49314_SHARP_){
return cljs.core.re_matches(/[.$].*/,p1__49314_SHARP_);
});})(val))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,classnames);
});
/**
 * Gets all used classnames in from the given rules as keywords
 */
fulcro_css.css_implementation.get_class_keys = (function fulcro_css$css_implementation$get_class_keys(rules){
var flattened_rules = cljs.core.flatten(rules);
var selectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fulcro_css.css_implementation.selector_QMARK_,flattened_rules);
var prefixed_kws = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(fulcro_css.css_implementation.prefixed_keyword_QMARK_,flattened_rules);
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css_implementation.get_selector_keywords,selectors)),prefixed_kws));
});
/**
 * Returns a map from user-given CSS rule names to localized names of the given component.
 */
fulcro_css.css_implementation.get_classnames = (function fulcro_css$css_implementation$get_classnames(comp){
var local_class_keys = fulcro_css.css_implementation.get_class_keys(fulcro_css.css_implementation.get_local_rules(comp));
var global_class_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css_implementation.remove_prefix_kw,fulcro_css.css_implementation.get_class_keys(fulcro_css.css_implementation.get_global_rules(comp)));
var local_classnames = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(fulcro_css.css_implementation.remove_prefix_kw,local_class_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (local_class_keys,global_class_keys){
return (function (p1__49319_SHARP_){
return fulcro_css.css_implementation.kw__GT_localized_classname(comp,p1__49319_SHARP_);
});})(local_class_keys,global_class_keys))
,local_class_keys));
var global_classnames = cljs.core.zipmap(global_class_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,global_class_keys));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([local_classnames,global_classnames], 0));
});

//# sourceMappingURL=fulcro_css.css_implementation.js.map
