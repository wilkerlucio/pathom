goog.provide('fulcro_css.css_protocols');
goog.require('cljs.core');

/**
 * @interface
 */
fulcro_css.css_protocols.CSS = function(){};

/**
 * Specifies the component's local CSS rules
 */
fulcro_css.css_protocols.local_rules = (function fulcro_css$css_protocols$local_rules(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro_css$css_protocols$CSS$local_rules$arity$1 == null)))))){
return this$.fulcro_css$css_protocols$CSS$local_rules$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro_css.css_protocols.local_rules[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro_css.css_protocols.local_rules["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSS.local-rules",this$);
}
}
}
});

/**
 * Specifies the components (typically direct children) whose CSS should be included.
 */
fulcro_css.css_protocols.include_children = (function fulcro_css$css_protocols$include_children(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro_css$css_protocols$CSS$include_children$arity$1 == null)))))){
return this$.fulcro_css$css_protocols$CSS$include_children$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro_css.css_protocols.include_children[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro_css.css_protocols.include_children["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CSS.include-children",this$);
}
}
}
});


/**
 * @interface
 */
fulcro_css.css_protocols.Global = function(){};

/**
 * DEPRECATED. Will be removed in a future release. Do not use for new applications. Use the `$` prefix instead.
 */
fulcro_css.css_protocols.global_rules = (function fulcro_css$css_protocols$global_rules(this$){
if((((!((this$ == null)))) && ((!((this$.fulcro_css$css_protocols$Global$global_rules$arity$1 == null)))))){
return this$.fulcro_css$css_protocols$Global$global_rules$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (fulcro_css.css_protocols.global_rules[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (fulcro_css.css_protocols.global_rules["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Global.global-rules",this$);
}
}
}
});


//# sourceMappingURL=fulcro_css.css_protocols.js.map
