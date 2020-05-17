goog.provide('com.wsscode.pathom.parser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.pathom.trace');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__71943){
return cljs.core.set_QMARK_(G__71943);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
com.wsscode.pathom.parser.atom_QMARK_ = (function com$wsscode$pathom$parser$atom_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});
com.wsscode.pathom.parser.mark_meta = (function com$wsscode$pathom$parser$mark_meta(source,target){
var G__71955 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71955,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__71955;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__71966){
var vec__71967 = p__71966;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71967,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71967,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__71980){
var vec__71984 = p__71980;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71984,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71984,(1),null);
var call = vec__71984;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : com.wsscode.pathom.parser.expr__GT_ast.call(null,args)),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : com.wsscode.pathom.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__4131__auto__ = args;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__71991 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71991,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__71991;
}
}
});
/**
 * Convert a query to its AST representation.
 */
com.wsscode.pathom.parser.query__GT_ast = (function com$wsscode$pathom$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.wsscode.pathom.parser.mark_meta(query,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),query)], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.join__GT_ast = (function com$wsscode$pathom$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__72008 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72008,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72008,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__72034){
var vec__72035 = p__72034;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72035,(0),null);
var ref = vec__72035;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
com.wsscode.pathom.parser.expr__GT_ast = (function com$wsscode$pathom$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return com.wsscode.pathom.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return com.wsscode.pathom.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return com.wsscode.pathom.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return com.wsscode.pathom.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return com.wsscode.pathom.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
com.wsscode.pathom.parser.wrap_expr = (function com$wsscode$pathom$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__72051 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__72051,null,(1),null));
} else {
return G__72051;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
com.wsscode.pathom.parser.parameterize = (function com$wsscode$pathom$parser$parameterize(expr,params){
if((!(cljs.core.empty_QMARK_(params)))){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,params,null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,expr,null,(1),null));
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
com.wsscode.pathom.parser.ast__GT_expr = (function com$wsscode$pathom$parser$ast__GT_expr(var_args){
var G__72070 = arguments.length;
switch (G__72070) {
case 1:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__72078,unparse_QMARK_){
var map__72079 = p__72078;
var map__72079__$1 = (((((!((map__72079 == null))))?(((((map__72079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72079):map__72079);
var ast = map__72079__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72079__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72079__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72079__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__72086 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__72079,map__72079__$1,ast,ast_meta,type,component){
return (function (p1__72061_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__72061_SHARP_,unparse_QMARK_);
});})(map__72079,map__72079__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__72086,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__72086;
}
} else {
var map__72087 = ast;
var map__72087__$1 = (((((!((map__72087 == null))))?(((((map__72087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72087):map__72087);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72087__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72087__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72087__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72087__$1,new cljs.core.Keyword(null,"params","params",710516235));
return com.wsscode.pathom.parser.wrap_expr(query_root,(cljs.core.truth_((function (){var and__4120__auto__ = params;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
} else {
return and__4120__auto__;
}
})())?(function (){var expr = com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
return com.wsscode.pathom.parser.parameterize(expr,params);
})():(function (){var key__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type))?com.wsscode.pathom.parser.parameterize(key,params):key);
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"join","join",-758861890),type);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast);
} else {
return and__4120__auto__;
}
}
})())){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && ((!(typeof query === 'number'))) && (((unparse_QMARK_ === true) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),type)))))){
var map__72101 = ast;
var map__72101__$1 = (((((!((map__72101 == null))))?(((((map__72101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72101):map__72101);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72101__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__72109 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__72109,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__72109;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__72101,map__72101__$1,children,query_meta,key__$1,map__72087,map__72087__$1,key,query,query_root,params,map__72079,map__72079__$1,ast,ast_meta,type,component){
return (function (p__72112){
var map__72113 = p__72112;
var map__72113__$1 = (((((!((map__72113 == null))))?(((((map__72113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72113):map__72113);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72113__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72113__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72113__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__72123 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__72113,map__72113__$1,union_key,children__$1,component__$1,map__72101,map__72101__$1,children,query_meta,key__$1,map__72087,map__72087__$1,key,query,query_root,params,map__72079,map__72079__$1,ast,ast_meta,type,component){
return (function (p1__72063_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__72063_SHARP_,unparse_QMARK_);
});})(map__72113,map__72113__$1,union_key,children__$1,component__$1,map__72101,map__72101__$1,children,query_meta,key__$1,map__72087,map__72087__$1,key,query,query_root,params,map__72079,map__72079__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__72123,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__72123;
}
})()], null);
});})(map__72101,map__72101__$1,children,query_meta,key__$1,map__72087,map__72087__$1,key,query,query_root,params,map__72079,map__72079__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__72129 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__72101,map__72101__$1,children,query_meta,key__$1,map__72087,map__72087__$1,key,query,query_root,params,map__72079,map__72079__$1,ast,ast_meta,type,component){
return (function (p1__72065_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__72065_SHARP_,unparse_QMARK_);
});})(map__72101,map__72101__$1,children,query_meta,key__$1,map__72087,map__72087__$1,key,query,query_root,params,map__72079,map__72079__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__72129,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__72129;
}
})()]),ast_meta);
}
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,query]),ast_meta);
}
} else {
return key__$1;
}
})()));
}
});

com.wsscode.pathom.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;

com.wsscode.pathom.parser.focus_subquery_union_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_union_STAR_(query_ast,sub_ast){
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__72137_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__72137_SHARP_),p1__72137_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__72152){
var map__72153 = p__72152;
var map__72153__$1 = (((((!((map__72153 == null))))?(((((map__72153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72153):map__72153);
var union_entry = map__72153__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72153__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s_index,union_key);
if(cljs.core.truth_(temp__5718__auto__)){
var sub = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(union_entry,sub) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,union_entry,sub)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,union_entry);
}
});})(s_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast)));
});
com.wsscode.pathom.parser.focus_subquery_STAR_ = (function com$wsscode$pathom$parser$focus_subquery_STAR_(query_ast,sub_ast){
var q_index = cljs.core.group_by(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(query_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q_index){
return (function (children,p__72171){
var map__72173 = p__72171;
var map__72173__$1 = (((((!((map__72173 == null))))?(((((map__72173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72173):map__72173);
var focus = map__72173__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72173__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72173__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5718__auto__,map__72173,map__72173__$1,focus,key,type,q_index){
return (function (children__$1,source__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"join","join",-758861890),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,(com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2 ? com.wsscode.pathom.parser.focus_subquery_STAR_.cljs$core$IFn$_invoke$arity$2(source__$1,focus) : com.wsscode.pathom.parser.focus_subquery_STAR_.call(null,source__$1,focus)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"union","union",2142937499),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(source__$1)], 0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,com.wsscode.pathom.parser.focus_subquery_union_STAR_(source__$1,focus));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children__$1,source__$1);

}
}
});})(source,temp__5718__auto__,map__72173,map__72173__$1,focus,key,type,q_index))
,children,source);
} else {
return children;
}
});})(q_index))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast)));
});
/**
 * Given a query, focus it along the specified query expression.
 * 
 *   Examples:
 *  (focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (fulcro.client.primitives/focus-query [{:foo [:bar :baz]} :woz] [{:foo [:bar]} :woz])
 *  => [{:foo [:bar]} :woz]
 */
