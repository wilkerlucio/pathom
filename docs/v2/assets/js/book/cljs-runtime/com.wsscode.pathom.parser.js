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
var G__44936 = target;
if(cljs.core.truth_(cljs.core.meta(source))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44936,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.meta(source));
} else {
return G__44936;
}
});
com.wsscode.pathom.parser.symbol__GT_ast = (function com$wsscode$pathom$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.keyword__GT_ast = (function com$wsscode$pathom$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
com.wsscode.pathom.parser.union_entry__GT_ast = (function com$wsscode$pathom$parser$union_entry__GT_ast(p__44937){
var vec__44938 = p__44937;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44938,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null))], 0));
});
com.wsscode.pathom.parser.union__GT_ast = (function com$wsscode$pathom$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.union_entry__GT_ast),m)], null);
});
com.wsscode.pathom.parser.call__GT_ast = (function com$wsscode$pathom$parser$call__GT_ast(p__44941){
var vec__44942 = p__44941;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44942,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44942,(1),null);
var call = vec__44942;
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
var G__44945 = com.wsscode.pathom.parser.mark_meta(call,ast);
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44945,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__44945;
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
var vec__44946 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44946,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44946,(1),null);
var ast = (com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? com.wsscode.pathom.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : com.wsscode.pathom.parser.expr__GT_ast.call(null,k));
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast)))?new cljs.core.Keyword(null,"call","call",-519999866):new cljs.core.Keyword(null,"join","join",-758861890));
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ast,com.wsscode.pathom.parser.mark_meta(join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"query","query",-1288509510),v], null)),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),((((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),v))))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(com.wsscode.pathom.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.wsscode.pathom.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid join, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
)))], 0));
});
com.wsscode.pathom.parser.ident__GT_ast = (function com$wsscode$pathom$parser$ident__GT_ast(p__44949){
var vec__44950 = p__44949;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44950,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44950,(1),null);
var ref = vec__44950;
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
return cljs.core.with_meta((function (){var G__44953 = expr;
if((expr instanceof cljs.core.Keyword)){
return (new cljs.core.List(null,G__44953,null,(1),null));
} else {
return G__44953;
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
var G__44959 = arguments.length;
switch (G__44959) {
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

com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__44960,unparse_QMARK_){
var map__44961 = p__44960;
var map__44961__$1 = (((((!((map__44961 == null))))?(((((map__44961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44961):map__44961);
var ast = map__44961__$1;
var ast_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44961__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44961__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44961__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__44963 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,ast_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44961,map__44961__$1,ast,ast_meta,type,component){
return (function (p1__44955_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__44955_SHARP_,unparse_QMARK_);
});})(map__44961,map__44961__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44963,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__44963;
}
} else {
var map__44964 = ast;
var map__44964__$1 = (((((!((map__44964 == null))))?(((((map__44964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44964):map__44964);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44964__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44964__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44964__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44964__$1,new cljs.core.Keyword(null,"params","params",710516235));
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
var map__44966 = ast;
var map__44966__$1 = (((((!((map__44966 == null))))?(((((map__44966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44966):map__44966);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44966__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var query_meta = cljs.core.meta(query);
if(((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))))){
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__44968 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,ast_meta);
if(cljs.core.truth_(component)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44968,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__44968;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44966,map__44966__$1,children,query_meta,key__$1,map__44964,map__44964__$1,key,query,query_root,params,map__44961,map__44961__$1,ast,ast_meta,type,component){
return (function (p__44969){
var map__44970 = p__44969;
var map__44970__$1 = (((((!((map__44970 == null))))?(((((map__44970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44970):map__44970);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44970__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44970__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44970__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__44972 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44970,map__44970__$1,union_key,children__$1,component__$1,map__44966,map__44966__$1,children,query_meta,key__$1,map__44964,map__44964__$1,key,query,query_root,params,map__44961,map__44961__$1,ast,ast_meta,type,component){
return (function (p1__44956_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__44956_SHARP_,unparse_QMARK_);
});})(map__44970,map__44970__$1,union_key,children__$1,component__$1,map__44966,map__44966__$1,children,query_meta,key__$1,map__44964,map__44964__$1,key,query,query_root,params,map__44961,map__44961__$1,ast,ast_meta,type,component))
),children__$1);
if((!((component__$1 == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44972,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component__$1);
} else {
return G__44972;
}
})()], null);
});})(map__44966,map__44966__$1,children,query_meta,key__$1,map__44964,map__44964__$1,key,query,query_root,params,map__44961,map__44961__$1,ast,ast_meta,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))]),ast_meta);
} else {
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([key__$1,(function (){var G__44973 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,query_meta),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__44966,map__44966__$1,children,query_meta,key__$1,map__44964,map__44964__$1,key,query,query_root,params,map__44961,map__44961__$1,ast,ast_meta,type,component){
return (function (p1__44957_SHARP_){
return com.wsscode.pathom.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__44957_SHARP_,unparse_QMARK_);
});})(map__44966,map__44966__$1,children,query_meta,key__$1,map__44964,map__44964__$1,key,query,query_root,params,map__44961,map__44961__$1,ast,ast_meta,type,component))
),children);
if((!((component == null)))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__44973,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),component);
} else {
return G__44973;
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
var s_index = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__44974_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"union-key","union-key",1529707234).cljs$core$IFn$_invoke$arity$1(p1__44974_SHARP_),p1__44974_SHARP_],null));
})),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(sub_ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query_ast,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_index){
return (function (children,p__44975){
var map__44976 = p__44975;
var map__44976__$1 = (((((!((map__44976 == null))))?(((((map__44976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44976):map__44976);
var union_entry = map__44976__$1;
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44976__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
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
return (function (children,p__44978){
var map__44979 = p__44978;
var map__44979__$1 = (((((!((map__44979 == null))))?(((((map__44979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44979):map__44979);
var focus = map__44979__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44979__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q_index,key);
if(cljs.core.truth_(temp__5718__auto__)){
var source = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (source,temp__5718__auto__,map__44979,map__44979__$1,focus,key,type,q_index){
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
});})(source,temp__5718__auto__,map__44979,map__44979__$1,focus,key,type,q_index))
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
com.wsscode.pathom.parser.parser = (function com$wsscode$pathom$parser$parser(p__44981){
var map__44982 = p__44981;
var map__44982__$1 = (((((!((map__44982 == null))))?(((((map__44982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44982):map__44982);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44982__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44982__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__44982,map__44982__$1,read,mutate){
return (function com$wsscode$pathom$parser$parser_$_self(env,tx){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782)))){
var trace_id__21490__auto__ = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)], null));
var res__21491__auto__ = (function (){var map__44984 = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.parser.query__GT_ast(tx);
}
})();
var map__44984__$1 = (((((!((map__44984 == null))))?(((((map__44984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44984):map__44984);
var tx_ast = map__44984__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44984__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__44991 = children;
var vec__44992 = G__44991;
var seq__44993 = cljs.core.seq(vec__44992);
var first__44994 = cljs.core.first(seq__44993);
var seq__44993__$1 = cljs.core.next(seq__44993);
var map__44995 = first__44994;
var map__44995__$1 = (((((!((map__44995 == null))))?(((((map__44995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44995):map__44995);
var ast = map__44995__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44995__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__44993__$1;
var res__$1 = res;
var G__44991__$1 = G__44991;
while(true){
var res__$2 = res__$1;
var vec__45010 = G__44991__$1;
var seq__45011 = cljs.core.seq(vec__45010);
var first__45012 = cljs.core.first(seq__45011);
var seq__45011__$1 = cljs.core.next(seq__45011);
var map__45013 = first__45012;
var map__45013__$1 = (((((!((map__45013 == null))))?(((((map__45013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45013):map__45013);
var ast__$1 = map__45013__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__45011__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var query__$2 = (function (){var G__45016 = query__$1;
if(cljs.core.vector_QMARK_(query__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__45016,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
} else {
return G__45016;
}
})();
var env__$2 = (function (){var G__45017 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$2], null)], 0));
var G__45017__$1 = (((query__$2 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45017,new cljs.core.Keyword(null,"query","query",-1288509510)):G__45017);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45017__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__45017__$1;
}
})();
var value = (function (){var G__45018 = type__$1;
var G__45018__$1 = (((G__45018 instanceof cljs.core.Keyword))?G__45018.fqn:null);
switch (G__45018__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__45019 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__45019__$1 = (((((!((map__45019 == null))))?(((((map__45019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45019):map__45019);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45019__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__47044 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__47045 = tail__$1;
res__$1 = G__47044;
G__44991__$1 = G__47045;
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
var map__45021 = (function (){var or__4131__auto__ = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return com.wsscode.pathom.parser.query__GT_ast(tx);
}
})();
var map__45021__$1 = (((((!((map__45021 == null))))?(((((map__45021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45021):map__45021);
var tx_ast = map__45021__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tx__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parser_$_self);
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__45027 = children;
var vec__45028 = G__45027;
var seq__45029 = cljs.core.seq(vec__45028);
var first__45030 = cljs.core.first(seq__45029);
var seq__45029__$1 = cljs.core.next(seq__45029);
var map__45031 = first__45030;
var map__45031__$1 = (((((!((map__45031 == null))))?(((((map__45031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45031):map__45031);
var ast = map__45031__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45031__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail = seq__45029__$1;
var res__$1 = res;
var G__45027__$1 = G__45027;
while(true){
var res__$2 = res__$1;
var vec__45043 = G__45027__$1;
var seq__45044 = cljs.core.seq(vec__45043);
var first__45045 = cljs.core.first(seq__45044);
var seq__45044__$1 = cljs.core.next(seq__45044);
var map__45046 = first__45045;
var map__45046__$1 = (((((!((map__45046 == null))))?(((((map__45046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45046):map__45046);
var ast__$1 = map__45046__$1;
var query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45046__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45046__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45046__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45046__$1,new cljs.core.Keyword(null,"params","params",710516235));
var tail__$1 = seq__45044__$1;
if(cljs.core.truth_(ast__$1)){
var _ = com.wsscode.pathom.trace.trace(env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),new cljs.core.Keyword(null,"key","key",-1516042587),key__$1], null));
var query__$2 = (function (){var G__45048 = query__$1;
if(cljs.core.vector_QMARK_(query__$1)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__45048,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),tx_ast);
} else {
return G__45048;
}
})();
var env__$2 = (function (){var G__45049 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query__$2], null)], 0));
var G__45049__$1 = (((query__$2 == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45049,new cljs.core.Keyword(null,"query","query",-1288509510)):G__45049);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query__$2)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45049__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx__$1);
} else {
return G__45049__$1;
}
})();
var value = (function (){var G__45050 = type__$1;
var G__45050__$1 = (((G__45050 instanceof cljs.core.Keyword))?G__45050.fqn:null);
switch (G__45050__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__45051 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,key__$1,params__$1) : mutate.call(null,env__$2,key__$1,params__$1));
var map__45051__$1 = (((((!((map__45051 == null))))?(((((map__45051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45051):map__45051);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45051__$1,new cljs.core.Keyword(null,"action","action",-811238024));
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
var G__47051 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res__$2,com.wsscode.pathom.parser.ast__GT_out_key(ast__$1),value);
var G__47052 = tail__$1;
res__$1 = G__47051;
G__45027__$1 = G__47052;
continue;
} else {
return res__$2;
}
break;
}
}
});
;})(map__44982,map__44982__$1,read,mutate))
});
com.wsscode.pathom.parser.async_parser = (function com$wsscode$pathom$parser$async_parser(p__45053){
var map__45054 = p__45053;
var map__45054__$1 = (((((!((map__45054 == null))))?(((((map__45054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45054):map__45054);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45054__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45054__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__45054,map__45054__$1,read,mutate){
return (function com$wsscode$pathom$parser$async_parser_$_self(env,tx){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__45054,map__45054__$1,read,mutate){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__45054,map__45054__$1,read,mutate){
return (function (state_45474){
var state_val_45475 = (state_45474[(1)]);
if((state_val_45475 === (121))){
var inst_45372 = (state_45474[(7)]);
var inst_45403 = (state_45474[(2)]);
var state_45474__$1 = (function (){var statearr_45476 = state_45474;
(statearr_45476[(8)] = inst_45403);

return statearr_45476;
})();
var G__45477_47056 = inst_45372;
var G__45477_47057__$1 = (((G__45477_47056 instanceof cljs.core.Keyword))?G__45477_47056.fqn:null);
switch (G__45477_47057__$1) {
case "call":
var statearr_45478_47059 = state_45474__$1;
(statearr_45478_47059[(1)] = (123));


break;
case "prop":
case "join":
case "union":
var statearr_45479_47060 = state_45474__$1;
(statearr_45479_47060[(1)] = (139));


break;
default:
var statearr_45480_47061 = state_45474__$1;
(statearr_45480_47061[(1)] = (143));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (65))){
var inst_45230 = (state_45474[(9)]);
var inst_45229 = (state_45474[(2)]);
var inst_45230__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45229,new cljs.core.Keyword(null,"action","action",-811238024));
var state_45474__$1 = (function (){var statearr_45481 = state_45474;
(statearr_45481[(9)] = inst_45230__$1);

return statearr_45481;
})();
if(cljs.core.truth_(inst_45230__$1)){
var statearr_45482_47062 = state_45474__$1;
(statearr_45482_47062[(1)] = (66));

} else {
var statearr_45483_47063 = state_45474__$1;
(statearr_45483_47063[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (70))){
var state_45474__$1 = state_45474;
var statearr_45484_47064 = state_45474__$1;
(statearr_45484_47064[(2)] = null);

(statearr_45484_47064[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (62))){
var inst_45221 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45485_47065 = state_45474__$1;
(statearr_45485_47065[(2)] = inst_45221);

(statearr_45485_47065[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (74))){
var inst_45248 = (state_45474[(10)]);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45474__$1,(77),inst_45248);
} else {
if((state_val_45475 === (110))){
var inst_45300 = (state_45474[(11)]);
var inst_45371 = (state_45474[(12)]);
var inst_45370 = (state_45474[(13)]);
var inst_45375 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45376 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_45371];
var inst_45377 = cljs.core.PersistentHashMap.fromArrays(inst_45375,inst_45376);
var inst_45378 = com.wsscode.pathom.trace.trace(inst_45300,inst_45377);
var inst_45380 = cljs.core.vector_QMARK_(inst_45370);
var state_45474__$1 = (function (){var statearr_45486 = state_45474;
(statearr_45486[(14)] = inst_45378);

return statearr_45486;
})();
if(inst_45380){
var statearr_45487_47069 = state_45474__$1;
(statearr_45487_47069[(1)] = (113));

} else {
var statearr_45488_47070 = state_45474__$1;
(statearr_45488_47070[(1)] = (114));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (130))){
var state_45474__$1 = state_45474;
var statearr_45489_47072 = state_45474__$1;
(statearr_45489_47072[(2)] = true);

(statearr_45489_47072[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (128))){
var state_45474__$1 = state_45474;
var statearr_45490_47075 = state_45474__$1;
(statearr_45490_47075[(2)] = false);

(statearr_45490_47075[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (7))){
var inst_45470 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45491_47076 = state_45474__$1;
(statearr_45491_47076[(2)] = inst_45470);


cljs.core.async.impl.ioc_helpers.process_exception(state_45474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (59))){
var inst_45224 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45224)){
var statearr_45492_47077 = state_45474__$1;
(statearr_45492_47077[(1)] = (63));

} else {
var statearr_45493_47078 = state_45474__$1;
(statearr_45493_47078[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (86))){
var inst_45289 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45494_47082 = state_45474__$1;
(statearr_45494_47082[(2)] = inst_45289);

(statearr_45494_47082[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (20))){
var inst_45108 = (state_45474[(15)]);
var inst_45114 = inst_45108.cljs$lang$protocol_mask$partition0$;
var inst_45115 = (inst_45114 & (64));
var inst_45116 = inst_45108.cljs$core$ISeq$;
var inst_45117 = (cljs.core.PROTOCOL_SENTINEL === inst_45116);
var inst_45118 = ((inst_45115) || (inst_45117));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45118)){
var statearr_45495_47083 = state_45474__$1;
(statearr_45495_47083[(1)] = (23));

} else {
var statearr_45496_47084 = state_45474__$1;
(statearr_45496_47084[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (72))){
var inst_45199 = (state_45474[(16)]);
var inst_45243 = (state_45474[(2)]);
var inst_45244 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_45199) : read.call(null,inst_45199));
var state_45474__$1 = (function (){var statearr_45497 = state_45474;
(statearr_45497[(17)] = inst_45243);

return statearr_45497;
})();
var statearr_45498_47085 = state_45474__$1;
(statearr_45498_47085[(2)] = inst_45244);

(statearr_45498_47085[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (58))){
var state_45474__$1 = state_45474;
var statearr_45499_47090 = state_45474__$1;
(statearr_45499_47090[(2)] = false);

(statearr_45499_47090[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (60))){
var state_45474__$1 = state_45474;
var statearr_45500_47104 = state_45474__$1;
(statearr_45500_47104[(2)] = true);

(statearr_45500_47104[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (27))){
var inst_45108 = (state_45474[(15)]);
var state_45474__$1 = state_45474;
var statearr_45501_47105 = state_45474__$1;
(statearr_45501_47105[(2)] = inst_45108);

(statearr_45501_47105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (1))){
var state_45474__$1 = state_45474;
var statearr_45502_47106 = state_45474__$1;
(statearr_45502_47106[(2)] = null);

(statearr_45502_47106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (69))){
var state_45474__$1 = state_45474;
if(cljs.core.truth_(read)){
var statearr_45503_47108 = state_45474__$1;
(statearr_45503_47108[(1)] = (70));

} else {
var statearr_45504_47109 = state_45474__$1;
(statearr_45504_47109[(1)] = (71));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (101))){
var inst_45347 = (state_45474[(18)]);
var inst_45353 = inst_45347.cljs$lang$protocol_mask$partition0$;
var inst_45354 = (inst_45353 & (64));
var inst_45355 = inst_45347.cljs$core$ISeq$;
var inst_45356 = (cljs.core.PROTOCOL_SENTINEL === inst_45355);
var inst_45357 = ((inst_45354) || (inst_45356));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45357)){
var statearr_45505_47111 = state_45474__$1;
(statearr_45505_47111[(1)] = (104));

} else {
var statearr_45506_47112 = state_45474__$1;
(statearr_45506_47112[(1)] = (105));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (24))){
var state_45474__$1 = state_45474;
var statearr_45507_47113 = state_45474__$1;
(statearr_45507_47113[(2)] = false);

(statearr_45507_47113[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (102))){
var state_45474__$1 = state_45474;
var statearr_45508_47115 = state_45474__$1;
(statearr_45508_47115[(2)] = false);

(statearr_45508_47115[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (135))){
var inst_45434 = (state_45474[(19)]);
var inst_45433 = (state_45474[(2)]);
var inst_45434__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45433,new cljs.core.Keyword(null,"action","action",-811238024));
var state_45474__$1 = (function (){var statearr_45509 = state_45474;
(statearr_45509[(19)] = inst_45434__$1);

return statearr_45509;
})();
if(cljs.core.truth_(inst_45434__$1)){
var statearr_45510_47119 = state_45474__$1;
(statearr_45510_47119[(1)] = (136));

} else {
var statearr_45511_47121 = state_45474__$1;
(statearr_45511_47121[(1)] = (137));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (55))){
var inst_45202 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_45203 = (new Error(inst_45202));
var inst_45204 = (function(){throw inst_45203})();
var state_45474__$1 = state_45474;
var statearr_45512_47123 = state_45474__$1;
(statearr_45512_47123[(2)] = inst_45204);

(statearr_45512_47123[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (85))){
var state_45474__$1 = state_45474;
var statearr_45513_47125 = state_45474__$1;
(statearr_45513_47125[(2)] = false);

(statearr_45513_47125[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (39))){
var inst_45165 = (state_45474[(20)]);
var inst_45165__$1 = (state_45474[(2)]);
var inst_45166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45165__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45165__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45165__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_45474__$1 = (function (){var statearr_45514 = state_45474;
(statearr_45514[(20)] = inst_45165__$1);

(statearr_45514[(21)] = inst_45169);

(statearr_45514[(22)] = inst_45167);

(statearr_45514[(23)] = inst_45168);

(statearr_45514[(24)] = inst_45166);

return statearr_45514;
})();
if(cljs.core.truth_(inst_45165__$1)){
var statearr_45515_47129 = state_45474__$1;
(statearr_45515_47129[(1)] = (40));

} else {
var statearr_45516_47130 = state_45474__$1;
(statearr_45516_47130[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (88))){
var inst_45276 = (state_45474[(25)]);
var state_45474__$1 = state_45474;
var statearr_45517_47131 = state_45474__$1;
(statearr_45517_47131[(2)] = inst_45276);

(statearr_45517_47131[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (46))){
var inst_45186 = (state_45474[(26)]);
var inst_45189 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_45186,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_45474__$1 = state_45474;
var statearr_45518_47132 = state_45474__$1;
(statearr_45518_47132[(2)] = inst_45189);

(statearr_45518_47132[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45474,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_45060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45060)){
var statearr_45519_47133 = state_45474__$1;
(statearr_45519_47133[(1)] = (5));

} else {
var statearr_45520_47134 = state_45474__$1;
(statearr_45520_47134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (77))){
var inst_45252 = (state_45474[(2)]);
var inst_45253 = com.wsscode.common.async_cljs.throw_err(inst_45252);
var state_45474__$1 = state_45474;
var statearr_45521_47135 = state_45474__$1;
(statearr_45521_47135[(2)] = inst_45253);

(statearr_45521_47135[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (106))){
var inst_45361 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45522_47136 = state_45474__$1;
(statearr_45522_47136[(2)] = inst_45361);

(statearr_45522_47136[(1)] = (103));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (119))){
var inst_45299 = (state_45474[(27)]);
var inst_45396 = (state_45474[(28)]);
var inst_45400 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45396,new cljs.core.Keyword(null,"query","query",-1288509510),inst_45299);
var state_45474__$1 = state_45474;
var statearr_45523_47139 = state_45474__$1;
(statearr_45523_47139[(2)] = inst_45400);

(statearr_45523_47139[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (95))){
var inst_45326 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45524_47142 = state_45474__$1;
(statearr_45524_47142[(2)] = inst_45326);

(statearr_45524_47142[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (144))){
var inst_45452 = (state_45474[(29)]);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45474__$1,(147),inst_45452);
} else {
if((state_val_45475 === (54))){
var state_45474__$1 = state_45474;
var statearr_45525_47144 = state_45474__$1;
(statearr_45525_47144[(2)] = null);

(statearr_45525_47144[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (92))){
var inst_45329 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45329)){
var statearr_45526_47145 = state_45474__$1;
(statearr_45526_47145[(1)] = (96));

} else {
var statearr_45527_47146 = state_45474__$1;
(statearr_45527_47146[(1)] = (97));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (141))){
var inst_45443 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_45444 = (new Error(inst_45443));
var inst_45445 = (function(){throw inst_45444})();
var state_45474__$1 = state_45474;
var statearr_45528_47147 = state_45474__$1;
(statearr_45528_47147[(2)] = inst_45445);

(statearr_45528_47147[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (137))){
var state_45474__$1 = state_45474;
var statearr_45529_47148 = state_45474__$1;
(statearr_45529_47148[(2)] = null);

(statearr_45529_47148[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (104))){
var state_45474__$1 = state_45474;
var statearr_45530_47153 = state_45474__$1;
(statearr_45530_47153[(2)] = true);

(statearr_45530_47153[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (15))){
var state_45474__$1 = state_45474;
var statearr_45531_47154 = state_45474__$1;
(statearr_45531_47154[(2)] = false);

(statearr_45531_47154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (48))){
var inst_45181 = (state_45474[(30)]);
var inst_45192 = (state_45474[(2)]);
var inst_45193 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_45194 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45193,inst_45181);
var state_45474__$1 = (function (){var statearr_45532 = state_45474;
(statearr_45532[(31)] = inst_45192);

return statearr_45532;
})();
if(inst_45194){
var statearr_45533_47155 = state_45474__$1;
(statearr_45533_47155[(1)] = (49));

} else {
var statearr_45534_47156 = state_45474__$1;
(statearr_45534_47156[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (50))){
var inst_45192 = (state_45474[(31)]);
var state_45474__$1 = state_45474;
var statearr_45535_47157 = state_45474__$1;
(statearr_45535_47157[(2)] = inst_45192);

(statearr_45535_47157[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (116))){
var inst_45390 = (state_45474[(32)]);
var inst_45393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_45390,new cljs.core.Keyword(null,"query","query",-1288509510));
var state_45474__$1 = state_45474;
var statearr_45536_47159 = state_45474__$1;
(statearr_45536_47159[(2)] = inst_45393);

(statearr_45536_47159[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (75))){
var inst_45248 = (state_45474[(10)]);
var state_45474__$1 = state_45474;
var statearr_45537_47160 = state_45474__$1;
(statearr_45537_47160[(2)] = inst_45248);

(statearr_45537_47160[(1)] = (76));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (99))){
var inst_45340 = (state_45474[(33)]);
var inst_45347 = (state_45474[(18)]);
var inst_45346 = cljs.core.seq(inst_45340);
var inst_45347__$1 = cljs.core.first(inst_45346);
var inst_45348 = cljs.core.next(inst_45346);
var inst_45350 = (inst_45347__$1 == null);
var inst_45351 = cljs.core.not(inst_45350);
var state_45474__$1 = (function (){var statearr_45538 = state_45474;
(statearr_45538[(34)] = inst_45348);

(statearr_45538[(18)] = inst_45347__$1);

return statearr_45538;
})();
if(inst_45351){
var statearr_45539_47161 = state_45474__$1;
(statearr_45539_47161[(1)] = (101));

} else {
var statearr_45540_47162 = state_45474__$1;
(statearr_45540_47162[(1)] = (102));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (21))){
var state_45474__$1 = state_45474;
var statearr_45541_47163 = state_45474__$1;
(statearr_45541_47163[(2)] = false);

(statearr_45541_47163[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (31))){
var inst_45143 = (state_45474[(35)]);
var inst_45149 = inst_45143.cljs$lang$protocol_mask$partition0$;
var inst_45150 = (inst_45149 & (64));
var inst_45151 = inst_45143.cljs$core$ISeq$;
var inst_45152 = (cljs.core.PROTOCOL_SENTINEL === inst_45151);
var inst_45153 = ((inst_45150) || (inst_45152));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45153)){
var statearr_45542_47167 = state_45474__$1;
(statearr_45542_47167[(1)] = (34));

} else {
var statearr_45543_47168 = state_45474__$1;
(statearr_45543_47168[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (113))){
var inst_45297 = (state_45474[(36)]);
var inst_45370 = (state_45474[(13)]);
var inst_45382 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(inst_45370,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_45297);
var state_45474__$1 = state_45474;
var statearr_45544_47169 = state_45474__$1;
(statearr_45544_47169[(2)] = inst_45382);

(statearr_45544_47169[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (32))){
var state_45474__$1 = state_45474;
var statearr_45545_47170 = state_45474__$1;
(statearr_45545_47170[(2)] = false);

(statearr_45545_47170[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (136))){
var inst_45434 = (state_45474[(19)]);
var inst_45436 = (inst_45434.cljs$core$IFn$_invoke$arity$0 ? inst_45434.cljs$core$IFn$_invoke$arity$0() : inst_45434.call(null));
var state_45474__$1 = state_45474;
var statearr_45546_47171 = state_45474__$1;
(statearr_45546_47171[(2)] = inst_45436);

(statearr_45546_47171[(1)] = (138));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (139))){
var state_45474__$1 = state_45474;
if(cljs.core.truth_(read)){
var statearr_45547_47172 = state_45474__$1;
(statearr_45547_47172[(1)] = (140));

} else {
var statearr_45548_47173 = state_45474__$1;
(statearr_45548_47173[(1)] = (141));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (40))){
var inst_45167 = (state_45474[(22)]);
var inst_45096 = (state_45474[(37)]);
var inst_45166 = (state_45474[(24)]);
var inst_45171 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45172 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_45167];
var inst_45173 = cljs.core.PersistentHashMap.fromArrays(inst_45171,inst_45172);
var inst_45174 = com.wsscode.pathom.trace.trace(inst_45096,inst_45173);
var inst_45176 = cljs.core.vector_QMARK_(inst_45166);
var state_45474__$1 = (function (){var statearr_45549 = state_45474;
(statearr_45549[(38)] = inst_45174);

return statearr_45549;
})();
if(inst_45176){
var statearr_45550_47176 = state_45474__$1;
(statearr_45550_47176[(1)] = (43));

} else {
var statearr_45551_47177 = state_45474__$1;
(statearr_45551_47177[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (129))){
var inst_45428 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45428)){
var statearr_45552_47178 = state_45474__$1;
(statearr_45552_47178[(1)] = (133));

} else {
var statearr_45553_47179 = state_45474__$1;
(statearr_45553_47179[(1)] = (134));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (91))){
var state_45474__$1 = state_45474;
var statearr_45554_47180 = state_45474__$1;
(statearr_45554_47180[(2)] = false);

(statearr_45554_47180[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (117))){
var inst_45390 = (state_45474[(32)]);
var state_45474__$1 = state_45474;
var statearr_45555_47183 = state_45474__$1;
(statearr_45555_47183[(2)] = inst_45390);

(statearr_45555_47183[(1)] = (118));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (108))){
var inst_45347 = (state_45474[(18)]);
var state_45474__$1 = state_45474;
var statearr_45556_47185 = state_45474__$1;
(statearr_45556_47185[(2)] = inst_45347);

(statearr_45556_47185[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (56))){
var inst_45199 = (state_45474[(16)]);
var inst_45169 = (state_45474[(21)]);
var inst_45167 = (state_45474[(22)]);
var inst_45208 = (state_45474[(39)]);
var inst_45206 = (state_45474[(2)]);
var inst_45208__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_45199,inst_45167,inst_45169) : mutate.call(null,inst_45199,inst_45167,inst_45169));
var inst_45210 = (inst_45208__$1 == null);
var inst_45211 = cljs.core.not(inst_45210);
var state_45474__$1 = (function (){var statearr_45557 = state_45474;
(statearr_45557[(40)] = inst_45206);

(statearr_45557[(39)] = inst_45208__$1);

return statearr_45557;
})();
if(inst_45211){
var statearr_45558_47188 = state_45474__$1;
(statearr_45558_47188[(1)] = (57));

} else {
var statearr_45559_47189 = state_45474__$1;
(statearr_45559_47189[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (33))){
var inst_45160 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45160)){
var statearr_45560_47194 = state_45474__$1;
(statearr_45560_47194[(1)] = (37));

} else {
var statearr_45561_47198 = state_45474__$1;
(statearr_45561_47198[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (13))){
var inst_45088 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45088)){
var statearr_45562_47210 = state_45474__$1;
(statearr_45562_47210[(1)] = (17));

} else {
var statearr_45563_47211 = state_45474__$1;
(statearr_45563_47211[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (22))){
var inst_45125 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45125)){
var statearr_45564_47212 = state_45474__$1;
(statearr_45564_47212[(1)] = (26));

} else {
var statearr_45565_47213 = state_45474__$1;
(statearr_45565_47213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (90))){
var inst_45312 = (state_45474[(41)]);
var inst_45318 = inst_45312.cljs$lang$protocol_mask$partition0$;
var inst_45319 = (inst_45318 & (64));
var inst_45320 = inst_45312.cljs$core$ISeq$;
var inst_45321 = (cljs.core.PROTOCOL_SENTINEL === inst_45320);
var inst_45322 = ((inst_45319) || (inst_45321));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45322)){
var statearr_45566_47215 = state_45474__$1;
(statearr_45566_47215[(1)] = (93));

} else {
var statearr_45567_47216 = state_45474__$1;
(statearr_45567_47216[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (109))){
var inst_45369 = (state_45474[(42)]);
var inst_45369__$1 = (state_45474[(2)]);
var inst_45370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45369__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45369__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45369__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45369__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state_45474__$1 = (function (){var statearr_45568 = state_45474;
(statearr_45568[(42)] = inst_45369__$1);

(statearr_45568[(43)] = inst_45373);

(statearr_45568[(7)] = inst_45372);

(statearr_45568[(12)] = inst_45371);

(statearr_45568[(13)] = inst_45370);

return statearr_45568;
})();
if(cljs.core.truth_(inst_45369__$1)){
var statearr_45569_47221 = state_45474__$1;
(statearr_45569_47221[(1)] = (110));

} else {
var statearr_45570_47222 = state_45474__$1;
(statearr_45570_47222[(1)] = (111));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (143))){
var state_45474__$1 = state_45474;
var statearr_45571_47224 = state_45474__$1;
(statearr_45571_47224[(2)] = null);

(statearr_45571_47224[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (36))){
var inst_45157 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45572_47226 = state_45474__$1;
(statearr_45572_47226[(2)] = inst_45157);

(statearr_45572_47226[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (41))){
var inst_45135 = (state_45474[(44)]);
var state_45474__$1 = state_45474;
var statearr_45573_47228 = state_45474__$1;
(statearr_45573_47228[(2)] = inst_45135);

(statearr_45573_47228[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (118))){
var inst_45385 = (state_45474[(45)]);
var inst_45396 = (state_45474[(2)]);
var inst_45397 = new cljs.core.Symbol(null,"...","...",-1926939749,null);
var inst_45398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45397,inst_45385);
var state_45474__$1 = (function (){var statearr_45574 = state_45474;
(statearr_45574[(28)] = inst_45396);

return statearr_45574;
})();
if(inst_45398){
var statearr_45575_47231 = state_45474__$1;
(statearr_45575_47231[(1)] = (119));

} else {
var statearr_45576_47232 = state_45474__$1;
(statearr_45576_47232[(1)] = (120));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (89))){
var inst_45297 = (state_45474[(36)]);
var inst_45298 = (state_45474[(46)]);
var inst_45312 = (state_45474[(41)]);
var inst_45297__$1 = (state_45474[(2)]);
var inst_45298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45297__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_45299 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_45297__$1);
var inst_45300 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_45310 = cljs.core.PersistentHashMap.EMPTY;
var inst_45311 = cljs.core.seq(inst_45298__$1);
var inst_45312__$1 = cljs.core.first(inst_45311);
var inst_45313 = cljs.core.next(inst_45311);
var inst_45315 = (inst_45312__$1 == null);
var inst_45316 = cljs.core.not(inst_45315);
var state_45474__$1 = (function (){var statearr_45577 = state_45474;
(statearr_45577[(47)] = inst_45313);

(statearr_45577[(27)] = inst_45299);

(statearr_45577[(48)] = inst_45310);

(statearr_45577[(36)] = inst_45297__$1);

(statearr_45577[(11)] = inst_45300);

(statearr_45577[(46)] = inst_45298__$1);

(statearr_45577[(41)] = inst_45312__$1);

return statearr_45577;
})();
if(inst_45316){
var statearr_45578_47235 = state_45474__$1;
(statearr_45578_47235[(1)] = (90));

} else {
var statearr_45579_47236 = state_45474__$1;
(statearr_45579_47236[(1)] = (91));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (100))){
var inst_45468 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45580_47238 = state_45474__$1;
(statearr_45580_47238[(2)] = inst_45468);

(statearr_45580_47238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (131))){
var state_45474__$1 = state_45474;
var statearr_45581_47240 = state_45474__$1;
(statearr_45581_47240[(2)] = false);

(statearr_45581_47240[(1)] = (132));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (122))){
var inst_45452 = (state_45474[(29)]);
var inst_45452__$1 = (state_45474[(2)]);
var inst_45453 = com.wsscode.common.async_cljs.chan_QMARK_(inst_45452__$1);
var state_45474__$1 = (function (){var statearr_45582 = state_45474;
(statearr_45582[(29)] = inst_45452__$1);

return statearr_45582;
})();
if(inst_45453){
var statearr_45583_47241 = state_45474__$1;
(statearr_45583_47241[(1)] = (144));

} else {
var statearr_45584_47242 = state_45474__$1;
(statearr_45584_47242[(1)] = (145));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (43))){
var inst_45093 = (state_45474[(49)]);
var inst_45166 = (state_45474[(24)]);
var inst_45178 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(inst_45166,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_45093);
var state_45474__$1 = state_45474;
var statearr_45585_47243 = state_45474__$1;
(statearr_45585_47243[(2)] = inst_45178);

(statearr_45585_47243[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (61))){
var state_45474__$1 = state_45474;
var statearr_45586_47248 = state_45474__$1;
(statearr_45586_47248[(2)] = false);

(statearr_45586_47248[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (29))){
var inst_45143 = (state_45474[(35)]);
var inst_45136 = (state_45474[(50)]);
var inst_45142 = cljs.core.seq(inst_45136);
var inst_45143__$1 = cljs.core.first(inst_45142);
var inst_45144 = cljs.core.next(inst_45142);
var inst_45146 = (inst_45143__$1 == null);
var inst_45147 = cljs.core.not(inst_45146);
var state_45474__$1 = (function (){var statearr_45587 = state_45474;
(statearr_45587[(51)] = inst_45144);

(statearr_45587[(35)] = inst_45143__$1);

return statearr_45587;
})();
if(inst_45147){
var statearr_45588_47258 = state_45474__$1;
(statearr_45588_47258[(1)] = (31));

} else {
var statearr_45589_47259 = state_45474__$1;
(statearr_45589_47259[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (44))){
var inst_45166 = (state_45474[(24)]);
var state_45474__$1 = state_45474;
var statearr_45590_47261 = state_45474__$1;
(statearr_45590_47261[(2)] = inst_45166);

(statearr_45590_47261[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (93))){
var state_45474__$1 = state_45474;
var statearr_45591_47262 = state_45474__$1;
(statearr_45591_47262[(2)] = true);

(statearr_45591_47262[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (6))){
var inst_45271 = (state_45474[(52)]);
var inst_45271__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
var state_45474__$1 = (function (){var statearr_45592 = state_45474;
(statearr_45592[(52)] = inst_45271__$1);

return statearr_45592;
})();
if(cljs.core.truth_(inst_45271__$1)){
var statearr_45593_47264 = state_45474__$1;
(statearr_45593_47264[(1)] = (78));

} else {
var statearr_45594_47265 = state_45474__$1;
(statearr_45594_47265[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (111))){
var inst_45339 = (state_45474[(53)]);
var state_45474__$1 = state_45474;
var statearr_45595_47266 = state_45474__$1;
(statearr_45595_47266[(2)] = inst_45339);

(statearr_45595_47266[(1)] = (112));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (28))){
var inst_45106 = (state_45474[(54)]);
var inst_45094 = (state_45474[(55)]);
var inst_45130 = (state_45474[(2)]);
var inst_45131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45130,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45130,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45130,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45130,new cljs.core.Keyword(null,"params","params",710516235));
var inst_45135 = inst_45106;
var inst_45136 = inst_45094;
var state_45474__$1 = (function (){var statearr_45596 = state_45474;
(statearr_45596[(44)] = inst_45135);

(statearr_45596[(56)] = inst_45131);

(statearr_45596[(57)] = inst_45132);

(statearr_45596[(58)] = inst_45134);

(statearr_45596[(59)] = inst_45133);

(statearr_45596[(50)] = inst_45136);

return statearr_45596;
})();
var statearr_45597_47271 = state_45474__$1;
(statearr_45597_47271[(2)] = null);

(statearr_45597_47271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (134))){
var inst_45412 = (state_45474[(60)]);
var state_45474__$1 = state_45474;
var statearr_45598_47272 = state_45474__$1;
(statearr_45598_47272[(2)] = inst_45412);

(statearr_45598_47272[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (64))){
var inst_45208 = (state_45474[(39)]);
var state_45474__$1 = state_45474;
var statearr_45599_47274 = state_45474__$1;
(statearr_45599_47274[(2)] = inst_45208);

(statearr_45599_47274[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (103))){
var inst_45364 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45364)){
var statearr_45600_47275 = state_45474__$1;
(statearr_45600_47275[(1)] = (107));

} else {
var statearr_45601_47276 = state_45474__$1;
(statearr_45601_47276[(1)] = (108));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (51))){
var inst_45168 = (state_45474[(23)]);
var inst_45199 = (state_45474[(2)]);
var state_45474__$1 = (function (){var statearr_45602 = state_45474;
(statearr_45602[(16)] = inst_45199);

return statearr_45602;
})();
var G__45603_47284 = inst_45168;
var G__45603_47285__$1 = (((G__45603_47284 instanceof cljs.core.Keyword))?G__45603_47284.fqn:null);
switch (G__45603_47285__$1) {
case "call":
var statearr_45604_47288 = state_45474__$1;
(statearr_45604_47288[(1)] = (53));


break;
case "prop":
case "join":
case "union":
var statearr_45605_47297 = state_45474__$1;
(statearr_45605_47297[(1)] = (69));


break;
default:
var statearr_45606_47301 = state_45474__$1;
(statearr_45606_47301[(1)] = (73));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (25))){
var inst_45122 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45607_47304 = state_45474__$1;
(statearr_45607_47304[(2)] = inst_45122);

(statearr_45607_47304[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (34))){
var state_45474__$1 = state_45474;
var statearr_45608_47305 = state_45474__$1;
(statearr_45608_47305[(2)] = true);

(statearr_45608_47305[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (146))){
var inst_45339 = (state_45474[(53)]);
var inst_45369 = (state_45474[(42)]);
var inst_45348 = (state_45474[(34)]);
var inst_45460 = (state_45474[(2)]);
var inst_45461 = com.wsscode.pathom.parser.ast__GT_out_key(inst_45369);
var inst_45462 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45339,inst_45461,inst_45460);
var inst_45339__$1 = inst_45462;
var inst_45340 = inst_45348;
var state_45474__$1 = (function (){var statearr_45609 = state_45474;
(statearr_45609[(53)] = inst_45339__$1);

(statearr_45609[(33)] = inst_45340);

return statearr_45609;
})();
var statearr_45610_47307 = state_45474__$1;
(statearr_45610_47307[(2)] = null);

(statearr_45610_47307[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (125))){
var inst_45406 = ["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('');
var inst_45407 = (new Error(inst_45406));
var inst_45408 = (function(){throw inst_45407})();
var state_45474__$1 = state_45474;
var statearr_45611_47309 = state_45474__$1;
(statearr_45611_47309[(2)] = inst_45408);

(statearr_45611_47309[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (17))){
var inst_45072 = (state_45474[(61)]);
var inst_45090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45072);
var state_45474__$1 = state_45474;
var statearr_45612_47310 = state_45474__$1;
(statearr_45612_47310[(2)] = inst_45090);

(statearr_45612_47310[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (3))){
var inst_45056 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45613_47313 = state_45474__$1;
(statearr_45613_47313[(2)] = inst_45056);


cljs.core.async.impl.ioc_helpers.process_exception(state_45474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (12))){
var state_45474__$1 = state_45474;
var statearr_45614_47315 = state_45474__$1;
(statearr_45614_47315[(2)] = false);

(statearr_45614_47315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (2))){
var inst_45472 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45474__$1,inst_45472);
} else {
if((state_val_45475 === (66))){
var inst_45230 = (state_45474[(9)]);
var inst_45232 = (inst_45230.cljs$core$IFn$_invoke$arity$0 ? inst_45230.cljs$core$IFn$_invoke$arity$0() : inst_45230.call(null));
var state_45474__$1 = state_45474;
var statearr_45615_47318 = state_45474__$1;
(statearr_45615_47318[(2)] = inst_45232);

(statearr_45615_47318[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (142))){
var inst_45403 = (state_45474[(8)]);
var inst_45447 = (state_45474[(2)]);
var inst_45448 = (read.cljs$core$IFn$_invoke$arity$1 ? read.cljs$core$IFn$_invoke$arity$1(inst_45403) : read.call(null,inst_45403));
var state_45474__$1 = (function (){var statearr_45616 = state_45474;
(statearr_45616[(62)] = inst_45447);

return statearr_45616;
})();
var statearr_45617_47320 = state_45474__$1;
(statearr_45617_47320[(2)] = inst_45448);

(statearr_45617_47320[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (107))){
var inst_45347 = (state_45474[(18)]);
var inst_45366 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45347);
var state_45474__$1 = state_45474;
var statearr_45618_47322 = state_45474__$1;
(statearr_45618_47322[(2)] = inst_45366);

(statearr_45618_47322[(1)] = (109));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (23))){
var state_45474__$1 = state_45474;
var statearr_45619_47324 = state_45474__$1;
(statearr_45619_47324[(2)] = true);

(statearr_45619_47324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (47))){
var inst_45186 = (state_45474[(26)]);
var state_45474__$1 = state_45474;
var statearr_45620_47326 = state_45474__$1;
(statearr_45620_47326[(2)] = inst_45186);

(statearr_45620_47326[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (35))){
var state_45474__$1 = state_45474;
var statearr_45621_47327 = state_45474__$1;
(statearr_45621_47327[(2)] = false);

(statearr_45621_47327[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (127))){
var inst_45412 = (state_45474[(60)]);
var inst_45417 = inst_45412.cljs$lang$protocol_mask$partition0$;
var inst_45418 = (inst_45417 & (64));
var inst_45419 = inst_45412.cljs$core$ISeq$;
var inst_45420 = (cljs.core.PROTOCOL_SENTINEL === inst_45419);
var inst_45421 = ((inst_45418) || (inst_45420));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45421)){
var statearr_45622_47329 = state_45474__$1;
(statearr_45622_47329[(1)] = (130));

} else {
var statearr_45623_47331 = state_45474__$1;
(statearr_45623_47331[(1)] = (131));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (82))){
var state_45474__$1 = state_45474;
var statearr_45624_47332 = state_45474__$1;
(statearr_45624_47332[(2)] = false);

(statearr_45624_47332[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (76))){
var inst_45165 = (state_45474[(20)]);
var inst_45135 = (state_45474[(44)]);
var inst_45144 = (state_45474[(51)]);
var inst_45256 = (state_45474[(2)]);
var inst_45257 = com.wsscode.pathom.parser.ast__GT_out_key(inst_45165);
var inst_45258 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45135,inst_45257,inst_45256);
var inst_45135__$1 = inst_45258;
var inst_45136 = inst_45144;
var state_45474__$1 = (function (){var statearr_45625 = state_45474;
(statearr_45625[(44)] = inst_45135__$1);

(statearr_45625[(50)] = inst_45136);

return statearr_45625;
})();
var statearr_45626_47333 = state_45474__$1;
(statearr_45626_47333[(2)] = null);

(statearr_45626_47333[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (97))){
var inst_45312 = (state_45474[(41)]);
var state_45474__$1 = state_45474;
var statearr_45627_47337 = state_45474__$1;
(statearr_45627_47337[(2)] = inst_45312);

(statearr_45627_47337[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (19))){
var inst_45108 = (state_45474[(15)]);
var inst_45093 = (state_45474[(49)]);
var inst_45094 = (state_45474[(55)]);
var inst_45093__$1 = (state_45474[(2)]);
var inst_45094__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45093__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var inst_45095 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tx,cljs.core.assoc,new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903),inst_45093__$1);
var inst_45096 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$async_parser_$_self);
var inst_45106 = cljs.core.PersistentHashMap.EMPTY;
var inst_45107 = cljs.core.seq(inst_45094__$1);
var inst_45108__$1 = cljs.core.first(inst_45107);
var inst_45109 = cljs.core.next(inst_45107);
var inst_45111 = (inst_45108__$1 == null);
var inst_45112 = cljs.core.not(inst_45111);
var state_45474__$1 = (function (){var statearr_45628 = state_45474;
(statearr_45628[(54)] = inst_45106);

(statearr_45628[(15)] = inst_45108__$1);

(statearr_45628[(49)] = inst_45093__$1);

(statearr_45628[(37)] = inst_45096);

(statearr_45628[(63)] = inst_45095);

(statearr_45628[(64)] = inst_45109);

(statearr_45628[(55)] = inst_45094__$1);

return statearr_45628;
})();
if(inst_45112){
var statearr_45629_47367 = state_45474__$1;
(statearr_45629_47367[(1)] = (20));

} else {
var statearr_45630_47368 = state_45474__$1;
(statearr_45630_47368[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (57))){
var inst_45208 = (state_45474[(39)]);
var inst_45213 = inst_45208.cljs$lang$protocol_mask$partition0$;
var inst_45214 = (inst_45213 & (64));
var inst_45215 = inst_45208.cljs$core$ISeq$;
var inst_45216 = (cljs.core.PROTOCOL_SENTINEL === inst_45215);
var inst_45217 = ((inst_45214) || (inst_45216));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45217)){
var statearr_45631_47370 = state_45474__$1;
(statearr_45631_47370[(1)] = (60));

} else {
var statearr_45632_47371 = state_45474__$1;
(statearr_45632_47371[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (68))){
var inst_45235 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45633_47372 = state_45474__$1;
(statearr_45633_47372[(2)] = inst_45235);

(statearr_45633_47372[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (11))){
var inst_45072 = (state_45474[(61)]);
var inst_45077 = inst_45072.cljs$lang$protocol_mask$partition0$;
var inst_45078 = (inst_45077 & (64));
var inst_45079 = inst_45072.cljs$core$ISeq$;
var inst_45080 = (cljs.core.PROTOCOL_SENTINEL === inst_45079);
var inst_45081 = ((inst_45078) || (inst_45080));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45081)){
var statearr_45634_47374 = state_45474__$1;
(statearr_45634_47374[(1)] = (14));

} else {
var statearr_45635_47375 = state_45474__$1;
(statearr_45635_47375[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (115))){
var inst_45369 = (state_45474[(42)]);
var inst_45300 = (state_45474[(11)]);
var inst_45385 = (state_45474[(45)]);
var inst_45385__$1 = (state_45474[(2)]);
var inst_45387 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_45388 = [inst_45369,inst_45385__$1];
var inst_45389 = cljs.core.PersistentHashMap.fromArrays(inst_45387,inst_45388);
var inst_45390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45300,inst_45389], 0));
var inst_45391 = (inst_45385__$1 == null);
var state_45474__$1 = (function (){var statearr_45636 = state_45474;
(statearr_45636[(45)] = inst_45385__$1);

(statearr_45636[(32)] = inst_45390);

return statearr_45636;
})();
if(cljs.core.truth_(inst_45391)){
var statearr_45637_47378 = state_45474__$1;
(statearr_45637_47378[(1)] = (116));

} else {
var statearr_45638_47379 = state_45474__$1;
(statearr_45638_47379[(1)] = (117));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (9))){
var inst_45070 = com.wsscode.pathom.parser.query__GT_ast(tx);
var state_45474__$1 = state_45474;
var statearr_45639_47381 = state_45474__$1;
(statearr_45639_47381[(2)] = inst_45070);

(statearr_45639_47381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (145))){
var inst_45452 = (state_45474[(29)]);
var state_45474__$1 = state_45474;
var statearr_45640_47382 = state_45474__$1;
(statearr_45640_47382[(2)] = inst_45452);

(statearr_45640_47382[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (5))){
var inst_45067 = (state_45474[(65)]);
var inst_45062 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_45063 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_45064 = cljs.core.PersistentHashMap.fromArrays(inst_45062,inst_45063);
var inst_45065 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(env,inst_45064);
var inst_45067__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","ast","com.wsscode.pathom.parser/ast",1639399903).cljs$core$IFn$_invoke$arity$1(tx);
var state_45474__$1 = (function (){var statearr_45641 = state_45474;
(statearr_45641[(66)] = inst_45065);

(statearr_45641[(65)] = inst_45067__$1);

return statearr_45641;
})();
if(cljs.core.truth_(inst_45067__$1)){
var statearr_45642_47385 = state_45474__$1;
(statearr_45642_47385[(1)] = (8));

} else {
var statearr_45643_47387 = state_45474__$1;
(statearr_45643_47387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (112))){
var inst_45466 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45644_47389 = state_45474__$1;
(statearr_45644_47389[(2)] = inst_45466);

(statearr_45644_47389[(1)] = (100));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (83))){
var inst_45292 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45292)){
var statearr_45645_47390 = state_45474__$1;
(statearr_45645_47390[(1)] = (87));

} else {
var statearr_45646_47392 = state_45474__$1;
(statearr_45646_47392[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (138))){
var inst_45439 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45647_47394 = state_45474__$1;
(statearr_45647_47394[(2)] = inst_45439);

(statearr_45647_47394[(1)] = (122));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (14))){
var state_45474__$1 = state_45474;
var statearr_45648_47396 = state_45474__$1;
(statearr_45648_47396[(2)] = true);

(statearr_45648_47396[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (45))){
var inst_45181 = (state_45474[(30)]);
var inst_45165 = (state_45474[(20)]);
var inst_45096 = (state_45474[(37)]);
var inst_45181__$1 = (state_45474[(2)]);
var inst_45183 = [new cljs.core.Keyword(null,"ast","ast",-860334068),new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_45184 = [inst_45165,inst_45181__$1];
var inst_45185 = cljs.core.PersistentHashMap.fromArrays(inst_45183,inst_45184);
var inst_45186 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_45096,inst_45185], 0));
var inst_45187 = (inst_45181__$1 == null);
var state_45474__$1 = (function (){var statearr_45649 = state_45474;
(statearr_45649[(30)] = inst_45181__$1);

(statearr_45649[(26)] = inst_45186);

return statearr_45649;
})();
if(cljs.core.truth_(inst_45187)){
var statearr_45650_47398 = state_45474__$1;
(statearr_45650_47398[(1)] = (46));

} else {
var statearr_45651_47399 = state_45474__$1;
(statearr_45651_47399[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (53))){
var state_45474__$1 = state_45474;
if(cljs.core.truth_(mutate)){
var statearr_45652_47400 = state_45474__$1;
(statearr_45652_47400[(1)] = (54));

} else {
var statearr_45653_47401 = state_45474__$1;
(statearr_45653_47401[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (78))){
var inst_45271 = (state_45474[(52)]);
var state_45474__$1 = state_45474;
var statearr_45654_47402 = state_45474__$1;
(statearr_45654_47402[(2)] = inst_45271);

(statearr_45654_47402[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (132))){
var inst_45425 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45655_47403 = state_45474__$1;
(statearr_45655_47403[(2)] = inst_45425);

(statearr_45655_47403[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (26))){
var inst_45108 = (state_45474[(15)]);
var inst_45127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45108);
var state_45474__$1 = state_45474;
var statearr_45656_47408 = state_45474__$1;
(statearr_45656_47408[(2)] = inst_45127);

(statearr_45656_47408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (123))){
var state_45474__$1 = state_45474;
if(cljs.core.truth_(mutate)){
var statearr_45657_47418 = state_45474__$1;
(statearr_45657_47418[(1)] = (124));

} else {
var statearr_45658_47419 = state_45474__$1;
(statearr_45658_47419[(1)] = (125));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (140))){
var state_45474__$1 = state_45474;
var statearr_45659_47420 = state_45474__$1;
(statearr_45659_47420[(2)] = null);

(statearr_45659_47420[(1)] = (142));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (16))){
var inst_45085 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45660_47421 = state_45474__$1;
(statearr_45660_47421[(2)] = inst_45085);

(statearr_45660_47421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (133))){
var inst_45412 = (state_45474[(60)]);
var inst_45430 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45412);
var state_45474__$1 = state_45474;
var statearr_45661_47423 = state_45474__$1;
(statearr_45661_47423[(2)] = inst_45430);

(statearr_45661_47423[(1)] = (135));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (81))){
var inst_45276 = (state_45474[(25)]);
var inst_45281 = inst_45276.cljs$lang$protocol_mask$partition0$;
var inst_45282 = (inst_45281 & (64));
var inst_45283 = inst_45276.cljs$core$ISeq$;
var inst_45284 = (cljs.core.PROTOCOL_SENTINEL === inst_45283);
var inst_45285 = ((inst_45282) || (inst_45284));
var state_45474__$1 = state_45474;
if(cljs.core.truth_(inst_45285)){
var statearr_45662_47425 = state_45474__$1;
(statearr_45662_47425[(1)] = (84));

} else {
var statearr_45663_47426 = state_45474__$1;
(statearr_45663_47426[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (120))){
var inst_45396 = (state_45474[(28)]);
var state_45474__$1 = state_45474;
var statearr_45664_47427 = state_45474__$1;
(statearr_45664_47427[(2)] = inst_45396);

(statearr_45664_47427[(1)] = (121));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (79))){
var inst_45274 = com.wsscode.pathom.parser.query__GT_ast(tx);
var state_45474__$1 = state_45474;
var statearr_45665_47429 = state_45474__$1;
(statearr_45665_47429[(2)] = inst_45274);

(statearr_45665_47429[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (38))){
var inst_45143 = (state_45474[(35)]);
var state_45474__$1 = state_45474;
var statearr_45666_47430 = state_45474__$1;
(statearr_45666_47430[(2)] = inst_45143);

(statearr_45666_47430[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (126))){
var inst_45403 = (state_45474[(8)]);
var inst_45373 = (state_45474[(43)]);
var inst_45371 = (state_45474[(12)]);
var inst_45412 = (state_45474[(60)]);
var inst_45410 = (state_45474[(2)]);
var inst_45412__$1 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(inst_45403,inst_45371,inst_45373) : mutate.call(null,inst_45403,inst_45371,inst_45373));
var inst_45414 = (inst_45412__$1 == null);
var inst_45415 = cljs.core.not(inst_45414);
var state_45474__$1 = (function (){var statearr_45667 = state_45474;
(statearr_45667[(67)] = inst_45410);

(statearr_45667[(60)] = inst_45412__$1);

return statearr_45667;
})();
if(inst_45415){
var statearr_45668_47434 = state_45474__$1;
(statearr_45668_47434[(1)] = (127));

} else {
var statearr_45669_47435 = state_45474__$1;
(statearr_45669_47435[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (98))){
var inst_45310 = (state_45474[(48)]);
var inst_45298 = (state_45474[(46)]);
var inst_45334 = (state_45474[(2)]);
var inst_45335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334,new cljs.core.Keyword(null,"query","query",-1288509510));
var inst_45336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_45337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_45338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45334,new cljs.core.Keyword(null,"params","params",710516235));
var inst_45339 = inst_45310;
var inst_45340 = inst_45298;
var state_45474__$1 = (function (){var statearr_45670 = state_45474;
(statearr_45670[(53)] = inst_45339);

(statearr_45670[(68)] = inst_45337);

(statearr_45670[(69)] = inst_45336);

(statearr_45670[(33)] = inst_45340);

(statearr_45670[(70)] = inst_45338);

(statearr_45670[(71)] = inst_45335);

return statearr_45670;
})();
var statearr_45671_47440 = state_45474__$1;
(statearr_45671_47440[(2)] = null);

(statearr_45671_47440[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (124))){
var state_45474__$1 = state_45474;
var statearr_45672_47441 = state_45474__$1;
(statearr_45672_47441[(2)] = null);

(statearr_45672_47441[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (87))){
var inst_45276 = (state_45474[(25)]);
var inst_45294 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45276);
var state_45474__$1 = state_45474;
var statearr_45673_47442 = state_45474__$1;
(statearr_45673_47442[(2)] = inst_45294);

(statearr_45673_47442[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (30))){
var inst_45065 = (state_45474[(66)]);
var inst_45264 = (state_45474[(2)]);
var inst_45265 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983)];
var inst_45266 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195)];
var inst_45267 = cljs.core.PersistentHashMap.fromArrays(inst_45265,inst_45266);
var inst_45268 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(env,inst_45065,inst_45267);
var state_45474__$1 = (function (){var statearr_45674 = state_45474;
(statearr_45674[(72)] = inst_45268);

return statearr_45674;
})();
var statearr_45675_47443 = state_45474__$1;
(statearr_45675_47443[(2)] = inst_45264);

(statearr_45675_47443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (73))){
var state_45474__$1 = state_45474;
var statearr_45676_47444 = state_45474__$1;
(statearr_45676_47444[(2)] = null);

(statearr_45676_47444[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (96))){
var inst_45312 = (state_45474[(41)]);
var inst_45331 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45312);
var state_45474__$1 = state_45474;
var statearr_45677_47445 = state_45474__$1;
(statearr_45677_47445[(2)] = inst_45331);

(statearr_45677_47445[(1)] = (98));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (10))){
var inst_45072 = (state_45474[(61)]);
var inst_45072__$1 = (state_45474[(2)]);
var inst_45074 = (inst_45072__$1 == null);
var inst_45075 = cljs.core.not(inst_45074);
var state_45474__$1 = (function (){var statearr_45678 = state_45474;
(statearr_45678[(61)] = inst_45072__$1);

return statearr_45678;
})();
if(inst_45075){
var statearr_45679_47449 = state_45474__$1;
(statearr_45679_47449[(1)] = (11));

} else {
var statearr_45680_47450 = state_45474__$1;
(statearr_45680_47450[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (18))){
var inst_45072 = (state_45474[(61)]);
var state_45474__$1 = state_45474;
var statearr_45681_47451 = state_45474__$1;
(statearr_45681_47451[(2)] = inst_45072);

(statearr_45681_47451[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (105))){
var state_45474__$1 = state_45474;
var statearr_45682_47452 = state_45474__$1;
(statearr_45682_47452[(2)] = false);

(statearr_45682_47452[(1)] = (106));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (52))){
var inst_45248 = (state_45474[(10)]);
var inst_45248__$1 = (state_45474[(2)]);
var inst_45249 = com.wsscode.common.async_cljs.chan_QMARK_(inst_45248__$1);
var state_45474__$1 = (function (){var statearr_45683 = state_45474;
(statearr_45683[(10)] = inst_45248__$1);

return statearr_45683;
})();
if(inst_45249){
var statearr_45684_47454 = state_45474__$1;
(statearr_45684_47454[(1)] = (74));

} else {
var statearr_45685_47455 = state_45474__$1;
(statearr_45685_47455[(1)] = (75));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (114))){
var inst_45370 = (state_45474[(13)]);
var state_45474__$1 = state_45474;
var statearr_45686_47456 = state_45474__$1;
(statearr_45686_47456[(2)] = inst_45370);

(statearr_45686_47456[(1)] = (115));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (147))){
var inst_45456 = (state_45474[(2)]);
var inst_45457 = com.wsscode.common.async_cljs.throw_err(inst_45456);
var state_45474__$1 = state_45474;
var statearr_45687_47457 = state_45474__$1;
(statearr_45687_47457[(2)] = inst_45457);

(statearr_45687_47457[(1)] = (146));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (67))){
var state_45474__$1 = state_45474;
var statearr_45688_47458 = state_45474__$1;
(statearr_45688_47458[(2)] = null);

(statearr_45688_47458[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (71))){
var inst_45239 = ["Assert failed: ","Parse read attempted but no :read function supplied","\n","read"].join('');
var inst_45240 = (new Error(inst_45239));
var inst_45241 = (function(){throw inst_45240})();
var state_45474__$1 = state_45474;
var statearr_45689_47459 = state_45474__$1;
(statearr_45689_47459[(2)] = inst_45241);

(statearr_45689_47459[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (42))){
var inst_45262 = (state_45474[(2)]);
var state_45474__$1 = state_45474;
var statearr_45690_47460 = state_45474__$1;
(statearr_45690_47460[(2)] = inst_45262);

(statearr_45690_47460[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (80))){
var inst_45276 = (state_45474[(25)]);
var inst_45276__$1 = (state_45474[(2)]);
var inst_45278 = (inst_45276__$1 == null);
var inst_45279 = cljs.core.not(inst_45278);
var state_45474__$1 = (function (){var statearr_45691 = state_45474;
(statearr_45691[(25)] = inst_45276__$1);

return statearr_45691;
})();
if(inst_45279){
var statearr_45692_47461 = state_45474__$1;
(statearr_45692_47461[(1)] = (81));

} else {
var statearr_45693_47462 = state_45474__$1;
(statearr_45693_47462[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (37))){
var inst_45143 = (state_45474[(35)]);
var inst_45162 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45143);
var state_45474__$1 = state_45474;
var statearr_45694_47464 = state_45474__$1;
(statearr_45694_47464[(2)] = inst_45162);

(statearr_45694_47464[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (63))){
var inst_45208 = (state_45474[(39)]);
var inst_45226 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45208);
var state_45474__$1 = state_45474;
var statearr_45695_47468 = state_45474__$1;
(statearr_45695_47468[(2)] = inst_45226);

(statearr_45695_47468[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (94))){
var state_45474__$1 = state_45474;
var statearr_45696_47469 = state_45474__$1;
(statearr_45696_47469[(2)] = false);

(statearr_45696_47469[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (8))){
var inst_45067 = (state_45474[(65)]);
var state_45474__$1 = state_45474;
var statearr_45697_47470 = state_45474__$1;
(statearr_45697_47470[(2)] = inst_45067);

(statearr_45697_47470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (49))){
var inst_45095 = (state_45474[(63)]);
var inst_45192 = (state_45474[(31)]);
var inst_45196 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_45192,new cljs.core.Keyword(null,"query","query",-1288509510),inst_45095);
var state_45474__$1 = state_45474;
var statearr_45698_47472 = state_45474__$1;
(statearr_45698_47472[(2)] = inst_45196);

(statearr_45698_47472[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45475 === (84))){
var state_45474__$1 = state_45474;
var statearr_45699_47473 = state_45474__$1;
(statearr_45699_47473[(2)] = true);

(statearr_45699_47473[(1)] = (86));


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
}
}
}
}
}
}
}
}
}
}
}
});})(c__39084__auto__,map__45054,map__45054__$1,read,mutate))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__45054,map__45054__$1,read,mutate){
return (function() {
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto____0 = (function (){
var statearr_45700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45700[(0)] = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto__);

(statearr_45700[(1)] = (1));

return statearr_45700;
});
var com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto____1 = (function (state_45474){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_45474);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e45701){if((e45701 instanceof Object)){
var ex__38790__auto__ = e45701;
var statearr_45702_47474 = state_45474;
(statearr_45702_47474[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47476 = state_45474;
state_45474 = G__47476;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto__ = function(state_45474){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto____1.call(this,state_45474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$async_parser_$_self_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__45054,map__45054__$1,read,mutate))
})();
var state__39086__auto__ = (function (){var statearr_45703 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_45703[(6)] = c__39084__auto__);

return statearr_45703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__45054,map__45054__$1,read,mutate))
);

return c__39084__auto__;
});
;})(map__45054,map__45054__$1,read,mutate))
});
com.wsscode.pathom.parser.watch_pending_key = (function com$wsscode$pathom$parser$watch_pending_key(p__45704,key){
var map__45705 = p__45704;
var map__45705__$1 = (((((!((map__45705 == null))))?(((((map__45705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45705):map__45705);
var env = map__45705__$1;
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45705__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(key_watchers,cljs.core.update,key,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ch], 0));

var c__39084__auto___47480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto___47480,ch,map__45705,map__45705__$1,env,key_watchers){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto___47480,ch,map__45705,map__45705__$1,env,key_watchers){
return (function (state_45729){
var state_val_45730 = (state_45729[(1)]);
if((state_val_45730 === (1))){
var inst_45707 = cljs.core.async.timeout((1));
var state_45729__$1 = state_45729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45729__$1,(2),inst_45707);
} else {
if((state_val_45730 === (2))){
var inst_45709 = (state_45729[(2)]);
var inst_45710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031));
var inst_45711 = cljs.core.deref(inst_45710);
var inst_45712 = cljs.core.contains_QMARK_(inst_45711,key);
var state_45729__$1 = (function (){var statearr_45731 = state_45729;
(statearr_45731[(7)] = inst_45709);

return statearr_45731;
})();
if(inst_45712){
var statearr_45732_47482 = state_45729__$1;
(statearr_45732_47482[(1)] = (3));

} else {
var statearr_45733_47483 = state_45729__$1;
(statearr_45733_47483[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (3))){
var inst_45714 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_45715 = [new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watcher-safeguard","com.wsscode.pathom.parser/flush-watcher-safeguard",-1594921178),key];
var inst_45716 = cljs.core.PersistentHashMap.fromArrays(inst_45714,inst_45715);
var inst_45717 = com.wsscode.pathom.trace.trace(env,inst_45716);
var inst_45718 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_45719 = [key];
var inst_45720 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_45719);
var inst_45721 = [inst_45720];
var inst_45722 = cljs.core.PersistentHashMap.fromArrays(inst_45718,inst_45721);
var inst_45723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,inst_45722);
var inst_45724 = cljs.core.async.close_BANG_(ch);
var state_45729__$1 = (function (){var statearr_45734 = state_45729;
(statearr_45734[(8)] = inst_45723);

(statearr_45734[(9)] = inst_45717);

return statearr_45734;
})();
var statearr_45735_47484 = state_45729__$1;
(statearr_45735_47484[(2)] = inst_45724);

(statearr_45735_47484[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (4))){
var state_45729__$1 = state_45729;
var statearr_45736_47485 = state_45729__$1;
(statearr_45736_47485[(2)] = null);

(statearr_45736_47485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45730 === (5))){
var inst_45727 = (state_45729[(2)]);
var state_45729__$1 = state_45729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45729__$1,inst_45727);
} else {
return null;
}
}
}
}
}
});})(c__39084__auto___47480,ch,map__45705,map__45705__$1,env,key_watchers))
;
return ((function (switch__38786__auto__,c__39084__auto___47480,ch,map__45705,map__45705__$1,env,key_watchers){
return (function() {
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto____0 = (function (){
var statearr_45737 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45737[(0)] = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto__);

(statearr_45737[(1)] = (1));

return statearr_45737;
});
var com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto____1 = (function (state_45729){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_45729);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e45738){if((e45738 instanceof Object)){
var ex__38790__auto__ = e45738;
var statearr_45739_47488 = state_45729;
(statearr_45739_47488[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45738;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47489 = state_45729;
state_45729 = G__47489;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto__ = function(state_45729){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto____1.call(this,state_45729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$watch_pending_key_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto___47480,ch,map__45705,map__45705__$1,env,key_watchers))
})();
var state__39086__auto__ = (function (){var statearr_45740 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_45740[(6)] = c__39084__auto___47480);

return statearr_45740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto___47480,ch,map__45705,map__45705__$1,env,key_watchers))
);


return ch;
});
com.wsscode.pathom.parser.process_error = (function com$wsscode$pathom$parser$process_error(p__45741,e){
var map__45742 = p__45741;
var map__45742__$1 = (((((!((map__45742 == null))))?(((((map__45742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45742):map__45742);
var env = map__45742__$1;
var process_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45742__$1,new cljs.core.Keyword("com.wsscode.pathom.core","process-error","com.wsscode.pathom.core/process-error",-2116719411));
if(cljs.core.truth_(process_error)){
return (process_error.cljs$core$IFn$_invoke$arity$2 ? process_error.cljs$core$IFn$_invoke$arity$2(env,e) : process_error.call(null,env,e));
} else {
return e;
}
});
com.wsscode.pathom.parser.parallel_process_value = (function com$wsscode$pathom$parser$parallel_process_value(env,tx,ast,key_watchers,res,waiting,processing,read,mutate,key_iterations,tail){
var map__45744 = ast;
var map__45744__$1 = (((((!((map__45744 == null))))?(((((map__45744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45744):map__45744);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45744__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$1 = (function (){var G__45746 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),waiting,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404),key_watchers], null)], 0));
var G__45746__$1 = (((query == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45746,new cljs.core.Keyword(null,"query","query",-1288509510)):G__45746);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"...","...",-1926939749,null),query)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45746__$1,new cljs.core.Keyword(null,"query","query",-1288509510),tx);
} else {
return G__45746__$1;
}
})();
var value = (function (){var G__45747 = type;
var G__45747__$1 = (((G__45747 instanceof cljs.core.Keyword))?G__45747.fqn:null);
switch (G__45747__$1) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error(["Assert failed: ","Parse mutation attempted but no :mutate function supplied","\n","mutate"].join('')));
}

var map__45748 = (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$1,key,params) : mutate.call(null,env__$1,key,params));
var map__45748__$1 = (((((!((map__45748 == null))))?(((((map__45748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45748):map__45748);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45748__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(action)){
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__45748,map__45748__$1,action,G__45747,G__45747__$1,map__45744,map__45744__$1,query,key,type,params,env__$1){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__45748,map__45748__$1,action,G__45747,G__45747__$1,map__45744,map__45744__$1,query,key,type,params,env__$1){
return (function (state_45774){
var state_val_45775 = (state_45774[(1)]);
if((state_val_45775 === (1))){
var state_45774__$1 = state_45774;
var statearr_45776_47517 = state_45774__$1;
(statearr_45776_47517[(2)] = null);

(statearr_45776_47517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (2))){
var inst_45772 = (state_45774[(2)]);
var state_45774__$1 = state_45774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45774__$1,inst_45772);
} else {
if((state_val_45775 === (3))){
var inst_45750 = (state_45774[(2)]);
var inst_45751 = [new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973)];
var inst_45752 = com.wsscode.pathom.parser.process_error(env__$1,inst_45750);
var inst_45753 = [inst_45752];
var inst_45754 = cljs.core.PersistentHashMap.fromArrays(inst_45751,inst_45753);
var state_45774__$1 = state_45774;
var statearr_45777_47519 = state_45774__$1;
(statearr_45777_47519[(2)] = inst_45754);


cljs.core.async.impl.ioc_helpers.process_exception(state_45774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (4))){
var inst_45762 = (state_45774[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_45774,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_45758 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"mutation","mutation",-285823378)];
var inst_45759 = [new cljs.core.Keyword("com.wsscode.pathom.parser","call-mutation","com.wsscode.pathom.parser/call-mutation",-603334495),key];
var inst_45760 = cljs.core.PersistentHashMap.fromArrays(inst_45758,inst_45759);
var inst_45761 = com.wsscode.pathom.trace.trace(env__$1,inst_45760);
var inst_45762__$1 = (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
var inst_45763 = com.wsscode.common.async_cljs.chan_QMARK_(inst_45762__$1);
var state_45774__$1 = (function (){var statearr_45778 = state_45774;
(statearr_45778[(7)] = inst_45762__$1);

(statearr_45778[(8)] = inst_45761);

return statearr_45778;
})();
if(inst_45763){
var statearr_45779_47521 = state_45774__$1;
(statearr_45779_47521[(1)] = (5));

} else {
var statearr_45780_47523 = state_45774__$1;
(statearr_45780_47523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (5))){
var inst_45762 = (state_45774[(7)]);
var state_45774__$1 = state_45774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45774__$1,(8),inst_45762);
} else {
if((state_val_45775 === (6))){
var inst_45762 = (state_45774[(7)]);
var state_45774__$1 = state_45774;
var statearr_45781_47525 = state_45774__$1;
(statearr_45781_47525[(2)] = inst_45762);

(statearr_45781_47525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (7))){
var inst_45770 = (state_45774[(2)]);
var state_45774__$1 = state_45774;
var statearr_45782_47527 = state_45774__$1;
(statearr_45782_47527[(2)] = inst_45770);


cljs.core.async.impl.ioc_helpers.process_exception(state_45774__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45775 === (8))){
var inst_45766 = (state_45774[(2)]);
var inst_45767 = com.wsscode.common.async_cljs.throw_err(inst_45766);
var state_45774__$1 = state_45774;
var statearr_45783_47529 = state_45774__$1;
(statearr_45783_47529[(2)] = inst_45767);

(statearr_45783_47529[(1)] = (7));


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
});})(c__39084__auto__,map__45748,map__45748__$1,action,G__45747,G__45747__$1,map__45744,map__45744__$1,query,key,type,params,env__$1))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__45748,map__45748__$1,action,G__45747,G__45747__$1,map__45744,map__45744__$1,query,key,type,params,env__$1){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____0 = (function (){
var statearr_45784 = [null,null,null,null,null,null,null,null,null];
(statearr_45784[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__);

(statearr_45784[(1)] = (1));

return statearr_45784;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____1 = (function (state_45774){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_45774);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e45785){if((e45785 instanceof Object)){
var ex__38790__auto__ = e45785;
var statearr_45786_47531 = state_45774;
(statearr_45786_47531[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47533 = state_45774;
state_45774 = G__47533;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__ = function(state_45774){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____1.call(this,state_45774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__45748,map__45748__$1,action,G__45747,G__45747__$1,map__45744,map__45744__$1,query,key,type,params,env__$1))
})();
var state__39086__auto__ = (function (){var statearr_45787 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_45787[(6)] = c__39084__auto__);

return statearr_45787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__45748,map__45748__$1,action,G__45747,G__45747__$1,map__45744,map__45744__$1,query,key,type,params,env__$1))
);

return c__39084__auto__;
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
var stream = (function (){var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,provides,map__45744,map__45744__$1,query,key,type,params,env__$1,value){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,provides,map__45744,map__45744__$1,query,key,type,params,env__$1,value){
return (function (state_45798){
var state_val_45799 = (state_45798[(1)]);
if((state_val_45799 === (1))){
var inst_45788 = [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_45789 = [key,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450)];
var state_45798__$1 = (function (){var statearr_45800 = state_45798;
(statearr_45800[(7)] = inst_45789);

(statearr_45800[(8)] = inst_45788);

return statearr_45800;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45798__$1,(2),value);
} else {
if((state_val_45799 === (2))){
var inst_45789 = (state_45798[(7)]);
var inst_45788 = (state_45798[(8)]);
var inst_45791 = (state_45798[(2)]);
var inst_45792 = com.wsscode.pathom.parser.ast__GT_out_key(ast);
var inst_45793 = [inst_45791,inst_45792];
var inst_45794 = cljs.core.PersistentHashMap.fromArrays(inst_45789,inst_45793);
var inst_45795 = [provides,true,inst_45794];
var inst_45796 = cljs.core.PersistentHashMap.fromArrays(inst_45788,inst_45795);
var state_45798__$1 = state_45798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45798__$1,inst_45796);
} else {
return null;
}
}
});})(c__39084__auto__,provides,map__45744,map__45744__$1,query,key,type,params,env__$1,value))
;
return ((function (switch__38786__auto__,c__39084__auto__,provides,map__45744,map__45744__$1,query,key,type,params,env__$1,value){
return (function() {
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____0 = (function (){
var statearr_45801 = [null,null,null,null,null,null,null,null,null];
(statearr_45801[(0)] = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__);

(statearr_45801[(1)] = (1));

return statearr_45801;
});
var com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____1 = (function (state_45798){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_45798);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e45802){if((e45802 instanceof Object)){
var ex__38790__auto__ = e45802;
var statearr_45803_47593 = state_45798;
(statearr_45803_47593[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45802;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47606 = state_45798;
state_45798 = G__47606;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__ = function(state_45798){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____1.call(this,state_45798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$parallel_process_value_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,provides,map__45744,map__45744__$1,query,key,type,params,env__$1,value))
})();
var state__39086__auto__ = (function (){var statearr_45804 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_45804[(6)] = c__39084__auto__);

return statearr_45804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,provides,map__45744,map__45744__$1,query,key,type,params,env__$1,value))
);

return c__39084__auto__;
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
var res__21491__auto__ = (function (){var seq__45805 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__45806 = null;
var count__45807 = (0);
var i__45808 = (0);
while(true){
if((i__45808 < count__45807)){
var vec__45823 = chunk__45806.cljs$core$IIndexed$_nth$arity$2(null,i__45808);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45823,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45823,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45826_47652 = cljs.core.seq(watchers);
var chunk__45827_47653 = null;
var count__45828_47654 = (0);
var i__45829_47655 = (0);
while(true){
if((i__45829_47655 < count__45828_47654)){
var out_47658 = chunk__45827_47653.cljs$core$IIndexed$_nth$arity$2(null,i__45829_47655);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47658,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47658);


var G__47679 = seq__45826_47652;
var G__47680 = chunk__45827_47653;
var G__47681 = count__45828_47654;
var G__47682 = (i__45829_47655 + (1));
seq__45826_47652 = G__47679;
chunk__45827_47653 = G__47680;
count__45828_47654 = G__47681;
i__45829_47655 = G__47682;
continue;
} else {
var temp__5720__auto___47683 = cljs.core.seq(seq__45826_47652);
if(temp__5720__auto___47683){
var seq__45826_47687__$1 = temp__5720__auto___47683;
if(cljs.core.chunked_seq_QMARK_(seq__45826_47687__$1)){
var c__4550__auto___47693 = cljs.core.chunk_first(seq__45826_47687__$1);
var G__47697 = cljs.core.chunk_rest(seq__45826_47687__$1);
var G__47698 = c__4550__auto___47693;
var G__47699 = cljs.core.count(c__4550__auto___47693);
var G__47700 = (0);
seq__45826_47652 = G__47697;
chunk__45827_47653 = G__47698;
count__45828_47654 = G__47699;
i__45829_47655 = G__47700;
continue;
} else {
var out_47704 = cljs.core.first(seq__45826_47687__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47704,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47704);


var G__47705 = cljs.core.next(seq__45826_47687__$1);
var G__47706 = null;
var G__47707 = (0);
var G__47708 = (0);
seq__45826_47652 = G__47705;
chunk__45827_47653 = G__47706;
count__45828_47654 = G__47707;
i__45829_47655 = G__47708;
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


var G__47709 = seq__45805;
var G__47710 = chunk__45806;
var G__47711 = count__45807;
var G__47712 = (i__45808 + (1));
seq__45805 = G__47709;
chunk__45806 = G__47710;
count__45807 = G__47711;
i__45808 = G__47712;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45805);
if(temp__5720__auto__){
var seq__45805__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45805__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45805__$1);
var G__47714 = cljs.core.chunk_rest(seq__45805__$1);
var G__47715 = c__4550__auto__;
var G__47716 = cljs.core.count(c__4550__auto__);
var G__47717 = (0);
seq__45805 = G__47714;
chunk__45806 = G__47715;
count__45807 = G__47716;
i__45808 = G__47717;
continue;
} else {
var vec__45830 = cljs.core.first(seq__45805__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45833_47723 = cljs.core.seq(watchers);
var chunk__45834_47724 = null;
var count__45835_47725 = (0);
var i__45836_47726 = (0);
while(true){
if((i__45836_47726 < count__45835_47725)){
var out_47728 = chunk__45834_47724.cljs$core$IIndexed$_nth$arity$2(null,i__45836_47726);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47728,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47728);


var G__47730 = seq__45833_47723;
var G__47731 = chunk__45834_47724;
var G__47732 = count__45835_47725;
var G__47733 = (i__45836_47726 + (1));
seq__45833_47723 = G__47730;
chunk__45834_47724 = G__47731;
count__45835_47725 = G__47732;
i__45836_47726 = G__47733;
continue;
} else {
var temp__5720__auto___47734__$1 = cljs.core.seq(seq__45833_47723);
if(temp__5720__auto___47734__$1){
var seq__45833_47736__$1 = temp__5720__auto___47734__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45833_47736__$1)){
var c__4550__auto___47737 = cljs.core.chunk_first(seq__45833_47736__$1);
var G__47738 = cljs.core.chunk_rest(seq__45833_47736__$1);
var G__47739 = c__4550__auto___47737;
var G__47740 = cljs.core.count(c__4550__auto___47737);
var G__47741 = (0);
seq__45833_47723 = G__47738;
chunk__45834_47724 = G__47739;
count__45835_47725 = G__47740;
i__45836_47726 = G__47741;
continue;
} else {
var out_47743 = cljs.core.first(seq__45833_47736__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47743,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47743);


var G__47744 = cljs.core.next(seq__45833_47736__$1);
var G__47745 = null;
var G__47746 = (0);
var G__47747 = (0);
seq__45833_47723 = G__47744;
chunk__45834_47724 = G__47745;
count__45835_47725 = G__47746;
i__45836_47726 = G__47747;
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


var G__47749 = cljs.core.next(seq__45805__$1);
var G__47750 = null;
var G__47751 = (0);
var G__47752 = (0);
seq__45805 = G__47749;
chunk__45806 = G__47750;
count__45807 = G__47751;
i__45808 = G__47752;
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
var seq__45837 = cljs.core.seq(cljs.core.deref(key_watchers));
var chunk__45838 = null;
var count__45839 = (0);
var i__45840 = (0);
while(true){
if((i__45840 < count__45839)){
var vec__45855 = chunk__45838.cljs$core$IIndexed$_nth$arity$2(null,i__45840);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45855,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45855,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45858_47757 = cljs.core.seq(watchers);
var chunk__45859_47758 = null;
var count__45860_47759 = (0);
var i__45861_47760 = (0);
while(true){
if((i__45861_47760 < count__45860_47759)){
var out_47761 = chunk__45859_47758.cljs$core$IIndexed$_nth$arity$2(null,i__45861_47760);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47761,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47761);


var G__47765 = seq__45858_47757;
var G__47766 = chunk__45859_47758;
var G__47767 = count__45860_47759;
var G__47768 = (i__45861_47760 + (1));
seq__45858_47757 = G__47765;
chunk__45859_47758 = G__47766;
count__45860_47759 = G__47767;
i__45861_47760 = G__47768;
continue;
} else {
var temp__5720__auto___47769 = cljs.core.seq(seq__45858_47757);
if(temp__5720__auto___47769){
var seq__45858_47770__$1 = temp__5720__auto___47769;
if(cljs.core.chunked_seq_QMARK_(seq__45858_47770__$1)){
var c__4550__auto___47772 = cljs.core.chunk_first(seq__45858_47770__$1);
var G__47773 = cljs.core.chunk_rest(seq__45858_47770__$1);
var G__47774 = c__4550__auto___47772;
var G__47775 = cljs.core.count(c__4550__auto___47772);
var G__47776 = (0);
seq__45858_47757 = G__47773;
chunk__45859_47758 = G__47774;
count__45860_47759 = G__47775;
i__45861_47760 = G__47776;
continue;
} else {
var out_47777 = cljs.core.first(seq__45858_47770__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47777,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47777);


var G__47780 = cljs.core.next(seq__45858_47770__$1);
var G__47781 = null;
var G__47782 = (0);
var G__47783 = (0);
seq__45858_47757 = G__47780;
chunk__45859_47758 = G__47781;
count__45860_47759 = G__47782;
i__45861_47760 = G__47783;
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


var G__47785 = seq__45837;
var G__47786 = chunk__45838;
var G__47787 = count__45839;
var G__47788 = (i__45840 + (1));
seq__45837 = G__47785;
chunk__45838 = G__47786;
count__45839 = G__47787;
i__45840 = G__47788;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__45837);
if(temp__5720__auto__){
var seq__45837__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45837__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45837__$1);
var G__47789 = cljs.core.chunk_rest(seq__45837__$1);
var G__47790 = c__4550__auto__;
var G__47791 = cljs.core.count(c__4550__auto__);
var G__47792 = (0);
seq__45837 = G__47789;
chunk__45838 = G__47790;
count__45839 = G__47791;
i__45840 = G__47792;
continue;
} else {
var vec__45862 = cljs.core.first(seq__45837__$1);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45862,(0),null);
var watchers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45862,(1),null);
if(cljs.core.contains_QMARK_(provides,pkey)){
com.wsscode.pathom.trace.trace(env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","flush-watchers","com.wsscode.pathom.parser/flush-watchers",-2125759334),new cljs.core.Keyword(null,"key","key",-1516042587),pkey,new cljs.core.Keyword("com.wsscode.pathom.parser","watcher-count","com.wsscode.pathom.parser/watcher-count",1367484628),cljs.core.count(watchers)], null));

var seq__45865_47795 = cljs.core.seq(watchers);
var chunk__45866_47796 = null;
var count__45867_47797 = (0);
var i__45868_47798 = (0);
while(true){
if((i__45868_47798 < count__45867_47797)){
var out_47799 = chunk__45866_47796.cljs$core$IIndexed$_nth$arity$2(null,i__45868_47798);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47799,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47799);


var G__47800 = seq__45865_47795;
var G__47801 = chunk__45866_47796;
var G__47802 = count__45867_47797;
var G__47803 = (i__45868_47798 + (1));
seq__45865_47795 = G__47800;
chunk__45866_47796 = G__47801;
count__45867_47797 = G__47802;
i__45868_47798 = G__47803;
continue;
} else {
var temp__5720__auto___47804__$1 = cljs.core.seq(seq__45865_47795);
if(temp__5720__auto___47804__$1){
var seq__45865_47805__$1 = temp__5720__auto___47804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45865_47805__$1)){
var c__4550__auto___47806 = cljs.core.chunk_first(seq__45865_47805__$1);
var G__47807 = cljs.core.chunk_rest(seq__45865_47805__$1);
var G__47808 = c__4550__auto___47806;
var G__47809 = cljs.core.count(c__4550__auto___47806);
var G__47810 = (0);
seq__45865_47795 = G__47807;
chunk__45866_47796 = G__47808;
count__45867_47797 = G__47809;
i__45868_47798 = G__47810;
continue;
} else {
var out_47811 = cljs.core.first(seq__45865_47805__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out_47811,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),cljs.core.PersistentHashSet.createAsIfByAssoc([pkey]),new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973),error], null));

cljs.core.async.close_BANG_(out_47811);


var G__47815 = cljs.core.next(seq__45865_47805__$1);
var G__47816 = null;
var G__47817 = (0);
var G__47818 = (0);
seq__45865_47795 = G__47815;
chunk__45866_47796 = G__47816;
count__45867_47797 = G__47817;
i__45868_47798 = G__47818;
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


var G__47819 = cljs.core.next(seq__45837__$1);
var G__47823 = null;
var G__47824 = (0);
var G__47825 = (0);
seq__45837 = G__47819;
chunk__45838 = G__47823;
count__45839 = G__47824;
i__45840 = G__47825;
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
var G__45869 = (x - amount);
var G__45870 = min;
return Math.max(G__45869,G__45870);
});
});
com.wsscode.pathom.parser.remove_error_values = (function com$wsscode$pathom$parser$remove_error_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__45871){
var vec__45872 = p__45871;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45872,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45872,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882));
})),m);
});
/**
 * This is used for merging new parsed attributes from entity, works like regular merge but if the value from the right
 *   direction is not found, then the previous value will be kept.
 */
com.wsscode.pathom.parser.value_merge = (function com$wsscode$pathom$parser$value_merge(x,y){
if((y === new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882))){
return x;
} else {
return y;
}
});
com.wsscode.pathom.parser.process_next_message = (function com$wsscode$pathom$parser$process_next_message(p__45877,tx,waiting,indexed_props,processing,key_iterations,key_watchers,res){
var map__45878 = p__45877;
var map__45878__$1 = (((((!((map__45878 == null))))?(((((map__45878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45878):map__45878);
var env = map__45878__$1;
var done_signal_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","done-signal*","com.wsscode.pathom.parser/done-signal*",2069309538));
var processing_recheck_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","processing-recheck-timer","com.wsscode.pathom.parser/processing-recheck-timer",-914154273));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (state_46151){
var state_val_46152 = (state_46151[(1)]);
if((state_val_46152 === (65))){
var inst_46071 = (state_46151[(7)]);
var inst_46072 = (state_46151[(8)]);
var inst_46074 = (state_46151[(9)]);
var inst_46073 = (state_46151[(10)]);
var inst_46092 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673)];
var inst_46093 = [new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result","com.wsscode.pathom.parser/merge-result",870398873),inst_46073];
var inst_46094 = cljs.core.PersistentHashMap.fromArrays(inst_46092,inst_46093);
var inst_46095 = com.wsscode.pathom.trace.trace(env,inst_46094);
var inst_46096 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46097 = cljs.core.vals(inst_46073);
var inst_46098 = cljs.core.first(inst_46097);
var inst_46099 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,inst_46072,inst_46098);
var inst_46100 = cljs.core.PersistentHashSet.EMPTY;
var inst_46101 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_46071);
var inst_46102 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46100,inst_46101,inst_46074);
var inst_46103 = cljs.core.PersistentVector.EMPTY;
var inst_46104 = [inst_46099,inst_46102,processing,key_iterations,inst_46103];
var inst_46105 = (new cljs.core.PersistentVector(null,5,(5),inst_46096,inst_46104,null));
var state_46151__$1 = (function (){var statearr_46153 = state_46151;
(statearr_46153[(11)] = inst_46095);

return statearr_46153;
})();
var statearr_46154_47840 = state_46151__$1;
(statearr_46154_47840[(2)] = inst_46105);

(statearr_46154_47840[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (62))){
var inst_46080 = (state_46151[(12)]);
var inst_46070 = (state_46151[(13)]);
var inst_46082 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_46080,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278),inst_46070);
var state_46151__$1 = state_46151;
var statearr_46155_47842 = state_46151__$1;
(statearr_46155_47842[(2)] = inst_46082);

(statearr_46155_47842[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (7))){
var inst_45896 = (state_46151[(14)]);
var inst_45896__$1 = (state_46151[(2)]);
var inst_45898 = cljs.core.PersistentVector.EMPTY;
var inst_45899 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_45900 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_45898,inst_45899,processing);
var state_46151__$1 = (function (){var statearr_46156 = state_46151;
(statearr_46156[(15)] = inst_45900);

(statearr_46156[(14)] = inst_45896__$1);

return statearr_46156;
})();
if(cljs.core.truth_(inst_45896__$1)){
var statearr_46157_47846 = state_46151__$1;
(statearr_46157_47846[(1)] = (8));

} else {
var statearr_46158_47847 = state_46151__$1;
(statearr_46158_47847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (59))){
var inst_46067 = (state_46151[(16)]);
var inst_46068 = (state_46151[(17)]);
var inst_46073 = (state_46151[(10)]);
var inst_46070 = (state_46151[(13)]);
var inst_46077 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507),new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673),new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683)];
var inst_46078 = cljs.core.boolean$(inst_46068);
var inst_46079 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-pending","com.wsscode.pathom.parser/process-pending",-536495871),inst_46067,inst_46073,inst_46078];
var inst_46080 = cljs.core.PersistentHashMap.fromArrays(inst_46077,inst_46079);
var state_46151__$1 = (function (){var statearr_46159 = state_46151;
(statearr_46159[(12)] = inst_46080);

return statearr_46159;
})();
if(cljs.core.truth_(inst_46070)){
var statearr_46160_47851 = state_46151__$1;
(statearr_46160_47851[(1)] = (62));

} else {
var statearr_46161_47853 = state_46151__$1;
(statearr_46161_47853[(1)] = (63));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (20))){
var inst_45950 = (state_46151[(18)]);
var inst_45944 = (state_46151[(19)]);
var inst_45942 = (state_46151[(20)]);
var inst_45950__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45942,inst_45944);
var inst_45952 = (inst_45950__$1 == null);
var inst_45953 = cljs.core.not(inst_45952);
var state_46151__$1 = (function (){var statearr_46162 = state_46151;
(statearr_46162[(18)] = inst_45950__$1);

return statearr_46162;
})();
if(inst_45953){
var statearr_46163_47855 = state_46151__$1;
(statearr_46163_47855[(1)] = (23));

} else {
var statearr_46164_47856 = state_46151__$1;
(statearr_46164_47856[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (58))){
var inst_46065 = (state_46151[(21)]);
var inst_46067 = (state_46151[(16)]);
var inst_45908 = (state_46151[(22)]);
var inst_46070 = (state_46151[(13)]);
var inst_46065__$1 = (state_46151[(2)]);
var inst_46066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46065__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","response-value","com.wsscode.pathom.parser/response-value",-1290265673));
var inst_46067__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46065__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507));
var inst_46068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46065__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","merge-result?","com.wsscode.pathom.parser/merge-result?",1457060683));
var inst_46069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46065__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","error","com.wsscode.pathom.parser/error",-525905973));
var inst_46070__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278).cljs$core$IFn$_invoke$arity$1(inst_45908);
var inst_46071 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_46067__$1,inst_46070__$1);
var inst_46072 = new cljs.core.Keyword("pathom","as","pathom/as",-2134138450).cljs$core$IFn$_invoke$arity$1(inst_46066);
var inst_46073 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(inst_46066,new cljs.core.Keyword("pathom","as","pathom/as",-2134138450));
var inst_46074 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(waiting,inst_46070__$1);
var state_46151__$1 = (function (){var statearr_46165 = state_46151;
(statearr_46165[(21)] = inst_46065__$1);

(statearr_46165[(16)] = inst_46067__$1);

(statearr_46165[(17)] = inst_46068);

(statearr_46165[(7)] = inst_46071);

(statearr_46165[(8)] = inst_46072);

(statearr_46165[(9)] = inst_46074);

(statearr_46165[(10)] = inst_46073);

(statearr_46165[(23)] = inst_46069);

(statearr_46165[(13)] = inst_46070__$1);

return statearr_46165;
})();
if(cljs.core.truth_(inst_45908)){
var statearr_46166_47861 = state_46151__$1;
(statearr_46166_47861[(1)] = (59));

} else {
var statearr_46167_47862 = state_46151__$1;
(statearr_46167_47862[(1)] = (60));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (60))){
var inst_45909 = (state_46151[(24)]);
var inst_46074 = (state_46151[(9)]);
var inst_46134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46135 = cljs.core.PersistentHashSet.EMPTY;
var inst_46136 = [inst_45909];
var inst_46137 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_46136);
var inst_46138 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_46137,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_46139 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_46138);
var inst_46140 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46135,inst_46139,processing);
var inst_46141 = cljs.core.PersistentVector.EMPTY;
var inst_46142 = [res,inst_46074,inst_46140,key_iterations,inst_46141];
var inst_46143 = (new cljs.core.PersistentVector(null,5,(5),inst_46134,inst_46142,null));
var state_46151__$1 = state_46151;
var statearr_46168_47866 = state_46151__$1;
(statearr_46168_47866[(2)] = inst_46143);

(statearr_46168_47866[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (27))){
var state_46151__$1 = state_46151;
var statearr_46169_47867 = state_46151__$1;
(statearr_46169_47867[(2)] = false);

(statearr_46169_47867[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (1))){
var state_46151__$1 = state_46151;
var statearr_46170_47868 = state_46151__$1;
(statearr_46170_47868[(2)] = null);

(statearr_46170_47868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (24))){
var state_46151__$1 = state_46151;
var statearr_46171_47871 = state_46151__$1;
(statearr_46171_47871[(2)] = false);

(statearr_46171_47871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (55))){
var inst_46057 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46172_47873 = state_46151__$1;
(statearr_46172_47873[(2)] = inst_46057);

(statearr_46172_47873[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (39))){
var state_46151__$1 = state_46151;
var statearr_46173_47875 = state_46151__$1;
(statearr_46173_47875[(2)] = false);

(statearr_46173_47875[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (46))){
var inst_45977 = (state_46151[(25)]);
var inst_46008 = (state_46151[(2)]);
var inst_46009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46008,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_46010 = cljs.core.async.close_BANG_(inst_46009);
var inst_46011 = cljs.core.next(inst_45977);
var inst_45941 = inst_46011;
var inst_45942 = null;
var inst_45943 = (0);
var inst_45944 = (0);
var state_46151__$1 = (function (){var statearr_46174 = state_46151;
(statearr_46174[(26)] = inst_45941);

(statearr_46174[(19)] = inst_45944);

(statearr_46174[(27)] = inst_45943);

(statearr_46174[(20)] = inst_45942);

(statearr_46174[(28)] = inst_46010);

return statearr_46174;
})();
var statearr_46175_47881 = state_46151__$1;
(statearr_46175_47881[(2)] = null);

(statearr_46175_47881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46151,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_45887 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing-count","com.wsscode.pathom.parser/processing-count",853696659)];
var inst_45888 = cljs.core.count(processing);
var inst_45889 = [new cljs.core.Keyword("com.wsscode.pathom.parser","processing-wait-next","com.wsscode.pathom.parser/processing-wait-next",-1000039842),inst_45888];
var inst_45890 = cljs.core.PersistentHashMap.fromArrays(inst_45887,inst_45889);
var inst_45891 = com.wsscode.pathom.trace.trace(env,inst_45890);
var state_46151__$1 = (function (){var statearr_46176 = state_46151;
(statearr_46176[(29)] = inst_45891);

return statearr_46176;
})();
if(cljs.core.truth_(processing_recheck_timer)){
var statearr_46177_47885 = state_46151__$1;
(statearr_46177_47885[(1)] = (5));

} else {
var statearr_46178_47886 = state_46151__$1;
(statearr_46178_47886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (54))){
var state_46151__$1 = state_46151;
var statearr_46179_47887 = state_46151__$1;
(statearr_46179_47887[(2)] = false);

(statearr_46179_47887[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (15))){
var inst_45927 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45928 = cljs.core.PersistentVector.EMPTY;
var inst_45929 = [res,waiting,processing,key_iterations,inst_45928];
var inst_45930 = (new cljs.core.PersistentVector(null,5,(5),inst_45927,inst_45929,null));
var state_46151__$1 = state_46151;
var statearr_46180_47891 = state_46151__$1;
(statearr_46180_47891[(2)] = inst_45930);

(statearr_46180_47891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (48))){
var inst_45916 = (state_46151[(30)]);
var inst_46031 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46032 = cljs.core.PersistentHashSet.EMPTY;
var inst_46033 = cljs.core.PersistentHashSet.EMPTY;
var inst_46034 = cljs.core.PersistentVector.EMPTY;
var inst_46035 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(indexed_props);
var inst_46036 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46034,inst_46035,inst_45916);
var inst_46037 = [res,inst_46032,inst_46033,key_iterations,inst_46036];
var inst_46038 = (new cljs.core.PersistentVector(null,5,(5),inst_46031,inst_46037,null));
var state_46151__$1 = state_46151;
var statearr_46181_47895 = state_46151__$1;
(statearr_46181_47895[(2)] = inst_46038);

(statearr_46181_47895[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (50))){
var inst_45908 = (state_46151[(22)]);
var inst_46049 = inst_45908.cljs$lang$protocol_mask$partition0$;
var inst_46050 = (inst_46049 & (64));
var inst_46051 = inst_45908.cljs$core$ISeq$;
var inst_46052 = (cljs.core.PROTOCOL_SENTINEL === inst_46051);
var inst_46053 = ((inst_46050) || (inst_46052));
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_46053)){
var statearr_46185_47896 = state_46151__$1;
(statearr_46185_47896[(1)] = (53));

} else {
var statearr_46186_47900 = state_46151__$1;
(statearr_46186_47900[(1)] = (54));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (21))){
var inst_45941 = (state_46151[(26)]);
var inst_45977 = (state_46151[(25)]);
var inst_45977__$1 = cljs.core.seq(inst_45941);
var state_46151__$1 = (function (){var statearr_46187 = state_46151;
(statearr_46187[(25)] = inst_45977__$1);

return statearr_46187;
})();
if(inst_45977__$1){
var statearr_46188_47901 = state_46151__$1;
(statearr_46188_47901[(1)] = (32));

} else {
var statearr_46189_47902 = state_46151__$1;
(statearr_46189_47902[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (31))){
var inst_45941 = (state_46151[(26)]);
var inst_45944 = (state_46151[(19)]);
var inst_45943 = (state_46151[(27)]);
var inst_45942 = (state_46151[(20)]);
var inst_45971 = (state_46151[(2)]);
var inst_45972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45971,new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963));
var inst_45973 = cljs.core.async.close_BANG_(inst_45972);
var inst_45974 = (inst_45944 + (1));
var tmp46182 = inst_45941;
var tmp46183 = inst_45943;
var tmp46184 = inst_45942;
var inst_45941__$1 = tmp46182;
var inst_45942__$1 = tmp46184;
var inst_45943__$1 = tmp46183;
var inst_45944__$1 = inst_45974;
var state_46151__$1 = (function (){var statearr_46190 = state_46151;
(statearr_46190[(26)] = inst_45941__$1);

(statearr_46190[(31)] = inst_45973);

(statearr_46190[(19)] = inst_45944__$1);

(statearr_46190[(27)] = inst_45943__$1);

(statearr_46190[(20)] = inst_45942__$1);

return statearr_46190;
})();
var statearr_46191_47907 = state_46151__$1;
(statearr_46191_47907[(2)] = null);

(statearr_46191_47907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (32))){
var inst_45977 = (state_46151[(25)]);
var inst_45979 = cljs.core.chunked_seq_QMARK_(inst_45977);
var state_46151__$1 = state_46151;
if(inst_45979){
var statearr_46192_47909 = state_46151__$1;
(statearr_46192_47909[(1)] = (35));

} else {
var statearr_46193_47910 = state_46151__$1;
(statearr_46193_47910[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (40))){
var inst_46003 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_46003)){
var statearr_46194_47911 = state_46151__$1;
(statearr_46194_47911[(1)] = (44));

} else {
var statearr_46195_47912 = state_46151__$1;
(statearr_46195_47912[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (56))){
var inst_45908 = (state_46151[(22)]);
var inst_46062 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45908);
var state_46151__$1 = state_46151;
var statearr_46196_47917 = state_46151__$1;
(statearr_46196_47917[(2)] = inst_46062);

(statearr_46196_47917[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (33))){
var state_46151__$1 = state_46151;
var statearr_46197_47919 = state_46151__$1;
(statearr_46197_47919[(2)] = null);

(statearr_46197_47919[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (13))){
var inst_45908 = (state_46151[(22)]);
var inst_46046 = (inst_45908 == null);
var inst_46047 = cljs.core.not(inst_46046);
var state_46151__$1 = state_46151;
if(inst_46047){
var statearr_46198_47929 = state_46151__$1;
(statearr_46198_47929[(1)] = (50));

} else {
var statearr_46199_47940 = state_46151__$1;
(statearr_46199_47940[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (22))){
var inst_46019 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46200_47950 = state_46151__$1;
(statearr_46200_47950[(2)] = inst_46019);

(statearr_46200_47950[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (36))){
var inst_45977 = (state_46151[(25)]);
var inst_45987 = (state_46151[(32)]);
var inst_45987__$1 = cljs.core.first(inst_45977);
var inst_45989 = (inst_45987__$1 == null);
var inst_45990 = cljs.core.not(inst_45989);
var state_46151__$1 = (function (){var statearr_46201 = state_46151;
(statearr_46201[(32)] = inst_45987__$1);

return statearr_46201;
})();
if(inst_45990){
var statearr_46202_47965 = state_46151__$1;
(statearr_46202_47965[(1)] = (38));

} else {
var statearr_46203_47966 = state_46151__$1;
(statearr_46203_47966[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (41))){
var state_46151__$1 = state_46151;
var statearr_46204_47967 = state_46151__$1;
(statearr_46204_47967[(2)] = true);

(statearr_46204_47967[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (43))){
var inst_46000 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46205_47968 = state_46151__$1;
(statearr_46205_47968[(2)] = inst_46000);

(statearr_46205_47968[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (61))){
var inst_46145 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46206_47970 = state_46151__$1;
(statearr_46206_47970[(2)] = inst_46145);

(statearr_46206_47970[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (29))){
var inst_45950 = (state_46151[(18)]);
var inst_45968 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45950);
var state_46151__$1 = state_46151;
var statearr_46207_47974 = state_46151__$1;
(statearr_46207_47974[(2)] = inst_45968);

(statearr_46207_47974[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (44))){
var inst_45987 = (state_46151[(32)]);
var inst_46005 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45987);
var state_46151__$1 = state_46151;
var statearr_46208_47977 = state_46151__$1;
(statearr_46208_47977[(2)] = inst_46005);

(statearr_46208_47977[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (6))){
var state_46151__$1 = state_46151;
var statearr_46209_47978 = state_46151__$1;
(statearr_46209_47978[(2)] = null);

(statearr_46209_47978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (28))){
var inst_45963 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46210_47980 = state_46151__$1;
(statearr_46210_47980[(2)] = inst_45963);

(statearr_46210_47980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (64))){
var inst_46065 = (state_46151[(21)]);
var inst_46067 = (state_46151[(16)]);
var inst_45908 = (state_46151[(22)]);
var inst_46068 = (state_46151[(17)]);
var inst_45907 = (state_46151[(33)]);
var inst_45891 = (state_46151[(29)]);
var inst_46071 = (state_46151[(7)]);
var inst_45905 = (state_46151[(34)]);
var inst_45896 = (state_46151[(14)]);
var inst_46072 = (state_46151[(8)]);
var inst_45909 = (state_46151[(24)]);
var inst_46074 = (state_46151[(9)]);
var inst_46073 = (state_46151[(10)]);
var inst_46069 = (state_46151[(23)]);
var inst_46070 = (state_46151[(13)]);
var inst_46085 = (state_46151[(2)]);
var inst_46086 = com.wsscode.pathom.trace.trace(env,inst_46085);
var inst_46087 = new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031).cljs$core$IFn$_invoke$arity$1(env);
var inst_46088 = (function (){var p = inst_45909;
var merge_result_QMARK_ = inst_46068;
var recheck_ch = inst_45896;
var response_value = inst_46073;
var _ = inst_45891;
var key_as = inst_46072;
var map__46044 = inst_46065;
var provides_SINGLEQUOTE_ = inst_46071;
var msg = inst_45908;
var waiting__$1 = inst_46074;
var processing_SINGLEQUOTE_ = inst_45905;
var vec__45884 = inst_45907;
var waiting_SINGLEQUOTE_ = inst_46070;
var error = inst_46069;
var provides = inst_46067;
return ((function (p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,map__46044,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,vec__45884,waiting_SINGLEQUOTE_,error,provides,inst_46065,inst_46067,inst_45908,inst_46068,inst_45907,inst_45891,inst_46071,inst_45905,inst_45896,inst_46072,inst_45909,inst_46074,inst_46073,inst_46069,inst_46070,inst_46085,inst_46086,inst_46087,state_val_46152,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__45876_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(com.wsscode.pathom.parser.value_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_value,p1__45876_SHARP_], 0));
});
;})(p,merge_result_QMARK_,recheck_ch,response_value,_,key_as,map__46044,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,vec__45884,waiting_SINGLEQUOTE_,error,provides,inst_46065,inst_46067,inst_45908,inst_46068,inst_45907,inst_45891,inst_46071,inst_45905,inst_45896,inst_46072,inst_45909,inst_46074,inst_46073,inst_46069,inst_46070,inst_46085,inst_46086,inst_46087,state_val_46152,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_46089 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46087,inst_46088);
var inst_46090 = com.wsscode.pathom.parser.parallel_flush_watchers(env,key_watchers,inst_46071,inst_46069);
var state_46151__$1 = (function (){var statearr_46211 = state_46151;
(statearr_46211[(35)] = inst_46086);

(statearr_46211[(36)] = inst_46090);

(statearr_46211[(37)] = inst_46089);

return statearr_46211;
})();
if(cljs.core.truth_(inst_46068)){
var statearr_46212_47989 = state_46151__$1;
(statearr_46212_47989[(1)] = (65));

} else {
var statearr_46213_47990 = state_46151__$1;
(statearr_46213_47990[(1)] = (66));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (51))){
var state_46151__$1 = state_46151;
var statearr_46214_47991 = state_46151__$1;
(statearr_46214_47991[(2)] = false);

(statearr_46214_47991[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (25))){
var inst_45966 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_45966)){
var statearr_46215_47992 = state_46151__$1;
(statearr_46215_47992[(1)] = (29));

} else {
var statearr_46216_47994 = state_46151__$1;
(statearr_46216_47994[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (34))){
var inst_46017 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46217_47997 = state_46151__$1;
(statearr_46217_47997[(2)] = inst_46017);

(statearr_46217_47997[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (17))){
var inst_46042 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46218_47998 = state_46151__$1;
(statearr_46218_47998[(2)] = inst_46042);

(statearr_46218_47998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (3))){
var inst_45880 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46219_48000 = state_46151__$1;
(statearr_46219_48000[(2)] = inst_45880);


cljs.core.async.impl.ioc_helpers.process_exception(state_46151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (12))){
var inst_45908 = (state_46151[(22)]);
var inst_45907 = (state_46151[(33)]);
var inst_45891 = (state_46151[(29)]);
var inst_45905 = (state_46151[(34)]);
var inst_45896 = (state_46151[(14)]);
var inst_45916 = (state_46151[(30)]);
var inst_45909 = (state_46151[(24)]);
var inst_45912 = cljs.core.keys(indexed_props);
var inst_45913 = cljs.core.set(inst_45912);
var inst_45914 = cljs.core.keys(res);
var inst_45915 = cljs.core.set(inst_45914);
var inst_45916__$1 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_45913,inst_45915);
var inst_45917 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","processing","com.wsscode.pathom.parser/processing",-1928666102)];
var inst_45918 = [new cljs.core.Keyword(null,"processes","processes",-546984164),new cljs.core.Keyword(null,"missing-props","missing-props",237278205)];
var inst_45919 = [processing,inst_45916__$1];
var inst_45920 = cljs.core.PersistentHashMap.fromArrays(inst_45918,inst_45919);
var inst_45921 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-reader-retry","com.wsscode.pathom.parser/trigger-reader-retry",-1526068301),inst_45920];
var inst_45922 = cljs.core.PersistentHashMap.fromArrays(inst_45917,inst_45921);
var inst_45923 = com.wsscode.pathom.trace.trace(env,inst_45922);
var inst_45924 = (function (){var missing_props = inst_45916__$1;
var p = inst_45909;
var recheck_ch = inst_45896;
var _ = inst_45891;
var msg = inst_45908;
var processing_SINGLEQUOTE_ = inst_45905;
var all_props = inst_45913;
var vec__45884 = inst_45907;
var current_props = inst_45915;
return ((function (missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,vec__45884,current_props,inst_45908,inst_45907,inst_45891,inst_45905,inst_45896,inst_45916,inst_45909,inst_45912,inst_45913,inst_45914,inst_45915,inst_45916__$1,inst_45917,inst_45918,inst_45919,inst_45920,inst_45921,inst_45922,inst_45923,state_val_46152,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (p1__45875_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(active_paths),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__45875_SHARP_));
});
;})(missing_props,p,recheck_ch,_,msg,processing_SINGLEQUOTE_,all_props,vec__45884,current_props,inst_45908,inst_45907,inst_45891,inst_45905,inst_45896,inst_45916,inst_45909,inst_45912,inst_45913,inst_45914,inst_45915,inst_45916__$1,inst_45917,inst_45918,inst_45919,inst_45920,inst_45921,inst_45922,inst_45923,state_val_46152,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_45925 = cljs.core.some(inst_45924,inst_45916__$1);
var state_46151__$1 = (function (){var statearr_46220 = state_46151;
(statearr_46220[(30)] = inst_45916__$1);

(statearr_46220[(38)] = inst_45923);

return statearr_46220;
})();
if(cljs.core.truth_(inst_45925)){
var statearr_46221_48006 = state_46151__$1;
(statearr_46221_48006[(1)] = (15));

} else {
var statearr_46222_48008 = state_46151__$1;
(statearr_46222_48008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (2))){
var inst_46149 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46151__$1,inst_46149);
} else {
if((state_val_46152 === (66))){
var inst_46065 = (state_46151[(21)]);
var inst_46067 = (state_46151[(16)]);
var inst_45908 = (state_46151[(22)]);
var inst_46068 = (state_46151[(17)]);
var inst_45907 = (state_46151[(33)]);
var inst_45891 = (state_46151[(29)]);
var inst_46071 = (state_46151[(7)]);
var inst_45905 = (state_46151[(34)]);
var inst_45896 = (state_46151[(14)]);
var inst_46072 = (state_46151[(8)]);
var inst_45909 = (state_46151[(24)]);
var inst_46074 = (state_46151[(9)]);
var inst_46073 = (state_46151[(10)]);
var inst_46069 = (state_46151[(23)]);
var inst_46070 = (state_46151[(13)]);
var inst_46107 = com.wsscode.pathom.parser.remove_error_values(res);
var inst_46108 = cljs.core.keys(inst_46107);
var inst_46109 = cljs.core.set(inst_46108);
var inst_46110 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(inst_46109,com.wsscode.pathom.parser.ast__GT_out_key);
var inst_46111 = cljs.core.vec(inst_46071);
var inst_46112 = com.wsscode.pathom.parser.focus_subquery(tx,inst_46111);
var inst_46113 = com.wsscode.pathom.parser.query__GT_ast(inst_46112);
var inst_46114 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_46113);
var inst_46115 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_46110,inst_46114);
var inst_46116 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_46115);
var inst_46117 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","loop-keys","com.wsscode.pathom.parser/loop-keys",1134143507)];
var inst_46118 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),inst_46116);
var inst_46119 = [new cljs.core.Keyword("com.wsscode.pathom.parser","reset-loop","com.wsscode.pathom.parser/reset-loop",-808527604),inst_46118];
var inst_46120 = cljs.core.PersistentHashMap.fromArrays(inst_46117,inst_46119);
var inst_46121 = com.wsscode.pathom.trace.trace(env,inst_46120);
var inst_46122 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46123 = cljs.core.PersistentHashSet.EMPTY;
var inst_46124 = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(inst_46071);
var inst_46125 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46123,inst_46124,inst_46074);
var inst_46127 = (function (){var p = inst_45909;
var merge_result_QMARK_ = inst_46068;
var recheck_ch = inst_45896;
var response_value = inst_46073;
var _ = inst_45891;
var next_children = inst_46116;
var key_as = inst_46072;
var map__46044 = inst_46065;
var provides_SINGLEQUOTE_ = inst_46071;
var msg = inst_45908;
var waiting__$1 = inst_46074;
var processing_SINGLEQUOTE_ = inst_45905;
var vec__45884 = inst_45907;
var waiting_SINGLEQUOTE_ = inst_46070;
var error = inst_46069;
var provides = inst_46067;
return ((function (p,merge_result_QMARK_,recheck_ch,response_value,_,next_children,key_as,map__46044,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,vec__45884,waiting_SINGLEQUOTE_,error,provides,inst_46065,inst_46067,inst_45908,inst_46068,inst_45907,inst_45891,inst_46071,inst_45905,inst_45896,inst_46072,inst_45909,inst_46074,inst_46073,inst_46069,inst_46070,inst_46107,inst_46108,inst_46109,inst_46110,inst_46111,inst_46112,inst_46113,inst_46114,inst_46115,inst_46116,inst_46117,inst_46118,inst_46119,inst_46120,inst_46121,inst_46122,inst_46123,inst_46124,inst_46125,state_val_46152,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function (iter,p__46126){
var map__46223 = p__46126;
var map__46223__$1 = (((((!((map__46223 == null))))?(((((map__46223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46223):map__46223);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46223__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(iter,key,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
});
;})(p,merge_result_QMARK_,recheck_ch,response_value,_,next_children,key_as,map__46044,provides_SINGLEQUOTE_,msg,waiting__$1,processing_SINGLEQUOTE_,vec__45884,waiting_SINGLEQUOTE_,error,provides,inst_46065,inst_46067,inst_45908,inst_46068,inst_45907,inst_45891,inst_46071,inst_45905,inst_45896,inst_46072,inst_45909,inst_46074,inst_46073,inst_46069,inst_46070,inst_46107,inst_46108,inst_46109,inst_46110,inst_46111,inst_46112,inst_46113,inst_46114,inst_46115,inst_46116,inst_46117,inst_46118,inst_46119,inst_46120,inst_46121,inst_46122,inst_46123,inst_46124,inst_46125,state_val_46152,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var inst_46128 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inst_46127,key_iterations,inst_46116);
var inst_46129 = [res,inst_46125,processing,inst_46128,inst_46116];
var inst_46130 = (new cljs.core.PersistentVector(null,5,(5),inst_46122,inst_46129,null));
var state_46151__$1 = (function (){var statearr_46225 = state_46151;
(statearr_46225[(39)] = inst_46121);

return statearr_46225;
})();
var statearr_46226_48015 = state_46151__$1;
(statearr_46226_48015[(2)] = inst_46130);

(statearr_46226_48015[(1)] = (67));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (23))){
var inst_45950 = (state_46151[(18)]);
var inst_45955 = inst_45950.cljs$lang$protocol_mask$partition0$;
var inst_45956 = (inst_45955 & (64));
var inst_45957 = inst_45950.cljs$core$ISeq$;
var inst_45958 = (cljs.core.PROTOCOL_SENTINEL === inst_45957);
var inst_45959 = ((inst_45956) || (inst_45958));
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_45959)){
var statearr_46227_48016 = state_46151__$1;
(statearr_46227_48016[(1)] = (26));

} else {
var statearr_46228_48017 = state_46151__$1;
(statearr_46228_48017[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (47))){
var inst_46024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46025 = cljs.core.PersistentHashSet.EMPTY;
var inst_46026 = cljs.core.PersistentHashSet.EMPTY;
var inst_46027 = cljs.core.PersistentVector.EMPTY;
var inst_46028 = [res,inst_46025,inst_46026,key_iterations,inst_46027];
var inst_46029 = (new cljs.core.PersistentVector(null,5,(5),inst_46024,inst_46028,null));
var state_46151__$1 = state_46151;
var statearr_46229_48018 = state_46151__$1;
(statearr_46229_48018[(2)] = inst_46029);

(statearr_46229_48018[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (35))){
var inst_45977 = (state_46151[(25)]);
var inst_45981 = cljs.core.chunk_first(inst_45977);
var inst_45982 = cljs.core.chunk_rest(inst_45977);
var inst_45983 = cljs.core.count(inst_45981);
var inst_45941 = inst_45982;
var inst_45942 = inst_45981;
var inst_45943 = inst_45983;
var inst_45944 = (0);
var state_46151__$1 = (function (){var statearr_46230 = state_46151;
(statearr_46230[(26)] = inst_45941);

(statearr_46230[(19)] = inst_45944);

(statearr_46230[(27)] = inst_45943);

(statearr_46230[(20)] = inst_45942);

return statearr_46230;
})();
var statearr_46231_48029 = state_46151__$1;
(statearr_46231_48029[(2)] = null);

(statearr_46231_48029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (19))){
var inst_46021 = (state_46151[(2)]);
var inst_46022 = cljs.core.deref(done_signal_STAR_);
var state_46151__$1 = (function (){var statearr_46232 = state_46151;
(statearr_46232[(40)] = inst_46021);

return statearr_46232;
})();
if(cljs.core.truth_(inst_46022)){
var statearr_46233_48038 = state_46151__$1;
(statearr_46233_48038[(1)] = (47));

} else {
var statearr_46234_48042 = state_46151__$1;
(statearr_46234_48042[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (57))){
var inst_45908 = (state_46151[(22)]);
var state_46151__$1 = state_46151;
var statearr_46235_48054 = state_46151__$1;
(statearr_46235_48054[(2)] = inst_45908);

(statearr_46235_48054[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (11))){
var inst_45907 = (state_46151[(33)]);
var inst_45896 = (state_46151[(14)]);
var inst_45909 = (state_46151[(24)]);
var inst_45907__$1 = (state_46151[(2)]);
var inst_45908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45907__$1,(0),null);
var inst_45909__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45907__$1,(1),null);
var inst_45910 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45909__$1,inst_45896);
var state_46151__$1 = (function (){var statearr_46236 = state_46151;
(statearr_46236[(22)] = inst_45908);

(statearr_46236[(33)] = inst_45907__$1);

(statearr_46236[(24)] = inst_45909__$1);

return statearr_46236;
})();
if(inst_45910){
var statearr_46237_48079 = state_46151__$1;
(statearr_46237_48079[(1)] = (12));

} else {
var statearr_46238_48080 = state_46151__$1;
(statearr_46238_48080[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (9))){
var inst_45900 = (state_46151[(15)]);
var state_46151__$1 = state_46151;
var statearr_46239_48082 = state_46151__$1;
(statearr_46239_48082[(2)] = inst_45900);

(statearr_46239_48082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (5))){
var inst_45893 = cljs.core.async.timeout(processing_recheck_timer);
var state_46151__$1 = state_46151;
var statearr_46240_48084 = state_46151__$1;
(statearr_46240_48084[(2)] = inst_45893);

(statearr_46240_48084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (14))){
var inst_46147 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46241_48086 = state_46151__$1;
(statearr_46241_48086[(2)] = inst_46147);


cljs.core.async.impl.ioc_helpers.process_exception(state_46151__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (45))){
var inst_45987 = (state_46151[(32)]);
var state_46151__$1 = state_46151;
var statearr_46242_48087 = state_46151__$1;
(statearr_46242_48087[(2)] = inst_45987);

(statearr_46242_48087[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (53))){
var state_46151__$1 = state_46151;
var statearr_46243_48090 = state_46151__$1;
(statearr_46243_48090[(2)] = true);

(statearr_46243_48090[(1)] = (55));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (26))){
var state_46151__$1 = state_46151;
var statearr_46244_48092 = state_46151__$1;
(statearr_46244_48092[(2)] = true);

(statearr_46244_48092[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (16))){
var inst_45916 = (state_46151[(30)]);
var inst_45932 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","missing-props","com.wsscode.pathom.parser/missing-props",1730773516)];
var inst_45933 = [new cljs.core.Keyword("com.wsscode.pathom.parser","trigger-recheck-schedule","com.wsscode.pathom.parser/trigger-recheck-schedule",-927032403),inst_45916];
var inst_45934 = cljs.core.PersistentHashMap.fromArrays(inst_45932,inst_45933);
var inst_45935 = com.wsscode.pathom.trace.trace(env,inst_45934);
var inst_45940 = cljs.core.seq(processing);
var inst_45941 = inst_45940;
var inst_45942 = null;
var inst_45943 = (0);
var inst_45944 = (0);
var state_46151__$1 = (function (){var statearr_46245 = state_46151;
(statearr_46245[(26)] = inst_45941);

(statearr_46245[(19)] = inst_45944);

(statearr_46245[(27)] = inst_45943);

(statearr_46245[(41)] = inst_45935);

(statearr_46245[(20)] = inst_45942);

return statearr_46245;
})();
var statearr_46246_48095 = state_46151__$1;
(statearr_46246_48095[(2)] = null);

(statearr_46246_48095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (38))){
var inst_45987 = (state_46151[(32)]);
var inst_45992 = inst_45987.cljs$lang$protocol_mask$partition0$;
var inst_45993 = (inst_45992 & (64));
var inst_45994 = inst_45987.cljs$core$ISeq$;
var inst_45995 = (cljs.core.PROTOCOL_SENTINEL === inst_45994);
var inst_45996 = ((inst_45993) || (inst_45995));
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_45996)){
var statearr_46247_48098 = state_46151__$1;
(statearr_46247_48098[(1)] = (41));

} else {
var statearr_46248_48099 = state_46151__$1;
(statearr_46248_48099[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (30))){
var inst_45950 = (state_46151[(18)]);
var state_46151__$1 = state_46151;
var statearr_46249_48100 = state_46151__$1;
(statearr_46249_48100[(2)] = inst_45950);

(statearr_46249_48100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (10))){
var inst_45905 = (state_46151[(34)]);
var inst_45905__$1 = (state_46151[(2)]);
var state_46151__$1 = (function (){var statearr_46250 = state_46151;
(statearr_46250[(34)] = inst_45905__$1);

return statearr_46250;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_46151__$1,(11),inst_45905__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_46152 === (18))){
var inst_45944 = (state_46151[(19)]);
var inst_45943 = (state_46151[(27)]);
var inst_45946 = (inst_45944 < inst_45943);
var inst_45947 = inst_45946;
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_45947)){
var statearr_46251_48104 = state_46151__$1;
(statearr_46251_48104[(1)] = (20));

} else {
var statearr_46252_48105 = state_46151__$1;
(statearr_46252_48105[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (52))){
var inst_46060 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
if(cljs.core.truth_(inst_46060)){
var statearr_46253_48106 = state_46151__$1;
(statearr_46253_48106[(1)] = (56));

} else {
var statearr_46254_48107 = state_46151__$1;
(statearr_46254_48107[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (67))){
var inst_46132 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46255_48109 = state_46151__$1;
(statearr_46255_48109[(2)] = inst_46132);

(statearr_46255_48109[(1)] = (61));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (42))){
var state_46151__$1 = state_46151;
var statearr_46256_48111 = state_46151__$1;
(statearr_46256_48111[(2)] = false);

(statearr_46256_48111[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (37))){
var inst_46014 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46257_48113 = state_46151__$1;
(statearr_46257_48113[(2)] = inst_46014);

(statearr_46257_48113[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (63))){
var inst_46080 = (state_46151[(12)]);
var state_46151__$1 = state_46151;
var statearr_46258_48114 = state_46151__$1;
(statearr_46258_48114[(2)] = inst_46080);

(statearr_46258_48114[(1)] = (64));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (8))){
var inst_45900 = (state_46151[(15)]);
var inst_45896 = (state_46151[(14)]);
var inst_45902 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_45900,inst_45896);
var state_46151__$1 = state_46151;
var statearr_46259_48116 = state_46151__$1;
(statearr_46259_48116[(2)] = inst_45902);

(statearr_46259_48116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46152 === (49))){
var inst_46040 = (state_46151[(2)]);
var state_46151__$1 = state_46151;
var statearr_46260_48120 = state_46151__$1;
(statearr_46260_48120[(2)] = inst_46040);

(statearr_46260_48120[(1)] = (17));


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
});})(c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path){
return (function() {
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto____0 = (function (){
var statearr_46261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46261[(0)] = com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto__);

(statearr_46261[(1)] = (1));

return statearr_46261;
});
var com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto____1 = (function (state_46151){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_46151);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e46262){if((e46262 instanceof Object)){
var ex__38790__auto__ = e46262;
var statearr_46263_48160 = state_46151;
(statearr_46263_48160[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48168 = state_46151;
state_46151 = G__48168;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto__ = function(state_46151){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto____1.call(this,state_46151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$process_next_message_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
})();
var state__39086__auto__ = (function (){var statearr_46264 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_46264[(6)] = c__39084__auto__);

return statearr_46264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__45878,map__45878__$1,env,done_signal_STAR_,processing_recheck_timer,active_paths,path))
);

return c__39084__auto__;
});
com.wsscode.pathom.parser.call_parallel_parser = (function com$wsscode$pathom$parser$call_parallel_parser(p__46266,p__46267,tx){
var map__46268 = p__46266;
var map__46268__$1 = (((((!((map__46268 == null))))?(((((map__46268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46268):map__46268);
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46268__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
var map__46269 = p__46267;
var map__46269__$1 = (((((!((map__46269 == null))))?(((((map__46269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46269):map__46269);
var env = map__46269__$1;
var waiting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","waiting","com.wsscode.pathom.parser/waiting",-798662278));
var key_watchers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404));
var max_key_iterations = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103),(10));
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165));
var key_process_timeout_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout-step","com.wsscode.pathom.parser/key-process-timeout-step",202902239));
var entity_path_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.core","entity-path-cache","com.wsscode.pathom.core/entity-path-cache",-1017384397));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (state_46719){
var state_val_46720 = (state_46719[(1)]);
if((state_val_46720 === (121))){
var inst_46571 = (state_46719[(7)]);
var inst_46321 = (state_46719[(8)]);
var inst_46569 = (state_46719[(9)]);
var inst_46580 = (state_46719[(10)]);
var inst_46602 = (state_46719[(11)]);
var inst_46570 = (state_46719[(12)]);
var inst_46568 = (state_46719[(13)]);
var inst_46660 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46661 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_46602];
var inst_46662 = cljs.core.PersistentHashMap.fromArrays(inst_46660,inst_46661);
var inst_46663 = com.wsscode.pathom.trace.trace(inst_46321,inst_46662);
var tmp46721 = inst_46571;
var tmp46722 = inst_46569;
var tmp46723 = inst_46570;
var tmp46724 = inst_46568;
var inst_46568__$1 = tmp46724;
var inst_46569__$1 = tmp46722;
var inst_46570__$1 = tmp46723;
var inst_46571__$1 = tmp46721;
var inst_46572 = inst_46580;
var state_46719__$1 = (function (){var statearr_46725 = state_46719;
(statearr_46725[(7)] = inst_46571__$1);

(statearr_46725[(9)] = inst_46569__$1);

(statearr_46725[(14)] = inst_46663);

(statearr_46725[(12)] = inst_46570__$1);

(statearr_46725[(13)] = inst_46568__$1);

(statearr_46725[(15)] = inst_46572);

return statearr_46725;
})();
var statearr_46726_48178 = state_46719__$1;
(statearr_46726_48178[(2)] = null);

(statearr_46726_48178[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (65))){
var inst_46409 = (state_46719[(16)]);
var inst_46376 = (state_46719[(17)]);
var inst_46465 = cljs.core.contains_QMARK_(inst_46376,inst_46409);
var state_46719__$1 = state_46719;
if(inst_46465){
var statearr_46727_48180 = state_46719__$1;
(statearr_46727_48180[(1)] = (67));

} else {
var statearr_46728_48181 = state_46719__$1;
(statearr_46728_48181[(1)] = (68));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (70))){
var inst_46378 = (state_46719[(18)]);
var inst_46321 = (state_46719[(8)]);
var inst_46387 = (state_46719[(19)]);
var inst_46315 = (state_46719[(20)]);
var inst_46375 = (state_46719[(21)]);
var inst_46408 = (state_46719[(22)]);
var inst_46376 = (state_46719[(17)]);
var inst_46377 = (state_46719[(23)]);
var inst_46477 = com.wsscode.pathom.parser.parallel_process_value(inst_46321,tx,inst_46408,inst_46315,inst_46375,inst_46376,inst_46377,read,mutate,inst_46378,inst_46387);
var inst_46478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46477,(0),null);
var inst_46479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46477,(1),null);
var inst_46480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46477,(2),null);
var inst_46481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46477,(3),null);
var inst_46482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46477,(4),null);
var inst_46375__$1 = inst_46478;
var inst_46376__$1 = inst_46479;
var inst_46377__$1 = inst_46480;
var inst_46378__$1 = inst_46481;
var inst_46379 = inst_46482;
var state_46719__$1 = (function (){var statearr_46729 = state_46719;
(statearr_46729[(18)] = inst_46378__$1);

(statearr_46729[(21)] = inst_46375__$1);

(statearr_46729[(17)] = inst_46376__$1);

(statearr_46729[(23)] = inst_46377__$1);

(statearr_46729[(24)] = inst_46379);

return statearr_46729;
})();
var statearr_46730_48185 = state_46719__$1;
(statearr_46730_48185[(2)] = null);

(statearr_46730_48185[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (62))){
var inst_46445 = (state_46719[(25)]);
var state_46719__$1 = state_46719;
var statearr_46731_48187 = state_46719__$1;
(statearr_46731_48187[(2)] = inst_46445);

(statearr_46731_48187[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (74))){
var state_46719__$1 = state_46719;
var statearr_46732_48190 = state_46719__$1;
(statearr_46732_48190[(1)] = (77));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (110))){
var inst_46568 = (state_46719[(13)]);
var state_46719__$1 = state_46719;
var statearr_46734_48191 = state_46719__$1;
(statearr_46734_48191[(2)] = inst_46568);

(statearr_46734_48191[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (130))){
var inst_46696 = (state_46719[(2)]);
var inst_46697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46696,(0),null);
var inst_46698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46696,(1),null);
var inst_46699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46696,(2),null);
var inst_46700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46696,(3),null);
var inst_46701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46696,(4),null);
var inst_46568 = inst_46697;
var inst_46569 = inst_46698;
var inst_46570 = inst_46699;
var inst_46571 = inst_46700;
var inst_46572 = inst_46701;
var state_46719__$1 = (function (){var statearr_46735 = state_46719;
(statearr_46735[(7)] = inst_46571);

(statearr_46735[(9)] = inst_46569);

(statearr_46735[(12)] = inst_46570);

(statearr_46735[(13)] = inst_46568);

(statearr_46735[(15)] = inst_46572);

return statearr_46735;
})();
var statearr_46736_48193 = state_46719__$1;
(statearr_46736_48193[(2)] = null);

(statearr_46736_48193[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (128))){
var state_46719__$1 = state_46719;
var statearr_46737_48194 = state_46719__$1;
(statearr_46737_48194[(1)] = (131));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (7))){
var inst_46281 = (state_46719[(2)]);
var state_46719__$1 = (function (){var statearr_46739 = state_46719;
(statearr_46739[(26)] = inst_46281);

return statearr_46739;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_46740_48195 = state_46719__$1;
(statearr_46740_48195[(1)] = (8));

} else {
var statearr_46741_48196 = state_46719__$1;
(statearr_46741_48196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (59))){
var inst_46445 = (state_46719[(25)]);
var inst_46321 = (state_46719[(8)]);
var inst_46445__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_46321);
var state_46719__$1 = (function (){var statearr_46742 = state_46719;
(statearr_46742[(25)] = inst_46445__$1);

return statearr_46742;
})();
if(cljs.core.truth_(inst_46445__$1)){
var statearr_46743_48198 = state_46719__$1;
(statearr_46743_48198[(1)] = (61));

} else {
var statearr_46744_48200 = state_46719__$1;
(statearr_46744_48200[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (86))){
var state_46719__$1 = state_46719;
var statearr_46745_48202 = state_46719__$1;
(statearr_46745_48202[(2)] = true);

(statearr_46745_48202[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (20))){
var state_46719__$1 = state_46719;
var statearr_46750_48204 = state_46719__$1;
(statearr_46750_48204[(2)] = key_watchers);

(statearr_46750_48204[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (72))){
var inst_46486 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46751_48205 = state_46719__$1;
(statearr_46751_48205[(2)] = inst_46486);

(statearr_46751_48205[(1)] = (69));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (58))){
var inst_46378 = (state_46719[(18)]);
var inst_46321 = (state_46719[(8)]);
var inst_46409 = (state_46719[(16)]);
var inst_46387 = (state_46719[(19)]);
var inst_46375 = (state_46719[(21)]);
var inst_46376 = (state_46719[(17)]);
var inst_46377 = (state_46719[(23)]);
var inst_46439 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46440 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_46409];
var inst_46441 = cljs.core.PersistentHashMap.fromArrays(inst_46439,inst_46440);
var inst_46442 = com.wsscode.pathom.trace.trace(inst_46321,inst_46441);
var tmp46746 = inst_46378;
var tmp46747 = inst_46375;
var tmp46748 = inst_46376;
var tmp46749 = inst_46377;
var inst_46375__$1 = tmp46747;
var inst_46376__$1 = tmp46748;
var inst_46377__$1 = tmp46749;
var inst_46378__$1 = tmp46746;
var inst_46379 = inst_46387;
var state_46719__$1 = (function (){var statearr_46752 = state_46719;
(statearr_46752[(18)] = inst_46378__$1);

(statearr_46752[(27)] = inst_46442);

(statearr_46752[(21)] = inst_46375__$1);

(statearr_46752[(17)] = inst_46376__$1);

(statearr_46752[(23)] = inst_46377__$1);

(statearr_46752[(24)] = inst_46379);

return statearr_46752;
})();
var statearr_46753_48209 = state_46719__$1;
(statearr_46753_48209[(2)] = null);

(statearr_46753_48209[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (60))){
var inst_46492 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46754_48210 = state_46719__$1;
(statearr_46754_48210[(2)] = inst_46492);

(statearr_46754_48210[(1)] = (54));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (27))){
var inst_46345 = cljs.core.PersistentHashSet.EMPTY;
var state_46719__$1 = state_46719;
var statearr_46755_48211 = state_46719__$1;
(statearr_46755_48211[(2)] = inst_46345);

(statearr_46755_48211[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (1))){
var state_46719__$1 = state_46719;
var statearr_46756_48213 = state_46719__$1;
(statearr_46756_48213[(2)] = null);

(statearr_46756_48213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (69))){
var inst_46488 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46757_48214 = state_46719__$1;
(statearr_46757_48214[(2)] = inst_46488);

(statearr_46757_48214[(1)] = (66));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (101))){
var inst_46579 = (state_46719[(28)]);
var state_46719__$1 = state_46719;
var statearr_46758_48215 = state_46719__$1;
(statearr_46758_48215[(2)] = inst_46579);

(statearr_46758_48215[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (24))){
var inst_46535 = cljs.core.PersistentHashMap.EMPTY;
var state_46719__$1 = (function (){var statearr_46759 = state_46719;
(statearr_46759[(29)] = inst_46535);

return statearr_46759;
})();
if(cljs.core.truth_(waiting)){
var statearr_46760_48216 = state_46719__$1;
(statearr_46760_48216[(1)] = (80));

} else {
var statearr_46761_48217 = state_46719__$1;
(statearr_46761_48217[(1)] = (81));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (102))){
var inst_46601 = (state_46719[(30)]);
var inst_46601__$1 = (state_46719[(2)]);
var inst_46602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46601__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_46719__$1 = (function (){var statearr_46762 = state_46719;
(statearr_46762[(30)] = inst_46601__$1);

(statearr_46762[(11)] = inst_46602);

return statearr_46762;
})();
if(cljs.core.truth_(inst_46601__$1)){
var statearr_46763_48218 = state_46719__$1;
(statearr_46763_48218[(1)] = (103));

} else {
var statearr_46764_48219 = state_46719__$1;
(statearr_46764_48219[(1)] = (104));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (55))){
var inst_46375 = (state_46719[(21)]);
var inst_46411 = (state_46719[(31)]);
var inst_46428 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_46375,inst_46411,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_46719__$1 = state_46719;
var statearr_46765_48221 = state_46719__$1;
(statearr_46765_48221[(2)] = inst_46428);

(statearr_46765_48221[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (85))){
var inst_46561 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46561)){
var statearr_46766_48222 = state_46719__$1;
(statearr_46766_48222[(1)] = (89));

} else {
var statearr_46767_48223 = state_46719__$1;
(statearr_46767_48223[(1)] = (90));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (39))){
var inst_46321 = (state_46719[(8)]);
var inst_46332 = (state_46719[(32)]);
var inst_46286 = (state_46719[(33)]);
var inst_46520 = (state_46719[(2)]);
var inst_46521 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_46522 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_46286];
var inst_46523 = cljs.core.PersistentHashMap.fromArrays(inst_46521,inst_46522);
var inst_46524 = com.wsscode.pathom.trace.trace_leave.cljs$core$IFn$_invoke$arity$3(inst_46321,inst_46332,inst_46523);
var state_46719__$1 = (function (){var statearr_46768 = state_46719;
(statearr_46768[(34)] = inst_46524);

return statearr_46768;
})();
var statearr_46769_48227 = state_46719__$1;
(statearr_46769_48227[(2)] = inst_46520);

(statearr_46769_48227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (88))){
var inst_46558 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46770_48228 = state_46719__$1;
(statearr_46770_48228[(2)] = inst_46558);

(statearr_46770_48228[(1)] = (85));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (46))){
var inst_46386 = (state_46719[(35)]);
var inst_46405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46386);
var state_46719__$1 = state_46719;
var statearr_46771_48229 = state_46719__$1;
(statearr_46771_48229[(2)] = inst_46405);

(statearr_46771_48229[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (4))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46719,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(key_process_timeout_step)){
var statearr_46772_48230 = state_46719__$1;
(statearr_46772_48230[(1)] = (5));

} else {
var statearr_46773_48231 = state_46719__$1;
(statearr_46773_48231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (77))){
var inst_46375 = (state_46719[(21)]);
var state_46719__$1 = state_46719;
var statearr_46774_48234 = state_46719__$1;
(statearr_46774_48234[(2)] = inst_46375);

(statearr_46774_48234[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (106))){
var inst_46604 = (state_46719[(36)]);
var inst_46321 = (state_46719[(8)]);
var inst_46602 = (state_46719[(11)]);
var inst_46568 = (state_46719[(13)]);
var inst_46613 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_46614 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_46602,max_key_iterations];
var inst_46615 = cljs.core.PersistentHashMap.fromArrays(inst_46613,inst_46614);
var inst_46616 = com.wsscode.pathom.trace.trace(inst_46321,inst_46615);
var inst_46618 = cljs.core.contains_QMARK_(inst_46568,inst_46604);
var inst_46619 = (!(inst_46618));
var state_46719__$1 = (function (){var statearr_46775 = state_46719;
(statearr_46775[(37)] = inst_46616);

return statearr_46775;
})();
if(inst_46619){
var statearr_46776_48239 = state_46719__$1;
(statearr_46776_48239[(1)] = (109));

} else {
var statearr_46777_48240 = state_46719__$1;
(statearr_46777_48240[(1)] = (110));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (119))){
var inst_46569 = (state_46719[(9)]);
var inst_46602 = (state_46719[(11)]);
var inst_46658 = cljs.core.contains_QMARK_(inst_46569,inst_46602);
var state_46719__$1 = state_46719;
if(inst_46658){
var statearr_46778_48241 = state_46719__$1;
(statearr_46778_48241[(1)] = (121));

} else {
var statearr_46779_48243 = state_46719__$1;
(statearr_46779_48243[(1)] = (122));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (95))){
var state_46719__$1 = state_46719;
var statearr_46780_48246 = state_46719__$1;
(statearr_46780_48246[(2)] = false);

(statearr_46780_48246[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (54))){
var inst_46494 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46781_48247 = state_46719__$1;
(statearr_46781_48247[(2)] = inst_46494);

(statearr_46781_48247[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (92))){
var inst_46579 = (state_46719[(28)]);
var inst_46572 = (state_46719[(15)]);
var inst_46578 = cljs.core.seq(inst_46572);
var inst_46579__$1 = cljs.core.first(inst_46578);
var inst_46580 = cljs.core.next(inst_46578);
var inst_46582 = (inst_46579__$1 == null);
var inst_46583 = cljs.core.not(inst_46582);
var state_46719__$1 = (function (){var statearr_46782 = state_46719;
(statearr_46782[(28)] = inst_46579__$1);

(statearr_46782[(10)] = inst_46580);

return statearr_46782;
})();
if(inst_46583){
var statearr_46783_48248 = state_46719__$1;
(statearr_46783_48248[(1)] = (94));

} else {
var statearr_46784_48249 = state_46719__$1;
(statearr_46784_48249[(1)] = (95));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (104))){
var inst_46570 = (state_46719[(12)]);
var inst_46689 = cljs.core.seq(inst_46570);
var state_46719__$1 = state_46719;
if(inst_46689){
var statearr_46785_48253 = state_46719__$1;
(statearr_46785_48253[(1)] = (127));

} else {
var statearr_46786_48254 = state_46719__$1;
(statearr_46786_48254[(1)] = (128));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (15))){
var state_46719__$1 = state_46719;
var statearr_46787_48255 = state_46719__$1;
(statearr_46787_48255[(2)] = false);

(statearr_46787_48255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (48))){
var inst_46408 = (state_46719[(22)]);
var inst_46408__$1 = (state_46719[(2)]);
var inst_46409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46408__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var state_46719__$1 = (function (){var statearr_46788 = state_46719;
(statearr_46788[(16)] = inst_46409);

(statearr_46788[(22)] = inst_46408__$1);

return statearr_46788;
})();
if(cljs.core.truth_(inst_46408__$1)){
var statearr_46789_48256 = state_46719__$1;
(statearr_46789_48256[(1)] = (49));

} else {
var statearr_46790_48257 = state_46719__$1;
(statearr_46790_48257[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (50))){
var inst_46377 = (state_46719[(23)]);
var inst_46496 = cljs.core.seq(inst_46377);
var state_46719__$1 = state_46719;
if(inst_46496){
var statearr_46791_48258 = state_46719__$1;
(statearr_46791_48258[(1)] = (73));

} else {
var statearr_46792_48259 = state_46719__$1;
(statearr_46792_48259[(1)] = (74));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (116))){
var inst_46638 = (state_46719[(38)]);
var state_46719__$1 = state_46719;
var statearr_46793_48261 = state_46719__$1;
(statearr_46793_48261[(2)] = inst_46638);

(statearr_46793_48261[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (75))){
var inst_46516 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46794_48262 = state_46719__$1;
(statearr_46794_48262[(2)] = inst_46516);

(statearr_46794_48262[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (99))){
var inst_46593 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46795_48264 = state_46719__$1;
(statearr_46795_48264[(2)] = inst_46593);

(statearr_46795_48264[(1)] = (96));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (21))){
var inst_46312 = cljs.core.PersistentHashMap.EMPTY;
var inst_46313 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_46312);
var state_46719__$1 = state_46719;
var statearr_46796_48265 = state_46719__$1;
(statearr_46796_48265[(2)] = inst_46313);

(statearr_46796_48265[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (31))){
var inst_46368 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46368)){
var statearr_46797_48267 = state_46719__$1;
(statearr_46797_48267[(1)] = (35));

} else {
var statearr_46798_48268 = state_46719__$1;
(statearr_46798_48268[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (113))){
var inst_46321 = (state_46719[(8)]);
var inst_46638 = (state_46719[(38)]);
var inst_46638__$1 = new cljs.core.Keyword("com.wsscode.pathom.parser","key-watchers","com.wsscode.pathom.parser/key-watchers",-1670257404).cljs$core$IFn$_invoke$arity$1(inst_46321);
var state_46719__$1 = (function (){var statearr_46799 = state_46719;
(statearr_46799[(38)] = inst_46638__$1);

return statearr_46799;
})();
if(cljs.core.truth_(inst_46638__$1)){
var statearr_46800_48269 = state_46719__$1;
(statearr_46800_48269[(1)] = (115));

} else {
var statearr_46801_48270 = state_46719__$1;
(statearr_46801_48270[(1)] = (116));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (32))){
var state_46719__$1 = state_46719;
var statearr_46802_48275 = state_46719__$1;
(statearr_46802_48275[(2)] = true);

(statearr_46802_48275[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (40))){
var inst_46386 = (state_46719[(35)]);
var inst_46392 = inst_46386.cljs$lang$protocol_mask$partition0$;
var inst_46393 = (inst_46392 & (64));
var inst_46394 = inst_46386.cljs$core$ISeq$;
var inst_46395 = (cljs.core.PROTOCOL_SENTINEL === inst_46394);
var inst_46396 = ((inst_46393) || (inst_46395));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46396)){
var statearr_46803_48276 = state_46719__$1;
(statearr_46803_48276[(1)] = (43));

} else {
var statearr_46804_48277 = state_46719__$1;
(statearr_46804_48277[(1)] = (44));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (129))){
var inst_46709 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46805_48278 = state_46719__$1;
(statearr_46805_48278[(2)] = inst_46709);

(statearr_46805_48278[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (91))){
var inst_46540 = (state_46719[(39)]);
var inst_46309 = (state_46719[(40)]);
var inst_46542 = (state_46719[(41)]);
var inst_46541 = (state_46719[(42)]);
var inst_46535 = (state_46719[(29)]);
var inst_46566 = (state_46719[(2)]);
var inst_46567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46566,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_46568 = inst_46535;
var inst_46569 = inst_46540;
var inst_46570 = inst_46541;
var inst_46571 = inst_46542;
var inst_46572 = inst_46309;
var state_46719__$1 = (function (){var statearr_46806 = state_46719;
(statearr_46806[(7)] = inst_46571);

(statearr_46806[(9)] = inst_46569);

(statearr_46806[(43)] = inst_46567);

(statearr_46806[(12)] = inst_46570);

(statearr_46806[(13)] = inst_46568);

(statearr_46806[(15)] = inst_46572);

return statearr_46806;
})();
var statearr_46807_48282 = state_46719__$1;
(statearr_46807_48282[(2)] = null);

(statearr_46807_48282[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (117))){
var inst_46643 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46643)){
var statearr_46808_48283 = state_46719__$1;
(statearr_46808_48283[(1)] = (118));

} else {
var statearr_46809_48284 = state_46719__$1;
(statearr_46809_48284[(1)] = (119));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (108))){
var inst_46687 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46810_48286 = state_46719__$1;
(statearr_46810_48286[(2)] = inst_46687);

(statearr_46810_48286[(1)] = (105));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (56))){
var inst_46375 = (state_46719[(21)]);
var state_46719__$1 = state_46719;
var statearr_46811_48289 = state_46719__$1;
(statearr_46811_48289[(2)] = inst_46375);

(statearr_46811_48289[(1)] = (57));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (33))){
var state_46719__$1 = state_46719;
var statearr_46812_48290 = state_46719__$1;
(statearr_46812_48290[(2)] = false);

(statearr_46812_48290[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (13))){
var inst_46303 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46303)){
var statearr_46813_48291 = state_46719__$1;
(statearr_46813_48291[(1)] = (17));

} else {
var statearr_46814_48292 = state_46719__$1;
(statearr_46814_48292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (22))){
var inst_46321 = (state_46719[(8)]);
var inst_46309 = (state_46719[(40)]);
var inst_46281 = (state_46719[(26)]);
var inst_46315 = (state_46719[(20)]);
var inst_46308 = (state_46719[(44)]);
var inst_46286 = (state_46719[(33)]);
var inst_46315__$1 = (state_46719[(2)]);
var inst_46316 = cljs.core.deref(entity_path_cache);
var inst_46317 = cljs.core.PersistentHashMap.EMPTY;
var inst_46318 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_46316,path,inst_46317);
var inst_46319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword("com.wsscode.pathom.parser","parallel?","com.wsscode.pathom.parser/parallel?",2071817193),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),inst_46286], 0));
var inst_46320 = (function (){var key_process_timeout_step__$1 = inst_46281;
var key_process_timeout__$1 = inst_46286;
var map__46276 = inst_46308;
var children = inst_46309;
var key_watchers__$1 = inst_46315__$1;
var path_entity = inst_46318;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__46276,children,key_watchers__$1,path_entity,inst_46321,inst_46309,inst_46281,inst_46315,inst_46308,inst_46286,inst_46315__$1,inst_46316,inst_46317,inst_46318,inst_46319,state_val_46720,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (x){
if(com.wsscode.pathom.parser.atom_QMARK_(x)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(x,((function (key_process_timeout_step__$1,key_process_timeout__$1,map__46276,children,key_watchers__$1,path_entity,inst_46321,inst_46309,inst_46281,inst_46315,inst_46308,inst_46286,inst_46315__$1,inst_46316,inst_46317,inst_46318,inst_46319,state_val_46720,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p1__46265_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,p1__46265_SHARP_], 0));
});})(key_process_timeout_step__$1,key_process_timeout__$1,map__46276,children,key_watchers__$1,path_entity,inst_46321,inst_46309,inst_46281,inst_46315,inst_46308,inst_46286,inst_46315__$1,inst_46316,inst_46317,inst_46318,inst_46319,state_val_46720,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return x;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_entity,x], 0)));
}
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__46276,children,key_watchers__$1,path_entity,inst_46321,inst_46309,inst_46281,inst_46315,inst_46308,inst_46286,inst_46315__$1,inst_46316,inst_46317,inst_46318,inst_46319,state_val_46720,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_46321__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(inst_46319,new cljs.core.Keyword("com.wsscode.pathom.core","entity","com.wsscode.pathom.core/entity",884706031),inst_46320);
var inst_46322 = cljs.core.PersistentHashMap.EMPTY;
var inst_46324 = (function (){var key_process_timeout_step__$1 = inst_46281;
var key_process_timeout__$1 = inst_46286;
var map__46276 = inst_46308;
var children = inst_46309;
var key_watchers__$1 = inst_46315__$1;
var path_entity = inst_46318;
var env__$1 = inst_46321__$1;
return ((function (key_process_timeout_step__$1,key_process_timeout__$1,map__46276,children,key_watchers__$1,path_entity,env__$1,inst_46321,inst_46309,inst_46281,inst_46315,inst_46308,inst_46286,inst_46315__$1,inst_46316,inst_46317,inst_46318,inst_46319,inst_46320,inst_46321__$1,inst_46322,state_val_46720,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function (p__46323){
var map__46815 = p__46323;
var map__46815__$1 = (((((!((map__46815 == null))))?(((((map__46815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46815):map__46815);
var ast = map__46815__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46815__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ast], null);
});
;})(key_process_timeout_step__$1,key_process_timeout__$1,map__46276,children,key_watchers__$1,path_entity,env__$1,inst_46321,inst_46309,inst_46281,inst_46315,inst_46308,inst_46286,inst_46315__$1,inst_46316,inst_46317,inst_46318,inst_46319,inst_46320,inst_46321__$1,inst_46322,state_val_46720,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var inst_46325 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_46324);
var inst_46326 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_46322,inst_46325,inst_46309);
var inst_46327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46321__$1,new cljs.core.Keyword("com.wsscode.pathom.trace","trace*","com.wsscode.pathom.trace/trace*",-80191782));
var state_46719__$1 = (function (){var statearr_46817 = state_46719;
(statearr_46817[(8)] = inst_46321__$1);

(statearr_46817[(20)] = inst_46315__$1);

(statearr_46817[(45)] = inst_46326);

return statearr_46817;
})();
if(cljs.core.truth_(inst_46327)){
var statearr_46818_48300 = state_46719__$1;
(statearr_46818_48300[(1)] = (23));

} else {
var statearr_46819_48301 = state_46719__$1;
(statearr_46819_48301[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (90))){
var inst_46544 = (state_46719[(46)]);
var state_46719__$1 = state_46719;
var statearr_46820_48303 = state_46719__$1;
(statearr_46820_48303[(2)] = inst_46544);

(statearr_46820_48303[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (109))){
var inst_46604 = (state_46719[(36)]);
var inst_46568 = (state_46719[(13)]);
var inst_46621 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_46568,inst_46604,new cljs.core.Keyword("com.wsscode.pathom.core","not-found","com.wsscode.pathom.core/not-found",-1411330137));
var state_46719__$1 = state_46719;
var statearr_46821_48304 = state_46719__$1;
(statearr_46821_48304[(2)] = inst_46621);

(statearr_46821_48304[(1)] = (111));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (36))){
var inst_46351 = (state_46719[(47)]);
var state_46719__$1 = state_46719;
var statearr_46825_48306 = state_46719__$1;
(statearr_46825_48306[(2)] = inst_46351);

(statearr_46825_48306[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (41))){
var state_46719__$1 = state_46719;
var statearr_46826_48307 = state_46719__$1;
(statearr_46826_48307[(2)] = false);

(statearr_46826_48307[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (118))){
var inst_46571 = (state_46719[(7)]);
var inst_46321 = (state_46719[(8)]);
var inst_46569 = (state_46719[(9)]);
var inst_46580 = (state_46719[(10)]);
var inst_46602 = (state_46719[(11)]);
var inst_46570 = (state_46719[(12)]);
var inst_46568 = (state_46719[(13)]);
var inst_46645 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46646 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_46602];
var inst_46647 = cljs.core.PersistentHashMap.fromArrays(inst_46645,inst_46646);
var inst_46648 = com.wsscode.pathom.trace.trace(inst_46321,inst_46647);
var inst_46649 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_46650 = com.wsscode.pathom.parser.watch_pending_key(inst_46321,inst_46602);
var inst_46651 = [inst_46602];
var inst_46652 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_46651);
var inst_46653 = [inst_46650,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_46652];
var inst_46654 = cljs.core.PersistentHashMap.fromArrays(inst_46649,inst_46653);
var inst_46655 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_46570,inst_46654);
var tmp46822 = inst_46571;
var tmp46823 = inst_46569;
var tmp46824 = inst_46568;
var inst_46568__$1 = tmp46824;
var inst_46569__$1 = tmp46823;
var inst_46570__$1 = inst_46655;
var inst_46571__$1 = tmp46822;
var inst_46572 = inst_46580;
var state_46719__$1 = (function (){var statearr_46827 = state_46719;
(statearr_46827[(7)] = inst_46571__$1);

(statearr_46827[(9)] = inst_46569__$1);

(statearr_46827[(48)] = inst_46648);

(statearr_46827[(12)] = inst_46570__$1);

(statearr_46827[(13)] = inst_46568__$1);

(statearr_46827[(15)] = inst_46572);

return statearr_46827;
})();
var statearr_46828_48311 = state_46719__$1;
(statearr_46828_48311[(2)] = null);

(statearr_46828_48311[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (89))){
var inst_46544 = (state_46719[(46)]);
var inst_46563 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46544);
var state_46719__$1 = state_46719;
var statearr_46829_48312 = state_46719__$1;
(statearr_46829_48312[(2)] = inst_46563);

(statearr_46829_48312[(1)] = (91));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (100))){
var inst_46579 = (state_46719[(28)]);
var inst_46598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46579);
var state_46719__$1 = state_46719;
var statearr_46830_48313 = state_46719__$1;
(statearr_46830_48313[(2)] = inst_46598);

(statearr_46830_48313[(1)] = (102));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (131))){
var inst_46568 = (state_46719[(13)]);
var state_46719__$1 = state_46719;
var statearr_46831_48314 = state_46719__$1;
(statearr_46831_48314[(2)] = inst_46568);

(statearr_46831_48314[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (122))){
var state_46719__$1 = state_46719;
var statearr_46832_48315 = state_46719__$1;
(statearr_46832_48315[(1)] = (124));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (43))){
var state_46719__$1 = state_46719;
var statearr_46834_48316 = state_46719__$1;
(statearr_46834_48316[(2)] = true);

(statearr_46834_48316[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (61))){
var inst_46409 = (state_46719[(16)]);
var inst_46376 = (state_46719[(17)]);
var inst_46447 = cljs.core.contains_QMARK_(inst_46376,inst_46409);
var state_46719__$1 = state_46719;
var statearr_46835_48320 = state_46719__$1;
(statearr_46835_48320[(2)] = inst_46447);

(statearr_46835_48320[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (29))){
var inst_46351 = (state_46719[(47)]);
var inst_46357 = inst_46351.cljs$lang$protocol_mask$partition0$;
var inst_46358 = (inst_46357 & (64));
var inst_46359 = inst_46351.cljs$core$ISeq$;
var inst_46360 = (cljs.core.PROTOCOL_SENTINEL === inst_46359);
var inst_46361 = ((inst_46358) || (inst_46360));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46361)){
var statearr_46836_48321 = state_46719__$1;
(statearr_46836_48321[(1)] = (32));

} else {
var statearr_46837_48322 = state_46719__$1;
(statearr_46837_48322[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (44))){
var state_46719__$1 = state_46719;
var statearr_46838_48323 = state_46719__$1;
(statearr_46838_48323[(2)] = false);

(statearr_46838_48323[(1)] = (45));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (93))){
var inst_46713 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46842_48324 = state_46719__$1;
(statearr_46842_48324[(2)] = inst_46713);

(statearr_46842_48324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (6))){
var inst_46279 = com.wsscode.pathom.parser.default_step_fn((1000),(1000));
var state_46719__$1 = state_46719;
var statearr_46843_48327 = state_46719__$1;
(statearr_46843_48327[(2)] = inst_46279);

(statearr_46843_48327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (111))){
var inst_46571 = (state_46719[(7)]);
var inst_46569 = (state_46719[(9)]);
var inst_46580 = (state_46719[(10)]);
var inst_46570 = (state_46719[(12)]);
var inst_46624 = (state_46719[(2)]);
var tmp46839 = inst_46571;
var tmp46840 = inst_46569;
var tmp46841 = inst_46570;
var inst_46568 = inst_46624;
var inst_46569__$1 = tmp46840;
var inst_46570__$1 = tmp46841;
var inst_46571__$1 = tmp46839;
var inst_46572 = inst_46580;
var state_46719__$1 = (function (){var statearr_46847 = state_46719;
(statearr_46847[(7)] = inst_46571__$1);

(statearr_46847[(9)] = inst_46569__$1);

(statearr_46847[(12)] = inst_46570__$1);

(statearr_46847[(13)] = inst_46568);

(statearr_46847[(15)] = inst_46572);

return statearr_46847;
})();
var statearr_46848_48330 = state_46719__$1;
(statearr_46848_48330[(2)] = null);

(statearr_46848_48330[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (28))){
var inst_46309 = (state_46719[(40)]);
var inst_46351 = (state_46719[(47)]);
var inst_46347 = (state_46719[(2)]);
var inst_46348 = cljs.core.PersistentHashSet.EMPTY;
var inst_46349 = cljs.core.PersistentHashMap.EMPTY;
var inst_46350 = cljs.core.seq(inst_46309);
var inst_46351__$1 = cljs.core.first(inst_46350);
var inst_46352 = cljs.core.next(inst_46350);
var inst_46354 = (inst_46351__$1 == null);
var inst_46355 = cljs.core.not(inst_46354);
var state_46719__$1 = (function (){var statearr_46849 = state_46719;
(statearr_46849[(49)] = inst_46348);

(statearr_46849[(50)] = inst_46347);

(statearr_46849[(51)] = inst_46349);

(statearr_46849[(52)] = inst_46352);

(statearr_46849[(47)] = inst_46351__$1);

return statearr_46849;
})();
if(inst_46355){
var statearr_46850_48334 = state_46719__$1;
(statearr_46850_48334[(1)] = (29));

} else {
var statearr_46851_48335 = state_46719__$1;
(statearr_46851_48335[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (64))){
var inst_46378 = (state_46719[(18)]);
var inst_46321 = (state_46719[(8)]);
var inst_46409 = (state_46719[(16)]);
var inst_46387 = (state_46719[(19)]);
var inst_46375 = (state_46719[(21)]);
var inst_46376 = (state_46719[(17)]);
var inst_46377 = (state_46719[(23)]);
var inst_46452 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46453 = [new cljs.core.Keyword("com.wsscode.pathom.parser","external-wait-key","com.wsscode.pathom.parser/external-wait-key",258972266),inst_46409];
var inst_46454 = cljs.core.PersistentHashMap.fromArrays(inst_46452,inst_46453);
var inst_46455 = com.wsscode.pathom.trace.trace(inst_46321,inst_46454);
var inst_46456 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-channel","com.wsscode.pathom.parser/process-channel",1432129963),new cljs.core.Keyword("com.wsscode.pathom.parser","process-source","com.wsscode.pathom.parser/process-source",1341595616),new cljs.core.Keyword("com.wsscode.pathom.parser","provides","com.wsscode.pathom.parser/provides",1167350507)];
var inst_46457 = com.wsscode.pathom.parser.watch_pending_key(inst_46321,inst_46409);
var inst_46458 = [inst_46409];
var inst_46459 = cljs.core.PersistentHashSet.createAsIfByAssoc(inst_46458);
var inst_46460 = [inst_46457,new cljs.core.Keyword("com.wsscode.pathom.parser","pending-key-watch","com.wsscode.pathom.parser/pending-key-watch",-542789163),inst_46459];
var inst_46461 = cljs.core.PersistentHashMap.fromArrays(inst_46456,inst_46460);
var inst_46462 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_46377,inst_46461);
var tmp46844 = inst_46378;
var tmp46845 = inst_46375;
var tmp46846 = inst_46376;
var inst_46375__$1 = tmp46845;
var inst_46376__$1 = tmp46846;
var inst_46377__$1 = inst_46462;
var inst_46378__$1 = tmp46844;
var inst_46379 = inst_46387;
var state_46719__$1 = (function (){var statearr_46852 = state_46719;
(statearr_46852[(18)] = inst_46378__$1);

(statearr_46852[(53)] = inst_46455);

(statearr_46852[(21)] = inst_46375__$1);

(statearr_46852[(17)] = inst_46376__$1);

(statearr_46852[(23)] = inst_46377__$1);

(statearr_46852[(24)] = inst_46379);

return statearr_46852;
})();
var statearr_46853_48339 = state_46719__$1;
(statearr_46853_48339[(2)] = null);

(statearr_46853_48339[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (103))){
var inst_46601 = (state_46719[(30)]);
var inst_46571 = (state_46719[(7)]);
var inst_46321 = (state_46719[(8)]);
var inst_46602 = (state_46719[(11)]);
var inst_46604 = com.wsscode.pathom.parser.ast__GT_out_key(inst_46601);
var inst_46605 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46606 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_46602];
var inst_46607 = cljs.core.PersistentHashMap.fromArrays(inst_46605,inst_46606);
var inst_46608 = com.wsscode.pathom.trace.trace(inst_46321,inst_46607);
var inst_46609 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_46571,inst_46602,(0));
var inst_46610 = (max_key_iterations - (1));
var inst_46611 = (inst_46609 > inst_46610);
var state_46719__$1 = (function (){var statearr_46854 = state_46719;
(statearr_46854[(36)] = inst_46604);

(statearr_46854[(54)] = inst_46608);

return statearr_46854;
})();
if(cljs.core.truth_(inst_46611)){
var statearr_46855_48341 = state_46719__$1;
(statearr_46855_48341[(1)] = (106));

} else {
var statearr_46856_48342 = state_46719__$1;
(statearr_46856_48342[(1)] = (107));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (51))){
var inst_46518 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46857_48343 = state_46719__$1;
(statearr_46857_48343[(2)] = inst_46518);

(statearr_46857_48343[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (25))){
var inst_46715 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46858_48344 = state_46719__$1;
(statearr_46858_48344[(2)] = inst_46715);


cljs.core.async.impl.ioc_helpers.process_exception(state_46719__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (34))){
var inst_46365 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46859_48345 = state_46719__$1;
(statearr_46859_48345[(2)] = inst_46365);

(statearr_46859_48345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (125))){
var state_46719__$1 = state_46719;
var statearr_46860_48346 = state_46719__$1;
(statearr_46860_48346[(2)] = null);

(statearr_46860_48346[(1)] = (126));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (17))){
var inst_46287 = (state_46719[(55)]);
var inst_46305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46287);
var state_46719__$1 = state_46719;
var statearr_46861_48347 = state_46719__$1;
(statearr_46861_48347[(2)] = inst_46305);

(statearr_46861_48347[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (3))){
var inst_46272 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46862_48348 = state_46719__$1;
(statearr_46862_48348[(2)] = inst_46272);


cljs.core.async.impl.ioc_helpers.process_exception(state_46719__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (12))){
var state_46719__$1 = state_46719;
var statearr_46863_48351 = state_46719__$1;
(statearr_46863_48351[(2)] = false);

(statearr_46863_48351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (2))){
var inst_46717 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46719__$1,inst_46717);
} else {
if((state_val_46720 === (66))){
var inst_46490 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46864_48352 = state_46719__$1;
(statearr_46864_48352[(2)] = inst_46490);

(statearr_46864_48352[(1)] = (60));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (107))){
var inst_46604 = (state_46719[(36)]);
var inst_46568 = (state_46719[(13)]);
var inst_46627 = cljs.core.contains_QMARK_(inst_46568,inst_46604);
var inst_46628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46568,inst_46604);
var inst_46629 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_46628);
var inst_46630 = ((inst_46627) && (inst_46629));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46630)){
var statearr_46865_48353 = state_46719__$1;
(statearr_46865_48353[(1)] = (112));

} else {
var statearr_46866_48354 = state_46719__$1;
(statearr_46866_48354[(1)] = (113));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (23))){
var inst_46321 = (state_46719[(8)]);
var inst_46286 = (state_46719[(33)]);
var inst_46329 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_46330 = [new cljs.core.Keyword("com.wsscode.pathom.parser","parse-loop","com.wsscode.pathom.parser/parse-loop",1506208195),inst_46286];
var inst_46331 = cljs.core.PersistentHashMap.fromArrays(inst_46329,inst_46330);
var inst_46332 = com.wsscode.pathom.trace.trace_enter.cljs$core$IFn$_invoke$arity$2(inst_46321,inst_46331);
var inst_46342 = cljs.core.PersistentHashMap.EMPTY;
var state_46719__$1 = (function (){var statearr_46867 = state_46719;
(statearr_46867[(56)] = inst_46342);

(statearr_46867[(32)] = inst_46332);

return statearr_46867;
})();
if(cljs.core.truth_(waiting)){
var statearr_46868_48355 = state_46719__$1;
(statearr_46868_48355[(1)] = (26));

} else {
var statearr_46869_48356 = state_46719__$1;
(statearr_46869_48356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (47))){
var inst_46386 = (state_46719[(35)]);
var state_46719__$1 = state_46719;
var statearr_46870_48358 = state_46719__$1;
(statearr_46870_48358[(2)] = inst_46386);

(statearr_46870_48358[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (35))){
var inst_46351 = (state_46719[(47)]);
var inst_46370 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46351);
var state_46719__$1 = state_46719;
var statearr_46871_48360 = state_46719__$1;
(statearr_46871_48360[(2)] = inst_46370);

(statearr_46871_48360[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (127))){
var inst_46571 = (state_46719[(7)]);
var inst_46321 = (state_46719[(8)]);
var inst_46569 = (state_46719[(9)]);
var inst_46315 = (state_46719[(20)]);
var inst_46570 = (state_46719[(12)]);
var inst_46568 = (state_46719[(13)]);
var inst_46326 = (state_46719[(45)]);
var inst_46694 = com.wsscode.pathom.parser.process_next_message(inst_46321,tx,inst_46569,inst_46326,inst_46570,inst_46571,inst_46315,inst_46568);
var state_46719__$1 = state_46719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46719__$1,(130),inst_46694);
} else {
if((state_val_46720 === (82))){
var inst_46309 = (state_46719[(40)]);
var inst_46544 = (state_46719[(46)]);
var inst_46540 = (state_46719[(2)]);
var inst_46541 = cljs.core.PersistentHashSet.EMPTY;
var inst_46542 = cljs.core.PersistentHashMap.EMPTY;
var inst_46543 = cljs.core.seq(inst_46309);
var inst_46544__$1 = cljs.core.first(inst_46543);
var inst_46545 = cljs.core.next(inst_46543);
var inst_46547 = (inst_46544__$1 == null);
var inst_46548 = cljs.core.not(inst_46547);
var state_46719__$1 = (function (){var statearr_46872 = state_46719;
(statearr_46872[(39)] = inst_46540);

(statearr_46872[(57)] = inst_46545);

(statearr_46872[(41)] = inst_46542);

(statearr_46872[(42)] = inst_46541);

(statearr_46872[(46)] = inst_46544__$1);

return statearr_46872;
})();
if(inst_46548){
var statearr_46873_48362 = state_46719__$1;
(statearr_46873_48362[(1)] = (83));

} else {
var statearr_46874_48363 = state_46719__$1;
(statearr_46874_48363[(1)] = (84));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (76))){
var inst_46503 = (state_46719[(2)]);
var inst_46504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46503,(0),null);
var inst_46505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46503,(1),null);
var inst_46506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46503,(2),null);
var inst_46507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46503,(3),null);
var inst_46508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46503,(4),null);
var inst_46375 = inst_46504;
var inst_46376 = inst_46505;
var inst_46377 = inst_46506;
var inst_46378 = inst_46507;
var inst_46379 = inst_46508;
var state_46719__$1 = (function (){var statearr_46875 = state_46719;
(statearr_46875[(18)] = inst_46378);

(statearr_46875[(21)] = inst_46375);

(statearr_46875[(17)] = inst_46376);

(statearr_46875[(23)] = inst_46377);

(statearr_46875[(24)] = inst_46379);

return statearr_46875;
})();
var statearr_46876_48377 = state_46719__$1;
(statearr_46876_48377[(2)] = null);

(statearr_46876_48377[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (97))){
var state_46719__$1 = state_46719;
var statearr_46880_48378 = state_46719__$1;
(statearr_46880_48378[(2)] = true);

(statearr_46880_48378[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (19))){
var inst_46308 = (state_46719[(44)]);
var inst_46308__$1 = (state_46719[(2)]);
var inst_46309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46308__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var state_46719__$1 = (function (){var statearr_46881 = state_46719;
(statearr_46881[(40)] = inst_46309);

(statearr_46881[(44)] = inst_46308__$1);

return statearr_46881;
})();
if(cljs.core.truth_(key_watchers)){
var statearr_46882_48379 = state_46719__$1;
(statearr_46882_48379[(1)] = (20));

} else {
var statearr_46883_48380 = state_46719__$1;
(statearr_46883_48380[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (57))){
var inst_46378 = (state_46719[(18)]);
var inst_46387 = (state_46719[(19)]);
var inst_46376 = (state_46719[(17)]);
var inst_46377 = (state_46719[(23)]);
var inst_46431 = (state_46719[(2)]);
var tmp46877 = inst_46378;
var tmp46878 = inst_46376;
var tmp46879 = inst_46377;
var inst_46375 = inst_46431;
var inst_46376__$1 = tmp46878;
var inst_46377__$1 = tmp46879;
var inst_46378__$1 = tmp46877;
var inst_46379 = inst_46387;
var state_46719__$1 = (function (){var statearr_46884 = state_46719;
(statearr_46884[(18)] = inst_46378__$1);

(statearr_46884[(21)] = inst_46375);

(statearr_46884[(17)] = inst_46376__$1);

(statearr_46884[(23)] = inst_46377__$1);

(statearr_46884[(24)] = inst_46379);

return statearr_46884;
})();
var statearr_46885_48383 = state_46719__$1;
(statearr_46885_48383[(2)] = null);

(statearr_46885_48383[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (68))){
var state_46719__$1 = state_46719;
var statearr_46886_48384 = state_46719__$1;
(statearr_46886_48384[(1)] = (70));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (11))){
var inst_46287 = (state_46719[(55)]);
var inst_46292 = inst_46287.cljs$lang$protocol_mask$partition0$;
var inst_46293 = (inst_46292 & (64));
var inst_46294 = inst_46287.cljs$core$ISeq$;
var inst_46295 = (cljs.core.PROTOCOL_SENTINEL === inst_46294);
var inst_46296 = ((inst_46293) || (inst_46295));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46296)){
var statearr_46888_48386 = state_46719__$1;
(statearr_46888_48386[(1)] = (14));

} else {
var statearr_46889_48387 = state_46719__$1;
(statearr_46889_48387[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (115))){
var inst_46569 = (state_46719[(9)]);
var inst_46602 = (state_46719[(11)]);
var inst_46640 = cljs.core.contains_QMARK_(inst_46569,inst_46602);
var state_46719__$1 = state_46719;
var statearr_46890_48389 = state_46719__$1;
(statearr_46890_48389[(2)] = inst_46640);

(statearr_46890_48389[(1)] = (117));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (9))){
var state_46719__$1 = state_46719;
var statearr_46895_48390 = state_46719__$1;
(statearr_46895_48390[(2)] = null);

(statearr_46895_48390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (5))){
var state_46719__$1 = state_46719;
var statearr_46896_48392 = state_46719__$1;
(statearr_46896_48392[(2)] = key_process_timeout_step);

(statearr_46896_48392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (112))){
var inst_46571 = (state_46719[(7)]);
var inst_46321 = (state_46719[(8)]);
var inst_46569 = (state_46719[(9)]);
var inst_46580 = (state_46719[(10)]);
var inst_46602 = (state_46719[(11)]);
var inst_46570 = (state_46719[(12)]);
var inst_46568 = (state_46719[(13)]);
var inst_46632 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46633 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-resolved-key","com.wsscode.pathom.parser/skip-resolved-key",456945544),inst_46602];
var inst_46634 = cljs.core.PersistentHashMap.fromArrays(inst_46632,inst_46633);
var inst_46635 = com.wsscode.pathom.trace.trace(inst_46321,inst_46634);
var tmp46891 = inst_46571;
var tmp46892 = inst_46569;
var tmp46893 = inst_46570;
var tmp46894 = inst_46568;
var inst_46568__$1 = tmp46894;
var inst_46569__$1 = tmp46892;
var inst_46570__$1 = tmp46893;
var inst_46571__$1 = tmp46891;
var inst_46572 = inst_46580;
var state_46719__$1 = (function (){var statearr_46897 = state_46719;
(statearr_46897[(7)] = inst_46571__$1);

(statearr_46897[(9)] = inst_46569__$1);

(statearr_46897[(12)] = inst_46570__$1);

(statearr_46897[(13)] = inst_46568__$1);

(statearr_46897[(15)] = inst_46572);

(statearr_46897[(58)] = inst_46635);

return statearr_46897;
})();
var statearr_46898_48395 = state_46719__$1;
(statearr_46898_48395[(2)] = null);

(statearr_46898_48395[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (83))){
var inst_46544 = (state_46719[(46)]);
var inst_46550 = inst_46544.cljs$lang$protocol_mask$partition0$;
var inst_46551 = (inst_46550 & (64));
var inst_46552 = inst_46544.cljs$core$ISeq$;
var inst_46553 = (cljs.core.PROTOCOL_SENTINEL === inst_46552);
var inst_46554 = ((inst_46551) || (inst_46553));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46554)){
var statearr_46899_48396 = state_46719__$1;
(statearr_46899_48396[(1)] = (86));

} else {
var statearr_46900_48397 = state_46719__$1;
(statearr_46900_48397[(1)] = (87));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (14))){
var state_46719__$1 = state_46719;
var statearr_46901_48398 = state_46719__$1;
(statearr_46901_48398[(2)] = true);

(statearr_46901_48398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (45))){
var inst_46400 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46902_48399 = state_46719__$1;
(statearr_46902_48399[(2)] = inst_46400);

(statearr_46902_48399[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (53))){
var inst_46375 = (state_46719[(21)]);
var inst_46411 = (state_46719[(31)]);
var inst_46434 = cljs.core.contains_QMARK_(inst_46375,inst_46411);
var inst_46435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46375,inst_46411);
var inst_46436 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("com.wsscode.pathom.core","reader-error","com.wsscode.pathom.core/reader-error",-803587882),inst_46435);
var inst_46437 = ((inst_46434) && (inst_46436));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46437)){
var statearr_46903_48400 = state_46719__$1;
(statearr_46903_48400[(1)] = (58));

} else {
var statearr_46904_48401 = state_46719__$1;
(statearr_46904_48401[(1)] = (59));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (78))){
var state_46719__$1 = state_46719;
var statearr_46905_48402 = state_46719__$1;
(statearr_46905_48402[(2)] = null);

(statearr_46905_48402[(1)] = (79));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (132))){
var state_46719__$1 = state_46719;
var statearr_46906_48403 = state_46719__$1;
(statearr_46906_48403[(2)] = null);

(statearr_46906_48403[(1)] = (133));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (26))){
var state_46719__$1 = state_46719;
var statearr_46907_48405 = state_46719__$1;
(statearr_46907_48405[(2)] = waiting);

(statearr_46907_48405[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (123))){
var inst_46681 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46908_48406 = state_46719__$1;
(statearr_46908_48406[(2)] = inst_46681);

(statearr_46908_48406[(1)] = (120));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (16))){
var inst_46300 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46909_48407 = state_46719__$1;
(statearr_46909_48407[(2)] = inst_46300);

(statearr_46909_48407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (133))){
var inst_46707 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46910_48408 = state_46719__$1;
(statearr_46910_48408[(2)] = inst_46707);

(statearr_46910_48408[(1)] = (129));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (81))){
var inst_46538 = cljs.core.PersistentHashSet.EMPTY;
var state_46719__$1 = state_46719;
var statearr_46911_48409 = state_46719__$1;
(statearr_46911_48409[(2)] = inst_46538);

(statearr_46911_48409[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (120))){
var inst_46683 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46912_48410 = state_46719__$1;
(statearr_46912_48410[(2)] = inst_46683);

(statearr_46912_48410[(1)] = (114));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (79))){
var inst_46514 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46913_48411 = state_46719__$1;
(statearr_46913_48411[(2)] = inst_46514);

(statearr_46913_48411[(1)] = (75));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (38))){
var inst_46386 = (state_46719[(35)]);
var inst_46379 = (state_46719[(24)]);
var inst_46385 = cljs.core.seq(inst_46379);
var inst_46386__$1 = cljs.core.first(inst_46385);
var inst_46387 = cljs.core.next(inst_46385);
var inst_46389 = (inst_46386__$1 == null);
var inst_46390 = cljs.core.not(inst_46389);
var state_46719__$1 = (function (){var statearr_46914 = state_46719;
(statearr_46914[(19)] = inst_46387);

(statearr_46914[(35)] = inst_46386__$1);

return statearr_46914;
})();
if(inst_46390){
var statearr_46915_48415 = state_46719__$1;
(statearr_46915_48415[(1)] = (40));

} else {
var statearr_46916_48416 = state_46719__$1;
(statearr_46916_48416[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (126))){
var inst_46679 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46917_48417 = state_46719__$1;
(statearr_46917_48417[(2)] = inst_46679);

(statearr_46917_48417[(1)] = (123));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (98))){
var state_46719__$1 = state_46719;
var statearr_46918_48418 = state_46719__$1;
(statearr_46918_48418[(2)] = false);

(statearr_46918_48418[(1)] = (99));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (124))){
var inst_46601 = (state_46719[(30)]);
var inst_46571 = (state_46719[(7)]);
var inst_46321 = (state_46719[(8)]);
var inst_46569 = (state_46719[(9)]);
var inst_46315 = (state_46719[(20)]);
var inst_46580 = (state_46719[(10)]);
var inst_46570 = (state_46719[(12)]);
var inst_46568 = (state_46719[(13)]);
var inst_46670 = com.wsscode.pathom.parser.parallel_process_value(inst_46321,tx,inst_46601,inst_46315,inst_46568,inst_46569,inst_46570,read,mutate,inst_46571,inst_46580);
var inst_46671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46670,(0),null);
var inst_46672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46670,(1),null);
var inst_46673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46670,(2),null);
var inst_46674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46670,(3),null);
var inst_46675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46670,(4),null);
var inst_46568__$1 = inst_46671;
var inst_46569__$1 = inst_46672;
var inst_46570__$1 = inst_46673;
var inst_46571__$1 = inst_46674;
var inst_46572 = inst_46675;
var state_46719__$1 = (function (){var statearr_46919 = state_46719;
(statearr_46919[(7)] = inst_46571__$1);

(statearr_46919[(9)] = inst_46569__$1);

(statearr_46919[(12)] = inst_46570__$1);

(statearr_46919[(13)] = inst_46568__$1);

(statearr_46919[(15)] = inst_46572);

return statearr_46919;
})();
var statearr_46920_48422 = state_46719__$1;
(statearr_46920_48422[(2)] = null);

(statearr_46920_48422[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (87))){
var state_46719__$1 = state_46719;
var statearr_46921_48423 = state_46719__$1;
(statearr_46921_48423[(2)] = false);

(statearr_46921_48423[(1)] = (88));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (30))){
var state_46719__$1 = state_46719;
var statearr_46922_48425 = state_46719__$1;
(statearr_46922_48425[(2)] = false);

(statearr_46922_48425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (73))){
var inst_46378 = (state_46719[(18)]);
var inst_46321 = (state_46719[(8)]);
var inst_46315 = (state_46719[(20)]);
var inst_46375 = (state_46719[(21)]);
var inst_46376 = (state_46719[(17)]);
var inst_46377 = (state_46719[(23)]);
var inst_46326 = (state_46719[(45)]);
var inst_46501 = com.wsscode.pathom.parser.process_next_message(inst_46321,tx,inst_46376,inst_46326,inst_46377,inst_46378,inst_46315,inst_46375);
var state_46719__$1 = state_46719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46719__$1,(76),inst_46501);
} else {
if((state_val_46720 === (96))){
var inst_46596 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46596)){
var statearr_46923_48428 = state_46719__$1;
(statearr_46923_48428[(1)] = (100));

} else {
var statearr_46924_48429 = state_46719__$1;
(statearr_46924_48429[(1)] = (101));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (10))){
var inst_46287 = (state_46719[(55)]);
var inst_46286 = (state_46719[(2)]);
var inst_46287__$1 = com.wsscode.pathom.parser.query__GT_ast(tx);
var inst_46289 = (inst_46287__$1 == null);
var inst_46290 = cljs.core.not(inst_46289);
var state_46719__$1 = (function (){var statearr_46925 = state_46719;
(statearr_46925[(55)] = inst_46287__$1);

(statearr_46925[(33)] = inst_46286);

return statearr_46925;
})();
if(inst_46290){
var statearr_46926_48436 = state_46719__$1;
(statearr_46926_48436[(1)] = (11));

} else {
var statearr_46927_48440 = state_46719__$1;
(statearr_46927_48440[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (18))){
var inst_46287 = (state_46719[(55)]);
var state_46719__$1 = state_46719;
var statearr_46928_48446 = state_46719__$1;
(statearr_46928_48446[(2)] = inst_46287);

(statearr_46928_48446[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (105))){
var inst_46711 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46929_48447 = state_46719__$1;
(statearr_46929_48447[(2)] = inst_46711);

(statearr_46929_48447[(1)] = (93));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (52))){
var inst_46321 = (state_46719[(8)]);
var inst_46409 = (state_46719[(16)]);
var inst_46375 = (state_46719[(21)]);
var inst_46411 = (state_46719[(31)]);
var inst_46420 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("com.wsscode.pathom.parser","max-key-iterations","com.wsscode.pathom.parser/max-key-iterations",-1656113103)];
var inst_46421 = [new cljs.core.Keyword("com.wsscode.pathom.parser","max-iterations-reached","com.wsscode.pathom.parser/max-iterations-reached",677125351),inst_46409,max_key_iterations];
var inst_46422 = cljs.core.PersistentHashMap.fromArrays(inst_46420,inst_46421);
var inst_46423 = com.wsscode.pathom.trace.trace(inst_46321,inst_46422);
var inst_46425 = cljs.core.contains_QMARK_(inst_46375,inst_46411);
var inst_46426 = (!(inst_46425));
var state_46719__$1 = (function (){var statearr_46934 = state_46719;
(statearr_46934[(59)] = inst_46423);

return statearr_46934;
})();
if(inst_46426){
var statearr_46935_48449 = state_46719__$1;
(statearr_46935_48449[(1)] = (55));

} else {
var statearr_46936_48450 = state_46719__$1;
(statearr_46936_48450[(1)] = (56));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (114))){
var inst_46685 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
var statearr_46937_48452 = state_46719__$1;
(statearr_46937_48452[(2)] = inst_46685);

(statearr_46937_48452[(1)] = (108));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (67))){
var inst_46378 = (state_46719[(18)]);
var inst_46321 = (state_46719[(8)]);
var inst_46409 = (state_46719[(16)]);
var inst_46387 = (state_46719[(19)]);
var inst_46375 = (state_46719[(21)]);
var inst_46376 = (state_46719[(17)]);
var inst_46377 = (state_46719[(23)]);
var inst_46467 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46468 = [new cljs.core.Keyword("com.wsscode.pathom.parser","skip-wait-key","com.wsscode.pathom.parser/skip-wait-key",-1559475001),inst_46409];
var inst_46469 = cljs.core.PersistentHashMap.fromArrays(inst_46467,inst_46468);
var inst_46470 = com.wsscode.pathom.trace.trace(inst_46321,inst_46469);
var tmp46930 = inst_46378;
var tmp46931 = inst_46375;
var tmp46932 = inst_46376;
var tmp46933 = inst_46377;
var inst_46375__$1 = tmp46931;
var inst_46376__$1 = tmp46932;
var inst_46377__$1 = tmp46933;
var inst_46378__$1 = tmp46930;
var inst_46379 = inst_46387;
var state_46719__$1 = (function (){var statearr_46938 = state_46719;
(statearr_46938[(18)] = inst_46378__$1);

(statearr_46938[(60)] = inst_46470);

(statearr_46938[(21)] = inst_46375__$1);

(statearr_46938[(17)] = inst_46376__$1);

(statearr_46938[(23)] = inst_46377__$1);

(statearr_46938[(24)] = inst_46379);

return statearr_46938;
})();
var statearr_46939_48455 = state_46719__$1;
(statearr_46939_48455[(2)] = null);

(statearr_46939_48455[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (71))){
var state_46719__$1 = state_46719;
var statearr_46940_48458 = state_46719__$1;
(statearr_46940_48458[(2)] = null);

(statearr_46940_48458[(1)] = (72));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (42))){
var inst_46403 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46403)){
var statearr_46941_48459 = state_46719__$1;
(statearr_46941_48459[(1)] = (46));

} else {
var statearr_46942_48460 = state_46719__$1;
(statearr_46942_48460[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (80))){
var state_46719__$1 = state_46719;
var statearr_46943_48462 = state_46719__$1;
(statearr_46943_48462[(2)] = waiting);

(statearr_46943_48462[(1)] = (82));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (37))){
var inst_46348 = (state_46719[(49)]);
var inst_46309 = (state_46719[(40)]);
var inst_46342 = (state_46719[(56)]);
var inst_46347 = (state_46719[(50)]);
var inst_46349 = (state_46719[(51)]);
var inst_46373 = (state_46719[(2)]);
var inst_46374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46373,new cljs.core.Keyword(null,"key","key",-1516042587));
var inst_46375 = inst_46342;
var inst_46376 = inst_46347;
var inst_46377 = inst_46348;
var inst_46378 = inst_46349;
var inst_46379 = inst_46309;
var state_46719__$1 = (function (){var statearr_46944 = state_46719;
(statearr_46944[(18)] = inst_46378);

(statearr_46944[(61)] = inst_46374);

(statearr_46944[(21)] = inst_46375);

(statearr_46944[(17)] = inst_46376);

(statearr_46944[(23)] = inst_46377);

(statearr_46944[(24)] = inst_46379);

return statearr_46944;
})();
var statearr_46945_48463 = state_46719__$1;
(statearr_46945_48463[(2)] = null);

(statearr_46945_48463[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (63))){
var inst_46450 = (state_46719[(2)]);
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46450)){
var statearr_46946_48464 = state_46719__$1;
(statearr_46946_48464[(1)] = (64));

} else {
var statearr_46947_48465 = state_46719__$1;
(statearr_46947_48465[(1)] = (65));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (94))){
var inst_46579 = (state_46719[(28)]);
var inst_46585 = inst_46579.cljs$lang$protocol_mask$partition0$;
var inst_46586 = (inst_46585 & (64));
var inst_46587 = inst_46579.cljs$core$ISeq$;
var inst_46588 = (cljs.core.PROTOCOL_SENTINEL === inst_46587);
var inst_46589 = ((inst_46586) || (inst_46588));
var state_46719__$1 = state_46719;
if(cljs.core.truth_(inst_46589)){
var statearr_46948_48468 = state_46719__$1;
(statearr_46948_48468[(1)] = (97));

} else {
var statearr_46949_48470 = state_46719__$1;
(statearr_46949_48470[(1)] = (98));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (8))){
var inst_46281 = (state_46719[(26)]);
var inst_46283 = (inst_46281.cljs$core$IFn$_invoke$arity$2 ? inst_46281.cljs$core$IFn$_invoke$arity$2(env,key_process_timeout) : inst_46281.call(null,env,key_process_timeout));
var state_46719__$1 = state_46719;
var statearr_46950_48471 = state_46719__$1;
(statearr_46950_48471[(2)] = inst_46283);

(statearr_46950_48471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (49))){
var inst_46378 = (state_46719[(18)]);
var inst_46321 = (state_46719[(8)]);
var inst_46409 = (state_46719[(16)]);
var inst_46408 = (state_46719[(22)]);
var inst_46411 = com.wsscode.pathom.parser.ast__GT_out_key(inst_46408);
var inst_46412 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_46413 = [new cljs.core.Keyword("com.wsscode.pathom.parser","process-key","com.wsscode.pathom.parser/process-key",1272337224),inst_46409];
var inst_46414 = cljs.core.PersistentHashMap.fromArrays(inst_46412,inst_46413);
var inst_46415 = com.wsscode.pathom.trace.trace(inst_46321,inst_46414);
var inst_46416 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(inst_46378,inst_46409,(0));
var inst_46417 = (max_key_iterations - (1));
var inst_46418 = (inst_46416 > inst_46417);
var state_46719__$1 = (function (){var statearr_46951 = state_46719;
(statearr_46951[(31)] = inst_46411);

(statearr_46951[(62)] = inst_46415);

return statearr_46951;
})();
if(cljs.core.truth_(inst_46418)){
var statearr_46952_48473 = state_46719__$1;
(statearr_46952_48473[(1)] = (52));

} else {
var statearr_46953_48474 = state_46719__$1;
(statearr_46953_48474[(1)] = (53));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46720 === (84))){
var state_46719__$1 = state_46719;
var statearr_46954_48475 = state_46719__$1;
(statearr_46954_48475[(2)] = false);

(statearr_46954_48475[(1)] = (85));


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
});})(c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path){
return (function() {
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto____0 = (function (){
var statearr_46955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46955[(0)] = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto__);

(statearr_46955[(1)] = (1));

return statearr_46955;
});
var com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto____1 = (function (state_46719){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_46719);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e46956){if((e46956 instanceof Object)){
var ex__38790__auto__ = e46956;
var statearr_46957_48498 = state_46719;
(statearr_46957_48498[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48499 = state_46719;
state_46719 = G__48499;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto__ = function(state_46719){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto____1.call(this,state_46719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$call_parallel_parser_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
})();
var state__39086__auto__ = (function (){var statearr_46958 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_46958[(6)] = c__39084__auto__);

return statearr_46958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__46268,map__46268__$1,read,mutate,map__46269,map__46269__$1,env,waiting,key_watchers,max_key_iterations,key_process_timeout,key_process_timeout_step,entity_path_cache,path))
);

return c__39084__auto__;
});
com.wsscode.pathom.parser.parallel_parser = (function com$wsscode$pathom$parser$parallel_parser(p__46959){
var map__46960 = p__46959;
var map__46960__$1 = (((((!((map__46960 == null))))?(((((map__46960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46960):map__46960);
var pconfig = map__46960__$1;
var add_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46960__$1,new cljs.core.Keyword(null,"add-error","add-error",-1195330235));
return ((function (map__46960,map__46960__$1,pconfig,add_error){
return (function com$wsscode$pathom$parser$parallel_parser_$_self(p__46962,tx){
var map__46963 = p__46962;
var map__46963__$1 = (((((!((map__46963 == null))))?(((((map__46963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46963):map__46963);
var env = map__46963__$1;
var key_process_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46963__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),(60000));
var active_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46963__$1,new cljs.core.Keyword("com.wsscode.pathom.parser","active-paths","com.wsscode.pathom.parser/active-paths",457466204));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46963__$1,new cljs.core.Keyword("com.wsscode.pathom.core","path","com.wsscode.pathom.core/path",-1532419661));
var c__39084__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__39084__auto__,map__46963,map__46963__$1,env,key_process_timeout,active_paths,path,map__46960,map__46960__$1,pconfig,add_error){
return (function (){
var f__39085__auto__ = (function (){var switch__38786__auto__ = ((function (c__39084__auto__,map__46963,map__46963__$1,env,key_process_timeout,active_paths,path,map__46960,map__46960__$1,pconfig,add_error){
return (function (state_47008){
var state_val_47009 = (state_47008[(1)]);
if((state_val_47009 === (7))){
var inst_46984 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
return cljs.core.async.ioc_alts_BANG_(state_47008__$1,(8),inst_46984);
} else {
if((state_val_47009 === (1))){
var state_47008__$1 = state_47008;
var statearr_47010_48505 = state_47008__$1;
(statearr_47010_48505[(2)] = null);

(statearr_47010_48505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (4))){
var inst_46974 = (state_47008[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47008,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_46969 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.conj,path);
var inst_46973 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"parser","parser",-1543495310),com$wsscode$pathom$parser$parallel_parser_$_self,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165),key_process_timeout], 0));
var inst_46974__$1 = com.wsscode.pathom.parser.call_parallel_parser(pconfig,inst_46973,tx);
var inst_46976 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46977 = [inst_46974__$1];
var inst_46978 = (new cljs.core.PersistentVector(null,1,(5),inst_46976,inst_46977,null));
var state_47008__$1 = (function (){var statearr_47011 = state_47008;
(statearr_47011[(8)] = inst_46978);

(statearr_47011[(9)] = inst_46969);

(statearr_47011[(7)] = inst_46974__$1);

return statearr_47011;
})();
if(cljs.core.truth_(key_process_timeout)){
var statearr_47012_48508 = state_47008__$1;
(statearr_47012_48508[(1)] = (5));

} else {
var statearr_47013_48509 = state_47008__$1;
(statearr_47013_48509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (6))){
var inst_46978 = (state_47008[(8)]);
var state_47008__$1 = state_47008;
var statearr_47014_48511 = state_47008__$1;
(statearr_47014_48511[(2)] = inst_46978);

(statearr_47014_48511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (3))){
var inst_46965 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
var statearr_47015_48512 = state_47008__$1;
(statearr_47015_48512[(2)] = inst_46965);


cljs.core.async.impl.ioc_helpers.process_exception(state_47008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (2))){
var inst_47006 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47008__$1,inst_47006);
} else {
if((state_val_47009 === (11))){
var inst_47004 = (state_47008[(2)]);
var state_47008__$1 = state_47008;
var statearr_47016_48513 = state_47008__$1;
(statearr_47016_48513[(2)] = inst_47004);


cljs.core.async.impl.ioc_helpers.process_exception(state_47008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (9))){
var inst_46987 = (state_47008[(10)]);
var state_47008__$1 = state_47008;
var statearr_47017_48515 = state_47008__$1;
(statearr_47017_48515[(2)] = inst_46987);

(statearr_47017_48515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (5))){
var inst_46978 = (state_47008[(8)]);
var inst_46980 = cljs.core.async.timeout(key_process_timeout);
var inst_46981 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_46978,inst_46980);
var state_47008__$1 = state_47008;
var statearr_47018_48518 = state_47008__$1;
(statearr_47018_48518[(2)] = inst_46981);

(statearr_47018_48518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (10))){
var inst_46993 = [new cljs.core.Keyword("com.wsscode.pathom.trace","event","com.wsscode.pathom.trace/event",1287398983),new cljs.core.Keyword("com.wsscode.pathom.parser","key-process-timeout","com.wsscode.pathom.parser/key-process-timeout",-1793561165)];
var inst_46994 = [new cljs.core.Keyword("com.wsscode.pathom.parser","timeout-reach","com.wsscode.pathom.parser/timeout-reach",1835951243),key_process_timeout];
var inst_46995 = cljs.core.PersistentHashMap.fromArrays(inst_46993,inst_46994);
var inst_46996 = com.wsscode.pathom.trace.trace(env,inst_46995);
var inst_46997 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_46998 = [key_process_timeout];
var inst_46999 = cljs.core.PersistentHashMap.fromArrays(inst_46997,inst_46998);
var inst_47000 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Parallel read timeout",inst_46999);
var inst_47001 = (add_error.cljs$core$IFn$_invoke$arity$2 ? add_error.cljs$core$IFn$_invoke$arity$2(env,inst_47000) : add_error.call(null,env,inst_47000));
var inst_47002 = cljs.core.PersistentHashMap.EMPTY;
var state_47008__$1 = (function (){var statearr_47019 = state_47008;
(statearr_47019[(11)] = inst_47001);

(statearr_47019[(12)] = inst_46996);

return statearr_47019;
})();
var statearr_47020_48520 = state_47008__$1;
(statearr_47020_48520[(2)] = inst_47002);

(statearr_47020_48520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47009 === (8))){
var inst_46974 = (state_47008[(7)]);
var inst_46986 = (state_47008[(2)]);
var inst_46987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46986,(0),null);
var inst_46988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46986,(1),null);
var inst_46989 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(active_paths,cljs.core.disj,path);
var inst_46990 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46974,inst_46988);
var state_47008__$1 = (function (){var statearr_47021 = state_47008;
(statearr_47021[(10)] = inst_46987);

(statearr_47021[(13)] = inst_46989);

return statearr_47021;
})();
if(inst_46990){
var statearr_47022_48523 = state_47008__$1;
(statearr_47022_48523[(1)] = (9));

} else {
var statearr_47023_48524 = state_47008__$1;
(statearr_47023_48524[(1)] = (10));

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
});})(c__39084__auto__,map__46963,map__46963__$1,env,key_process_timeout,active_paths,path,map__46960,map__46960__$1,pconfig,add_error))
;
return ((function (switch__38786__auto__,c__39084__auto__,map__46963,map__46963__$1,env,key_process_timeout,active_paths,path,map__46960,map__46960__$1,pconfig,add_error){
return (function() {
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto__ = null;
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto____0 = (function (){
var statearr_47024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47024[(0)] = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto__);

(statearr_47024[(1)] = (1));

return statearr_47024;
});
var com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto____1 = (function (state_47008){
while(true){
var ret_value__38788__auto__ = (function (){try{while(true){
var result__38789__auto__ = switch__38786__auto__(state_47008);
if(cljs.core.keyword_identical_QMARK_(result__38789__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38789__auto__;
}
break;
}
}catch (e47025){if((e47025 instanceof Object)){
var ex__38790__auto__ = e47025;
var statearr_47026_48546 = state_47008;
(statearr_47026_48546[(5)] = ex__38790__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38788__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48547 = state_47008;
state_47008 = G__48547;
continue;
} else {
return ret_value__38788__auto__;
}
break;
}
});
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto__ = function(state_47008){
switch(arguments.length){
case 0:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto____0.call(this);
case 1:
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto____1.call(this,state_47008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$0 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto____0;
com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto__.cljs$core$IFn$_invoke$arity$1 = com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto____1;
return com$wsscode$pathom$parser$parallel_parser_$_self_$_state_machine__38787__auto__;
})()
;})(switch__38786__auto__,c__39084__auto__,map__46963,map__46963__$1,env,key_process_timeout,active_paths,path,map__46960,map__46960__$1,pconfig,add_error))
})();
var state__39086__auto__ = (function (){var statearr_47027 = (f__39085__auto__.cljs$core$IFn$_invoke$arity$0 ? f__39085__auto__.cljs$core$IFn$_invoke$arity$0() : f__39085__auto__.call(null));
(statearr_47027[(6)] = c__39084__auto__);

return statearr_47027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39086__auto__);
});})(c__39084__auto__,map__46963,map__46963__$1,env,key_process_timeout,active_paths,path,map__46960,map__46960__$1,pconfig,add_error))
);

return c__39084__auto__;
});
;})(map__46960,map__46960__$1,pconfig,add_error))
});
com.wsscode.pathom.parser.unique_ident_QMARK_ = (function com$wsscode$pathom$parser$unique_ident_QMARK_(x){
return ((cljs.core.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second(x))));
});

//# sourceMappingURL=com.wsscode.pathom.parser.js.map
