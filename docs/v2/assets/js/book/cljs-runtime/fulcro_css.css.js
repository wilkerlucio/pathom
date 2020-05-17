goog.provide('fulcro_css.css');
goog.require('cljs.core');
goog.require('cljs.tagged_literals');
goog.require('fulcro_css.css_protocols');
goog.require('fulcro_css.css_implementation');
goog.require('clojure.string');
goog.require('cljsjs.react.dom');
goog.require('clojure.walk');
goog.require('garden.core');
goog.require('garden.selectors');
/**
 * Replaces slashes and dots with underscore.
 */
fulcro_css.css.cssify = fulcro_css.css_implementation.cssify;
fulcro_css.css.fq_component = fulcro_css.css_implementation.fq_component;
/**
 * Generates a string name of a localized CSS class. This function combines the fully-qualified name of the given class
 *   with the (optional) specified name.
 */
fulcro_css.css.local_class = fulcro_css.css_implementation.local_class;
fulcro_css.css.set_classname = fulcro_css.css_implementation.set_classname;
/**
 * `(CSS? class)` : Returns true if the given component has css.
 */
fulcro_css.css.CSS_QMARK_ = fulcro_css.css_implementation.CSS_QMARK_;
/**
 * `(Global? class)` : Returns true if the component has global rules
 */
fulcro_css.css.Global_QMARK_ = fulcro_css.css_implementation.Global_QMARK_;
/**
 * `(get-global-rules class)` : Get the *raw* value from the global-rules of a component.
 */
fulcro_css.css.get_global_rules = fulcro_css.css_implementation.get_global_rules;
/**
 * `(get-local-rules class)` : Get the *raw* value from the local-rules of a component.
 */
fulcro_css.css.get_local_rules = fulcro_css.css_implementation.get_local_rules;
/**
 * `(get-inculdes class)` :Returns the list of components from the include-children method of a component
 */
fulcro_css.css.get_includes = fulcro_css.css_implementation.get_includes;
/**
 * `(get-nested-includes class)` : Recursively finds all includes starting at the given component.
 */
fulcro_css.css.get_nested_includes = fulcro_css.css_implementation.get_nested_includes;
/**
 * `(get-classnames class)` : Returns a map from user-given CSS rule names to localized names of the given component.
 */
fulcro_css.css.get_classnames = fulcro_css.css_implementation.get_classnames;
fulcro_css.css.localize_selector = (function fulcro_css$css$localize_selector(selector,comp){
var val = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(selector);
var split_cns_selectors = clojure.string.split.cljs$core$IFn$_invoke$arity$2(val,/ /);
return garden.selectors.selector(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val,split_cns_selectors){
return (function (p1__58176_SHARP_){
if(fulcro_css.css_implementation.prefixed_name_QMARK_(p1__58176_SHARP_)){
return fulcro_css.css_implementation.localize_name(p1__58176_SHARP_,comp);
} else {
return p1__58176_SHARP_;
}
});})(val,split_cns_selectors))
,split_cns_selectors)));
});
/**
 * Converts prefixed keywords into localized keywords and localizes the values of garden selectors
 */
fulcro_css.css.localize_css = (function fulcro_css$css$localize_css(component){
return clojure.walk.postwalk((function (ele){
if(fulcro_css.css_implementation.prefixed_keyword_QMARK_(ele)){
return fulcro_css.css_implementation.localize_kw(ele,component);
} else {
if(cljs.core.truth_(fulcro_css.css_implementation.selector_QMARK_(ele))){
return fulcro_css.css.localize_selector(ele,component);
} else {
return ele;

}
}
}),(fulcro_css.css.get_local_rules.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_local_rules.cljs$core$IFn$_invoke$arity$1(component) : fulcro_css.css.get_local_rules.call(null,component)));
});
/**
 * Gets the raw local and global rules from the given component.
 */
fulcro_css.css.get_css_rules = (function fulcro_css$css$get_css_rules(component){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fulcro_css.css.localize_css(component),(fulcro_css.css.get_global_rules.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_global_rules.cljs$core$IFn$_invoke$arity$1(component) : fulcro_css.css.get_global_rules.call(null,component)));
});
/**
 * Recursively gets all global and localized rules (in garden notation) starting at the given component.
 */
fulcro_css.css.get_css = (function fulcro_css$css$get_css(component){
var own_rules = fulcro_css.css.get_css_rules(component);
var nested_children = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1 ? fulcro_css.css.get_nested_includes.cljs$core$IFn$_invoke$arity$1(component) : fulcro_css.css.get_nested_includes.call(null,component)));
var nested_children_rules = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (own_rules,nested_children){
return (function (p1__58180_SHARP_,p2__58181_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__58180_SHARP_,fulcro_css.css.get_css_rules(p2__58181_SHARP_));
});})(own_rules,nested_children))
,cljs.core.PersistentVector.EMPTY,nested_children);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(own_rules,nested_children_rules);
});
/**
 * Returns a string that contains the raw CSS for the rules defined on the given component's sub-tree. This can be used for
 * server-side rendering of the style element, or in a `style` element as the :dangerouslySetInnerHTML/:html value:
 * 
 * (dom/style #js {:dangerouslySetInnerHTML #js {:__html (raw-css component)}})
 * 
 */
fulcro_css.css.raw_css = (function fulcro_css$css$raw_css(component){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(component)], 0));
});
/**
 * Returns a React Style element with the (recursive) CSS of the given component. Useful for directly embedding in your UI VDOM.
 *   DEPRECATED: Use fulcro-css.css-injection/style-element instead.
 */
fulcro_css.css.style_element = (function fulcro_css$css$style_element(component){
return React.createElement("style",({"dangerouslySetInnerHTML": ({"__html": garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(component)], 0))})}));
});
/**
 * Remove the given element from the DOM by ID
 */
fulcro_css.css.remove_from_dom = (function fulcro_css$css$remove_from_dom(id){
var temp__5718__auto__ = document.getElementById(id);
if(cljs.core.truth_(temp__5718__auto__)){
var old_element = temp__5718__auto__;
var parent = old_element.parentNode;
return parent.removeChild(old_element);
} else {
return null;
}
});
/**
 * (Re)place the STYLE element with the provided ID on the document's DOM  with the co-located CSS of the specified component.
 *   DEPRECATED: Use fulcro-css.css-injection/upsert-css instead.
 */
fulcro_css.css.upsert_css = (function fulcro_css$css$upsert_css(id,root_component){
fulcro_css.css.remove_from_dom(id);

var style_ele = document.createElement("style");
style_ele.innerHTML = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fulcro_css.css.get_css(root_component)], 0));

style_ele.setAttribute("id",id);

return document.body.appendChild(style_ele);
});

//# sourceMappingURL=fulcro_css.css.js.map
