goog.provide('com.wsscode.pathom.parser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.spec.alpha');
goog.require('com.wsscode.common.async_cljs');
goog.require('com.wsscode.pathom.misc');
goog.require('com.wsscode.pathom.trace');
goog.require('clojure.set');
if(com.wsscode.pathom.misc.INCLUDE_SPECS){
cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);

cljs.spec.alpha.def_impl(new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
} else {
}
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
var G__44892 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44892,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__44892;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__44925){
var vec__44934 = p__44925;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44934,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44934,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__44956){
var vec__44957 = p__44956;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44957,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44957,(1),null);
var call = vec__44957;
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
var G__44972 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44972,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__44972;
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
var vec__44987 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44987,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44987,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__45018){
var vec__45019 = p__45018;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45019,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45019,(1),null);
var ref = vec__45019;
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
return cljs.core.with_meta((function (){var G__45023 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__45023,null,(1),null));
} else {
return G__45023;
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
var G__45028 = arguments.length;
switch (G__45028) {
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

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__45032,unparse_QMARK_){
var map__45033 = p__45032;
var map__45033__$1 = (((((!((map__45033 == null))))?(((((map__45033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45033):map__45033);
var ast = map__45033__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45033__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__45037 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__45033,map__45033__$1,ast,ast_meta,type,component){
return (function (p1__45024_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__45024_SHARP_,unparse_QMARK_);
});})(map__45033,map__45033__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__45037,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__45037;
}
} else {
var map__45038 = ast;
var map__45038__$1 = (((((!((map__45038 == null))))?(((((map__45038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45038):map__45038);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45038__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
var map__45040 = ast;
var map__45040__$1 = (((((!((map__45040 == null))))?(((((map__45040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45040):map__45040);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45040__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__45042 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__45042,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__45042;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__45040,map__45040__$1,children,query_meta,key__$1,map__45038,map__45038__$1,key,query,query_root,params,map__45033,map__45033__$1,ast,ast_meta,type,component){
return (function (p__45043){
var map__45044 = p__45043;
var map__45044__$1 = (((((!((map__45044 == null))))?(((((map__45044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45044):map__45044);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45044__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__45046 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__45044,map__45044__$1,union_key,children__$1,component__$1,map__45040,map__45040__$1,children,query_meta,key__$1,map__45038,map__45038__$1,key,query,query_root,params,map__45033,map__45033__$1,ast,ast_meta,type,component){
return (function (p1__45025_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__45025_SHARP_,unparse_QMARK_);
});})(map__45044,map__45044__$1,union_key,children__$1,component__$1,map__45040,map__45040__$1,children,query_meta,key__$1,map__45038,map__45038__$1,key,query,query_root,params,map__45033,map__45033__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__45046,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__45046;
}
})()], null);
});})(map__45040,map__45040__$1,children,query_meta,key__$1,map__45038,map__45038__$1,key,query,query_root,params,map__45033,map__45033__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__45047 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__45040,map__45040__$1,children,query_meta,key__$1,map__45038,map__45038__$1,key,query,query_root,params,map__45033,map__45033__$1,ast,ast_meta,type,component){
return (function (p1__45026_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__45026_SHARP_,unparse_QMARK_);
});})(map__45040,map__45040__$1,children,query_meta,key__$1,map__45038,map__45038__$1,key,query,query_root,params,map__45033,map__45033__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__45047,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__45047;
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
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__45048_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__45048_SHARP_),p1__45048_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__45049){
var map__45050 = p__45049;
var map__45050__$1 = (((((!((map__45050 == null))))?(((((map__45050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45050):map__45050);
var union_entry = map__45050__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45050__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
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
return (function (children,p__45052){
var map__45053 = p__45052;
var map__45053__$1 = (((((!((map__45053 == null))))?(((((map__45053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45053):map__45053);
var focus = map__45053__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45053__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45053__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5718__auto__,map__45053,map__45053__$1,focus,key,type,q_index){
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
});})(source,temp__5718__auto__,map__45053,map__45053__$1,focus,key,type,q_index))
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
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__45055){
var map__45056 = p__45055;
var map__45056__$1 = (((((!((map__45056 == null))))?(((((map__45056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45056):map__45056);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45056__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__45056,map__45056__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__21490__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__21491__auto__ = (function (){var map__45058 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__45058__$1 = (((((!((map__45058 == null))))?(((((map__45058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45058):map__45058);
var tx_ast = map__45058__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45058__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__45064 = children;
var vec__45065 = G__45064;
var seq__45066 = cljs.core.seq(vec__45065);
var first__45067 = cljs.core.first(seq__45066);
var seq__45066__$1 = cljs.core.next(seq__45066);
var map__45068 = first__45067;
var map__45068__$1 = (((((!((map__45068 == null))))?(((((map__45068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45068):map__45068);
var ast = map__45068__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45068__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__45066__$1;
var res__$1 = res;
var G__45064__$1 = G__45064;
while(true){
var res__$2 = res__$1;
var vec__45079 = G__45064__$1;
var seq__45080 = cljs.core.seq(vec__45079);
var first__45081 = cljs.core.first(seq__45080);
var seq__45080__$1 = cljs.core.next(seq__45080);
var map__45082 = first__45081;
var map__45082__$1 = (((((!((map__45082 == null))))?(((((map__45082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45082):map__45082);
var ast__$1 = map__45082__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45082__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45082__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45082__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45082__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__45080__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__45084 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__45084__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45084,new cljs.core.Keyword(null,"query","query",-1288509510)):G__45084);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45084__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__45084__$1;
}
})();
var value = (function (){var G__45085 = type__$1;
var G__45085__$1 = (((G__45085 instanceof cljs.core.Keyword))?G__45085.fqn:null);
switch (G__45085__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__45086 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__45086__$1 = (((((!((map__45086 == null))))?(((((map__45086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45086):map__45086);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45086__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__47142 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__47143 = tail__$1;
res__$1 = G__47142;
G__45064__$1 = G__47143;
continue;
} else {
return res__$2;
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__21490__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));

return res__21491__auto__;
} else {
var map__45088 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__45088__$1 = (((((!((map__45088 == null))))?(((((map__45088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45088):map__45088);
var tx_ast = map__45088__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45088__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__45094 = children;
var vec__45095 = G__45094;
var seq__45096 = cljs.core.seq(vec__45095);
var first__45097 = cljs.core.first(seq__45096);
var seq__45096__$1 = cljs.core.next(seq__45096);
var map__45098 = first__45097;
var map__45098__$1 = (((((!((map__45098 == null))))?(((((map__45098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45098):map__45098);
var ast = map__45098__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45098__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__45096__$1;
var res__$1 = res;
var G__45094__$1 = G__45094;
while(true){
var res__$2 = res__$1;
var vec__45109 = G__45094__$1;
var seq__45110 = cljs.core.seq(vec__45109);
var first__45111 = cljs.core.first(seq__45110);
var seq__45110__$1 = cljs.core.next(seq__45110);
var map__45112 = first__45111;
var map__45112__$1 = (((((!((map__45112 == null))))?(((((map__45112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45112):map__45112);
var ast__$1 = map__45112__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45112__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__45110__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__45114 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__45114__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45114,new cljs.core.Keyword(null,"query","query",-1288509510)):G__45114);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45114__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__45114__$1;
}
})();
var value = (function (){var G__45115 = type__$1;
var G__45115__$1 = (((G__45115 instanceof cljs.core.Keyword))?G__45115.fqn:null);
switch (G__45115__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__45116 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__45116__$1 = (((((!((map__45116 == null))))?(((((map__45116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45116):map__45116);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45116__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__47158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__47159 = tail__$1;
res__$1 = G__47158;
G__45094__$1 = G__47159;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__45056,map__45056__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__45118){
var map__45119 = p__45118;
var map__45119__$1 = (((((!((map__45119 == null))))?(((((map__45119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45119):map__45119);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45119__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45119__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__45119,map__45119__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__45119,map__45119__$1,read,mutate){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__45119,map__45119__$1,read,mutate){
return (function (state_45515){
var state_val_45516 = (state_45515[(1)]);
if((state_val_45516 === (121))){
var inst_45453 = (state_45515[(7)]);
var inst_45471 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45453);
var state_45515__$1 = state_45515;
var statearr_45517_47163 = state_45515__$1;
(statearr_45517_47163[(2)] = inst_45471);

(statearr_45517_47163[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (65))){
var inst_45292 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_45293 = (new Error(inst_45292));
var inst_45294 = (function(){throw inst_45293})();
var state_45515__$1 = state_45515;
var statearr_45518_47164 = state_45515__$1;
(statearr_45518_47164[(2)] = inst_45294);

(statearr_45518_47164[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (70))){
var inst_45204 = (state_45515[(8)]);
var inst_45225 = (state_45515[(9)]);
var inst_45195 = (state_45515[(10)]);
var inst_45309 = (state_45515[(2)]);
var inst_45310 = com.wsscode.pathom.parser.ast__GT_out_key(inst_45225);
var inst_45311 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45195,inst_45310,inst_45309);
var inst_45195__$1 = inst_45311;
var inst_45196 = inst_45204;
var state_45515__$1 = (function (){var statearr_45519 = state_45515;
(statearr_45519[(11)] = inst_45196);

(statearr_45519[(10)] = inst_45195__$1);

return statearr_45519;
})();
var statearr_45520_47167 = state_45515__$1;
(statearr_45520_47167[(2)] = null);

(statearr_45520_47167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (62))){
var inst_45288 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45521_47168 = state_45515__$1;
(statearr_45521_47168[(2)] = inst_45288);

(statearr_45521_47168[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (74))){
var inst_45340 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45340)){
var statearr_45522_47172 = state_45515__$1;
(statearr_45522_47172[(1)] = (78));

} else {
var statearr_45523_47173 = state_45515__$1;
(statearr_45523_47173[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (110))){
var inst_45493 = (state_45515[(12)]);
var inst_45493__$1 = (state_45515[(2)]);
var inst_45494 = com.wsscode.common.async_cljs.chan_QMARK_(inst_45493__$1);
var state_45515__$1 = (function (){var statearr_45524 = state_45515;
(statearr_45524[(12)] = inst_45493__$1);

return statearr_45524;
})();
if(inst_45494){
var statearr_45525_47176 = state_45515__$1;
(statearr_45525_47176[(1)] = (132));

} else {
var statearr_45526_47177 = state_45515__$1;
(statearr_45526_47177[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (130))){
var inst_45444 = (state_45515[(13)]);
var inst_45488 = (state_45515[(2)]);
var inst_45489 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_45444) : read.call(null,inst_45444));
var state_45515__$1 = (function (){var statearr_45527 = state_45515;
(statearr_45527[(14)] = inst_45488);

return statearr_45527;
})();
var statearr_45528_47196 = state_45515__$1;
(statearr_45528_47196[(2)] = inst_45489);

(statearr_45528_47196[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (128))){
var state_45515__$1 = state_45515;
var statearr_45529_47197 = state_45515__$1;
(statearr_45529_47197[(2)] = null);

(statearr_45529_47197[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (7))){
var inst_45511 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45530_47199 = state_45515__$1;
(statearr_45530_47199[(2)] = inst_45511);


cljs.core.async.impl.ioc_helpers.process_exception(state_45515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (59))){
var inst_45283 = (state_45515[(15)]);
var inst_45282 = (state_45515[(2)]);
var inst_45283__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45282,new cljs.core.Keyword(null,"action","action",-811238024));
var state_45515__$1 = (function (){var statearr_45531 = state_45515;
(statearr_45531[(15)] = inst_45283__$1);

return statearr_45531;
})();
if(cljs.core.truth_(inst_45283__$1)){
var statearr_45532_47201 = state_45515__$1;
(statearr_45532_47201[(1)] = (60));

} else {
var statearr_45533_47202 = state_45515__$1;
(statearr_45533_47202[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (86))){
var inst_45374 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45534_47204 = state_45515__$1;
(statearr_45534_47204[(2)] = inst_45374);

(statearr_45534_47204[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (20))){
var state_45515__$1 = state_45515;
var statearr_45535_47207 = state_45515__$1;
(statearr_45535_47207[(2)] = true);

(statearr_45535_47207[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (72))){
var inst_45324 = (state_45515[(16)]);
var inst_45329 = inst_45324.cljs$lang$protocol_mask$partition0$;
var inst_45330 = (inst_45329 & (64));
var inst_45331 = inst_45324.cljs$core$ISeq$;
var inst_45332 = (cljs.core.PROTOCOL_SENTINEL === inst_45331);
var inst_45333 = ((inst_45330) || (inst_45332));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45333)){
var statearr_45536_47210 = state_45515__$1;
(statearr_45536_47210[(1)] = (75));

} else {
var statearr_45537_47211 = state_45515__$1;
(statearr_45537_47211[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (58))){
var inst_45261 = (state_45515[(17)]);
var state_45515__$1 = state_45515;
var statearr_45538_47213 = state_45515__$1;
(statearr_45538_47213[(2)] = inst_45261);

(statearr_45538_47213[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (60))){
var inst_45283 = (state_45515[(15)]);
var inst_45285 = (inst_45283.cljs$core$IFn$_invoke$arity$0 ? inst_45283.cljs$core$IFn$_invoke$arity$0() : inst_45283.call(null));
var state_45515__$1 = state_45515;
var statearr_45539_47215 = state_45515__$1;
(statearr_45539_47215[(2)] = inst_45285);

(statearr_45539_47215[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (27))){
var inst_45130 = (state_45515[(18)]);
var inst_45317 = (state_45515[(2)]);
var inst_45318 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_45319 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_45320 = cljs.core.PersistentHashMap.fromArrays(inst_45318,inst_45319);
var inst_45321 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_45130,inst_45320);
var state_45515__$1 = (function (){var statearr_45540 = state_45515;
(statearr_45540[(19)] = inst_45321);

return statearr_45540;
})();
var statearr_45541_47218 = state_45515__$1;
(statearr_45541_47218[(2)] = inst_45317);

(statearr_45541_47218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (1))){
var state_45515__$1 = state_45515;
var statearr_45542_47220 = state_45515__$1;
(statearr_45542_47220[(2)] = null);

(statearr_45542_47220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (69))){
var inst_45301 = (state_45515[(20)]);
var state_45515__$1 = state_45515;
var statearr_45543_47221 = state_45515__$1;
(statearr_45543_47221[(2)] = inst_45301);

(statearr_45543_47221[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (101))){
var inst_45419 = (state_45515[(21)]);
var inst_45348 = (state_45515[(22)]);
var inst_45417 = (state_45515[(23)]);
var inst_45418 = (state_45515[(24)]);
var inst_45423 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45424 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_45419];
var inst_45425 = cljs.core.PersistentHashMap.fromArrays(inst_45423,inst_45424);
var inst_45426 = com.wsscode.pathom.trace.trace(inst_45348,inst_45425);
var inst_45428 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_45429 = [inst_45417,inst_45418];
var inst_45430 = cljs.core.PersistentHashMap.fromArrays(inst_45428,inst_45429);
var inst_45431 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45348,inst_45430], 0));
var inst_45432 = (inst_45418 == null);
var state_45515__$1 = (function (){var statearr_45544 = state_45515;
(statearr_45544[(25)] = inst_45426);

(statearr_45544[(26)] = inst_45431);

return statearr_45544;
})();
if(cljs.core.truth_(inst_45432)){
var statearr_45545_47224 = state_45515__$1;
(statearr_45545_47224[(1)] = (104));

} else {
var statearr_45546_47225 = state_45515__$1;
(statearr_45546_47225[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (24))){
var inst_45168 = (state_45515[(27)]);
var state_45515__$1 = state_45515;
var statearr_45547_47230 = state_45515__$1;
(statearr_45547_47230[(2)] = inst_45168);

(statearr_45547_47230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (102))){
var inst_45387 = (state_45515[(28)]);
var state_45515__$1 = state_45515;
var statearr_45548_47240 = state_45515__$1;
(statearr_45548_47240[(2)] = inst_45387);

(statearr_45548_47240[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (135))){
var inst_45497 = (state_45515[(2)]);
var inst_45498 = com.wsscode.common.async_cljs.throw_err(inst_45497);
var state_45515__$1 = state_45515;
var statearr_45549_47241 = state_45515__$1;
(statearr_45549_47241[(2)] = inst_45498);

(statearr_45549_47241[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (55))){
var state_45515__$1 = state_45515;
var statearr_45550_47243 = state_45515__$1;
(statearr_45550_47243[(2)] = false);

(statearr_45550_47243[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (85))){
var state_45515__$1 = state_45515;
var statearr_45551_47245 = state_45515__$1;
(statearr_45551_47245[(2)] = false);

(statearr_45551_47245[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (39))){
var inst_45315 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45552_47246 = state_45515__$1;
(statearr_45552_47246[(2)] = inst_45315);

(statearr_45552_47246[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (88))){
var inst_45360 = (state_45515[(29)]);
var state_45515__$1 = state_45515;
var statearr_45553_47249 = state_45515__$1;
(statearr_45553_47249[(2)] = inst_45360);

(statearr_45553_47249[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (46))){
var inst_45301 = (state_45515[(20)]);
var inst_45301__$1 = (state_45515[(2)]);
var inst_45302 = com.wsscode.common.async_cljs.chan_QMARK_(inst_45301__$1);
var state_45515__$1 = (function (){var statearr_45554 = state_45515;
(statearr_45554[(20)] = inst_45301__$1);

return statearr_45554;
})();
if(inst_45302){
var statearr_45555_47252 = state_45515__$1;
(statearr_45555_47252[(1)] = (68));

} else {
var statearr_45556_47254 = state_45515__$1;
(statearr_45556_47254[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45515,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_45125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45125)){
var statearr_45557_47255 = state_45515__$1;
(statearr_45557_47255[(1)] = (5));

} else {
var statearr_45558_47256 = state_45515__$1;
(statearr_45558_47256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (77))){
var inst_45337 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45559_47257 = state_45515__$1;
(statearr_45559_47257[(2)] = inst_45337);

(statearr_45559_47257[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (106))){
var inst_45418 = (state_45515[(24)]);
var inst_45437 = (state_45515[(2)]);
var inst_45438 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_45439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45438,inst_45418);
var state_45515__$1 = (function (){var statearr_45560 = state_45515;
(statearr_45560[(30)] = inst_45437);

return statearr_45560;
})();
if(inst_45439){
var statearr_45561_47279 = state_45515__$1;
(statearr_45561_47279[(1)] = (107));

} else {
var statearr_45562_47280 = state_45515__$1;
(statearr_45562_47280[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (119))){
var state_45515__$1 = state_45515;
var statearr_45563_47281 = state_45515__$1;
(statearr_45563_47281[(2)] = false);

(statearr_45563_47281[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (95))){
var state_45515__$1 = state_45515;
var statearr_45564_47283 = state_45515__$1;
(statearr_45564_47283[(2)] = true);

(statearr_45564_47283[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (54))){
var state_45515__$1 = state_45515;
var statearr_45565_47285 = state_45515__$1;
(statearr_45565_47285[(2)] = true);

(statearr_45565_47285[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (92))){
var inst_45395 = (state_45515[(31)]);
var inst_45401 = inst_45395.cljs$lang$protocol_mask$partition0$;
var inst_45402 = (inst_45401 & (64));
var inst_45403 = inst_45395.cljs$core$ISeq$;
var inst_45404 = (cljs.core.PROTOCOL_SENTINEL === inst_45403);
var inst_45405 = ((inst_45402) || (inst_45404));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45405)){
var statearr_45566_47286 = state_45515__$1;
(statearr_45566_47286[(1)] = (95));

} else {
var statearr_45567_47288 = state_45515__$1;
(statearr_45567_47288[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (104))){
var inst_45431 = (state_45515[(26)]);
var inst_45434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_45431,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_45515__$1 = state_45515;
var statearr_45568_47292 = state_45515__$1;
(statearr_45568_47292[(2)] = inst_45434);

(statearr_45568_47292[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (15))){
var inst_45132 = (state_45515[(32)]);
var state_45515__$1 = state_45515;
var statearr_45569_47295 = state_45515__$1;
(statearr_45569_47295[(2)] = inst_45132);

(statearr_45569_47295[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (48))){
var state_45515__$1 = state_45515;
var statearr_45570_47297 = state_45515__$1;
(statearr_45570_47297[(2)] = null);

(statearr_45570_47297[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (50))){
var inst_45229 = (state_45515[(33)]);
var inst_45252 = (state_45515[(34)]);
var inst_45227 = (state_45515[(35)]);
var inst_45261 = (state_45515[(17)]);
var inst_45259 = (state_45515[(2)]);
var inst_45261__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_45252,inst_45227,inst_45229) : mutate.call(null,inst_45252,inst_45227,inst_45229));
var inst_45263 = (inst_45261__$1 == null);
var inst_45264 = cljs.core.not(inst_45263);
var state_45515__$1 = (function (){var statearr_45571 = state_45515;
(statearr_45571[(36)] = inst_45259);

(statearr_45571[(17)] = inst_45261__$1);

return statearr_45571;
})();
if(inst_45264){
var statearr_45572_47301 = state_45515__$1;
(statearr_45572_47301[(1)] = (51));

} else {
var statearr_45573_47302 = state_45515__$1;
(statearr_45573_47302[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (116))){
var state_45515__$1 = state_45515;
var statearr_45574_47303 = state_45515__$1;
(statearr_45574_47303[(2)] = false);

(statearr_45574_47303[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (75))){
var state_45515__$1 = state_45515;
var statearr_45575_47305 = state_45515__$1;
(statearr_45575_47305[(2)] = true);

(statearr_45575_47305[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (99))){
var inst_45395 = (state_45515[(31)]);
var state_45515__$1 = state_45515;
var statearr_45576_47306 = state_45515__$1;
(statearr_45576_47306[(2)] = inst_45395);

(statearr_45576_47306[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (21))){
var state_45515__$1 = state_45515;
var statearr_45577_47307 = state_45515__$1;
(statearr_45577_47307[(2)] = false);

(statearr_45577_47307[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (31))){
var state_45515__$1 = state_45515;
var statearr_45578_47310 = state_45515__$1;
(statearr_45578_47310[(2)] = true);

(statearr_45578_47310[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (113))){
var inst_45447 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_45448 = (new Error(inst_45447));
var inst_45449 = (function(){throw inst_45448})();
var state_45515__$1 = state_45515;
var statearr_45579_47312 = state_45515__$1;
(statearr_45579_47312[(2)] = inst_45449);

(statearr_45579_47312[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (32))){
var state_45515__$1 = state_45515;
var statearr_45580_47313 = state_45515__$1;
(statearr_45580_47313[(2)] = false);

(statearr_45580_47313[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (40))){
var inst_45239 = (state_45515[(37)]);
var inst_45242 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_45239,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_45515__$1 = state_45515;
var statearr_45581_47321 = state_45515__$1;
(statearr_45581_47321[(2)] = inst_45242);

(statearr_45581_47321[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (129))){
var inst_45484 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_45485 = (new Error(inst_45484));
var inst_45486 = (function(){throw inst_45485})();
var state_45515__$1 = state_45515;
var statearr_45582_47332 = state_45515__$1;
(statearr_45582_47332[(2)] = inst_45486);

(statearr_45582_47332[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (91))){
var inst_45509 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45583_47345 = state_45515__$1;
(statearr_45583_47345[(2)] = inst_45509);

(statearr_45583_47345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (117))){
var inst_45469 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45469)){
var statearr_45584_47346 = state_45515__$1;
(statearr_45584_47346[(1)] = (121));

} else {
var statearr_45585_47347 = state_45515__$1;
(statearr_45585_47347[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (108))){
var inst_45437 = (state_45515[(30)]);
var state_45515__$1 = state_45515;
var statearr_45586_47348 = state_45515__$1;
(statearr_45586_47348[(2)] = inst_45437);

(statearr_45586_47348[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (56))){
var inst_45274 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45587_47350 = state_45515__$1;
(statearr_45587_47350[(2)] = inst_45274);

(statearr_45587_47350[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (33))){
var inst_45217 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45588_47351 = state_45515__$1;
(statearr_45588_47351[(2)] = inst_45217);

(statearr_45588_47351[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (13))){
var inst_45145 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45589_47353 = state_45515__$1;
(statearr_45589_47353[(2)] = inst_45145);

(statearr_45589_47353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (22))){
var inst_45182 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45590_47354 = state_45515__$1;
(statearr_45590_47354[(2)] = inst_45182);

(statearr_45590_47354[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (90))){
var inst_45388 = (state_45515[(38)]);
var inst_45395 = (state_45515[(31)]);
var inst_45394 = cljs.core.seq(inst_45388);
var inst_45395__$1 = cljs.core.first(inst_45394);
var inst_45396 = cljs.core.next(inst_45394);
var inst_45398 = (inst_45395__$1 == null);
var inst_45399 = cljs.core.not(inst_45398);
var state_45515__$1 = (function (){var statearr_45591 = state_45515;
(statearr_45591[(39)] = inst_45396);

(statearr_45591[(31)] = inst_45395__$1);

return statearr_45591;
})();
if(inst_45399){
var statearr_45592_47358 = state_45515__$1;
(statearr_45592_47358[(1)] = (92));

} else {
var statearr_45593_47359 = state_45515__$1;
(statearr_45593_47359[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (109))){
var inst_45420 = (state_45515[(40)]);
var inst_45444 = (state_45515[(2)]);
var state_45515__$1 = (function (){var statearr_45594 = state_45515;
(statearr_45594[(13)] = inst_45444);

return statearr_45594;
})();
var G__45595_47361 = inst_45420;
var G__45595_47362__$1 = (((G__45595_47361 instanceof cljs.core.Keyword))?G__45595_47361.fqn:null);
switch (G__45595_47362__$1) {
case "call":
var statearr_45596_47365 = state_45515__$1;
(statearr_45596_47365[(1)] = (111));


break;
case "prop":
case "join":
case "union":
var statearr_45597_47366 = state_45515__$1;
(statearr_45597_47366[(1)] = (127));


break;
default:
var statearr_45598_47367 = state_45515__$1;
(statearr_45598_47367[(1)] = (131));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (36))){
var inst_45225 = (state_45515[(9)]);
var inst_45225__$1 = (state_45515[(2)]);
var inst_45226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45225__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45225__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45225__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45225__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_45515__$1 = (function (){var statearr_45599 = state_45515;
(statearr_45599[(41)] = inst_45228);

(statearr_45599[(33)] = inst_45229);

(statearr_45599[(9)] = inst_45225__$1);

(statearr_45599[(42)] = inst_45226);

(statearr_45599[(35)] = inst_45227);

return statearr_45599;
})();
if(cljs.core.truth_(inst_45225__$1)){
var statearr_45600_47371 = state_45515__$1;
(statearr_45600_47371[(1)] = (37));

} else {
var statearr_45601_47372 = state_45515__$1;
(statearr_45601_47372[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (41))){
var inst_45239 = (state_45515[(37)]);
var state_45515__$1 = state_45515;
var statearr_45602_47374 = state_45515__$1;
(statearr_45602_47374[(2)] = inst_45239);

(statearr_45602_47374[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (118))){
var state_45515__$1 = state_45515;
var statearr_45603_47376 = state_45515__$1;
(statearr_45603_47376[(2)] = true);

(statearr_45603_47376[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (89))){
var inst_45358 = (state_45515[(43)]);
var inst_45346 = (state_45515[(44)]);
var inst_45382 = (state_45515[(2)]);
var inst_45383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45382,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45382,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45382,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45382,new cljs.core.Keyword(null,"params","params",710516235));
var inst_45387 = inst_45358;
var inst_45388 = inst_45346;
var state_45515__$1 = (function (){var statearr_45604 = state_45515;
(statearr_45604[(45)] = inst_45384);

(statearr_45604[(28)] = inst_45387);

(statearr_45604[(46)] = inst_45385);

(statearr_45604[(47)] = inst_45386);

(statearr_45604[(48)] = inst_45383);

(statearr_45604[(38)] = inst_45388);

return statearr_45604;
})();
var statearr_45605_47378 = state_45515__$1;
(statearr_45605_47378[(2)] = null);

(statearr_45605_47378[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (100))){
var inst_45417 = (state_45515[(23)]);
var inst_45417__$1 = (state_45515[(2)]);
var inst_45418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45417__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45417__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45417__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45417__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_45515__$1 = (function (){var statearr_45606 = state_45515;
(statearr_45606[(21)] = inst_45419);

(statearr_45606[(40)] = inst_45420);

(statearr_45606[(23)] = inst_45417__$1);

(statearr_45606[(49)] = inst_45421);

(statearr_45606[(24)] = inst_45418);

return statearr_45606;
})();
if(cljs.core.truth_(inst_45417__$1)){
var statearr_45607_47383 = state_45515__$1;
(statearr_45607_47383[(1)] = (101));

} else {
var statearr_45608_47385 = state_45515__$1;
(statearr_45608_47385[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (131))){
var state_45515__$1 = state_45515;
var statearr_45609_47394 = state_45515__$1;
(statearr_45609_47394[(2)] = null);

(statearr_45609_47394[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (122))){
var inst_45453 = (state_45515[(7)]);
var state_45515__$1 = state_45515;
var statearr_45610_47395 = state_45515__$1;
(statearr_45610_47395[(2)] = inst_45453);

(statearr_45610_47395[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (43))){
var inst_45245 = (state_45515[(50)]);
var inst_45155 = (state_45515[(51)]);
var inst_45249 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45245,new cljs.core.Keyword(null,"query","query",-1288509510),inst_45155);
var state_45515__$1 = state_45515;
var statearr_45611_47397 = state_45515__$1;
(statearr_45611_47397[(2)] = inst_45249);

(statearr_45611_47397[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (61))){
var state_45515__$1 = state_45515;
var statearr_45612_47398 = state_45515__$1;
(statearr_45612_47398[(2)] = null);

(statearr_45612_47398[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (29))){
var state_45515__$1 = state_45515;
var statearr_45613_47400 = state_45515__$1;
(statearr_45613_47400[(2)] = false);

(statearr_45613_47400[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (44))){
var inst_45245 = (state_45515[(50)]);
var state_45515__$1 = state_45515;
var statearr_45614_47401 = state_45515__$1;
(statearr_45614_47401[(2)] = inst_45245);

(statearr_45614_47401[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (93))){
var state_45515__$1 = state_45515;
var statearr_45615_47403 = state_45515__$1;
(statearr_45615_47403[(2)] = false);

(statearr_45615_47403[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (6))){
var inst_45324 = (state_45515[(16)]);
var inst_45324__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_45326 = (inst_45324__$1 == null);
var inst_45327 = cljs.core.not(inst_45326);
var state_45515__$1 = (function (){var statearr_45616 = state_45515;
(statearr_45616[(16)] = inst_45324__$1);

return statearr_45616;
})();
if(inst_45327){
var statearr_45617_47405 = state_45515__$1;
(statearr_45617_47405[(1)] = (72));

} else {
var statearr_45618_47407 = state_45515__$1;
(statearr_45618_47407[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (111))){
var state_45515__$1 = state_45515;
if(cljs.core.truth_(mutate)){
var statearr_45619_47409 = state_45515__$1;
(statearr_45619_47409[(1)] = (112));

} else {
var statearr_45620_47410 = state_45515__$1;
(statearr_45620_47410[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (28))){
var inst_45203 = (state_45515[(52)]);
var inst_45209 = inst_45203.cljs$lang$protocol_mask$partition0$;
var inst_45210 = (inst_45209 & (64));
var inst_45211 = inst_45203.cljs$core$ISeq$;
var inst_45212 = (cljs.core.PROTOCOL_SENTINEL === inst_45211);
var inst_45213 = ((inst_45210) || (inst_45212));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45213)){
var statearr_45621_47412 = state_45515__$1;
(statearr_45621_47412[(1)] = (31));

} else {
var statearr_45622_47413 = state_45515__$1;
(statearr_45622_47413[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (134))){
var inst_45387 = (state_45515[(28)]);
var inst_45396 = (state_45515[(39)]);
var inst_45417 = (state_45515[(23)]);
var inst_45501 = (state_45515[(2)]);
var inst_45502 = com.wsscode.pathom.parser.ast__GT_out_key(inst_45417);
var inst_45503 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45387,inst_45502,inst_45501);
var inst_45387__$1 = inst_45503;
var inst_45388 = inst_45396;
var state_45515__$1 = (function (){var statearr_45623 = state_45515;
(statearr_45623[(28)] = inst_45387__$1);

(statearr_45623[(38)] = inst_45388);

return statearr_45623;
})();
var statearr_45624_47417 = state_45515__$1;
(statearr_45624_47417[(2)] = null);

(statearr_45624_47417[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (64))){
var state_45515__$1 = state_45515;
var statearr_45625_47418 = state_45515__$1;
(statearr_45625_47418[(2)] = null);

(statearr_45625_47418[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (103))){
var inst_45507 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45626_47419 = state_45515__$1;
(statearr_45626_47419[(2)] = inst_45507);

(statearr_45626_47419[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (51))){
var inst_45261 = (state_45515[(17)]);
var inst_45266 = inst_45261.cljs$lang$protocol_mask$partition0$;
var inst_45267 = (inst_45266 & (64));
var inst_45268 = inst_45261.cljs$core$ISeq$;
var inst_45269 = (cljs.core.PROTOCOL_SENTINEL === inst_45268);
var inst_45270 = ((inst_45267) || (inst_45269));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45270)){
var statearr_45627_47420 = state_45515__$1;
(statearr_45627_47420[(1)] = (54));

} else {
var statearr_45628_47421 = state_45515__$1;
(statearr_45628_47421[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (25))){
var inst_45154 = (state_45515[(53)]);
var inst_45166 = (state_45515[(54)]);
var inst_45190 = (state_45515[(2)]);
var inst_45191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45190,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45190,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45190,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45190,new cljs.core.Keyword(null,"params","params",710516235));
var inst_45195 = inst_45166;
var inst_45196 = inst_45154;
var state_45515__$1 = (function (){var statearr_45629 = state_45515;
(statearr_45629[(55)] = inst_45191);

(statearr_45629[(56)] = inst_45193);

(statearr_45629[(11)] = inst_45196);

(statearr_45629[(57)] = inst_45194);

(statearr_45629[(10)] = inst_45195);

(statearr_45629[(58)] = inst_45192);

return statearr_45629;
})();
var statearr_45630_47422 = state_45515__$1;
(statearr_45630_47422[(2)] = null);

(statearr_45630_47422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (34))){
var inst_45203 = (state_45515[(52)]);
var inst_45222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45203);
var state_45515__$1 = state_45515;
var statearr_45631_47426 = state_45515__$1;
(statearr_45631_47426[(2)] = inst_45222);

(statearr_45631_47426[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (125))){
var state_45515__$1 = state_45515;
var statearr_45632_47427 = state_45515__$1;
(statearr_45632_47427[(2)] = null);

(statearr_45632_47427[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (17))){
var inst_45168 = (state_45515[(27)]);
var inst_45174 = inst_45168.cljs$lang$protocol_mask$partition0$;
var inst_45175 = (inst_45174 & (64));
var inst_45176 = inst_45168.cljs$core$ISeq$;
var inst_45177 = (cljs.core.PROTOCOL_SENTINEL === inst_45176);
var inst_45178 = ((inst_45175) || (inst_45177));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45178)){
var statearr_45633_47428 = state_45515__$1;
(statearr_45633_47428[(1)] = (20));

} else {
var statearr_45634_47429 = state_45515__$1;
(statearr_45634_47429[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (3))){
var inst_45121 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45635_47431 = state_45515__$1;
(statearr_45635_47431[(2)] = inst_45121);


cljs.core.async.impl.ioc_helpers.process_exception(state_45515__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (12))){
var state_45515__$1 = state_45515;
var statearr_45636_47432 = state_45515__$1;
(statearr_45636_47432[(2)] = false);

(statearr_45636_47432[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (2))){
var inst_45513 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45515__$1,inst_45513);
} else {
if((state_val_45516 === (66))){
var inst_45252 = (state_45515[(34)]);
var inst_45296 = (state_45515[(2)]);
var inst_45297 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_45252) : read.call(null,inst_45252));
var state_45515__$1 = (function (){var statearr_45637 = state_45515;
(statearr_45637[(59)] = inst_45296);

return statearr_45637;
})();
var statearr_45638_47433 = state_45515__$1;
(statearr_45638_47433[(2)] = inst_45297);

(statearr_45638_47433[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (107))){
var inst_45437 = (state_45515[(30)]);
var inst_45347 = (state_45515[(60)]);
var inst_45441 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45437,new cljs.core.Keyword(null,"query","query",-1288509510),inst_45347);
var state_45515__$1 = state_45515;
var statearr_45639_47437 = state_45515__$1;
(statearr_45639_47437[(2)] = inst_45441);

(statearr_45639_47437[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (23))){
var inst_45168 = (state_45515[(27)]);
var inst_45187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45168);
var state_45515__$1 = state_45515;
var statearr_45640_47439 = state_45515__$1;
(statearr_45640_47439[(2)] = inst_45187);

(statearr_45640_47439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (47))){
var state_45515__$1 = state_45515;
if(cljs.core.truth_(mutate)){
var statearr_45641_47440 = state_45515__$1;
(statearr_45641_47440[(1)] = (48));

} else {
var statearr_45642_47441 = state_45515__$1;
(statearr_45642_47441[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (35))){
var inst_45203 = (state_45515[(52)]);
var state_45515__$1 = state_45515;
var statearr_45643_47442 = state_45515__$1;
(statearr_45643_47442[(2)] = inst_45203);

(statearr_45643_47442[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (127))){
var state_45515__$1 = state_45515;
if(cljs.core.truth_(read)){
var statearr_45644_47444 = state_45515__$1;
(statearr_45644_47444[(1)] = (128));

} else {
var statearr_45645_47445 = state_45515__$1;
(statearr_45645_47445[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (82))){
var state_45515__$1 = state_45515;
var statearr_45646_47446 = state_45515__$1;
(statearr_45646_47446[(2)] = false);

(statearr_45646_47446[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (76))){
var state_45515__$1 = state_45515;
var statearr_45647_47447 = state_45515__$1;
(statearr_45647_47447[(2)] = false);

(statearr_45647_47447[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (97))){
var inst_45409 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45648_47448 = state_45515__$1;
(statearr_45648_47448[(2)] = inst_45409);

(statearr_45648_47448[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (19))){
var inst_45185 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45185)){
var statearr_45649_47449 = state_45515__$1;
(statearr_45649_47449[(1)] = (23));

} else {
var statearr_45650_47450 = state_45515__$1;
(statearr_45650_47450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (57))){
var inst_45261 = (state_45515[(17)]);
var inst_45279 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45261);
var state_45515__$1 = state_45515;
var statearr_45651_47451 = state_45515__$1;
(statearr_45651_47451[(2)] = inst_45279);

(statearr_45651_47451[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (68))){
var inst_45301 = (state_45515[(20)]);
var state_45515__$1 = state_45515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45515__$1,(71),inst_45301);
} else {
if((state_val_45516 === (11))){
var state_45515__$1 = state_45515;
var statearr_45652_47456 = state_45515__$1;
(statearr_45652_47456[(2)] = true);

(statearr_45652_47456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (115))){
var inst_45453 = (state_45515[(7)]);
var inst_45458 = inst_45453.cljs$lang$protocol_mask$partition0$;
var inst_45459 = (inst_45458 & (64));
var inst_45460 = inst_45453.cljs$core$ISeq$;
var inst_45461 = (cljs.core.PROTOCOL_SENTINEL === inst_45460);
var inst_45462 = ((inst_45459) || (inst_45461));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45462)){
var statearr_45653_47458 = state_45515__$1;
(statearr_45653_47458[(1)] = (118));

} else {
var statearr_45654_47459 = state_45515__$1;
(statearr_45654_47459[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (9))){
var state_45515__$1 = state_45515;
var statearr_45655_47460 = state_45515__$1;
(statearr_45655_47460[(2)] = false);

(statearr_45655_47460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (5))){
var inst_45132 = (state_45515[(32)]);
var inst_45127 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_45128 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_45129 = cljs.core.PersistentHashMap.fromArrays(inst_45127,inst_45128);
var inst_45130 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_45129);
var inst_45132__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_45134 = (inst_45132__$1 == null);
var inst_45135 = cljs.core.not(inst_45134);
var state_45515__$1 = (function (){var statearr_45656 = state_45515;
(statearr_45656[(32)] = inst_45132__$1);

(statearr_45656[(18)] = inst_45130);

return statearr_45656;
})();
if(inst_45135){
var statearr_45657_47462 = state_45515__$1;
(statearr_45657_47462[(1)] = (8));

} else {
var statearr_45658_47464 = state_45515__$1;
(statearr_45658_47464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (112))){
var state_45515__$1 = state_45515;
var statearr_45659_47465 = state_45515__$1;
(statearr_45659_47465[(2)] = null);

(statearr_45659_47465[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (83))){
var inst_45377 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45377)){
var statearr_45660_47466 = state_45515__$1;
(statearr_45660_47466[(1)] = (87));

} else {
var statearr_45661_47467 = state_45515__$1;
(statearr_45661_47467[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (14))){
var inst_45132 = (state_45515[(32)]);
var inst_45150 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45132);
var state_45515__$1 = state_45515;
var statearr_45662_47471 = state_45515__$1;
(statearr_45662_47471[(2)] = inst_45150);

(statearr_45662_47471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (45))){
var inst_45228 = (state_45515[(41)]);
var inst_45252 = (state_45515[(2)]);
var state_45515__$1 = (function (){var statearr_45663 = state_45515;
(statearr_45663[(34)] = inst_45252);

return statearr_45663;
})();
var G__45664_47472 = inst_45228;
var G__45664_47473__$1 = (((G__45664_47472 instanceof cljs.core.Keyword))?G__45664_47472.fqn:null);
switch (G__45664_47473__$1) {
case "call":
var statearr_45665_47475 = state_45515__$1;
(statearr_45665_47475[(1)] = (47));


break;
case "prop":
case "join":
case "union":
var statearr_45666_47476 = state_45515__$1;
(statearr_45666_47476[(1)] = (63));


break;
default:
var statearr_45667_47477 = state_45515__$1;
(statearr_45667_47477[(1)] = (67));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (53))){
var inst_45277 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45277)){
var statearr_45668_47480 = state_45515__$1;
(statearr_45668_47480[(1)] = (57));

} else {
var statearr_45669_47482 = state_45515__$1;
(statearr_45669_47482[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (78))){
var inst_45324 = (state_45515[(16)]);
var inst_45342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45324);
var state_45515__$1 = state_45515;
var statearr_45670_47483 = state_45515__$1;
(statearr_45670_47483[(2)] = inst_45342);

(statearr_45670_47483[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (132))){
var inst_45493 = (state_45515[(12)]);
var state_45515__$1 = state_45515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45515__$1,(135),inst_45493);
} else {
if((state_val_45516 === (26))){
var inst_45196 = (state_45515[(11)]);
var inst_45203 = (state_45515[(52)]);
var inst_45202 = cljs.core.seq(inst_45196);
var inst_45203__$1 = cljs.core.first(inst_45202);
var inst_45204 = cljs.core.next(inst_45202);
var inst_45206 = (inst_45203__$1 == null);
var inst_45207 = cljs.core.not(inst_45206);
var state_45515__$1 = (function (){var statearr_45671 = state_45515;
(statearr_45671[(8)] = inst_45204);

(statearr_45671[(52)] = inst_45203__$1);

return statearr_45671;
})();
if(inst_45207){
var statearr_45672_47485 = state_45515__$1;
(statearr_45672_47485[(1)] = (28));

} else {
var statearr_45673_47486 = state_45515__$1;
(statearr_45673_47486[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (123))){
var inst_45475 = (state_45515[(61)]);
var inst_45474 = (state_45515[(2)]);
var inst_45475__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45474,new cljs.core.Keyword(null,"action","action",-811238024));
var state_45515__$1 = (function (){var statearr_45674 = state_45515;
(statearr_45674[(61)] = inst_45475__$1);

return statearr_45674;
})();
if(cljs.core.truth_(inst_45475__$1)){
var statearr_45675_47488 = state_45515__$1;
(statearr_45675_47488[(1)] = (124));

} else {
var statearr_45676_47489 = state_45515__$1;
(statearr_45676_47489[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (16))){
var inst_45168 = (state_45515[(27)]);
var inst_45154 = (state_45515[(53)]);
var inst_45153 = (state_45515[(2)]);
var inst_45154__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45153,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_45155 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_45153);
var inst_45156 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_45166 = cljs.core.PersistentHashMap.EMPTY;
var inst_45167 = cljs.core.seq(inst_45154__$1);
var inst_45168__$1 = cljs.core.first(inst_45167);
var inst_45169 = cljs.core.next(inst_45167);
var inst_45171 = (inst_45168__$1 == null);
var inst_45172 = cljs.core.not(inst_45171);
var state_45515__$1 = (function (){var statearr_45677 = state_45515;
(statearr_45677[(62)] = inst_45169);

(statearr_45677[(27)] = inst_45168__$1);

(statearr_45677[(63)] = inst_45156);

(statearr_45677[(53)] = inst_45154__$1);

(statearr_45677[(54)] = inst_45166);

(statearr_45677[(51)] = inst_45155);

return statearr_45677;
})();
if(inst_45172){
var statearr_45678_47494 = state_45515__$1;
(statearr_45678_47494[(1)] = (17));

} else {
var statearr_45679_47499 = state_45515__$1;
(statearr_45679_47499[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (133))){
var inst_45493 = (state_45515[(12)]);
var state_45515__$1 = state_45515;
var statearr_45680_47510 = state_45515__$1;
(statearr_45680_47510[(2)] = inst_45493);

(statearr_45680_47510[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (81))){
var inst_45360 = (state_45515[(29)]);
var inst_45366 = inst_45360.cljs$lang$protocol_mask$partition0$;
var inst_45367 = (inst_45366 & (64));
var inst_45368 = inst_45360.cljs$core$ISeq$;
var inst_45369 = (cljs.core.PROTOCOL_SENTINEL === inst_45368);
var inst_45370 = ((inst_45367) || (inst_45369));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45370)){
var statearr_45681_47511 = state_45515__$1;
(statearr_45681_47511[(1)] = (84));

} else {
var statearr_45682_47513 = state_45515__$1;
(statearr_45682_47513[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (120))){
var inst_45466 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45683_47514 = state_45515__$1;
(statearr_45683_47514[(2)] = inst_45466);

(statearr_45683_47514[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (79))){
var inst_45324 = (state_45515[(16)]);
var state_45515__$1 = state_45515;
var statearr_45684_47515 = state_45515__$1;
(statearr_45684_47515[(2)] = inst_45324);

(statearr_45684_47515[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (38))){
var inst_45195 = (state_45515[(10)]);
var state_45515__$1 = state_45515;
var statearr_45685_47517 = state_45515__$1;
(statearr_45685_47517[(2)] = inst_45195);

(statearr_45685_47517[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (126))){
var inst_45480 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
var statearr_45686_47518 = state_45515__$1;
(statearr_45686_47518[(2)] = inst_45480);

(statearr_45686_47518[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (98))){
var inst_45395 = (state_45515[(31)]);
var inst_45414 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45395);
var state_45515__$1 = state_45515;
var statearr_45687_47520 = state_45515__$1;
(statearr_45687_47520[(2)] = inst_45414);

(statearr_45687_47520[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (124))){
var inst_45475 = (state_45515[(61)]);
var inst_45477 = (inst_45475.cljs$core$IFn$_invoke$arity$0 ? inst_45475.cljs$core$IFn$_invoke$arity$0() : inst_45475.call(null));
var state_45515__$1 = state_45515;
var statearr_45688_47522 = state_45515__$1;
(statearr_45688_47522[(2)] = inst_45477);

(statearr_45688_47522[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (87))){
var inst_45360 = (state_45515[(29)]);
var inst_45379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45360);
var state_45515__$1 = state_45515;
var statearr_45689_47525 = state_45515__$1;
(statearr_45689_47525[(2)] = inst_45379);

(statearr_45689_47525[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (30))){
var inst_45220 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45220)){
var statearr_45690_47527 = state_45515__$1;
(statearr_45690_47527[(1)] = (34));

} else {
var statearr_45691_47528 = state_45515__$1;
(statearr_45691_47528[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (73))){
var state_45515__$1 = state_45515;
var statearr_45692_47529 = state_45515__$1;
(statearr_45692_47529[(2)] = false);

(statearr_45692_47529[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (96))){
var state_45515__$1 = state_45515;
var statearr_45693_47531 = state_45515__$1;
(statearr_45693_47531[(2)] = false);

(statearr_45693_47531[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (10))){
var inst_45148 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45148)){
var statearr_45694_47532 = state_45515__$1;
(statearr_45694_47532[(1)] = (14));

} else {
var statearr_45695_47533 = state_45515__$1;
(statearr_45695_47533[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (18))){
var state_45515__$1 = state_45515;
var statearr_45696_47535 = state_45515__$1;
(statearr_45696_47535[(2)] = false);

(statearr_45696_47535[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (105))){
var inst_45431 = (state_45515[(26)]);
var state_45515__$1 = state_45515;
var statearr_45697_47538 = state_45515__$1;
(statearr_45697_47538[(2)] = inst_45431);

(statearr_45697_47538[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (52))){
var state_45515__$1 = state_45515;
var statearr_45698_47539 = state_45515__$1;
(statearr_45698_47539[(2)] = false);

(statearr_45698_47539[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (114))){
var inst_45419 = (state_45515[(21)]);
var inst_45444 = (state_45515[(13)]);
var inst_45453 = (state_45515[(7)]);
var inst_45421 = (state_45515[(49)]);
var inst_45451 = (state_45515[(2)]);
var inst_45453__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_45444,inst_45419,inst_45421) : mutate.call(null,inst_45444,inst_45419,inst_45421));
var inst_45455 = (inst_45453__$1 == null);
var inst_45456 = cljs.core.not(inst_45455);
var state_45515__$1 = (function (){var statearr_45699 = state_45515;
(statearr_45699[(64)] = inst_45451);

(statearr_45699[(7)] = inst_45453__$1);

return statearr_45699;
})();
if(inst_45456){
var statearr_45700_47576 = state_45515__$1;
(statearr_45700_47576[(1)] = (115));

} else {
var statearr_45701_47581 = state_45515__$1;
(statearr_45701_47581[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (67))){
var state_45515__$1 = state_45515;
var statearr_45702_47585 = state_45515__$1;
(statearr_45702_47585[(2)] = null);

(statearr_45702_47585[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (71))){
var inst_45305 = (state_45515[(2)]);
var inst_45306 = com.wsscode.common.async_cljs.throw_err(inst_45305);
var state_45515__$1 = state_45515;
var statearr_45703_47599 = state_45515__$1;
(statearr_45703_47599[(2)] = inst_45306);

(statearr_45703_47599[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (42))){
var inst_45226 = (state_45515[(42)]);
var inst_45245 = (state_45515[(2)]);
var inst_45246 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_45247 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45246,inst_45226);
var state_45515__$1 = (function (){var statearr_45704 = state_45515;
(statearr_45704[(50)] = inst_45245);

return statearr_45704;
})();
if(inst_45247){
var statearr_45705_47627 = state_45515__$1;
(statearr_45705_47627[(1)] = (43));

} else {
var statearr_45706_47628 = state_45515__$1;
(statearr_45706_47628[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (80))){
var inst_45360 = (state_45515[(29)]);
var inst_45346 = (state_45515[(44)]);
var inst_45345 = (state_45515[(2)]);
var inst_45346__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45345,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_45347 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_45345);
var inst_45348 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_45358 = cljs.core.PersistentHashMap.EMPTY;
var inst_45359 = cljs.core.seq(inst_45346__$1);
var inst_45360__$1 = cljs.core.first(inst_45359);
var inst_45361 = cljs.core.next(inst_45359);
var inst_45363 = (inst_45360__$1 == null);
var inst_45364 = cljs.core.not(inst_45363);
var state_45515__$1 = (function (){var statearr_45707 = state_45515;
(statearr_45707[(65)] = inst_45361);

(statearr_45707[(22)] = inst_45348);

(statearr_45707[(60)] = inst_45347);

(statearr_45707[(29)] = inst_45360__$1);

(statearr_45707[(43)] = inst_45358);

(statearr_45707[(44)] = inst_45346__$1);

return statearr_45707;
})();
if(inst_45364){
var statearr_45708_47644 = state_45515__$1;
(statearr_45708_47644[(1)] = (81));

} else {
var statearr_45709_47645 = state_45515__$1;
(statearr_45709_47645[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (37))){
var inst_45225 = (state_45515[(9)]);
var inst_45226 = (state_45515[(42)]);
var inst_45227 = (state_45515[(35)]);
var inst_45156 = (state_45515[(63)]);
var inst_45231 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45232 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_45227];
var inst_45233 = cljs.core.PersistentHashMap.fromArrays(inst_45231,inst_45232);
var inst_45234 = com.wsscode.pathom.trace.trace(inst_45156,inst_45233);
var inst_45236 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_45237 = [inst_45225,inst_45226];
var inst_45238 = cljs.core.PersistentHashMap.fromArrays(inst_45236,inst_45237);
var inst_45239 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45156,inst_45238], 0));
var inst_45240 = (inst_45226 == null);
var state_45515__$1 = (function (){var statearr_45710 = state_45515;
(statearr_45710[(66)] = inst_45234);

(statearr_45710[(37)] = inst_45239);

return statearr_45710;
})();
if(cljs.core.truth_(inst_45240)){
var statearr_45711_47650 = state_45515__$1;
(statearr_45711_47650[(1)] = (40));

} else {
var statearr_45712_47651 = state_45515__$1;
(statearr_45712_47651[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (63))){
var state_45515__$1 = state_45515;
if(cljs.core.truth_(read)){
var statearr_45713_47652 = state_45515__$1;
(statearr_45713_47652[(1)] = (64));

} else {
var statearr_45714_47653 = state_45515__$1;
(statearr_45714_47653[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (94))){
var inst_45412 = (state_45515[(2)]);
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45412)){
var statearr_45715_47655 = state_45515__$1;
(statearr_45715_47655[(1)] = (98));

} else {
var statearr_45716_47656 = state_45515__$1;
(statearr_45716_47656[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (8))){
var inst_45132 = (state_45515[(32)]);
var inst_45137 = inst_45132.cljs$lang$protocol_mask$partition0$;
var inst_45138 = (inst_45137 & (64));
var inst_45139 = inst_45132.cljs$core$ISeq$;
var inst_45140 = (cljs.core.PROTOCOL_SENTINEL === inst_45139);
var inst_45141 = ((inst_45138) || (inst_45140));
var state_45515__$1 = state_45515;
if(cljs.core.truth_(inst_45141)){
var statearr_45717_47664 = state_45515__$1;
(statearr_45717_47664[(1)] = (11));

} else {
var statearr_45718_47668 = state_45515__$1;
(statearr_45718_47668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (49))){
var inst_45255 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_45256 = (new Error(inst_45255));
var inst_45257 = (function(){throw inst_45256})();
var state_45515__$1 = state_45515;
var statearr_45719_47687 = state_45515__$1;
(statearr_45719_47687[(2)] = inst_45257);

(statearr_45719_47687[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45516 === (84))){
var state_45515__$1 = state_45515;
var statearr_45720_47694 = state_45515__$1;
(statearr_45720_47694[(2)] = true);

(statearr_45720_47694[(1)] = (86));


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
});})(c__38971__auto__,map__45119,map__45119__$1,read,mutate))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__45119,map__45119__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto____0 = (function (){
var statearr_45721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45721[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto__);

(statearr_45721[(1)] = (1));

return statearr_45721;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto____1 = (function (state_45515){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_45515);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e45722){if((e45722 instanceof Object)){
var ex__38928__auto__ = e45722;
var statearr_45723_47714 = state_45515;
(statearr_45723_47714[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47716 = state_45515;
state_45515 = G__47716;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto__ = function(state_45515){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto____1.call(this,state_45515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__45119,map__45119__$1,read,mutate))
})();
var state__38973__auto__ = (function (){var statearr_45724 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_45724[(6)] = c__38971__auto__);

return statearr_45724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__45119,map__45119__$1,read,mutate))
);

return c__38971__auto__;
});
;})(map__45119,map__45119__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__45725,key){
var map__45726 = p__45725;
var map__45726__$1 = (((((!((map__45726 == null))))?(((((map__45726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45726):map__45726);
var env = map__45726__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45726__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45726__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__38971__auto___47722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto___47722,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto___47722,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_45750){
var state_val_45751 = (state_45750[(1)]);
if((state_val_45751 === (1))){
var inst_45728 = cljs.core.async.timeout((1));
var state_45750__$1 = state_45750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45750__$1,(2),inst_45728);
} else {
if((state_val_45751 === (2))){
var inst_45730 = (state_45750[(2)]);
var inst_45731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_45732 = cljs.core.deref(inst_45731);
var inst_45733 = cljs.core.contains_QMARK_(inst_45732,key);
var state_45750__$1 = (function (){var statearr_45752 = state_45750;
(statearr_45752[(7)] = inst_45730);

return statearr_45752;
})();
if(inst_45733){
var statearr_45753_47727 = state_45750__$1;
(statearr_45753_47727[(1)] = (3));

} else {
var statearr_45754_47729 = state_45750__$1;
(statearr_45754_47729[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45751 === (3))){
var inst_45735 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45736 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_45737 = cljs.core.PersistentHashMap.fromArrays(inst_45735,inst_45736);
var inst_45738 = com.wsscode.pathom.trace.trace(env,inst_45737);
var inst_45739 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_45740 = [key];
var inst_45741 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_45740);
var inst_45742 = [inst_45741];
var inst_45743 = cljs.core.PersistentHashMap.fromArrays(inst_45739,inst_45742);
var inst_45744 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_45743);
var inst_45745 = cljs.core.async.close_BANG_(ch);
var state_45750__$1 = (function (){var statearr_45755 = state_45750;
(statearr_45755[(8)] = inst_45738);

(statearr_45755[(9)] = inst_45744);

return statearr_45755;
})();
var statearr_45756_47734 = state_45750__$1;
(statearr_45756_47734[(2)] = inst_45745);

(statearr_45756_47734[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45751 === (4))){
var state_45750__$1 = state_45750;
var statearr_45757_47735 = state_45750__$1;
(statearr_45757_47735[(2)] = null);

(statearr_45757_47735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45751 === (5))){
var inst_45748 = (state_45750[(2)]);
var state_45750__$1 = state_45750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45750__$1,inst_45748);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto___47722,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__38924__auto__,c__38971__auto___47722,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____0 = (function (){
var statearr_45758 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45758[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__);

(statearr_45758[(1)] = (1));

return statearr_45758;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____1 = (function (state_45750){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_45750);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e45759){if((e45759 instanceof Object)){
var ex__38928__auto__ = e45759;
var statearr_45760_47738 = state_45750;
(statearr_45760_47738[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45759;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47739 = state_45750;
state_45750 = G__47739;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__ = function(state_45750){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____1.call(this,state_45750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto___47722,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__38973__auto__ = (function (){var statearr_45761 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_45761[(6)] = c__38971__auto___47722);

return statearr_45761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto___47722,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout))
);


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_45787){
var state_val_45788 = (state_45787[(1)]);
if((state_val_45788 === (1))){
var inst_45765 = (state_45787[(7)]);
var inst_45765__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_45766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45767 = [ch,inst_45765__$1];
var inst_45768 = (new cljs.core.PersistentVector(null,2,(5),inst_45766,inst_45767,null));
var state_45787__$1 = (function (){var statearr_45789 = state_45787;
(statearr_45789[(7)] = inst_45765__$1);

return statearr_45789;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_45787__$1,(2),inst_45768,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_45788 === (2))){
var inst_45765 = (state_45787[(7)]);
var inst_45770 = (state_45787[(2)]);
var inst_45771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45770,(0),null);
var inst_45772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45770,(1),null);
var inst_45773 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45772,inst_45765);
var state_45787__$1 = (function (){var statearr_45790 = state_45787;
(statearr_45790[(8)] = inst_45771);

return statearr_45790;
})();
if(inst_45773){
var statearr_45791_47749 = state_45787__$1;
(statearr_45791_47749[(1)] = (3));

} else {
var statearr_45792_47750 = state_45787__$1;
(statearr_45792_47750[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45788 === (3))){
var inst_45775 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_45776 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_45777 = cljs.core.PersistentHashMap.fromArrays(inst_45775,inst_45776);
var inst_45778 = com.wsscode.pathom.trace.trace(env,inst_45777);
var inst_45779 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_45780 = cljs.core.PersistentHashSet.EMPTY;
var inst_45781 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_45780];
var inst_45782 = cljs.core.PersistentHashMap.fromArrays(inst_45779,inst_45781);
var state_45787__$1 = (function (){var statearr_45793 = state_45787;
(statearr_45793[(9)] = inst_45778);

return statearr_45793;
})();
var statearr_45794_47757 = state_45787__$1;
(statearr_45794_47757[(2)] = inst_45782);

(statearr_45794_47757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45788 === (4))){
var inst_45771 = (state_45787[(8)]);
var state_45787__$1 = state_45787;
var statearr_45795_47758 = state_45787__$1;
(statearr_45795_47758[(2)] = inst_45771);

(statearr_45795_47758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45788 === (5))){
var inst_45785 = (state_45787[(2)]);
var state_45787__$1 = state_45787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45787__$1,inst_45785);
} else {
return null;
}
}
}
}
}
});})(c__38971__auto__,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__38924__auto__,c__38971__auto__,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____0 = (function (){
var statearr_45796 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45796[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__);

(statearr_45796[(1)] = (1));

return statearr_45796;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____1 = (function (state_45787){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_45787);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e45797){if((e45797 instanceof Object)){
var ex__38928__auto__ = e45797;
var statearr_45798_47765 = state_45787;
(statearr_45798_47765[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47769 = state_45787;
state_45787 = G__47769;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__ = function(state_45787){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____1.call(this,state_45787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__38973__auto__ = (function (){var statearr_45799 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_45799[(6)] = c__38971__auto__);

return statearr_45799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,ch,map__45726,map__45726__$1,env,key_watchers,external_wait_ignore_timeout))
);

return c__38971__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__45800,e){
var map__45801 = p__45800;
var map__45801__$1 = (((((!((map__45801 == null))))?(((((map__45801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45801):map__45801);
var env = map__45801__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45801__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__45803 = ast;
var map__45803__$1 = (((((!((map__45803 == null))))?(((((map__45803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45803):map__45803);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45803__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__45805 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__45805__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45805,new cljs.core.Keyword(null,"query","query",-1288509510)):G__45805);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45805__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__45805__$1;
}
})();
var value = (function (){var G__45806 = type;
var G__45806__$1 = (((G__45806 instanceof cljs.core.Keyword))?G__45806.fqn:null);
switch (G__45806__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__45807 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__45807__$1 = (((((!((map__45807 == null))))?(((((map__45807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45807):map__45807);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45807__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__45807,map__45807__$1,action,G__45806,G__45806__$1,map__45803,map__45803__$1,query,key,type,params,env__$1){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__45807,map__45807__$1,action,G__45806,G__45806__$1,map__45803,map__45803__$1,query,key,type,params,env__$1){
return (function (state_45833){
var state_val_45834 = (state_45833[(1)]);
if((state_val_45834 === (1))){
var state_45833__$1 = state_45833;
var statearr_45835_47783 = state_45833__$1;
(statearr_45835_47783[(2)] = null);

(statearr_45835_47783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (2))){
var inst_45831 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45833__$1,inst_45831);
} else {
if((state_val_45834 === (3))){
var inst_45809 = (state_45833[(2)]);
var inst_45810 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_45811 = com.wsscode.pathom.parser.process_error(env__$1,inst_45809);
var inst_45812 = [inst_45811];
var inst_45813 = cljs.core.PersistentHashMap.fromArrays(inst_45810,inst_45812);
var state_45833__$1 = state_45833;
var statearr_45836_47787 = state_45833__$1;
(statearr_45836_47787[(2)] = inst_45813);


cljs.core.async.impl.ioc_helpers.process_exception(state_45833__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (4))){
var inst_45821 = (state_45833[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45833,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_45817 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_45818 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_45819 = cljs.core.PersistentHashMap.fromArrays(inst_45817,inst_45818);
var inst_45820 = com.wsscode.pathom.trace.trace(env__$1,inst_45819);
var inst_45821__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_45822 = com.wsscode.common.async_cljs.chan_QMARK_(inst_45821__$1);
var state_45833__$1 = (function (){var statearr_45837 = state_45833;
(statearr_45837[(8)] = inst_45820);

(statearr_45837[(7)] = inst_45821__$1);

return statearr_45837;
})();
if(inst_45822){
var statearr_45838_47791 = state_45833__$1;
(statearr_45838_47791[(1)] = (5));

} else {
var statearr_45839_47792 = state_45833__$1;
(statearr_45839_47792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (5))){
var inst_45821 = (state_45833[(7)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45833__$1,(8),inst_45821);
} else {
if((state_val_45834 === (6))){
var inst_45821 = (state_45833[(7)]);
var state_45833__$1 = state_45833;
var statearr_45840_47796 = state_45833__$1;
(statearr_45840_47796[(2)] = inst_45821);

(statearr_45840_47796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (7))){
var inst_45829 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45841_47800 = state_45833__$1;
(statearr_45841_47800[(2)] = inst_45829);


cljs.core.async.impl.ioc_helpers.process_exception(state_45833__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (8))){
var inst_45825 = (state_45833[(2)]);
var inst_45826 = com.wsscode.common.async_cljs.throw_err(inst_45825);
var state_45833__$1 = state_45833;
var statearr_45842_47801 = state_45833__$1;
(statearr_45842_47801[(2)] = inst_45826);

(statearr_45842_47801[(1)] = (7));


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
});})(c__38971__auto__,map__45807,map__45807__$1,action,G__45806,G__45806__$1,map__45803,map__45803__$1,query,key,type,params,env__$1))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__45807,map__45807__$1,action,G__45806,G__45806__$1,map__45803,map__45803__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____0 = (function (){
var statearr_45843 = [null,null,null,null,null,null,null,null,null];
(statearr_45843[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__);

(statearr_45843[(1)] = (1));

return statearr_45843;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____1 = (function (state_45833){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_45833);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e45844){if((e45844 instanceof Object)){
var ex__38928__auto__ = e45844;
var statearr_45845_47805 = state_45833;
(statearr_45845_47805[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47809 = state_45833;
state_45833 = G__47809;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__ = function(state_45833){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____1.call(this,state_45833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__45807,map__45807__$1,action,G__45806,G__45806__$1,map__45803,map__45803__$1,query,key,type,params,env__$1))
})();
var state__38973__auto__ = (function (){var statearr_45846 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_45846[(6)] = c__38971__auto__);

return statearr_45846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__45807,map__45807__$1,action,G__45806,G__45806__$1,map__45803,map__45803__$1,query,key,type,params,env__$1))
);

return c__38971__auto__;
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
var trace_id__21490__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
var res__21491__auto__ = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env__$1,trace_id__21490__auto__,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","call-read","com.wsscode.pathom.parser/call-read",-877907284),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return res__21491__auto__;
} else {
return (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(env__$1) : read.call(null,env__$1));
}

break;
default:
return null;

}
})();
if(com.wsscode.common.async_cljs.chan_QMARK_(value)){
var provides = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
var stream = (function (){var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,provides,map__45803,map__45803__$1,query,key,type,params,env__$1,value){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,provides,map__45803,map__45803__$1,query,key,type,params,env__$1,value){
return (function (state_45857){
var state_val_45858 = (state_45857[(1)]);
if((state_val_45858 === (1))){
var inst_45847 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_45848 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_45857__$1 = (function (){var statearr_45859 = state_45857;
(statearr_45859[(7)] = inst_45847);

(statearr_45859[(8)] = inst_45848);

return statearr_45859;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45857__$1,(2),value);
} else {
if((state_val_45858 === (2))){
var inst_45847 = (state_45857[(7)]);
var inst_45848 = (state_45857[(8)]);
var inst_45850 = (state_45857[(2)]);
var inst_45851 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_45852 = [inst_45850,inst_45851];
var inst_45853 = cljs.core.PersistentHashMap.fromArrays(inst_45848,inst_45852);
var inst_45854 = [provides,true,inst_45853];
var inst_45855 = cljs.core.PersistentHashMap.fromArrays(inst_45847,inst_45854);
var state_45857__$1 = state_45857;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45857__$1,inst_45855);
} else {
return null;
}
}
});})(c__38971__auto__,provides,map__45803,map__45803__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__38924__auto__,c__38971__auto__,provides,map__45803,map__45803__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____0 = (function (){
var statearr_45860 = [null,null,null,null,null,null,null,null,null];
(statearr_45860[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__);

(statearr_45860[(1)] = (1));

return statearr_45860;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____1 = (function (state_45857){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_45857);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e45861){if((e45861 instanceof Object)){
var ex__38928__auto__ = e45861;
var statearr_45862_47865 = state_45857;
(statearr_45862_47865[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47867 = state_45857;
state_45857 = G__47867;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__ = function(state_45857){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____1.call(this,state_45857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,provides,map__45803,map__45803__$1,query,key,type,params,env__$1,value))
})();
var state__38973__auto__ = (function (){var statearr_45863 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_45863[(6)] = c__38971__auto__);

return statearr_45863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,provides,map__45803,map__45803__$1,query,key,type,params,env__$1,value))
);

return c__38971__auto__;
})();
com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","async-return","com.wsscode.pathom.parser/async-return",-1319623828),new cljs.core.Keyword(null,"key","key",-1516042587),key], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,provides),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(processing,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),stream,new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","channel-response","com.wsscode.pathom.parser/channel-response",140507736),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides], null)),key_iterations,tail], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507).cljs$core$IFn$_invoke$arity$1(value))){
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
var trace_id__21490__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));
var res__21491__auto__ = (function (){var seq__45864 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__45865 = null;
var count__45866 = (0);
var i__45867 = (0);
while(true){
if((i__45867 < count__45866)){
var vec__45882 = chunk__45865.cljs$core$IIndexed$_nth$arity$2(null,i__45867);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45882,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45882,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45885_47886 = cljs.core.seq(watchers);
var chunk__45886_47887 = null;
var count__45887_47888 = (0);
var i__45888_47889 = (0);
while(true){
if((i__45888_47889 < count__45887_47888)){
var out_47891 = chunk__45886_47887.cljs$core$IIndexed$_nth$arity$2(null,i__45888_47889);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47891,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47891);


var G__47894 = seq__45885_47886;
var G__47895 = chunk__45886_47887;
var G__47896 = count__45887_47888;
var G__47897 = (i__45888_47889 + (1));
seq__45885_47886 = G__47894;
chunk__45886_47887 = G__47895;
count__45887_47888 = G__47896;
i__45888_47889 = G__47897;
continue;
} else {
var temp__5720__auto___47898 = cljs.core.seq(seq__45885_47886);
if(temp__5720__auto___47898){
var seq__45885_47899__$1 = temp__5720__auto___47898;
if(cljs.core.chunked_seq_QMARK_(seq__45885_47899__$1)){
var c__4550__auto___47900 = cljs.core.chunk_first(seq__45885_47899__$1);
var G__47902 = cljs.core.chunk_rest(seq__45885_47899__$1);
var G__47903 = c__4550__auto___47900;
var G__47904 = cljs.core.count(c__4550__auto___47900);
var G__47905 = (0);
seq__45885_47886 = G__47902;
chunk__45886_47887 = G__47903;
count__45887_47888 = G__47904;
i__45888_47889 = G__47905;
continue;
} else {
var out_47906 = cljs.core.first(seq__45885_47899__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47906,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47906);


var G__47908 = cljs.core.next(seq__45885_47899__$1);
var G__47909 = null;
var G__47910 = (0);
var G__47911 = (0);
seq__45885_47886 = G__47908;
chunk__45886_47887 = G__47909;
count__45887_47888 = G__47910;
i__45888_47889 = G__47911;
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


var G__47912 = seq__45864;
var G__47913 = chunk__45865;
var G__47914 = count__45866;
var G__47915 = (i__45867 + (1));
seq__45864 = G__47912;
chunk__45865 = G__47913;
count__45866 = G__47914;
i__45867 = G__47915;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45864);
if(temp__5720__auto__){
var seq__45864__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45864__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45864__$1);
var G__47917 = cljs.core.chunk_rest(seq__45864__$1);
var G__47918 = c__4550__auto__;
var G__47919 = cljs.core.count(c__4550__auto__);
var G__47920 = (0);
seq__45864 = G__47917;
chunk__45865 = G__47918;
count__45866 = G__47919;
i__45867 = G__47920;
continue;
} else {
var vec__45889 = cljs.core.first(seq__45864__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45889,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45889,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45892_47924 = cljs.core.seq(watchers);
var chunk__45893_47925 = null;
var count__45894_47926 = (0);
var i__45895_47927 = (0);
while(true){
if((i__45895_47927 < count__45894_47926)){
var out_47928 = chunk__45893_47925.cljs$core$IIndexed$_nth$arity$2(null,i__45895_47927);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47928,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47928);


var G__47929 = seq__45892_47924;
var G__47930 = chunk__45893_47925;
var G__47931 = count__45894_47926;
var G__47932 = (i__45895_47927 + (1));
seq__45892_47924 = G__47929;
chunk__45893_47925 = G__47930;
count__45894_47926 = G__47931;
i__45895_47927 = G__47932;
continue;
} else {
var temp__5720__auto___47933__$1 = cljs.core.seq(seq__45892_47924);
if(temp__5720__auto___47933__$1){
var seq__45892_47934__$1 = temp__5720__auto___47933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45892_47934__$1)){
var c__4550__auto___47935 = cljs.core.chunk_first(seq__45892_47934__$1);
var G__47936 = cljs.core.chunk_rest(seq__45892_47934__$1);
var G__47937 = c__4550__auto___47935;
var G__47938 = cljs.core.count(c__4550__auto___47935);
var G__47939 = (0);
seq__45892_47924 = G__47936;
chunk__45893_47925 = G__47937;
count__45894_47926 = G__47938;
i__45895_47927 = G__47939;
continue;
} else {
var out_47942 = cljs.core.first(seq__45892_47934__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47942,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47942);


var G__47944 = cljs.core.next(seq__45892_47934__$1);
var G__47945 = null;
var G__47946 = (0);
var G__47947 = (0);
seq__45892_47924 = G__47944;
chunk__45893_47925 = G__47945;
count__45894_47926 = G__47946;
i__45895_47927 = G__47947;
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


var G__47948 = cljs.core.next(seq__45864__$1);
var G__47949 = null;
var G__47950 = (0);
var G__47951 = (0);
seq__45864 = G__47948;
chunk__45865 = G__47949;
count__45866 = G__47950;
i__45867 = G__47951;
continue;
}
} else {
return null;
}
}
break;
}
})();
com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,trace_id__21490__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers-loop","com.wsscode.pathom.parser/flush-watchers-loop",-445077871)], null));

return res__21491__auto__;
} else {
var seq__45896 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__45897 = null;
var count__45898 = (0);
var i__45899 = (0);
while(true){
if((i__45899 < count__45898)){
var vec__45914 = chunk__45897.cljs$core$IIndexed$_nth$arity$2(null,i__45899);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45914,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45914,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45917_47952 = cljs.core.seq(watchers);
var chunk__45918_47953 = null;
var count__45919_47954 = (0);
var i__45920_47955 = (0);
while(true){
if((i__45920_47955 < count__45919_47954)){
var out_47956 = chunk__45918_47953.cljs$core$IIndexed$_nth$arity$2(null,i__45920_47955);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47956,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47956);


var G__47957 = seq__45917_47952;
var G__47958 = chunk__45918_47953;
var G__47959 = count__45919_47954;
var G__47960 = (i__45920_47955 + (1));
seq__45917_47952 = G__47957;
chunk__45918_47953 = G__47958;
count__45919_47954 = G__47959;
i__45920_47955 = G__47960;
continue;
} else {
var temp__5720__auto___47961 = cljs.core.seq(seq__45917_47952);
if(temp__5720__auto___47961){
var seq__45917_47962__$1 = temp__5720__auto___47961;
if(cljs.core.chunked_seq_QMARK_(seq__45917_47962__$1)){
var c__4550__auto___47963 = cljs.core.chunk_first(seq__45917_47962__$1);
var G__47964 = cljs.core.chunk_rest(seq__45917_47962__$1);
var G__47965 = c__4550__auto___47963;
var G__47966 = cljs.core.count(c__4550__auto___47963);
var G__47967 = (0);
seq__45917_47952 = G__47964;
chunk__45918_47953 = G__47965;
count__45919_47954 = G__47966;
i__45920_47955 = G__47967;
continue;
} else {
var out_47968 = cljs.core.first(seq__45917_47962__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47968,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47968);


var G__47976 = cljs.core.next(seq__45917_47962__$1);
var G__47977 = null;
var G__47978 = (0);
var G__47979 = (0);
seq__45917_47952 = G__47976;
chunk__45918_47953 = G__47977;
count__45919_47954 = G__47978;
i__45920_47955 = G__47979;
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


var G__47983 = seq__45896;
var G__47984 = chunk__45897;
var G__47985 = count__45898;
var G__47986 = (i__45899 + (1));
seq__45896 = G__47983;
chunk__45897 = G__47984;
count__45898 = G__47985;
i__45899 = G__47986;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45896);
if(temp__5720__auto__){
var seq__45896__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45896__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45896__$1);
var G__47991 = cljs.core.chunk_rest(seq__45896__$1);
var G__47992 = c__4550__auto__;
var G__47993 = cljs.core.count(c__4550__auto__);
var G__47994 = (0);
seq__45896 = G__47991;
chunk__45897 = G__47992;
count__45898 = G__47993;
i__45899 = G__47994;
continue;
} else {
var vec__45921 = cljs.core.first(seq__45896__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45921,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45921,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45924_48026 = cljs.core.seq(watchers);
var chunk__45925_48027 = null;
var count__45926_48028 = (0);
var i__45927_48029 = (0);
while(true){
if((i__45927_48029 < count__45926_48028)){
var out_48040 = chunk__45925_48027.cljs$core$IIndexed$_nth$arity$2(null,i__45927_48029);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_48040,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_48040);


var G__48042 = seq__45924_48026;
var G__48043 = chunk__45925_48027;
var G__48044 = count__45926_48028;
var G__48045 = (i__45927_48029 + (1));
seq__45924_48026 = G__48042;
chunk__45925_48027 = G__48043;
count__45926_48028 = G__48044;
i__45927_48029 = G__48045;
continue;
} else {
var temp__5720__auto___48046__$1 = cljs.core.seq(seq__45924_48026);
if(temp__5720__auto___48046__$1){
var seq__45924_48047__$1 = temp__5720__auto___48046__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45924_48047__$1)){
var c__4550__auto___48048 = cljs.core.chunk_first(seq__45924_48047__$1);
var G__48049 = cljs.core.chunk_rest(seq__45924_48047__$1);
var G__48050 = c__4550__auto___48048;
var G__48051 = cljs.core.count(c__4550__auto___48048);
var G__48052 = (0);
seq__45924_48026 = G__48049;
chunk__45925_48027 = G__48050;
count__45926_48028 = G__48051;
i__45927_48029 = G__48052;
continue;
} else {
var out_48054 = cljs.core.first(seq__45924_48047__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_48054,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_48054);


var G__48056 = cljs.core.next(seq__45924_48047__$1);
var G__48057 = null;
var G__48058 = (0);
var G__48059 = (0);
seq__45924_48026 = G__48056;
chunk__45925_48027 = G__48057;
count__45926_48028 = G__48058;
i__45927_48029 = G__48059;
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


var G__48061 = cljs.core.next(seq__45896__$1);
var G__48062 = null;
var G__48063 = (0);
var G__48064 = (0);
seq__45896 = G__48061;
chunk__45897 = G__48062;
count__45898 = G__48063;
i__45899 = G__48064;
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
return (function (env,x){
var G__45928 = (x - amount);
var G__45929 = min;
return Math.max(G__45928,G__45929);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__45930){
var vec__45931 = p__45930;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45931,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45931,(1),null);
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
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__45936,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__45937 = p__45936;
var map__45937__$1 = (((((!((map__45937 == null))))?(((((map__45937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45937):map__45937);
var env = map__45937__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (state_46207){
var state_val_46208 = (state_46207[(1)]);
if((state_val_46208 === (65))){
var inst_46131 = (state_46207[(7)]);
var inst_46130 = (state_46207[(8)]);
var inst_46133 = (state_46207[(9)]);
var inst_46132 = (state_46207[(10)]);
var inst_46151 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_46152 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_46132];
var inst_46153 = cljs.core.PersistentHashMap.fromArrays(inst_46151,inst_46152);
var inst_46154 = com.wsscode.pathom.trace.trace(env,inst_46153);
var inst_46155 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46156 = cljs.core.vals(inst_46132);
var inst_46157 = cljs.core.first(inst_46156);
var inst_46158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_46131,inst_46157);
var inst_46159 = cljs.core.PersistentHashSet.EMPTY;
var inst_46160 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_46130);
var inst_46161 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46159,inst_46160,inst_46133);
var inst_46162 = cljs.core.PersistentVector.EMPTY;
var inst_46163 = [inst_46158,inst_46161,processing,key_iterations,inst_46162];
var inst_46164 = (new cljs.core.PersistentVector(null,5,(5),inst_46155,inst_46163,null));
var state_46207__$1 = (function (){var statearr_46209 = state_46207;
(statearr_46209[(11)] = inst_46154);

return statearr_46209;
})();
var statearr_46210_48075 = state_46207__$1;
(statearr_46210_48075[(2)] = inst_46164);

(statearr_46210_48075[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (62))){
var inst_46129 = (state_46207[(12)]);
var inst_46139 = (state_46207[(13)]);
var inst_46141 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_46139,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_46129);
var state_46207__$1 = state_46207;
var statearr_46211_48079 = state_46207__$1;
(statearr_46211_48079[(2)] = inst_46141);

(statearr_46211_48079[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (7))){
var inst_45955 = (state_46207[(14)]);
var inst_45955__$1 = (state_46207[(2)]);
var inst_45957 = cljs.core.PersistentVector.EMPTY;
var inst_45958 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_45959 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_45957,inst_45958,processing);
var state_46207__$1 = (function (){var statearr_46212 = state_46207;
(statearr_46212[(14)] = inst_45955__$1);

(statearr_46212[(15)] = inst_45959);

return statearr_46212;
})();
if(cljs.core.truth_(inst_45955__$1)){
var statearr_46213_48081 = state_46207__$1;
(statearr_46213_48081[(1)] = (8));

} else {
var statearr_46214_48082 = state_46207__$1;
(statearr_46214_48082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (59))){
var inst_46126 = (state_46207[(16)]);
var inst_46127 = (state_46207[(17)]);
var inst_46129 = (state_46207[(12)]);
var inst_46132 = (state_46207[(10)]);
var inst_46136 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_46137 = cljs.core.boolean$(inst_46127);
var inst_46138 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_46126,inst_46132,inst_46137];
var inst_46139 = cljs.core.PersistentHashMap.fromArrays(inst_46136,inst_46138);
var state_46207__$1 = (function (){var statearr_46215 = state_46207;
(statearr_46215[(13)] = inst_46139);

return statearr_46215;
})();
if(cljs.core.truth_(inst_46129)){
var statearr_46216_48094 = state_46207__$1;
(statearr_46216_48094[(1)] = (62));

} else {
var statearr_46217_48098 = state_46207__$1;
(statearr_46217_48098[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (20))){
var inst_46001 = (state_46207[(18)]);
var inst_46009 = (state_46207[(19)]);
var inst_46003 = (state_46207[(20)]);
var inst_46009__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46001,inst_46003);
var inst_46011 = (inst_46009__$1 == null);
var inst_46012 = cljs.core.not(inst_46011);
var state_46207__$1 = (function (){var statearr_46218 = state_46207;
(statearr_46218[(19)] = inst_46009__$1);

return statearr_46218;
})();
if(inst_46012){
var statearr_46219_48132 = state_46207__$1;
(statearr_46219_48132[(1)] = (23));

} else {
var statearr_46220_48134 = state_46207__$1;
(statearr_46220_48134[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (58))){
var inst_45967 = (state_46207[(21)]);
var inst_46126 = (state_46207[(16)]);
var inst_46124 = (state_46207[(22)]);
var inst_46129 = (state_46207[(12)]);
var inst_46124__$1 = (state_46207[(2)]);
var inst_46125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46124__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_46126__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46124__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_46127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46124__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_46128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46124__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_46129__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_45967);
var inst_46130 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_46126__$1,inst_46129__$1);
var inst_46131 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_46125);
var inst_46132 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_46125,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_46133 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_46129__$1);
var state_46207__$1 = (function (){var statearr_46221 = state_46207;
(statearr_46221[(16)] = inst_46126__$1);

(statearr_46221[(7)] = inst_46131);

(statearr_46221[(8)] = inst_46130);

(statearr_46221[(22)] = inst_46124__$1);

(statearr_46221[(9)] = inst_46133);

(statearr_46221[(23)] = inst_46128);

(statearr_46221[(17)] = inst_46127);

(statearr_46221[(12)] = inst_46129__$1);

(statearr_46221[(10)] = inst_46132);

return statearr_46221;
})();
if(cljs.core.truth_(inst_45967)){
var statearr_46222_48140 = state_46207__$1;
(statearr_46222_48140[(1)] = (59));

} else {
var statearr_46223_48142 = state_46207__$1;
(statearr_46223_48142[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (60))){
var inst_46133 = (state_46207[(9)]);
var inst_45968 = (state_46207[(24)]);
var inst_46190 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46191 = cljs.core.PersistentHashSet.EMPTY;
var inst_46192 = [inst_45968];
var inst_46193 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_46192);
var inst_46194 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_46193,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_46195 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_46194);
var inst_46196 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46191,inst_46195,processing);
var inst_46197 = cljs.core.PersistentVector.EMPTY;
var inst_46198 = [res,inst_46133,inst_46196,key_iterations,inst_46197];
var inst_46199 = (new cljs.core.PersistentVector(null,5,(5),inst_46190,inst_46198,null));
var state_46207__$1 = state_46207;
var statearr_46224_48145 = state_46207__$1;
(statearr_46224_48145[(2)] = inst_46199);

(statearr_46224_48145[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (27))){
var state_46207__$1 = state_46207;
var statearr_46225_48146 = state_46207__$1;
(statearr_46225_48146[(2)] = false);

(statearr_46225_48146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (1))){
var state_46207__$1 = state_46207;
var statearr_46226_48148 = state_46207__$1;
(statearr_46226_48148[(2)] = null);

(statearr_46226_48148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (24))){
var state_46207__$1 = state_46207;
var statearr_46227_48150 = state_46207__$1;
(statearr_46227_48150[(2)] = false);

(statearr_46227_48150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (55))){
var inst_46116 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46228_48151 = state_46207__$1;
(statearr_46228_48151[(2)] = inst_46116);

(statearr_46228_48151[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (39))){
var state_46207__$1 = state_46207;
var statearr_46229_48153 = state_46207__$1;
(statearr_46229_48153[(2)] = false);

(statearr_46229_48153[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (46))){
var inst_46036 = (state_46207[(25)]);
var inst_46067 = (state_46207[(2)]);
var inst_46068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46067,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_46069 = cljs.core.async.close_BANG_(inst_46068);
var inst_46070 = cljs.core.next(inst_46036);
var inst_46000 = inst_46070;
var inst_46001 = null;
var inst_46002 = (0);
var inst_46003 = (0);
var state_46207__$1 = (function (){var statearr_46230 = state_46207;
(statearr_46230[(26)] = inst_46002);

(statearr_46230[(18)] = inst_46001);

(statearr_46230[(27)] = inst_46000);

(statearr_46230[(28)] = inst_46069);

(statearr_46230[(20)] = inst_46003);

return statearr_46230;
})();
var statearr_46231_48157 = state_46207__$1;
(statearr_46231_48157[(2)] = null);

(statearr_46231_48157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46207,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_45946 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_45947 = cljs.core.count(processing);
var inst_45948 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_45947];
var inst_45949 = cljs.core.PersistentHashMap.fromArrays(inst_45946,inst_45948);
var inst_45950 = com.wsscode.pathom.trace.trace(env,inst_45949);
var state_46207__$1 = (function (){var statearr_46232 = state_46207;
(statearr_46232[(29)] = inst_45950);

return statearr_46232;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_46233_48162 = state_46207__$1;
(statearr_46233_48162[(1)] = (5));

} else {
var statearr_46234_48163 = state_46207__$1;
(statearr_46234_48163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (54))){
var state_46207__$1 = state_46207;
var statearr_46235_48164 = state_46207__$1;
(statearr_46235_48164[(2)] = false);

(statearr_46235_48164[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (15))){
var inst_45986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45987 = cljs.core.PersistentVector.EMPTY;
var inst_45988 = [res,waiting,processing,key_iterations,inst_45987];
var inst_45989 = (new cljs.core.PersistentVector(null,5,(5),inst_45986,inst_45988,null));
var state_46207__$1 = state_46207;
var statearr_46236_48165 = state_46207__$1;
(statearr_46236_48165[(2)] = inst_45989);

(statearr_46236_48165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (48))){
var inst_45975 = (state_46207[(30)]);
var inst_46090 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46091 = cljs.core.PersistentHashSet.EMPTY;
var inst_46092 = cljs.core.PersistentHashSet.EMPTY;
var inst_46093 = cljs.core.PersistentVector.EMPTY;
var inst_46094 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_46095 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46093,inst_46094,inst_45975);
var inst_46096 = [res,inst_46091,inst_46092,key_iterations,inst_46095];
var inst_46097 = (new cljs.core.PersistentVector(null,5,(5),inst_46090,inst_46096,null));
var state_46207__$1 = state_46207;
var statearr_46237_48169 = state_46207__$1;
(statearr_46237_48169[(2)] = inst_46097);

(statearr_46237_48169[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (50))){
var inst_45967 = (state_46207[(21)]);
var inst_46108 = inst_45967.cljs$lang$protocol_mask$partition0$;
var inst_46109 = (inst_46108 & (64));
var inst_46110 = inst_45967.cljs$core$ISeq$;
var inst_46111 = (cljs.core.PROTOCOL_SENTINEL === inst_46110);
var inst_46112 = ((inst_46109) || (inst_46111));
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46112)){
var statearr_46241_48171 = state_46207__$1;
(statearr_46241_48171[(1)] = (53));

} else {
var statearr_46242_48172 = state_46207__$1;
(statearr_46242_48172[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (21))){
var inst_46036 = (state_46207[(25)]);
var inst_46000 = (state_46207[(27)]);
var inst_46036__$1 = cljs.core.seq(inst_46000);
var state_46207__$1 = (function (){var statearr_46243 = state_46207;
(statearr_46243[(25)] = inst_46036__$1);

return statearr_46243;
})();
if(inst_46036__$1){
var statearr_46244_48173 = state_46207__$1;
(statearr_46244_48173[(1)] = (32));

} else {
var statearr_46245_48174 = state_46207__$1;
(statearr_46245_48174[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (31))){
var inst_46002 = (state_46207[(26)]);
var inst_46001 = (state_46207[(18)]);
var inst_46000 = (state_46207[(27)]);
var inst_46003 = (state_46207[(20)]);
var inst_46030 = (state_46207[(2)]);
var inst_46031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46030,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_46032 = cljs.core.async.close_BANG_(inst_46031);
var inst_46033 = (inst_46003 + (1));
var tmp46238 = inst_46002;
var tmp46239 = inst_46001;
var tmp46240 = inst_46000;
var inst_46000__$1 = tmp46240;
var inst_46001__$1 = tmp46239;
var inst_46002__$1 = tmp46238;
var inst_46003__$1 = inst_46033;
var state_46207__$1 = (function (){var statearr_46246 = state_46207;
(statearr_46246[(26)] = inst_46002__$1);

(statearr_46246[(18)] = inst_46001__$1);

(statearr_46246[(31)] = inst_46032);

(statearr_46246[(27)] = inst_46000__$1);

(statearr_46246[(20)] = inst_46003__$1);

return statearr_46246;
})();
var statearr_46247_48179 = state_46207__$1;
(statearr_46247_48179[(2)] = null);

(statearr_46247_48179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (32))){
var inst_46036 = (state_46207[(25)]);
var inst_46038 = cljs.core.chunked_seq_QMARK_(inst_46036);
var state_46207__$1 = state_46207;
if(inst_46038){
var statearr_46248_48181 = state_46207__$1;
(statearr_46248_48181[(1)] = (35));

} else {
var statearr_46249_48183 = state_46207__$1;
(statearr_46249_48183[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (40))){
var inst_46062 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46062)){
var statearr_46250_48186 = state_46207__$1;
(statearr_46250_48186[(1)] = (44));

} else {
var statearr_46251_48187 = state_46207__$1;
(statearr_46251_48187[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (56))){
var inst_45967 = (state_46207[(21)]);
var inst_46121 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45967);
var state_46207__$1 = state_46207;
var statearr_46252_48188 = state_46207__$1;
(statearr_46252_48188[(2)] = inst_46121);

(statearr_46252_48188[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (33))){
var state_46207__$1 = state_46207;
var statearr_46253_48189 = state_46207__$1;
(statearr_46253_48189[(2)] = null);

(statearr_46253_48189[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (13))){
var inst_45967 = (state_46207[(21)]);
var inst_46105 = (inst_45967 == null);
var inst_46106 = cljs.core.not(inst_46105);
var state_46207__$1 = state_46207;
if(inst_46106){
var statearr_46254_48190 = state_46207__$1;
(statearr_46254_48190[(1)] = (50));

} else {
var statearr_46255_48191 = state_46207__$1;
(statearr_46255_48191[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (22))){
var inst_46078 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46256_48192 = state_46207__$1;
(statearr_46256_48192[(2)] = inst_46078);

(statearr_46256_48192[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (36))){
var inst_46046 = (state_46207[(32)]);
var inst_46036 = (state_46207[(25)]);
var inst_46046__$1 = cljs.core.first(inst_46036);
var inst_46048 = (inst_46046__$1 == null);
var inst_46049 = cljs.core.not(inst_46048);
var state_46207__$1 = (function (){var statearr_46257 = state_46207;
(statearr_46257[(32)] = inst_46046__$1);

return statearr_46257;
})();
if(inst_46049){
var statearr_46258_48196 = state_46207__$1;
(statearr_46258_48196[(1)] = (38));

} else {
var statearr_46259_48197 = state_46207__$1;
(statearr_46259_48197[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (41))){
var state_46207__$1 = state_46207;
var statearr_46260_48198 = state_46207__$1;
(statearr_46260_48198[(2)] = true);

(statearr_46260_48198[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (43))){
var inst_46059 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46261_48200 = state_46207__$1;
(statearr_46261_48200[(2)] = inst_46059);

(statearr_46261_48200[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (61))){
var inst_46201 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46262_48202 = state_46207__$1;
(statearr_46262_48202[(2)] = inst_46201);

(statearr_46262_48202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (29))){
var inst_46009 = (state_46207[(19)]);
var inst_46027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46009);
var state_46207__$1 = state_46207;
var statearr_46263_48204 = state_46207__$1;
(statearr_46263_48204[(2)] = inst_46027);

(statearr_46263_48204[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (44))){
var inst_46046 = (state_46207[(32)]);
var inst_46064 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46046);
var state_46207__$1 = state_46207;
var statearr_46264_48205 = state_46207__$1;
(statearr_46264_48205[(2)] = inst_46064);

(statearr_46264_48205[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (6))){
var state_46207__$1 = state_46207;
var statearr_46265_48208 = state_46207__$1;
(statearr_46265_48208[(2)] = null);

(statearr_46265_48208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (28))){
var inst_46022 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46266_48210 = state_46207__$1;
(statearr_46266_48210[(2)] = inst_46022);

(statearr_46266_48210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (64))){
var inst_45964 = (state_46207[(33)]);
var inst_45967 = (state_46207[(21)]);
var inst_46126 = (state_46207[(16)]);
var inst_46131 = (state_46207[(7)]);
var inst_46130 = (state_46207[(8)]);
var inst_46124 = (state_46207[(22)]);
var inst_45966 = (state_46207[(34)]);
var inst_45950 = (state_46207[(29)]);
var inst_46133 = (state_46207[(9)]);
var inst_46128 = (state_46207[(23)]);
var inst_46127 = (state_46207[(17)]);
var inst_45955 = (state_46207[(14)]);
var inst_46129 = (state_46207[(12)]);
var inst_46132 = (state_46207[(10)]);
var inst_45968 = (state_46207[(24)]);
var inst_46144 = (state_46207[(2)]);
var inst_46145 = com.wsscode.pathom.trace.trace(env,inst_46144);
var inst_46146 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_46147 = (function (){var vec__45943 = inst_45966;
var map__46103 = inst_46124;
var p = inst_45968;
var merge_result_QMARK_ = inst_46127;
var recheck_ch = inst_45955;
var response_value = inst_46132;
var _ = inst_45950;
var key_as = inst_46131;
var provides_SINGLEQUOTE_ = inst_46130;
var msg = inst_45967;
var waiting__$1 = inst_46133;
var processing_SINGLEQUOTE_ = inst_45964;
var waiting_SINGLEQUOTE_ = inst_46129;
var error = inst_46128;
var provides = inst_46126;
return ((function (vec__45943,map__46103,p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,waiting_SINGLEQUOTE_,error,provides,inst_45964,inst_45967,inst_46126,inst_46131,inst_46130,inst_46124,inst_45966,inst_45950,inst_46133,inst_46128,inst_46127,inst_45955,inst_46129,inst_46132,inst_45968,inst_46144,inst_46145,inst_46146,state_val_46208,c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__45935_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__45935_SHARP_], 0));
});
;})(vec__45943,map__46103,p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,waiting_SINGLEQUOTE_,error,provides,inst_45964,inst_45967,inst_46126,inst_46131,inst_46130,inst_46124,inst_45966,inst_45950,inst_46133,inst_46128,inst_46127,inst_45955,inst_46129,inst_46132,inst_45968,inst_46144,inst_46145,inst_46146,state_val_46208,c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_46148 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46146,inst_46147);
var inst_46149 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_46130,inst_46128);
var state_46207__$1 = (function (){var statearr_46267 = state_46207;
(statearr_46267[(35)] = inst_46148);

(statearr_46267[(36)] = inst_46145);

(statearr_46267[(37)] = inst_46149);

return statearr_46267;
})();
if(cljs.core.truth_(inst_46127)){
var statearr_46268_48215 = state_46207__$1;
(statearr_46268_48215[(1)] = (65));

} else {
var statearr_46269_48216 = state_46207__$1;
(statearr_46269_48216[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (51))){
var state_46207__$1 = state_46207;
var statearr_46270_48218 = state_46207__$1;
(statearr_46270_48218[(2)] = false);

(statearr_46270_48218[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (25))){
var inst_46025 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46025)){
var statearr_46271_48219 = state_46207__$1;
(statearr_46271_48219[(1)] = (29));

} else {
var statearr_46272_48220 = state_46207__$1;
(statearr_46272_48220[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (34))){
var inst_46076 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46273_48222 = state_46207__$1;
(statearr_46273_48222[(2)] = inst_46076);

(statearr_46273_48222[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (17))){
var inst_46101 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46274_48223 = state_46207__$1;
(statearr_46274_48223[(2)] = inst_46101);

(statearr_46274_48223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (3))){
var inst_45939 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46275_48225 = state_46207__$1;
(statearr_46275_48225[(2)] = inst_45939);


cljs.core.async.impl.ioc_helpers.process_exception(state_46207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (12))){
var inst_45964 = (state_46207[(33)]);
var inst_45967 = (state_46207[(21)]);
var inst_45966 = (state_46207[(34)]);
var inst_45950 = (state_46207[(29)]);
var inst_45955 = (state_46207[(14)]);
var inst_45975 = (state_46207[(30)]);
var inst_45968 = (state_46207[(24)]);
var inst_45971 = cljs.core.keys(indexed_props);
var inst_45972 = cljs.core.set(inst_45971);
var inst_45973 = cljs.core.keys(res);
var inst_45974 = cljs.core.set(inst_45973);
var inst_45975__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_45972,inst_45974);
var inst_45976 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_45977 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_45978 = [processing,inst_45975__$1];
var inst_45979 = cljs.core.PersistentHashMap.fromArrays(inst_45977,inst_45978);
var inst_45980 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_45979];
var inst_45981 = cljs.core.PersistentHashMap.fromArrays(inst_45976,inst_45980);
var inst_45982 = com.wsscode.pathom.trace.trace(env,inst_45981);
var inst_45983 = (function (){var vec__45943 = inst_45966;
var missing_props = inst_45975__$1;
var p = inst_45968;
var recheck_ch = inst_45955;
var _ = inst_45950;
var msg = inst_45967;
var processing_SINGLEQUOTE_ = inst_45964;
var all_props = inst_45972;
var current_props = inst_45974;
return ((function (vec__45943,missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_45964,inst_45967,inst_45966,inst_45950,inst_45955,inst_45975,inst_45968,inst_45971,inst_45972,inst_45973,inst_45974,inst_45975__$1,inst_45976,inst_45977,inst_45978,inst_45979,inst_45980,inst_45981,inst_45982,state_val_46208,c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__45934_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__45934_SHARP_));
});
;})(vec__45943,missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_45964,inst_45967,inst_45966,inst_45950,inst_45955,inst_45975,inst_45968,inst_45971,inst_45972,inst_45973,inst_45974,inst_45975__$1,inst_45976,inst_45977,inst_45978,inst_45979,inst_45980,inst_45981,inst_45982,state_val_46208,c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_45984 = cljs.core.some(inst_45983,inst_45975__$1);
var state_46207__$1 = (function (){var statearr_46276 = state_46207;
(statearr_46276[(30)] = inst_45975__$1);

(statearr_46276[(38)] = inst_45982);

return statearr_46276;
})();
if(cljs.core.truth_(inst_45984)){
var statearr_46277_48232 = state_46207__$1;
(statearr_46277_48232[(1)] = (15));

} else {
var statearr_46278_48233 = state_46207__$1;
(statearr_46278_48233[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (2))){
var inst_46205 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46207__$1,inst_46205);
} else {
if((state_val_46208 === (66))){
var inst_46130 = (state_46207[(8)]);
var inst_46133 = (state_46207[(9)]);
var inst_46166 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_46167 = cljs.core.keys(inst_46166);
var inst_46168 = cljs.core.set(inst_46167);
var inst_46169 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_46168,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_46170 = cljs.core.vec(inst_46130);
var inst_46171 = com.wsscode.pathom.parser.focus_subquery(tx,inst_46170);
var inst_46172 = com.wsscode.pathom.parser.query__GT_ast(inst_46171);
var inst_46173 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_46172);
var inst_46174 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_46169,inst_46173);
var inst_46175 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_46174);
var inst_46176 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_46177 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_46175);
var inst_46178 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_46177];
var inst_46179 = cljs.core.PersistentHashMap.fromArrays(inst_46176,inst_46178);
var inst_46180 = com.wsscode.pathom.trace.trace(env,inst_46179);
var inst_46181 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46182 = cljs.core.PersistentHashSet.EMPTY;
var inst_46183 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_46130);
var inst_46184 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46182,inst_46183,inst_46133);
var inst_46185 = [res,inst_46184,processing,key_iterations,inst_46175];
var inst_46186 = (new cljs.core.PersistentVector(null,5,(5),inst_46181,inst_46185,null));
var state_46207__$1 = (function (){var statearr_46279 = state_46207;
(statearr_46279[(39)] = inst_46180);

return statearr_46279;
})();
var statearr_46280_48240 = state_46207__$1;
(statearr_46280_48240[(2)] = inst_46186);

(statearr_46280_48240[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (23))){
var inst_46009 = (state_46207[(19)]);
var inst_46014 = inst_46009.cljs$lang$protocol_mask$partition0$;
var inst_46015 = (inst_46014 & (64));
var inst_46016 = inst_46009.cljs$core$ISeq$;
var inst_46017 = (cljs.core.PROTOCOL_SENTINEL === inst_46016);
var inst_46018 = ((inst_46015) || (inst_46017));
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46018)){
var statearr_46281_48242 = state_46207__$1;
(statearr_46281_48242[(1)] = (26));

} else {
var statearr_46282_48243 = state_46207__$1;
(statearr_46282_48243[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (47))){
var inst_46083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46084 = cljs.core.PersistentHashSet.EMPTY;
var inst_46085 = cljs.core.PersistentHashSet.EMPTY;
var inst_46086 = cljs.core.PersistentVector.EMPTY;
var inst_46087 = [res,inst_46084,inst_46085,key_iterations,inst_46086];
var inst_46088 = (new cljs.core.PersistentVector(null,5,(5),inst_46083,inst_46087,null));
var state_46207__$1 = state_46207;
var statearr_46283_48246 = state_46207__$1;
(statearr_46283_48246[(2)] = inst_46088);

(statearr_46283_48246[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (35))){
var inst_46036 = (state_46207[(25)]);
var inst_46040 = cljs.core.chunk_first(inst_46036);
var inst_46041 = cljs.core.chunk_rest(inst_46036);
var inst_46042 = cljs.core.count(inst_46040);
var inst_46000 = inst_46041;
var inst_46001 = inst_46040;
var inst_46002 = inst_46042;
var inst_46003 = (0);
var state_46207__$1 = (function (){var statearr_46284 = state_46207;
(statearr_46284[(26)] = inst_46002);

(statearr_46284[(18)] = inst_46001);

(statearr_46284[(27)] = inst_46000);

(statearr_46284[(20)] = inst_46003);

return statearr_46284;
})();
var statearr_46285_48248 = state_46207__$1;
(statearr_46285_48248[(2)] = null);

(statearr_46285_48248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (19))){
var inst_46080 = (state_46207[(2)]);
var inst_46081 = cljs.core.deref(done_signal_STAR_);
var state_46207__$1 = (function (){var statearr_46286 = state_46207;
(statearr_46286[(40)] = inst_46080);

return statearr_46286;
})();
if(cljs.core.truth_(inst_46081)){
var statearr_46287_48250 = state_46207__$1;
(statearr_46287_48250[(1)] = (47));

} else {
var statearr_46288_48251 = state_46207__$1;
(statearr_46288_48251[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (57))){
var inst_45967 = (state_46207[(21)]);
var state_46207__$1 = state_46207;
var statearr_46289_48252 = state_46207__$1;
(statearr_46289_48252[(2)] = inst_45967);

(statearr_46289_48252[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (11))){
var inst_45966 = (state_46207[(34)]);
var inst_45955 = (state_46207[(14)]);
var inst_45968 = (state_46207[(24)]);
var inst_45966__$1 = (state_46207[(2)]);
var inst_45967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45966__$1,(0),null);
var inst_45968__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45966__$1,(1),null);
var inst_45969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45968__$1,inst_45955);
var state_46207__$1 = (function (){var statearr_46290 = state_46207;
(statearr_46290[(21)] = inst_45967);

(statearr_46290[(34)] = inst_45966__$1);

(statearr_46290[(24)] = inst_45968__$1);

return statearr_46290;
})();
if(inst_45969){
var statearr_46291_48254 = state_46207__$1;
(statearr_46291_48254[(1)] = (12));

} else {
var statearr_46292_48255 = state_46207__$1;
(statearr_46292_48255[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (9))){
var inst_45959 = (state_46207[(15)]);
var state_46207__$1 = state_46207;
var statearr_46293_48256 = state_46207__$1;
(statearr_46293_48256[(2)] = inst_45959);

(statearr_46293_48256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (5))){
var inst_45952 = cljs.core.async.timeout(processing_recheck_timer);
var state_46207__$1 = state_46207;
var statearr_46294_48258 = state_46207__$1;
(statearr_46294_48258[(2)] = inst_45952);

(statearr_46294_48258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (14))){
var inst_46203 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46295_48261 = state_46207__$1;
(statearr_46295_48261[(2)] = inst_46203);


cljs.core.async.impl.ioc_helpers.process_exception(state_46207__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (45))){
var inst_46046 = (state_46207[(32)]);
var state_46207__$1 = state_46207;
var statearr_46296_48262 = state_46207__$1;
(statearr_46296_48262[(2)] = inst_46046);

(statearr_46296_48262[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (53))){
var state_46207__$1 = state_46207;
var statearr_46297_48263 = state_46207__$1;
(statearr_46297_48263[(2)] = true);

(statearr_46297_48263[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (26))){
var state_46207__$1 = state_46207;
var statearr_46298_48264 = state_46207__$1;
(statearr_46298_48264[(2)] = true);

(statearr_46298_48264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (16))){
var inst_45975 = (state_46207[(30)]);
var inst_45991 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_45992 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_45975];
var inst_45993 = cljs.core.PersistentHashMap.fromArrays(inst_45991,inst_45992);
var inst_45994 = com.wsscode.pathom.trace.trace(env,inst_45993);
var inst_45999 = cljs.core.seq(processing);
var inst_46000 = inst_45999;
var inst_46001 = null;
var inst_46002 = (0);
var inst_46003 = (0);
var state_46207__$1 = (function (){var statearr_46299 = state_46207;
(statearr_46299[(26)] = inst_46002);

(statearr_46299[(41)] = inst_45994);

(statearr_46299[(18)] = inst_46001);

(statearr_46299[(27)] = inst_46000);

(statearr_46299[(20)] = inst_46003);

return statearr_46299;
})();
var statearr_46300_48265 = state_46207__$1;
(statearr_46300_48265[(2)] = null);

(statearr_46300_48265[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (38))){
var inst_46046 = (state_46207[(32)]);
var inst_46051 = inst_46046.cljs$lang$protocol_mask$partition0$;
var inst_46052 = (inst_46051 & (64));
var inst_46053 = inst_46046.cljs$core$ISeq$;
var inst_46054 = (cljs.core.PROTOCOL_SENTINEL === inst_46053);
var inst_46055 = ((inst_46052) || (inst_46054));
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46055)){
var statearr_46301_48266 = state_46207__$1;
(statearr_46301_48266[(1)] = (41));

} else {
var statearr_46302_48268 = state_46207__$1;
(statearr_46302_48268[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (30))){
var inst_46009 = (state_46207[(19)]);
var state_46207__$1 = state_46207;
var statearr_46303_48271 = state_46207__$1;
(statearr_46303_48271[(2)] = inst_46009);

(statearr_46303_48271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (10))){
var inst_45964 = (state_46207[(33)]);
var inst_45964__$1 = (state_46207[(2)]);
var state_46207__$1 = (function (){var statearr_46304 = state_46207;
(statearr_46304[(33)] = inst_45964__$1);

return statearr_46304;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_46207__$1,(11),inst_45964__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_46208 === (18))){
var inst_46002 = (state_46207[(26)]);
var inst_46003 = (state_46207[(20)]);
var inst_46005 = (inst_46003 < inst_46002);
var inst_46006 = inst_46005;
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46006)){
var statearr_46305_48275 = state_46207__$1;
(statearr_46305_48275[(1)] = (20));

} else {
var statearr_46306_48276 = state_46207__$1;
(statearr_46306_48276[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (52))){
var inst_46119 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
if(cljs.core.truth_(inst_46119)){
var statearr_46307_48278 = state_46207__$1;
(statearr_46307_48278[(1)] = (56));

} else {
var statearr_46308_48279 = state_46207__$1;
(statearr_46308_48279[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (67))){
var inst_46188 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46309_48280 = state_46207__$1;
(statearr_46309_48280[(2)] = inst_46188);

(statearr_46309_48280[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (42))){
var state_46207__$1 = state_46207;
var statearr_46310_48282 = state_46207__$1;
(statearr_46310_48282[(2)] = false);

(statearr_46310_48282[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (37))){
var inst_46073 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46311_48285 = state_46207__$1;
(statearr_46311_48285[(2)] = inst_46073);

(statearr_46311_48285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (63))){
var inst_46139 = (state_46207[(13)]);
var state_46207__$1 = state_46207;
var statearr_46312_48286 = state_46207__$1;
(statearr_46312_48286[(2)] = inst_46139);

(statearr_46312_48286[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (8))){
var inst_45955 = (state_46207[(14)]);
var inst_45959 = (state_46207[(15)]);
var inst_45961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_45959,inst_45955);
var state_46207__$1 = state_46207;
var statearr_46313_48287 = state_46207__$1;
(statearr_46313_48287[(2)] = inst_45961);

(statearr_46313_48287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46208 === (49))){
var inst_46099 = (state_46207[(2)]);
var state_46207__$1 = state_46207;
var statearr_46314_48289 = state_46207__$1;
(statearr_46314_48289[(2)] = inst_46099);

(statearr_46314_48289[(1)] = (17));


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
});})(c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto____0 = (function (){
var statearr_46315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46315[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto__);

(statearr_46315[(1)] = (1));

return statearr_46315;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto____1 = (function (state_46207){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_46207);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e46316){if((e46316 instanceof Object)){
var ex__38928__auto__ = e46316;
var statearr_46317_48293 = state_46207;
(statearr_46317_48293[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46316;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48294 = state_46207;
state_46207 = G__48294;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto__ = function(state_46207){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto____1.call(this,state_46207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var state__38973__auto__ = (function (){var statearr_46318 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_46318[(6)] = c__38971__auto__);

return statearr_46318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__45937,map__45937__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
);

return c__38971__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__46320,p__46321,tx){
var map__46322 = p__46320;
var map__46322__$1 = (((((!((map__46322 == null))))?(((((map__46322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46322):map__46322);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46322__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46322__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__46323 = p__46321;
var map__46323__$1 = (((((!((map__46323 == null))))?(((((map__46323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46323):map__46323);
var env = map__46323__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46323__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_46775){
var state_val_46776 = (state_46775[(1)]);
if((state_val_46776 === (121))){
var inst_46623 = (state_46775[(7)]);
var inst_46626 = (state_46775[(8)]);
var inst_46624 = (state_46775[(9)]);
var inst_46375 = (state_46775[(10)]);
var inst_46657 = (state_46775[(11)]);
var inst_46625 = (state_46775[(12)]);
var inst_46635 = (state_46775[(13)]);
var inst_46715 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46716 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_46657];
var inst_46717 = cljs.core.PersistentHashMap.fromArrays(inst_46715,inst_46716);
var inst_46718 = com.wsscode.pathom.trace.trace(inst_46375,inst_46717);
var tmp46777 = inst_46623;
var tmp46778 = inst_46626;
var tmp46779 = inst_46624;
var tmp46780 = inst_46625;
var inst_46623__$1 = tmp46777;
var inst_46624__$1 = tmp46779;
var inst_46625__$1 = tmp46780;
var inst_46626__$1 = tmp46778;
var inst_46627 = inst_46635;
var state_46775__$1 = (function (){var statearr_46781 = state_46775;
(statearr_46781[(7)] = inst_46623__$1);

(statearr_46781[(14)] = inst_46718);

(statearr_46781[(8)] = inst_46626__$1);

(statearr_46781[(9)] = inst_46624__$1);

(statearr_46781[(15)] = inst_46627);

(statearr_46781[(12)] = inst_46625__$1);

return statearr_46781;
})();
var statearr_46782_48300 = state_46775__$1;
(statearr_46782_48300[(2)] = null);

(statearr_46782_48300[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (65))){
var inst_46463 = (state_46775[(16)]);
var inst_46430 = (state_46775[(17)]);
var inst_46519 = cljs.core.contains_QMARK_(inst_46430,inst_46463);
var state_46775__$1 = state_46775;
if(inst_46519){
var statearr_46783_48301 = state_46775__$1;
(statearr_46783_48301[(1)] = (67));

} else {
var statearr_46784_48302 = state_46775__$1;
(statearr_46784_48302[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (70))){
var inst_46431 = (state_46775[(18)]);
var inst_46429 = (state_46775[(19)]);
var inst_46462 = (state_46775[(20)]);
var inst_46369 = (state_46775[(21)]);
var inst_46465 = (state_46775[(22)]);
var inst_46441 = (state_46775[(23)]);
var inst_46432 = (state_46775[(24)]);
var inst_46430 = (state_46775[(17)]);
var inst_46375 = (state_46775[(10)]);
var inst_46531 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_46432,inst_46465,com.wsscode.pathom.parser.zero_inc);
var inst_46532 = com.wsscode.pathom.parser.parallel_process_value(inst_46375,tx,inst_46462,inst_46369,inst_46429,inst_46430,inst_46431,read,mutate,inst_46531,inst_46441);
var inst_46533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46532,(0),null);
var inst_46534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46532,(1),null);
var inst_46535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46532,(2),null);
var inst_46536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46532,(3),null);
var inst_46537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46532,(4),null);
var inst_46429__$1 = inst_46533;
var inst_46430__$1 = inst_46534;
var inst_46431__$1 = inst_46535;
var inst_46432__$1 = inst_46536;
var inst_46433 = inst_46537;
var state_46775__$1 = (function (){var statearr_46785 = state_46775;
(statearr_46785[(18)] = inst_46431__$1);

(statearr_46785[(19)] = inst_46429__$1);

(statearr_46785[(25)] = inst_46433);

(statearr_46785[(24)] = inst_46432__$1);

(statearr_46785[(17)] = inst_46430__$1);

return statearr_46785;
})();
var statearr_46786_48316 = state_46775__$1;
(statearr_46786_48316[(2)] = null);

(statearr_46786_48316[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (62))){
var inst_46499 = (state_46775[(26)]);
var state_46775__$1 = state_46775;
var statearr_46787_48318 = state_46775__$1;
(statearr_46787_48318[(2)] = inst_46499);

(statearr_46787_48318[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (74))){
var state_46775__$1 = state_46775;
var statearr_46788_48319 = state_46775__$1;
(statearr_46788_48319[(1)] = (77));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (110))){
var inst_46623 = (state_46775[(7)]);
var state_46775__$1 = state_46775;
var statearr_46790_48321 = state_46775__$1;
(statearr_46790_48321[(2)] = inst_46623);

(statearr_46790_48321[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (130))){
var inst_46752 = (state_46775[(2)]);
var inst_46753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46752,(0),null);
var inst_46754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46752,(1),null);
var inst_46755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46752,(2),null);
var inst_46756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46752,(3),null);
var inst_46757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46752,(4),null);
var inst_46623 = inst_46753;
var inst_46624 = inst_46754;
var inst_46625 = inst_46755;
var inst_46626 = inst_46756;
var inst_46627 = inst_46757;
var state_46775__$1 = (function (){var statearr_46791 = state_46775;
(statearr_46791[(7)] = inst_46623);

(statearr_46791[(8)] = inst_46626);

(statearr_46791[(9)] = inst_46624);

(statearr_46791[(15)] = inst_46627);

(statearr_46791[(12)] = inst_46625);

return statearr_46791;
})();
var statearr_46792_48324 = state_46775__$1;
(statearr_46792_48324[(2)] = null);

(statearr_46792_48324[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (128))){
var state_46775__$1 = state_46775;
var statearr_46793_48326 = state_46775__$1;
(statearr_46793_48326[(1)] = (131));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (7))){
var inst_46335 = (state_46775[(2)]);
var state_46775__$1 = (function (){var statearr_46795 = state_46775;
(statearr_46795[(27)] = inst_46335);

return statearr_46795;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_46796_48328 = state_46775__$1;
(statearr_46796_48328[(1)] = (8));

} else {
var statearr_46797_48329 = state_46775__$1;
(statearr_46797_48329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (59))){
var inst_46499 = (state_46775[(26)]);
var inst_46375 = (state_46775[(10)]);
var inst_46499__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_46375);
var state_46775__$1 = (function (){var statearr_46798 = state_46775;
(statearr_46798[(26)] = inst_46499__$1);

return statearr_46798;
})();
if(cljs.core.truth_(inst_46499__$1)){
var statearr_46799_48331 = state_46775__$1;
(statearr_46799_48331[(1)] = (61));

} else {
var statearr_46800_48332 = state_46775__$1;
(statearr_46800_48332[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (86))){
var state_46775__$1 = state_46775;
var statearr_46801_48333 = state_46775__$1;
(statearr_46801_48333[(2)] = true);

(statearr_46801_48333[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (20))){
var state_46775__$1 = state_46775;
var statearr_46806_48334 = state_46775__$1;
(statearr_46806_48334[(2)] = key_watchers);

(statearr_46806_48334[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (72))){
var inst_46541 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46807_48335 = state_46775__$1;
(statearr_46807_48335[(2)] = inst_46541);

(statearr_46807_48335[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (58))){
var inst_46431 = (state_46775[(18)]);
var inst_46429 = (state_46775[(19)]);
var inst_46441 = (state_46775[(23)]);
var inst_46463 = (state_46775[(16)]);
var inst_46432 = (state_46775[(24)]);
var inst_46430 = (state_46775[(17)]);
var inst_46375 = (state_46775[(10)]);
var inst_46493 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46494 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_46463];
var inst_46495 = cljs.core.PersistentHashMap.fromArrays(inst_46493,inst_46494);
var inst_46496 = com.wsscode.pathom.trace.trace(inst_46375,inst_46495);
var tmp46802 = inst_46431;
var tmp46803 = inst_46429;
var tmp46804 = inst_46432;
var tmp46805 = inst_46430;
var inst_46429__$1 = tmp46803;
var inst_46430__$1 = tmp46805;
var inst_46431__$1 = tmp46802;
var inst_46432__$1 = tmp46804;
var inst_46433 = inst_46441;
var state_46775__$1 = (function (){var statearr_46808 = state_46775;
(statearr_46808[(18)] = inst_46431__$1);

(statearr_46808[(19)] = inst_46429__$1);

(statearr_46808[(25)] = inst_46433);

(statearr_46808[(24)] = inst_46432__$1);

(statearr_46808[(28)] = inst_46496);

(statearr_46808[(17)] = inst_46430__$1);

return statearr_46808;
})();
var statearr_46809_48337 = state_46775__$1;
(statearr_46809_48337[(2)] = null);

(statearr_46809_48337[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (60))){
var inst_46547 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46810_48338 = state_46775__$1;
(statearr_46810_48338[(2)] = inst_46547);

(statearr_46810_48338[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (27))){
var inst_46399 = cljs.core.PersistentHashSet.EMPTY;
var state_46775__$1 = state_46775;
var statearr_46811_48339 = state_46775__$1;
(statearr_46811_48339[(2)] = inst_46399);

(statearr_46811_48339[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (1))){
var state_46775__$1 = state_46775;
var statearr_46812_48340 = state_46775__$1;
(statearr_46812_48340[(2)] = null);

(statearr_46812_48340[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (69))){
var inst_46543 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46813_48341 = state_46775__$1;
(statearr_46813_48341[(2)] = inst_46543);

(statearr_46813_48341[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (101))){
var inst_46634 = (state_46775[(29)]);
var state_46775__$1 = state_46775;
var statearr_46814_48342 = state_46775__$1;
(statearr_46814_48342[(2)] = inst_46634);

(statearr_46814_48342[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (24))){
var inst_46590 = cljs.core.PersistentHashMap.EMPTY;
var state_46775__$1 = (function (){var statearr_46815 = state_46775;
(statearr_46815[(30)] = inst_46590);

return statearr_46815;
})();
if(cljs.core.truth_(waiting)){
var statearr_46816_48346 = state_46775__$1;
(statearr_46816_48346[(1)] = (80));

} else {
var statearr_46817_48347 = state_46775__$1;
(statearr_46817_48347[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (102))){
var inst_46656 = (state_46775[(31)]);
var inst_46656__$1 = (state_46775[(2)]);
var inst_46657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46656__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_46775__$1 = (function (){var statearr_46818 = state_46775;
(statearr_46818[(31)] = inst_46656__$1);

(statearr_46818[(11)] = inst_46657);

return statearr_46818;
})();
if(cljs.core.truth_(inst_46656__$1)){
var statearr_46819_48348 = state_46775__$1;
(statearr_46819_48348[(1)] = (103));

} else {
var statearr_46820_48349 = state_46775__$1;
(statearr_46820_48349[(1)] = (104));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (55))){
var inst_46429 = (state_46775[(19)]);
var inst_46465 = (state_46775[(22)]);
var inst_46482 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_46429,inst_46465,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_46775__$1 = state_46775;
var statearr_46821_48350 = state_46775__$1;
(statearr_46821_48350[(2)] = inst_46482);

(statearr_46821_48350[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (85))){
var inst_46616 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46616)){
var statearr_46822_48352 = state_46775__$1;
(statearr_46822_48352[(1)] = (89));

} else {
var statearr_46823_48354 = state_46775__$1;
(statearr_46823_48354[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (39))){
var inst_46340 = (state_46775[(32)]);
var inst_46375 = (state_46775[(10)]);
var inst_46386 = (state_46775[(33)]);
var inst_46575 = (state_46775[(2)]);
var inst_46576 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_46577 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_46340];
var inst_46578 = cljs.core.PersistentHashMap.fromArrays(inst_46576,inst_46577);
var inst_46579 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_46375,inst_46386,inst_46578);
var state_46775__$1 = (function (){var statearr_46824 = state_46775;
(statearr_46824[(34)] = inst_46579);

return statearr_46824;
})();
var statearr_46825_48356 = state_46775__$1;
(statearr_46825_48356[(2)] = inst_46575);

(statearr_46825_48356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (88))){
var inst_46613 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46826_48357 = state_46775__$1;
(statearr_46826_48357[(2)] = inst_46613);

(statearr_46826_48357[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (46))){
var inst_46440 = (state_46775[(35)]);
var inst_46459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46440);
var state_46775__$1 = state_46775;
var statearr_46827_48359 = state_46775__$1;
(statearr_46827_48359[(2)] = inst_46459);

(statearr_46827_48359[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46775,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_46828_48362 = state_46775__$1;
(statearr_46828_48362[(1)] = (5));

} else {
var statearr_46829_48363 = state_46775__$1;
(statearr_46829_48363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (77))){
var inst_46429 = (state_46775[(19)]);
var state_46775__$1 = state_46775;
var statearr_46830_48365 = state_46775__$1;
(statearr_46830_48365[(2)] = inst_46429);

(statearr_46830_48365[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (106))){
var inst_46623 = (state_46775[(7)]);
var inst_46375 = (state_46775[(10)]);
var inst_46657 = (state_46775[(11)]);
var inst_46659 = (state_46775[(36)]);
var inst_46668 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_46669 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_46657,max_key_iterations];
var inst_46670 = cljs.core.PersistentHashMap.fromArrays(inst_46668,inst_46669);
var inst_46671 = com.wsscode.pathom.trace.trace(inst_46375,inst_46670);
var inst_46673 = cljs.core.contains_QMARK_(inst_46623,inst_46659);
var inst_46674 = (!(inst_46673));
var state_46775__$1 = (function (){var statearr_46831 = state_46775;
(statearr_46831[(37)] = inst_46671);

return statearr_46831;
})();
if(inst_46674){
var statearr_46832_48379 = state_46775__$1;
(statearr_46832_48379[(1)] = (109));

} else {
var statearr_46833_48380 = state_46775__$1;
(statearr_46833_48380[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (119))){
var inst_46624 = (state_46775[(9)]);
var inst_46657 = (state_46775[(11)]);
var inst_46713 = cljs.core.contains_QMARK_(inst_46624,inst_46657);
var state_46775__$1 = state_46775;
if(inst_46713){
var statearr_46834_48382 = state_46775__$1;
(statearr_46834_48382[(1)] = (121));

} else {
var statearr_46835_48383 = state_46775__$1;
(statearr_46835_48383[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (95))){
var state_46775__$1 = state_46775;
var statearr_46836_48385 = state_46775__$1;
(statearr_46836_48385[(2)] = false);

(statearr_46836_48385[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (54))){
var inst_46549 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46837_48386 = state_46775__$1;
(statearr_46837_48386[(2)] = inst_46549);

(statearr_46837_48386[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (92))){
var inst_46634 = (state_46775[(29)]);
var inst_46627 = (state_46775[(15)]);
var inst_46633 = cljs.core.seq(inst_46627);
var inst_46634__$1 = cljs.core.first(inst_46633);
var inst_46635 = cljs.core.next(inst_46633);
var inst_46637 = (inst_46634__$1 == null);
var inst_46638 = cljs.core.not(inst_46637);
var state_46775__$1 = (function (){var statearr_46838 = state_46775;
(statearr_46838[(29)] = inst_46634__$1);

(statearr_46838[(13)] = inst_46635);

return statearr_46838;
})();
if(inst_46638){
var statearr_46839_48389 = state_46775__$1;
(statearr_46839_48389[(1)] = (94));

} else {
var statearr_46840_48390 = state_46775__$1;
(statearr_46840_48390[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (104))){
var inst_46625 = (state_46775[(12)]);
var inst_46745 = cljs.core.seq(inst_46625);
var state_46775__$1 = state_46775;
if(inst_46745){
var statearr_46841_48393 = state_46775__$1;
(statearr_46841_48393[(1)] = (127));

} else {
var statearr_46842_48394 = state_46775__$1;
(statearr_46842_48394[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (15))){
var state_46775__$1 = state_46775;
var statearr_46843_48395 = state_46775__$1;
(statearr_46843_48395[(2)] = false);

(statearr_46843_48395[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (48))){
var inst_46462 = (state_46775[(20)]);
var inst_46462__$1 = (state_46775[(2)]);
var inst_46463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46462__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_46775__$1 = (function (){var statearr_46844 = state_46775;
(statearr_46844[(20)] = inst_46462__$1);

(statearr_46844[(16)] = inst_46463);

return statearr_46844;
})();
if(cljs.core.truth_(inst_46462__$1)){
var statearr_46845_48397 = state_46775__$1;
(statearr_46845_48397[(1)] = (49));

} else {
var statearr_46846_48398 = state_46775__$1;
(statearr_46846_48398[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (50))){
var inst_46431 = (state_46775[(18)]);
var inst_46551 = cljs.core.seq(inst_46431);
var state_46775__$1 = state_46775;
if(inst_46551){
var statearr_46847_48399 = state_46775__$1;
(statearr_46847_48399[(1)] = (73));

} else {
var statearr_46848_48400 = state_46775__$1;
(statearr_46848_48400[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (116))){
var inst_46693 = (state_46775[(38)]);
var state_46775__$1 = state_46775;
var statearr_46849_48401 = state_46775__$1;
(statearr_46849_48401[(2)] = inst_46693);

(statearr_46849_48401[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (75))){
var inst_46571 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46850_48402 = state_46775__$1;
(statearr_46850_48402[(2)] = inst_46571);

(statearr_46850_48402[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (99))){
var inst_46648 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46851_48404 = state_46775__$1;
(statearr_46851_48404[(2)] = inst_46648);

(statearr_46851_48404[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (21))){
var inst_46366 = cljs.core.PersistentHashMap.EMPTY;
var inst_46367 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_46366);
var state_46775__$1 = state_46775;
var statearr_46852_48407 = state_46775__$1;
(statearr_46852_48407[(2)] = inst_46367);

(statearr_46852_48407[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (31))){
var inst_46422 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46422)){
var statearr_46853_48408 = state_46775__$1;
(statearr_46853_48408[(1)] = (35));

} else {
var statearr_46854_48409 = state_46775__$1;
(statearr_46854_48409[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (113))){
var inst_46375 = (state_46775[(10)]);
var inst_46693 = (state_46775[(38)]);
var inst_46693__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_46375);
var state_46775__$1 = (function (){var statearr_46855 = state_46775;
(statearr_46855[(38)] = inst_46693__$1);

return statearr_46855;
})();
if(cljs.core.truth_(inst_46693__$1)){
var statearr_46856_48411 = state_46775__$1;
(statearr_46856_48411[(1)] = (115));

} else {
var statearr_46857_48412 = state_46775__$1;
(statearr_46857_48412[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (32))){
var state_46775__$1 = state_46775;
var statearr_46858_48414 = state_46775__$1;
(statearr_46858_48414[(2)] = true);

(statearr_46858_48414[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (40))){
var inst_46440 = (state_46775[(35)]);
var inst_46446 = inst_46440.cljs$lang$protocol_mask$partition0$;
var inst_46447 = (inst_46446 & (64));
var inst_46448 = inst_46440.cljs$core$ISeq$;
var inst_46449 = (cljs.core.PROTOCOL_SENTINEL === inst_46448);
var inst_46450 = ((inst_46447) || (inst_46449));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46450)){
var statearr_46859_48420 = state_46775__$1;
(statearr_46859_48420[(1)] = (43));

} else {
var statearr_46860_48429 = state_46775__$1;
(statearr_46860_48429[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (129))){
var inst_46765 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46861_48438 = state_46775__$1;
(statearr_46861_48438[(2)] = inst_46765);

(statearr_46861_48438[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (91))){
var inst_46597 = (state_46775[(39)]);
var inst_46596 = (state_46775[(40)]);
var inst_46363 = (state_46775[(41)]);
var inst_46590 = (state_46775[(30)]);
var inst_46595 = (state_46775[(42)]);
var inst_46621 = (state_46775[(2)]);
var inst_46622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46621,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_46623 = inst_46590;
var inst_46624 = inst_46595;
var inst_46625 = inst_46596;
var inst_46626 = inst_46597;
var inst_46627 = inst_46363;
var state_46775__$1 = (function (){var statearr_46862 = state_46775;
(statearr_46862[(43)] = inst_46622);

(statearr_46862[(7)] = inst_46623);

(statearr_46862[(8)] = inst_46626);

(statearr_46862[(9)] = inst_46624);

(statearr_46862[(15)] = inst_46627);

(statearr_46862[(12)] = inst_46625);

return statearr_46862;
})();
var statearr_46863_48440 = state_46775__$1;
(statearr_46863_48440[(2)] = null);

(statearr_46863_48440[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (117))){
var inst_46698 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46698)){
var statearr_46864_48443 = state_46775__$1;
(statearr_46864_48443[(1)] = (118));

} else {
var statearr_46865_48445 = state_46775__$1;
(statearr_46865_48445[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (108))){
var inst_46743 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46866_48447 = state_46775__$1;
(statearr_46866_48447[(2)] = inst_46743);

(statearr_46866_48447[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (56))){
var inst_46429 = (state_46775[(19)]);
var state_46775__$1 = state_46775;
var statearr_46867_48448 = state_46775__$1;
(statearr_46867_48448[(2)] = inst_46429);

(statearr_46867_48448[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (33))){
var state_46775__$1 = state_46775;
var statearr_46868_48450 = state_46775__$1;
(statearr_46868_48450[(2)] = false);

(statearr_46868_48450[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (13))){
var inst_46357 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46357)){
var statearr_46869_48452 = state_46775__$1;
(statearr_46869_48452[(1)] = (17));

} else {
var statearr_46870_48453 = state_46775__$1;
(statearr_46870_48453[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (22))){
var inst_46340 = (state_46775[(32)]);
var inst_46362 = (state_46775[(44)]);
var inst_46335 = (state_46775[(27)]);
var inst_46363 = (state_46775[(41)]);
var inst_46369 = (state_46775[(21)]);
var inst_46375 = (state_46775[(10)]);
var inst_46369__$1 = (state_46775[(2)]);
var inst_46370 = cljs.core.deref(entity_path_cache);
var inst_46371 = cljs.core.PersistentHashMap.EMPTY;
var inst_46372 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_46370,path,inst_46371);
var inst_46373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_46340], 0));
var inst_46374 = (function (){var key_process_timeout_step__$1 = inst_46335;
var key_process_timeout__$1 = inst_46340;
var map__46330 = inst_46362;
var children = inst_46363;
var key_watchers__$1 = inst_46369__$1;
var path_entity = inst_46372;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__46330,children,key_watchers__$1,path_entity,inst_46340,inst_46362,inst_46335,inst_46363,inst_46369,inst_46375,inst_46369__$1,inst_46370,inst_46371,inst_46372,inst_46373,state_val_46776,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__46330,children,key_watchers__$1,path_entity,inst_46340,inst_46362,inst_46335,inst_46363,inst_46369,inst_46375,inst_46369__$1,inst_46370,inst_46371,inst_46372,inst_46373,state_val_46776,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__46319_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__46319_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__46330,children,key_watchers__$1,path_entity,inst_46340,inst_46362,inst_46335,inst_46363,inst_46369,inst_46375,inst_46369__$1,inst_46370,inst_46371,inst_46372,inst_46373,state_val_46776,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__46330,children,key_watchers__$1,path_entity,inst_46340,inst_46362,inst_46335,inst_46363,inst_46369,inst_46375,inst_46369__$1,inst_46370,inst_46371,inst_46372,inst_46373,state_val_46776,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_46375__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_46373,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_46374);
var inst_46376 = cljs.core.PersistentHashMap.EMPTY;
var inst_46378 = (function (){var key_process_timeout_step__$1 = inst_46335;
var key_process_timeout__$1 = inst_46340;
var map__46330 = inst_46362;
var children = inst_46363;
var key_watchers__$1 = inst_46369__$1;
var path_entity = inst_46372;
var env__$1 = inst_46375__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__46330,children,key_watchers__$1,path_entity,env__$1,inst_46340,inst_46362,inst_46335,inst_46363,inst_46369,inst_46375,inst_46369__$1,inst_46370,inst_46371,inst_46372,inst_46373,inst_46374,inst_46375__$1,inst_46376,state_val_46776,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p__46377){
var map__46871 = p__46377;
var map__46871__$1 = (((((!((map__46871 == null))))?(((((map__46871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46871):map__46871);
var ast = map__46871__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46871__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__46330,children,key_watchers__$1,path_entity,env__$1,inst_46340,inst_46362,inst_46335,inst_46363,inst_46369,inst_46375,inst_46369__$1,inst_46370,inst_46371,inst_46372,inst_46373,inst_46374,inst_46375__$1,inst_46376,state_val_46776,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_46379 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_46378);
var inst_46380 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46376,inst_46379,inst_46363);
var inst_46381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46375__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_46775__$1 = (function (){var statearr_46873 = state_46775;
(statearr_46873[(21)] = inst_46369__$1);

(statearr_46873[(10)] = inst_46375__$1);

(statearr_46873[(45)] = inst_46380);

return statearr_46873;
})();
if(cljs.core.truth_(inst_46381)){
var statearr_46874_48482 = state_46775__$1;
(statearr_46874_48482[(1)] = (23));

} else {
var statearr_46875_48483 = state_46775__$1;
(statearr_46875_48483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (90))){
var inst_46599 = (state_46775[(46)]);
var state_46775__$1 = state_46775;
var statearr_46876_48484 = state_46775__$1;
(statearr_46876_48484[(2)] = inst_46599);

(statearr_46876_48484[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (109))){
var inst_46623 = (state_46775[(7)]);
var inst_46659 = (state_46775[(36)]);
var inst_46676 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_46623,inst_46659,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_46775__$1 = state_46775;
var statearr_46877_48486 = state_46775__$1;
(statearr_46877_48486[(2)] = inst_46676);

(statearr_46877_48486[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (36))){
var inst_46405 = (state_46775[(47)]);
var state_46775__$1 = state_46775;
var statearr_46881_48488 = state_46775__$1;
(statearr_46881_48488[(2)] = inst_46405);

(statearr_46881_48488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (41))){
var state_46775__$1 = state_46775;
var statearr_46882_48489 = state_46775__$1;
(statearr_46882_48489[(2)] = false);

(statearr_46882_48489[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (118))){
var inst_46623 = (state_46775[(7)]);
var inst_46626 = (state_46775[(8)]);
var inst_46624 = (state_46775[(9)]);
var inst_46375 = (state_46775[(10)]);
var inst_46657 = (state_46775[(11)]);
var inst_46625 = (state_46775[(12)]);
var inst_46635 = (state_46775[(13)]);
var inst_46700 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46701 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_46657];
var inst_46702 = cljs.core.PersistentHashMap.fromArrays(inst_46700,inst_46701);
var inst_46703 = com.wsscode.pathom.trace.trace(inst_46375,inst_46702);
var inst_46704 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_46705 = com.wsscode.pathom.parser.watch_pending_key(inst_46375,inst_46657);
var inst_46706 = [inst_46657];
var inst_46707 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_46706);
var inst_46708 = [inst_46705,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_46707];
var inst_46709 = cljs.core.PersistentHashMap.fromArrays(inst_46704,inst_46708);
var inst_46710 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_46625,inst_46709);
var tmp46878 = inst_46623;
var tmp46879 = inst_46626;
var tmp46880 = inst_46624;
var inst_46623__$1 = tmp46878;
var inst_46624__$1 = tmp46880;
var inst_46625__$1 = inst_46710;
var inst_46626__$1 = tmp46879;
var inst_46627 = inst_46635;
var state_46775__$1 = (function (){var statearr_46883 = state_46775;
(statearr_46883[(7)] = inst_46623__$1);

(statearr_46883[(8)] = inst_46626__$1);

(statearr_46883[(48)] = inst_46703);

(statearr_46883[(9)] = inst_46624__$1);

(statearr_46883[(15)] = inst_46627);

(statearr_46883[(12)] = inst_46625__$1);

return statearr_46883;
})();
var statearr_46884_48498 = state_46775__$1;
(statearr_46884_48498[(2)] = null);

(statearr_46884_48498[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (89))){
var inst_46599 = (state_46775[(46)]);
var inst_46618 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46599);
var state_46775__$1 = state_46775;
var statearr_46885_48500 = state_46775__$1;
(statearr_46885_48500[(2)] = inst_46618);

(statearr_46885_48500[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (100))){
var inst_46634 = (state_46775[(29)]);
var inst_46653 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46634);
var state_46775__$1 = state_46775;
var statearr_46886_48503 = state_46775__$1;
(statearr_46886_48503[(2)] = inst_46653);

(statearr_46886_48503[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (131))){
var inst_46623 = (state_46775[(7)]);
var state_46775__$1 = state_46775;
var statearr_46887_48504 = state_46775__$1;
(statearr_46887_48504[(2)] = inst_46623);

(statearr_46887_48504[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (122))){
var state_46775__$1 = state_46775;
var statearr_46888_48505 = state_46775__$1;
(statearr_46888_48505[(1)] = (124));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (43))){
var state_46775__$1 = state_46775;
var statearr_46890_48506 = state_46775__$1;
(statearr_46890_48506[(2)] = true);

(statearr_46890_48506[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (61))){
var inst_46463 = (state_46775[(16)]);
var inst_46430 = (state_46775[(17)]);
var inst_46501 = cljs.core.contains_QMARK_(inst_46430,inst_46463);
var state_46775__$1 = state_46775;
var statearr_46891_48507 = state_46775__$1;
(statearr_46891_48507[(2)] = inst_46501);

(statearr_46891_48507[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (29))){
var inst_46405 = (state_46775[(47)]);
var inst_46411 = inst_46405.cljs$lang$protocol_mask$partition0$;
var inst_46412 = (inst_46411 & (64));
var inst_46413 = inst_46405.cljs$core$ISeq$;
var inst_46414 = (cljs.core.PROTOCOL_SENTINEL === inst_46413);
var inst_46415 = ((inst_46412) || (inst_46414));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46415)){
var statearr_46892_48508 = state_46775__$1;
(statearr_46892_48508[(1)] = (32));

} else {
var statearr_46893_48509 = state_46775__$1;
(statearr_46893_48509[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (44))){
var state_46775__$1 = state_46775;
var statearr_46894_48510 = state_46775__$1;
(statearr_46894_48510[(2)] = false);

(statearr_46894_48510[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (93))){
var inst_46769 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46898_48511 = state_46775__$1;
(statearr_46898_48511[(2)] = inst_46769);

(statearr_46898_48511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (6))){
var inst_46333 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_46775__$1 = state_46775;
var statearr_46899_48512 = state_46775__$1;
(statearr_46899_48512[(2)] = inst_46333);

(statearr_46899_48512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (111))){
var inst_46626 = (state_46775[(8)]);
var inst_46624 = (state_46775[(9)]);
var inst_46625 = (state_46775[(12)]);
var inst_46635 = (state_46775[(13)]);
var inst_46679 = (state_46775[(2)]);
var tmp46895 = inst_46626;
var tmp46896 = inst_46624;
var tmp46897 = inst_46625;
var inst_46623 = inst_46679;
var inst_46624__$1 = tmp46896;
var inst_46625__$1 = tmp46897;
var inst_46626__$1 = tmp46895;
var inst_46627 = inst_46635;
var state_46775__$1 = (function (){var statearr_46903 = state_46775;
(statearr_46903[(7)] = inst_46623);

(statearr_46903[(8)] = inst_46626__$1);

(statearr_46903[(9)] = inst_46624__$1);

(statearr_46903[(15)] = inst_46627);

(statearr_46903[(12)] = inst_46625__$1);

return statearr_46903;
})();
var statearr_46904_48517 = state_46775__$1;
(statearr_46904_48517[(2)] = null);

(statearr_46904_48517[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (28))){
var inst_46405 = (state_46775[(47)]);
var inst_46363 = (state_46775[(41)]);
var inst_46401 = (state_46775[(2)]);
var inst_46402 = cljs.core.PersistentHashSet.EMPTY;
var inst_46403 = cljs.core.PersistentHashMap.EMPTY;
var inst_46404 = cljs.core.seq(inst_46363);
var inst_46405__$1 = cljs.core.first(inst_46404);
var inst_46406 = cljs.core.next(inst_46404);
var inst_46408 = (inst_46405__$1 == null);
var inst_46409 = cljs.core.not(inst_46408);
var state_46775__$1 = (function (){var statearr_46905 = state_46775;
(statearr_46905[(49)] = inst_46406);

(statearr_46905[(47)] = inst_46405__$1);

(statearr_46905[(50)] = inst_46402);

(statearr_46905[(51)] = inst_46403);

(statearr_46905[(52)] = inst_46401);

return statearr_46905;
})();
if(inst_46409){
var statearr_46906_48518 = state_46775__$1;
(statearr_46906_48518[(1)] = (29));

} else {
var statearr_46907_48520 = state_46775__$1;
(statearr_46907_48520[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (64))){
var inst_46431 = (state_46775[(18)]);
var inst_46429 = (state_46775[(19)]);
var inst_46441 = (state_46775[(23)]);
var inst_46463 = (state_46775[(16)]);
var inst_46432 = (state_46775[(24)]);
var inst_46430 = (state_46775[(17)]);
var inst_46375 = (state_46775[(10)]);
var inst_46506 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46507 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_46463];
var inst_46508 = cljs.core.PersistentHashMap.fromArrays(inst_46506,inst_46507);
var inst_46509 = com.wsscode.pathom.trace.trace(inst_46375,inst_46508);
var inst_46510 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_46511 = com.wsscode.pathom.parser.watch_pending_key(inst_46375,inst_46463);
var inst_46512 = [inst_46463];
var inst_46513 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_46512);
var inst_46514 = [inst_46511,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_46513];
var inst_46515 = cljs.core.PersistentHashMap.fromArrays(inst_46510,inst_46514);
var inst_46516 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_46431,inst_46515);
var tmp46900 = inst_46429;
var tmp46901 = inst_46432;
var tmp46902 = inst_46430;
var inst_46429__$1 = tmp46900;
var inst_46430__$1 = tmp46902;
var inst_46431__$1 = inst_46516;
var inst_46432__$1 = tmp46901;
var inst_46433 = inst_46441;
var state_46775__$1 = (function (){var statearr_46908 = state_46775;
(statearr_46908[(18)] = inst_46431__$1);

(statearr_46908[(19)] = inst_46429__$1);

(statearr_46908[(53)] = inst_46509);

(statearr_46908[(25)] = inst_46433);

(statearr_46908[(24)] = inst_46432__$1);

(statearr_46908[(17)] = inst_46430__$1);

return statearr_46908;
})();
var statearr_46909_48524 = state_46775__$1;
(statearr_46909_48524[(2)] = null);

(statearr_46909_48524[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (103))){
var inst_46656 = (state_46775[(31)]);
var inst_46626 = (state_46775[(8)]);
var inst_46375 = (state_46775[(10)]);
var inst_46657 = (state_46775[(11)]);
var inst_46659 = com.wsscode.pathom.parser.ast__GT_out_key(inst_46656);
var inst_46660 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46661 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_46657];
var inst_46662 = cljs.core.PersistentHashMap.fromArrays(inst_46660,inst_46661);
var inst_46663 = com.wsscode.pathom.trace.trace(inst_46375,inst_46662);
var inst_46664 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_46626,inst_46657,(0));
var inst_46665 = (max_key_iterations - (1));
var inst_46666 = (inst_46664 > inst_46665);
var state_46775__$1 = (function (){var statearr_46910 = state_46775;
(statearr_46910[(54)] = inst_46663);

(statearr_46910[(36)] = inst_46659);

return statearr_46910;
})();
if(cljs.core.truth_(inst_46666)){
var statearr_46911_48527 = state_46775__$1;
(statearr_46911_48527[(1)] = (106));

} else {
var statearr_46912_48528 = state_46775__$1;
(statearr_46912_48528[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (51))){
var inst_46573 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46913_48531 = state_46775__$1;
(statearr_46913_48531[(2)] = inst_46573);

(statearr_46913_48531[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (25))){
var inst_46771 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46914_48532 = state_46775__$1;
(statearr_46914_48532[(2)] = inst_46771);


cljs.core.async.impl.ioc_helpers.process_exception(state_46775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (34))){
var inst_46419 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46915_48533 = state_46775__$1;
(statearr_46915_48533[(2)] = inst_46419);

(statearr_46915_48533[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (125))){
var state_46775__$1 = state_46775;
var statearr_46916_48534 = state_46775__$1;
(statearr_46916_48534[(2)] = null);

(statearr_46916_48534[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (17))){
var inst_46341 = (state_46775[(55)]);
var inst_46359 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46341);
var state_46775__$1 = state_46775;
var statearr_46917_48535 = state_46775__$1;
(statearr_46917_48535[(2)] = inst_46359);

(statearr_46917_48535[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (3))){
var inst_46326 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46918_48536 = state_46775__$1;
(statearr_46918_48536[(2)] = inst_46326);


cljs.core.async.impl.ioc_helpers.process_exception(state_46775__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (12))){
var state_46775__$1 = state_46775;
var statearr_46919_48540 = state_46775__$1;
(statearr_46919_48540[(2)] = false);

(statearr_46919_48540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (2))){
var inst_46773 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46775__$1,inst_46773);
} else {
if((state_val_46776 === (66))){
var inst_46545 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46920_48542 = state_46775__$1;
(statearr_46920_48542[(2)] = inst_46545);

(statearr_46920_48542[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (107))){
var inst_46623 = (state_46775[(7)]);
var inst_46659 = (state_46775[(36)]);
var inst_46682 = cljs.core.contains_QMARK_(inst_46623,inst_46659);
var inst_46683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46623,inst_46659);
var inst_46684 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_46683);
var inst_46685 = ((inst_46682) && (inst_46684));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46685)){
var statearr_46921_48556 = state_46775__$1;
(statearr_46921_48556[(1)] = (112));

} else {
var statearr_46922_48557 = state_46775__$1;
(statearr_46922_48557[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (23))){
var inst_46340 = (state_46775[(32)]);
var inst_46375 = (state_46775[(10)]);
var inst_46383 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_46384 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_46340];
var inst_46385 = cljs.core.PersistentHashMap.fromArrays(inst_46383,inst_46384);
var inst_46386 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_46375,inst_46385);
var inst_46396 = cljs.core.PersistentHashMap.EMPTY;
var state_46775__$1 = (function (){var statearr_46923 = state_46775;
(statearr_46923[(56)] = inst_46396);

(statearr_46923[(33)] = inst_46386);

return statearr_46923;
})();
if(cljs.core.truth_(waiting)){
var statearr_46924_48560 = state_46775__$1;
(statearr_46924_48560[(1)] = (26));

} else {
var statearr_46925_48561 = state_46775__$1;
(statearr_46925_48561[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (47))){
var inst_46440 = (state_46775[(35)]);
var state_46775__$1 = state_46775;
var statearr_46926_48563 = state_46775__$1;
(statearr_46926_48563[(2)] = inst_46440);

(statearr_46926_48563[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (35))){
var inst_46405 = (state_46775[(47)]);
var inst_46424 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46405);
var state_46775__$1 = state_46775;
var statearr_46927_48565 = state_46775__$1;
(statearr_46927_48565[(2)] = inst_46424);

(statearr_46927_48565[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (127))){
var inst_46623 = (state_46775[(7)]);
var inst_46626 = (state_46775[(8)]);
var inst_46369 = (state_46775[(21)]);
var inst_46624 = (state_46775[(9)]);
var inst_46375 = (state_46775[(10)]);
var inst_46625 = (state_46775[(12)]);
var inst_46380 = (state_46775[(45)]);
var inst_46750 = com.wsscode.pathom.parser.process_next_message(inst_46375,tx,inst_46624,inst_46380,inst_46625,inst_46626,inst_46369,inst_46623);
var state_46775__$1 = state_46775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46775__$1,(130),inst_46750);
} else {
if((state_val_46776 === (82))){
var inst_46363 = (state_46775[(41)]);
var inst_46599 = (state_46775[(46)]);
var inst_46595 = (state_46775[(2)]);
var inst_46596 = cljs.core.PersistentHashSet.EMPTY;
var inst_46597 = cljs.core.PersistentHashMap.EMPTY;
var inst_46598 = cljs.core.seq(inst_46363);
var inst_46599__$1 = cljs.core.first(inst_46598);
var inst_46600 = cljs.core.next(inst_46598);
var inst_46602 = (inst_46599__$1 == null);
var inst_46603 = cljs.core.not(inst_46602);
var state_46775__$1 = (function (){var statearr_46928 = state_46775;
(statearr_46928[(57)] = inst_46600);

(statearr_46928[(39)] = inst_46597);

(statearr_46928[(40)] = inst_46596);

(statearr_46928[(42)] = inst_46595);

(statearr_46928[(46)] = inst_46599__$1);

return statearr_46928;
})();
if(inst_46603){
var statearr_46929_48570 = state_46775__$1;
(statearr_46929_48570[(1)] = (83));

} else {
var statearr_46930_48571 = state_46775__$1;
(statearr_46930_48571[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (76))){
var inst_46558 = (state_46775[(2)]);
var inst_46559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46558,(0),null);
var inst_46560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46558,(1),null);
var inst_46561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46558,(2),null);
var inst_46562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46558,(3),null);
var inst_46563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46558,(4),null);
var inst_46429 = inst_46559;
var inst_46430 = inst_46560;
var inst_46431 = inst_46561;
var inst_46432 = inst_46562;
var inst_46433 = inst_46563;
var state_46775__$1 = (function (){var statearr_46931 = state_46775;
(statearr_46931[(18)] = inst_46431);

(statearr_46931[(19)] = inst_46429);

(statearr_46931[(25)] = inst_46433);

(statearr_46931[(24)] = inst_46432);

(statearr_46931[(17)] = inst_46430);

return statearr_46931;
})();
var statearr_46932_48572 = state_46775__$1;
(statearr_46932_48572[(2)] = null);

(statearr_46932_48572[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (97))){
var state_46775__$1 = state_46775;
var statearr_46936_48573 = state_46775__$1;
(statearr_46936_48573[(2)] = true);

(statearr_46936_48573[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (19))){
var inst_46362 = (state_46775[(44)]);
var inst_46362__$1 = (state_46775[(2)]);
var inst_46363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46362__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_46775__$1 = (function (){var statearr_46937 = state_46775;
(statearr_46937[(44)] = inst_46362__$1);

(statearr_46937[(41)] = inst_46363);

return statearr_46937;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_46938_48574 = state_46775__$1;
(statearr_46938_48574[(1)] = (20));

} else {
var statearr_46939_48575 = state_46775__$1;
(statearr_46939_48575[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (57))){
var inst_46431 = (state_46775[(18)]);
var inst_46441 = (state_46775[(23)]);
var inst_46432 = (state_46775[(24)]);
var inst_46430 = (state_46775[(17)]);
var inst_46485 = (state_46775[(2)]);
var tmp46933 = inst_46431;
var tmp46934 = inst_46432;
var tmp46935 = inst_46430;
var inst_46429 = inst_46485;
var inst_46430__$1 = tmp46935;
var inst_46431__$1 = tmp46933;
var inst_46432__$1 = tmp46934;
var inst_46433 = inst_46441;
var state_46775__$1 = (function (){var statearr_46940 = state_46775;
(statearr_46940[(18)] = inst_46431__$1);

(statearr_46940[(19)] = inst_46429);

(statearr_46940[(25)] = inst_46433);

(statearr_46940[(24)] = inst_46432__$1);

(statearr_46940[(17)] = inst_46430__$1);

return statearr_46940;
})();
var statearr_46941_48577 = state_46775__$1;
(statearr_46941_48577[(2)] = null);

(statearr_46941_48577[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (68))){
var state_46775__$1 = state_46775;
var statearr_46942_48581 = state_46775__$1;
(statearr_46942_48581[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (11))){
var inst_46341 = (state_46775[(55)]);
var inst_46346 = inst_46341.cljs$lang$protocol_mask$partition0$;
var inst_46347 = (inst_46346 & (64));
var inst_46348 = inst_46341.cljs$core$ISeq$;
var inst_46349 = (cljs.core.PROTOCOL_SENTINEL === inst_46348);
var inst_46350 = ((inst_46347) || (inst_46349));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46350)){
var statearr_46944_48596 = state_46775__$1;
(statearr_46944_48596[(1)] = (14));

} else {
var statearr_46945_48597 = state_46775__$1;
(statearr_46945_48597[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (115))){
var inst_46624 = (state_46775[(9)]);
var inst_46657 = (state_46775[(11)]);
var inst_46695 = cljs.core.contains_QMARK_(inst_46624,inst_46657);
var state_46775__$1 = state_46775;
var statearr_46946_48598 = state_46775__$1;
(statearr_46946_48598[(2)] = inst_46695);

(statearr_46946_48598[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (9))){
var state_46775__$1 = state_46775;
var statearr_46951_48599 = state_46775__$1;
(statearr_46951_48599[(2)] = null);

(statearr_46951_48599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (5))){
var state_46775__$1 = state_46775;
var statearr_46952_48601 = state_46775__$1;
(statearr_46952_48601[(2)] = key_process_timeout_step);

(statearr_46952_48601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (112))){
var inst_46623 = (state_46775[(7)]);
var inst_46626 = (state_46775[(8)]);
var inst_46624 = (state_46775[(9)]);
var inst_46375 = (state_46775[(10)]);
var inst_46657 = (state_46775[(11)]);
var inst_46625 = (state_46775[(12)]);
var inst_46635 = (state_46775[(13)]);
var inst_46687 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46688 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_46657];
var inst_46689 = cljs.core.PersistentHashMap.fromArrays(inst_46687,inst_46688);
var inst_46690 = com.wsscode.pathom.trace.trace(inst_46375,inst_46689);
var tmp46947 = inst_46623;
var tmp46948 = inst_46626;
var tmp46949 = inst_46624;
var tmp46950 = inst_46625;
var inst_46623__$1 = tmp46947;
var inst_46624__$1 = tmp46949;
var inst_46625__$1 = tmp46950;
var inst_46626__$1 = tmp46948;
var inst_46627 = inst_46635;
var state_46775__$1 = (function (){var statearr_46953 = state_46775;
(statearr_46953[(7)] = inst_46623__$1);

(statearr_46953[(8)] = inst_46626__$1);

(statearr_46953[(58)] = inst_46690);

(statearr_46953[(9)] = inst_46624__$1);

(statearr_46953[(15)] = inst_46627);

(statearr_46953[(12)] = inst_46625__$1);

return statearr_46953;
})();
var statearr_46954_48604 = state_46775__$1;
(statearr_46954_48604[(2)] = null);

(statearr_46954_48604[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (83))){
var inst_46599 = (state_46775[(46)]);
var inst_46605 = inst_46599.cljs$lang$protocol_mask$partition0$;
var inst_46606 = (inst_46605 & (64));
var inst_46607 = inst_46599.cljs$core$ISeq$;
var inst_46608 = (cljs.core.PROTOCOL_SENTINEL === inst_46607);
var inst_46609 = ((inst_46606) || (inst_46608));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46609)){
var statearr_46955_48607 = state_46775__$1;
(statearr_46955_48607[(1)] = (86));

} else {
var statearr_46956_48608 = state_46775__$1;
(statearr_46956_48608[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (14))){
var state_46775__$1 = state_46775;
var statearr_46957_48609 = state_46775__$1;
(statearr_46957_48609[(2)] = true);

(statearr_46957_48609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (45))){
var inst_46454 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46958_48610 = state_46775__$1;
(statearr_46958_48610[(2)] = inst_46454);

(statearr_46958_48610[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (53))){
var inst_46429 = (state_46775[(19)]);
var inst_46465 = (state_46775[(22)]);
var inst_46488 = cljs.core.contains_QMARK_(inst_46429,inst_46465);
var inst_46489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46429,inst_46465);
var inst_46490 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_46489);
var inst_46491 = ((inst_46488) && (inst_46490));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46491)){
var statearr_46959_48612 = state_46775__$1;
(statearr_46959_48612[(1)] = (58));

} else {
var statearr_46960_48613 = state_46775__$1;
(statearr_46960_48613[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (78))){
var state_46775__$1 = state_46775;
var statearr_46961_48615 = state_46775__$1;
(statearr_46961_48615[(2)] = null);

(statearr_46961_48615[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (132))){
var state_46775__$1 = state_46775;
var statearr_46962_48616 = state_46775__$1;
(statearr_46962_48616[(2)] = null);

(statearr_46962_48616[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (26))){
var state_46775__$1 = state_46775;
var statearr_46963_48618 = state_46775__$1;
(statearr_46963_48618[(2)] = waiting);

(statearr_46963_48618[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (123))){
var inst_46737 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46964_48619 = state_46775__$1;
(statearr_46964_48619[(2)] = inst_46737);

(statearr_46964_48619[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (16))){
var inst_46354 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46965_48621 = state_46775__$1;
(statearr_46965_48621[(2)] = inst_46354);

(statearr_46965_48621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (133))){
var inst_46763 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46966_48624 = state_46775__$1;
(statearr_46966_48624[(2)] = inst_46763);

(statearr_46966_48624[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (81))){
var inst_46593 = cljs.core.PersistentHashSet.EMPTY;
var state_46775__$1 = state_46775;
var statearr_46967_48625 = state_46775__$1;
(statearr_46967_48625[(2)] = inst_46593);

(statearr_46967_48625[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (120))){
var inst_46739 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46968_48626 = state_46775__$1;
(statearr_46968_48626[(2)] = inst_46739);

(statearr_46968_48626[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (79))){
var inst_46569 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46969_48628 = state_46775__$1;
(statearr_46969_48628[(2)] = inst_46569);

(statearr_46969_48628[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (38))){
var inst_46440 = (state_46775[(35)]);
var inst_46433 = (state_46775[(25)]);
var inst_46439 = cljs.core.seq(inst_46433);
var inst_46440__$1 = cljs.core.first(inst_46439);
var inst_46441 = cljs.core.next(inst_46439);
var inst_46443 = (inst_46440__$1 == null);
var inst_46444 = cljs.core.not(inst_46443);
var state_46775__$1 = (function (){var statearr_46970 = state_46775;
(statearr_46970[(35)] = inst_46440__$1);

(statearr_46970[(23)] = inst_46441);

return statearr_46970;
})();
if(inst_46444){
var statearr_46971_48646 = state_46775__$1;
(statearr_46971_48646[(1)] = (40));

} else {
var statearr_46972_48648 = state_46775__$1;
(statearr_46972_48648[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (126))){
var inst_46735 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46973_48649 = state_46775__$1;
(statearr_46973_48649[(2)] = inst_46735);

(statearr_46973_48649[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (98))){
var state_46775__$1 = state_46775;
var statearr_46974_48650 = state_46775__$1;
(statearr_46974_48650[(2)] = false);

(statearr_46974_48650[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (124))){
var inst_46656 = (state_46775[(31)]);
var inst_46623 = (state_46775[(7)]);
var inst_46626 = (state_46775[(8)]);
var inst_46369 = (state_46775[(21)]);
var inst_46624 = (state_46775[(9)]);
var inst_46375 = (state_46775[(10)]);
var inst_46659 = (state_46775[(36)]);
var inst_46625 = (state_46775[(12)]);
var inst_46635 = (state_46775[(13)]);
var inst_46725 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_46626,inst_46659,com.wsscode.pathom.parser.zero_inc);
var inst_46726 = com.wsscode.pathom.parser.parallel_process_value(inst_46375,tx,inst_46656,inst_46369,inst_46623,inst_46624,inst_46625,read,mutate,inst_46725,inst_46635);
var inst_46727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46726,(0),null);
var inst_46728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46726,(1),null);
var inst_46729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46726,(2),null);
var inst_46730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46726,(3),null);
var inst_46731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46726,(4),null);
var inst_46623__$1 = inst_46727;
var inst_46624__$1 = inst_46728;
var inst_46625__$1 = inst_46729;
var inst_46626__$1 = inst_46730;
var inst_46627 = inst_46731;
var state_46775__$1 = (function (){var statearr_46975 = state_46775;
(statearr_46975[(7)] = inst_46623__$1);

(statearr_46975[(8)] = inst_46626__$1);

(statearr_46975[(9)] = inst_46624__$1);

(statearr_46975[(15)] = inst_46627);

(statearr_46975[(12)] = inst_46625__$1);

return statearr_46975;
})();
var statearr_46976_48656 = state_46775__$1;
(statearr_46976_48656[(2)] = null);

(statearr_46976_48656[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (87))){
var state_46775__$1 = state_46775;
var statearr_46977_48658 = state_46775__$1;
(statearr_46977_48658[(2)] = false);

(statearr_46977_48658[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (30))){
var state_46775__$1 = state_46775;
var statearr_46978_48659 = state_46775__$1;
(statearr_46978_48659[(2)] = false);

(statearr_46978_48659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (73))){
var inst_46431 = (state_46775[(18)]);
var inst_46429 = (state_46775[(19)]);
var inst_46369 = (state_46775[(21)]);
var inst_46432 = (state_46775[(24)]);
var inst_46430 = (state_46775[(17)]);
var inst_46375 = (state_46775[(10)]);
var inst_46380 = (state_46775[(45)]);
var inst_46556 = com.wsscode.pathom.parser.process_next_message(inst_46375,tx,inst_46430,inst_46380,inst_46431,inst_46432,inst_46369,inst_46429);
var state_46775__$1 = state_46775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46775__$1,(76),inst_46556);
} else {
if((state_val_46776 === (96))){
var inst_46651 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46651)){
var statearr_46979_48662 = state_46775__$1;
(statearr_46979_48662[(1)] = (100));

} else {
var statearr_46980_48664 = state_46775__$1;
(statearr_46980_48664[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (10))){
var inst_46341 = (state_46775[(55)]);
var inst_46340 = (state_46775[(2)]);
var inst_46341__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_46343 = (inst_46341__$1 == null);
var inst_46344 = cljs.core.not(inst_46343);
var state_46775__$1 = (function (){var statearr_46981 = state_46775;
(statearr_46981[(32)] = inst_46340);

(statearr_46981[(55)] = inst_46341__$1);

return statearr_46981;
})();
if(inst_46344){
var statearr_46982_48667 = state_46775__$1;
(statearr_46982_48667[(1)] = (11));

} else {
var statearr_46983_48668 = state_46775__$1;
(statearr_46983_48668[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (18))){
var inst_46341 = (state_46775[(55)]);
var state_46775__$1 = state_46775;
var statearr_46984_48669 = state_46775__$1;
(statearr_46984_48669[(2)] = inst_46341);

(statearr_46984_48669[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (105))){
var inst_46767 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46985_48671 = state_46775__$1;
(statearr_46985_48671[(2)] = inst_46767);

(statearr_46985_48671[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (52))){
var inst_46429 = (state_46775[(19)]);
var inst_46465 = (state_46775[(22)]);
var inst_46463 = (state_46775[(16)]);
var inst_46375 = (state_46775[(10)]);
var inst_46474 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_46475 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_46463,max_key_iterations];
var inst_46476 = cljs.core.PersistentHashMap.fromArrays(inst_46474,inst_46475);
var inst_46477 = com.wsscode.pathom.trace.trace(inst_46375,inst_46476);
var inst_46479 = cljs.core.contains_QMARK_(inst_46429,inst_46465);
var inst_46480 = (!(inst_46479));
var state_46775__$1 = (function (){var statearr_46990 = state_46775;
(statearr_46990[(59)] = inst_46477);

return statearr_46990;
})();
if(inst_46480){
var statearr_46991_48673 = state_46775__$1;
(statearr_46991_48673[(1)] = (55));

} else {
var statearr_46992_48674 = state_46775__$1;
(statearr_46992_48674[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (114))){
var inst_46741 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
var statearr_46993_48677 = state_46775__$1;
(statearr_46993_48677[(2)] = inst_46741);

(statearr_46993_48677[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (67))){
var inst_46431 = (state_46775[(18)]);
var inst_46429 = (state_46775[(19)]);
var inst_46441 = (state_46775[(23)]);
var inst_46463 = (state_46775[(16)]);
var inst_46432 = (state_46775[(24)]);
var inst_46430 = (state_46775[(17)]);
var inst_46375 = (state_46775[(10)]);
var inst_46521 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46522 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_46463];
var inst_46523 = cljs.core.PersistentHashMap.fromArrays(inst_46521,inst_46522);
var inst_46524 = com.wsscode.pathom.trace.trace(inst_46375,inst_46523);
var tmp46986 = inst_46431;
var tmp46987 = inst_46429;
var tmp46988 = inst_46432;
var tmp46989 = inst_46430;
var inst_46429__$1 = tmp46987;
var inst_46430__$1 = tmp46989;
var inst_46431__$1 = tmp46986;
var inst_46432__$1 = tmp46988;
var inst_46433 = inst_46441;
var state_46775__$1 = (function (){var statearr_46994 = state_46775;
(statearr_46994[(18)] = inst_46431__$1);

(statearr_46994[(60)] = inst_46524);

(statearr_46994[(19)] = inst_46429__$1);

(statearr_46994[(25)] = inst_46433);

(statearr_46994[(24)] = inst_46432__$1);

(statearr_46994[(17)] = inst_46430__$1);

return statearr_46994;
})();
var statearr_46995_48692 = state_46775__$1;
(statearr_46995_48692[(2)] = null);

(statearr_46995_48692[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (71))){
var state_46775__$1 = state_46775;
var statearr_46996_48693 = state_46775__$1;
(statearr_46996_48693[(2)] = null);

(statearr_46996_48693[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (42))){
var inst_46457 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46457)){
var statearr_46997_48694 = state_46775__$1;
(statearr_46997_48694[(1)] = (46));

} else {
var statearr_46998_48695 = state_46775__$1;
(statearr_46998_48695[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (80))){
var state_46775__$1 = state_46775;
var statearr_46999_48697 = state_46775__$1;
(statearr_46999_48697[(2)] = waiting);

(statearr_46999_48697[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (37))){
var inst_46396 = (state_46775[(56)]);
var inst_46402 = (state_46775[(50)]);
var inst_46363 = (state_46775[(41)]);
var inst_46403 = (state_46775[(51)]);
var inst_46401 = (state_46775[(52)]);
var inst_46427 = (state_46775[(2)]);
var inst_46428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46427,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_46429 = inst_46396;
var inst_46430 = inst_46401;
var inst_46431 = inst_46402;
var inst_46432 = inst_46403;
var inst_46433 = inst_46363;
var state_46775__$1 = (function (){var statearr_47000 = state_46775;
(statearr_47000[(18)] = inst_46431);

(statearr_47000[(61)] = inst_46428);

(statearr_47000[(19)] = inst_46429);

(statearr_47000[(25)] = inst_46433);

(statearr_47000[(24)] = inst_46432);

(statearr_47000[(17)] = inst_46430);

return statearr_47000;
})();
var statearr_47001_48700 = state_46775__$1;
(statearr_47001_48700[(2)] = null);

(statearr_47001_48700[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (63))){
var inst_46504 = (state_46775[(2)]);
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46504)){
var statearr_47002_48701 = state_46775__$1;
(statearr_47002_48701[(1)] = (64));

} else {
var statearr_47003_48702 = state_46775__$1;
(statearr_47003_48702[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (94))){
var inst_46634 = (state_46775[(29)]);
var inst_46640 = inst_46634.cljs$lang$protocol_mask$partition0$;
var inst_46641 = (inst_46640 & (64));
var inst_46642 = inst_46634.cljs$core$ISeq$;
var inst_46643 = (cljs.core.PROTOCOL_SENTINEL === inst_46642);
var inst_46644 = ((inst_46641) || (inst_46643));
var state_46775__$1 = state_46775;
if(cljs.core.truth_(inst_46644)){
var statearr_47004_48705 = state_46775__$1;
(statearr_47004_48705[(1)] = (97));

} else {
var statearr_47005_48707 = state_46775__$1;
(statearr_47005_48707[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (8))){
var inst_46335 = (state_46775[(27)]);
var inst_46337 = (inst_46335.cljs$core$IFn$_invoke$arity$2 ? inst_46335.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_46335.call(null,env,key_process_timeout));
var state_46775__$1 = state_46775;
var statearr_47006_48708 = state_46775__$1;
(statearr_47006_48708[(2)] = inst_46337);

(statearr_47006_48708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (49))){
var inst_46462 = (state_46775[(20)]);
var inst_46463 = (state_46775[(16)]);
var inst_46432 = (state_46775[(24)]);
var inst_46375 = (state_46775[(10)]);
var inst_46465 = com.wsscode.pathom.parser.ast__GT_out_key(inst_46462);
var inst_46466 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46467 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_46463];
var inst_46468 = cljs.core.PersistentHashMap.fromArrays(inst_46466,inst_46467);
var inst_46469 = com.wsscode.pathom.trace.trace(inst_46375,inst_46468);
var inst_46470 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_46432,inst_46463,(0));
var inst_46471 = (max_key_iterations - (1));
var inst_46472 = (inst_46470 > inst_46471);
var state_46775__$1 = (function (){var statearr_47007 = state_46775;
(statearr_47007[(22)] = inst_46465);

(statearr_47007[(62)] = inst_46469);

return statearr_47007;
})();
if(cljs.core.truth_(inst_46472)){
var statearr_47008_48710 = state_46775__$1;
(statearr_47008_48710[(1)] = (52));

} else {
var statearr_47009_48711 = state_46775__$1;
(statearr_47009_48711[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46776 === (84))){
var state_46775__$1 = state_46775;
var statearr_47010_48713 = state_46775__$1;
(statearr_47010_48713[(2)] = false);

(statearr_47010_48713[(1)] = (85));


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
});})(c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto____0 = (function (){
var statearr_47011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47011[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto__);

(statearr_47011[(1)] = (1));

return statearr_47011;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto____1 = (function (state_46775){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_46775);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47012){if((e47012 instanceof Object)){
var ex__38928__auto__ = e47012;
var statearr_47013_48737 = state_46775;
(statearr_47013_48737[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48738 = state_46775;
state_46775 = G__48738;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto__ = function(state_46775){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto____1.call(this,state_46775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__38973__auto__ = (function (){var statearr_47014 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47014[(6)] = c__38971__auto__);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__46322,map__46322__$1,read,mutate,map__46323,map__46323__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__38971__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__47015){
var map__47016 = p__47015;
var map__47016__$1 = (((((!((map__47016 == null))))?(((((map__47016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47016):map__47016);
var pconfig = map__47016__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47016__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__47016,map__47016__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__47018,tx){
var map__47019 = p__47018;
var map__47019__$1 = (((((!((map__47019 == null))))?(((((map__47019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47019):map__47019);
var env = map__47019__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47019__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47019__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47019__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__38971__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38971__auto__,map__47019,map__47019__$1,env,key_process_timeout,active_paths,path,map__47016,map__47016__$1,pconfig,add_error){
return (function (){
var f__38972__auto__ = (function (){var switch__38924__auto__ = ((function (c__38971__auto__,map__47019,map__47019__$1,env,key_process_timeout,active_paths,path,map__47016,map__47016__$1,pconfig,add_error){
return (function (state_47064){
var state_val_47065 = (state_47064[(1)]);
if((state_val_47065 === (7))){
var inst_47040 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
return cljs.core.async.ioc_alts_BANG_(state_47064__$1,(8),inst_47040);
} else {
if((state_val_47065 === (1))){
var state_47064__$1 = state_47064;
var statearr_47066_48747 = state_47064__$1;
(statearr_47066_48747[(2)] = null);

(statearr_47066_48747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (4))){
var inst_47030 = (state_47064[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47064,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_47025 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_47029 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout], 0));
var inst_47030__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_47029,tx);
var inst_47032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47033 = [inst_47030__$1];
var inst_47034 = (new cljs.core.PersistentVector(null,1,(5),inst_47032,inst_47033,null));
var state_47064__$1 = (function (){var statearr_47067 = state_47064;
(statearr_47067[(8)] = inst_47025);

(statearr_47067[(9)] = inst_47034);

(statearr_47067[(7)] = inst_47030__$1);

return statearr_47067;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_47068_48751 = state_47064__$1;
(statearr_47068_48751[(1)] = (5));

} else {
var statearr_47069_48752 = state_47064__$1;
(statearr_47069_48752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (6))){
var inst_47034 = (state_47064[(9)]);
var state_47064__$1 = state_47064;
var statearr_47070_48753 = state_47064__$1;
(statearr_47070_48753[(2)] = inst_47034);

(statearr_47070_48753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (3))){
var inst_47021 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
var statearr_47071_48755 = state_47064__$1;
(statearr_47071_48755[(2)] = inst_47021);


cljs.core.async.impl.ioc_helpers.process_exception(state_47064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (2))){
var inst_47062 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47064__$1,inst_47062);
} else {
if((state_val_47065 === (11))){
var inst_47060 = (state_47064[(2)]);
var state_47064__$1 = state_47064;
var statearr_47072_48758 = state_47064__$1;
(statearr_47072_48758[(2)] = inst_47060);


cljs.core.async.impl.ioc_helpers.process_exception(state_47064__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (9))){
var inst_47043 = (state_47064[(10)]);
var state_47064__$1 = state_47064;
var statearr_47073_48759 = state_47064__$1;
(statearr_47073_48759[(2)] = inst_47043);

(statearr_47073_48759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (5))){
var inst_47034 = (state_47064[(9)]);
var inst_47036 = cljs.core.async.timeout(key_process_timeout);
var inst_47037 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_47034,inst_47036);
var state_47064__$1 = state_47064;
var statearr_47074_48760 = state_47064__$1;
(statearr_47074_48760[(2)] = inst_47037);

(statearr_47074_48760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (10))){
var inst_47049 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_47050 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_47051 = cljs.core.PersistentHashMap.fromArrays(inst_47049,inst_47050);
var inst_47052 = com.wsscode.pathom.trace.trace(env,inst_47051);
var inst_47053 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_47054 = [key_process_timeout];
var inst_47055 = cljs.core.PersistentHashMap.fromArrays(inst_47053,inst_47054);
var inst_47056 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_47055);
var inst_47057 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_47056) : add_error.call(null,env,inst_47056));
var inst_47058 = cljs.core.PersistentHashMap.EMPTY;
var state_47064__$1 = (function (){var statearr_47075 = state_47064;
(statearr_47075[(11)] = inst_47057);

(statearr_47075[(12)] = inst_47052);

return statearr_47075;
})();
var statearr_47076_48764 = state_47064__$1;
(statearr_47076_48764[(2)] = inst_47058);

(statearr_47076_48764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47065 === (8))){
var inst_47030 = (state_47064[(7)]);
var inst_47042 = (state_47064[(2)]);
var inst_47043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47042,(0),null);
var inst_47044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47042,(1),null);
var inst_47045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_47046 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47030,inst_47044);
var state_47064__$1 = (function (){var statearr_47077 = state_47064;
(statearr_47077[(10)] = inst_47043);

(statearr_47077[(13)] = inst_47045);

return statearr_47077;
})();
if(inst_47046){
var statearr_47078_48768 = state_47064__$1;
(statearr_47078_48768[(1)] = (9));

} else {
var statearr_47079_48769 = state_47064__$1;
(statearr_47079_48769[(1)] = (10));

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
});})(c__38971__auto__,map__47019,map__47019__$1,env,key_process_timeout,active_paths,path,map__47016,map__47016__$1,pconfig,add_error))
;
return ((function (switch__38924__auto__,c__38971__auto__,map__47019,map__47019__$1,env,key_process_timeout,active_paths,path,map__47016,map__47016__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto____0 = (function (){
var statearr_47080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47080[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto__);

(statearr_47080[(1)] = (1));

return statearr_47080;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto____1 = (function (state_47064){
while(true){
var ret_value__38926__auto__ = (function (){try{while(true){
var result__38927__auto__ = switch__38924__auto__(state_47064);
if(cljs.core.keyword_identical_QMARK_(result__38927__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38927__auto__;
}
break;
}
}catch (e47081){if((e47081 instanceof Object)){
var ex__38928__auto__ = e47081;
var statearr_47082_48773 = state_47064;
(statearr_47082_48773[(5)] = ex__38928__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38926__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48775 = state_47064;
state_47064 = G__48775;
continue;
} else {
return ret_value__38926__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto__ = function(state_47064){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto____1.call(this,state_47064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38925__auto__;
})()
;})(switch__38924__auto__,c__38971__auto__,map__47019,map__47019__$1,env,key_process_timeout,active_paths,path,map__47016,map__47016__$1,pconfig,add_error))
})();
var state__38973__auto__ = (function (){var statearr_47083 = (f__38972__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38972__auto__.cljs$core$IFn$_invoke$arity$0() : f__38972__auto__.call(null));
(statearr_47083[(6)] = c__38971__auto__);

return statearr_47083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38973__auto__);
});})(c__38971__auto__,map__47019,map__47019__$1,env,key_process_timeout,active_paths,path,map__47016,map__47016__$1,pconfig,add_error))
);

return c__38971__auto__;
});
;})(map__47016,map__47016__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
