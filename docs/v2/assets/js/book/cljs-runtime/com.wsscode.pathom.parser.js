goog.provide('com.wsscode.pathom.parser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('cljs.spec.alpha');
goog.require('com.fulcrologic.guardrails.core');
goog.require('com.wsscode.async.async_cljs');
goog.require('com.wsscode.pathom.trace');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","or","s/or",1876282981,null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"sym","sym",-1444860305),new cljs.core.Keyword(null,"ident","ident",-742346)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("com.wsscode.pathom.connect","attribute","com.wsscode.pathom.connect/attribute",423188075),new cljs.core.Keyword("com.wsscode.pathom.connect","sym","com.wsscode.pathom.connect/sym",880324581),new cljs.core.Keyword("edn-query-language.core","ident","edn-query-language.core/ident",419196228)], null),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__54665){
return cljs.core.set_QMARK_(G__54665);
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
var G__54668 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54668,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__54668;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__54669){
var vec__54670 = p__54669;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54670,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__54673){
var vec__54674 = p__54673;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54674,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54674,(1),null);
var call = vec__54674;
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
var G__54678 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54678,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__54678;
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
var vec__54679 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54679,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__54682){
var vec__54683 = p__54682;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54683,(0),null);
var ref = vec__54683;
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
return cljs.core.with_meta((function (){var G__54686 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__54686,null,(1),null));
} else {
return G__54686;
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
var G__54691 = arguments.length;
switch (G__54691) {
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

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__54692,unparse_QMARK_){
var map__54693 = p__54692;
var map__54693__$1 = (((((!((map__54693 == null))))?(((((map__54693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54693):map__54693);
var ast = map__54693__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54693__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54693__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54693__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__54695 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__54693,map__54693__$1,ast,ast_meta,type,component){
return (function (p1__54687_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__54687_SHARP_,unparse_QMARK_);
});})(map__54693,map__54693__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54695,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54695;
}
} else {
var map__54696 = ast;
var map__54696__$1 = (((((!((map__54696 == null))))?(((((map__54696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54696):map__54696);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54696__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
var map__54698 = ast;
var map__54698__$1 = (((((!((map__54698 == null))))?(((((map__54698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54698):map__54698);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54698__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__54701 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54701,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54701;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__54698,map__54698__$1,children,query_meta,key__$1,map__54696,map__54696__$1,key,query,query_root,params,map__54693,map__54693__$1,ast,ast_meta,type,component){
return (function (p__54702){
var map__54703 = p__54702;
var map__54703__$1 = (((((!((map__54703 == null))))?(((((map__54703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54703):map__54703);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54703__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__54708 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__54703,map__54703__$1,union_key,children__$1,component__$1,map__54698,map__54698__$1,children,query_meta,key__$1,map__54696,map__54696__$1,key,query,query_root,params,map__54693,map__54693__$1,ast,ast_meta,type,component){
return (function (p1__54688_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__54688_SHARP_,unparse_QMARK_);
});})(map__54703,map__54703__$1,union_key,children__$1,component__$1,map__54698,map__54698__$1,children,query_meta,key__$1,map__54696,map__54696__$1,key,query,query_root,params,map__54693,map__54693__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54708,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__54708;
}
})()], null);
});})(map__54698,map__54698__$1,children,query_meta,key__$1,map__54696,map__54696__$1,key,query,query_root,params,map__54693,map__54693__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__54709 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__54698,map__54698__$1,children,query_meta,key__$1,map__54696,map__54696__$1,key,query,query_root,params,map__54693,map__54693__$1,ast,ast_meta,type,component){
return (function (p1__54689_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__54689_SHARP_,unparse_QMARK_);
});})(map__54698,map__54698__$1,children,query_meta,key__$1,map__54696,map__54696__$1,key,query,query_root,params,map__54693,map__54693__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__54709,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__54709;
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
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__54711_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__54711_SHARP_),p1__54711_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__54715){
var map__54716 = p__54715;
var map__54716__$1 = (((((!((map__54716 == null))))?(((((map__54716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54716):map__54716);
var union_entry = map__54716__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54716__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
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
return (function (children,p__54718){
var map__54719 = p__54718;
var map__54719__$1 = (((((!((map__54719 == null))))?(((((map__54719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54719):map__54719);
var focus = map__54719__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54719__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54719__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5718__auto__,map__54719,map__54719__$1,focus,key,type,q_index){
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
});})(source,temp__5718__auto__,map__54719,map__54719__$1,focus,key,type,q_index))
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
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__54721){
var map__54722 = p__54721;
var map__54722__$1 = (((((!((map__54722 == null))))?(((((map__54722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54722):map__54722);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54722__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__54722,map__54722__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__27501__auto__ = (function (){var map__54724 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__54724__$1 = (((((!((map__54724 == null))))?(((((map__54724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54724):map__54724);
var tx_ast = map__54724__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__54730 = children;
var vec__54731 = G__54730;
var seq__54732 = cljs.core.seq(vec__54731);
var first__54733 = cljs.core.first(seq__54732);
var seq__54732__$1 = cljs.core.next(seq__54732);
var map__54734 = first__54733;
var map__54734__$1 = (((((!((map__54734 == null))))?(((((map__54734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54734):map__54734);
var ast = map__54734__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__54732__$1;
var res__$1 = res;
var G__54730__$1 = G__54730;
while(true){
var res__$2 = res__$1;
var vec__54745 = G__54730__$1;
var seq__54746 = cljs.core.seq(vec__54745);
var first__54747 = cljs.core.first(seq__54746);
var seq__54746__$1 = cljs.core.next(seq__54746);
var map__54748 = first__54747;
var map__54748__$1 = (((((!((map__54748 == null))))?(((((map__54748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54748):map__54748);
var ast__$1 = map__54748__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54748__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54748__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54748__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54748__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__54746__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__54750 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__54750__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54750,new cljs.core.Keyword(null,"query","query",-1288509510)):G__54750);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54750__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__54750__$1;
}
})();
var value = (function (){var G__54751 = type__$1;
var G__54751__$1 = (((G__54751 instanceof cljs.core.Keyword))?G__54751.fqn:null);
switch (G__54751__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__54752 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__54752__$1 = (((((!((map__54752 == null))))?(((((map__54752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54752):map__54752);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54752__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__56834 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__56835 = tail__$1;
res__$1 = G__56834;
G__54730__$1 = G__56835;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27500__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__27501__auto__;
} else {
var map__54754 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__54754__$1 = (((((!((map__54754 == null))))?(((((map__54754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54754):map__54754);
var tx_ast = map__54754__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54754__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx__$1], 0));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__54760 = children;
var vec__54761 = G__54760;
var seq__54762 = cljs.core.seq(vec__54761);
var first__54763 = cljs.core.first(seq__54762);
var seq__54762__$1 = cljs.core.next(seq__54762);
var map__54764 = first__54763;
var map__54764__$1 = (((((!((map__54764 == null))))?(((((map__54764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54764):map__54764);
var ast = map__54764__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54764__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54764__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54764__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54764__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__54762__$1;
var res__$1 = res;
var G__54760__$1 = G__54760;
while(true){
var res__$2 = res__$1;
var vec__54775 = G__54760__$1;
var seq__54776 = cljs.core.seq(vec__54775);
var first__54777 = cljs.core.first(seq__54776);
var seq__54776__$1 = cljs.core.next(seq__54776);
var map__54778 = first__54777;
var map__54778__$1 = (((((!((map__54778 == null))))?(((((map__54778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54778):map__54778);
var ast__$1 = map__54778__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54778__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__54776__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__54780 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__54780__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54780,new cljs.core.Keyword(null,"query","query",-1288509510)):G__54780);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54780__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__54780__$1;
}
})();
var value = (function (){var G__54781 = type__$1;
var G__54781__$1 = (((G__54781 instanceof cljs.core.Keyword))?G__54781.fqn:null);
switch (G__54781__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__54782 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__54782__$1 = (((((!((map__54782 == null))))?(((((map__54782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54782):map__54782);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54782__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__56838 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__56839 = tail__$1;
res__$1 = G__56838;
G__54760__$1 = G__56839;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__54722,map__54722__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__54784){
var map__54785 = p__54784;
var map__54785__$1 = (((((!((map__54785 == null))))?(((((map__54785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54785):map__54785);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54785__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54785__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__54785,map__54785__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__54785,map__54785__$1,read,mutate){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__54785,map__54785__$1,read,mutate){
return (function (state_55184){
var state_val_55185 = (state_55184[(1)]);
if((state_val_55185 === (121))){
var inst_55134 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55186_56840 = state_55184__$1;
(statearr_55186_56840[(2)] = inst_55134);

(statearr_55186_56840[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (65))){
var state_55184__$1 = state_55184;
var statearr_55187_56842 = state_55184__$1;
(statearr_55187_56842[(2)] = null);

(statearr_55187_56842[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (70))){
var inst_54969 = (state_55184[(7)]);
var state_55184__$1 = state_55184;
var statearr_55188_56844 = state_55184__$1;
(statearr_55188_56844[(2)] = inst_54969);

(statearr_55188_56844[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (62))){
var state_55184__$1 = state_55184;
var statearr_55189_56845 = state_55184__$1;
(statearr_55189_56845[(2)] = null);

(statearr_55189_56845[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (74))){
var state_55184__$1 = state_55184;
var statearr_55190_56846 = state_55184__$1;
(statearr_55190_56846[(2)] = false);

(statearr_55190_56846[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (110))){
var inst_55088 = (state_55184[(8)]);
var inst_55112 = (state_55184[(2)]);
var state_55184__$1 = (function (){var statearr_55191 = state_55184;
(statearr_55191[(9)] = inst_55112);

return statearr_55191;
})();
var G__55192_56847 = inst_55088;
var G__55192_56848__$1 = (((G__55192_56847 instanceof cljs.core.Keyword))?G__55192_56847.fqn:null);
switch (G__55192_56848__$1) {
case "call":
var statearr_55193_56850 = state_55184__$1;
(statearr_55193_56850[(1)] = (112));


break;
case "prop":
case "join":
case "union":
var statearr_55194_56851 = state_55184__$1;
(statearr_55194_56851[(1)] = (128));


break;
default:
var statearr_55195_56853 = state_55184__$1;
(statearr_55195_56853[(1)] = (132));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (130))){
var inst_55152 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_55153 = (new Error(inst_55152));
var inst_55154 = (function(){throw inst_55153})();
var state_55184__$1 = state_55184;
var statearr_55196_56854 = state_55184__$1;
(statearr_55196_56854[(2)] = inst_55154);

(statearr_55196_56854[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (128))){
var state_55184__$1 = state_55184;
if(cljs.core.truth_(read)){
var statearr_55197_56855 = state_55184__$1;
(statearr_55197_56855[(1)] = (129));

} else {
var statearr_55198_56857 = state_55184__$1;
(statearr_55198_56857[(1)] = (130));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (7))){
var inst_54992 = (state_55184[(10)]);
var inst_54992__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_54994 = (inst_54992__$1 == null);
var inst_54995 = cljs.core.not(inst_54994);
var state_55184__$1 = (function (){var statearr_55199 = state_55184;
(statearr_55199[(10)] = inst_54992__$1);

return statearr_55199;
})();
if(inst_54995){
var statearr_55200_56858 = state_55184__$1;
(statearr_55200_56858[(1)] = (73));

} else {
var statearr_55201_56859 = state_55184__$1;
(statearr_55201_56859[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (59))){
var inst_54929 = (state_55184[(11)]);
var state_55184__$1 = state_55184;
var statearr_55202_56860 = state_55184__$1;
(statearr_55202_56860[(2)] = inst_54929);

(statearr_55202_56860[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (86))){
var state_55184__$1 = state_55184;
var statearr_55203_56861 = state_55184__$1;
(statearr_55203_56861[(2)] = false);

(statearr_55203_56861[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (20))){
var inst_54853 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54853)){
var statearr_55204_56864 = state_55184__$1;
(statearr_55204_56864[(1)] = (24));

} else {
var statearr_55205_56866 = state_55184__$1;
(statearr_55205_56866[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (72))){
var inst_54973 = (state_55184[(2)]);
var inst_54974 = com.wsscode.async.async_cljs.throw_err(inst_54973);
var state_55184__$1 = state_55184;
var statearr_55206_56867 = state_55184__$1;
(statearr_55206_56867[(2)] = inst_54974);

(statearr_55206_56867[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (58))){
var inst_54929 = (state_55184[(11)]);
var inst_54947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54929);
var state_55184__$1 = state_55184;
var statearr_55207_56869 = state_55184__$1;
(statearr_55207_56869[(2)] = inst_54947);

(statearr_55207_56869[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (60))){
var inst_54951 = (state_55184[(12)]);
var inst_54950 = (state_55184[(2)]);
var inst_54951__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54950,new cljs.core.Keyword(null,"action","action",-811238024));
var state_55184__$1 = (function (){var statearr_55208 = state_55184;
(statearr_55208[(12)] = inst_54951__$1);

return statearr_55208;
})();
if(cljs.core.truth_(inst_54951__$1)){
var statearr_55209_56872 = state_55184__$1;
(statearr_55209_56872[(1)] = (61));

} else {
var statearr_55210_56874 = state_55184__$1;
(statearr_55210_56874[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (27))){
var inst_54864 = (state_55184[(13)]);
var inst_54871 = (state_55184[(14)]);
var inst_54870 = cljs.core.seq(inst_54864);
var inst_54871__$1 = cljs.core.first(inst_54870);
var inst_54872 = cljs.core.next(inst_54870);
var inst_54874 = (inst_54871__$1 == null);
var inst_54875 = cljs.core.not(inst_54874);
var state_55184__$1 = (function (){var statearr_55211 = state_55184;
(statearr_55211[(15)] = inst_54872);

(statearr_55211[(14)] = inst_54871__$1);

return statearr_55211;
})();
if(inst_54875){
var statearr_55212_56876 = state_55184__$1;
(statearr_55212_56876[(1)] = (29));

} else {
var statearr_55213_56877 = state_55184__$1;
(statearr_55213_56877[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (1))){
var state_55184__$1 = state_55184;
var statearr_55214_56878 = state_55184__$1;
(statearr_55214_56878[(2)] = null);

(statearr_55214_56878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (69))){
var inst_54969 = (state_55184[(7)]);
var state_55184__$1 = state_55184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55184__$1,(72),inst_54969);
} else {
if((state_val_55185 === (101))){
var inst_55085 = (state_55184[(16)]);
var inst_55085__$1 = (state_55184[(2)]);
var inst_55086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55085__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_55087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55085__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_55088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55085__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_55089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55085__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_55184__$1 = (function (){var statearr_55215 = state_55184;
(statearr_55215[(17)] = inst_55086);

(statearr_55215[(18)] = inst_55087);

(statearr_55215[(16)] = inst_55085__$1);

(statearr_55215[(19)] = inst_55089);

(statearr_55215[(8)] = inst_55088);

return statearr_55215;
})();
if(cljs.core.truth_(inst_55085__$1)){
var statearr_55216_56880 = state_55184__$1;
(statearr_55216_56880[(1)] = (102));

} else {
var statearr_55217_56881 = state_55184__$1;
(statearr_55217_56881[(1)] = (103));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (24))){
var inst_54836 = (state_55184[(20)]);
var inst_54855 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54836);
var state_55184__$1 = state_55184;
var statearr_55218_56882 = state_55184__$1;
(statearr_55218_56882[(2)] = inst_54855);

(statearr_55218_56882[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (102))){
var inst_55086 = (state_55184[(17)]);
var inst_55087 = (state_55184[(18)]);
var inst_55085 = (state_55184[(16)]);
var inst_55016 = (state_55184[(21)]);
var inst_55091 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55092 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_55087];
var inst_55093 = cljs.core.PersistentHashMap.fromArrays(inst_55091,inst_55092);
var inst_55094 = com.wsscode.pathom.trace.trace(inst_55016,inst_55093);
var inst_55096 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_55097 = [inst_55085,inst_55086];
var inst_55098 = cljs.core.PersistentHashMap.fromArrays(inst_55096,inst_55097);
var inst_55099 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55016,inst_55098], 0));
var inst_55100 = (inst_55086 == null);
var state_55184__$1 = (function (){var statearr_55219 = state_55184;
(statearr_55219[(22)] = inst_55094);

(statearr_55219[(23)] = inst_55099);

return statearr_55219;
})();
if(cljs.core.truth_(inst_55100)){
var statearr_55220_56883 = state_55184__$1;
(statearr_55220_56883[(1)] = (105));

} else {
var statearr_55221_56884 = state_55184__$1;
(statearr_55221_56884[(1)] = (106));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (135))){
var inst_55055 = (state_55184[(24)]);
var inst_55085 = (state_55184[(16)]);
var inst_55064 = (state_55184[(25)]);
var inst_55169 = (state_55184[(2)]);
var inst_55170 = com.wsscode.pathom.parser.ast__GT_out_key(inst_55085);
var inst_55171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55055,inst_55170,inst_55169);
var inst_55055__$1 = inst_55171;
var inst_55056 = inst_55064;
var state_55184__$1 = (function (){var statearr_55222 = state_55184;
(statearr_55222[(24)] = inst_55055__$1);

(statearr_55222[(26)] = inst_55056);

return statearr_55222;
})();
var statearr_55223_56885 = state_55184__$1;
(statearr_55223_56885[(2)] = null);

(statearr_55223_56885[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (55))){
var state_55184__$1 = state_55184;
var statearr_55224_56886 = state_55184__$1;
(statearr_55224_56886[(2)] = true);

(statearr_55224_56886[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (85))){
var state_55184__$1 = state_55184;
var statearr_55225_56887 = state_55184__$1;
(statearr_55225_56887[(2)] = true);

(statearr_55225_56887[(1)] = (87));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (39))){
var inst_54863 = (state_55184[(27)]);
var state_55184__$1 = state_55184;
var statearr_55226_56888 = state_55184__$1;
(statearr_55226_56888[(2)] = inst_54863);

(statearr_55226_56888[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (88))){
var inst_55028 = (state_55184[(28)]);
var inst_55047 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55028);
var state_55184__$1 = state_55184;
var statearr_55227_56889 = state_55184__$1;
(statearr_55227_56889[(2)] = inst_55047);

(statearr_55227_56889[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (46))){
var inst_54896 = (state_55184[(29)]);
var inst_54920 = (state_55184[(2)]);
var state_55184__$1 = (function (){var statearr_55228 = state_55184;
(statearr_55228[(30)] = inst_54920);

return statearr_55228;
})();
var G__55229_56890 = inst_54896;
var G__55229_56891__$1 = (((G__55229_56890 instanceof cljs.core.Keyword))?G__55229_56890.fqn:null);
switch (G__55229_56891__$1) {
case "call":
var statearr_55230_56893 = state_55184__$1;
(statearr_55230_56893[(1)] = (48));


break;
case "prop":
case "join":
case "union":
var statearr_55231_56894 = state_55184__$1;
(statearr_55231_56894[(1)] = (64));


break;
default:
var statearr_55232_56896 = state_55184__$1;
(statearr_55232_56896[(1)] = (68));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (4))){
var inst_54787 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55233_56897 = state_55184__$1;
(statearr_55233_56897[(2)] = inst_54787);

(statearr_55233_56897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (77))){
var state_55184__$1 = state_55184;
var statearr_55234_56898 = state_55184__$1;
(statearr_55234_56898[(2)] = false);

(statearr_55234_56898[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (106))){
var inst_55099 = (state_55184[(23)]);
var state_55184__$1 = state_55184;
var statearr_55235_56899 = state_55184__$1;
(statearr_55235_56899[(2)] = inst_55099);

(statearr_55235_56899[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (119))){
var state_55184__$1 = state_55184;
var statearr_55236_56900 = state_55184__$1;
(statearr_55236_56900[(2)] = true);

(statearr_55236_56900[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (95))){
var inst_55080 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55080)){
var statearr_55237_56901 = state_55184__$1;
(statearr_55237_56901[(1)] = (99));

} else {
var statearr_55238_56902 = state_55184__$1;
(statearr_55238_56902[(1)] = (100));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (54))){
var inst_54945 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54945)){
var statearr_55239_56903 = state_55184__$1;
(statearr_55239_56903[(1)] = (58));

} else {
var statearr_55240_56904 = state_55184__$1;
(statearr_55240_56904[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (92))){
var inst_55177 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55241_56905 = state_55184__$1;
(statearr_55241_56905[(2)] = inst_55177);

(statearr_55241_56905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (104))){
var inst_55175 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55242_56909 = state_55184__$1;
(statearr_55242_56909[(2)] = inst_55175);

(statearr_55242_56909[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (15))){
var inst_54800 = (state_55184[(31)]);
var inst_54818 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54800);
var state_55184__$1 = state_55184;
var statearr_55243_56910 = state_55184__$1;
(statearr_55243_56910[(2)] = inst_54818);

(statearr_55243_56910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (48))){
var state_55184__$1 = state_55184;
if(cljs.core.truth_(mutate)){
var statearr_55244_56911 = state_55184__$1;
(statearr_55244_56911[(1)] = (49));

} else {
var statearr_55245_56912 = state_55184__$1;
(statearr_55245_56912[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (50))){
var inst_54923 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_54924 = (new Error(inst_54923));
var inst_54925 = (function(){throw inst_54924})();
var state_55184__$1 = state_55184;
var statearr_55246_56913 = state_55184__$1;
(statearr_55246_56913[(2)] = inst_54925);

(statearr_55246_56913[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (116))){
var inst_55121 = (state_55184[(32)]);
var inst_55126 = inst_55121.cljs$lang$protocol_mask$partition0$;
var inst_55127 = (inst_55126 & (64));
var inst_55128 = inst_55121.cljs$core$ISeq$;
var inst_55129 = (cljs.core.PROTOCOL_SENTINEL === inst_55128);
var inst_55130 = ((inst_55127) || (inst_55129));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55130)){
var statearr_55247_56917 = state_55184__$1;
(statearr_55247_56917[(1)] = (119));

} else {
var statearr_55248_56918 = state_55184__$1;
(statearr_55248_56918[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (75))){
var inst_55008 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55008)){
var statearr_55249_56919 = state_55184__$1;
(statearr_55249_56919[(1)] = (79));

} else {
var statearr_55250_56920 = state_55184__$1;
(statearr_55250_56920[(1)] = (80));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (99))){
var inst_55063 = (state_55184[(33)]);
var inst_55082 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55063);
var state_55184__$1 = state_55184;
var statearr_55251_56921 = state_55184__$1;
(statearr_55251_56921[(2)] = inst_55082);

(statearr_55251_56921[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (21))){
var state_55184__$1 = state_55184;
var statearr_55252_56922 = state_55184__$1;
(statearr_55252_56922[(2)] = true);

(statearr_55252_56922[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (31))){
var inst_54888 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54888)){
var statearr_55253_56923 = state_55184__$1;
(statearr_55253_56923[(1)] = (35));

} else {
var statearr_55254_56924 = state_55184__$1;
(statearr_55254_56924[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (113))){
var state_55184__$1 = state_55184;
var statearr_55255_56925 = state_55184__$1;
(statearr_55255_56925[(2)] = null);

(statearr_55255_56925[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (32))){
var state_55184__$1 = state_55184;
var statearr_55256_56926 = state_55184__$1;
(statearr_55256_56926[(2)] = true);

(statearr_55256_56926[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (136))){
var inst_55165 = (state_55184[(2)]);
var inst_55166 = com.wsscode.async.async_cljs.throw_err(inst_55165);
var state_55184__$1 = state_55184;
var statearr_55257_56927 = state_55184__$1;
(statearr_55257_56927[(2)] = inst_55166);

(statearr_55257_56927[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (40))){
var inst_54983 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55258_56928 = state_55184__$1;
(statearr_55258_56928[(2)] = inst_54983);

(statearr_55258_56928[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (129))){
var state_55184__$1 = state_55184;
var statearr_55259_56929 = state_55184__$1;
(statearr_55259_56929[(2)] = null);

(statearr_55259_56929[(1)] = (131));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (91))){
var inst_55056 = (state_55184[(26)]);
var inst_55063 = (state_55184[(33)]);
var inst_55062 = cljs.core.seq(inst_55056);
var inst_55063__$1 = cljs.core.first(inst_55062);
var inst_55064 = cljs.core.next(inst_55062);
var inst_55066 = (inst_55063__$1 == null);
var inst_55067 = cljs.core.not(inst_55066);
var state_55184__$1 = (function (){var statearr_55260 = state_55184;
(statearr_55260[(25)] = inst_55064);

(statearr_55260[(33)] = inst_55063__$1);

return statearr_55260;
})();
if(inst_55067){
var statearr_55261_56931 = state_55184__$1;
(statearr_55261_56931[(1)] = (93));

} else {
var statearr_55262_56932 = state_55184__$1;
(statearr_55262_56932[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (117))){
var state_55184__$1 = state_55184;
var statearr_55263_56933 = state_55184__$1;
(statearr_55263_56933[(2)] = false);

(statearr_55263_56933[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (108))){
var inst_55015 = (state_55184[(34)]);
var inst_55105 = (state_55184[(35)]);
var inst_55109 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55105,new cljs.core.Keyword(null,"query","query",-1288509510),inst_55015);
var state_55184__$1 = state_55184;
var statearr_55264_56935 = state_55184__$1;
(statearr_55264_56935[(2)] = inst_55109);

(statearr_55264_56935[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (56))){
var state_55184__$1 = state_55184;
var statearr_55265_56936 = state_55184__$1;
(statearr_55265_56936[(2)] = false);

(statearr_55265_56936[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (33))){
var state_55184__$1 = state_55184;
var statearr_55266_56937 = state_55184__$1;
(statearr_55266_56937[(2)] = false);

(statearr_55266_56937[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (13))){
var state_55184__$1 = state_55184;
var statearr_55267_56938 = state_55184__$1;
(statearr_55267_56938[(2)] = false);

(statearr_55267_56938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (22))){
var state_55184__$1 = state_55184;
var statearr_55268_56939 = state_55184__$1;
(statearr_55268_56939[(2)] = false);

(statearr_55268_56939[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (90))){
var inst_55014 = (state_55184[(36)]);
var inst_55026 = (state_55184[(37)]);
var inst_55050 = (state_55184[(2)]);
var inst_55051 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55050,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_55052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55050,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_55053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55050,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_55054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55050,new cljs.core.Keyword(null,"params","params",710516235));
var inst_55055 = inst_55026;
var inst_55056 = inst_55014;
var state_55184__$1 = (function (){var statearr_55269 = state_55184;
(statearr_55269[(38)] = inst_55054);

(statearr_55269[(24)] = inst_55055);

(statearr_55269[(26)] = inst_55056);

(statearr_55269[(39)] = inst_55051);

(statearr_55269[(40)] = inst_55053);

(statearr_55269[(41)] = inst_55052);

return statearr_55269;
})();
var statearr_55270_56942 = state_55184__$1;
(statearr_55270_56942[(2)] = null);

(statearr_55270_56942[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (109))){
var inst_55105 = (state_55184[(35)]);
var state_55184__$1 = state_55184;
var statearr_55271_56943 = state_55184__$1;
(statearr_55271_56943[(2)] = inst_55105);

(statearr_55271_56943[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (36))){
var inst_54871 = (state_55184[(14)]);
var state_55184__$1 = state_55184;
var statearr_55272_56944 = state_55184__$1;
(statearr_55272_56944[(2)] = inst_54871);

(statearr_55272_56944[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (41))){
var inst_54907 = (state_55184[(42)]);
var inst_54910 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_54907,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_55184__$1 = state_55184;
var statearr_55273_56945 = state_55184__$1;
(statearr_55273_56945[(2)] = inst_54910);

(statearr_55273_56945[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (118))){
var inst_55137 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55137)){
var statearr_55274_56946 = state_55184__$1;
(statearr_55274_56946[(1)] = (122));

} else {
var statearr_55275_56947 = state_55184__$1;
(statearr_55275_56947[(1)] = (123));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (89))){
var inst_55028 = (state_55184[(28)]);
var state_55184__$1 = state_55184;
var statearr_55276_56948 = state_55184__$1;
(statearr_55276_56948[(2)] = inst_55028);

(statearr_55276_56948[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (100))){
var inst_55063 = (state_55184[(33)]);
var state_55184__$1 = state_55184;
var statearr_55277_56949 = state_55184__$1;
(statearr_55277_56949[(2)] = inst_55063);

(statearr_55277_56949[(1)] = (101));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (131))){
var inst_55112 = (state_55184[(9)]);
var inst_55156 = (state_55184[(2)]);
var inst_55157 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_55112) : read.call(null,inst_55112));
var state_55184__$1 = (function (){var statearr_55278 = state_55184;
(statearr_55278[(43)] = inst_55156);

return statearr_55278;
})();
var statearr_55279_56953 = state_55184__$1;
(statearr_55279_56953[(2)] = inst_55157);

(statearr_55279_56953[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (122))){
var inst_55121 = (state_55184[(32)]);
var inst_55139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55121);
var state_55184__$1 = state_55184;
var statearr_55280_56954 = state_55184__$1;
(statearr_55280_56954[(2)] = inst_55139);

(statearr_55280_56954[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (43))){
var inst_54894 = (state_55184[(44)]);
var inst_54913 = (state_55184[(2)]);
var inst_54914 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_54915 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54914,inst_54894);
var state_55184__$1 = (function (){var statearr_55281 = state_55184;
(statearr_55281[(45)] = inst_54913);

return statearr_55281;
})();
if(inst_54915){
var statearr_55282_56955 = state_55184__$1;
(statearr_55282_56955[(1)] = (44));

} else {
var statearr_55283_56956 = state_55184__$1;
(statearr_55283_56956[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (61))){
var inst_54951 = (state_55184[(12)]);
var inst_54953 = (inst_54951.cljs$core$IFn$_invoke$arity$0 ? inst_54951.cljs$core$IFn$_invoke$arity$0() : inst_54951.call(null));
var state_55184__$1 = state_55184;
var statearr_55284_56957 = state_55184__$1;
(statearr_55284_56957[(2)] = inst_54953);

(statearr_55284_56957[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (29))){
var inst_54871 = (state_55184[(14)]);
var inst_54877 = inst_54871.cljs$lang$protocol_mask$partition0$;
var inst_54878 = (inst_54877 & (64));
var inst_54879 = inst_54871.cljs$core$ISeq$;
var inst_54880 = (cljs.core.PROTOCOL_SENTINEL === inst_54879);
var inst_54881 = ((inst_54878) || (inst_54880));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54881)){
var statearr_55285_56958 = state_55184__$1;
(statearr_55285_56958[(1)] = (32));

} else {
var statearr_55286_56959 = state_55184__$1;
(statearr_55286_56959[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (44))){
var inst_54823 = (state_55184[(46)]);
var inst_54913 = (state_55184[(45)]);
var inst_54917 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54913,new cljs.core.Keyword(null,"query","query",-1288509510),inst_54823);
var state_55184__$1 = state_55184;
var statearr_55287_56960 = state_55184__$1;
(statearr_55287_56960[(2)] = inst_54917);

(statearr_55287_56960[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (93))){
var inst_55063 = (state_55184[(33)]);
var inst_55069 = inst_55063.cljs$lang$protocol_mask$partition0$;
var inst_55070 = (inst_55069 & (64));
var inst_55071 = inst_55063.cljs$core$ISeq$;
var inst_55072 = (cljs.core.PROTOCOL_SENTINEL === inst_55071);
var inst_55073 = ((inst_55070) || (inst_55072));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55073)){
var statearr_55288_56963 = state_55184__$1;
(statearr_55288_56963[(1)] = (96));

} else {
var statearr_55289_56964 = state_55184__$1;
(statearr_55289_56964[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (6))){
var inst_54800 = (state_55184[(31)]);
var inst_54795 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54796 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_54797 = cljs.core.PersistentHashMap.fromArrays(inst_54795,inst_54796);
var inst_54798 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_54797);
var inst_54800__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_54802 = (inst_54800__$1 == null);
var inst_54803 = cljs.core.not(inst_54802);
var state_55184__$1 = (function (){var statearr_55290 = state_55184;
(statearr_55290[(47)] = inst_54798);

(statearr_55290[(31)] = inst_54800__$1);

return statearr_55290;
})();
if(inst_54803){
var statearr_55291_56968 = state_55184__$1;
(statearr_55291_56968[(1)] = (9));

} else {
var statearr_55292_56969 = state_55184__$1;
(statearr_55292_56969[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (111))){
var inst_55161 = (state_55184[(48)]);
var inst_55161__$1 = (state_55184[(2)]);
var inst_55162 = com.wsscode.async.async_cljs.chan_QMARK_(inst_55161__$1);
var state_55184__$1 = (function (){var statearr_55293 = state_55184;
(statearr_55293[(48)] = inst_55161__$1);

return statearr_55293;
})();
if(inst_55162){
var statearr_55294_56973 = state_55184__$1;
(statearr_55294_56973[(1)] = (133));

} else {
var statearr_55295_56974 = state_55184__$1;
(statearr_55295_56974[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (28))){
var inst_54798 = (state_55184[(47)]);
var inst_54985 = (state_55184[(2)]);
var inst_54986 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_54987 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_54988 = cljs.core.PersistentHashMap.fromArrays(inst_54986,inst_54987);
var inst_54989 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_54798,inst_54988);
var state_55184__$1 = (function (){var statearr_55296 = state_55184;
(statearr_55296[(49)] = inst_54989);

return statearr_55296;
})();
var statearr_55297_56975 = state_55184__$1;
(statearr_55297_56975[(2)] = inst_54985);

(statearr_55297_56975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (134))){
var inst_55161 = (state_55184[(48)]);
var state_55184__$1 = state_55184;
var statearr_55298_56976 = state_55184__$1;
(statearr_55298_56976[(2)] = inst_55161);

(statearr_55298_56976[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (64))){
var state_55184__$1 = state_55184;
if(cljs.core.truth_(read)){
var statearr_55299_56977 = state_55184__$1;
(statearr_55299_56977[(1)] = (65));

} else {
var statearr_55300_56978 = state_55184__$1;
(statearr_55300_56978[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (103))){
var inst_55055 = (state_55184[(24)]);
var state_55184__$1 = state_55184;
var statearr_55301_56979 = state_55184__$1;
(statearr_55301_56979[(2)] = inst_55055);

(statearr_55301_56979[(1)] = (104));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (51))){
var inst_54897 = (state_55184[(50)]);
var inst_54920 = (state_55184[(30)]);
var inst_54895 = (state_55184[(51)]);
var inst_54929 = (state_55184[(11)]);
var inst_54927 = (state_55184[(2)]);
var inst_54929__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_54920,inst_54895,inst_54897) : mutate.call(null,inst_54920,inst_54895,inst_54897));
var inst_54931 = (inst_54929__$1 == null);
var inst_54932 = cljs.core.not(inst_54931);
var state_55184__$1 = (function (){var statearr_55302 = state_55184;
(statearr_55302[(52)] = inst_54927);

(statearr_55302[(11)] = inst_54929__$1);

return statearr_55302;
})();
if(inst_54932){
var statearr_55303_57000 = state_55184__$1;
(statearr_55303_57000[(1)] = (52));

} else {
var statearr_55304_57001 = state_55184__$1;
(statearr_55304_57001[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (25))){
var inst_54836 = (state_55184[(20)]);
var state_55184__$1 = state_55184;
var statearr_55305_57003 = state_55184__$1;
(statearr_55305_57003[(2)] = inst_54836);

(statearr_55305_57003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (34))){
var inst_54885 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55306_57005 = state_55184__$1;
(statearr_55306_57005[(2)] = inst_54885);

(statearr_55306_57005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (125))){
var inst_55143 = (state_55184[(53)]);
var inst_55145 = (inst_55143.cljs$core$IFn$_invoke$arity$0 ? inst_55143.cljs$core$IFn$_invoke$arity$0() : inst_55143.call(null));
var state_55184__$1 = state_55184;
var statearr_55307_57007 = state_55184__$1;
(statearr_55307_57007[(2)] = inst_55145);

(statearr_55307_57007[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (17))){
var inst_54836 = (state_55184[(20)]);
var inst_54822 = (state_55184[(54)]);
var inst_54823 = (state_55184[(46)]);
var inst_54821 = (state_55184[(2)]);
var inst_54822__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54821,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_54823__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_54821);
var inst_54824 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_54823__$1], 0));
var inst_54834 = cljs.core.PersistentHashMap.EMPTY;
var inst_54835 = cljs.core.seq(inst_54822__$1);
var inst_54836__$1 = cljs.core.first(inst_54835);
var inst_54837 = cljs.core.next(inst_54835);
var inst_54839 = (inst_54836__$1 == null);
var inst_54840 = cljs.core.not(inst_54839);
var state_55184__$1 = (function (){var statearr_55308 = state_55184;
(statearr_55308[(55)] = inst_54837);

(statearr_55308[(20)] = inst_54836__$1);

(statearr_55308[(54)] = inst_54822__$1);

(statearr_55308[(46)] = inst_54823__$1);

(statearr_55308[(56)] = inst_54824);

(statearr_55308[(57)] = inst_54834);

return statearr_55308;
})();
if(inst_54840){
var statearr_55309_57014 = state_55184__$1;
(statearr_55309_57014[(1)] = (18));

} else {
var statearr_55310_57015 = state_55184__$1;
(statearr_55310_57015[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (3))){
var inst_55182 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55184__$1,inst_55182);
} else {
if((state_val_55185 === (12))){
var state_55184__$1 = state_55184;
var statearr_55311_57018 = state_55184__$1;
(statearr_55311_57018[(2)] = true);

(statearr_55311_57018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (2))){
var _ = (function (){var statearr_55312 = state_55184;
(statearr_55312[(4)] = cljs.core.cons((5),(state_55184[(4)])));

return statearr_55312;
})();
var inst_54793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54793)){
var statearr_55313_57021 = state_55184__$1;
(statearr_55313_57021[(1)] = (6));

} else {
var statearr_55314_57023 = state_55184__$1;
(statearr_55314_57023[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (66))){
var inst_54960 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_54961 = (new Error(inst_54960));
var inst_54962 = (function(){throw inst_54961})();
var state_55184__$1 = state_55184;
var statearr_55315_57024 = state_55184__$1;
(statearr_55315_57024[(2)] = inst_54962);

(statearr_55315_57024[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (107))){
var inst_55086 = (state_55184[(17)]);
var inst_55105 = (state_55184[(2)]);
var inst_55106 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_55107 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55106,inst_55086);
var state_55184__$1 = (function (){var statearr_55316 = state_55184;
(statearr_55316[(35)] = inst_55105);

return statearr_55316;
})();
if(inst_55107){
var statearr_55317_57028 = state_55184__$1;
(statearr_55317_57028[(1)] = (108));

} else {
var statearr_55318_57030 = state_55184__$1;
(statearr_55318_57030[(1)] = (109));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (23))){
var inst_54850 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55319_57031 = state_55184__$1;
(statearr_55319_57031[(2)] = inst_54850);

(statearr_55319_57031[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (47))){
var inst_54969 = (state_55184[(7)]);
var inst_54969__$1 = (state_55184[(2)]);
var inst_54970 = com.wsscode.async.async_cljs.chan_QMARK_(inst_54969__$1);
var state_55184__$1 = (function (){var statearr_55320 = state_55184;
(statearr_55320[(7)] = inst_54969__$1);

return statearr_55320;
})();
if(inst_54970){
var statearr_55321_57033 = state_55184__$1;
(statearr_55321_57033[(1)] = (69));

} else {
var statearr_55322_57034 = state_55184__$1;
(statearr_55322_57034[(1)] = (70));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (35))){
var inst_54871 = (state_55184[(14)]);
var inst_54890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54871);
var state_55184__$1 = state_55184;
var statearr_55323_57035 = state_55184__$1;
(statearr_55323_57035[(2)] = inst_54890);

(statearr_55323_57035[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (127))){
var inst_55148 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55324_57036 = state_55184__$1;
(statearr_55324_57036[(2)] = inst_55148);

(statearr_55324_57036[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (82))){
var inst_55028 = (state_55184[(28)]);
var inst_55034 = inst_55028.cljs$lang$protocol_mask$partition0$;
var inst_55035 = (inst_55034 & (64));
var inst_55036 = inst_55028.cljs$core$ISeq$;
var inst_55037 = (cljs.core.PROTOCOL_SENTINEL === inst_55036);
var inst_55038 = ((inst_55035) || (inst_55037));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55038)){
var statearr_55325_57037 = state_55184__$1;
(statearr_55325_57037[(1)] = (85));

} else {
var statearr_55326_57038 = state_55184__$1;
(statearr_55326_57038[(1)] = (86));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (76))){
var state_55184__$1 = state_55184;
var statearr_55327_57039 = state_55184__$1;
(statearr_55327_57039[(2)] = true);

(statearr_55327_57039[(1)] = (78));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (97))){
var state_55184__$1 = state_55184;
var statearr_55328_57040 = state_55184__$1;
(statearr_55328_57040[(2)] = false);

(statearr_55328_57040[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (19))){
var state_55184__$1 = state_55184;
var statearr_55329_57041 = state_55184__$1;
(statearr_55329_57041[(2)] = false);

(statearr_55329_57041[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (57))){
var inst_54942 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55330_57042 = state_55184__$1;
(statearr_55330_57042[(2)] = inst_54942);

(statearr_55330_57042[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (68))){
var state_55184__$1 = state_55184;
var statearr_55331_57043 = state_55184__$1;
(statearr_55331_57043[(2)] = null);

(statearr_55331_57043[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (11))){
var inst_54816 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54816)){
var statearr_55332_57044 = state_55184__$1;
(statearr_55332_57044[(1)] = (15));

} else {
var statearr_55333_57045 = state_55184__$1;
(statearr_55333_57045[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (115))){
var inst_55112 = (state_55184[(9)]);
var inst_55087 = (state_55184[(18)]);
var inst_55089 = (state_55184[(19)]);
var inst_55121 = (state_55184[(32)]);
var inst_55119 = (state_55184[(2)]);
var inst_55121__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_55112,inst_55087,inst_55089) : mutate.call(null,inst_55112,inst_55087,inst_55089));
var inst_55123 = (inst_55121__$1 == null);
var inst_55124 = cljs.core.not(inst_55123);
var state_55184__$1 = (function (){var statearr_55335 = state_55184;
(statearr_55335[(32)] = inst_55121__$1);

(statearr_55335[(58)] = inst_55119);

return statearr_55335;
})();
if(inst_55124){
var statearr_55336_57048 = state_55184__$1;
(statearr_55336_57048[(1)] = (116));

} else {
var statearr_55337_57050 = state_55184__$1;
(statearr_55337_57050[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (9))){
var inst_54800 = (state_55184[(31)]);
var inst_54805 = inst_54800.cljs$lang$protocol_mask$partition0$;
var inst_54806 = (inst_54805 & (64));
var inst_54807 = inst_54800.cljs$core$ISeq$;
var inst_54808 = (cljs.core.PROTOCOL_SENTINEL === inst_54807);
var inst_54809 = ((inst_54806) || (inst_54808));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54809)){
var statearr_55338_57052 = state_55184__$1;
(statearr_55338_57052[(1)] = (12));

} else {
var statearr_55339_57054 = state_55184__$1;
(statearr_55339_57054[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (5))){
var _ = (function (){var statearr_55340 = state_55184;
(statearr_55340[(4)] = cljs.core.rest((state_55184[(4)])));

return statearr_55340;
})();
var state_55184__$1 = state_55184;
var ex55334 = (state_55184__$1[(2)]);
var statearr_55341_57055 = state_55184__$1;
(statearr_55341_57055[(5)] = ex55334);


var statearr_55342_57056 = state_55184__$1;
(statearr_55342_57056[(1)] = (4));

(statearr_55342_57056[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (112))){
var state_55184__$1 = state_55184;
if(cljs.core.truth_(mutate)){
var statearr_55343_57057 = state_55184__$1;
(statearr_55343_57057[(1)] = (113));

} else {
var statearr_55344_57058 = state_55184__$1;
(statearr_55344_57058[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (83))){
var state_55184__$1 = state_55184;
var statearr_55345_57059 = state_55184__$1;
(statearr_55345_57059[(2)] = false);

(statearr_55345_57059[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (14))){
var inst_54813 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55346_57060 = state_55184__$1;
(statearr_55346_57060[(2)] = inst_54813);

(statearr_55346_57060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (45))){
var inst_54913 = (state_55184[(45)]);
var state_55184__$1 = state_55184;
var statearr_55347_57061 = state_55184__$1;
(statearr_55347_57061[(2)] = inst_54913);

(statearr_55347_57061[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (53))){
var state_55184__$1 = state_55184;
var statearr_55348_57063 = state_55184__$1;
(statearr_55348_57063[(2)] = false);

(statearr_55348_57063[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (78))){
var inst_55005 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55349_57067 = state_55184__$1;
(statearr_55349_57067[(2)] = inst_55005);

(statearr_55349_57067[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (132))){
var state_55184__$1 = state_55184;
var statearr_55350_57068 = state_55184__$1;
(statearr_55350_57068[(2)] = null);

(statearr_55350_57068[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (26))){
var inst_54822 = (state_55184[(54)]);
var inst_54834 = (state_55184[(57)]);
var inst_54858 = (state_55184[(2)]);
var inst_54859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54858,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54858,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54858,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54858,new cljs.core.Keyword(null,"params","params",710516235));
var inst_54863 = inst_54834;
var inst_54864 = inst_54822;
var state_55184__$1 = (function (){var statearr_55351 = state_55184;
(statearr_55351[(59)] = inst_54862);

(statearr_55351[(13)] = inst_54864);

(statearr_55351[(60)] = inst_54861);

(statearr_55351[(61)] = inst_54860);

(statearr_55351[(27)] = inst_54863);

(statearr_55351[(62)] = inst_54859);

return statearr_55351;
})();
var statearr_55352_57069 = state_55184__$1;
(statearr_55352_57069[(2)] = null);

(statearr_55352_57069[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (123))){
var inst_55121 = (state_55184[(32)]);
var state_55184__$1 = state_55184;
var statearr_55353_57070 = state_55184__$1;
(statearr_55353_57070[(2)] = inst_55121);

(statearr_55353_57070[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (16))){
var inst_54800 = (state_55184[(31)]);
var state_55184__$1 = state_55184;
var statearr_55354_57071 = state_55184__$1;
(statearr_55354_57071[(2)] = inst_54800);

(statearr_55354_57071[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (133))){
var inst_55161 = (state_55184[(48)]);
var state_55184__$1 = state_55184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55184__$1,(136),inst_55161);
} else {
if((state_val_55185 === (81))){
var inst_55014 = (state_55184[(36)]);
var inst_55028 = (state_55184[(28)]);
var inst_55015 = (state_55184[(34)]);
var inst_55013 = (state_55184[(2)]);
var inst_55014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55013,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_55015__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_55013);
var inst_55016 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),inst_55015__$1], 0));
var inst_55026 = cljs.core.PersistentHashMap.EMPTY;
var inst_55027 = cljs.core.seq(inst_55014__$1);
var inst_55028__$1 = cljs.core.first(inst_55027);
var inst_55029 = cljs.core.next(inst_55027);
var inst_55031 = (inst_55028__$1 == null);
var inst_55032 = cljs.core.not(inst_55031);
var state_55184__$1 = (function (){var statearr_55355 = state_55184;
(statearr_55355[(36)] = inst_55014__$1);

(statearr_55355[(28)] = inst_55028__$1);

(statearr_55355[(63)] = inst_55029);

(statearr_55355[(34)] = inst_55015__$1);

(statearr_55355[(37)] = inst_55026);

(statearr_55355[(21)] = inst_55016);

return statearr_55355;
})();
if(inst_55032){
var statearr_55356_57073 = state_55184__$1;
(statearr_55356_57073[(1)] = (82));

} else {
var statearr_55357_57074 = state_55184__$1;
(statearr_55357_57074[(1)] = (83));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (120))){
var state_55184__$1 = state_55184;
var statearr_55358_57076 = state_55184__$1;
(statearr_55358_57076[(2)] = false);

(statearr_55358_57076[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (79))){
var inst_54992 = (state_55184[(10)]);
var inst_55010 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_54992);
var state_55184__$1 = state_55184;
var statearr_55359_57079 = state_55184__$1;
(statearr_55359_57079[(2)] = inst_55010);

(statearr_55359_57079[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (38))){
var inst_54894 = (state_55184[(44)]);
var inst_54895 = (state_55184[(51)]);
var inst_54824 = (state_55184[(56)]);
var inst_54893 = (state_55184[(64)]);
var inst_54899 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_54900 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_54895];
var inst_54901 = cljs.core.PersistentHashMap.fromArrays(inst_54899,inst_54900);
var inst_54902 = com.wsscode.pathom.trace.trace(inst_54824,inst_54901);
var inst_54904 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_54905 = [inst_54893,inst_54894];
var inst_54906 = cljs.core.PersistentHashMap.fromArrays(inst_54904,inst_54905);
var inst_54907 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54824,inst_54906], 0));
var inst_54908 = (inst_54894 == null);
var state_55184__$1 = (function (){var statearr_55360 = state_55184;
(statearr_55360[(42)] = inst_54907);

(statearr_55360[(65)] = inst_54902);

return statearr_55360;
})();
if(cljs.core.truth_(inst_54908)){
var statearr_55361_57080 = state_55184__$1;
(statearr_55361_57080[(1)] = (41));

} else {
var statearr_55362_57081 = state_55184__$1;
(statearr_55362_57081[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (126))){
var state_55184__$1 = state_55184;
var statearr_55363_57082 = state_55184__$1;
(statearr_55363_57082[(2)] = null);

(statearr_55363_57082[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (98))){
var inst_55077 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55364_57083 = state_55184__$1;
(statearr_55364_57083[(2)] = inst_55077);

(statearr_55364_57083[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (124))){
var inst_55143 = (state_55184[(53)]);
var inst_55142 = (state_55184[(2)]);
var inst_55143__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55142,new cljs.core.Keyword(null,"action","action",-811238024));
var state_55184__$1 = (function (){var statearr_55365 = state_55184;
(statearr_55365[(53)] = inst_55143__$1);

return statearr_55365;
})();
if(cljs.core.truth_(inst_55143__$1)){
var statearr_55366_57084 = state_55184__$1;
(statearr_55366_57084[(1)] = (125));

} else {
var statearr_55367_57085 = state_55184__$1;
(statearr_55367_57085[(1)] = (126));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (87))){
var inst_55042 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55368_57087 = state_55184__$1;
(statearr_55368_57087[(2)] = inst_55042);

(statearr_55368_57087[(1)] = (84));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (30))){
var state_55184__$1 = state_55184;
var statearr_55369_57088 = state_55184__$1;
(statearr_55369_57088[(2)] = false);

(statearr_55369_57088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (73))){
var inst_54992 = (state_55184[(10)]);
var inst_54997 = inst_54992.cljs$lang$protocol_mask$partition0$;
var inst_54998 = (inst_54997 & (64));
var inst_54999 = inst_54992.cljs$core$ISeq$;
var inst_55000 = (cljs.core.PROTOCOL_SENTINEL === inst_54999);
var inst_55001 = ((inst_54998) || (inst_55000));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55001)){
var statearr_55370_57090 = state_55184__$1;
(statearr_55370_57090[(1)] = (76));

} else {
var statearr_55371_57091 = state_55184__$1;
(statearr_55371_57091[(1)] = (77));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (96))){
var state_55184__$1 = state_55184;
var statearr_55372_57092 = state_55184__$1;
(statearr_55372_57092[(2)] = true);

(statearr_55372_57092[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (10))){
var state_55184__$1 = state_55184;
var statearr_55373_57093 = state_55184__$1;
(statearr_55373_57093[(2)] = false);

(statearr_55373_57093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (18))){
var inst_54836 = (state_55184[(20)]);
var inst_54842 = inst_54836.cljs$lang$protocol_mask$partition0$;
var inst_54843 = (inst_54842 & (64));
var inst_54844 = inst_54836.cljs$core$ISeq$;
var inst_54845 = (cljs.core.PROTOCOL_SENTINEL === inst_54844);
var inst_54846 = ((inst_54843) || (inst_54845));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54846)){
var statearr_55374_57097 = state_55184__$1;
(statearr_55374_57097[(1)] = (21));

} else {
var statearr_55375_57098 = state_55184__$1;
(statearr_55375_57098[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (105))){
var inst_55099 = (state_55184[(23)]);
var inst_55102 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_55099,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_55184__$1 = state_55184;
var statearr_55376_57099 = state_55184__$1;
(statearr_55376_57099[(2)] = inst_55102);

(statearr_55376_57099[(1)] = (107));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (52))){
var inst_54929 = (state_55184[(11)]);
var inst_54934 = inst_54929.cljs$lang$protocol_mask$partition0$;
var inst_54935 = (inst_54934 & (64));
var inst_54936 = inst_54929.cljs$core$ISeq$;
var inst_54937 = (cljs.core.PROTOCOL_SENTINEL === inst_54936);
var inst_54938 = ((inst_54935) || (inst_54937));
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_54938)){
var statearr_55377_57102 = state_55184__$1;
(statearr_55377_57102[(1)] = (55));

} else {
var statearr_55378_57103 = state_55184__$1;
(statearr_55378_57103[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (114))){
var inst_55115 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_55116 = (new Error(inst_55115));
var inst_55117 = (function(){throw inst_55116})();
var state_55184__$1 = state_55184;
var statearr_55379_57125 = state_55184__$1;
(statearr_55379_57125[(2)] = inst_55117);

(statearr_55379_57125[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (67))){
var inst_54920 = (state_55184[(30)]);
var inst_54964 = (state_55184[(2)]);
var inst_54965 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_54920) : read.call(null,inst_54920));
var state_55184__$1 = (function (){var statearr_55380 = state_55184;
(statearr_55380[(66)] = inst_54964);

return statearr_55380;
})();
var statearr_55381_57126 = state_55184__$1;
(statearr_55381_57126[(2)] = inst_54965);

(statearr_55381_57126[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (71))){
var inst_54872 = (state_55184[(15)]);
var inst_54893 = (state_55184[(64)]);
var inst_54863 = (state_55184[(27)]);
var inst_54977 = (state_55184[(2)]);
var inst_54978 = com.wsscode.pathom.parser.ast__GT_out_key(inst_54893);
var inst_54979 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_54863,inst_54978,inst_54977);
var inst_54863__$1 = inst_54979;
var inst_54864 = inst_54872;
var state_55184__$1 = (function (){var statearr_55382 = state_55184;
(statearr_55382[(13)] = inst_54864);

(statearr_55382[(27)] = inst_54863__$1);

return statearr_55382;
})();
var statearr_55383_57129 = state_55184__$1;
(statearr_55383_57129[(2)] = null);

(statearr_55383_57129[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (42))){
var inst_54907 = (state_55184[(42)]);
var state_55184__$1 = state_55184;
var statearr_55384_57131 = state_55184__$1;
(statearr_55384_57131[(2)] = inst_54907);

(statearr_55384_57131[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (80))){
var inst_54992 = (state_55184[(10)]);
var state_55184__$1 = state_55184;
var statearr_55385_57133 = state_55184__$1;
(statearr_55385_57133[(2)] = inst_54992);

(statearr_55385_57133[(1)] = (81));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (37))){
var inst_54893 = (state_55184[(64)]);
var inst_54893__$1 = (state_55184[(2)]);
var inst_54894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54893__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_54895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54893__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_54896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54893__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_54897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54893__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_55184__$1 = (function (){var statearr_55386 = state_55184;
(statearr_55386[(50)] = inst_54897);

(statearr_55386[(44)] = inst_54894);

(statearr_55386[(51)] = inst_54895);

(statearr_55386[(64)] = inst_54893__$1);

(statearr_55386[(29)] = inst_54896);

return statearr_55386;
})();
if(cljs.core.truth_(inst_54893__$1)){
var statearr_55387_57139 = state_55184__$1;
(statearr_55387_57139[(1)] = (38));

} else {
var statearr_55388_57140 = state_55184__$1;
(statearr_55388_57140[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (63))){
var inst_54956 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
var statearr_55389_57142 = state_55184__$1;
(statearr_55389_57142[(2)] = inst_54956);

(statearr_55389_57142[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (94))){
var state_55184__$1 = state_55184;
var statearr_55390_57145 = state_55184__$1;
(statearr_55390_57145[(2)] = false);

(statearr_55390_57145[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (8))){
var inst_55179 = (state_55184[(2)]);
var _ = (function (){var statearr_55391 = state_55184;
(statearr_55391[(4)] = cljs.core.rest((state_55184[(4)])));

return statearr_55391;
})();
var state_55184__$1 = state_55184;
var statearr_55392_57148 = state_55184__$1;
(statearr_55392_57148[(2)] = inst_55179);

(statearr_55392_57148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (49))){
var state_55184__$1 = state_55184;
var statearr_55393_57149 = state_55184__$1;
(statearr_55393_57149[(2)] = null);

(statearr_55393_57149[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55185 === (84))){
var inst_55045 = (state_55184[(2)]);
var state_55184__$1 = state_55184;
if(cljs.core.truth_(inst_55045)){
var statearr_55394_57151 = state_55184__$1;
(statearr_55394_57151[(1)] = (88));

} else {
var statearr_55395_57152 = state_55184__$1;
(statearr_55395_57152[(1)] = (89));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48839__auto__,map__54785,map__54785__$1,read,mutate))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__54785,map__54785__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto____0 = (function (){
var statearr_55396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55396[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto__);

(statearr_55396[(1)] = (1));

return statearr_55396;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto____1 = (function (state_55184){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55184);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e55397){var ex__48143__auto__ = e55397;
var statearr_55398_57157 = state_55184;
(statearr_55398_57157[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55184[(4)]))){
var statearr_55399_57158 = state_55184;
(statearr_55399_57158[(1)] = cljs.core.first((state_55184[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57160 = state_55184;
state_55184 = G__57160;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto__ = function(state_55184){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto____1.call(this,state_55184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__54785,map__54785__$1,read,mutate))
})();
var state__48841__auto__ = (function (){var statearr_55400 = f__48840__auto__();
(statearr_55400[(6)] = c__48839__auto__);

return statearr_55400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__54785,map__54785__$1,read,mutate))
);

return c__48839__auto__;
});
;})(map__54785,map__54785__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__55401,key){
var map__55402 = p__55401;
var map__55402__$1 = (((((!((map__55402 == null))))?(((((map__55402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55402):map__55402);
var env = map__55402__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55402__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55402__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__48839__auto___57178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto___57178,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto___57178,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_55426){
var state_val_55427 = (state_55426[(1)]);
if((state_val_55427 === (1))){
var inst_55404 = cljs.core.async.timeout((1));
var state_55426__$1 = state_55426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55426__$1,(2),inst_55404);
} else {
if((state_val_55427 === (2))){
var inst_55406 = (state_55426[(2)]);
var inst_55407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_55408 = cljs.core.deref(inst_55407);
var inst_55409 = cljs.core.contains_QMARK_(inst_55408,key);
var state_55426__$1 = (function (){var statearr_55428 = state_55426;
(statearr_55428[(7)] = inst_55406);

return statearr_55428;
})();
if(inst_55409){
var statearr_55429_57181 = state_55426__$1;
(statearr_55429_57181[(1)] = (3));

} else {
var statearr_55430_57182 = state_55426__$1;
(statearr_55430_57182[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55427 === (3))){
var inst_55411 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_55412 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_55413 = cljs.core.PersistentHashMap.fromArrays(inst_55411,inst_55412);
var inst_55414 = com.wsscode.pathom.trace.trace(env,inst_55413);
var inst_55415 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_55416 = [key];
var inst_55417 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_55416);
var inst_55418 = [inst_55417];
var inst_55419 = cljs.core.PersistentHashMap.fromArrays(inst_55415,inst_55418);
var inst_55420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_55419);
var inst_55421 = cljs.core.async.close_BANG_(ch);
var state_55426__$1 = (function (){var statearr_55431 = state_55426;
(statearr_55431[(8)] = inst_55414);

(statearr_55431[(9)] = inst_55420);

return statearr_55431;
})();
var statearr_55432_57188 = state_55426__$1;
(statearr_55432_57188[(2)] = inst_55421);

(statearr_55432_57188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55427 === (4))){
var state_55426__$1 = state_55426;
var statearr_55433_57189 = state_55426__$1;
(statearr_55433_57189[(2)] = null);

(statearr_55433_57189[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55427 === (5))){
var inst_55424 = (state_55426[(2)]);
var state_55426__$1 = state_55426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55426__$1,inst_55424);
} else {
return null;
}
}
}
}
}
});})(c__48839__auto___57178,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__48139__auto__,c__48839__auto___57178,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____0 = (function (){
var statearr_55434 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55434[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__);

(statearr_55434[(1)] = (1));

return statearr_55434;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____1 = (function (state_55426){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55426);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e55435){var ex__48143__auto__ = e55435;
var statearr_55436_57193 = state_55426;
(statearr_55436_57193[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55426[(4)]))){
var statearr_55437_57196 = state_55426;
(statearr_55437_57196[(1)] = cljs.core.first((state_55426[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57198 = state_55426;
state_55426 = G__57198;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__ = function(state_55426){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____1.call(this,state_55426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto___57178,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__48841__auto__ = (function (){var statearr_55438 = f__48840__auto__();
(statearr_55438[(6)] = c__48839__auto___57178);

return statearr_55438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto___57178,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout))
);


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_55464){
var state_val_55465 = (state_55464[(1)]);
if((state_val_55465 === (1))){
var inst_55442 = (state_55464[(7)]);
var inst_55442__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_55443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55444 = [ch,inst_55442__$1];
var inst_55445 = (new cljs.core.PersistentVector(null,2,(5),inst_55443,inst_55444,null));
var state_55464__$1 = (function (){var statearr_55466 = state_55464;
(statearr_55466[(7)] = inst_55442__$1);

return statearr_55466;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55464__$1,(2),inst_55445,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55465 === (2))){
var inst_55442 = (state_55464[(7)]);
var inst_55447 = (state_55464[(2)]);
var inst_55448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55447,(0),null);
var inst_55449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55447,(1),null);
var inst_55450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55449,inst_55442);
var state_55464__$1 = (function (){var statearr_55467 = state_55464;
(statearr_55467[(8)] = inst_55448);

return statearr_55467;
})();
if(inst_55450){
var statearr_55468_57222 = state_55464__$1;
(statearr_55468_57222[(1)] = (3));

} else {
var statearr_55469_57225 = state_55464__$1;
(statearr_55469_57225[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55465 === (3))){
var inst_55452 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_55453 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_55454 = cljs.core.PersistentHashMap.fromArrays(inst_55452,inst_55453);
var inst_55455 = com.wsscode.pathom.trace.trace(env,inst_55454);
var inst_55456 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_55457 = cljs.core.PersistentHashSet.EMPTY;
var inst_55458 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_55457];
var inst_55459 = cljs.core.PersistentHashMap.fromArrays(inst_55456,inst_55458);
var state_55464__$1 = (function (){var statearr_55470 = state_55464;
(statearr_55470[(9)] = inst_55455);

return statearr_55470;
})();
var statearr_55471_57227 = state_55464__$1;
(statearr_55471_57227[(2)] = inst_55459);

(statearr_55471_57227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55465 === (4))){
var inst_55448 = (state_55464[(8)]);
var state_55464__$1 = state_55464;
var statearr_55472_57229 = state_55464__$1;
(statearr_55472_57229[(2)] = inst_55448);

(statearr_55472_57229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55465 === (5))){
var inst_55462 = (state_55464[(2)]);
var state_55464__$1 = state_55464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55464__$1,inst_55462);
} else {
return null;
}
}
}
}
}
});})(c__48839__auto__,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__48139__auto__,c__48839__auto__,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____0 = (function (){
var statearr_55473 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55473[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__);

(statearr_55473[(1)] = (1));

return statearr_55473;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____1 = (function (state_55464){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55464);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e55474){var ex__48143__auto__ = e55474;
var statearr_55475_57232 = state_55464;
(statearr_55475_57232[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55464[(4)]))){
var statearr_55476_57235 = state_55464;
(statearr_55476_57235[(1)] = cljs.core.first((state_55464[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57236 = state_55464;
state_55464 = G__57236;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__ = function(state_55464){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____1.call(this,state_55464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__48841__auto__ = (function (){var statearr_55477 = f__48840__auto__();
(statearr_55477[(6)] = c__48839__auto__);

return statearr_55477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,ch,map__55402,map__55402__$1,env,key_watchers,external_wait_ignore_timeout))
);

return c__48839__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__55478,e){
var map__55479 = p__55478;
var map__55479__$1 = (((((!((map__55479 == null))))?(((((map__55479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55479):map__55479);
var env = map__55479__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55479__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__55481 = ast;
var map__55481__$1 = (((((!((map__55481 == null))))?(((((map__55481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55481):map__55481);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55481__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__55483 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__55483__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__55483,new cljs.core.Keyword(null,"query","query",-1288509510)):G__55483);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55483__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__55483__$1;
}
})();
var value = (function (){var G__55484 = type;
var G__55484__$1 = (((G__55484 instanceof cljs.core.Keyword))?G__55484.fqn:null);
switch (G__55484__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__55485 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__55485__$1 = (((((!((map__55485 == null))))?(((((map__55485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55485):map__55485);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55485__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__55485,map__55485__$1,action,G__55484,G__55484__$1,map__55481,map__55481__$1,query,key,type,params,env__$1){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__55485,map__55485__$1,action,G__55484,G__55484__$1,map__55481,map__55481__$1,query,key,type,params,env__$1){
return (function (state_55527){
var state_val_55528 = (state_55527[(1)]);
if((state_val_55528 === (7))){
var inst_55501 = (state_55527[(7)]);
var inst_55508 = com.wsscode.async.async_cljs.promise_QMARK_(inst_55501);
var state_55527__$1 = state_55527;
if(cljs.core.truth_(inst_55508)){
var statearr_55529_57252 = state_55527__$1;
(statearr_55529_57252[(1)] = (10));

} else {
var statearr_55530_57253 = state_55527__$1;
(statearr_55530_57253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (1))){
var state_55527__$1 = state_55527;
var statearr_55531_57254 = state_55527__$1;
(statearr_55531_57254[(2)] = null);

(statearr_55531_57254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (4))){
var inst_55487 = (state_55527[(2)]);
var inst_55488 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_55489 = com.wsscode.pathom.parser.process_error(env__$1,inst_55487);
var inst_55490 = [inst_55489];
var inst_55491 = cljs.core.PersistentHashMap.fromArrays(inst_55488,inst_55490);
var state_55527__$1 = state_55527;
var statearr_55532_57257 = state_55527__$1;
(statearr_55532_57257[(2)] = inst_55491);

(statearr_55532_57257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (15))){
var state_55527__$1 = state_55527;
var statearr_55533_57259 = state_55527__$1;
(statearr_55533_57259[(2)] = null);

(statearr_55533_57259[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (13))){
var inst_55512 = (state_55527[(2)]);
var inst_55513 = com.wsscode.async.async_cljs.consumer_pair(inst_55512);
var state_55527__$1 = state_55527;
var statearr_55534_57260 = state_55527__$1;
(statearr_55534_57260[(2)] = inst_55513);

(statearr_55534_57260[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (6))){
var inst_55501 = (state_55527[(7)]);
var state_55527__$1 = state_55527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55527__$1,(9),inst_55501);
} else {
if((state_val_55528 === (3))){
var inst_55525 = (state_55527[(2)]);
var state_55527__$1 = state_55527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55527__$1,inst_55525);
} else {
if((state_val_55528 === (12))){
var inst_55520 = (state_55527[(2)]);
var state_55527__$1 = state_55527;
var statearr_55535_57277 = state_55527__$1;
(statearr_55535_57277[(2)] = inst_55520);

(statearr_55535_57277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (2))){
var inst_55501 = (state_55527[(7)]);
var _ = (function (){var statearr_55536 = state_55527;
(statearr_55536[(4)] = cljs.core.cons((5),(state_55527[(4)])));

return statearr_55536;
})();
var inst_55497 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_55498 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_55499 = cljs.core.PersistentHashMap.fromArrays(inst_55497,inst_55498);
var inst_55500 = com.wsscode.pathom.trace.trace(env__$1,inst_55499);
var inst_55501__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_55502 = com.wsscode.async.async_cljs.chan_QMARK_(inst_55501__$1);
var state_55527__$1 = (function (){var statearr_55537 = state_55527;
(statearr_55537[(8)] = inst_55500);

(statearr_55537[(7)] = inst_55501__$1);

return statearr_55537;
})();
if(inst_55502){
var statearr_55538_57294 = state_55527__$1;
(statearr_55538_57294[(1)] = (6));

} else {
var statearr_55539_57295 = state_55527__$1;
(statearr_55539_57295[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (11))){
var state_55527__$1 = state_55527;
var statearr_55541_57296 = state_55527__$1;
(statearr_55541_57296[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (9))){
var inst_55505 = (state_55527[(2)]);
var inst_55506 = com.wsscode.async.async_cljs.throw_err(inst_55505);
var state_55527__$1 = state_55527;
var statearr_55543_57297 = state_55527__$1;
(statearr_55543_57297[(2)] = inst_55506);

(statearr_55543_57297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (5))){
var _ = (function (){var statearr_55544 = state_55527;
(statearr_55544[(4)] = cljs.core.rest((state_55527[(4)])));

return statearr_55544;
})();
var state_55527__$1 = state_55527;
var ex55540 = (state_55527__$1[(2)]);
var statearr_55545_57299 = state_55527__$1;
(statearr_55545_57299[(5)] = ex55540);


var statearr_55546_57300 = state_55527__$1;
(statearr_55546_57300[(1)] = (4));

(statearr_55546_57300[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (14))){
var inst_55501 = (state_55527[(7)]);
var state_55527__$1 = state_55527;
var statearr_55547_57302 = state_55527__$1;
(statearr_55547_57302[(2)] = inst_55501);

(statearr_55547_57302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (16))){
var inst_55518 = (state_55527[(2)]);
var state_55527__$1 = state_55527;
var statearr_55548_57304 = state_55527__$1;
(statearr_55548_57304[(2)] = inst_55518);

(statearr_55548_57304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55528 === (10))){
var inst_55501 = (state_55527[(7)]);
var inst_55510 = com.wsscode.async.async_cljs.promise__GT_chan(inst_55501);
var state_55527__$1 = state_55527;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55527__$1,(13),inst_55510);
} else {
if((state_val_55528 === (8))){
var inst_55522 = (state_55527[(2)]);
var _ = (function (){var statearr_55549 = state_55527;
(statearr_55549[(4)] = cljs.core.rest((state_55527[(4)])));

return statearr_55549;
})();
var state_55527__$1 = state_55527;
var statearr_55550_57306 = state_55527__$1;
(statearr_55550_57306[(2)] = inst_55522);

(statearr_55550_57306[(1)] = (3));


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
});})(c__48839__auto__,map__55485,map__55485__$1,action,G__55484,G__55484__$1,map__55481,map__55481__$1,query,key,type,params,env__$1))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__55485,map__55485__$1,action,G__55484,G__55484__$1,map__55481,map__55481__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____0 = (function (){
var statearr_55551 = [null,null,null,null,null,null,null,null,null];
(statearr_55551[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__);

(statearr_55551[(1)] = (1));

return statearr_55551;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____1 = (function (state_55527){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55527);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e55552){var ex__48143__auto__ = e55552;
var statearr_55553_57311 = state_55527;
(statearr_55553_57311[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55527[(4)]))){
var statearr_55554_57313 = state_55527;
(statearr_55554_57313[(1)] = cljs.core.first((state_55527[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57316 = state_55527;
state_55527 = G__57316;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__ = function(state_55527){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____1.call(this,state_55527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__55485,map__55485__$1,action,G__55484,G__55484__$1,map__55481,map__55481__$1,query,key,type,params,env__$1))
})();
var state__48841__auto__ = (function (){var statearr_55555 = f__48840__auto__();
(statearr_55555[(6)] = c__48839__auto__);

return statearr_55555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__55485,map__55485__$1,action,G__55484,G__55484__$1,map__55481,map__55481__$1,query,key,type,params,env__$1))
);

return c__48839__auto__;
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
var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__27501__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__27500__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__27501__auto__;
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
var stream = (function (){var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,provides,map__55481,map__55481__$1,query,key,type,params,env__$1,value){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,provides,map__55481,map__55481__$1,query,key,type,params,env__$1,value){
return (function (state_55566){
var state_val_55567 = (state_55566[(1)]);
if((state_val_55567 === (1))){
var inst_55556 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_55557 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_55566__$1 = (function (){var statearr_55568 = state_55566;
(statearr_55568[(7)] = inst_55556);

(statearr_55568[(8)] = inst_55557);

return statearr_55568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55566__$1,(2),value);
} else {
if((state_val_55567 === (2))){
var inst_55556 = (state_55566[(7)]);
var inst_55557 = (state_55566[(8)]);
var inst_55559 = (state_55566[(2)]);
var inst_55560 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_55561 = [inst_55559,inst_55560];
var inst_55562 = cljs.core.PersistentHashMap.fromArrays(inst_55557,inst_55561);
var inst_55563 = [provides,true,inst_55562];
var inst_55564 = cljs.core.PersistentHashMap.fromArrays(inst_55556,inst_55563);
var state_55566__$1 = state_55566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55566__$1,inst_55564);
} else {
return null;
}
}
});})(c__48839__auto__,provides,map__55481,map__55481__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__48139__auto__,c__48839__auto__,provides,map__55481,map__55481__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____0 = (function (){
var statearr_55569 = [null,null,null,null,null,null,null,null,null];
(statearr_55569[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__);

(statearr_55569[(1)] = (1));

return statearr_55569;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____1 = (function (state_55566){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55566);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e55570){var ex__48143__auto__ = e55570;
var statearr_55571_57326 = state_55566;
(statearr_55571_57326[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55566[(4)]))){
var statearr_55572_57327 = state_55566;
(statearr_55572_57327[(1)] = cljs.core.first((state_55566[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57333 = state_55566;
state_55566 = G__57333;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__ = function(state_55566){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____1.call(this,state_55566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,provides,map__55481,map__55481__$1,query,key,type,params,env__$1,value))
})();
var state__48841__auto__ = (function (){var statearr_55573 = f__48840__auto__();
(statearr_55573[(6)] = c__48839__auto__);

return statearr_55573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,provides,map__55481,map__55481__$1,query,key,type,params,env__$1,value))
);

return c__48839__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","channel-response","com.wsscode.pathom.parser/channel-response",140507736),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
if(cljs.core.truth_((function (){try{return new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value);
}catch (e55574){var _ = e55574;
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
var trace_id__27500__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__27501__auto__ = (function (){var seq__55575 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__55576 = null;
var count__55577 = (0);
var i__55578 = (0);
while(true){
if((i__55578 < count__55577)){
var vec__55593 = chunk__55576.cljs$core$IIndexed$_nth$arity$2(null,i__55578);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55593,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55596_57362 = cljs.core.seq(watchers);
var chunk__55597_57363 = null;
var count__55598_57364 = (0);
var i__55599_57365 = (0);
while(true){
if((i__55599_57365 < count__55598_57364)){
var out_57366 = chunk__55597_57363.cljs$core$IIndexed$_nth$arity$2(null,i__55599_57365);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57366,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57366);


var G__57367 = seq__55596_57362;
var G__57368 = chunk__55597_57363;
var G__57369 = count__55598_57364;
var G__57370 = (i__55599_57365 + (1));
seq__55596_57362 = G__57367;
chunk__55597_57363 = G__57368;
count__55598_57364 = G__57369;
i__55599_57365 = G__57370;
continue;
} else {
var temp__5720__auto___57371 = cljs.core.seq(seq__55596_57362);
if(temp__5720__auto___57371){
var seq__55596_57372__$1 = temp__5720__auto___57371;
if(cljs.core.chunked_seq_QMARK_(seq__55596_57372__$1)){
var c__4550__auto___57373 = cljs.core.chunk_first(seq__55596_57372__$1);
var G__57374 = cljs.core.chunk_rest(seq__55596_57372__$1);
var G__57375 = c__4550__auto___57373;
var G__57376 = cljs.core.count(c__4550__auto___57373);
var G__57377 = (0);
seq__55596_57362 = G__57374;
chunk__55597_57363 = G__57375;
count__55598_57364 = G__57376;
i__55599_57365 = G__57377;
continue;
} else {
var out_57378 = cljs.core.first(seq__55596_57372__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57378,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57378);


var G__57379 = cljs.core.next(seq__55596_57372__$1);
var G__57380 = null;
var G__57381 = (0);
var G__57382 = (0);
seq__55596_57362 = G__57379;
chunk__55597_57363 = G__57380;
count__55598_57364 = G__57381;
i__55599_57365 = G__57382;
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


var G__57383 = seq__55575;
var G__57384 = chunk__55576;
var G__57385 = count__55577;
var G__57386 = (i__55578 + (1));
seq__55575 = G__57383;
chunk__55576 = G__57384;
count__55577 = G__57385;
i__55578 = G__57386;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__55575);
if(temp__5720__auto__){
var seq__55575__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55575__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55575__$1);
var G__57387 = cljs.core.chunk_rest(seq__55575__$1);
var G__57388 = c__4550__auto__;
var G__57389 = cljs.core.count(c__4550__auto__);
var G__57390 = (0);
seq__55575 = G__57387;
chunk__55576 = G__57388;
count__55577 = G__57389;
i__55578 = G__57390;
continue;
} else {
var vec__55600 = cljs.core.first(seq__55575__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55600,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55600,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55603_57394 = cljs.core.seq(watchers);
var chunk__55604_57395 = null;
var count__55605_57396 = (0);
var i__55606_57397 = (0);
while(true){
if((i__55606_57397 < count__55605_57396)){
var out_57398 = chunk__55604_57395.cljs$core$IIndexed$_nth$arity$2(null,i__55606_57397);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57398,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57398);


var G__57399 = seq__55603_57394;
var G__57400 = chunk__55604_57395;
var G__57401 = count__55605_57396;
var G__57402 = (i__55606_57397 + (1));
seq__55603_57394 = G__57399;
chunk__55604_57395 = G__57400;
count__55605_57396 = G__57401;
i__55606_57397 = G__57402;
continue;
} else {
var temp__5720__auto___57403__$1 = cljs.core.seq(seq__55603_57394);
if(temp__5720__auto___57403__$1){
var seq__55603_57404__$1 = temp__5720__auto___57403__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55603_57404__$1)){
var c__4550__auto___57405 = cljs.core.chunk_first(seq__55603_57404__$1);
var G__57406 = cljs.core.chunk_rest(seq__55603_57404__$1);
var G__57407 = c__4550__auto___57405;
var G__57408 = cljs.core.count(c__4550__auto___57405);
var G__57409 = (0);
seq__55603_57394 = G__57406;
chunk__55604_57395 = G__57407;
count__55605_57396 = G__57408;
i__55606_57397 = G__57409;
continue;
} else {
var out_57410 = cljs.core.first(seq__55603_57404__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57410,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57410);


var G__57412 = cljs.core.next(seq__55603_57404__$1);
var G__57413 = null;
var G__57414 = (0);
var G__57415 = (0);
seq__55603_57394 = G__57412;
chunk__55604_57395 = G__57413;
count__55605_57396 = G__57414;
i__55606_57397 = G__57415;
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


var G__57416 = cljs.core.next(seq__55575__$1);
var G__57417 = null;
var G__57418 = (0);
var G__57419 = (0);
seq__55575 = G__57416;
chunk__55576 = G__57417;
count__55577 = G__57418;
i__55578 = G__57419;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__27500__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__27501__auto__;
} else {
var seq__55607 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__55608 = null;
var count__55609 = (0);
var i__55610 = (0);
while(true){
if((i__55610 < count__55609)){
var vec__55625 = chunk__55608.cljs$core$IIndexed$_nth$arity$2(null,i__55610);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55625,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55625,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55628_57422 = cljs.core.seq(watchers);
var chunk__55629_57423 = null;
var count__55630_57424 = (0);
var i__55631_57425 = (0);
while(true){
if((i__55631_57425 < count__55630_57424)){
var out_57428 = chunk__55629_57423.cljs$core$IIndexed$_nth$arity$2(null,i__55631_57425);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57428,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57428);


var G__57429 = seq__55628_57422;
var G__57430 = chunk__55629_57423;
var G__57431 = count__55630_57424;
var G__57432 = (i__55631_57425 + (1));
seq__55628_57422 = G__57429;
chunk__55629_57423 = G__57430;
count__55630_57424 = G__57431;
i__55631_57425 = G__57432;
continue;
} else {
var temp__5720__auto___57433 = cljs.core.seq(seq__55628_57422);
if(temp__5720__auto___57433){
var seq__55628_57434__$1 = temp__5720__auto___57433;
if(cljs.core.chunked_seq_QMARK_(seq__55628_57434__$1)){
var c__4550__auto___57435 = cljs.core.chunk_first(seq__55628_57434__$1);
var G__57436 = cljs.core.chunk_rest(seq__55628_57434__$1);
var G__57437 = c__4550__auto___57435;
var G__57438 = cljs.core.count(c__4550__auto___57435);
var G__57439 = (0);
seq__55628_57422 = G__57436;
chunk__55629_57423 = G__57437;
count__55630_57424 = G__57438;
i__55631_57425 = G__57439;
continue;
} else {
var out_57440 = cljs.core.first(seq__55628_57434__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57440,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57440);


var G__57441 = cljs.core.next(seq__55628_57434__$1);
var G__57442 = null;
var G__57443 = (0);
var G__57444 = (0);
seq__55628_57422 = G__57441;
chunk__55629_57423 = G__57442;
count__55630_57424 = G__57443;
i__55631_57425 = G__57444;
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


var G__57446 = seq__55607;
var G__57447 = chunk__55608;
var G__57448 = count__55609;
var G__57449 = (i__55610 + (1));
seq__55607 = G__57446;
chunk__55608 = G__57447;
count__55609 = G__57448;
i__55610 = G__57449;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__55607);
if(temp__5720__auto__){
var seq__55607__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55607__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__55607__$1);
var G__57450 = cljs.core.chunk_rest(seq__55607__$1);
var G__57451 = c__4550__auto__;
var G__57452 = cljs.core.count(c__4550__auto__);
var G__57453 = (0);
seq__55607 = G__57450;
chunk__55608 = G__57451;
count__55609 = G__57452;
i__55610 = G__57453;
continue;
} else {
var vec__55632 = cljs.core.first(seq__55607__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55632,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55632,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__55635_57454 = cljs.core.seq(watchers);
var chunk__55636_57455 = null;
var count__55637_57456 = (0);
var i__55638_57457 = (0);
while(true){
if((i__55638_57457 < count__55637_57456)){
var out_57458 = chunk__55636_57455.cljs$core$IIndexed$_nth$arity$2(null,i__55638_57457);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57458,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57458);


var G__57459 = seq__55635_57454;
var G__57460 = chunk__55636_57455;
var G__57461 = count__55637_57456;
var G__57462 = (i__55638_57457 + (1));
seq__55635_57454 = G__57459;
chunk__55636_57455 = G__57460;
count__55637_57456 = G__57461;
i__55638_57457 = G__57462;
continue;
} else {
var temp__5720__auto___57463__$1 = cljs.core.seq(seq__55635_57454);
if(temp__5720__auto___57463__$1){
var seq__55635_57464__$1 = temp__5720__auto___57463__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55635_57464__$1)){
var c__4550__auto___57465 = cljs.core.chunk_first(seq__55635_57464__$1);
var G__57466 = cljs.core.chunk_rest(seq__55635_57464__$1);
var G__57467 = c__4550__auto___57465;
var G__57468 = cljs.core.count(c__4550__auto___57465);
var G__57469 = (0);
seq__55635_57454 = G__57466;
chunk__55636_57455 = G__57467;
count__55637_57456 = G__57468;
i__55638_57457 = G__57469;
continue;
} else {
var out_57470 = cljs.core.first(seq__55635_57464__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_57470,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_57470);


var G__57471 = cljs.core.next(seq__55635_57464__$1);
var G__57472 = null;
var G__57473 = (0);
var G__57474 = (0);
seq__55635_57454 = G__57471;
chunk__55636_57455 = G__57472;
count__55637_57456 = G__57473;
i__55638_57457 = G__57474;
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


var G__57475 = cljs.core.next(seq__55607__$1);
var G__57476 = null;
var G__57477 = (0);
var G__57478 = (0);
seq__55607 = G__57475;
chunk__55608 = G__57476;
count__55609 = G__57477;
i__55610 = G__57478;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__55639){
var vec__55640 = p__55639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55640,(1),null);
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
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__55645,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__55646 = p__55645;
var map__55646__$1 = (((((!((map__55646 == null))))?(((((map__55646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55646):map__55646);
var env = map__55646__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55646__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55646__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55646__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55646__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (state_55919){
var state_val_55920 = (state_55919[(1)]);
if((state_val_55920 === (65))){
var inst_55675 = (state_55919[(7)]);
var inst_55844 = (state_55919[(8)]);
var inst_55843 = (state_55919[(9)]);
var inst_55666 = (state_55919[(10)]);
var inst_55841 = (state_55919[(11)]);
var inst_55839 = (state_55919[(12)]);
var inst_55838 = (state_55919[(13)]);
var inst_55835 = (state_55919[(14)]);
var inst_55842 = (state_55919[(15)]);
var inst_55677 = (state_55919[(16)]);
var inst_55840 = (state_55919[(17)]);
var inst_55837 = (state_55919[(18)]);
var inst_55661 = (state_55919[(19)]);
var inst_55678 = (state_55919[(20)]);
var inst_55679 = (state_55919[(21)]);
var inst_55855 = (state_55919[(2)]);
var inst_55856 = com.wsscode.pathom.trace.trace(env,inst_55855);
var inst_55857 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_55858 = (function (){var p = inst_55679;
var merge_result_QMARK_ = inst_55838;
var recheck_ch = inst_55666;
var response_value = inst_55843;
var _ = inst_55661;
var key_as = inst_55842;
var provides_SINGLEQUOTE_ = inst_55841;
var msg = inst_55678;
var waiting__$1 = inst_55844;
var map__55814 = inst_55835;
var processing_SINGLEQUOTE_ = inst_55675;
var vec__55654 = inst_55677;
var waiting_SINGLEQUOTE_ = inst_55840;
var error = inst_55839;
var provides = inst_55837;
return ((function (p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,map__55814,processing_SINGLEQUOTE_,vec__55654,waiting_SINGLEQUOTE_,error,provides,inst_55675,inst_55844,inst_55843,inst_55666,inst_55841,inst_55839,inst_55838,inst_55835,inst_55842,inst_55677,inst_55840,inst_55837,inst_55661,inst_55678,inst_55679,inst_55855,inst_55856,inst_55857,state_val_55920,c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__55644_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__55644_SHARP_], 0));
});
;})(p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,map__55814,processing_SINGLEQUOTE_,vec__55654,waiting_SINGLEQUOTE_,error,provides,inst_55675,inst_55844,inst_55843,inst_55666,inst_55841,inst_55839,inst_55838,inst_55835,inst_55842,inst_55677,inst_55840,inst_55837,inst_55661,inst_55678,inst_55679,inst_55855,inst_55856,inst_55857,state_val_55920,c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_55859 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55857,inst_55858);
var inst_55860 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_55841,inst_55839);
var state_55919__$1 = (function (){var statearr_55921 = state_55919;
(statearr_55921[(22)] = inst_55859);

(statearr_55921[(23)] = inst_55860);

(statearr_55921[(24)] = inst_55856);

return statearr_55921;
})();
if(cljs.core.truth_(inst_55838)){
var statearr_55922_57489 = state_55919__$1;
(statearr_55922_57489[(1)] = (66));

} else {
var statearr_55923_57490 = state_55919__$1;
(statearr_55923_57490[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (62))){
var inst_55912 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55924_57491 = state_55919__$1;
(statearr_55924_57491[(2)] = inst_55912);

(statearr_55924_57491[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (7))){
var state_55919__$1 = state_55919;
var statearr_55925_57493 = state_55919__$1;
(statearr_55925_57493[(2)] = null);

(statearr_55925_57493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (59))){
var inst_55835 = (state_55919[(14)]);
var inst_55840 = (state_55919[(17)]);
var inst_55837 = (state_55919[(18)]);
var inst_55678 = (state_55919[(20)]);
var inst_55835__$1 = (state_55919[(2)]);
var inst_55836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55835__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_55837__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55835__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_55838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55835__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_55839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55835__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_55840__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_55678);
var inst_55841 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_55837__$1,inst_55840__$1);
var inst_55842 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_55836);
var inst_55843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_55836,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_55844 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_55840__$1);
var state_55919__$1 = (function (){var statearr_55926 = state_55919;
(statearr_55926[(8)] = inst_55844);

(statearr_55926[(9)] = inst_55843);

(statearr_55926[(11)] = inst_55841);

(statearr_55926[(12)] = inst_55839);

(statearr_55926[(13)] = inst_55838);

(statearr_55926[(14)] = inst_55835__$1);

(statearr_55926[(15)] = inst_55842);

(statearr_55926[(17)] = inst_55840__$1);

(statearr_55926[(18)] = inst_55837__$1);

return statearr_55926;
})();
if(cljs.core.truth_(inst_55678)){
var statearr_55927_57497 = state_55919__$1;
(statearr_55927_57497[(1)] = (60));

} else {
var statearr_55928_57498 = state_55919__$1;
(statearr_55928_57498[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (20))){
var inst_55791 = (state_55919[(2)]);
var inst_55792 = cljs.core.deref(done_signal_STAR_);
var state_55919__$1 = (function (){var statearr_55929 = state_55919;
(statearr_55929[(25)] = inst_55791);

return statearr_55929;
})();
if(cljs.core.truth_(inst_55792)){
var statearr_55930_57500 = state_55919__$1;
(statearr_55930_57500[(1)] = (48));

} else {
var statearr_55931_57501 = state_55919__$1;
(statearr_55931_57501[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (58))){
var inst_55678 = (state_55919[(20)]);
var state_55919__$1 = state_55919;
var statearr_55932_57505 = state_55919__$1;
(statearr_55932_57505[(2)] = inst_55678);

(statearr_55932_57505[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (60))){
var inst_55843 = (state_55919[(9)]);
var inst_55838 = (state_55919[(13)]);
var inst_55840 = (state_55919[(17)]);
var inst_55837 = (state_55919[(18)]);
var inst_55847 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_55848 = cljs.core.boolean$(inst_55838);
var inst_55849 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_55837,inst_55843,inst_55848];
var inst_55850 = cljs.core.PersistentHashMap.fromArrays(inst_55847,inst_55849);
var state_55919__$1 = (function (){var statearr_55933 = state_55919;
(statearr_55933[(26)] = inst_55850);

return statearr_55933;
})();
if(cljs.core.truth_(inst_55840)){
var statearr_55934_57506 = state_55919__$1;
(statearr_55934_57506[(1)] = (63));

} else {
var statearr_55935_57507 = state_55919__$1;
(statearr_55935_57507[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (27))){
var state_55919__$1 = state_55919;
var statearr_55936_57508 = state_55919__$1;
(statearr_55936_57508[(2)] = true);

(statearr_55936_57508[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (1))){
var state_55919__$1 = state_55919;
var statearr_55937_57509 = state_55919__$1;
(statearr_55937_57509[(2)] = null);

(statearr_55937_57509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (24))){
var inst_55720 = (state_55919[(27)]);
var inst_55725 = inst_55720.cljs$lang$protocol_mask$partition0$;
var inst_55726 = (inst_55725 & (64));
var inst_55727 = inst_55720.cljs$core$ISeq$;
var inst_55728 = (cljs.core.PROTOCOL_SENTINEL === inst_55727);
var inst_55729 = ((inst_55726) || (inst_55728));
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55729)){
var statearr_55938_57510 = state_55919__$1;
(statearr_55938_57510[(1)] = (27));

} else {
var statearr_55939_57511 = state_55919__$1;
(statearr_55939_57511[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (55))){
var state_55919__$1 = state_55919;
var statearr_55940_57512 = state_55919__$1;
(statearr_55940_57512[(2)] = false);

(statearr_55940_57512[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (39))){
var inst_55757 = (state_55919[(28)]);
var inst_55762 = inst_55757.cljs$lang$protocol_mask$partition0$;
var inst_55763 = (inst_55762 & (64));
var inst_55764 = inst_55757.cljs$core$ISeq$;
var inst_55765 = (cljs.core.PROTOCOL_SENTINEL === inst_55764);
var inst_55766 = ((inst_55763) || (inst_55765));
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55766)){
var statearr_55941_57515 = state_55919__$1;
(statearr_55941_57515[(1)] = (42));

} else {
var statearr_55942_57516 = state_55919__$1;
(statearr_55942_57516[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (46))){
var inst_55757 = (state_55919[(28)]);
var state_55919__$1 = state_55919;
var statearr_55943_57517 = state_55919__$1;
(statearr_55943_57517[(2)] = inst_55757);

(statearr_55943_57517[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (4))){
var inst_55648 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55944_57518 = state_55919__$1;
(statearr_55944_57518[(2)] = inst_55648);

(statearr_55944_57518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (54))){
var state_55919__$1 = state_55919;
var statearr_55945_57522 = state_55919__$1;
(statearr_55945_57522[(2)] = true);

(statearr_55945_57522[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (15))){
var inst_55914 = (state_55919[(2)]);
var _ = (function (){var statearr_55946 = state_55919;
(statearr_55946[(4)] = cljs.core.rest((state_55919[(4)])));

return statearr_55946;
})();
var state_55919__$1 = state_55919;
var statearr_55947_57523 = state_55919__$1;
(statearr_55947_57523[(2)] = inst_55914);

(statearr_55947_57523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (48))){
var inst_55794 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55795 = cljs.core.PersistentHashSet.EMPTY;
var inst_55796 = cljs.core.PersistentHashSet.EMPTY;
var inst_55797 = cljs.core.PersistentVector.EMPTY;
var inst_55798 = [res,inst_55795,inst_55796,key_iterations,inst_55797];
var inst_55799 = (new cljs.core.PersistentVector(null,5,(5),inst_55794,inst_55798,null));
var state_55919__$1 = state_55919;
var statearr_55948_57524 = state_55919__$1;
(statearr_55948_57524[(2)] = inst_55799);

(statearr_55948_57524[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (50))){
var inst_55810 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55949_57525 = state_55919__$1;
(statearr_55949_57525[(2)] = inst_55810);

(statearr_55949_57525[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (21))){
var inst_55714 = (state_55919[(29)]);
var inst_55720 = (state_55919[(27)]);
var inst_55712 = (state_55919[(30)]);
var inst_55720__$1 = cljs.core._nth(inst_55712,inst_55714);
var inst_55722 = (inst_55720__$1 == null);
var inst_55723 = cljs.core.not(inst_55722);
var state_55919__$1 = (function (){var statearr_55953 = state_55919;
(statearr_55953[(27)] = inst_55720__$1);

return statearr_55953;
})();
if(inst_55723){
var statearr_55954_57527 = state_55919__$1;
(statearr_55954_57527[(1)] = (24));

} else {
var statearr_55955_57529 = state_55919__$1;
(statearr_55955_57529[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (31))){
var inst_55720 = (state_55919[(27)]);
var state_55919__$1 = state_55919;
var statearr_55956_57531 = state_55919__$1;
(statearr_55956_57531[(2)] = inst_55720);

(statearr_55956_57531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (32))){
var inst_55711 = (state_55919[(31)]);
var inst_55713 = (state_55919[(32)]);
var inst_55714 = (state_55919[(29)]);
var inst_55712 = (state_55919[(30)]);
var inst_55741 = (state_55919[(2)]);
var inst_55742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55741,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55743 = cljs.core.async.close_BANG_(inst_55742);
var inst_55744 = (inst_55714 + (1));
var tmp55950 = inst_55711;
var tmp55951 = inst_55713;
var tmp55952 = inst_55712;
var inst_55711__$1 = tmp55950;
var inst_55712__$1 = tmp55952;
var inst_55713__$1 = tmp55951;
var inst_55714__$1 = inst_55744;
var state_55919__$1 = (function (){var statearr_55957 = state_55919;
(statearr_55957[(31)] = inst_55711__$1);

(statearr_55957[(32)] = inst_55713__$1);

(statearr_55957[(29)] = inst_55714__$1);

(statearr_55957[(30)] = inst_55712__$1);

(statearr_55957[(33)] = inst_55743);

return statearr_55957;
})();
var statearr_55958_57532 = state_55919__$1;
(statearr_55958_57532[(2)] = null);

(statearr_55958_57532[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (40))){
var state_55919__$1 = state_55919;
var statearr_55959_57533 = state_55919__$1;
(statearr_55959_57533[(2)] = false);

(statearr_55959_57533[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (56))){
var inst_55827 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55960_57534 = state_55919__$1;
(statearr_55960_57534[(2)] = inst_55827);

(statearr_55960_57534[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (33))){
var inst_55747 = (state_55919[(34)]);
var inst_55749 = cljs.core.chunked_seq_QMARK_(inst_55747);
var state_55919__$1 = state_55919;
if(inst_55749){
var statearr_55961_57535 = state_55919__$1;
(statearr_55961_57535[(1)] = (36));

} else {
var statearr_55962_57537 = state_55919__$1;
(statearr_55962_57537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (13))){
var inst_55675 = (state_55919[(7)]);
var inst_55686 = (state_55919[(35)]);
var inst_55666 = (state_55919[(10)]);
var inst_55677 = (state_55919[(16)]);
var inst_55661 = (state_55919[(19)]);
var inst_55678 = (state_55919[(20)]);
var inst_55679 = (state_55919[(21)]);
var inst_55682 = cljs.core.keys(indexed_props);
var inst_55683 = cljs.core.set(inst_55682);
var inst_55684 = cljs.core.keys(res);
var inst_55685 = cljs.core.set(inst_55684);
var inst_55686__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_55683,inst_55685);
var inst_55687 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_55688 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_55689 = [processing,inst_55686__$1];
var inst_55690 = cljs.core.PersistentHashMap.fromArrays(inst_55688,inst_55689);
var inst_55691 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_55690];
var inst_55692 = cljs.core.PersistentHashMap.fromArrays(inst_55687,inst_55691);
var inst_55693 = com.wsscode.pathom.trace.trace(env,inst_55692);
var inst_55694 = (function (){var missing_props = inst_55686__$1;
var p = inst_55679;
var recheck_ch = inst_55666;
var _ = inst_55661;
var msg = inst_55678;
var processing_SINGLEQUOTE_ = inst_55675;
var all_props = inst_55683;
var vec__55654 = inst_55677;
var current_props = inst_55685;
return ((function (missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,vec__55654,current_props,inst_55675,inst_55686,inst_55666,inst_55677,inst_55661,inst_55678,inst_55679,inst_55682,inst_55683,inst_55684,inst_55685,inst_55686__$1,inst_55687,inst_55688,inst_55689,inst_55690,inst_55691,inst_55692,inst_55693,state_val_55920,c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__55643_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__55643_SHARP_));
});
;})(missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,vec__55654,current_props,inst_55675,inst_55686,inst_55666,inst_55677,inst_55661,inst_55678,inst_55679,inst_55682,inst_55683,inst_55684,inst_55685,inst_55686__$1,inst_55687,inst_55688,inst_55689,inst_55690,inst_55691,inst_55692,inst_55693,state_val_55920,c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_55695 = cljs.core.some(inst_55694,inst_55686__$1);
var state_55919__$1 = (function (){var statearr_55963 = state_55919;
(statearr_55963[(35)] = inst_55686__$1);

(statearr_55963[(36)] = inst_55693);

return statearr_55963;
})();
if(cljs.core.truth_(inst_55695)){
var statearr_55964_57543 = state_55919__$1;
(statearr_55964_57543[(1)] = (16));

} else {
var statearr_55965_57544 = state_55919__$1;
(statearr_55965_57544[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (22))){
var inst_55711 = (state_55919[(31)]);
var inst_55747 = (state_55919[(34)]);
var inst_55747__$1 = cljs.core.seq(inst_55711);
var state_55919__$1 = (function (){var statearr_55966 = state_55919;
(statearr_55966[(34)] = inst_55747__$1);

return statearr_55966;
})();
if(inst_55747__$1){
var statearr_55967_57562 = state_55919__$1;
(statearr_55967_57562[(1)] = (33));

} else {
var statearr_55968_57563 = state_55919__$1;
(statearr_55968_57563[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (36))){
var inst_55747 = (state_55919[(34)]);
var inst_55751 = cljs.core.chunk_first(inst_55747);
var inst_55752 = cljs.core.chunk_rest(inst_55747);
var inst_55753 = cljs.core.count(inst_55751);
var inst_55711 = inst_55752;
var inst_55712 = inst_55751;
var inst_55713 = inst_55753;
var inst_55714 = (0);
var state_55919__$1 = (function (){var statearr_55969 = state_55919;
(statearr_55969[(31)] = inst_55711);

(statearr_55969[(32)] = inst_55713);

(statearr_55969[(29)] = inst_55714);

(statearr_55969[(30)] = inst_55712);

return statearr_55969;
})();
var statearr_55970_57564 = state_55919__$1;
(statearr_55970_57564[(2)] = null);

(statearr_55970_57564[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (41))){
var inst_55773 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55773)){
var statearr_55971_57567 = state_55919__$1;
(statearr_55971_57567[(1)] = (45));

} else {
var statearr_55972_57568 = state_55919__$1;
(statearr_55972_57568[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (43))){
var state_55919__$1 = state_55919;
var statearr_55973_57570 = state_55919__$1;
(statearr_55973_57570[(2)] = false);

(statearr_55973_57570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (61))){
var inst_55844 = (state_55919[(8)]);
var inst_55679 = (state_55919[(21)]);
var inst_55901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55902 = cljs.core.PersistentHashSet.EMPTY;
var inst_55903 = [inst_55679];
var inst_55904 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_55903);
var inst_55905 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_55904,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55906 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_55905);
var inst_55907 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55902,inst_55906,processing);
var inst_55908 = cljs.core.PersistentVector.EMPTY;
var inst_55909 = [res,inst_55844,inst_55907,key_iterations,inst_55908];
var inst_55910 = (new cljs.core.PersistentVector(null,5,(5),inst_55901,inst_55909,null));
var state_55919__$1 = state_55919;
var statearr_55974_57574 = state_55919__$1;
(statearr_55974_57574[(2)] = inst_55910);

(statearr_55974_57574[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (29))){
var inst_55733 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55975_57576 = state_55919__$1;
(statearr_55975_57576[(2)] = inst_55733);

(statearr_55975_57576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (44))){
var inst_55770 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55976_57577 = state_55919__$1;
(statearr_55976_57577[(2)] = inst_55770);

(statearr_55976_57577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (6))){
var inst_55663 = cljs.core.async.timeout(processing_recheck_timer);
var state_55919__$1 = state_55919;
var statearr_55977_57579 = state_55919__$1;
(statearr_55977_57579[(2)] = inst_55663);

(statearr_55977_57579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (28))){
var state_55919__$1 = state_55919;
var statearr_55978_57581 = state_55919__$1;
(statearr_55978_57581[(2)] = false);

(statearr_55978_57581[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (64))){
var inst_55850 = (state_55919[(26)]);
var state_55919__$1 = state_55919;
var statearr_55979_57582 = state_55919__$1;
(statearr_55979_57582[(2)] = inst_55850);

(statearr_55979_57582[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (51))){
var inst_55678 = (state_55919[(20)]);
var inst_55819 = inst_55678.cljs$lang$protocol_mask$partition0$;
var inst_55820 = (inst_55819 & (64));
var inst_55821 = inst_55678.cljs$core$ISeq$;
var inst_55822 = (cljs.core.PROTOCOL_SENTINEL === inst_55821);
var inst_55823 = ((inst_55820) || (inst_55822));
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55823)){
var statearr_55980_57586 = state_55919__$1;
(statearr_55980_57586[(1)] = (54));

} else {
var statearr_55981_57587 = state_55919__$1;
(statearr_55981_57587[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (25))){
var state_55919__$1 = state_55919;
var statearr_55982_57589 = state_55919__$1;
(statearr_55982_57589[(2)] = false);

(statearr_55982_57589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (34))){
var state_55919__$1 = state_55919;
var statearr_55983_57590 = state_55919__$1;
(statearr_55983_57590[(2)] = null);

(statearr_55983_57590[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (17))){
var inst_55686 = (state_55919[(35)]);
var inst_55702 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_55703 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_55686];
var inst_55704 = cljs.core.PersistentHashMap.fromArrays(inst_55702,inst_55703);
var inst_55705 = com.wsscode.pathom.trace.trace(env,inst_55704);
var inst_55710 = cljs.core.seq(processing);
var inst_55711 = inst_55710;
var inst_55712 = null;
var inst_55713 = (0);
var inst_55714 = (0);
var state_55919__$1 = (function (){var statearr_55984 = state_55919;
(statearr_55984[(31)] = inst_55711);

(statearr_55984[(32)] = inst_55713);

(statearr_55984[(29)] = inst_55714);

(statearr_55984[(37)] = inst_55705);

(statearr_55984[(30)] = inst_55712);

return statearr_55984;
})();
var statearr_55985_57592 = state_55919__$1;
(statearr_55985_57592[(2)] = null);

(statearr_55985_57592[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (3))){
var inst_55917 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55919__$1,inst_55917);
} else {
if((state_val_55920 === (12))){
var inst_55666 = (state_55919[(10)]);
var inst_55677 = (state_55919[(16)]);
var inst_55679 = (state_55919[(21)]);
var inst_55677__$1 = (state_55919[(2)]);
var inst_55678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55677__$1,(0),null);
var inst_55679__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55677__$1,(1),null);
var inst_55680 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55679__$1,inst_55666);
var state_55919__$1 = (function (){var statearr_55986 = state_55919;
(statearr_55986[(16)] = inst_55677__$1);

(statearr_55986[(20)] = inst_55678);

(statearr_55986[(21)] = inst_55679__$1);

return statearr_55986;
})();
if(inst_55680){
var statearr_55987_57594 = state_55919__$1;
(statearr_55987_57594[(1)] = (13));

} else {
var statearr_55988_57595 = state_55919__$1;
(statearr_55988_57595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (2))){
var _ = (function (){var statearr_55989 = state_55919;
(statearr_55989[(4)] = cljs.core.cons((5),(state_55919[(4)])));

return statearr_55989;
})();
var inst_55657 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_55658 = cljs.core.count(processing);
var inst_55659 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_55658];
var inst_55660 = cljs.core.PersistentHashMap.fromArrays(inst_55657,inst_55659);
var inst_55661 = com.wsscode.pathom.trace.trace(env,inst_55660);
var state_55919__$1 = (function (){var statearr_55990 = state_55919;
(statearr_55990[(19)] = inst_55661);

return statearr_55990;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_55991_57599 = state_55919__$1;
(statearr_55991_57599[(1)] = (6));

} else {
var statearr_55992_57600 = state_55919__$1;
(statearr_55992_57600[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (66))){
var inst_55844 = (state_55919[(8)]);
var inst_55843 = (state_55919[(9)]);
var inst_55841 = (state_55919[(11)]);
var inst_55842 = (state_55919[(15)]);
var inst_55862 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_55863 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_55843];
var inst_55864 = cljs.core.PersistentHashMap.fromArrays(inst_55862,inst_55863);
var inst_55865 = com.wsscode.pathom.trace.trace(env,inst_55864);
var inst_55866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55867 = cljs.core.vals(inst_55843);
var inst_55868 = cljs.core.first(inst_55867);
var inst_55869 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_55842,inst_55868);
var inst_55870 = cljs.core.PersistentHashSet.EMPTY;
var inst_55871 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_55841);
var inst_55872 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55870,inst_55871,inst_55844);
var inst_55873 = cljs.core.PersistentVector.EMPTY;
var inst_55874 = [inst_55869,inst_55872,processing,key_iterations,inst_55873];
var inst_55875 = (new cljs.core.PersistentVector(null,5,(5),inst_55866,inst_55874,null));
var state_55919__$1 = (function (){var statearr_55993 = state_55919;
(statearr_55993[(38)] = inst_55865);

return statearr_55993;
})();
var statearr_55994_57609 = state_55919__$1;
(statearr_55994_57609[(2)] = inst_55875);

(statearr_55994_57609[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (23))){
var inst_55789 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55995_57617 = state_55919__$1;
(statearr_55995_57617[(2)] = inst_55789);

(statearr_55995_57617[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (47))){
var inst_55747 = (state_55919[(34)]);
var inst_55778 = (state_55919[(2)]);
var inst_55779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55778,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55780 = cljs.core.async.close_BANG_(inst_55779);
var inst_55781 = cljs.core.next(inst_55747);
var inst_55711 = inst_55781;
var inst_55712 = null;
var inst_55713 = (0);
var inst_55714 = (0);
var state_55919__$1 = (function (){var statearr_55996 = state_55919;
(statearr_55996[(39)] = inst_55780);

(statearr_55996[(31)] = inst_55711);

(statearr_55996[(32)] = inst_55713);

(statearr_55996[(29)] = inst_55714);

(statearr_55996[(30)] = inst_55712);

return statearr_55996;
})();
var statearr_55997_57633 = state_55919__$1;
(statearr_55997_57633[(2)] = null);

(statearr_55997_57633[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (35))){
var inst_55787 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_55998_57645 = state_55919__$1;
(statearr_55998_57645[(2)] = inst_55787);

(statearr_55998_57645[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (19))){
var inst_55713 = (state_55919[(32)]);
var inst_55714 = (state_55919[(29)]);
var inst_55716 = (inst_55714 < inst_55713);
var inst_55717 = inst_55716;
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55717)){
var statearr_55999_57661 = state_55919__$1;
(statearr_55999_57661[(1)] = (21));

} else {
var statearr_56000_57662 = state_55919__$1;
(statearr_56000_57662[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (57))){
var inst_55678 = (state_55919[(20)]);
var inst_55832 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55678);
var state_55919__$1 = state_55919;
var statearr_56001_57671 = state_55919__$1;
(statearr_56001_57671[(2)] = inst_55832);

(statearr_56001_57671[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (68))){
var inst_55899 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_56002_57674 = state_55919__$1;
(statearr_56002_57674[(2)] = inst_55899);

(statearr_56002_57674[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (11))){
var inst_55675 = (state_55919[(7)]);
var inst_55675__$1 = (state_55919[(2)]);
var state_55919__$1 = (function (){var statearr_56004 = state_55919;
(statearr_56004[(7)] = inst_55675__$1);

return statearr_56004;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_55919__$1,(12),inst_55675__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_55920 === (9))){
var inst_55666 = (state_55919[(10)]);
var inst_55670 = (state_55919[(40)]);
var inst_55672 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_55670,inst_55666);
var state_55919__$1 = state_55919;
var statearr_56005_57694 = state_55919__$1;
(statearr_56005_57694[(2)] = inst_55672);

(statearr_56005_57694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (5))){
var _ = (function (){var statearr_56006 = state_55919;
(statearr_56006[(4)] = cljs.core.rest((state_55919[(4)])));

return statearr_56006;
})();
var state_55919__$1 = state_55919;
var ex56003 = (state_55919__$1[(2)]);
var statearr_56007_57720 = state_55919__$1;
(statearr_56007_57720[(5)] = ex56003);


var statearr_56008_57724 = state_55919__$1;
(statearr_56008_57724[(1)] = (4));

(statearr_56008_57724[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (14))){
var inst_55678 = (state_55919[(20)]);
var inst_55816 = (inst_55678 == null);
var inst_55817 = cljs.core.not(inst_55816);
var state_55919__$1 = state_55919;
if(inst_55817){
var statearr_56009_57738 = state_55919__$1;
(statearr_56009_57738[(1)] = (51));

} else {
var statearr_56010_57741 = state_55919__$1;
(statearr_56010_57741[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (45))){
var inst_55757 = (state_55919[(28)]);
var inst_55775 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55757);
var state_55919__$1 = state_55919;
var statearr_56011_57748 = state_55919__$1;
(statearr_56011_57748[(2)] = inst_55775);

(statearr_56011_57748[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (53))){
var inst_55830 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55830)){
var statearr_56012_57750 = state_55919__$1;
(statearr_56012_57750[(1)] = (57));

} else {
var statearr_56013_57751 = state_55919__$1;
(statearr_56013_57751[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (26))){
var inst_55736 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
if(cljs.core.truth_(inst_55736)){
var statearr_56014_57753 = state_55919__$1;
(statearr_56014_57753[(1)] = (30));

} else {
var statearr_56015_57754 = state_55919__$1;
(statearr_56015_57754[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (16))){
var inst_55697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55698 = cljs.core.PersistentVector.EMPTY;
var inst_55699 = [res,waiting,processing,key_iterations,inst_55698];
var inst_55700 = (new cljs.core.PersistentVector(null,5,(5),inst_55697,inst_55699,null));
var state_55919__$1 = state_55919;
var statearr_56016_57755 = state_55919__$1;
(statearr_56016_57755[(2)] = inst_55700);

(statearr_56016_57755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (38))){
var inst_55784 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_56017_57756 = state_55919__$1;
(statearr_56017_57756[(2)] = inst_55784);

(statearr_56017_57756[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (30))){
var inst_55720 = (state_55919[(27)]);
var inst_55738 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_55720);
var state_55919__$1 = state_55919;
var statearr_56018_57757 = state_55919__$1;
(statearr_56018_57757[(2)] = inst_55738);

(statearr_56018_57757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (10))){
var inst_55670 = (state_55919[(40)]);
var state_55919__$1 = state_55919;
var statearr_56019_57758 = state_55919__$1;
(statearr_56019_57758[(2)] = inst_55670);

(statearr_56019_57758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (18))){
var inst_55812 = (state_55919[(2)]);
var state_55919__$1 = state_55919;
var statearr_56020_57759 = state_55919__$1;
(statearr_56020_57759[(2)] = inst_55812);

(statearr_56020_57759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (52))){
var state_55919__$1 = state_55919;
var statearr_56021_57760 = state_55919__$1;
(statearr_56021_57760[(2)] = false);

(statearr_56021_57760[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (67))){
var inst_55844 = (state_55919[(8)]);
var inst_55841 = (state_55919[(11)]);
var inst_55877 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_55878 = cljs.core.keys(inst_55877);
var inst_55879 = cljs.core.set(inst_55878);
var inst_55880 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_55879,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_55881 = cljs.core.vec(inst_55841);
var inst_55882 = com.wsscode.pathom.parser.focus_subquery(tx,inst_55881);
var inst_55883 = com.wsscode.pathom.parser.query__GT_ast(inst_55882);
var inst_55884 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_55883);
var inst_55885 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_55880,inst_55884);
var inst_55886 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_55885);
var inst_55887 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_55888 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_55886);
var inst_55889 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_55888];
var inst_55890 = cljs.core.PersistentHashMap.fromArrays(inst_55887,inst_55889);
var inst_55891 = com.wsscode.pathom.trace.trace(env,inst_55890);
var inst_55892 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55893 = cljs.core.PersistentHashSet.EMPTY;
var inst_55894 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_55841);
var inst_55895 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55893,inst_55894,inst_55844);
var inst_55896 = [res,inst_55895,processing,key_iterations,inst_55886];
var inst_55897 = (new cljs.core.PersistentVector(null,5,(5),inst_55892,inst_55896,null));
var state_55919__$1 = (function (){var statearr_56022 = state_55919;
(statearr_56022[(41)] = inst_55891);

return statearr_56022;
})();
var statearr_56023_57767 = state_55919__$1;
(statearr_56023_57767[(2)] = inst_55897);

(statearr_56023_57767[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (42))){
var state_55919__$1 = state_55919;
var statearr_56024_57771 = state_55919__$1;
(statearr_56024_57771[(2)] = true);

(statearr_56024_57771[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (37))){
var inst_55757 = (state_55919[(28)]);
var inst_55747 = (state_55919[(34)]);
var inst_55757__$1 = cljs.core.first(inst_55747);
var inst_55759 = (inst_55757__$1 == null);
var inst_55760 = cljs.core.not(inst_55759);
var state_55919__$1 = (function (){var statearr_56025 = state_55919;
(statearr_56025[(28)] = inst_55757__$1);

return statearr_56025;
})();
if(inst_55760){
var statearr_56026_57775 = state_55919__$1;
(statearr_56026_57775[(1)] = (39));

} else {
var statearr_56027_57776 = state_55919__$1;
(statearr_56027_57776[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (63))){
var inst_55840 = (state_55919[(17)]);
var inst_55850 = (state_55919[(26)]);
var inst_55852 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_55850,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_55840);
var state_55919__$1 = state_55919;
var statearr_56028_57777 = state_55919__$1;
(statearr_56028_57777[(2)] = inst_55852);

(statearr_56028_57777[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (8))){
var inst_55666 = (state_55919[(10)]);
var inst_55666__$1 = (state_55919[(2)]);
var inst_55668 = cljs.core.PersistentVector.EMPTY;
var inst_55669 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_55670 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55668,inst_55669,processing);
var state_55919__$1 = (function (){var statearr_56029 = state_55919;
(statearr_56029[(10)] = inst_55666__$1);

(statearr_56029[(40)] = inst_55670);

return statearr_56029;
})();
if(cljs.core.truth_(inst_55666__$1)){
var statearr_56030_57781 = state_55919__$1;
(statearr_56030_57781[(1)] = (9));

} else {
var statearr_56031_57782 = state_55919__$1;
(statearr_56031_57782[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55920 === (49))){
var inst_55686 = (state_55919[(35)]);
var inst_55801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55802 = cljs.core.PersistentHashSet.EMPTY;
var inst_55803 = cljs.core.PersistentHashSet.EMPTY;
var inst_55804 = cljs.core.PersistentVector.EMPTY;
var inst_55805 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_55806 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_55804,inst_55805,inst_55686);
var inst_55807 = [res,inst_55802,inst_55803,key_iterations,inst_55806];
var inst_55808 = (new cljs.core.PersistentVector(null,5,(5),inst_55801,inst_55807,null));
var state_55919__$1 = state_55919;
var statearr_56032_57786 = state_55919__$1;
(statearr_56032_57786[(2)] = inst_55808);

(statearr_56032_57786[(1)] = (50));


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
});})(c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto____0 = (function (){
var statearr_56033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56033[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto__);

(statearr_56033[(1)] = (1));

return statearr_56033;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto____1 = (function (state_55919){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_55919);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e56034){var ex__48143__auto__ = e56034;
var statearr_56035_57790 = state_55919;
(statearr_56035_57790[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_55919[(4)]))){
var statearr_56036_57791 = state_55919;
(statearr_56036_57791[(1)] = cljs.core.first((state_55919[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57795 = state_55919;
state_55919 = G__57795;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto__ = function(state_55919){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto____1.call(this,state_55919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var state__48841__auto__ = (function (){var statearr_56037 = f__48840__auto__();
(statearr_56037[(6)] = c__48839__auto__);

return statearr_56037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__55646,map__55646__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
);

return c__48839__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__56039,p__56040,tx){
var map__56041 = p__56039;
var map__56041__$1 = (((((!((map__56041 == null))))?(((((map__56041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56041):map__56041);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56041__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56041__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__56042 = p__56040;
var map__56042__$1 = (((((!((map__56042 == null))))?(((((map__56042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56042):map__56042);
var env = map__56042__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56042__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_56501){
var state_val_56502 = (state_56501[(1)]);
if((state_val_56502 === (121))){
var inst_56464 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56506_57803 = state_56501__$1;
(statearr_56506_57803[(2)] = inst_56464);

(statearr_56506_57803[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (65))){
var inst_56156 = (state_56501[(7)]);
var inst_56165 = (state_56501[(8)]);
var inst_56154 = (state_56501[(9)]);
var inst_56153 = (state_56501[(10)]);
var inst_56155 = (state_56501[(11)]);
var inst_56187 = (state_56501[(12)]);
var inst_56098 = (state_56501[(13)]);
var inst_56230 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56231 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_56187];
var inst_56232 = cljs.core.PersistentHashMap.fromArrays(inst_56230,inst_56231);
var inst_56233 = com.wsscode.pathom.trace.trace(inst_56098,inst_56232);
var inst_56234 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_56235 = com.wsscode.pathom.parser.watch_pending_key(inst_56098,inst_56187);
var inst_56236 = [inst_56187];
var inst_56237 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_56236);
var inst_56238 = [inst_56235,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_56237];
var inst_56239 = cljs.core.PersistentHashMap.fromArrays(inst_56234,inst_56238);
var inst_56240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56155,inst_56239);
var tmp56503 = inst_56156;
var tmp56504 = inst_56154;
var tmp56505 = inst_56153;
var inst_56153__$1 = tmp56505;
var inst_56154__$1 = tmp56504;
var inst_56155__$1 = inst_56240;
var inst_56156__$1 = tmp56503;
var inst_56157 = inst_56165;
var state_56501__$1 = (function (){var statearr_56507 = state_56501;
(statearr_56507[(7)] = inst_56156__$1);

(statearr_56507[(9)] = inst_56154__$1);

(statearr_56507[(14)] = inst_56157);

(statearr_56507[(10)] = inst_56153__$1);

(statearr_56507[(15)] = inst_56233);

(statearr_56507[(11)] = inst_56155__$1);

return statearr_56507;
})();
var statearr_56508_57810 = state_56501__$1;
(statearr_56508_57810[(2)] = null);

(statearr_56508_57810[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (70))){
var inst_56267 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56509_57811 = state_56501__$1;
(statearr_56509_57811[(2)] = inst_56267);

(statearr_56509_57811[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (62))){
var inst_56154 = (state_56501[(9)]);
var inst_56187 = (state_56501[(12)]);
var inst_56225 = cljs.core.contains_QMARK_(inst_56154,inst_56187);
var state_56501__$1 = state_56501;
var statearr_56510_57812 = state_56501__$1;
(statearr_56510_57812[(2)] = inst_56225);

(statearr_56510_57812[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (74))){
var inst_56103 = (state_56501[(16)]);
var inst_56156 = (state_56501[(7)]);
var inst_56154 = (state_56501[(9)]);
var inst_56153 = (state_56501[(10)]);
var inst_56155 = (state_56501[(11)]);
var inst_56098 = (state_56501[(13)]);
var inst_56092 = (state_56501[(17)]);
var inst_56280 = com.wsscode.pathom.parser.process_next_message(inst_56098,tx,inst_56154,inst_56103,inst_56155,inst_56156,inst_56092,inst_56153);
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56501__$1,(77),inst_56280);
} else {
if((state_val_56502 === (110))){
var inst_56348 = (state_56501[(18)]);
var inst_56384 = (state_56501[(19)]);
var inst_56401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_56348,inst_56384,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_56501__$1 = state_56501;
var statearr_56511_57816 = state_56501__$1;
(statearr_56511_57816[(2)] = inst_56401);

(statearr_56511_57816[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (130))){
var inst_56490 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56512_57817 = state_56501__$1;
(statearr_56512_57817[(2)] = inst_56490);

(statearr_56512_57817[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (128))){
var inst_56103 = (state_56501[(16)]);
var inst_56351 = (state_56501[(20)]);
var inst_56348 = (state_56501[(18)]);
var inst_56349 = (state_56501[(21)]);
var inst_56350 = (state_56501[(22)]);
var inst_56098 = (state_56501[(13)]);
var inst_56092 = (state_56501[(17)]);
var inst_56475 = com.wsscode.pathom.parser.process_next_message(inst_56098,tx,inst_56349,inst_56103,inst_56350,inst_56351,inst_56092,inst_56348);
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56501__$1,(131),inst_56475);
} else {
if((state_val_56502 === (7))){
var inst_56055 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_56501__$1 = state_56501;
var statearr_56517_57818 = state_56501__$1;
(statearr_56517_57818[(2)] = inst_56055);

(statearr_56517_57818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (59))){
var inst_56156 = (state_56501[(7)]);
var inst_56165 = (state_56501[(8)]);
var inst_56154 = (state_56501[(9)]);
var inst_56153 = (state_56501[(10)]);
var inst_56155 = (state_56501[(11)]);
var inst_56187 = (state_56501[(12)]);
var inst_56098 = (state_56501[(13)]);
var inst_56217 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56218 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_56187];
var inst_56219 = cljs.core.PersistentHashMap.fromArrays(inst_56217,inst_56218);
var inst_56220 = com.wsscode.pathom.trace.trace(inst_56098,inst_56219);
var tmp56513 = inst_56156;
var tmp56514 = inst_56154;
var tmp56515 = inst_56153;
var tmp56516 = inst_56155;
var inst_56153__$1 = tmp56515;
var inst_56154__$1 = tmp56514;
var inst_56155__$1 = tmp56516;
var inst_56156__$1 = tmp56513;
var inst_56157 = inst_56165;
var state_56501__$1 = (function (){var statearr_56518 = state_56501;
(statearr_56518[(7)] = inst_56156__$1);

(statearr_56518[(9)] = inst_56154__$1);

(statearr_56518[(14)] = inst_56157);

(statearr_56518[(23)] = inst_56220);

(statearr_56518[(10)] = inst_56153__$1);

(statearr_56518[(11)] = inst_56155__$1);

return statearr_56518;
})();
var statearr_56519_57825 = state_56501__$1;
(statearr_56519_57825[(2)] = null);

(statearr_56519_57825[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (86))){
var inst_56341 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56341)){
var statearr_56520_57826 = state_56501__$1;
(statearr_56520_57826[(1)] = (90));

} else {
var statearr_56521_57827 = state_56501__$1;
(statearr_56521_57827[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (20))){
var inst_56086 = (state_56501[(24)]);
var inst_56084 = (state_56501[(25)]);
var inst_56084__$1 = (state_56501[(2)]);
var inst_56085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56084__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_56086__$1 = key_watchers;
var state_56501__$1 = (function (){var statearr_56525 = state_56501;
(statearr_56525[(26)] = inst_56085);

(statearr_56525[(24)] = inst_56086__$1);

(statearr_56525[(25)] = inst_56084__$1);

return statearr_56525;
})();
if(cljs.core.truth_(inst_56086__$1)){
var statearr_56526_57831 = state_56501__$1;
(statearr_56526_57831[(1)] = (21));

} else {
var statearr_56527_57832 = state_56501__$1;
(statearr_56527_57832[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (72))){
var state_56501__$1 = state_56501;
var statearr_56528_57833 = state_56501__$1;
(statearr_56528_57833[(2)] = null);

(statearr_56528_57833[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (58))){
var inst_56156 = (state_56501[(7)]);
var inst_56165 = (state_56501[(8)]);
var inst_56154 = (state_56501[(9)]);
var inst_56155 = (state_56501[(11)]);
var inst_56209 = (state_56501[(2)]);
var tmp56522 = inst_56156;
var tmp56523 = inst_56154;
var tmp56524 = inst_56155;
var inst_56153 = inst_56209;
var inst_56154__$1 = tmp56523;
var inst_56155__$1 = tmp56524;
var inst_56156__$1 = tmp56522;
var inst_56157 = inst_56165;
var state_56501__$1 = (function (){var statearr_56529 = state_56501;
(statearr_56529[(7)] = inst_56156__$1);

(statearr_56529[(9)] = inst_56154__$1);

(statearr_56529[(14)] = inst_56157);

(statearr_56529[(10)] = inst_56153);

(statearr_56529[(11)] = inst_56155__$1);

return statearr_56529;
})();
var statearr_56530_57837 = state_56501__$1;
(statearr_56530_57837[(2)] = null);

(statearr_56530_57837[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (60))){
var inst_56223 = (state_56501[(27)]);
var inst_56098 = (state_56501[(13)]);
var inst_56223__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_56098);
var state_56501__$1 = (function (){var statearr_56531 = state_56501;
(statearr_56531[(27)] = inst_56223__$1);

return statearr_56531;
})();
if(cljs.core.truth_(inst_56223__$1)){
var statearr_56532_57841 = state_56501__$1;
(statearr_56532_57841[(1)] = (62));

} else {
var statearr_56533_57842 = state_56501__$1;
(statearr_56533_57842[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (27))){
var inst_56120 = (state_56501[(28)]);
var state_56501__$1 = state_56501;
var statearr_56534_57843 = state_56501__$1;
(statearr_56534_57843[(2)] = inst_56120);

(statearr_56534_57843[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (1))){
var state_56501__$1 = state_56501;
var statearr_56535_57844 = state_56501__$1;
(statearr_56535_57844[(2)] = null);

(statearr_56535_57844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (69))){
var state_56501__$1 = state_56501;
var statearr_56536_57845 = state_56501__$1;
(statearr_56536_57845[(1)] = (71));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (101))){
var inst_56359 = (state_56501[(29)]);
var inst_56378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56359);
var state_56501__$1 = state_56501;
var statearr_56538_57849 = state_56501__$1;
(statearr_56538_57849[(2)] = inst_56378);

(statearr_56538_57849[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (24))){
var inst_56120 = (state_56501[(28)]);
var inst_56062 = (state_56501[(30)]);
var inst_56098 = (state_56501[(13)]);
var inst_56106 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_56107 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_56062];
var inst_56108 = cljs.core.PersistentHashMap.fromArrays(inst_56106,inst_56107);
var inst_56109 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_56098,inst_56108);
var inst_56119 = cljs.core.PersistentHashMap.EMPTY;
var inst_56120__$1 = waiting;
var state_56501__$1 = (function (){var statearr_56539 = state_56501;
(statearr_56539[(28)] = inst_56120__$1);

(statearr_56539[(31)] = inst_56119);

(statearr_56539[(32)] = inst_56109);

return statearr_56539;
})();
if(cljs.core.truth_(inst_56120__$1)){
var statearr_56540_57853 = state_56501__$1;
(statearr_56540_57853[(1)] = (27));

} else {
var statearr_56541_57854 = state_56501__$1;
(statearr_56541_57854[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (102))){
var inst_56359 = (state_56501[(29)]);
var state_56501__$1 = state_56501;
var statearr_56542_57855 = state_56501__$1;
(statearr_56542_57855[(2)] = inst_56359);

(statearr_56542_57855[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (55))){
var inst_56273 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56543_57859 = state_56501__$1;
(statearr_56543_57859[(2)] = inst_56273);

(statearr_56543_57859[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (85))){
var state_56501__$1 = state_56501;
var statearr_56544_57860 = state_56501__$1;
(statearr_56544_57860[(2)] = false);

(statearr_56544_57860[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (39))){
var inst_56157 = (state_56501[(14)]);
var inst_56164 = (state_56501[(33)]);
var inst_56163 = cljs.core.seq(inst_56157);
var inst_56164__$1 = cljs.core.first(inst_56163);
var inst_56165 = cljs.core.next(inst_56163);
var inst_56167 = (inst_56164__$1 == null);
var inst_56168 = cljs.core.not(inst_56167);
var state_56501__$1 = (function (){var statearr_56545 = state_56501;
(statearr_56545[(8)] = inst_56165);

(statearr_56545[(33)] = inst_56164__$1);

return statearr_56545;
})();
if(inst_56168){
var statearr_56546_57862 = state_56501__$1;
(statearr_56546_57862[(1)] = (41));

} else {
var statearr_56547_57864 = state_56501__$1;
(statearr_56547_57864[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (88))){
var state_56501__$1 = state_56501;
var statearr_56548_57866 = state_56501__$1;
(statearr_56548_57866[(2)] = false);

(statearr_56548_57866[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (46))){
var inst_56178 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56549_57868 = state_56501__$1;
(statearr_56549_57868[(2)] = inst_56178);

(statearr_56549_57868[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (4))){
var inst_56045 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56550_57869 = state_56501__$1;
(statearr_56550_57869[(2)] = inst_56045);

(statearr_56550_57869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (77))){
var inst_56282 = (state_56501[(2)]);
var inst_56283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56282,(0),null);
var inst_56284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56282,(1),null);
var inst_56285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56282,(2),null);
var inst_56286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56282,(3),null);
var inst_56287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56282,(4),null);
var inst_56153 = inst_56283;
var inst_56154 = inst_56284;
var inst_56155 = inst_56285;
var inst_56156 = inst_56286;
var inst_56157 = inst_56287;
var state_56501__$1 = (function (){var statearr_56554 = state_56501;
(statearr_56554[(7)] = inst_56156);

(statearr_56554[(9)] = inst_56154);

(statearr_56554[(14)] = inst_56157);

(statearr_56554[(10)] = inst_56153);

(statearr_56554[(11)] = inst_56155);

return statearr_56554;
})();
var statearr_56555_57873 = state_56501__$1;
(statearr_56555_57873[(2)] = null);

(statearr_56555_57873[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (106))){
var inst_56492 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56556_57876 = state_56501__$1;
(statearr_56556_57876[(2)] = inst_56492);

(statearr_56556_57876[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (119))){
var inst_56382 = (state_56501[(34)]);
var inst_56351 = (state_56501[(20)]);
var inst_56348 = (state_56501[(18)]);
var inst_56349 = (state_56501[(21)]);
var inst_56360 = (state_56501[(35)]);
var inst_56350 = (state_56501[(22)]);
var inst_56098 = (state_56501[(13)]);
var inst_56425 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56426 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_56382];
var inst_56427 = cljs.core.PersistentHashMap.fromArrays(inst_56425,inst_56426);
var inst_56428 = com.wsscode.pathom.trace.trace(inst_56098,inst_56427);
var inst_56429 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_56430 = com.wsscode.pathom.parser.watch_pending_key(inst_56098,inst_56382);
var inst_56431 = [inst_56382];
var inst_56432 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_56431);
var inst_56433 = [inst_56430,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_56432];
var inst_56434 = cljs.core.PersistentHashMap.fromArrays(inst_56429,inst_56433);
var inst_56435 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56350,inst_56434);
var tmp56551 = inst_56351;
var tmp56552 = inst_56348;
var tmp56553 = inst_56349;
var inst_56348__$1 = tmp56552;
var inst_56349__$1 = tmp56553;
var inst_56350__$1 = inst_56435;
var inst_56351__$1 = tmp56551;
var inst_56352 = inst_56360;
var state_56501__$1 = (function (){var statearr_56557 = state_56501;
(statearr_56557[(20)] = inst_56351__$1);

(statearr_56557[(18)] = inst_56348__$1);

(statearr_56557[(36)] = inst_56352);

(statearr_56557[(21)] = inst_56349__$1);

(statearr_56557[(37)] = inst_56428);

(statearr_56557[(22)] = inst_56350__$1);

return statearr_56557;
})();
var statearr_56558_57881 = state_56501__$1;
(statearr_56558_57881[(2)] = null);

(statearr_56558_57881[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (95))){
var inst_56359 = (state_56501[(29)]);
var inst_56365 = inst_56359.cljs$lang$protocol_mask$partition0$;
var inst_56366 = (inst_56365 & (64));
var inst_56367 = inst_56359.cljs$core$ISeq$;
var inst_56368 = (cljs.core.PROTOCOL_SENTINEL === inst_56367);
var inst_56369 = ((inst_56366) || (inst_56368));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56369)){
var statearr_56559_57886 = state_56501__$1;
(statearr_56559_57886[(1)] = (98));

} else {
var statearr_56560_57888 = state_56501__$1;
(statearr_56560_57888[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (54))){
var inst_56153 = (state_56501[(10)]);
var inst_56189 = (state_56501[(38)]);
var inst_56212 = cljs.core.contains_QMARK_(inst_56153,inst_56189);
var inst_56213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56153,inst_56189);
var inst_56214 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_56213);
var inst_56215 = ((inst_56212) && (inst_56214));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56215)){
var statearr_56561_57911 = state_56501__$1;
(statearr_56561_57911[(1)] = (59));

} else {
var statearr_56562_57915 = state_56501__$1;
(statearr_56562_57915[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (92))){
var inst_56314 = (state_56501[(39)]);
var inst_56321 = (state_56501[(40)]);
var inst_56085 = (state_56501[(26)]);
var inst_56322 = (state_56501[(41)]);
var inst_56320 = (state_56501[(42)]);
var inst_56346 = (state_56501[(2)]);
var inst_56347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56346,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_56348 = inst_56314;
var inst_56349 = inst_56320;
var inst_56350 = inst_56321;
var inst_56351 = inst_56322;
var inst_56352 = inst_56085;
var state_56501__$1 = (function (){var statearr_56563 = state_56501;
(statearr_56563[(20)] = inst_56351);

(statearr_56563[(18)] = inst_56348);

(statearr_56563[(36)] = inst_56352);

(statearr_56563[(21)] = inst_56349);

(statearr_56563[(43)] = inst_56347);

(statearr_56563[(22)] = inst_56350);

return statearr_56563;
})();
var statearr_56564_57933 = state_56501__$1;
(statearr_56564_57933[(2)] = null);

(statearr_56564_57933[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (104))){
var inst_56382 = (state_56501[(34)]);
var inst_56351 = (state_56501[(20)]);
var inst_56381 = (state_56501[(44)]);
var inst_56098 = (state_56501[(13)]);
var inst_56384 = com.wsscode.pathom.parser.ast__GT_out_key(inst_56381);
var inst_56385 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56386 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_56382];
var inst_56387 = cljs.core.PersistentHashMap.fromArrays(inst_56385,inst_56386);
var inst_56388 = com.wsscode.pathom.trace.trace(inst_56098,inst_56387);
var inst_56389 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_56351,inst_56382,(0));
var inst_56390 = (max_key_iterations - (1));
var inst_56391 = (inst_56389 > inst_56390);
var state_56501__$1 = (function (){var statearr_56565 = state_56501;
(statearr_56565[(45)] = inst_56388);

(statearr_56565[(19)] = inst_56384);

return statearr_56565;
})();
if(cljs.core.truth_(inst_56391)){
var statearr_56566_57936 = state_56501__$1;
(statearr_56566_57936[(1)] = (107));

} else {
var statearr_56567_57938 = state_56501__$1;
(statearr_56567_57938[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (15))){
var state_56501__$1 = state_56501;
var statearr_56568_57940 = state_56501__$1;
(statearr_56568_57940[(2)] = true);

(statearr_56568_57940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (48))){
var inst_56164 = (state_56501[(33)]);
var state_56501__$1 = state_56501;
var statearr_56569_57942 = state_56501__$1;
(statearr_56569_57942[(2)] = inst_56164);

(statearr_56569_57942[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (50))){
var inst_56156 = (state_56501[(7)]);
var inst_56186 = (state_56501[(46)]);
var inst_56187 = (state_56501[(12)]);
var inst_56098 = (state_56501[(13)]);
var inst_56189 = com.wsscode.pathom.parser.ast__GT_out_key(inst_56186);
var inst_56190 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56191 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_56187];
var inst_56192 = cljs.core.PersistentHashMap.fromArrays(inst_56190,inst_56191);
var inst_56193 = com.wsscode.pathom.trace.trace(inst_56098,inst_56192);
var inst_56194 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_56156,inst_56187,(0));
var inst_56195 = (max_key_iterations - (1));
var inst_56196 = (inst_56194 > inst_56195);
var state_56501__$1 = (function (){var statearr_56570 = state_56501;
(statearr_56570[(47)] = inst_56193);

(statearr_56570[(38)] = inst_56189);

return statearr_56570;
})();
if(cljs.core.truth_(inst_56196)){
var statearr_56571_57946 = state_56501__$1;
(statearr_56571_57946[(1)] = (53));

} else {
var statearr_56572_57948 = state_56501__$1;
(statearr_56572_57948[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (116))){
var inst_56382 = (state_56501[(34)]);
var inst_56349 = (state_56501[(21)]);
var inst_56420 = cljs.core.contains_QMARK_(inst_56349,inst_56382);
var state_56501__$1 = state_56501;
var statearr_56573_57950 = state_56501__$1;
(statearr_56573_57950[(2)] = inst_56420);

(statearr_56573_57950[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (75))){
var state_56501__$1 = state_56501;
var statearr_56574_57951 = state_56501__$1;
(statearr_56574_57951[(1)] = (78));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (99))){
var state_56501__$1 = state_56501;
var statearr_56576_57953 = state_56501__$1;
(statearr_56576_57953[(2)] = false);

(statearr_56576_57953[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (21))){
var inst_56086 = (state_56501[(24)]);
var state_56501__$1 = state_56501;
var statearr_56581_57955 = state_56501__$1;
(statearr_56581_57955[(2)] = inst_56086);

(statearr_56581_57955[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (31))){
var state_56501__$1 = state_56501;
var statearr_56582_57957 = state_56501__$1;
(statearr_56582_57957[(2)] = false);

(statearr_56582_57957[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (113))){
var inst_56382 = (state_56501[(34)]);
var inst_56351 = (state_56501[(20)]);
var inst_56348 = (state_56501[(18)]);
var inst_56349 = (state_56501[(21)]);
var inst_56360 = (state_56501[(35)]);
var inst_56350 = (state_56501[(22)]);
var inst_56098 = (state_56501[(13)]);
var inst_56412 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56413 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_56382];
var inst_56414 = cljs.core.PersistentHashMap.fromArrays(inst_56412,inst_56413);
var inst_56415 = com.wsscode.pathom.trace.trace(inst_56098,inst_56414);
var tmp56577 = inst_56351;
var tmp56578 = inst_56348;
var tmp56579 = inst_56349;
var tmp56580 = inst_56350;
var inst_56348__$1 = tmp56578;
var inst_56349__$1 = tmp56579;
var inst_56350__$1 = tmp56580;
var inst_56351__$1 = tmp56577;
var inst_56352 = inst_56360;
var state_56501__$1 = (function (){var statearr_56583 = state_56501;
(statearr_56583[(20)] = inst_56351__$1);

(statearr_56583[(18)] = inst_56348__$1);

(statearr_56583[(36)] = inst_56352);

(statearr_56583[(48)] = inst_56415);

(statearr_56583[(21)] = inst_56349__$1);

(statearr_56583[(22)] = inst_56350__$1);

return statearr_56583;
})();
var statearr_56584_57961 = state_56501__$1;
(statearr_56584_57961[(2)] = null);

(statearr_56584_57961[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (32))){
var inst_56146 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56146)){
var statearr_56585_57964 = state_56501__$1;
(statearr_56585_57964[(1)] = (36));

} else {
var statearr_56586_57965 = state_56501__$1;
(statearr_56586_57965[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (40))){
var inst_56062 = (state_56501[(30)]);
var inst_56109 = (state_56501[(32)]);
var inst_56098 = (state_56501[(13)]);
var inst_56299 = (state_56501[(2)]);
var inst_56300 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_56301 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_56062];
var inst_56302 = cljs.core.PersistentHashMap.fromArrays(inst_56300,inst_56301);
var inst_56303 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_56098,inst_56109,inst_56302);
var state_56501__$1 = (function (){var statearr_56587 = state_56501;
(statearr_56587[(49)] = inst_56303);

return statearr_56587;
})();
var statearr_56588_57969 = state_56501__$1;
(statearr_56588_57969[(2)] = inst_56299);

(statearr_56588_57969[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (129))){
var state_56501__$1 = state_56501;
var statearr_56589_57972 = state_56501__$1;
(statearr_56589_57972[(1)] = (132));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (91))){
var inst_56324 = (state_56501[(50)]);
var state_56501__$1 = state_56501;
var statearr_56591_57973 = state_56501__$1;
(statearr_56591_57973[(2)] = inst_56324);

(statearr_56591_57973[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (117))){
var inst_56418 = (state_56501[(51)]);
var state_56501__$1 = state_56501;
var statearr_56592_57975 = state_56501__$1;
(statearr_56592_57975[(2)] = inst_56418);

(statearr_56592_57975[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (108))){
var inst_56348 = (state_56501[(18)]);
var inst_56384 = (state_56501[(19)]);
var inst_56407 = cljs.core.contains_QMARK_(inst_56348,inst_56384);
var inst_56408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56348,inst_56384);
var inst_56409 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_56408);
var inst_56410 = ((inst_56407) && (inst_56409));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56410)){
var statearr_56593_57977 = state_56501__$1;
(statearr_56593_57977[(1)] = (113));

} else {
var statearr_56594_57978 = state_56501__$1;
(statearr_56594_57978[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (56))){
var inst_56153 = (state_56501[(10)]);
var inst_56189 = (state_56501[(38)]);
var inst_56206 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_56153,inst_56189,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_56501__$1 = state_56501;
var statearr_56595_57979 = state_56501__$1;
(statearr_56595_57979[(2)] = inst_56206);

(statearr_56595_57979[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (33))){
var state_56501__$1 = state_56501;
var statearr_56596_57981 = state_56501__$1;
(statearr_56596_57981[(2)] = true);

(statearr_56596_57981[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (13))){
var state_56501__$1 = state_56501;
var statearr_56597_57983 = state_56501__$1;
(statearr_56597_57983[(2)] = false);

(statearr_56597_57983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (22))){
var inst_56089 = cljs.core.PersistentHashMap.EMPTY;
var inst_56090 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56089);
var state_56501__$1 = state_56501;
var statearr_56598_57984 = state_56501__$1;
(statearr_56598_57984[(2)] = inst_56090);

(statearr_56598_57984[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (90))){
var inst_56324 = (state_56501[(50)]);
var inst_56343 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56324);
var state_56501__$1 = state_56501;
var statearr_56599_57985 = state_56501__$1;
(statearr_56599_57985[(2)] = inst_56343);

(statearr_56599_57985[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (109))){
var inst_56468 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56600_57986 = state_56501__$1;
(statearr_56600_57986[(2)] = inst_56468);

(statearr_56600_57986[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (36))){
var inst_56129 = (state_56501[(52)]);
var inst_56148 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56129);
var state_56501__$1 = state_56501;
var statearr_56601_57991 = state_56501__$1;
(statearr_56601_57991[(2)] = inst_56148);

(statearr_56601_57991[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (41))){
var inst_56164 = (state_56501[(33)]);
var inst_56170 = inst_56164.cljs$lang$protocol_mask$partition0$;
var inst_56171 = (inst_56170 & (64));
var inst_56172 = inst_56164.cljs$core$ISeq$;
var inst_56173 = (cljs.core.PROTOCOL_SENTINEL === inst_56172);
var inst_56174 = ((inst_56171) || (inst_56173));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56174)){
var statearr_56602_57998 = state_56501__$1;
(statearr_56602_57998[(1)] = (44));

} else {
var statearr_56603_58000 = state_56501__$1;
(statearr_56603_58000[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (118))){
var inst_56423 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56423)){
var statearr_56604_58016 = state_56501__$1;
(statearr_56604_58016[(1)] = (119));

} else {
var statearr_56605_58021 = state_56501__$1;
(statearr_56605_58021[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (89))){
var inst_56338 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56606_58033 = state_56501__$1;
(statearr_56606_58033[(2)] = inst_56338);

(statearr_56606_58033[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (100))){
var inst_56373 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56611_58040 = state_56501__$1;
(statearr_56611_58040[(2)] = inst_56373);

(statearr_56611_58040[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (131))){
var inst_56477 = (state_56501[(2)]);
var inst_56478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56477,(0),null);
var inst_56479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56477,(1),null);
var inst_56480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56477,(2),null);
var inst_56481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56477,(3),null);
var inst_56482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56477,(4),null);
var inst_56348 = inst_56478;
var inst_56349 = inst_56479;
var inst_56350 = inst_56480;
var inst_56351 = inst_56481;
var inst_56352 = inst_56482;
var state_56501__$1 = (function (){var statearr_56612 = state_56501;
(statearr_56612[(20)] = inst_56351);

(statearr_56612[(18)] = inst_56348);

(statearr_56612[(36)] = inst_56352);

(statearr_56612[(21)] = inst_56349);

(statearr_56612[(22)] = inst_56350);

return statearr_56612;
})();
var statearr_56613_58042 = state_56501__$1;
(statearr_56613_58042[(2)] = null);

(statearr_56613_58042[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (122))){
var inst_56382 = (state_56501[(34)]);
var inst_56351 = (state_56501[(20)]);
var inst_56348 = (state_56501[(18)]);
var inst_56349 = (state_56501[(21)]);
var inst_56360 = (state_56501[(35)]);
var inst_56350 = (state_56501[(22)]);
var inst_56098 = (state_56501[(13)]);
var inst_56440 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56441 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_56382];
var inst_56442 = cljs.core.PersistentHashMap.fromArrays(inst_56440,inst_56441);
var inst_56443 = com.wsscode.pathom.trace.trace(inst_56098,inst_56442);
var tmp56607 = inst_56351;
var tmp56608 = inst_56348;
var tmp56609 = inst_56349;
var tmp56610 = inst_56350;
var inst_56348__$1 = tmp56608;
var inst_56349__$1 = tmp56609;
var inst_56350__$1 = tmp56610;
var inst_56351__$1 = tmp56607;
var inst_56352 = inst_56360;
var state_56501__$1 = (function (){var statearr_56614 = state_56501;
(statearr_56614[(20)] = inst_56351__$1);

(statearr_56614[(18)] = inst_56348__$1);

(statearr_56614[(53)] = inst_56443);

(statearr_56614[(36)] = inst_56352);

(statearr_56614[(21)] = inst_56349__$1);

(statearr_56614[(22)] = inst_56350__$1);

return statearr_56614;
})();
var statearr_56615_58049 = state_56501__$1;
(statearr_56615_58049[(2)] = null);

(statearr_56615_58049[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (43))){
var inst_56181 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56181)){
var statearr_56616_58050 = state_56501__$1;
(statearr_56616_58050[(1)] = (47));

} else {
var statearr_56617_58051 = state_56501__$1;
(statearr_56617_58051[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (61))){
var inst_56271 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56618_58053 = state_56501__$1;
(statearr_56618_58053[(2)] = inst_56271);

(statearr_56618_58053[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (29))){
var inst_56129 = (state_56501[(52)]);
var inst_56085 = (state_56501[(26)]);
var inst_56125 = (state_56501[(2)]);
var inst_56126 = cljs.core.PersistentHashSet.EMPTY;
var inst_56127 = cljs.core.PersistentHashMap.EMPTY;
var inst_56128 = cljs.core.seq(inst_56085);
var inst_56129__$1 = cljs.core.first(inst_56128);
var inst_56130 = cljs.core.next(inst_56128);
var inst_56132 = (inst_56129__$1 == null);
var inst_56133 = cljs.core.not(inst_56132);
var state_56501__$1 = (function (){var statearr_56619 = state_56501;
(statearr_56619[(52)] = inst_56129__$1);

(statearr_56619[(54)] = inst_56126);

(statearr_56619[(55)] = inst_56127);

(statearr_56619[(56)] = inst_56130);

(statearr_56619[(57)] = inst_56125);

return statearr_56619;
})();
if(inst_56133){
var statearr_56620_58057 = state_56501__$1;
(statearr_56620_58057[(1)] = (30));

} else {
var statearr_56621_58059 = state_56501__$1;
(statearr_56621_58059[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (44))){
var state_56501__$1 = state_56501;
var statearr_56622_58060 = state_56501__$1;
(statearr_56622_58060[(2)] = true);

(statearr_56622_58060[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (93))){
var inst_56352 = (state_56501[(36)]);
var inst_56359 = (state_56501[(29)]);
var inst_56358 = cljs.core.seq(inst_56352);
var inst_56359__$1 = cljs.core.first(inst_56358);
var inst_56360 = cljs.core.next(inst_56358);
var inst_56362 = (inst_56359__$1 == null);
var inst_56363 = cljs.core.not(inst_56362);
var state_56501__$1 = (function (){var statearr_56623 = state_56501;
(statearr_56623[(29)] = inst_56359__$1);

(statearr_56623[(35)] = inst_56360);

return statearr_56623;
})();
if(inst_56363){
var statearr_56624_58063 = state_56501__$1;
(statearr_56624_58063[(1)] = (95));

} else {
var statearr_56625_58064 = state_56501__$1;
(statearr_56625_58064[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (6))){
var inst_56052 = (state_56501[(58)]);
var state_56501__$1 = state_56501;
var statearr_56626_58066 = state_56501__$1;
(statearr_56626_58066[(2)] = inst_56052);

(statearr_56626_58066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (111))){
var inst_56348 = (state_56501[(18)]);
var state_56501__$1 = state_56501;
var statearr_56627_58067 = state_56501__$1;
(statearr_56627_58067[(2)] = inst_56348);

(statearr_56627_58067[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (28))){
var inst_56123 = cljs.core.PersistentHashSet.EMPTY;
var state_56501__$1 = state_56501;
var statearr_56628_58068 = state_56501__$1;
(statearr_56628_58068[(2)] = inst_56123);

(statearr_56628_58068[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (134))){
var inst_56488 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56629_58069 = state_56501__$1;
(statearr_56629_58069[(2)] = inst_56488);

(statearr_56629_58069[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (64))){
var inst_56228 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56228)){
var statearr_56630_58071 = state_56501__$1;
(statearr_56630_58071[(1)] = (65));

} else {
var statearr_56631_58073 = state_56501__$1;
(statearr_56631_58073[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (103))){
var inst_56381 = (state_56501[(44)]);
var inst_56381__$1 = (state_56501[(2)]);
var inst_56382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56381__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_56501__$1 = (function (){var statearr_56632 = state_56501;
(statearr_56632[(34)] = inst_56382);

(statearr_56632[(44)] = inst_56381__$1);

return statearr_56632;
})();
if(cljs.core.truth_(inst_56381__$1)){
var statearr_56633_58076 = state_56501__$1;
(statearr_56633_58076[(1)] = (104));

} else {
var statearr_56634_58077 = state_56501__$1;
(statearr_56634_58077[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (51))){
var inst_56155 = (state_56501[(11)]);
var inst_56275 = cljs.core.seq(inst_56155);
var state_56501__$1 = state_56501;
if(inst_56275){
var statearr_56635_58078 = state_56501__$1;
(statearr_56635_58078[(1)] = (74));

} else {
var statearr_56636_58079 = state_56501__$1;
(statearr_56636_58079[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (25))){
var inst_56315 = (state_56501[(59)]);
var inst_56314 = cljs.core.PersistentHashMap.EMPTY;
var inst_56315__$1 = waiting;
var state_56501__$1 = (function (){var statearr_56637 = state_56501;
(statearr_56637[(39)] = inst_56314);

(statearr_56637[(59)] = inst_56315__$1);

return statearr_56637;
})();
if(cljs.core.truth_(inst_56315__$1)){
var statearr_56638_58081 = state_56501__$1;
(statearr_56638_58081[(1)] = (81));

} else {
var statearr_56639_58083 = state_56501__$1;
(statearr_56639_58083[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (34))){
var state_56501__$1 = state_56501;
var statearr_56640_58085 = state_56501__$1;
(statearr_56640_58085[(2)] = false);

(statearr_56640_58085[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (125))){
var inst_56351 = (state_56501[(20)]);
var inst_56348 = (state_56501[(18)]);
var inst_56349 = (state_56501[(21)]);
var inst_56360 = (state_56501[(35)]);
var inst_56384 = (state_56501[(19)]);
var inst_56381 = (state_56501[(44)]);
var inst_56350 = (state_56501[(22)]);
var inst_56098 = (state_56501[(13)]);
var inst_56092 = (state_56501[(17)]);
var inst_56450 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_56351,inst_56384,com.wsscode.pathom.parser.zero_inc);
var inst_56451 = com.wsscode.pathom.parser.parallel_process_value(inst_56098,tx,inst_56381,inst_56092,inst_56348,inst_56349,inst_56350,read,mutate,inst_56450,inst_56360);
var inst_56452 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56451,(0),null);
var inst_56453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56451,(1),null);
var inst_56454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56451,(2),null);
var inst_56455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56451,(3),null);
var inst_56456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56451,(4),null);
var inst_56348__$1 = inst_56452;
var inst_56349__$1 = inst_56453;
var inst_56350__$1 = inst_56454;
var inst_56351__$1 = inst_56455;
var inst_56352 = inst_56456;
var state_56501__$1 = (function (){var statearr_56641 = state_56501;
(statearr_56641[(20)] = inst_56351__$1);

(statearr_56641[(18)] = inst_56348__$1);

(statearr_56641[(36)] = inst_56352);

(statearr_56641[(21)] = inst_56349__$1);

(statearr_56641[(22)] = inst_56350__$1);

return statearr_56641;
})();
var statearr_56642_58089 = state_56501__$1;
(statearr_56642_58089[(2)] = null);

(statearr_56642_58089[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (17))){
var inst_56076 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56643_58090 = state_56501__$1;
(statearr_56643_58090[(2)] = inst_56076);

(statearr_56643_58090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (3))){
var inst_56499 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56501__$1,inst_56499);
} else {
if((state_val_56502 === (12))){
var inst_56063 = (state_56501[(60)]);
var inst_56068 = inst_56063.cljs$lang$protocol_mask$partition0$;
var inst_56069 = (inst_56068 & (64));
var inst_56070 = inst_56063.cljs$core$ISeq$;
var inst_56071 = (cljs.core.PROTOCOL_SENTINEL === inst_56070);
var inst_56072 = ((inst_56069) || (inst_56071));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56072)){
var statearr_56644_58094 = state_56501__$1;
(statearr_56644_58094[(1)] = (15));

} else {
var statearr_56645_58095 = state_56501__$1;
(statearr_56645_58095[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (2))){
var inst_56052 = (state_56501[(58)]);
var _ = (function (){var statearr_56646 = state_56501;
(statearr_56646[(4)] = cljs.core.cons((5),(state_56501[(4)])));

return statearr_56646;
})();
var inst_56052__$1 = key_process_timeout_step;
var state_56501__$1 = (function (){var statearr_56647 = state_56501;
(statearr_56647[(58)] = inst_56052__$1);

return statearr_56647;
})();
if(cljs.core.truth_(inst_56052__$1)){
var statearr_56648_58099 = state_56501__$1;
(statearr_56648_58099[(1)] = (6));

} else {
var statearr_56649_58101 = state_56501__$1;
(statearr_56649_58101[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (66))){
var inst_56154 = (state_56501[(9)]);
var inst_56187 = (state_56501[(12)]);
var inst_56243 = cljs.core.contains_QMARK_(inst_56154,inst_56187);
var state_56501__$1 = state_56501;
if(inst_56243){
var statearr_56650_58103 = state_56501__$1;
(statearr_56650_58103[(1)] = (68));

} else {
var statearr_56651_58104 = state_56501__$1;
(statearr_56651_58104[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (107))){
var inst_56382 = (state_56501[(34)]);
var inst_56348 = (state_56501[(18)]);
var inst_56384 = (state_56501[(19)]);
var inst_56098 = (state_56501[(13)]);
var inst_56393 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_56394 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_56382,max_key_iterations];
var inst_56395 = cljs.core.PersistentHashMap.fromArrays(inst_56393,inst_56394);
var inst_56396 = com.wsscode.pathom.trace.trace(inst_56098,inst_56395);
var inst_56398 = cljs.core.contains_QMARK_(inst_56348,inst_56384);
var inst_56399 = (!(inst_56398));
var state_56501__$1 = (function (){var statearr_56652 = state_56501;
(statearr_56652[(61)] = inst_56396);

return statearr_56652;
})();
if(inst_56399){
var statearr_56653_58108 = state_56501__$1;
(statearr_56653_58108[(1)] = (110));

} else {
var statearr_56654_58110 = state_56501__$1;
(statearr_56654_58110[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (23))){
var inst_56085 = (state_56501[(26)]);
var inst_56062 = (state_56501[(30)]);
var inst_56084 = (state_56501[(25)]);
var inst_56057 = (state_56501[(62)]);
var inst_56098 = (state_56501[(13)]);
var inst_56092 = (state_56501[(17)]);
var inst_56092__$1 = (state_56501[(2)]);
var inst_56093 = cljs.core.deref(entity_path_cache);
var inst_56094 = cljs.core.PersistentHashMap.EMPTY;
var inst_56095 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_56093,path,inst_56094);
var inst_56096 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_56062], 0));
var inst_56097 = (function (){var key_process_timeout_step__$1 = inst_56057;
var key_process_timeout__$1 = inst_56062;
var map__56051 = inst_56084;
var children = inst_56085;
var key_watchers__$1 = inst_56092__$1;
var path_entity = inst_56095;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__56051,children,key_watchers__$1,path_entity,inst_56085,inst_56062,inst_56084,inst_56057,inst_56098,inst_56092,inst_56092__$1,inst_56093,inst_56094,inst_56095,inst_56096,state_val_56502,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__56051,children,key_watchers__$1,path_entity,inst_56085,inst_56062,inst_56084,inst_56057,inst_56098,inst_56092,inst_56092__$1,inst_56093,inst_56094,inst_56095,inst_56096,state_val_56502,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__56038_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__56038_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__56051,children,key_watchers__$1,path_entity,inst_56085,inst_56062,inst_56084,inst_56057,inst_56098,inst_56092,inst_56092__$1,inst_56093,inst_56094,inst_56095,inst_56096,state_val_56502,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__56051,children,key_watchers__$1,path_entity,inst_56085,inst_56062,inst_56084,inst_56057,inst_56098,inst_56092,inst_56092__$1,inst_56093,inst_56094,inst_56095,inst_56096,state_val_56502,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_56098__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_56096,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_56097);
var inst_56099 = cljs.core.PersistentHashMap.EMPTY;
var inst_56101 = (function (){var key_process_timeout_step__$1 = inst_56057;
var key_process_timeout__$1 = inst_56062;
var map__56051 = inst_56084;
var children = inst_56085;
var key_watchers__$1 = inst_56092__$1;
var path_entity = inst_56095;
var env__$1 = inst_56098__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__56051,children,key_watchers__$1,path_entity,env__$1,inst_56085,inst_56062,inst_56084,inst_56057,inst_56098,inst_56092,inst_56092__$1,inst_56093,inst_56094,inst_56095,inst_56096,inst_56097,inst_56098__$1,inst_56099,state_val_56502,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p__56100){
var map__56655 = p__56100;
var map__56655__$1 = (((((!((map__56655 == null))))?(((((map__56655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56655):map__56655);
var ast = map__56655__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56655__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__56051,children,key_watchers__$1,path_entity,env__$1,inst_56085,inst_56062,inst_56084,inst_56057,inst_56098,inst_56092,inst_56092__$1,inst_56093,inst_56094,inst_56095,inst_56096,inst_56097,inst_56098__$1,inst_56099,state_val_56502,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_56102 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_56101);
var inst_56103 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_56099,inst_56102,inst_56085);
var inst_56104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56098__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_56501__$1 = (function (){var statearr_56657 = state_56501;
(statearr_56657[(16)] = inst_56103);

(statearr_56657[(13)] = inst_56098__$1);

(statearr_56657[(17)] = inst_56092__$1);

return statearr_56657;
})();
if(cljs.core.truth_(inst_56104)){
var statearr_56658_58118 = state_56501__$1;
(statearr_56658_58118[(1)] = (24));

} else {
var statearr_56659_58119 = state_56501__$1;
(statearr_56659_58119[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (47))){
var inst_56164 = (state_56501[(33)]);
var inst_56183 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56164);
var state_56501__$1 = state_56501;
var statearr_56660_58120 = state_56501__$1;
(statearr_56660_58120[(2)] = inst_56183);

(statearr_56660_58120[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (35))){
var inst_56143 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56661_58124 = state_56501__$1;
(statearr_56661_58124[(2)] = inst_56143);

(statearr_56661_58124[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (127))){
var inst_56460 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56662_58125 = state_56501__$1;
(statearr_56662_58125[(2)] = inst_56460);

(statearr_56662_58125[(1)] = (124));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (82))){
var inst_56318 = cljs.core.PersistentHashSet.EMPTY;
var state_56501__$1 = state_56501;
var statearr_56663_58126 = state_56501__$1;
(statearr_56663_58126[(2)] = inst_56318);

(statearr_56663_58126[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (76))){
var inst_56295 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56664_58127 = state_56501__$1;
(statearr_56664_58127[(2)] = inst_56295);

(statearr_56664_58127[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (97))){
var inst_56376 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56376)){
var statearr_56665_58128 = state_56501__$1;
(statearr_56665_58128[(1)] = (101));

} else {
var statearr_56666_58129 = state_56501__$1;
(statearr_56666_58129[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (19))){
var inst_56063 = (state_56501[(60)]);
var state_56501__$1 = state_56501;
var statearr_56671_58130 = state_56501__$1;
(statearr_56671_58130[(2)] = inst_56063);

(statearr_56671_58130[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (57))){
var inst_56153 = (state_56501[(10)]);
var state_56501__$1 = state_56501;
var statearr_56672_58131 = state_56501__$1;
(statearr_56672_58131[(2)] = inst_56153);

(statearr_56672_58131[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (68))){
var inst_56156 = (state_56501[(7)]);
var inst_56165 = (state_56501[(8)]);
var inst_56154 = (state_56501[(9)]);
var inst_56153 = (state_56501[(10)]);
var inst_56155 = (state_56501[(11)]);
var inst_56187 = (state_56501[(12)]);
var inst_56098 = (state_56501[(13)]);
var inst_56245 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_56246 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_56187];
var inst_56247 = cljs.core.PersistentHashMap.fromArrays(inst_56245,inst_56246);
var inst_56248 = com.wsscode.pathom.trace.trace(inst_56098,inst_56247);
var tmp56667 = inst_56156;
var tmp56668 = inst_56154;
var tmp56669 = inst_56153;
var tmp56670 = inst_56155;
var inst_56153__$1 = tmp56669;
var inst_56154__$1 = tmp56668;
var inst_56155__$1 = tmp56670;
var inst_56156__$1 = tmp56667;
var inst_56157 = inst_56165;
var state_56501__$1 = (function (){var statearr_56673 = state_56501;
(statearr_56673[(7)] = inst_56156__$1);

(statearr_56673[(9)] = inst_56154__$1);

(statearr_56673[(14)] = inst_56157);

(statearr_56673[(10)] = inst_56153__$1);

(statearr_56673[(63)] = inst_56248);

(statearr_56673[(11)] = inst_56155__$1);

return statearr_56673;
})();
var statearr_56674_58132 = state_56501__$1;
(statearr_56674_58132[(2)] = null);

(statearr_56674_58132[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (11))){
var inst_56063 = (state_56501[(60)]);
var inst_56062 = (state_56501[(2)]);
var inst_56063__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_56065 = (inst_56063__$1 == null);
var inst_56066 = cljs.core.not(inst_56065);
var state_56501__$1 = (function (){var statearr_56675 = state_56501;
(statearr_56675[(60)] = inst_56063__$1);

(statearr_56675[(30)] = inst_56062);

return statearr_56675;
})();
if(inst_56066){
var statearr_56676_58133 = state_56501__$1;
(statearr_56676_58133[(1)] = (12));

} else {
var statearr_56677_58134 = state_56501__$1;
(statearr_56677_58134[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (115))){
var inst_56466 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56679_58135 = state_56501__$1;
(statearr_56679_58135[(2)] = inst_56466);

(statearr_56679_58135[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (9))){
var inst_56057 = (state_56501[(62)]);
var inst_56059 = (inst_56057.cljs$core$IFn$_invoke$arity$2 ? inst_56057.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_56057.call(null,env,key_process_timeout));
var state_56501__$1 = state_56501;
var statearr_56683_58143 = state_56501__$1;
(statearr_56683_58143[(2)] = inst_56059);

(statearr_56683_58143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (5))){
var _ = (function (){var statearr_56684 = state_56501;
(statearr_56684[(4)] = cljs.core.rest((state_56501[(4)])));

return statearr_56684;
})();
var state_56501__$1 = state_56501;
var ex56678 = (state_56501__$1[(2)]);
var statearr_56685_58147 = state_56501__$1;
(statearr_56685_58147[(5)] = ex56678);


var statearr_56686_58148 = state_56501__$1;
(statearr_56686_58148[(1)] = (4));

(statearr_56686_58148[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (112))){
var inst_56351 = (state_56501[(20)]);
var inst_56349 = (state_56501[(21)]);
var inst_56360 = (state_56501[(35)]);
var inst_56350 = (state_56501[(22)]);
var inst_56404 = (state_56501[(2)]);
var tmp56680 = inst_56351;
var tmp56681 = inst_56349;
var tmp56682 = inst_56350;
var inst_56348 = inst_56404;
var inst_56349__$1 = tmp56681;
var inst_56350__$1 = tmp56682;
var inst_56351__$1 = tmp56680;
var inst_56352 = inst_56360;
var state_56501__$1 = (function (){var statearr_56687 = state_56501;
(statearr_56687[(20)] = inst_56351__$1);

(statearr_56687[(18)] = inst_56348);

(statearr_56687[(36)] = inst_56352);

(statearr_56687[(21)] = inst_56349__$1);

(statearr_56687[(22)] = inst_56350__$1);

return statearr_56687;
})();
var statearr_56688_58162 = state_56501__$1;
(statearr_56688_58162[(2)] = null);

(statearr_56688_58162[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (83))){
var inst_56324 = (state_56501[(50)]);
var inst_56085 = (state_56501[(26)]);
var inst_56320 = (state_56501[(2)]);
var inst_56321 = cljs.core.PersistentHashSet.EMPTY;
var inst_56322 = cljs.core.PersistentHashMap.EMPTY;
var inst_56323 = cljs.core.seq(inst_56085);
var inst_56324__$1 = cljs.core.first(inst_56323);
var inst_56325 = cljs.core.next(inst_56323);
var inst_56327 = (inst_56324__$1 == null);
var inst_56328 = cljs.core.not(inst_56327);
var state_56501__$1 = (function (){var statearr_56689 = state_56501;
(statearr_56689[(50)] = inst_56324__$1);

(statearr_56689[(40)] = inst_56321);

(statearr_56689[(64)] = inst_56325);

(statearr_56689[(41)] = inst_56322);

(statearr_56689[(42)] = inst_56320);

return statearr_56689;
})();
if(inst_56328){
var statearr_56690_58197 = state_56501__$1;
(statearr_56690_58197[(1)] = (84));

} else {
var statearr_56691_58202 = state_56501__$1;
(statearr_56691_58202[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (14))){
var inst_56079 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56079)){
var statearr_56692_58207 = state_56501__$1;
(statearr_56692_58207[(1)] = (18));

} else {
var statearr_56693_58210 = state_56501__$1;
(statearr_56693_58210[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (45))){
var state_56501__$1 = state_56501;
var statearr_56694_58211 = state_56501__$1;
(statearr_56694_58211[(2)] = false);

(statearr_56694_58211[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (53))){
var inst_56153 = (state_56501[(10)]);
var inst_56189 = (state_56501[(38)]);
var inst_56187 = (state_56501[(12)]);
var inst_56098 = (state_56501[(13)]);
var inst_56198 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_56199 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_56187,max_key_iterations];
var inst_56200 = cljs.core.PersistentHashMap.fromArrays(inst_56198,inst_56199);
var inst_56201 = com.wsscode.pathom.trace.trace(inst_56098,inst_56200);
var inst_56203 = cljs.core.contains_QMARK_(inst_56153,inst_56189);
var inst_56204 = (!(inst_56203));
var state_56501__$1 = (function (){var statearr_56695 = state_56501;
(statearr_56695[(65)] = inst_56201);

return statearr_56695;
})();
if(inst_56204){
var statearr_56696_58213 = state_56501__$1;
(statearr_56696_58213[(1)] = (56));

} else {
var statearr_56697_58214 = state_56501__$1;
(statearr_56697_58214[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (78))){
var inst_56153 = (state_56501[(10)]);
var state_56501__$1 = state_56501;
var statearr_56698_58217 = state_56501__$1;
(statearr_56698_58217[(2)] = inst_56153);

(statearr_56698_58217[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (132))){
var inst_56348 = (state_56501[(18)]);
var state_56501__$1 = state_56501;
var statearr_56699_58218 = state_56501__$1;
(statearr_56699_58218[(2)] = inst_56348);

(statearr_56699_58218[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (26))){
var inst_56496 = (state_56501[(2)]);
var _ = (function (){var statearr_56700 = state_56501;
(statearr_56700[(4)] = cljs.core.rest((state_56501[(4)])));

return statearr_56700;
})();
var state_56501__$1 = state_56501;
var statearr_56701_58221 = state_56501__$1;
(statearr_56701_58221[(2)] = inst_56496);

(statearr_56701_58221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (123))){
var state_56501__$1 = state_56501;
var statearr_56702_58222 = state_56501__$1;
(statearr_56702_58222[(1)] = (125));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (16))){
var state_56501__$1 = state_56501;
var statearr_56704_58223 = state_56501__$1;
(statearr_56704_58223[(2)] = false);

(statearr_56704_58223[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (133))){
var state_56501__$1 = state_56501;
var statearr_56705_58225 = state_56501__$1;
(statearr_56705_58225[(2)] = null);

(statearr_56705_58225[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (81))){
var inst_56315 = (state_56501[(59)]);
var state_56501__$1 = state_56501;
var statearr_56706_58226 = state_56501__$1;
(statearr_56706_58226[(2)] = inst_56315);

(statearr_56706_58226[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (120))){
var inst_56382 = (state_56501[(34)]);
var inst_56349 = (state_56501[(21)]);
var inst_56438 = cljs.core.contains_QMARK_(inst_56349,inst_56382);
var state_56501__$1 = state_56501;
if(inst_56438){
var statearr_56707_58227 = state_56501__$1;
(statearr_56707_58227[(1)] = (122));

} else {
var statearr_56708_58229 = state_56501__$1;
(statearr_56708_58229[(1)] = (123));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (79))){
var state_56501__$1 = state_56501;
var statearr_56709_58230 = state_56501__$1;
(statearr_56709_58230[(2)] = null);

(statearr_56709_58230[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (38))){
var inst_56126 = (state_56501[(54)]);
var inst_56127 = (state_56501[(55)]);
var inst_56085 = (state_56501[(26)]);
var inst_56119 = (state_56501[(31)]);
var inst_56125 = (state_56501[(57)]);
var inst_56151 = (state_56501[(2)]);
var inst_56152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56151,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_56153 = inst_56119;
var inst_56154 = inst_56125;
var inst_56155 = inst_56126;
var inst_56156 = inst_56127;
var inst_56157 = inst_56085;
var state_56501__$1 = (function (){var statearr_56710 = state_56501;
(statearr_56710[(7)] = inst_56156);

(statearr_56710[(9)] = inst_56154);

(statearr_56710[(14)] = inst_56157);

(statearr_56710[(10)] = inst_56153);

(statearr_56710[(11)] = inst_56155);

(statearr_56710[(66)] = inst_56152);

return statearr_56710;
})();
var statearr_56711_58235 = state_56501__$1;
(statearr_56711_58235[(2)] = null);

(statearr_56711_58235[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (126))){
var state_56501__$1 = state_56501;
var statearr_56712_58236 = state_56501__$1;
(statearr_56712_58236[(2)] = null);

(statearr_56712_58236[(1)] = (127));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (98))){
var state_56501__$1 = state_56501;
var statearr_56713_58238 = state_56501__$1;
(statearr_56713_58238[(2)] = true);

(statearr_56713_58238[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (124))){
var inst_56462 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56714_58240 = state_56501__$1;
(statearr_56714_58240[(2)] = inst_56462);

(statearr_56714_58240[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (87))){
var state_56501__$1 = state_56501;
var statearr_56715_58242 = state_56501__$1;
(statearr_56715_58242[(2)] = true);

(statearr_56715_58242[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (30))){
var inst_56129 = (state_56501[(52)]);
var inst_56135 = inst_56129.cljs$lang$protocol_mask$partition0$;
var inst_56136 = (inst_56135 & (64));
var inst_56137 = inst_56129.cljs$core$ISeq$;
var inst_56138 = (cljs.core.PROTOCOL_SENTINEL === inst_56137);
var inst_56139 = ((inst_56136) || (inst_56138));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56139)){
var statearr_56716_58245 = state_56501__$1;
(statearr_56716_58245[(1)] = (33));

} else {
var statearr_56717_58246 = state_56501__$1;
(statearr_56717_58246[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (73))){
var inst_56265 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56718_58248 = state_56501__$1;
(statearr_56718_58248[(2)] = inst_56265);

(statearr_56718_58248[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (96))){
var state_56501__$1 = state_56501;
var statearr_56719_58249 = state_56501__$1;
(statearr_56719_58249[(2)] = false);

(statearr_56719_58249[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (10))){
var state_56501__$1 = state_56501;
var statearr_56720_58250 = state_56501__$1;
(statearr_56720_58250[(2)] = null);

(statearr_56720_58250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (18))){
var inst_56063 = (state_56501[(60)]);
var inst_56081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56063);
var state_56501__$1 = state_56501;
var statearr_56721_58252 = state_56501__$1;
(statearr_56721_58252[(2)] = inst_56081);

(statearr_56721_58252[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (105))){
var inst_56350 = (state_56501[(22)]);
var inst_56470 = cljs.core.seq(inst_56350);
var state_56501__$1 = state_56501;
if(inst_56470){
var statearr_56722_58255 = state_56501__$1;
(statearr_56722_58255[(1)] = (128));

} else {
var statearr_56723_58256 = state_56501__$1;
(statearr_56723_58256[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (52))){
var inst_56297 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56724_58257 = state_56501__$1;
(statearr_56724_58257[(2)] = inst_56297);

(statearr_56724_58257[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (114))){
var inst_56418 = (state_56501[(51)]);
var inst_56098 = (state_56501[(13)]);
var inst_56418__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_56098);
var state_56501__$1 = (function (){var statearr_56725 = state_56501;
(statearr_56725[(51)] = inst_56418__$1);

return statearr_56725;
})();
if(cljs.core.truth_(inst_56418__$1)){
var statearr_56726_58259 = state_56501__$1;
(statearr_56726_58259[(1)] = (116));

} else {
var statearr_56727_58260 = state_56501__$1;
(statearr_56727_58260[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (67))){
var inst_56269 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56728_58262 = state_56501__$1;
(statearr_56728_58262[(2)] = inst_56269);

(statearr_56728_58262[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (71))){
var inst_56156 = (state_56501[(7)]);
var inst_56165 = (state_56501[(8)]);
var inst_56154 = (state_56501[(9)]);
var inst_56186 = (state_56501[(46)]);
var inst_56153 = (state_56501[(10)]);
var inst_56155 = (state_56501[(11)]);
var inst_56189 = (state_56501[(38)]);
var inst_56098 = (state_56501[(13)]);
var inst_56092 = (state_56501[(17)]);
var inst_56255 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_56156,inst_56189,com.wsscode.pathom.parser.zero_inc);
var inst_56256 = com.wsscode.pathom.parser.parallel_process_value(inst_56098,tx,inst_56186,inst_56092,inst_56153,inst_56154,inst_56155,read,mutate,inst_56255,inst_56165);
var inst_56257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56256,(0),null);
var inst_56258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56256,(1),null);
var inst_56259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56256,(2),null);
var inst_56260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56256,(3),null);
var inst_56261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56256,(4),null);
var inst_56153__$1 = inst_56257;
var inst_56154__$1 = inst_56258;
var inst_56155__$1 = inst_56259;
var inst_56156__$1 = inst_56260;
var inst_56157 = inst_56261;
var state_56501__$1 = (function (){var statearr_56729 = state_56501;
(statearr_56729[(7)] = inst_56156__$1);

(statearr_56729[(9)] = inst_56154__$1);

(statearr_56729[(14)] = inst_56157);

(statearr_56729[(10)] = inst_56153__$1);

(statearr_56729[(11)] = inst_56155__$1);

return statearr_56729;
})();
var statearr_56730_58267 = state_56501__$1;
(statearr_56730_58267[(2)] = null);

(statearr_56730_58267[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (42))){
var state_56501__$1 = state_56501;
var statearr_56731_58269 = state_56501__$1;
(statearr_56731_58269[(2)] = false);

(statearr_56731_58269[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (80))){
var inst_56293 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56732_58271 = state_56501__$1;
(statearr_56732_58271[(2)] = inst_56293);

(statearr_56732_58271[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (37))){
var inst_56129 = (state_56501[(52)]);
var state_56501__$1 = state_56501;
var statearr_56733_58272 = state_56501__$1;
(statearr_56733_58272[(2)] = inst_56129);

(statearr_56733_58272[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (63))){
var inst_56223 = (state_56501[(27)]);
var state_56501__$1 = state_56501;
var statearr_56734_58274 = state_56501__$1;
(statearr_56734_58274[(2)] = inst_56223);

(statearr_56734_58274[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (94))){
var inst_56494 = (state_56501[(2)]);
var state_56501__$1 = state_56501;
var statearr_56735_58275 = state_56501__$1;
(statearr_56735_58275[(2)] = inst_56494);

(statearr_56735_58275[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (8))){
var inst_56057 = (state_56501[(2)]);
var state_56501__$1 = (function (){var statearr_56736 = state_56501;
(statearr_56736[(62)] = inst_56057);

return statearr_56736;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_56737_58279 = state_56501__$1;
(statearr_56737_58279[(1)] = (9));

} else {
var statearr_56738_58280 = state_56501__$1;
(statearr_56738_58280[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (49))){
var inst_56186 = (state_56501[(46)]);
var inst_56186__$1 = (state_56501[(2)]);
var inst_56187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56186__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_56501__$1 = (function (){var statearr_56739 = state_56501;
(statearr_56739[(46)] = inst_56186__$1);

(statearr_56739[(12)] = inst_56187);

return statearr_56739;
})();
if(cljs.core.truth_(inst_56186__$1)){
var statearr_56740_58281 = state_56501__$1;
(statearr_56740_58281[(1)] = (50));

} else {
var statearr_56741_58282 = state_56501__$1;
(statearr_56741_58282[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56502 === (84))){
var inst_56324 = (state_56501[(50)]);
var inst_56330 = inst_56324.cljs$lang$protocol_mask$partition0$;
var inst_56331 = (inst_56330 & (64));
var inst_56332 = inst_56324.cljs$core$ISeq$;
var inst_56333 = (cljs.core.PROTOCOL_SENTINEL === inst_56332);
var inst_56334 = ((inst_56331) || (inst_56333));
var state_56501__$1 = state_56501;
if(cljs.core.truth_(inst_56334)){
var statearr_56742_58296 = state_56501__$1;
(statearr_56742_58296[(1)] = (87));

} else {
var statearr_56743_58298 = state_56501__$1;
(statearr_56743_58298[(1)] = (88));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto____0 = (function (){
var statearr_56744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56744[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto__);

(statearr_56744[(1)] = (1));

return statearr_56744;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto____1 = (function (state_56501){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_56501);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e56745){var ex__48143__auto__ = e56745;
var statearr_56746_58342 = state_56501;
(statearr_56746_58342[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_56501[(4)]))){
var statearr_56747_58343 = state_56501;
(statearr_56747_58343[(1)] = cljs.core.first((state_56501[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58344 = state_56501;
state_56501 = G__58344;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto__ = function(state_56501){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto____1.call(this,state_56501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__48841__auto__ = (function (){var statearr_56748 = f__48840__auto__();
(statearr_56748[(6)] = c__48839__auto__);

return statearr_56748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__56041,map__56041__$1,read,mutate,map__56042,map__56042__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__48839__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__56749){
var map__56750 = p__56749;
var map__56750__$1 = (((((!((map__56750 == null))))?(((((map__56750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56750):map__56750);
var pconfig = map__56750__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56750__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__56750,map__56750__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__56752,tx){
var map__56753 = p__56752;
var map__56753__$1 = (((((!((map__56753 == null))))?(((((map__56753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56753):map__56753);
var env = map__56753__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56753__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56753__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__48839__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__48839__auto__,map__56753,map__56753__$1,env,key_process_timeout,active_paths,path,map__56750,map__56750__$1,pconfig,add_error){
return (function (){
var f__48840__auto__ = (function (){var switch__48139__auto__ = ((function (c__48839__auto__,map__56753,map__56753__$1,env,key_process_timeout,active_paths,path,map__56750,map__56750__$1,pconfig,add_error){
return (function (state_56801){
var state_val_56802 = (state_56801[(1)]);
if((state_val_56802 === (7))){
var inst_56770 = (state_56801[(7)]);
var state_56801__$1 = state_56801;
var statearr_56803_58351 = state_56801__$1;
(statearr_56803_58351[(2)] = inst_56770);

(statearr_56803_58351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (1))){
var state_56801__$1 = state_56801;
var statearr_56804_58353 = state_56801__$1;
(statearr_56804_58353[(2)] = null);

(statearr_56804_58353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (4))){
var inst_56755 = (state_56801[(2)]);
var state_56801__$1 = state_56801;
var statearr_56805_58355 = state_56801__$1;
(statearr_56805_58355[(2)] = inst_56755);

(statearr_56805_58355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (6))){
var inst_56770 = (state_56801[(7)]);
var inst_56772 = cljs.core.async.timeout(key_process_timeout);
var inst_56773 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_56770,inst_56772);
var state_56801__$1 = state_56801;
var statearr_56806_58358 = state_56801__$1;
(statearr_56806_58358[(2)] = inst_56773);

(statearr_56806_58358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (3))){
var inst_56799 = (state_56801[(2)]);
var state_56801__$1 = state_56801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56801__$1,inst_56799);
} else {
if((state_val_56802 === (12))){
var inst_56796 = (state_56801[(2)]);
var _ = (function (){var statearr_56807 = state_56801;
(statearr_56807[(4)] = cljs.core.rest((state_56801[(4)])));

return statearr_56807;
})();
var state_56801__$1 = state_56801;
var statearr_56808_58360 = state_56801__$1;
(statearr_56808_58360[(2)] = inst_56796);

(statearr_56808_58360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (2))){
var inst_56766 = (state_56801[(8)]);
var _ = (function (){var statearr_56809 = state_56801;
(statearr_56809[(4)] = cljs.core.cons((5),(state_56801[(4)])));

return statearr_56809;
})();
var inst_56761 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_56765 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout,new cljs.core.Keyword("com.wsscode.pathom.core","parent-query","com.wsscode.pathom.core/parent-query",1683392594),tx], 0));
var inst_56766__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_56765,tx);
var inst_56768 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56769 = [inst_56766__$1];
var inst_56770 = (new cljs.core.PersistentVector(null,1,(5),inst_56768,inst_56769,null));
var state_56801__$1 = (function (){var statearr_56810 = state_56801;
(statearr_56810[(8)] = inst_56766__$1);

(statearr_56810[(7)] = inst_56770);

(statearr_56810[(9)] = inst_56761);

return statearr_56810;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_56811_58367 = state_56801__$1;
(statearr_56811_58367[(1)] = (6));

} else {
var statearr_56812_58368 = state_56801__$1;
(statearr_56812_58368[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (11))){
var inst_56785 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_56786 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_56787 = cljs.core.PersistentHashMap.fromArrays(inst_56785,inst_56786);
var inst_56788 = com.wsscode.pathom.trace.trace(env,inst_56787);
var inst_56789 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_56790 = [key_process_timeout];
var inst_56791 = cljs.core.PersistentHashMap.fromArrays(inst_56789,inst_56790);
var inst_56792 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_56791);
var inst_56793 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_56792) : add_error.call(null,env,inst_56792));
var inst_56794 = cljs.core.PersistentHashMap.EMPTY;
var state_56801__$1 = (function (){var statearr_56814 = state_56801;
(statearr_56814[(10)] = inst_56793);

(statearr_56814[(11)] = inst_56788);

return statearr_56814;
})();
var statearr_56815_58372 = state_56801__$1;
(statearr_56815_58372[(2)] = inst_56794);

(statearr_56815_58372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (9))){
var inst_56766 = (state_56801[(8)]);
var inst_56778 = (state_56801[(2)]);
var inst_56779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56778,(0),null);
var inst_56780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56778,(1),null);
var inst_56781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_56782 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56766,inst_56780);
var state_56801__$1 = (function (){var statearr_56816 = state_56801;
(statearr_56816[(12)] = inst_56781);

(statearr_56816[(13)] = inst_56779);

return statearr_56816;
})();
if(inst_56782){
var statearr_56817_58375 = state_56801__$1;
(statearr_56817_58375[(1)] = (10));

} else {
var statearr_56818_58376 = state_56801__$1;
(statearr_56818_58376[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (5))){
var _ = (function (){var statearr_56819 = state_56801;
(statearr_56819[(4)] = cljs.core.rest((state_56801[(4)])));

return statearr_56819;
})();
var state_56801__$1 = state_56801;
var ex56813 = (state_56801__$1[(2)]);
var statearr_56820_58379 = state_56801__$1;
(statearr_56820_58379[(5)] = ex56813);


var statearr_56821_58380 = state_56801__$1;
(statearr_56821_58380[(1)] = (4));

(statearr_56821_58380[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (10))){
var inst_56779 = (state_56801[(13)]);
var state_56801__$1 = state_56801;
var statearr_56822_58382 = state_56801__$1;
(statearr_56822_58382[(2)] = inst_56779);

(statearr_56822_58382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56802 === (8))){
var inst_56776 = (state_56801[(2)]);
var state_56801__$1 = state_56801;
return cljs.core.async.ioc_alts_BANG_(state_56801__$1,(9),inst_56776);
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
});})(c__48839__auto__,map__56753,map__56753__$1,env,key_process_timeout,active_paths,path,map__56750,map__56750__$1,pconfig,add_error))
;
return ((function (switch__48139__auto__,c__48839__auto__,map__56753,map__56753__$1,env,key_process_timeout,active_paths,path,map__56750,map__56750__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto____0 = (function (){
var statearr_56823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56823[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto__);

(statearr_56823[(1)] = (1));

return statearr_56823;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto____1 = (function (state_56801){
while(true){
var ret_value__48141__auto__ = (function (){try{while(true){
var result__48142__auto__ = switch__48139__auto__(state_56801);
if(cljs.core.keyword_identical_QMARK_(result__48142__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48142__auto__;
}
break;
}
}catch (e56824){var ex__48143__auto__ = e56824;
var statearr_56825_58387 = state_56801;
(statearr_56825_58387[(2)] = ex__48143__auto__);


if(cljs.core.seq((state_56801[(4)]))){
var statearr_56826_58388 = state_56801;
(statearr_56826_58388[(1)] = cljs.core.first((state_56801[(4)])));

} else {
throw ex__48143__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58389 = state_56801;
state_56801 = G__58389;
continue;
} else {
return ret_value__48141__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto__ = function(state_56801){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto____1.call(this,state_56801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__48140__auto__;
})()
;})(switch__48139__auto__,c__48839__auto__,map__56753,map__56753__$1,env,key_process_timeout,active_paths,path,map__56750,map__56750__$1,pconfig,add_error))
})();
var state__48841__auto__ = (function (){var statearr_56827 = f__48840__auto__();
(statearr_56827[(6)] = c__48839__auto__);

return statearr_56827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48841__auto__);
});})(c__48839__auto__,map__56753,map__56753__$1,env,key_process_timeout,active_paths,path,map__56750,map__56750__$1,pconfig,add_error))
);

return c__48839__auto__;
});
;})(map__56750,map__56750__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