com.wsscode.pathom.parser.focus_subquery = (function com$wsscode$pathom$parser$focus_subquery(query,sub_query){
var query_ast = com.wsscode.pathom.parser.query__GT_ast(query);
var sub_ast = com.wsscode.pathom.parser.query__GT_ast(sub_query);
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(com.wsscode.pathom.parser.focus_subquery_STAR_(query_ast,sub_ast),true);
});
com.wsscode.pathom.parser.normalize_atom = (function com$wsscode$pathom$parser$normalize_atom(x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(x);
}
});
com.wsscode.pathom.parser.ast__GT_out_key = (function com$wsscode$pathom$parser$ast__GT_out_key(ast){
var or__4131__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)], null));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ast,new cljs.core.Keyword(null,"key","key",-1516042587));
}
});
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__72201){
var map__72202 = p__72201;
var map__72202__$1 = (((((!((map__72202 == null))))?(((((map__72202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72202):map__72202);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72202__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72202__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__72202,map__72202__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__27095__auto__ = (function (){var map__72206 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__72206__$1 = (((((!((map__72206 == null))))?(((((map__72206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72206):map__72206);
var tx_ast = map__72206__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72206__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__72216 = children;
var vec__72219 = G__72216;
var seq__72220 = cljs.core.seq(vec__72219);
var first__72221 = cljs.core.first(seq__72220);
var seq__72220__$1 = cljs.core.next(seq__72220);
var map__72222 = first__72221;
var map__72222__$1 = (((((!((map__72222 == null))))?(((((map__72222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72222):map__72222);
var ast = map__72222__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72222__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72222__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72222__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72222__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__72220__$1;
var res__$1 = res;
var G__72216__$1 = G__72216;
while(true){
var res__$2 = res__$1;
var vec__72247 = G__72216__$1;
var seq__72248 = cljs.core.seq(vec__72247);
var first__72249 = cljs.core.first(seq__72248);
var seq__72248__$1 = cljs.core.next(seq__72248);
var map__72250 = first__72249;
var map__72250__$1 = (((((!((map__72250 == null))))?(((((map__72250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72250):map__72250);
var ast__$1 = map__72250__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72250__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72250__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72250__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72250__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__72248__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__72260 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__72260__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72260,new cljs.core.Keyword(null,"query","query",-1288509510)):G__72260);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72260__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__72260__$1;
}
})();
var value = (function (){var G__72261 = type__$1;
var G__72261__$1 = (((G__72261 instanceof cljs.core.Keyword))?G__72261.fqn:null);
switch (G__72261__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__72265 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__72265__$1 = (((((!((map__72265 == null))))?(((((map__72265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72265):map__72265);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72265__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__75012 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__75013 = tail__$1;
res__$1 = G__75012;
G__72216__$1 = G__75013;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27094__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__27095__auto__;
} else {
var map__72274 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__72274__$1 = (((((!((map__72274 == null))))?(((((map__72274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72274):map__72274);
var tx_ast = map__72274__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72274__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__72288 = children;
var vec__72290 = G__72288;
var seq__72291 = cljs.core.seq(vec__72290);
var first__72292 = cljs.core.first(seq__72291);
var seq__72291__$1 = cljs.core.next(seq__72291);
var map__72293 = first__72292;
var map__72293__$1 = (((((!((map__72293 == null))))?(((((map__72293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72293):map__72293);
var ast = map__72293__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72293__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72293__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72293__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72293__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__72291__$1;
var res__$1 = res;
var G__72288__$1 = G__72288;
while(true){
var res__$2 = res__$1;
var vec__72325 = G__72288__$1;
var seq__72327 = cljs.core.seq(vec__72325);
var first__72328 = cljs.core.first(seq__72327);
var seq__72327__$1 = cljs.core.next(seq__72327);
var map__72329 = first__72328;
var map__72329__$1 = (((((!((map__72329 == null))))?(((((map__72329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72329):map__72329);
var ast__$1 = map__72329__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72329__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72329__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72329__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72329__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__72327__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__72339 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__72339__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__72339,new cljs.core.Keyword(null,"query","query",-1288509510)):G__72339);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__72339__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__72339__$1;
}
})();
var value = (function (){var G__72341 = type__$1;
var G__72341__$1 = (((G__72341 instanceof cljs.core.Keyword))?G__72341.fqn:null);
switch (G__72341__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__72348 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__72348__$1 = (((((!((map__72348 == null))))?(((((map__72348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72348):map__72348);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72348__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$2) : read.call(null,env__$2));

break;
default:
return null;

}
})();
var G__75017 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__75018 = tail__$1;
res__$1 = G__75017;
G__72288__$1 = G__75018;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__72202,map__72202__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__72362){
var map__72363 = p__72362;
var map__72363__$1 = (((((!((map__72363 == null))))?(((((map__72363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72363):map__72363);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__72363,map__72363__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,map__72363,map__72363__$1,read,mutate){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,map__72363,map__72363__$1,read,mutate){
return (function (state_72893){
var state_val_72896 = (state_72893[(1)]);
if((state_val_72896 === (121))){
var inst_72806 = (state_72893[(7)]);
var inst_72825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72806);
var state_72893__$1 = state_72893;
var statearr_72903_75019 = state_72893__$1;
(statearr_72903_75019[(2)] = inst_72825);

(statearr_72903_75019[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (65))){
var inst_72593 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_72594 = (new Error(inst_72593));
var inst_72595 = (function(){throw inst_72594})();
var state_72893__$1 = state_72893;
var statearr_72907_75021 = state_72893__$1;
(statearr_72907_75021[(2)] = inst_72595);

(statearr_72907_75021[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (70))){
var inst_72468 = (state_72893[(8)]);
var inst_72478 = (state_72893[(9)]);
var inst_72503 = (state_72893[(10)]);
var inst_72623 = (state_72893[(2)]);
var inst_72625 = com.wsscode.pathom.parser.ast__GT_out_key(inst_72503);
var inst_72626 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72468,inst_72625,inst_72623);
var inst_72468__$1 = inst_72626;
var inst_72469 = inst_72478;
var state_72893__$1 = (function (){var statearr_72911 = state_72893;
(statearr_72911[(8)] = inst_72468__$1);

(statearr_72911[(11)] = inst_72469);

return statearr_72911;
})();
var statearr_72913_75022 = state_72893__$1;
(statearr_72913_75022[(2)] = null);

(statearr_72913_75022[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (62))){
var inst_72589 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_72919_75024 = state_72893__$1;
(statearr_72919_75024[(2)] = inst_72589);

(statearr_72919_75024[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (74))){
var inst_72663 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72663)){
var statearr_72928_75025 = state_72893__$1;
(statearr_72928_75025[(1)] = (78));

} else {
var statearr_72930_75026 = state_72893__$1;
(statearr_72930_75026[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (110))){
var inst_72853 = (state_72893[(12)]);
var inst_72853__$1 = (state_72893[(2)]);
var inst_72855 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72853__$1);
var state_72893__$1 = (function (){var statearr_72937 = state_72893;
(statearr_72937[(12)] = inst_72853__$1);

return statearr_72937;
})();
if(inst_72855){
var statearr_72939_75027 = state_72893__$1;
(statearr_72939_75027[(1)] = (132));

} else {
var statearr_72940_75028 = state_72893__$1;
(statearr_72940_75028[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (130))){
var inst_72794 = (state_72893[(13)]);
var inst_72848 = (state_72893[(2)]);
var inst_72849 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_72794) : read.call(null,inst_72794));
var state_72893__$1 = (function (){var statearr_72941 = state_72893;
(statearr_72941[(14)] = inst_72848);

return statearr_72941;
})();
var statearr_72942_75032 = state_72893__$1;
(statearr_72942_75032[(2)] = inst_72849);

(statearr_72942_75032[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (128))){
var state_72893__$1 = state_72893;
var statearr_72948_75033 = state_72893__$1;
(statearr_72948_75033[(2)] = null);

(statearr_72948_75033[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (7))){
var inst_72873 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_72951_75034 = state_72893__$1;
(statearr_72951_75034[(2)] = inst_72873);


cljs.core.async.impl.ioc_helpers.process_exception(state_72893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (59))){
var inst_72583 = (state_72893[(15)]);
var inst_72582 = (state_72893[(2)]);
var inst_72583__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72582,new cljs.core.Keyword(null,"action","action",-811238024));
var state_72893__$1 = (function (){var statearr_72958 = state_72893;
(statearr_72958[(15)] = inst_72583__$1);

return statearr_72958;
})();
if(cljs.core.truth_(inst_72583__$1)){
var statearr_72959_75038 = state_72893__$1;
(statearr_72959_75038[(1)] = (60));

} else {
var statearr_72960_75039 = state_72893__$1;
(statearr_72960_75039[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (86))){
var inst_72704 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_72963_75041 = state_72893__$1;
(statearr_72963_75041[(2)] = inst_72704);

(statearr_72963_75041[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (20))){
var state_72893__$1 = state_72893;
var statearr_72967_75042 = state_72893__$1;
(statearr_72967_75042[(2)] = true);

(statearr_72967_75042[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (72))){
var inst_72642 = (state_72893[(16)]);
var inst_72651 = inst_72642.cljs$lang$protocol_mask$partition0$;
var inst_72652 = (inst_72651 & (64));
var inst_72654 = inst_72642.cljs$core$ISeq$;
var inst_72655 = (cljs.core.PROTOCOL_SENTINEL === inst_72654);
var inst_72656 = ((inst_72652) || (inst_72655));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72656)){
var statearr_72971_75045 = state_72893__$1;
(statearr_72971_75045[(1)] = (75));

} else {
var statearr_72973_75046 = state_72893__$1;
(statearr_72973_75046[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (58))){
var inst_72561 = (state_72893[(17)]);
var state_72893__$1 = state_72893;
var statearr_72976_75047 = state_72893__$1;
(statearr_72976_75047[(2)] = inst_72561);

(statearr_72976_75047[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (60))){
var inst_72583 = (state_72893[(15)]);
var inst_72585 = (inst_72583.cljs$core$IFn$_invoke$arity$0 ? inst_72583.cljs$core$IFn$_invoke$arity$0() : inst_72583.call(null));
var state_72893__$1 = state_72893;
var statearr_72977_75048 = state_72893__$1;
(statearr_72977_75048[(2)] = inst_72585);

(statearr_72977_75048[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (27))){
var inst_72378 = (state_72893[(18)]);
var inst_72632 = (state_72893[(2)]);
var inst_72633 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_72634 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_72635 = cljs.core.PersistentHashMap.fromArrays(inst_72633,inst_72634);
var inst_72636 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_72378,inst_72635);
var state_72893__$1 = (function (){var statearr_72983 = state_72893;
(statearr_72983[(19)] = inst_72636);

return statearr_72983;
})();
var statearr_72984_75049 = state_72893__$1;
(statearr_72984_75049[(2)] = inst_72632);

(statearr_72984_75049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (1))){
var state_72893__$1 = state_72893;
var statearr_72985_75050 = state_72893__$1;
(statearr_72985_75050[(2)] = null);

(statearr_72985_75050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (69))){
var inst_72611 = (state_72893[(20)]);
var state_72893__$1 = state_72893;
var statearr_72990_75051 = state_72893__$1;
(statearr_72990_75051[(2)] = inst_72611);

(statearr_72990_75051[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (101))){
var inst_72760 = (state_72893[(21)]);
var inst_72674 = (state_72893[(22)]);
var inst_72756 = (state_72893[(23)]);
var inst_72761 = (state_72893[(24)]);
var inst_72769 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_72770 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_72761];
var inst_72771 = cljs.core.PersistentHashMap.fromArrays(inst_72769,inst_72770);
var inst_72772 = com.wsscode.pathom.trace.trace(inst_72674,inst_72771);
var inst_72776 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_72777 = [inst_72756,inst_72760];
var inst_72778 = cljs.core.PersistentHashMap.fromArrays(inst_72776,inst_72777);
var inst_72779 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72674,inst_72778], 0));
var inst_72780 = (inst_72760 == null);
var state_72893__$1 = (function (){var statearr_73004 = state_72893;
(statearr_73004[(25)] = inst_72772);

(statearr_73004[(26)] = inst_72779);

return statearr_73004;
})();
if(cljs.core.truth_(inst_72780)){
var statearr_73005_75052 = state_72893__$1;
(statearr_73005_75052[(1)] = (104));

} else {
var statearr_73010_75053 = state_72893__$1;
(statearr_73010_75053[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (24))){
var inst_72429 = (state_72893[(27)]);
var state_72893__$1 = state_72893;
var statearr_73019_75054 = state_72893__$1;
(statearr_73019_75054[(2)] = inst_72429);

(statearr_73019_75054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (102))){
var inst_72720 = (state_72893[(28)]);
var state_72893__$1 = state_72893;
var statearr_73031_75055 = state_72893__$1;
(statearr_73031_75055[(2)] = inst_72720);

(statearr_73031_75055[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (135))){
var inst_72859 = (state_72893[(2)]);
var inst_72860 = com.wsscode.async.async_cljs.throw_err(inst_72859);
var state_72893__$1 = state_72893;
var statearr_73032_75057 = state_72893__$1;
(statearr_73032_75057[(2)] = inst_72860);

(statearr_73032_75057[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (55))){
var state_72893__$1 = state_72893;
var statearr_73034_75058 = state_72893__$1;
(statearr_73034_75058[(2)] = false);

(statearr_73034_75058[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (85))){
var state_72893__$1 = state_72893;
var statearr_73037_75059 = state_72893__$1;
(statearr_73037_75059[(2)] = false);

(statearr_73037_75059[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (39))){
var inst_72630 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73041_75060 = state_72893__$1;
(statearr_73041_75060[(2)] = inst_72630);

(statearr_73041_75060[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (88))){
var inst_72687 = (state_72893[(29)]);
var state_72893__$1 = state_72893;
var statearr_73042_75061 = state_72893__$1;
(statearr_73042_75061[(2)] = inst_72687);

(statearr_73042_75061[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (46))){
var inst_72611 = (state_72893[(20)]);
var inst_72611__$1 = (state_72893[(2)]);
var inst_72613 = com.wsscode.async.async_cljs.chan_QMARK_(inst_72611__$1);
var state_72893__$1 = (function (){var statearr_73046 = state_72893;
(statearr_73046[(20)] = inst_72611__$1);

return statearr_73046;
})();
if(inst_72613){
var statearr_73048_75062 = state_72893__$1;
(statearr_73048_75062[(1)] = (68));

} else {
var statearr_73054_75063 = state_72893__$1;
(statearr_73054_75063[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72893,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_72373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72373)){
var statearr_73055_75067 = state_72893__$1;
(statearr_73055_75067[(1)] = (5));

} else {
var statearr_73056_75068 = state_72893__$1;
(statearr_73056_75068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (77))){
var inst_72660 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73057_75069 = state_72893__$1;
(statearr_73057_75069[(2)] = inst_72660);

(statearr_73057_75069[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (106))){
var inst_72760 = (state_72893[(21)]);
var inst_72785 = (state_72893[(2)]);
var inst_72787 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_72788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72787,inst_72760);
var state_72893__$1 = (function (){var statearr_73062 = state_72893;
(statearr_73062[(30)] = inst_72785);

return statearr_73062;
})();
if(inst_72788){
var statearr_73064_75070 = state_72893__$1;
(statearr_73064_75070[(1)] = (107));

} else {
var statearr_73065_75071 = state_72893__$1;
(statearr_73065_75071[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (119))){
var state_72893__$1 = state_72893;
var statearr_73068_75072 = state_72893__$1;
(statearr_73068_75072[(2)] = false);

(statearr_73068_75072[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (95))){
var state_72893__$1 = state_72893;
var statearr_73071_75073 = state_72893__$1;
(statearr_73071_75073[(2)] = true);

(statearr_73071_75073[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (54))){
var state_72893__$1 = state_72893;
var statearr_73072_75077 = state_72893__$1;
(statearr_73072_75077[(2)] = true);

(statearr_73072_75077[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (92))){
var inst_72730 = (state_72893[(31)]);
var inst_72738 = inst_72730.cljs$lang$protocol_mask$partition0$;
var inst_72739 = (inst_72738 & (64));
var inst_72740 = inst_72730.cljs$core$ISeq$;
var inst_72741 = (cljs.core.PROTOCOL_SENTINEL === inst_72740);
var inst_72742 = ((inst_72739) || (inst_72741));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72742)){
var statearr_73076_75078 = state_72893__$1;
(statearr_73076_75078[(1)] = (95));

} else {
var statearr_73078_75079 = state_72893__$1;
(statearr_73078_75079[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (104))){
var inst_72779 = (state_72893[(26)]);
var inst_72782 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_72779,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_72893__$1 = state_72893;
var statearr_73079_75080 = state_72893__$1;
(statearr_73079_75080[(2)] = inst_72782);

(statearr_73079_75080[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (15))){
var inst_72381 = (state_72893[(32)]);
var state_72893__$1 = state_72893;
var statearr_73081_75081 = state_72893__$1;
(statearr_73081_75081[(2)] = inst_72381);

(statearr_73081_75081[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (48))){
var state_72893__$1 = state_72893;
var statearr_73083_75082 = state_72893__$1;
(statearr_73083_75082[(2)] = null);

(statearr_73083_75082[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (50))){
var inst_72561 = (state_72893[(17)]);
var inst_72505 = (state_72893[(33)]);
var inst_72540 = (state_72893[(34)]);
var inst_72507 = (state_72893[(35)]);
var inst_72556 = (state_72893[(2)]);
var inst_72561__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_72540,inst_72505,inst_72507) : mutate.call(null,inst_72540,inst_72505,inst_72507));
var inst_72563 = (inst_72561__$1 == null);
var inst_72564 = cljs.core.not(inst_72563);
var state_72893__$1 = (function (){var statearr_73089 = state_72893;
(statearr_73089[(17)] = inst_72561__$1);

(statearr_73089[(36)] = inst_72556);

return statearr_73089;
})();
if(inst_72564){
var statearr_73092_75083 = state_72893__$1;
(statearr_73092_75083[(1)] = (51));

} else {
var statearr_73094_75084 = state_72893__$1;
(statearr_73094_75084[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (116))){
var state_72893__$1 = state_72893;
var statearr_73095_75085 = state_72893__$1;
(statearr_73095_75085[(2)] = false);

(statearr_73095_75085[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (75))){
var state_72893__$1 = state_72893;
var statearr_73096_75086 = state_72893__$1;
(statearr_73096_75086[(2)] = true);

(statearr_73096_75086[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (99))){
var inst_72730 = (state_72893[(31)]);
var state_72893__$1 = state_72893;
var statearr_73097_75088 = state_72893__$1;
(statearr_73097_75088[(2)] = inst_72730);

(statearr_73097_75088[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (21))){
var state_72893__$1 = state_72893;
var statearr_73101_75089 = state_72893__$1;
(statearr_73101_75089[(2)] = false);

(statearr_73101_75089[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (31))){
var state_72893__$1 = state_72893;
var statearr_73104_75090 = state_72893__$1;
(statearr_73104_75090[(2)] = true);

(statearr_73104_75090[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (113))){
var inst_72799 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_72800 = (new Error(inst_72799));
var inst_72801 = (function(){throw inst_72800})();
var state_72893__$1 = state_72893;
var statearr_73105_75091 = state_72893__$1;
(statearr_73105_75091[(2)] = inst_72801);

(statearr_73105_75091[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (32))){
var state_72893__$1 = state_72893;
var statearr_73108_75093 = state_72893__$1;
(statearr_73108_75093[(2)] = false);

(statearr_73108_75093[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (40))){
var inst_72525 = (state_72893[(37)]);
var inst_72529 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_72525,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_72893__$1 = state_72893;
var statearr_73110_75094 = state_72893__$1;
(statearr_73110_75094[(2)] = inst_72529);

(statearr_73110_75094[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (129))){
var inst_72844 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_72845 = (new Error(inst_72844));
var inst_72846 = (function(){throw inst_72845})();
var state_72893__$1 = state_72893;
var statearr_73112_75095 = state_72893__$1;
(statearr_73112_75095[(2)] = inst_72846);

(statearr_73112_75095[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (91))){
var inst_72871 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73116_75097 = state_72893__$1;
(statearr_73116_75097[(2)] = inst_72871);

(statearr_73116_75097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (117))){
var inst_72823 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72823)){
var statearr_73123_75099 = state_72893__$1;
(statearr_73123_75099[(1)] = (121));

} else {
var statearr_73125_75100 = state_72893__$1;
(statearr_73125_75100[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (108))){
var inst_72785 = (state_72893[(30)]);
var state_72893__$1 = state_72893;
var statearr_73128_75101 = state_72893__$1;
(statearr_73128_75101[(2)] = inst_72785);

(statearr_73128_75101[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (56))){
var inst_72574 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73134_75102 = state_72893__$1;
(statearr_73134_75102[(2)] = inst_72574);

(statearr_73134_75102[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (33))){
var inst_72495 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73138_75103 = state_72893__$1;
(statearr_73138_75103[(2)] = inst_72495);

(statearr_73138_75103[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (13))){
var inst_72396 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73139_75104 = state_72893__$1;
(statearr_73139_75104[(2)] = inst_72396);

(statearr_73139_75104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (22))){
var inst_72448 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73147_75105 = state_72893__$1;
(statearr_73147_75105[(2)] = inst_72448);

(statearr_73147_75105[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (90))){
var inst_72730 = (state_72893[(31)]);
var inst_72721 = (state_72893[(38)]);
var inst_72729 = cljs.core.seq(inst_72721);
var inst_72730__$1 = cljs.core.first(inst_72729);
var inst_72731 = cljs.core.next(inst_72729);
var inst_72734 = (inst_72730__$1 == null);
var inst_72735 = cljs.core.not(inst_72734);
var state_72893__$1 = (function (){var statearr_73154 = state_72893;
(statearr_73154[(31)] = inst_72730__$1);

(statearr_73154[(39)] = inst_72731);

return statearr_73154;
})();
if(inst_72735){
var statearr_73155_75106 = state_72893__$1;
(statearr_73155_75106[(1)] = (92));

} else {
var statearr_73156_75107 = state_72893__$1;
(statearr_73156_75107[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (109))){
var inst_72762 = (state_72893[(40)]);
var inst_72794 = (state_72893[(2)]);
var state_72893__$1 = (function (){var statearr_73160 = state_72893;
(statearr_73160[(13)] = inst_72794);

return statearr_73160;
})();
var G__73163_75110 = inst_72762;
var G__73163_75111__$1 = (((G__73163_75110 instanceof cljs.core.Keyword))?G__73163_75110.fqn:null);
switch (G__73163_75111__$1) {
case "call":
var statearr_73167_75114 = state_72893__$1;
(statearr_73167_75114[(1)] = (111));


break;
case "prop":
case "join":
case "union":
var statearr_73169_75115 = state_72893__$1;
(statearr_73169_75115[(1)] = (127));


break;
default:
var statearr_73170_75116 = state_72893__$1;
(statearr_73170_75116[(1)] = (131));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (36))){
var inst_72503 = (state_72893[(10)]);
var inst_72503__$1 = (state_72893[(2)]);
var inst_72504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72503__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_72505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72503__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_72506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72503__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_72507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72503__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_72893__$1 = (function (){var statearr_73174 = state_72893;
(statearr_73174[(33)] = inst_72505);

(statearr_73174[(41)] = inst_72506);

(statearr_73174[(10)] = inst_72503__$1);

(statearr_73174[(42)] = inst_72504);

(statearr_73174[(35)] = inst_72507);

return statearr_73174;
})();
if(cljs.core.truth_(inst_72503__$1)){
var statearr_73175_75117 = state_72893__$1;
(statearr_73175_75117[(1)] = (37));

} else {
var statearr_73177_75118 = state_72893__$1;
(statearr_73177_75118[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (41))){
var inst_72525 = (state_72893[(37)]);
var state_72893__$1 = state_72893;
var statearr_73180_75119 = state_72893__$1;
(statearr_73180_75119[(2)] = inst_72525);

(statearr_73180_75119[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (118))){
var state_72893__$1 = state_72893;
var statearr_73182_75120 = state_72893__$1;
(statearr_73182_75120[(2)] = true);

(statearr_73182_75120[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (89))){
var inst_72685 = (state_72893[(43)]);
var inst_72670 = (state_72893[(44)]);
var inst_72712 = (state_72893[(2)]);
var inst_72713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72712,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_72715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72712,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_72716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72712,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_72717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72712,new cljs.core.Keyword(null,"params","params",710516235));
var inst_72720 = inst_72685;
var inst_72721 = inst_72670;
var state_72893__$1 = (function (){var statearr_73183 = state_72893;
(statearr_73183[(45)] = inst_72713);

(statearr_73183[(46)] = inst_72716);

(statearr_73183[(28)] = inst_72720);

(statearr_73183[(38)] = inst_72721);

(statearr_73183[(47)] = inst_72717);

(statearr_73183[(48)] = inst_72715);

return statearr_73183;
})();
var statearr_73184_75121 = state_72893__$1;
(statearr_73184_75121[(2)] = null);

(statearr_73184_75121[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (100))){
var inst_72756 = (state_72893[(23)]);
var inst_72756__$1 = (state_72893[(2)]);
var inst_72760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72756__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_72761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72756__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_72762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72756__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_72763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72756__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_72893__$1 = (function (){var statearr_73188 = state_72893;
(statearr_73188[(21)] = inst_72760);

(statearr_73188[(23)] = inst_72756__$1);

(statearr_73188[(49)] = inst_72763);

(statearr_73188[(40)] = inst_72762);

(statearr_73188[(24)] = inst_72761);

return statearr_73188;
})();
if(cljs.core.truth_(inst_72756__$1)){
var statearr_73189_75126 = state_72893__$1;
(statearr_73189_75126[(1)] = (101));

} else {
var statearr_73191_75128 = state_72893__$1;
(statearr_73191_75128[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (131))){
var state_72893__$1 = state_72893;
var statearr_73195_75129 = state_72893__$1;
(statearr_73195_75129[(2)] = null);

(statearr_73195_75129[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (122))){
var inst_72806 = (state_72893[(7)]);
var state_72893__$1 = state_72893;
var statearr_73197_75130 = state_72893__$1;
(statearr_73197_75130[(2)] = inst_72806);

(statearr_73197_75130[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (43))){
var inst_72416 = (state_72893[(50)]);
var inst_72532 = (state_72893[(51)]);
var inst_72536 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72532,new cljs.core.Keyword(null,"query","query",-1288509510),inst_72416);
var state_72893__$1 = state_72893;
var statearr_73199_75131 = state_72893__$1;
(statearr_73199_75131[(2)] = inst_72536);

(statearr_73199_75131[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (61))){
var state_72893__$1 = state_72893;
var statearr_73200_75135 = state_72893__$1;
(statearr_73200_75135[(2)] = null);

(statearr_73200_75135[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (29))){
var state_72893__$1 = state_72893;
var statearr_73203_75136 = state_72893__$1;
(statearr_73203_75136[(2)] = false);

(statearr_73203_75136[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (44))){
var inst_72532 = (state_72893[(51)]);
var state_72893__$1 = state_72893;
var statearr_73207_75137 = state_72893__$1;
(statearr_73207_75137[(2)] = inst_72532);

(statearr_73207_75137[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (93))){
var state_72893__$1 = state_72893;
var statearr_73208_75138 = state_72893__$1;
(statearr_73208_75138[(2)] = false);

(statearr_73208_75138[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (6))){
var inst_72642 = (state_72893[(16)]);
var inst_72642__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_72646 = (inst_72642__$1 == null);
var inst_72647 = cljs.core.not(inst_72646);
var state_72893__$1 = (function (){var statearr_73209 = state_72893;
(statearr_73209[(16)] = inst_72642__$1);

return statearr_73209;
})();
if(inst_72647){
var statearr_73210_75139 = state_72893__$1;
(statearr_73210_75139[(1)] = (72));

} else {
var statearr_73212_75140 = state_72893__$1;
(statearr_73212_75140[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (111))){
var state_72893__$1 = state_72893;
if(cljs.core.truth_(mutate)){
var statearr_73215_75141 = state_72893__$1;
(statearr_73215_75141[(1)] = (112));

} else {
var statearr_73216_75142 = state_72893__$1;
(statearr_73216_75142[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (28))){
var inst_72477 = (state_72893[(52)]);
var inst_72486 = inst_72477.cljs$lang$protocol_mask$partition0$;
var inst_72487 = (inst_72486 & (64));
var inst_72489 = inst_72477.cljs$core$ISeq$;
var inst_72490 = (cljs.core.PROTOCOL_SENTINEL === inst_72489);
var inst_72491 = ((inst_72487) || (inst_72490));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72491)){
var statearr_73217_75147 = state_72893__$1;
(statearr_73217_75147[(1)] = (31));

} else {
var statearr_73220_75151 = state_72893__$1;
(statearr_73220_75151[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (134))){
var inst_72756 = (state_72893[(23)]);
var inst_72720 = (state_72893[(28)]);
var inst_72731 = (state_72893[(39)]);
var inst_72863 = (state_72893[(2)]);
var inst_72864 = com.wsscode.pathom.parser.ast__GT_out_key(inst_72756);
var inst_72865 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72720,inst_72864,inst_72863);
var inst_72720__$1 = inst_72865;
var inst_72721 = inst_72731;
var state_72893__$1 = (function (){var statearr_73223 = state_72893;
(statearr_73223[(28)] = inst_72720__$1);

(statearr_73223[(38)] = inst_72721);

return statearr_73223;
})();
var statearr_73224_75162 = state_72893__$1;
(statearr_73224_75162[(2)] = null);

(statearr_73224_75162[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (64))){
var state_72893__$1 = state_72893;
var statearr_73225_75163 = state_72893__$1;
(statearr_73225_75163[(2)] = null);

(statearr_73225_75163[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (103))){
var inst_72869 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73227_75165 = state_72893__$1;
(statearr_73227_75165[(2)] = inst_72869);

(statearr_73227_75165[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (51))){
var inst_72561 = (state_72893[(17)]);
var inst_72566 = inst_72561.cljs$lang$protocol_mask$partition0$;
var inst_72567 = (inst_72566 & (64));
var inst_72568 = inst_72561.cljs$core$ISeq$;
var inst_72569 = (cljs.core.PROTOCOL_SENTINEL === inst_72568);
var inst_72570 = ((inst_72567) || (inst_72569));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72570)){
var statearr_73228_75166 = state_72893__$1;
(statearr_73228_75166[(1)] = (54));

} else {
var statearr_73229_75168 = state_72893__$1;
(statearr_73229_75168[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (25))){
var inst_72427 = (state_72893[(53)]);
var inst_72414 = (state_72893[(54)]);
var inst_72456 = (state_72893[(2)]);
var inst_72457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72456,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_72458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72456,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_72459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72456,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_72464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72456,new cljs.core.Keyword(null,"params","params",710516235));
var inst_72468 = inst_72427;
var inst_72469 = inst_72414;
var state_72893__$1 = (function (){var statearr_73235 = state_72893;
(statearr_73235[(55)] = inst_72458);

(statearr_73235[(56)] = inst_72459);

(statearr_73235[(8)] = inst_72468);

(statearr_73235[(11)] = inst_72469);

(statearr_73235[(57)] = inst_72464);

(statearr_73235[(58)] = inst_72457);

return statearr_73235;
})();
var statearr_73236_75171 = state_72893__$1;
(statearr_73236_75171[(2)] = null);

(statearr_73236_75171[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (34))){
var inst_72477 = (state_72893[(52)]);
var inst_72500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72477);
var state_72893__$1 = state_72893;
var statearr_73238_75174 = state_72893__$1;
(statearr_73238_75174[(2)] = inst_72500);

(statearr_73238_75174[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (125))){
var state_72893__$1 = state_72893;
var statearr_73239_75175 = state_72893__$1;
(statearr_73239_75175[(2)] = null);

(statearr_73239_75175[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (17))){
var inst_72429 = (state_72893[(27)]);
var inst_72439 = inst_72429.cljs$lang$protocol_mask$partition0$;
var inst_72440 = (inst_72439 & (64));
var inst_72442 = inst_72429.cljs$core$ISeq$;
var inst_72443 = (cljs.core.PROTOCOL_SENTINEL === inst_72442);
var inst_72444 = ((inst_72440) || (inst_72443));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72444)){
var statearr_73245_75178 = state_72893__$1;
(statearr_73245_75178[(1)] = (20));

} else {
var statearr_73246_75179 = state_72893__$1;
(statearr_73246_75179[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (3))){
var inst_72368 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73247_75180 = state_72893__$1;
(statearr_73247_75180[(2)] = inst_72368);


cljs.core.async.impl.ioc_helpers.process_exception(state_72893__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (12))){
var state_72893__$1 = state_72893;
var statearr_73251_75182 = state_72893__$1;
(statearr_73251_75182[(2)] = false);

(statearr_73251_75182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (2))){
var inst_72876 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72893__$1,inst_72876);
} else {
if((state_val_72896 === (66))){
var inst_72540 = (state_72893[(34)]);
var inst_72597 = (state_72893[(2)]);
var inst_72598 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_72540) : read.call(null,inst_72540));
var state_72893__$1 = (function (){var statearr_73252 = state_72893;
(statearr_73252[(59)] = inst_72597);

return statearr_73252;
})();
var statearr_73253_75185 = state_72893__$1;
(statearr_73253_75185[(2)] = inst_72598);

(statearr_73253_75185[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (107))){
var inst_72673 = (state_72893[(60)]);
var inst_72785 = (state_72893[(30)]);
var inst_72791 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_72785,new cljs.core.Keyword(null,"query","query",-1288509510),inst_72673);
var state_72893__$1 = state_72893;
var statearr_73255_75187 = state_72893__$1;
(statearr_73255_75187[(2)] = inst_72791);

(statearr_73255_75187[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (23))){
var inst_72429 = (state_72893[(27)]);
var inst_72453 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72429);
var state_72893__$1 = state_72893;
var statearr_73257_75188 = state_72893__$1;
(statearr_73257_75188[(2)] = inst_72453);

(statearr_73257_75188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (47))){
var state_72893__$1 = state_72893;
if(cljs.core.truth_(mutate)){
var statearr_73260_75189 = state_72893__$1;
(statearr_73260_75189[(1)] = (48));

} else {
var statearr_73264_75190 = state_72893__$1;
(statearr_73264_75190[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (35))){
var inst_72477 = (state_72893[(52)]);
var state_72893__$1 = state_72893;
var statearr_73265_75191 = state_72893__$1;
(statearr_73265_75191[(2)] = inst_72477);

(statearr_73265_75191[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (127))){
var state_72893__$1 = state_72893;
if(cljs.core.truth_(read)){
var statearr_73266_75192 = state_72893__$1;
(statearr_73266_75192[(1)] = (128));

} else {
var statearr_73267_75193 = state_72893__$1;
(statearr_73267_75193[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (82))){
var state_72893__$1 = state_72893;
var statearr_73268_75194 = state_72893__$1;
(statearr_73268_75194[(2)] = false);

(statearr_73268_75194[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (76))){
var state_72893__$1 = state_72893;
var statearr_73269_75195 = state_72893__$1;
(statearr_73269_75195[(2)] = false);

(statearr_73269_75195[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (97))){
var inst_72747 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73271_75196 = state_72893__$1;
(statearr_73271_75196[(2)] = inst_72747);

(statearr_73271_75196[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (19))){
var inst_72451 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72451)){
var statearr_73273_75197 = state_72893__$1;
(statearr_73273_75197[(1)] = (23));

} else {
var statearr_73274_75198 = state_72893__$1;
(statearr_73274_75198[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (57))){
var inst_72561 = (state_72893[(17)]);
var inst_72579 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72561);
var state_72893__$1 = state_72893;
var statearr_73275_75199 = state_72893__$1;
(statearr_73275_75199[(2)] = inst_72579);

(statearr_73275_75199[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (68))){
var inst_72611 = (state_72893[(20)]);
var state_72893__$1 = state_72893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72893__$1,(71),inst_72611);
} else {
if((state_val_72896 === (11))){
var state_72893__$1 = state_72893;
var statearr_73278_75201 = state_72893__$1;
(statearr_73278_75201[(2)] = true);

(statearr_73278_75201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (115))){
var inst_72806 = (state_72893[(7)]);
var inst_72812 = inst_72806.cljs$lang$protocol_mask$partition0$;
var inst_72813 = (inst_72812 & (64));
var inst_72814 = inst_72806.cljs$core$ISeq$;
var inst_72815 = (cljs.core.PROTOCOL_SENTINEL === inst_72814);
var inst_72816 = ((inst_72813) || (inst_72815));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72816)){
var statearr_73281_75203 = state_72893__$1;
(statearr_73281_75203[(1)] = (118));

} else {
var statearr_73283_75206 = state_72893__$1;
(statearr_73283_75206[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (9))){
var state_72893__$1 = state_72893;
var statearr_73284_75207 = state_72893__$1;
(statearr_73284_75207[(2)] = false);

(statearr_73284_75207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (5))){
var inst_72381 = (state_72893[(32)]);
var inst_72375 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_72376 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_72377 = cljs.core.PersistentHashMap.fromArrays(inst_72375,inst_72376);
var inst_72378 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_72377);
var inst_72381__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_72383 = (inst_72381__$1 == null);
var inst_72384 = cljs.core.not(inst_72383);
var state_72893__$1 = (function (){var statearr_73287 = state_72893;
(statearr_73287[(32)] = inst_72381__$1);

(statearr_73287[(18)] = inst_72378);

return statearr_73287;
})();
if(inst_72384){
var statearr_73288_75209 = state_72893__$1;
(statearr_73288_75209[(1)] = (8));

} else {
var statearr_73289_75210 = state_72893__$1;
(statearr_73289_75210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (112))){
var state_72893__$1 = state_72893;
var statearr_73291_75211 = state_72893__$1;
(statearr_73291_75211[(2)] = null);

(statearr_73291_75211[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (83))){
var inst_72707 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72707)){
var statearr_73293_75212 = state_72893__$1;
(statearr_73293_75212[(1)] = (87));

} else {
var statearr_73294_75213 = state_72893__$1;
(statearr_73294_75213[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (14))){
var inst_72381 = (state_72893[(32)]);
var inst_72408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72381);
var state_72893__$1 = state_72893;
var statearr_73297_75214 = state_72893__$1;
(statearr_73297_75214[(2)] = inst_72408);

(statearr_73297_75214[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (45))){
var inst_72506 = (state_72893[(41)]);
var inst_72540 = (state_72893[(2)]);
var state_72893__$1 = (function (){var statearr_73298 = state_72893;
(statearr_73298[(34)] = inst_72540);

return statearr_73298;
})();
var G__73299_75219 = inst_72506;
var G__73299_75220__$1 = (((G__73299_75219 instanceof cljs.core.Keyword))?G__73299_75219.fqn:null);
switch (G__73299_75220__$1) {
case "call":
var statearr_73300_75222 = state_72893__$1;
(statearr_73300_75222[(1)] = (47));


break;
case "prop":
case "join":
case "union":
var statearr_73301_75223 = state_72893__$1;
(statearr_73301_75223[(1)] = (63));


break;
default:
var statearr_73302_75224 = state_72893__$1;
(statearr_73302_75224[(1)] = (67));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (53))){
var inst_72577 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72577)){
var statearr_73303_75225 = state_72893__$1;
(statearr_73303_75225[(1)] = (57));

} else {
var statearr_73304_75226 = state_72893__$1;
(statearr_73304_75226[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (78))){
var inst_72642 = (state_72893[(16)]);
var inst_72665 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72642);
var state_72893__$1 = state_72893;
var statearr_73305_75227 = state_72893__$1;
(statearr_73305_75227[(2)] = inst_72665);

(statearr_73305_75227[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (132))){
var inst_72853 = (state_72893[(12)]);
var state_72893__$1 = state_72893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72893__$1,(135),inst_72853);
} else {
if((state_val_72896 === (26))){
var inst_72469 = (state_72893[(11)]);
var inst_72477 = (state_72893[(52)]);
var inst_72476 = cljs.core.seq(inst_72469);
var inst_72477__$1 = cljs.core.first(inst_72476);
var inst_72478 = cljs.core.next(inst_72476);
var inst_72480 = (inst_72477__$1 == null);
var inst_72481 = cljs.core.not(inst_72480);
var state_72893__$1 = (function (){var statearr_73308 = state_72893;
(statearr_73308[(52)] = inst_72477__$1);

(statearr_73308[(9)] = inst_72478);

return statearr_73308;
})();
if(inst_72481){
var statearr_73309_75228 = state_72893__$1;
(statearr_73309_75228[(1)] = (28));

} else {
var statearr_73310_75229 = state_72893__$1;
(statearr_73310_75229[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (123))){
var inst_72830 = (state_72893[(61)]);
var inst_72828 = (state_72893[(2)]);
var inst_72830__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72828,new cljs.core.Keyword(null,"action","action",-811238024));
var state_72893__$1 = (function (){var statearr_73312 = state_72893;
(statearr_73312[(61)] = inst_72830__$1);

return statearr_73312;
})();
if(cljs.core.truth_(inst_72830__$1)){
var statearr_73313_75231 = state_72893__$1;
(statearr_73313_75231[(1)] = (124));

} else {
var statearr_73314_75232 = state_72893__$1;
(statearr_73314_75232[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (16))){
var inst_72416 = (state_72893[(50)]);
var inst_72414 = (state_72893[(54)]);
var inst_72429 = (state_72893[(27)]);
var inst_72412 = (state_72893[(2)]);
var inst_72414__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72412,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_72416__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_72412);
var inst_72417 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_72416__$1], 0));
var inst_72427 = cljs.core.PersistentHashMap.EMPTY;
var inst_72428 = cljs.core.seq(inst_72414__$1);
var inst_72429__$1 = cljs.core.first(inst_72428);
var inst_72430 = cljs.core.next(inst_72428);
var inst_72434 = (inst_72429__$1 == null);
var inst_72435 = cljs.core.not(inst_72434);
var state_72893__$1 = (function (){var statearr_73319 = state_72893;
(statearr_73319[(50)] = inst_72416__$1);

(statearr_73319[(53)] = inst_72427);

(statearr_73319[(62)] = inst_72430);

(statearr_73319[(54)] = inst_72414__$1);

(statearr_73319[(63)] = inst_72417);

(statearr_73319[(27)] = inst_72429__$1);

return statearr_73319;
})();
if(inst_72435){
var statearr_73320_75236 = state_72893__$1;
(statearr_73320_75236[(1)] = (17));

} else {
var statearr_73321_75237 = state_72893__$1;
(statearr_73321_75237[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (133))){
var inst_72853 = (state_72893[(12)]);
var state_72893__$1 = state_72893;
var statearr_73325_75238 = state_72893__$1;
(statearr_73325_75238[(2)] = inst_72853);

(statearr_73325_75238[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (81))){
var inst_72687 = (state_72893[(29)]);
var inst_72695 = inst_72687.cljs$lang$protocol_mask$partition0$;
var inst_72696 = (inst_72695 & (64));
var inst_72698 = inst_72687.cljs$core$ISeq$;
var inst_72699 = (cljs.core.PROTOCOL_SENTINEL === inst_72698);
var inst_72700 = ((inst_72696) || (inst_72699));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72700)){
var statearr_73329_75239 = state_72893__$1;
(statearr_73329_75239[(1)] = (84));

} else {
var statearr_73330_75240 = state_72893__$1;
(statearr_73330_75240[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (120))){
var inst_72820 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73331_75241 = state_72893__$1;
(statearr_73331_75241[(2)] = inst_72820);

(statearr_73331_75241[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (79))){
var inst_72642 = (state_72893[(16)]);
var state_72893__$1 = state_72893;
var statearr_73332_75242 = state_72893__$1;
(statearr_73332_75242[(2)] = inst_72642);

(statearr_73332_75242[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (38))){
var inst_72468 = (state_72893[(8)]);
var state_72893__$1 = state_72893;
var statearr_73336_75243 = state_72893__$1;
(statearr_73336_75243[(2)] = inst_72468);

(statearr_73336_75243[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (126))){
var inst_72835 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
var statearr_73340_75244 = state_72893__$1;
(statearr_73340_75244[(2)] = inst_72835);

(statearr_73340_75244[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (98))){
var inst_72730 = (state_72893[(31)]);
var inst_72753 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72730);
var state_72893__$1 = state_72893;
var statearr_73341_75245 = state_72893__$1;
(statearr_73341_75245[(2)] = inst_72753);

(statearr_73341_75245[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (124))){
var inst_72830 = (state_72893[(61)]);
var inst_72832 = (inst_72830.cljs$core$IFn$_invoke$arity$0 ? inst_72830.cljs$core$IFn$_invoke$arity$0() : inst_72830.call(null));
var state_72893__$1 = state_72893;
var statearr_73345_75248 = state_72893__$1;
(statearr_73345_75248[(2)] = inst_72832);

(statearr_73345_75248[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (87))){
var inst_72687 = (state_72893[(29)]);
var inst_72709 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_72687);
var state_72893__$1 = state_72893;
var statearr_73347_75249 = state_72893__$1;
(statearr_73347_75249[(2)] = inst_72709);

(statearr_73347_75249[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (30))){
var inst_72498 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72498)){
var statearr_73348_75250 = state_72893__$1;
(statearr_73348_75250[(1)] = (34));

} else {
var statearr_73349_75251 = state_72893__$1;
(statearr_73349_75251[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (73))){
var state_72893__$1 = state_72893;
var statearr_73354_75252 = state_72893__$1;
(statearr_73354_75252[(2)] = false);

(statearr_73354_75252[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (96))){
var state_72893__$1 = state_72893;
var statearr_73357_75255 = state_72893__$1;
(statearr_73357_75255[(2)] = false);

(statearr_73357_75255[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (10))){
var inst_72404 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72404)){
var statearr_73358_75257 = state_72893__$1;
(statearr_73358_75257[(1)] = (14));

} else {
var statearr_73359_75258 = state_72893__$1;
(statearr_73359_75258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (18))){
var state_72893__$1 = state_72893;
var statearr_73360_75259 = state_72893__$1;
(statearr_73360_75259[(2)] = false);

(statearr_73360_75259[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (105))){
var inst_72779 = (state_72893[(26)]);
var state_72893__$1 = state_72893;
var statearr_73363_75262 = state_72893__$1;
(statearr_73363_75262[(2)] = inst_72779);

(statearr_73363_75262[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (52))){
var state_72893__$1 = state_72893;
var statearr_73365_75263 = state_72893__$1;
(statearr_73365_75263[(2)] = false);

(statearr_73365_75263[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (114))){
var inst_72763 = (state_72893[(49)]);
var inst_72806 = (state_72893[(7)]);
var inst_72794 = (state_72893[(13)]);
var inst_72761 = (state_72893[(24)]);
var inst_72803 = (state_72893[(2)]);
var inst_72806__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_72794,inst_72761,inst_72763) : mutate.call(null,inst_72794,inst_72761,inst_72763));
var inst_72809 = (inst_72806__$1 == null);
var inst_72810 = cljs.core.not(inst_72809);
var state_72893__$1 = (function (){var statearr_73367 = state_72893;
(statearr_73367[(7)] = inst_72806__$1);

(statearr_73367[(64)] = inst_72803);

return statearr_73367;
})();
if(inst_72810){
var statearr_73368_75282 = state_72893__$1;
(statearr_73368_75282[(1)] = (115));

} else {
var statearr_73369_75283 = state_72893__$1;
(statearr_73369_75283[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (67))){
var state_72893__$1 = state_72893;
var statearr_73376_75284 = state_72893__$1;
(statearr_73376_75284[(2)] = null);

(statearr_73376_75284[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (71))){
var inst_72616 = (state_72893[(2)]);
var inst_72617 = com.wsscode.async.async_cljs.throw_err(inst_72616);
var state_72893__$1 = state_72893;
var statearr_73379_75285 = state_72893__$1;
(statearr_73379_75285[(2)] = inst_72617);

(statearr_73379_75285[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (42))){
var inst_72504 = (state_72893[(42)]);
var inst_72532 = (state_72893[(2)]);
var inst_72533 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_72534 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72533,inst_72504);
var state_72893__$1 = (function (){var statearr_73382 = state_72893;
(statearr_73382[(51)] = inst_72532);

return statearr_73382;
})();
if(inst_72534){
var statearr_73385_75287 = state_72893__$1;
(statearr_73385_75287[(1)] = (43));

} else {
var statearr_73387_75288 = state_72893__$1;
(statearr_73387_75288[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (80))){
var inst_72673 = (state_72893[(60)]);
var inst_72670 = (state_72893[(44)]);
var inst_72687 = (state_72893[(29)]);
var inst_72668 = (state_72893[(2)]);
var inst_72670__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72668,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_72673__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_72668);
var inst_72674 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_72673__$1], 0));
var inst_72685 = cljs.core.PersistentHashMap.EMPTY;
var inst_72686 = cljs.core.seq(inst_72670__$1);
var inst_72687__$1 = cljs.core.first(inst_72686);
var inst_72688 = cljs.core.next(inst_72686);
var inst_72690 = (inst_72687__$1 == null);
var inst_72691 = cljs.core.not(inst_72690);
var state_72893__$1 = (function (){var statearr_73393 = state_72893;
(statearr_73393[(43)] = inst_72685);

(statearr_73393[(22)] = inst_72674);

(statearr_73393[(60)] = inst_72673__$1);

(statearr_73393[(65)] = inst_72688);

(statearr_73393[(44)] = inst_72670__$1);

(statearr_73393[(29)] = inst_72687__$1);

return statearr_73393;
})();
if(inst_72691){
var statearr_73394_75293 = state_72893__$1;
(statearr_73394_75293[(1)] = (81));

} else {
var statearr_73396_75294 = state_72893__$1;
(statearr_73396_75294[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (37))){
var inst_72505 = (state_72893[(33)]);
var inst_72417 = (state_72893[(63)]);
var inst_72503 = (state_72893[(10)]);
var inst_72504 = (state_72893[(42)]);
var inst_72513 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_72514 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_72505];
var inst_72515 = cljs.core.PersistentHashMap.fromArrays(inst_72513,inst_72514);
var inst_72516 = com.wsscode.pathom.trace.trace(inst_72417,inst_72515);
var inst_72521 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_72523 = [inst_72503,inst_72504];
var inst_72524 = cljs.core.PersistentHashMap.fromArrays(inst_72521,inst_72523);
var inst_72525 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_72417,inst_72524], 0));
var inst_72527 = (inst_72504 == null);
var state_72893__$1 = (function (){var statearr_73400 = state_72893;
(statearr_73400[(66)] = inst_72516);

(statearr_73400[(37)] = inst_72525);

return statearr_73400;
})();
if(cljs.core.truth_(inst_72527)){
var statearr_73401_75298 = state_72893__$1;
(statearr_73401_75298[(1)] = (40));

} else {
var statearr_73402_75299 = state_72893__$1;
(statearr_73402_75299[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (63))){
var state_72893__$1 = state_72893;
if(cljs.core.truth_(read)){
var statearr_73406_75301 = state_72893__$1;
(statearr_73406_75301[(1)] = (64));

} else {
var statearr_73409_75302 = state_72893__$1;
(statearr_73409_75302[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (94))){
var inst_72750 = (state_72893[(2)]);
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72750)){
var statearr_73411_75305 = state_72893__$1;
(statearr_73411_75305[(1)] = (98));

} else {
var statearr_73412_75306 = state_72893__$1;
(statearr_73412_75306[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (8))){
var inst_72381 = (state_72893[(32)]);
var inst_72388 = inst_72381.cljs$lang$protocol_mask$partition0$;
var inst_72389 = (inst_72388 & (64));
var inst_72390 = inst_72381.cljs$core$ISeq$;
var inst_72391 = (cljs.core.PROTOCOL_SENTINEL === inst_72390);
var inst_72392 = ((inst_72389) || (inst_72391));
var state_72893__$1 = state_72893;
if(cljs.core.truth_(inst_72392)){
var statearr_73416_75307 = state_72893__$1;
(statearr_73416_75307[(1)] = (11));

} else {
var statearr_73417_75309 = state_72893__$1;
(statearr_73417_75309[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (49))){
var inst_72552 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_72553 = (new Error(inst_72552));
var inst_72554 = (function(){throw inst_72553})();
var state_72893__$1 = state_72893;
var statearr_73421_75310 = state_72893__$1;
(statearr_73421_75310[(2)] = inst_72554);

(statearr_73421_75310[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72896 === (84))){
var state_72893__$1 = state_72893;
var statearr_73422_75311 = state_72893__$1;
(statearr_73422_75311[(2)] = true);

(statearr_73422_75311[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51169__auto__,map__72363,map__72363__$1,read,mutate))
;
return ((function (switch__50952__auto__,c__51169__auto__,map__72363,map__72363__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto____0 = (function (){
var statearr_73433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73433[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto__);

(statearr_73433[(1)] = (1));

return statearr_73433;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto____1 = (function (state_72893){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_72893);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e73438){if((e73438 instanceof Object)){
var ex__50956__auto__ = e73438;
var statearr_73439_75314 = state_72893;
(statearr_73439_75314[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75319 = state_72893;
state_72893 = G__75319;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto__ = function(state_72893){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto____1.call(this,state_72893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,map__72363,map__72363__$1,read,mutate))
})();
var state__51171__auto__ = (function (){var statearr_73443 = f__51170__auto__();
(statearr_73443[(6)] = c__51169__auto__);

return statearr_73443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,map__72363,map__72363__$1,read,mutate))
);

return c__51169__auto__;
});
;})(map__72363,map__72363__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__73453,key){
var map__73458 = p__73453;
var map__73458__$1 = (((((!((map__73458 == null))))?(((((map__73458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73458):map__73458);
var env = map__73458__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73458__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73458__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__51169__auto___75330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto___75330,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto___75330,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_73498){
var state_val_73499 = (state_73498[(1)]);
if((state_val_73499 === (1))){
var inst_73465 = cljs.core.async.timeout((1));
var state_73498__$1 = state_73498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73498__$1,(2),inst_73465);
} else {
if((state_val_73499 === (2))){
var inst_73467 = (state_73498[(2)]);
var inst_73468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_73469 = cljs.core.deref(inst_73468);
var inst_73470 = cljs.core.contains_QMARK_(inst_73469,key);
var state_73498__$1 = (function (){var statearr_73510 = state_73498;
(statearr_73510[(7)] = inst_73467);

return statearr_73510;
})();
if(inst_73470){
var statearr_73512_75332 = state_73498__$1;
(statearr_73512_75332[(1)] = (3));

} else {
var statearr_73514_75334 = state_73498__$1;
(statearr_73514_75334[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73499 === (3))){
var inst_73473 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_73474 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_73475 = cljs.core.PersistentHashMap.fromArrays(inst_73473,inst_73474);
var inst_73476 = com.wsscode.pathom.trace.trace(env,inst_73475);
var inst_73477 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_73488 = [key];
var inst_73489 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_73488);
var inst_73490 = [inst_73489];
var inst_73491 = cljs.core.PersistentHashMap.fromArrays(inst_73477,inst_73490);
var inst_73492 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_73491);
var inst_73493 = cljs.core.async.close_BANG_(ch);
var state_73498__$1 = (function (){var statearr_73516 = state_73498;
(statearr_73516[(8)] = inst_73476);

(statearr_73516[(9)] = inst_73492);

return statearr_73516;
})();
var statearr_73517_75338 = state_73498__$1;
(statearr_73517_75338[(2)] = inst_73493);

(statearr_73517_75338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73499 === (4))){
var state_73498__$1 = state_73498;
var statearr_73523_75339 = state_73498__$1;
(statearr_73523_75339[(2)] = null);

(statearr_73523_75339[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73499 === (5))){
var inst_73496 = (state_73498[(2)]);
var state_73498__$1 = state_73498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73498__$1,inst_73496);
} else {
return null;
}
}
}
}
}
});})(c__51169__auto___75330,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__50952__auto__,c__51169__auto___75330,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____0 = (function (){
var statearr_73528 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73528[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__);

(statearr_73528[(1)] = (1));

return statearr_73528;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____1 = (function (state_73498){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_73498);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e73529){if((e73529 instanceof Object)){
var ex__50956__auto__ = e73529;
var statearr_73532_75341 = state_73498;
(statearr_73532_75341[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73529;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75344 = state_73498;
state_73498 = G__75344;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__ = function(state_73498){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____1.call(this,state_73498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto___75330,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__51171__auto__ = (function (){var statearr_73534 = f__51170__auto__();
(statearr_73534[(6)] = c__51169__auto___75330);

return statearr_73534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto___75330,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout))
);


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_73568){
var state_val_73569 = (state_73568[(1)]);
if((state_val_73569 === (1))){
var inst_73540 = (state_73568[(7)]);
var inst_73540__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_73546 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73547 = [ch,inst_73540__$1];
var inst_73548 = (new cljs.core.PersistentVector(null,2,(5),inst_73546,inst_73547,null));
var state_73568__$1 = (function (){var statearr_73576 = state_73568;
(statearr_73576[(7)] = inst_73540__$1);

return statearr_73576;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_73568__$1,(2),inst_73548,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_73569 === (2))){
var inst_73540 = (state_73568[(7)]);
var inst_73550 = (state_73568[(2)]);
var inst_73552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73550,(0),null);
var inst_73553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73550,(1),null);
var inst_73554 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73553,inst_73540);
var state_73568__$1 = (function (){var statearr_73584 = state_73568;
(statearr_73584[(8)] = inst_73552);

return statearr_73584;
})();
if(inst_73554){
var statearr_73585_75365 = state_73568__$1;
(statearr_73585_75365[(1)] = (3));

} else {
var statearr_73586_75366 = state_73568__$1;
(statearr_73586_75366[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73569 === (3))){
var inst_73556 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_73557 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_73558 = cljs.core.PersistentHashMap.fromArrays(inst_73556,inst_73557);
var inst_73559 = com.wsscode.pathom.trace.trace(env,inst_73558);
var inst_73560 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_73561 = cljs.core.PersistentHashSet.EMPTY;
var inst_73562 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_73561];
var inst_73563 = cljs.core.PersistentHashMap.fromArrays(inst_73560,inst_73562);
var state_73568__$1 = (function (){var statearr_73589 = state_73568;
(statearr_73589[(9)] = inst_73559);

return statearr_73589;
})();
var statearr_73592_75368 = state_73568__$1;
(statearr_73592_75368[(2)] = inst_73563);

(statearr_73592_75368[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73569 === (4))){
var inst_73552 = (state_73568[(8)]);
var state_73568__$1 = state_73568;
var statearr_73597_75369 = state_73568__$1;
(statearr_73597_75369[(2)] = inst_73552);

(statearr_73597_75369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73569 === (5))){
var inst_73566 = (state_73568[(2)]);
var state_73568__$1 = state_73568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73568__$1,inst_73566);
} else {
return null;
}
}
}
}
}
});})(c__51169__auto__,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__50952__auto__,c__51169__auto__,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____0 = (function (){
var statearr_73601 = [null,null,null,null,null,null,null,null,null,null];
(statearr_73601[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__);

(statearr_73601[(1)] = (1));

return statearr_73601;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____1 = (function (state_73568){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_73568);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e73605){if((e73605 instanceof Object)){
var ex__50956__auto__ = e73605;
var statearr_73607_75375 = state_73568;
(statearr_73607_75375[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73605;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75377 = state_73568;
state_73568 = G__75377;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__ = function(state_73568){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____1.call(this,state_73568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__51171__auto__ = (function (){var statearr_73611 = f__51170__auto__();
(statearr_73611[(6)] = c__51169__auto__);

return statearr_73611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,ch,map__73458,map__73458__$1,env,key_watchers,external_wait_ignore_timeout))
);

return c__51169__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__73619,e){
var map__73620 = p__73619;
var map__73620__$1 = (((((!((map__73620 == null))))?(((((map__73620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73620):map__73620);
var env = map__73620__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73620__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__73634 = ast;
var map__73634__$1 = (((((!((map__73634 == null))))?(((((map__73634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73634):map__73634);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73634__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73634__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73634__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73634__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__73644 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__73644__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73644,new cljs.core.Keyword(null,"query","query",-1288509510)):G__73644);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73644__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__73644__$1;
}
})();
var value = (function (){var G__73645 = type;
var G__73645__$1 = (((G__73645 instanceof cljs.core.Keyword))?G__73645.fqn:null);
switch (G__73645__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__73647 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__73647__$1 = (((((!((map__73647 == null))))?(((((map__73647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73647):map__73647);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73647__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,map__73647,map__73647__$1,action,G__73645,G__73645__$1,map__73634,map__73634__$1,query,key,type,params,env__$1){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,map__73647,map__73647__$1,action,G__73645,G__73645__$1,map__73634,map__73634__$1,query,key,type,params,env__$1){
return (function (state_73694){
var state_val_73695 = (state_73694[(1)]);
if((state_val_73695 === (7))){
var inst_73690 = (state_73694[(2)]);
var state_73694__$1 = state_73694;
var statearr_73698_75399 = state_73694__$1;
(statearr_73698_75399[(2)] = inst_73690);


cljs.core.async.impl.ioc_helpers.process_exception(state_73694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (1))){
var state_73694__$1 = state_73694;
var statearr_73700_75404 = state_73694__$1;
(statearr_73700_75404[(2)] = null);

(statearr_73700_75404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (4))){
var inst_73665 = (state_73694[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_73694,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73661 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_73662 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_73663 = cljs.core.PersistentHashMap.fromArrays(inst_73661,inst_73662);
var inst_73664 = com.wsscode.pathom.trace.trace(env__$1,inst_73663);
var inst_73665__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_73666 = com.wsscode.async.async_cljs.chan_QMARK_(inst_73665__$1);
var state_73694__$1 = (function (){var statearr_73702 = state_73694;
(statearr_73702[(7)] = inst_73665__$1);

(statearr_73702[(8)] = inst_73664);

return statearr_73702;
})();
if(inst_73666){
var statearr_73703_75418 = state_73694__$1;
(statearr_73703_75418[(1)] = (5));

} else {
var statearr_73704_75419 = state_73694__$1;
(statearr_73704_75419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (15))){
var inst_73686 = (state_73694[(2)]);
var state_73694__$1 = state_73694;
var statearr_73705_75421 = state_73694__$1;
(statearr_73705_75421[(2)] = inst_73686);

(statearr_73705_75421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (13))){
var inst_73665 = (state_73694[(7)]);
var state_73694__$1 = state_73694;
var statearr_73707_75422 = state_73694__$1;
(statearr_73707_75422[(2)] = inst_73665);

(statearr_73707_75422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (6))){
var inst_73665 = (state_73694[(7)]);
var inst_73673 = com.wsscode.async.async_cljs.promise_QMARK_(inst_73665);
var state_73694__$1 = state_73694;
if(cljs.core.truth_(inst_73673)){
var statearr_73710_75424 = state_73694__$1;
(statearr_73710_75424[(1)] = (9));

} else {
var statearr_73711_75425 = state_73694__$1;
(statearr_73711_75425[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (3))){
var inst_73652 = (state_73694[(2)]);
var inst_73653 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_73655 = com.wsscode.pathom.parser.process_error(env__$1,inst_73652);
var inst_73656 = [inst_73655];
var inst_73657 = cljs.core.PersistentHashMap.fromArrays(inst_73653,inst_73656);
var state_73694__$1 = state_73694;
var statearr_73712_75426 = state_73694__$1;
(statearr_73712_75426[(2)] = inst_73657);


cljs.core.async.impl.ioc_helpers.process_exception(state_73694__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (12))){
var inst_73680 = (state_73694[(2)]);
var inst_73681 = com.wsscode.async.async_cljs.consumer_pair(inst_73680);
var state_73694__$1 = state_73694;
var statearr_73714_75427 = state_73694__$1;
(statearr_73714_75427[(2)] = inst_73681);

(statearr_73714_75427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (2))){
var inst_73692 = (state_73694[(2)]);
var state_73694__$1 = state_73694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73694__$1,inst_73692);
} else {
if((state_val_73695 === (11))){
var inst_73688 = (state_73694[(2)]);
var state_73694__$1 = state_73694;
var statearr_73716_75431 = state_73694__$1;
(statearr_73716_75431[(2)] = inst_73688);

(statearr_73716_75431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (9))){
var inst_73665 = (state_73694[(7)]);
var inst_73678 = com.wsscode.async.async_cljs.promise__GT_chan(inst_73665);
var state_73694__$1 = state_73694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73694__$1,(12),inst_73678);
} else {
if((state_val_73695 === (5))){
var inst_73665 = (state_73694[(7)]);
var state_73694__$1 = state_73694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73694__$1,(8),inst_73665);
} else {
if((state_val_73695 === (14))){
var state_73694__$1 = state_73694;
var statearr_73720_75432 = state_73694__$1;
(statearr_73720_75432[(2)] = null);

(statearr_73720_75432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (10))){
var state_73694__$1 = state_73694;
var statearr_73722_75434 = state_73694__$1;
(statearr_73722_75434[(1)] = (13));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73695 === (8))){
var inst_73670 = (state_73694[(2)]);
var inst_73671 = com.wsscode.async.async_cljs.throw_err(inst_73670);
var state_73694__$1 = state_73694;
var statearr_73724_75436 = state_73694__$1;
(statearr_73724_75436[(2)] = inst_73671);

(statearr_73724_75436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51169__auto__,map__73647,map__73647__$1,action,G__73645,G__73645__$1,map__73634,map__73634__$1,query,key,type,params,env__$1))
;
return ((function (switch__50952__auto__,c__51169__auto__,map__73647,map__73647__$1,action,G__73645,G__73645__$1,map__73634,map__73634__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____0 = (function (){
var statearr_73725 = [null,null,null,null,null,null,null,null,null];
(statearr_73725[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__);

(statearr_73725[(1)] = (1));

return statearr_73725;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____1 = (function (state_73694){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_73694);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e73726){if((e73726 instanceof Object)){
var ex__50956__auto__ = e73726;
var statearr_73727_75440 = state_73694;
(statearr_73727_75440[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73726;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75442 = state_73694;
state_73694 = G__75442;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__ = function(state_73694){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____1.call(this,state_73694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,map__73647,map__73647__$1,action,G__73645,G__73645__$1,map__73634,map__73634__$1,query,key,type,params,env__$1))
})();
var state__51171__auto__ = (function (){var statearr_73729 = f__51170__auto__();
(statearr_73729[(6)] = c__51169__auto__);

return statearr_73729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,map__73647,map__73647__$1,action,G__73645,G__73645__$1,map__73634,map__73634__$1,query,key,type,params,env__$1))
);

return c__51169__auto__;
} else {
return null;
}

break;
case "prop":
case "join":
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error(["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('')));
}

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__27095__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__27094__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__27095__auto__;
} else {
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
}

break;
default:
return null;

}
})();
if(com.wsscode.async.async_cljs.chan_QMARK_(value)){
var provides = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var stream = (function (){var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,provides,map__73634,map__73634__$1,query,key,type,params,env__$1,value){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,provides,map__73634,map__73634__$1,query,key,type,params,env__$1,value){
return (function (state_73745){
var state_val_73746 = (state_73745[(1)]);
if((state_val_73746 === (1))){
var inst_73735 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_73736 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_73745__$1 = (function (){var statearr_73748 = state_73745;
(statearr_73748[(7)] = inst_73735);

(statearr_73748[(8)] = inst_73736);

return statearr_73748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73745__$1,(2),value);
} else {
if((state_val_73746 === (2))){
var inst_73735 = (state_73745[(7)]);
var inst_73736 = (state_73745[(8)]);
var inst_73738 = (state_73745[(2)]);
var inst_73739 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_73740 = [inst_73738,inst_73739];
var inst_73741 = cljs.core.PersistentHashMap.fromArrays(inst_73736,inst_73740);
var inst_73742 = [provides,true,inst_73741];
var inst_73743 = cljs.core.PersistentHashMap.fromArrays(inst_73735,inst_73742);
var state_73745__$1 = state_73745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73745__$1,inst_73743);
} else {
return null;
}
}
});})(c__51169__auto__,provides,map__73634,map__73634__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__50952__auto__,c__51169__auto__,provides,map__73634,map__73634__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____0 = (function (){
var statearr_73752 = [null,null,null,null,null,null,null,null,null];
(statearr_73752[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__);

(statearr_73752[(1)] = (1));

return statearr_73752;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____1 = (function (state_73745){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_73745);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e73753){if((e73753 instanceof Object)){
var ex__50956__auto__ = e73753;
var statearr_73754_75459 = state_73745;
(statearr_73754_75459[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73753;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75461 = state_73745;
state_73745 = G__75461;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__ = function(state_73745){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____1.call(this,state_73745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,provides,map__73634,map__73634__$1,query,key,type,params,env__$1,value))
})();
var state__51171__auto__ = (function (){var statearr_73758 = f__51170__auto__();
(statearr_73758[(6)] = c__51169__auto__);

return statearr_73758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,provides,map__73634,map__73634__$1,query,key,type,params,env__$1,value))
);

return c__51169__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","channel-response","com.wsscode.pathom.parser/channel-response",140507736),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
if(cljs.core.truth_((function (){try{return new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
}catch (e73759){var _ = e73759;
return null;
}})())){
var provides = new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
var stream = new cljs.core.Keyword("com.wsscode.pathom.parser","response-stream","com.wsscode.pathom.parser/response-stream",1785550292).cljs$core$IFn$_invoke$arity$1(value);
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provided-return","com.wsscode.pathom.parser/provided-return",9084378),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","parallel-reader","com.wsscode.pathom.parser/parallel-reader",283632954),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","value-return","com.wsscode.pathom.parser/value-return",1158220150),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,com.wsscode.pathom.parser.ast__GT_out_key(ast),value),waiting,processing,key_iterations,tail], null);

}
}
});
com.wsscode.pathom.parser.parallel_flush_watchers = (function com$wsscode$pathom$parser$parallel_flush_watchers(env,key_watchers,provides,error){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27094__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__27095__auto__ = (function (){var seq__73765 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__73766 = null;
var count__73767 = (0);
var i__73768 = (0);
while(true){
if((i__73768 < count__73767)){
var vec__73795 = chunk__73766.cljs$core$IIndexed$_nth$arity$2(null,i__73768);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73795,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73795,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__73798_75470 = cljs.core.seq(watchers);
var chunk__73799_75471 = null;
var count__73800_75472 = (0);
var i__73801_75473 = (0);
while(true){
if((i__73801_75473 < count__73800_75472)){
var out_75477 = chunk__73799_75471.cljs$core$IIndexed$_nth$arity$2(null,i__73801_75473);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75477,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75477);


var G__75478 = seq__73798_75470;
var G__75479 = chunk__73799_75471;
var G__75480 = count__73800_75472;
var G__75481 = (i__73801_75473 + (1));
seq__73798_75470 = G__75478;
chunk__73799_75471 = G__75479;
count__73800_75472 = G__75480;
i__73801_75473 = G__75481;
continue;
} else {
var temp__5720__auto___75482 = cljs.core.seq(seq__73798_75470);
if(temp__5720__auto___75482){
var seq__73798_75483__$1 = temp__5720__auto___75482;
if(cljs.core.chunked_seq_QMARK_(seq__73798_75483__$1)){
var c__4550__auto___75484 = cljs.core.chunk_first(seq__73798_75483__$1);
var G__75485 = cljs.core.chunk_rest(seq__73798_75483__$1);
var G__75486 = c__4550__auto___75484;
var G__75487 = cljs.core.count(c__4550__auto___75484);
var G__75488 = (0);
seq__73798_75470 = G__75485;
chunk__73799_75471 = G__75486;
count__73800_75472 = G__75487;
i__73801_75473 = G__75488;
continue;
} else {
var out_75489 = cljs.core.first(seq__73798_75483__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75489,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75489);


var G__75490 = cljs.core.next(seq__73798_75483__$1);
var G__75491 = null;
var G__75492 = (0);
var G__75493 = (0);
seq__73798_75470 = G__75490;
chunk__73799_75471 = G__75491;
count__73800_75472 = G__75492;
i__73801_75473 = G__75493;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__75495 = seq__73765;
var G__75496 = chunk__73766;
var G__75497 = count__73767;
var G__75498 = (i__73768 + (1));
seq__73765 = G__75495;
chunk__73766 = G__75496;
count__73767 = G__75497;
i__73768 = G__75498;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__73765);
if(temp__5720__auto__){
var seq__73765__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73765__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__73765__$1);
var G__75499 = cljs.core.chunk_rest(seq__73765__$1);
var G__75500 = c__4550__auto__;
var G__75501 = cljs.core.count(c__4550__auto__);
var G__75502 = (0);
seq__73765 = G__75499;
chunk__73766 = G__75500;
count__73767 = G__75501;
i__73768 = G__75502;
continue;
} else {
var vec__73808 = cljs.core.first(seq__73765__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73808,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73808,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__73811_75503 = cljs.core.seq(watchers);
var chunk__73812_75504 = null;
var count__73813_75505 = (0);
var i__73814_75506 = (0);
while(true){
if((i__73814_75506 < count__73813_75505)){
var out_75507 = chunk__73812_75504.cljs$core$IIndexed$_nth$arity$2(null,i__73814_75506);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75507,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75507);


var G__75509 = seq__73811_75503;
var G__75510 = chunk__73812_75504;
var G__75511 = count__73813_75505;
var G__75512 = (i__73814_75506 + (1));
seq__73811_75503 = G__75509;
chunk__73812_75504 = G__75510;
count__73813_75505 = G__75511;
i__73814_75506 = G__75512;
continue;
} else {
var temp__5720__auto___75513__$1 = cljs.core.seq(seq__73811_75503);
if(temp__5720__auto___75513__$1){
var seq__73811_75515__$1 = temp__5720__auto___75513__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73811_75515__$1)){
var c__4550__auto___75518 = cljs.core.chunk_first(seq__73811_75515__$1);
var G__75519 = cljs.core.chunk_rest(seq__73811_75515__$1);
var G__75520 = c__4550__auto___75518;
var G__75521 = cljs.core.count(c__4550__auto___75518);
var G__75522 = (0);
seq__73811_75503 = G__75519;
chunk__73812_75504 = G__75520;
count__73813_75505 = G__75521;
i__73814_75506 = G__75522;
continue;
} else {
var out_75523 = cljs.core.first(seq__73811_75515__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75523,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75523);


var G__75524 = cljs.core.next(seq__73811_75515__$1);
var G__75525 = null;
var G__75526 = (0);
var G__75527 = (0);
seq__73811_75503 = G__75524;
chunk__73812_75504 = G__75525;
count__73813_75505 = G__75526;
i__73814_75506 = G__75527;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__75528 = cljs.core.next(seq__73765__$1);
var G__75529 = null;
var G__75530 = (0);
var G__75531 = (0);
seq__73765 = G__75528;
chunk__73766 = G__75529;
count__73767 = G__75530;
i__73768 = G__75531;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27094__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__27095__auto__;
} else {
var seq__73815 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__73816 = null;
var count__73817 = (0);
var i__73818 = (0);
while(true){
if((i__73818 < count__73817)){
var vec__73833 = chunk__73816.cljs$core$IIndexed$_nth$arity$2(null,i__73818);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73833,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73833,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__73836_75533 = cljs.core.seq(watchers);
var chunk__73837_75534 = null;
var count__73838_75535 = (0);
var i__73839_75536 = (0);
while(true){
if((i__73839_75536 < count__73838_75535)){
var out_75537 = chunk__73837_75534.cljs$core$IIndexed$_nth$arity$2(null,i__73839_75536);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75537,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75537);


var G__75538 = seq__73836_75533;
var G__75539 = chunk__73837_75534;
var G__75540 = count__73838_75535;
var G__75541 = (i__73839_75536 + (1));
seq__73836_75533 = G__75538;
chunk__73837_75534 = G__75539;
count__73838_75535 = G__75540;
i__73839_75536 = G__75541;
continue;
} else {
var temp__5720__auto___75542 = cljs.core.seq(seq__73836_75533);
if(temp__5720__auto___75542){
var seq__73836_75543__$1 = temp__5720__auto___75542;
if(cljs.core.chunked_seq_QMARK_(seq__73836_75543__$1)){
var c__4550__auto___75544 = cljs.core.chunk_first(seq__73836_75543__$1);
var G__75545 = cljs.core.chunk_rest(seq__73836_75543__$1);
var G__75546 = c__4550__auto___75544;
var G__75547 = cljs.core.count(c__4550__auto___75544);
var G__75548 = (0);
seq__73836_75533 = G__75545;
chunk__73837_75534 = G__75546;
count__73838_75535 = G__75547;
i__73839_75536 = G__75548;
continue;
} else {
var out_75549 = cljs.core.first(seq__73836_75543__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75549,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75549);


var G__75550 = cljs.core.next(seq__73836_75543__$1);
var G__75551 = null;
var G__75552 = (0);
var G__75553 = (0);
seq__73836_75533 = G__75550;
chunk__73837_75534 = G__75551;
count__73838_75535 = G__75552;
i__73839_75536 = G__75553;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__75555 = seq__73815;
var G__75556 = chunk__73816;
var G__75557 = count__73817;
var G__75558 = (i__73818 + (1));
seq__73815 = G__75555;
chunk__73816 = G__75556;
count__73817 = G__75557;
i__73818 = G__75558;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__73815);
if(temp__5720__auto__){
var seq__73815__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73815__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__73815__$1);
var G__75560 = cljs.core.chunk_rest(seq__73815__$1);
var G__75561 = c__4550__auto__;
var G__75562 = cljs.core.count(c__4550__auto__);
var G__75563 = (0);
seq__73815 = G__75560;
chunk__73816 = G__75561;
count__73817 = G__75562;
i__73818 = G__75563;
continue;
} else {
var vec__73840 = cljs.core.first(seq__73815__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73840,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73840,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__73843_75566 = cljs.core.seq(watchers);
var chunk__73844_75567 = null;
var count__73845_75568 = (0);
var i__73846_75569 = (0);
while(true){
if((i__73846_75569 < count__73845_75568)){
var out_75570 = chunk__73844_75567.cljs$core$IIndexed$_nth$arity$2(null,i__73846_75569);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75570,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75570);


var G__75572 = seq__73843_75566;
var G__75573 = chunk__73844_75567;
var G__75574 = count__73845_75568;
var G__75575 = (i__73846_75569 + (1));
seq__73843_75566 = G__75572;
chunk__73844_75567 = G__75573;
count__73845_75568 = G__75574;
i__73846_75569 = G__75575;
continue;
} else {
var temp__5720__auto___75577__$1 = cljs.core.seq(seq__73843_75566);
if(temp__5720__auto___75577__$1){
var seq__73843_75578__$1 = temp__5720__auto___75577__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73843_75578__$1)){
var c__4550__auto___75579 = cljs.core.chunk_first(seq__73843_75578__$1);
var G__75581 = cljs.core.chunk_rest(seq__73843_75578__$1);
var G__75582 = c__4550__auto___75579;
var G__75583 = cljs.core.count(c__4550__auto___75579);
var G__75584 = (0);
seq__73843_75566 = G__75581;
chunk__73844_75567 = G__75582;
count__73845_75568 = G__75583;
i__73846_75569 = G__75584;
continue;
} else {
var out_75585 = cljs.core.first(seq__73843_75578__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_75585,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_75585);


var G__75586 = cljs.core.next(seq__73843_75578__$1);
var G__75587 = null;
var G__75588 = (0);
var G__75589 = (0);
seq__73843_75566 = G__75586;
chunk__73844_75567 = G__75587;
count__73845_75568 = G__75588;
i__73846_75569 = G__75589;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(key_watchers,cljs.core.dissoc,pkey);
} else {
}


var G__75590 = cljs.core.next(seq__73815__$1);
var G__75591 = null;
var G__75592 = (0);
var G__75593 = (0);
seq__73815 = G__75590;
chunk__73816 = G__75591;
count__73817 = G__75592;
i__73818 = G__75593;
continue;
}
} else {
return null;
}
}
break;
}
}
});
com.wsscode.pathom.parser.default_step_fn = (function com$wsscode$pathom$parser$default_step_fn(amount,min){
return (function (_env,x){
return Math.max((x - amount),min);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__73847){
var vec__73848 = p__73847;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73848,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
})),m);
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.parser.value_merge = (function com$wsscode$pathom$parser$value_merge(x,y){
if((((y === new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))) || ((y === new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137))))){
return x;
} else {
return y;
}
});
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__73853,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__73854 = p__73853;
var map__73854__$1 = (((((!((map__73854 == null))))?(((((map__73854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__73854):map__73854);
var env = map__73854__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73854__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (state_74124){
var state_val_74125 = (state_74124[(1)]);
if((state_val_74125 === (65))){
var inst_74050 = (state_74124[(7)]);
var inst_74047 = (state_74124[(8)]);
var inst_74049 = (state_74124[(9)]);
var inst_74048 = (state_74124[(10)]);
var inst_74068 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_74069 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_74049];
var inst_74070 = cljs.core.PersistentHashMap.fromArrays(inst_74068,inst_74069);
var inst_74071 = com.wsscode.pathom.trace.trace(env,inst_74070);
var inst_74072 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74073 = cljs.core.vals(inst_74049);
var inst_74074 = cljs.core.first(inst_74073);
var inst_74075 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_74048,inst_74074);
var inst_74076 = cljs.core.PersistentHashSet.EMPTY;
var inst_74077 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_74047);
var inst_74078 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_74076,inst_74077,inst_74050);
var inst_74079 = cljs.core.PersistentVector.EMPTY;
var inst_74080 = [inst_74075,inst_74078,processing,key_iterations,inst_74079];
var inst_74081 = (new cljs.core.PersistentVector(null,5,(5),inst_74072,inst_74080,null));
var state_74124__$1 = (function (){var statearr_74126 = state_74124;
(statearr_74126[(11)] = inst_74071);

return statearr_74126;
})();
var statearr_74127_75602 = state_74124__$1;
(statearr_74127_75602[(2)] = inst_74081);

(statearr_74127_75602[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (62))){
var inst_74056 = (state_74124[(12)]);
var inst_74046 = (state_74124[(13)]);
var inst_74058 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_74056,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_74046);
var state_74124__$1 = state_74124;
var statearr_74128_75606 = state_74124__$1;
(statearr_74128_75606[(2)] = inst_74058);

(statearr_74128_75606[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (7))){
var inst_73872 = (state_74124[(14)]);
var inst_73872__$1 = (state_74124[(2)]);
var inst_73874 = cljs.core.PersistentVector.EMPTY;
var inst_73875 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_73876 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_73874,inst_73875,processing);
var state_74124__$1 = (function (){var statearr_74129 = state_74124;
(statearr_74129[(14)] = inst_73872__$1);

(statearr_74129[(15)] = inst_73876);

return statearr_74129;
})();
if(cljs.core.truth_(inst_73872__$1)){
var statearr_74130_75607 = state_74124__$1;
(statearr_74130_75607[(1)] = (8));

} else {
var statearr_74131_75608 = state_74124__$1;
(statearr_74131_75608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (59))){
var inst_74046 = (state_74124[(13)]);
var inst_74044 = (state_74124[(16)]);
var inst_74049 = (state_74124[(9)]);
var inst_74043 = (state_74124[(17)]);
var inst_74053 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_74054 = cljs.core.boolean$(inst_74044);
var inst_74055 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_74043,inst_74049,inst_74054];
var inst_74056 = cljs.core.PersistentHashMap.fromArrays(inst_74053,inst_74055);
var state_74124__$1 = (function (){var statearr_74132 = state_74124;
(statearr_74132[(12)] = inst_74056);

return statearr_74132;
})();
if(cljs.core.truth_(inst_74046)){
var statearr_74133_75609 = state_74124__$1;
(statearr_74133_75609[(1)] = (62));

} else {
var statearr_74134_75610 = state_74124__$1;
(statearr_74134_75610[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (20))){
var inst_73926 = (state_74124[(18)]);
var inst_73920 = (state_74124[(19)]);
var inst_73918 = (state_74124[(20)]);
var inst_73926__$1 = cljs.core._nth(inst_73918,inst_73920);
var inst_73928 = (inst_73926__$1 == null);
var inst_73929 = cljs.core.not(inst_73928);
var state_74124__$1 = (function (){var statearr_74135 = state_74124;
(statearr_74135[(18)] = inst_73926__$1);

return statearr_74135;
})();
if(inst_73929){
var statearr_74136_75613 = state_74124__$1;
(statearr_74136_75613[(1)] = (23));

} else {
var statearr_74137_75614 = state_74124__$1;
(statearr_74137_75614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (58))){
var inst_74046 = (state_74124[(13)]);
var inst_74041 = (state_74124[(21)]);
var inst_74043 = (state_74124[(17)]);
var inst_73884 = (state_74124[(22)]);
var inst_74041__$1 = (state_74124[(2)]);
var inst_74042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74041__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_74043__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74041__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_74044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74041__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_74045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74041__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_74046__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_73884);
var inst_74047 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_74043__$1,inst_74046__$1);
var inst_74048 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_74042);
var inst_74049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_74042,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_74050 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_74046__$1);
var state_74124__$1 = (function (){var statearr_74138 = state_74124;
(statearr_74138[(13)] = inst_74046__$1);

(statearr_74138[(16)] = inst_74044);

(statearr_74138[(7)] = inst_74050);

(statearr_74138[(8)] = inst_74047);

(statearr_74138[(21)] = inst_74041__$1);

(statearr_74138[(9)] = inst_74049);

(statearr_74138[(17)] = inst_74043__$1);

(statearr_74138[(10)] = inst_74048);

(statearr_74138[(23)] = inst_74045);

return statearr_74138;
})();
if(cljs.core.truth_(inst_73884)){
var statearr_74139_75618 = state_74124__$1;
(statearr_74139_75618[(1)] = (59));

} else {
var statearr_74140_75619 = state_74124__$1;
(statearr_74140_75619[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (60))){
var inst_74050 = (state_74124[(7)]);
var inst_73885 = (state_74124[(24)]);
var inst_74107 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74108 = cljs.core.PersistentHashSet.EMPTY;
var inst_74109 = [inst_73885];
var inst_74110 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_74109);
var inst_74111 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_74110,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_74112 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_74111);
var inst_74113 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_74108,inst_74112,processing);
var inst_74114 = cljs.core.PersistentVector.EMPTY;
var inst_74115 = [res,inst_74050,inst_74113,key_iterations,inst_74114];
var inst_74116 = (new cljs.core.PersistentVector(null,5,(5),inst_74107,inst_74115,null));
var state_74124__$1 = state_74124;
var statearr_74141_75621 = state_74124__$1;
(statearr_74141_75621[(2)] = inst_74116);

(statearr_74141_75621[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (27))){
var state_74124__$1 = state_74124;
var statearr_74142_75624 = state_74124__$1;
(statearr_74142_75624[(2)] = false);

(statearr_74142_75624[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (1))){
var state_74124__$1 = state_74124;
var statearr_74143_75625 = state_74124__$1;
(statearr_74143_75625[(2)] = null);

(statearr_74143_75625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (24))){
var state_74124__$1 = state_74124;
var statearr_74144_75626 = state_74124__$1;
(statearr_74144_75626[(2)] = false);

(statearr_74144_75626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (55))){
var inst_74033 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74145_75627 = state_74124__$1;
(statearr_74145_75627[(2)] = inst_74033);

(statearr_74145_75627[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (39))){
var state_74124__$1 = state_74124;
var statearr_74146_75628 = state_74124__$1;
(statearr_74146_75628[(2)] = false);

(statearr_74146_75628[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (46))){
var inst_73953 = (state_74124[(25)]);
var inst_73984 = (state_74124[(2)]);
var inst_73985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73984,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_73986 = cljs.core.async.close_BANG_(inst_73985);
var inst_73987 = cljs.core.next(inst_73953);
var inst_73917 = inst_73987;
var inst_73918 = null;
var inst_73919 = (0);
var inst_73920 = (0);
var state_74124__$1 = (function (){var statearr_74147 = state_74124;
(statearr_74147[(19)] = inst_73920);

(statearr_74147[(26)] = inst_73917);

(statearr_74147[(27)] = inst_73919);

(statearr_74147[(20)] = inst_73918);

(statearr_74147[(28)] = inst_73986);

return statearr_74147;
})();
var statearr_74148_75630 = state_74124__$1;
(statearr_74148_75630[(2)] = null);

(statearr_74148_75630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_74124,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_73863 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_73864 = cljs.core.count(processing);
var inst_73865 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_73864];
var inst_73866 = cljs.core.PersistentHashMap.fromArrays(inst_73863,inst_73865);
var inst_73867 = com.wsscode.pathom.trace.trace(env,inst_73866);
var state_74124__$1 = (function (){var statearr_74149 = state_74124;
(statearr_74149[(29)] = inst_73867);

return statearr_74149;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_74150_75632 = state_74124__$1;
(statearr_74150_75632[(1)] = (5));

} else {
var statearr_74151_75633 = state_74124__$1;
(statearr_74151_75633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (54))){
var state_74124__$1 = state_74124;
var statearr_74152_75634 = state_74124__$1;
(statearr_74152_75634[(2)] = false);

(statearr_74152_75634[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (15))){
var inst_73903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73904 = cljs.core.PersistentVector.EMPTY;
var inst_73905 = [res,waiting,processing,key_iterations,inst_73904];
var inst_73906 = (new cljs.core.PersistentVector(null,5,(5),inst_73903,inst_73905,null));
var state_74124__$1 = state_74124;
var statearr_74153_75637 = state_74124__$1;
(statearr_74153_75637[(2)] = inst_73906);

(statearr_74153_75637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (48))){
var inst_73892 = (state_74124[(30)]);
var inst_74007 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74008 = cljs.core.PersistentHashSet.EMPTY;
var inst_74009 = cljs.core.PersistentHashSet.EMPTY;
var inst_74010 = cljs.core.PersistentVector.EMPTY;
var inst_74011 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_74012 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_74010,inst_74011,inst_73892);
var inst_74013 = [res,inst_74008,inst_74009,key_iterations,inst_74012];
var inst_74014 = (new cljs.core.PersistentVector(null,5,(5),inst_74007,inst_74013,null));
var state_74124__$1 = state_74124;
var statearr_74154_75642 = state_74124__$1;
(statearr_74154_75642[(2)] = inst_74014);

(statearr_74154_75642[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (50))){
var inst_73884 = (state_74124[(22)]);
var inst_74025 = inst_73884.cljs$lang$protocol_mask$partition0$;
var inst_74026 = (inst_74025 & (64));
var inst_74027 = inst_73884.cljs$core$ISeq$;
var inst_74028 = (cljs.core.PROTOCOL_SENTINEL === inst_74027);
var inst_74029 = ((inst_74026) || (inst_74028));
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_74029)){
var statearr_74158_75655 = state_74124__$1;
(statearr_74158_75655[(1)] = (53));

} else {
var statearr_74159_75656 = state_74124__$1;
(statearr_74159_75656[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (21))){
var inst_73917 = (state_74124[(26)]);
var inst_73953 = (state_74124[(25)]);
var inst_73953__$1 = cljs.core.seq(inst_73917);
var state_74124__$1 = (function (){var statearr_74160 = state_74124;
(statearr_74160[(25)] = inst_73953__$1);

return statearr_74160;
})();
if(inst_73953__$1){
var statearr_74161_75657 = state_74124__$1;
(statearr_74161_75657[(1)] = (32));

} else {
var statearr_74162_75658 = state_74124__$1;
(statearr_74162_75658[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (31))){
var inst_73920 = (state_74124[(19)]);
var inst_73917 = (state_74124[(26)]);
var inst_73919 = (state_74124[(27)]);
var inst_73918 = (state_74124[(20)]);
var inst_73947 = (state_74124[(2)]);
var inst_73948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_73947,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_73949 = cljs.core.async.close_BANG_(inst_73948);
var inst_73950 = (inst_73920 + (1));
var tmp74155 = inst_73917;
var tmp74156 = inst_73919;
var tmp74157 = inst_73918;
var inst_73917__$1 = tmp74155;
var inst_73918__$1 = tmp74157;
var inst_73919__$1 = tmp74156;
var inst_73920__$1 = inst_73950;
var state_74124__$1 = (function (){var statearr_74163 = state_74124;
(statearr_74163[(31)] = inst_73949);

(statearr_74163[(19)] = inst_73920__$1);

(statearr_74163[(26)] = inst_73917__$1);

(statearr_74163[(27)] = inst_73919__$1);

(statearr_74163[(20)] = inst_73918__$1);

return statearr_74163;
})();
var statearr_74164_75661 = state_74124__$1;
(statearr_74164_75661[(2)] = null);

(statearr_74164_75661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (32))){
var inst_73953 = (state_74124[(25)]);
var inst_73955 = cljs.core.chunked_seq_QMARK_(inst_73953);
var state_74124__$1 = state_74124;
if(inst_73955){
var statearr_74165_75662 = state_74124__$1;
(statearr_74165_75662[(1)] = (35));

} else {
var statearr_74166_75664 = state_74124__$1;
(statearr_74166_75664[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (40))){
var inst_73979 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_73979)){
var statearr_74167_75665 = state_74124__$1;
(statearr_74167_75665[(1)] = (44));

} else {
var statearr_74168_75666 = state_74124__$1;
(statearr_74168_75666[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (56))){
var inst_73884 = (state_74124[(22)]);
var inst_74038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_73884);
var state_74124__$1 = state_74124;
var statearr_74169_75668 = state_74124__$1;
(statearr_74169_75668[(2)] = inst_74038);

(statearr_74169_75668[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (33))){
var state_74124__$1 = state_74124;
var statearr_74170_75670 = state_74124__$1;
(statearr_74170_75670[(2)] = null);

(statearr_74170_75670[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (13))){
var inst_73884 = (state_74124[(22)]);
var inst_74022 = (inst_73884 == null);
var inst_74023 = cljs.core.not(inst_74022);
var state_74124__$1 = state_74124;
if(inst_74023){
var statearr_74171_75672 = state_74124__$1;
(statearr_74171_75672[(1)] = (50));

} else {
var statearr_74172_75673 = state_74124__$1;
(statearr_74172_75673[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (22))){
var inst_73995 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74173_75675 = state_74124__$1;
(statearr_74173_75675[(2)] = inst_73995);

(statearr_74173_75675[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (36))){
var inst_73963 = (state_74124[(32)]);
var inst_73953 = (state_74124[(25)]);
var inst_73963__$1 = cljs.core.first(inst_73953);
var inst_73965 = (inst_73963__$1 == null);
var inst_73966 = cljs.core.not(inst_73965);
var state_74124__$1 = (function (){var statearr_74174 = state_74124;
(statearr_74174[(32)] = inst_73963__$1);

return statearr_74174;
})();
if(inst_73966){
var statearr_74175_75676 = state_74124__$1;
(statearr_74175_75676[(1)] = (38));

} else {
var statearr_74176_75677 = state_74124__$1;
(statearr_74176_75677[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (41))){
var state_74124__$1 = state_74124;
var statearr_74177_75678 = state_74124__$1;
(statearr_74177_75678[(2)] = true);

(statearr_74177_75678[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (43))){
var inst_73976 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74178_75680 = state_74124__$1;
(statearr_74178_75680[(2)] = inst_73976);

(statearr_74178_75680[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (61))){
var inst_74118 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74179_75681 = state_74124__$1;
(statearr_74179_75681[(2)] = inst_74118);

(statearr_74179_75681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (29))){
var inst_73926 = (state_74124[(18)]);
var inst_73944 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_73926);
var state_74124__$1 = state_74124;
var statearr_74180_75683 = state_74124__$1;
(statearr_74180_75683[(2)] = inst_73944);

(statearr_74180_75683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (44))){
var inst_73963 = (state_74124[(32)]);
var inst_73981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_73963);
var state_74124__$1 = state_74124;
var statearr_74181_75686 = state_74124__$1;
(statearr_74181_75686[(2)] = inst_73981);

(statearr_74181_75686[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (6))){
var state_74124__$1 = state_74124;
var statearr_74182_75687 = state_74124__$1;
(statearr_74182_75687[(2)] = null);

(statearr_74182_75687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (28))){
var inst_73939 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74183_75688 = state_74124__$1;
(statearr_74183_75688[(2)] = inst_73939);

(statearr_74183_75688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (64))){
var inst_73883 = (state_74124[(33)]);
var inst_73881 = (state_74124[(34)]);
var inst_74046 = (state_74124[(13)]);
var inst_74044 = (state_74124[(16)]);
var inst_74050 = (state_74124[(7)]);
var inst_73872 = (state_74124[(14)]);
var inst_74047 = (state_74124[(8)]);
var inst_74041 = (state_74124[(21)]);
var inst_73885 = (state_74124[(24)]);
var inst_74049 = (state_74124[(9)]);
var inst_74043 = (state_74124[(17)]);
var inst_74048 = (state_74124[(10)]);
var inst_74045 = (state_74124[(23)]);
var inst_73867 = (state_74124[(29)]);
var inst_73884 = (state_74124[(22)]);
var inst_74061 = (state_74124[(2)]);
var inst_74062 = com.wsscode.pathom.trace.trace(env,inst_74061);
var inst_74063 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_74064 = (function (){var vec__73860 = inst_73883;
var p = inst_73885;
var merge_result_QMARK_ = inst_74044;
var recheck_ch = inst_73872;
var response_value = inst_74049;
var _ = inst_73867;
var key_as = inst_74048;
var map__74020 = inst_74041;
var provides_SINGLEQUOTE_ = inst_74047;
var msg = inst_73884;
var waiting__$1 = inst_74050;
var processing_SINGLEQUOTE_ = inst_73881;
var waiting_SINGLEQUOTE_ = inst_74046;
var error = inst_74045;
var provides = inst_74043;
return ((function (vec__73860,p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,map__74020,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,waiting_SINGLEQUOTE_,error,provides,inst_73883,inst_73881,inst_74046,inst_74044,inst_74050,inst_73872,inst_74047,inst_74041,inst_73885,inst_74049,inst_74043,inst_74048,inst_74045,inst_73867,inst_73884,inst_74061,inst_74062,inst_74063,state_val_74125,c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__73852_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__73852_SHARP_], 0));
});
;})(vec__73860,p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,map__74020,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,waiting_SINGLEQUOTE_,error,provides,inst_73883,inst_73881,inst_74046,inst_74044,inst_74050,inst_73872,inst_74047,inst_74041,inst_73885,inst_74049,inst_74043,inst_74048,inst_74045,inst_73867,inst_73884,inst_74061,inst_74062,inst_74063,state_val_74125,c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_74065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_74063,inst_74064);
var inst_74066 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_74047,inst_74045);
var state_74124__$1 = (function (){var statearr_74184 = state_74124;
(statearr_74184[(35)] = inst_74066);

(statearr_74184[(36)] = inst_74065);

(statearr_74184[(37)] = inst_74062);

return statearr_74184;
})();
if(cljs.core.truth_(inst_74044)){
var statearr_74185_75724 = state_74124__$1;
(statearr_74185_75724[(1)] = (65));

} else {
var statearr_74186_75732 = state_74124__$1;
(statearr_74186_75732[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (51))){
var state_74124__$1 = state_74124;
var statearr_74187_75744 = state_74124__$1;
(statearr_74187_75744[(2)] = false);

(statearr_74187_75744[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (25))){
var inst_73942 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_73942)){
var statearr_74188_75746 = state_74124__$1;
(statearr_74188_75746[(1)] = (29));

} else {
var statearr_74189_75748 = state_74124__$1;
(statearr_74189_75748[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (34))){
var inst_73993 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74190_75755 = state_74124__$1;
(statearr_74190_75755[(2)] = inst_73993);

(statearr_74190_75755[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (17))){
var inst_74018 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74191_75764 = state_74124__$1;
(statearr_74191_75764[(2)] = inst_74018);

(statearr_74191_75764[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (3))){
var inst_73856 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74192_75772 = state_74124__$1;
(statearr_74192_75772[(2)] = inst_73856);


cljs.core.async.impl.ioc_helpers.process_exception(state_74124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (12))){
var inst_73892 = (state_74124[(30)]);
var inst_73883 = (state_74124[(33)]);
var inst_73881 = (state_74124[(34)]);
var inst_73872 = (state_74124[(14)]);
var inst_73885 = (state_74124[(24)]);
var inst_73867 = (state_74124[(29)]);
var inst_73884 = (state_74124[(22)]);
var inst_73888 = cljs.core.keys(indexed_props);
var inst_73889 = cljs.core.set(inst_73888);
var inst_73890 = cljs.core.keys(res);
var inst_73891 = cljs.core.set(inst_73890);
var inst_73892__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_73889,inst_73891);
var inst_73893 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_73894 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_73895 = [processing,inst_73892__$1];
var inst_73896 = cljs.core.PersistentHashMap.fromArrays(inst_73894,inst_73895);
var inst_73897 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_73896];
var inst_73898 = cljs.core.PersistentHashMap.fromArrays(inst_73893,inst_73897);
var inst_73899 = com.wsscode.pathom.trace.trace(env,inst_73898);
var inst_73900 = (function (){var vec__73860 = inst_73883;
var missing_props = inst_73892__$1;
var p = inst_73885;
var recheck_ch = inst_73872;
var _ = inst_73867;
var msg = inst_73884;
var processing_SINGLEQUOTE_ = inst_73881;
var all_props = inst_73889;
var current_props = inst_73891;
return ((function (vec__73860,missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_73892,inst_73883,inst_73881,inst_73872,inst_73885,inst_73867,inst_73884,inst_73888,inst_73889,inst_73890,inst_73891,inst_73892__$1,inst_73893,inst_73894,inst_73895,inst_73896,inst_73897,inst_73898,inst_73899,state_val_74125,c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__73851_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__73851_SHARP_));
});
;})(vec__73860,missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_73892,inst_73883,inst_73881,inst_73872,inst_73885,inst_73867,inst_73884,inst_73888,inst_73889,inst_73890,inst_73891,inst_73892__$1,inst_73893,inst_73894,inst_73895,inst_73896,inst_73897,inst_73898,inst_73899,state_val_74125,c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_73901 = cljs.core.some(inst_73900,inst_73892__$1);
var state_74124__$1 = (function (){var statearr_74193 = state_74124;
(statearr_74193[(30)] = inst_73892__$1);

(statearr_74193[(38)] = inst_73899);

return statearr_74193;
})();
if(cljs.core.truth_(inst_73901)){
var statearr_74194_75828 = state_74124__$1;
(statearr_74194_75828[(1)] = (15));

} else {
var statearr_74195_75829 = state_74124__$1;
(statearr_74195_75829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (2))){
var inst_74122 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74124__$1,inst_74122);
} else {
if((state_val_74125 === (66))){
var inst_74050 = (state_74124[(7)]);
var inst_74047 = (state_74124[(8)]);
var inst_74083 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_74084 = cljs.core.keys(inst_74083);
var inst_74085 = cljs.core.set(inst_74084);
var inst_74086 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_74085,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_74087 = cljs.core.vec(inst_74047);
var inst_74088 = com.wsscode.pathom.parser.focus_subquery(tx,inst_74087);
var inst_74089 = com.wsscode.pathom.parser.query__GT_ast(inst_74088);
var inst_74090 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_74089);
var inst_74091 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_74086,inst_74090);
var inst_74092 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_74091);
var inst_74093 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_74094 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_74092);
var inst_74095 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_74094];
var inst_74096 = cljs.core.PersistentHashMap.fromArrays(inst_74093,inst_74095);
var inst_74097 = com.wsscode.pathom.trace.trace(env,inst_74096);
var inst_74098 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74099 = cljs.core.PersistentHashSet.EMPTY;
var inst_74100 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_74047);
var inst_74101 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_74099,inst_74100,inst_74050);
var inst_74102 = [res,inst_74101,processing,key_iterations,inst_74092];
var inst_74103 = (new cljs.core.PersistentVector(null,5,(5),inst_74098,inst_74102,null));
var state_74124__$1 = (function (){var statearr_74196 = state_74124;
(statearr_74196[(39)] = inst_74097);

return statearr_74196;
})();
var statearr_74197_75833 = state_74124__$1;
(statearr_74197_75833[(2)] = inst_74103);

(statearr_74197_75833[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (23))){
var inst_73926 = (state_74124[(18)]);
var inst_73931 = inst_73926.cljs$lang$protocol_mask$partition0$;
var inst_73932 = (inst_73931 & (64));
var inst_73933 = inst_73926.cljs$core$ISeq$;
var inst_73934 = (cljs.core.PROTOCOL_SENTINEL === inst_73933);
var inst_73935 = ((inst_73932) || (inst_73934));
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_73935)){
var statearr_74198_75834 = state_74124__$1;
(statearr_74198_75834[(1)] = (26));

} else {
var statearr_74199_75835 = state_74124__$1;
(statearr_74199_75835[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (47))){
var inst_74000 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74001 = cljs.core.PersistentHashSet.EMPTY;
var inst_74002 = cljs.core.PersistentHashSet.EMPTY;
var inst_74003 = cljs.core.PersistentVector.EMPTY;
var inst_74004 = [res,inst_74001,inst_74002,key_iterations,inst_74003];
var inst_74005 = (new cljs.core.PersistentVector(null,5,(5),inst_74000,inst_74004,null));
var state_74124__$1 = state_74124;
var statearr_74200_75838 = state_74124__$1;
(statearr_74200_75838[(2)] = inst_74005);

(statearr_74200_75838[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (35))){
var inst_73953 = (state_74124[(25)]);
var inst_73957 = cljs.core.chunk_first(inst_73953);
var inst_73958 = cljs.core.chunk_rest(inst_73953);
var inst_73959 = cljs.core.count(inst_73957);
var inst_73917 = inst_73958;
var inst_73918 = inst_73957;
var inst_73919 = inst_73959;
var inst_73920 = (0);
var state_74124__$1 = (function (){var statearr_74201 = state_74124;
(statearr_74201[(19)] = inst_73920);

(statearr_74201[(26)] = inst_73917);

(statearr_74201[(27)] = inst_73919);

(statearr_74201[(20)] = inst_73918);

return statearr_74201;
})();
var statearr_74202_75842 = state_74124__$1;
(statearr_74202_75842[(2)] = null);

(statearr_74202_75842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (19))){
var inst_73997 = (state_74124[(2)]);
var inst_73998 = cljs.core.deref(done_signal_STAR_);
var state_74124__$1 = (function (){var statearr_74203 = state_74124;
(statearr_74203[(40)] = inst_73997);

return statearr_74203;
})();
if(cljs.core.truth_(inst_73998)){
var statearr_74204_75844 = state_74124__$1;
(statearr_74204_75844[(1)] = (47));

} else {
var statearr_74205_75845 = state_74124__$1;
(statearr_74205_75845[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (57))){
var inst_73884 = (state_74124[(22)]);
var state_74124__$1 = state_74124;
var statearr_74206_75847 = state_74124__$1;
(statearr_74206_75847[(2)] = inst_73884);

(statearr_74206_75847[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (11))){
var inst_73883 = (state_74124[(33)]);
var inst_73872 = (state_74124[(14)]);
var inst_73885 = (state_74124[(24)]);
var inst_73883__$1 = (state_74124[(2)]);
var inst_73884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73883__$1,(0),null);
var inst_73885__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_73883__$1,(1),null);
var inst_73886 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73885__$1,inst_73872);
var state_74124__$1 = (function (){var statearr_74207 = state_74124;
(statearr_74207[(33)] = inst_73883__$1);

(statearr_74207[(24)] = inst_73885__$1);

(statearr_74207[(22)] = inst_73884);

return statearr_74207;
})();
if(inst_73886){
var statearr_74208_75849 = state_74124__$1;
(statearr_74208_75849[(1)] = (12));

} else {
var statearr_74209_75851 = state_74124__$1;
(statearr_74209_75851[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (9))){
var inst_73876 = (state_74124[(15)]);
var state_74124__$1 = state_74124;
var statearr_74210_75853 = state_74124__$1;
(statearr_74210_75853[(2)] = inst_73876);

(statearr_74210_75853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (5))){
var inst_73869 = cljs.core.async.timeout(processing_recheck_timer);
var state_74124__$1 = state_74124;
var statearr_74211_75854 = state_74124__$1;
(statearr_74211_75854[(2)] = inst_73869);

(statearr_74211_75854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (14))){
var inst_74120 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74212_75855 = state_74124__$1;
(statearr_74212_75855[(2)] = inst_74120);


cljs.core.async.impl.ioc_helpers.process_exception(state_74124__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (45))){
var inst_73963 = (state_74124[(32)]);
var state_74124__$1 = state_74124;
var statearr_74213_75856 = state_74124__$1;
(statearr_74213_75856[(2)] = inst_73963);

(statearr_74213_75856[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (53))){
var state_74124__$1 = state_74124;
var statearr_74214_75857 = state_74124__$1;
(statearr_74214_75857[(2)] = true);

(statearr_74214_75857[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (26))){
var state_74124__$1 = state_74124;
var statearr_74215_75859 = state_74124__$1;
(statearr_74215_75859[(2)] = true);

(statearr_74215_75859[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (16))){
var inst_73892 = (state_74124[(30)]);
var inst_73908 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_73909 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_73892];
var inst_73910 = cljs.core.PersistentHashMap.fromArrays(inst_73908,inst_73909);
var inst_73911 = com.wsscode.pathom.trace.trace(env,inst_73910);
var inst_73916 = cljs.core.seq(processing);
var inst_73917 = inst_73916;
var inst_73918 = null;
var inst_73919 = (0);
var inst_73920 = (0);
var state_74124__$1 = (function (){var statearr_74216 = state_74124;
(statearr_74216[(19)] = inst_73920);

(statearr_74216[(26)] = inst_73917);

(statearr_74216[(27)] = inst_73919);

(statearr_74216[(41)] = inst_73911);

(statearr_74216[(20)] = inst_73918);

return statearr_74216;
})();
var statearr_74217_75877 = state_74124__$1;
(statearr_74217_75877[(2)] = null);

(statearr_74217_75877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (38))){
var inst_73963 = (state_74124[(32)]);
var inst_73968 = inst_73963.cljs$lang$protocol_mask$partition0$;
var inst_73969 = (inst_73968 & (64));
var inst_73970 = inst_73963.cljs$core$ISeq$;
var inst_73971 = (cljs.core.PROTOCOL_SENTINEL === inst_73970);
var inst_73972 = ((inst_73969) || (inst_73971));
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_73972)){
var statearr_74218_75895 = state_74124__$1;
(statearr_74218_75895[(1)] = (41));

} else {
var statearr_74219_75902 = state_74124__$1;
(statearr_74219_75902[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (30))){
var inst_73926 = (state_74124[(18)]);
var state_74124__$1 = state_74124;
var statearr_74220_75907 = state_74124__$1;
(statearr_74220_75907[(2)] = inst_73926);

(statearr_74220_75907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (10))){
var inst_73881 = (state_74124[(34)]);
var inst_73881__$1 = (state_74124[(2)]);
var state_74124__$1 = (function (){var statearr_74221 = state_74124;
(statearr_74221[(34)] = inst_73881__$1);

return statearr_74221;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_74124__$1,(11),inst_73881__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_74125 === (18))){
var inst_73920 = (state_74124[(19)]);
var inst_73919 = (state_74124[(27)]);
var inst_73922 = (inst_73920 < inst_73919);
var inst_73923 = inst_73922;
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_73923)){
var statearr_74222_75910 = state_74124__$1;
(statearr_74222_75910[(1)] = (20));

} else {
var statearr_74223_75911 = state_74124__$1;
(statearr_74223_75911[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (52))){
var inst_74036 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
if(cljs.core.truth_(inst_74036)){
var statearr_74224_75913 = state_74124__$1;
(statearr_74224_75913[(1)] = (56));

} else {
var statearr_74225_75914 = state_74124__$1;
(statearr_74225_75914[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (67))){
var inst_74105 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74226_75915 = state_74124__$1;
(statearr_74226_75915[(2)] = inst_74105);

(statearr_74226_75915[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (42))){
var state_74124__$1 = state_74124;
var statearr_74227_75917 = state_74124__$1;
(statearr_74227_75917[(2)] = false);

(statearr_74227_75917[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (37))){
var inst_73990 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74228_75920 = state_74124__$1;
(statearr_74228_75920[(2)] = inst_73990);

(statearr_74228_75920[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (63))){
var inst_74056 = (state_74124[(12)]);
var state_74124__$1 = state_74124;
var statearr_74229_75922 = state_74124__$1;
(statearr_74229_75922[(2)] = inst_74056);

(statearr_74229_75922[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (8))){
var inst_73872 = (state_74124[(14)]);
var inst_73876 = (state_74124[(15)]);
var inst_73878 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_73876,inst_73872);
var state_74124__$1 = state_74124;
var statearr_74230_75924 = state_74124__$1;
(statearr_74230_75924[(2)] = inst_73878);

(statearr_74230_75924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74125 === (49))){
var inst_74016 = (state_74124[(2)]);
var state_74124__$1 = state_74124;
var statearr_74231_75926 = state_74124__$1;
(statearr_74231_75926[(2)] = inst_74016);

(statearr_74231_75926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
;
return ((function (switch__50952__auto__,c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto____0 = (function (){
var statearr_74232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74232[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto__);

(statearr_74232[(1)] = (1));

return statearr_74232;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto____1 = (function (state_74124){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_74124);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e74233){if((e74233 instanceof Object)){
var ex__50956__auto__ = e74233;
var statearr_74234_75930 = state_74124;
(statearr_74234_75930[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_74124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75932 = state_74124;
state_74124 = G__75932;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto__ = function(state_74124){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto____1.call(this,state_74124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var state__51171__auto__ = (function (){var statearr_74235 = f__51170__auto__();
(statearr_74235[(6)] = c__51169__auto__);

return statearr_74235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,map__73854,map__73854__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
);

return c__51169__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__74237,p__74238,tx){
var map__74239 = p__74237;
var map__74239__$1 = (((((!((map__74239 == null))))?(((((map__74239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74239):map__74239);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74239__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74239__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__74240 = p__74238;
var map__74240__$1 = (((((!((map__74240 == null))))?(((((map__74240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74240):map__74240);
var env = map__74240__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74240__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_74692){
var state_val_74693 = (state_74692[(1)]);
if((state_val_74693 === (121))){
var inst_74542 = (state_74692[(7)]);
var inst_74543 = (state_74692[(8)]);
var inst_74552 = (state_74692[(9)]);
var inst_74540 = (state_74692[(10)]);
var inst_74541 = (state_74692[(11)]);
var inst_74292 = (state_74692[(12)]);
var inst_74574 = (state_74692[(13)]);
var inst_74632 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74633 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_74574];
var inst_74634 = cljs.core.PersistentHashMap.fromArrays(inst_74632,inst_74633);
var inst_74635 = com.wsscode.pathom.trace.trace(inst_74292,inst_74634);
var tmp74694 = inst_74542;
var tmp74695 = inst_74543;
var tmp74696 = inst_74540;
var tmp74697 = inst_74541;
var inst_74540__$1 = tmp74696;
var inst_74541__$1 = tmp74697;
var inst_74542__$1 = tmp74694;
var inst_74543__$1 = tmp74695;
var inst_74544 = inst_74552;
var state_74692__$1 = (function (){var statearr_74699 = state_74692;
(statearr_74699[(7)] = inst_74542__$1);

(statearr_74699[(8)] = inst_74543__$1);

(statearr_74699[(10)] = inst_74540__$1);

(statearr_74699[(14)] = inst_74544);

(statearr_74699[(11)] = inst_74541__$1);

(statearr_74699[(15)] = inst_74635);

return statearr_74699;
})();
var statearr_74700_75944 = state_74692__$1;
(statearr_74700_75944[(2)] = null);

(statearr_74700_75944[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (65))){
var inst_74347 = (state_74692[(16)]);
var inst_74380 = (state_74692[(17)]);
var inst_74436 = cljs.core.contains_QMARK_(inst_74347,inst_74380);
var state_74692__$1 = state_74692;
if(inst_74436){
var statearr_74701_75945 = state_74692__$1;
(statearr_74701_75945[(1)] = (67));

} else {
var statearr_74702_75946 = state_74692__$1;
(statearr_74702_75946[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (70))){
var inst_74382 = (state_74692[(18)]);
var inst_74349 = (state_74692[(19)]);
var inst_74379 = (state_74692[(20)]);
var inst_74347 = (state_74692[(16)]);
var inst_74346 = (state_74692[(21)]);
var inst_74358 = (state_74692[(22)]);
var inst_74286 = (state_74692[(23)]);
var inst_74348 = (state_74692[(24)]);
var inst_74292 = (state_74692[(12)]);
var inst_74448 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_74349,inst_74382,com.wsscode.pathom.parser.zero_inc);
var inst_74449 = com.wsscode.pathom.parser.parallel_process_value(inst_74292,tx,inst_74379,inst_74286,inst_74346,inst_74347,inst_74348,read,mutate,inst_74448,inst_74358);
var inst_74450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74449,(0),null);
var inst_74451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74449,(1),null);
var inst_74452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74449,(2),null);
var inst_74453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74449,(3),null);
var inst_74454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74449,(4),null);
var inst_74346__$1 = inst_74450;
var inst_74347__$1 = inst_74451;
var inst_74348__$1 = inst_74452;
var inst_74349__$1 = inst_74453;
var inst_74350 = inst_74454;
var state_74692__$1 = (function (){var statearr_74703 = state_74692;
(statearr_74703[(19)] = inst_74349__$1);

(statearr_74703[(16)] = inst_74347__$1);

(statearr_74703[(21)] = inst_74346__$1);

(statearr_74703[(24)] = inst_74348__$1);

(statearr_74703[(25)] = inst_74350);

return statearr_74703;
})();
var statearr_74704_75950 = state_74692__$1;
(statearr_74704_75950[(2)] = null);

(statearr_74704_75950[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (62))){
var inst_74416 = (state_74692[(26)]);
var state_74692__$1 = state_74692;
var statearr_74705_75951 = state_74692__$1;
(statearr_74705_75951[(2)] = inst_74416);

(statearr_74705_75951[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (74))){
var state_74692__$1 = state_74692;
var statearr_74706_75952 = state_74692__$1;
(statearr_74706_75952[(1)] = (77));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (110))){
var inst_74540 = (state_74692[(10)]);
var state_74692__$1 = state_74692;
var statearr_74708_75954 = state_74692__$1;
(statearr_74708_75954[(2)] = inst_74540);

(statearr_74708_75954[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (130))){
var inst_74669 = (state_74692[(2)]);
var inst_74670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74669,(0),null);
var inst_74671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74669,(1),null);
var inst_74672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74669,(2),null);
var inst_74673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74669,(3),null);
var inst_74674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74669,(4),null);
var inst_74540 = inst_74670;
var inst_74541 = inst_74671;
var inst_74542 = inst_74672;
var inst_74543 = inst_74673;
var inst_74544 = inst_74674;
var state_74692__$1 = (function (){var statearr_74709 = state_74692;
(statearr_74709[(7)] = inst_74542);

(statearr_74709[(8)] = inst_74543);

(statearr_74709[(10)] = inst_74540);

(statearr_74709[(14)] = inst_74544);

(statearr_74709[(11)] = inst_74541);

return statearr_74709;
})();
var statearr_74710_75960 = state_74692__$1;
(statearr_74710_75960[(2)] = null);

(statearr_74710_75960[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (128))){
var state_74692__$1 = state_74692;
var statearr_74711_75961 = state_74692__$1;
(statearr_74711_75961[(1)] = (131));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (7))){
var inst_74252 = (state_74692[(2)]);
var state_74692__$1 = (function (){var statearr_74713 = state_74692;
(statearr_74713[(27)] = inst_74252);

return statearr_74713;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_74714_75962 = state_74692__$1;
(statearr_74714_75962[(1)] = (8));

} else {
var statearr_74715_75964 = state_74692__$1;
(statearr_74715_75964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (59))){
var inst_74416 = (state_74692[(26)]);
var inst_74292 = (state_74692[(12)]);
var inst_74416__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_74292);
var state_74692__$1 = (function (){var statearr_74716 = state_74692;
(statearr_74716[(26)] = inst_74416__$1);

return statearr_74716;
})();
if(cljs.core.truth_(inst_74416__$1)){
var statearr_74717_75967 = state_74692__$1;
(statearr_74717_75967[(1)] = (61));

} else {
var statearr_74718_75968 = state_74692__$1;
(statearr_74718_75968[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (86))){
var state_74692__$1 = state_74692;
var statearr_74719_75969 = state_74692__$1;
(statearr_74719_75969[(2)] = true);

(statearr_74719_75969[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (20))){
var state_74692__$1 = state_74692;
var statearr_74724_75973 = state_74692__$1;
(statearr_74724_75973[(2)] = key_watchers);

(statearr_74724_75973[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (72))){
var inst_74458 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74725_75974 = state_74692__$1;
(statearr_74725_75974[(2)] = inst_74458);

(statearr_74725_75974[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (58))){
var inst_74349 = (state_74692[(19)]);
var inst_74347 = (state_74692[(16)]);
var inst_74346 = (state_74692[(21)]);
var inst_74358 = (state_74692[(22)]);
var inst_74348 = (state_74692[(24)]);
var inst_74380 = (state_74692[(17)]);
var inst_74292 = (state_74692[(12)]);
var inst_74410 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74411 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_74380];
var inst_74412 = cljs.core.PersistentHashMap.fromArrays(inst_74410,inst_74411);
var inst_74413 = com.wsscode.pathom.trace.trace(inst_74292,inst_74412);
var tmp74720 = inst_74349;
var tmp74721 = inst_74347;
var tmp74722 = inst_74346;
var tmp74723 = inst_74348;
var inst_74346__$1 = tmp74722;
var inst_74347__$1 = tmp74721;
var inst_74348__$1 = tmp74723;
var inst_74349__$1 = tmp74720;
var inst_74350 = inst_74358;
var state_74692__$1 = (function (){var statearr_74726 = state_74692;
(statearr_74726[(19)] = inst_74349__$1);

(statearr_74726[(16)] = inst_74347__$1);

(statearr_74726[(21)] = inst_74346__$1);

(statearr_74726[(24)] = inst_74348__$1);

(statearr_74726[(28)] = inst_74413);

(statearr_74726[(25)] = inst_74350);

return statearr_74726;
})();
var statearr_74727_75978 = state_74692__$1;
(statearr_74727_75978[(2)] = null);

(statearr_74727_75978[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (60))){
var inst_74464 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74728_75982 = state_74692__$1;
(statearr_74728_75982[(2)] = inst_74464);

(statearr_74728_75982[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (27))){
var inst_74316 = cljs.core.PersistentHashSet.EMPTY;
var state_74692__$1 = state_74692;
var statearr_74729_75983 = state_74692__$1;
(statearr_74729_75983[(2)] = inst_74316);

(statearr_74729_75983[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (1))){
var state_74692__$1 = state_74692;
var statearr_74730_75986 = state_74692__$1;
(statearr_74730_75986[(2)] = null);

(statearr_74730_75986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (69))){
var inst_74460 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74731_75988 = state_74692__$1;
(statearr_74731_75988[(2)] = inst_74460);

(statearr_74731_75988[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (101))){
var inst_74551 = (state_74692[(29)]);
var state_74692__$1 = state_74692;
var statearr_74732_75989 = state_74692__$1;
(statearr_74732_75989[(2)] = inst_74551);

(statearr_74732_75989[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (24))){
var inst_74507 = cljs.core.PersistentHashMap.EMPTY;
var state_74692__$1 = (function (){var statearr_74733 = state_74692;
(statearr_74733[(30)] = inst_74507);

return statearr_74733;
})();
if(cljs.core.truth_(waiting)){
var statearr_74734_75993 = state_74692__$1;
(statearr_74734_75993[(1)] = (80));

} else {
var statearr_74735_75994 = state_74692__$1;
(statearr_74735_75994[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (102))){
var inst_74573 = (state_74692[(31)]);
var inst_74573__$1 = (state_74692[(2)]);
var inst_74574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74573__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_74692__$1 = (function (){var statearr_74736 = state_74692;
(statearr_74736[(31)] = inst_74573__$1);

(statearr_74736[(13)] = inst_74574);

return statearr_74736;
})();
if(cljs.core.truth_(inst_74573__$1)){
var statearr_74739_75995 = state_74692__$1;
(statearr_74739_75995[(1)] = (103));

} else {
var statearr_74741_75996 = state_74692__$1;
(statearr_74741_75996[(1)] = (104));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (55))){
var inst_74382 = (state_74692[(18)]);
var inst_74346 = (state_74692[(21)]);
var inst_74399 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_74346,inst_74382,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_74692__$1 = state_74692;
var statearr_74742_75998 = state_74692__$1;
(statearr_74742_75998[(2)] = inst_74399);

(statearr_74742_75998[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (85))){
var inst_74533 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74533)){
var statearr_74743_76001 = state_74692__$1;
(statearr_74743_76001[(1)] = (89));

} else {
var statearr_74744_76002 = state_74692__$1;
(statearr_74744_76002[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (39))){
var inst_74303 = (state_74692[(32)]);
var inst_74257 = (state_74692[(33)]);
var inst_74292 = (state_74692[(12)]);
var inst_74492 = (state_74692[(2)]);
var inst_74493 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_74494 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_74257];
var inst_74495 = cljs.core.PersistentHashMap.fromArrays(inst_74493,inst_74494);
var inst_74496 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_74292,inst_74303,inst_74495);
var state_74692__$1 = (function (){var statearr_74745 = state_74692;
(statearr_74745[(34)] = inst_74496);

return statearr_74745;
})();
var statearr_74746_76006 = state_74692__$1;
(statearr_74746_76006[(2)] = inst_74492);

(statearr_74746_76006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (88))){
var inst_74530 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74747_76007 = state_74692__$1;
(statearr_74747_76007[(2)] = inst_74530);

(statearr_74747_76007[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (46))){
var inst_74357 = (state_74692[(35)]);
var inst_74376 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74357);
var state_74692__$1 = state_74692;
var statearr_74748_76009 = state_74692__$1;
(statearr_74748_76009[(2)] = inst_74376);

(statearr_74748_76009[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_74692,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_74749_76011 = state_74692__$1;
(statearr_74749_76011[(1)] = (5));

} else {
var statearr_74750_76012 = state_74692__$1;
(statearr_74750_76012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (77))){
var inst_74346 = (state_74692[(21)]);
var state_74692__$1 = state_74692;
var statearr_74751_76013 = state_74692__$1;
(statearr_74751_76013[(2)] = inst_74346);

(statearr_74751_76013[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (106))){
var inst_74576 = (state_74692[(36)]);
var inst_74540 = (state_74692[(10)]);
var inst_74292 = (state_74692[(12)]);
var inst_74574 = (state_74692[(13)]);
var inst_74585 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_74586 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_74574,max_key_iterations];
var inst_74587 = cljs.core.PersistentHashMap.fromArrays(inst_74585,inst_74586);
var inst_74588 = com.wsscode.pathom.trace.trace(inst_74292,inst_74587);
var inst_74590 = cljs.core.contains_QMARK_(inst_74540,inst_74576);
var inst_74591 = (!(inst_74590));
var state_74692__$1 = (function (){var statearr_74752 = state_74692;
(statearr_74752[(37)] = inst_74588);

return statearr_74752;
})();
if(inst_74591){
var statearr_74753_76018 = state_74692__$1;
(statearr_74753_76018[(1)] = (109));

} else {
var statearr_74754_76019 = state_74692__$1;
(statearr_74754_76019[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (119))){
var inst_74541 = (state_74692[(11)]);
var inst_74574 = (state_74692[(13)]);
var inst_74630 = cljs.core.contains_QMARK_(inst_74541,inst_74574);
var state_74692__$1 = state_74692;
if(inst_74630){
var statearr_74755_76020 = state_74692__$1;
(statearr_74755_76020[(1)] = (121));

} else {
var statearr_74756_76021 = state_74692__$1;
(statearr_74756_76021[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (95))){
var state_74692__$1 = state_74692;
var statearr_74757_76024 = state_74692__$1;
(statearr_74757_76024[(2)] = false);

(statearr_74757_76024[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (54))){
var inst_74466 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74758_76025 = state_74692__$1;
(statearr_74758_76025[(2)] = inst_74466);

(statearr_74758_76025[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (92))){
var inst_74551 = (state_74692[(29)]);
var inst_74544 = (state_74692[(14)]);
var inst_74550 = cljs.core.seq(inst_74544);
var inst_74551__$1 = cljs.core.first(inst_74550);
var inst_74552 = cljs.core.next(inst_74550);
var inst_74554 = (inst_74551__$1 == null);
var inst_74555 = cljs.core.not(inst_74554);
var state_74692__$1 = (function (){var statearr_74759 = state_74692;
(statearr_74759[(9)] = inst_74552);

(statearr_74759[(29)] = inst_74551__$1);

return statearr_74759;
})();
if(inst_74555){
var statearr_74760_76027 = state_74692__$1;
(statearr_74760_76027[(1)] = (94));

} else {
var statearr_74761_76029 = state_74692__$1;
(statearr_74761_76029[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (104))){
var inst_74542 = (state_74692[(7)]);
var inst_74662 = cljs.core.seq(inst_74542);
var state_74692__$1 = state_74692;
if(inst_74662){
var statearr_74762_76031 = state_74692__$1;
(statearr_74762_76031[(1)] = (127));

} else {
var statearr_74763_76032 = state_74692__$1;
(statearr_74763_76032[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (15))){
var state_74692__$1 = state_74692;
var statearr_74764_76033 = state_74692__$1;
(statearr_74764_76033[(2)] = false);

(statearr_74764_76033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (48))){
var inst_74379 = (state_74692[(20)]);
var inst_74379__$1 = (state_74692[(2)]);
var inst_74380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74379__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_74692__$1 = (function (){var statearr_74765 = state_74692;
(statearr_74765[(20)] = inst_74379__$1);

(statearr_74765[(17)] = inst_74380);

return statearr_74765;
})();
if(cljs.core.truth_(inst_74379__$1)){
var statearr_74766_76034 = state_74692__$1;
(statearr_74766_76034[(1)] = (49));

} else {
var statearr_74767_76035 = state_74692__$1;
(statearr_74767_76035[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (50))){
var inst_74348 = (state_74692[(24)]);
var inst_74468 = cljs.core.seq(inst_74348);
var state_74692__$1 = state_74692;
if(inst_74468){
var statearr_74768_76036 = state_74692__$1;
(statearr_74768_76036[(1)] = (73));

} else {
var statearr_74769_76037 = state_74692__$1;
(statearr_74769_76037[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (116))){
var inst_74610 = (state_74692[(38)]);
var state_74692__$1 = state_74692;
var statearr_74770_76040 = state_74692__$1;
(statearr_74770_76040[(2)] = inst_74610);

(statearr_74770_76040[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (75))){
var inst_74488 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74771_76042 = state_74692__$1;
(statearr_74771_76042[(2)] = inst_74488);

(statearr_74771_76042[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (99))){
var inst_74565 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74772_76043 = state_74692__$1;
(statearr_74772_76043[(2)] = inst_74565);

(statearr_74772_76043[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (21))){
var inst_74283 = cljs.core.PersistentHashMap.EMPTY;
var inst_74284 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_74283);
var state_74692__$1 = state_74692;
var statearr_74773_76044 = state_74692__$1;
(statearr_74773_76044[(2)] = inst_74284);

(statearr_74773_76044[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (31))){
var inst_74339 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74339)){
var statearr_74774_76048 = state_74692__$1;
(statearr_74774_76048[(1)] = (35));

} else {
var statearr_74775_76049 = state_74692__$1;
(statearr_74775_76049[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (113))){
var inst_74610 = (state_74692[(38)]);
var inst_74292 = (state_74692[(12)]);
var inst_74610__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_74292);
var state_74692__$1 = (function (){var statearr_74776 = state_74692;
(statearr_74776[(38)] = inst_74610__$1);

return statearr_74776;
})();
if(cljs.core.truth_(inst_74610__$1)){
var statearr_74777_76052 = state_74692__$1;
(statearr_74777_76052[(1)] = (115));

} else {
var statearr_74778_76054 = state_74692__$1;
(statearr_74778_76054[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (32))){
var state_74692__$1 = state_74692;
var statearr_74779_76055 = state_74692__$1;
(statearr_74779_76055[(2)] = true);

(statearr_74779_76055[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (40))){
var inst_74357 = (state_74692[(35)]);
var inst_74363 = inst_74357.cljs$lang$protocol_mask$partition0$;
var inst_74364 = (inst_74363 & (64));
var inst_74365 = inst_74357.cljs$core$ISeq$;
var inst_74366 = (cljs.core.PROTOCOL_SENTINEL === inst_74365);
var inst_74367 = ((inst_74364) || (inst_74366));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74367)){
var statearr_74780_76056 = state_74692__$1;
(statearr_74780_76056[(1)] = (43));

} else {
var statearr_74781_76060 = state_74692__$1;
(statearr_74781_76060[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (129))){
var inst_74682 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74782_76061 = state_74692__$1;
(statearr_74782_76061[(2)] = inst_74682);

(statearr_74782_76061[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (91))){
var inst_74513 = (state_74692[(39)]);
var inst_74507 = (state_74692[(30)]);
var inst_74280 = (state_74692[(40)]);
var inst_74514 = (state_74692[(41)]);
var inst_74512 = (state_74692[(42)]);
var inst_74538 = (state_74692[(2)]);
var inst_74539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74538,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_74540 = inst_74507;
var inst_74541 = inst_74512;
var inst_74542 = inst_74513;
var inst_74543 = inst_74514;
var inst_74544 = inst_74280;
var state_74692__$1 = (function (){var statearr_74783 = state_74692;
(statearr_74783[(7)] = inst_74542);

(statearr_74783[(8)] = inst_74543);

(statearr_74783[(43)] = inst_74539);

(statearr_74783[(10)] = inst_74540);

(statearr_74783[(14)] = inst_74544);

(statearr_74783[(11)] = inst_74541);

return statearr_74783;
})();
var statearr_74784_76065 = state_74692__$1;
(statearr_74784_76065[(2)] = null);

(statearr_74784_76065[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (117))){
var inst_74615 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74615)){
var statearr_74785_76066 = state_74692__$1;
(statearr_74785_76066[(1)] = (118));

} else {
var statearr_74786_76070 = state_74692__$1;
(statearr_74786_76070[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (108))){
var inst_74660 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74787_76071 = state_74692__$1;
(statearr_74787_76071[(2)] = inst_74660);

(statearr_74787_76071[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (56))){
var inst_74346 = (state_74692[(21)]);
var state_74692__$1 = state_74692;
var statearr_74788_76072 = state_74692__$1;
(statearr_74788_76072[(2)] = inst_74346);

(statearr_74788_76072[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (33))){
var state_74692__$1 = state_74692;
var statearr_74789_76076 = state_74692__$1;
(statearr_74789_76076[(2)] = false);

(statearr_74789_76076[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (13))){
var inst_74274 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74274)){
var statearr_74790_76077 = state_74692__$1;
(statearr_74790_76077[(1)] = (17));

} else {
var statearr_74791_76078 = state_74692__$1;
(statearr_74791_76078[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (22))){
var inst_74279 = (state_74692[(44)]);
var inst_74257 = (state_74692[(33)]);
var inst_74286 = (state_74692[(23)]);
var inst_74252 = (state_74692[(27)]);
var inst_74280 = (state_74692[(40)]);
var inst_74292 = (state_74692[(12)]);
var inst_74286__$1 = (state_74692[(2)]);
var inst_74287 = cljs.core.deref(entity_path_cache);
var inst_74288 = cljs.core.PersistentHashMap.EMPTY;
var inst_74289 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_74287,path,inst_74288);
var inst_74290 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_74257], 0));
var inst_74291 = (function (){var key_process_timeout_step__$1 = inst_74252;
var key_process_timeout__$1 = inst_74257;
var map__74247 = inst_74279;
var children = inst_74280;
var key_watchers__$1 = inst_74286__$1;
var path_entity = inst_74289;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__74247,children,key_watchers__$1,path_entity,inst_74279,inst_74257,inst_74286,inst_74252,inst_74280,inst_74292,inst_74286__$1,inst_74287,inst_74288,inst_74289,inst_74290,state_val_74693,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__74247,children,key_watchers__$1,path_entity,inst_74279,inst_74257,inst_74286,inst_74252,inst_74280,inst_74292,inst_74286__$1,inst_74287,inst_74288,inst_74289,inst_74290,state_val_74693,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__74236_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__74236_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__74247,children,key_watchers__$1,path_entity,inst_74279,inst_74257,inst_74286,inst_74252,inst_74280,inst_74292,inst_74286__$1,inst_74287,inst_74288,inst_74289,inst_74290,state_val_74693,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__74247,children,key_watchers__$1,path_entity,inst_74279,inst_74257,inst_74286,inst_74252,inst_74280,inst_74292,inst_74286__$1,inst_74287,inst_74288,inst_74289,inst_74290,state_val_74693,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_74292__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_74290,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_74291);
var inst_74293 = cljs.core.PersistentHashMap.EMPTY;
var inst_74295 = (function (){var key_process_timeout_step__$1 = inst_74252;
var key_process_timeout__$1 = inst_74257;
var map__74247 = inst_74279;
var children = inst_74280;
var key_watchers__$1 = inst_74286__$1;
var path_entity = inst_74289;
var env__$1 = inst_74292__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__74247,children,key_watchers__$1,path_entity,env__$1,inst_74279,inst_74257,inst_74286,inst_74252,inst_74280,inst_74292,inst_74286__$1,inst_74287,inst_74288,inst_74289,inst_74290,inst_74291,inst_74292__$1,inst_74293,state_val_74693,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p__74294){
var map__74792 = p__74294;
var map__74792__$1 = (((((!((map__74792 == null))))?(((((map__74792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74792):map__74792);
var ast = map__74792__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74792__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__74247,children,key_watchers__$1,path_entity,env__$1,inst_74279,inst_74257,inst_74286,inst_74252,inst_74280,inst_74292,inst_74286__$1,inst_74287,inst_74288,inst_74289,inst_74290,inst_74291,inst_74292__$1,inst_74293,state_val_74693,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_74296 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_74295);
var inst_74297 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_74293,inst_74296,inst_74280);
var inst_74298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74292__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_74692__$1 = (function (){var statearr_74794 = state_74692;
(statearr_74794[(45)] = inst_74297);

(statearr_74794[(23)] = inst_74286__$1);

(statearr_74794[(12)] = inst_74292__$1);

return statearr_74794;
})();
if(cljs.core.truth_(inst_74298)){
var statearr_74795_76089 = state_74692__$1;
(statearr_74795_76089[(1)] = (23));

} else {
var statearr_74796_76090 = state_74692__$1;
(statearr_74796_76090[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (90))){
var inst_74516 = (state_74692[(46)]);
var state_74692__$1 = state_74692;
var statearr_74797_76091 = state_74692__$1;
(statearr_74797_76091[(2)] = inst_74516);

(statearr_74797_76091[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (109))){
var inst_74576 = (state_74692[(36)]);
var inst_74540 = (state_74692[(10)]);
var inst_74593 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_74540,inst_74576,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_74692__$1 = state_74692;
var statearr_74798_76096 = state_74692__$1;
(statearr_74798_76096[(2)] = inst_74593);

(statearr_74798_76096[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (36))){
var inst_74322 = (state_74692[(47)]);
var state_74692__$1 = state_74692;
var statearr_74802_76098 = state_74692__$1;
(statearr_74802_76098[(2)] = inst_74322);

(statearr_74802_76098[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (41))){
var state_74692__$1 = state_74692;
var statearr_74803_76105 = state_74692__$1;
(statearr_74803_76105[(2)] = false);

(statearr_74803_76105[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (118))){
var inst_74542 = (state_74692[(7)]);
var inst_74543 = (state_74692[(8)]);
var inst_74552 = (state_74692[(9)]);
var inst_74540 = (state_74692[(10)]);
var inst_74541 = (state_74692[(11)]);
var inst_74292 = (state_74692[(12)]);
var inst_74574 = (state_74692[(13)]);
var inst_74617 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74618 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_74574];
var inst_74619 = cljs.core.PersistentHashMap.fromArrays(inst_74617,inst_74618);
var inst_74620 = com.wsscode.pathom.trace.trace(inst_74292,inst_74619);
var inst_74621 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_74622 = com.wsscode.pathom.parser.watch_pending_key(inst_74292,inst_74574);
var inst_74623 = [inst_74574];
var inst_74624 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_74623);
var inst_74625 = [inst_74622,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_74624];
var inst_74626 = cljs.core.PersistentHashMap.fromArrays(inst_74621,inst_74625);
var inst_74627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_74542,inst_74626);
var tmp74799 = inst_74543;
var tmp74800 = inst_74540;
var tmp74801 = inst_74541;
var inst_74540__$1 = tmp74800;
var inst_74541__$1 = tmp74801;
var inst_74542__$1 = inst_74627;
var inst_74543__$1 = tmp74799;
var inst_74544 = inst_74552;
var state_74692__$1 = (function (){var statearr_74804 = state_74692;
(statearr_74804[(7)] = inst_74542__$1);

(statearr_74804[(8)] = inst_74543__$1);

(statearr_74804[(10)] = inst_74540__$1);

(statearr_74804[(14)] = inst_74544);

(statearr_74804[(11)] = inst_74541__$1);

(statearr_74804[(48)] = inst_74620);

return statearr_74804;
})();
var statearr_74805_76142 = state_74692__$1;
(statearr_74805_76142[(2)] = null);

(statearr_74805_76142[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (89))){
var inst_74516 = (state_74692[(46)]);
var inst_74535 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74516);
var state_74692__$1 = state_74692;
var statearr_74806_76144 = state_74692__$1;
(statearr_74806_76144[(2)] = inst_74535);

(statearr_74806_76144[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (100))){
var inst_74551 = (state_74692[(29)]);
var inst_74570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74551);
var state_74692__$1 = state_74692;
var statearr_74807_76146 = state_74692__$1;
(statearr_74807_76146[(2)] = inst_74570);

(statearr_74807_76146[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (131))){
var inst_74540 = (state_74692[(10)]);
var state_74692__$1 = state_74692;
var statearr_74808_76149 = state_74692__$1;
(statearr_74808_76149[(2)] = inst_74540);

(statearr_74808_76149[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (122))){
var state_74692__$1 = state_74692;
var statearr_74809_76151 = state_74692__$1;
(statearr_74809_76151[(1)] = (124));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (43))){
var state_74692__$1 = state_74692;
var statearr_74811_76153 = state_74692__$1;
(statearr_74811_76153[(2)] = true);

(statearr_74811_76153[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (61))){
var inst_74347 = (state_74692[(16)]);
var inst_74380 = (state_74692[(17)]);
var inst_74418 = cljs.core.contains_QMARK_(inst_74347,inst_74380);
var state_74692__$1 = state_74692;
var statearr_74812_76155 = state_74692__$1;
(statearr_74812_76155[(2)] = inst_74418);

(statearr_74812_76155[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (29))){
var inst_74322 = (state_74692[(47)]);
var inst_74328 = inst_74322.cljs$lang$protocol_mask$partition0$;
var inst_74329 = (inst_74328 & (64));
var inst_74330 = inst_74322.cljs$core$ISeq$;
var inst_74331 = (cljs.core.PROTOCOL_SENTINEL === inst_74330);
var inst_74332 = ((inst_74329) || (inst_74331));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74332)){
var statearr_74813_76157 = state_74692__$1;
(statearr_74813_76157[(1)] = (32));

} else {
var statearr_74814_76158 = state_74692__$1;
(statearr_74814_76158[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (44))){
var state_74692__$1 = state_74692;
var statearr_74815_76160 = state_74692__$1;
(statearr_74815_76160[(2)] = false);

(statearr_74815_76160[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (93))){
var inst_74686 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74819_76162 = state_74692__$1;
(statearr_74819_76162[(2)] = inst_74686);

(statearr_74819_76162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (6))){
var inst_74250 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_74692__$1 = state_74692;
var statearr_74820_76163 = state_74692__$1;
(statearr_74820_76163[(2)] = inst_74250);

(statearr_74820_76163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (111))){
var inst_74542 = (state_74692[(7)]);
var inst_74543 = (state_74692[(8)]);
var inst_74552 = (state_74692[(9)]);
var inst_74541 = (state_74692[(11)]);
var inst_74596 = (state_74692[(2)]);
var tmp74816 = inst_74542;
var tmp74817 = inst_74543;
var tmp74818 = inst_74541;
var inst_74540 = inst_74596;
var inst_74541__$1 = tmp74818;
var inst_74542__$1 = tmp74816;
var inst_74543__$1 = tmp74817;
var inst_74544 = inst_74552;
var state_74692__$1 = (function (){var statearr_74824 = state_74692;
(statearr_74824[(7)] = inst_74542__$1);

(statearr_74824[(8)] = inst_74543__$1);

(statearr_74824[(10)] = inst_74540);

(statearr_74824[(14)] = inst_74544);

(statearr_74824[(11)] = inst_74541__$1);

return statearr_74824;
})();
var statearr_74825_76167 = state_74692__$1;
(statearr_74825_76167[(2)] = null);

(statearr_74825_76167[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (28))){
var inst_74280 = (state_74692[(40)]);
var inst_74322 = (state_74692[(47)]);
var inst_74318 = (state_74692[(2)]);
var inst_74319 = cljs.core.PersistentHashSet.EMPTY;
var inst_74320 = cljs.core.PersistentHashMap.EMPTY;
var inst_74321 = cljs.core.seq(inst_74280);
var inst_74322__$1 = cljs.core.first(inst_74321);
var inst_74323 = cljs.core.next(inst_74321);
var inst_74325 = (inst_74322__$1 == null);
var inst_74326 = cljs.core.not(inst_74325);
var state_74692__$1 = (function (){var statearr_74826 = state_74692;
(statearr_74826[(49)] = inst_74323);

(statearr_74826[(50)] = inst_74318);

(statearr_74826[(51)] = inst_74320);

(statearr_74826[(52)] = inst_74319);

(statearr_74826[(47)] = inst_74322__$1);

return statearr_74826;
})();
if(inst_74326){
var statearr_74827_76170 = state_74692__$1;
(statearr_74827_76170[(1)] = (29));

} else {
var statearr_74828_76171 = state_74692__$1;
(statearr_74828_76171[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (64))){
var inst_74349 = (state_74692[(19)]);
var inst_74347 = (state_74692[(16)]);
var inst_74346 = (state_74692[(21)]);
var inst_74358 = (state_74692[(22)]);
var inst_74348 = (state_74692[(24)]);
var inst_74380 = (state_74692[(17)]);
var inst_74292 = (state_74692[(12)]);
var inst_74423 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74424 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_74380];
var inst_74425 = cljs.core.PersistentHashMap.fromArrays(inst_74423,inst_74424);
var inst_74426 = com.wsscode.pathom.trace.trace(inst_74292,inst_74425);
var inst_74427 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_74428 = com.wsscode.pathom.parser.watch_pending_key(inst_74292,inst_74380);
var inst_74429 = [inst_74380];
var inst_74430 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_74429);
var inst_74431 = [inst_74428,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_74430];
var inst_74432 = cljs.core.PersistentHashMap.fromArrays(inst_74427,inst_74431);
var inst_74433 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_74348,inst_74432);
var tmp74821 = inst_74349;
var tmp74822 = inst_74347;
var tmp74823 = inst_74346;
var inst_74346__$1 = tmp74823;
var inst_74347__$1 = tmp74822;
var inst_74348__$1 = inst_74433;
var inst_74349__$1 = tmp74821;
var inst_74350 = inst_74358;
var state_74692__$1 = (function (){var statearr_74829 = state_74692;
(statearr_74829[(19)] = inst_74349__$1);

(statearr_74829[(53)] = inst_74426);

(statearr_74829[(16)] = inst_74347__$1);

(statearr_74829[(21)] = inst_74346__$1);

(statearr_74829[(24)] = inst_74348__$1);

(statearr_74829[(25)] = inst_74350);

return statearr_74829;
})();
var statearr_74830_76178 = state_74692__$1;
(statearr_74830_76178[(2)] = null);

(statearr_74830_76178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (103))){
var inst_74543 = (state_74692[(8)]);
var inst_74573 = (state_74692[(31)]);
var inst_74292 = (state_74692[(12)]);
var inst_74574 = (state_74692[(13)]);
var inst_74576 = com.wsscode.pathom.parser.ast__GT_out_key(inst_74573);
var inst_74577 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74578 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_74574];
var inst_74579 = cljs.core.PersistentHashMap.fromArrays(inst_74577,inst_74578);
var inst_74580 = com.wsscode.pathom.trace.trace(inst_74292,inst_74579);
var inst_74581 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_74543,inst_74574,(0));
var inst_74582 = (max_key_iterations - (1));
var inst_74583 = (inst_74581 > inst_74582);
var state_74692__$1 = (function (){var statearr_74831 = state_74692;
(statearr_74831[(36)] = inst_74576);

(statearr_74831[(54)] = inst_74580);

return statearr_74831;
})();
if(cljs.core.truth_(inst_74583)){
var statearr_74832_76181 = state_74692__$1;
(statearr_74832_76181[(1)] = (106));

} else {
var statearr_74833_76182 = state_74692__$1;
(statearr_74833_76182[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (51))){
var inst_74490 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74834_76184 = state_74692__$1;
(statearr_74834_76184[(2)] = inst_74490);

(statearr_74834_76184[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (25))){
var inst_74688 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74835_76186 = state_74692__$1;
(statearr_74835_76186[(2)] = inst_74688);


cljs.core.async.impl.ioc_helpers.process_exception(state_74692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (34))){
var inst_74336 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74836_76187 = state_74692__$1;
(statearr_74836_76187[(2)] = inst_74336);

(statearr_74836_76187[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (125))){
var state_74692__$1 = state_74692;
var statearr_74837_76188 = state_74692__$1;
(statearr_74837_76188[(2)] = null);

(statearr_74837_76188[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (17))){
var inst_74258 = (state_74692[(55)]);
var inst_74276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74258);
var state_74692__$1 = state_74692;
var statearr_74838_76189 = state_74692__$1;
(statearr_74838_76189[(2)] = inst_74276);

(statearr_74838_76189[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (3))){
var inst_74243 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74839_76191 = state_74692__$1;
(statearr_74839_76191[(2)] = inst_74243);


cljs.core.async.impl.ioc_helpers.process_exception(state_74692__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (12))){
var state_74692__$1 = state_74692;
var statearr_74840_76194 = state_74692__$1;
(statearr_74840_76194[(2)] = false);

(statearr_74840_76194[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (2))){
var inst_74690 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74692__$1,inst_74690);
} else {
if((state_val_74693 === (66))){
var inst_74462 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74841_76195 = state_74692__$1;
(statearr_74841_76195[(2)] = inst_74462);

(statearr_74841_76195[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (107))){
var inst_74576 = (state_74692[(36)]);
var inst_74540 = (state_74692[(10)]);
var inst_74599 = cljs.core.contains_QMARK_(inst_74540,inst_74576);
var inst_74600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74540,inst_74576);
var inst_74601 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_74600);
var inst_74602 = ((inst_74599) && (inst_74601));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74602)){
var statearr_74842_76197 = state_74692__$1;
(statearr_74842_76197[(1)] = (112));

} else {
var statearr_74843_76198 = state_74692__$1;
(statearr_74843_76198[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (23))){
var inst_74257 = (state_74692[(33)]);
var inst_74292 = (state_74692[(12)]);
var inst_74300 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_74301 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_74257];
var inst_74302 = cljs.core.PersistentHashMap.fromArrays(inst_74300,inst_74301);
var inst_74303 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_74292,inst_74302);
var inst_74313 = cljs.core.PersistentHashMap.EMPTY;
var state_74692__$1 = (function (){var statearr_74844 = state_74692;
(statearr_74844[(32)] = inst_74303);

(statearr_74844[(56)] = inst_74313);

return statearr_74844;
})();
if(cljs.core.truth_(waiting)){
var statearr_74845_76201 = state_74692__$1;
(statearr_74845_76201[(1)] = (26));

} else {
var statearr_74846_76203 = state_74692__$1;
(statearr_74846_76203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (47))){
var inst_74357 = (state_74692[(35)]);
var state_74692__$1 = state_74692;
var statearr_74847_76204 = state_74692__$1;
(statearr_74847_76204[(2)] = inst_74357);

(statearr_74847_76204[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (35))){
var inst_74322 = (state_74692[(47)]);
var inst_74341 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_74322);
var state_74692__$1 = state_74692;
var statearr_74848_76205 = state_74692__$1;
(statearr_74848_76205[(2)] = inst_74341);

(statearr_74848_76205[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (127))){
var inst_74297 = (state_74692[(45)]);
var inst_74542 = (state_74692[(7)]);
var inst_74543 = (state_74692[(8)]);
var inst_74540 = (state_74692[(10)]);
var inst_74286 = (state_74692[(23)]);
var inst_74541 = (state_74692[(11)]);
var inst_74292 = (state_74692[(12)]);
var inst_74667 = com.wsscode.pathom.parser.process_next_message(inst_74292,tx,inst_74541,inst_74297,inst_74542,inst_74543,inst_74286,inst_74540);
var state_74692__$1 = state_74692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74692__$1,(130),inst_74667);
} else {
if((state_val_74693 === (82))){
var inst_74516 = (state_74692[(46)]);
var inst_74280 = (state_74692[(40)]);
var inst_74512 = (state_74692[(2)]);
var inst_74513 = cljs.core.PersistentHashSet.EMPTY;
var inst_74514 = cljs.core.PersistentHashMap.EMPTY;
var inst_74515 = cljs.core.seq(inst_74280);
var inst_74516__$1 = cljs.core.first(inst_74515);
var inst_74517 = cljs.core.next(inst_74515);
var inst_74519 = (inst_74516__$1 == null);
var inst_74520 = cljs.core.not(inst_74519);
var state_74692__$1 = (function (){var statearr_74849 = state_74692;
(statearr_74849[(39)] = inst_74513);

(statearr_74849[(46)] = inst_74516__$1);

(statearr_74849[(57)] = inst_74517);

(statearr_74849[(41)] = inst_74514);

(statearr_74849[(42)] = inst_74512);

return statearr_74849;
})();
if(inst_74520){
var statearr_74850_76213 = state_74692__$1;
(statearr_74850_76213[(1)] = (83));

} else {
var statearr_74851_76214 = state_74692__$1;
(statearr_74851_76214[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (76))){
var inst_74475 = (state_74692[(2)]);
var inst_74476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74475,(0),null);
var inst_74477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74475,(1),null);
var inst_74478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74475,(2),null);
var inst_74479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74475,(3),null);
var inst_74480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74475,(4),null);
var inst_74346 = inst_74476;
var inst_74347 = inst_74477;
var inst_74348 = inst_74478;
var inst_74349 = inst_74479;
var inst_74350 = inst_74480;
var state_74692__$1 = (function (){var statearr_74852 = state_74692;
(statearr_74852[(19)] = inst_74349);

(statearr_74852[(16)] = inst_74347);

(statearr_74852[(21)] = inst_74346);

(statearr_74852[(24)] = inst_74348);

(statearr_74852[(25)] = inst_74350);

return statearr_74852;
})();
var statearr_74853_76226 = state_74692__$1;
(statearr_74853_76226[(2)] = null);

(statearr_74853_76226[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (97))){
var state_74692__$1 = state_74692;
var statearr_74857_76231 = state_74692__$1;
(statearr_74857_76231[(2)] = true);

(statearr_74857_76231[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (19))){
var inst_74279 = (state_74692[(44)]);
var inst_74279__$1 = (state_74692[(2)]);
var inst_74280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74279__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_74692__$1 = (function (){var statearr_74858 = state_74692;
(statearr_74858[(44)] = inst_74279__$1);

(statearr_74858[(40)] = inst_74280);

return statearr_74858;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_74859_76247 = state_74692__$1;
(statearr_74859_76247[(1)] = (20));

} else {
var statearr_74860_76250 = state_74692__$1;
(statearr_74860_76250[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (57))){
var inst_74349 = (state_74692[(19)]);
var inst_74347 = (state_74692[(16)]);
var inst_74358 = (state_74692[(22)]);
var inst_74348 = (state_74692[(24)]);
var inst_74402 = (state_74692[(2)]);
var tmp74854 = inst_74349;
var tmp74855 = inst_74347;
var tmp74856 = inst_74348;
var inst_74346 = inst_74402;
var inst_74347__$1 = tmp74855;
var inst_74348__$1 = tmp74856;
var inst_74349__$1 = tmp74854;
var inst_74350 = inst_74358;
var state_74692__$1 = (function (){var statearr_74861 = state_74692;
(statearr_74861[(19)] = inst_74349__$1);

(statearr_74861[(16)] = inst_74347__$1);

(statearr_74861[(21)] = inst_74346);

(statearr_74861[(24)] = inst_74348__$1);

(statearr_74861[(25)] = inst_74350);

return statearr_74861;
})();
var statearr_74862_76275 = state_74692__$1;
(statearr_74862_76275[(2)] = null);

(statearr_74862_76275[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (68))){
var state_74692__$1 = state_74692;
var statearr_74863_76276 = state_74692__$1;
(statearr_74863_76276[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (11))){
var inst_74258 = (state_74692[(55)]);
var inst_74263 = inst_74258.cljs$lang$protocol_mask$partition0$;
var inst_74264 = (inst_74263 & (64));
var inst_74265 = inst_74258.cljs$core$ISeq$;
var inst_74266 = (cljs.core.PROTOCOL_SENTINEL === inst_74265);
var inst_74267 = ((inst_74264) || (inst_74266));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74267)){
var statearr_74865_76277 = state_74692__$1;
(statearr_74865_76277[(1)] = (14));

} else {
var statearr_74866_76278 = state_74692__$1;
(statearr_74866_76278[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (115))){
var inst_74541 = (state_74692[(11)]);
var inst_74574 = (state_74692[(13)]);
var inst_74612 = cljs.core.contains_QMARK_(inst_74541,inst_74574);
var state_74692__$1 = state_74692;
var statearr_74867_76280 = state_74692__$1;
(statearr_74867_76280[(2)] = inst_74612);

(statearr_74867_76280[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (9))){
var state_74692__$1 = state_74692;
var statearr_74872_76282 = state_74692__$1;
(statearr_74872_76282[(2)] = null);

(statearr_74872_76282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (5))){
var state_74692__$1 = state_74692;
var statearr_74873_76283 = state_74692__$1;
(statearr_74873_76283[(2)] = key_process_timeout_step);

(statearr_74873_76283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (112))){
var inst_74542 = (state_74692[(7)]);
var inst_74543 = (state_74692[(8)]);
var inst_74552 = (state_74692[(9)]);
var inst_74540 = (state_74692[(10)]);
var inst_74541 = (state_74692[(11)]);
var inst_74292 = (state_74692[(12)]);
var inst_74574 = (state_74692[(13)]);
var inst_74604 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74605 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_74574];
var inst_74606 = cljs.core.PersistentHashMap.fromArrays(inst_74604,inst_74605);
var inst_74607 = com.wsscode.pathom.trace.trace(inst_74292,inst_74606);
var tmp74868 = inst_74542;
var tmp74869 = inst_74543;
var tmp74870 = inst_74540;
var tmp74871 = inst_74541;
var inst_74540__$1 = tmp74870;
var inst_74541__$1 = tmp74871;
var inst_74542__$1 = tmp74868;
var inst_74543__$1 = tmp74869;
var inst_74544 = inst_74552;
var state_74692__$1 = (function (){var statearr_74874 = state_74692;
(statearr_74874[(58)] = inst_74607);

(statearr_74874[(7)] = inst_74542__$1);

(statearr_74874[(8)] = inst_74543__$1);

(statearr_74874[(10)] = inst_74540__$1);

(statearr_74874[(14)] = inst_74544);

(statearr_74874[(11)] = inst_74541__$1);

return statearr_74874;
})();
var statearr_74875_76288 = state_74692__$1;
(statearr_74875_76288[(2)] = null);

(statearr_74875_76288[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (83))){
var inst_74516 = (state_74692[(46)]);
var inst_74522 = inst_74516.cljs$lang$protocol_mask$partition0$;
var inst_74523 = (inst_74522 & (64));
var inst_74524 = inst_74516.cljs$core$ISeq$;
var inst_74525 = (cljs.core.PROTOCOL_SENTINEL === inst_74524);
var inst_74526 = ((inst_74523) || (inst_74525));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74526)){
var statearr_74876_76291 = state_74692__$1;
(statearr_74876_76291[(1)] = (86));

} else {
var statearr_74877_76292 = state_74692__$1;
(statearr_74877_76292[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (14))){
var state_74692__$1 = state_74692;
var statearr_74878_76293 = state_74692__$1;
(statearr_74878_76293[(2)] = true);

(statearr_74878_76293[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (45))){
var inst_74371 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74879_76295 = state_74692__$1;
(statearr_74879_76295[(2)] = inst_74371);

(statearr_74879_76295[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (53))){
var inst_74382 = (state_74692[(18)]);
var inst_74346 = (state_74692[(21)]);
var inst_74405 = cljs.core.contains_QMARK_(inst_74346,inst_74382);
var inst_74406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74346,inst_74382);
var inst_74407 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_74406);
var inst_74408 = ((inst_74405) && (inst_74407));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74408)){
var statearr_74880_76299 = state_74692__$1;
(statearr_74880_76299[(1)] = (58));

} else {
var statearr_74881_76300 = state_74692__$1;
(statearr_74881_76300[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (78))){
var state_74692__$1 = state_74692;
var statearr_74882_76301 = state_74692__$1;
(statearr_74882_76301[(2)] = null);

(statearr_74882_76301[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (132))){
var state_74692__$1 = state_74692;
var statearr_74883_76302 = state_74692__$1;
(statearr_74883_76302[(2)] = null);

(statearr_74883_76302[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (26))){
var state_74692__$1 = state_74692;
var statearr_74884_76305 = state_74692__$1;
(statearr_74884_76305[(2)] = waiting);

(statearr_74884_76305[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (123))){
var inst_74654 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74885_76306 = state_74692__$1;
(statearr_74885_76306[(2)] = inst_74654);

(statearr_74885_76306[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (16))){
var inst_74271 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74886_76308 = state_74692__$1;
(statearr_74886_76308[(2)] = inst_74271);

(statearr_74886_76308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (133))){
var inst_74680 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74887_76309 = state_74692__$1;
(statearr_74887_76309[(2)] = inst_74680);

(statearr_74887_76309[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (81))){
var inst_74510 = cljs.core.PersistentHashSet.EMPTY;
var state_74692__$1 = state_74692;
var statearr_74888_76310 = state_74692__$1;
(statearr_74888_76310[(2)] = inst_74510);

(statearr_74888_76310[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (120))){
var inst_74656 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74889_76313 = state_74692__$1;
(statearr_74889_76313[(2)] = inst_74656);

(statearr_74889_76313[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (79))){
var inst_74486 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74890_76314 = state_74692__$1;
(statearr_74890_76314[(2)] = inst_74486);

(statearr_74890_76314[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (38))){
var inst_74357 = (state_74692[(35)]);
var inst_74350 = (state_74692[(25)]);
var inst_74356 = cljs.core.seq(inst_74350);
var inst_74357__$1 = cljs.core.first(inst_74356);
var inst_74358 = cljs.core.next(inst_74356);
var inst_74360 = (inst_74357__$1 == null);
var inst_74361 = cljs.core.not(inst_74360);
var state_74692__$1 = (function (){var statearr_74891 = state_74692;
(statearr_74891[(35)] = inst_74357__$1);

(statearr_74891[(22)] = inst_74358);

return statearr_74891;
})();
if(inst_74361){
var statearr_74892_76316 = state_74692__$1;
(statearr_74892_76316[(1)] = (40));

} else {
var statearr_74893_76317 = state_74692__$1;
(statearr_74893_76317[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (126))){
var inst_74652 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74894_76318 = state_74692__$1;
(statearr_74894_76318[(2)] = inst_74652);

(statearr_74894_76318[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (98))){
var state_74692__$1 = state_74692;
var statearr_74895_76320 = state_74692__$1;
(statearr_74895_76320[(2)] = false);

(statearr_74895_76320[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (124))){
var inst_74576 = (state_74692[(36)]);
var inst_74542 = (state_74692[(7)]);
var inst_74543 = (state_74692[(8)]);
var inst_74552 = (state_74692[(9)]);
var inst_74540 = (state_74692[(10)]);
var inst_74286 = (state_74692[(23)]);
var inst_74541 = (state_74692[(11)]);
var inst_74573 = (state_74692[(31)]);
var inst_74292 = (state_74692[(12)]);
var inst_74642 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_74543,inst_74576,com.wsscode.pathom.parser.zero_inc);
var inst_74643 = com.wsscode.pathom.parser.parallel_process_value(inst_74292,tx,inst_74573,inst_74286,inst_74540,inst_74541,inst_74542,read,mutate,inst_74642,inst_74552);
var inst_74644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74643,(0),null);
var inst_74645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74643,(1),null);
var inst_74646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74643,(2),null);
var inst_74647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74643,(3),null);
var inst_74648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74643,(4),null);
var inst_74540__$1 = inst_74644;
var inst_74541__$1 = inst_74645;
var inst_74542__$1 = inst_74646;
var inst_74543__$1 = inst_74647;
var inst_74544 = inst_74648;
var state_74692__$1 = (function (){var statearr_74896 = state_74692;
(statearr_74896[(7)] = inst_74542__$1);

(statearr_74896[(8)] = inst_74543__$1);

(statearr_74896[(10)] = inst_74540__$1);

(statearr_74896[(14)] = inst_74544);

(statearr_74896[(11)] = inst_74541__$1);

return statearr_74896;
})();
var statearr_74897_76324 = state_74692__$1;
(statearr_74897_76324[(2)] = null);

(statearr_74897_76324[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (87))){
var state_74692__$1 = state_74692;
var statearr_74898_76328 = state_74692__$1;
(statearr_74898_76328[(2)] = false);

(statearr_74898_76328[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (30))){
var state_74692__$1 = state_74692;
var statearr_74899_76329 = state_74692__$1;
(statearr_74899_76329[(2)] = false);

(statearr_74899_76329[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (73))){
var inst_74349 = (state_74692[(19)]);
var inst_74297 = (state_74692[(45)]);
var inst_74347 = (state_74692[(16)]);
var inst_74346 = (state_74692[(21)]);
var inst_74286 = (state_74692[(23)]);
var inst_74348 = (state_74692[(24)]);
var inst_74292 = (state_74692[(12)]);
var inst_74473 = com.wsscode.pathom.parser.process_next_message(inst_74292,tx,inst_74347,inst_74297,inst_74348,inst_74349,inst_74286,inst_74346);
var state_74692__$1 = state_74692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74692__$1,(76),inst_74473);
} else {
if((state_val_74693 === (96))){
var inst_74568 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74568)){
var statearr_74900_76342 = state_74692__$1;
(statearr_74900_76342[(1)] = (100));

} else {
var statearr_74901_76349 = state_74692__$1;
(statearr_74901_76349[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (10))){
var inst_74258 = (state_74692[(55)]);
var inst_74257 = (state_74692[(2)]);
var inst_74258__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_74260 = (inst_74258__$1 == null);
var inst_74261 = cljs.core.not(inst_74260);
var state_74692__$1 = (function (){var statearr_74902 = state_74692;
(statearr_74902[(55)] = inst_74258__$1);

(statearr_74902[(33)] = inst_74257);

return statearr_74902;
})();
if(inst_74261){
var statearr_74903_76365 = state_74692__$1;
(statearr_74903_76365[(1)] = (11));

} else {
var statearr_74904_76374 = state_74692__$1;
(statearr_74904_76374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (18))){
var inst_74258 = (state_74692[(55)]);
var state_74692__$1 = state_74692;
var statearr_74905_76384 = state_74692__$1;
(statearr_74905_76384[(2)] = inst_74258);

(statearr_74905_76384[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (105))){
var inst_74684 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74906_76388 = state_74692__$1;
(statearr_74906_76388[(2)] = inst_74684);

(statearr_74906_76388[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (52))){
var inst_74382 = (state_74692[(18)]);
var inst_74346 = (state_74692[(21)]);
var inst_74380 = (state_74692[(17)]);
var inst_74292 = (state_74692[(12)]);
var inst_74391 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_74392 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_74380,max_key_iterations];
var inst_74393 = cljs.core.PersistentHashMap.fromArrays(inst_74391,inst_74392);
var inst_74394 = com.wsscode.pathom.trace.trace(inst_74292,inst_74393);
var inst_74396 = cljs.core.contains_QMARK_(inst_74346,inst_74382);
var inst_74397 = (!(inst_74396));
var state_74692__$1 = (function (){var statearr_74911 = state_74692;
(statearr_74911[(59)] = inst_74394);

return statearr_74911;
})();
if(inst_74397){
var statearr_74912_76390 = state_74692__$1;
(statearr_74912_76390[(1)] = (55));

} else {
var statearr_74913_76391 = state_74692__$1;
(statearr_74913_76391[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (114))){
var inst_74658 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
var statearr_74914_76393 = state_74692__$1;
(statearr_74914_76393[(2)] = inst_74658);

(statearr_74914_76393[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (67))){
var inst_74349 = (state_74692[(19)]);
var inst_74347 = (state_74692[(16)]);
var inst_74346 = (state_74692[(21)]);
var inst_74358 = (state_74692[(22)]);
var inst_74348 = (state_74692[(24)]);
var inst_74380 = (state_74692[(17)]);
var inst_74292 = (state_74692[(12)]);
var inst_74438 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74439 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_74380];
var inst_74440 = cljs.core.PersistentHashMap.fromArrays(inst_74438,inst_74439);
var inst_74441 = com.wsscode.pathom.trace.trace(inst_74292,inst_74440);
var tmp74907 = inst_74349;
var tmp74908 = inst_74347;
var tmp74909 = inst_74346;
var tmp74910 = inst_74348;
var inst_74346__$1 = tmp74909;
var inst_74347__$1 = tmp74908;
var inst_74348__$1 = tmp74910;
var inst_74349__$1 = tmp74907;
var inst_74350 = inst_74358;
var state_74692__$1 = (function (){var statearr_74915 = state_74692;
(statearr_74915[(19)] = inst_74349__$1);

(statearr_74915[(16)] = inst_74347__$1);

(statearr_74915[(21)] = inst_74346__$1);

(statearr_74915[(60)] = inst_74441);

(statearr_74915[(24)] = inst_74348__$1);

(statearr_74915[(25)] = inst_74350);

return statearr_74915;
})();
var statearr_74916_76397 = state_74692__$1;
(statearr_74916_76397[(2)] = null);

(statearr_74916_76397[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (71))){
var state_74692__$1 = state_74692;
var statearr_74917_76399 = state_74692__$1;
(statearr_74917_76399[(2)] = null);

(statearr_74917_76399[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (42))){
var inst_74374 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74374)){
var statearr_74918_76401 = state_74692__$1;
(statearr_74918_76401[(1)] = (46));

} else {
var statearr_74919_76403 = state_74692__$1;
(statearr_74919_76403[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (80))){
var state_74692__$1 = state_74692;
var statearr_74920_76404 = state_74692__$1;
(statearr_74920_76404[(2)] = waiting);

(statearr_74920_76404[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (37))){
var inst_74318 = (state_74692[(50)]);
var inst_74313 = (state_74692[(56)]);
var inst_74320 = (state_74692[(51)]);
var inst_74280 = (state_74692[(40)]);
var inst_74319 = (state_74692[(52)]);
var inst_74344 = (state_74692[(2)]);
var inst_74345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_74344,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_74346 = inst_74313;
var inst_74347 = inst_74318;
var inst_74348 = inst_74319;
var inst_74349 = inst_74320;
var inst_74350 = inst_74280;
var state_74692__$1 = (function (){var statearr_74921 = state_74692;
(statearr_74921[(19)] = inst_74349);

(statearr_74921[(16)] = inst_74347);

(statearr_74921[(61)] = inst_74345);

(statearr_74921[(21)] = inst_74346);

(statearr_74921[(24)] = inst_74348);

(statearr_74921[(25)] = inst_74350);

return statearr_74921;
})();
var statearr_74922_76409 = state_74692__$1;
(statearr_74922_76409[(2)] = null);

(statearr_74922_76409[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (63))){
var inst_74421 = (state_74692[(2)]);
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74421)){
var statearr_74923_76410 = state_74692__$1;
(statearr_74923_76410[(1)] = (64));

} else {
var statearr_74924_76411 = state_74692__$1;
(statearr_74924_76411[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (94))){
var inst_74551 = (state_74692[(29)]);
var inst_74557 = inst_74551.cljs$lang$protocol_mask$partition0$;
var inst_74558 = (inst_74557 & (64));
var inst_74559 = inst_74551.cljs$core$ISeq$;
var inst_74560 = (cljs.core.PROTOCOL_SENTINEL === inst_74559);
var inst_74561 = ((inst_74558) || (inst_74560));
var state_74692__$1 = state_74692;
if(cljs.core.truth_(inst_74561)){
var statearr_74925_76414 = state_74692__$1;
(statearr_74925_76414[(1)] = (97));

} else {
var statearr_74926_76415 = state_74692__$1;
(statearr_74926_76415[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (8))){
var inst_74252 = (state_74692[(27)]);
var inst_74254 = (inst_74252.cljs$core$IFn$_invoke$arity$2 ? inst_74252.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_74252.call(null,env,key_process_timeout));
var state_74692__$1 = state_74692;
var statearr_74927_76417 = state_74692__$1;
(statearr_74927_76417[(2)] = inst_74254);

(statearr_74927_76417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (49))){
var inst_74349 = (state_74692[(19)]);
var inst_74379 = (state_74692[(20)]);
var inst_74380 = (state_74692[(17)]);
var inst_74292 = (state_74692[(12)]);
var inst_74382 = com.wsscode.pathom.parser.ast__GT_out_key(inst_74379);
var inst_74383 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_74384 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_74380];
var inst_74385 = cljs.core.PersistentHashMap.fromArrays(inst_74383,inst_74384);
var inst_74386 = com.wsscode.pathom.trace.trace(inst_74292,inst_74385);
var inst_74387 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_74349,inst_74380,(0));
var inst_74388 = (max_key_iterations - (1));
var inst_74389 = (inst_74387 > inst_74388);
var state_74692__$1 = (function (){var statearr_74928 = state_74692;
(statearr_74928[(18)] = inst_74382);

(statearr_74928[(62)] = inst_74386);

return statearr_74928;
})();
if(cljs.core.truth_(inst_74389)){
var statearr_74929_76420 = state_74692__$1;
(statearr_74929_76420[(1)] = (52));

} else {
var statearr_74930_76421 = state_74692__$1;
(statearr_74930_76421[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74693 === (84))){
var state_74692__$1 = state_74692;
var statearr_74931_76422 = state_74692__$1;
(statearr_74931_76422[(2)] = false);

(statearr_74931_76422[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__50952__auto__,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto____0 = (function (){
var statearr_74932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74932[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto__);

(statearr_74932[(1)] = (1));

return statearr_74932;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto____1 = (function (state_74692){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_74692);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e74933){if((e74933 instanceof Object)){
var ex__50956__auto__ = e74933;
var statearr_74934_76427 = state_74692;
(statearr_74934_76427[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_74692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76428 = state_74692;
state_74692 = G__76428;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto__ = function(state_74692){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto____1.call(this,state_74692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__51171__auto__ = (function (){var statearr_74935 = f__51170__auto__();
(statearr_74935[(6)] = c__51169__auto__);

return statearr_74935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,map__74239,map__74239__$1,read,mutate,map__74240,map__74240__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__51169__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__74936){
var map__74937 = p__74936;
var map__74937__$1 = (((((!((map__74937 == null))))?(((((map__74937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74937):map__74937);
var pconfig = map__74937__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74937__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__74937,map__74937__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__74939,tx){
var map__74940 = p__74939;
var map__74940__$1 = (((((!((map__74940 == null))))?(((((map__74940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74940):map__74940);
var env = map__74940__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74940__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74940__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74940__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__51169__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__51169__auto__,map__74940,map__74940__$1,env,key_process_timeout,active_paths,path,map__74937,map__74937__$1,pconfig,add_error){
return (function (){
var f__51170__auto__ = (function (){var switch__50952__auto__ = ((function (c__51169__auto__,map__74940,map__74940__$1,env,key_process_timeout,active_paths,path,map__74937,map__74937__$1,pconfig,add_error){
return (function (state_74985){
var state_val_74986 = (state_74985[(1)]);
if((state_val_74986 === (7))){
var inst_74961 = (state_74985[(2)]);
var state_74985__$1 = state_74985;
return cljs.core.async.ioc_alts_BANG_(state_74985__$1,(8),inst_74961);
} else {
if((state_val_74986 === (1))){
var state_74985__$1 = state_74985;
var statearr_74987_76430 = state_74985__$1;
(statearr_74987_76430[(2)] = null);

(statearr_74987_76430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (4))){
var inst_74951 = (state_74985[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_74985,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_74946 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_74950 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], 0));
var inst_74951__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_74950,tx);
var inst_74953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_74954 = [inst_74951__$1];
var inst_74955 = (new cljs.core.PersistentVector(null,1,(5),inst_74953,inst_74954,null));
var state_74985__$1 = (function (){var statearr_74988 = state_74985;
(statearr_74988[(8)] = inst_74955);

(statearr_74988[(9)] = inst_74946);

(statearr_74988[(7)] = inst_74951__$1);

return statearr_74988;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_74989_76441 = state_74985__$1;
(statearr_74989_76441[(1)] = (5));

} else {
var statearr_74990_76445 = state_74985__$1;
(statearr_74990_76445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (6))){
var inst_74955 = (state_74985[(8)]);
var state_74985__$1 = state_74985;
var statearr_74991_76446 = state_74985__$1;
(statearr_74991_76446[(2)] = inst_74955);

(statearr_74991_76446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (3))){
var inst_74942 = (state_74985[(2)]);
var state_74985__$1 = state_74985;
var statearr_74992_76449 = state_74985__$1;
(statearr_74992_76449[(2)] = inst_74942);


cljs.core.async.impl.ioc_helpers.process_exception(state_74985__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (2))){
var inst_74983 = (state_74985[(2)]);
var state_74985__$1 = state_74985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74985__$1,inst_74983);
} else {
if((state_val_74986 === (11))){
var inst_74981 = (state_74985[(2)]);
var state_74985__$1 = state_74985;
var statearr_74993_76465 = state_74985__$1;
(statearr_74993_76465[(2)] = inst_74981);


cljs.core.async.impl.ioc_helpers.process_exception(state_74985__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (9))){
var inst_74964 = (state_74985[(10)]);
var state_74985__$1 = state_74985;
var statearr_74994_76472 = state_74985__$1;
(statearr_74994_76472[(2)] = inst_74964);

(statearr_74994_76472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (5))){
var inst_74955 = (state_74985[(8)]);
var inst_74957 = cljs.core.async.timeout(key_process_timeout);
var inst_74958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_74955,inst_74957);
var state_74985__$1 = state_74985;
var statearr_74995_76480 = state_74985__$1;
(statearr_74995_76480[(2)] = inst_74958);

(statearr_74995_76480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (10))){
var inst_74970 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_74971 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_74972 = cljs.core.PersistentHashMap.fromArrays(inst_74970,inst_74971);
var inst_74973 = com.wsscode.pathom.trace.trace(env,inst_74972);
var inst_74974 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_74975 = [key_process_timeout];
var inst_74976 = cljs.core.PersistentHashMap.fromArrays(inst_74974,inst_74975);
var inst_74977 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_74976);
var inst_74978 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_74977) : add_error.call(null,env,inst_74977));
var inst_74979 = cljs.core.PersistentHashMap.EMPTY;
var state_74985__$1 = (function (){var statearr_74996 = state_74985;
(statearr_74996[(11)] = inst_74973);

(statearr_74996[(12)] = inst_74978);

return statearr_74996;
})();
var statearr_74997_76509 = state_74985__$1;
(statearr_74997_76509[(2)] = inst_74979);

(statearr_74997_76509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74986 === (8))){
var inst_74951 = (state_74985[(7)]);
var inst_74963 = (state_74985[(2)]);
var inst_74964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74963,(0),null);
var inst_74965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_74963,(1),null);
var inst_74966 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_74967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74951,inst_74965);
var state_74985__$1 = (function (){var statearr_74998 = state_74985;
(statearr_74998[(13)] = inst_74966);

(statearr_74998[(10)] = inst_74964);

return statearr_74998;
})();
if(inst_74967){
var statearr_74999_76511 = state_74985__$1;
(statearr_74999_76511[(1)] = (9));

} else {
var statearr_75000_76512 = state_74985__$1;
(statearr_75000_76512[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__51169__auto__,map__74940,map__74940__$1,env,key_process_timeout,active_paths,path,map__74937,map__74937__$1,pconfig,add_error))
;
return ((function (switch__50952__auto__,c__51169__auto__,map__74940,map__74940__$1,env,key_process_timeout,active_paths,path,map__74937,map__74937__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto____0 = (function (){
var statearr_75001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75001[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto__);

(statearr_75001[(1)] = (1));

return statearr_75001;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto____1 = (function (state_74985){
while(true){
var ret_value__50954__auto__ = (function (){try{while(true){
var result__50955__auto__ = switch__50952__auto__(state_74985);
if(cljs.core.keyword_identical_QMARK_(result__50955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50955__auto__;
}
break;
}
}catch (e75002){if((e75002 instanceof Object)){
var ex__50956__auto__ = e75002;
var statearr_75003_76516 = state_74985;
(statearr_75003_76516[(5)] = ex__50956__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_74985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e75002;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76517 = state_74985;
state_74985 = G__76517;
continue;
} else {
return ret_value__50954__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto__ = function(state_74985){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto____1.call(this,state_74985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__50953__auto__;
})()
;})(switch__50952__auto__,c__51169__auto__,map__74940,map__74940__$1,env,key_process_timeout,active_paths,path,map__74937,map__74937__$1,pconfig,add_error))
})();
var state__51171__auto__ = (function (){var statearr_75004 = f__51170__auto__();
(statearr_75004[(6)] = c__51169__auto__);

return statearr_75004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__51171__auto__);
});})(c__51169__auto__,map__74940,map__74940__$1,env,key_process_timeout,active_paths,path,map__74937,map__74937__$1,pconfig,add_error))
);

return c__51169__auto__;
});
;})(map__74937,map__74937__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
