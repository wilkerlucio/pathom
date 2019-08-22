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
var G__118958 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__118958,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__118958;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__118959){
var vec__118960 = p__118959;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118960,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__118963){
var vec__118964 = p__118963;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118964,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118964,(1),null);
var call = vec__118964;
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
var G__118967 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__118967,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__118967;
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
var vec__118968 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118968,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__118971){
var vec__118972 = p__118971;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118972,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118972,(1),null);
var ref = vec__118972;
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
return cljs.core.with_meta((function (){var G__118975 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__118975,null,(1),null));
} else {
return G__118975;
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
var G__118980 = arguments.length;
switch (G__118980) {
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

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__118981,unparse_QMARK_){
var map__118982 = p__118981;
var map__118982__$1 = (((((!((map__118982 == null))))?(((((map__118982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__118982):map__118982);
var ast = map__118982__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118982__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118982__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118982__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__118984 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__118982,map__118982__$1,ast,ast_meta,type,component){
return (function (p1__118976_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__118976_SHARP_,unparse_QMARK_);
});})(map__118982,map__118982__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__118984,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__118984;
}
} else {
var map__118985 = ast;
var map__118985__$1 = (((((!((map__118985 == null))))?(((((map__118985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__118985):map__118985);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118985__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118985__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118985__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118985__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
var map__118987 = ast;
var map__118987__$1 = (((((!((map__118987 == null))))?(((((map__118987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__118987):map__118987);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118987__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__118989 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__118989,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__118989;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__118987,map__118987__$1,children,query_meta,key__$1,map__118985,map__118985__$1,key,query,query_root,params,map__118982,map__118982__$1,ast,ast_meta,type,component){
return (function (p__118990){
var map__118991 = p__118990;
var map__118991__$1 = (((((!((map__118991 == null))))?(((((map__118991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__118991):map__118991);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118991__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118991__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118991__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__118993 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__118991,map__118991__$1,union_key,children__$1,component__$1,map__118987,map__118987__$1,children,query_meta,key__$1,map__118985,map__118985__$1,key,query,query_root,params,map__118982,map__118982__$1,ast,ast_meta,type,component){
return (function (p1__118977_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__118977_SHARP_,unparse_QMARK_);
});})(map__118991,map__118991__$1,union_key,children__$1,component__$1,map__118987,map__118987__$1,children,query_meta,key__$1,map__118985,map__118985__$1,key,query,query_root,params,map__118982,map__118982__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__118993,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__118993;
}
})()], null);
});})(map__118987,map__118987__$1,children,query_meta,key__$1,map__118985,map__118985__$1,key,query,query_root,params,map__118982,map__118982__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__118994 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__118987,map__118987__$1,children,query_meta,key__$1,map__118985,map__118985__$1,key,query,query_root,params,map__118982,map__118982__$1,ast,ast_meta,type,component){
return (function (p1__118978_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__118978_SHARP_,unparse_QMARK_);
});})(map__118987,map__118987__$1,children,query_meta,key__$1,map__118985,map__118985__$1,key,query,query_root,params,map__118982,map__118982__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__118994,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__118994;
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
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__118995_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__118995_SHARP_),p1__118995_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__118996){
var map__118997 = p__118996;
var map__118997__$1 = (((((!((map__118997 == null))))?(((((map__118997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__118997):map__118997);
var union_entry = map__118997__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__118997__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
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
return (function (children,p__118999){
var map__119000 = p__118999;
var map__119000__$1 = (((((!((map__119000 == null))))?(((((map__119000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119000):map__119000);
var focus = map__119000__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119000__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119000__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5718__auto__,map__119000,map__119000__$1,focus,key,type,q_index){
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
});})(source,temp__5718__auto__,map__119000,map__119000__$1,focus,key,type,q_index))
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
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__119002){
var map__119003 = p__119002;
var map__119003__$1 = (((((!((map__119003 == null))))?(((((map__119003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119003):map__119003);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119003__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119003__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__119003,map__119003__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__21490__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__21491__auto__ = (function (){var map__119005 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__119005__$1 = (((((!((map__119005 == null))))?(((((map__119005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119005):map__119005);
var tx_ast = map__119005__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119005__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__119011 = children;
var vec__119012 = G__119011;
var seq__119013 = cljs.core.seq(vec__119012);
var first__119014 = cljs.core.first(seq__119013);
var seq__119013__$1 = cljs.core.next(seq__119013);
var map__119015 = first__119014;
var map__119015__$1 = (((((!((map__119015 == null))))?(((((map__119015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119015):map__119015);
var ast = map__119015__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119015__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119015__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119015__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119015__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__119013__$1;
var res__$1 = res;
var G__119011__$1 = G__119011;
while(true){
var res__$2 = res__$1;
var vec__119026 = G__119011__$1;
var seq__119027 = cljs.core.seq(vec__119026);
var first__119028 = cljs.core.first(seq__119027);
var seq__119027__$1 = cljs.core.next(seq__119027);
var map__119029 = first__119028;
var map__119029__$1 = (((((!((map__119029 == null))))?(((((map__119029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119029):map__119029);
var ast__$1 = map__119029__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119029__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119029__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119029__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119029__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__119027__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__119031 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__119031__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__119031,new cljs.core.Keyword(null,"query","query",-1288509510)):G__119031);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119031__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__119031__$1;
}
})();
var value = (function (){var G__119032 = type__$1;
var G__119032__$1 = (((G__119032 instanceof cljs.core.Keyword))?G__119032.fqn:null);
switch (G__119032__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__119033 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__119033__$1 = (((((!((map__119033 == null))))?(((((map__119033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119033):map__119033);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119033__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__121107 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__121108 = tail__$1;
res__$1 = G__121107;
G__119011__$1 = G__121108;
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
var map__119035 = com.wsscode.pathom.parser.query__GT_ast(tx);
var map__119035__$1 = (((((!((map__119035 == null))))?(((((map__119035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119035):map__119035);
var tx_ast = map__119035__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119035__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__119041 = children;
var vec__119042 = G__119041;
var seq__119043 = cljs.core.seq(vec__119042);
var first__119044 = cljs.core.first(seq__119043);
var seq__119043__$1 = cljs.core.next(seq__119043);
var map__119045 = first__119044;
var map__119045__$1 = (((((!((map__119045 == null))))?(((((map__119045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119045):map__119045);
var ast = map__119045__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119045__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119045__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119045__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119045__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__119043__$1;
var res__$1 = res;
var G__119041__$1 = G__119041;
while(true){
var res__$2 = res__$1;
var vec__119056 = G__119041__$1;
var seq__119057 = cljs.core.seq(vec__119056);
var first__119058 = cljs.core.first(seq__119057);
var seq__119057__$1 = cljs.core.next(seq__119057);
var map__119059 = first__119058;
var map__119059__$1 = (((((!((map__119059 == null))))?(((((map__119059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119059):map__119059);
var ast__$1 = map__119059__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119059__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119059__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119059__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119059__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__119057__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var env__$2 = (function (){var G__119061 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$1], null)], 0));
var G__119061__$1 = (((query__$1 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__119061,new cljs.core.Keyword(null,"query","query",-1288509510)):G__119061);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119061__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__119061__$1;
}
})();
var value = (function (){var G__119062 = type__$1;
var G__119062__$1 = (((G__119062 instanceof cljs.core.Keyword))?G__119062.fqn:null);
switch (G__119062__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__119063 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__119063__$1 = (((((!((map__119063 == null))))?(((((map__119063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119063):map__119063);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119063__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__121144 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__121145 = tail__$1;
res__$1 = G__121144;
G__119041__$1 = G__121145;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__119003,map__119003__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__119065){
var map__119066 = p__119065;
var map__119066__$1 = (((((!((map__119066 == null))))?(((((map__119066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119066):map__119066);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119066__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119066__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__119066,map__119066__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__119066,map__119066__$1,read,mutate){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__119066,map__119066__$1,read,mutate){
return (function (state_119462){
var state_val_119463 = (state_119462[(1)]);
if((state_val_119463 === (121))){
var inst_119400 = (state_119462[(7)]);
var inst_119418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119400);
var state_119462__$1 = state_119462;
var statearr_119464_121148 = state_119462__$1;
(statearr_119464_121148[(2)] = inst_119418);

(statearr_119464_121148[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (65))){
var inst_119239 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_119240 = (new Error(inst_119239));
var inst_119241 = (function(){throw inst_119240})();
var state_119462__$1 = state_119462;
var statearr_119465_121150 = state_119462__$1;
(statearr_119465_121150[(2)] = inst_119241);

(statearr_119465_121150[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (70))){
var inst_119172 = (state_119462[(8)]);
var inst_119151 = (state_119462[(9)]);
var inst_119142 = (state_119462[(10)]);
var inst_119256 = (state_119462[(2)]);
var inst_119257 = com.wsscode.pathom.parser.ast__GT_out_key(inst_119172);
var inst_119258 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_119142,inst_119257,inst_119256);
var inst_119142__$1 = inst_119258;
var inst_119143 = inst_119151;
var state_119462__$1 = (function (){var statearr_119466 = state_119462;
(statearr_119466[(11)] = inst_119143);

(statearr_119466[(10)] = inst_119142__$1);

return statearr_119466;
})();
var statearr_119467_121151 = state_119462__$1;
(statearr_119467_121151[(2)] = null);

(statearr_119467_121151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (62))){
var inst_119235 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119468_121156 = state_119462__$1;
(statearr_119468_121156[(2)] = inst_119235);

(statearr_119468_121156[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (74))){
var inst_119287 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119287)){
var statearr_119469_121166 = state_119462__$1;
(statearr_119469_121166[(1)] = (78));

} else {
var statearr_119470_121167 = state_119462__$1;
(statearr_119470_121167[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (110))){
var inst_119440 = (state_119462[(12)]);
var inst_119440__$1 = (state_119462[(2)]);
var inst_119441 = com.wsscode.common.async_cljs.chan_QMARK_(inst_119440__$1);
var state_119462__$1 = (function (){var statearr_119471 = state_119462;
(statearr_119471[(12)] = inst_119440__$1);

return statearr_119471;
})();
if(inst_119441){
var statearr_119472_121168 = state_119462__$1;
(statearr_119472_121168[(1)] = (132));

} else {
var statearr_119473_121170 = state_119462__$1;
(statearr_119473_121170[(1)] = (133));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (130))){
var inst_119391 = (state_119462[(13)]);
var inst_119435 = (state_119462[(2)]);
var inst_119436 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_119391) : read.call(null,inst_119391));
var state_119462__$1 = (function (){var statearr_119474 = state_119462;
(statearr_119474[(14)] = inst_119435);

return statearr_119474;
})();
var statearr_119475_121172 = state_119462__$1;
(statearr_119475_121172[(2)] = inst_119436);

(statearr_119475_121172[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (128))){
var state_119462__$1 = state_119462;
var statearr_119476_121173 = state_119462__$1;
(statearr_119476_121173[(2)] = null);

(statearr_119476_121173[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (7))){
var inst_119458 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119477_121174 = state_119462__$1;
(statearr_119477_121174[(2)] = inst_119458);


cljs.core.async.impl.ioc_helpers.process_exception(state_119462__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (59))){
var inst_119230 = (state_119462[(15)]);
var inst_119229 = (state_119462[(2)]);
var inst_119230__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119229,new cljs.core.Keyword(null,"action","action",-811238024));
var state_119462__$1 = (function (){var statearr_119478 = state_119462;
(statearr_119478[(15)] = inst_119230__$1);

return statearr_119478;
})();
if(cljs.core.truth_(inst_119230__$1)){
var statearr_119479_121177 = state_119462__$1;
(statearr_119479_121177[(1)] = (60));

} else {
var statearr_119480_121178 = state_119462__$1;
(statearr_119480_121178[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (86))){
var inst_119321 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119481_121180 = state_119462__$1;
(statearr_119481_121180[(2)] = inst_119321);

(statearr_119481_121180[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (20))){
var state_119462__$1 = state_119462;
var statearr_119482_121183 = state_119462__$1;
(statearr_119482_121183[(2)] = true);

(statearr_119482_121183[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (72))){
var inst_119271 = (state_119462[(16)]);
var inst_119276 = inst_119271.cljs$lang$protocol_mask$partition0$;
var inst_119277 = (inst_119276 & (64));
var inst_119278 = inst_119271.cljs$core$ISeq$;
var inst_119279 = (cljs.core.PROTOCOL_SENTINEL === inst_119278);
var inst_119280 = ((inst_119277) || (inst_119279));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119280)){
var statearr_119483_121205 = state_119462__$1;
(statearr_119483_121205[(1)] = (75));

} else {
var statearr_119484_121206 = state_119462__$1;
(statearr_119484_121206[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (58))){
var inst_119208 = (state_119462[(17)]);
var state_119462__$1 = state_119462;
var statearr_119485_121207 = state_119462__$1;
(statearr_119485_121207[(2)] = inst_119208);

(statearr_119485_121207[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (60))){
var inst_119230 = (state_119462[(15)]);
var inst_119232 = (inst_119230.cljs$core$IFn$_invoke$arity$0 ? inst_119230.cljs$core$IFn$_invoke$arity$0() : inst_119230.call(null));
var state_119462__$1 = state_119462;
var statearr_119486_121208 = state_119462__$1;
(statearr_119486_121208[(2)] = inst_119232);

(statearr_119486_121208[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (27))){
var inst_119077 = (state_119462[(18)]);
var inst_119264 = (state_119462[(2)]);
var inst_119265 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_119266 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_119267 = cljs.core.PersistentHashMap.fromArrays(inst_119265,inst_119266);
var inst_119268 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_119077,inst_119267);
var state_119462__$1 = (function (){var statearr_119487 = state_119462;
(statearr_119487[(19)] = inst_119268);

return statearr_119487;
})();
var statearr_119488_121211 = state_119462__$1;
(statearr_119488_121211[(2)] = inst_119264);

(statearr_119488_121211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (1))){
var state_119462__$1 = state_119462;
var statearr_119489_121212 = state_119462__$1;
(statearr_119489_121212[(2)] = null);

(statearr_119489_121212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (69))){
var inst_119248 = (state_119462[(20)]);
var state_119462__$1 = state_119462;
var statearr_119490_121213 = state_119462__$1;
(statearr_119490_121213[(2)] = inst_119248);

(statearr_119490_121213[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (101))){
var inst_119295 = (state_119462[(21)]);
var inst_119365 = (state_119462[(22)]);
var inst_119366 = (state_119462[(23)]);
var inst_119364 = (state_119462[(24)]);
var inst_119370 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_119371 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_119366];
var inst_119372 = cljs.core.PersistentHashMap.fromArrays(inst_119370,inst_119371);
var inst_119373 = com.wsscode.pathom.trace.trace(inst_119295,inst_119372);
var inst_119375 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_119376 = [inst_119364,inst_119365];
var inst_119377 = cljs.core.PersistentHashMap.fromArrays(inst_119375,inst_119376);
var inst_119378 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119295,inst_119377], 0));
var inst_119379 = (inst_119365 == null);
var state_119462__$1 = (function (){var statearr_119491 = state_119462;
(statearr_119491[(25)] = inst_119378);

(statearr_119491[(26)] = inst_119373);

return statearr_119491;
})();
if(cljs.core.truth_(inst_119379)){
var statearr_119492_121219 = state_119462__$1;
(statearr_119492_121219[(1)] = (104));

} else {
var statearr_119493_121220 = state_119462__$1;
(statearr_119493_121220[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (24))){
var inst_119115 = (state_119462[(27)]);
var state_119462__$1 = state_119462;
var statearr_119494_121222 = state_119462__$1;
(statearr_119494_121222[(2)] = inst_119115);

(statearr_119494_121222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (102))){
var inst_119334 = (state_119462[(28)]);
var state_119462__$1 = state_119462;
var statearr_119495_121224 = state_119462__$1;
(statearr_119495_121224[(2)] = inst_119334);

(statearr_119495_121224[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (135))){
var inst_119444 = (state_119462[(2)]);
var inst_119445 = com.wsscode.common.async_cljs.throw_err(inst_119444);
var state_119462__$1 = state_119462;
var statearr_119496_121227 = state_119462__$1;
(statearr_119496_121227[(2)] = inst_119445);

(statearr_119496_121227[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (55))){
var state_119462__$1 = state_119462;
var statearr_119497_121230 = state_119462__$1;
(statearr_119497_121230[(2)] = false);

(statearr_119497_121230[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (85))){
var state_119462__$1 = state_119462;
var statearr_119498_121231 = state_119462__$1;
(statearr_119498_121231[(2)] = false);

(statearr_119498_121231[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (39))){
var inst_119262 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119499_121235 = state_119462__$1;
(statearr_119499_121235[(2)] = inst_119262);

(statearr_119499_121235[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (88))){
var inst_119307 = (state_119462[(29)]);
var state_119462__$1 = state_119462;
var statearr_119500_121236 = state_119462__$1;
(statearr_119500_121236[(2)] = inst_119307);

(statearr_119500_121236[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (46))){
var inst_119248 = (state_119462[(20)]);
var inst_119248__$1 = (state_119462[(2)]);
var inst_119249 = com.wsscode.common.async_cljs.chan_QMARK_(inst_119248__$1);
var state_119462__$1 = (function (){var statearr_119501 = state_119462;
(statearr_119501[(20)] = inst_119248__$1);

return statearr_119501;
})();
if(inst_119249){
var statearr_119502_121245 = state_119462__$1;
(statearr_119502_121245[(1)] = (68));

} else {
var statearr_119503_121276 = state_119462__$1;
(statearr_119503_121276[(1)] = (69));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_119462,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_119072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119072)){
var statearr_119504_121278 = state_119462__$1;
(statearr_119504_121278[(1)] = (5));

} else {
var statearr_119505_121280 = state_119462__$1;
(statearr_119505_121280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (77))){
var inst_119284 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119506_121282 = state_119462__$1;
(statearr_119506_121282[(2)] = inst_119284);

(statearr_119506_121282[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (106))){
var inst_119365 = (state_119462[(22)]);
var inst_119384 = (state_119462[(2)]);
var inst_119385 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_119386 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119385,inst_119365);
var state_119462__$1 = (function (){var statearr_119507 = state_119462;
(statearr_119507[(30)] = inst_119384);

return statearr_119507;
})();
if(inst_119386){
var statearr_119508_121284 = state_119462__$1;
(statearr_119508_121284[(1)] = (107));

} else {
var statearr_119509_121285 = state_119462__$1;
(statearr_119509_121285[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (119))){
var state_119462__$1 = state_119462;
var statearr_119510_121286 = state_119462__$1;
(statearr_119510_121286[(2)] = false);

(statearr_119510_121286[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (95))){
var state_119462__$1 = state_119462;
var statearr_119511_121287 = state_119462__$1;
(statearr_119511_121287[(2)] = true);

(statearr_119511_121287[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (54))){
var state_119462__$1 = state_119462;
var statearr_119512_121288 = state_119462__$1;
(statearr_119512_121288[(2)] = true);

(statearr_119512_121288[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (92))){
var inst_119342 = (state_119462[(31)]);
var inst_119348 = inst_119342.cljs$lang$protocol_mask$partition0$;
var inst_119349 = (inst_119348 & (64));
var inst_119350 = inst_119342.cljs$core$ISeq$;
var inst_119351 = (cljs.core.PROTOCOL_SENTINEL === inst_119350);
var inst_119352 = ((inst_119349) || (inst_119351));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119352)){
var statearr_119513_121289 = state_119462__$1;
(statearr_119513_121289[(1)] = (95));

} else {
var statearr_119514_121290 = state_119462__$1;
(statearr_119514_121290[(1)] = (96));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (104))){
var inst_119378 = (state_119462[(25)]);
var inst_119381 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_119378,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_119462__$1 = state_119462;
var statearr_119515_121304 = state_119462__$1;
(statearr_119515_121304[(2)] = inst_119381);

(statearr_119515_121304[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (15))){
var inst_119079 = (state_119462[(32)]);
var state_119462__$1 = state_119462;
var statearr_119516_121305 = state_119462__$1;
(statearr_119516_121305[(2)] = inst_119079);

(statearr_119516_121305[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (48))){
var state_119462__$1 = state_119462;
var statearr_119517_121306 = state_119462__$1;
(statearr_119517_121306[(2)] = null);

(statearr_119517_121306[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (50))){
var inst_119208 = (state_119462[(17)]);
var inst_119199 = (state_119462[(33)]);
var inst_119176 = (state_119462[(34)]);
var inst_119174 = (state_119462[(35)]);
var inst_119206 = (state_119462[(2)]);
var inst_119208__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_119199,inst_119174,inst_119176) : mutate.call(null,inst_119199,inst_119174,inst_119176));
var inst_119210 = (inst_119208__$1 == null);
var inst_119211 = cljs.core.not(inst_119210);
var state_119462__$1 = (function (){var statearr_119518 = state_119462;
(statearr_119518[(17)] = inst_119208__$1);

(statearr_119518[(36)] = inst_119206);

return statearr_119518;
})();
if(inst_119211){
var statearr_119519_121309 = state_119462__$1;
(statearr_119519_121309[(1)] = (51));

} else {
var statearr_119520_121310 = state_119462__$1;
(statearr_119520_121310[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (116))){
var state_119462__$1 = state_119462;
var statearr_119521_121311 = state_119462__$1;
(statearr_119521_121311[(2)] = false);

(statearr_119521_121311[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (75))){
var state_119462__$1 = state_119462;
var statearr_119522_121313 = state_119462__$1;
(statearr_119522_121313[(2)] = true);

(statearr_119522_121313[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (99))){
var inst_119342 = (state_119462[(31)]);
var state_119462__$1 = state_119462;
var statearr_119523_121314 = state_119462__$1;
(statearr_119523_121314[(2)] = inst_119342);

(statearr_119523_121314[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (21))){
var state_119462__$1 = state_119462;
var statearr_119524_121316 = state_119462__$1;
(statearr_119524_121316[(2)] = false);

(statearr_119524_121316[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (31))){
var state_119462__$1 = state_119462;
var statearr_119525_121318 = state_119462__$1;
(statearr_119525_121318[(2)] = true);

(statearr_119525_121318[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (113))){
var inst_119394 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_119395 = (new Error(inst_119394));
var inst_119396 = (function(){throw inst_119395})();
var state_119462__$1 = state_119462;
var statearr_119526_121320 = state_119462__$1;
(statearr_119526_121320[(2)] = inst_119396);

(statearr_119526_121320[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (32))){
var state_119462__$1 = state_119462;
var statearr_119527_121321 = state_119462__$1;
(statearr_119527_121321[(2)] = false);

(statearr_119527_121321[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (40))){
var inst_119186 = (state_119462[(37)]);
var inst_119189 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_119186,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_119462__$1 = state_119462;
var statearr_119528_121323 = state_119462__$1;
(statearr_119528_121323[(2)] = inst_119189);

(statearr_119528_121323[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (129))){
var inst_119431 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_119432 = (new Error(inst_119431));
var inst_119433 = (function(){throw inst_119432})();
var state_119462__$1 = state_119462;
var statearr_119529_121324 = state_119462__$1;
(statearr_119529_121324[(2)] = inst_119433);

(statearr_119529_121324[(1)] = (130));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (91))){
var inst_119456 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119530_121328 = state_119462__$1;
(statearr_119530_121328[(2)] = inst_119456);

(statearr_119530_121328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (117))){
var inst_119416 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119416)){
var statearr_119531_121329 = state_119462__$1;
(statearr_119531_121329[(1)] = (121));

} else {
var statearr_119532_121330 = state_119462__$1;
(statearr_119532_121330[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (108))){
var inst_119384 = (state_119462[(30)]);
var state_119462__$1 = state_119462;
var statearr_119533_121331 = state_119462__$1;
(statearr_119533_121331[(2)] = inst_119384);

(statearr_119533_121331[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (56))){
var inst_119221 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119534_121332 = state_119462__$1;
(statearr_119534_121332[(2)] = inst_119221);

(statearr_119534_121332[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (33))){
var inst_119164 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119535_121333 = state_119462__$1;
(statearr_119535_121333[(2)] = inst_119164);

(statearr_119535_121333[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (13))){
var inst_119092 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119536_121334 = state_119462__$1;
(statearr_119536_121334[(2)] = inst_119092);

(statearr_119536_121334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (22))){
var inst_119129 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119537_121335 = state_119462__$1;
(statearr_119537_121335[(2)] = inst_119129);

(statearr_119537_121335[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (90))){
var inst_119342 = (state_119462[(31)]);
var inst_119335 = (state_119462[(38)]);
var inst_119341 = cljs.core.seq(inst_119335);
var inst_119342__$1 = cljs.core.first(inst_119341);
var inst_119343 = cljs.core.next(inst_119341);
var inst_119345 = (inst_119342__$1 == null);
var inst_119346 = cljs.core.not(inst_119345);
var state_119462__$1 = (function (){var statearr_119538 = state_119462;
(statearr_119538[(31)] = inst_119342__$1);

(statearr_119538[(39)] = inst_119343);

return statearr_119538;
})();
if(inst_119346){
var statearr_119539_121339 = state_119462__$1;
(statearr_119539_121339[(1)] = (92));

} else {
var statearr_119540_121340 = state_119462__$1;
(statearr_119540_121340[(1)] = (93));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (109))){
var inst_119367 = (state_119462[(40)]);
var inst_119391 = (state_119462[(2)]);
var state_119462__$1 = (function (){var statearr_119541 = state_119462;
(statearr_119541[(13)] = inst_119391);

return statearr_119541;
})();
var G__119542_121341 = inst_119367;
var G__119542_121342__$1 = (((G__119542_121341 instanceof cljs.core.Keyword))?G__119542_121341.fqn:null);
switch (G__119542_121342__$1) {
case "call":
var statearr_119543_121344 = state_119462__$1;
(statearr_119543_121344[(1)] = (111));


break;
case "prop":
case "join":
case "union":
var statearr_119544_121345 = state_119462__$1;
(statearr_119544_121345[(1)] = (127));


break;
default:
var statearr_119545_121346 = state_119462__$1;
(statearr_119545_121346[(1)] = (131));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (36))){
var inst_119172 = (state_119462[(8)]);
var inst_119172__$1 = (state_119462[(2)]);
var inst_119173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119172__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_119174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119172__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_119175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119172__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_119176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119172__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_119462__$1 = (function (){var statearr_119546 = state_119462;
(statearr_119546[(8)] = inst_119172__$1);

(statearr_119546[(41)] = inst_119173);

(statearr_119546[(42)] = inst_119175);

(statearr_119546[(34)] = inst_119176);

(statearr_119546[(35)] = inst_119174);

return statearr_119546;
})();
if(cljs.core.truth_(inst_119172__$1)){
var statearr_119547_121348 = state_119462__$1;
(statearr_119547_121348[(1)] = (37));

} else {
var statearr_119548_121349 = state_119462__$1;
(statearr_119548_121349[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (41))){
var inst_119186 = (state_119462[(37)]);
var state_119462__$1 = state_119462;
var statearr_119549_121350 = state_119462__$1;
(statearr_119549_121350[(2)] = inst_119186);

(statearr_119549_121350[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (118))){
var state_119462__$1 = state_119462;
var statearr_119550_121351 = state_119462__$1;
(statearr_119550_121351[(2)] = true);

(statearr_119550_121351[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (89))){
var inst_119305 = (state_119462[(43)]);
var inst_119293 = (state_119462[(44)]);
var inst_119329 = (state_119462[(2)]);
var inst_119330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119329,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_119331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119329,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_119332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119329,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_119333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119329,new cljs.core.Keyword(null,"params","params",710516235));
var inst_119334 = inst_119305;
var inst_119335 = inst_119293;
var state_119462__$1 = (function (){var statearr_119551 = state_119462;
(statearr_119551[(28)] = inst_119334);

(statearr_119551[(45)] = inst_119331);

(statearr_119551[(46)] = inst_119330);

(statearr_119551[(47)] = inst_119332);

(statearr_119551[(48)] = inst_119333);

(statearr_119551[(38)] = inst_119335);

return statearr_119551;
})();
var statearr_119552_121356 = state_119462__$1;
(statearr_119552_121356[(2)] = null);

(statearr_119552_121356[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (100))){
var inst_119364 = (state_119462[(24)]);
var inst_119364__$1 = (state_119462[(2)]);
var inst_119365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119364__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_119366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119364__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_119367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119364__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_119368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119364__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_119462__$1 = (function (){var statearr_119553 = state_119462;
(statearr_119553[(22)] = inst_119365);

(statearr_119553[(23)] = inst_119366);

(statearr_119553[(24)] = inst_119364__$1);

(statearr_119553[(49)] = inst_119368);

(statearr_119553[(40)] = inst_119367);

return statearr_119553;
})();
if(cljs.core.truth_(inst_119364__$1)){
var statearr_119554_121357 = state_119462__$1;
(statearr_119554_121357[(1)] = (101));

} else {
var statearr_119555_121359 = state_119462__$1;
(statearr_119555_121359[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (131))){
var state_119462__$1 = state_119462;
var statearr_119556_121360 = state_119462__$1;
(statearr_119556_121360[(2)] = null);

(statearr_119556_121360[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (122))){
var inst_119400 = (state_119462[(7)]);
var state_119462__$1 = state_119462;
var statearr_119557_121361 = state_119462__$1;
(statearr_119557_121361[(2)] = inst_119400);

(statearr_119557_121361[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (43))){
var inst_119102 = (state_119462[(50)]);
var inst_119192 = (state_119462[(51)]);
var inst_119196 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_119192,new cljs.core.Keyword(null,"query","query",-1288509510),inst_119102);
var state_119462__$1 = state_119462;
var statearr_119558_121362 = state_119462__$1;
(statearr_119558_121362[(2)] = inst_119196);

(statearr_119558_121362[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (61))){
var state_119462__$1 = state_119462;
var statearr_119559_121363 = state_119462__$1;
(statearr_119559_121363[(2)] = null);

(statearr_119559_121363[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (29))){
var state_119462__$1 = state_119462;
var statearr_119560_121364 = state_119462__$1;
(statearr_119560_121364[(2)] = false);

(statearr_119560_121364[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (44))){
var inst_119192 = (state_119462[(51)]);
var state_119462__$1 = state_119462;
var statearr_119561_121365 = state_119462__$1;
(statearr_119561_121365[(2)] = inst_119192);

(statearr_119561_121365[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (93))){
var state_119462__$1 = state_119462;
var statearr_119562_121366 = state_119462__$1;
(statearr_119562_121366[(2)] = false);

(statearr_119562_121366[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (6))){
var inst_119271 = (state_119462[(16)]);
var inst_119271__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_119273 = (inst_119271__$1 == null);
var inst_119274 = cljs.core.not(inst_119273);
var state_119462__$1 = (function (){var statearr_119563 = state_119462;
(statearr_119563[(16)] = inst_119271__$1);

return statearr_119563;
})();
if(inst_119274){
var statearr_119564_121368 = state_119462__$1;
(statearr_119564_121368[(1)] = (72));

} else {
var statearr_119565_121369 = state_119462__$1;
(statearr_119565_121369[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (111))){
var state_119462__$1 = state_119462;
if(cljs.core.truth_(mutate)){
var statearr_119566_121373 = state_119462__$1;
(statearr_119566_121373[(1)] = (112));

} else {
var statearr_119567_121374 = state_119462__$1;
(statearr_119567_121374[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (28))){
var inst_119150 = (state_119462[(52)]);
var inst_119156 = inst_119150.cljs$lang$protocol_mask$partition0$;
var inst_119157 = (inst_119156 & (64));
var inst_119158 = inst_119150.cljs$core$ISeq$;
var inst_119159 = (cljs.core.PROTOCOL_SENTINEL === inst_119158);
var inst_119160 = ((inst_119157) || (inst_119159));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119160)){
var statearr_119568_121375 = state_119462__$1;
(statearr_119568_121375[(1)] = (31));

} else {
var statearr_119569_121376 = state_119462__$1;
(statearr_119569_121376[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (134))){
var inst_119334 = (state_119462[(28)]);
var inst_119343 = (state_119462[(39)]);
var inst_119364 = (state_119462[(24)]);
var inst_119448 = (state_119462[(2)]);
var inst_119449 = com.wsscode.pathom.parser.ast__GT_out_key(inst_119364);
var inst_119450 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_119334,inst_119449,inst_119448);
var inst_119334__$1 = inst_119450;
var inst_119335 = inst_119343;
var state_119462__$1 = (function (){var statearr_119570 = state_119462;
(statearr_119570[(28)] = inst_119334__$1);

(statearr_119570[(38)] = inst_119335);

return statearr_119570;
})();
var statearr_119571_121378 = state_119462__$1;
(statearr_119571_121378[(2)] = null);

(statearr_119571_121378[(1)] = (90));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (64))){
var state_119462__$1 = state_119462;
var statearr_119572_121379 = state_119462__$1;
(statearr_119572_121379[(2)] = null);

(statearr_119572_121379[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (103))){
var inst_119454 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119573_121381 = state_119462__$1;
(statearr_119573_121381[(2)] = inst_119454);

(statearr_119573_121381[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (51))){
var inst_119208 = (state_119462[(17)]);
var inst_119213 = inst_119208.cljs$lang$protocol_mask$partition0$;
var inst_119214 = (inst_119213 & (64));
var inst_119215 = inst_119208.cljs$core$ISeq$;
var inst_119216 = (cljs.core.PROTOCOL_SENTINEL === inst_119215);
var inst_119217 = ((inst_119214) || (inst_119216));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119217)){
var statearr_119574_121383 = state_119462__$1;
(statearr_119574_121383[(1)] = (54));

} else {
var statearr_119575_121384 = state_119462__$1;
(statearr_119575_121384[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (25))){
var inst_119113 = (state_119462[(53)]);
var inst_119101 = (state_119462[(54)]);
var inst_119137 = (state_119462[(2)]);
var inst_119138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119137,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_119139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119137,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_119140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119137,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_119141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119137,new cljs.core.Keyword(null,"params","params",710516235));
var inst_119142 = inst_119113;
var inst_119143 = inst_119101;
var state_119462__$1 = (function (){var statearr_119576 = state_119462;
(statearr_119576[(55)] = inst_119141);

(statearr_119576[(11)] = inst_119143);

(statearr_119576[(10)] = inst_119142);

(statearr_119576[(56)] = inst_119139);

(statearr_119576[(57)] = inst_119140);

(statearr_119576[(58)] = inst_119138);

return statearr_119576;
})();
var statearr_119577_121388 = state_119462__$1;
(statearr_119577_121388[(2)] = null);

(statearr_119577_121388[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (34))){
var inst_119150 = (state_119462[(52)]);
var inst_119169 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119150);
var state_119462__$1 = state_119462;
var statearr_119578_121389 = state_119462__$1;
(statearr_119578_121389[(2)] = inst_119169);

(statearr_119578_121389[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (125))){
var state_119462__$1 = state_119462;
var statearr_119579_121390 = state_119462__$1;
(statearr_119579_121390[(2)] = null);

(statearr_119579_121390[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (17))){
var inst_119115 = (state_119462[(27)]);
var inst_119121 = inst_119115.cljs$lang$protocol_mask$partition0$;
var inst_119122 = (inst_119121 & (64));
var inst_119123 = inst_119115.cljs$core$ISeq$;
var inst_119124 = (cljs.core.PROTOCOL_SENTINEL === inst_119123);
var inst_119125 = ((inst_119122) || (inst_119124));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119125)){
var statearr_119580_121394 = state_119462__$1;
(statearr_119580_121394[(1)] = (20));

} else {
var statearr_119581_121395 = state_119462__$1;
(statearr_119581_121395[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (3))){
var inst_119068 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119582_121396 = state_119462__$1;
(statearr_119582_121396[(2)] = inst_119068);


cljs.core.async.impl.ioc_helpers.process_exception(state_119462__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (12))){
var state_119462__$1 = state_119462;
var statearr_119583_121397 = state_119462__$1;
(statearr_119583_121397[(2)] = false);

(statearr_119583_121397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (2))){
var inst_119460 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119462__$1,inst_119460);
} else {
if((state_val_119463 === (66))){
var inst_119199 = (state_119462[(33)]);
var inst_119243 = (state_119462[(2)]);
var inst_119244 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_119199) : read.call(null,inst_119199));
var state_119462__$1 = (function (){var statearr_119584 = state_119462;
(statearr_119584[(59)] = inst_119243);

return statearr_119584;
})();
var statearr_119585_121399 = state_119462__$1;
(statearr_119585_121399[(2)] = inst_119244);

(statearr_119585_121399[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (107))){
var inst_119294 = (state_119462[(60)]);
var inst_119384 = (state_119462[(30)]);
var inst_119388 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_119384,new cljs.core.Keyword(null,"query","query",-1288509510),inst_119294);
var state_119462__$1 = state_119462;
var statearr_119586_121400 = state_119462__$1;
(statearr_119586_121400[(2)] = inst_119388);

(statearr_119586_121400[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (23))){
var inst_119115 = (state_119462[(27)]);
var inst_119134 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119115);
var state_119462__$1 = state_119462;
var statearr_119587_121402 = state_119462__$1;
(statearr_119587_121402[(2)] = inst_119134);

(statearr_119587_121402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (47))){
var state_119462__$1 = state_119462;
if(cljs.core.truth_(mutate)){
var statearr_119588_121403 = state_119462__$1;
(statearr_119588_121403[(1)] = (48));

} else {
var statearr_119589_121404 = state_119462__$1;
(statearr_119589_121404[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (35))){
var inst_119150 = (state_119462[(52)]);
var state_119462__$1 = state_119462;
var statearr_119590_121405 = state_119462__$1;
(statearr_119590_121405[(2)] = inst_119150);

(statearr_119590_121405[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (127))){
var state_119462__$1 = state_119462;
if(cljs.core.truth_(read)){
var statearr_119591_121408 = state_119462__$1;
(statearr_119591_121408[(1)] = (128));

} else {
var statearr_119592_121409 = state_119462__$1;
(statearr_119592_121409[(1)] = (129));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (82))){
var state_119462__$1 = state_119462;
var statearr_119593_121412 = state_119462__$1;
(statearr_119593_121412[(2)] = false);

(statearr_119593_121412[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (76))){
var state_119462__$1 = state_119462;
var statearr_119594_121417 = state_119462__$1;
(statearr_119594_121417[(2)] = false);

(statearr_119594_121417[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (97))){
var inst_119356 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119595_121428 = state_119462__$1;
(statearr_119595_121428[(2)] = inst_119356);

(statearr_119595_121428[(1)] = (94));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (19))){
var inst_119132 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119132)){
var statearr_119596_121429 = state_119462__$1;
(statearr_119596_121429[(1)] = (23));

} else {
var statearr_119597_121430 = state_119462__$1;
(statearr_119597_121430[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (57))){
var inst_119208 = (state_119462[(17)]);
var inst_119226 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119208);
var state_119462__$1 = state_119462;
var statearr_119598_121432 = state_119462__$1;
(statearr_119598_121432[(2)] = inst_119226);

(statearr_119598_121432[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (68))){
var inst_119248 = (state_119462[(20)]);
var state_119462__$1 = state_119462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119462__$1,(71),inst_119248);
} else {
if((state_val_119463 === (11))){
var state_119462__$1 = state_119462;
var statearr_119599_121434 = state_119462__$1;
(statearr_119599_121434[(2)] = true);

(statearr_119599_121434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (115))){
var inst_119400 = (state_119462[(7)]);
var inst_119405 = inst_119400.cljs$lang$protocol_mask$partition0$;
var inst_119406 = (inst_119405 & (64));
var inst_119407 = inst_119400.cljs$core$ISeq$;
var inst_119408 = (cljs.core.PROTOCOL_SENTINEL === inst_119407);
var inst_119409 = ((inst_119406) || (inst_119408));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119409)){
var statearr_119600_121440 = state_119462__$1;
(statearr_119600_121440[(1)] = (118));

} else {
var statearr_119601_121442 = state_119462__$1;
(statearr_119601_121442[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (9))){
var state_119462__$1 = state_119462;
var statearr_119602_121443 = state_119462__$1;
(statearr_119602_121443[(2)] = false);

(statearr_119602_121443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (5))){
var inst_119079 = (state_119462[(32)]);
var inst_119074 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_119075 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_119076 = cljs.core.PersistentHashMap.fromArrays(inst_119074,inst_119075);
var inst_119077 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_119076);
var inst_119079__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_119081 = (inst_119079__$1 == null);
var inst_119082 = cljs.core.not(inst_119081);
var state_119462__$1 = (function (){var statearr_119603 = state_119462;
(statearr_119603[(32)] = inst_119079__$1);

(statearr_119603[(18)] = inst_119077);

return statearr_119603;
})();
if(inst_119082){
var statearr_119604_121444 = state_119462__$1;
(statearr_119604_121444[(1)] = (8));

} else {
var statearr_119605_121445 = state_119462__$1;
(statearr_119605_121445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (112))){
var state_119462__$1 = state_119462;
var statearr_119606_121447 = state_119462__$1;
(statearr_119606_121447[(2)] = null);

(statearr_119606_121447[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (83))){
var inst_119324 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119324)){
var statearr_119607_121450 = state_119462__$1;
(statearr_119607_121450[(1)] = (87));

} else {
var statearr_119608_121451 = state_119462__$1;
(statearr_119608_121451[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (14))){
var inst_119079 = (state_119462[(32)]);
var inst_119097 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119079);
var state_119462__$1 = state_119462;
var statearr_119609_121452 = state_119462__$1;
(statearr_119609_121452[(2)] = inst_119097);

(statearr_119609_121452[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (45))){
var inst_119175 = (state_119462[(42)]);
var inst_119199 = (state_119462[(2)]);
var state_119462__$1 = (function (){var statearr_119610 = state_119462;
(statearr_119610[(33)] = inst_119199);

return statearr_119610;
})();
var G__119611_121459 = inst_119175;
var G__119611_121460__$1 = (((G__119611_121459 instanceof cljs.core.Keyword))?G__119611_121459.fqn:null);
switch (G__119611_121460__$1) {
case "call":
var statearr_119612_121469 = state_119462__$1;
(statearr_119612_121469[(1)] = (47));


break;
case "prop":
case "join":
case "union":
var statearr_119613_121470 = state_119462__$1;
(statearr_119613_121470[(1)] = (63));


break;
default:
var statearr_119614_121474 = state_119462__$1;
(statearr_119614_121474[(1)] = (67));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (53))){
var inst_119224 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119224)){
var statearr_119615_121515 = state_119462__$1;
(statearr_119615_121515[(1)] = (57));

} else {
var statearr_119616_121519 = state_119462__$1;
(statearr_119616_121519[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (78))){
var inst_119271 = (state_119462[(16)]);
var inst_119289 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119271);
var state_119462__$1 = state_119462;
var statearr_119617_121544 = state_119462__$1;
(statearr_119617_121544[(2)] = inst_119289);

(statearr_119617_121544[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (132))){
var inst_119440 = (state_119462[(12)]);
var state_119462__$1 = state_119462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119462__$1,(135),inst_119440);
} else {
if((state_val_119463 === (26))){
var inst_119143 = (state_119462[(11)]);
var inst_119150 = (state_119462[(52)]);
var inst_119149 = cljs.core.seq(inst_119143);
var inst_119150__$1 = cljs.core.first(inst_119149);
var inst_119151 = cljs.core.next(inst_119149);
var inst_119153 = (inst_119150__$1 == null);
var inst_119154 = cljs.core.not(inst_119153);
var state_119462__$1 = (function (){var statearr_119618 = state_119462;
(statearr_119618[(9)] = inst_119151);

(statearr_119618[(52)] = inst_119150__$1);

return statearr_119618;
})();
if(inst_119154){
var statearr_119619_121560 = state_119462__$1;
(statearr_119619_121560[(1)] = (28));

} else {
var statearr_119620_121561 = state_119462__$1;
(statearr_119620_121561[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (123))){
var inst_119422 = (state_119462[(61)]);
var inst_119421 = (state_119462[(2)]);
var inst_119422__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119421,new cljs.core.Keyword(null,"action","action",-811238024));
var state_119462__$1 = (function (){var statearr_119621 = state_119462;
(statearr_119621[(61)] = inst_119422__$1);

return statearr_119621;
})();
if(cljs.core.truth_(inst_119422__$1)){
var statearr_119622_121562 = state_119462__$1;
(statearr_119622_121562[(1)] = (124));

} else {
var statearr_119623_121564 = state_119462__$1;
(statearr_119623_121564[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (16))){
var inst_119115 = (state_119462[(27)]);
var inst_119101 = (state_119462[(54)]);
var inst_119100 = (state_119462[(2)]);
var inst_119101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119100,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_119102 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_119100);
var inst_119103 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_119113 = cljs.core.PersistentHashMap.EMPTY;
var inst_119114 = cljs.core.seq(inst_119101__$1);
var inst_119115__$1 = cljs.core.first(inst_119114);
var inst_119116 = cljs.core.next(inst_119114);
var inst_119118 = (inst_119115__$1 == null);
var inst_119119 = cljs.core.not(inst_119118);
var state_119462__$1 = (function (){var statearr_119624 = state_119462;
(statearr_119624[(53)] = inst_119113);

(statearr_119624[(62)] = inst_119116);

(statearr_119624[(27)] = inst_119115__$1);

(statearr_119624[(50)] = inst_119102);

(statearr_119624[(63)] = inst_119103);

(statearr_119624[(54)] = inst_119101__$1);

return statearr_119624;
})();
if(inst_119119){
var statearr_119625_121568 = state_119462__$1;
(statearr_119625_121568[(1)] = (17));

} else {
var statearr_119626_121569 = state_119462__$1;
(statearr_119626_121569[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (133))){
var inst_119440 = (state_119462[(12)]);
var state_119462__$1 = state_119462;
var statearr_119627_121570 = state_119462__$1;
(statearr_119627_121570[(2)] = inst_119440);

(statearr_119627_121570[(1)] = (134));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (81))){
var inst_119307 = (state_119462[(29)]);
var inst_119313 = inst_119307.cljs$lang$protocol_mask$partition0$;
var inst_119314 = (inst_119313 & (64));
var inst_119315 = inst_119307.cljs$core$ISeq$;
var inst_119316 = (cljs.core.PROTOCOL_SENTINEL === inst_119315);
var inst_119317 = ((inst_119314) || (inst_119316));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119317)){
var statearr_119628_121575 = state_119462__$1;
(statearr_119628_121575[(1)] = (84));

} else {
var statearr_119629_121577 = state_119462__$1;
(statearr_119629_121577[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (120))){
var inst_119413 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119630_121584 = state_119462__$1;
(statearr_119630_121584[(2)] = inst_119413);

(statearr_119630_121584[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (79))){
var inst_119271 = (state_119462[(16)]);
var state_119462__$1 = state_119462;
var statearr_119631_121602 = state_119462__$1;
(statearr_119631_121602[(2)] = inst_119271);

(statearr_119631_121602[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (38))){
var inst_119142 = (state_119462[(10)]);
var state_119462__$1 = state_119462;
var statearr_119632_121620 = state_119462__$1;
(statearr_119632_121620[(2)] = inst_119142);

(statearr_119632_121620[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (126))){
var inst_119427 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
var statearr_119633_121623 = state_119462__$1;
(statearr_119633_121623[(2)] = inst_119427);

(statearr_119633_121623[(1)] = (110));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (98))){
var inst_119342 = (state_119462[(31)]);
var inst_119361 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119342);
var state_119462__$1 = state_119462;
var statearr_119634_121624 = state_119462__$1;
(statearr_119634_121624[(2)] = inst_119361);

(statearr_119634_121624[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (124))){
var inst_119422 = (state_119462[(61)]);
var inst_119424 = (inst_119422.cljs$core$IFn$_invoke$arity$0 ? inst_119422.cljs$core$IFn$_invoke$arity$0() : inst_119422.call(null));
var state_119462__$1 = state_119462;
var statearr_119635_121625 = state_119462__$1;
(statearr_119635_121625[(2)] = inst_119424);

(statearr_119635_121625[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (87))){
var inst_119307 = (state_119462[(29)]);
var inst_119326 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119307);
var state_119462__$1 = state_119462;
var statearr_119636_121626 = state_119462__$1;
(statearr_119636_121626[(2)] = inst_119326);

(statearr_119636_121626[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (30))){
var inst_119167 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119167)){
var statearr_119637_121627 = state_119462__$1;
(statearr_119637_121627[(1)] = (34));

} else {
var statearr_119638_121629 = state_119462__$1;
(statearr_119638_121629[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (73))){
var state_119462__$1 = state_119462;
var statearr_119639_121630 = state_119462__$1;
(statearr_119639_121630[(2)] = false);

(statearr_119639_121630[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (96))){
var state_119462__$1 = state_119462;
var statearr_119640_121631 = state_119462__$1;
(statearr_119640_121631[(2)] = false);

(statearr_119640_121631[(1)] = (97));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (10))){
var inst_119095 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119095)){
var statearr_119641_121634 = state_119462__$1;
(statearr_119641_121634[(1)] = (14));

} else {
var statearr_119642_121636 = state_119462__$1;
(statearr_119642_121636[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (18))){
var state_119462__$1 = state_119462;
var statearr_119643_121637 = state_119462__$1;
(statearr_119643_121637[(2)] = false);

(statearr_119643_121637[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (105))){
var inst_119378 = (state_119462[(25)]);
var state_119462__$1 = state_119462;
var statearr_119644_121640 = state_119462__$1;
(statearr_119644_121640[(2)] = inst_119378);

(statearr_119644_121640[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (52))){
var state_119462__$1 = state_119462;
var statearr_119645_121642 = state_119462__$1;
(statearr_119645_121642[(2)] = false);

(statearr_119645_121642[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (114))){
var inst_119400 = (state_119462[(7)]);
var inst_119391 = (state_119462[(13)]);
var inst_119366 = (state_119462[(23)]);
var inst_119368 = (state_119462[(49)]);
var inst_119398 = (state_119462[(2)]);
var inst_119400__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_119391,inst_119366,inst_119368) : mutate.call(null,inst_119391,inst_119366,inst_119368));
var inst_119402 = (inst_119400__$1 == null);
var inst_119403 = cljs.core.not(inst_119402);
var state_119462__$1 = (function (){var statearr_119646 = state_119462;
(statearr_119646[(7)] = inst_119400__$1);

(statearr_119646[(64)] = inst_119398);

return statearr_119646;
})();
if(inst_119403){
var statearr_119647_121644 = state_119462__$1;
(statearr_119647_121644[(1)] = (115));

} else {
var statearr_119648_121646 = state_119462__$1;
(statearr_119648_121646[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (67))){
var state_119462__$1 = state_119462;
var statearr_119649_121648 = state_119462__$1;
(statearr_119649_121648[(2)] = null);

(statearr_119649_121648[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (71))){
var inst_119252 = (state_119462[(2)]);
var inst_119253 = com.wsscode.common.async_cljs.throw_err(inst_119252);
var state_119462__$1 = state_119462;
var statearr_119650_121653 = state_119462__$1;
(statearr_119650_121653[(2)] = inst_119253);

(statearr_119650_121653[(1)] = (70));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (42))){
var inst_119173 = (state_119462[(41)]);
var inst_119192 = (state_119462[(2)]);
var inst_119193 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_119194 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119193,inst_119173);
var state_119462__$1 = (function (){var statearr_119651 = state_119462;
(statearr_119651[(51)] = inst_119192);

return statearr_119651;
})();
if(inst_119194){
var statearr_119652_121655 = state_119462__$1;
(statearr_119652_121655[(1)] = (43));

} else {
var statearr_119653_121656 = state_119462__$1;
(statearr_119653_121656[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (80))){
var inst_119307 = (state_119462[(29)]);
var inst_119293 = (state_119462[(44)]);
var inst_119292 = (state_119462[(2)]);
var inst_119293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119292,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_119294 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_119292);
var inst_119295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_119305 = cljs.core.PersistentHashMap.EMPTY;
var inst_119306 = cljs.core.seq(inst_119293__$1);
var inst_119307__$1 = cljs.core.first(inst_119306);
var inst_119308 = cljs.core.next(inst_119306);
var inst_119310 = (inst_119307__$1 == null);
var inst_119311 = cljs.core.not(inst_119310);
var state_119462__$1 = (function (){var statearr_119654 = state_119462;
(statearr_119654[(21)] = inst_119295);

(statearr_119654[(29)] = inst_119307__$1);

(statearr_119654[(65)] = inst_119308);

(statearr_119654[(60)] = inst_119294);

(statearr_119654[(43)] = inst_119305);

(statearr_119654[(44)] = inst_119293__$1);

return statearr_119654;
})();
if(inst_119311){
var statearr_119655_121664 = state_119462__$1;
(statearr_119655_121664[(1)] = (81));

} else {
var statearr_119656_121665 = state_119462__$1;
(statearr_119656_121665[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (37))){
var inst_119172 = (state_119462[(8)]);
var inst_119173 = (state_119462[(41)]);
var inst_119103 = (state_119462[(63)]);
var inst_119174 = (state_119462[(35)]);
var inst_119178 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_119179 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_119174];
var inst_119180 = cljs.core.PersistentHashMap.fromArrays(inst_119178,inst_119179);
var inst_119181 = com.wsscode.pathom.trace.trace(inst_119103,inst_119180);
var inst_119183 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_119184 = [inst_119172,inst_119173];
var inst_119185 = cljs.core.PersistentHashMap.fromArrays(inst_119183,inst_119184);
var inst_119186 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119103,inst_119185], 0));
var inst_119187 = (inst_119173 == null);
var state_119462__$1 = (function (){var statearr_119657 = state_119462;
(statearr_119657[(66)] = inst_119181);

(statearr_119657[(37)] = inst_119186);

return statearr_119657;
})();
if(cljs.core.truth_(inst_119187)){
var statearr_119658_121668 = state_119462__$1;
(statearr_119658_121668[(1)] = (40));

} else {
var statearr_119659_121669 = state_119462__$1;
(statearr_119659_121669[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (63))){
var state_119462__$1 = state_119462;
if(cljs.core.truth_(read)){
var statearr_119660_121670 = state_119462__$1;
(statearr_119660_121670[(1)] = (64));

} else {
var statearr_119661_121671 = state_119462__$1;
(statearr_119661_121671[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (94))){
var inst_119359 = (state_119462[(2)]);
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119359)){
var statearr_119662_121672 = state_119462__$1;
(statearr_119662_121672[(1)] = (98));

} else {
var statearr_119663_121673 = state_119462__$1;
(statearr_119663_121673[(1)] = (99));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (8))){
var inst_119079 = (state_119462[(32)]);
var inst_119084 = inst_119079.cljs$lang$protocol_mask$partition0$;
var inst_119085 = (inst_119084 & (64));
var inst_119086 = inst_119079.cljs$core$ISeq$;
var inst_119087 = (cljs.core.PROTOCOL_SENTINEL === inst_119086);
var inst_119088 = ((inst_119085) || (inst_119087));
var state_119462__$1 = state_119462;
if(cljs.core.truth_(inst_119088)){
var statearr_119664_121677 = state_119462__$1;
(statearr_119664_121677[(1)] = (11));

} else {
var statearr_119665_121678 = state_119462__$1;
(statearr_119665_121678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (49))){
var inst_119202 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_119203 = (new Error(inst_119202));
var inst_119204 = (function(){throw inst_119203})();
var state_119462__$1 = state_119462;
var statearr_119666_121679 = state_119462__$1;
(statearr_119666_121679[(2)] = inst_119204);

(statearr_119666_121679[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119463 === (84))){
var state_119462__$1 = state_119462;
var statearr_119667_121680 = state_119462__$1;
(statearr_119667_121680[(2)] = true);

(statearr_119667_121680[(1)] = (86));


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
});})(c__39003__auto__,map__119066,map__119066__$1,read,mutate))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__119066,map__119066__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto____0 = (function (){
var statearr_119668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119668[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto__);

(statearr_119668[(1)] = (1));

return statearr_119668;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto____1 = (function (state_119462){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_119462);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e119669){if((e119669 instanceof Object)){
var ex__38933__auto__ = e119669;
var statearr_119670_121687 = state_119462;
(statearr_119670_121687[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_119462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119669;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121691 = state_119462;
state_119462 = G__121691;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto__ = function(state_119462){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto____1.call(this,state_119462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__119066,map__119066__$1,read,mutate))
})();
var state__39005__auto__ = (function (){var statearr_119671 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_119671[(6)] = c__39003__auto__);

return statearr_119671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__119066,map__119066__$1,read,mutate))
);

return c__39003__auto__;
});
;})(map__119066,map__119066__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__119672,key){
var map__119673 = p__119672;
var map__119673__$1 = (((((!((map__119673 == null))))?(((((map__119673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119673):map__119673);
var env = map__119673__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119673__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var external_wait_ignore_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__119673__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192),(3000));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__39003__auto___121695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto___121695,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto___121695,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_119697){
var state_val_119698 = (state_119697[(1)]);
if((state_val_119698 === (1))){
var inst_119675 = cljs.core.async.timeout((1));
var state_119697__$1 = state_119697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119697__$1,(2),inst_119675);
} else {
if((state_val_119698 === (2))){
var inst_119677 = (state_119697[(2)]);
var inst_119678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_119679 = cljs.core.deref(inst_119678);
var inst_119680 = cljs.core.contains_QMARK_(inst_119679,key);
var state_119697__$1 = (function (){var statearr_119699 = state_119697;
(statearr_119699[(7)] = inst_119677);

return statearr_119699;
})();
if(inst_119680){
var statearr_119700_121702 = state_119697__$1;
(statearr_119700_121702[(1)] = (3));

} else {
var statearr_119701_121706 = state_119697__$1;
(statearr_119701_121706[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119698 === (3))){
var inst_119682 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_119683 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_119684 = cljs.core.PersistentHashMap.fromArrays(inst_119682,inst_119683);
var inst_119685 = com.wsscode.pathom.trace.trace(env,inst_119684);
var inst_119686 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_119687 = [key];
var inst_119688 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_119687);
var inst_119689 = [inst_119688];
var inst_119690 = cljs.core.PersistentHashMap.fromArrays(inst_119686,inst_119689);
var inst_119691 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_119690);
var inst_119692 = cljs.core.async.close_BANG_(ch);
var state_119697__$1 = (function (){var statearr_119702 = state_119697;
(statearr_119702[(8)] = inst_119685);

(statearr_119702[(9)] = inst_119691);

return statearr_119702;
})();
var statearr_119703_121710 = state_119697__$1;
(statearr_119703_121710[(2)] = inst_119692);

(statearr_119703_121710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119698 === (4))){
var state_119697__$1 = state_119697;
var statearr_119704_121713 = state_119697__$1;
(statearr_119704_121713[(2)] = null);

(statearr_119704_121713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119698 === (5))){
var inst_119695 = (state_119697[(2)]);
var state_119697__$1 = state_119697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119697__$1,inst_119695);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto___121695,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__38929__auto__,c__39003__auto___121695,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____0 = (function (){
var statearr_119705 = [null,null,null,null,null,null,null,null,null,null];
(statearr_119705[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__);

(statearr_119705[(1)] = (1));

return statearr_119705;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____1 = (function (state_119697){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_119697);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e119706){if((e119706 instanceof Object)){
var ex__38933__auto__ = e119706;
var statearr_119707_121717 = state_119697;
(statearr_119707_121717[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_119697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121719 = state_119697;
state_119697 = G__121719;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__ = function(state_119697){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____1.call(this,state_119697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto___121695,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__39005__auto__ = (function (){var statearr_119708 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_119708[(6)] = c__39003__auto___121695);

return statearr_119708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto___121695,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout))
);


if(cljs.core.truth_(external_wait_ignore_timeout)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout){
return (function (state_119734){
var state_val_119735 = (state_119734[(1)]);
if((state_val_119735 === (1))){
var inst_119712 = (state_119734[(7)]);
var inst_119712__$1 = cljs.core.async.timeout(external_wait_ignore_timeout);
var inst_119713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119714 = [ch,inst_119712__$1];
var inst_119715 = (new cljs.core.PersistentVector(null,2,(5),inst_119713,inst_119714,null));
var state_119734__$1 = (function (){var statearr_119736 = state_119734;
(statearr_119736[(7)] = inst_119712__$1);

return statearr_119736;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_119734__$1,(2),inst_119715,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_119735 === (2))){
var inst_119712 = (state_119734[(7)]);
var inst_119717 = (state_119734[(2)]);
var inst_119718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_119717,(0),null);
var inst_119719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_119717,(1),null);
var inst_119720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119719,inst_119712);
var state_119734__$1 = (function (){var statearr_119737 = state_119734;
(statearr_119737[(8)] = inst_119718);

return statearr_119737;
})();
if(inst_119720){
var statearr_119738_121723 = state_119734__$1;
(statearr_119738_121723[(1)] = (3));

} else {
var statearr_119739_121724 = state_119734__$1;
(statearr_119739_121724[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119735 === (3))){
var inst_119722 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-ignore-timeout","com.wsscode.pathom.parser/external-wait-ignore-timeout",480017192)];
var inst_119723 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),external_wait_ignore_timeout];
var inst_119724 = cljs.core.PersistentHashMap.fromArrays(inst_119722,inst_119723);
var inst_119725 = com.wsscode.pathom.trace.trace(env,inst_119724);
var inst_119726 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_119727 = cljs.core.PersistentHashSet.EMPTY;
var inst_119728 = [new cljs.core.Keyword("com.wsscode.pathom.parser","watch-pending-timeout","com.wsscode.pathom.parser/watch-pending-timeout",1047721820),inst_119727];
var inst_119729 = cljs.core.PersistentHashMap.fromArrays(inst_119726,inst_119728);
var state_119734__$1 = (function (){var statearr_119740 = state_119734;
(statearr_119740[(9)] = inst_119725);

return statearr_119740;
})();
var statearr_119741_121731 = state_119734__$1;
(statearr_119741_121731[(2)] = inst_119729);

(statearr_119741_121731[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119735 === (4))){
var inst_119718 = (state_119734[(8)]);
var state_119734__$1 = state_119734;
var statearr_119742_121732 = state_119734__$1;
(statearr_119742_121732[(2)] = inst_119718);

(statearr_119742_121732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119735 === (5))){
var inst_119732 = (state_119734[(2)]);
var state_119734__$1 = state_119734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119734__$1,inst_119732);
} else {
return null;
}
}
}
}
}
});})(c__39003__auto__,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout))
;
return ((function (switch__38929__auto__,c__39003__auto__,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____0 = (function (){
var statearr_119743 = [null,null,null,null,null,null,null,null,null,null];
(statearr_119743[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__);

(statearr_119743[(1)] = (1));

return statearr_119743;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____1 = (function (state_119734){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_119734);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e119744){if((e119744 instanceof Object)){
var ex__38933__auto__ = e119744;
var statearr_119745_121739 = state_119734;
(statearr_119745_121739[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_119734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119744;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121740 = state_119734;
state_119734 = G__121740;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__ = function(state_119734){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____1.call(this,state_119734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout))
})();
var state__39005__auto__ = (function (){var statearr_119746 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_119746[(6)] = c__39003__auto__);

return statearr_119746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,ch,map__119673,map__119673__$1,env,key_watchers,external_wait_ignore_timeout))
);

return c__39003__auto__;
} else {
return ch;
}
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__119747,e){
var map__119748 = p__119747;
var map__119748__$1 = (((((!((map__119748 == null))))?(((((map__119748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119748):map__119748);
var env = map__119748__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119748__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__119750 = ast;
var map__119750__$1 = (((((!((map__119750 == null))))?(((((map__119750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119750):map__119750);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119750__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119750__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119750__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119750__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__119752 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__119752__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__119752,new cljs.core.Keyword(null,"query","query",-1288509510)):G__119752);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__119752__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__119752__$1;
}
})();
var value = (function (){var G__119753 = type;
var G__119753__$1 = (((G__119753 instanceof cljs.core.Keyword))?G__119753.fqn:null);
switch (G__119753__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__119754 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__119754__$1 = (((((!((map__119754 == null))))?(((((map__119754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119754):map__119754);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119754__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__119754,map__119754__$1,action,G__119753,G__119753__$1,map__119750,map__119750__$1,query,key,type,params,env__$1){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__119754,map__119754__$1,action,G__119753,G__119753__$1,map__119750,map__119750__$1,query,key,type,params,env__$1){
return (function (state_119780){
var state_val_119781 = (state_119780[(1)]);
if((state_val_119781 === (1))){
var state_119780__$1 = state_119780;
var statearr_119782_121756 = state_119780__$1;
(statearr_119782_121756[(2)] = null);

(statearr_119782_121756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119781 === (2))){
var inst_119778 = (state_119780[(2)]);
var state_119780__$1 = state_119780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119780__$1,inst_119778);
} else {
if((state_val_119781 === (3))){
var inst_119756 = (state_119780[(2)]);
var inst_119757 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_119758 = com.wsscode.pathom.parser.process_error(env__$1,inst_119756);
var inst_119759 = [inst_119758];
var inst_119760 = cljs.core.PersistentHashMap.fromArrays(inst_119757,inst_119759);
var state_119780__$1 = state_119780;
var statearr_119783_121768 = state_119780__$1;
(statearr_119783_121768[(2)] = inst_119760);


cljs.core.async.impl.ioc_helpers.process_exception(state_119780__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119781 === (4))){
var inst_119768 = (state_119780[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_119780,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_119764 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_119765 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_119766 = cljs.core.PersistentHashMap.fromArrays(inst_119764,inst_119765);
var inst_119767 = com.wsscode.pathom.trace.trace(env__$1,inst_119766);
var inst_119768__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_119769 = com.wsscode.common.async_cljs.chan_QMARK_(inst_119768__$1);
var state_119780__$1 = (function (){var statearr_119784 = state_119780;
(statearr_119784[(8)] = inst_119767);

(statearr_119784[(7)] = inst_119768__$1);

return statearr_119784;
})();
if(inst_119769){
var statearr_119785_121805 = state_119780__$1;
(statearr_119785_121805[(1)] = (5));

} else {
var statearr_119786_121806 = state_119780__$1;
(statearr_119786_121806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119781 === (5))){
var inst_119768 = (state_119780[(7)]);
var state_119780__$1 = state_119780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119780__$1,(8),inst_119768);
} else {
if((state_val_119781 === (6))){
var inst_119768 = (state_119780[(7)]);
var state_119780__$1 = state_119780;
var statearr_119787_121807 = state_119780__$1;
(statearr_119787_121807[(2)] = inst_119768);

(statearr_119787_121807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119781 === (7))){
var inst_119776 = (state_119780[(2)]);
var state_119780__$1 = state_119780;
var statearr_119788_121809 = state_119780__$1;
(statearr_119788_121809[(2)] = inst_119776);


cljs.core.async.impl.ioc_helpers.process_exception(state_119780__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119781 === (8))){
var inst_119772 = (state_119780[(2)]);
var inst_119773 = com.wsscode.common.async_cljs.throw_err(inst_119772);
var state_119780__$1 = state_119780;
var statearr_119789_121810 = state_119780__$1;
(statearr_119789_121810[(2)] = inst_119773);

(statearr_119789_121810[(1)] = (7));


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
});})(c__39003__auto__,map__119754,map__119754__$1,action,G__119753,G__119753__$1,map__119750,map__119750__$1,query,key,type,params,env__$1))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__119754,map__119754__$1,action,G__119753,G__119753__$1,map__119750,map__119750__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____0 = (function (){
var statearr_119790 = [null,null,null,null,null,null,null,null,null];
(statearr_119790[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__);

(statearr_119790[(1)] = (1));

return statearr_119790;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____1 = (function (state_119780){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_119780);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e119791){if((e119791 instanceof Object)){
var ex__38933__auto__ = e119791;
var statearr_119792_121812 = state_119780;
(statearr_119792_121812[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_119780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121814 = state_119780;
state_119780 = G__121814;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__ = function(state_119780){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____1.call(this,state_119780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__119754,map__119754__$1,action,G__119753,G__119753__$1,map__119750,map__119750__$1,query,key,type,params,env__$1))
})();
var state__39005__auto__ = (function (){var statearr_119793 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_119793[(6)] = c__39003__auto__);

return statearr_119793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__119754,map__119754__$1,action,G__119753,G__119753__$1,map__119750,map__119750__$1,query,key,type,params,env__$1))
);

return c__39003__auto__;
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
var stream = (function (){var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,provides,map__119750,map__119750__$1,query,key,type,params,env__$1,value){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,provides,map__119750,map__119750__$1,query,key,type,params,env__$1,value){
return (function (state_119804){
var state_val_119805 = (state_119804[(1)]);
if((state_val_119805 === (1))){
var inst_119794 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_119795 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_119804__$1 = (function (){var statearr_119806 = state_119804;
(statearr_119806[(7)] = inst_119795);

(statearr_119806[(8)] = inst_119794);

return statearr_119806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119804__$1,(2),value);
} else {
if((state_val_119805 === (2))){
var inst_119795 = (state_119804[(7)]);
var inst_119794 = (state_119804[(8)]);
var inst_119797 = (state_119804[(2)]);
var inst_119798 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_119799 = [inst_119797,inst_119798];
var inst_119800 = cljs.core.PersistentHashMap.fromArrays(inst_119795,inst_119799);
var inst_119801 = [provides,true,inst_119800];
var inst_119802 = cljs.core.PersistentHashMap.fromArrays(inst_119794,inst_119801);
var state_119804__$1 = state_119804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119804__$1,inst_119802);
} else {
return null;
}
}
});})(c__39003__auto__,provides,map__119750,map__119750__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__38929__auto__,c__39003__auto__,provides,map__119750,map__119750__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____0 = (function (){
var statearr_119807 = [null,null,null,null,null,null,null,null,null];
(statearr_119807[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__);

(statearr_119807[(1)] = (1));

return statearr_119807;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____1 = (function (state_119804){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_119804);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e119808){if((e119808 instanceof Object)){
var ex__38933__auto__ = e119808;
var statearr_119809_121826 = state_119804;
(statearr_119809_121826[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_119804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e119808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__121828 = state_119804;
state_119804 = G__121828;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__ = function(state_119804){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____1.call(this,state_119804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,provides,map__119750,map__119750__$1,query,key,type,params,env__$1,value))
})();
var state__39005__auto__ = (function (){var statearr_119810 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_119810[(6)] = c__39003__auto__);

return statearr_119810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,provides,map__119750,map__119750__$1,query,key,type,params,env__$1,value))
);

return c__39003__auto__;
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
var res__21491__auto__ = (function (){var seq__119811 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__119812 = null;
var count__119813 = (0);
var i__119814 = (0);
while(true){
if((i__119814 < count__119813)){
var vec__119829 = chunk__119812.cljs$core$IIndexed$_nth$arity$2(null,i__119814);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119829,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119829,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__119832_121841 = cljs.core.seq(watchers);
var chunk__119833_121842 = null;
var count__119834_121843 = (0);
var i__119835_121844 = (0);
while(true){
if((i__119835_121844 < count__119834_121843)){
var out_121845 = chunk__119833_121842.cljs$core$IIndexed$_nth$arity$2(null,i__119835_121844);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_121845,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_121845);


var G__121850 = seq__119832_121841;
var G__121851 = chunk__119833_121842;
var G__121852 = count__119834_121843;
var G__121853 = (i__119835_121844 + (1));
seq__119832_121841 = G__121850;
chunk__119833_121842 = G__121851;
count__119834_121843 = G__121852;
i__119835_121844 = G__121853;
continue;
} else {
var temp__5720__auto___121854 = cljs.core.seq(seq__119832_121841);
if(temp__5720__auto___121854){
var seq__119832_121855__$1 = temp__5720__auto___121854;
if(cljs.core.chunked_seq_QMARK_(seq__119832_121855__$1)){
var c__4550__auto___121856 = cljs.core.chunk_first(seq__119832_121855__$1);
var G__121857 = cljs.core.chunk_rest(seq__119832_121855__$1);
var G__121858 = c__4550__auto___121856;
var G__121859 = cljs.core.count(c__4550__auto___121856);
var G__121860 = (0);
seq__119832_121841 = G__121857;
chunk__119833_121842 = G__121858;
count__119834_121843 = G__121859;
i__119835_121844 = G__121860;
continue;
} else {
var out_121861 = cljs.core.first(seq__119832_121855__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_121861,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_121861);


var G__121862 = cljs.core.next(seq__119832_121855__$1);
var G__121863 = null;
var G__121864 = (0);
var G__121865 = (0);
seq__119832_121841 = G__121862;
chunk__119833_121842 = G__121863;
count__119834_121843 = G__121864;
i__119835_121844 = G__121865;
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


var G__121866 = seq__119811;
var G__121867 = chunk__119812;
var G__121868 = count__119813;
var G__121869 = (i__119814 + (1));
seq__119811 = G__121866;
chunk__119812 = G__121867;
count__119813 = G__121868;
i__119814 = G__121869;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__119811);
if(temp__5720__auto__){
var seq__119811__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__119811__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__119811__$1);
var G__121877 = cljs.core.chunk_rest(seq__119811__$1);
var G__121878 = c__4550__auto__;
var G__121879 = cljs.core.count(c__4550__auto__);
var G__121880 = (0);
seq__119811 = G__121877;
chunk__119812 = G__121878;
count__119813 = G__121879;
i__119814 = G__121880;
continue;
} else {
var vec__119836 = cljs.core.first(seq__119811__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119836,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119836,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__119839_121884 = cljs.core.seq(watchers);
var chunk__119840_121885 = null;
var count__119841_121886 = (0);
var i__119842_121887 = (0);
while(true){
if((i__119842_121887 < count__119841_121886)){
var out_121888 = chunk__119840_121885.cljs$core$IIndexed$_nth$arity$2(null,i__119842_121887);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_121888,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_121888);


var G__121890 = seq__119839_121884;
var G__121891 = chunk__119840_121885;
var G__121892 = count__119841_121886;
var G__121893 = (i__119842_121887 + (1));
seq__119839_121884 = G__121890;
chunk__119840_121885 = G__121891;
count__119841_121886 = G__121892;
i__119842_121887 = G__121893;
continue;
} else {
var temp__5720__auto___121895__$1 = cljs.core.seq(seq__119839_121884);
if(temp__5720__auto___121895__$1){
var seq__119839_121896__$1 = temp__5720__auto___121895__$1;
if(cljs.core.chunked_seq_QMARK_(seq__119839_121896__$1)){
var c__4550__auto___121897 = cljs.core.chunk_first(seq__119839_121896__$1);
var G__121898 = cljs.core.chunk_rest(seq__119839_121896__$1);
var G__121899 = c__4550__auto___121897;
var G__121900 = cljs.core.count(c__4550__auto___121897);
var G__121901 = (0);
seq__119839_121884 = G__121898;
chunk__119840_121885 = G__121899;
count__119841_121886 = G__121900;
i__119842_121887 = G__121901;
continue;
} else {
var out_121903 = cljs.core.first(seq__119839_121896__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_121903,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_121903);


var G__121905 = cljs.core.next(seq__119839_121896__$1);
var G__121906 = null;
var G__121907 = (0);
var G__121908 = (0);
seq__119839_121884 = G__121905;
chunk__119840_121885 = G__121906;
count__119841_121886 = G__121907;
i__119842_121887 = G__121908;
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


var G__121951 = cljs.core.next(seq__119811__$1);
var G__121952 = null;
var G__121953 = (0);
var G__121954 = (0);
seq__119811 = G__121951;
chunk__119812 = G__121952;
count__119813 = G__121953;
i__119814 = G__121954;
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
var seq__119843 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__119844 = null;
var count__119845 = (0);
var i__119846 = (0);
while(true){
if((i__119846 < count__119845)){
var vec__119861 = chunk__119844.cljs$core$IIndexed$_nth$arity$2(null,i__119846);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119861,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119861,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__119864_121958 = cljs.core.seq(watchers);
var chunk__119865_121959 = null;
var count__119866_121960 = (0);
var i__119867_121961 = (0);
while(true){
if((i__119867_121961 < count__119866_121960)){
var out_121963 = chunk__119865_121959.cljs$core$IIndexed$_nth$arity$2(null,i__119867_121961);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_121963,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_121963);


var G__121966 = seq__119864_121958;
var G__121967 = chunk__119865_121959;
var G__121968 = count__119866_121960;
var G__121969 = (i__119867_121961 + (1));
seq__119864_121958 = G__121966;
chunk__119865_121959 = G__121967;
count__119866_121960 = G__121968;
i__119867_121961 = G__121969;
continue;
} else {
var temp__5720__auto___121971 = cljs.core.seq(seq__119864_121958);
if(temp__5720__auto___121971){
var seq__119864_121972__$1 = temp__5720__auto___121971;
if(cljs.core.chunked_seq_QMARK_(seq__119864_121972__$1)){
var c__4550__auto___121973 = cljs.core.chunk_first(seq__119864_121972__$1);
var G__121974 = cljs.core.chunk_rest(seq__119864_121972__$1);
var G__121975 = c__4550__auto___121973;
var G__121976 = cljs.core.count(c__4550__auto___121973);
var G__121977 = (0);
seq__119864_121958 = G__121974;
chunk__119865_121959 = G__121975;
count__119866_121960 = G__121976;
i__119867_121961 = G__121977;
continue;
} else {
var out_121978 = cljs.core.first(seq__119864_121972__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_121978,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_121978);


var G__121980 = cljs.core.next(seq__119864_121972__$1);
var G__121981 = null;
var G__121982 = (0);
var G__121983 = (0);
seq__119864_121958 = G__121980;
chunk__119865_121959 = G__121981;
count__119866_121960 = G__121982;
i__119867_121961 = G__121983;
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


var G__121985 = seq__119843;
var G__121986 = chunk__119844;
var G__121987 = count__119845;
var G__121988 = (i__119846 + (1));
seq__119843 = G__121985;
chunk__119844 = G__121986;
count__119845 = G__121987;
i__119846 = G__121988;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__119843);
if(temp__5720__auto__){
var seq__119843__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__119843__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__119843__$1);
var G__121990 = cljs.core.chunk_rest(seq__119843__$1);
var G__121991 = c__4550__auto__;
var G__121992 = cljs.core.count(c__4550__auto__);
var G__121993 = (0);
seq__119843 = G__121990;
chunk__119844 = G__121991;
count__119845 = G__121992;
i__119846 = G__121993;
continue;
} else {
var vec__119868 = cljs.core.first(seq__119843__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119868,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119868,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__119871_122000 = cljs.core.seq(watchers);
var chunk__119872_122001 = null;
var count__119873_122002 = (0);
var i__119874_122003 = (0);
while(true){
if((i__119874_122003 < count__119873_122002)){
var out_122004 = chunk__119872_122001.cljs$core$IIndexed$_nth$arity$2(null,i__119874_122003);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_122004,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_122004);


var G__122005 = seq__119871_122000;
var G__122006 = chunk__119872_122001;
var G__122007 = count__119873_122002;
var G__122008 = (i__119874_122003 + (1));
seq__119871_122000 = G__122005;
chunk__119872_122001 = G__122006;
count__119873_122002 = G__122007;
i__119874_122003 = G__122008;
continue;
} else {
var temp__5720__auto___122009__$1 = cljs.core.seq(seq__119871_122000);
if(temp__5720__auto___122009__$1){
var seq__119871_122011__$1 = temp__5720__auto___122009__$1;
if(cljs.core.chunked_seq_QMARK_(seq__119871_122011__$1)){
var c__4550__auto___122012 = cljs.core.chunk_first(seq__119871_122011__$1);
var G__122013 = cljs.core.chunk_rest(seq__119871_122011__$1);
var G__122014 = c__4550__auto___122012;
var G__122015 = cljs.core.count(c__4550__auto___122012);
var G__122016 = (0);
seq__119871_122000 = G__122013;
chunk__119872_122001 = G__122014;
count__119873_122002 = G__122015;
i__119874_122003 = G__122016;
continue;
} else {
var out_122017 = cljs.core.first(seq__119871_122011__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_122017,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),provides,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_122017);


var G__122067 = cljs.core.next(seq__119871_122011__$1);
var G__122068 = null;
var G__122069 = (0);
var G__122070 = (0);
seq__119871_122000 = G__122067;
chunk__119872_122001 = G__122068;
count__119873_122002 = G__122069;
i__119874_122003 = G__122070;
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


var G__122071 = cljs.core.next(seq__119843__$1);
var G__122072 = null;
var G__122073 = (0);
var G__122074 = (0);
seq__119843 = G__122071;
chunk__119844 = G__122072;
count__119845 = G__122073;
i__119846 = G__122074;
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
var G__119875 = (x - amount);
var G__119876 = min;
return Math.max(G__119875,G__119876);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__119877){
var vec__119878 = p__119877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119878,(1),null);
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
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__119883,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__119884 = p__119883;
var map__119884__$1 = (((((!((map__119884 == null))))?(((((map__119884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__119884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__119884):map__119884);
var env = map__119884__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119884__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119884__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119884__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__119884__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (state_120154){
var state_val_120155 = (state_120154[(1)]);
if((state_val_120155 === (65))){
var inst_120078 = (state_120154[(7)]);
var inst_120077 = (state_120154[(8)]);
var inst_120079 = (state_120154[(9)]);
var inst_120080 = (state_120154[(10)]);
var inst_120098 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_120099 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_120079];
var inst_120100 = cljs.core.PersistentHashMap.fromArrays(inst_120098,inst_120099);
var inst_120101 = com.wsscode.pathom.trace.trace(env,inst_120100);
var inst_120102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120103 = cljs.core.vals(inst_120079);
var inst_120104 = cljs.core.first(inst_120103);
var inst_120105 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_120078,inst_120104);
var inst_120106 = cljs.core.PersistentHashSet.EMPTY;
var inst_120107 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_120077);
var inst_120108 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_120106,inst_120107,inst_120080);
var inst_120109 = cljs.core.PersistentVector.EMPTY;
var inst_120110 = [inst_120105,inst_120108,processing,key_iterations,inst_120109];
var inst_120111 = (new cljs.core.PersistentVector(null,5,(5),inst_120102,inst_120110,null));
var state_120154__$1 = (function (){var statearr_120156 = state_120154;
(statearr_120156[(11)] = inst_120101);

return statearr_120156;
})();
var statearr_120157_122088 = state_120154__$1;
(statearr_120157_122088[(2)] = inst_120111);

(statearr_120157_122088[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (62))){
var inst_120076 = (state_120154[(12)]);
var inst_120086 = (state_120154[(13)]);
var inst_120088 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_120086,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_120076);
var state_120154__$1 = state_120154;
var statearr_120158_122093 = state_120154__$1;
(statearr_120158_122093[(2)] = inst_120088);

(statearr_120158_122093[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (7))){
var inst_119902 = (state_120154[(14)]);
var inst_119902__$1 = (state_120154[(2)]);
var inst_119904 = cljs.core.PersistentVector.EMPTY;
var inst_119905 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_119906 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_119904,inst_119905,processing);
var state_120154__$1 = (function (){var statearr_120159 = state_120154;
(statearr_120159[(14)] = inst_119902__$1);

(statearr_120159[(15)] = inst_119906);

return statearr_120159;
})();
if(cljs.core.truth_(inst_119902__$1)){
var statearr_120160_122097 = state_120154__$1;
(statearr_120160_122097[(1)] = (8));

} else {
var statearr_120161_122098 = state_120154__$1;
(statearr_120161_122098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (59))){
var inst_120076 = (state_120154[(12)]);
var inst_120074 = (state_120154[(16)]);
var inst_120073 = (state_120154[(17)]);
var inst_120079 = (state_120154[(9)]);
var inst_120083 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_120084 = cljs.core.boolean$(inst_120074);
var inst_120085 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_120073,inst_120079,inst_120084];
var inst_120086 = cljs.core.PersistentHashMap.fromArrays(inst_120083,inst_120085);
var state_120154__$1 = (function (){var statearr_120162 = state_120154;
(statearr_120162[(13)] = inst_120086);

return statearr_120162;
})();
if(cljs.core.truth_(inst_120076)){
var statearr_120163_122100 = state_120154__$1;
(statearr_120163_122100[(1)] = (62));

} else {
var statearr_120164_122101 = state_120154__$1;
(statearr_120164_122101[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (20))){
var inst_119948 = (state_120154[(18)]);
var inst_119950 = (state_120154[(19)]);
var inst_119956 = (state_120154[(20)]);
var inst_119956__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_119948,inst_119950);
var inst_119958 = (inst_119956__$1 == null);
var inst_119959 = cljs.core.not(inst_119958);
var state_120154__$1 = (function (){var statearr_120165 = state_120154;
(statearr_120165[(20)] = inst_119956__$1);

return statearr_120165;
})();
if(inst_119959){
var statearr_120166_122102 = state_120154__$1;
(statearr_120166_122102[(1)] = (23));

} else {
var statearr_120167_122103 = state_120154__$1;
(statearr_120167_122103[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (58))){
var inst_120076 = (state_120154[(12)]);
var inst_120073 = (state_120154[(17)]);
var inst_120071 = (state_120154[(21)]);
var inst_119914 = (state_120154[(22)]);
var inst_120071__$1 = (state_120154[(2)]);
var inst_120072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120071__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_120073__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120071__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_120074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120071__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_120075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120071__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_120076__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_119914);
var inst_120077 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_120073__$1,inst_120076__$1);
var inst_120078 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_120072);
var inst_120079 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_120072,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_120080 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_120076__$1);
var state_120154__$1 = (function (){var statearr_120168 = state_120154;
(statearr_120168[(12)] = inst_120076__$1);

(statearr_120168[(16)] = inst_120074);

(statearr_120168[(23)] = inst_120075);

(statearr_120168[(7)] = inst_120078);

(statearr_120168[(17)] = inst_120073__$1);

(statearr_120168[(21)] = inst_120071__$1);

(statearr_120168[(8)] = inst_120077);

(statearr_120168[(9)] = inst_120079);

(statearr_120168[(10)] = inst_120080);

return statearr_120168;
})();
if(cljs.core.truth_(inst_119914)){
var statearr_120169_122109 = state_120154__$1;
(statearr_120169_122109[(1)] = (59));

} else {
var statearr_120170_122110 = state_120154__$1;
(statearr_120170_122110[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (60))){
var inst_119915 = (state_120154[(24)]);
var inst_120080 = (state_120154[(10)]);
var inst_120137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120138 = cljs.core.PersistentHashSet.EMPTY;
var inst_120139 = [inst_119915];
var inst_120140 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_120139);
var inst_120141 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_120140,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_120142 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_120141);
var inst_120143 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_120138,inst_120142,processing);
var inst_120144 = cljs.core.PersistentVector.EMPTY;
var inst_120145 = [res,inst_120080,inst_120143,key_iterations,inst_120144];
var inst_120146 = (new cljs.core.PersistentVector(null,5,(5),inst_120137,inst_120145,null));
var state_120154__$1 = state_120154;
var statearr_120171_122114 = state_120154__$1;
(statearr_120171_122114[(2)] = inst_120146);

(statearr_120171_122114[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (27))){
var state_120154__$1 = state_120154;
var statearr_120172_122115 = state_120154__$1;
(statearr_120172_122115[(2)] = false);

(statearr_120172_122115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (1))){
var state_120154__$1 = state_120154;
var statearr_120173_122116 = state_120154__$1;
(statearr_120173_122116[(2)] = null);

(statearr_120173_122116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (24))){
var state_120154__$1 = state_120154;
var statearr_120174_122117 = state_120154__$1;
(statearr_120174_122117[(2)] = false);

(statearr_120174_122117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (55))){
var inst_120063 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120175_122118 = state_120154__$1;
(statearr_120175_122118[(2)] = inst_120063);

(statearr_120175_122118[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (39))){
var state_120154__$1 = state_120154;
var statearr_120176_122119 = state_120154__$1;
(statearr_120176_122119[(2)] = false);

(statearr_120176_122119[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (46))){
var inst_119983 = (state_120154[(25)]);
var inst_120014 = (state_120154[(2)]);
var inst_120015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120014,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_120016 = cljs.core.async.close_BANG_(inst_120015);
var inst_120017 = cljs.core.next(inst_119983);
var inst_119947 = inst_120017;
var inst_119948 = null;
var inst_119949 = (0);
var inst_119950 = (0);
var state_120154__$1 = (function (){var statearr_120177 = state_120154;
(statearr_120177[(26)] = inst_119949);

(statearr_120177[(27)] = inst_120016);

(statearr_120177[(18)] = inst_119948);

(statearr_120177[(19)] = inst_119950);

(statearr_120177[(28)] = inst_119947);

return statearr_120177;
})();
var statearr_120178_122124 = state_120154__$1;
(statearr_120178_122124[(2)] = null);

(statearr_120178_122124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_120154,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_119893 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_119894 = cljs.core.count(processing);
var inst_119895 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_119894];
var inst_119896 = cljs.core.PersistentHashMap.fromArrays(inst_119893,inst_119895);
var inst_119897 = com.wsscode.pathom.trace.trace(env,inst_119896);
var state_120154__$1 = (function (){var statearr_120179 = state_120154;
(statearr_120179[(29)] = inst_119897);

return statearr_120179;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_120180_122127 = state_120154__$1;
(statearr_120180_122127[(1)] = (5));

} else {
var statearr_120181_122128 = state_120154__$1;
(statearr_120181_122128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (54))){
var state_120154__$1 = state_120154;
var statearr_120182_122131 = state_120154__$1;
(statearr_120182_122131[(2)] = false);

(statearr_120182_122131[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (15))){
var inst_119933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119934 = cljs.core.PersistentVector.EMPTY;
var inst_119935 = [res,waiting,processing,key_iterations,inst_119934];
var inst_119936 = (new cljs.core.PersistentVector(null,5,(5),inst_119933,inst_119935,null));
var state_120154__$1 = state_120154;
var statearr_120183_122133 = state_120154__$1;
(statearr_120183_122133[(2)] = inst_119936);

(statearr_120183_122133[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (48))){
var inst_119922 = (state_120154[(30)]);
var inst_120037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120038 = cljs.core.PersistentHashSet.EMPTY;
var inst_120039 = cljs.core.PersistentHashSet.EMPTY;
var inst_120040 = cljs.core.PersistentVector.EMPTY;
var inst_120041 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_120042 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_120040,inst_120041,inst_119922);
var inst_120043 = [res,inst_120038,inst_120039,key_iterations,inst_120042];
var inst_120044 = (new cljs.core.PersistentVector(null,5,(5),inst_120037,inst_120043,null));
var state_120154__$1 = state_120154;
var statearr_120184_122137 = state_120154__$1;
(statearr_120184_122137[(2)] = inst_120044);

(statearr_120184_122137[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (50))){
var inst_119914 = (state_120154[(22)]);
var inst_120055 = inst_119914.cljs$lang$protocol_mask$partition0$;
var inst_120056 = (inst_120055 & (64));
var inst_120057 = inst_119914.cljs$core$ISeq$;
var inst_120058 = (cljs.core.PROTOCOL_SENTINEL === inst_120057);
var inst_120059 = ((inst_120056) || (inst_120058));
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_120059)){
var statearr_120188_122138 = state_120154__$1;
(statearr_120188_122138[(1)] = (53));

} else {
var statearr_120189_122139 = state_120154__$1;
(statearr_120189_122139[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (21))){
var inst_119983 = (state_120154[(25)]);
var inst_119947 = (state_120154[(28)]);
var inst_119983__$1 = cljs.core.seq(inst_119947);
var state_120154__$1 = (function (){var statearr_120190 = state_120154;
(statearr_120190[(25)] = inst_119983__$1);

return statearr_120190;
})();
if(inst_119983__$1){
var statearr_120191_122140 = state_120154__$1;
(statearr_120191_122140[(1)] = (32));

} else {
var statearr_120192_122141 = state_120154__$1;
(statearr_120192_122141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (31))){
var inst_119949 = (state_120154[(26)]);
var inst_119948 = (state_120154[(18)]);
var inst_119950 = (state_120154[(19)]);
var inst_119947 = (state_120154[(28)]);
var inst_119977 = (state_120154[(2)]);
var inst_119978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_119977,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_119979 = cljs.core.async.close_BANG_(inst_119978);
var inst_119980 = (inst_119950 + (1));
var tmp120185 = inst_119949;
var tmp120186 = inst_119948;
var tmp120187 = inst_119947;
var inst_119947__$1 = tmp120187;
var inst_119948__$1 = tmp120186;
var inst_119949__$1 = tmp120185;
var inst_119950__$1 = inst_119980;
var state_120154__$1 = (function (){var statearr_120193 = state_120154;
(statearr_120193[(26)] = inst_119949__$1);

(statearr_120193[(18)] = inst_119948__$1);

(statearr_120193[(19)] = inst_119950__$1);

(statearr_120193[(31)] = inst_119979);

(statearr_120193[(28)] = inst_119947__$1);

return statearr_120193;
})();
var statearr_120194_122144 = state_120154__$1;
(statearr_120194_122144[(2)] = null);

(statearr_120194_122144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (32))){
var inst_119983 = (state_120154[(25)]);
var inst_119985 = cljs.core.chunked_seq_QMARK_(inst_119983);
var state_120154__$1 = state_120154;
if(inst_119985){
var statearr_120195_122145 = state_120154__$1;
(statearr_120195_122145[(1)] = (35));

} else {
var statearr_120196_122146 = state_120154__$1;
(statearr_120196_122146[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (40))){
var inst_120009 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_120009)){
var statearr_120197_122148 = state_120154__$1;
(statearr_120197_122148[(1)] = (44));

} else {
var statearr_120198_122149 = state_120154__$1;
(statearr_120198_122149[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (56))){
var inst_119914 = (state_120154[(22)]);
var inst_120068 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119914);
var state_120154__$1 = state_120154;
var statearr_120199_122150 = state_120154__$1;
(statearr_120199_122150[(2)] = inst_120068);

(statearr_120199_122150[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (33))){
var state_120154__$1 = state_120154;
var statearr_120200_122151 = state_120154__$1;
(statearr_120200_122151[(2)] = null);

(statearr_120200_122151[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (13))){
var inst_119914 = (state_120154[(22)]);
var inst_120052 = (inst_119914 == null);
var inst_120053 = cljs.core.not(inst_120052);
var state_120154__$1 = state_120154;
if(inst_120053){
var statearr_120201_122156 = state_120154__$1;
(statearr_120201_122156[(1)] = (50));

} else {
var statearr_120202_122157 = state_120154__$1;
(statearr_120202_122157[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (22))){
var inst_120025 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120203_122158 = state_120154__$1;
(statearr_120203_122158[(2)] = inst_120025);

(statearr_120203_122158[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (36))){
var inst_119983 = (state_120154[(25)]);
var inst_119993 = (state_120154[(32)]);
var inst_119993__$1 = cljs.core.first(inst_119983);
var inst_119995 = (inst_119993__$1 == null);
var inst_119996 = cljs.core.not(inst_119995);
var state_120154__$1 = (function (){var statearr_120204 = state_120154;
(statearr_120204[(32)] = inst_119993__$1);

return statearr_120204;
})();
if(inst_119996){
var statearr_120205_122159 = state_120154__$1;
(statearr_120205_122159[(1)] = (38));

} else {
var statearr_120206_122160 = state_120154__$1;
(statearr_120206_122160[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (41))){
var state_120154__$1 = state_120154;
var statearr_120207_122162 = state_120154__$1;
(statearr_120207_122162[(2)] = true);

(statearr_120207_122162[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (43))){
var inst_120006 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120208_122165 = state_120154__$1;
(statearr_120208_122165[(2)] = inst_120006);

(statearr_120208_122165[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (61))){
var inst_120148 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120209_122166 = state_120154__$1;
(statearr_120209_122166[(2)] = inst_120148);

(statearr_120209_122166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (29))){
var inst_119956 = (state_120154[(20)]);
var inst_119974 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119956);
var state_120154__$1 = state_120154;
var statearr_120210_122167 = state_120154__$1;
(statearr_120210_122167[(2)] = inst_119974);

(statearr_120210_122167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (44))){
var inst_119993 = (state_120154[(32)]);
var inst_120011 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_119993);
var state_120154__$1 = state_120154;
var statearr_120211_122170 = state_120154__$1;
(statearr_120211_122170[(2)] = inst_120011);

(statearr_120211_122170[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (6))){
var state_120154__$1 = state_120154;
var statearr_120212_122172 = state_120154__$1;
(statearr_120212_122172[(2)] = null);

(statearr_120212_122172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (28))){
var inst_119969 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120213_122173 = state_120154__$1;
(statearr_120213_122173[(2)] = inst_119969);

(statearr_120213_122173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (64))){
var inst_119897 = (state_120154[(29)]);
var inst_120076 = (state_120154[(12)]);
var inst_119902 = (state_120154[(14)]);
var inst_119915 = (state_120154[(24)]);
var inst_120074 = (state_120154[(16)]);
var inst_120075 = (state_120154[(23)]);
var inst_120078 = (state_120154[(7)]);
var inst_120073 = (state_120154[(17)]);
var inst_120071 = (state_120154[(21)]);
var inst_119914 = (state_120154[(22)]);
var inst_119911 = (state_120154[(33)]);
var inst_120077 = (state_120154[(8)]);
var inst_120079 = (state_120154[(9)]);
var inst_119913 = (state_120154[(34)]);
var inst_120080 = (state_120154[(10)]);
var inst_120091 = (state_120154[(2)]);
var inst_120092 = com.wsscode.pathom.trace.trace(env,inst_120091);
var inst_120093 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_120094 = (function (){var vec__119890 = inst_119913;
var p = inst_119915;
var merge_result_QMARK_ = inst_120074;
var recheck_ch = inst_119902;
var response_value = inst_120079;
var _ = inst_119897;
var key_as = inst_120078;
var provides_SINGLEQUOTE_ = inst_120077;
var msg = inst_119914;
var waiting__$1 = inst_120080;
var processing_SINGLEQUOTE_ = inst_119911;
var map__120050 = inst_120071;
var waiting_SINGLEQUOTE_ = inst_120076;
var error = inst_120075;
var provides = inst_120073;
return ((function (vec__119890,p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,map__120050,waiting_SINGLEQUOTE_,error,provides,inst_119897,inst_120076,inst_119902,inst_119915,inst_120074,inst_120075,inst_120078,inst_120073,inst_120071,inst_119914,inst_119911,inst_120077,inst_120079,inst_119913,inst_120080,inst_120091,inst_120092,inst_120093,state_val_120155,c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__119882_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__119882_SHARP_], 0));
});
;})(vec__119890,p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,map__120050,waiting_SINGLEQUOTE_,error,provides,inst_119897,inst_120076,inst_119902,inst_119915,inst_120074,inst_120075,inst_120078,inst_120073,inst_120071,inst_119914,inst_119911,inst_120077,inst_120079,inst_119913,inst_120080,inst_120091,inst_120092,inst_120093,state_val_120155,c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_120095 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_120093,inst_120094);
var inst_120096 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_120077,inst_120075);
var state_120154__$1 = (function (){var statearr_120214 = state_120154;
(statearr_120214[(35)] = inst_120096);

(statearr_120214[(36)] = inst_120095);

(statearr_120214[(37)] = inst_120092);

return statearr_120214;
})();
if(cljs.core.truth_(inst_120074)){
var statearr_120215_122181 = state_120154__$1;
(statearr_120215_122181[(1)] = (65));

} else {
var statearr_120216_122182 = state_120154__$1;
(statearr_120216_122182[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (51))){
var state_120154__$1 = state_120154;
var statearr_120217_122183 = state_120154__$1;
(statearr_120217_122183[(2)] = false);

(statearr_120217_122183[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (25))){
var inst_119972 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_119972)){
var statearr_120218_122185 = state_120154__$1;
(statearr_120218_122185[(1)] = (29));

} else {
var statearr_120219_122186 = state_120154__$1;
(statearr_120219_122186[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (34))){
var inst_120023 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120220_122188 = state_120154__$1;
(statearr_120220_122188[(2)] = inst_120023);

(statearr_120220_122188[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (17))){
var inst_120048 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120221_122189 = state_120154__$1;
(statearr_120221_122189[(2)] = inst_120048);

(statearr_120221_122189[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (3))){
var inst_119886 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120222_122190 = state_120154__$1;
(statearr_120222_122190[(2)] = inst_119886);


cljs.core.async.impl.ioc_helpers.process_exception(state_120154__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (12))){
var inst_119897 = (state_120154[(29)]);
var inst_119902 = (state_120154[(14)]);
var inst_119915 = (state_120154[(24)]);
var inst_119914 = (state_120154[(22)]);
var inst_119922 = (state_120154[(30)]);
var inst_119911 = (state_120154[(33)]);
var inst_119913 = (state_120154[(34)]);
var inst_119918 = cljs.core.keys(indexed_props);
var inst_119919 = cljs.core.set(inst_119918);
var inst_119920 = cljs.core.keys(res);
var inst_119921 = cljs.core.set(inst_119920);
var inst_119922__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_119919,inst_119921);
var inst_119923 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_119924 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_119925 = [processing,inst_119922__$1];
var inst_119926 = cljs.core.PersistentHashMap.fromArrays(inst_119924,inst_119925);
var inst_119927 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_119926];
var inst_119928 = cljs.core.PersistentHashMap.fromArrays(inst_119923,inst_119927);
var inst_119929 = com.wsscode.pathom.trace.trace(env,inst_119928);
var inst_119930 = (function (){var vec__119890 = inst_119913;
var missing_props = inst_119922__$1;
var p = inst_119915;
var recheck_ch = inst_119902;
var _ = inst_119897;
var msg = inst_119914;
var processing_SINGLEQUOTE_ = inst_119911;
var all_props = inst_119919;
var current_props = inst_119921;
return ((function (vec__119890,missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_119897,inst_119902,inst_119915,inst_119914,inst_119922,inst_119911,inst_119913,inst_119918,inst_119919,inst_119920,inst_119921,inst_119922__$1,inst_119923,inst_119924,inst_119925,inst_119926,inst_119927,inst_119928,inst_119929,state_val_120155,c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__119881_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__119881_SHARP_));
});
;})(vec__119890,missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,current_props,inst_119897,inst_119902,inst_119915,inst_119914,inst_119922,inst_119911,inst_119913,inst_119918,inst_119919,inst_119920,inst_119921,inst_119922__$1,inst_119923,inst_119924,inst_119925,inst_119926,inst_119927,inst_119928,inst_119929,state_val_120155,c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_119931 = cljs.core.some(inst_119930,inst_119922__$1);
var state_120154__$1 = (function (){var statearr_120223 = state_120154;
(statearr_120223[(38)] = inst_119929);

(statearr_120223[(30)] = inst_119922__$1);

return statearr_120223;
})();
if(cljs.core.truth_(inst_119931)){
var statearr_120224_122194 = state_120154__$1;
(statearr_120224_122194[(1)] = (15));

} else {
var statearr_120225_122195 = state_120154__$1;
(statearr_120225_122195[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (2))){
var inst_120152 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_120154__$1,inst_120152);
} else {
if((state_val_120155 === (66))){
var inst_120077 = (state_120154[(8)]);
var inst_120080 = (state_120154[(10)]);
var inst_120113 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_120114 = cljs.core.keys(inst_120113);
var inst_120115 = cljs.core.set(inst_120114);
var inst_120116 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_120115,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_120117 = cljs.core.vec(inst_120077);
var inst_120118 = com.wsscode.pathom.parser.focus_subquery(tx,inst_120117);
var inst_120119 = com.wsscode.pathom.parser.query__GT_ast(inst_120118);
var inst_120120 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_120119);
var inst_120121 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_120116,inst_120120);
var inst_120122 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_120121);
var inst_120123 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_120124 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_120122);
var inst_120125 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_120124];
var inst_120126 = cljs.core.PersistentHashMap.fromArrays(inst_120123,inst_120125);
var inst_120127 = com.wsscode.pathom.trace.trace(env,inst_120126);
var inst_120128 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120129 = cljs.core.PersistentHashSet.EMPTY;
var inst_120130 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_120077);
var inst_120131 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_120129,inst_120130,inst_120080);
var inst_120132 = [res,inst_120131,processing,key_iterations,inst_120122];
var inst_120133 = (new cljs.core.PersistentVector(null,5,(5),inst_120128,inst_120132,null));
var state_120154__$1 = (function (){var statearr_120226 = state_120154;
(statearr_120226[(39)] = inst_120127);

return statearr_120226;
})();
var statearr_120227_122203 = state_120154__$1;
(statearr_120227_122203[(2)] = inst_120133);

(statearr_120227_122203[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (23))){
var inst_119956 = (state_120154[(20)]);
var inst_119961 = inst_119956.cljs$lang$protocol_mask$partition0$;
var inst_119962 = (inst_119961 & (64));
var inst_119963 = inst_119956.cljs$core$ISeq$;
var inst_119964 = (cljs.core.PROTOCOL_SENTINEL === inst_119963);
var inst_119965 = ((inst_119962) || (inst_119964));
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_119965)){
var statearr_120228_122204 = state_120154__$1;
(statearr_120228_122204[(1)] = (26));

} else {
var statearr_120229_122205 = state_120154__$1;
(statearr_120229_122205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (47))){
var inst_120030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120031 = cljs.core.PersistentHashSet.EMPTY;
var inst_120032 = cljs.core.PersistentHashSet.EMPTY;
var inst_120033 = cljs.core.PersistentVector.EMPTY;
var inst_120034 = [res,inst_120031,inst_120032,key_iterations,inst_120033];
var inst_120035 = (new cljs.core.PersistentVector(null,5,(5),inst_120030,inst_120034,null));
var state_120154__$1 = state_120154;
var statearr_120230_122209 = state_120154__$1;
(statearr_120230_122209[(2)] = inst_120035);

(statearr_120230_122209[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (35))){
var inst_119983 = (state_120154[(25)]);
var inst_119987 = cljs.core.chunk_first(inst_119983);
var inst_119988 = cljs.core.chunk_rest(inst_119983);
var inst_119989 = cljs.core.count(inst_119987);
var inst_119947 = inst_119988;
var inst_119948 = inst_119987;
var inst_119949 = inst_119989;
var inst_119950 = (0);
var state_120154__$1 = (function (){var statearr_120231 = state_120154;
(statearr_120231[(26)] = inst_119949);

(statearr_120231[(18)] = inst_119948);

(statearr_120231[(19)] = inst_119950);

(statearr_120231[(28)] = inst_119947);

return statearr_120231;
})();
var statearr_120232_122212 = state_120154__$1;
(statearr_120232_122212[(2)] = null);

(statearr_120232_122212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (19))){
var inst_120027 = (state_120154[(2)]);
var inst_120028 = cljs.core.deref(done_signal_STAR_);
var state_120154__$1 = (function (){var statearr_120233 = state_120154;
(statearr_120233[(40)] = inst_120027);

return statearr_120233;
})();
if(cljs.core.truth_(inst_120028)){
var statearr_120234_122214 = state_120154__$1;
(statearr_120234_122214[(1)] = (47));

} else {
var statearr_120235_122215 = state_120154__$1;
(statearr_120235_122215[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (57))){
var inst_119914 = (state_120154[(22)]);
var state_120154__$1 = state_120154;
var statearr_120236_122217 = state_120154__$1;
(statearr_120236_122217[(2)] = inst_119914);

(statearr_120236_122217[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (11))){
var inst_119902 = (state_120154[(14)]);
var inst_119915 = (state_120154[(24)]);
var inst_119913 = (state_120154[(34)]);
var inst_119913__$1 = (state_120154[(2)]);
var inst_119914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_119913__$1,(0),null);
var inst_119915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_119913__$1,(1),null);
var inst_119916 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119915__$1,inst_119902);
var state_120154__$1 = (function (){var statearr_120237 = state_120154;
(statearr_120237[(24)] = inst_119915__$1);

(statearr_120237[(22)] = inst_119914);

(statearr_120237[(34)] = inst_119913__$1);

return statearr_120237;
})();
if(inst_119916){
var statearr_120238_122220 = state_120154__$1;
(statearr_120238_122220[(1)] = (12));

} else {
var statearr_120239_122221 = state_120154__$1;
(statearr_120239_122221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (9))){
var inst_119906 = (state_120154[(15)]);
var state_120154__$1 = state_120154;
var statearr_120240_122222 = state_120154__$1;
(statearr_120240_122222[(2)] = inst_119906);

(statearr_120240_122222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (5))){
var inst_119899 = cljs.core.async.timeout(processing_recheck_timer);
var state_120154__$1 = state_120154;
var statearr_120241_122223 = state_120154__$1;
(statearr_120241_122223[(2)] = inst_119899);

(statearr_120241_122223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (14))){
var inst_120150 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120242_122224 = state_120154__$1;
(statearr_120242_122224[(2)] = inst_120150);


cljs.core.async.impl.ioc_helpers.process_exception(state_120154__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (45))){
var inst_119993 = (state_120154[(32)]);
var state_120154__$1 = state_120154;
var statearr_120243_122225 = state_120154__$1;
(statearr_120243_122225[(2)] = inst_119993);

(statearr_120243_122225[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (53))){
var state_120154__$1 = state_120154;
var statearr_120244_122226 = state_120154__$1;
(statearr_120244_122226[(2)] = true);

(statearr_120244_122226[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (26))){
var state_120154__$1 = state_120154;
var statearr_120245_122227 = state_120154__$1;
(statearr_120245_122227[(2)] = true);

(statearr_120245_122227[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (16))){
var inst_119922 = (state_120154[(30)]);
var inst_119938 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_119939 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_119922];
var inst_119940 = cljs.core.PersistentHashMap.fromArrays(inst_119938,inst_119939);
var inst_119941 = com.wsscode.pathom.trace.trace(env,inst_119940);
var inst_119946 = cljs.core.seq(processing);
var inst_119947 = inst_119946;
var inst_119948 = null;
var inst_119949 = (0);
var inst_119950 = (0);
var state_120154__$1 = (function (){var statearr_120246 = state_120154;
(statearr_120246[(26)] = inst_119949);

(statearr_120246[(18)] = inst_119948);

(statearr_120246[(41)] = inst_119941);

(statearr_120246[(19)] = inst_119950);

(statearr_120246[(28)] = inst_119947);

return statearr_120246;
})();
var statearr_120247_122231 = state_120154__$1;
(statearr_120247_122231[(2)] = null);

(statearr_120247_122231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (38))){
var inst_119993 = (state_120154[(32)]);
var inst_119998 = inst_119993.cljs$lang$protocol_mask$partition0$;
var inst_119999 = (inst_119998 & (64));
var inst_120000 = inst_119993.cljs$core$ISeq$;
var inst_120001 = (cljs.core.PROTOCOL_SENTINEL === inst_120000);
var inst_120002 = ((inst_119999) || (inst_120001));
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_120002)){
var statearr_120248_122232 = state_120154__$1;
(statearr_120248_122232[(1)] = (41));

} else {
var statearr_120249_122233 = state_120154__$1;
(statearr_120249_122233[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (30))){
var inst_119956 = (state_120154[(20)]);
var state_120154__$1 = state_120154;
var statearr_120250_122234 = state_120154__$1;
(statearr_120250_122234[(2)] = inst_119956);

(statearr_120250_122234[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (10))){
var inst_119911 = (state_120154[(33)]);
var inst_119911__$1 = (state_120154[(2)]);
var state_120154__$1 = (function (){var statearr_120251 = state_120154;
(statearr_120251[(33)] = inst_119911__$1);

return statearr_120251;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_120154__$1,(11),inst_119911__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_120155 === (18))){
var inst_119949 = (state_120154[(26)]);
var inst_119950 = (state_120154[(19)]);
var inst_119952 = (inst_119950 < inst_119949);
var inst_119953 = inst_119952;
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_119953)){
var statearr_120252_122237 = state_120154__$1;
(statearr_120252_122237[(1)] = (20));

} else {
var statearr_120253_122240 = state_120154__$1;
(statearr_120253_122240[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (52))){
var inst_120066 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
if(cljs.core.truth_(inst_120066)){
var statearr_120254_122250 = state_120154__$1;
(statearr_120254_122250[(1)] = (56));

} else {
var statearr_120255_122251 = state_120154__$1;
(statearr_120255_122251[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (67))){
var inst_120135 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120256_122252 = state_120154__$1;
(statearr_120256_122252[(2)] = inst_120135);

(statearr_120256_122252[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (42))){
var state_120154__$1 = state_120154;
var statearr_120257_122253 = state_120154__$1;
(statearr_120257_122253[(2)] = false);

(statearr_120257_122253[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (37))){
var inst_120020 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120258_122255 = state_120154__$1;
(statearr_120258_122255[(2)] = inst_120020);

(statearr_120258_122255[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (63))){
var inst_120086 = (state_120154[(13)]);
var state_120154__$1 = state_120154;
var statearr_120259_122256 = state_120154__$1;
(statearr_120259_122256[(2)] = inst_120086);

(statearr_120259_122256[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (8))){
var inst_119902 = (state_120154[(14)]);
var inst_119906 = (state_120154[(15)]);
var inst_119908 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_119906,inst_119902);
var state_120154__$1 = state_120154;
var statearr_120260_122258 = state_120154__$1;
(statearr_120260_122258[(2)] = inst_119908);

(statearr_120260_122258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120155 === (49))){
var inst_120046 = (state_120154[(2)]);
var state_120154__$1 = state_120154;
var statearr_120261_122260 = state_120154__$1;
(statearr_120261_122260[(2)] = inst_120046);

(statearr_120261_122260[(1)] = (17));


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
});})(c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto____0 = (function (){
var statearr_120262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_120262[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto__);

(statearr_120262[(1)] = (1));

return statearr_120262;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto____1 = (function (state_120154){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_120154);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e120263){if((e120263 instanceof Object)){
var ex__38933__auto__ = e120263;
var statearr_120264_122264 = state_120154;
(statearr_120264_122264[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_120154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e120263;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122266 = state_120154;
state_120154 = G__122266;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto__ = function(state_120154){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto____1.call(this,state_120154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var state__39005__auto__ = (function (){var statearr_120265 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_120265[(6)] = c__39003__auto__);

return statearr_120265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__119884,map__119884__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
);

return c__39003__auto__;
});
com.wsscode.pathom.parser.zero_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__120267,p__120268,tx){
var map__120269 = p__120267;
var map__120269__$1 = (((((!((map__120269 == null))))?(((((map__120269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120269):map__120269);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120269__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120269__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__120270 = p__120268;
var map__120270__$1 = (((((!((map__120270 == null))))?(((((map__120270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120270):map__120270);
var env = map__120270__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(5));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120270__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_120722){
var state_val_120723 = (state_120722[(1)]);
if((state_val_120723 === (121))){
var inst_120322 = (state_120722[(7)]);
var inst_120604 = (state_120722[(8)]);
var inst_120582 = (state_120722[(9)]);
var inst_120572 = (state_120722[(10)]);
var inst_120571 = (state_120722[(11)]);
var inst_120570 = (state_120722[(12)]);
var inst_120573 = (state_120722[(13)]);
var inst_120662 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120663 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_120604];
var inst_120664 = cljs.core.PersistentHashMap.fromArrays(inst_120662,inst_120663);
var inst_120665 = com.wsscode.pathom.trace.trace(inst_120322,inst_120664);
var tmp120724 = inst_120572;
var tmp120725 = inst_120571;
var tmp120726 = inst_120570;
var tmp120727 = inst_120573;
var inst_120570__$1 = tmp120726;
var inst_120571__$1 = tmp120725;
var inst_120572__$1 = tmp120724;
var inst_120573__$1 = tmp120727;
var inst_120574 = inst_120582;
var state_120722__$1 = (function (){var statearr_120728 = state_120722;
(statearr_120728[(14)] = inst_120665);

(statearr_120728[(10)] = inst_120572__$1);

(statearr_120728[(15)] = inst_120574);

(statearr_120728[(11)] = inst_120571__$1);

(statearr_120728[(12)] = inst_120570__$1);

(statearr_120728[(13)] = inst_120573__$1);

return statearr_120728;
})();
var statearr_120729_122271 = state_120722__$1;
(statearr_120729_122271[(2)] = null);

(statearr_120729_122271[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (65))){
var inst_120377 = (state_120722[(16)]);
var inst_120410 = (state_120722[(17)]);
var inst_120466 = cljs.core.contains_QMARK_(inst_120377,inst_120410);
var state_120722__$1 = state_120722;
if(inst_120466){
var statearr_120730_122272 = state_120722__$1;
(statearr_120730_122272[(1)] = (67));

} else {
var statearr_120731_122274 = state_120722__$1;
(statearr_120731_122274[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (70))){
var inst_120412 = (state_120722[(18)]);
var inst_120388 = (state_120722[(19)]);
var inst_120316 = (state_120722[(20)]);
var inst_120322 = (state_120722[(7)]);
var inst_120377 = (state_120722[(16)]);
var inst_120409 = (state_120722[(21)]);
var inst_120379 = (state_120722[(22)]);
var inst_120378 = (state_120722[(23)]);
var inst_120376 = (state_120722[(24)]);
var inst_120478 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_120379,inst_120412,com.wsscode.pathom.parser.zero_inc);
var inst_120479 = com.wsscode.pathom.parser.parallel_process_value(inst_120322,tx,inst_120409,inst_120316,inst_120376,inst_120377,inst_120378,read,mutate,inst_120478,inst_120388);
var inst_120480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120479,(0),null);
var inst_120481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120479,(1),null);
var inst_120482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120479,(2),null);
var inst_120483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120479,(3),null);
var inst_120484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120479,(4),null);
var inst_120376__$1 = inst_120480;
var inst_120377__$1 = inst_120481;
var inst_120378__$1 = inst_120482;
var inst_120379__$1 = inst_120483;
var inst_120380 = inst_120484;
var state_120722__$1 = (function (){var statearr_120732 = state_120722;
(statearr_120732[(16)] = inst_120377__$1);

(statearr_120732[(22)] = inst_120379__$1);

(statearr_120732[(23)] = inst_120378__$1);

(statearr_120732[(24)] = inst_120376__$1);

(statearr_120732[(25)] = inst_120380);

return statearr_120732;
})();
var statearr_120733_122280 = state_120722__$1;
(statearr_120733_122280[(2)] = null);

(statearr_120733_122280[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (62))){
var inst_120446 = (state_120722[(26)]);
var state_120722__$1 = state_120722;
var statearr_120734_122281 = state_120722__$1;
(statearr_120734_122281[(2)] = inst_120446);

(statearr_120734_122281[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (74))){
var state_120722__$1 = state_120722;
var statearr_120735_122283 = state_120722__$1;
(statearr_120735_122283[(1)] = (77));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (110))){
var inst_120570 = (state_120722[(12)]);
var state_120722__$1 = state_120722;
var statearr_120737_122289 = state_120722__$1;
(statearr_120737_122289[(2)] = inst_120570);

(statearr_120737_122289[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (130))){
var inst_120699 = (state_120722[(2)]);
var inst_120700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120699,(0),null);
var inst_120701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120699,(1),null);
var inst_120702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120699,(2),null);
var inst_120703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120699,(3),null);
var inst_120704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120699,(4),null);
var inst_120570 = inst_120700;
var inst_120571 = inst_120701;
var inst_120572 = inst_120702;
var inst_120573 = inst_120703;
var inst_120574 = inst_120704;
var state_120722__$1 = (function (){var statearr_120738 = state_120722;
(statearr_120738[(10)] = inst_120572);

(statearr_120738[(15)] = inst_120574);

(statearr_120738[(11)] = inst_120571);

(statearr_120738[(12)] = inst_120570);

(statearr_120738[(13)] = inst_120573);

return statearr_120738;
})();
var statearr_120739_122299 = state_120722__$1;
(statearr_120739_122299[(2)] = null);

(statearr_120739_122299[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (128))){
var state_120722__$1 = state_120722;
var statearr_120740_122300 = state_120722__$1;
(statearr_120740_122300[(1)] = (131));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (7))){
var inst_120282 = (state_120722[(2)]);
var state_120722__$1 = (function (){var statearr_120742 = state_120722;
(statearr_120742[(27)] = inst_120282);

return statearr_120742;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_120743_122302 = state_120722__$1;
(statearr_120743_122302[(1)] = (8));

} else {
var statearr_120744_122303 = state_120722__$1;
(statearr_120744_122303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (59))){
var inst_120322 = (state_120722[(7)]);
var inst_120446 = (state_120722[(26)]);
var inst_120446__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_120322);
var state_120722__$1 = (function (){var statearr_120745 = state_120722;
(statearr_120745[(26)] = inst_120446__$1);

return statearr_120745;
})();
if(cljs.core.truth_(inst_120446__$1)){
var statearr_120746_122305 = state_120722__$1;
(statearr_120746_122305[(1)] = (61));

} else {
var statearr_120747_122306 = state_120722__$1;
(statearr_120747_122306[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (86))){
var state_120722__$1 = state_120722;
var statearr_120748_122307 = state_120722__$1;
(statearr_120748_122307[(2)] = true);

(statearr_120748_122307[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (20))){
var state_120722__$1 = state_120722;
var statearr_120753_122309 = state_120722__$1;
(statearr_120753_122309[(2)] = key_watchers);

(statearr_120753_122309[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (72))){
var inst_120488 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120754_122311 = state_120722__$1;
(statearr_120754_122311[(2)] = inst_120488);

(statearr_120754_122311[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (58))){
var inst_120388 = (state_120722[(19)]);
var inst_120322 = (state_120722[(7)]);
var inst_120377 = (state_120722[(16)]);
var inst_120379 = (state_120722[(22)]);
var inst_120378 = (state_120722[(23)]);
var inst_120410 = (state_120722[(17)]);
var inst_120376 = (state_120722[(24)]);
var inst_120440 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120441 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_120410];
var inst_120442 = cljs.core.PersistentHashMap.fromArrays(inst_120440,inst_120441);
var inst_120443 = com.wsscode.pathom.trace.trace(inst_120322,inst_120442);
var tmp120749 = inst_120377;
var tmp120750 = inst_120379;
var tmp120751 = inst_120378;
var tmp120752 = inst_120376;
var inst_120376__$1 = tmp120752;
var inst_120377__$1 = tmp120749;
var inst_120378__$1 = tmp120751;
var inst_120379__$1 = tmp120750;
var inst_120380 = inst_120388;
var state_120722__$1 = (function (){var statearr_120755 = state_120722;
(statearr_120755[(16)] = inst_120377__$1);

(statearr_120755[(22)] = inst_120379__$1);

(statearr_120755[(23)] = inst_120378__$1);

(statearr_120755[(24)] = inst_120376__$1);

(statearr_120755[(28)] = inst_120443);

(statearr_120755[(25)] = inst_120380);

return statearr_120755;
})();
var statearr_120756_122314 = state_120722__$1;
(statearr_120756_122314[(2)] = null);

(statearr_120756_122314[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (60))){
var inst_120494 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120757_122316 = state_120722__$1;
(statearr_120757_122316[(2)] = inst_120494);

(statearr_120757_122316[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (27))){
var inst_120346 = cljs.core.PersistentHashSet.EMPTY;
var state_120722__$1 = state_120722;
var statearr_120758_122319 = state_120722__$1;
(statearr_120758_122319[(2)] = inst_120346);

(statearr_120758_122319[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (1))){
var state_120722__$1 = state_120722;
var statearr_120759_122320 = state_120722__$1;
(statearr_120759_122320[(2)] = null);

(statearr_120759_122320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (69))){
var inst_120490 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120760_122322 = state_120722__$1;
(statearr_120760_122322[(2)] = inst_120490);

(statearr_120760_122322[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (101))){
var inst_120581 = (state_120722[(29)]);
var state_120722__$1 = state_120722;
var statearr_120761_122323 = state_120722__$1;
(statearr_120761_122323[(2)] = inst_120581);

(statearr_120761_122323[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (24))){
var inst_120537 = cljs.core.PersistentHashMap.EMPTY;
var state_120722__$1 = (function (){var statearr_120762 = state_120722;
(statearr_120762[(30)] = inst_120537);

return statearr_120762;
})();
if(cljs.core.truth_(waiting)){
var statearr_120763_122325 = state_120722__$1;
(statearr_120763_122325[(1)] = (80));

} else {
var statearr_120764_122326 = state_120722__$1;
(statearr_120764_122326[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (102))){
var inst_120603 = (state_120722[(31)]);
var inst_120603__$1 = (state_120722[(2)]);
var inst_120604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120603__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_120722__$1 = (function (){var statearr_120765 = state_120722;
(statearr_120765[(8)] = inst_120604);

(statearr_120765[(31)] = inst_120603__$1);

return statearr_120765;
})();
if(cljs.core.truth_(inst_120603__$1)){
var statearr_120766_122340 = state_120722__$1;
(statearr_120766_122340[(1)] = (103));

} else {
var statearr_120767_122347 = state_120722__$1;
(statearr_120767_122347[(1)] = (104));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (55))){
var inst_120412 = (state_120722[(18)]);
var inst_120376 = (state_120722[(24)]);
var inst_120429 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_120376,inst_120412,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_120722__$1 = state_120722;
var statearr_120768_122350 = state_120722__$1;
(statearr_120768_122350[(2)] = inst_120429);

(statearr_120768_122350[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (85))){
var inst_120563 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120563)){
var statearr_120769_122351 = state_120722__$1;
(statearr_120769_122351[(1)] = (89));

} else {
var statearr_120770_122353 = state_120722__$1;
(statearr_120770_122353[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (39))){
var inst_120322 = (state_120722[(7)]);
var inst_120333 = (state_120722[(32)]);
var inst_120287 = (state_120722[(33)]);
var inst_120522 = (state_120722[(2)]);
var inst_120523 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_120524 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_120287];
var inst_120525 = cljs.core.PersistentHashMap.fromArrays(inst_120523,inst_120524);
var inst_120526 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_120322,inst_120333,inst_120525);
var state_120722__$1 = (function (){var statearr_120771 = state_120722;
(statearr_120771[(34)] = inst_120526);

return statearr_120771;
})();
var statearr_120772_122357 = state_120722__$1;
(statearr_120772_122357[(2)] = inst_120522);

(statearr_120772_122357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (88))){
var inst_120560 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120773_122358 = state_120722__$1;
(statearr_120773_122358[(2)] = inst_120560);

(statearr_120773_122358[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (46))){
var inst_120387 = (state_120722[(35)]);
var inst_120406 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_120387);
var state_120722__$1 = state_120722;
var statearr_120774_122360 = state_120722__$1;
(statearr_120774_122360[(2)] = inst_120406);

(statearr_120774_122360[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_120722,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_120775_122362 = state_120722__$1;
(statearr_120775_122362[(1)] = (5));

} else {
var statearr_120776_122363 = state_120722__$1;
(statearr_120776_122363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (77))){
var inst_120376 = (state_120722[(24)]);
var state_120722__$1 = state_120722;
var statearr_120777_122364 = state_120722__$1;
(statearr_120777_122364[(2)] = inst_120376);

(statearr_120777_122364[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (106))){
var inst_120322 = (state_120722[(7)]);
var inst_120604 = (state_120722[(8)]);
var inst_120606 = (state_120722[(36)]);
var inst_120570 = (state_120722[(12)]);
var inst_120615 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_120616 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_120604,max_key_iterations];
var inst_120617 = cljs.core.PersistentHashMap.fromArrays(inst_120615,inst_120616);
var inst_120618 = com.wsscode.pathom.trace.trace(inst_120322,inst_120617);
var inst_120620 = cljs.core.contains_QMARK_(inst_120570,inst_120606);
var inst_120621 = (!(inst_120620));
var state_120722__$1 = (function (){var statearr_120778 = state_120722;
(statearr_120778[(37)] = inst_120618);

return statearr_120778;
})();
if(inst_120621){
var statearr_120779_122367 = state_120722__$1;
(statearr_120779_122367[(1)] = (109));

} else {
var statearr_120780_122368 = state_120722__$1;
(statearr_120780_122368[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (119))){
var inst_120604 = (state_120722[(8)]);
var inst_120571 = (state_120722[(11)]);
var inst_120660 = cljs.core.contains_QMARK_(inst_120571,inst_120604);
var state_120722__$1 = state_120722;
if(inst_120660){
var statearr_120781_122370 = state_120722__$1;
(statearr_120781_122370[(1)] = (121));

} else {
var statearr_120782_122371 = state_120722__$1;
(statearr_120782_122371[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (95))){
var state_120722__$1 = state_120722;
var statearr_120783_122373 = state_120722__$1;
(statearr_120783_122373[(2)] = false);

(statearr_120783_122373[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (54))){
var inst_120496 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120784_122375 = state_120722__$1;
(statearr_120784_122375[(2)] = inst_120496);

(statearr_120784_122375[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (92))){
var inst_120581 = (state_120722[(29)]);
var inst_120574 = (state_120722[(15)]);
var inst_120580 = cljs.core.seq(inst_120574);
var inst_120581__$1 = cljs.core.first(inst_120580);
var inst_120582 = cljs.core.next(inst_120580);
var inst_120584 = (inst_120581__$1 == null);
var inst_120585 = cljs.core.not(inst_120584);
var state_120722__$1 = (function (){var statearr_120785 = state_120722;
(statearr_120785[(9)] = inst_120582);

(statearr_120785[(29)] = inst_120581__$1);

return statearr_120785;
})();
if(inst_120585){
var statearr_120786_122377 = state_120722__$1;
(statearr_120786_122377[(1)] = (94));

} else {
var statearr_120787_122378 = state_120722__$1;
(statearr_120787_122378[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (104))){
var inst_120572 = (state_120722[(10)]);
var inst_120692 = cljs.core.seq(inst_120572);
var state_120722__$1 = state_120722;
if(inst_120692){
var statearr_120788_122379 = state_120722__$1;
(statearr_120788_122379[(1)] = (127));

} else {
var statearr_120789_122380 = state_120722__$1;
(statearr_120789_122380[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (15))){
var state_120722__$1 = state_120722;
var statearr_120790_122381 = state_120722__$1;
(statearr_120790_122381[(2)] = false);

(statearr_120790_122381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (48))){
var inst_120409 = (state_120722[(21)]);
var inst_120409__$1 = (state_120722[(2)]);
var inst_120410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120409__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_120722__$1 = (function (){var statearr_120791 = state_120722;
(statearr_120791[(21)] = inst_120409__$1);

(statearr_120791[(17)] = inst_120410);

return statearr_120791;
})();
if(cljs.core.truth_(inst_120409__$1)){
var statearr_120792_122384 = state_120722__$1;
(statearr_120792_122384[(1)] = (49));

} else {
var statearr_120793_122385 = state_120722__$1;
(statearr_120793_122385[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (50))){
var inst_120378 = (state_120722[(23)]);
var inst_120498 = cljs.core.seq(inst_120378);
var state_120722__$1 = state_120722;
if(inst_120498){
var statearr_120794_122394 = state_120722__$1;
(statearr_120794_122394[(1)] = (73));

} else {
var statearr_120795_122395 = state_120722__$1;
(statearr_120795_122395[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (116))){
var inst_120640 = (state_120722[(38)]);
var state_120722__$1 = state_120722;
var statearr_120796_122398 = state_120722__$1;
(statearr_120796_122398[(2)] = inst_120640);

(statearr_120796_122398[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (75))){
var inst_120518 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120797_122410 = state_120722__$1;
(statearr_120797_122410[(2)] = inst_120518);

(statearr_120797_122410[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (99))){
var inst_120595 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120798_122411 = state_120722__$1;
(statearr_120798_122411[(2)] = inst_120595);

(statearr_120798_122411[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (21))){
var inst_120313 = cljs.core.PersistentHashMap.EMPTY;
var inst_120314 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_120313);
var state_120722__$1 = state_120722;
var statearr_120799_122413 = state_120722__$1;
(statearr_120799_122413[(2)] = inst_120314);

(statearr_120799_122413[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (31))){
var inst_120369 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120369)){
var statearr_120800_122414 = state_120722__$1;
(statearr_120800_122414[(1)] = (35));

} else {
var statearr_120801_122415 = state_120722__$1;
(statearr_120801_122415[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (113))){
var inst_120322 = (state_120722[(7)]);
var inst_120640 = (state_120722[(38)]);
var inst_120640__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_120322);
var state_120722__$1 = (function (){var statearr_120802 = state_120722;
(statearr_120802[(38)] = inst_120640__$1);

return statearr_120802;
})();
if(cljs.core.truth_(inst_120640__$1)){
var statearr_120803_122417 = state_120722__$1;
(statearr_120803_122417[(1)] = (115));

} else {
var statearr_120804_122418 = state_120722__$1;
(statearr_120804_122418[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (32))){
var state_120722__$1 = state_120722;
var statearr_120805_122420 = state_120722__$1;
(statearr_120805_122420[(2)] = true);

(statearr_120805_122420[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (40))){
var inst_120387 = (state_120722[(35)]);
var inst_120393 = inst_120387.cljs$lang$protocol_mask$partition0$;
var inst_120394 = (inst_120393 & (64));
var inst_120395 = inst_120387.cljs$core$ISeq$;
var inst_120396 = (cljs.core.PROTOCOL_SENTINEL === inst_120395);
var inst_120397 = ((inst_120394) || (inst_120396));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120397)){
var statearr_120806_122424 = state_120722__$1;
(statearr_120806_122424[(1)] = (43));

} else {
var statearr_120807_122425 = state_120722__$1;
(statearr_120807_122425[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (129))){
var inst_120712 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120808_122427 = state_120722__$1;
(statearr_120808_122427[(2)] = inst_120712);

(statearr_120808_122427[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (91))){
var inst_120310 = (state_120722[(39)]);
var inst_120542 = (state_120722[(40)]);
var inst_120544 = (state_120722[(41)]);
var inst_120537 = (state_120722[(30)]);
var inst_120543 = (state_120722[(42)]);
var inst_120568 = (state_120722[(2)]);
var inst_120569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120568,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_120570 = inst_120537;
var inst_120571 = inst_120542;
var inst_120572 = inst_120543;
var inst_120573 = inst_120544;
var inst_120574 = inst_120310;
var state_120722__$1 = (function (){var statearr_120809 = state_120722;
(statearr_120809[(43)] = inst_120569);

(statearr_120809[(10)] = inst_120572);

(statearr_120809[(15)] = inst_120574);

(statearr_120809[(11)] = inst_120571);

(statearr_120809[(12)] = inst_120570);

(statearr_120809[(13)] = inst_120573);

return statearr_120809;
})();
var statearr_120810_122431 = state_120722__$1;
(statearr_120810_122431[(2)] = null);

(statearr_120810_122431[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (117))){
var inst_120645 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120645)){
var statearr_120811_122433 = state_120722__$1;
(statearr_120811_122433[(1)] = (118));

} else {
var statearr_120812_122434 = state_120722__$1;
(statearr_120812_122434[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (108))){
var inst_120690 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120813_122436 = state_120722__$1;
(statearr_120813_122436[(2)] = inst_120690);

(statearr_120813_122436[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (56))){
var inst_120376 = (state_120722[(24)]);
var state_120722__$1 = state_120722;
var statearr_120814_122438 = state_120722__$1;
(statearr_120814_122438[(2)] = inst_120376);

(statearr_120814_122438[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (33))){
var state_120722__$1 = state_120722;
var statearr_120815_122439 = state_120722__$1;
(statearr_120815_122439[(2)] = false);

(statearr_120815_122439[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (13))){
var inst_120304 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120304)){
var statearr_120816_122440 = state_120722__$1;
(statearr_120816_122440[(1)] = (17));

} else {
var statearr_120817_122441 = state_120722__$1;
(statearr_120817_122441[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (22))){
var inst_120310 = (state_120722[(39)]);
var inst_120316 = (state_120722[(20)]);
var inst_120322 = (state_120722[(7)]);
var inst_120282 = (state_120722[(27)]);
var inst_120309 = (state_120722[(44)]);
var inst_120287 = (state_120722[(33)]);
var inst_120316__$1 = (state_120722[(2)]);
var inst_120317 = cljs.core.deref(entity_path_cache);
var inst_120318 = cljs.core.PersistentHashMap.EMPTY;
var inst_120319 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_120317,path,inst_120318);
var inst_120320 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_120287], 0));
var inst_120321 = (function (){var key_process_timeout_step__$1 = inst_120282;
var key_process_timeout__$1 = inst_120287;
var map__120277 = inst_120309;
var children = inst_120310;
var key_watchers__$1 = inst_120316__$1;
var path_entity = inst_120319;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__120277,children,key_watchers__$1,path_entity,inst_120310,inst_120316,inst_120322,inst_120282,inst_120309,inst_120287,inst_120316__$1,inst_120317,inst_120318,inst_120319,inst_120320,state_val_120723,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__120277,children,key_watchers__$1,path_entity,inst_120310,inst_120316,inst_120322,inst_120282,inst_120309,inst_120287,inst_120316__$1,inst_120317,inst_120318,inst_120319,inst_120320,state_val_120723,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__120266_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__120266_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__120277,children,key_watchers__$1,path_entity,inst_120310,inst_120316,inst_120322,inst_120282,inst_120309,inst_120287,inst_120316__$1,inst_120317,inst_120318,inst_120319,inst_120320,state_val_120723,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__120277,children,key_watchers__$1,path_entity,inst_120310,inst_120316,inst_120322,inst_120282,inst_120309,inst_120287,inst_120316__$1,inst_120317,inst_120318,inst_120319,inst_120320,state_val_120723,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_120322__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_120320,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_120321);
var inst_120323 = cljs.core.PersistentHashMap.EMPTY;
var inst_120325 = (function (){var key_process_timeout_step__$1 = inst_120282;
var key_process_timeout__$1 = inst_120287;
var map__120277 = inst_120309;
var children = inst_120310;
var key_watchers__$1 = inst_120316__$1;
var path_entity = inst_120319;
var env__$1 = inst_120322__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__120277,children,key_watchers__$1,path_entity,env__$1,inst_120310,inst_120316,inst_120322,inst_120282,inst_120309,inst_120287,inst_120316__$1,inst_120317,inst_120318,inst_120319,inst_120320,inst_120321,inst_120322__$1,inst_120323,state_val_120723,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p__120324){
var map__120818 = p__120324;
var map__120818__$1 = (((((!((map__120818 == null))))?(((((map__120818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120818):map__120818);
var ast = map__120818__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120818__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__120277,children,key_watchers__$1,path_entity,env__$1,inst_120310,inst_120316,inst_120322,inst_120282,inst_120309,inst_120287,inst_120316__$1,inst_120317,inst_120318,inst_120319,inst_120320,inst_120321,inst_120322__$1,inst_120323,state_val_120723,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_120326 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_120325);
var inst_120327 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_120323,inst_120326,inst_120310);
var inst_120328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120322__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_120722__$1 = (function (){var statearr_120820 = state_120722;
(statearr_120820[(20)] = inst_120316__$1);

(statearr_120820[(7)] = inst_120322__$1);

(statearr_120820[(45)] = inst_120327);

return statearr_120820;
})();
if(cljs.core.truth_(inst_120328)){
var statearr_120821_122450 = state_120722__$1;
(statearr_120821_122450[(1)] = (23));

} else {
var statearr_120822_122451 = state_120722__$1;
(statearr_120822_122451[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (90))){
var inst_120546 = (state_120722[(46)]);
var state_120722__$1 = state_120722;
var statearr_120823_122452 = state_120722__$1;
(statearr_120823_122452[(2)] = inst_120546);

(statearr_120823_122452[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (109))){
var inst_120606 = (state_120722[(36)]);
var inst_120570 = (state_120722[(12)]);
var inst_120623 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_120570,inst_120606,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_120722__$1 = state_120722;
var statearr_120824_122453 = state_120722__$1;
(statearr_120824_122453[(2)] = inst_120623);

(statearr_120824_122453[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (36))){
var inst_120352 = (state_120722[(47)]);
var state_120722__$1 = state_120722;
var statearr_120828_122454 = state_120722__$1;
(statearr_120828_122454[(2)] = inst_120352);

(statearr_120828_122454[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (41))){
var state_120722__$1 = state_120722;
var statearr_120829_122455 = state_120722__$1;
(statearr_120829_122455[(2)] = false);

(statearr_120829_122455[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (118))){
var inst_120322 = (state_120722[(7)]);
var inst_120604 = (state_120722[(8)]);
var inst_120582 = (state_120722[(9)]);
var inst_120572 = (state_120722[(10)]);
var inst_120571 = (state_120722[(11)]);
var inst_120570 = (state_120722[(12)]);
var inst_120573 = (state_120722[(13)]);
var inst_120647 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120648 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_120604];
var inst_120649 = cljs.core.PersistentHashMap.fromArrays(inst_120647,inst_120648);
var inst_120650 = com.wsscode.pathom.trace.trace(inst_120322,inst_120649);
var inst_120651 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_120652 = com.wsscode.pathom.parser.watch_pending_key(inst_120322,inst_120604);
var inst_120653 = [inst_120604];
var inst_120654 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_120653);
var inst_120655 = [inst_120652,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_120654];
var inst_120656 = cljs.core.PersistentHashMap.fromArrays(inst_120651,inst_120655);
var inst_120657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_120572,inst_120656);
var tmp120825 = inst_120571;
var tmp120826 = inst_120570;
var tmp120827 = inst_120573;
var inst_120570__$1 = tmp120826;
var inst_120571__$1 = tmp120825;
var inst_120572__$1 = inst_120657;
var inst_120573__$1 = tmp120827;
var inst_120574 = inst_120582;
var state_120722__$1 = (function (){var statearr_120830 = state_120722;
(statearr_120830[(48)] = inst_120650);

(statearr_120830[(10)] = inst_120572__$1);

(statearr_120830[(15)] = inst_120574);

(statearr_120830[(11)] = inst_120571__$1);

(statearr_120830[(12)] = inst_120570__$1);

(statearr_120830[(13)] = inst_120573__$1);

return statearr_120830;
})();
var statearr_120831_122460 = state_120722__$1;
(statearr_120831_122460[(2)] = null);

(statearr_120831_122460[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (89))){
var inst_120546 = (state_120722[(46)]);
var inst_120565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_120546);
var state_120722__$1 = state_120722;
var statearr_120832_122461 = state_120722__$1;
(statearr_120832_122461[(2)] = inst_120565);

(statearr_120832_122461[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (100))){
var inst_120581 = (state_120722[(29)]);
var inst_120600 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_120581);
var state_120722__$1 = state_120722;
var statearr_120833_122462 = state_120722__$1;
(statearr_120833_122462[(2)] = inst_120600);

(statearr_120833_122462[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (131))){
var inst_120570 = (state_120722[(12)]);
var state_120722__$1 = state_120722;
var statearr_120834_122466 = state_120722__$1;
(statearr_120834_122466[(2)] = inst_120570);

(statearr_120834_122466[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (122))){
var state_120722__$1 = state_120722;
var statearr_120835_122468 = state_120722__$1;
(statearr_120835_122468[(1)] = (124));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (43))){
var state_120722__$1 = state_120722;
var statearr_120837_122469 = state_120722__$1;
(statearr_120837_122469[(2)] = true);

(statearr_120837_122469[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (61))){
var inst_120377 = (state_120722[(16)]);
var inst_120410 = (state_120722[(17)]);
var inst_120448 = cljs.core.contains_QMARK_(inst_120377,inst_120410);
var state_120722__$1 = state_120722;
var statearr_120838_122483 = state_120722__$1;
(statearr_120838_122483[(2)] = inst_120448);

(statearr_120838_122483[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (29))){
var inst_120352 = (state_120722[(47)]);
var inst_120358 = inst_120352.cljs$lang$protocol_mask$partition0$;
var inst_120359 = (inst_120358 & (64));
var inst_120360 = inst_120352.cljs$core$ISeq$;
var inst_120361 = (cljs.core.PROTOCOL_SENTINEL === inst_120360);
var inst_120362 = ((inst_120359) || (inst_120361));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120362)){
var statearr_120839_122484 = state_120722__$1;
(statearr_120839_122484[(1)] = (32));

} else {
var statearr_120840_122485 = state_120722__$1;
(statearr_120840_122485[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (44))){
var state_120722__$1 = state_120722;
var statearr_120841_122487 = state_120722__$1;
(statearr_120841_122487[(2)] = false);

(statearr_120841_122487[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (93))){
var inst_120716 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120845_122488 = state_120722__$1;
(statearr_120845_122488[(2)] = inst_120716);

(statearr_120845_122488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (6))){
var inst_120280 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_120722__$1 = state_120722;
var statearr_120846_122490 = state_120722__$1;
(statearr_120846_122490[(2)] = inst_120280);

(statearr_120846_122490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (111))){
var inst_120582 = (state_120722[(9)]);
var inst_120572 = (state_120722[(10)]);
var inst_120571 = (state_120722[(11)]);
var inst_120573 = (state_120722[(13)]);
var inst_120626 = (state_120722[(2)]);
var tmp120842 = inst_120572;
var tmp120843 = inst_120571;
var tmp120844 = inst_120573;
var inst_120570 = inst_120626;
var inst_120571__$1 = tmp120843;
var inst_120572__$1 = tmp120842;
var inst_120573__$1 = tmp120844;
var inst_120574 = inst_120582;
var state_120722__$1 = (function (){var statearr_120850 = state_120722;
(statearr_120850[(10)] = inst_120572__$1);

(statearr_120850[(15)] = inst_120574);

(statearr_120850[(11)] = inst_120571__$1);

(statearr_120850[(12)] = inst_120570);

(statearr_120850[(13)] = inst_120573__$1);

return statearr_120850;
})();
var statearr_120851_122493 = state_120722__$1;
(statearr_120851_122493[(2)] = null);

(statearr_120851_122493[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (28))){
var inst_120310 = (state_120722[(39)]);
var inst_120352 = (state_120722[(47)]);
var inst_120348 = (state_120722[(2)]);
var inst_120349 = cljs.core.PersistentHashSet.EMPTY;
var inst_120350 = cljs.core.PersistentHashMap.EMPTY;
var inst_120351 = cljs.core.seq(inst_120310);
var inst_120352__$1 = cljs.core.first(inst_120351);
var inst_120353 = cljs.core.next(inst_120351);
var inst_120355 = (inst_120352__$1 == null);
var inst_120356 = cljs.core.not(inst_120355);
var state_120722__$1 = (function (){var statearr_120852 = state_120722;
(statearr_120852[(49)] = inst_120350);

(statearr_120852[(50)] = inst_120349);

(statearr_120852[(47)] = inst_120352__$1);

(statearr_120852[(51)] = inst_120353);

(statearr_120852[(52)] = inst_120348);

return statearr_120852;
})();
if(inst_120356){
var statearr_120853_122498 = state_120722__$1;
(statearr_120853_122498[(1)] = (29));

} else {
var statearr_120854_122499 = state_120722__$1;
(statearr_120854_122499[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (64))){
var inst_120388 = (state_120722[(19)]);
var inst_120322 = (state_120722[(7)]);
var inst_120377 = (state_120722[(16)]);
var inst_120379 = (state_120722[(22)]);
var inst_120378 = (state_120722[(23)]);
var inst_120410 = (state_120722[(17)]);
var inst_120376 = (state_120722[(24)]);
var inst_120453 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120454 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_120410];
var inst_120455 = cljs.core.PersistentHashMap.fromArrays(inst_120453,inst_120454);
var inst_120456 = com.wsscode.pathom.trace.trace(inst_120322,inst_120455);
var inst_120457 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_120458 = com.wsscode.pathom.parser.watch_pending_key(inst_120322,inst_120410);
var inst_120459 = [inst_120410];
var inst_120460 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_120459);
var inst_120461 = [inst_120458,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_120460];
var inst_120462 = cljs.core.PersistentHashMap.fromArrays(inst_120457,inst_120461);
var inst_120463 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_120378,inst_120462);
var tmp120847 = inst_120377;
var tmp120848 = inst_120379;
var tmp120849 = inst_120376;
var inst_120376__$1 = tmp120849;
var inst_120377__$1 = tmp120847;
var inst_120378__$1 = inst_120463;
var inst_120379__$1 = tmp120848;
var inst_120380 = inst_120388;
var state_120722__$1 = (function (){var statearr_120855 = state_120722;
(statearr_120855[(16)] = inst_120377__$1);

(statearr_120855[(53)] = inst_120456);

(statearr_120855[(22)] = inst_120379__$1);

(statearr_120855[(23)] = inst_120378__$1);

(statearr_120855[(24)] = inst_120376__$1);

(statearr_120855[(25)] = inst_120380);

return statearr_120855;
})();
var statearr_120856_122500 = state_120722__$1;
(statearr_120856_122500[(2)] = null);

(statearr_120856_122500[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (103))){
var inst_120322 = (state_120722[(7)]);
var inst_120604 = (state_120722[(8)]);
var inst_120603 = (state_120722[(31)]);
var inst_120573 = (state_120722[(13)]);
var inst_120606 = com.wsscode.pathom.parser.ast__GT_out_key(inst_120603);
var inst_120607 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120608 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_120604];
var inst_120609 = cljs.core.PersistentHashMap.fromArrays(inst_120607,inst_120608);
var inst_120610 = com.wsscode.pathom.trace.trace(inst_120322,inst_120609);
var inst_120611 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_120573,inst_120604,(0));
var inst_120612 = (max_key_iterations - (1));
var inst_120613 = (inst_120611 > inst_120612);
var state_120722__$1 = (function (){var statearr_120857 = state_120722;
(statearr_120857[(54)] = inst_120610);

(statearr_120857[(36)] = inst_120606);

return statearr_120857;
})();
if(cljs.core.truth_(inst_120613)){
var statearr_120858_122519 = state_120722__$1;
(statearr_120858_122519[(1)] = (106));

} else {
var statearr_120859_122520 = state_120722__$1;
(statearr_120859_122520[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (51))){
var inst_120520 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120860_122522 = state_120722__$1;
(statearr_120860_122522[(2)] = inst_120520);

(statearr_120860_122522[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (25))){
var inst_120718 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120861_122523 = state_120722__$1;
(statearr_120861_122523[(2)] = inst_120718);


cljs.core.async.impl.ioc_helpers.process_exception(state_120722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (34))){
var inst_120366 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120862_122524 = state_120722__$1;
(statearr_120862_122524[(2)] = inst_120366);

(statearr_120862_122524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (125))){
var state_120722__$1 = state_120722;
var statearr_120863_122526 = state_120722__$1;
(statearr_120863_122526[(2)] = null);

(statearr_120863_122526[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (17))){
var inst_120288 = (state_120722[(55)]);
var inst_120306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_120288);
var state_120722__$1 = state_120722;
var statearr_120864_122530 = state_120722__$1;
(statearr_120864_122530[(2)] = inst_120306);

(statearr_120864_122530[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (3))){
var inst_120273 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120865_122531 = state_120722__$1;
(statearr_120865_122531[(2)] = inst_120273);


cljs.core.async.impl.ioc_helpers.process_exception(state_120722__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (12))){
var state_120722__$1 = state_120722;
var statearr_120866_122533 = state_120722__$1;
(statearr_120866_122533[(2)] = false);

(statearr_120866_122533[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (2))){
var inst_120720 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_120722__$1,inst_120720);
} else {
if((state_val_120723 === (66))){
var inst_120492 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120867_122535 = state_120722__$1;
(statearr_120867_122535[(2)] = inst_120492);

(statearr_120867_122535[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (107))){
var inst_120606 = (state_120722[(36)]);
var inst_120570 = (state_120722[(12)]);
var inst_120629 = cljs.core.contains_QMARK_(inst_120570,inst_120606);
var inst_120630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120570,inst_120606);
var inst_120631 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_120630);
var inst_120632 = ((inst_120629) && (inst_120631));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120632)){
var statearr_120868_122537 = state_120722__$1;
(statearr_120868_122537[(1)] = (112));

} else {
var statearr_120869_122539 = state_120722__$1;
(statearr_120869_122539[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (23))){
var inst_120322 = (state_120722[(7)]);
var inst_120287 = (state_120722[(33)]);
var inst_120330 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_120331 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_120287];
var inst_120332 = cljs.core.PersistentHashMap.fromArrays(inst_120330,inst_120331);
var inst_120333 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_120322,inst_120332);
var inst_120343 = cljs.core.PersistentHashMap.EMPTY;
var state_120722__$1 = (function (){var statearr_120870 = state_120722;
(statearr_120870[(32)] = inst_120333);

(statearr_120870[(56)] = inst_120343);

return statearr_120870;
})();
if(cljs.core.truth_(waiting)){
var statearr_120871_122542 = state_120722__$1;
(statearr_120871_122542[(1)] = (26));

} else {
var statearr_120872_122543 = state_120722__$1;
(statearr_120872_122543[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (47))){
var inst_120387 = (state_120722[(35)]);
var state_120722__$1 = state_120722;
var statearr_120873_122545 = state_120722__$1;
(statearr_120873_122545[(2)] = inst_120387);

(statearr_120873_122545[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (35))){
var inst_120352 = (state_120722[(47)]);
var inst_120371 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_120352);
var state_120722__$1 = state_120722;
var statearr_120874_122546 = state_120722__$1;
(statearr_120874_122546[(2)] = inst_120371);

(statearr_120874_122546[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (127))){
var inst_120316 = (state_120722[(20)]);
var inst_120322 = (state_120722[(7)]);
var inst_120572 = (state_120722[(10)]);
var inst_120327 = (state_120722[(45)]);
var inst_120571 = (state_120722[(11)]);
var inst_120570 = (state_120722[(12)]);
var inst_120573 = (state_120722[(13)]);
var inst_120697 = com.wsscode.pathom.parser.process_next_message(inst_120322,tx,inst_120571,inst_120327,inst_120572,inst_120573,inst_120316,inst_120570);
var state_120722__$1 = state_120722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120722__$1,(130),inst_120697);
} else {
if((state_val_120723 === (82))){
var inst_120310 = (state_120722[(39)]);
var inst_120546 = (state_120722[(46)]);
var inst_120542 = (state_120722[(2)]);
var inst_120543 = cljs.core.PersistentHashSet.EMPTY;
var inst_120544 = cljs.core.PersistentHashMap.EMPTY;
var inst_120545 = cljs.core.seq(inst_120310);
var inst_120546__$1 = cljs.core.first(inst_120545);
var inst_120547 = cljs.core.next(inst_120545);
var inst_120549 = (inst_120546__$1 == null);
var inst_120550 = cljs.core.not(inst_120549);
var state_120722__$1 = (function (){var statearr_120875 = state_120722;
(statearr_120875[(40)] = inst_120542);

(statearr_120875[(57)] = inst_120547);

(statearr_120875[(41)] = inst_120544);

(statearr_120875[(46)] = inst_120546__$1);

(statearr_120875[(42)] = inst_120543);

return statearr_120875;
})();
if(inst_120550){
var statearr_120876_122566 = state_120722__$1;
(statearr_120876_122566[(1)] = (83));

} else {
var statearr_120877_122567 = state_120722__$1;
(statearr_120877_122567[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (76))){
var inst_120505 = (state_120722[(2)]);
var inst_120506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120505,(0),null);
var inst_120507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120505,(1),null);
var inst_120508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120505,(2),null);
var inst_120509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120505,(3),null);
var inst_120510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120505,(4),null);
var inst_120376 = inst_120506;
var inst_120377 = inst_120507;
var inst_120378 = inst_120508;
var inst_120379 = inst_120509;
var inst_120380 = inst_120510;
var state_120722__$1 = (function (){var statearr_120878 = state_120722;
(statearr_120878[(16)] = inst_120377);

(statearr_120878[(22)] = inst_120379);

(statearr_120878[(23)] = inst_120378);

(statearr_120878[(24)] = inst_120376);

(statearr_120878[(25)] = inst_120380);

return statearr_120878;
})();
var statearr_120879_122572 = state_120722__$1;
(statearr_120879_122572[(2)] = null);

(statearr_120879_122572[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (97))){
var state_120722__$1 = state_120722;
var statearr_120883_122573 = state_120722__$1;
(statearr_120883_122573[(2)] = true);

(statearr_120883_122573[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (19))){
var inst_120309 = (state_120722[(44)]);
var inst_120309__$1 = (state_120722[(2)]);
var inst_120310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120309__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_120722__$1 = (function (){var statearr_120884 = state_120722;
(statearr_120884[(39)] = inst_120310);

(statearr_120884[(44)] = inst_120309__$1);

return statearr_120884;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_120885_122576 = state_120722__$1;
(statearr_120885_122576[(1)] = (20));

} else {
var statearr_120886_122578 = state_120722__$1;
(statearr_120886_122578[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (57))){
var inst_120388 = (state_120722[(19)]);
var inst_120377 = (state_120722[(16)]);
var inst_120379 = (state_120722[(22)]);
var inst_120378 = (state_120722[(23)]);
var inst_120432 = (state_120722[(2)]);
var tmp120880 = inst_120377;
var tmp120881 = inst_120379;
var tmp120882 = inst_120378;
var inst_120376 = inst_120432;
var inst_120377__$1 = tmp120880;
var inst_120378__$1 = tmp120882;
var inst_120379__$1 = tmp120881;
var inst_120380 = inst_120388;
var state_120722__$1 = (function (){var statearr_120887 = state_120722;
(statearr_120887[(16)] = inst_120377__$1);

(statearr_120887[(22)] = inst_120379__$1);

(statearr_120887[(23)] = inst_120378__$1);

(statearr_120887[(24)] = inst_120376);

(statearr_120887[(25)] = inst_120380);

return statearr_120887;
})();
var statearr_120888_122580 = state_120722__$1;
(statearr_120888_122580[(2)] = null);

(statearr_120888_122580[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (68))){
var state_120722__$1 = state_120722;
var statearr_120889_122582 = state_120722__$1;
(statearr_120889_122582[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (11))){
var inst_120288 = (state_120722[(55)]);
var inst_120293 = inst_120288.cljs$lang$protocol_mask$partition0$;
var inst_120294 = (inst_120293 & (64));
var inst_120295 = inst_120288.cljs$core$ISeq$;
var inst_120296 = (cljs.core.PROTOCOL_SENTINEL === inst_120295);
var inst_120297 = ((inst_120294) || (inst_120296));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120297)){
var statearr_120891_122584 = state_120722__$1;
(statearr_120891_122584[(1)] = (14));

} else {
var statearr_120892_122585 = state_120722__$1;
(statearr_120892_122585[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (115))){
var inst_120604 = (state_120722[(8)]);
var inst_120571 = (state_120722[(11)]);
var inst_120642 = cljs.core.contains_QMARK_(inst_120571,inst_120604);
var state_120722__$1 = state_120722;
var statearr_120893_122587 = state_120722__$1;
(statearr_120893_122587[(2)] = inst_120642);

(statearr_120893_122587[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (9))){
var state_120722__$1 = state_120722;
var statearr_120898_122588 = state_120722__$1;
(statearr_120898_122588[(2)] = null);

(statearr_120898_122588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (5))){
var state_120722__$1 = state_120722;
var statearr_120899_122589 = state_120722__$1;
(statearr_120899_122589[(2)] = key_process_timeout_step);

(statearr_120899_122589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (112))){
var inst_120322 = (state_120722[(7)]);
var inst_120604 = (state_120722[(8)]);
var inst_120582 = (state_120722[(9)]);
var inst_120572 = (state_120722[(10)]);
var inst_120571 = (state_120722[(11)]);
var inst_120570 = (state_120722[(12)]);
var inst_120573 = (state_120722[(13)]);
var inst_120634 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120635 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_120604];
var inst_120636 = cljs.core.PersistentHashMap.fromArrays(inst_120634,inst_120635);
var inst_120637 = com.wsscode.pathom.trace.trace(inst_120322,inst_120636);
var tmp120894 = inst_120572;
var tmp120895 = inst_120571;
var tmp120896 = inst_120570;
var tmp120897 = inst_120573;
var inst_120570__$1 = tmp120896;
var inst_120571__$1 = tmp120895;
var inst_120572__$1 = tmp120894;
var inst_120573__$1 = tmp120897;
var inst_120574 = inst_120582;
var state_120722__$1 = (function (){var statearr_120900 = state_120722;
(statearr_120900[(10)] = inst_120572__$1);

(statearr_120900[(15)] = inst_120574);

(statearr_120900[(58)] = inst_120637);

(statearr_120900[(11)] = inst_120571__$1);

(statearr_120900[(12)] = inst_120570__$1);

(statearr_120900[(13)] = inst_120573__$1);

return statearr_120900;
})();
var statearr_120901_122593 = state_120722__$1;
(statearr_120901_122593[(2)] = null);

(statearr_120901_122593[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (83))){
var inst_120546 = (state_120722[(46)]);
var inst_120552 = inst_120546.cljs$lang$protocol_mask$partition0$;
var inst_120553 = (inst_120552 & (64));
var inst_120554 = inst_120546.cljs$core$ISeq$;
var inst_120555 = (cljs.core.PROTOCOL_SENTINEL === inst_120554);
var inst_120556 = ((inst_120553) || (inst_120555));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120556)){
var statearr_120902_122608 = state_120722__$1;
(statearr_120902_122608[(1)] = (86));

} else {
var statearr_120903_122609 = state_120722__$1;
(statearr_120903_122609[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (14))){
var state_120722__$1 = state_120722;
var statearr_120904_122611 = state_120722__$1;
(statearr_120904_122611[(2)] = true);

(statearr_120904_122611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (45))){
var inst_120401 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120905_122612 = state_120722__$1;
(statearr_120905_122612[(2)] = inst_120401);

(statearr_120905_122612[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (53))){
var inst_120412 = (state_120722[(18)]);
var inst_120376 = (state_120722[(24)]);
var inst_120435 = cljs.core.contains_QMARK_(inst_120376,inst_120412);
var inst_120436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120376,inst_120412);
var inst_120437 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_120436);
var inst_120438 = ((inst_120435) && (inst_120437));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120438)){
var statearr_120906_122614 = state_120722__$1;
(statearr_120906_122614[(1)] = (58));

} else {
var statearr_120907_122615 = state_120722__$1;
(statearr_120907_122615[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (78))){
var state_120722__$1 = state_120722;
var statearr_120908_122617 = state_120722__$1;
(statearr_120908_122617[(2)] = null);

(statearr_120908_122617[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (132))){
var state_120722__$1 = state_120722;
var statearr_120909_122618 = state_120722__$1;
(statearr_120909_122618[(2)] = null);

(statearr_120909_122618[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (26))){
var state_120722__$1 = state_120722;
var statearr_120910_122619 = state_120722__$1;
(statearr_120910_122619[(2)] = waiting);

(statearr_120910_122619[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (123))){
var inst_120684 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120911_122621 = state_120722__$1;
(statearr_120911_122621[(2)] = inst_120684);

(statearr_120911_122621[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (16))){
var inst_120301 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120912_122623 = state_120722__$1;
(statearr_120912_122623[(2)] = inst_120301);

(statearr_120912_122623[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (133))){
var inst_120710 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120913_122625 = state_120722__$1;
(statearr_120913_122625[(2)] = inst_120710);

(statearr_120913_122625[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (81))){
var inst_120540 = cljs.core.PersistentHashSet.EMPTY;
var state_120722__$1 = state_120722;
var statearr_120914_122627 = state_120722__$1;
(statearr_120914_122627[(2)] = inst_120540);

(statearr_120914_122627[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (120))){
var inst_120686 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120915_122628 = state_120722__$1;
(statearr_120915_122628[(2)] = inst_120686);

(statearr_120915_122628[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (79))){
var inst_120516 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120916_122629 = state_120722__$1;
(statearr_120916_122629[(2)] = inst_120516);

(statearr_120916_122629[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (38))){
var inst_120387 = (state_120722[(35)]);
var inst_120380 = (state_120722[(25)]);
var inst_120386 = cljs.core.seq(inst_120380);
var inst_120387__$1 = cljs.core.first(inst_120386);
var inst_120388 = cljs.core.next(inst_120386);
var inst_120390 = (inst_120387__$1 == null);
var inst_120391 = cljs.core.not(inst_120390);
var state_120722__$1 = (function (){var statearr_120917 = state_120722;
(statearr_120917[(19)] = inst_120388);

(statearr_120917[(35)] = inst_120387__$1);

return statearr_120917;
})();
if(inst_120391){
var statearr_120918_122651 = state_120722__$1;
(statearr_120918_122651[(1)] = (40));

} else {
var statearr_120919_122654 = state_120722__$1;
(statearr_120919_122654[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (126))){
var inst_120682 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120920_122655 = state_120722__$1;
(statearr_120920_122655[(2)] = inst_120682);

(statearr_120920_122655[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (98))){
var state_120722__$1 = state_120722;
var statearr_120921_122656 = state_120722__$1;
(statearr_120921_122656[(2)] = false);

(statearr_120921_122656[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (124))){
var inst_120316 = (state_120722[(20)]);
var inst_120322 = (state_120722[(7)]);
var inst_120603 = (state_120722[(31)]);
var inst_120582 = (state_120722[(9)]);
var inst_120572 = (state_120722[(10)]);
var inst_120606 = (state_120722[(36)]);
var inst_120571 = (state_120722[(11)]);
var inst_120570 = (state_120722[(12)]);
var inst_120573 = (state_120722[(13)]);
var inst_120672 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_120573,inst_120606,com.wsscode.pathom.parser.zero_inc);
var inst_120673 = com.wsscode.pathom.parser.parallel_process_value(inst_120322,tx,inst_120603,inst_120316,inst_120570,inst_120571,inst_120572,read,mutate,inst_120672,inst_120582);
var inst_120674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120673,(0),null);
var inst_120675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120673,(1),null);
var inst_120676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120673,(2),null);
var inst_120677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120673,(3),null);
var inst_120678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120673,(4),null);
var inst_120570__$1 = inst_120674;
var inst_120571__$1 = inst_120675;
var inst_120572__$1 = inst_120676;
var inst_120573__$1 = inst_120677;
var inst_120574 = inst_120678;
var state_120722__$1 = (function (){var statearr_120922 = state_120722;
(statearr_120922[(10)] = inst_120572__$1);

(statearr_120922[(15)] = inst_120574);

(statearr_120922[(11)] = inst_120571__$1);

(statearr_120922[(12)] = inst_120570__$1);

(statearr_120922[(13)] = inst_120573__$1);

return statearr_120922;
})();
var statearr_120923_122661 = state_120722__$1;
(statearr_120923_122661[(2)] = null);

(statearr_120923_122661[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (87))){
var state_120722__$1 = state_120722;
var statearr_120924_122662 = state_120722__$1;
(statearr_120924_122662[(2)] = false);

(statearr_120924_122662[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (30))){
var state_120722__$1 = state_120722;
var statearr_120925_122664 = state_120722__$1;
(statearr_120925_122664[(2)] = false);

(statearr_120925_122664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (73))){
var inst_120316 = (state_120722[(20)]);
var inst_120322 = (state_120722[(7)]);
var inst_120377 = (state_120722[(16)]);
var inst_120327 = (state_120722[(45)]);
var inst_120379 = (state_120722[(22)]);
var inst_120378 = (state_120722[(23)]);
var inst_120376 = (state_120722[(24)]);
var inst_120503 = com.wsscode.pathom.parser.process_next_message(inst_120322,tx,inst_120377,inst_120327,inst_120378,inst_120379,inst_120316,inst_120376);
var state_120722__$1 = state_120722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120722__$1,(76),inst_120503);
} else {
if((state_val_120723 === (96))){
var inst_120598 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120598)){
var statearr_120926_122668 = state_120722__$1;
(statearr_120926_122668[(1)] = (100));

} else {
var statearr_120927_122669 = state_120722__$1;
(statearr_120927_122669[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (10))){
var inst_120288 = (state_120722[(55)]);
var inst_120287 = (state_120722[(2)]);
var inst_120288__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_120290 = (inst_120288__$1 == null);
var inst_120291 = cljs.core.not(inst_120290);
var state_120722__$1 = (function (){var statearr_120928 = state_120722;
(statearr_120928[(55)] = inst_120288__$1);

(statearr_120928[(33)] = inst_120287);

return statearr_120928;
})();
if(inst_120291){
var statearr_120929_122672 = state_120722__$1;
(statearr_120929_122672[(1)] = (11));

} else {
var statearr_120930_122674 = state_120722__$1;
(statearr_120930_122674[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (18))){
var inst_120288 = (state_120722[(55)]);
var state_120722__$1 = state_120722;
var statearr_120931_122675 = state_120722__$1;
(statearr_120931_122675[(2)] = inst_120288);

(statearr_120931_122675[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (105))){
var inst_120714 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120932_122677 = state_120722__$1;
(statearr_120932_122677[(2)] = inst_120714);

(statearr_120932_122677[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (52))){
var inst_120412 = (state_120722[(18)]);
var inst_120322 = (state_120722[(7)]);
var inst_120410 = (state_120722[(17)]);
var inst_120376 = (state_120722[(24)]);
var inst_120421 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_120422 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_120410,max_key_iterations];
var inst_120423 = cljs.core.PersistentHashMap.fromArrays(inst_120421,inst_120422);
var inst_120424 = com.wsscode.pathom.trace.trace(inst_120322,inst_120423);
var inst_120426 = cljs.core.contains_QMARK_(inst_120376,inst_120412);
var inst_120427 = (!(inst_120426));
var state_120722__$1 = (function (){var statearr_120937 = state_120722;
(statearr_120937[(59)] = inst_120424);

return statearr_120937;
})();
if(inst_120427){
var statearr_120938_122681 = state_120722__$1;
(statearr_120938_122681[(1)] = (55));

} else {
var statearr_120939_122682 = state_120722__$1;
(statearr_120939_122682[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (114))){
var inst_120688 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
var statearr_120940_122683 = state_120722__$1;
(statearr_120940_122683[(2)] = inst_120688);

(statearr_120940_122683[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (67))){
var inst_120388 = (state_120722[(19)]);
var inst_120322 = (state_120722[(7)]);
var inst_120377 = (state_120722[(16)]);
var inst_120379 = (state_120722[(22)]);
var inst_120378 = (state_120722[(23)]);
var inst_120410 = (state_120722[(17)]);
var inst_120376 = (state_120722[(24)]);
var inst_120468 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120469 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_120410];
var inst_120470 = cljs.core.PersistentHashMap.fromArrays(inst_120468,inst_120469);
var inst_120471 = com.wsscode.pathom.trace.trace(inst_120322,inst_120470);
var tmp120933 = inst_120377;
var tmp120934 = inst_120379;
var tmp120935 = inst_120378;
var tmp120936 = inst_120376;
var inst_120376__$1 = tmp120936;
var inst_120377__$1 = tmp120933;
var inst_120378__$1 = tmp120935;
var inst_120379__$1 = tmp120934;
var inst_120380 = inst_120388;
var state_120722__$1 = (function (){var statearr_120941 = state_120722;
(statearr_120941[(16)] = inst_120377__$1);

(statearr_120941[(22)] = inst_120379__$1);

(statearr_120941[(23)] = inst_120378__$1);

(statearr_120941[(24)] = inst_120376__$1);

(statearr_120941[(60)] = inst_120471);

(statearr_120941[(25)] = inst_120380);

return statearr_120941;
})();
var statearr_120942_122687 = state_120722__$1;
(statearr_120942_122687[(2)] = null);

(statearr_120942_122687[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (71))){
var state_120722__$1 = state_120722;
var statearr_120943_122688 = state_120722__$1;
(statearr_120943_122688[(2)] = null);

(statearr_120943_122688[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (42))){
var inst_120404 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120404)){
var statearr_120944_122689 = state_120722__$1;
(statearr_120944_122689[(1)] = (46));

} else {
var statearr_120945_122691 = state_120722__$1;
(statearr_120945_122691[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (80))){
var state_120722__$1 = state_120722;
var statearr_120946_122694 = state_120722__$1;
(statearr_120946_122694[(2)] = waiting);

(statearr_120946_122694[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (37))){
var inst_120310 = (state_120722[(39)]);
var inst_120350 = (state_120722[(49)]);
var inst_120349 = (state_120722[(50)]);
var inst_120348 = (state_120722[(52)]);
var inst_120343 = (state_120722[(56)]);
var inst_120374 = (state_120722[(2)]);
var inst_120375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_120374,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_120376 = inst_120343;
var inst_120377 = inst_120348;
var inst_120378 = inst_120349;
var inst_120379 = inst_120350;
var inst_120380 = inst_120310;
var state_120722__$1 = (function (){var statearr_120947 = state_120722;
(statearr_120947[(16)] = inst_120377);

(statearr_120947[(22)] = inst_120379);

(statearr_120947[(61)] = inst_120375);

(statearr_120947[(23)] = inst_120378);

(statearr_120947[(24)] = inst_120376);

(statearr_120947[(25)] = inst_120380);

return statearr_120947;
})();
var statearr_120948_122696 = state_120722__$1;
(statearr_120948_122696[(2)] = null);

(statearr_120948_122696[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (63))){
var inst_120451 = (state_120722[(2)]);
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120451)){
var statearr_120949_122699 = state_120722__$1;
(statearr_120949_122699[(1)] = (64));

} else {
var statearr_120950_122700 = state_120722__$1;
(statearr_120950_122700[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (94))){
var inst_120581 = (state_120722[(29)]);
var inst_120587 = inst_120581.cljs$lang$protocol_mask$partition0$;
var inst_120588 = (inst_120587 & (64));
var inst_120589 = inst_120581.cljs$core$ISeq$;
var inst_120590 = (cljs.core.PROTOCOL_SENTINEL === inst_120589);
var inst_120591 = ((inst_120588) || (inst_120590));
var state_120722__$1 = state_120722;
if(cljs.core.truth_(inst_120591)){
var statearr_120951_122702 = state_120722__$1;
(statearr_120951_122702[(1)] = (97));

} else {
var statearr_120952_122703 = state_120722__$1;
(statearr_120952_122703[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (8))){
var inst_120282 = (state_120722[(27)]);
var inst_120284 = (inst_120282.cljs$core$IFn$_invoke$arity$2 ? inst_120282.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_120282.call(null,env,key_process_timeout));
var state_120722__$1 = state_120722;
var statearr_120953_122704 = state_120722__$1;
(statearr_120953_122704[(2)] = inst_120284);

(statearr_120953_122704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (49))){
var inst_120322 = (state_120722[(7)]);
var inst_120409 = (state_120722[(21)]);
var inst_120379 = (state_120722[(22)]);
var inst_120410 = (state_120722[(17)]);
var inst_120412 = com.wsscode.pathom.parser.ast__GT_out_key(inst_120409);
var inst_120413 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_120414 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_120410];
var inst_120415 = cljs.core.PersistentHashMap.fromArrays(inst_120413,inst_120414);
var inst_120416 = com.wsscode.pathom.trace.trace(inst_120322,inst_120415);
var inst_120417 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_120379,inst_120410,(0));
var inst_120418 = (max_key_iterations - (1));
var inst_120419 = (inst_120417 > inst_120418);
var state_120722__$1 = (function (){var statearr_120954 = state_120722;
(statearr_120954[(18)] = inst_120412);

(statearr_120954[(62)] = inst_120416);

return statearr_120954;
})();
if(cljs.core.truth_(inst_120419)){
var statearr_120955_122709 = state_120722__$1;
(statearr_120955_122709[(1)] = (52));

} else {
var statearr_120956_122710 = state_120722__$1;
(statearr_120956_122710[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_120723 === (84))){
var state_120722__$1 = state_120722;
var statearr_120957_122711 = state_120722__$1;
(statearr_120957_122711[(2)] = false);

(statearr_120957_122711[(1)] = (85));


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
});})(c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto____0 = (function (){
var statearr_120958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_120958[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto__);

(statearr_120958[(1)] = (1));

return statearr_120958;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto____1 = (function (state_120722){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_120722);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e120959){if((e120959 instanceof Object)){
var ex__38933__auto__ = e120959;
var statearr_120960_122714 = state_120722;
(statearr_120960_122714[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_120722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e120959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122717 = state_120722;
state_120722 = G__122717;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto__ = function(state_120722){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto____1.call(this,state_120722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__39005__auto__ = (function (){var statearr_120961 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_120961[(6)] = c__39003__auto__);

return statearr_120961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__120269,map__120269__$1,read,mutate,map__120270,map__120270__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__39003__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__120962){
var map__120963 = p__120962;
var map__120963__$1 = (((((!((map__120963 == null))))?(((((map__120963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120963):map__120963);
var pconfig = map__120963__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120963__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__120963,map__120963__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__120965,tx){
var map__120966 = p__120965;
var map__120966__$1 = (((((!((map__120966 == null))))?(((((map__120966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__120966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__120966):map__120966);
var env = map__120966__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__120966__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120966__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__120966__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__39003__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39003__auto__,map__120966,map__120966__$1,env,key_process_timeout,active_paths,path,map__120963,map__120963__$1,pconfig,add_error){
return (function (){
var f__39004__auto__ = (function (){var switch__38929__auto__ = ((function (c__39003__auto__,map__120966,map__120966__$1,env,key_process_timeout,active_paths,path,map__120963,map__120963__$1,pconfig,add_error){
return (function (state_121011){
var state_val_121012 = (state_121011[(1)]);
if((state_val_121012 === (7))){
var inst_120987 = (state_121011[(2)]);
var state_121011__$1 = state_121011;
return cljs.core.async.ioc_alts_BANG_(state_121011__$1,(8),inst_120987);
} else {
if((state_val_121012 === (1))){
var state_121011__$1 = state_121011;
var statearr_121013_122733 = state_121011__$1;
(statearr_121013_122733[(2)] = null);

(statearr_121013_122733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (4))){
var inst_120977 = (state_121011[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_121011,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_120972 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_120976 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout], 0));
var inst_120977__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_120976,tx);
var inst_120979 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120980 = [inst_120977__$1];
var inst_120981 = (new cljs.core.PersistentVector(null,1,(5),inst_120979,inst_120980,null));
var state_121011__$1 = (function (){var statearr_121014 = state_121011;
(statearr_121014[(8)] = inst_120981);

(statearr_121014[(7)] = inst_120977__$1);

(statearr_121014[(9)] = inst_120972);

return statearr_121014;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_121015_122735 = state_121011__$1;
(statearr_121015_122735[(1)] = (5));

} else {
var statearr_121016_122736 = state_121011__$1;
(statearr_121016_122736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (6))){
var inst_120981 = (state_121011[(8)]);
var state_121011__$1 = state_121011;
var statearr_121017_122738 = state_121011__$1;
(statearr_121017_122738[(2)] = inst_120981);

(statearr_121017_122738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (3))){
var inst_120968 = (state_121011[(2)]);
var state_121011__$1 = state_121011;
var statearr_121018_122739 = state_121011__$1;
(statearr_121018_122739[(2)] = inst_120968);


cljs.core.async.impl.ioc_helpers.process_exception(state_121011__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (2))){
var inst_121009 = (state_121011[(2)]);
var state_121011__$1 = state_121011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_121011__$1,inst_121009);
} else {
if((state_val_121012 === (11))){
var inst_121007 = (state_121011[(2)]);
var state_121011__$1 = state_121011;
var statearr_121019_122742 = state_121011__$1;
(statearr_121019_122742[(2)] = inst_121007);


cljs.core.async.impl.ioc_helpers.process_exception(state_121011__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (9))){
var inst_120990 = (state_121011[(10)]);
var state_121011__$1 = state_121011;
var statearr_121020_122743 = state_121011__$1;
(statearr_121020_122743[(2)] = inst_120990);

(statearr_121020_122743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (5))){
var inst_120981 = (state_121011[(8)]);
var inst_120983 = cljs.core.async.timeout(key_process_timeout);
var inst_120984 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_120981,inst_120983);
var state_121011__$1 = state_121011;
var statearr_121021_122747 = state_121011__$1;
(statearr_121021_122747[(2)] = inst_120984);

(statearr_121021_122747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (10))){
var inst_120996 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_120997 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_120998 = cljs.core.PersistentHashMap.fromArrays(inst_120996,inst_120997);
var inst_120999 = com.wsscode.pathom.trace.trace(env,inst_120998);
var inst_121000 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_121001 = [key_process_timeout];
var inst_121002 = cljs.core.PersistentHashMap.fromArrays(inst_121000,inst_121001);
var inst_121003 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_121002);
var inst_121004 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_121003) : add_error.call(null,env,inst_121003));
var inst_121005 = cljs.core.PersistentHashMap.EMPTY;
var state_121011__$1 = (function (){var statearr_121022 = state_121011;
(statearr_121022[(11)] = inst_120999);

(statearr_121022[(12)] = inst_121004);

return statearr_121022;
})();
var statearr_121023_122749 = state_121011__$1;
(statearr_121023_122749[(2)] = inst_121005);

(statearr_121023_122749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_121012 === (8))){
var inst_120977 = (state_121011[(7)]);
var inst_120989 = (state_121011[(2)]);
var inst_120990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120989,(0),null);
var inst_120991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_120989,(1),null);
var inst_120992 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_120993 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_120977,inst_120991);
var state_121011__$1 = (function (){var statearr_121024 = state_121011;
(statearr_121024[(10)] = inst_120990);

(statearr_121024[(13)] = inst_120992);

return statearr_121024;
})();
if(inst_120993){
var statearr_121025_122752 = state_121011__$1;
(statearr_121025_122752[(1)] = (9));

} else {
var statearr_121026_122753 = state_121011__$1;
(statearr_121026_122753[(1)] = (10));

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
});})(c__39003__auto__,map__120966,map__120966__$1,env,key_process_timeout,active_paths,path,map__120963,map__120963__$1,pconfig,add_error))
;
return ((function (switch__38929__auto__,c__39003__auto__,map__120966,map__120966__$1,env,key_process_timeout,active_paths,path,map__120963,map__120963__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto____0 = (function (){
var statearr_121027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_121027[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto__);

(statearr_121027[(1)] = (1));

return statearr_121027;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto____1 = (function (state_121011){
while(true){
var ret_value__38931__auto__ = (function (){try{while(true){
var result__38932__auto__ = switch__38929__auto__(state_121011);
if(cljs.core.keyword_identical_QMARK_(result__38932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38932__auto__;
}
break;
}
}catch (e121028){if((e121028 instanceof Object)){
var ex__38933__auto__ = e121028;
var statearr_121029_122767 = state_121011;
(statearr_121029_122767[(5)] = ex__38933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_121011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e121028;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__122769 = state_121011;
state_121011 = G__122769;
continue;
} else {
return ret_value__38931__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto__ = function(state_121011){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto____1.call(this,state_121011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38930__auto__;
})()
;})(switch__38929__auto__,c__39003__auto__,map__120966,map__120966__$1,env,key_process_timeout,active_paths,path,map__120963,map__120963__$1,pconfig,add_error))
})();
var state__39005__auto__ = (function (){var statearr_121030 = (f__39004__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39004__auto__.cljs$core$IFn$_invoke$arity$0() : f__39004__auto__.call(null));
(statearr_121030[(6)] = c__39003__auto__);

return statearr_121030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39005__auto__);
});})(c__39003__auto__,map__120966,map__120966__$1,env,key_process_timeout,active_paths,path,map__120963,map__120963__$1,pconfig,add_error))
);

return c__39003__auto__;
});
;})(map__120963,map__120963__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
