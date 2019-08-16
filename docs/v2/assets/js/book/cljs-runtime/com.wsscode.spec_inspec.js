goog.provide('com.wsscode.spec_inspec');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
com.wsscode.spec_inspec.accept_keyword = (function com$wsscode$spec_inspec$accept_keyword(x){
if(cljs.core.qualified_keyword_QMARK_(x)){
return x;
} else {
return null;
}
});
com.wsscode.spec_inspec.accept_symbol = (function com$wsscode$spec_inspec$accept_symbol(x){
if(cljs.core.qualified_symbol_QMARK_(x)){
return x;
} else {
return null;
}
});
com.wsscode.spec_inspec.accept_symbol_call = (function com$wsscode$spec_inspec$accept_symbol_call(spec){
if(((cljs.core.seq_QMARK_(spec)) && ((cljs.core.first(spec) instanceof cljs.core.Symbol)))){
return spec;
} else {
return null;
}
});
/**
 * Return the spec form or nil.
 */
com.wsscode.spec_inspec.safe_form = (function com$wsscode$spec_inspec$safe_form(spec){
if(cljs.core.contains_QMARK_(cljs.spec.alpha.registry(),spec)){
return cljs.spec.alpha.form(spec);
} else {
return null;
}
});
/**
 * Return the spec, or first spec when input is a s/and.
 */
com.wsscode.spec_inspec.form__GT_spec = (function com$wsscode$spec_inspec$form__GT_spec(and_spec){
if(((cljs.core.seq_QMARK_(and_spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(and_spec),new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null))))){
return cljs.core.second(and_spec);
} else {
return and_spec;
}
});
/**
 * Determine the main spec symbol from a spec form.
 */
com.wsscode.spec_inspec.spec__GT_root_sym = (function com$wsscode$spec_inspec$spec__GT_root_sym(spec){
while(true){
var f = (function (){var or__4131__auto__ = com.wsscode.spec_inspec.safe_form(spec);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = com.wsscode.spec_inspec.accept_symbol(spec);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return com.wsscode.spec_inspec.accept_symbol_call(spec);
}
}
})();
var spec_def = com.wsscode.spec_inspec.form__GT_spec(f);
if(cljs.core.qualified_keyword_QMARK_(spec_def)){
var G__75887 = spec_def;
spec = G__75887;
continue;
} else {
return spec_def;
}
break;
}
});
/**
 * Look up for the parent coercer using the spec hierarchy.
 */
com.wsscode.spec_inspec.parent_spec = (function com$wsscode$spec_inspec$parent_spec(k){
var or__4131__auto__ = com.wsscode.spec_inspec.accept_keyword(cljs.spec.alpha.get_spec(k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.spec_inspec.accept_keyword(com.wsscode.spec_inspec.form__GT_spec(com.wsscode.spec_inspec.safe_form(k)));
}
});
/**
 * Look for the key in registry, if not found try key spec parent recursively.
 */
com.wsscode.spec_inspec.registry_lookup = (function com$wsscode$spec_inspec$registry_lookup(registry,k){
while(true){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(registry,k);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
return c;
} else {
var temp__5720__auto__ = com.wsscode.spec_inspec.accept_keyword(com.wsscode.spec_inspec.parent_spec(k));
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__75888 = registry;
var G__75889 = parent;
registry = G__75888;
k = G__75889;
continue;
} else {
return null;
}
}
break;
}
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("com.wsscode.spec-inspec","registry-lookup","com.wsscode.spec-inspec/registry-lookup",-822362505,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Keyword(null,"k","k",-2146297393)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.qualified_keyword_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"registry","registry",1021159018),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",-308091478,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));

//# sourceMappingURL=com.wsscode.spec_inspec.js.map
